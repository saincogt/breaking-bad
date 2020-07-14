import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import CharacterGrid from './components/CharacterGrid';
import axios from 'axios';

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');
	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(
				`https://breakingbadapi.com/api/characters?name=${query}`
			);
			setItems(result.data);
			setIsLoading(false);
		};
		fetchItems();
	}, [query]);
	return (
		<div className='container'>
			<Header />
			<Search getQuery={(q) => setQuery(q)} />
			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
};

export default App;
