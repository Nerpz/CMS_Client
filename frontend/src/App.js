import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import Nav from './components/Nav'


function App() {
  const dispatch = useDispatch()
  // mainColor state
  const changeMainColor = useSelector((state)=>state.changeMainColor)
  const {mainColor} = changeMainColor;

  // page state
  const pages = useSelector((state)=>state.pages)
  const {book} = pages;
  const {activePage, oldPage} = book;

  return (
    
    <div className='screen' style={{backgroundColor: `${mainColor}`}}>
      <Nav mainColor={mainColor} activePage={activePage}/>

      {`${activePage + '/' + oldPage}`}



    </div>
  );
}

export default App;
