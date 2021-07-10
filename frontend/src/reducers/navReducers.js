import {CHANGE_PAGE}  from '../constants/navConstants'

export const changePageReducer = (state={book: {activePage: 0, oldPage: 0}}, action) => {
   switch(action.type) {
      case CHANGE_PAGE:
         return {book: action.payload};
      default: 
       return state;

   }
}