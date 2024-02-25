import { createContext, useContext, useEffect, useState } from 'react';
import { importJson } from '../components/index.js';

const AppContext = createContext({});
export const useApp = () => {
	return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getTaskById = (id) => {
		return tasks.find((task) => task.id === id);

	}
	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => await importJson(setTasks);
		fetchData();
		setIsLoading(false);
	}, []);
	return (
		<AppContext.Provider
			value={{ tasks, setTasks, getTaskById}}>
			{isLoading ? <h1>Loading</h1> : children}
		</AppContext.Provider>
	);
};