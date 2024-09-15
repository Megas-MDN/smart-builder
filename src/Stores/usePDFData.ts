import { create } from "zustand";
import { middlewareLocalStorage } from "./middlewareLocalStorage";

interface IIniteState {
  title: string;
  texts: string[];
}

export interface IPDFDataState extends IIniteState {
  setTitle: (title: string) => void;
  setTexts: (texts: string[]) => void;
  reset: () => void;
}

const INIT_STATE: IIniteState = {
  title: "Tuffy",
  texts: ["text 1", "text 2"],
};

const myMiddlewares = middlewareLocalStorage<IPDFDataState>("pdfDataStore");

export const usePDFDataStore = create<IPDFDataState>()(
  myMiddlewares((set) => ({
    ...INIT_STATE,

    setTitle: (title: string) => {
      set({ title });
    },
    setTexts: (texts: string[]) => {
      set({ texts });
    },
    reset: () => {
      set(INIT_STATE);
    },
  })),
);
