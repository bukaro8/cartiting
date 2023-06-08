import React, { FC } from 'react';

import style from './ImageCard.module.css';
interface Props {
	url: string;
	title?: string;
}
const ImageCard: FC<Props> = ({ url, title }) => {
	return (
		<div
			className={`bg-lightGrey ${style.size}`}
			style={{
				backgroundImage: `url(${url})`,
			}}
		>
			<h3 className='h2 bold text-white text-center'>{title}</h3>
		</div>
	);
};

export default ImageCard;
