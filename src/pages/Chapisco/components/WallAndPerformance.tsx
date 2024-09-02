import { Stack } from "@mui/material";
import { LabelInput } from "../../../components/LabelInput";
import { useChapiscoStore } from "../../../Stores/useChapiscoStore";

export const WallAndPerformance = () => {
  const { performance, setPerformance, wall, setWall } = useChapiscoStore();
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
        label="Rendimento:"
        fixedUnits="L/m²"
        value={performance}
        onChange={(e) => setPerformance(e)}
      />
    </Stack>
  );
};
