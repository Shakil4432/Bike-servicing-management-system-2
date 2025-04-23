import prisma from "../../../shared/prisma";

const createServiceRecordIntoDB = async (serviceRecordData: any) => {
  const result = await prisma.serviceRecord.create({
    data: serviceRecordData,
  });

  return result;
};

const getAllServiceRecordsFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getServiceRecordByIdFromDB = async (serviceRecordId: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: serviceRecordId,
    },
  });
  return result;
};

const updatedServiceRecordByIdIntoDB = async (
  serviceRecordId: string,
  completionDate: any
) => {
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: serviceRecordId,
    },
    data: {
      completionDate,
      status: "done",
    },
  });
  return result;
};
export const ServiceRecordService = {
  createServiceRecordIntoDB,
  getAllServiceRecordsFromDB,
  getServiceRecordByIdFromDB,
  updatedServiceRecordByIdIntoDB,
};
