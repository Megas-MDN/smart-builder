import { Stack } from "@mui/material";
// import { Text } from "../../components/Text";
import { ButtonCalc } from "../../components/ButtonCalc";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { MainHeader } from "../../components/MainHeader";
import HouseIcon from "@mui/icons-material/House";
import { Text } from "../../components/Text";
export const MainPage = () => {
  return (
    <Stack className="h-screen bg-gray-100 flex flex-col items-center gap-4">
      <MainHeader
        title={<Text sx={{ fontSize: "24px" }}>Smart Obra</Text>}
        icon={<HouseIcon fontSize="large" className="text-white" />}
      />
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
            md: "800px",
            lg: "800px",
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
