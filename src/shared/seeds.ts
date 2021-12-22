const Random = (matrixCopy: Number[][]) => {
  for (let row = 0; row < matrixCopy.length; row++) {
    const matrixCopyRow = matrixCopy[row];
    for (let column = 0; column < matrixCopyRow.length; column++) {
      const randomValue = Math.floor(Math.random() * 2);
      matrixCopy[row][column] = randomValue;
    }
  }
};

const Beehive = (matrixCopy: Number[][]) => {
  matrixCopy[20][20] = 1;
  matrixCopy[20][21] = 1;
  matrixCopy[21][19] = 1;
  matrixCopy[21][22] = 1;
  matrixCopy[22][20] = 1;
  matrixCopy[22][21] = 1;
};

const BlinkerOscillator = (matrixCopy: Number[][]) => {
  matrixCopy[20][20] = 1;
  matrixCopy[20][21] = 1;
  matrixCopy[20][22] = 1;
};

const Beacon = (matrixCopy: Number[][]) => {
  matrixCopy[20][20] = 1;
  matrixCopy[20][21] = 1;
  matrixCopy[21][20] = 1;
  matrixCopy[22][23] = 1;
  matrixCopy[23][22] = 1;
  matrixCopy[23][23] = 1;
};

const Glider = (matrixCopy: Number[][]) => {
  matrixCopy[20][20] = 1;
  matrixCopy[21][21] = 1;
  matrixCopy[22][19] = 1;
  matrixCopy[22][20] = 1;
  matrixCopy[22][21] = 1;
};

const SmallExploder = (matrixCopy: Number[][]) => {  
  matrixCopy[20][20] = 1;
  matrixCopy[21][19] = 1;
  matrixCopy[21][20] = 1;
  matrixCopy[21][21] = 1;
  matrixCopy[22][19] = 1;
  matrixCopy[22][21] = 1;
  matrixCopy[23][20] = 1;
};

const Exploder = (matrixCopy: Number[][]) => {    
  matrixCopy[20][18] = 1;
  matrixCopy[20][20] = 1;
  matrixCopy[20][22] = 1;
  matrixCopy[21][18] = 1;
  matrixCopy[21][22] = 1;
  matrixCopy[22][18] = 1;
  matrixCopy[22][22] = 1;
  matrixCopy[23][18] = 1;
  matrixCopy[23][22] = 1;
  matrixCopy[24][18] = 1;
  matrixCopy[24][20] = 1;
  matrixCopy[24][22] = 1;
};

const TenCellRow = (matrixCopy: Number[][]) => {    
  matrixCopy[20][15] = 1;
  matrixCopy[20][16] = 1;
  matrixCopy[20][17] = 1;
  matrixCopy[20][18] = 1;
  matrixCopy[20][19] = 1;
  matrixCopy[20][20] = 1;
  matrixCopy[20][21] = 1;
  matrixCopy[20][22] = 1;
  matrixCopy[20][23] = 1;
  matrixCopy[20][24] = 1;
};

const LightweightSpaceship = (matrixCopy: Number[][]) => {    
  matrixCopy[20][15] = 1;
  matrixCopy[20][16] = 1;
  matrixCopy[20][17] = 1;
  matrixCopy[20][18] = 1;
  matrixCopy[21][14] = 1;
  matrixCopy[21][18] = 1;
  matrixCopy[22][18] = 1;
  matrixCopy[23][15] = 1;
  matrixCopy[23][17] = 1;
};

const Tumbler = (matrixCopy: Number[][]) => {    
  matrixCopy[20][18] = 1;
  matrixCopy[20][19] = 1;
  matrixCopy[20][21] = 1;
  matrixCopy[20][22] = 1;
  matrixCopy[21][18] = 1;
  matrixCopy[21][19] = 1;
  matrixCopy[21][21] = 1;
  matrixCopy[21][22] = 1;
  matrixCopy[22][19] = 1;
  matrixCopy[22][21] = 1;
  matrixCopy[23][17] = 1;
  matrixCopy[23][19] = 1;
  matrixCopy[23][21] = 1;
  matrixCopy[23][23] = 1;
  matrixCopy[24][17] = 1;
  matrixCopy[24][19] = 1;
  matrixCopy[24][21] = 1;
  matrixCopy[24][23] = 1;
  matrixCopy[25][17] = 1;
  matrixCopy[25][18] = 1;
  matrixCopy[25][22] = 1;
  matrixCopy[25][23] = 1;
};

const GosperGliderGun = (matrixCopy: Number[][]) => {
  matrixCopy[20][10] = 1;
  matrixCopy[20][11] = 1;
  matrixCopy[21][10] = 1;
  matrixCopy[21][11] = 1;

  matrixCopy[20][19] = 1;
  matrixCopy[20][20] = 1;
  matrixCopy[21][18] = 1;
  matrixCopy[21][20] = 1;
  matrixCopy[22][18] = 1;
  matrixCopy[22][19] = 1;

  matrixCopy[22][26] = 1;
  matrixCopy[22][27] = 1;
  matrixCopy[23][26] = 1;
  matrixCopy[23][28] = 1;
  matrixCopy[24][26] = 1;

  matrixCopy[20][32] = 1;
  matrixCopy[20][33] = 1;
  matrixCopy[19][32] = 1;
  matrixCopy[19][34] = 1;
  matrixCopy[18][33] = 1;
  matrixCopy[18][34] = 1;

  matrixCopy[30][34] = 1;
  matrixCopy[30][35] = 1;
  matrixCopy[30][36] = 1;
  matrixCopy[31][34] = 1;
  matrixCopy[32][35] = 1;

  matrixCopy[19][44] = 1;
  matrixCopy[19][45] = 1;
  matrixCopy[18][44] = 1;
  matrixCopy[18][45] = 1;

  matrixCopy[25][45] = 1;
  matrixCopy[25][46] = 1;
  matrixCopy[26][45] = 1;
  matrixCopy[26][47] = 1;
  matrixCopy[27][45] = 1;
};

export const Seeds = {  
  "Random": (matrixCopy: Number[][]) => Random(matrixCopy),
  "Beehive": (matrixCopy: Number[][]) => Beehive(matrixCopy),
  "BlinkerOscillator": (matrixCopy: Number[][]) => BlinkerOscillator(matrixCopy),
  "Beacon": (matrixCopy: Number[][]) => Beacon(matrixCopy),
  "Glider": (matrixCopy: Number[][]) => Glider(matrixCopy),
  "SmallExploder": (matrixCopy: Number[][]) => SmallExploder(matrixCopy),
  "Exploder": (matrixCopy: Number[][]) => Exploder(matrixCopy),
  "TenCellRow": (matrixCopy: Number[][]) => TenCellRow(matrixCopy),
  "LightweightSpaceship": (matrixCopy: Number[][]) => LightweightSpaceship(matrixCopy),
  "Tumbler": (matrixCopy: Number[][]) => Tumbler(matrixCopy),
  "GosperGliderGun": (matrixCopy: Number[][]) => GosperGliderGun(matrixCopy),
};