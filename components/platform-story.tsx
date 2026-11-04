const BASE = '/images/dealership-toolkit';

/**
 * Three beats of the product story, one real screenshot each.
 *
 * Screens are captured from the running applications against a dummy-data API:
 * invented dealership, invented shoppers, client branding replaced at capture
 * time. No production data and no mockups.
 */
const beats = [
  {
    n: '01',
    label: 'IDENTIFY',
    surface: 'Web dashboard',
    title: 'Anonymous traffic becomes a named shopper.',
    body: 'Website visitors are resolved into profiles with contact details, page and location history, and a lead temperature the team can sort on.',
    img: `${BASE}/web-visitors.webp`,
    alt: 'Visitor list showing resolved shopper profiles with contact details and lead status',
    width: 1456,
    height: 816,
    portrait: false,
  },
  {
    n: '02',
    label: 'ACT',
    surface: 'React Native app',
    title: 'The same intelligence, away from the desk.',
    body: 'The mobile client reads the same permission model as the web dashboard, so staff on the floor see the modules they are entitled to and nothing else.',
    img: `${BASE}/mobile-dashboard.webp`,
    alt: 'Mobile dashboard showing visitor and lead counters',
    width: 600,
    height: 1155,
    portrait: true,
  },
  {
    n: '03',
    label: 'CONVERT',
    surface: 'Web dashboard',
    title: 'Interest becomes a booked appointment.',
    body: 'Appointments, hot alerts and outcomes land in one view, while the queue engine keeps reminders and follow-up sending in the background.',
    img: `${BASE}/web-appointments.webp`,
    alt: 'Appointments dashboard with status counters and a month calendar',
    width: 1456,
    height: 816,
    portrait: false,
  },
];

export function PlatformStory() {
  return (
    <section className="case-story" aria-label="Product walkthrough">
      {beats.map((b) => (
        <article
          key={b.n}
          className={`story-beat${b.portrait ? ' is-portrait' : ''}`}
        >
          <div className="beat-copy">
            <p className="eyebrow">
              {b.n} / {b.label}
            </p>
            <h3>{b.title}</h3>
            <p>{b.body}</p>
            <span className="beat-surface">{b.surface}</span>
          </div>
          <figure className="beat-shot">
            <img
              src={b.img}
              alt={b.alt}
              width={b.width}
              height={b.height}
              loading="lazy"
            />
          </figure>
        </article>
      ))}
      <p className="case-note">
        Screens captured from the running applications using fictional sample
        data. The dealership, the shoppers and their contact details are
        invented, and client branding is replaced. No production data is shown.
      </p>
    </section>
  );
}
