import ServicesCard from '../components/card/ServicesCard';
import { Layout } from '../components/layouts';

const Services = () => {
	return (
		<Layout>
			<div
				className={`d-flex flex-column justify-content-center align-items-center `}
				style={{
					height: '100vh',
					backgroundImage: `url('https://ultimatewindowtinting.com/wp-content/uploads/2018/11/Car-Window-Tinting-1.jpg')`,
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
				}}
			>
				<div
					className={`d-flex flex-column justify-content-center align-items-center `}
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.377)' }}
				>
					<h1 className='h1 text-light'>Products and Services</h1>
					<div className='container-fluid'>
						<div className='row mt-4'>
							<div className='col-md-4  text-light d-flex justify-content-center flex-column align-items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='40'
									height='40'
									fill='currentColor'
									className='bi bi-car-front'
									viewBox='0 0 16 16'
								>
									<path d='M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z' />
									<path d='M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z' />
								</svg>
								<h2 className='text-light h3 text-center'>
									Professional Window Tinting
								</h2>
								<p className='text-light text-center'>
									We only use premium grade window tinting film to ensure a high
									quality finish that will last for years to come. We&apos;re so
									confident in our tints that we offer a lifetime guarantee for
									as long as you own the car!
								</p>
								<div className='border border-light w-75 my-2'></div>
							</div>
							<div className='col-md-4  text-light d-flex justify-content-center flex-column align-items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='40'
									height='40'
									fill='currentColor'
									className='bi bi-droplet-half'
									viewBox='0 0 16 16'
								>
									<path
										fill-rule='evenodd'
										d='M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z'
									/>
									<path
										fill-rule='evenodd'
										d='M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z'
									/>
								</svg>
								<h2 className='text-light h3 text-center'>
									Professional Window Tinting
								</h2>
								<p className='text-light text-center'>
									We only use premium grade window tinting film to ensure a high
									quality finish that will last for years to come. We&apos;re so
									confident in our tints that we offer a lifetime guarantee for
									as long as you own the car!
								</p>
								<div className='border border-light w-75 my-2'></div>
							</div>

							<div className='col-md-4  text-light d-flex justify-content-center flex-column align-items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='40'
									height='40'
									fill='currentColor'
									className='bi bi-shield-fill-check'
									viewBox='0 0 16 16'
								>
									<path
										fill-rule='evenodd'
										d='M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z'
									/>
								</svg>
								<h2 className='text-light h3 text-center'>
									Professional Window Tinting
								</h2>
								<p className='text-light text-center'>
									We only use premium grade window tinting film to ensure a high
									quality finish that will last for years to come. We&apos;re so
									confident in our tints that we offer a lifetime guarantee for
									as long as you own the car!
								</p>
								<div className='border border-light w-75 my-2'></div>
							</div>

							<div className='col-md-6  text-light d-flex justify-content-center flex-column align-items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='40'
									height='40'
									fill='currentColor'
									className='bi bi-shield-fill-check'
									viewBox='0 0 16 16'
								>
									<path
										fill-rule='evenodd'
										d='M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z'
									/>
								</svg>
								<h2 className='text-light h3 text-center'>
									Professional Window Tinting
								</h2>
								<p className='text-light text-center'>
									We only use premium grade window tinting film to ensure a high
									quality finish that will last for years to come. We&apos;re so
									confident in our tints that we offer a lifetime guarantee for
									as long as you own the car!
								</p>
								<div className='border border-light w-75 my-2'></div>
							</div>

							<div className='col-md-6  text-light d-flex justify-content-center flex-column align-items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='40'
									height='40'
									fill='currentColor'
									className='bi bi-scissors'
									viewBox='0 0 16 16'
								>
									<path d='M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z' />
								</svg>
								<h2 className='text-light h3 text-center'>
									Professional Window Tinting
								</h2>
								<p className='text-light text-center '>
									We only use premium grade window tinting film to ensure a high
									quality finish that will last for years to come. We&apos;re so
									confident in our tints that we offer a lifetime guarantee for
									as long as you own the car!
								</p>
								<div className='border border-light w-75 my-2'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Services;
