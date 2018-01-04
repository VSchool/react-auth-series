import axios from "axios";

export function signup(userInfo) {
    return dispatch => {
        axios.post("/auth/signup", userInfo)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = JSON.stringify(token);
                localStorage.user = JSON.stringify(user);
                dispatch(login(user, token));
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function login(user, token) {
    return {
        type: "LOGIN",
        user: {
            ...user,
            token
        }
    }
}

const initialState = {
    user: {},
    isAuthenticated: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            }
        default:
            return state;
    }
}
