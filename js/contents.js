import { stageStart } from './module/stageStart.js';
import { moveLink } from './module/link.js';
import { initStep, nextStep } from './module/step.js';
import { dialog } from './module/dialog.js';
import { getItem, viewItem, closeItem, removeItem } from './module/item.js';
import { viewInfo, closeInfo } from './module/infoPopup.js';
import { viewQuiz, closeQuiz, checkQuiz, closeQuiz_y, closeQuiz_n } from './module/quizPopup.js';

window.onload = function() {
  const container = $("#container");

  //Current Stage & Step
  const stage = document.querySelector(".stage").getAttribute("id");
  let step = 'step-0';

  //Stage
  stageStart(stage);
  dialog(stage, step, 0);

  const linkBtn =  ".link-btn";
  container.on('click', linkBtn, function(){
    moveLink(stage);
  })

  //Step (reassign)
  const stepBtn = ".step-btn";
  container.on('click', stepBtn, function(){
    let stepEl = $(this).closest(".step");
    let curStep = String(stepEl.attr("id"));
    
    if(stepEl.length > 0) {
      step = nextStep(stage, curStep);
    } else {
      step = nextStep(stage, step);
    }

    console.log('stage =>', stage, '\nstep =>', step);

    if(stage == 'stage-3' && step == 'step-8') {
      getItem('boat');
    } else if(stage == 'stage-4' && step == 'step-2') {
      getItem('muac');
    } else if(stage == 'stage-4' && step == 'step-5') {
      removeItem('muac');
    } else if(stage == 'stage-6') {
      if(step == 'step-2' || step == 'step-3' || step == 'step-4' || step == 'step-5') {
        viewQuiz(stage, step);
      } else if (step == 'step-6') {
        viewInfo(stage, step);
      }
    }
  });

  initStep();

  const itemBtn = '.item-btn';
  let itemArray = "";
  container.on('click', itemBtn, function(){
    let itemId = $(this).attr("id").split('-')[1];
    itemArray = getItem(itemId, viewItem(itemId));
  })

  const itemCloseBtn = '.item-pop-cancel';
  container.on('click', itemCloseBtn, function() {
    closeItem();
    
    if(stage == "stage-1" && step == "step-3") {
      if(itemArray.length == 4) {
        viewInfo("stage-1", "step-3");
      }
    } else if(stage == "stage-2" && step == "step-5") {
      viewInfo("stage-2", "step-5");
    } else if(stage == "stage-4" && step == "step-5") {
      step = nextStep("stage-4", "step-5");
    }
  });

  const ivenItemBtn = '.item-info-btn';
  container.on('click', ivenItemBtn, function(){
    let itemId = $(this).data('item-id');

    viewItem(itemId)

    if(stage == "stage-2" && step == "step-7") {
      if(itemId == 'fe') {
        $("#item-pop .item-pop-inner").append(`<button type="button" class="btn1 item-pop-button quiz-btn">아이템 사용하기</button>`);
      }
    } else if(stage == "stage-3" && step == "step-15") {
      if(itemId == 'boat') {
        $("#item-pop .item-pop-inner").append(`<button type="button" class="btn1 item-pop-button info-btn">아이템 사용하기</button>`);
      }
    } else if(stage == "stage-4" && step == "step-4") {
      if(itemId == 'muac') {
        $("#item-pop .item-pop-inner").append(`<button type="button" class="btn1 item-pop-button quiz-btn">진단하기</button>`);
      }
    } else if(stage == "stage-4" && step == "step-6") {
      if(itemId == 'babyfood') {
        $("#item-pop .item-pop-inner").append(`<button type="button" class="btn1 item-pop-button quiz-btn">아이템 사용하기</button>`);
      }
    }
  });

  const infoViewBtn = '.info-btn';
  container.on('click', infoViewBtn, function() {
    $(".reset-pop").hide();
    
    if(stage == "stage-3" && step == "step-3") {
      viewInfo("stage-3", "step-3");
    } else {
      viewInfo(stage, step);
    }
  });

  const infoCloseBtn = '.info-pop-cancel';
  container.on('click', infoCloseBtn, function(){
    if(stage == "stage-1" && step == "step-3"){
      $(".info-pop-button").trigger('click');
    } else if(stage == "stage-2" && step == "step-5"){
      $(".info-pop-button").trigger('click');
    } else if(stage == "stage-3" && step == "step-3") {
      $(".info-pop-button").trigger('click');
    } else if(stage == "stage-3" && step == "step-7") {
      $(".info-pop-button").trigger('click');
    } else if(stage == "stage-3" && step == "step-15") {
      $(".info-pop-button").trigger('click');
    } else if(stage == "stage-4" && step == "step-4") {
      $(".info-pop-button").trigger('click');
    } else if(stage == "stage-4" && step == "step-6") {
      $(".info-pop-button").trigger('click');
    } else if(stage == "stage-5" && step == "step-5") {
      $(".info-pop-button").trigger('click');
    } else if(stage == "stage-6" && step == "step-5") {
      $(".info-pop-button").trigger('click');
    } else if(stage == "stage-6" && step == "step-6") {
      $(".info-pop-button").trigger('click');
    } else {
      closeInfo();
    }
  });

  const quizBtn = '.quiz-btn';
  container.on('click', quizBtn, function(){
    $(".reset-pop").hide();

    viewQuiz(stage, step)
  });

  const quizChoiceBtn = '.quiz-pop-choice';
  container.on('click', quizChoiceBtn, function(){
    $(this).addClass('on').siblings().removeClass('on');
  });

  const quizCheckBtn = '.quiz-check-btn';
  container.on('click', quizCheckBtn, function(){
    let type = $(this).siblings('.quiz-pop-answer').data('type');
    let answer = "";

    if(type=='multiple') {
      answer = parseInt($(this).siblings('.quiz-pop-answer').find('.quiz-pop-choice.on').index() + 1);
      checkQuiz(stage, step, answer);
    }

    if(type=='word') {
      answer = $(this).siblings('.quiz-pop-answer').find('.quiz-input').val();
      checkQuiz(stage, step, answer);
    }
  });

  const quizCloseBtn = '.quiz-pop-cancel';
  container.on('click', quizCloseBtn, function(){
    if(stage == 'stage-6') {
      if(step == 'step-2' || step == 'step-3' || step == 'step-4' || step == 'step-5') {
        $("#quiz-pop .quiz-pop-button").trigger('click');
      }
    } else {
      closeQuiz()
    }
  });

  const quizCloseBtn_y = '#quiz-y-pop .quiz-pop-cancel';
  container.on('click', quizCloseBtn_y, function(){
    if(stage == "stage-3" && step == "step-7") {
      $("#quiz-y-pop .quiz-pop-button").trigger('click');
    } else if(stage == "stage-5" && step == "step-1") {
      $("#quiz-y-pop .quiz-pop-button").trigger('click');
    } else if(stage == 'stage-6') {
      if(step == 'step-2' || step == 'step-3' || step == 'step-4' || step == 'step-5') {
        $("#quiz-y-pop .quiz-pop-button").trigger('click');
      }
    } else {
      closeQuiz_y();
    }
  });

  const quizCloseBtn_n = '#quiz-n-pop .quiz-pop-cancel';
  container.on('click', quizCloseBtn_n, function(){
    if(stage == "stage-3" && step == "step-7") {
      $("#quiz-n-pop .quiz-pop-button").trigger('click');
    } else if(stage == 'stage-6') {
      if(step == 'step-2' || step == 'step-3' || step == 'step-4' || step == 'step-5') {
        $("#quiz-n-pop .quiz-pop-button").trigger('click');
      }
    } else {
      closeQuiz_n();
    }
  });

  const quizBackBtn = "#quiz-n-pop .quiz-pop-button";
  container.on('click', quizBackBtn, function(){
    $("#quiz-pop").fadeIn(200);
    $("#quiz-n-pop").hide();
  });

  //공통상단 마을지도
  $("#map-btn").on('click', function(){
    $("#map-pop").fadeIn(200);
  })

  $(".map-pop-cancel").on('click', function(){
    $("#map-pop").fadeOut(200);
  })
}