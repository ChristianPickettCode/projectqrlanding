import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBoards } from '../actions/boardActions';

import AuthModal from '../components/modals/AuthModal';
import QrBoard from '../components/page_components/QrBoard';
import Spinner from '../components/common/Spinner';

import qrPNG from '../utils/imgs/frame.png';

const Dashboard = ({
    auth: {
        user, 
        isAuthenticated, 
        loading
    },
    board,
    getBoards
}) => {
    // Nav underline Table
    const [tableShow1, setTableShow1] = useState('all');

    useEffect(() => {
        if(user) {
            getBoards();
        }
    }, [user]);

    let boardList;

    if(board.boards === null || board.loading) {
        boardList = <Spinner />;
    }
    else {
        if(board.boards.length > 0) {
            boardList = board.boards.map(board => {
                return (
                    <QrBoard key={board._id} board={board} />
                )
            })
        }
        else {
            // boardList = <Title name="No boards" title="Available" />
            boardList = (
                <div className="no-rides">
                    <h1>No QR Codes to display yet...</h1>
                    <h2>Your QR Codes will display here</h2>
                </div>
            );
        }
    }

    return (
        <Fragment>
            <ul class="nav-underline store">
                <div onClick={e => setTableShow1('all')} className={tableShow1 === "all" && "active"}><li><i class="fas fa-list"></i><p>All</p></li></div>
                <div onClick={e => setTableShow1('active')} className={tableShow1 === "active" && "active"}><li><i class="far fa-play-circle"></i><p>Active</p></li></div>
                <div onClick={e => setTableShow1('paused')} className={tableShow1 === "paused" && "active"}><li><i class="far fa-pause-circle"></i><p>Paused</p></li></div>
            </ul>
            <div className="qr-manage-content__items">
                {boardList}
            </div>

            {!loading && !isAuthenticated ? <AuthModal /> : null }
        </Fragment>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    board: PropTypes.object.isRequired,
    getBoards: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    board: state.board
});

export default connect(mapStateToProps, { getBoards })(withRouter(Dashboard));
