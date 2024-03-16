import React from 'react';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <div className='tasks'>
      {tasks.map(task => (
        <div key={task._id}>
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </div>
          <div>
            <button onClick={() => onUpdateTask({...task, status: 'In Progress'})}>Start</button>
            <button onClick={() => onUpdateTask({...task, status: 'Done'})}>Complete</button>
            <button onClick={() => onDeleteTask(task._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
