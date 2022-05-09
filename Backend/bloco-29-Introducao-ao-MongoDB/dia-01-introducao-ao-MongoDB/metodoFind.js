db.movies.insertOne(
  {
      "title" : "Forrest Gump",
      "category" : [ "drama", "romance" ],
      "imdb_rating" : 8.8,
      "filming_locations" : [
          { "city" : "Savannah", "state" : "GA", "country" : "USA" },
          { "city" : "Monument Valley", "state" : "UT", "country" : "USA" },
          { "city" : "Los Anegeles", "state" : "CA", "country" : "USA" }
      ],
      "box_office" : {
          "gross" : 557, "opening_weekend" : 24, "budget" : 55
      }
  }
);

// db.movies.findOne(
//   { "title" : "Forrest Gump" },
//   { "title" : 1, "imdb_rating" : 1 }
// )

db.movies.findOne(
  { "title" : "Forrest Gump" },
  { "title" : 1, "imdb_rating" : 1, "_id": 0 }
)  // retorna apenas o titulo e a nota do filme, suprimindo o id.