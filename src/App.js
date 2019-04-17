import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Header from './components/headers/Header';
import Footer from './components/footers/Footer';
import HomePage from './components/pages/HomePage';
import ButtonPage from './components/pages/ButtonPage';
import InputPage from './components/pages/InputPage';
import ListPage from './components/pages/ListPage';
import SliderPage from './components/pages/SliderPage';
import UploadPage from './components/pages/UploadPage';
import './scss/site.scss';

class App extends Component {
  state = {};

  render() {
    const {
      isActiveButtonPage,
      isActiveInputPage,
      isActiveListPage,
      isActiveSliderPage,
      isActiveUploadPage
    } = this.props;

    return (
      <div className="main-container">
        <div className="page page--home">
          <header className="header">
            <Header/>
          </header>
          <main className="main">
            <HomePage/>
          </main>
          <footer className="footer">
            <Footer/>
          </footer>
        </div>
        <CSSTransition in={isActiveButtonPage} timeout={300} classNames="drawer" unmountOnExit>
          <ButtonPage/>
        </CSSTransition>
        <CSSTransition in={isActiveInputPage} timeout={300} classNames="drawer" unmountOnExit>
          <InputPage/>
        </CSSTransition>
        <CSSTransition in={isActiveListPage} timeout={300} classNames="drawer" unmountOnExit>
          <ListPage/>
        </CSSTransition>
        <CSSTransition in={isActiveSliderPage} timeout={300} classNames="drawer" unmountOnExit>
          <SliderPage/>
        </CSSTransition>
        <CSSTransition in={isActiveUploadPage} timeout={300} classNames="drawer" unmountOnExit>
          <UploadPage/>
        </CSSTransition>
      </div>
    );
  }
}

App.propTypes = {
  isActiveButtonPage: PropTypes.bool.isRequired,
  isActiveInputPage: PropTypes.bool.isRequired,
  isActiveListPage: PropTypes.bool.isRequired,
  isActiveSliderPage: PropTypes.bool.isRequired,
  isActiveUploadPage: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  isActiveButtonPage: state.page.isActiveButtonPage,
  isActiveInputPage: state.page.isActiveInputPage,
  isActiveListPage: state.page.isActiveListPage,
  isActiveSliderPage: state.page.isActiveSliderPage,
  isActiveUploadPage: state.page.isActiveUploadPage
});

export default connect(mapStateToProps, null)(App);
