use('ecommerce');
//db.products.find()
//db.products.find({"name": "wireless mouse"})
//db.products.find({category: "electronics"})

//db.products.find({ price: { $gte: 1000}})
//db.products.find({ price: {$gte:1000, $lte: 50000}})
//db.products.find({ $or: [{ category: "electronics"}, { stock: { $lt: 50}}]})
//db.products.find().sort({price: -1}).limit(1)
db.products.find().sort({price: -1}).skip(1).limit(1)