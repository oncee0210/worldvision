import { itemData } from './itemData.js';

let inventory = [];
let inventoryList = $(".inventory-item");

const renderItem = () => {
  inventoryList.html('');

  inventory.map((item, index) => {
    let title = itemData[item].title;
    let imgW = itemData[item].img.inven.imgSize[0];
    let imgH = itemData[item].img.inven.imgSize[1];
    let imgFile = itemData[item].img.inven.imgFile;

    inventoryList.eq(index).append(`
    <button type="button" class="item-info-btn" data-item-id="${inventory[index]}">
      <img src="${imgFile}" alt="${title}" style="width: ${imgW}px; height: ${imgH}px;">
    </button>
    `);
  })
}

const getItem = (itemId, callback) => {  
  if (inventory.includes(itemId)) {
    return false;
  }

  inventory.push(itemId);
  renderItem();

  if (callback && typeof callback === 'function') {
    callback();
  }

  return inventory;
}

const itemPop = document.getElementById("item-pop");
const $itemPop = $("#item-pop");

const viewItem = (itemId) => {
  $itemPop.html('');

  const itemPopContents = document.createElement('div');
  itemPopContents.classList.add('item-pop-contents');

  let title = itemData[itemId].title;
  let expl = itemData[itemId].expl;
  let imgW = itemData[itemId].img.popup.imgSize[0];
  let imgH = itemData[itemId].img.popup.imgSize[1];
  let imgFile = itemData[itemId].img.popup.imgFile;
  

  let itemPopContentsHtml = `
    <button type="button" class="item-pop-cancel"><img src="/img/icon-cancel.png" alt="팝업 닫기"></button>
    <div class="item-pop-inner">
      <div class="item-pop-img">
        <img src="${imgFile}" alt="${title}" style="width: ${imgW}px; height: ${imgH}px;">
      </div>
      <div class="item-pop-title">${title}</div>
      <div class="hansans item-pop-expl">${expl}</div>
    </div>
  `

  itemPopContents.innerHTML = itemPopContentsHtml;

  itemPop.appendChild(itemPopContents);

  const container = document.querySelector('#container');
  container.appendChild(itemPop);

  $itemPop.fadeIn(200);
}

const removeItem = () => {
  inventory = inventory.filter(function(item) {
    return item !== 'muac';
  });

  renderItem();
}

const closeItem = () => {
  $itemPop.fadeOut(200);
  itemPop.innerHTML = '';
}

export { getItem, viewItem, closeItem, removeItem }