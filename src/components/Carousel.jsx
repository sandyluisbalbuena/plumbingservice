import React from 'react'

const Carousel = () => {
	return (
		<div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark myCarousel" data-mdb-ride="carousel">
			<div className="carousel-indicators">
				<button
				data-mdb-target="#carouselDarkVariant"
				data-mdb-slide-to="0"
				className="active"
				aria-current="true"
				aria-label="Slide 1"
				></button>
				<button
				data-mdb-target="#carouselDarkVariant"
				data-mdb-slide-to="1"
				aria-label="Slide 1"
				></button>
				<button
				data-mdb-target="#carouselDarkVariant"
				data-mdb-slide-to="2"
				aria-label="Slide 1"
				></button>
			</div>

			<div className="carousel-inner">

				<div className="carousel-item active">
					<div className='carousel-img-container'>
						<img src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="zoomed-image-carousel" alt="Motorbike Smoke"/>
					</div>
					<div className="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</div>

				<div className="carousel-item active">
					<div className='carousel-img-container'>
						<img src="https://images.unsplash.com/photo-1674726253061-baba094ad8c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="zoomed-image-carousel" alt="Motorbike Smoke"/>
					</div>
					<div className="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</div>

				<div className="carousel-item active">
					<div className='carousel-img-container'>
						<img src="https://images.unsplash.com/photo-1654440122140-f1fc995ddb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1097&q=80" className="zoomed-image-carousel" alt="Motorbike Smoke"/>
					</div>
					<div className="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</div>

			</div>

			<button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	)
}

export default Carousel