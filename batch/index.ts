import { importStationsCsv } from "./importRailwayCsv.js";

const run = async () => {
  await importStationsCsv();
};

run()
  .then(() => {
    console.log("Batch process completed successfully.");
  })
  .catch((error) => {
    console.error("Batch process failed:", error);
  });
