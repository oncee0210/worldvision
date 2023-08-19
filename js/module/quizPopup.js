const quizPopData = {
  'stage-2' : {
    'step-2' : {
      title : `문제. 철분을 얻기 위해 어디로 이동해야 할까?`,
      expl : `빈혈 증세가 있는 임산부를 위해 철분제를 구해야한다.`,
      type : 'multiple',
      answer : [
        '트레이닝 센터',
        '보건소',
        '임산부 가정'
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
      expl : `보건소 의사에게 철분제를 얻었다. <br/>철분의 원소기호를 맞춰 빈혈 증세가 있는 임산부에게 전달하자.`,
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
  },
  'stage-5' : {
    'step-1' : {
      title : `문제. 이 청소년이 가야할 곳은?`,
      expl : `청소년 친화 보건시설의 약자`,
      type : 'multiple',
      answer : [
        'AFET',
        'AEHF',
        'AFHF'
      ],
      correct : 3,
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `소녀와 함께 ‘청소년 친화 보건시설’로 이동하자!<br/>마을에서 청소년 친화 보건시설[AFHF]을 찾아보세요.`,
        btn : `<button type="button" class="btn1 quiz-pop-button step-btn">마을로 돌아가기</button>`
      }
    },
  },
  'stage-6' : {
    'step-2' : {
      title : `문제 1. 임신 전반에 걸쳐 빈혈증세가 나타날 수 있다.`,
      expl : `CVA 활동장소에 들어가려면 월드비전 보건요원임을 인증해야한다.`,
      type : 'multiple',
      answer : [
        'O',
        'X'
      ],
      correct : 1,
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `임신 기간 중 언제든 빈혈증세가 나타날 수 있습니다.`,
        btn : `<button type="button" class="btn1 quiz-pop-button step-btn">다음 문제풀기</button>`
      }
    },
    'step-3' : {
      title : `문제 2. 영유아의 영양실조를 체크하는 방법은<br/>MUAC 테이프로 다리 둘레를 재는 것이다.`,
      expl : `CVA 활동장소에 들어가려면 월드비전 보건요원임을 인증해야한다.`,
      type : 'multiple',
      answer : [
        'O',
        'X'
      ],
      correct : 2,
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `영유아의 영양실조를 체크하는 방법은 MUAC 테이프로 팔뚝의 둘레를 재는 것이다.`,
        btn : `<button type="button" class="btn1 quiz-pop-button step-btn">다음 문제풀기</button>`
      }
    },
    'step-4' : {
      title : `문제 3. 청소년 친화 보건 시설의 약자는 AEHE이다.`,
      expl : `CVA 활동장소에 들어가려면 월드비전 보건요원임을 인증해야한다.`,
      type : 'multiple',
      answer : [
        'O',
        'X'
      ],
      correct : 2,
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `청소년 친화 보건 시설의 약자는 AFHF이다.`,
        btn : `<button type="button" class="btn1 quiz-pop-button step-btn">다음 문제풀기</button>`
      }
    },
    'step-5' : {
      title : `최종 문제. 정책을 제안하는 교육활동 CVA는 무엇의 약자일까?`,
      expl : `지금까지 마을사람들을 도와주며 얻은 코드를 조합하면 쉽게 알 수 있다.`,
      type : 'multiple',
      answer : [
        'CITIZEN<br/>VOICE<br/>ACTION',
        'CHANGE<br/>VALUE<br/>AGAINST',
        'CITIZEN<br/>VALUE<br/>ACTIVE'
      ],
      correct : 1,
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `정책을 제안하는 교육활동 CVA는 CITIZEN VOICE ACTION의 약자이다.<br/>모든 퀴즈를 맞췄습니다. CVA 활동장소로 입장합니다.`,
        btn : `<button type="button" class="btn1 quiz-pop-button step-btn">입장하기</button>`
      }
    }
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