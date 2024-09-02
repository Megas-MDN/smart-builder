import { create } from "zustand";
import { middlewareLocalStorage } from "./middlewareLocalStorage";

interface IIniteState {
  wall: string;
  performance: string;
  cimento: string;
  areia: string;
}

interface IChapiscoState extends IIniteState {
  setWall: (wall: string) => void;
  setPerformance: (performance: string) => void;
  setCimento: (cimento: string) => void;
  setAreia: (areia: string) => void;
}

const INIT_STATE: IIniteState = {
  wall: "0",
  performance: "5",
  cimento: "1",
  areia: "3",
};

const myMiddlewares = middlewareLocalStorage<IChapiscoState>("chapiscoStore");

export const useChapiscoStore = create<IChapiscoState>()(
  myMiddlewares((set) => ({
    ...INIT_STATE,

    setWall: (wall: string) => {
      set({ wall });
    },
    setPerformance: (performance: string) => {
      set({ performance });
    },
    setCimento: (cimento: string) => {
      set({ cimento });
    },
    setAreia: (areia: string) => {
      set({ areia });
    },
  })),
);
