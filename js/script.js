const grid = document.querySelector(".grid");

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },

  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },

  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },

  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },

  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },

  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

for (let i = 0; i < team.length; i++) {
  const person = team[i];
  console.log(
    `Nome: ${person.name} Ruolo: ${person.role} Immagine: ${person.image}`
  );

  const card = `
  <div class="card">
  <figure class="card-image">
    <img class="image" src="./img/${person.image}" alt="image" />
  </figure>
        <div class="card-body">
            <p class="card-name">${person.name}</p>
            <p class="card-role">${person.role}</p>
        </div>
    </div>`;

  grid.innerHTML += card;
}
