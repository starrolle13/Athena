async function fetchMoviesJSON() {
    const response = await fetch('https://pgf7hywzb5.execute-api.us-east-1.amazonaws.com/users/1');
    console.log(response)
    const movies = await response.json();
    console.log(movies)
    return movies;
  }

  export default fetchMoviesJSON