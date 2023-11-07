import React, { useState } from "react";

import { TaskProps } from "./Interface/TaskProps";




import Button from "react-bootstrap/Button"; // Example React Bootstrap component
import Form from "react-bootstrap/Form"; // Example React Bootstrap component
import "bootstrap/dist/css/bootstrap.min.css";

const Task: React.FC<TaskProps> = ({ text, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false); // Manage edit mode state
  const [editedText, setEditedText] = useState(text);

  const handleSaveClick = () => {
    onEdit(editedText);
    setEditing(false);
  };
  const handleEditClick = () => {
    setEditing(true); // Switch to edit mode
  };

  return (
    <div className="custom-task">
    {isEditing ? (
      <Form.Control
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
    ) : (
      <span>{text}</span>
    )}
    <Button variant="danger" onClick={onDelete} className="custom-button">
      Delete
    </Button>
    {isEditing ? (
      <Button variant="success" onClick={handleSaveClick} className="custom-button">
        Save
      </Button>
    ) : (
      <Button variant="info" onClick={handleEditClick} className="custom-button">
        Edit
      </Button>
    )}
  </div>
  );
};

export default Task;
