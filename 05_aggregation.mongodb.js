use ('ecommerce');

//db.sales.insertMany([
   // { _id: 1, item: "apple", price: 10, quantity:5, category: "fruit"},
    // { _id: 2, item: "banana", price: 5, quantity:10, category: "fruit"},
   //  { _id: 3, item: "carrot", price: 8, quantity:6, category: "vegetables"},
    // { _id: 4, item: "tomato", price: 6, quantity:8, category: "vegetables"},
      //{ _id: 5, item: "mango", price: 15, quantity:3, category: "fruit"},]);

      //db.sales.aggregate([
       // { $match: 
       //{category: "fruit"} }]);

       //db.sales.aggregate([
        //{ $project: { _id: 0, item: 1, price: 1} }]);

        //db.sales.aggregate([
         //{ $group: {
             //id: "$category",
             // totalsales: 
             // { $sum: { $multiply: ["$price", "$quantity"]}}
            //}

        //}])

       // db.sales.aggregate([
           // { $group: {
              //  _id: "$category",
              //  totalsales: { $sum: { $multiply: ["$price","$quantity"]}}
          //  }

          //  },
           // { $sort: {totalsales: -1}}
       // ])

       db.sales.aggregate([
        { $match: { category: "fruit"}},
        { $group: { _id: null, totalsales:{ $sum: {$multiply: ["$price", "$quantity"]}}}}
       ]);

