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