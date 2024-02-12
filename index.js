// pick a pokemon
// async function fetchpokemon(){

//     try{
//         const pokemonname = document.getElementById('pokemonname').value.toLowerCase();
//         const url = `https://pokeapi.co/api/v2/pokemon/${pokemonname}`;
//         const response = await fetch(url);

//         const data = await response.json();
//         const pokemonPicture = data.sprites.front_default;
//         const imgElement = document.getElementById('gambarpokemon');

//         imgElement.src = pokemonPicture;
//         imgElement.style.display = 'block';
//         imgElement.style.width = '150px';
//         imgElement.style.backgroundColor = 'orange';
//         imgElement.style.borderRadius = '90px';
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// random joke
const randomJoke = () => {
    const url = 'https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    const jokeElement = document.getElementById('joke');
    
    const response = fetch(url)
        .then(data => data.json())
        .then(jokeData =>  {
            jokeElement.textContent = jokeData.setup;

        });
        
}
btn.addEventListener('click', randomJoke);



// fake store products
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {

        let result = '';

        data.map((item) => {
            
        result = `<tr>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td><img src="${item.image}"/></td>
                </tr>
                 `;
        });

        document.getElementById('table_body').innerHTML = result;
    })

// quote

// const randomquote = () => {
//     const random = document.getElementById('random');

//     fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => response.json())
//     .then(data => {
//         random.textContent = data.value;
//     })
    
// }
// btns.addEventListener('click', randomquote)
// randomquote();

async function randomquote(){
    const random = document.getElementById('random');
    const url = 'https://api.chucknorris.io/jokes/random';

    const fetchdata = await fetch(url)
        .then(response => response.json())
        .then(data => {
            random.textContent = data.value;
        })
}
btns.addEventListener('click', randomquote);


// async function fetchpokemon(){

//     try{
//         const pokemonname = document.getElementById('pokemonname').value.toLowerCase();
//         const url = `https://pokeapi.co/api/v2/pokemon/${pokemonname}`;
//         const response = await fetch(url);

//         const data = await response.json();
//         const pokemonPicture = data.sprites.front_default;
//         const imgElement = document.getElementById('gambarpokemon');

//         imgElement.src = pokemonPicture;
//         imgElement.style.display = 'block';
//         imgElement.style.width = '150px';
//         imgElement.style.backgroundColor = 'orange';
//         imgElement.style.borderRadius = '90px';
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// const pokemon = async () => {
//     const pokemonname = document.getElementById('pokemonname').value.toLowerCase();
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonname}`;
//     const imgElement = document.getElementById('gambarpokemon')

//     const grab = await fetch(url);
//     const response = await grab.json();
//     const gambar = response.sprites.front_default;

//     imgElement.src = gambar;
//     imgElement.style.display = 'block';

// }
// buttons.addEventListener('click', pokemon);

const pokemon = () => {
    const pokemonname = document.getElementById('pokemonname').value.toLowerCase();
    const gambarpokemon = document.getElementById('gambarpokemon');
    const url =  `https://pokeapi.co/api/v2/pokemon/${pokemonname}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            gambarpokemon.src = data.sprites.front_default;
            gambarpokemon.style.display = 'block';
        })
}
buttons.addEventListener('click', pokemon);

// https://api.quotable.io/random

const yesorno = async () => {
    const url = 'https://yesno.wtf/api';
    const yes = document.getElementById('yes');
    const answers = document.getElementById('answer');

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

    answers.textContent = `( ${data.answer} )`;

    answers.style.display = 'block';
    answers.style.fontSize = '40px';
    yes.src = data.image;
    yes.style.display = 'block';
    yes.style.width = '300px';
};

yesbtn.addEventListener('click', yesorno);
