use ("crudDb")
//CREATE
db.createCollection("cources")

db.courses.insertOne([{
    name: "Mongodb course",
    price: 0,
    assighments: 2,
    projects: 56
}])

db.courses.insertMany([{
    name: "autocad",
    price: 1000,
    assighments: 12,
    projects: 4
},

  { "name": "MongoDB Basics", "price": 0, "assignments": 2, "projects": 5 },
  { "name": "Advanced Indexing", "price": 49, "assignments": 3, "projects": 12 },
  { "name": "Aggregation Pipeline", "price": 0, "assignments": 5, "projects": 8 },
  { "name": "Data Modeling", "price": 99, "assignments": 2, "projects": 15 },
  { "name": "Replication & Sharding", "price": 199, "assignments": 4, "projects": 3 },
  { "name": "MongoDB with Node.js", "price": 0, "assignments": 6, "projects": 22 },
  { "name": "Security Best Practices", "price": 150, "assignments": 1, "projects": 7 },
  { "name": "Atlas Search Deep Dive", "price": 0, "assignments": 3, "projects": 10 },
  { "name": "Performance Tuning", "price": 299, "assignments": 4, "projects": 18 },
  { "name": "GridFS Fundamentals", "price": 0, "assignments": 2, "projects": 4 }

])

//READ

//let a=db.courses.find({price:0})
//console.log(a.count())

//let b=db.courses.find({price:0})
//console.log(b.toArray())

//let c=db.courses.findOne({price:0})
//console.log(c)

//UPDATE
//db.courses.updateOne({price:0},
//{ $set:{price:100}})

//db.courses.updateMany({price:0},
  //  {$set:{price:2000}}
//)

//DELETE
//db.courses.deleteOne({price:99})

db.courses.deleteMany({price:0})