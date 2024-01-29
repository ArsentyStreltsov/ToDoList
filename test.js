/*

// Example 1: Add a task to the list
addToList('Buy groceries');

// Example 2: Add a task using an object
addToList({ name: 'Feed the cat', description: 'Buy cat food' });

// Example 3: Add a task to the top of the list
addToTopOfList('Finish work project');

// Example 4: Remove the last task from the list
const removedFromBottom = removeFromBottomOfList();
console.log('Removed from bottom:', removedFromBottom);

// Example 5: Remove the first task from the list
const removedFromTop = removeFromTopOfList();
console.log('Removed from top:', removedFromTop);

// Example 6: Remove a task by index
const removedByIndex = removeFromListByIndex(1); // Remove the second task
console.log('Removed by index:', removedByIndex);

// Example 7: Remove a task by name
const removedByName = removeFromListByName('Feed the cat');
console.log('Removed by name:', removedByName);

// Example 8: Move a task to the "Done" list
const doneListResult = removeFromListAndAddToDone('Finish work project');
console.log('Done list:', doneListResult);

// Example 9: Move a task to the top of the list
const movedToTopResult = moveToTop('Buy groceries');
console.log('Moved to top:', movedToTopResult);

// Example 10: Move a task to the bottom of the list
const movedToBottomResult = moveToBottom('Finish work project');
console.log('Moved to bottom:', movedToBottomResult);

// Example 11: Move a task down in the list
const moveDownResult = moveDown(0); // Move the first task down
console.log('Move down:', moveDownResult);

// Example 12: Move a task up in the list
const moveUpResult = moveUp(1); // Move the second task up
console.log('Move up:', moveUpResult);
*/





// Create example of the TodoList class
const todoManager = new TodoList();

// Example 1: Add a task to the list
todoManager.addToList('Buy groceries');

// Example 2: Add a task using an object
todoManager.addToList({ name: 'Feed the cat', description: 'Buy cat food' });

// Example 3: Add a task to the top of the list
todoManager.addToTopOfList('Finish work project');

// Example 4: Remove the last task from the list
const removedFromBottom = todoManager.removeFromBottomOfList();
console.log('Removed from bottom:', removedFromBottom);

// Example 5: Remove the first task from the list
const removedFromTop = todoManager.removeFromTopOfList();
console.log('Removed from top:', removedFromTop);

// Example 6: Remove a task by index
const removedByIndex = todoManager.removeFromListByIndex(1); // Remove the second task
console.log('Removed by index:', removedByIndex);

// Example 7: Remove a task by name
const removedByName = todoManager.removeFromListByName('Feed the cat');
console.log('Removed by name:', removedByName);

// Example 8: Move a task to the "Done" list
const doneListResult = todoManager.removeFromListAndAddToDone('Finish work project');
console.log('Done list:', doneListResult);

// Example 9: Move a task to the top of the list
const movedToTopResult = todoManager.moveToTop('Buy groceries');
console.log('Moved to top:', movedToTopResult);

// Example 10: Move a task to the bottom of the list
const movedToBottomResult = todoManager.moveToBottom('Finish work project');
console.log('Moved to bottom:', movedToBottomResult);

// Example 11: Move a task down in the list
const moveDownResult = todoManager.moveDown(0); // Move the first task down
console.log('Move down:', moveDownResult);

// Example 12: Move a task up in the list
const moveUpResult = todoManager.moveUp(1); // Move the second task up
console.log('Move up:', moveUpResult);
