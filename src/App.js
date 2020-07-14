import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import axios from 'axios';

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(
				`https://breakingbadapi.com/api/characters`
			);
			setItems(result.data);
			setIsLoading(false);
		};
		fetchItems();
	}, []);
	return (
		<div className='container'>
			<Header />
			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
};

export default App;
