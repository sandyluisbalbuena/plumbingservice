import React from 'react'

const Profile = () => {
	return (
		<>
			<div className="card">
				<div className='profile'>
					<img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="card-img-left" alt="Fissure in Sandstone" width={150} height={150}/>
					<div className="card-body">
						<h6>John Doe</h6>
						<p>Profesional Plumber</p>
						<p className='d-none d-lg-block'>Rating: <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile