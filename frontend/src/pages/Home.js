import React,{ useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import ColorSelect from '../pages/ColorSelect'

const Home = ({book, mainColor}) => {



   return <>
   <intro><h1>Welcome.</h1>
            <h3>My name is <em>Conner Hicks.</em> I left the color up to you so you have the best
                possible view. I hope you enjoy my site. Have a great day. </h3></intro>
           <Home book={book} mainColor={mainColor} />
      <ColorSelect book={book}/>
   </>
}

export default Home;