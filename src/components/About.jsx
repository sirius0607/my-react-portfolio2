import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {

    const downloadCV = (cvUrl) => {
        window.open(cvUrl);
    }
    const { t } = useTranslation();
    // if (!ready) return "loading translations...";
    const topSkills = t("aboutTopSkills", { returnObjects: true });

    return (
        <div>
            {/* About */}
            <section id="about">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">
                                {t('aboutTitle')}
                            </h2>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <p className="text-muted">{t('aboutDesc')}</p>
                            <p className="text-muted">
                                {t('aboutTopSkillsTitle')}
                            </p>
                            <div className="about-tag">
                                <ul className="list-inline">
                                {topSkills.map((item) => (
                                        <li
                                            className="list-inline-item"
                                            key={item.aboutTopSkillsName}
                                        >
                                            <span>{item.aboutTopSkillsName}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn btn-primary mt-4"
                                    alt={t('downloadButton')}
                                    title={t('downloadButton')}
                                    onClick={() => downloadCV(t('cvUrl'))}
                                >
                                    <FontAwesomeIcon icon="download" />{" "}
                                    {t('downloadButton')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;