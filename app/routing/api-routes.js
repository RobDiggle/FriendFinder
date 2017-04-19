app.get("/api/friends", function(request, response) {
    response.send("Welcome to the friend finder page!")

});


app.get("/friends/:friendName?", function(request, response) {
    var chosen = request.params.friendName;
    if (chosen) {
        console.log(chosen);

        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].routeName) {
                response.json(friends[i]);
                return
            }
        }
    } else {
        response.json(friends);
    }

    response.send("No philosopher found.");
})
