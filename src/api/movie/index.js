const BASE_URL = "http://localhost:3001/movie/";

export const createMovie = async (movie) => {
    try{
        const response = await fetch(`${BASE_URL}create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
          });
        
          return await response.json();
    }catch(e){
        console.error(e);
    }
};

export const getAllMovies = async () => {
  try{
      const response = await fetch(`${BASE_URL}all`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        return await response.json();
  }catch(e){
      console.error(e);
  }
};