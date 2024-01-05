import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { BimesterEnum } from "../../common/enums/bimester.enum";
import { getBimester } from "../../common/utils/bimester-title.utils";
import { ButtonComponent } from "../button/button.component";
import { ContextModal } from "../../context/modal.context";
import { SchoolContext } from "../../context/school.context";
import { CardComponent } from "../card/card.component";
import { CustomTooltip } from "../tooltip/tooltip.component";

export const BimesterList = () => {
  const { onOpen, setSelectedBimester } = useContext(ContextModal);
  const { isSchools } = useContext(SchoolContext);

  const handleBimesterClick = (bimester: BimesterEnum) => {
    setSelectedBimester(bimester);
    onOpen();
  };

  return (
    <div className="w-[90%] mx-auto text-white">
      {Object.values(BimesterEnum).map((bimester) => {
        const schoolsForBimester = isSchools.filter(
          (school) => school.bimester === bimester
        );

        return (
          <div key={bimester} className="mb-8 flex flex-col gap-5 pt-4">
            <div className="flex justify-between text-[18px] font-semibold">
              {getBimester(bimester)}

              <CustomTooltip customLabel={"Adicionar"} customBg={"green.300"}>
                <ButtonComponent
                  onClick={() => handleBimesterClick(bimester)}
                  className="bg-button-yellow rounded-[12px] px-4 py-2 flex items-center gap-4 cursor-pointer"
                >
                  <span className="font-bold text-[16px] hidden sm:flex">
                    Lançar Nota
                  </span>
                  <FaPlus />
                </ButtonComponent>
              </CustomTooltip>
            </div>
            <div className="flex flex-wrap gap-8 pt-2">
              {schoolsForBimester.map((school) => (
                <CardComponent
                  key={school.id}
                  id={school.id}
                  createdAt={school.createdAt}
                  discipline={school.discipline}
                  grades={school.grades}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
