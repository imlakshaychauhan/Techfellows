const { default: mongoose } = require("mongoose");

function DbConnect() {
    const DB_URL = "mongodb://localhost:27017/techfellows";
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const db = mongoose.connection;
    db.on('error', console.log.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB Connected...');
    })
}

module.exports = DbConnect;