export const signup = async (req, res) => {
const {email,password,name}= req.body
};

export const login = async (req, res) => {
  res.send("login route");
};

export const logout = async (req, res) => {
  res.send("logout route");
};
