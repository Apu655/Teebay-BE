const prisma = require("./prisma-client");
const dayjs = require("dayjs");
const Rent = {
  rentProduct: async (rentDetails) => {
    const { startDate, endDate, ...rentDetail } = rentDetails;
    const formattedStartDate = dayjs(startDate);
    const formattedEndDate = dayjs(endDate);
    try {
      const rentList = await prisma.rentDetail.findMany({
        where: { productId: rentDetails.productId },
      });
      console.log(rentList);
      const product = await prisma.product.findUnique({
        where: { id: rentDetails.productId },
      });
      if (rentList == null || rentList.length === 0) {
        const newRent = await prisma.rentDetail.create({
          data: {
            startDate: formattedStartDate.toISOString(),
            endDate: formattedEndDate.toISOString(),
            ...rentDetail,
          },
        });
        const newLent = await prisma.lentDetail.create({
          data: {
            startDate: formattedStartDate.toISOString(),
            endDate: formattedEndDate.toISOString(),
            productId: rentDetail.productId,
            userId: product.createdBy,
          },
        });
        return newRent;
      }
      for (const rent of rentList) {
        if (
          (dayjs(rent.startDate).valueOf() <= formattedStartDate.valueOf() &&
            dayjs(rent.endDate).valueOf() >= formattedStartDate.valueOf()) ||
          (dayjs(rent.startDate).valueOf() <= formattedEndDate.valueOf() &&
            dayjs(rent.endDate).valueOf() >= formattedEndDate.valueOf())
        ) {
          console.log("Can not be created");
          return "Can not be be created";
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = Rent;
