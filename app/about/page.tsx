import { FC } from 'react';
import { Layout } from '../components/layouts';
import style from './about.module.css';
import ButtonGetAQuote from '../components/buttons/ButtonGetAQuote';
const About: FC = () => {
	return (
		<Layout title='about'>
			<div
				className={`d-flex flex-column justify-content-center align-items-center ${style.background}`}
			>
				<div
					className={`container-fluid rounded col-md-6  d-flex flex-column justify-content-center align-items-center  mb-3 ${style.transparent}`}
				>
					<h2 className='h1 bolder text-light'> About Us</h2>
					<p className=' text-light text-center'>
						Infinity Tints is your premier destination for professional car
						window tinting. With expert craftsmanship, premium materials, and
						personalized solutions, we enhance your vehicle&apos;s style,
						privacy, and protection.
					</p>
					<div className='border border-light w-75 my-2'></div>
					<h2 className='h2 text-light bolder'>Why Choose Infinity Tints?</h2>
					<ol className='text-light'>
						<li>
							Expert Craftsmanship: Our skilled technicians deliver precise
							installations and seamless finishes.
						</li>
						<li>
							Premium Materials: We use top-quality window films for superior
							heat rejection, UV protection, and glare reduction.
						</li>
						<li>
							Personalized Solutions: We offer tailored tinting options based on
							your vehicle type, local regulations, and preferences.
						</li>
						<li>
							Competitive Pricing: We provide affordable pricing without
							compromising on quality.
						</li>
						<li>
							Customer Satisfaction: Your delight is our priority, from start to
							finish.
						</li>
					</ol>
					<div className='border border-light w-75 my-2'></div>
					<p className=' text-light text-center'>
						Experience the Infinity Tints difference today and transform your
						vehicle. Contact us for an appointment or to learn more about our
						services.
					</p>
				</div>
				<ButtonGetAQuote link={'/contact'} text={'Contact Us'} />
			</div>
		</Layout>
	);
};

export default About;
