'use client';

import { useState } from 'react';

const cleanhausSteps = [
  { title: 'Choose a role', description: 'The mobile onboarding offers distinct paths for owners, cleaners, managers, and other contractors.' },
  { title: 'See the schedule', description: 'The calendar supports month, week, and day views. This simplified view illustrates a property turnover alongside an upcoming stay.' },
  { title: 'Resolve a task', description: 'Task details bring the property, due date, area, and steps together. Try completing this sample task.' },
];
const dealershipSteps = [
  { title: 'Appointments at a glance', description: 'The web dashboard combines appointment totals, status indicators, filters, and calendar data.' },
  { title: 'Focus the view', description: 'Status filtering helps teams narrow the appointment list. These records are fictional and remain entirely in this browser.' },
  { title: 'Calendar context', description: 'Appointments and hot alerts appear together in the calendar, giving teams a shared view of upcoming activity.' },
];

export function SourceWalkthrough({ project }: { project: 'cleanhaus' | 'dealership' }) {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState('Property Owner / Host');
  const [done, setDone] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const mobile = project === 'cleanhaus';
  const steps = mobile ? cleanhausSteps : dealershipSteps;
  return <section className={`source-walkthrough ${mobile ? 'walkthrough-mobile' : 'walkthrough-web'}`} aria-label={`${mobile ? 'CleanHaus' : 'Dealership Toolkit'} portfolio walkthrough`}>
    <header><p className="eyebrow">A CLOSER LOOK</p><h2>{mobile ? 'From getting started to getting things done.' : 'A clearer view of the day ahead.'}</h2><p>Simplified, code-informed UI illustrations. Fictional sample data—not production screenshots or a live backend.</p></header>
    <div className="walkthrough-layout">
      <div className="walkthrough-guide"><div className="walkthrough-steps" role="group" aria-label="Walkthrough stages">{steps.map((item, index) => <button key={item.title} type="button" aria-pressed={step === index} onClick={() => setStep(index)}><span>0{index + 1}</span>{item.title}</button>)}</div><p className="walkthrough-description" aria-live="polite">{steps[step].description}</p><span className="walkthrough-stack">{mobile ? 'React Native · Expo · Shared calendar' : 'React · Appointment workflows'}</span></div>
      <div className="walkthrough-canvas">
        {mobile ? <div className="illustrated-phone"><div className="demo-status" aria-hidden="true"><span>9:41</span><span>● ▰</span></div><div className="demo-app-name">CleanHaus <span>Sample</span></div>
          {step === 0 ? <div className="demo-content"><h3>How will you use CleanHaus?</h3><p>Choose the role that fits your work.</p><div className="demo-roles">{['Property Owner / Host', 'Cleaner', 'Cleaning Manager', 'Other Contractor'].map(item => <button key={item} type="button" aria-pressed={role === item} onClick={() => setRole(item)}><span>{item}</span><span aria-hidden="true">{role === item ? '●' : '○'}</span></button>)}</div><span className="demo-hint">Role selection preview only</span></div> : step === 1 ? <div className="demo-content"><h3>September 2026</h3><p>Harbor House · Sample property</p><div className="demo-view-modes" aria-label="Illustrated calendar modes">Month · Week · Day</div><div className="demo-week">{['M 21', 'T 22', 'W 23', 'T 24', 'F 25'].map((day, i) => <span key={day} className={i === 2 ? 'current-day' : ''}>{day}</span>)}</div><div className="demo-event"><small>10:00 — 12:00</small><strong>Turnover cleaning</strong><span>Harbor House</span></div><div className="demo-event secondary"><small>15:00</small><strong>Guest arrival</strong><span>Harbor House</span></div><span className="demo-hint">Illustrative day view</span></div> : <div className="demo-content"><h3>Prepare the kitchen</h3><p>Harbor House</p><span className="demo-badge">{done ? 'Resolved' : 'Critical task'}</span><dl className="demo-task-meta"><dt>Due</dt><dd>23 September, 12:00</dd><dt>Area</dt><dd>Kitchen · Cleaning</dd></dl><strong className="demo-steps-heading">Steps</strong><ol><li>Wipe counters and surfaces</li><li>Restock kitchen essentials</li><li>Check everything is ready</li></ol><button className="demo-primary" type="button" onClick={() => setDone(!done)}>{done ? 'Reset sample task' : 'Mark as done'}</button><span className="demo-hint" role="status">{done ? 'Sample task complete. No data was saved.' : 'Try it—this only changes the preview.'}</span></div>}
          <div className="demo-home-indicator" aria-hidden="true" />
        </div> : <div className="illustrated-browser"><div className="demo-browser-bar"><span aria-hidden="true">● ● ●</span><span>CRM workspace · Sample</span></div><div className="demo-dashboard"><p className="demo-breadcrumb">Workspace / Appointments</p><h3>Appointments</h3>{step === 0 ? <><p>A quick view of team activity.</p><div className="demo-kpis">{[['12','Total'],['7','Confirmed'],['3','Show'],['2','Rescheduled']].map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="demo-summary"><strong>Keep the day in view</strong><p>Appointment status and calendar activity in one workspace.</p></div></> : step === 1 ? <><button className="demo-filter" type="button" aria-pressed={confirmed} onClick={() => setConfirmed(!confirmed)}>{confirmed ? 'Confirmed only ✓' : 'Filter: confirmed'}</button><div className="demo-records">{[['Sample visitor A','Confirmed','10:30'],['Sample visitor B','Rescheduled','11:00'],['Sample visitor C','Confirmed','14:00']].filter(row => !confirmed || row[1] === 'Confirmed').map(row => <div key={row[0]}><strong>{row[0]}</strong><span>{row[2]}</span><small>{row[1]}</small></div>)}</div><span className="demo-hint">Fictional records · local filter only</span></> : <><p>September 2026 · Illustrative week</p><div className="demo-calendar">{['Mon 21','Tue 22','Wed 23'].map((day, index) => <div key={day}><strong>{day}</strong><span>{index === 1 ? 'Hot alerts · 1' : `Appointments · ${index + 2}`}</span></div>)}</div><div className="demo-legend"><span>● Appointments</span><span>● Hot alerts</span></div></>}</div></div>}
      </div>
    </div>
  </section>;
}
