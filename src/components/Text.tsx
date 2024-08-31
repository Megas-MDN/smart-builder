import { SxProps, Typography } from "@mui/material";

interface Props {
  sx?: SxProps;
  children?: React.ReactNode;
  className?: string;
}

export const Text = ({ sx, children, ...props }: Props) => {
  return (
    <Typography
      {...props}
      sx={{
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};
