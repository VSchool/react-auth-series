let defaultState = {
    todos: []
}

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
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