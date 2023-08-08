//notice
const dialogData = {
	'stage-1' : {
		'step-0' : {
			msg : [
        {
          type : 'notice',
          text1 : '트레이닝 센터를 찾아 당신이 보건요원이 되는 것을 도와줄 보건전문가를 찾아보세요.'
        }
      ]
		},
    'step-1' : {
			msg : [
        {
          type : 'notice',
          text1 : '트레이닝 센터에 들어왔습니다. 보건전문가를 찾아 말을 걸어 보세요.'
        }
      ]
		},
    'step-2' : {
			msg : [
				{
          type : 'talk',
					text1 : '[ 보건전문가 ]',
					text2 : '안녕하세요. 보건요원님.<br/>월드비전은 이곳에서 임산부와 출산한 여성들 그리고 아이들을 돕는 모자보건 사업을 펼치고 있어요.<br/>보건요원은 도움이 필요한 가정에 방문해 필요한 지원을 하게 돼요.',
					prev : '',
					next : '<button type="button" class="dialog-arrow-next dialog-next">다음으로&nbsp;&nbsp;&gt;</button>'
				},
        {
          type : 'talk',
					text1 : '[ 보건전문가 ]',
					text2 : '보건요원으로 활동할 때 몇가지 아이템들이 필요할 거에요.<br/>아이템은 이곳 트레이닝 센터에 구비되어 있으니 모두 챙겨서 나가도록 해요.',
					prev : `<button type="button" class="dialog-arrow-prev dialog-prev">&lt;&nbsp;&nbsp;이전으로</button>`,
					next : `<button type="button" class="dialog-arrow-next step-btn">다음으로&nbsp;&nbsp;&gt;</button>`
				}
			]
		},
    'step-3' : {
      msg : [
        {
          type : 'notice',
					text1 : '트레이닝 센터 안에서 필요한 아이템을 챙겨요! [스토리북, MUAC테이프, 요원용 조끼, 모자]'
				}
			]
    }
	},
  'stage-2' : {
    'step-1' : {
			msg : [
        {
          type : 'notice',
          text1 : '임산부 가정에 방문했습니다. 도움이 필요한 임산부에게 말을 걸어 보세요.'
        }
      ]
		},
    'step-2' : {
			msg : [
				{
          type : 'talk',
					text1 : '[ 보건요원 ]',
					text2 : '안녕하세요. 임신 6개월에 접어들으셨죠? 건강을 체크하러 왔어요.',
					prev : '',
					next : '<button type="button" class="dialog-arrow-next dialog-next">다음으로&nbsp;&nbsp;&gt;</button>'
				},
        {
          type : 'talk',
					text1 : '[ 임산부 ]',
					text2 : '도와주세요. 너무 어지러워요.',
					prev : `<button type="button" class="dialog-arrow-prev dialog-prev">&lt;&nbsp;&nbsp;이전으로</button>`,
					next : `<button type="button" class="dialog-arrow-next dialog-next">다음으로&nbsp;&nbsp;&gt;</button>`
				},
        {
          type : 'talk',
					text1 : '[ 보건요원 ]',
					text2 : '철분이 필요하겠어요. 제가 철분제를 가져다 드릴게요.',
					prev : `<button type="button" class="dialog-arrow-prev dialog-prev">&lt;&nbsp;&nbsp;이전으로</button>`,
					next : '<button type="button" class="dialog-arrow-next quiz-btn">다음으로&nbsp;&nbsp;&gt;</button>'
				}
			]
		},
    'step-4' : {
			msg : [
				{
          type : 'notice',
					text1 : '보건소에 들어왔습니다. 의사를 찾아 말을 걸어보세요.'
				}
			]
		},
    'step-5' : {
      msg : [
        {
          type : 'talk',
          text1 : '[ 보건요원 ]',
          text2 : '의사선생님. 임산부에게 필요한 철분제좀 주세요.',
          prev : ``,
          next : `<button type="button" class="dialog-arrow-next dialog-next">다음으로&nbsp;&nbsp;&gt;</button>`
        },
        {
          type : 'talk',
          text1 : '[ 의사 ]',
          text2 : '임신 중에는 빈혈 증세가 있을 수 있어요. <br/>이게 도움이 될 거에요.',
          prev : `<button type="button" class="dialog-arrow-prev dialog-prev">&lt;&nbsp;&nbsp;이전으로</button>`,
          next : '<button type="button" id="item-fe" class="dialog-arrow-next item-btn">다음으로&nbsp;&nbsp;&gt;</button>'
        }
      ]
    },
    'step-7' : {
			msg : [
				{
          type : 'notice',
					text1 : '임산부 가정에 방문했습니다. 임산부에게 철분제 아이템을 클릭해 전달하세요.'
				}
			]
		}
	},
  'stage-3' : {
		'step-2' : {
			msg : [
        {
          type : 'notice',
          text1 : '출산을 앞둔 가정에 방문했습니다. 도움이 필요한 산모를 찾아 말을 걸어 보세요.'
        }
      ]
		},
    'step-3' : {
			msg : [
        {
          type : 'talk',
          text1 : '[ 보건요원 ]',
          text2 : '산모님 괜찮으세요?',
          prev : ``,
          next : `<button type="button" class="dialog-arrow-next dialog-next">다음으로&nbsp;&nbsp;&gt;</button>`
        },
        {
          type : 'talk',
          text1 : '[ 산모 ]',
          text2 : '배가 너무 아파요...',
          prev : `<button type="button" class="dialog-arrow-prev dialog-prev">&lt;&nbsp;&nbsp;이전으로</button>`,
          next : '<button type="button" class="dialog-arrow-next dialog-next">다음으로&nbsp;&nbsp;&gt;</button>'
        },
        {
          type : 'talk',
          text1 : '[ 보건요원 ]',
          text2 : '진통이 시작됐네요. 아이가 곧 나올 것 같아요.<br/>출산을 하려면 보트를 타고 섬 밖으로 나가야겠어요.',
          prev : `<button type="button" class="dialog-arrow-prev dialog-prev">&lt;&nbsp;&nbsp;이전으로</button>`,
          next : `<button type="button" class="dialog-arrow-next info-btn">다음으로&nbsp;&nbsp;&gt;</button>`
        },
      ]
		},
    'step-7' : {
			msg : [
        {
          type : 'talk',
          text1 : '[ 보건소 직원 ]',
          text2 : '안녕. 나는 보건소 직원이야. <br/>산모를 씨앰뷸런스로 안전하게 이동하고 싶다고. 알겠어. <br/>근데 보트바우처는 갖고 있지? 보트바우처의 인증번호를 알려줘.',
          prev : ``,
          next : `<button type="button" class="dialog-arrow-next dialog-next">다음으로&nbsp;&nbsp;&gt;</button>`
        },
        {
          type : 'talk',
          text1 : '[ 보건소 직원 ]',
          text2 : `그게 뭔지 잘 모르겠다고? <br/>'보트바우처'라는 단어의 초성을 활동지 암호표에서 숫자로 바꿔봐. <br/>그리고 그 숫자들의 합을 모두 더하면 정답이야.`,
          prev : `<button type="button" class="dialog-arrow-prev dialog-prev">&lt;&nbsp;&nbsp;이전으로</button>`,
          next : '<button type="button" class="dialog-arrow-next quiz-btn">다음으로&nbsp;&nbsp;&gt;</button>'
        },
        {
          type : 'talk',
          text1 : '[ 보건요원 ]',
          text2 : '진통이 시작됐네요. 아이가 곧 나올 것 같아요.<br/>출산을 하려면 보트를 타고 섬 밖으로 나가야겠어요.',
          prev : `<button type="button" class="dialog-arrow-prev dialog-prev">&lt;&nbsp;&nbsp;이전으로</button>`,
          next : `<button type="button" class="dialog-arrow-next info-btn">다음으로&nbsp;&nbsp;&gt;</button>`
        },
      ]
		},
    'step-10' : {
			msg : [
        {
          type : 'notice',
          text1 : '출산을 앞둔 가정에 방문했습니다. 도움이 필요한 산모를 찾아 말을 걸어 보세요.'
        }
      ]
		},
    'step-11' : {
			msg : [
        {
          type : 'talk',
          text1 : '[ 산모 ]',
          text2 : '아윽.... 너무 아파!....',
          prev : ``,
          next : `<button type="button" class="dialog-arrow-next dialog-next">다음으로&nbsp;&nbsp;&gt;</button>`
        },
        {
          type : 'talk',
          text1 : '[ 보건요원 ]',
          text2 : '괜찮으세요? 얼른 저와 함께 선착장으로 가요.',
          prev : `<button type="button" class="dialog-arrow-prev dialog-prev">&lt;&nbsp;&nbsp;이전으로</button>`,
          next : '<button type="button" class="dialog-arrow-next info-btn">다음으로&nbsp;&nbsp;&gt;</button>'
        },
      ]
		},
    'step-14' : {
			msg : [
        {
          type : 'talk',
          text1 : '[ 씨앰뷸런스 보건요원 ]',
          text2 : '안녕하세요. 보건요원님.<br/>이 보트는 씨엠뷸런스에요.<br/>여기서부터는 제가 산모와 함께 병원까지 안전하게 동행할게요.',
          prev : ``,
          next : `<button type="button" class="dialog-arrow-next step-btn">다음으로&nbsp;&nbsp;&gt;</button>`
        },
      ]
		},
    'step-15' : {
			msg : [
        {
          type : 'notice',
          text1 : '씨앰뷸런스 보건요원에게 보트바우처 아이템을 클릭해 전달하세요.'
        }
      ]
		},
	},
  'stage-4' : {
		'step-2' : {
			msg : [
        {
          type : 'notice',
          text1 : '24개월 이전 영유아 가정에 방문했습니다. 힘이 없어 보이는 아이를 품에 안고 있는 엄마에게 말을 걸어 보세요.'
        }
      ]
		},
    'step-3' : {
			msg : [
        {
          type : 'talk',
          text1 : '[ 보건요원 ]',
          text2 : '안녕하세요. 어머님. 아이가 많이 힘이 없어보여요.<br/>영양실조가 아닌지 의심돼요.<br/>MUAC테이프로 간단하게 영양실조 여부를 확인할 수 있어요.',
          prev : ``,
          next : `<button type="button" class="dialog-arrow-next step-btn">다음으로&nbsp;&nbsp;&gt;</button>`
        },
      ]
		},
    'step-4' : {
			msg : [
        {
          type : 'notice',
          text1 : 'MUAC테이프 아이템을 클릭해 아이의 영양실조 여부를 확인해 보세요.'
        }
      ]
		},
    'step-5' : {
			msg : [
        {
          type : 'notice',
          text1 : '영양실조를 개선할 수 있는 이유식 재료를 챙겨요. [바나나, 아보카도, 쌀]'
        }
      ]
		},
    'step-6' : {
			msg : [
        {
          type : 'notice',
          text1 : '이유식 재료 아이템을 클릭해서 아이에게 먹이자.'
        }
      ]
		},
  }
}

