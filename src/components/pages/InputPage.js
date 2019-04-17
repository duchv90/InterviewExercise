import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../forms/Button';
import { closeInputPage } from '../../actions/page';

const InputPage = (props) => {
  const { closeInputPage } = props;

  return (
    <div className="page page--input drawer">
      <div className="page__container">
        <Button className="btn btn--back btn--icon" onClick={closeInputPage}>
          <i className="fas fa-arrow-left"></i> Go back
        </Button>
        <h2 className="page__heading">INPUT</h2>
        <div className="page__content">
          This is input page
        </div>
      </div>
    </div>
  );
}

InputPage.propTypes = {
  closeInputPage: PropTypes.func.isRequired
}

export default connect(null, { closeInputPage })(InputPage);
