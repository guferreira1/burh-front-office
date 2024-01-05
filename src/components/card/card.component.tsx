import { FaRegTrashAlt } from "react-icons/fa";
import { getColorByGrade } from "../../common/utils/grade-collors.utils";
import { useContext } from "react";
import { SchoolContext } from "../../context/school.context";
import { ButtonComponent } from "../button/button.component";
import { CustomTooltip } from "../tooltip/tooltip.component";

interface CardProps {
  discipline: string;
  createdAt: Date;
  grades: number;
  key: string;
  id: string;
}

export const CardComponent = ({
  createdAt,
  grades,
  discipline,
  id,
}: CardProps) => {
  const { remove } = useContext(SchoolContext);

  const handleColorGrade = () => {
    switch (getColorByGrade(grades)) {
      case "green":
        return "text-green";
      case "red":
        return "text-red-500";
      case "yellow":
        return "text-yellow";

      default:
        break;
    }
  };

  const handleBackgroundCard = () => {
    switch (discipline) {
      case "Biologia":
        return "bg-[#CC4090]";
      case "Sociologia":
        return "bg-[#9B19C2]";
      case "Artes":
        return "bg-[#05A2C2]";
      case "Geografia":
        return "bg-[#C26719]";
    }
  };

  return (
    <div
      className={`w-card h-card rounded-card ${handleBackgroundCard()} text-white relative flex flex-col gap-5`}
    >
      <div className="p-3">
        <h4 className="text-[18px]">{discipline}</h4>
        <span className="text-[12px] line-clamp-1 font-extralight">
          {new Date(createdAt).toLocaleDateString("pt-BR")}
        </span>
        <CustomTooltip
          customLabel="Remover"
          customBg={"red.600"}
          className={"absolute top-0 -right-5"}
        >
          <ButtonComponent onClick={() => remove(id)}>
            <FaRegTrashAlt className="text-lg cursor-pointer" color="red" />
          </ButtonComponent>
        </CustomTooltip>
      </div>

      <div className="bg-black opacity-70 flex items-center gap-3 px-3 py-1 text-[14px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M4.98293 7.77692V13.355"
            stroke="#FF5964"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.73032 5.10727V13.3555"
            stroke="#FF5964"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.416 10.7246V13.3553"
            stroke="#FF5964"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.717712 9.25683C0.717712 3.17174 2.7213 1.14279 8.73032 1.14279C14.7393 1.14279 16.7429 3.17174 16.7429 9.25683C16.7429 15.3419 14.7393 17.3709 8.73032 17.3709C2.7213 17.3709 0.717712 15.3419 0.717712 9.25683Z"
            stroke="#FF5964"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={`${handleColorGrade()}`}>Nota: {grades}</span>
      </div>
    </div>
  );
};
