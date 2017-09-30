import axios from "axios";
const todoUrl = "http://localhost:5000/todo/";

//TODOS
function setTodos(todos) {
    return {
        type: "SET_TODOS",
        todos
    }
}

export function loadTodos() {
    return (dispatch) => {
        axios.get(todoUrl)
            .then((response) => {
                dispatch(setTodos(response.data));
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function addTodo(todo) {
    return (dispatch) => {
        axios.post(todoUrl, todo)
            .then((response) => {
                dispatch(loadTodos());
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function editTodo(id, todo) {
    return (dispatch) => {
        axios.put(todoUrl + id, todo)
            .then((response) => {
                dispatch(loadTodos());
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function deleteTodo(id){
    return (dispatch) => {
        axios.delete(todoUrl + id)
            .then((response) => {
                dispatch(loadTodos());
            })
            .catch((err) => {
                console.error(err);
            })
    } 
}