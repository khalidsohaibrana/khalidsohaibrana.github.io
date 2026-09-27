'use client';
import { useState } from 'react';

const scenes = [
  { name: 'Join', file: 'signup', caption: 'Start with a simple hello.', alt: 'Reconstructed Inzer signup screen' },
  { name: 'Plan', file: 'plan', caption: 'Find your next good routine.', alt: 'Reconstructed Inzer workout plan screen' },
  { name: 'Progress', file: 'progress', caption: 'See the work adding up.', alt: 'Reconstructed Inzer progress screen' },
];

export function ProjectPeek() {
  const [active, setActive] = useState(1);
  const scene = scenes[active];
  return <div className="project-peek">
    <div className="peek-top"><span>inzer.</span><span>THE MEMBER EXPERIENCE</span></div>
    <div className="peek-stage"><span className="peek-orbit" aria-hidden="true" /><img key={scene.file} src={`/images/inzer/${scene.file}.webp`} alt={scene.alt} width="600" height="1200" className="peek-phone" /><span className="peek-sticker" aria-hidden="true">one rep<br />at a time <span>↗</span></span></div>
    <p className="peek-caption" aria-live="polite">{scene.caption}</p>
    <div className="peek-controls" role="group" aria-label="Preview Inzer screens">{scenes.map((item, index) => <button type="button" key={item.file} aria-pressed={index === active} onClick={() => setActive(index)}>{item.name}</button>)}</div>
  </div>;
}
