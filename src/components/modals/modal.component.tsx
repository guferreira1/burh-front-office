import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { ContextModal } from "../../context/modal.context";
import {
  DisciplineEnum,
  getDisciplineEnumDescription,
} from "../../common/enums/discipline.enum";
import { ButtonComponent } from "../button/button.component";
import { SchoolContext } from "../../context/school.context";
import { SchoolDtoRequest } from "../../common/dtos/requests/school.dto.request";
import { getBimester } from "../../common/utils/bimester-title.utils";

export const ModalComponent = () => {
  const { isOpen, onClose, selectedBimester } = useContext(ContextModal);
  const { create } = useContext(SchoolContext);

  const finalRef = useRef(null);

  const [grade, setGrade] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] =
    useState<DisciplineEnum | null>(null);

  const handleButtonClick = () => {
    if (grade && selectedDiscipline && selectedBimester) {
      const payload: SchoolDtoRequest = {
        grades: Number(grade),
        bimester: selectedBimester,
        discipline: selectedDiscipline,
      };

      create(payload);
    }
  };

  const getDisciplineColors = (discipline: DisciplineEnum) => {
    switch (discipline) {
      case DisciplineEnum.ART:
        return "bg-art";
      case DisciplineEnum.BIOLOGY:
        return "bg-biology";
      case DisciplineEnum.GEOGRAPHY:
        return "bg-geography";
      case DisciplineEnum.SOCIOLOGY:
        return "bg-sociology";
      default:
        return "bg-black";
    }
  };

  return (
    <>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          w={["18.75rem", "42.375rem"]}
          h={["35.3125rem", "28.3125rem"]}
          background={"black"}
          display={"flex"}
          justifyContent={"space-between"}
          padding={1}
          border={"1px solid #424242"}
        >
          <ModalHeader className="text-white text-base">
            {selectedBimester ? getBimester(selectedBimester) : null}
          </ModalHeader>
          <ModalCloseButton w={"2rem"} h={"2rem"} color={"white"} />
          <ModalBody
            display={"flex"}
            flexDirection={["column"]}
            justifyContent={"center"}
            gap={8}
            height={["70%", "80%"]}
            width={"100%"}
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-lg font-medium">Disciplina</h2>
              <div className="flex w-full flex-wrap gap-6  items-center md:flex-nowrap">
                {Object.values(DisciplineEnum).map((discipline, index) => (
                  <ButtonComponent
                    key={index}
                    onClick={() => setSelectedDiscipline(discipline)}
                    className={`w-button-modal h-button-modal text-white focus:ring-1 focus:ring-gray-light rounded-button-modal ${getDisciplineColors(
                      discipline
                    )}`}
                  >
                    <span className="p-3">
                      {getDisciplineEnumDescription(discipline)}
                    </span>
                  </ButtonComponent>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-input-title text-sm font-normal">Nota</h4>
              <input
                onChange={(e) => setGrade(e.target.value)}
                type="number"
                className="flex w-24 h-12 py-3 px-4 justify-center items-center gap-2 self-stretch rounded-xl border border-border-input bg-black text-input-text"
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <ButtonComponent
              onClick={handleButtonClick}
              className={`w-button-modal h-button-modal text-white rounded-button-modal`}
            >
              <span className="flex w-button-confirm rounded-xl text-black font-semibold text-base bg-button-yellow py-4 px-8 ">
                Confirmar
              </span>
            </ButtonComponent>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
