const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the mongoose schema and model
const ItemSchema = new mongoose.Schema({
    name: String
});
const Item = mongoose.model('Item', ItemSchema);

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

// Function to initialize DB with 5 elements
async function initializeItems() {
    const itemCount = await Item.countDocuments();
    if (itemCount === 0) {
        const defaultItems = [
            { name: "Item 1" },
            { name: "Item 2" },
            { name: "Item 3" },
            { name: "Item 4" },
            { name: "Item 5" }
        ];
        await Item.insertMany(defaultItems);
        console.log("5 items initialized in the database");
    } else {
        console.log("Database already has items");
    }
}

// Function to add a new item to the database
async function addItem(itemName) {
    const item = new Item({ name: itemName });
    await item.save();
    return item;
}

// Function to delete an item from the database
async function deleteItem(itemId) {
    const result = await Item.findByIdAndRemove(itemId);
    return result;
}

// API Endpoint to fetch all items
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// API Endpoint to add a new item
app.post('/items', async (req, res) => {
    try {
        const item = await addItem(req.body.name);
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// API Endpoint to delete an item
app.delete('/items/:id', async (req, res) => {
    try {
        const result = await deleteItem(req.params.id);
        if (result) {
            res.json({ message: 'Item deleted successfully' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server after initializing the items
initializeItems().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
