// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
let container = document.querySelector('#container')
for(let i = 1; i < 152; i++) {
const pokemon = document.createElement('div');
const image = document.createElement('img');
const label = document.createElement('span');
label.innerText = `#${i}`;
image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
pokemon.appendChild(image);
pokemon.appendChild(label)
container.append(pokemon)
}