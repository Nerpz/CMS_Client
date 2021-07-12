import {CHANGE_PAGE} from './constants'

export const changePage = (newPage, oldPage) => (dispatch) => {

   const book = {
      activePage: newPage,
      oldPage: oldPage
   }
   dispatch({type: CHANGE_PAGE, payload: book})
}