const users = [];

const userService = {
  authenticate: (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) throw new Error('Invalid credentials');
  },

  addUser: (email, password) => {
    const exists = users.some(u => u.email === email);
    if (exists) throw new Error('User already exists');
    users.push({ email, password });
  }
};

export default userService;