import React, { useMemo } from 'react'

/** ==== Types ==== */
type Experience = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

type Education = {
  degree: string
  school: string
  year: string
}

type Publication = {
  text: string
  link?: string
}

type ResumeData = {
  name: string
  title: string
  location: string
  phone: string
  email: string
  website?: string
  highlights: string[]
  skills: string[]
  experience: Experience[]
  education: Education[]
  awards: string[]
  interests: string[]
  publications: Publication[]
}

/** ==== UI Atoms ==== */
const Chip: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span style={{
    border: '1px solid var(--pico-muted-border-color)',
    borderRadius: '999px',
    padding: '.25rem .6rem',
    fontSize: '.9rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '.25rem'
  }}>{children}</span>
)

const Section: React.FC<React.PropsWithChildren<{ title: string }>> = ({ title, children }) => (
  <article>
    <h2>{title}</h2>
    {children}
  </article>
)

/** ==== Component ==== */
const App: React.FC = () => {
  const data: ResumeData = useMemo(() => ({
    name: 'Devender Mishra',
    title: 'Principal Engineer / Software Architect',
    location: 'New Delhi, India',
    phone: '+91-9xxxx-xxxx7',
    email: 'mxxxxxxxxr@gmail.com',
    website: '',
    highlights: [
      '14+ years building scalable, high‑performance systems across gaming, fintech, cloud, and enterprise.',
      'Proficient in Java, C++, Python, Golang; distributed systems, concurrency, and cloud architectures.',
      'Demonstrated impact: 60% latency reduction, 80GB→4GB infra optimization, org-wide engineering excellence.',
    ],
    skills: [
      'Java','C++','Python','Golang','Distributed Systems','Cloud Computing',
      'Microservices','Multithreading','Async I/O','WebSockets','Cryptography',
      'Socket Programming','TDD','CI/CD','System Design','Refactoring'
    ],
    experience: [
      {
        company: 'Moonshine Technology Pvt Ltd (Baazi Games)',
        role: 'Principal Engineer',
        period: '18 Mar 2024 – Present',
        location: 'New Delhi',
        bullets: [
          'Reduced app↔backend communication latency by 60%.',
          'Built a production-scale load‑testing framework simulating 3,000 players and multi‑tournament flows.',
          'Drove higher code quality and faster debugging; advised key architecture decisions.',
        ],
      },
      {
        company: 'EQX Analytics Pvt Ltd (Stashfin)',
        role: 'Staff Software Engineer',
        period: '6 Oct 2022 – 13 Mar 2024',
        location: 'New Delhi',
        bullets: [
          'Designed a new Decision Engine DSL for decisioning workflows.',
          'Re‑architected scoring pipeline; cut Redis memory from 80GB to <4GB.',
          'Eliminated big‑table scans and introduced org‑wide unit testing.',
        ],
      },
      {
        company: 'Oravel Stays Ltd (OYO Rooms)',
        role: 'Software Development Engineer III',
        period: '1 Jul 2019 – 5 Oct 2022',
        location: 'Gurugram',
        bullets: [
          'Built OTA metrics monitoring (price & inventory sync).',
          'Developed an AI/ML‑based hotel performance platform.',
          'Raised legacy code coverage from 0% to 10% on ~1M LOC.',
        ],
      },
      {
        company: 'Amazon India Development Center Private Ltd',
        role: 'Software Development Engineer II',
        period: '15 Mar 2017 – 26 Jun 2019',
        location: 'Gurugram',
        bullets: [
          'Designed and developed a system to handle locker outages that engages staff and informs customers to improve experience.',
          'Improved outage detection accuracy and solved many operational pain-points from a long time.',
          'Emphasized engineering excellence and followed best practices like unit-testing, integration testing, continuous deployments and integration.',
        ],
      },
      {
        company: 'Reliance Jio Infocomm Ltd',
        role: 'Software Development Engineer II (Deputy Manager)',
        period: '18 Aug 2015 – 1 Mar 2017',
        location: 'Gurugram',
        bullets: [
          'Delivered an IaaS cloud spanning 300+ physical nodes hosting user VMs. One public user: http://www.aisiitr.in/modis/',
          'Built deployment orchestration and a management web app end‑to‑end.',
        ],
      },
      {
        company: 'Cadence Design Systems India Pvt Ltd',
        role: 'Software Engineer - II',
        period: '15 Dec 2014 – 20 July 2015',
        location: 'Noida',
        bullets: [
          'Fixed data translation issues in Innovus tool as part of OpenAccess Exchange team.',
        ],
      },
      {
        company: 'Tally Solutions Pvt Ltd',
        role: 'Software Engineer',
        period: '20 Jun 2011 – 12 Dec 2014',
        location: 'Delhi',
        bullets: [
          'Developed cross-platform systems',
          'Developed systems involving cryptography, sockets, multi-threading, and IPC.',
          'Solved complex bugs',
        ],
      },
    ],
    education: [
      { degree: 'M.Tech, Software Systems (Data Analytics)', school: 'BITS Pilani', year: '2016-2018' },
      { degree: 'B.Tech, Computer Science & Engineering (Gold Medalist, CGPA: 8.46/10)', school: 'Indian School of Mines, Dhanbad (now IIT (ISM) Dhanbad)', year: '2007-2011' },
      { degree: '12th Standard (Physics, Chemistry, Mathematics)', school: 'Kendriya Vidyalaya No. 3, Jalandhar Cantt (CBSE)', year: '2007 (88.0%)' },
      { degree: '10th Standard', school: 'Kendriya Vidyalaya No. 3, Jalandhar Cantt (CBSE)', year: '2005 (84.2%)' },
    ],
    publications: [
      {
        text: 'MST-Based Cluster Initialization for K-Means – Co-authored with D. Reddy and Prof. P.K. Jana. Published in Advances in Computer Science and Information Technology (CCSIT 2011), Springer CCIS, Vol. 131, 2011.',
        link: 'https://doi.org/10.1007/978-3-642-17857-3_33'
      }
    ],
    awards: ['TCS Best Student Award (2011)', 'ACM‑ICPC Regional Prelims Qualifier (2008)'],
    interests: ['Personal finance & fundamental stock analysis', 'Rubik’s Cube (3×3×3)', 'Stack Overflow contributor'],
  }), [])

  return (
    <div>
      <header style={{
        position: 'sticky', top: 0, zIndex: 10,
        background: 'var(--pico-background-color)',
        borderBottom: '1px solid var(--pico-muted-border-color)'
      }}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.75rem 1rem'}}>
          <div>
            <h1>{data.name}</h1>
            <small>{data.title}</small>
          </div>
          <nav>
            <button className="contrast outline" onClick={() => window.print()}>Download / Print</button>
            {data.website ? <a href={data.website} target="_blank" rel="noreferrer" role="button" className="secondary">Website</a> : null}
          </nav>
        </div>
      </header>

      <main className="container" style={{display:'grid',gridTemplateColumns:'1fr',gap:'1.25rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr',gap:'1.25rem'}}>
          {/* Sidebar */}
          <aside>
            {/*<article>
              <h3>Contact</h3>
              <ul>
                <li><a href={`tel:${data.phone}`}>{data.phone}</a></li>
                <li><a href={`mailto:${data.email}`}>{data.email}</a></li>
                <li>{data.location}</li>
              </ul>
            </article> */}

            <article>
              <h3>Highlights</h3>
              <ul>{data.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
            </article>

            <article>
              <h3>Skills</h3>
              <div style={{display:'flex',flexWrap:'wrap',gap:'.5rem'}}>
                {data.skills.map((s, i) => <Chip key={i}>{s}</Chip>)}
              </div>
            </article>
          </aside>

          {/* Content */}
          <section>
            <Section title="Experience">
              {data.experience.map((exp, idx) => (
                <details key={idx} open>
                  <summary>
                    <strong>{exp.role}</strong> · {exp.company}
                    <small style={{ float: 'right' }}>{exp.period}</small>
                  </summary>
                  <p><em>{exp.location}</em></p>
                  <ul>{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
                </details>
              ))}
            </Section>

            <Section title="Education">
              <div style={{display:'grid',gap:'.75rem',gridTemplateColumns:'1fr'}}>
                {data.education.map((ed, i) => (
                  <div key={i} style={{border:'1px solid var(--pico-muted-border-color)',borderRadius:'12px',padding:'0.75rem 1rem'}}>
                    <h4>{ed.degree}</h4>
                    <small>{ed.school} · {ed.year}</small>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Publications">
              <ul>
                {data.publications.map((p, i) => (<li key={i}>{p}</li>))}
              </ul>
            </Section>
            <Section title="Publications">
              <ul>
                {data.publications.map((p, i) => (<li key={i}>{p.text}{" "}{p.link && (<a href={p.link} target="_blank" rel="noreferrer">[DOI]</a>)}</li>))}
              </ul>
            </Section>

            <Section title="Awards">
              <ul>{data.awards.map((a, i) => <li key={i}>{a}</li>)}</ul>
            </Section>

            <Section title="Interests">
              <div style={{display:'flex',flexWrap:'wrap',gap:'.5rem'}}>
                {data.interests.map((it, i) => <Chip key={i}>{it}</Chip>)}
              </div>
            </Section>
          </section>
        </div>
      </main>

      <footer className="container" style={{textAlign:'center', color:'var(--pico-muted-color)', paddingBottom:'2rem'}}>
        <small>Tip: Use <strong>Download / Print</strong> to save as PDF.</small>
      </footer>

      <style>{`
        @media (min-width: 992px) {
          main.container > div { grid-template-columns: 300px 1fr; }
        }
        @media print {
          header, footer { display: none !important; }
          .container { max-width: 100%; padding: 0; }
          a { text-decoration: none; color: inherit; }
          details { page-break-inside: avoid; }
        }
      `}</style>
    </div>
  )
}

export default App
