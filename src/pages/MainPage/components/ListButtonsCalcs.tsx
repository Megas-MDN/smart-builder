import WidgetsIcon from "@mui/icons-material/Widgets";
import { Stack } from "@mui/material";
import { ButtonCalc } from "../../../components/ButtonCalc";
import { Text } from "../../../components/Text";

export const ListButtonsCalcs = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px 0px",
        border: "1px solid #E5E5E5",
        borderRadius: "16px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        paddingBottom: "32px",
        maxWidth: {
          xs: "370px",
          sm: "450px",
          md: "600px",
          lg: "700px",
          xl: "900px",
        },
      }}
    >
      <Text
        sx={{
          textTransform: "uppercase",
          fontWeight: "700",
          width: "100%",
          textAlign: "center",
        }}
      >
        Calculadoras de materiais
      </Text>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        sx={{
          gap: "16px",
          justifyContent: "center",
          width: "100%",
          maxWidth: {
            xs: "450px",
            sm: "450px",
            md: "600px",
            lg: "700px",
            xl: "900px",
          },
        }}
      >
        <ButtonCalc
          label="Alvenaria"
          onClick={() => console.log("clicked")}
          icon={<WidgetsIcon fontSize="large" />}
        />
        <ButtonCalc
          label="Laje"
          onClick={() => console.log("clicked")}
          icon={<WidgetsIcon fontSize="large" />}
        />
        <ButtonCalc
          label="Concreto"
          onClick={() => console.log("clicked")}
          icon={<WidgetsIcon fontSize="large" />}
        />
        <ButtonCalc
          label="Chapisco"
          onClick={() => console.log("clicked")}
          icon={<WidgetsIcon fontSize="large" />}
        />
        <ButtonCalc
          label="Lorem"
          onClick={() => console.log("clicked")}
          icon={<WidgetsIcon fontSize="large" />}
        />
        <ButtonCalc
          label="Ipsum"
          onClick={() => console.log("clicked")}
          icon={<WidgetsIcon fontSize="large" />}
        />
      </Stack>
    </Stack>
  );
};
