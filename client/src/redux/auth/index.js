import axios from "axios";

export function signup(userInfo) {
    return dispatch => {
        axios.post("/auth/signup", userInfo)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = JSON.stringify(token);
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch(err => {
                console.error(err);
                // dispatch(signupError("signup", err.response.status));
            });
    }
}

export function login(credentials) {
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = JSON.stringify(token);
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch((err) => {
                console.error(err);
                // dispatch(signupError("login", err.response.status));
            });
    }
}

function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}

export function logout() {
    delete localStorage.token;
    delete localStorage.user;
    return {
        type: "LOGOUT"
    }
}

const initialState = {
    username: "",
    isAdmin: false,
    isAuthenticated: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            }
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
}
