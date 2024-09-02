function rounded(num: number, decs = 2) {
  const factor = 10 ** decs;
  return Math.ceil(num * factor) / factor;
}

export const calcChapisco = ({
  wall,
  performance,
  cimento,
  areia,
}: {
  wall: string;
  performance: string;
  cimento: string;
  areia: string;
}) => {
  const LATA = 18;
  const res = { sc: 0, m3: 0, scAreia: 0 };
  const numWall = Number(wall);
  const numPerformance = Number(performance);
  const numCimento = Number(cimento);
  const numAreia = Number(areia);

  if ([numWall, numPerformance, numCimento, numAreia].some((x) => isNaN(x))) {
    return res;
  }
  const traco = numAreia + numCimento;

  const numOFLitros = LATA * traco;
  const numOfWallPerformance = numWall * numPerformance;
  const numOfMass = numOfWallPerformance / numOFLitros;

  const numOfCimento = numOfMass * numCimento;
  const sc = rounded(numOfCimento / 2, 0);

  const numOfAreia = numOfMass * numAreia;
  const m3 = rounded(numOfAreia / 1000);
  const scAreia = rounded(numOfAreia, 0);

  return { sc, m3, scAreia };
};
