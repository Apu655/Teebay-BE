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
  getUserDetails: async ({ id }) => {
    try {
      const userDetails = await prisma.user.findUnique({
        where: { id: id },
        include: {
          rentList: {
            select: {
              id: true,
              productId: true,
              product: {
                include: {
                  categories: true,
                },
              },
            },
          },
          LentDetail: {
            select: {
              id: true,
              productId: true,
              product: {
                include: {
                  categories: true,
                },
              },
            },
          },
          PurchaseDetail: {
            select: {
              id: true,
              productId: true,
              product: {
                include: {
                  categories: true,
                },
              },
            },
          },
          SellDetail: {
            select: {
              id: true,
              productId: true,
              product: {
                include: {
                  categories: true,
                },
              },
            },
          },
        },
      });
      console.log(userDetails);
      return userDetails;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = User;
