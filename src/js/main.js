import $ from 'jquery';
import {
    items
} from "./items.js";

// The following code populates the search results

function item_template(item) {
    return `<div class="item_con"><div class="item_con_img">
  <img src="${item.Images[0].url_fullxfull}"></div><div class="item_con_text">
  <a href=${item.url} class="item_title_url">${item.title}</a>
  <a href=${item.url} class="item_price_url">$${item.price}</a>
  <a href=${item.Shop.url} class="shop_url">${item.Shop.shop_name}</a></div>
  </div>`;
};

var itemHTML = items.results.map(item_template);

// var node = $(".main_container");works
  var node = $(".items_container");


node.append(itemHTML);

// The previous code populates the main search results

// The following code populates the related to search topics

function related_template(item) {
    return `<div class="related_to_search"><div class="relateditem">
  <li class=related_item">${item.tags[0]}</div>
  </div>`;
};


var relatedHTML = items.results.map(related_template);

var relatednode = $(".related_to_search");

relatednode.append("Related to whatever you searched for" + relatedHTML);
