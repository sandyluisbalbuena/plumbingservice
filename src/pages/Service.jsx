import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Profile from '../components/Profile';
import SkeletonLoader from '../components/SkeletonLoader';
import { useParams } from 'react-router-dom';
import SkeletonLoaderList from '../components/SkeletonLoaderList';

const Service = () => {
	const [loading, setLoading] = useState(true);
	const { service } = useParams();
	const [services, setServices] = useState([]);
	const [serviceTitle, setServiceTitle] = useState('');
	const [breadcrumb, setBreadcrumb] = useState([]);


	useEffect(()=>{
		if(service == 'declogging'){
			setBreadcrumb([
				{ text: 'Services', url: '/services' },
				{ text: 'Declogging', url: '/' },
			])

			setServiceTitle('Declogging');

			setServices ([
				{
					title:'Toilet Bowl',
					image:'https://trustedmalabanansiphoning.files.wordpress.com/2018/09/34919451_446697035757262_2064962706175164416_n.jpg?w=1200'
				},
				{
					title:'Kitchen Sink',
					image:'https://trustedmalabanansiphoning.files.wordpress.com/2018/09/34919451_446697035757262_2064962706175164416_n.jpg?w=1200'
				},
				{
					title:'Drainage',
					image:'https://trustedmalabanansiphoning.files.wordpress.com/2018/09/34919451_446697035757262_2064962706175164416_n.jpg?w=1200'
				},
				{
					title:'Floor Drain',
					image:'https://trustedmalabanansiphoning.files.wordpress.com/2018/09/34919451_446697035757262_2064962706175164416_n.jpg?w=1200'
				},
				{
					title:'Lavatory Sink',
					image:'https://trustedmalabanansiphoning.files.wordpress.com/2018/09/34919451_446697035757262_2064962706175164416_n.jpg?w=1200'
				},
				{
					title:'Septic Tank',
					image:'https://trustedmalabanansiphoning.files.wordpress.com/2018/09/34919451_446697035757262_2064962706175164416_n.jpg?w=1200'
				},
			]);
		}

		if(service == 'installation'){
			setBreadcrumb([
				{ text: 'Services', url: '/services' },
				{ text: 'Installation', url: '/' },
			])

			setServiceTitle('Installation');

			setServices ([
				{
					title:'Ordinary Faucet',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
				{
					title:'Fountain Faucet',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
				{
					title:'Water Heaters',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
				{
					title:'Water Pumps',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
				{
					title:'Pressure Tank',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
				{
					title:'Automatic Switch',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
				{
					title:'Pressure Gauge',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
				{
					title:'Water Storage Tank',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
				{
					title:'Submeters',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
				{
					title:'Waterlines',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
				{
					title:'Shower',
					image:'https://3.imimg.com/data3/KY/SE/MY-17368774/plumber-500x500.jpg',

				},
			]);
		}

		if(service == 'replacement'){
			setBreadcrumb([
				{ text: 'Services', url: '/services' },
				{ text: 'Replacement', url: '/' },
			])

			setServiceTitle('Replacement');

			setServices ([
				{
					title:'Toilet Bowl',
					image:'https://library.homeserve.com/m/41f85c9eeb13bea1/Blog-AdobeStock_216282910.jpg',

				},
				{
					title:'Kitchen Sink',
					image:'https://library.homeserve.com/m/41f85c9eeb13bea1/Blog-AdobeStock_216282910.jpg',

				},
				{
					title:'Videt',
					image:'https://library.homeserve.com/m/41f85c9eeb13bea1/Blog-AdobeStock_216282910.jpg',

				},
				{
					title:'Angle valve',
					image:'https://library.homeserve.com/m/41f85c9eeb13bea1/Blog-AdobeStock_216282910.jpg',

				},
				{
					title:'Flexible Hose',
					image:'https://library.homeserve.com/m/41f85c9eeb13bea1/Blog-AdobeStock_216282910.jpg',

				},
			]);
		}
	},[service]);
	
	

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000); 
	}, []);

	return (
		<>
		<Breadcrumb items={breadcrumb} />

		<section className='row'>
			<div className='col-12 col-lg-8 my-2'>
		
			<div className="card banner">
				<div className="card-body">
				<div className="card-text">
					{serviceTitle && (
						<h1>{serviceTitle}</h1>
					)}
				</div>
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
							{/* <div className="col-12">
								<SkeletonLoaderList />
							</div> */}

							<div className="col-4">
								<SkeletonLoader />
							</div>

							<div className="col-4">
								<SkeletonLoader />
							</div>

							<div className="col-4">
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
									<a href="/services/declogging" className="btn btn-primary">Inquire</a>
									</div>
								</div>
							</div>
						))
						// <div className="list-group list-group-light">
						// 	{services.map((service, index) => (
						// 		<button key={index} type="button" className="list-group-item list-group-item-action px-3 border-0">
						// 			{service.title}
						// 		</button>
						// 	))}
						// </div>
					)}
				</div>
			</div>
		</section>
		</>
	);
}

export default Service