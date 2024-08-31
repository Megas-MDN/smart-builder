import { Stack, SxProps } from "@mui/material";
import { ButtonFullRound } from "../../../components/ButtonFullRound";
import AddIcon from "@mui/icons-material/Add";
export const ListNavActions = ({ sx }: { sx?: SxProps }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        flexDirection: "row",
        gap: "18px",
        padding: "0 16px",
        justifyContent: "center",
        ...sx,
      }}
    >
      <ButtonFullRound />
      <ButtonFullRound
        icon={
          <AddIcon
            className="text-white"
            sx={{
              fontSize: "60px",
            }}
          />
        }
      />
    </Stack>
  );
};
