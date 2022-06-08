// 1.
console.log(hello);                                   
var hello = 'world';                                 

// it would hoist var hello to the top
// var hello
// console.log(hello)
// hello = 'world'
// logs undefined undefined

//2. 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//I think it would hoist a line 14 to the top and then the function call to the bottom of it
//var needle = 'haystack';
//function test(){
//  var needle = 'magnet';
//  console.log(needle);
//test()
// logs magnet

//3. 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//var brendan = 'super cool';
//function print(){
//  brendan = 'only okay';
// console.log(brendan); -> logs only okay
//}
//console.log(brendan); -> logs super cool

//4. 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//var food = 'chicken'
//console.log(food) -> logs chicken
// function eat(){
//  food = 'half-chicken';
//  console.log(food) -> logs half-chicken
//  var food = 'gone'
//}
//eat()

//5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// console.log(food) -> logs Unexpected identifier
//var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
//mean();
// console.log(food);

//6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//var genre;
// console.log(genre); -> logs undefined
// function rewind() {
//     genre = "rock";
//     console.log(genre); -> logs rock
//     var genre = "r&b";
//     console.log(genre); -> logs r&b
// }
//rewind();
// console.log(genre); -> logs undefined

//7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//dojo = "san jose";
//console.log(dojo); -> logs san jose 
// function learn() {
//     dojo = "seattle"; 
//     console.log(dojo); -> logs seattle
//     var dojo = "burbank";
//     console.log(dojo); -> logs burbank
// }
//learn();
// console.log(dojo); -> logs san jose

//8. 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
//console.log(makeDojo("Chicago", 65)); -> logs {'name': Chicago, 'students': 65, 'hiring': true}
//console.log(makeDojo("Berkeley", 0)); -> logs cannot change const or something like that.