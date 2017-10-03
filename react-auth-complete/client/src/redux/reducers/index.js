let defaultState = {
    todos: [],
    user: {
        username: "",
        admin: false,
        _id: ""
    },
    authErrCode: {
        signup: "",
        signin: ""
    },
    isAuthenticated: false
}

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "HANDLE_AUTH_ERR":
            return {
                ...state,
                authErrCode: {
                    ...state.authErrCode,
                    [action.key]: action.errCode
                }
            }
        case "LOGON":
            return {
                ...state,
                user: action.user,
                isAuthenticated: action.success,
                authErrCode: {
                    signup: "",
                    signin: ""
                }
            }
            case "LOGOUT":
            return {
                ...defaultState
            }
        case "SET_TODOS":
            return {
                ...state,
                todos: action.todos
            }
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;