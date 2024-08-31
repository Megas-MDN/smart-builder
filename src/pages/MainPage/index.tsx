import { Stack } from "@mui/material";

import { HeaderWithText } from "../../components/HeaderWithText";
import { ListNavActions } from "./components/ListNavActions";
import { ListButtonsCalcs } from "./components/ListButtonsCalcs";
export const MainPage = () => {
  return (
    <Stack className="h-screen bg-gray-100 flex flex-col items-center gap-4 overflow-auto pb-8">
      <HeaderWithText />
      <ListNavActions />
      <ListButtonsCalcs />
    </Stack>
  );
};
