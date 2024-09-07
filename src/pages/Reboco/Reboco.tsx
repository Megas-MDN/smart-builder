import { Stack } from "@mui/material";
import { InconWithText } from "../../components/InconWithText";
import { MainContainer } from "../../components/MainContainer";
// import { Feature } from "./components/Feature";
// import { MaterialList } from "./components/MaterialList";
// import { WallAndPerformance } from "./components/WallAndPerformance";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { EmbolsoIcon } from "../../assets/icons/embolso";
import { WallThickness } from "./components/WallThickness";
import { FeatureEmbolso } from "./components/FeatureEmbolso";
import { MaterialListEmbolso } from "./components/MaterialListEmbolso";

export const Reboco = () => {
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
            paddingTop: "6px",
            paddingLeft: "2px",
          }}
          onClick={() => navigate(-1)}
        />
        <InconWithText
          text={"Calcular Reboco"}
          icon={<EmbolsoIcon height={"60px"} width={"60px"} />}
        />
      </Stack>
      <WallThickness />
      <FeatureEmbolso />
      <MaterialListEmbolso />
    </MainContainer>
  );
};
