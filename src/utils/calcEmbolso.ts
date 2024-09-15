import { rounded } from "./calcChapisco";

export const calcEmbolso = ({
  wall,
  cal,
  cimento,
  areiaFina,
  thickness,
}: {
  wall: string;
  cal: string;
  cimento: string;
  areiaFina: string;
  thickness: string;
}) => {
  const LATA = 18;
  const res = { scCimento: 0, m3: 0, scCal: 0, scAreiaFina: 0 };
  const numWall = Number(wall);
  const numCal = Number(cal);
  const numCimento = Number(cimento);
  const numAreiaFina = Number(areiaFina);
  const numThickness = Number(thickness);
  if (
    [numWall, numCal, numCimento, numAreiaFina, numThickness].some((x) =>
      isNaN(x),
    )
  )
    return res;

  const volTotal = numWall * numThickness * 10;
  const volTraco = (numAreiaFina + numCimento + numCal) * LATA;
  if (volTraco === 0) return res;
  const volTT = volTotal / volTraco;
  const lataCimento = volTT * numCimento;
  const lataAreia = volTT * numAreiaFina;
  const lataCal = volTT * numCal;

  const scCimento = rounded(lataCimento / 2, 0);
  const scCal = rounded(lataCal, 0);
  const m3 = rounded((lataAreia * LATA) / 1000, 2);
  const scAreiaFina = rounded(lataAreia, 0);
  return { scCimento, m3, scCal, scAreiaFina };
};
