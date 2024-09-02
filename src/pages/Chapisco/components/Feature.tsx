import { Stack } from "@mui/material";
import { LabelInput } from "../../../components/LabelInput";
import { Text } from "../../../components/Text";
import { useChapiscoStore } from "../../../Stores/useChapiscoStore";

export const Feature = () => {
  const { cimento, setCimento, areia, setAreia } = useChapiscoStore();

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
      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          fontWeight: "700",
        }}
      >{`Traço: ${cimento}:${areia}`}</Text>
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
        label="Areia"
        containerSx={{
          background: "#FAFAFA",
          border: "1px solid #E0E0E0",
          borderRadius: "8px",
        }}
        fixedUnits=""
        value={areia}
        onChange={(e) => setAreia(e)}
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
