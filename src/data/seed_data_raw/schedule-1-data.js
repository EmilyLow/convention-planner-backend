//Core


//Note: Not adding Ars Necronomica Art exhibition. Can do that later if wanted

let sched1Color = "#405191";

let sched1Data = 
[
    {
        id: 1,
        schedule_id: 1,
        event_name: "Lovecraft Bus Tour 1",
        speaker: "",
        summary: "Tickets $15",
        location: "Departs from the Providence Visitor Information Center, 1 Sabin St.",
        start_time: "2019-08-22T18:30:00.000Z",
        end_time: "2019-08-22T20:00:00.000Z",
        start_col: 2,
        span: 4,
        color: "#405191"
      },
      {
        id: 2,
        schedule_id: 1,
        event_name: "Lovecraft Bus Tour 2",
        speaker: "",
        summary: "Tickets $15",
        location: "Departs from the Providence Visitor Information Center, 1 Sabin St.",
        start_time: "2019-08-22T20:00:00.000Z",
        end_time: "2019-08-22T21:30:00.000Z",
        start_col: 6,
        span: 4,
        color: "#405191"
      },
      {
        id: 3,
        schedule_id: 1,
        event_name: "Lovecraft Walking Tour",
        speaker: "",
        summary: "Tickets $10",
        location: "Departs from the Graduate Hotel",
        start_time: "2019-08-22T18:30:00.000Z",
        end_time: "2019-08-22T21:30:00.000Z",
        start_col: 10,
        span: 4,
        color: "#405191"
      },
      {
        id: 4,
        schedule_id: 1,
        event_name: "Welcoming Ceremony",
        speaker: "",
        summary: "Our convention Poet Laureate Sonya Taaffe, Guests of Honor, and local historians and luminaries, will welcome attendees to this historic and symbolic Providence landmark. Barnaby Evans, executive director of WaterFire, will emcee, and renowned organist Stephen Martorella will provide a musical accompaniment to the ceremony.",
        location: "First Baptist Church, 75 N. Main St. 02903",
        start_time: "2019-08-22T22:00:00.000Z",
        end_time: "2019-08-22T23:00:00.000Z",
        start_col: 2,
        span: 12,
        color: "#405191"
      },
      {
        id: 5,
        schedule_id: 1,
        event_name: "Party Under the Stars",
        speaker: "",
        summary: "OPEN TO THE PUBLIC (free). Kick off the convention with our big outdoor bash! NEON Retrofest partners with us to bring electronic musical acts Triangle Forest (Providence) and Straplocked (Connecticut) to the party. Plus we've got local dancing monstrosities Big Nazo, a Frank Difficult Presents music/video mash-up, screenings, a beer garden with Narragansett beers (including a reprise of their first Lovecraft beer), libations by New Harvest Coffee & Spirits, and a carnival fire pit roast by Julians and Dreadnaught Provisions to feed your cultist belly.",
        location: "Facade Parking Lot, 35 Weybosset St. 02903",
        start_time: "2019-08-23T00:00:00.000Z",
        end_time: "2019-08-23T04:00:00.000Z",
        start_col: 2,
        span: 6,
        color: "#405191"
      },
      {
        id: 6,
        schedule_id: 1,
        event_name: "Black Lodge Party (Private Event)",
        speaker: "",
        summary: "A private club for Golden Key and Silver Key members only (passes required). An intimate getaway spot for Key members. But remember - there are only three rules about Black Lodge...",
        location: "Secret, undisclosed location",
        start_time: "2019-08-23T01:00:00.000Z",
        end_time: "2019-08-23T04:00:00.000Z",
        start_col: 8,
        span: 6,
        color: "#405191"
      },
      {
        id: 7,
        schedule_id: 1,
        event_name: "Grand Emporium of Weird",
        speaker: "",
        summary: "Vendor Hall. Booksellers, publishers, artists, sculptors, jewelers, and general purveyors of top-tier weird.",
        location: "Omni, Narragansett Ballroom",
        start_time: "2019-08-23T16:00:00.000Z",
        end_time: "2019-08-23T23:00:00.000Z",
        start_col: 14,
        span: 6,
        color: "#405191"
      },
      {
        id: 8,
        schedule_id: 1,
        event_name: "Food Truck Court",
        speaker: "",
        summary: "",
        location: "Across the street from the Graduate Hotel.",
        start_time: "2019-08-23T17:00:00.000Z",
        end_time: "2019-08-23T18:30:00.000Z",
        start_col: 20,
        span: 6,
        color: "#405191"
      },
      {
        id: 9,
        schedule_id: 1,
        event_name: "Lovecraft Bus Tour 3",
        speaker: "",
        summary: "Tickets $15",
        location: "Departs from the Providence Visitor Information Center, 1 Sabin St.",
        start_time: "2019-08-23T18:30:00.000Z",
        end_time: "2019-08-23T20:00:00.000Z",
        start_col: 20,
        span: 6,
        color: "#405191"
      },
      {
        id: 10,
        schedule_id: 1,
        event_name: "Private Guest Reception",
        speaker: "",
        summary: "A private reception for Guests of honor, guests, and Golden Key holders. Hors d'oeuvres provided, cash bar available. The reception includes the presentation of the Robert Block Award.",
        location: "L'Apogee, Graduate 17th Floor",
        start_time: "2019-08-24T00:00:00.000Z",
        end_time: "2019-08-24T02:00:00.000Z",
        start_col: 14,
        span: 6,
        color: "#405191"
      },
      {
        id: 11,
        schedule_id: 1,
        event_name: "Stranger Things Trivia Night!",
        speaker: "",
        summary: "OPEN TO THE GENERAL PUBLIC (21+) Something special for this year - an evening of trivia for the sensational Weird show, Stranger Things! Led by our good friends at Bad Taste, and hosted by Black Sheep pub, next to AS220. Trivia will cover each season, one season at a time, over three separate rounds!",
        location: "Black Sheep, 297 Westminster St. 02903",
        start_time: "2019-08-24T00:00:00.000Z",
        end_time: "2019-08-24T03:00:00.000Z",
        start_col: 20,
        span: 6,
        color: "#405191"
      },
      {
        id: 12,
        schedule_id: 1,
        event_name: "The Eldritch Ball: Dreaming in Carcosa",
        speaker: "",
        summary: "TICKETED EVENT: Tickets $28 at the door for pass-holders/$35 for public. Our Eldritch Ball is a fancy-dress, masquerade, cosplay, semi-formal affair of Hyadean scale. Ticket cost includes two drink tickets (21+ ID required for alcohol). Free admission for Golden Key and Guests of Honor.",
        location: "Biltmore Ballroom, Graduate 17th Floor",
        start_time: "2019-08-24T02:00:00.000Z",
        end_time: "2019-08-24T04:00:00.000Z",
        start_col: 14,
        span: 6,
        color: "#405191"
      },
      {
        id: 13,
        schedule_id: 1,
        event_name: "Lovecraft Bus Tour 4",
        speaker: "",
        summary: "Tickets $15",
        location: "Departs from the Providence Visitor Information Center, 1 Sabin St.",
        start_time: new Date(2019, 7, 23, 15, 0).toISOString(),
        end_time: new Date(2019, 7, 23, 16, 30).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },
      {
        id: 14,
        schedule_id: 1,
        event_name: "Lovecraft Walking Tour",
        speaker: "",
        summary: "Tickets $10",
        location: "Departs from the Graduate Hotel, 1 Sabin St.",
        start_time: new Date(2019, 7, 23, 15, 0).toISOString(),
        end_time: new Date(2019, 7, 23, 18, 0).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      {
        id: 15,
        schedule_id: 1,
        event_name: "Guests of Honor",
        speaker: "Peter Cannon, Kenneth Hite, Victor LaVelle, Sonya Taaffe, Molly Tanzer, Dempow Torishima, Paul Tremblay, s.j. bagley (M)",
        summary: "Please join us asa we introduce and celebrate the Guests of Honor for NecronomiCon Providence 2019, follow by a discussion with the audience.",
        location: "Grand Ballroom, Biltmore 17th Floor",
        start_time: new Date(2019, 7, 23, 16, 30).toISOString(),
        end_time: new Date(2019, 7, 23, 17, 45).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      {
        id: 16,
        schedule_id: 1,
        event_name: "Special Event: A Remembrance of Sam Gafford, Wilum Pugmire, and Stanley Sargent",
        speaker: "",
        summary: "Please join Jeffrey Thomas, Marc Michaud, Derrick Hussey, Farah Rose Smith, Scott Connors, Peter Cannon, Sean Branney, Andrew Leman, and other friends in remembering the wonderful contributions of dear members of our community, now lost to us.",
        location: "Narragansett Bayview, Graduate 17th Floor",
        start_time: new Date(2019, 7, 23, 18, 0).toISOString(),
        end_time: new Date(2019, 7, 23, 19, 15).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      //Saturday
      {
        id: 17,
        schedule_id: 1,
        event_name: "Lovecraft Walking Tour",
        speaker: "",
        summary: "Tickets $10",
        location: "Departs from the Graduate Hotel",
        start_time: new Date(2019, 7, 24, 9, 0).toISOString(),
        end_time: new Date(2019, 7, 24, 12, 0).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      {
        id: 18,
        schedule_id: 1,
        event_name: "Lovecraft Walking Tour",
        speaker: "",
        summary: "Tickets $10",
        location: "Departs from the Graduate Hotel",
        start_time: new Date(2019, 7, 24, 15, 0).toISOString(),
        end_time: new Date(2019, 7, 24, 18, 0).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      {
        id: 19,
        schedule_id: 1,
        event_name: "Lovecraftian/Weird Trivia Hour and 'Drunk Lovecraftian History'",
        speaker: "",
        summary: "",
        location: "",
        start_time: new Date(2019, 7, 24, 21, 0).toISOString(),
        end_time: new Date(2019, 7, 24, 22, 0).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      {
        id: 20,
        schedule_id: 1,
        event_name: "Innsmouth Sea Shanties!",
        speaker: "",
        summary: "",
        location: "",
        start_time: new Date(2019, 7, 24, 22, 0).toISOString(),
        end_time: new Date(2019, 7, 24, 23, 0).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      //Sunday
      {
        id: 21,
        schedule_id: 1,
        event_name: "Cthulhu Prayer Breakfast",
        speaker: "",
        summary: "",
        location: "",
        start_time: new Date(2019, 7, 25, 8, 0).toISOString(),
        end_time: new Date(2019, 7, 25, 9, 30).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      {
        id: 22,
        schedule_id: 1,
        event_name: "Grand Emporium of Weird",
        speaker: "",
        summary: "",
        location: "",
        start_time: new Date(2019, 7, 25, 11, 0).toISOString(),
        end_time: new Date(2019, 7, 25, 16, 0).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      {
        id: 23,
        schedule_id: 1,
        event_name: "NecronomiCon Providence Wrap-Up",
        speaker: "",
        summary: "",
        location: "",
        start_time: new Date(2019, 7, 25, 16, 30).toISOString(),
        end_time: new Date(2019, 7, 25, 17, 45).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      {
        id: 174,
        schedule_id: 1,
        event_name: "Grand Emporium of Weird",
        speaker: "",
        summary: "",
        location: "",
        start_time: new Date(2019, 7, 24, 11, 0).toISOString(),
        end_time: new Date(2019, 7, 24, 16, 0).toISOString(),
        start_col: 0,
        span: 0,
        color: sched1Color
      },

      

    
      //Template
      // {
      //   id: ,
      //   schedule_id: 1,
      //   event_name: "",
      //   speaker: "",
      //   summary: "",
      //   location: "",
      //   start_time: new Date(2019, 7, 25, 8, 0).toISOString(),
      //   end_time: new Date(2019, 7, 25, 12, 0).toISOString(),
      //   start_col: 0,
      //   span: 0,
      //   color: sched1Color
      // },
];

module.exports = {sched1Data};