import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../forms/Button';
import { closeButtonPage } from '../../actions/page';

const ButtonPage = (props) => {
  const { closeButtonPage } = props;

  return (
    <div className="page page--button drawer">
      <div className="page__container">
        <Button className="btn btn--back btn--icon" onClick={closeButtonPage}>
          <i className="fas fa-arrow-left"></i> Go back
        </Button>
        <h2 className="page__heading">BUTTON</h2>
        <div className="page__content">
          <Button className="btn">Button default</Button>
          <Button className="btn btn--loading"><i className="fas fa-spinner fa-pulse"></i> Button default</Button>
          <Button className="btn" disabled>Button default disabled</Button>
          <Button className="btn btn--primary">Button primary</Button>
          <Button className="btn btn--primary btn--loading"><i className="fas fa-spinner fa-pulse"></i> Button primary</Button>
          <Button className="btn btn--primary" disabled>Button primary disabled</Button>
          <hr></hr>
          <h4>Button inline block</h4>
          <div className="button-inline">
            <Button className="btn btn--inline-block">Button default</Button>
            <Button className="btn btn--primary btn--inline-block">Button primary</Button>
            <Button className="btn btn--inline-block" disabled>Button default</Button>
          </div>
          <hr></hr>
          <h4>Button colored</h4>
          <div className="button-inline">
            <Button className="btn btn--inline-block">Default</Button>
            <Button className="btn btn--red btn--inline-block">Red</Button>
            <Button className="btn btn--orange btn--inline-block">Orange</Button>
            <Button className="btn btn--yellow btn--inline-block">Yellow</Button>
            <Button className="btn btn--olive btn--inline-block">Olive</Button>
            <Button className="btn btn--green btn--inline-block">Green</Button>
            <Button className="btn btn--teal btn--inline-block">Teal</Button>
            <Button className="btn btn--blue btn--inline-block">Blue</Button>
            <Button className="btn btn--violet btn--inline-block">Violet</Button>
            <Button className="btn btn--purple btn--inline-block">Purple</Button>
            <Button className="btn btn--pink btn--inline-block">Pink</Button>
            <Button className="btn btn--brown btn--inline-block">Brown</Button>
            <Button className="btn btn--grey btn--inline-block">Grey</Button>
            <Button className="btn btn--black btn--inline-block">Black</Button>
          </div>
          <hr></hr>
          <h4>Button size</h4>
          <div className="button-inline">
            <Button className="btn btn--small btn--inline-block">Button small</Button>
            <Button className="btn btn--inline-block">Button default</Button>
            <Button className="btn btn--medium btn--inline-block">Button medium</Button>
            <Button className="btn btn--large btn--inline-block">Button large</Button>
          </div>
          <hr></hr>
          <h4>Button icon</h4>
          <div className="button-inline">
            <Button className="btn btn--inline-block">
              <i className="fas fa-user"></i>
            </Button>
            <Button className="btn btn--inline-block">
              <i className="fas fa-bars"></i>
            </Button>
            <Button className="btn btn--inline-block">
              <i className="fas fa-spinner fa-pulse"></i>
            </Button>
            <Button className="btn btn--inline-block">
              <i className="fas fa-save"></i> Save
            </Button>
            <Button className="btn btn--inline-block">
              <i className="fas fa-edit"></i> Edit
            </Button>
            <Button className="btn btn--inline-block">
              <i className="fas fa-spinner fa-pulse"></i> Loading...
            </Button>
          </div>
          <hr></hr>
          <h4>Button circle</h4>
          <div className="button-inline">
            <Button className="btn btn--circle btn--inline-block">
              <i className="fab fa-facebook-f"></i>
            </Button>
            <Button className="btn btn--circle btn--inline-block">
              <i className="fab fa-twitter"></i>
            </Button>
            <Button className="btn btn--circle btn--inline-block">
              <i className="fab fa-instagram"></i>
            </Button>
            <Button className="btn btn--circle btn--inline-block">
              <i className="fab fa-youtube"></i>
            </Button>
            <Button className="btn btn--circle btn--inline-block">
              <i className="fab fa-linkedin-in"></i>
            </Button>
            <Button className="btn btn--circle btn--inline-block">
              <i className="fab fa-pinterest-p"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

ButtonPage.propTypes = {
  closeButtonPage: PropTypes.func.isRequired
}

export default connect(null, { closeButtonPage })(ButtonPage);
