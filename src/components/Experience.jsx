import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {

    const { t } = useTranslation();
    const experience = t("experience", { returnObjects: true });

    return (
        <div>
            {/* Experience */}
            <section id="experience">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">
                                {t('experienceTitle')}
                            </h2>
                        </div>
                    </div>
                    {experience.map(item => {
                        return (
                            <div className="row mb-5" key={item.id}>
                                <div className="col-lg">
                                    <h4 className="mb-0">{item.role}</h4>
                                    <div className="subheading mb-3">{item.companyName}</div>
                                    <div className="text-primary">
                                        {t('projectTitle')}
                                    </div>
                                    <p>
                                        <i>{item.projectDesc}</i>
                                    </p>
                                    <div className="text-primary">
                                        {t('responsabilitiesTitle')}
                                    </div>
                                    <ul className="list-unstyled">
                                        {item.responsabilitiesDesc &&
                                            item.responsabilitiesDesc.map(subItem => {
                                                return (
                                                    <li key={subItem.responsabilityName}>
                                                        <FontAwesomeIcon icon="check" size="sm" />
                                                        <i className="fas fa-check fa-sm" />
                                                        {subItem.responsabilityName}
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                    <div className="text-primary">
                                        {t('technicalEnvironmentTitle')}
                                    </div>
                                    <p>
                                        {item.technicalEnvironmentDesc}
                                    </p>
                                </div>
                                <div className="col-md-auto">
                                    <span className="text-primary">{item.period}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Experience;