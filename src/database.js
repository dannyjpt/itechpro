const mongoose = require('mongoose');

const {ITECH_APP_MONGODB_HOST,ITECH_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${ITECH_APP_MONGODB_HOST}/${ITECH_APP_MONGODB_DATABASE}`;


mongoose.connect(MONGODB_URI,{
    useUnifiedTopolgy:true,
    useNewUrlParser: true,
    useCreateIndex:true
})

.then(db => console.log('DB Connected'))
.catch(err => console.log(err));