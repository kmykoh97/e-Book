import React from 'react';
import { MdArrowBack } from 'react-icons/lib/md';
import { FaCircle } from 'react-icons/lib/fa';
import { Link } from 'react-router-dom'
import './Login.css';



const NavigationPanel = (props) => {
	function initialState() { 
		// function for initial state here
	}

	return (
		<div className='NavigationPanel'>
			<Link to='/'><MdArrowBack onClick={initialState} className='back'/></Link>
			<div className='dots'>
				<FaCircle className='dotSelected' />
				<FaCircle className='dot' />
				<FaCircle className='dot' />
			</div>
			<div style={{flex: 2}}></div>
		</div>
	);
}



export default NavigationPanel;