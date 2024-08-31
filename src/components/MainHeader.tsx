import { Stack, SxProps } from "@mui/material";

interface Props {
  title: React.ReactNode;
  icon?: JSX.Element;
  sx?: SxProps;
  containerSx?: SxProps;
}
export const MainHeader = ({
  title,
  icon,
  sx = {},
  containerSx = {},
}: Props) => {
  return (
    <Stack
      sx={{
        width: "100%",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        ...containerSx,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          width: "110%",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          height: "70px",
          clipPath: "ellipse(50% 90% at 50% 10%)",
          backgroundColor: "#000",
          color: "#FFFFFF",
          paddingBottom: "8px",
          ...sx,
        }}
      >
        {icon ? icon : null}
        {title}
      </Stack>
    </Stack>
  );
};
