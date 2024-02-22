const BASE_URL = "http://localhost:3001/users/";

export const validateUser = async (login) => {
    try{
        const response = await fetch(`${BASE_URL}validate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
          });
        
          return await response.json();
    }catch(e){
        console.error(e);
    }
};

export const createUser = async (login) => {
  try{
      const response = await fetch(`${BASE_URL}create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(login),
        });
      
        return await response.json();
  }catch(e){
      console.error(e);
  }
};
