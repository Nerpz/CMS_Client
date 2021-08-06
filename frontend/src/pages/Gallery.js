
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
         <img className="galleryImage" style={colorPicker()}src="./images/gallery/Compass.png" alt="Compass Inspired Symmetrical Drawing"/>
         <img className="galleryImage" style={colorPicker()} src="./images/gallery/9Shapes.png" alt="Compass Inspired Symmetrical Drawing"/>
         <img className="galleryImage" style={colorPicker()} src="./images/gallery/Allatoona.png" alt="Compass Inspired Symmetrical Drawing"/>
         <img className="galleryImage" style={colorPicker()} src="./images/gallery/Bikeride.png" alt="Compass Inspired Symmetrical Drawing"/>
         <img className="galleryImage" style={colorPicker()} src="./images/gallery/Ribbons.png" alt="Compass Inspired Symmetrical Drawing"/>
         <img className="galleryImage" style={colorPicker()} src="./images/gallery/TangledBeads.png" alt="Compass Inspired Symmetrical Drawing"/>
         <img className="galleryImage" style={colorPicker()} src="./images/gallery/Windows.png" alt="Compass Inspired Symmetrical Drawing"/>
         {/* <img className="galleryImage" src="./images/gallery/.png" alt="Compass Inspired Symmetrical Drawing"/> */}
         </div>
         
      </main>
   )
}

export default Gallery