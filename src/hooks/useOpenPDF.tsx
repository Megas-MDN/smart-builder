import { usePDF } from "@react-pdf/renderer";
import { usePDFDataStore } from "../Stores/usePDFData";
import { PDFDocument } from "../pages/Pdf/PDFDocument";
import moment from "moment";

export const useOpenPDF = () => {
  const pdfStore = usePDFDataStore();
  const PDFElement = <PDFDocument {...pdfStore} />;
  const [instance, update] = usePDF({
    document: PDFElement,
  });

  const handleDownload = () => {
    console.log(instance.url);
    const link = document.createElement("a");
    link.href = instance.url as string;
    link.setAttribute(
      "download",
      `${pdfStore.title}-${moment().format("DD-MM-YYYY")}.pdf`,
    );
    document.body.appendChild(link);
    link.click();
  };

  const handleOpen = () => {
    const newWindow = window.open(instance.url as string, "_blank");
    if (newWindow) newWindow.focus();
  };

  const setPDFState = (title: string, text: string[]) => {
    pdfStore.setTitle(title);
    pdfStore.setTexts(text);
    update(<PDFDocument {...pdfStore} />);
  };

  return {
    url: instance.url || "",
    instance,
    handleDownload,
    handleOpen,
    setPDFState,
  };
};
