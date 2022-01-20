const users = [
    { name: "teub", premium: true },
    { name: "bite", premium: false },
    { name: "penis", premium: true },
    { name: "biroute", premium: false },
    { name: "abricot", premium: true }
]

export const getPremUsers = (users) => {
    return users.filter(user => user.premium)
}

export default users;