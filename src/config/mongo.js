const mongoose = require('mongoose')

const { appConfig } = require('./app')

async function connect() {
    try {
        await mongoose.connect(appConfig.db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('🚀 ~~~ connected to Atlas::::Ecommerce-Pet')
    } catch (error) {
        console.error('Connect to Atlas Failed:', error.message)
        console.error('Detailed error:', error)
    }

    // Uncomment and use this block if you want to try connecting to another database
    // try {
    //     await mongoose.connect(`${process.env.BASE_URL_DB}`, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     });
    //     console.log('🚀 ~~~ connected to Mongo_compass::::Ecommerce-Pet');
    // } catch (error) {
    //     console.error('Connect to Mongo Compass Failed:', error.message);
    //     console.error('Detailed error:', error);
    // }
}

module.exports = { connect }
