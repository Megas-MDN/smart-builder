import { useEffect } from "react";
import { usePDFDataStore } from "../../Stores/usePDFData";
import { Stack } from "@mui/material";
import { Text } from "../../components/Text";
import generatePDF, { Margin, Resolution } from "react-to-pdf";

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
    generatePDF(getTargetElement, options);
    return () => {
      reset();
    };
  }, []);

  return (
    <Stack
      id="content-id"
      sx={{
        padding: "8px 16px",
      }}
    >
      <Text>{title}</Text>
      {texts.map((text, index) => (
        <Text key={index}>{text}</Text>
      ))}
    </Stack>
  );
};
