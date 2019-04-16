import React, { Component } from 'react';
import Header from './components/headers/Header';
import Footer from './components/footers/Footer';
import HomePage from './components/pages/HomePage';
import './scss/site.scss';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="main-container">
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
    );
  }
}

export default App;
