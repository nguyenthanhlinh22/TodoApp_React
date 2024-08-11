import React from 'react'; 
import './App.css'; 
import Todoitem from './component/Todoitem';

function App() {

    const [todoList, setTodoList] = React.useState([
        { id: 1, task: "Đi học thêm" },
        { id: 2, task: "Đi chơi" },
        { id: 3, task: "Đi ăn" },
        { id: 4, task: "ân ngủ ngon giấc" },
    ]);

    function handleTodoClick() {
        console.log(todoList);
    }
    const todoListElement = todoList.map((todo, index) => {
        return <Todoitem task={todo.task} key={todo.id} />;
    });

    return (
        <>
            <div className='container'>
                <input
                    type='text'
                    name='add-new-task'
                    placeholder='Add new task '
                    className='task-input'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            console.log(e.target.value);
                            const newTask = e.target.value;
                            const newTodoList = [...todoList];
                            newTodoList.push({
                                id: newTodoList.length + 1,
                                task: newTask,
                            });
                            setTodoList(newTodoList);
                            e.target.value = ''; 
                        }
                    }}  
                />
                <div>
                    {todoListElement}
                </div>
            </div>
        </>
    );
}

export default App;
