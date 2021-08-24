const ImageFrame = (props) => {

}

const GalleryImage = (props) => {
   const {mainColor, imgUrl, imgAlt} = props;

   const colorPicker = () => {
      if(mainColor === '#053') {
         return {backgroundColor: '#08f'}
      } else if(mainColor === '#08f') {
         return {backgroundColor: 'yellow'}
      } else if(mainColor === 'yellow') {
         return {backgroundColor: '#08f'}
      } else if(mainColor === 'red') {
         return {backgroundColor: '#053'}
      } else return ``
   }
   return <div className='galleryFrame' style={colorPicker()}>
      <img className='galleryImage' src={imgUrl} alt={imgAlt}/>
   </div>
}

const Gallery = (props) => {
   const {book, mainColor} = props;
   const {activePage, oldPage} = book;
   const colorPicker = () => {
      if(mainColor === '#053') {
         return {backgroundColor: '#08f'}
      } else if(mainColor === '#08f') {
         return {backgroundColor: 'yellow'}
      } else if(mainColor === 'yellow') {
         return {backgroundColor: '#08f'}
      } else if(mainColor === 'red') {
         return {backgroundColor: '#053'}
      } else return ``
   }

   return (
      <main className="main">
         <h1 className="title">Gallery</h1>
       
         <div className="gallery">
            <GalleryImage mainColor={mainColor} imgUrl='/images/gallery/SkateboardingEgg.svg'/>
            <GalleryImage mainColor={mainColor} imgUrl='/images/gallery/Windows.svg'/>
            <GalleryImage mainColor={mainColor} imgUrl='/images/gallery/LadyMaskGhanna.svg'/>
            <GalleryImage mainColor={mainColor} imgUrl='/images/gallery/Squiggs.svg'/>
            <GalleryImage mainColor={mainColor} imgUrl='/images/gallery/Allatoona.svg'/>
            <GalleryImage mainColor={mainColor} imgUrl='/images/gallery/Diamonds.svg'/>
            <GalleryImage mainColor={mainColor} imgUrl='/images/gallery/Network.svg'/>
            {/* <GalleryImage mainColor={mainColor} imgUrl='/images/gallery/'/> */}
            {/* <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/.png'/> */}
           
         </div>
         
      </main>
   )
}

export default Gallery