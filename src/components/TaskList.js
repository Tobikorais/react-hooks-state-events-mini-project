import React from "react";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteTask={() => onDeleteTask(task.text)} // Pass delete handler
        />
      ))}
    </div>
  );
}

export default TaskList;
