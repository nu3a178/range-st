import type { Line } from "./Line";

export type Station = {
  code: number;
  name: string;
  latitude: number;
  longitude: number;
  prefecture_code?: number;
  line_code?: number;
  train_lines?: Line;
};
