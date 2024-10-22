export enum OrderStatusEnum {
  NEW = 'Новый',
  IN_WORK = 'В работе',
  BREAK = 'Брак',
  COMPLETED = 'Готов',
  STOP = 'Приостановлен',
}

export enum OrderStatusV2Enum {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  BREAK = 'BREAK',
  READY = 'READY',
  STOPED = 'STOPED',
  HIDDEN = 'HIDDEN'
}

export enum OrderScalarFieldEnum {
  id = 'id',
  name = 'name',
  dateStart = 'dateStart',
  dateEnd = 'dateEnd',
  comment = 'comment',
  neonLength = 'neonLength',
  status = 'status',
  code = 'code',
  rating = 'rating',
  reclamationNumber = 'reclamationNumber',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  statusDate = 'statusDate',
  managerId = 'managerId',
  storageId = 'storageId',
  enoughResources = 'enoughResources',
  price = 'price',
  typeId = 'typeId'
}