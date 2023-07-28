const prisma = require("./prisma-client");

const User = {
  createUser: async (userData) => {
    try {
      const createdUser = await prisma.user.create({
        data: userData,
      });

      return createdUser;
    } catch (error) {
      return "Some error has occured";
    }
  },
  login: async (userCredentials) => {
    try {
      const userData = await prisma.user.findUnique({
        where: {
          email: userCredentials.email,
        },
      });
      if (!userData) {
        return "Invalid credentials";
      }
      if (userData.password === userCredentials.password) {
        console.log(userData);
        return userData;
      } else {
        return "Invalid Credentials";
      }
    } catch (error) {
      console.log(error);
      return "Some error has occured";
    }
  },
};

module.exports = User;
