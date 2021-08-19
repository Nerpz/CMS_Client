import './Portfolio.css'


const Portfolio = (props) => {
   const {book, mainColor} = props;
   const {activePage, oldPage} = book;
 
   return (
      <main className='main' >
         <div className="title">
            <h1>Portfolio</h1>
         </div>

        
         <a href="https://nerpz.com" target="_blank" className="portfolioItem">
            
            <img src="/images/nerpzlogo.png" alt="" className='portfolioImg'/>
            <h2 className='portfolioItemTitle'>Nerpz - Ecommerce</h2>
            <p className='portfolioP'>Node and React powered ecommerce website.</p>
            <a className='portfolioLink'href="https://nerpz.com" target="_blank">View</a>
         </a>

         <a href="https://clever-elion-268a4a.netlify.app/" target="_blank" className="portfolioItem">
            
            <img src="/images/functionabilitieslogo.png" alt="" className='portfolioImg'/>
            <h2 className='portfolioItemTitle'>FunctionAbilities</h2>
            <p className='portfolioP'>Redesign of a site for a company that provides limited mobility devices.</p>
            <a className='portfolioLink'href="https://clever-elion-268a4a.netlify.app/" target="_blank">View</a>
         </a>

         <a href="https://nertobin.com" target="_blank" className="portfolioItem lastItem">
         <img src="/images/musicnote.png" alt="" className='portfolioImgTall'/>
            <h2 className='portfolioItemTitle'>Music Note Generator</h2>
            <p className='portfolioP'>React app for when a musician just can't decide.</p>
            <a className='portfolioLink'href="https://nertobin.com" target="_blank">View</a>
         </a>
        


      </main>
   )
}

export default Portfolio