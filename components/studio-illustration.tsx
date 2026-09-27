'use client';

import { useState } from 'react';

export function StudioIllustration() {
  const [lit, setLit] = useState(false);
  return (
    <figure className="studio-figure" data-lit={lit}>
      <svg className="studio-drawing" viewBox="0 0 560 500" role="img" aria-labelledby="studio-title">
        <title id="studio-title">An illustrated developer’s desk: a laptop, a mobile app, a plant, and a little room for ideas.</title>
        <defs>
          <pattern id="studio-lines" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V10" stroke="currentColor" strokeWidth="1" /></pattern>
        </defs>
        <path className="studio-blob" d="M90 151C71 81 157 36 253 58S449 31 481 139s29 205-62 243S172 457 96 374 109 221 90 151Z" />
        <path className="studio-hatching" d="M20 248H529V420H20Z" fill="url(#studio-lines)" />
        <g className="studio-window" stroke="currentColor" strokeWidth="2.5" fill="none">
          <path d="M320 69h143v148H320zM392 70v147M320 143h143" />
          <g className="studio-sun"><circle cx="431" cy="108" r="16" /><path d="M431 82v-6m0 64v-6m26-26h6m-64 0h6" /></g>
          <path className="studio-moon" d="M435 88a22 22 0 1 0 13 35 23 23 0 0 1-13-35Z" />
        </g>
        <g className="studio-spark" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="m116 81 4 13 13 4-13 4-4 13-4-13-13-4 13-4ZM496 238v18m-9-9h18" /></g>
        <ellipse className="studio-shadow" cx="289" cy="424" rx="224" ry="22" />
        <path className="studio-desk" d="M48 401h458v14H48zM94 415l-10 55m373-55 10 55" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <g className="studio-lamp" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
          <path className="lamp-light" d="m96 223-58 174h192l-84-174Z" stroke="none" />
          <path d="M62 397h100m-53-2 15-125-40-40 43-58" fill="none" />
          <path className="lamp-shade" d="m124 156 45 32-38 48-57-40Z" />
        </g>
        <g className="studio-laptop" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
          <path className="laptop-shell" d="M152 217q0-12 12-12h230q12 0 12 12v164H152Z" />
          <path className="laptop-screen" d="M166 222h226v145H166Z" />
          <path className="laptop-base" d="m152 381-24 19q-4 5 7 5h288q9 0 5-5l-22-19Z" />
          <path d="M250 389h61" strokeLinecap="round" />
          <g strokeWidth="2" strokeLinecap="round"><path d="M183 241h192" opacity=".25" /><path className="screen-code" d="m224 269-14 13 14 13m30-31-13 37m30-32 14 13-14 13" fill="none" /><path d="M208 326h100m-100 12h73" opacity=".4" /><path className="screen-caret" d="M322 320v13" /></g>
          <g className="screen-dots" stroke="none"><circle cx="184" cy="233" r="2" /><circle cx="193" cy="233" r="2" /><circle cx="202" cy="233" r="2" /></g>
        </g>
        <g className="studio-phone" stroke="currentColor" strokeWidth="2.5" transform="rotate(9 407 285)">
          <rect className="phone-shell" x="366" y="240" width="81" height="143" rx="15" />
          <path d="M395 250h22" strokeLinecap="round" /><rect className="phone-card" x="377" y="269" width="59" height="40" rx="7" />
          <path d="m390 290 8 7 16-17M381 325h45m-45 12h31m-10 35h19" fill="none" strokeLinecap="round" />
        </g>
        <g className="studio-plant" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
          <path d="M485 371v-72" fill="none" /><path className="plant-leaf" d="M485 337q-43-3-35-37 34 2 35 37Zm0-15q-1-36 31-38 5 28-31 38Z" />
          <path className="plant-pot" d="m461 365 8 37h32l8-37Z" />
        </g>
        <g className="studio-note" transform="rotate(-9 241 133)"><path d="M186 108h106v65H186Z" /><text x="239" y="136" textAnchor="middle">make it work.</text><text x="239" y="155" textAnchor="middle">make it feel right.</text></g>
      </svg>
      <figcaption><span>A little corner of my world.</span><button type="button" className="lamp-switch" aria-label="Desk lamp" aria-pressed={lit} onClick={() => setLit(!lit)}><span aria-hidden="true">{lit ? '☀' : '☼'}</span>{lit ? 'Lights on' : 'Try the light'}</button></figcaption>
    </figure>
  );
}
