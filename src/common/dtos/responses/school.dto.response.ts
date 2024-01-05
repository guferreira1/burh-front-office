import { BimesterEnum } from "../../enums/bimester.enum";

export interface SchoolDtoResponse {
  id: string;
  grades: number;
  bimester: BimesterEnum;
  discipline: string;
  createdAt: Date;
  updatedAt: Date;
}
