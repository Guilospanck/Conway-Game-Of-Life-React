const CENTER_X = 0;
const CENTER_Y = 0;

const _constructMatrix = (row: number, column: number, matrix: {}) => {
  if (!matrix[row]) matrix[row] = {};

  matrix[row][column] = 1;
};

const GiantCross = (matrixCopy: {}, height: number, width: number) => {
  for (let j = -Math.floor(height / 2); j < Math.ceil(height / 2); j++) {
    if (!matrixCopy[j]) matrixCopy[j] = {};
    for (let i = -Math.floor(width / 2); i < Math.ceil(width / 2); i++) {
      if (Math.abs(j) === Math.abs(i) || j === 0 || i === 0) {
        matrixCopy[j][i] = 1;
        continue;
      }
      if (!matrixCopy[j][i]) matrixCopy[j][i] = 0;
    }
  }
};

const Beehive = (matrixCopy: {}) => {
  _constructMatrix(CENTER_X, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y + 2, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y + 1, matrixCopy);
};

const BlinkerOscillator = (matrixCopy: {}) => {
  _constructMatrix(CENTER_X, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 2, matrixCopy);
};

const Beacon = (matrixCopy: {}) => {
  _constructMatrix(CENTER_X, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y + 3, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y + 2, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y + 3, matrixCopy);
};

const Glider = (matrixCopy: {}) => {
  _constructMatrix(CENTER_X, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y + 1, matrixCopy);
};

const SmallExploder = (matrixCopy: {}) => {
  _constructMatrix(CENTER_X, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y, matrixCopy);
};

const Exploder = (matrixCopy: {}) => {
  _constructMatrix(CENTER_X, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 2, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y + 2, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y + 2, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y + 2, matrixCopy);
  _constructMatrix(CENTER_X + 4, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 4, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X + 4, CENTER_Y + 2, matrixCopy);
};

const TenCellRow = (matrixCopy: {}) => {
  _constructMatrix(CENTER_X, CENTER_Y - 5, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y - 4, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y - 3, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 2, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 3, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 4, matrixCopy);
};

const LightweightSpaceship = (matrixCopy: {}) => {
  _constructMatrix(CENTER_X, CENTER_Y - 5, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y - 4, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y - 3, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y - 6, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y - 5, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y - 3, matrixCopy);
};

const Tumbler = (matrixCopy: {}) => {
  _constructMatrix(CENTER_X, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 2, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y + 2, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y - 3, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y + 3, matrixCopy);
  _constructMatrix(CENTER_X + 4, CENTER_Y - 3, matrixCopy);
  _constructMatrix(CENTER_X + 4, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X + 4, CENTER_Y + 1, matrixCopy);
  _constructMatrix(CENTER_X + 4, CENTER_Y + 3, matrixCopy);
  _constructMatrix(CENTER_X + 5, CENTER_Y - 3, matrixCopy);
  _constructMatrix(CENTER_X + 5, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 5, CENTER_Y + 2, matrixCopy);
  _constructMatrix(CENTER_X + 5, CENTER_Y + 3, matrixCopy);
};

const GosperGliderGun = (matrixCopy: {}) => {
  _constructMatrix(CENTER_X, CENTER_Y - 10, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y - 9, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y - 10, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y - 9, matrixCopy);

  _constructMatrix(CENTER_X, CENTER_Y - 1, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 1, CENTER_Y, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y - 2, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y - 1, matrixCopy);

  _constructMatrix(CENTER_X + 2, CENTER_Y + 6, matrixCopy);
  _constructMatrix(CENTER_X + 2, CENTER_Y + 7, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y + 6, matrixCopy);
  _constructMatrix(CENTER_X + 3, CENTER_Y + 8, matrixCopy);
  _constructMatrix(CENTER_X + 4, CENTER_Y + 6, matrixCopy);

  _constructMatrix(CENTER_X, CENTER_Y + 12, matrixCopy);
  _constructMatrix(CENTER_X, CENTER_Y + 13, matrixCopy);
  _constructMatrix(CENTER_X - 1, CENTER_Y + 12, matrixCopy);
  _constructMatrix(CENTER_X - 1, CENTER_Y + 14, matrixCopy);
  _constructMatrix(CENTER_X - 2, CENTER_Y + 13, matrixCopy);
  _constructMatrix(CENTER_X - 2, CENTER_Y + 14, matrixCopy);

  _constructMatrix(CENTER_X + 10, CENTER_Y + 14, matrixCopy);
  _constructMatrix(CENTER_X + 10, CENTER_Y + 15, matrixCopy);
  _constructMatrix(CENTER_X + 10, CENTER_Y + 16, matrixCopy);
  _constructMatrix(CENTER_X + 11, CENTER_Y + 14, matrixCopy);
  _constructMatrix(CENTER_X + 12, CENTER_Y + 15, matrixCopy);

  _constructMatrix(CENTER_X - 1, CENTER_Y + 24, matrixCopy);
  _constructMatrix(CENTER_X - 1, CENTER_Y + 25, matrixCopy);
  _constructMatrix(CENTER_X - 2, CENTER_Y + 24, matrixCopy);
  _constructMatrix(CENTER_X - 2, CENTER_Y + 25, matrixCopy);

  _constructMatrix(CENTER_X + 5, CENTER_Y + 25, matrixCopy);
  _constructMatrix(CENTER_X + 5, CENTER_Y + 26, matrixCopy);
  _constructMatrix(CENTER_X + 6, CENTER_Y + 25, matrixCopy);
  _constructMatrix(CENTER_X + 6, CENTER_Y + 27, matrixCopy);
  _constructMatrix(CENTER_X + 7, CENTER_Y + 25, matrixCopy);
};

export const SeedsNameArray = [
  "GiantCross",
  "Beehive",
  "BlinkerOscillator",
  "Beacon",
  "Glider",
  "SmallExploder",
  "Exploder",
  "TenCellRow",
  "LightweightSpaceship",
  "Tumbler",
  "GosperGliderGun"
];

export const SeedsNameToShowInTheScreen = {
  "GiantCross": "Giant Cross",
  "Beehive": "Beehive",
  "BlinkerOscillator": "Blinker Oscillator",
  "Beacon": "Beacon",
  "Glider": "Glider",
  "SmallExploder": "Small Exploder",
  "Exploder": "Exploder",
  "TenCellRow": "Ten Cell Row",
  "LightweightSpaceship": "Lightweight Spaceship",
  "Tumbler": "Tumbler",
  "GosperGliderGun": "Gosper Glider Gun"
};

export const Seeds = {
  "GiantCross": (matrixCopy: {}, width: number, height: number) => GiantCross(matrixCopy, height, width),
  "Beehive": (matrixCopy: {}) => Beehive(matrixCopy),
  "BlinkerOscillator": (matrixCopy: {}) => BlinkerOscillator(matrixCopy),
  "Beacon": (matrixCopy: {}) => Beacon(matrixCopy),
  "Glider": (matrixCopy: {}) => Glider(matrixCopy),
  "SmallExploder": (matrixCopy: {}) => SmallExploder(matrixCopy),
  "Exploder": (matrixCopy: {}) => Exploder(matrixCopy),
  "TenCellRow": (matrixCopy: {}) => TenCellRow(matrixCopy),
  "LightweightSpaceship": (matrixCopy: {}) => LightweightSpaceship(matrixCopy),
  "Tumbler": (matrixCopy: {}) => Tumbler(matrixCopy),
  "GosperGliderGun": (matrixCopy: {}) => GosperGliderGun(matrixCopy),
};