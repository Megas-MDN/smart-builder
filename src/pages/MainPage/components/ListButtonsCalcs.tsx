import WidgetsIcon from "@mui/icons-material/Widgets";
import { Stack } from "@mui/material";
import { ButtonCalc } from "../../../components/ButtonCalc";

export const ListButtonsCalcs = () => {
  return (
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
  );
};
