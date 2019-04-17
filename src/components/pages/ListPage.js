import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../forms/Button';
import { closeListPage } from '../../actions/page';

const ListPage = (props) => {
  const { closeListPage } = props;

  return (
    <div className="page page--list drawer">
      <div className="page__container">
        <Button className="btn btn--back btn--icon" onClick={closeListPage}>
          <i className="fas fa-arrow-left"></i> Go back
        </Button>
        <h2 className="page__heading">LIST</h2>
        <div className="page__content">
          This is list page
        </div>
      </div>
    </div>
  );
}

ListPage.propTypes = {
  closeListPage: PropTypes.func.isRequired
}

export default connect(null, { closeListPage })(ListPage);
