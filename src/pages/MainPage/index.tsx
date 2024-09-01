import { ListNavActions } from "./components/ListNavActions";
import { ListButtonsCalcs } from "./components/ListButtonsCalcs";
import { MainContainer } from "../../components/MainContainer";

export const MainPage = () => {
  return (
    <MainContainer>
      <ListNavActions />
      <ListButtonsCalcs />
    </MainContainer>
  );
};
