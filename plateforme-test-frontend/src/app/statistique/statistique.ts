export interface Statistique {
  nbEval: number;
  note: {
    min: number;
    average: number;
    max: number;
  };
  time: {
    min: number;
    average: number;
    max: number;
  };
}
