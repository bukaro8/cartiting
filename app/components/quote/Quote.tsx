'use client';
import { FC, useState, MouseEvent, ReactNode, ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import cabriolet from '../../../assets/images/cabriolet.png';
import estate from '../../../assets/images/estate.png';
import hatch from '../../../assets/images/hatch.png';
import saloon from '../../../assets/images/saloon.png';
import styles from './Quote.module.css';
import ButtonGetAQuote from '../buttons/ButtonGetAQuote';

interface Props {
	height: string;
}
interface Cars {
	name: string;
	image: StaticImageData;
}
const cars: Cars[] = [
	{ name: 'cabriolet', image: cabriolet },
	{ name: 'estate', image: estate },
	{ name: 'saloon', image: saloon },
	{ name: 'suv', image: estate },
	{ name: 'others', image: cabriolet },
	{ name: 'hatch', image: hatch },
];
const Quote: FC<Props> = ({ height }) => {
	const basePrice = 70;
	const [carType, setCarType] = useState(0);
	const [carName, setCarName] = useState('');
	const [numWindows, setNumWindows] = useState(0);
	const [checked, setChecked] = useState(false);
	const [show, setShow] = useState(false);
	const [carNameWindow, setCarNameWindow] = useState('');
	const [checkedWindow, setCheckedWindow] = useState(false);
	const [showWindow, setShowWindow] = useState(false);
	const result = Math.ceil(basePrice * carType * numWindows);
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setShow(false);
		setChecked(!checked);
		setCarName(e.target.value);
		e.target.value === 'cabriolet' || e.target.value === 'hatch'
			? setCarType(1)
			: e.target.value === 'estate'
			? setCarType(1.3)
			: e.target.value === 'saloon' || e.target.value === 'suv'
			? setCarType(1.4)
			: setCarType(1.6);
	};
	const handleOnSubmit = (
		e: React.FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		setShow(true);
	};
	const showing = () => {
		return cars.map((car) => {
			return (
				<div
					className='d-flex flex-column  col-md-4  align-items-center'
					key={car.name}
				>
					<Image
						src={car.image}
						alt={car.name}
						className={`img-fluid   rounded ${styles.border} mb-1`}
						width={150}
						height={100}
					/>
					<input
						type='checkbox'
						name={car.name}
						value={car.name}
						checked={carName === car.name}
						onChange={(e) => handleOnChange(e)}
						id={car.name}
					/>
					<label htmlFor={car.name} className='text-capitalize text-light'>
						{car.name}
					</label>
				</div>
			);
		});
	};
	const handleOnChangeWindows = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setShow(false);
		setShowWindow(false);
		setCheckedWindow(!checkedWindow);
		setCarNameWindow(e.target.value);
		e.target.value === 'back'
			? setNumWindows(1)
			: e.target.value === 'backSide'
			? setNumWindows(1.3)
			: e.target.value === 'backAll' && setNumWindows(1.6);
	};
	return (
		<div
			className={`d-flex justify-content-start flex-column align-items-center  ${styles.background}`}
			style={{ minHeight: `${height}` }}
		>
			<h1 className='h1 bolder text-center text-light m-5'> Estimated Quote</h1>
			<section className='d-flex  justify-content-around flex-wrap row container-fluid mb-2'>
				<article
					className={`left col-md-5 border border-primary  rounded ${styles.transparent}`}
				>
					<h3 className='h1 text-center text-light'>Type of Car</h3>
					<form
						onSubmit={(e) => handleOnSubmit(e)}
						className='d-flex  justify-content-around flex-wrap'
					>
						{showing()}
					</form>
				</article>
				<article
					className={`left col-md-5 border border-primary  rounded ${styles.transparent}`}
					style={{ minHeight: '100%' }}
				>
					<h3 className='h1 text-center text-light'>Number of Windows</h3>
					<form
						className='d-flex justify-content-around flex-column align-items-center btn-group'
						role='group'
						aria-label='Basic checkbox toggle button group'
					>
						<div className='my-4'>
							<input
								type='checkbox'
								name='back'
								className='btn-check'
								value='back'
								checked={carNameWindow === 'back'}
								id='back'
								onChange={(e) => handleOnChangeWindows(e)}
								autoComplete='off'
							/>
							<label htmlFor='back' className='btn btn-outline-light'>
								Rear Screen Only
							</label>
						</div>
						<div className='mb-4'>
							<input
								type='checkbox'
								name='backSide'
								className='btn-check'
								value='backSide'
								checked={carNameWindow === 'backSide'}
								id='backSide'
								onChange={(e) => handleOnChangeWindows(e)}
								autoComplete='off'
							/>
							<label htmlFor='backSide' className='btn btn-outline-light'>
								All Rear Windows
							</label>
						</div>
						<div>
							<input
								type='checkbox'
								name='backAll'
								className='btn-check'
								value='backAll'
								checked={carNameWindow === 'backAll'}
								id='backAll'
								onChange={(e) => handleOnChangeWindows(e)}
								autoComplete='off'
							/>
							<label htmlFor='backAll' className='btn btn-outline-light'>
								All Rear Windows and Front Windows
							</label>
						</div>
					</form>
				</article>
			</section>
			<button
				type='submit'
				className='btn btn-primary '
				onClick={handleOnSubmit}
				style={{ width: '20vw', minWidth: '15rem' }}
			>
				Quote
			</button>
			{result !== 0 && show && (
				<div className='d-flex flex-column align-items-center'>
					<span
						className='alert alert-light mt-2'
						style={{ fontSize: '3vw' }}
						role='alert'
					>
						Your Quote Estimation is : £ {result}
					</span>
					<ButtonGetAQuote link={'/contact'} text='Contact Us' />
				</div>
			)}
		</div>
	);
};

