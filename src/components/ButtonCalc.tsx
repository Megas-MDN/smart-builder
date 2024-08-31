import { Button, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
  onClick?: () => void;
  icon?: JSX.Element;
  label: React.ReactNode;
}
export const ButtonCalc = ({
  sx = {},
  onClick,
  icon,
  label,
  ...props
}: Props) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      sx={{
        width: "100%",
        height: "100vh",
        maxHeight: "150px",
        maxWidth: "150px",
        borderRadius: "12px",
        color: "#0a0a0a",
        textTransform: "none",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: "#FAFAFA",
        },

        ...sx,
      }}
    >
      {icon ? icon : null}
      {label}
    </Button>
  );
};
