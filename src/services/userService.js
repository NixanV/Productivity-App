export const login = (userData) => {
    return fetch("https://localhost:3030/users/login",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
}

export const register = (userData) => {
    return fetch("https://localhost:3030/users/register",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify(userData)
    })
    .then(res => res.json())
}