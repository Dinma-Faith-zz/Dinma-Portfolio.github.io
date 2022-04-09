const gridContainer = document.querySelector('.grid-container');

const projects = [
  {
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    imageLinks: './img/snapshoot-portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back End Dev',
    year: '2022',
    company: 'Canopy',
    live: 'https://dinma-faith.github.io/Dinma-Portfolio.github.io/',
    source: 'https://github.com/Dinma-Faith/Dinma-Portfolio',
  },
  {
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLinks: './img/snapshoot-b.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back End Dev',
    year: '2022',
    company: 'Canopy',
    live: 'https://dinma-faith.github.io/Dinma-Portfolio.github.io/',
    source: 'https://github.com/Dinma-Faith/Dinma-Portfolio',
  },
  {
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLinks: './img/snapshoot-c.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back End Dev',
    year: '2022',
    company: 'Canopy',
    live: 'https://dinma-faith.github.io/Dinma-Portfolio.github.io/',
    source: 'https://github.com/Dinma-Faith/Dinma-Portfolio',
  },
  {
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLinks: './img/snapshoot-d.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back End Dev',
    year: '2022',
    company: 'Canopy',
    live: 'https://dinma-faith.github.io/Dinma-Portfolio.github.io/',
    source: 'https://github.com/Dinma-Faith/Dinma-Portfolio',
  },
];

function show() {
  gridContainer.innerHTML = '';
  for (let i = 0; i < projects.length; i += 1) {
    let works = '';
    for (let j = 0; j < projects[i].technologies.length; j += 1) {
      works += `<li>${projects[i].technologies[j]}</li>`;
    }
    gridContainer.innerHTML += `
        <div class="cards">
          <img
            class=work-images
            src=${projects[i].imageLinks}
            alt="tonic project"
          />

          <div class="content-wrap">
            <div>
              <h2 class="h2">${projects[i].title}</h2>

              <ul class="top">
                <li class="canopy">${projects[i].company}</li>
                <li><img src="./img/counter.png" alt="ash-counter" /></li>
                <li class="dev">${projects[i].role}</li>
                <li><img src="./img/counter.png" alt="ash-counter" /></li>
                <li class="dev">${projects[i].year}</li>
              </ul>
            </div>

            <p class="para">
            ${projects[i].description}
            </p>

            <div class="projects">
              <ul>
                ${works}
              </ul>
            </div>

            <div>
              <button type="submit" class="btn btn-project" id="openBtnModal">See Project</button>
            </div>
          </div>
        </div>`;
  }

  const viewModal = document.querySelector('.vanish');
  const popUp = document.querySelectorAll('.btn-project');
  const modalTonic = document.querySelector('.modal-h2');
  const stack = document.querySelector('#modalCanopy');
  const backEnd = document.querySelector('#modalDev');
  const year = document.querySelector('#modalDev2');

  function popUpModal(project) {
    modalTonic.innerHTML = project.title;
    stack.innerHTML = project.company;
    backEnd.innerHTML = project.role;
    year.innerHTML = project.year;
  }
  for (let i = 0; i < popUp.length; i += 1) {
    popUp[i].addEventListener('click', () => {
      popUpModal(projects[i]);
      wrapper.style.display = 'block'
    });
  }
}show();

const buttonCloseX = document.getElementById('hideModal');
const viewModal = document.querySelector('.vanish');
const wrapper = document.querySelector('.wrapper');

function hideModal() {
  wrapper.style.display = 'none'
}
buttonCloseX.addEventListener('click', hideModal);
