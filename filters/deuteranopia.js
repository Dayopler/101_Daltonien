// deuteranopia : Green Blind
import * as scan from './assets/scan.js';
import * as setTimeout from './assets/settimeout.js';

//Scan 
scan.scan();

//Set the filter
filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranopia"> <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'html{-webkit-filter:url(#deuteranopia);-moz-filter:(#deuteranopia);-ms-filter:(#deuteranopia);-o-filter:(#deuteranopia);filter:(#deuteranopia);}'

//Delay
setTimeout.setTimeout();