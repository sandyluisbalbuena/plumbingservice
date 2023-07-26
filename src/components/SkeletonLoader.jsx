import React from 'react'

const SkeletonLoader = () => {
	return (
		<div className="card">
			<div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
				<div className=" placeholder-wave">
				<div className='placeholder col-12' style={{ height: '180px' }}></div>
				</div>
				<a href="#!">
				<div className="mask"></div>
				</a>
			</div>
			<div className="card-body">
				<p className="card-text placeholder-wave">
					<span className='placeholder col-8 rounded m-1'></span>
				</p>
				<a href="#!" className="btn btn-primary placeholder bg-primary">Button</a>
			</div>
		</div>
	);
}

export default SkeletonLoader