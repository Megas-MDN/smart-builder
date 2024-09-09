import { Stack } from "@mui/material";
import { InconWithText } from "../../../components/InconWithText";
import { ButtonTransparent } from "../../../components/ButtonTransparent";
import { Text } from "../../../components/Text";
import { useEmbolsoStore } from "../../../Stores/useEmbolso";
import { EmbolsoIcon } from "../../../assets/icons/embolso";
import { calcEmbolso } from "../../../utils/calcEmbolso";

export const MaterialListEmbolso = () => {
  const { wall, cal, cimento, areiaFina, thickness } = useEmbolsoStore();
  const { scCimento, m3, scCal } = calcEmbolso({
    wall,
    cal,
    cimento,
    areiaFina,
    thickness,
  });

  return (
    <Stack
      sx={{
        border: "1px solid #E0E0E0",
        borderTop: "3px dashed #E0E0E0",
        width: "100%",
        marginTop: "-16px",
        gap: "8px",
        padding: "8px 16px",
        background: "#FAFAFA",
        maxWidth: "370px",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
        }}
      >
        <InconWithText
          text={"Lista de materiais"}
          textSx={{
            fontSize: "20px",
            fontWeight: "500",
          }}
          containerSx={{
            gap: "8px",
          }}
          icon={<EmbolsoIcon height={"40px"} width={"40px"} />}
        />
        <ButtonTransparent />
      </Stack>
      <Stack
        sx={{
          gap: "12px",
        }}
      >
        <Text
          sx={{
            fontWeight: "600",
          }}
        >{`Embolso | Área total: ${wall} m²`}</Text>
        <Text
          sx={{
            borderBottom: "1px solid #E0E0E0",
          }}
        >{`1 - Cimento: ${scCimento} saco${scCimento > 1 ? "s" : ""}`}</Text>
        <Text
          sx={{
            borderBottom: "1px solid #E0E0E0",
          }}
        >{`2 - Cal: ${scCal} saco${scCal > 1 ? "s" : ""}`}</Text>
        <Text
          sx={{
            borderBottom: "1px solid #E0E0E0",
          }}
        >{`3 - Areia fina: ${m3} m³`}</Text>
        {/* <Text
          sx={{
            fontWeight: "600",
          }}
        >{`Total: R$ 653,50`}</Text> */}
      </Stack>
    </Stack>
  );
};
