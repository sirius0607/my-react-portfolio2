import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
    const { t } = useTranslation();
    const education = t("education", { returnObjects: true });
    return (
        <div>
            {/* Education */}
            <section id="education">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">
                                {t('educationTitle')}
                            </h2>
                        </div>
                    </div>
                    {education.map(item => {
                        return (
                            <div className="row mb-5" key={item.id}>
                                <div className="col-lg">
                                    <h4 className="mb-0">{item.schoolName}</h4>
                                    <div className="subheading mb-3">{item.degree}</div>
                                    <p>{item.specialization}</p>
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

export default Education;