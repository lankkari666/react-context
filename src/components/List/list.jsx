import { SectionList } from '../SectionList/SectionList.jsx';
import { useApp } from '../../context/context.jsx';


export const List = () => {
	const { setTasks, tasks } = useApp();
	return (
		<div className="list">
			<ul>
				{tasks.map((item) => {
					return (
						<SectionList
							key={item.id}
							check={item.check}
							index={item.id}
							funcSet={setTasks}
						>
							{item.text}
						</SectionList>
					);
				})}
			</ul>
		</div>
	);
};