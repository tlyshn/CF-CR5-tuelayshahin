var jsonText = `
[{
    "movieName": "Spongebob",
    "image": "./img/1.png",
    "description": "Spongebob description",
    "likes": 0
},
{
    "movieName": "Tenet",
    "image": "./img/2.png",
    "description": "Tenet description",
    "likes": 0
},
{
    "movieName": "Black Panther",
    "image": "./img/3.png",
    "description": "Black Panther description",
    "likes": 0
},

{
    "movieName": "Spies in Disguise",
    "image": "./img/4.png",
    "description": "Spies in Disguise description",
    "likes": 0
},
{
    "movieName": "Harry Potter",
    "image": "./img/5.png",
    "description": "Harry Potter description",
    "likes": 0
},
{
    "movieName": "Onward",
    "image": "./img/6.png",
    "description": "Onward description",
    "likes": 0
}
]
`;

var dataObjects = $.parseJSON(jsonText);
console.log(dataObjects);

for (var i = 0; i < dataObjects.length; i++) {
    document.getElementById('film').innerHTML += `
    <div class="box1">
            <div class="img"><img src="${dataObjects[i].image}" alt=""></div>
                <div class="descp">
                  <div class="moviename">${dataObjects[i].movieName}</div>
                  <div class="shortdes">${dataObjects[i].description}</div>
                  
                  <div class="klick">
                    <p id="likeBtn" class="like-button">Like <i class="fas fa-thumbs-up"></i></p>
                    <p class="likes">${dataObjects[i].likes}</p>
                  </div>
                </div>
    </div>
        `;
}

$("#likeBtn").click(function () {
    likeCount = dataObjects[0].likes
    likeCount += 1;
    console.log(likeCount)
});