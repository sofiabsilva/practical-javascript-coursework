
/* .displayTodos should display .todoText
 * .displayTodos should tell you if .todos is empty
 * .displayTodos should show .completed
 */
 
var todoList= {
  todos: [],
/* 
No need for this function anymore (this was for the console)

displayTodos: function(){
    if (this.todos.length === 0) {
      console.log("The Todo list is empty!");
    } else {
    console.log("My Todos: ", this.todos);
    for (var i= 0; i <this.todos.length; i++) {
      if (this.todos[i].completed === true) {
        console.log("(x) ", this.todos[i].todoText);
      } else {
        console.log("( )", this.todos[i].todoText);
      }
    }
  }
},
*/
 addTodo: function(todoText){
     this.todos.push({
       todoText: todoText,
       completed: false
     });
},
  changeTodo: function(position, newtodoText) {
    this.todos[position].todoText = newtodoText;
},
 deleteTodo: function(position) {
    this.todos.splice(position, 1);
},
 toggleCompleted: function(position) {
   var todo= this.todos[position];  //saves time to type it out twice
   todo.completed = !todo.completed; 
 },
  // toggleAll: if everything is true,make everything false
 toggleAll: function() {
   var totalTodos = this.todos.length;
   var completedTodos = 0;
   //get completedTodos value
   for (var i=0; i <totalTodos; i++) {
     if(this.todos[i].completed === true) {
       completedTodos = completedTodos + 1; //completedTodos++;
     }
   }
   if (totalTodos === completedTodos) {
     for (var i= 0; i <totalTodos; i++) {
     //  toggleCompleted(i);
     this.todos[i].completed = false;
     } 
     //otherwise make everything true; 
   } else { 
      for (var i=0; i <totalTodos; i++) {
        this.todos[i].completed = true;
      }
   } //otherwise make everything true; 
 }
};

// Refactoring
// instead of using:
// var displayTodosButton = document.getElementbyId("displayTodosButton");
// var toggleAllButton = document.getElementbyId("toggleAllButton");

/* displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
})
    toggleAllButton.addEventListener('click', function() {
    todoList.displayTodos();
        })*/

//Refactoring by creating an Object to handle all the called functions.
var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function() {
      var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
      var changeTodoTextInput = document.getElementById("changeTodoTextInput");
      
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = "";
      changeTodoTextInput.value = "";
      view.displayTodos();
    },
    deleteTodo: function() {
      var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
      
      todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
      deleteTodoPositionInput.value = "";
      view.displayTodos();
    },
    toggleCompleted: function() {
      var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = "";
      view.displayTodos();
    },
    toggleAll: function () {
      todoList.toggleAll();
      view.displayTodos();
    }
};
var view = {
  displayTodos: function () {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for (var i=0; i < todoList.todos.length; i++) {
        var todosLi = document.createElement("li");
        var todo = todoList.todos[i];
        
        var todoTextWithCompletion ="";
        if (todo.completed=== true) {
          todoTextWithCompletion = "(x) " + todo.todoText;
        } else {
          todoTextWithCompletion = "( ) " + todo.todoText;
        }
        todosLi.textContent = todoTextWithCompletion;
        todosUl.appendChild(todosLi);
    }
  }
};
