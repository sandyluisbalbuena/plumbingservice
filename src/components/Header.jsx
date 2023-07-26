import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	let [activeLink, setActiveLink] = useState('');


	let handleNavLinkClick = (link) => {
		setActiveLink(link);
		localStorage.setItem('activeLink', link);   
		let navbarToggler = document.querySelector('.navbar-toggler');
		let navbarCollapse = document.querySelector('.navbar-collapse');
		if (navbarToggler && navbarCollapse) {
			navbarToggler.classList.add('collapsed');
			navbarCollapse.classList.remove('show');
		}
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark myNavbar">
				<div className="container">
					<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					>
					<i className="fas fa-bars"></i>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<a className="navbar-brand mt-2 mt-lg-0" href="#">
						<img
						src="/assets/images/brand.png"
						height="40"
						alt="MDB Logo"
						loading="lazy"
						className='rounded'
						/>
					</a>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/" onClick={() => handleNavLinkClick('home')} className={`nav-link hvr-underline-from-center  ${activeLink === 'home' ? 'active' : ''}`}  >Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/services"  onClick={() => handleNavLinkClick('services')} className={`nav-link hvr-underline-from-center ${activeLink === 'services' ? 'active' : ''}`}  >Services</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" onClick={() => handleNavLinkClick('about')} className={`nav-link hvr-underline-from-center ${activeLink === 'about' ? 'active' : ''}`}  >About</Link>
							</li>
						</ul>
					</div>

					<div className="d-flex align-items-center">
						<div className="dropdown">
							<a
							className="dropdown-toggle d-flex align-items-center hidden-arrow"
							href="#"
							id="navbarDropdownMenuAvatar"
							role="button"
							data-mdb-toggle="dropdown"
							aria-expanded="false"
							>
							<img
								src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
								className="rounded-circle"
								height="25"
								alt="Black and White Portrait of a Man"
								loading="lazy"
							/>
							</a>
							<ul
							className="dropdown-menu dropdown-menu-end"
							aria-labelledby="navbarDropdownMenuAvatar"
							>
							<li>
								<a className="dropdown-item" href="#">My profile</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">Settings</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">Logout</a>
							</li>
							</ul>
						</div>
					</div>

				</div>
			</nav>
		</>
	)
}

export default Header