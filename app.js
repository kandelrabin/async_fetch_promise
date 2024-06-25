// // Old way of doing fetch: CALLBACK HELL
// const fetchDogImage = () => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then((response) => response.json())  
//         .then(data => document.querySelector("#dog-image").src = data.message)
// }

// // Fetching single image
// const fetchDogImage = async () => {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const jsonData = await response.json();
//     document.querySelector("#dog-image").src = jsonData.message;
// }

// Fetching miltiple images

const fetchDogImage = async () => {
    const breedResponse = await fetch("https://dog.ceo/api/breed/dachshund/images");
    const breedJson = await breedResponse.json();

    const imagesContainer = document.createElement("div");
    breedJson.message.forEach((url) => {
        const dogImage = document.createElement("img");
        dogImage.src = url;
        imagesContainer.appendChild(dogImage);
    });
    document.querySelector("body").appendChild("imagesContainer");
}




document.querySelector("#dog-button").addEventListener("click", fetchDogImage);