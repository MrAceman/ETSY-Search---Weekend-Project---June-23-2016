import $ from 'jquery';
import {
    items
} from "./items.js";

// function item_template(item) {
//     return `<div class="items_container">
//   <div class="item_con"><div class="item_con_img">
//   <img src="${item.Images[0].url_fullxfull}"></div><div class="item_con_text">
//   <p><a href=${item.url} class="item_title_url">${item.title}</a></p>
//   <a href=${item.url} class="item_price_url">${item.price}</a>
//   <a href=${item.Shop.url} class="shop_url">${item.Shop.shop_name}</a></div>
//   </div>
//   </div>`;
// };

function item_template(item) {
    return `<div class="item_con"><div class="item_con_img">
  <img src="${item.Images[0].url_fullxfull}"></div><div class="item_con_text">
  <a href=${item.url} class="item_title_url">${item.title}</a>
  <a href=${item.url} class="item_price_url">$${item.price}</a>
  <a href=${item.Shop.url} class="shop_url">${item.Shop.shop_name}</a></div>
  </div>`;
};


var itemHTML = items.results.map(item_template);

// var node = $(".item_con");
var node = $(".main_container");

node.append(itemHTML);
