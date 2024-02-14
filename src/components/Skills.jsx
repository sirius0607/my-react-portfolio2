import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {

  const { t } = useTranslation();
  const backendLanguages = t("programmingSkills.backend.languages", { returnObjects: true });
  const backendTools = t("programmingSkills.backend.tools", { returnObjects: true });
  const frontendLanguages = t("programmingSkills.frontend.languages", { returnObjects: true });
  const frontendTools = t("programmingSkills.frontend.tools", { returnObjects: true });

  return (
    <div>
      {/* Skills */}
      <section id="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                {t('skillsTitle')}
              </h2>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <h4>{t('backendTitle')}</h4>
              <p className="text-muted">
                <span>{t('languagesTitle')}</span>
                {backendLanguages.map((item, i) => [
                  i > 0 && ", ",
                  <span className="text-primary" key="item.languageName">{item.languageName}</span>
                ])}
              </p>
              <p className="text-muted">
                <span>{t('toolsTitle')}</span>
                {backendTools.map((item, i) => [
                  i > 0 && ", ",
                  <span className="text-primary" key="item.toolName">{item.toolName}</span>
                ])}
              </p>
              <h4>{t('frontendTitle')}</h4>
              <p className="text-muted">
                <span>{t('languagesTitle')}</span>
                {frontendLanguages.map((item, i) => [
                  i > 0 && ", ",
                  <span className="text-primary" key="item.languageName">{item.languageName}</span>
                ])}
              </p>
              <p className="text-muted">
                <span>{t('toolsTitle')}</span>
                {frontendTools.map((item, i) => [
                  i > 0 && ", ",
                  <span className="text-primary" key="item.toolName">{item.toolName}</span>
                ])}
              </p>
              <h4>{t('methodologyTitle')}</h4>
              <p className="text-muted">
                {t("methodologies", { returnObjects: true }).map((item, i) => [
                  i > 0 && ", ",
                  <span className="text-primary" key="item.methodologyName">{item.methodologyName}</span>
                ])}
              </p>
              <h4>{t('databaseTitle')}</h4>
              <p className="text-muted">
                {t("databases", { returnObjects: true }).map((item, i) => [
                  i > 0 && ", ",
                  <span className="text-primary" key="item.databaseName">{item.databaseName}</span>
                ])}
              </p>
              <h4>{t('ideTitle')}</h4>
              <p className="text-muted">
                {t("ide", { returnObjects: true }).map((item, i) => [
                  i > 0 && ", ",
                  <span className="text-primary" key="item.ideName">{item.ideName}</span>
                ])}
              </p>
              <h4>{t('osTitle')}</h4>
              <p className="text-muted">
                {t("os", { returnObjects: true }).map((item, i) => [
                  i > 0 && ", ",
                  <span className="text-primary" key="item.osName">{item.osName}</span>
                ])}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;