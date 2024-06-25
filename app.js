const fetchDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    document.querySelector("#dog-image").src = jsonData.message;
}

// // CALLBACK HELL
// const fetchDogImage = () => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then((response) => response.json())  
//         .then(data => document.querySelector("#dog-image").src = data.message)
// }


document.querySelector("#dog-button").addEventListener("click", fetchDogImage);