import { Stack } from "@mui/material";
import { LabelInput } from "../../../components/LabelInput";
import { useEmbolsoStore } from "../../../Stores/useEmbolso";

export const WallThickness = () => {
  const { wall, thickness, setWall, setThickness } = useEmbolsoStore();
  return (
    <Stack
      sx={{
        padding: "8px 2px",
        gap: "8px",
        border: "1px solid #E0E0E0",
        width: "100%",
        maxWidth: "370px",
      }}
    >
      <LabelInput label="Parede:" value={wall} onChange={(e) => setWall(e)} />
      <LabelInput
        label="Espessura:"
        fixedUnits="cm"
        value={thickness}
        onChange={(e) => setThickness(e)}
      />
    </Stack>
  );
};
