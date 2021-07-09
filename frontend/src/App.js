import React, {useState} from 'react'
import Nav from './components/Nav';
import About from './screens/About';
import Portfolio from './screens/Portfolio';
import Blog from './screens/Blog';
// import Home from './screens/Home';
import Gallery from './screens/Gallery';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';


const ColorSelectionContainer = (props) => {
  const {children} = props;
  const mainStyle = {
    height: '200px',
    width: '200px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
  }
  return <main style={mainStyle}>
    {children}
  </main>
}
const ColorButton = (props) => {
  const {color, onClick} = props;
  const colorStyle = {
    backgroundColor: `${color}`,
    transition: 'ease-in 20s',
  }
  return <button onClick={onClick} style={colorStyle} className='colorButton'></button>
}
function App() {
  const [mainColor, setMainColor] = useState('red')
  const [activeScreen, setActiveScreen] = useState('')

  const screenStyle = {
    backgroundColor: `${mainColor}`
  }
  const activeScreenStyle={
    transition: 'ease-in 5s'
  }
  const inactiveScreenStyle={
    position: 'relative',
    right: '200%',
    transition: 'ease-in 5s'
  }
  const screenFunction = () => {
    setActiveScreen()
  }
  return (
    <Router>
      <Nav mainColor={mainColor} />
      {activeScreen === '' && (
      <div style={screenStyle} className="screen">
        <Portfolio />
        </div>
        )
      }
      


        
      {/* 
        <div style={screenStyle} className='screen'>
        <Switch>
        <Route path='/portfolio'>
          <Portfolio style={activeScreen === 'portfolio' ? activeScreenStyle : inactiveScreenStyle}/>
        </Route>
        <Route path='/about'>
          <About style={activeScreen === 'about' ? activeScreenStyle : inactiveScreenStyle}/>
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        
        <Route path='/'>
          <ColorSelectionContainer>
            <ColorButton color={'#053'} onClick={()=>setMainColor('#053')}/>
            <ColorButton color={'#08f'} onClick={()=>setMainColor('#08f')}/>
            <ColorButton color={'yellow'} onClick={()=>setMainColor('yellow')}/>
            <ColorButton color={'red'} onClick={()=>setMainColor('red')}/>
          </ColorSelectionContainer>
        </Route>
      </Switch> 
      </div>
      */}
      
    </Router>
  );
}

export default App;
