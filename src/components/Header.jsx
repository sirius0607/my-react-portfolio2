import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import siegPhoto from '../assets/images/siegfried-profile3.jpg';

const Header = () => {

    const { t } = useTranslation();
    // const { t, i18n, ready } = useTranslation();

    // if (!ready) return "loading translations...";

    // const socials = t("socialLinks", { returnObjects: true });

    // const objToArr = (obj) => {
    //     if (obj.length > 0) {
    //         return obj;
    //     }
    //     let arr = [];
    //     for (let i = 0; i < Object.keys(obj).length; i++) {
    //         const n = `social${i + 1}`;
    //         arr.push(obj[n]);
    //     }
    //     return arr;
    // };

    return (
        <div>
            {/* Header */}
            <header className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="row">
                            <div className="col-sm-6 order-lg-2">
                                <img
                                    className="img-fluid img-profile rounded-circle mx-auto mb-2"
                                    src={siegPhoto}
                                    alt={t('name')}
                                />
                            </div>
                            <div className="col-sm-6 order-lg-1 pt-5">
                                <h2>{t('name')}</h2>
                                <h4 className="mb-4" style={{ color: "white" }}>
                                    {t('role')}
                                </h4>
                                <ul className="list-inline social-buttons mb-3">
                                    {t("socialLinks", { returnObjects: true }).map((item) => (
                                        <li className="list-inline-item" key={item.name}>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={['fab', item.className]} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;