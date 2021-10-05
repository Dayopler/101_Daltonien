import { setTimeout } from "../filters/assets/settimeout";

let scan = function filter() {
  if (document.getElementById("styleID612481")) {
      stylingID = document.getElementById("styleID612481").remove();
      filterID = document.getElementById("filterID471924").remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = "styleID612481";
  document.body.appendChild(stylingID);

  filterID = document.createElement('div');
  filterID.id = "filterID471924";
  filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
  document.body.appendChild(filterID);
}

let SetTimeout = function setTimeout() {
  setTimeout(function() {
      window.scrollBy(1, 1);
      window.scrollBy(-1, -1);
  }, 1);
}

//Listeners for 101_Daltoniens filter buttons
//Injects a javascript file on click event, the js file applies a filter to simulate colorblindness

// stores the currently selected filter so that when the user stops hovering
// over options, the currently selected filter will still be applied to the popup
window.selectedFilter = null;

/**
 * get the selected filter on popup open
 */
window.onload = function() {
  if (!chrome || !chrome.storage || !chrome.storage.local) return;
  chrome.storage.local.get(["key"], function(result) {
    try {
      document.getElementById(result.key).click();
    } catch (e) {
      console.log(e);
    }
  });
};

/**
 * Sets the selected filter in storage
 * @param {String} value the selected input
 */
function setSelected(value) {
  try {
    chrome.storage.local.set({ key: value }, function() {
      document.getElementById(value).checked = true;
    });
  } catch {}
}

function injectFilter(fileName) {
  chrome.tabs.executeScript({ file: fileName});
}

document.querySelectorAll(['[id^="radio"]']).forEach(radioButton => {
  const filter = radioButton.parentElement.id.replace("option-", "");
  radioButton.addEventListener("click", function() {
    // page-specific filters
    setSelected(radioButton.id);
    scan;
    injectFilter(`filters/${filter}.js`);
    setTimeout;
    // popup-specific filters
    applyFilter((window.selectedFilter = filter));
  });
});