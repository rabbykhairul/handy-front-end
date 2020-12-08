import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoItemForm from "./ToDoItemForm";
import "./ToDoListDisplay.css";

const ToDoListDisplay = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [creatingNewTaskStatus, setCreatingNewTaskStatus] = useState(false);
  const [editingItemFromList, setEditingItemFromList] = useState(false);
  const [editItemId, setEditItemId] = useState("");

  // event handlers
  const letUserCreateANewTask = () => {
    setEditingItemFromList(false);
    setEditItemId("");
    setCreatingNewTaskStatus(true);
  };

  const addNewToDoItem = (toDoDescription) => {
    const newToDoItems = [...toDoItems];
    newToDoItems.push({
      id: Date.now(),
      description: toDoDescription,
      checked: false,
    });
    setToDoItems(newToDoItems);
  };

  const abortNewTaskCreation = () => {
    setCreatingNewTaskStatus(false);
  };

  const toggleCheckedStatusOfItem = (itemId) => {
    const newToDoItems = [...toDoItems];
    const targetItemIdx = newToDoItems.findIndex((item) => item.id === itemId);
    const updatedItem = { ...newToDoItems[targetItemIdx] };
    updatedItem.checked = !updatedItem.checked;
    newToDoItems[targetItemIdx] = updatedItem;
    setToDoItems(newToDoItems);
  };

  const letUserEditItem = (itemId) => {
    setEditingItemFromList(true);
    setCreatingNewTaskStatus(false);
    setEditItemId(itemId);
  };

  const updateEditedItem = (toDoDescription) => {
    const newToDoItems = [...toDoItems];
    const targetItemIdx = newToDoItems.findIndex(
      (item) => item.id === editItemId
    );
    const updatedItem = {
      ...newToDoItems[targetItemIdx],
      description: toDoDescription,
    };
    newToDoItems[targetItemIdx] = updatedItem;
    setToDoItems(newToDoItems);

    setEditItemId("");
    setEditingItemFromList(false);
  };

  const abortEditMode = () => {
    setEditItemId("");
    setEditingItemFromList(false);
  };

  const deleteItemFromList = (itemId) => {
    const newToDoItems = toDoItems.filter((item) => item.id !== itemId);
    setToDoItems(newToDoItems);
  };

  // helper methods for rendering
  const renderListHeader = () => {
    return <h1 className="to-do-list-main-header">Today</h1>;
  };

  const renderToDoItems = () => {
    return toDoItems.map((item) => (
      <ToDoItem
        key={item.id}
        description={item.description}
        checked={item.checked}
        onCheck={() => toggleCheckedStatusOfItem(item.id)}
        onEditClick={() => letUserEditItem(item.id)}
        editModeRunning={item.id === editItemId}
        onEditDone={updateEditedItem}
        onEditCancel={abortEditMode}
        onDelete={() => deleteItemFromList(item.id)}
      />
    ));
  };

  const renderAddTaskPrompt = () => {
    if (creatingNewTaskStatus) return null;

    return (
      <div className="add-task-button" onClick={letUserCreateANewTask}>
        <span className="plus-icon">+</span>
        Add task
      </div>
    );
  };

  const renderToDoItemForm = () => {
    if (creatingNewTaskStatus)
      return (
        <ToDoItemForm
          onSubmit={addNewToDoItem}
          onCancel={abortNewTaskCreation}
        />
      );
    return null;
  };

  return (
    <div className="to-do-list-display">
      {renderListHeader()}
      {renderToDoItems()}
      {renderAddTaskPrompt()}
      {renderToDoItemForm()}
    </div>
  );
};

export default ToDoListDisplay;
