console.log('%c HI', 'color: firebrick')

let breeds = []


const fetchRequest = () => {
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(resp => resp.json())
.then(data => {
    // console.log(data)
    renderImages(data)
    
})
}

const renderImages = (data) => {
    const imageContainer = document.querySelector('#dog-image-container')
    // console.log(data)
    data.message.forEach(message => {
        // console.log(message)
        const img = document.createElement('img')
        img.src = message
        imageContainer.appendChild(img)

    })
} // end of renderImages



const fetchRequest2 = () => {
fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(data => {
    // console.log(data)
    breeds = Object.keys(data.message)
    console.log(breeds)
    dogBreedsRendered(breeds)
    // handleChange(breeds)

})
} 


const dogBreeds = document.querySelector('#dog-breeds')
const dogBreedsRendered = (breeds) => {
    // console.log(breeds)
    dogBreeds.innerHTML = ''
    breeds.forEach(message => {
        // console.log(message)
        const li = document.createElement('li')
        li.textContent = message
        dogBreeds.append(li)

        li.addEventListener('click', (e) =>{
            e.preventDefault();
            li.style.color = 'green';

        })

        


    })
    
} // end of dogBreeds

const dropDown = document.querySelector('#breed-dropdown')
// console.log(dropDown)

const handleChange = (e) => {
    console.log(e.target.value)
    result = breeds.filter(dogBreeds => dogBreeds[0] === e.target.value)
    dogBreedsRendered(result); 
    
}


dropDown.addEventListener('change', handleChange)


// function calls

fetchRequest(); 
fetchRequest2(); 