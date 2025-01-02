
export const signup = async (req, res) => {
    /// TEST START
    res.send("signup user - welcome to new chat app please signup and stay connected");
    console.log("signup");
    /// TEST END
}
    try {
        const{fullname, username, password, confirmPassword, gender} = req.body;
    } catch (error) {
        
    }

export const login = (req, res) => {
    res.send("login user - welcome to new chat app please login and stay connected");
    console.log("login");
}

export const logout = (req, res) => {
    res.send("logout user - thankyou for using our chat app, see you soon");
    console.log("logout");
}



