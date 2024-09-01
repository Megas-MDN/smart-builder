import { Stack, SxProps } from "@mui/material";
import { RebocoIcon } from "../assets/icons/reboco";
import { Text } from "./Text";

interface IPropsInconWithText {
  icon?: JSX.Element;
  text?: string;
  textSx?: SxProps;
  containerSx?: SxProps;
  iconConteinerSx?: SxProps;
}

export const InconWithText = ({
  icon = <RebocoIcon height={"60px"} width={"60px"} />,
  text = "Calcular Chapisco",
  textSx = {},
  containerSx = {},
  iconConteinerSx = {},
}: IPropsInconWithText) => {
  return (
    <Stack
      sx={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        padding: "0 16px",
        maxWidth: "370px",
        ...containerSx,
      }}
    >
      <Stack
        sx={{
          width: "30%",
          alignItems: "center",
          justifyContent: "center",
          ...iconConteinerSx,
        }}
      >
        {icon}
      </Stack>
      <Text
        sx={{
          color: "#000",
          fontWeight: "600",
          fontSize: "24px",
          width: "100%",
          ...textSx,
        }}
      >
        {text}
      </Text>
    </Stack>
  );
};
