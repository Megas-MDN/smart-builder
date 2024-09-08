import { Button, SxProps } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

interface IProps {
  sx?: SxProps;
  onClick?: () => void;
  icon?: JSX.Element;
}

export const ButtonTransparent = ({
  sx = {},
  onClick = () => {},
  icon = <ShareIcon />,
  ...props
}: IProps) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      sx={{
        width: "100%",
        height: "100vh",
        minWidth: "0px",
        minHeight: "0px",
        maxHeight: "50px",
        maxWidth: "50px",
        borderRadius: "100%",
        color: "#0a0a0a",
        textTransform: "none",
        backgroundColor: "transparent",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        display: "flex",
        gap: "10px",
        padding: "0px",
        flexDirection: "column",
        paddingRight: "2px",
        "&:hover": {
          backgroundColor: "#FAFAFA",
        },

        ...sx,
      }}
    >
      {icon}
    </Button>
  );
};
