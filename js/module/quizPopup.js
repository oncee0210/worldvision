const quizPopData = {
  'stage-2' : {
    'step-2' : {
      title : `문제. 철분을 얻기 위해 어디로 이동해야 할까요?`,
      expl : `빈혈 증세가 있는 임산부를 위해 철분제를 구해야한다.`,
      type : 'multiple',
      answer : [
        '트레이닝 센터',
        '보건소',
        '청소년 친화 보건시설</br>(AFHF)'
      ],
      correct : 2,
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `밖으로 나가 '보건소'를 찾아가자!`,
        btn : `<button type="button" class="btn1 quiz-pop-button step-btn">마을로 나가기</button>`
      }
    },
    'step-7' : {
      title : `문제. 철분의 원소기호는 무엇일까?`,
      expl : `보건소 의사에게 철분제를 얻었다. <br/>철분의 원소기로를 맞춰 빈혈 증세가 있는 임산부에게 전달하자.`,
      type : 'multiple',
      answer : [
        'Na',
        'Fe',
        'He'
      ],
      correct : 2,
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `Mission 해결 - 첫번째 코드 확보 [CITIZEN]<br/>다음 장소인 '출산을 앞둔 가정'으로 이동하자.`,
        btn : `<button type="button" class="btn1 quiz-pop-button link-btn">마을로 나가기</button>`
      }
    }
  },
  'stage-3' : {
    'step-7' : {
      title : `암호를 찾아라!`,
      expl : ` '보트바우처'라는 단어의 초성을 활동지 암호표에서 숫자로 바꿔봐.<br/>그리고 그 숫자들의 합을 모두 더하면 정답이야.<br/>보트바우처의 인증번호를 입력하세요.`,
      type : 'word',
      answer : '<input name="" id="" class="quiz-input" placeholder="정답을 입력하세요.">',
      correct : 42,
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `정답 : 42<br/>해설 : 6(ㅂ)+12(ㅌ)+6(ㅂ)+8(ㅇ)+10(ㅊ) = 42`,
        btn : `<button type="button" class="btn1 quiz-pop-button info-btn">보트바우처 받기</button>`
      }
    },
  }
}

const quizPop = document.getElementById("quiz-pop");
const $quizPop = $("#quiz-pop");

const viewQuiz = (curStage, curStep) => {
  quizPop.innerHTML = '';

  const quizPopContents = document.createElement('div');
  quizPopContents.classList.add('quiz-pop-contents');

  let title = quizPopData[curStage][curStep].title;
  let expl = quizPopData[curStage][curStep].expl;
  let type = quizPopData[curStage][curStep].type;
  let answer = quizPopData[curStage][curStep].answer;
  let btn = quizPopData[curStage][curStep].btn;

  let quizPopContentsHtml = `
    <button type="button" class="quiz-pop-cancel"><img src="/img/icon-cancel.png" alt="팝업 닫기"></button>
    <div class="quiz-pop-inner">
      <div class="quiz-pop-title">${title}</div>
      <div class="hansans quiz-pop-expl">${expl}</div>
      <div class="hansans quiz-pop-answer" data-type="${type}">
  `;

  if(type == 'multiple') {
    answer.map((choice, index) => {
      quizPopContentsHtml += `
      <div class="hansans quiz-pop-choice">${choice}</div>
      `;
    })
  } else if (type == 'word') {
    quizPopContentsHtml += `${answer}`;
  }

  quizPopContentsHtml += `
      </div>
      ${btn}
    </div>
  `;

  quizPopContents.innerHTML = quizPopContentsHtml;

  quizPop.appendChild(quizPopContents);

  const container = document.querySelector('#container');
  container.appendChild(quizPop);

  $quizPop.fadeIn(200);
}

const checkQuiz = (curStage, curStep, answer) => {
  const quizPopContents = quizPop.querySelector('quiz-pop-contents');
  let type = quizPopData[curStage][curStep].type;
  let correct = quizPopData[curStage][curStep].correct;

  if(correct == answer) {
    checkQuiz_y(curStage, curStep)
  } else {
    checkQuiz_n()
  }
}

const checkQuiz_y = (curStage, curStep) => {
  let expl = quizPopData[curStage][curStep].check.expl;
  let btn = quizPopData[curStage][curStep].check.btn;
  
  closeQuiz();

  $("#quiz-y-pop .quiz-pop-expl").html('');
  $("#quiz-y-pop .quiz-pop-button").remove();

  $("#quiz-y-pop .quiz-pop-expl").html(expl);
  $("#quiz-y-pop .quiz-pop-inner").append(btn);

  $("#quiz-y-pop").fadeIn(200);
}

const checkQuiz_n = () => {
  closeQuiz();

  $("#quiz-n-pop").fadeIn(200);
}

const closeQuiz = () => {
  $quizPop.fadeOut(200);
}

const closeQuiz_y = () => {
  $("#quiz-y-pop .quiz-pop-button").trigger('click');
}

const closeQuiz_n = () => {
  $("#quiz-n-pop").fadeOut(200);
}

export { viewQuiz, closeQuiz, checkQuiz, closeQuiz_y, closeQuiz_n }