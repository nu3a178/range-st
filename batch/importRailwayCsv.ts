import * as fs from "fs";
import * as path from "path";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

const client = createClient(supabaseUrl, supabaseAnonKey);

const STATIONS_DIR = path.resolve("src/assets/csv/stations");
const LINES_DIR = path.resolve("src/assets/csv/lines");

function parseCsv<T extends Record<string, string>>(filePath: string): T[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.trim().split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map((line: string) => {
    const values = line.split(",");
    return Object.fromEntries(
      headers.map((h: string, i: number) => [h, values[i] ?? ""]),
    ) as T;
  });
}

function readCsvDir<T extends Record<string, string>>(dir: string): T[] {
  const files = fs.readdirSync(dir).filter((f: string) => f.endsWith(".csv"));
  return files.flatMap((file: string) => parseCsv<T>(path.join(dir, file)));
}

export const importStationsCsv = async () => {
  const stations = readCsvDir(STATIONS_DIR);

  const stationsParams = stations.map((station) => ({
    name: station.station_name,
    latitude: station.lat,
    longitude: station.lon,
  }));
  console.log({ stationsParams });
  const { data, error } = await client.from("Stations").insert(stationsParams);
  if (error) {
    console.error("Error inserting stations:", error);
  } else {
    console.log("Stations inserted successfully:", data);
  }
};

// export const importLinesCsv = async ()=>{
//     const lines = readCsvDir(LINES_DIR);
//     const lineParams
// }
