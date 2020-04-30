let scores = [
    { name: "Jane", score: 95, date: "2020 - 01 - 24", passed: true },
    { name: "Joe", score: 77, date: "2018 - 05 - 14", passed: true },
    { name: "Jack", score: 59, date: "2019 - 07 - 05", passed: false },
    { name: "Jill", score: 88, date: "2020 - 04 - 22", passed: true },
];

const addScore = (array, name, score, date) => {
    // let newScore = {
    //     name: name,
    //     score: score,
    //     date: date,
    //     passed: score < 60
    // }
    array.push({ name: name, score: score, date: date, passed: score >= 60 });
}
addScore(scores, "JohnDoe", 30, "2020-09-15");
console.log(scores);

const deleteScoreByIndex = (array, index) => {
    array.splice(index, 1);
}

// deleteScoreByIndex(scores, 1);
// console.log(scores);

//delete scores by name using findindex and splice

const deleteScoreByName = (name, array) => {
    const indextoRemove = array.findIndex((scoreElement) => {
        return scoreElement.name === name;
    })
    array.splice(indextoRemove, 1);
};
deleteScoreByName("Joe", scores);
console.log(scores);

const editScore = (array, index, score) => {
    let passed = null;
    if (score => 60) {
        passed = true;
    }
    else {
        passed = false;
    }
    array[index].score = score;
    array[index].passed = passed;
    //it is accessing an array. At any objects in that index. then accesss score or passed.
}

// editScore(scores, 0, 40);
// console.log(scores);

// let human = {
//     name: "bob",
//     age: 6
// }

// human.age = 7;
// console.log(human.age);

function findScoreByName(array, name) {
    return array.find((element) => element.name === name)
}



// I am having a syntax error for the last part that I am not able to figure out. Regardless, it didn't make much sense to me


// findScoreByName(scores, "Jill");
// console.log(findScoreByName(scores, "Jill")); // returns an object

// const findLowestScore = (array) => {
//     let currentLowestScore = array[0];
//     array.forEach((scoreElement) => {
//         if (element.score < currentLowestScore) {
//             currentLowestScore = scoreElement;
//         }

//     })
//     return currentLowestScore;
// };

// console.log((findLowestScore(scores));