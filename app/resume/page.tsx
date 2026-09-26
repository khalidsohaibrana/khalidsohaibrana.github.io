import type { Metadata } from "next";
import { PrintButton } from "@/components/print-button";
import { projects } from "@/lib/projects";
export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Khalid Sohaib — Full Stack & React Native Engineer. Experience, projects, and education.",
  alternates: { canonical: "/resume/" },
};
export default function Resume() {
  return (
    <main id="main" className="resume wrap">
      <h1>Khalid Sohaib</h1>
      <p>Full Stack & React Native Engineer</p>
      <p>
        <a href="mailto:khalidsohaibrana@gmail.com">
          khalidsohaibrana@gmail.com
        </a>{" "}
        · Pakistan · Available remotely
      </p>
      <PrintButton />
      <h2>Experience</h2>
      <h3>Datics AI — Full Stack & React Native Engineer</h3>
      <p>April 2023 – present · Remote</p>
      <p>
        Contributing to production SaaS and mobile platforms, frontend
        architecture, shared component systems, backend integrations, and
        real-time workflows in TypeScript.
      </p>
      {Object.values(projects).map((p) => (
        <section key={p.name}>
          <h3>{p.name}</h3>
          <p>{p.stack}</p>
          <ul>
            {p.contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
      ))}
      <section>
        <h2>Additional contributions</h2>
        <p>
          Code reviews, modular frontend and API architecture, GitHub Actions
          CI/CD, and collaboration with designers, QA, and clients.
        </p>
      </section>
      <section>
        <h2>Education</h2>
        <h3>COMSATS University Islamabad — BS Computer Science</h3>
        <p>2016 – 2020</p>
      </section>
    </main>
  );
}
