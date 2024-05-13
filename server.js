const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// allow cors on all
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017/signup', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const Item = require('./models/Item'); // Create the Item model

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/items', async (req, res) => {
	try {
		const items = await Item.find();
		res.json(items);
	} catch (error) {
		console.error(error);
		res.status(500).send('Server Error');
	}
});
