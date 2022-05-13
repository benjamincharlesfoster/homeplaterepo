import React from 'react';

import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';
import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Sneakertime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Our Story</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>More than 1 in every 8 Americans are food insecure, which equates to more than 38 million who don't know where their next meal will come from.</p>
            </div>

            <div className={css.contentMain}>
               <h2>
                 Helping those in need by making sure everyone has a plate.
               </h2>

               <p>
               HomePlate was founded in 2021 by a group of three hospitality professionals
             based in Cincinnati, Ohio, after seeing how much strain the pandemic was causing
             the restaurant industry. We missed seeing groups of people being able to comfortably
              enjoy a night out with friends or family their favorite restaurant or bar. While
              things have improved, it is something that will always be present in the industry now.
              That’s where we step in. HomePlate was created with the idea of eating fresh, restaurant
              quality meals in your home, cooked by professional and passionate Chefs, and giving back to
              our communities. Our mantra? Eat. Cook. Feed.
               </p>



               <p>
               We want everyone to be able enjoy their special moments and evenings within their own homes,
            alongside great food. HomePlate is a completely customizable and unique experience that takes
            the stress of cooking and cleaning out of nightly dinners or special occasions.
               </p>


               <p>
               HomePlate also allows Chefs to grow their brand and culinary identity. Our Chefs create
               their own menus, source from their local ingredients, and talk with diners throughout the
               process to ensure their complete satisfaction.
               </p>
               <p>
               We were established on the idea of giving back. Our founders regularly volunteer at their
                 local food banks, and we let that extend to HomePlate as well. A monetary portion of each
                 meal cooked is donated to that Chefs choice of local hunger relief organizations.
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

export default AboutPage;
