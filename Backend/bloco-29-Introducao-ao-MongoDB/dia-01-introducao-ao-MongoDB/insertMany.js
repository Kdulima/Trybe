db.carros.insertMany([
  {
    "_id": 1,
    "modelo": "Fiesta",
    "marca": "Ford",
    "ano": "2018",
    "preco": "R$ 10.000,00"
  },
  {
    "_id": 2,
    "modelo": "Focus",
    "marca": "Ford",
    "ano": "2018",
    "preco": "R$ 20.000,00"
  },
  {
    "_id": 1,
    "modelo": "Fusion",
    "marca": "Ford",
    "ano": "2018",
    "preco": "R$ 30.000,00"
  },
  {
    "_id": 4,
    "modelo": "Ranger",
    "marca": "Ford",
    "ano": "2018",
    "preco": "R$ 35.000,00"
  }
], {ordered: false});



// db.carros.insertMany([
//   { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
//   { "productName": "Tesoura", "price": 5, "status": "B" },
//   { "productName": "Borracha", "price": 15, "status": "A" }
// ]);