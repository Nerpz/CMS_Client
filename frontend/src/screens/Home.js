import React from 'react';
import '../App.css';
const Home = (props) => {
  const {buttonAClicked} = props
  const mainStyle = {}
  
  const styleA = {
    width: '100px',
    height: '100px',
    padding: '0',
    margin: '0',
    backgroundColor: '#053',
    border: 'none'

  }
  const styleB = {
    width: '100px',
    height: '100px',
    padding: '0',
    margin: '0',
    backgroundColor: '#08f',
    border: 'none'
  }
  const styleC = {
    width: '100px',
    height: '100px',
    padding: '0',
    margin: '0',
    backgroundColor: 'yellow',
    border: 'none'
  }
  const styleD = {
    width: '100px',
    height: '100px',
    padding: '0',
    margin: '0',
    backgroundColor: 'yellow',
    border: 'none'
  }
  return <main>
  <button style={styleA} onClick={buttonAClicked}></button>
  <button style={styleB} className={'colorButton'}></button>
  <button style={styleC} ></button>
  <button style={styleD} ></button>
</main>;
};

export default Home;
