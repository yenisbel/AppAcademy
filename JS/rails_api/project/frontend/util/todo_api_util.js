// export function uniqueId() {
//     return new Date().getTime();
//   }

// index
export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
  // .then(
  //   todos => console.log(todos)
  // )
);

// show
export const fetchTodo = id => (
  $.ajax({
    method: 'GET',
    url: `/api/todos/${id}`, 
  })
);

// create

export const createTodo = todo =>(
  $.ajax({
    method: 'POST',
    url: '/api/todos/',
    data: todo
  })
);

// update

export const updateTodo = (todo) =>(
  $.ajax({
    method: 'PUT',
    url: `/api/todos/${todo.id}` ,
    data: {todo}
  })
);
// delete
export const destroyTodo = (todo) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${todo.id}` 
  })
);