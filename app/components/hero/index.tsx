import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import one from '../../../assets/images/pexels-julio-nery-1687147.jpg';
import two from '../../../assets/images/2.jpg';
import three from '../../../assets/images/3.jpg';
import Navlink from 'next/link';
import style from './index.module.css';
import ButtonGetAQuote from '../buttons/ButtonGetAQuote';
const Hero = () => {
	return (
		<Carousel
			fade
			variant='dark'
			className={`d-flex justify-content-center ${style.container}`}
		>
			<Carousel.Item className={style.innerContainer}>
				<Image
					className={`d-block w-100  img-fluid ${style.imageBig}`}
					src={one}
					alt='car1'
				/>
				<Carousel.Caption className=' d-flex justify-content-around'>
					<ButtonGetAQuote link={'/prices'} text={'Quick Quote'} />
					<ButtonGetAQuote
						link={'/contact'}
						color={'text-light'}
						text={'Contact Us'}
						colorBg={'bg-success'}
					/>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className={style.innerContainer}>
				<Image
					className={`d-block w-100  img-fluid ${style.imageBig}`}
					src={two}
					alt='car1'
				/>
				<Carousel.Caption className=' d-flex justify-content-around'>
					<ButtonGetAQuote link={'/prices'} text={'Quick Quote'} />
					<ButtonGetAQuote
						link={'/contact'}
						color={'text-light'}
						text={'Contact Us'}
						colorBg={'bg-success'}
					/>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className={style.innerContainer}>
				<Image
					className={`d-block w-100  img-fluid ${style.imageBig}`}
					src={three}
					alt='car1'
				/>
				<Carousel.Caption className=' d-flex justify-content-around'>
					<ButtonGetAQuote link={'/prices'} text={'Quick Quote'} />
					<ButtonGetAQuote
						link={'/contact'}
						color={'text-light'}
						text={'Contact Us'}
						colorBg={'bg-success'}
					/>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Hero;
