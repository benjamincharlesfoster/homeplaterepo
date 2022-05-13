import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { FormattedMessage } from '../../util/reactIntl';
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

import css from './ContactPage.module.css';
import image from './contact.jpg';

const ContactPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);



  // prettier-ignore
  return (
    <StaticPage
      title="Contact Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ContactPage',
        description: 'Contact',
        name: 'Contact page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Contact Us</h1>
          <img className={css.coverImage} src={image} alt="contactus" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>

            </div>

            <div className={css.contentMain}>
              <h2>
                We're working around the clock to make sure you get the best experience with HomePlate.
                Contact us if you have any questions regarding website navigation, our efforts to help
                fight the food crisis, or just want to chat!
              </h2>

              <div className={css.title}>

      </div>


      <div className={css.steps}>
             <div className={css.step}>

             <svg width="150pt" height="60pt" version="1.1" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <g>
               <path d="m461.12 315c-8.3281-7.9297-19.387-12.352-30.887-12.352s-22.559 4.4219-30.887 12.352l-14.523 14.699h-0.003906c-40.086-13.047-71.469-44.559-84.348-84.699l14.699-14.523c8.1758-8.2031 12.766-19.309 12.766-30.891 0-11.578-4.5898-22.684-12.766-30.887l-27.652-27.301c-7.4688-7.418-17.879-11.082-28.348-9.9727-10.449 1.2773-19.77 7.1914-25.375 16.098l-23.801 36.75c-9.6992 15.73-12 34.926-6.3008 52.5 14.758 43.945 39.508 83.867 72.301 116.63 32.797 32.766 72.742 57.477 116.7 72.195 6.3867 2.0781 13.059 3.1406 19.777 3.1484 11.746 0.011719 23.262-3.2617 33.25-9.4492l36.75-23.102c8.9062-5.6055 14.82-14.926 16.098-25.375 1.1094-10.469-2.5547-20.879-9.9727-28.348zm12.074 66.5-36.75 23.102c-11.465 7.125-25.508 8.793-38.324 4.5469-41.184-13.906-78.594-37.141-109.31-67.895-30.723-30.75-53.922-68.184-67.789-109.38-4.2422-12.816-2.5781-26.859 4.5508-38.324l23.102-36.051c2.7812-4.3242 7.3281-7.2031 12.426-7.875h1.3984c4.4922-0.003906 8.793 1.8281 11.898 5.0742l27.648 27.477h0.003906c4.9492 4.8672 7.7344 11.52 7.7344 18.461 0 6.9414-2.7852 13.594-7.7344 18.465l-18.375 17.5c-2.1641 2.2852-2.9609 5.543-2.1016 8.5742 14.176 49.914 53.395 88.797 103.43 102.55 3.0273 0.85938 6.2891 0.0625 8.5742-2.1016l18.375-18.375c5-4.6992 11.602-7.3164 18.465-7.3164 6.8594 0 13.461 2.6172 18.461 7.3164l27.477 27.477c3.6758 3.75 5.4766 8.9531 4.8984 14.172-0.87109 5.2578-4.0938 9.832-8.75 12.426z"/>
               <path d="m350 26.25c-67.297 0-131.84 26.734-179.43 74.32-47.586 47.59-74.32 112.13-74.32 179.43s26.734 131.84 74.32 179.43c47.59 47.586 112.13 74.32 179.43 74.32s131.84-26.734 179.43-74.32c47.586-47.59 74.32-112.13 74.32-179.43-0.046875-67.285-26.797-131.8-74.371-179.38-47.578-47.574-112.09-74.324-179.38-74.371zm0 490c-62.656 0-122.75-24.891-167.05-69.195-44.305-44.305-69.195-104.4-69.195-167.05s24.891-122.75 69.195-167.05c44.305-44.305 104.4-69.195 167.05-69.195s122.75 24.891 167.05 69.195c44.305 44.305 69.195 104.4 69.195 167.05-0.09375 62.629-25.012 122.67-69.297 166.95s-104.32 69.203-166.95 69.297z"/>
              </g>
             </svg>



               <h3>
                (513) 484-8868
               </h3>
             </div>

             <div className={css.step}>

             <svg width="150pt" height="60pt" version="1.1" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <g>
               <path d="m508.73 210v-17.5c0-6.9609-2.7656-13.641-7.6914-18.562-4.9219-4.9219-11.598-7.6875-18.559-7.6875h-264.95c-6.9609 0-13.637 2.7656-18.559 7.6875-4.9258 4.9219-7.6914 11.602-7.6914 18.562v175c0 6.9609 2.7656 13.641 7.6914 18.562 4.9219 4.9219 11.598 7.6875 18.559 7.6875h264.95c6.9609 0 13.637-2.7656 18.559-7.6875 4.9258-4.9219 7.6914-11.602 7.6914-18.562zm-291.2-26.25h264.95c2.3203 0 4.543 0.92188 6.1875 2.5625 1.6406 1.6406 2.5625 3.8672 2.5625 6.1875v11.898l-132.82 61.949-0.003906 0.003906c-5.4805 2.8633-12.016 2.8633-17.5 0l-132.12-61.953v-11.898c0-4.832 3.918-8.75 8.75-8.75zm264.95 192.5h-264.95c-4.832 0-8.75-3.918-8.75-8.75v-143.68l125.48 58.449c9.9844 4.6562 21.516 4.6562 31.5 0l125.48-58.449v143.68c0 2.3203-0.92187 4.5469-2.5625 6.1875-1.6445 1.6406-3.8672 2.5625-6.1875 2.5625z"/>
               <path d="m350 26.25c-67.297 0-131.84 26.734-179.43 74.32-47.586 47.59-74.32 112.13-74.32 179.43s26.734 131.84 74.32 179.43c47.59 47.586 112.13 74.32 179.43 74.32s131.84-26.734 179.43-74.32c47.586-47.59 74.32-112.13 74.32-179.43-0.046875-67.285-26.797-131.8-74.371-179.38-47.578-47.574-112.09-74.324-179.38-74.371zm0 490c-62.656 0-122.75-24.891-167.05-69.195-44.305-44.305-69.195-104.4-69.195-167.05s24.891-122.75 69.195-167.05c44.305-44.305 104.4-69.195 167.05-69.195s122.75 24.891 167.05 69.195c44.305 44.305 69.195 104.4 69.195 167.05-0.09375 62.629-25.012 122.67-69.297 166.95s-104.32 69.203-166.95 69.297z"/>
              </g>
             </svg>


               <h3>
                 help@homeplateco.com
               </h3>
             </div>


           </div>

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

export default ContactPage;
