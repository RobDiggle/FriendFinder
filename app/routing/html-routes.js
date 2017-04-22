var path = require('path');

module.exports = function(app) {


app.get("/", function(request, response){
    response.sendFile(path.join(__dirname + '/../public/survey.html'));
    console.log(friends);

});


app.get("/survey", function(request, response){
    response.sendFile(path.join(__dirname + '/../public/home.html'));

});

}
