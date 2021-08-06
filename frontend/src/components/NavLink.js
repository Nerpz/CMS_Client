import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'


const NavLink = (props) => {
   const {mainColor, href, children, onClick, opacity} = props;
   
   const [hover, setHover] = useState(false);
   const hidden = {display: 'none'}
   const linkStyle = {
     visibility: `${mainColor === 'white' ? `hidden` : 'visible'}`,
     textDecoration: 'none',
     width: '95%',
     minHeight: '36px',
     color: `${mainColor}`,
     backgroundColor: 'black',
     fontSize: '2rem',
     fontWeight: 'bold',
     border: '3px solid black',
     borderRadius: '1rem',
     marginBottom: '0.5rem',
     marginTop: '0.5rem',
     paddingBottom: '0.6rem',
     transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
     cursor: 'pointer',
     textAlign: 'center',
   };
   const linkStyleHover = {
      visibility: `${mainColor === 'white' ? `hidden` : 'visible'}`,

     textDecoration: 'none',
     width: '95%',
     minHeight: '36px',
     color: 'black',
     backgroundColor: `${mainColor}`,
     fontSize: '2rem',
     fontWeight: 'bold',
     border: '3px solid black',
     borderRadius: '1rem',
     marginBottom: '0.5rem',
     marginTop: '0.5rem',
     paddingBottom: '0.6rem',
     transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
     cursor: 'pointer',
     textAlign: 'center',
   };
   return (
     <a
       style={hover ? linkStyleHover : linkStyle}
       to={href}
       onMouseEnter={(e) => {
         setHover(true);
       }}
       onMouseLeave={(e) => {
         setHover(false);
       }}
       onClick={onClick}
     >
       {children}
     </a>
   );
 };

 export default NavLink