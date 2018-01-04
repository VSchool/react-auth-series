import axios from "axios";

export function signup(userInfo) {
    return dispatch => {
        axios.post("/auth/signup", userInfo)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = JSON.stringify(token);
                localStorage.user = JSON.stringify(user);
            })
            .catch(err => {
                console.error(err);
            })
    }
}