

module.exports = function(app){
  app.get('/api/friends', function(req,res){
    res.json(friends);
  });

app.post('/api/friends', function(req,res){

console.log("PAGE LOADED <br> ________________________________________________")


var userAnswers=[];





console.log(userAnswers);




 var scoreArray = [];
 var newBuddy = 0;

for(var i=0; i < friends.length; i++)
{
	console.log(friends[i]);
  console.log("Scores" + friends[i].scores)
	console.log("________________________________________________")

var scoreDiff = 0;

	for (var j=0; j < userAnswers.length; j++ )
	{
    scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userAnswers[j])));

		if(friends[i].scores !== userAnswers[j])
            {
            	// console.log(friends[i]);
            	console.log(userAnswers[j]);
            }
	}

    scoreArray.push(scoreDiff);

}

    for(var i=0; i<scoreArray.length; i++)
    {
      if(scoreArray[i] <= scoreArray[newBuddy]){
        newBuddy = i;
      }
    }

// 
    var letMeTellYou = friends[newBuddy];
    res.json(letMeTellYou);


    //pushes new submission into the friendsList array
    friends.push(req.body);
  });

  }
