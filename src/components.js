// personal stretch: 
// make the list to reorder with checked checkboxes at the bottom

import { useState } from "react";

let tasks = ['Flex on Obi-Wan', 'Blow up Planets', 'Hang with Palpatine', 'Ask a Random Kid if they ever heard the Tragedy of Darth Plagueis the Wise', 'Scream "Unlimited Power!"']

export const MainPage = (props) => {
    return(
        <div className = 'main'>
            <List/>
        </div>
    );
}



const List = (props) => {
    const [priority, setPriority] = useState(true);
    const [editMode, setEditMode] = useState(0);
    const [addMode, setAddMode] = useState(false);

    function makeList(tasks){
        return(
            tasks.map((task, index) => (
                <ListItem task = {task} count = {index + 1} key = {task}/>
            ))
        )
    }

    const ListItem = (props) => {
        return(
            <div className = 'item'>
                <input type = 'checkbox'></input>
                <li onDoubleClick = {() => setEditMode(props.count)} onMouseUp = {() => console.log(props.count)}>{props.task}</li>
            </div>
        );
    }

    const EditModal = (props) => {
        const [editedTask, setEditedTask] = useState('');
        return(
            <div className = 'modal'>
                <input className = 'modalMember' placeholder = {tasks[editMode-1]} value = {editedTask} onChange = {(event) => setEditedTask(event.target.value)}></input>
                <button className = 'modalMember' onClick = {() => tasks.splice(editMode-1    , 1)} onMouseUp = {() => console.log(tasks)}>Delete This Task</button>
                <button className = 'modalMember' onClick = {() => tasks.splice((editMode-1), 1, editedTask)} onMouseUp= {() => console.log(tasks)}>Update Task</button>
                <button className = 'modalMember' onMouseUp = {() => setEditMode(0)}>Done</button>
            </div>
        );
    }

    const AddModal = (props) => {
        const [addedTask, setAddedTask] = useState('');
        return(
            <div className = 'modal'>
                <input className = 'modalMember' value = {addedTask} onChange = {(event) => setAddedTask(event.target.value)}></input>
                <button className = 'modalMember' onClick = {() => tasks.push(addedTask)}>Add Task</button>
                <button className = 'modalMember' onClick = {() => setAddMode(false)}>Done</button>
            </div>
        );
    }



    return(
        <div>
            {priority ? 
                <div>
                    <Title/>
                    <ol>
                        {makeList(tasks)}
                    </ol>
                    <br/>
                    <button onClick = {() => setPriority(!priority)}>See What We're Going To Do</button>
                    <button onClick = {() => setAddMode(true)}>Add Task</button>
                    {editMode && 
                    <EditModal/>
                    }
                    {addMode &&
                    <AddModal/>
                    }
                </div>
                :
                <div>
                    <ul>
                        <li className = 'inevitable'>Think about Padme and Cry</li>
                    </ul>
                    <button onClick = {() => setPriority(!priority)}>See What We Need To Do</button>
                </div> 
            }
        </div>
        
    );
}



const Title = (props) => {
    return(
        <div>
            <h1>Imperial Agenda:</h1>
            <p className = 'instructions'>Doubleclick To Edit</p>
        </div>
    );
}