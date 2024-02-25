import { postJson } from '../axiosReq';
import './sectionAdd.css';
import { useApp } from '../../context/index.js';

export const SectionAdd = ({ value, onChangeValue, funcSet }) => {
	const { setTasks } = useApp();
	return (
		<form className="formAdd">
			<input
				className="inputText"
				type="text"
				placeholder="Введите текст"
				value={value}
				onChange={(e) => onChangeValue(e.target.value)}
			/>
			<button
				onClick={() => postJson(value, onChangeValue, setTasks)}
				type="button"
				className="btn_add"
				disabled={value.length === 0}
			>
				Добавить
			</button>
		</form>
	);
};
