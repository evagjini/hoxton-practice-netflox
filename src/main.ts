import "./style.css";

type Movie = {
  id: number;
  title: string;
  url: string;
  content: string;
  comment: string;
};

type State = {
  movies: Movie[];
  selectedMovie: Movie | null;
};
let state: State = {
  movies: [
    {
      id: 1,
      title: "Along for the ride",
      url: "https://m.media-amazon.com/images/M/MV5BYTBmNzhjYmYtNGFjZC00MTAzLWIzODMtOTkzMjM0Y2NmNjYxXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati expedita modi facere voluptates aliquid itaque quo natus dolorem nihil. Delectus expedita est repudiandae omnis, dolore voluptate modi! Eveniet, ab adipisci.",
      comment: "",
    },
    {
      id: 2,
      title: "Lucifer",
      url: "https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati expedita modi facere voluptates aliquid itaque quo natus dolorem nihil. Delectus expedita est repudiandae omnis, dolore voluptate modi! Eveniet, ab adipisci.",
      comment: "",
    },
    {
      id: 3,
      title: "Jumanji",
      url: "https://i.ytimg.com/vi/MJuFdpVCcsY/movieposter_en.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati expedita modi facere voluptates aliquid itaque quo natus dolorem nihil. Delectus expedita est repudiandae omnis, dolore voluptate modi! Eveniet, ab adipisci.",
      comment: "",
    },
    {
      id: 4,
      title: "Dora",
      url: "https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati expedita modi facere voluptates aliquid itaque quo natus dolorem nihil. Delectus expedita est repudiandae omnis, dolore voluptate modi! Eveniet, ab adipisci.",
      comment: "",
    },
  ],
  selectedMovie: null,
};

function selectMovie (Movies:Movie){
  state.selectedMovie = Movies
}

function deselectMovie (Movies:Movie){
  state.selectedMovie = null
}


function getMovieFromServer(){

}

function renderSingleMovie() {

  let mainEl = document.querySelector('main')
  if (mainEl === null) return
  if (state.selectedMovie === null) return
  mainEl.textContent= ''


  let sectionSingleMovie = document.createElement("section");
  sectionSingleMovie.className = "single-movie-section";

  let buttonBack = document.createElement("button");
  buttonBack.className = "back-button";
  buttonBack.textContent= '⬅Back'
  buttonBack.addEventListener ('mouseenter', function (){

    deselectMovie()

    render()

  })

  let divSingle = document.createElement("div");
  divSingle.className= "single-movie-div"

  let h3El= document.createElement('h3')
  h3El.className= 'single-movie-title'
  h3El.textContent= state.selectedMovie.title

  let imgSingleEL = document.createElement('img')
  imgSingleEL.className= 'single-image'
  imgSingleEL.src= state.selectedMovie.url

  let pEl = document.createElement('p')
  pEl.className = 'single-paragraph'
  pEl.textContent = state.selectedMovie.content


  mainEl.append(sectionSingleMovie)
  sectionSingleMovie.append(buttonBack, divSingle, h3El, imgSingleEL, pEl)




}

function renderMovies() {
  let mainEl = document.querySelector<HTMLElement>("main");

  if (mainEl === null) return;
  mainEl.textContent = "";

  let h1Logo = document.createElement("h1");
  h1Logo.textContent = "NETFLOX";
  mainEl.append(h1Logo);

  let divEl = document.createElement("div");
  divEl.className = "product-container";
  mainEl.append(divEl);

  for (let movie of state.movies) {
    let divElement = document.createElement("div");

    let titleEl = document.createElement("h3");
    titleEl.textContent = movie.title;
    titleEl.addEventListener('click', function(){
    selectMovie(movie)
    render()
    })

    let imageEl = document.createElement("img");
    imageEl.src = movie.url;

    let contentEl = document.createElement("p");
    contentEl.textContent = movie.content;

    divEl.append(divElement);
    divElement.append(titleEl, imageEl, contentEl);
  }
}






function render(){
  if(state.selectedMovie) renderSingleMovie()
  else renderMovies()
}



function renderForm(){
  
}
 


renderForm()


renderMovies();



