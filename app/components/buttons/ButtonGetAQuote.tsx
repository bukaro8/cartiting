import React, { FC } from 'react';
import Navlink from 'next/link';

interface Props {
	link: string;
	text: string;
	color?: string;
	colorBg?: string;
}
const ButtonGetAQuote: FC<Props> = ({
	link,
	text,
	colorBg = 'btn-light',
	color = 'text-success',
}) => {
	return (
		<Navlink href={link}>
			<button className={`btn  ${color} ${colorBg}`}>{text}</button>
		</Navlink>
	);
};

export default ButtonGetAQuote;
