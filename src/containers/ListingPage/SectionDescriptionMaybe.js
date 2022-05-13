import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionDescriptionMaybe = props => {
  const { description, className, rootClassName, publicData } = props;
  return description && publicData && publicData.materials ? (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.descriptionTitle" />
      </h2>
      <p className={css.description}>
        {richText(description, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          longWordClass: css.longWord,
        })}
      </p>
      <h2 className={css.materialsTitle}>
        <FormattedMessage id="ListingPage.materialsTitle" />
      </h2>
      <p className={css.materials}>{publicData.materials}</p>
    </div>
  ) : null;
};

export default SectionDescriptionMaybe;
