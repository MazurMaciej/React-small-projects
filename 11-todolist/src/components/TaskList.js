import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);

    const activeTasksList = active.map(task => {
        return (
            <Task
                key={task.id}
                task={task}
                delete={props.delete}
                change={props.change}
            />)
    })

    const doneTasksList = props.tasks.filter(task => !task.active);

    doneTasksList.sort((a, b) => {
        return b.finishDate - a.finishDate
    })

    active.sort((a, b) => {
        if (a.text < b.text) return -1;
        if (a.text > b.text) return 1;
        return 0
    })

    const doneList = doneTasksList.map(task => {
        return (
            <Task
                key={task.id}
                task={task}
                delete={props.delete}
                change={props.change}
            />)
    })



    return (
        <>
            <div className="active">
                <h1>Lista zadań do zrobienia:</h1>
                {activeTasksList.length > 0 ? activeTasksList : <p>Nie masz nic do roboty</p>}
            </div>
            <hr />
            <div className="done">
                <h3>Lista zadań zrobionych({doneTasksList.length})</h3>
                {doneTasksList.length > 2 && <span>Wyświetlonych jest jedynie 2 ostatnie elemenety</span>}
                {doneList.slice(0, 2)}
            </div>
        </>
    );
}

export default TaskList;