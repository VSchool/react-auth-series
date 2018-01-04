import axios from "axios";

export function signup(credentials) {
    return dispatch => {
        axios.post("/auth/signup", credentials)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
            })
    }
}