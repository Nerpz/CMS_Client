import React, {useState} from 'react';

const NavButton = (props) => {
   const {mainColor, onClick, showNav} = props;
   const [hover, setHover] = useState(false);
   const inactiveButtonStyle = {
     zIndex: '5',
     backgroundColor: `${mainColor}`,
     height: '80px',
     width: '80px',
     position: 'fixed',
     bottom: '15px',
     right: '15px',
     padding: '0.5rem',
     borderRadius: '10px',
     border: '5px solid black',
     // boxShadow: '5px 3px 10px 0px rgba(0,0,0,0.75)',
     backgroundImage: 'url("/images/Hamburger.png")',
     backgroundRepeat: 'no-repeat',
     backgroundSize: '95%',
     backgroundPosition: '4px 4px',
     transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
     
   };
   const inactiveHoverStyle = {
     zIndex: '5',
     backgroundColor: `${mainColor}`,
     height: '80px',
     width: '80px',
     position: 'fixed',
     bottom: '15px',
     right: '15px',
     padding: '0.5rem',
     borderRadius: '10px',
     border: '5px solid black',
     backgroundImage: 'url("/images/Hamburger.png")',
     backgroundRepeat: 'no-repeat',
     backgroundSize: '95%',
     backgroundPosition: '4px 4px',
     transform: 'rotate(360deg)',
     transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
    
   };
 
   const activeButtonStyle = {
     zIndex: '5',
     backgroundColor: `${mainColor}`,
     height: '80px',
     width: '80px',
     position: 'fixed',
     bottom: '15px',
     right: '240px',
     padding: '0.5rem',
     border: '10px solid black',
     borderRadius: '40px',
     backgroundImage: 'url("/images/HamburgerClose.png")',
     backgroundRepeat: 'no-repeat',
     backgroundSize: '75%',
     backgroundPosition: '8px 8px',
     transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
     
   };
   const activeHoverStyle = {
     zIndex: '5',
     backgroundColor: `${mainColor}`,
     height: '80px',
     width: '80px',
     position: 'fixed',
     bottom: '15px',
     right: '240px',
     padding: '0.5rem',
     border: '10px solid black',
     borderRadius: '40px',
     backgroundImage: 'url("/images/HamburgerClose.png")',
     backgroundRepeat: 'no-repeat',
     backgroundSize: '75%',
     backgroundPosition: '8px 8px',
     transform: 'rotate(360deg)',
     transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
   };
   return (
     <button
       onMouseEnter={(e) => {
         setHover(true);
       }}
       onMouseLeave={(e) => {
         setHover(false);
       }}
       onClick={onClick}
       style={
         !showNav
           ? !hover
             ? inactiveButtonStyle
             : inactiveHoverStyle
           : !hover
           ? activeButtonStyle
           : activeHoverStyle
       }
     ></button>
   );
 };

 export default NavButton;