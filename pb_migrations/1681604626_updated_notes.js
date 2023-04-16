migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9g8r5k9dzwvn1dp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tbu6rkjt",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9g8r5k9dzwvn1dp")

  // remove
  collection.schema.removeField("tbu6rkjt")

  return dao.saveCollection(collection)
})
