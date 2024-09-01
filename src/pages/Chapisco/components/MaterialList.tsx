import { Stack } from "@mui/material";
import { InconWithText } from "../../../components/InconWithText";
import { RebocoIcon } from "../../../assets/icons/reboco";
import { ButtonTransparent } from "../../../components/ButtonTransparent";
import { Text } from "../../../components/Text";

export const MaterialList = () => {
  const wall = 360;
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
        >{`1 - Cimento: 12,5 sc x 35,00 R$ = R$ 437,50`}</Text>
        <Text
          sx={{
            borderBottom: "1px solid #E0E0E0",
          }}
        >{`2 - Areia grossa: 1,35 m³ x 160,00 R$ = R$ 216,00`}</Text>
        <Text
          sx={{
            fontWeight: "600",
          }}
        >{`Total: R$ 653,50`}</Text>
      </Stack>
    </Stack>
  );
};
