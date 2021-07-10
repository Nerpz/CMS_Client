import React, {useState} from 'react'
import Nav from './components/Nav';
import About from './screens/About';
import Portfolio from './screens/Portfolio';
import Blog from './screens/Blog';
// import Home from './screens/Home';
import Gallery from './screens/Gallery';
import {useSelector} from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';


const ColorSelectionContainer = (props) => {
  
  const {children, book} = props;
  const {activePage, oldPage} = book;
  const mainStyle = {
    height: '200px',
    width: '200px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    position: 'absolute',
    
    
    transition: 'all cubic-bezier(0.25, 0.46, 0.45, 0.94) 20s',
  }
  const exitStyle = {
    height: '200px',
    width: '200px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    position: 'absolute',
    right: '100%',
    transition: 'all cubic-bezier(0.25, 0.46, 0.45, 0.94) 5s',
  }
  return <main style={activePage === 0 ? mainStyle : exitStyle}>
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

  const pages = useSelector((state) => state.pages)
  const {book} = pages;
  const {activePage, oldPage} = book;


  const screenStyle = {
    backgroundColor: `${mainColor}`
  }
  
  
  return (
    <Router>
      <Nav mainColor={mainColor} />
        <div style={screenStyle} className='screen'>
        <Switch>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        
        <Route path='/'>
          <h1>{`ActivePage:${activePage} / oldPage: ${oldPage}`}</h1>

          <ColorSelectionContainer book={book}>
            <ColorButton color={'#053'} onClick={()=>setMainColor('#053')}/>
            <ColorButton color={'#08f'} onClick={()=>setMainColor('#08f')}/>
            <ColorButton color={'yellow'} onClick={()=>setMainColor('yellow')}/>
            <ColorButton color={'red'} onClick={()=>setMainColor('red')}/>
          </ColorSelectionContainer>
        </Route>
      </Switch> 
      </div>
     
      
    </Router>
  );
}

export default App;