export default Quote;
{
	/* <div>
							<Image
								src={cabriolet}
								alt={'cabriolet'}
								className='img-fluid'
								width={150}
							/>
							<input
								type='checkbox'
								name='cabriolet'
								value='cabriolet'
								checked={carName === 'cabriolet'}
								onChange={(e) => handleOnChange(e)}
								id='cabriolet'
							/>
							<label htmlFor='cabriolet'>Cabriolet</label>
						</div>

						<div>
							<Image
								src={estate}
								alt={'estate'}
								className='img-fluid'
								width={150}
							/>
							<input
								type='checkbox'
								name='estate'
								value='estate'
								checked={carName === 'estate'}
								onChange={(e) => handleOnChange(e)}
								id='estate'
							/>
							<label htmlFor='estate'> Estate</label>
						</div>

						<div>
							<Image
								src={hatch}
								alt={'hatch'}
								className='img-fluid'
								width={150}
							/>
							<input
								type='checkbox'
								name='hatch'
								value='hatch'
								checked={carName === 'hatch'}
								onChange={(e) => handleOnChange(e)}
								id='hatch'
							/>
							<label htmlFor='hatch'>Hatch</label>
						</div>

						<div>
							<Image
								src={saloon}
								alt={'saloon'}
								className='img-fluid'
								width={150}
							/>
							<input
								type='checkbox'
								name='saloon'
								value='saloon'
								checked={carName === 'saloon'}
								onChange={(e) => handleOnChange(e)}
								id='saloon'
							/>
							<label htmlFor='saloon'>Saloon</label>
						</div>

						<div>
							<Image src={estate} alt={'suv'} className='suv' width={150} />
							<input
								type='checkbox'
								name='suv'
								value='suv'
								checked={carName === 'suv'}
								onChange={(e) => handleOnChange(e)}
								id='suv'
							/>
							<label htmlFor='suv'>SUV</label>
						</div>

						<div>
							<Image
								src={cabriolet}
								alt={'others'}
								className='img-fluid'
								width={150}
							/>
							<input
								type='checkbox'
								name='others'
								value='others'
								checked={carName === 'others'}
								onChange={(e) => handleOnChange(e)}
								id='others'
							/>
							<label htmlFor='others'>Others</label>
						</div> */
}
