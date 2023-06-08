import React, { FC } from 'react';
import style from './TextCard.module.css';
import ButtonGetAQuote from '../buttons/ButtonGetAQuote';
interface Props {
	title: string;
	text: string;
	text2?: string;
	text3?: string;
	text4?: string;
	quickButton?: boolean;
	contactButton?: boolean;
}
const Text: FC<Props> = ({
	title,
	text,
	text2,
	text3,
	text4,
	quickButton = true,
	contactButton = true,
}) => {
	return (
		<div
			className={`d-flex bg-dark flex-column justify-content-around align-items-center ${style.size}`}
		>
			<h3 className={`h1 text-capitalize  ${style.title}`}>{title}</h3>
			<div className='row d-flex flex-column  align-items-center justify-content-center'>
				<h2 className='  text-center h3 col-11 text-light'>{text}</h2>

				{text2 && (
					<h2 className='  text-center h3 col-11 text-light'>{text2}</h2>
				)}

				{text3 && (
					<h2 className='  text-center h3 col-11 text-light'>{text3}</h2>
				)}
				{text4 && (
					<h2 className='  text-center h3 col-11 text-light'>{text4}</h2>
				)}
			</div>
			<div className='border w-75'></div>
			<div className='d-flex justify-content-around w-75'>
				{quickButton && (
					<ButtonGetAQuote
						link={'/prices'}
						text={'Quick Quote'}
						color='text-success'
					/>
				)}
				{contactButton && (
					<ButtonGetAQuote
						link={'/contact'}
						color={'text-light'}
						text={'Contact Us'}
						colorBg={'bg-success'}
					/>
				)}
			</div>
		</div>
	);
};

export default Text;
