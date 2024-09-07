import { Stack } from "@mui/material";
import { Text } from "./Text";
import InfoIcon from "@mui/icons-material/Info";
import { ITooltipPlacement, TimedToolTip } from "./TimedToolTip";

interface TracoTooltipProps {
  text?: string;
  auxText?: string;
  placement?: ITooltipPlacement;
  delayFactor?: number;
}
export const TracoTooltip = ({
  text = "",
  auxText = "Texto de explicação do traço.",
  placement = "left-start",
  delayFactor = 0.7,
}: TracoTooltipProps) => {
  const isText = Boolean(text.split(":").join("").trim());

  return (
    <Stack sx={{ flexDirection: "row", gap: "4px" }}>
      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          fontWeight: "700",
        }}
      >{`Traço: ${isText ? text : ""}`}</Text>
      <TimedToolTip
        text={auxText}
        placement={placement}
        delayFactor={delayFactor}
      >
        <InfoIcon sx={{ color: "#6D6D6D" }} fontSize="small" />
      </TimedToolTip>
    </Stack>
  );
};
