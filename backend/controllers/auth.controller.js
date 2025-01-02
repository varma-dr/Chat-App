export const login = (req, res) => {
    res.send("login user - welcome to new chat app please login and stay connected");
    console.log("login");
}

export const logout = (req, res) => {
    res.send("logout user - thanks for using our chat app, see you soon");
    console.log("logout");
}

export const signup = (req, res) => {
    res.send("signup user - welcome to new chat app please signup and stay connected");
    console.log("signup");
}

