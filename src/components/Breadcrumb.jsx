import React from 'react';

const Breadcrumb = ({ items }) => {
	return (
		<nav aria-label="breadcrumb" className='mb-4'>
			<ol className="breadcrumb">
				{items.map((item, index) => (
				<li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
					{index === items.length - 1 ? (
					item.text
					) : (
					<a href={item.url}>{item.text}</a>
					)}
				</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
