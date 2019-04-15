import React, { Component } from 'react';
import Header from './components/headers/Header';
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
        
        </main>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default App;
