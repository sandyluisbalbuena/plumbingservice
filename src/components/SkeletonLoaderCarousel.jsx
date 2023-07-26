import React from 'react'

const SkeletonLoaderCarousel = () => {
	return (
		<div className="card">
			<div className=" placeholder-wave">
				<div className='placeholder col-12 rounded' style={{ height: '370px', borderRadius:'20' }}></div>
			</div>
		</div>
	);
}

export default SkeletonLoaderCarousel