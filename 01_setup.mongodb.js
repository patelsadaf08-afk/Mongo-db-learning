// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.

use('ecommerce');
db.dropDatabase();
db.products.insertMany([{
    name: "wireless mouse",
    price: 799,
    category: "electronics",
    stock: 120,
    ratings: ["computer", "accessory", "wireless"],
    createdAt: new Date()
},
{ 
    name: "mechanical Keyboard",
    price: 2499,
    category: "electronics",
    stock: 80,
    ratings: ["keyboard", "mechanical"],
    createdAt: new Date()
},
{
    name: "Gaming laptop",
    price: 870000,
    category: "computers",
    stock: 67,
    ratings: 4.6,
    tags: ["gaming", "laptops"],
    createdAt: new Date()

}])

db.contacts.insertMany([
   { name: "alice", message: "loved your work", phone: 4444567891, createdAt: new Date()},
   { name: "bob", message: "not interested", phone: 1234567898, createdAt: new Date()}, 
   { name: "carol", message: " hello", phone: 1234567895, createdAt: new Date()}

])

db.orders.insertMany([
    {
        ordersId: "ORD0001",
        user: "john",
        products: [{
            name: "wireless mouse", quantity: 1, price: 566
        },{
            name: "mechanical keyboard", quantity: 2, price: 899
        }],
        total: 6789,
        status: "delivered",
        createdAt: new Date()
    },{
        ordersId: "ORD0002",
        user: "jack",
        products: [{
            name: "gaming laptop", quantity: 1, price: 599
        }],
        total: 8956,
        status: "pending",
        createAt: new Date()
    }
])