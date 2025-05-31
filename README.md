# MongoDB Fundamentals Assignment

This project demonstrates working with MongoDB using a sample book dataset.

## Scripts

### insert_books.js
This script connects to the MongoDB database, clears the existing `books` collection if any, and inserts an array of sample book documents. It then fetches and displays all inserted books to confirm the operation.

The script uses the official MongoDB Node.js driver and runs asynchronously.

## Usage

Run the script with Node.js to populate your database:

```bash
node insert_books.js
