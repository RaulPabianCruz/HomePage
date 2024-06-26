import githubIcon from './resources/github.svg';

function generateNameContainer() {
  let container = document.createElement('div');
  container.classList.add('project-name-container');

  let title = document.createElement('h3');
  title.classList.add('project-name');
  title.textContent = 'Project Name';

  let icon = document.createElement('img');
  icon.classList.add('icon');
  icon.src = githubIcon;

  container.appendChild(title);
  container.appendChild(icon);
  return container;
}

function generateProjectExample() {
  let container = document.createElement('div');
  container.classList.add('project');

  let placeHolder = document.createElement('h4');
  placeHolder.classList.add('screenshot-placeholder');
  placeHolder.textContent =
    'Placeholder Text: This Should be replaced by a screenshot of the project it represents.';

  let projectNameContainer = generateNameContainer();

  let description = document.createElement('p');
  description.classList.add('description');
  description.textContent =
    "This is placeholder text that should, in the future, be replaced with actual descriptions of the projects they link to. Not sure how easy it'll be to do so and if it will have to be heavily hard-coded.";

  container.appendChild(placeHolder);
  container.appendChild(projectNameContainer);
  container.appendChild(description);
  return container;
}

function generateProjects(numberOfExamples) {
  const projectsContainer = document.querySelector('.projects-container');

  for (let i = 0; i < numberOfExamples; i += 1) {
    projectsContainer.appendChild(generateProjectExample());
  }
}

export default generateProjects;
