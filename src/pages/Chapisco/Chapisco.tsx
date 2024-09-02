import { Stack } from "@mui/material";
import { InconWithText } from "../../components/InconWithText";
import { MainContainer } from "../../components/MainContainer";
import { Feature } from "./components/Feature";
import { MaterialList } from "./components/MaterialList";
import { WallAndPerformance } from "./components/WallAndPerformance";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const Chapisco = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Stack
        flexDirection={"row"}
        sx={{
          alignItems: "center",
          width: "100%",
          maxWidth: "370px",
        }}
      >
        <ButtonTransparent
          icon={<ArrowBackIcon />}
          sx={{
            width: "35px",
            height: "35px",
            marginLeft: "8px",
            alignSelf: "flex-start",
          }}
          onClick={() => navigate(-1)}
        />
        <InconWithText />
      </Stack>
      <WallAndPerformance />
      <Feature />
      <MaterialList />
    </MainContainer>
  );
};
