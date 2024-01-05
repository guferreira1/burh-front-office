import { BimesterEnum } from "../enums/bimester.enum";

export const getBimester = (bimester: BimesterEnum) => {
  switch (bimester) {
    case BimesterEnum.PRIMEIRO:
      return "Bimestre 1";
    case BimesterEnum.SEGUNDO:
      return "Bimestre 2";
    case BimesterEnum.TERCEIRO:
      return "Bimestre 3";
    case BimesterEnum.QUARTO:
      return "Bimestre 4";
    default:
      return "Bimestre não registrado.";
  }
};
