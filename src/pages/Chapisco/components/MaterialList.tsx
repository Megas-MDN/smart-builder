import { Stack } from "@mui/material";
import { InconWithText } from "../../../components/InconWithText";
import { RebocoIcon } from "../../../assets/icons/reboco";
import { ButtonTransparent } from "../../../components/ButtonTransparent";
import { Text } from "../../../components/Text";
import { useChapiscoStore } from "../../../Stores/useChapiscoStore";
import { calcChapisco } from "../../../utils/calcChapisco";

export const MaterialList = () => {
  const { wall, performance, cimento, areia } = useChapiscoStore();
  const { sc, m3, scAreia } = calcChapisco({
    wall,
    performance,
    cimento,
    areia,
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
          icon={<RebocoIcon height={"40px"} width={"40px"} />}
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
        >{`Chapisco | Área total: ${wall} m²`}</Text>
        <Text
          sx={{
            borderBottom: "1px solid #E0E0E0",
          }}
        >{`1 - Cimento: ${sc} saco${sc > 1 ? "s" : ""}`}</Text>
        <Text
          sx={{
            borderBottom: "1px solid #E0E0E0",
          }}
        >{`2 - Areia grossa: ${m3} m³ ou ${scAreia} saco${
          scAreia > 1 ? "s" : ""
        } de 18 L`}</Text>
        {/* <Text
          sx={{
            fontWeight: "600",
          }}
        >{`Total: R$ 653,50`}</Text> */}
      </Stack>
    </Stack>
  );
};
