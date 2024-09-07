import { Stack } from "@mui/material";
import { Text } from "./Text";
import InfoIcon from "@mui/icons-material/Info";

export const TracoTooltip = ({ text = "", auxText = "" }) => {
  const isText = Boolean(text.split(":").join().trim());
  console.log(auxText);
  return (
    <Stack>
      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          fontWeight: "700",
        }}
      >{`Traço: ${isText ? text : ""}`}</Text>
      <InfoIcon sx={{ color: "#6D6D6D" }} fontSize="small" />
    </Stack>
  );
};
