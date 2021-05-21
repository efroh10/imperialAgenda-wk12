import { useState } from "react";

export const MainPage = (props) => {
    return(
        <div className = 'main'>
            <List/>
        </div>
    );
}

const List = (props) => {
    const [priority, setPriority] = useState(true);
    const [removeable, setRemoveable] = useState(true);
    const [removeable1, setRemoveable1] = useState(true);
    console.log(priority);
    return(
        <div>
            <Title/>
            {priority ? 
                <div>
                    <ul>
                        {removeable && <li onContextMenu = {() => setRemoveable(false)}>Flex on Obi-Wan</li>}
                        {removeable1 && <li onContextMenu = {() => setRemoveable1(false)}>Blow up Planets</li>}
                        <li>Hang with Palpatine</li>
                        <li>Ask a Random Kid if they ever heard the Tragedy of Darth Plagueis the Wise</li>
                        <li>Scream "Unlimited Power!"</li>
                    </ul>
                    <Input/>
                    <br/>
                    <button onClick = {() => setPriority(!priority)}>See What We're Going To Do</button>
                </div>
                :
                <div>
                    <ul>
                        <li>Think about Padme and Cry</li>
                    </ul>
                    <button onClick = {() => setPriority(!priority)}>See What We Need To Do</button>
                </div> 
            }
        </div>
        
    );
}

const Title = (props) => {
    return(
        <h1>Imperial Agenda</h1>
    );
}

const Input = (props) => {
    const [task, setTask] = useState('');
    return(
        <div>
            {task &&
                <ul>
                    <li>{task}</li>
                </ul>
                }
            <input value = {task} onChange = {(event) => setTask(event.target.value)} className = 'input'></input>
        </div>
    );
}