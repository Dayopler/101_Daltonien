// tritanopia : Blue Blind
import * as scan from './assets/scan.js';
import * as setTimeout from './assets/settimeout.js';

//Scan 
scan.scan();

//Set the filter
filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="tritanopia"> <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'html{-webkit-filter:url(#tritanopia);-moz-filter:(#tritanopia);-ms-filter:(#tritanopia);-o-filter:(#tritanopia);filter:(#tritanopia);}'

//Delay
setTimeout.setTimeout();