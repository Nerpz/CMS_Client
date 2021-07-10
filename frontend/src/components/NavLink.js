import React, {usestate} from 'react'

const NavLink = (props) => {
   const {mainColor, href, children, onClick} = props;
   
   const [hover, setHover] = useState(false);
   const linkStyle = {
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
 
   };
   const linkStyleHover = {
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