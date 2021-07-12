import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { CHANGE_MAIN_COLOR } from '../constants';
import {changePage} from '../actions'

import './ColorSelect.css'

const ColorButton = (props) => {
   const {color, onClick, activePage} = props;
   const colorStyle = {
     backgroundColor: `${color}`,
     
     
   }
   return <button onClick={onClick} className={activePage === 0 ? 'colorButton' : 'colorButtonNav'} style={colorStyle} ></button>
 }

const ColorSelect = (props) => {
   const {book} = props;
   const {activePage, oldPage} = book;
   
   const dispatch = useDispatch()

   const setMainColor = (newColor) => {
      dispatch({type: CHANGE_MAIN_COLOR, payload: newColor})
      
   }
   return (
      <>
      
      <main className={activePage === 0 ? `colorsContainer` : `colorsContainerNav`}>
         <ColorButton activePage={activePage} color={'#053'} onClick={()=>setMainColor('#053')}/>
         <ColorButton activePage={activePage} color={'#08f'} onClick={()=>setMainColor('#08f')}/>
          <ColorButton activePage={activePage} color={'yellow'} onClick={()=>setMainColor('yellow')}/>
         <ColorButton activePage={activePage} color={'red'} onClick={()=>setMainColor('red')}/>
      </main>
      </>
   )
}

export default ColorSelect