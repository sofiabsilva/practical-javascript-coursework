var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // Get number of completed todos with for loop
//    for (var i = 0; i < totalTodos; i++) {
//      if (this.todos[i].completed === true) {
//        completedTodos++;
//      }
//    }
  // Get number of completed todos using forEach() - because this is an array
    this.todos.forEach(function(todo) {
         if (todo.completed === true) {
         completedTodos++;
         }
  });
    
    // Case 1: If everything’s true, make everything false.
//    if (completedTodos === totalTodos) {
//      for (var i = 0; i < totalTodos; i++) {
//        this.todos[i].completed = false;
//      }
        // Case 2: Otherwise, make everything true.
//    } else {
//      for (var i = 0; i < totalTodos; i++) {
//        this.todos[i].completed = true;
//      }      
//    }
//  }
//    };
    
        //    OR:
        // Case 1: If everything’s true, make everything false, with forEach()
//      if (completedTodos === totalTodos) {
//        this.todos.forEach(function(todo){
//        todo.completed = false;
//     }); 
//      }  
    // Case 2: Otherwise, make everything true.
//      else {
//       this.todos.forEach(function(todo){
//       todo.completed = true;
//    });
//    }
//  }
//}; 
    
    // Simpler code: 
    // Case 1: If everything’s true, make everything false with forEach()
    this.todos.forEach(function(todo){
      if (completedTodos === totalTodos) {
        todo.completed = false;
     } 
      // Case 2: Otherwise, make everything true.
      else {
       todo.completed = true;
     }
    });
   }                     
  }; 
    
var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }  
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    todoList.todos.forEach(function(todo, position){
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      if (todo.completed === true) {
          todoTextWithCompletion = '(x) ' + todo.todoText;
          } else {
          todoTextWithCompletion = '( ) ' + todo.todoText;
          }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
      todoLi.appendChild(this.createDeleteButton());
    },this);
    
    
/*    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      todoLi.id =  i; //making the id the position of the li element.
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
      todoLi.appendChild(this.createDeleteButton());
    } */
  },
  createDeleteButton: function () {
  var deleteButton= document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function () {
  var todosUl = document.querySelector('ul');
  todosUl.addEventListener ('click', function(event) {
  //  console.log(event.target.parentNode.id); // logs the position of the todo that is clicked on
      var elementClicked = event.target;
      if (elementClicked.className === "deleteButton") {
      handlers.deleteTodo(parseInt(event.target.parentNode.id)); //parseInt is for converting strings into numbers (the id is a string).
      }
    });
  }
};
view.setUpEventListeners();
