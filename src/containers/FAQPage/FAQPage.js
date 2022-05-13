import React from 'react';
import config from '../../config';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './FAQPage.module.css';

const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>


          <h2 className={css.pageTitle}>Frequently Asked Questions</h2>


              <div class="container">
                      <h1>Eat</h1>

                      <details>
    <summary>How will I know who my Chef is and when they will arrive?</summary>
    <div class="faq__content">
      <p>Whichever Chef’s profile you choose to have cook your meal will be the one arriving at your house with no exceptions. During the ordering process, you’ll book a time slot for your Chef. This will include all of their time for your experience (minus the time they spend finding ingredients at the store) from arrival to finishing clean up.</p>
    </div>
  </details>
  <details>
    <summary>How long will my Chef be here?</summary>
    <div class="faq__content">
      <p>Your booked time slot will be the ideal amount of time that your Chef will be in your kitchen. With room for variance with unforeseen circumstances, your time slot should hold true.</p>
    </div>
  </details>
  <details>
    <summary>Can I customize my menu?</summary>
    <div class="faq__content">
      <p> There are always options. After ordering, a dialogue box between you and your Chef will be available. Once you begin chatting, you can talk about customizations or substitutions on your menu.</p>
    </div>
  </details>
  <details>
  <summary>Will my Chef clean up after they’re done cooking?</summary>
  <div class="faq__content">
    <p>Yes! Part of our process for our Chefs is to clean up any dirty cookware and countertops, as well as taking out the garbage once they are done cooking. All you’ll have left to clean up is the plates you’re eating off of!</p>
  </div>
</details>
<details>
<summary>Do I need to have ingredients for the Chef to use?</summary>
<div class="faq__content">
  <p>The Chef will come with all the ingredients necessary to prepare your selected menu, the only ingredients you might want are some salt and pepper!</p>
</div>
</details>
<details>
  <summary>Can I tip my Chef?</summary>
  <div class="faq__content">
    <p>Absolutely! Once your meal is finished and you are satisfied with everything, you’ll be sent a survey and a prompt for any potential tips for your Chef. This entire amount will go directly them. </p>
  </div>
</details>
<details>
  <summary>What if I’m not satisfied with my meal?</summary>
  <div class="faq__content">
    <p> We would hate to see that, but unfortunately, we know things like that are bound to happen. Contact our help center to speak with a HomePlate representative regarding any issues with your experience.</p>
  </div>
</details>
<details>
  <summary>Can I request the same Chef again?</summary>
  <div class="faq__content">
    <p>You can do this by ordering off of any of their provided menus or services again. You can see all of your HomePlate history in your profile to keep track of your favorite Chefs and meals.</p>
  </div>
</details>
<details>
  <summary>How do I let my Chef know about my allergies/dietary restrictions?</summary>
  <div class="faq__content">
    <p> Once you’ve initially ordered, a dialogue box between you and your Chef will be available. At this point, you can let them know about any food borne allergies or aversions, or dietary restrictions you may have. </p>
  </div>
</details>
<details>
<summary>Is there a limit on how many people I can ask my Chef to cook for? </summary>
<div class="faq__content">
  <p> Each Chef’s answer to this will vary. Their menu listings will show how many each meal is supposed to serve. The limit is entirely dependent on what each Chef is comfortable doing.</p>
</div>
</details>
<details>
<summary>My kitchen is tiny, can I still hire a HomePlate Chef? </summary>
<div class="faq__content">
  <p>Yes! HomePlate Chefs can work in any home kitchen, regardless of size. Some menu items may have a need for special equipment, and in that case, your Chef will let you know ahead of time so they can make adjustments if need be. </p>
</div>
</details>
<details>
<summary>What if there is an accident, or damage to my home or kitchen? </summary>
<div class="faq__content">
  <p>All Home Plate chefs are insured for up to $1,000,000 in damages through our business.</p>
</div>
</details>

</div>
<div class="container">

                    <h1>Cook</h1>

                    <details>
  <summary>What does it take to become a HomePlate Chef?</summary>
  <div class="faq__content">
    <p>We’re open to anyone applying to become a HomePlate chef through our selection process.</p>
  </div>
