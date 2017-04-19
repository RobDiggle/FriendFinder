app.get("/", function(request, response){
		response.sendFile(path.join(_dirname, "home.html"))

});


app.get("/survey", function(request, response){
		response.sendFile(path.join(_dirname, "survey.html"))

});