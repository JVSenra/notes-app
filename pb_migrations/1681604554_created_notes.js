migrate((db) => {
  const collection = new Collection({
    "id": "9g8r5k9dzwvn1dp",
    "created": "2023-04-16 00:22:34.526Z",
    "updated": "2023-04-16 00:22:34.526Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "awnjy8m7",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9g8r5k9dzwvn1dp");

  return dao.deleteCollection(collection);
})
