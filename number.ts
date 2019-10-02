export type Inc<N extends number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...number[]
][N];

export type Dec<N extends number> = [
  -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...number[]
][N];
