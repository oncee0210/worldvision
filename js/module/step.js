import { dialog } from './dialog.js'

//기본-첫단계 보임
const initStep = () => {
  const firstStep = $("#step-0");
  firstStep.show().siblings(".step").hide();
}

// 다음 단계 진행
const moveStep = (curStep) => {
  let stepBox = $("#"+curStep).closest(".step");
  stepBox.fadeOut(200);

  let nextStepBox = stepBox.next();
  if (nextStepBox && nextStepBox.hasClass('step')) {
    nextStepBox.fadeIn(500);

    return nextStepBox.index();
  }
}

const nextStep = (curStage, curStep) => {
  let stepNum = moveStep(curStep);

  dialog(curStage, `step-${stepNum}`, 0);

  $(".reset-pop").hide();

  return `step-${stepNum}`;
}

export { initStep, nextStep }