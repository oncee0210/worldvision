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
      title : `문제. 철의 원소기호와 원자번호를 쓰세요.`,
      expl : `(대소문자 구분 필수. 예. 나트륨 = Na+11 = Na11)<br/>철분의 원소기호를 맞춰 빈혈 증세가 있는 임산부에게 전달하자.`,
      type : 'word',
      answer : '<input name="" id="" class="quiz-input" placeholder="정답을 입력하세요.">',
      correct : 'Fe26',
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `정답. Fe26<br/>해설. 철의 원소기호 Fe 원자번호는 26번이다.<br/>Mission 해결 - 첫번째 코드 확보 [CITIZEN]`,
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
  'stage-4' : {
    'step-4' : {
      title : `암호를 찾아라!`,
      expl : ` 'Stage4 암호표에서 MUAC을 암호화 한 값을 넣어보자.<br/>암호 입력은 대문자만 가능하다.`,
      type : 'word',
      answer : '<input name="" id="" class="quiz-input" placeholder="정답을 입력하세요.">',
      correct : 'C2D5A1A3',
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `정답 : C2D5A1A3<br/>해설 : C2(M)D5(U)A1(A)A3(C) = C2D5A1A3`,
        btn : `<button type="button" class="btn1 quiz-pop-button info-btn">둘레 측정하기</button>`
      }
    },
    'step-6' : {
      title : `암호를 찾아라!`,
      expl : ` '1. 바나나(BANANA) 영어 스펠링을 숫자로 바꾸고 합을 구하세요.<br/>(바나나 영문 숫자는 Stage 3 암호표 참고)<br/>2. 바나나에 들어 있는 성분인 OO의 원자번호 찾으세요.<br/>3. 1번의 값과 2번의 값을 빼세요.`,
      type : 'word',
      answer : '<input name="" id="" class="quiz-input" placeholder="정답을 입력하세요.">',
      correct : 14,
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `정답 : 14<br/>1. 바나나 영문 숫자의 합 : B(2)+A(1)+N(14)+A(1)+N(14)+A(1)=33<br/>2. 칼륨의 원소번호 : 19<br/>3. 33-19 = 14`,
        btn : `<button type="button" class="btn1 quiz-pop-button info-btn">이유식 먹이기</button>`
      }
    },
  },
  'stage-5' : {
    'step-1' : {
      title : `문제. 이 청소년이 가야할 곳은?`,
      expl : `청소년 친화 보건시설의 약자 (Stage 5 암호표를 참고하세요.)
      <div class="quiz-choice-etc5_1_wrap">
        <div class="hansans quiz-choice-etc5_1"></div>
        <div class="hansans quiz-choice-etc5_1"></div>
        <div class="hansans quiz-choice-etc5_1"></div>
        <div class="hansans quiz-choice-etc5_1"></div>
      </div>
      `,
      type : 'word',
      answer : `<input name="" id="" class="quiz-input" placeholder="정답을 입력하세요.">`,
      correct : 'AFHF',
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `청소년 친화 보건시설(AFHF : Adolescent Friendly Health Facility)로 이동하자!<br/>마을에서 청소년 친화 보건시설[AFHF]을 찾아보세요.`,
        btn : `<button type="button" class="btn1 quiz-pop-button step-btn">마을로 돌아가기</button>`
      }
    },
  },
  'stage-6' : {
    'step-2' : {
      title : `최종 문제. 주민이 주도하여 지역정부의 정책변화를 <br/>지원하는 활동 CVA는 무엇의 약자일까?`,
      expl : `지금까지 마을사람들을 도와주며 얻은 코드를 조합하면 쉽게 알 수 있다.`,
      type : 'word',
      answer : '<input name="" id="" class="quiz-input" placeholder="정답을 입력하세요.">',
      correct : 'CITIZEN VOICE ACTION',
      btn : `<button type="button" class="btn1 quiz-pop-button quiz-check-btn">정답 제출하기</button>`,
      check : {
        expl : `주민주도옹호그룹 CVA는 Citizen Voice and Action Group의 약자입니다.<br/>CVA 활동장소로 입장합니다.`,
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

const transferAnswer = (answer, correct) => {
  let userInput = answer;
  let correctAnswer = correct;
  let result = false;

  userInput = userInput.toLowerCase().replace(/\s+/g, "");
  correctAnswer = correctAnswer.toLowerCase().replace(/\s+/g, "");

  if (userInput === correctAnswer) {
    result = true;
  } else {
    result = false;
  }

  return result
}

const checkQuiz = (curStage, curStep, answer) => {
  const quizPopContents = quizPop.querySelector('quiz-pop-contents');
  let type = quizPopData[curStage][curStep].type;
  let correct = quizPopData[curStage][curStep].correct;

  if (curStage == 'stage-6' && curStep == 'step-2') {
    let res = transferAnswer(answer, correct);

    if(res) {
      checkQuiz_y(curStage, curStep)
    } else {
      checkQuiz_n()
    }
  } else {
    if(correct == answer) {
      checkQuiz_y(curStage, curStep)
    } else {
      checkQuiz_n()
    }
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