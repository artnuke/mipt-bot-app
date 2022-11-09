// Create DB and collection
db = new Mongo().getDB("mipt");
db.createCollection("botdb", { capped: false });