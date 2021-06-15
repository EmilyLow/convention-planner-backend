// Colors
/*
["#405191", Dark blue
"#724312", Reddish brown
"#39627e", More green dark blue
"#3b0032", Purple Red, games
"#002f44"], Darkest blue

*/

//TODO: Import seed data instead of copy/pasting here
//let allData = [...data1, ...data2, ...data3] 

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
      return knex('events').insert(combinedDataRaw);
      // return knex('events').insert(
      //   [
      //     {
      //       id: 1,
      //       schedule_id: 1,
      //       event_name: "Lovecraft Bus Tour 1",
      //       speaker: "",
      //       summary: "Tickets $15",
      //       location: "Departs from the Providence Visitor Information Center, 1 Sabin St.",
      //       start_time: "2019-08-22T18:30:00.000Z",
      //       end_time: "2019-08-22T20:00:00.000Z",
      //       start_col: 2,
      //       span: 4,
      //       color: "#405191"
      //     },
      //     {
      //       id: 2,
      //       schedule_id: 1,
      //       event_name: "Lovecraft Bus Tour 2",
      //       speaker: "",
      //       summary: "Tickets $15",
      //       location: "Departs from the Providence Visitor Information Center, 1 Sabin St.",
      //       start_time: "2019-08-22T20:00:00.000Z",
      //       end_time: "2019-08-22T21:30:00.000Z",
      //       start_col: 6,
      //       span: 4,
      //       color: "#405191"
      //     },
      //     {
      //       id: 3,
      //       schedule_id: 1,
      //       event_name: "Lovecraft Walking Tour",
      //       speaker: "",
      //       summary: "Tickets $10",
      //       location: "Departs from the Graduate Hotel",
      //       start_time: "2019-08-22T18:30:00.000Z",
      //       end_time: "2019-08-22T21:30:00.000Z",
      //       start_col: 10,
      //       span: 4,
      //       color: "#405191"
      //     },
      //     {
      //       id: 4,
      //       schedule_id: 1,
      //       event_name: "Welcoming Ceremony",
      //       speaker: "",
      //       summary: "Our convention Poet Laureate Sonya Taaffe, Guests of Honor, and local historians and luminaries, will welcome attendees to this historic and symbolic Providence landmark. Barnaby Evans, executive director of WaterFire, will emcee, and renowned organist Stephen Martorella will provide a musical accompaniment to the ceremony.",
      //       location: "First Baptist Church, 75 N. Main St. 02903",
      //       start_time: "2019-08-22T22:00:00.000Z",
      //       end_time: "2019-08-22T23:00:00.000Z",
      //       start_col: 2,
      //       span: 12,
      //       color: "#405191"
      //     },
      //     {
      //       id: 5,
      //       schedule_id: 1,
      //       event_name: "Party Under the Stars",
      //       speaker: "",
      //       summary: "OPEN TO THE PUBLIC (free). Kick off the convention with our big outdoor bash! NEON Retrofest partners with us to bring electronic musical acts Triangle Forest (Providence) and Straplocked (Connecticut) to the party. Plus we've got local dancing monstrosities Big Nazo, a Frank Difficult Presents music/video mash-up, screenings, a beer garden with Narragansett beers (including a reprise of their first Lovecraft beer), libations by New Harvest Coffee & Spirits, and a carnival fire pit roast by Julians and Dreadnaught Provisions to feed your cultist belly.",
      //       location: "Facade Parking Lot, 35 Weybosset St. 02903",
      //       start_time: "2019-08-23T00:00:00.000Z",
      //       end_time: "2019-08-23T04:00:00.000Z",
      //       start_col: 2,
      //       span: 6,
      //       color: "#405191"
      //     },
      //     {
      //       id: 6,
      //       schedule_id: 1,
      //       event_name: "Black Lodge Party (Private Event)",
      //       speaker: "",
      //       summary: "A private club for Golden Key and Silver Key members only (passes required). An intimate getaway spot for Key members. But remember - there are only three rules about Black Lodge...",
      //       location: "Secret, undisclosed location",
      //       start_time: "2019-08-23T01:00:00.000Z",
      //       end_time: "2019-08-23T04:00:00.000Z",
      //       start_col: 8,
      //       span: 6,
      //       color: "#405191"
      //     },
      //     {
      //       id: 7,
      //       schedule_id: 1,
      //       event_name: "Grand Emporium of Weird",
      //       speaker: "",
      //       summary: "Vendor Hall. Booksellers, publishers, artists, sculptors, jewelers, and general purveyors of top-tier weird.",
      //       location: "Omni, Narragansett Ballroom",
      //       start_time: "2019-08-23T16:00:00.000Z",
      //       end_time: "2019-08-23T23:00:00.000Z",
      //       start_col: 14,
      //       span: 6,
      //       color: "#405191"
      //     },
      //     {
      //       id: 8,
      //       schedule_id: 1,
      //       event_name: "Food Truck Court",
      //       speaker: "",
      //       summary: "",
      //       location: "Across the street from the Graduate Hotel.",
      //       start_time: "2019-08-23T17:00:00.000Z",
      //       end_time: "2019-08-23T18:30:00.000Z",
      //       start_col: 20,
      //       span: 6,
      //       color: "#405191"
      //     },
      //     {
      //       id: 9,
      //       schedule_id: 1,
      //       event_name: "Lovecraft Bus Tour 3",
      //       speaker: "",
      //       summary: "Tickets $15",
      //       location: "Departs from the Providence Visitor Information Center, 1 Sabin St.",
      //       start_time: "2019-08-23T18:30:00.000Z",
      //       end_time: "2019-08-23T20:00:00.000Z",
      //       start_col: 20,
      //       span: 6,
      //       color: "#405191"
      //     },
      //     {
      //       id: 10,
      //       schedule_id: 1,
      //       event_name: "Private Guest Reception",
      //       speaker: "",
      //       summary: "A private reception for Guests of honor, guests, and Golden Key holders. Hors d'oeuvres provided, cash bar available. The reception includes the presentation of the Robert Block Award.",
      //       location: "L'Apogee, Graduate 17th Floor",
      //       start_time: "2019-08-24T00:00:00.000Z",
      //       end_time: "2019-08-24T02:00:00.000Z",
      //       start_col: 14,
      //       span: 6,
      //       color: "#405191"
      //     },
      //     {
      //       id: 11,
      //       schedule_id: 1,
      //       event_name: "Stranger Things Trivia Night!",
      //       speaker: "",
      //       summary: "OPEN TO THE GENERAL PUBLIC (21+) Something special for this year - an evening of trivia for the sensational Weird show, Stranger Things! Led by our good friends at Bad Taste, and hosted by Black Sheep pub, next to AS220. Trivia will cover each season, one season at a time, over three separate rounds!",
      //       location: "Black Sheep, 297 Westminster St. 02903",
      //       start_time: "2019-08-24T00:00:00.000Z",
      //       end_time: "2019-08-24T03:00:00.000Z",
      //       start_col: 20,
      //       span: 6,
      //       color: "#405191"
      //     },
      //     {
      //       id: 12,
      //       schedule_id: 1,
      //       event_name: "The Eldritch Ball: Dreaming in Carcosa",
      //       speaker: "",
      //       summary: "TICKETED EVENT: Tickets $28 at the door for pass-holders/$35 for public. Our Eldritch Ball is a fancy-dress, masquerade, cosplay, semi-formal affair of Hyadean scale. Ticket cost includes two drink tickets (21+ ID required for alcohol). Free admission for Golden Key and Guests of Honor.",
      //       location: "Biltmore Ballroom, Graduate 17th Floor",
      //       start_time: "2019-08-24T02:00:00.000Z",
      //       end_time: "2019-08-24T04:00:00.000Z",
      //       start_col: 14,
      //       span: 6,
      //       color: "#405191"
      //     },
      //     {
      //       id: 13,
      //       schedule_id: 2,
      //       event_name: "Scripturam Obscuram: Remarkable Unsung Authors",
      //       speaker: "Michael Bukowski, Gemma Files, Fiona Maeve Geist, Derrick Hussey, Leslie Klinger (M), Victor LaVelle",
      //       summary: "We all known the particular struggle of trying to discover authors whose work is so novel, so new (to us, at least!), so very important, and whose works just seem to slip through the cracks of the critical establishment. Allow us the chance to broaden your horizons with a panel of experts on the obscure as they introduce us to some favorite writers with whom we may not be familiar. ",
      //       summary: "Capital Ballroom, Graduate 2nd Floor",
      //       start_time: "2019-08-23T14:00:00.000Z",
      //       end_time: "2019-08-23T15:15:00.000Z",
      //       start_col: 14,
      //       span: 4,
      //       color: "#724312"
      //     },
      //     {
      //       id: 14,
      //       schedule_id: 2,
      //       event_name: "Sermons From The Hill Of Dreams: Arthur Machen",
      //       speaker: "Michael Dirda, Matthew Jaffe, John Langan (M), Carrie Laben, L.C. von Hessen",
      //       summary: "Writer and mystic Arthur Llewellyn Jones, better known to readers as Arthur Machen, was one of the most important figures in weird/horror literature around the turn of the last century. His unique blend of ancient folklore, spiritual and occult ideas, and thoroughly modern sensibilities led him to create a body of work that's seen as a towering achievement. Come join us as we explore his work and its lasting influence on the field as a whole.",
      //       summary: "Newport-Washington, Omni 3rd Floor",
      //       start_time: "2019-08-23T14:00:00.000Z",
      //       end_time: "2019-08-23T15:15:00.000Z",
      //       start_col: 18,
      //       span: 4,
      //       color: "#724312"
      //     },
      //     {
      //       id: 15,
      //       schedule_id: 2,
      //       event_name: "Pulp History",
      //       speaker: "Jason Ray Carney, Scott Connors (M), Steven Mariconda, Will Murray, Darrell Schweitzer, Jason Bradley Thompson",
      //       summary: "Weird Tales. Argosy. Amazing Stories. For fifty years, pulp magazines reigned supreme publishing the sensational, the titillating, and the strange. In their heyday they published the lowest hacks and greatest literati and were the launch platform for many legends of genre fiction. Our panelists present a history of the major magazines that published the work of Lovecraft, Howard, and so many more!",
      //       summary: "Biltmore Ballroom, Graduate 17th Floor",
      //       start_time: "2019-08-23T14:00:00.000Z",
      //       end_time: "2019-08-23T15:15:00.000Z",
      //       start_col: 22,
      //       span: 4,
      //       color: "#724312"
      //     },
      //     {
      //       id: 16,
      //       schedule_id: 2,
      //       event_name: "Songs The Sandman Sings: The Legacy and Influence of E.T.A. Hoffmann",
      //       speaker: "Christa Carmen, Michael Dirda, Sean Moreland (M), Sonya Taaffe, L.C. von Hessen",
      //       summary: "German Romantic and polymath E.T.A. Hoffmann (1776-1822) was an early pioneer in science fiction and fantasy, with macabre sensibilities that influenced Poe, Kafka, and Hitchcock. Perhaps best known for histor stories The Nutcracker and the Mouse King, The Sandman, and Automata, his work and ideas connected fantasy, mesmerism, dreams, and machine culture in ways sometimes overlooked today. Our panelists discuss his work and illuminate his enduring influence on weird fiction.",
      //       summary: "Newport-Washington, Omni 3rd Floor",
      //       start_time: "2019-08-23T15:30:00.000Z",
      //       end_time: "2019-08-23T16:45:00.000Z",
      //       start_col: 14,
      //       span: 4,
      //       color: "#724312"
      //     },
      //     {
      //       id: 17,
      //       schedule_id: 2,
      //       event_name: "Providence in Lovecraft's Day",
      //       speaker: "Sean Branney, Jim Dyer, Jason Eckhardt, Rory Raven (M), Faye Ringel",
      //       summary: "How did the Providence of Lovecraft's day shape his fiction? Which locations inspired or are incorporated into his works? How vastly different is the modern Providence landscape from today? What has been lost of Lovecraft's Providence, adn what can we learn of those places that are no longer present? Is Lovecraft a \"regional\" writer? Explore these questions and more with those who are well-versed in Lovecraftian geographical history. ",
      //       summary: "Capital Ballroom, Graduate 2nd Floor",
      //       start_time: "2019-08-23T15:30:00.000Z",
      //       end_time: "2019-08-23T16:45:00.000Z",
      //       start_col: 18,
      //       span: 4,
      //       color: "#724312"
      //     },
      //     {
      //       id: 18,
      //       schedule_id: 2,
      //       event_name: "Welcome to the Weird: A Beginners Guide to Weird Fiction",
      //       speaker: "Peter Cannon, Ruthanna Emrys, Géza A. G. Reilly, Simon Strantzas (M), Molly Tanzer, Elena Tchougounova-Paulson",
      //       summary: "New to the weird fiction scene? Know a lot, but want to fill in the corners and better understand how it all fits together? Where is the fuzzy boundary that separates \"weird fiction\" from horror, dark fantasy, and other genres? Join our experts as they provide a survey of weird fiction in history and today, tracing the roots, concerns, trends, and major writers in the field. ",
      //       summary: "Biltmore Ballroom, Graduate 17th Floor",
      //       start_time: "2019-08-23T15:30:00.000Z",
      //       end_time: "2019-08-23T16:45:00.000Z",
      //       start_col: 22,
      //       span: 4,
      //       color: "#724312"
      //     },
      //     //User Events starting here
      //     {
      //       id: 19,
      //       schedule_id: 4,
      //       event_name: "Party Under the Stars",
      //       speaker: "",
      //       summary: "OPEN TO THE PUBLIC (free). Kick off the convention with our big outdoor bash! NEON Retrofest partners with us to bring electronic musical acts Triangle Forest (Providence) and Straplocked (Connecticut) to the party. Plus we've got local dancing monstrosities Big Nazo, a Frank Difficult Presents music/video mash-up, screenings, a beer garden with Narragansett beers (including a reprise of their first Lovecraft beer), libations by New Harvest Coffee & Spirits, and a carnival fire pit roast by Julians and Dreadnaught Provisions to feed your cultist belly.",
      //       location: "Facade Parking Lot, 35 Weybosset St. 02903",
      //       start_time: "2019-08-23T00:00:00.000Z",
      //       end_time: "2019-08-23T04:00:00.000Z",
      //       start_col: 0,
      //       span: 0,
      //       color: "#ffdfba"
      //     },
      //     {
      //       id: 20,
      //       schedule_id: 4,
      //       event_name: "Providence in Lovecraft's Day",
      //       speaker: "Sean Branney, Jim Dyer, Jason Eckhardt, Rory Raven (M), Faye Ringel",
      //       summary: "How did the Providence of Lovecraft's day shape his fiction? Which locations inspired or are incorporated into his works? How vastly different is the modern Providence landscape from today? What has been lost of Lovecraft's Providence, adn what can we learn of those places that are no longer present? Is Lovecraft a \"regional\" writer? Explore these questions and more with those who are well-versed in Lovecraftian geographical history. ",
      //       summary: "Capital Ballroom, Graduate 2nd Floor",
      //       start_time: "2019-08-23T15:30:00.000Z",
      //       end_time: "2019-08-23T16:45:00.000Z",
      //       start_col: 0,
      //       span: 0,
      //       color: "#ffb3ba"
      //     },
      //     {
      //       id: 21,
      //       schedule_id: 5,
      //       event_name: "Providence in Lovecraft's Day",
      //       speaker: "Sean Branney, Jim Dyer, Jason Eckhardt, Rory Raven (M), Faye Ringel",
      //       summary: "How did the Providence of Lovecraft's day shape his fiction? Which locations inspired or are incorporated into his works? How vastly different is the modern Providence landscape from today? What has been lost of Lovecraft's Providence, adn what can we learn of those places that are no longer present? Is Lovecraft a \"regional\" writer? Explore these questions and more with those who are well-versed in Lovecraftian geographical history. ",
      //       summary: "Capital Ballroom, Graduate 2nd Floor",
      //       start_time: "2019-08-23T15:30:00.000Z",
      //       end_time: "2019-08-23T16:45:00.000Z",
      //       start_col: 0,
      //       span: 0,
      //       color: "#ffb3ba"
      //     }
      //   ]
      
      

      // );
    });
};
