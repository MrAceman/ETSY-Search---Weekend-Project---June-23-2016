import $ from 'jquery';
import {items} from "./items.js";

console.log(items.results[0]);

function item_template (item) {
  return `<div class="items_container">
  <p>${item.title}</p>
  <p>${item.url}</p>
  <p>${item.price}</p>
  <p>${item.Shop.shop_name}</p>
  <p>${item.Shop.url}</p>
  <p>${item.Images[0].url_fullxfull}</p>
  </div>`;
  };

var itemHTML = items.results.map(item_template);

var node = $(".items_container");

node.append(itemHTML);
