'use client';
import { ImageCard, TextCard } from './components/card';
import Hero from './components/hero';
import { Layout } from './components/layouts';

export default function Home() {
	return (
		<main>
			<Layout title='home'>
				<Hero />
				<div className=' d-flex row '>
					<div className='col-md-6 p-0 '>
						<TextCard
							quickButton={false}
							title={'car Window Tinting'}
							text={'All the convenience at an unbeatable price'}
						/>
					</div>
					<div className='col-md-6 p-0 m-0 '>
						<ImageCard
							url={
								'https://static.wixstatic.com/media/7a115a_b84c7e1257574f229eb6625558b01ad8~mv2.png/v1/fill/w_715,h_516,fp_0.50_0.50,lg_1,q_90,enc_auto/7a115a_b84c7e1257574f229eb6625558b01ad8~mv2.png'
							}
						/>
					</div>
				</div>

				<div className=' d-flex row flex-row-reverse'>
					<div className='col-md-6 p-0 '>
						<TextCard
							contactButton={false}
							title={'Choose your shade'}
							text={'Show your wherever personality'}
						/>
					</div>
					<div className='col-md-6 p-0 m-0 '>
						<ImageCard
							url={
								'https://www.moorparkwindowtint.com/wp-content/uploads/2021/08/shades.svg'
							}
						/>
					</div>
				</div>

				<div className=' d-flex row '>
					<div className='col-md-6 p-0 '>
						<TextCard
							quickButton={false}
							title={'Services'}
							text={'Car Wrapping'}
							text2={'Window Tinting'}
							text3='Paint Protection Film'
						/>
					</div>
					<div className='col-md-6 p-0 m-0 '>
						<ImageCard
							url={
								'https://carspecialistcustoms.co.uk/wp-content/uploads/2022/09/1.jpg'
							}
						/>
					</div>
				</div>
			</Layout>
		</main>
	);
}
