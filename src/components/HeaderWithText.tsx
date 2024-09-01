import { Stack, SxProps } from "@mui/material";
import { MainHeader } from "./MainHeader";
import { Text } from "./Text";
import HouseIcon from "@mui/icons-material/House";

export interface IPropsHeaderWithText {
  mainTitle?: string;
  icon?: JSX.Element;
  subText?: string;
  containerSx?: SxProps;
  headerSx?: SxProps;
  textSx?: SxProps;
}

export const HeaderWithText = ({
  mainTitle = "Smart Obra",
  icon = <HouseIcon fontSize="large" className="text-white" />,
  subText = "Calcule os materiais necessários para a sua obra",
  containerSx = {},
  headerSx = {},
  textSx = {},
}: IPropsHeaderWithText) => {
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "#FFF",
        gap: "16px",
        paddingBottom: "16px",
        borderRadius: "0 0 16px 16px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        ...containerSx,
      }}
    >
      <MainHeader
        sx={{
          ...headerSx,
        }}
        title={<Text sx={{ fontSize: "24px" }}>{mainTitle}</Text>}
        icon={icon}
      />
      <Text
        sx={{
          fontSize: "14px",
          fontWeight: "700",
          textAlign: "center",
          ...textSx,
        }}
      >
        {subText}
      </Text>
    </Stack>
  );
};
