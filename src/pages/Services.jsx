import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import Breadcrumb from '../components/Breadcrumb';
import SkeletonLoader from '../components/SkeletonLoader';

const Services = (props) => {
	const [loading, setLoading] = useState(true);
	const breadcrumbs = [
		{ text: 'Services', url: '/' },
	];

	const services = [
		{
			title:'Declogging',
			image:'https://trustedmalabanansiphoning.files.wordpress.com/2018/09/34919451_446697035757262_2064962706175164416_n.jpg?w=1200',
			href: '/declogging'
		},
		{
			title:'Installation',
			image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',
			href:'/installation'
		},
		{
			title:'Replacement',
			image:'https://library.homeserve.com/m/41f85c9eeb13bea1/Blog-AdobeStock_216282910.jpg',
			href:'/replacement'
		},
	];

	

	useEffect(() => {
		// Simulate fetching data from an API or performing an async operation
		// For demonstration purposes, use a setTimeout to mimic an API call
		setTimeout(() => {
		setLoading(false);
		}, 1000); // Simulate 1 second loading time
	}, []);

	return (
		<>
		<Breadcrumb items={breadcrumbs} />

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
			<div className='col-12 col-lg-8'>
				<div className="services row">
					{loading ? (
						<>
							<div className="col-lg-4">
								<SkeletonLoader />
							</div>
							<div className="col-lg-4">
								<SkeletonLoader />
							</div>
							<div className="col-lg-4">
								<SkeletonLoader />
							</div>
						</>
						) : (
						services.map((service, index) => (
							<div className="col-12 col-lg-4 my-2" key={index}>
								<div className="card">
									<div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
									<img src={service.image} className="img-fluid" alt="" />
									<a href="#!">
										<div className="mask"></div>
									</a>
									</div>
									<div className="card-body">
									<p className="card-text">{service.title}</p>
									<a href={'services'+service.href} className="btn btn-primary">Inquire</a>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</section>
		</>
	);
};

export default Services;
