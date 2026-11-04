import { Icon } from "./icons";
export function CleanHausArt(){return <div className="cleanhaus-art"><div className="cleanhaus-title"><span>CLEANHAUS</span><strong>A little less chaos.<br/>A lot more in sync.</strong></div><img src="/images/cleanhaus/onboarding-overview.webp" alt="CleanHaus onboarding illustration showing scheduling, task checklists, and payments" width="1200" height="923" loading="lazy"/><span className="art-caption">SCHEDULING / TASKS / PAYMENTS</span></div>}
export function SystemsArt(){return <div className="systems-art" role="img" aria-label="Dealership CRM engineering diagram: lead activity connects to dashboards through real-time events and to notifications through background jobs"><div className="systems-title"><span>DEALERSHIP TOOLKIT</span><strong>Everything.<br/>In the loop.</strong></div><div className="systems-flow"><div className="flow-origin"><Icon name="bolt"/><span>Lead activity</span></div><div className="flow-branches"><div><span>SOCKET.IO</span><strong>Live dashboards</strong></div><div><span>BULL + REDIS</span><strong>Background jobs</strong></div></div><div className="flow-dest"><span>Teams stay informed.</span><Icon name="arrow"/></div></div><span className="art-caption">SYSTEM OVERVIEW / ANONYMIZED PROJECT</span></div>}
export function InzerArt() {
  return (
    <div className="inzer-art">
      <div className="art-grid" />
      <div className="inzer-art-title">
        <span className="art-overline">MEMBER EXPERIENCE</span>
        <strong>
          inzer<span>.</span>
        </strong>
        <p>
          Built for
          <br />
          the next rep.
        </p>
      </div>
      <div className="inzer-devices">
        <img
          className="device device-main"
          src="/images/inzer/home.webp"
          alt="Inzer member home screen"
          width="600"
          height="1200"
          loading="lazy"
        />
        <img
          className="device device-secondary"
          src="/images/inzer/progress.webp"
          alt="Inzer progress screen"
          width="600"
          height="1200"
          loading="lazy"
        />
      </div>
      <div className="art-baseline">
        <span>REACT / PWA</span>
        <span>PRODUCT WALKTHROUGH ↗</span>
      </div>
    </div>
  );
}
export function CalendarArt() {
  return (
    <div
      className="calendar-art"
      role="img"
      aria-label="Architecture diagram: CleanHaus shares a calendar library across React Native, React, and Next.js"
    >
      <div className="art-topline">
        <span className="project-symbol">C</span>
        <span>CLEANHAUS / ENGINEERING OVERVIEW</span>
      </div>
      <div className="calendar-core">
        <span className="core-icon">
          <Icon name="layers" />
        </span>
        <div>
          <strong>One calendar engine.</strong>
          <span>Shared logic. Consistent behavior.</span>
        </div>
        <div className="calendar-modes">
          <span>M</span>
          <span>W</span>
          <span>D</span>
        </div>
      </div>
      <div className="connection-lines" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="platform-nodes">
        {[
          ["mobile", "React Native", "MOBILE"],
          ["monitor", "React", "WEB"],
          ["code", "Next.js", "ENTERPRISE"],
        ].map(([icon, name, label]) => (
          <div key={name}>
            <Icon name={icon as "mobile" | "monitor" | "code"} />
            <strong>{name}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="art-baseline">
        <span>ONE LIBRARY / THREE CLIENTS</span>
        <span>↗</span>
      </div>
    </div>
  );
}
export function WorkflowArt() {
  return (
    <div
      className="workflow-art"
      role="img"
      aria-label="PV Rugs workflow diagram: QR tracking connects service jobs, payments, and notifications"
    >
      <div className="art-topline">
        <span className="project-symbol">pv.</span>
        <span>PV RUGS / WORKFLOW OVERVIEW</span>
      </div>
      <div className="workflow-heading">
        Every job.
        <br />
        <span>One connected journey.</span>
      </div>
      <div className="workflow-path">
        {[
          ["01", "Track", "QR lifecycle"],
          ["02", "Pay", "Stripe"],
          ["03", "Notify", "SMS + email"],
        ].map(([n, title, sub]) => (
          <div className="workflow-step" key={n}>
            <span>{n}</span>
            <strong>{title}</strong>
            <small>{sub}</small>
          </div>
        ))}
      </div>
      <div className="art-baseline">
        <span>NEXT.JS / FULL STACK</span>
        <span>↗</span>
      </div>
    </div>
  );
}
export function HeroEngineering() {
  return (
    <div className="engineering-card">
      <div className="engineering-header">
        <span className="mono">INTERFACE → INFRASTRUCTURE</span>
        <span className="engineering-signal" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="engineering-statement">
        Built to feel right.
        <br />
        <span>Engineered to hold up.</span>
      </div>
      <div className="engineering-layers">
        {[
          ["01", "Experience", "React Native / React / Next.js", "mobile"],
          ["02", "Systems", "Node.js / APIs / Real-time", "layers"],
          ["03", "Delivery", "Testing / CI/CD / Production", "bolt"],
        ].map(([n, title, sub, icon]) => (
          <div key={n}>
            <span className="layer-number">{n}</span>
            <div>
              <strong>{title}</strong>
              <span>{sub}</span>
            </div>
            <Icon name={icon as "mobile" | "layers" | "bolt"} />
          </div>
        ))}
      </div>
      <div className="engineering-footer">
        <span className="mono">THE WHOLE PRODUCT. CONNECTED.</span>
        <span className="mini-mark">ks.</span>
      </div>
    </div>
  );
}
