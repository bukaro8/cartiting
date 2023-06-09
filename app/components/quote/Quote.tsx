'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import cabriolet from '../../../assets/images/cabriolet.png';
import estate from '../../../assets/images/estate.png';
import hatch from '../../../assets/images/hatch.png';
import saloon from '../../../assets/images/saloon.png';

interface Props {}

const Quote: FC = () => {
	let result: number = 0;
	const [carType, setCarType] = useState(0);
	const [show, setShow] = useState(false);
	const basePrice = 70;
	const total = basePrice * carType;

	const handleShow = () => {
		setShow(!show);
	};
	return (
		<div className=' d-flex flex-column' style={{ backgroundColor: 'white' }}>
			<h1 className='text-center'>Estimation Quote </h1>
			<div className='row'>
				<div className='left col-5 d-flex flex-column justify-content-center align-items-center border border-secondary rounded ms-4'>
					<h3>Type of Vehicle</h3>
					<div className='vehicles row'>
						{/* //!============================= */}
						<div
							className='col-6 d-flex flex-column justify-content-center align-items-center'
							onClick={() => setCarType(1)}
						>
							<Image className='img-fluid' src={cabriolet} alt='cabriolet' />
							<span>Cabriolet</span>
						</div>
						{/* //!============================= */}
						<div
							className='col-6 d-flex flex-column justify-content-center align-items-center'
							onClick={() => setCarType(1.2)}
						>
							<Image className='img-fluid' src={saloon} alt='saloon' />
							<span>Saloon</span>
						</div>
						{/* //!============================= */}
					</div>

					<div className='vehicles row'>
						<div
							className='col-6 d-flex flex-column justify-content-center align-items-center'
							onClick={() => setCarType(1)}
						>
							<Image className='img-fluid' src={hatch} alt='hatch' />
							<span>Hatch</span>
						</div>
						{/* //!============================= */}
						<div
							className='col-6 d-flex flex-column justify-content-center align-items-center'
							onClick={() => setCarType(1.5)}
						>
							<Image className='img-fluid' src={estate} alt='estate' />
							<span>Estate</span>
						</div>
					</div>
				</div>

				{/* //?===================== */}

				<div className='right col-6 d-flex flex-column justify-content-center align-items-center'>
					<h6>Windows</h6>
				</div>
			</div>
			<button className='btn btn-primary' onClick={handleShow}>
				Calculate
			</button>
			{show && total !== 0 && (
				<div className='alert alert-warning'>estimated :{total}</div>
			)}
		</div>
	);
};

export default Quote;
