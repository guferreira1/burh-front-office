import { PlacementWithLogical } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { Tooltip } from "@chakra-ui/tooltip";

interface CustomTooltipProps {
  children: ReactNode;
  customLabel: string;
  customBg?: string;
  customPlacement?: PlacementWithLogical | undefined;
  className?: string;
}

export const CustomTooltip = ({
  children,
  customLabel,
  customBg,
  customPlacement,
  className,
}: CustomTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <Tooltip
        hasArrow
        label={customLabel}
        isOpen={isOpen}
        bg={customBg}
        color="black"
        placement={customPlacement}
      >
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {children}
        </div>
      </Tooltip>
    </div>
  );
};