</details>
<details>
  <summary>I have no culinary training or background, can I still become a HomePlate Chef?</summary>
  <div class="faq__content">
    <p>Sure! Our selection process is unbiased and anyone is able to apply.</p>
  </div>
</details>
<details>
  <summary>How are Chefs paid?</summary>
  <div class="faq__content">
    <p> HomePlate Chefs will be paid directly to their bank accounts at the time of their completed transaction. We take a percentage, and you get the rest! All of the fees and charges will be used directly for credit card processing and food bank donation and is separate from your take-home money.</p>
  </div>
</details>
<details>
<summary>Do Chefs need certification?</summary>
<div class="faq__content">
  <p>HomePlate chefs do not need ServeSafe certification or anything of the sorts, but if you do have them already, there will be an option to display this on your profile. </p>
</div>
</details>
<details>
<summary>Can Chefs prep food items before arriving at their cooking destination?</summary>
<div class="faq__content">
  <p>No, they cannot. According to Food and Safety guidelines, Chefs cannot prep food at their own house before arriving at the destination, but if you are coming from an already certified and inspected kitchen (i.e. a restaurant or catering kitchen, or an equivalent), then it is safe to do so. </p>
</div>
</details>
<details>
<summary>How long will it take to cook a meal? </summary>
<div class="faq__content">
  <p> This variable is entirely up to you. If you can execute a meal, and would like to book them for 2 hours at a time, then absolutely. If you think you need closer to 3 or 4 hours, you can do that as well. This is entirely driven by your skills and comfort to execute.</p>
</div>
</details>
<details>
<summary>What do Chefs need to bring with them? (Plating supplies, thermometer, knives, their “kit”, water bottles?)</summary>
<div class="faq__content">
  <p>Obviously, this is dependent on what you will be offering in your meals. We recommend having a knife kit, instant read thermometer, gloves, etc., but what you have and bring is ultimately up to you. For our recommended list of supplies, watch our tutorial video. And for a place to purchase more items for your kit, click here.</p>
</div>
</details>
<details>
<summary>How much of the total bill will I be receiving?</summary>
<div class="faq__content">
  <p> HomePlate will be collecting 18% of the revenue for our company, and you will be keeping the other 82%. The charges and fees are dispersed separately for credit card processing and food bank donations. </p>
</div>
</details>
<details>
<summary>Are there any incentives? </summary>
<div class="faq__content">
<p> We will be offering incentives for our Chefs for the more meals they book and complete. HomePlate merchandise will be offered at a discounted rate as well once you have completed 5 meals.</p>
</div>
</details>
<details>
<summary>Where can I get HomePlate merch/gear? </summary>
<div class="faq__content">
<p>Here is a link to our market place. As a HomePlate Chef, you will be able to purchase some of the merchandise at a discount after you have completed 5 meals. </p>
</div>
</details>
<details>
<summary>Do I need to wear a mask when I’m cooking for my guests? </summary>
<div class="faq__content">
<p>This is something we encourage you and your clients to discuss prior to your arrival. Of course, we do encourage you to keep yours and others safety and health in mind, it is ultimately up to your clients discretion whether they would like you to wear a mask when at their house. </p>
</div>
</details>

</div>
<div class="container">

                   <h1>Feed</h1>

                   <details>
                   <summary>How much of the proceeds are going to hunger relief organizations?</summary>
                   <div class="faq__content">
                     <p>We pledge to donate 15% of the proceeds to local food insecurity organizations and programs in your neighborhood to help combat the food crisis.</p>
                   </div>
                 </details>
                   <details>
                   <summary>Which food banks will they be sent to?</summary>
                   <div class="faq__content">
                   <p> Funds will be allocated to local food banks and organizations based near where you and your Chef are located.</p>
                   </div>
                   </details>
                   <details>
                   <summary>How can I help with the food crisis? </summary>
                   <div class="faq__content">
                   <p>*Link to free store food bank and other partners/organizations* </p>
                   </div>
                   </details>


                   </div>







        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
