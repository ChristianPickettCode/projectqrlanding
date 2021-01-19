const express = require('express');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');


// @route GET api/profile/me
// @desc Ge current user's profile
// @access Private
router.get('/me', auth, async (req, res) => {
    try {
        let profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name']);

        if(!profile) {
            // Build profile object
            const profileFields = {};
            profileFields.user = req.user.id;

            // Create
            profile = new Profile(profileFields);
            
            await profile.save();
            res.json(profile);
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');   
    }
});

// @route GET api/profile/me
// @desc Get profile by id
// @access Private
router.get('/:id', async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id).populate('user', ['name']);

        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');   
    }
});

// @route POST api/profile
// @desc Create or update user profile
// @access Private
router.post('/', auth, async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array() });
        }

        const {
            registration_complete,
            gender
        } = req.body;

        // Build profile object
        const profileFields = {};
        profileFields.user = req.user.id;
        profileFields.gender = gender;
        if(registration_complete) profileFields.registration_complete = registration_complete;

        try {
            let profile = await Profile.findOne({ user: req.user.id });

            if(profile) {
                // Update
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id }, 
                    { $set: profileFields }, 
                    { new: true }
                );

                return res.json(profile);
            }

            // Create
            profile = new Profile(profileFields);
            
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }   
    }
);

// @route GET api/profile/user/:user_id
// @desc Get profile by user id
// @access Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['first_name', 'last_name']);

        if(!profile) return res.status(400).json({ msg: 'Profile not found' });

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId') {
            return res.status(400).json({msg: 'Profile not found'});
        }
        res.status(500).send('Servor Error');
    }
});

// @route DELETE api/profile
// @desc Delete profile, user, & rest of their data
// @access Private
router.delete('/', auth, async (req, res) => {
    try {
        // Remove Profile
        await Profile.findOneAndRemove({ user: req.user.id });

        await User.findOneAndRemove({ _id: req.user.id });

        res.json({msg: 'Profile & User deleted'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Servor Error');
    }
});


module.exports = router;