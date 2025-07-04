const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/ProjectRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5000;

// ✅ No need for useNewUrlParser or useUnifiedTopology anymore
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
