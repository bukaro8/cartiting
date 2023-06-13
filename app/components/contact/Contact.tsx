'use client';
import { useState } from 'react';

import styles from './page.module.css';
import Swal from 'sweetalert2';
interface Data {
	name: string;
	email: string;
	message: string;
}
const Contact = () => {
	const [formStatus, setFormStatus] = useState('Send');
	const initialData = { name: '', email: '', message: '' };
	const [data, setData] = useState<Data>(initialData);
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setData({
			...data,
			[e.target.id]: e.target.value,
		});
		console.log(data);
	};
	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'All done',
			showConfirmButton: false,
			timer: 1500,
		});
		setData(initialData);
	};
	return (
		<div
			className={`${styles.background} container-fluid d-flex flex-column  justify-content-center align-items-center`}
		>
			<h2 className={`mb-3 p-2 rounded text-light ${styles.transparent}`}>
				Contact Us
			</h2>
			<form
				onSubmit={handleOnSubmit}
				className={`col-6 ${styles.transparent} rounded m-4 d-flex flex-column  justify-content-center align-items-center`}
			>
				<div className='mb-3 col-10'>
					<label className='form-label text-light' htmlFor='name'>
						Name
					</label>
					<input
						className='form-control'
						type='text'
						id='name'
						value={data.name}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>
				<div className='mb-3 col-10'>
					<label className='form-label text-light' htmlFor='email'>
						Email
					</label>
					<input
						className='form-control'
						type='email'
						id='email'
						value={data.email}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>
				<div className='mb-3 col-10'>
					<label className='form-label text-light' htmlFor='message'>
						Message
					</label>
					<input
						className='form-control'
						id='message'
						value={data.message}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>
				<button className='btn btn-danger' type='submit'>
					{formStatus}
				</button>
			</form>
		</div>
	);
};
export default Contact;
