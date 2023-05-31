const mongoose = require('mongoose');
const dBName = 'userCreation';

/**
 * connecting to database
 */
mongoose.connect(`mongodb://127.0.0.1:27017/${dBName}`)
.then(() => {
    console.log(`Connected to database ${dBName}`)
})
.catch((err) => {
    console.log(`Cannot able to connect with ${dBName}. Root cause : ${err}`);
});