//Api:http://www.omdbapi.com/?i=tt3896198&apikey=37d20177
//code didn't work
const API_KEY=`37d20177`;
const MOVIE_NAME=`spiderman`;
const URL =`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=${MOVIE_NAME}`;

const getMovie = async ()=>{  
        const res= await fetch(URL);
        if(!res.status(200)){
            return  `Error: ${res.status()}`
        }
        const data =  await  res.json();
       return data;
};

// async function getMovie(){
//     let response = await fetch(URL);
//     return response.json();
// }
getMovie();