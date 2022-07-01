// let team = [
//     { name: 'Goodness Adedoja', track: 'Website Developer', hobby: 'movie', food: ' fried rice', pic: 'food1.png' },
//     { name: 'Victor', track: 'Website Developer', hobby: 'movie', food: 'fried rice', pic: 'food2.png' },
//     { name: 'Great Pam', track: 'Website Developer', hobby: 'music', food: 'Soup and garri', pic: 'food3.png' },
//     { name: 'Oguchukwu', track: 'Website Developer', hobby: 'writing book', food: 'Soup and garri', pic: 'pics2.png' },

// ]

// let row = document.querySelector('.room');
// let cardHolder = ''
// team.forEach((person) => {
//     cardHolder += `
//     <div class="flip">
//         <h2 class="name">${person.name}</h2>
//         <p class="track">${person.track}</p>
//         <p class="hobby">${person.hobby}</p>
//         <p class="food">${person.food}</p>
//         <div class="image-1"><img src="./image/${person.pic}"></div>
//         </div>
//     `

// })


// row.innerHTML = cardHolder

const d = Date.now()
const date = new Date(d)
console.log(date);
switch (date.getDay()) {
    case 5:
        console.log('friday');
}



const fruit = ['Banana', 'pineapple', 'orange'];
console.log(fruit)
console.log(fruit.unshift(['apple']))
console.log(fruit.pop(['orange']))


const PI = 8 * Math.PI;
console.log(PI)

const number = function() {
    return Math.floor(Math.random() * 10)
}
console.log(number())