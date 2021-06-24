
/*
Event Colors:

["#405191", Dark blue
"#724312", Reddish brown
"#39627e", More green dark blue
"#3b0032", Purple Red, games
"#002f44"], Darkest blue

*/


let sched1 = require("../seed_data_raw/schedule-1-data");
let sched2 = require("../seed_data_raw/schedule-2-data");
let sched3 = require("../seed_data_raw/schedule-3-data");
let sched4 = require("../seed_data_raw/schedule-4-data");

let processed = require("../seed_data_raw/processed");

let combinedDataRaw = [...sched1.sched1Data, ...sched2.sched2Data, ...sched3.sched3Data, ...sched4.sched4Data];

let processedData = processed.processedData;

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert(processedData);

    });
};
