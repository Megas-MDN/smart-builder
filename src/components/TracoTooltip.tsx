import { Stack, Tooltip } from "@mui/material";
import { Text } from "./Text";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useRef, useState } from "react";

interface TracoTooltipProps {
  text?: string;
  auxText?: string;
  placement?:
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
  delayFactor?: number;
}
export const TracoTooltip = ({
  text = "",
  auxText = "Texto de explicação do traço.",
  placement = "left-start",
  delayFactor = 0.7,
}: TracoTooltipProps) => {
  const isText = Boolean(text.split(":").join("").trim());
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number>(0);

  useEffect(() => {
    if (open) {
      timerRef.current = setTimeout(() => {
        setOpen(false);
        clearTimeout(timerRef.current);
      }, 1000 * delayFactor * auxText.split(" ").length);
    }

    return () => clearTimeout(timerRef.current);
  }, [open, delayFactor, auxText]);

  return (
    <Stack sx={{ flexDirection: "row", gap: "4px" }}>
      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          fontWeight: "700",
        }}
      >{`Traço: ${isText ? text : ""}`}</Text>
      <Tooltip
        title={auxText}
        arrow
        open={open}
        onClick={() => setOpen((prev) => !prev)}
        placement={placement}
        enterDelay={500}
        leaveDelay={500}
      >
        <InfoIcon sx={{ color: "#6D6D6D" }} fontSize="small" />
      </Tooltip>
    </Stack>
  );
};
