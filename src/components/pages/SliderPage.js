import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../forms/Button';
import { closeSliderPage } from '../../actions/page';

const SliderPage = (props) => {
  const { closeSliderPage } = props;

  return (
    <div className="page page--slider drawer">
      <div className="page__container">
        <Button className="btn btn--back btn--icon" onClick={closeSliderPage}>
          <i className="fas fa-arrow-left"></i> Go back
        </Button>
        <h2 className="page__heading">SLIDER</h2>
        <div className="page__content">
          This is slider page
        </div>
      </div>
    </div>
  );
}

SliderPage.propTypes = {
  closeSliderPage: PropTypes.func.isRequired
}

export default connect(null, { closeSliderPage })(SliderPage);
