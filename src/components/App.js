// create your App component here
import React, { useState, useEffect } from 'react';

function App() {

    const [dogBreeds, setDogBreeds] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setDogBreeds(data.message)
                setIsLoading(true)
            })
    }, []);




    return (

        <div>
            {!isLoading ? <p>Loading...</p> : <img src={dogBreeds} alt="A Random Dog" />}
        </div>
    )
}

export default App;