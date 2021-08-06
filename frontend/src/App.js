import logo from './logo.svg';
import './App.css';
import React,{ useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Nav from './components/Nav'
import ColorSelect from './pages/ColorSelect'
import Portfolio from './pages/Portfolio'
import Gallery from './pages/Gallery'


function App() {
  const [activeScreen, setActiveScreen] = useState(0)
  const [oldScreen, setOldScreen] = useState(0.5)
  const dispatch = useDispatch()
  // mainColor state
  const changeMainColor = useSelector((state)=>state.changeMainColor)
  const {mainColor} = changeMainColor;

  // page state
  const pages = useSelector((state)=>state.pages)
  const {book} = pages;
  const {activePage, oldPage} = book;

  const classNameController = (pageID) => {
    if(activePage === pageID ) {console.log('activePage');return `activePage`} else if(oldPage === pageID){console.log('oldPage');return `closePage`} else {return `inactivePage`}
  }
  
  return (
    
    <div className='screen' style={{backgroundColor: `${mainColor}`, transition: 'all cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s'}}>
      
        <Nav mainColor={mainColor} activePage={activePage}/>
        
        {activePage === 0 ? <div className={`activePage`} book={book}>
            <ColorSelect book={book}/>
          </div> : oldPage === 0 && <div className={`closePage`}>
            <ColorSelect book={book}/>
          </div> }
        {activePage === 1 ? <div className={`activePage`}>
            <Portfolio book={book} mainColor={mainColor}/>
          </div> : oldPage === 1 && <div className={`closePage`}>
            <Portfolio book={book} mainColor={mainColor}/>
          </div>}
        {activePage === 2 ? <div className={`activePage`}>
            <Gallery book={book} mainColor={mainColor}/>
          </div> : oldPage === 2 && <div className={`closePage`}>
            <Gallery book={book} mainColor={mainColor}/>
          </div>}

          <div className="crossPageContainer">
            <img src="/images/nerpzship.png" className="crossPage"alt=""/>
          </div>
          

          {/* <div style={{position: 'fixed', top: 0}}>{`${activePage + '/' + oldPage}`}</div> */}
        
      
      



    </div>
  );
}

export default App;
