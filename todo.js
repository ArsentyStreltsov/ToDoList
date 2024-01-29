/* let todoList = [];

function addToList(todoItem) {
  todoList.push(todoItem);
  return todoList;
}

function addToTopOfList(todoItem) {
  todoList.unshift(todoItem);
  return todoList;
}

function removeFromBottomOfList() {
  return todoList.pop();
}

function removeFromTopOfList() {
  return todoList.shift();
}

function removeFromListByIndex(index) {
  if (index >= 0 && index < todoList.length) {
    return todoList.splice(index, 1)[0];
  } else {
    return null; // Invalid index
  }
}

function removeFromListByName(name) {
  const index = todoList.findIndex(item => item.name === name);
  if (index !== -1) {
    return removeFromListByIndex(index);
  } else {
    return null; // Item not found
  }
}

// Additional functionalities
let doneList = [];

function removeFromListAndAddToDone(name) {
  const removedItem = removeFromListByName(name);
  if (removedItem) {
    doneList.push(removedItem);
  }
  return doneList;
}

function moveToTop(name) {
  const item = removeFromListByName(name);
  if (item) {
    addToTopOfList(item);
  }
  return todoList;
}

function moveToBottom(name) {
  const item = removeFromListByName(name);
  if (item) {
    addToList(item);
  }
  return todoList;
}

function moveDown(index) {
  if (index >= 0 && index < todoList.length - 1) {
    const temp = todoList[index];
    todoList[index] = todoList[index + 1];
    todoList[index + 1] = temp;
  }
  return todoList;
}

function moveUp(index) {
  if (index > 0 && index < todoList.length) {
    const temp = todoList[index];
    todoList[index] = todoList[index - 1];
    todoList[index - 1] = temp;
  }
  return todoList;
}
*/


class TodoList {
  constructor() {
    this.todoList = [];
    this.doneList = [];
  }

  addToList(todoItem) {
    this.todoList.push(todoItem);
    return this.todoList;
  }

  addToTopOfList(todoItem) {
    this.todoList.unshift(todoItem);
    return this.todoList;
  }

  removeFromBottomOfList() {
    return this.todoList.pop();
  }

  removeFromTopOfList() {
    return this.todoList.shift();
  }

  removeFromListByIndex(index) {
    if (index >= 0 && index < this.todoList.length) {
      return this.todoList.splice(index, 1)[0];
    } else {
      return null; // Invalid index
    }
  }

  removeFromListByName(name) {
    const index = this.todoList.findIndex(item => item.name === name);
    if (index !== -1) {
      return this.removeFromListByIndex(index);
    } else {
      return null; // Item not found
    }
  }

  removeFromListAndAddToDone(name) {
    const removedItem = this.removeFromListByName(name);
    if (removedItem) {
      this.doneList.push(removedItem);
    }
    return this.doneList;
  }

  moveToTop(name) {
    const item = this.removeFromListByName(name);
    if (item) {
      this.addToTopOfList(item);
    }
    return this.todoList;
  }

  moveToBottom(name) {
    const item = this.removeFromListByName(name);
    if (item) {
      this.addToList(item);
    }
    return this.todoList;
  }

  moveDown(index) {
    if (index >= 0 && index < this.todoList.length - 1) {
      const temp = this.todoList[index];
      this.todoList[index] = this.todoList[index + 1];
      this.todoList[index + 1] = temp;
    }
    return this.todoList;
  }

  moveUp(index) {
    if (index > 0 && index < this.todoList.length) {
      const temp = this.todoList[index];
      this.todoList[index] = this.todoList[index - 1];
      this.todoList[index - 1] = temp;
    }
    return this.todoList;
  }
}