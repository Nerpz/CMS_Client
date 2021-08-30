import './Portfolio.css'
import React, {useState} from 'react'

const PortfolioItem = ({mainColor, href, imgSrc, imgAlt, title, desc}) => {
   const [hover, setHover] = useState(false);
   const [hoverCount, setHoverCount] = useState(1);

   const colorPicker = () => {
      if(mainColor === '#053') {
         if(hoverCount === 1)return  '#08f'
         if(hoverCount === 2) return 'yellow'
         if(hoverCount === 3) return 'red'
      } else if(mainColor === '#08f') {
         if(hoverCount === 1)return  '#053'
         if(hoverCount === 2) return 'yellow'
         if(hoverCount === 3) return 'red'
      } else if(mainColor === 'yellow') {
         if(hoverCount === 1)return  '#08f'
         if(hoverCount === 2) return '#053'
         if(hoverCount === 3) return 'red'
      } else if(mainColor === 'red') {
         if(hoverCount === 1)return  '#08f'
         if(hoverCount === 2) return 'yellow'
         if(hoverCount === 3) return '#053'
      } else return ``
   }
   const hoverTick = () => {
      if(hoverCount === 3){return setHoverCount(1)}
      if(hoverCount === 1){return setHoverCount(2)}
      if(hoverCount === 2){return setHoverCount(3)}
   }

   const hoverStyle = {
      backgroundColor: `${colorPicker()}`,
      color: `black`
   }
   const unhoverStyle = {
      backgroundColor: `${mainColor}`,
      color: `black`
   }

   return   <a href={href} target="_blank" onMouseEnter={(e)=>{setHover(true)}} onMouseLeave={(e)=>{setHover(false);hoverTick()}} className="portfolioItem" style={hover ? hoverStyle : unhoverStyle}>
               
               <img src={imgSrc} alt={imgAlt} className='portfolioImg'/>
            <h2 className='portfolioItemTitle'>{title}</h2>
            <p className='portfolioP'>{desc}</p>
            <a className='portfolioLink' href={href} target="_blank">View</a>

            </a>
}



const Portfolio = (props) => {
   const {book, mainColor} = props;
   const {activePage, oldPage} = book;
   const [hover, setHover] = useState()
   
   return (
      <main className='main' >
         <div className="title">
            <h1>Portfolio</h1>
         </div>
         <PortfolioItem href={`https://nerpz.com`} mainColor={mainColor} imgSrc={`/images/nerpzlogo.png`} title={`Nerpz - Ecommerce`} desc={`Node and React Powered Ecommerce Website`}/>
         <PortfolioItem href={`https://clever-elion-268a4a.netlify.app/`} mainColor={mainColor} imgSrc={'/images/musicnote.png'} title={'FunctionAbilities'} desc={'Redesign of a site for a company that provides limited mobility devices'}/>
         <PortfolioItem href={`https://nertobin.com`} mainColor={mainColor} imgSrc={'/images/functionabilitieslogo.png'} title={'Music Note Generator'} desc={`Simple tool for when a musician just can't decide.`}/>

         
         <div className="blankSpace">blankspace</div>

      </main>
   )
}

export default Portfolio