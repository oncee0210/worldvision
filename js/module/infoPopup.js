const infoPopData = {
  'stage-1' : {
    'step-3' : {
      title : `보건요원 아이템 찾기 완료!`,
      expl : `필요한 아이템을 다 챙겼군요. <br/>첫번째로 방문할 가정은 '임산부 가정'입니다. <br/>밖으로 나가 '임산부 가정'을 찾아가자!`,
      img : {
        size : [],
        imgFile : ``
      },
      btn : `<button type="button" class="btn1 info-pop-button link-btn">마을로 나가기</button>`
    }
  },
  'stage-2' : {
    'step-5' : {
      title : `철분제 얻기 완료!`,
      expl : `철분제를 얻었다. 임산부 가정으로 돌아가자.`,
      img : {
        size : [],
        imgFile : ``
      },
      btn : `<button type="button" class="btn1 info-pop-button step-btn">마을로 나가기</button>`
    }
  },
  'stage-3' : {
    'step-3' : {
      title : `보트 바우처 구하기!`,
      expl : `보건소로 이동하여 '보건소 직원'에게 보트 바우처를 문의하세요.`,
      img : {
        size : [],
        imgFile : ``
      },
      btn : `<button type="button" class="btn1 info-pop-button step-btn">마을로 나가기</button>`
    },
    'step-7' : {
      title : `보트바우처 획득!`,
      expl : `보트 바우처를 획득했습니다!<br/>‘출산을 앞둔 가정’으로 돌아가서 산모를 만나세요.`,
      img : {
        size : [556, 220],
        imgFile : `/img/pop-item-boat.png`
      },
      btn : `<button type="button" class="btn1 info-pop-button step-btn">마을로 나가기</button>`
    },
    'step-11' : {
      title : `선착장으로 이동`,
      expl : `산모와 함께 마을로 나가<br/>다음 장소인 ‘선착장’으로 이동하자.`,
      img : {
        size : [],
        imgFile : ``
      },
      btn : `<button type="button" class="btn1 info-pop-button step-btn">마을로 나가기</button>`
    },
    'step-15' : {
      title : `인계 완료!`,
      expl : `산모를 무사히 다른 보건요원에게 인계했다.<br/>Mission 해결 - 두번째 코드 확보 [VOICE]<br/>다음 장소인 '24개월 이전 영유아 가정'으로 이동하자.`,
      img : {
        size : [],
        imgFile : ``
      },
      btn : `<button type="button" class="btn1 info-pop-button link-btn">이동하기</button>`
    }
  },
  'stage-4' : {
    'step-4' : {
      title : `영양실조 진단 결과`,
      expl : `진단 결과 빨간색이 나왔다. 아이가 영양실조입니다.<br/>부엌에 가서 영양실조를 개선할 수 있는 재료를 획득해 이유식을 만들자!`,
      img : {
        size : [181, 241],
        imgFile : `/img/stage-4_step-4_info.jpg`
      },
      btn : `<button type="button" class="btn1 info-pop-button step-btn">이유식 만들기</button>`
    },
    'step-6' : {
      title : `미션 완료!`,
      expl : `다행히 아이가 잘 먹는다. 아이의 영양상태가 개선되었다!<br/>Mission 해결 - 세번째 코드 확보 [ACTION]<br/>마을로 나가 도움이 필요한 사람이 더 있는지 둘러보자!`,
      img : {
        size : [],
        imgFile : ``
      },
      btn : `<button type="button" class="btn1 info-pop-button link-btn">마을로 나가기</button>`
    }
  },
  'stage-5' : {
    'step-5' : {
      title : `보건요원 미션 클리어`,
      expl : `당신은 마을에서 도움이 필요한 사람들에게 모두 도움을 주었습니다.<br/>마지막으로 ‘CVA 활동장소’인 시청으로 가서<br/>우리 마을 문제에 대해 사람들과 이야기를 나눠보아요.`,
      img : {
        size : [],
        imgFile : ``
      },
      btn : `<button type="button" class="btn1 info-pop-button link-btn">마을로 나가기</button>`
    }
  },
  'stage-6' : {
    'step-1' : {
      title : `CVA 활동장소 입장하기`,
      expl : `CVA 활동장소에 들어가려면 월드비전 보건요원임을 인증해야해요.<br/>퀴즈를 맞추면 보건요원임을 인증할 수 있어요.`,
      img : {
        size : [],
        imgFile : ``
      },
      btn : `<button type="button" class="btn1 info-pop-button step-btn">퀴즈 시작하기</button>`
    },
    'step-3' : {
      title : `축하합니다!`,
      expl : `모든 보건요원 활동을 무사히 마쳤습니다.<br/>CVA 활동장소에서 오늘 활동에 대한 의견을 남겨보세요.`,
      img : {
        size : [],
        imgFile : ``
      },
      btn : `<button type="button" class="btn1 info-pop-button step-btn">Stage Clear</button>`
    }
  },
}

const infoPop = document.getElementById("info-pop");
const $infoPop = $("#info-pop");

const viewInfo = (curStage, curStep) => {
  $infoPop.html('');

  const infoPopContents = document.createElement('div');
  infoPopContents.classList.add('info-pop-contents');

  let title = infoPopData[curStage][curStep].title;
  let expl = infoPopData[curStage][curStep].expl;
  let imgW = "";
  let imgH = "";
  let imgFile = infoPopData[curStage][curStep].img.imgFile;
  let btn = infoPopData[curStage][curStep].btn;

  let infoPopContentsHtml = `
    <button type="button" class="info-pop-cancel"><img src="/img/icon-cancel.png" alt="팝업 닫기"></button>
    <div class="info-pop-inner">
  `;

  if(imgFile) {
    imgW = infoPopData[curStage][curStep].img.size[0];
    imgH = infoPopData[curStage][curStep].img.size[1];

    infoPopContentsHtml += `
      <div class="info-pop-img"><img src="${imgFile}" alt="${title}" style="width: ${imgW}px; height: ${imgH}px;"></div>
    `;
  }

  infoPopContentsHtml += `
      <div class="info-pop-title">${title}</div>
      <div class="hansans info-pop-expl">${expl}</div>
      ${btn}
    </div>
  `;

  infoPopContents.innerHTML = infoPopContentsHtml;

  infoPop.appendChild(infoPopContents);

  const container = document.querySelector('#container');
  container.appendChild(infoPop);

  $infoPop.fadeIn(200);
}

const closeInfo = () => {
  $infoPop.fadeOut(200);
  infoPop.innerHTML = '';
}

export { viewInfo, closeInfo }