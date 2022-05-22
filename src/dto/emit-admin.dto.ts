export class EmitAdminDto {
  orderId: number;
  withdraw: WithdrawDto;
  firstName: string;
  lastName: string;
}

export class WithdrawDto {
  price: number;
  unitPrice: string;
}
