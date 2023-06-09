import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

interface Props {
	title: string;
	description: string;
	iconName: string;
}

const ServicesCard: FC<Props> = ({ title, description, iconName }) => {
	const BootstrapIcon = `icons${iconName}`;
	return (
		<div className='col-md-4  text-light d-flex justify-content-center flex-column align-items-center'>
			<div>
				<FontAwesomeIcon icon={faCoffee} />
			</div>
			<h2 className='text-light h3 text-center'>{title}</h2>
			<p className='text-light text-center'>{description}</p>
		</div>
	);
};

export default ServicesCard;
