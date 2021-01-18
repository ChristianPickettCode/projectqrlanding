import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import qrPNG from '../utils/imgs/frame.png';

const Dashboard = props => {
    return (
        <Fragment>
            <ul class="nav-underline store">
                <div className="active"><li><i class="fas fa-list"></i><p>All</p></li></div>
                <div><li><i class="far fa-play-circle"></i><p>Active</p></li></div>
                <div><li><i class="far fa-pause-circle"></i><p>Paused</p></li></div>
            </ul>
            <div className="qr-manage-content__items">
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
                                https://www.google.com
                            </div>
                        </div>
                        <div className="qr-manage-code--row-first--col-left">
                            <span className="qr-manage-code__folder-icon icon-qr-folder-outline">
                                <i class="fas fa-link"></i>
                            </span>
                            <div className="qr-manage-code__folder">
                                <span className="qr-manage-code__folder-name">
                                    <a className="qr-manage-code__url-link">
                                        qrco.de/bbukrE
                                    </a>
                                </span>
                            </div>
                            <div className="qr-manage-code__date">
                                <span className="qr-manage-code__date-icon icon-business-time">
                                    <i class="far fa-clock"></i>
                                </span>
                                Jan 17, 2021
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
                                        0
                                    </div>
                                    <div className="qr-manage-code__scans-label">
                                        Scans
                                    </div>
                                    <a className="qr-manage-code__insights" href="/">
                                        Details
                                        <span className="">
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="qr-manage-code__qr">
                                    <div className="qr-code-image">
                                        <img className="qr-code-image__image" src={qrPNG} />
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
                <div className="qr-manage-code">
                    <div className="qr-manage-code--row-first">
                        <div className="qr-manage-code__type">
                            Website
                        </div>
                        <span className="qr-manage-code__type-icon icon">
                            <i class="fas fa-qrcode"></i>
                        </span>
                        <div>
                            <div className="qr-manage-code__title qr-manage-code__title--editable">
                                https://www.google.com
                            </div>
                        </div>
                        <div className="qr-manage-code--row-first--col-left">
                            <span className="qr-manage-code__folder-icon icon-qr-folder-outline">
                                <i class="fas fa-link"></i>
                            </span>
                            <div className="qr-manage-code__folder">
                                <span className="qr-manage-code__folder-name">
                                    <a className="qr-manage-code__url-link">
                                        qrco.de/bbukrE
                                    </a>
                                </span>
                            </div>
                            <div className="qr-manage-code__date">
                                <span className="qr-manage-code__date-icon icon-business-time">
                                    <i class="far fa-clock"></i>
                                </span>
                                Jan 17, 2021
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
                                        0
                                    </div>
                                    <div className="qr-manage-code__scans-label">
                                        Scans
                                    </div>
                                    <a className="qr-manage-code__insights" href="/">
                                        Details
                                        <span className="">
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="qr-manage-code__qr">
                                    <div className="qr-code-image">
                                        <img className="qr-code-image__image" src={qrPNG} />
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
                                https://www.google.com
                            </div>
                        </div>
                        <div className="qr-manage-code--row-first--col-left">
                            <span className="qr-manage-code__folder-icon icon-qr-folder-outline">
                                <i class="fas fa-link"></i>
                            </span>
                            <div className="qr-manage-code__folder">
                                <span className="qr-manage-code__folder-name">
                                    <a className="qr-manage-code__url-link">
                                        qrco.de/bbukrE
                                    </a>
                                </span>
                            </div>
                            <div className="qr-manage-code__date">
                                <span className="qr-manage-code__date-icon icon-business-time">
                                    <i class="far fa-clock"></i>
                                </span>
                                Jan 17, 2021
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
                                        0
                                    </div>
                                    <div className="qr-manage-code__scans-label">
                                        Scans
                                    </div>
                                    <a className="qr-manage-code__insights" href="/">
                                        Details
                                        <span className="">
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="qr-manage-code__qr">
                                    <div className="qr-code-image">
                                        <img className="qr-code-image__image" src={qrPNG} />
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
                
            </div>
        </Fragment>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
