const mongoose = require("mongoose");
// mongoose.set("useNewUrlParser", true);
// mongoose.set("useUnifiedTopology", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useUnifiedTopology", true);


class Database{
    constructor()
    {
        this.connect();
    }
    connect()
    {
        mongoose.connect("mongodb+srv://akash123:wnV74Y674woezcJ4@cluster0.ibpi9e0.mongodb.net/test")
        .then(()=>
        {
            console.log("Database connection successful.");
        })
        .catch((err)=>
        {
            console.log("Database connection error "+ err);
        })
    }
}

module.exports = new Database();