'use client';
import Navlink from 'next/link';
import logo from '../../../assets/images/logo.png';

import Image from 'next/image';
import { useState } from 'react';

const links = [
	{
		name: 'Home',
		route: '/',
	},
	{
		name: 'About',
		route: '/about',
	},
	{
		name: 'Services',
		route: '/services',
	},
	{
		name: 'Prices',
		route: '/prices',
	},
	{
		name: 'Contact',
		route: '/contact',
	},
];
const Navbar = () => {
	const [collapse, setCollapse] = useState('');
	const onClick = () => {
		setCollapse(collapse === '' ? 'show' : '');
	};
	return (
		<header
			style={{
				position: 'sticky',
				top: '0',
				width: '100%',
				zIndex: '5',
			}}
		>
			<nav className='navbar navbar-expand-lg bg-dark'>
				<div className='container-fluid'>
					<Navlink
						className='navbar-brand d-flex align-items-center'
						href={'/'}
					>
						<Image
							width={60}
							height={48}
							src={logo}
							alt='logo'
							className={`d-inline-block align-text-top `}
						/>
						<h3 className='h1 navbar-brand text-light'>Infinity Tints</h3>
					</Navlink>
					<button
						onClick={onClick}
						className='navbar-toggler navbar-dark'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className={`collapse navbar-collapse justify-content-end ${collapse}`}
						id='navbarNav'
					>
						<ul className='navbar-nav '>
							{links.map((link) => (
								<li className='nav-item ' key={link.name}>
									<Navlink
										className='nav-link active text-light'
										href={link.route}
									>
										{link.name}
									</Navlink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
