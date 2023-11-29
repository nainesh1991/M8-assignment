//STEP 1
// let movie = ['The Hulk','God','Ant Man','Iron Man','Tiger3']
// console.log(movie[1])
//STEP 2
// let movies = new Array(5)
// movies[0]='The Hulk'
// movies[1]='The Hulk1'
// movies[2]='The Hulk2'
// movies[3]='The Hulk3'
// movies[4]='The Hulk4'
// console.log(movies[0])
//STEP 3
// let movies = new Array(5)
// movies[0]='The Hulk'
// movies[1]='The Hulk1'
// movies[2]='The Hulk2'
// movies[3]='The Hulk3'
// movies[4]='The Hulk4'
// movies.splice(2, 0, 'Ant Man')
// console.log(movies.length)
//STEP 4
// let movie = ['The Hulk1','The Hulk1','The Hulk1','Iron Man','Tiger3']
// delete movie[0]
// console.log(movie)
//STEP 5
// let movie = ['The Hulk1','The Hulk2','The Hulk3','The Hulk4','The Hulk5','The Hulk6','The Hulk7']
// for (let m in movies) {
//     console.log(movie[m]);
//   }
//STEP 6
// let movie = ['The Hulk','God','Ant Man','Iron Man','Tiger3','Loki','Cobra']
// for (let m of movie) {
//     console.log(m);
//   }
//STEP 7
// let movie = ['The Hulk','God','Ant Man','Iron Man','Tiger3','Loki','Cobra']
// movie.sort()
// for (let m of movie) {
//     console.log(m);
//   }
//STEP 8
// let movie = ['The Hulk','God','Ant Man','Iron Man','Tiger3','Loki','Cobra']

// let leastFavMovies = ['kaun','ho','mai']

// console.log("Movies I like:\n")
// for(let m in movie){
//     if(m ==0){   
//     console.log("\n") 
//     }
//     console.log(movie[m])
// }
// console.log("\nMovies I regret watching:\n")
// for(let m in leastFavMovies){
//     if(m ==0){   
//         console.log("\n") 
//         }
//     console.log(leastFavMovies[m])
// }
//STEP 9
// let movie = ['The Hulk','God','Ant Man','Iron Man','Tiger3','Loki','Cobra']

// let leastFavMovies = ['kaun','ho','mai']

// console.log("Movies I like:\n")
// for(let m in movie){
//     if(m ==0){   
//     console.log("\n") 
//     }
//     console.log(movie[m])
// }
// console.log("\nMovies I regret watching:\n")
// for(let m in leastFavMovies){
//     if(m ==0){   
//         console.log("\n") 
//         }
//     console.log(leastFavMovies[m])
// }

// let mergeMoviesList = movie.concat(leastFavMovies)
// mergeMoviesList.sort().reverse()
// for(let mm in mergeMoviesList){
//     console.log(mergeMoviesList[mm])
// }
//STEP 10
// let movie = ['The Hulk','God','Ant Man','Iron Man','Tiger3','Loki','Cobra']

// let leastFavMovies = ['kaun','ho','mai']

// console.log("Movies I like:\n")
// for(let m in movie){
//     if(m ==0){   
//     console.log("\n") 
//     }
//     console.log(movie[m])
// }
// console.log("\nMovies I regret watching:\n")
// for(let m in leastFavMovies){
//     if(m ==0){   
//         console.log("\n") 
//         }
//     console.log(leastFavMovies[m])
// }

// let mergeMoviesList = movie.concat(leastFavMovies)
// mergeMoviesList.sort().reverse()
 
// for(let mm in mergeMoviesList){
    
//     console.log(mergeMoviesList[mm])
// }

// let lastItem = mergeMoviesList.slice(-1);
// console.log(lastItem)
//STEP 11
// let movie = ['The Hulk','God','Ant Man','Iron Man','Tiger3','Loki','Cobra']

// let leastFavMovies = ['kaun','ho','mai']

// console.log("Movies I like:\n")
// for(let m in movie){
//     if(m ==0){   
//     console.log("\n") 
//     }
//     console.log(movie[m])
// }
// console.log("\nMovies I regret watching:\n")
// for(let m in leastFavMovies){
//     if(m ==0){   
//         console.log("\n") 
//         }
//     console.log(leastFavMovies[m])
// }

// let mergeMoviesList = movie.concat(leastFavMovies)
// mergeMoviesList.sort().reverse()
 
// for(let mm in mergeMoviesList){
    
//     console.log(mergeMoviesList[mm])
// }

// let firstItem = mergeMoviesList.shift();
// console.log(firstItem)


//STEP 12

// let favMovie = ['The Hulk', 'God', 'Ant Man', 'Iron Man', 'Tiger3', 'Loki', 'Cobra'];
// let leastFavMovies = ['kaun', 'ho', 'mai'];

// let mergeMoviesList = favMovie.concat(leastFavMovies);

// // Finding indices of movies you don't like
// let dislikedMoviesIndices = [];
// for (let i in mergeMoviesList) {
//     if (leastFavMovies.includes(mergeMoviesList[i])) {
//         dislikedMoviesIndices.push(parseInt(i));
//     }
// }

// // Movies you don't like
// console.log("Indices of movies you don't like:", dislikedMoviesIndices);

// // Movies you like
// let moviesYouLike = ['Inception', 'Spider-Man', 'Avatar'];

// // Replacing movies you don't like with movies you like using the indices
// for (let index of dislikedMoviesIndices) {
//     mergeMoviesList[index] = moviesYouLike.shift();
// }

// console.log("Updated movies list:", mergeMoviesList);




//STEP 13

// let movie = [["The Hulk", 1], ["God", 2], ["Ant Man", 3], ["Iron Man", 4], ["Tiger 3", 5]]
// let movieNames = movie.filter(item => typeof item[0] === 'string').map(item => item[0]);

// console.log(movieNames);

//STEP 14


let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"]


let showEmployee = function (empArray) {
  console.log("Employees:");
  for (let e in empArray) {
    console.log(empArray[e]);
  }
}

showEmployee(employees);


//STEP 15

function filterArray(arr) {
    arr = arr.filter(valueCheck)
    return arr;
  }
  
  function valueCheck(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
      return value;
    }
  }
  console.log(filterArray([58, '', 'abcd', true, null, false, 0]))

//STEP 16
// let numericArray = [20,10,5,2,70,25,50,49,36,37]

// function getRandomItemFromArray(numericArray) {
//     return numericArray[ Math.floor(Math.random() * numericArray.length)];
//   }
  
//   console.log(getRandomItemFromArray(numericArray))
   

//STEP 17
let numericArray = [20,10,5,2,70,25,50,49,36,37]

function getMaxNumber(arr) { 
    return Math.max(...arr); 
} 
console.log(getMaxNumber(numericArray))