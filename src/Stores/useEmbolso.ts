import { create } from "zustand";
import { middlewareLocalStorage } from "./middlewareLocalStorage";

interface IIniteState {
  wall: string;
  thickness: string;
  cal: string;
  cimento: string;
  areiaFina: string;
}

interface IEmbolsoState extends IIniteState {
  setWall: (wall: string) => void;
  setThickness: (thickness: string) => void;
  setCal: (cal: string) => void;
  setCimento: (cimento: string) => void;
  setAreiaFina: (areiaFina: string) => void;
}

const INIT_STATE: IIniteState = {
  wall: "",
  thickness: "2",
  cal: "",
  cimento: "",
  areiaFina: "",
};

const myMiddlewares = middlewareLocalStorage<IEmbolsoState>("embolsoStore");

export const useEmbolsoStore = create<IEmbolsoState>()(
  myMiddlewares((set) => ({
    ...INIT_STATE,

    setWall: (wall: string) => {
      set({ wall });
    },
    setThickness: (thickness: string) => {
      set({ thickness });
    },
    setCal: (cal: string) => {
      set({ cal });
    },
    setCimento: (cimento: string) => {
      set({ cimento });
    },
    setAreiaFina: (areiaFina: string) => {
      set({ areiaFina });
    },
  })),
);
