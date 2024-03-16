import React from "react";

const TaskFilter = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="center">
      <label htmlFor="filter">Filter by status:</label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default TaskFilter;
