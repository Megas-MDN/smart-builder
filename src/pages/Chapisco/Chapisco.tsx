import { InconWithText } from "../../components/InconWithText";
import { MainContainer } from "../../components/MainContainer";
import { Feature } from "./components/Feature";
import { MaterialList } from "./components/MaterialList";
import { WallAndPerformance } from "./components/WallAndPerformance";

export const Chapisco = () => {
  return (
    <MainContainer>
      <InconWithText />
      <WallAndPerformance />
      <Feature />
      <MaterialList />
    </MainContainer>
  );
};
