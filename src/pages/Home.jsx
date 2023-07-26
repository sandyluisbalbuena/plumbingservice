import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Profile from '../components/Profile';
import Carousel from '../components/Carousel';
import SkeletonLoaderCarousel from '../components/SkeletonLoaderCarousel';

const Home = () => {
	const breadcrumbs = [
		{ text: 'Home', url: '/' },
	];

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
		setLoading(false);
		}, 2500);
	}, []);
	return (
		<>
			<Breadcrumb  items={breadcrumbs}/>

			<section className='row'>
				<div className='col-12 col-lg-8 my-2'>
					<div className="card banner">
						<div className="card-body">
							{/* <div className="card-text">
								<h1>Home Page</h1>
							</div> */}
						</div>
					</div>
				</div>
				<div className='col-12 col-lg-4 my-2'>
					<Profile />
				</div>
			</section>

			<section className='row my-4'>
				{loading ? (
				// Show skeleton loaders while services are loading
				<>
					<div className="col-12">
					<SkeletonLoaderCarousel />
					</div>
				</>
				) : (
					<>
				<div className='col-12'>
					<Carousel/>
				</div>
				</>
				)}
			</section>
		</>
	)
}

export default Home