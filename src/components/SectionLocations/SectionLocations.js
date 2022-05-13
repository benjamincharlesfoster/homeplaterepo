import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import hydeparkImage from './images/hydepark.jpg';
import otrImage from './images/overtherhine.jpg';
import cincinnatiImage from './images/cincinnati.jpeg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Hyde Park',
          hydeparkImage,
          '?address=Hyde%20Park%2C%20Cincinnati%2C%20USA&bounds=39.152473286%2C-84.40431131%2C39.122065956%2C-84.46445'
        )}
        {locationLink(
          'Over-the-Rhine',
          otrImage,
          '?address=Over-the-Rhine%2C%20Cincinnati%2C%20USA&bounds=39.124164%2C-84.5096492%2C39.1063427%2C-84.532841012'
        )}
        {locationLink(
          'Cincinnati',
          cincinnatiImage,
          '?address=Cincinnati%2C%20Ohio%2C%20United%20States&bounds=39.308079%2C-84.242128%2C39.011652%2C-84.71216'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
