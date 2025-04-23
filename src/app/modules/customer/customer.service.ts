import prisma from "../../../shared/prisma";

const createCustomerIntoDB = async (customerData: any) => {
  const result = await prisma.customer.create({
    data: customerData,
  });

  return result;
};

const getAllCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getCustomerByIdFromDB = async (customerId: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  return result;
};

const customerUpdateByIdIntoDB = async (
  customerId: string,
  customerData: any
) => {
  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data: customerData,
  });
  return result;
};

const deleteCustomerByIdFromDB = async (customerId: string) => {
  const result = await prisma.$transaction(async (prismaClient) => {
    // First delete all bikes related to the customer
    await prismaClient.bike.deleteMany({
      where: {
        customerId: customerId,
      },
    });

    // Now safely delete the customer
    const deletedCustomer = await prismaClient.customer.delete({
      where: {
        customerId: customerId,
      },
    });

    return deletedCustomer;
  });

  return result;
};

export const CustomerService = {
  createCustomerIntoDB,
  getAllCustomersFromDB,
  getCustomerByIdFromDB,
  customerUpdateByIdIntoDB,
  deleteCustomerByIdFromDB,
};
