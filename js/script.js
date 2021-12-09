const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// indico dove andranno inseriti gli elementi
let container = document.querySelector('.team-container');

// indico al ciclo for che dovrà partire dalla seconda cards perchè la prima è già inserita nell'HTML
for (let i = 1; i < team.length; i++) {

  let teams = team[i]

  let cardDiv = `<div class="team-card">
              <div class="card-image">
                <img
                src="img/${teams.image}"
                alt="${teams.name}"
                />
              </div>
              <div class="card-text">
                <h3>${teams.name}</h3>
                <p>${teams.role}</p>
              </div>
            </div>`;

  container.innerHTML += cardDiv;
}

let button = document.getElementById('addMemberButton');
let nameInputUser = document.getElementById('name');
let roleInputUser = document.getElementById('role');
let imageInputUser = document.getElementById('image');

button.addEventListener('click', function (event){
  event.preventDefault();
  
  let nameUser = nameInputUser.value;  
  let roleUser = roleInputUser.value;
  let imageUser = imageInputUser.value;  

  if (nameUser.length > 0 && roleUser.length > 0){
  let cardInputDiv = `<div class="team-card">
              <div class="card-image">
                <img
                src="img/${imageUser}"
                alt="${nameUser}"
                />
              </div>
              <div class="card-text">
                <h3>${nameUser}</h3>
                <p>${roleUser}</p>
              </div>
            </div>`;

  container.innerHTML += cardInputDiv;
  } else {
    console.log('non hai inserito dei dati');
  }
});
