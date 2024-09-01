import { Stack, SxProps } from "@mui/material";
import { HeaderWithText, IPropsHeaderWithText } from "./HeaderWithText";

interface Props {
  children: React.ReactNode;
  sx?: SxProps;
  isWithHeader?: boolean;
  headerProps?: IPropsHeaderWithText;
}

export const MainContainer = ({
  children,
  sx = {},
  isWithHeader = true,
  headerProps = {},
}: Props) => {
  return (
    <Stack
      className="h-screen bg-gray-100 flex flex-col items-center gap-4 overflow-auto pb-8"
      sx={{ ...sx }}
    >
      {isWithHeader && <HeaderWithText {...headerProps} />}
      {children}
    </Stack>
  );
};
