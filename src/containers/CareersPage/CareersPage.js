import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import StaticPage  from '../../containers/StaticPage/StaticPage'
import  TopbarContainer  from '../../containers/TopbarContainer/TopbarContainer';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './CareersPage.module.css';
import image from './meeting.jpg';

const CareersPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Careers"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'CareersPage',
        description: 'Careers',
        name: 'Careers page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Join the team.</h1>
          <img className={css.coverImage} src={image} alt="windows" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>

            </div>

            <div className={css.contentMain}>
              <h2>
                We're looking to grow our company and are looking for people like you for a seat at the table.
              </h2>

              <p>
              Check back soon for career opportunities or visit our Contact page to send us your resume so we can start a conversation and get to know you!
              </p>



            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default CareersPage;
