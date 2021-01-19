import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Link, withRouter } from 'react-router-dom';

import qrPNG from '../../utils/imgs/frame.png';

const QrBoard = ({ board }) => {
    return (
        <div className="qr-manage-code">
            <div className="qr-manage-code--row-first">
                <div className="qr-manage-code__type">
                    Website
                </div>
                <span className="qr-manage-code__type-icon icon">
                    <i class="fas fa-qrcode"></i>
                </span>
                <div>
                    <div className="qr-manage-code__title ng-binding qr-manage-code__title--editable">
                        {board && board.name}
                    </div>
                </div>
                <div className="qr-manage-code--row-first--col-left">
                    <span className="qr-manage-code__folder-icon icon-qr-folder-outline">
                        <i class="fas fa-link"></i>
                    </span>
                    <div className="qr-manage-code__folder">
                        <span className="qr-manage-code__folder-name">
                            <a className="qr-manage-code__url-link">
                                {board && `http://localhost:3000/${board._id}`}
                            </a>
                        </span>
                    </div>
                    <div className="qr-manage-code__date">
                        <span className="qr-manage-code__date-icon icon-business-time">
                            <i class="far fa-clock"></i>
                        </span>
                        {board && moment(board.date).fromNow()}
                    </div>
                </div>
                <div className="qr-manage-code--row-first--col-right">
                    <span className="qr-manage-code__status">
                        Paused
                    </span>
                </div>
                <div className="qr-manage-code--row-second">
                    <div className="qr-manage-code--row-second--col-left">
                        <div className="qr-manage-code__stats">
                            <div className="qr-manage-code__scans">
                                {board && board.scan_num}
                            </div>
                            <div className="qr-manage-code__scans-label">
                                Scans
                            </div>
                            <Link className="qr-manage-code__insights" to={"/details/" + board._id}>
                                Details
                                <span className="">
                                    <i class="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </Link>
                        </div>
                        <div className="qr-manage-code__qr">
                            <div className="qr-code-image">
                                <img className="qr-code-image__image" src={board && board.url} />
                            </div>
                        </div>
                    </div>
                    <div className="qr-manage-code--row-second--col-right">
                        <div className="qr-manage-code__download">
                            <div className="qr-manage-download--new">
                                <div className="qr-manage-download">
                                    <button className="qr-manage-download__button">
                                        Activate
                                    </button>
                                </div>
                                <div className="qr-manage-download__actions">
                                    <button className="qr-manage-download__actions-more">
                                        <span className="qr-manage-download__icon icon icon-menu-vertical">
                                            <i class="fas fa-ellipsis-v"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

QrBoard.propTypes = {

}

export default QrBoard
