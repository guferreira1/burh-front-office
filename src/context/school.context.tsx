import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { SchoolDtoResponse } from "../common/dtos/responses/school.dto.response";
import { SchoolDtoRequest } from "../common/dtos/requests/school.dto.request";
import { ContextModal } from "./modal.context";

interface SchoolPropsInterface {
  children: React.ReactNode;
}

interface SchoolPoviderInterface {
  isSchools: SchoolDtoResponse[];
  isSchool: SchoolDtoResponse | undefined;
  create: (payload: SchoolDtoRequest) => Promise<void>;
  remove: (id: string) => Promise<void>;
}

export const SchoolContext = createContext<SchoolPoviderInterface>(
  {} as SchoolPoviderInterface
);

export const SchoolProvider = ({ children }: SchoolPropsInterface) => {
  const { onClose } = useContext(ContextModal);

  const [isSchools, setIsSchools] = useState<SchoolDtoResponse[]>([]);
  const [isSchool, setIsSchool] = useState<SchoolDtoResponse>();

  const fetchSchools = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/v1/api/schools", {
        method: "GET",
      });

      const data: SchoolDtoResponse[] = await response.json();
      setIsSchools(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);

  const create = useCallback(
    async (payload: SchoolDtoRequest) => {
      try {
        const response = await fetch("http://localhost:8080/v1/api/schools", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        setIsSchool(data);
        fetchSchools();
        onClose();
      } catch (err) {
        console.error(err);
      }
    },
    [fetchSchools]
  );

  const remove = useCallback(
    async (id: string): Promise<void> => {
      try {
        await fetch(`http://localhost:8080/v1/api/schools/${id}`, {
          method: "DELETE",
        });
        fetchSchools();
      } catch (err) {
        console.error(err);
      }
    },
    [fetchSchools]
  );

  return (
    <SchoolContext.Provider
      value={{
        isSchools,
        isSchool,
        create,
        remove,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};
