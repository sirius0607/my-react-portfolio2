import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t, i18n: { changeLanguage } } = useTranslation();

    const changeMyLanguage = (lang) => {
        changeLanguage(lang);
    }
    return (
        <div>
            {/* Navbar */}
            <div id="page-top"></div>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a> */}
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu <FontAwesomeIcon icon="bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#page-top">{t('homeTitle')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">{t('aboutTitle')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#skills">{t('skillsTitle')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#experience">{t('experienceTitle')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#education">{t('educationTitle')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#interests">{t('interestsTitle')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">{t('contactTitle')}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t('locale')}
                                </div>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="dropdown-item" onClick={() => changeMyLanguage('fr')}>Français</div>
                                    <div className="dropdown-item" onClick={() => changeMyLanguage('en')}>English</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;