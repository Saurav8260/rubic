function getCubeSvg(cubeString) {
  const colors = { r: 'red', g: 'green', b: 'blue', y: 'yellow', o: 'orange', w: 'white' };
  let html = '<div style="display: grid; grid-template-columns: repeat(3, 50px); gap: 2px; justify-content: center;">';

  for (let i = 0; i < cubeString.length; i++) {
    html += `<div style="width: 50px; height: 50px; background: ${colors[cubeString[i]]}; border: 1px solid #000;"></div>`;
    if ((i + 1) % 9 === 0) html += '<br>';
  }

  html += '</div>';
  return html;
}