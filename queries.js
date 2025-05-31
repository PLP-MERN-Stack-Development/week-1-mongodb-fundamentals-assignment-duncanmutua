// 1. Create - Insert a new book (example book not in your list)
db.books.insertOne({
  title: "Educated",
  author: "Tara Westover",
  genre: "Memoir",
  published_year: 2018,
  price: 18.5,
  in_stock: true,
  pages: 352,
  publisher: "Random House"
})

// 2. Read - Find all books
db.books.find()

// 3. Read - Find all books by George Orwell
db.books.find({ author: "George Orwell" })

// 4. Update - Update price of "1984"
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.99 } }
)

// 5. Delete - Remove book titled "Moby Dick"
db.books.deleteOne({ title: "Moby Dick" })

// 6. Filter - Find books published before 1950
db.books.find({ published_year: { $lt: 1950 } })

// 7. Projection - Show only titles and authors
db.books.find({}, { title: 1, author: 1, _id: 0 })

// 8. Sorting - Sort books by price ascending
db.books.find().sort({ price: 1 })

// 9. Aggregation - Count books by genre
db.books.aggregate([
  { $group: { _id: "$genre", count: { $sum: 1 } } }
])

// 10. Aggregation - Average pages per genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPages: { $avg: "$pages" } } }
])

// 11. Create Index on author for faster queries
db.books.createIndex({ author: 1 })

// 12. Show all indexes
db.books.getIndexes()
