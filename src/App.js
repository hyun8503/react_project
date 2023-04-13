import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


const border = {
  marginBottom:'50px'
};

function App() {
  return (
    <div className="App" style={border} >
      <Header/>
      <Main/>
      <Footer />
    </div>
  );

}

export default App;
