import { BimesterEnum } from "../../enums/bimester.enum";
import { DisciplineEnum } from "../../enums/discipline.enum";

export interface SchoolDtoRequest {
  grades: number;
  bimester: BimesterEnum;
  discipline: DisciplineEnum;
}
