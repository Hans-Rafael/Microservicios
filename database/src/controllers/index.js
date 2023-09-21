const {catchAsync} = require('../utils/catchAsync');

module.exports =  {
    addDatabase:catchAsync( require("./addDatabase")),
    getDatabase:catchAsync( require("./getDatabase")),
    getDatabases:catchAsync( require("./getDatabases")),
    deleteDatabase:catchAsync( require("./deleteDatabase")),
    updateDatabase:catchAsync( require("./putDocument")),
}