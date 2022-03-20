module.exports = {
    "myUrl": process.env.NODE_ENV === "production"?"https://megacritic.herokuapp.com":"http://localhost:8000"
}