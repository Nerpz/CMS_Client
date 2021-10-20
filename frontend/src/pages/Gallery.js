const imageURLs = [
	'/images/gallery/SkateboardingEgg.svg',
	'/images/gallery/PoeSanity.svg',

	'/images/gallery/Windows.svg',
	'/images/gallery/LadyMaskGhanna.svg',
	'/images/gallery/Squiggs.svg',
	'/images/gallery/Allatoona.svg',
	'/images/gallery/Diamonds.svg',
	'/images/gallery/Network.svg',
];

const GalleryImage = (props) => {
	const { mainColor, imgUrl, imgAlt } = props;

	const colorPicker = () => {
		if (mainColor === '#053') {
			return { backgroundColor: '#08f' };
		} else if (mainColor === '#08f') {
			return { backgroundColor: 'yellow' };
		} else if (mainColor === 'yellow') {
			return { backgroundColor: '#08f' };
		} else if (mainColor === 'red') {
			return { backgroundColor: '#053' };
		} else return ``;
	};
	return (
		<div className='galleryFrame' style={colorPicker()}>
			<img className='galleryImage' src={imgUrl} alt={imgAlt} />
		</div>
	);
};

const Gallery = (props) => {
	const { book, mainColor } = props;
	const { activePage, oldPage } = book;
	const colorPicker = () => {
		if (mainColor === '#053') {
			return { backgroundColor: '#08f' };
		} else if (mainColor === '#08f') {
			return { backgroundColor: 'yellow' };
		} else if (mainColor === 'yellow') {
			return { backgroundColor: '#08f' };
		} else if (mainColor === 'red') {
			return { backgroundColor: '#053' };
		} else return ``;
	};

	return (
		<main className='main'>
			<h1 className='title'>Gallery</h1>

			<div className='gallery'>
				{imageURLs.map((url) => (
					<GalleryImage mainColor={mainColor} imgUrl={url} />
				))}
			</div>
		</main>
	);
};

export default Gallery;
