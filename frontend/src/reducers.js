import {CHANGE_PAGE, CHANGE_MAIN_COLOR}  from './constants'

export const changePageReducer = (state={book: {activePage: 0, oldPage: .5}}, action) => {
   switch(action.type) {
      case CHANGE_PAGE:
         return {book: action.payload};
      default: 
       return state;
      
   }
}

export const changeMainColorReducer = (state={mainColor: 'black'}, action) => {
   switch(action.type){
      case CHANGE_MAIN_COLOR:
            return {mainColor: action.payload};
      default: 
         return state;
      }
}