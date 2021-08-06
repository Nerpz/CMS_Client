

const PortfolioDetails = (props) => {
   const {mainColor, show} = props;
   
   const style = {color: mainColor}
   const closedStyle = {top: '-1000px'}
   const openedStyle = {}
   return <>
      <div className='portfolioDetails' style={show==='nerpz' ? openedStyle : closedStyle}>
         <h1 style={style}>Lorem, ipsum.</h1>
         <h3 style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex consequuntur ratione dolorem quidem accusamus nihil porrofdas blanditiis voluptatibus labore, asperiores enim unde!</h3>
         <h3 style={style}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, quod adipisci! Pariatur harum, hic in voluptas, numquam corrupti magnam earum dignissimos similique, aspernatur veniam a iste recusandae nihil eligendi.</h3>
   </div>
      <div className='portfolioDetails' style={closedStyle}>
         <h1 style={style}>Lorem,adsfipsum.</h1>
         <h3 style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex consequuntur ratione dolorem quidem accusamus nihil porro, blanditiis voluptatibus labore, asperiores enim unde!</h3>
         <h3 style={style}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, quod adipisci! Pariatur harum, hic in voluptas, numquam corrupti magnam earum dignissimos similique, aspernatur veniam a iste recusandae nihil eligendi.</h3>
   </div>
   </>
}

export default PortfolioDetails;