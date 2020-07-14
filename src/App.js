import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	return (
		<div className='container'>
			<Header />
		</div>
	);
};

export default App;
