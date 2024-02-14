import React from 'react';
import { useTranslation } from 'react-i18next';

const Interests = () => {
    const { t } = useTranslation();
    return (
        <div>
            {/* Interests */}
            <section id="interests">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">{t('interestsTitle')}</h2>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <p className="text-muted">
                                {t('interestsDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Interests;