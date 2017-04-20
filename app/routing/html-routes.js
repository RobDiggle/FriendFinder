
var exportsHTML = module.exports = {};





exportsHTML.app.get("/", function(request, response){
		response.sendFile(path.join(_dirname, "home.html"))

});


exportsHTML.app.get("/survey", function(request, response){
		response.sendFile(path.join(_dirname, "survey.html"))

});

