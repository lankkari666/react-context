import { List, SectionAdd } from '../../components';
import { useState } from 'react';
import { AppProvider, useApp } from '../../context/index.js';

export const MainPage = () => {

	const [textInput, setTextInput] = useState('');
	const { setTasks } = useApp();

	return (
		<>
			<div className="container">
				<AppProvider>
					<SectionAdd
						value={textInput}
						onChangeValue={setTextInput}
						funcSet={setTasks}
					/>

					<List />
				</AppProvider>
			</div>
		</>
	);
};
