import { Stack } from "@mui/material";
import { LabelInput } from "../../../components/LabelInput";
import { useEmbolsoStore } from "../../../Stores/useEmbolso";
import { TracoTooltip } from "../../../components/TracoTooltip";

export const FeatureEmbolso = () => {
  const { cimento, areiaFina, setCimento, setAreiaFina, cal, setCal } =
    useEmbolsoStore();

  return (
    <Stack
      sx={{
        gap: "8px",
        padding: "8px 16px",
        border: "1px solid #E0E0E0",
        borderBottom: "none",
        width: "100%",
        background: "#FAFAFA",
        maxWidth: "370px",
        paddingBottom: "28px",
      }}
    >
      <TracoTooltip text={`${cimento}:${cal}:${areiaFina}`} />
      <LabelInput
        label="Cimento"
        value={cimento}
        fixedUnits=""
        containerSx={{
          background: "#FAFAFA",
          border: "1px solid #E0E0E0",
          borderRadius: "8px",
        }}
        onChange={(e) => setCimento(e)}
        inputSx={{
          ".MuiInputBase-input": {
            padding: "4px 8px",
            paddingLeft: "16px",
            textAlign: "right",
          },
        }}
      />
      <LabelInput
        label="Cal"
        containerSx={{
          background: "#FAFAFA",
          border: "1px solid #E0E0E0",
          borderRadius: "8px",
        }}
        fixedUnits=""
        value={cal}
        onChange={(e) => setCal(e)}
        inputSx={{
          ".MuiInputBase-input": {
            padding: "4px 8px",
            paddingLeft: "16px",
            textAlign: "right",
          },
        }}
      />
      <LabelInput
        label="Areia"
        containerSx={{
          background: "#FAFAFA",
          border: "1px solid #E0E0E0",
          borderRadius: "8px",
        }}
        fixedUnits=""
        value={areiaFina}
        onChange={(e) => setAreiaFina(e)}
        inputSx={{
          ".MuiInputBase-input": {
            padding: "4px 8px",
            paddingLeft: "16px",
            textAlign: "right",
          },
        }}
      />
    </Stack>
  );
};
