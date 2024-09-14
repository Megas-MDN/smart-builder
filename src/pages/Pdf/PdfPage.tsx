import { useEffect, useState } from "react";
import { usePDFDataStore } from "../../Stores/usePDFData";
import { Stack } from "@mui/material";
import { Text } from "../../components/Text";
import generatePDF, { Margin, Resolution } from "react-to-pdf";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const getTargetElement = () => document.getElementById("content-id");
export const PdfPage = () => {
  const { title, texts, reset } = usePDFDataStore();
  const options: Partial<unknown> = {
    method: "open",
    resolution: Resolution.MEDIUM,
    page: {
      margin: Margin.MEDIUM,
      format: "A4",
      orientation: "portrait",
    },
    canvas: {
      mimeType: "image/jpeg",
      qualityRatio: 1,
    },
    overrides: {
      pdf: {
        compress: true,
      },
      canvas: {
        useCORS: true,
      },
    },
    filename: `SmartObra_${title}_${Date.now()}`,
  };
  useEffect(() => {
    // generatePDF(getTargetElement, options);
    return () => {
      reset();
    };
  }, []);

  const [showDownload, setShowDownload] = useState(true);

  const hadleDownload = () => {
    setShowDownload(false);
    setTimeout(() => {
      generatePDF(getTargetElement, options);
      setShowDownload(true);
    }, 500);
  };

  return (
    <Stack
      id="content-id"
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          background: "#FAFAFA",
          flexDirection: "row",
          width: "100%",
          // alignContent: "flex-start",
        }}
      >
        <Stack
          sx={{
            width: "50%",
            maxWidth: "350px",
            overflow: "hidden",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              width: "110%",
              minWidth: "110%",
              justifyContent: "center",
              alignItems: "center",
              height: "70px",
              clipPath: "ellipse(50% 90% at 50% 10%)",
              backgroundColor: "#000",
              color: "#FFFFFF",
              paddingBottom: "8px",
            }}
          >
            <Text sx={{ fontSize: "24px" }}>Smart Obra</Text>
          </Stack>
        </Stack>
        <Stack
          sx={{
            padding: "2px 8px",
            width: "50%",
          }}
        >
          <Text>Profisional: Fulano de tal</Text>
          <Text sx={{ fontSize: "12px" }}>Telefone: (11) 99999-9999</Text>
          <Text
            sx={{ fontSize: "12px" }}
          >{`Data: ${new Date().toLocaleDateString()}`}</Text>
        </Stack>
        <Stack
          sx={{
            justifySelf: "flex-end",
            height: "50px",
            width: "50px",
          }}
        >
          {showDownload && (
            <ButtonTransparent
              icon={
                <PictureAsPdfIcon fontSize="medium" className="text-black" />
              }
              onClick={hadleDownload}
            />
          )}
        </Stack>
      </Stack>
      <Text>{title}</Text>
      <Stack
        sx={{
          padding: "2px",
          paddingBottom: "5px",
        }}
      >
        {texts.map((text, index) => (
          <Text key={index}>{text}</Text>
        ))}
      </Stack>
      <Stack
        sx={{
          position: "fixed",
          background: "#FAFAFA",
          bottom: 0,
          width: "100%",
          height: "20px",
        }}
      ></Stack>
    </Stack>
  );
};
