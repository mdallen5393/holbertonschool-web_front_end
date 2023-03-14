function changeMode (size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main () {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let para = document.createElement('p');
  para.textContent = 'Welcome Holberton!';
  document.body.append(para);

  let spookyBtn = document.createElement('button');
  spookyBtn.textContent = 'Spooky';
  document.body.append(spookyBtn);
  spookyBtn.addEventListener('click', spooky);

  let darkBtn = document.createElement('button');
  darkBtn.textContent = 'Dark mode';
  document.body.append(darkBtn);
  darkBtn.addEventListener('click', darkMode);

  let screamBtn = document.createElement('button');
  screamBtn.textContent = 'Scream mode';
  document.body.append(screamBtn);
  screamBtn.addEventListener('click', screamMode);
}

main();