const dialogPrev = () => {
  $(".dialog").on("click", ".dialog-prev", function(){
    let curDialogBox = $(this).closest(".dialog-li");
    let prevDialogBox = curDialogBox.prev();

    curDialogBox.hide();
    prevDialogBox.fadeIn(200);
  });
}

const dialogNext = () => {
  $(".dialog").on("click", ".dialog-next", function(){
    let curDialogBox = $(this).closest(".dialog-li");
    let nextDialogBox = curDialogBox.next();
    
    curDialogBox.hide();
    nextDialogBox.fadeIn(200);
  });
}

export const dialog = (curStage, curStep, msgIndex) => {
  const otherDialogBox = document.querySelector('.dialog');

  otherDialogBox?.remove();

  if (dialogData.hasOwnProperty(curStage) && dialogData[curStage].hasOwnProperty(curStep)) {
    const msgArray = dialogData[curStage][curStep].msg;

    //Rendering
    const dialogBox = document.createElement('div');
    dialogBox.classList.add('dialog');

    msgArray.map((msg, index) => {
      if(msg.type == 'notice') {
        dialogBox.innerHTML += `
        <div class="dialog-li ${msg.type}">
          <p class="dialog_text-bold">${msg.text1}</p>
        <div>
        `;
      } else {
        dialogBox.innerHTML += `
        <div class="dialog-li ${msg.type}">
          <p class="dialog_text-bold">${msg.text1}</p>
          <p class="dialog_text-small">${msg.text2}</p>
          ${msg.prev?msg.prev:''}
          ${msg.next?msg.next:''}
        <div>
        `;
      }
    })

    const container = document.querySelector('#container');
    container.querySelector("#"+curStep).appendChild(dialogBox);

    dialogPrev();
    dialogNext();
  } else {
    // console.error('Invalid curStage or curStep:', curStage, curStep);
  }
}