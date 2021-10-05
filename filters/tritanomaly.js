// tritanomaly : Blue Weak
import * as scan from './assets/scan.js';
import * as setTimeout from './assets/settimeout.js';

//Scan 
scan.scan();

//Set the filter
filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="tritanomaly"> <feColorMatrix type="matrix" values="0.967,0.033,0,0,0 0,0.733,0.267,0,0 0,0.183,0.817,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'html{-webkit-filter:url(#tritanomaly);-moz-filter:(#tritanomaly);-ms-filter:(#tritanomaly);-o-filter:(#tritanomaly);filter:(#tritanomaly);}'

//Delay
setTimeout.setTimeout();