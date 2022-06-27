import axios from "axios";

export function createUser(user){
    return axios({
        method: "POST",
        url:"http://localhost:3000/users",
        data:user
    })
}

export function login(info){
    return axios({
        method: "POST",
        url: "http://localhost:3000/signin",
        data:info
    })
}