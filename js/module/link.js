const linkData = {
  'stage-0' : {
    link : 'http://127.0.0.1:5500/stage1.html'
  },
  'stage-1' : {
    link : '/stage2.html'
  },
  'stage-2' : {
    link : '/stage3.html'
  },
  'stage-3' : {
    link : '/stage4.html'
  },
  'stage-4' : {
    link : '/stage5.html'
  },
  'stage-5' : {
    link : '/stage6.html'
  },
  'stage-6' : {
    link : ''
  }
}

export const moveLink = (curStage) => {
  if (linkData.hasOwnProperty(curStage)) {
    const url = linkData[curStage].link;
    window.location.href = url;
    
    console.log(url);
  } else {
    console.error('Invalid stage:', stage);
  }
}