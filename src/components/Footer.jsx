import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div>
             {/* Footer */}
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <span className="copyright">
                                Made with React{" "}
                                <FontAwesomeIcon
                                    icon={["fab", "react"]}
                                    color="rgb(97, 218, 251)"
                                />{" "}
                                and Bootstrap{" "}
                                <FontAwesomeIcon
                                    icon={["fab", "bootstrap"]}
                                    color="#563d7c"
                                />
                            </span>
                        </div>
                        <div className="col-md-4" />
                        <div className="col-md-4" />
                    </div>
                </div>
            </footer>
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded js-scroll-trigger" href="#page-top">
                <i className="fas fa-angle-up" /><FontAwesomeIcon icon="angle-up" />
            </a>
        </div>
    );
};

export default Footer;