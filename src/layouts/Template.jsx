import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Template = () => {
	return (
		<div>
			<Header />
			<main className='container'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Template