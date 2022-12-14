import '../App.css'
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function TaskEdit({task, setTaskEdit, columns, setColumns}) {

    const handle = event => {
        event.preventDefault()
    }

    const saveData = (id) => {
        setColumns(columns.map(column => ({...column, tasks: (column.tasks.map(task => ({...task, 
            header: task.id === id ? headerRef.current.value : task.header,
            description: task.id === id ? descriptionRef.current.value : task.description
        })))})));
    }

    const saveColor = (id, color) => {
        setColumns(columns.map(column => ({...column, tasks: (column.tasks.map(task => ({...task, 
            header: task.id === id ? headerRef.current.value : task.header,
            description: task.id === id ? descriptionRef.current.value : task.description,
            color: task.id === id ? `task-${color}` : task.color
        })))})));
    }

    const headerRef = useRef(null);

    const descriptionRef = useRef(null);

    return <div className='task-edit bg-light' onDrag={handle}>
        <div className={`d-flex align-items-center justify-content-between px-4 py-2 display-6 ${task.color}`}>
            <div></div>
            <span>{task.header}</span>
            <button className='border-0 transparent h2' onClick={() => setTaskEdit(false)}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
        <div className='d-flex align-items-top justify-content-between p-4'>
            <div className='flex-grow-1'>
                <h5>Header</h5>
                <input className="transparent w-75 text-break text-wrap hover-shadow non-resizable mb-4"
                    rows="1"
                    type="text"
                    maxLength="50"
                    ref={headerRef}
                    defaultValue={`${task.header}`}
                    onBlur={() => saveData(task.id)} />
                <h5>Description</h5>
                <textarea className="transparent w-75 text-break hover-shadow non-resizable"
                    rows="5"
                    type="text"
                    maxLength="300"
                    ref={descriptionRef}
                    defaultValue={`${task.description}`}
                    onBlur={() => saveData(task.id)} />
            </div>
            <div className='w-25 flex-grow-2'>
                <div>Color</div>
                <div className='d-flex mt-2'>
                    <div className='task-grey border border-dark color-square pointer'
                        onClick={() => saveColor(task.id, 'grey')} />
                    <div className='task-green border-top border-bottom border-dark color-square pointer'
                        onClick={() => saveColor(task.id, 'green')} />
                    <div className='task-red border border-dark color-square pointer'
                        onClick={() => saveColor(task.id, 'red')} />
                    <div className='task-blue border-top border-bottom border-dark color-square pointer'
                        onClick={() => saveColor(task.id, 'blue')} />
                    <div className='task-yellow border border-dark color-square pointer'
                        onClick={() => saveColor(task.id, 'yellow')} />
                </div>
            </div>
        </div>
    </div>
}

export default TaskEdit