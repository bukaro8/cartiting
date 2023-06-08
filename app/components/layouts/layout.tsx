import Head from 'next/head';
import { FC } from 'react';
import Navbar from '../navbar';
import { metadata } from '../../layout';
interface Props {
	children?: React.ReactNode;
	title?: string;
}
export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'Infinity Tints'}</title>
				<meta name='description' content={`${title}`} />
				<meta name='author' content='Vic' />
				<meta name='keywords' content={`${title}`} />
			</Head>
			<Navbar />
			<main className='bg-dark' style={{ height: '100vh', padding: '0x 20y' }}>
				{children}
			</main>
		</>
	);
};
