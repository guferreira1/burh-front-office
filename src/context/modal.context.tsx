import { Dispatch, SetStateAction, createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { BimesterEnum } from "../common/enums/bimester.enum";

interface ModalContextPropsInterface {
  children: React.ReactNode;
}

interface ModalContextInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  selectedBimester: BimesterEnum | null;
  setSelectedBimester: Dispatch<SetStateAction<BimesterEnum | null>>;
}

export const ContextModal = createContext<ModalContextInterface>(
  {} as ModalContextInterface
);

export const ModalProvider = ({ children }: ModalContextPropsInterface) => {
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();

  const [selectedBimester, setSelectedBimester] = useState<BimesterEnum | null>(
    null
  );

  return (
    <ContextModal.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        selectedBimester,
        setSelectedBimester,
      }}
    >
      {children}
    </ContextModal.Provider>
  );
};
