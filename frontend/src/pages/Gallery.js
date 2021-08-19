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
            <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/Compass-01.png'/>
            <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/9+Shapes-01.png'/>
            <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/Allatoona-01.png'/>
            <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/Bikeride-01.png'/>
            <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/Compass-01.png'/>
            <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/Mask-01.png'/>
            <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/Ribbons-01.png'/>
            <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/Tangled+Beads-01.png'/>
            <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/Windows-01.png'/>
            {/* <GalleryImage mainColor={mainColor} imgUrl='https://nerblog.s3.amazonaws.com/.png'/> */}
           
         </div>
         
      </main>
   )
}

export default Gallery