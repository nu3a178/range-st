import {
  importTrainLinesCsv,
  importStationsCsv,
  initStationTable,
  initTrainLineTable,
} from "./importRailwayCsv.js";

const run = async () => {
  await initStationTable();
  await initTrainLineTable();
  await importStationsCsv();
  await importTrainLinesCsv();
};

run()
  .then(() => {
    console.log("Batch process completed successfully.");
  })
  .catch((error) => {
    console.error("Batch process failed:", error);
  });
