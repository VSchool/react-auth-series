import axios from "axios";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const todoUrl = "http://localhost:5000/todo/";
const userUrl = "http://localhost:5000/auth/";
const profileUrl = "http://localhost:5000/profile/";

export function verify() {
    return (dispatch) => {
        axios.get(profileUrl + "verify")
            .then((response) => {
                let { success, user } = response.data;
                dispatch(logon(success, user));
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

function logon(success, user) {
    return {
        type: "LOGON",
        success,
        user
    }
}
function handleAuthErr(key, errCode) {
    return {
        type: "HANDLE_AUTH_ERR",
        key,
        errCode
    }
}

export function signup(credentials) {
    return (dispatch) => {
        axios.post(userUrl + "signup", credentials)
            .then((response) => {
                let { token, user, success } = response.data;
                localStorage.setItem("token", token);
                dispatch(logon(success, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(handleAuthErr("signup", err.response.status));
            })
    }
}

export function signin(credentials) {
    return (dispatch) => {
        axios.post(userUrl + "login", credentials)
            .then((response) => {
                let { token, user, success } = response.data;
                localStorage.setItem("token", token);
                dispatch(logon(success, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(handleAuthErr("signin", err.response.status));
            })
    }
}

export function logout() {
    localStorage.removeItem("token");
    return {
        type: "LOGOUT"
    }
}

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

export function deleteTodo(id) {
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