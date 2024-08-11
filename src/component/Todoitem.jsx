import React from 'react';

function Todoitem(props) {
    console.log(props);
    return (
        <>
            <div className='todo-item'><p>{props.task}</p></div>
        </>
    );
}
export default Todoitem;
