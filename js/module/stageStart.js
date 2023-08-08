export const stageStart = (curStage) => {
  if(curStage !== 'stage-0') {
    const popDim = document.createElement('div');
    popDim.setAttribute('id', `${curStage}_start`);
    popDim.classList.add('pop-dim');

    const popContents = document.createElement('div');
    popContents.classList.add('pop-contents');

    popDim.appendChild(popContents);

    const container = document.querySelector('#container');
    container.appendChild(popDim);
  }
}