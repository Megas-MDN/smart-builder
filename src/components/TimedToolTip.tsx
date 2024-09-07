import { ReactElement, useEffect, useRef, useState } from "react";
import { Tooltip } from "@mui/material";

export type ITooltipPlacement =
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | undefined;

interface IProps {
  children: ReactElement<unknown>;
  text?: string;
  placement?: ITooltipPlacement;
  delayFactor?: number;
}
export const TimedToolTip = ({
  children,
  text = "Texto de explicação do traço.",
  placement = "left-start",
  delayFactor = 0.7,
  ...props
}: IProps) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number>(0);

  useEffect(() => {
    if (open) {
      timerRef.current = setTimeout(function () {
        if (!timerRef.current) return;
        setOpen(false);
        clearTimeout(timerRef.current);
      }, 1000 * delayFactor * text.split(" ").length);
    }

    return () => {
      clearTimeout(timerRef.current);
      timerRef.current = 0;
    };
  }, [open, delayFactor, text]);

  return (
    <Tooltip
      arrow
      title={text}
      open={open}
      onClick={() => setOpen(true)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      placement={placement}
      enterDelay={500}
      leaveDelay={200}
      {...props}
    >
      {children}
    </Tooltip>
  );
};
