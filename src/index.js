function fetchImages(){
    return fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(json => renderImages(json));
}

function renderImages(images){
    const pictureDiv = document.querySelector('#dog-image-container');
    const img = []; 

    for(let i = 0; i < images.message.length; i++) {
        img[i] = document.createElement('img');
        img[i].src = images.message[i];
        img[i].style.width = "200px";
        img[i].style.height = "200px";
    }

    for(let i = 0; i < img.length; i++)
        pictureDiv.appendChild(img[i]);
}

// function fetchDogBreeds(){
//     return fetch('https://dog.ceo/api/breeds/list/all')
//         .then(resp => resp.json())
//         .then(json => {
//             breeds = Object.keys(json.message);
//             renderDogBreeds(breeds);
//             updateDogBreeds(breeds);
//         });
// }

// function renderDogBreeds(breeds){
//     const dogBreedsUL = document.querySelector("ul#dog-breeds");

//     for(let i = 0; i < breeds.length; i++) {
//            const newDog = document.createElement('li');
//            newDog.style.listStyleType = "none";
//            newDog.innerHTML = breeds[i];
//            newDog.addEventListener("click", function(){
//                newDog.style.color = "red";
//                newDog.style.fontStyle = "italic";
//            })
//            dogBreedsUL.appendChild(newDog);
//     }
// }

// function updateDogBreeds(breeds){
//     const dogBreedsUL = document.querySelector("ul#dog-breeds");
//     const dogList = document.querySelector("select#breed-dropdown");

//     dogList.addEventListener("change", function(event){
//         for(let i = 0; i < breeds.length; i++) {
//             let newList = breeds.filter(breed => breed.startsWith(event.target.value));
            
//             dogBreedsUL.innerText = '';
//             newList.forEach(breed => {
//                 let newLi = document.createElement('li');
//                 newLi.innerText = breed;
//                 newLi.style.listStyleType = "none";
//                 newLi.addEventListener("click", function(){
//                     newLi.style.color = "red";
//                     newLi.style.fontStyle = "italic";
//                 })
//                 dogBreedsUL.appendChild(newLi);
//             })
//      }
//     })
// }

document.addEventListener("DOMContentLoaded", function(){
    fetchImages();
    fetchDogBreeds();
})