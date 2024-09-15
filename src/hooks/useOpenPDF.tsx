import { usePDF } from "@react-pdf/renderer";
import { usePDFDataStore } from "../Stores/usePDFData";
import { PDFDocument } from "../pages/Pdf/PDFDocument";
import moment from "moment";
import { useEffect, useRef, useState } from "react";

export const useOpenPDF = () => {
  const { title, texts, setTitle, setTexts } = usePDFDataStore();
  const [instance, update] = usePDF({
    document: <PDFDocument {...{ title, texts }} />,
  });
  const url = useRef("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    update(<PDFDocument {...{ title, texts }} />);
  }, [title, texts, update]);

  useEffect(() => {
    if (!instance.loading && isOpen && url.current !== instance.url) {
      setIsOpen(false);
      url.current = instance.url as string;
      const newWindow = window.open(instance.url as string, "_blank");
      if (newWindow) newWindow.focus();
    }
  }, [instance]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url.current as string;
    link.setAttribute(
      "download",
      `${title}-${moment().format("DD-MM-YYYY")}.pdf`,
    );
    document.body.appendChild(link);
    link.click();
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const setPDFState = (newTitle: string, newText: string[]) => {
    setTitle(newTitle);
    setTexts(newText);
  };

  return {
    url: url.current,
    instance,
    handleDownload,
    handleOpen,
    setPDFState,
    isOpen,
  };
};
