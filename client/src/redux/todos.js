import axios from "axios";

let todoAxios = axios.create();

todoAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

///////////////////
// Todos Reducer //
///////////////////
const initialTodos = [];

export default function todosReducer(todos = initialTodos, action) {
    switch (action.type) {
        case "SET_TODOS":
            return [...action.todos]
        case "LOGOUT":
            return initialTodos;
        default:
            return todos
    }
}

const SET_TODOS = "SET_TODOS";
const todoUrl = "/api/todo/";

///////////////////////////
// Todos Action Creators //
///////////////////////////
function setTodos(todos) {
    return {
        type: SET_TODOS,
        todos
    }
}

export function loadTodos() {
    return dispatch => {
        todoAxios.get(todoUrl)
            .then(response => {
                dispatch(setTodos(response.data));
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function addTodo(todo) {
    return dispatch => {
        todoAxios.post(todoUrl, todo)
            .then(response => {
                dispatch(loadTodos());
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function editTodo(id, todo) {
    return dispatch => {
        todoAxios.put(todoUrl + id, todo)
            .then(response => {
                dispatch(loadTodos());
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function deleteTodo(id) {
    return dispatch => {
        todoAxios.delete(todoUrl + id)
            .then(response => {
                dispatch(loadTodos());
            })
            .catch(err => {
                console.error(err);
            })
    }
}


