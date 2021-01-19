const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

// Config variables
const config = require('config');
const url = config.get('url');

const QRCode = require("qrcode");

// Load Models
const Board = require('../../models/Board');
const Profile = require('../../models/Profile');


// @route GET api/boards/me
// @desc Ge current user's boards
// @access Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

        console.log('PROFILE');
        console.log(profile);


        let boards = await Board.find({ profile: profile.id }).populate('scan_list.user', ['first_name', 'last_name', 'email']);
        console.log('FETCHED Boards');
        console.log(boards);


        if(!boards.length === 0) {
            return res.status(400).json({ msg: 'This user has not create anything' });
        }

        res.json(boards);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');   
    }
});

//@route GET /:id
//@desc Get single board by id
router.get('/:id', async (req, res) => {
    try {
        const board = await Board.findById(req.params.id).populate('scan_list.user', ['first_name', 'last_name', 'email']);

        if(!board) {
            return res.status(404).json({ msg: 'Board not found' });
        }

        res.json(board);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});

// @route POST api/categories
// @desc Create A Board
// @access Private
router.post('/', [ auth, [ 
        check('name', 'Name is required').not().isEmpty(),
    ]], async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            name,
            private
        } = req.body;

        // Get fields
        const boardFields = {};
        if(name) boardFields.name = name;
        if(private) boardFields.private = private;

        try {
            const profile = await Profile.findOne({ user: req.user.id });

            boardFields.profile = profile.id;
            
            // Create
            let newBoard = new Board(boardFields);

            const qrCodePng = await QRCode.toDataURL(url + newBoard._id.toString())
            console.log(qrCodePng);

            newBoard.url = qrCodePng;
        
            await newBoard.save();
            res.json(newBoard);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route POST api/boards/edit/:id
// @desc Edit Board
// @access Private
router.post('/edit/:id', [ auth, [
    check('name', 'Name is required').not().isEmpty()
    ]], async(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array() });
        }

        const {
            name,
            private
        } = req.body;

        // Get fields
        const boardFields = {};
        if(name) boardFields.name = name;
        if(private) boardFields.private = private;

        try {
            console.log('EDIT BOARD')
        
            let board = await Board.findById(req.params.id);
    
            if(!board) {
                return res.status(404).json({ msg: 'Board not found' });
            }
    
            // Update
            board = await Board.findOneAndUpdate(
                { _id: req.params.id }, 
                { $set: boardFields }, 
                { new: true }
            );

            return res.json(board);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route DELETE api/boards/:d
// @desc Delete board
router.delete('/:id', auth, async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if(!category) {
            return res.status(404).json({msg: 'Category not found'});
        }

        await category.remove();
        res.json({ msg: 'Category Deleted'})
    } catch (err) {
        console.error(err.message);
        if(err.name == 'CastError') {
            return res.status(404).json({ msg: 'Product not found' });
        }
        res.status(500).send('Server Error');
    }
});

// Update scan list to 0
router.post('/reset-scan-list/:id', async (req, res) => {
    console.log('RESETING SCAN LIST');
    try {
        const board = await Board.findById(req.params.id);
 
        const boardFields = {};
        boardFields.scan_num = 0;
        boardFields.scan_list = [];

        // Update
        await Board.findOneAndUpdate(
            { _id: board.id }, 
            { $set: boardFields }, 
            { new: true }
        );

        res.send('SUCCESS');
    } catch (err) {
        console.log(err);
    }
});

// ---- Interactions -----

// @route PUT api/boards/scan/:id
// @desc Scan a Board Get Added To List
// @access Private
router.put('/scan/:id', auth, async (req, res) => {
    try {
        const board = await Board.findById(req.params.id);

        if(board.scan_list.length > 0) {
            // Check if board already scanned by same user
            if(board.scan_list.filter(scan => scan.user.toString() === req.user.id).length > 0) {
                res.json(board.scan_list);
            } else {
                board.scan_list.unshift({ user: req.user.id });
            }
        } else {
            board.scan_list.unshift({ user: req.user.id });
        }

        await board.save();

        const boardFields = {};
        boardFields.scan_num = board.scan_list.length;

        await Board.findOneAndUpdate(
            { _id: board.id }, 
            { $set: boardFields }, 
            { new: true }
        );

        res.json(board.scan_list);
    } catch (err) {
        console.error(err.message);
        
        res.status(500).send('Server Error'); 
    }
})

module.exports = router;

