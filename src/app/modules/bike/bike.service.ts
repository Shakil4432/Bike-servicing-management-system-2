import prisma from "../../../shared/prisma";

const createBikeIntoDB = async (bikeData: any) => {
  const result = await prisma.bike.create({
    data: bikeData,
  });

  return result;
};

const getAllBiksFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getBikeByIdFromDB = async (bikeId: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });
  return result;
};
export const BikeService = {
  createBikeIntoDB,
  getAllBiksFromDB,
  getBikeByIdFromDB,
};
