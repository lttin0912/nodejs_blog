const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_blog_dev', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect MongoDB Successfully!!!');
    } catch (error) {
        console.log('Connect MongoDB Failure!!!');
    }
}

module.exports = { connect };
