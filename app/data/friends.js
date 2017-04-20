var userAnswers = [      
		1,
      1,
      4,
      1,
      1,
      1,
      2,
      1,
      1,
      1];

var friends =
[

 {
   "name":"Friend 1",
   "photo":"friend1.jpg",
   "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
 },
 {
   "name":"Friend 2",
   "photo":"friend2.jpg",
   "scores":[
      3,
      1,
      4,
      5,
      1,
      1,
      3,
      1,
      4,
      1
    ]
 },
  {
   "name":"Friend 3",
   "photo":"friend3.jpg",
   "scores":[
      5,
      1,
      5,
      4,
      5,
      2,
      3,
     4,
      3,
      1
    ]
 },
  {
   "name":"Friend 4",
   "photo":"friend4.jpg",
   "scores":[
      5,
      5,
      4,
      5,
      5,
      5,
      2,
      5,
      5,
      1
    ]
 },
  {
   "name":"Friend 5",
   "photo":"friend5.jpg",
   "scores":[
      1,
      1,
      4,
      1,
      1,
      1,
      2,
      1,
      1,
      1
    ]
 },
 
 ]

for(var i=0; i < friends.length; i++)
{
	console.log(friends[i]);
	console.log("________________________________________________")



	for (var j=0; j < userAnswers.length; j++ )
	{
		if(friends[i] !== userAnswers[j])
            {
            	// console.log(friends[i]);
            	console.log(userAnswers[j]);
            }
	}
}


// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as 