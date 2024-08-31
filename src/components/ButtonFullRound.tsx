import { Button, Stack, SxProps } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Text } from "./Text";
interface Props {
  sx?: SxProps;
  onClick?: () => void;
  icon?: JSX.Element;
  label?: React.ReactNode;
  containerSx?: SxProps;
}

export const ButtonFullRound = ({
  sx = {},
  onClick,
  icon = (
    <ListAltIcon
      sx={{
        fontSize: "40px",
      }}
      className="text-white"
    />
  ),
  label = "Minhas listas",
  containerSx = {},
  ...props
}: Props) => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: "6px",
        ...containerSx,
      }}
    >
      <Button
        {...props}
        onClick={onClick}
        sx={{
          width: "65px",
          height: "65px",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#cacaca",
          color: "#0a0a0a",
          ...sx,
        }}
      >
        {icon ? icon : null}
      </Button>
      <Text sx={{ fontSize: "14px" }}>{label}</Text>
    </Stack>
  );
};
