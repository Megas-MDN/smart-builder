import { SxProps, Typography } from "@mui/material";

interface Props {
  sx?: SxProps;
  children?: React.ReactNode;
}

export const Text = ({ sx, children }: Props) => {
  return (
    <Typography
      sx={{
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};
