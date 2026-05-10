use('ecommerce');
//db.products.updateOne({ name: "wireless mouse"},
    //{$set: {price: 899}})

    //db.products.updateMany({ category: "electronics"},
   // { $inc:{stock: 20}})

db.products.updateOne({ name: "wireless mouse"},
    { $push:{ tags:"mouse"}
    }
   )