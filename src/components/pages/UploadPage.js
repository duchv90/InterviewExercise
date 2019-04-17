import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../forms/Button';
import { closeUploadPage } from '../../actions/page';

const UploadPage = (props) => {
  const { closeUploadPage } = props;

  return (
    <div className="page page--upload drawer">
      <div className="page__container">
        <Button className="btn btn--back btn--icon" onClick={closeUploadPage}>
          <i className="fas fa-arrow-left"></i> Go back
        </Button>
        <h2 className="page__heading">UPLOAD</h2>
        <div className="page__content">
          This is upload page
        </div>
      </div>
    </div>
  );
}

UploadPage.propTypes = {
  closeUploadPage: PropTypes.func.isRequired
}

export default connect(null, { closeUploadPage })(UploadPage);
