import WidgetsIcon from "@mui/icons-material/Widgets";
import { Stack } from "@mui/material";
import { ButtonCalc } from "../../../components/ButtonCalc";
import { Text } from "../../../components/Text";

export const ListButtonsCalcs = () => {
  return (
    <>
      <Text
        sx={{
          textTransform: "uppercase",
          fontWeight: "700",
          textAlign: "center",
          marginTop: "16px",
          border: "1px solid #E0E0E0",
          borderRadius: "16px 16px 0px 0px",
          borderBottom: "none",
          width: "100%",
          padding: "16px 0px",
          marginBottom: "-16px",
          maxWidth: {
            xs: "360px",
            sm: "450px",
            md: "600px",
            lg: "700px",
            xl: "900px",
          },
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
          padding: "16px",
          border: "1px solid #E0E0E0",
          borderRadius: "0 0 16px 16px",
          borderTop: "none",
          width: "100%",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
          maxWidth: {
            xs: "360px",
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
    </>
  );
};
