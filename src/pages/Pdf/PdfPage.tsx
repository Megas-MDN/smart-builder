import { Stack } from "@mui/material";
import { useOpenPDF } from "../../hooks/useOpenPDF";

export const PdfPage = () => {
  const { url } = useOpenPDF();

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <iframe src={url} style={{ width: "100%", height: "100vh" }}></iframe>
    </Stack>
  );
};
