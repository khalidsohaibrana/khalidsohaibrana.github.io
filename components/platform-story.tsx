const BASE = '/images/dealership-toolkit';

/** Homepage art: the web dashboard with the React Native client overlapping it. */
export function DealershipArt() {
  return (
    <div className="toolkit-story-art">
      <span className="toolkit-title">
        Web &amp; mobile
        <strong>One platform.</strong>
      </span>
      <img
        className="toolkit-web"
        src={`${BASE}/web-visitors.webp`}
        alt="Web dashboard listing identified shoppers with contact details and lead status"
        width={1456}
        height={816}
        loading="lazy"
      />
      <img
        className="toolkit-phone"
        src={`${BASE}/mobile-dashboard.webp`}
        alt="React Native app showing visitor and lead counters"
        width={600}
        height={1155}
        loading="lazy"
      />
    </div>
  );
}

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
    label: 'AUTOMATE',
    surface: 'Web dashboard',
    title: 'Follow-up that runs without anyone remembering.',
    body: 'Campaigns are composed once per tenant, then the queue engine sends them on schedule and records what was delivered, opened and replied to.',
    img: `${BASE}/web-automations.webp`,
    alt: 'Campaign automation list showing workflows with type, status and state',
    width: 1456,
    height: 816,
    portrait: false,
  },
  {
    n: '04',
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
