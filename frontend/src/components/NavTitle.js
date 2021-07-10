import React, {useState} from 'react'


   const NavTitle = (props) => {
      const {mainColor, onClick} = props;
      const titleStyle = {
        width: '100%',
        height: '100%',
        marginBottom: '5rem',
        alignText: 'center',
        marginBottom: '0rem',
        fontSize: '3rem',
        fontWeight: 'bold',
        textShadow: '5px 5px rgba(0,0,0,0.25)',
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        justifySelf: 'stretch',
      };
      const imgStyle = {
        height: 'auto',
        width: '210px',
        
        
        padding: '0rem',
      };
      return (
        <h1 style={titleStyle}>
          <Link onClick={onClick} to='/'><img style={imgStyle} src='/images/logo.png' alt='logo' />
          
          </Link>
        </h1>
      );
    };

export default NavTitle