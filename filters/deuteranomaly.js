// deuteranomaly : Green Weak
import * as scan from './assets/scan.js';
import * as setTimeout from './assets/settimeout.js';

//Scan 
scan.scan();

//Set the filter
filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranomaly"> <feColorMatrix type="matrix" values="0.8,0.2,0,0,0 0.258,0.742,0,0,0 0,0.142,0.858,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'html{-webkit-filter:url(#deuteranomaly);-moz-filter:(#deuteranomaly);-ms-filter:(#deuteranomaly);-o-filter:(#deuteranomaly);filter:(#deuteranomaly);}'

//Delay
setTimeout.setTimeout();