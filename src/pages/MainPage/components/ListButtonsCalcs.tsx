import WidgetsIcon from "@mui/icons-material/Widgets";
import { Stack } from "@mui/material";
import { ButtonCalc } from "../../../components/ButtonCalc";
import { Text } from "../../../components/Text";
import { RebocoIcon } from "../../../assets/icons/reboco";
import { useNavigate } from "react-router-dom";
import { EmbolsoIcon } from "../../../assets/icons/embolso";

export const ListButtonsCalcs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Text
        className="shadow-sm"
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
        className="shadow-md"
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
          label="Chapisco"
          onClick={() => navigate("/chapisco")}
          icon={<RebocoIcon height={"58px"} width={"58px"} />}
        />
        <ButtonCalc
          label="Reboco"
          onClick={() => navigate("/reboco")}
          icon={<EmbolsoIcon height={"58px"} width={"58px"} />}
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
