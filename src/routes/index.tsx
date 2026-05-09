import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pradeep M | Cyber Security Student & Python Developer" },
      { name: "description", content: "Portfolio of Pradeep M — B.Tech Cyber Security student passionate about penetration testing, network security, and Python development." },
      { name: "keywords", content: "Pradeep M, Cyber Security, Penetration Testing, Python Developer, Java, Networking, Portfolio" },
      { name: "author", content: "Pradeep M" },
      { property: "og:title", content: "Pradeep M | Cyber Security Portfolio" },
      { property: "og:description", content: "Cyber Security student & Python developer portfolio" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PortfolioPage,
});

const ROLES = [
  "Cyber Security Student",
  "Python Developer",
  "Penetration Testing Enthusiast",
  "Lifelong Learner",
];

const NAV = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["experience", "Experience"],
  ["certificates", "Certificates"],
  ["achievements", "Achievements"],
  ["resume", "Resume"],
  ["contact", "Contact"],
] as const;

const SKILLS = [
  { name: "Java", level: 75 },
  { name: "C++", level: 70 },
  { name: "Python", level: 80 },
  { name: "Networking", level: 75 },
  { name: "Web Development (Basics)", level: 65 },
  { name: "Leadership", level: 80 },
];

const INTERESTS = [
  "Penetration Testing",
  "Digital Forensics",
  "Network Security",
  "Web Application Security",
  "Web Design",
];

const PROJECTS = [
  {
    title: "Student Management System",
    desc: "Python program to store and manage student records — supports add, update, and delete operations with structured, database-like storage. Demonstrates file handling and SQLite fundamentals.",
    tags: ["Python", "SQLite", "File Handling", "VS Code"],
  },
  {
    title: "URL Status Checker",
    desc: "Python tool that sends HTTP requests to verify whether websites are active and returns their response codes. Useful for monitoring website availability and learning networking concepts.",
    tags: ["Python", "Requests", "Networking"],
  },
  {
    title: "Port Scanner",
    desc: "Simple Python port scanner that probes a target system for open ports to help identify potential network vulnerabilities. Built using the socket library.",
    tags: ["Python", "Socket", "Cyber Security"],
  },
];

const CERTIFICATES = [
  { title: "Java Programming Masterclass", issuer: "Udemy · 2025" },
  { title: "SQL for Data Analysis", issuer: "HackerRank · 2025" },
  { title: "Microsoft Power BI Data Analyst", issuer: "Microsoft Learn · 2025" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp · 2024" },
  { title: "Python for Everybody", issuer: "Coursera · 2024" },
];

const ACHIEVEMENTS = [
  { title: "Top Performer", desc: "Successfully delivered multiple Java projects." },
  { title: "Hackathon Participant", desc: "Took part in a competitive coding event." },
];

function PortfolioPage() {
  const [dark, setDark] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Typing effect
  useEffect(() => {
    const role = ROLES[roleIdx];
    let i = 0;
    setTyped("");
    const typing = setInterval(() => {
      i++;
      setTyped(role.slice(0, i));
      if (i >= role.length) {
        clearInterval(typing);
        setTimeout(() => setRoleIdx((r) => (r + 1) % ROLES.length), 1600);
      }
    }, 80);
    return () => clearInterval(typing);
  }, [roleIdx]);

  const handleContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:pradeepmuniyandi2002@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="bg-hero text-primary-foreground text-center px-5 py-20">
        <div className="mx-auto flex w-44 h-44 items-center justify-center rounded-full border-4 border-white bg-white/10 text-6xl font-bold mb-5 shadow-soft backdrop-blur-sm">
          PM
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Pradeep M</h1>
        <p className="text-xl md:text-2xl mt-4 min-h-9">
          I'm a <span className="font-semibold">{typed}</span>
          <span className="animate-pulse">|</span>
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="inline-block px-7 py-3 rounded-full bg-white text-primary font-bold transition hover:scale-105 hover:bg-accent">
            View Projects
          </a>
          <a href="#contact" className="inline-block px-7 py-3 rounded-full bg-white text-primary font-bold transition hover:scale-105 hover:bg-accent">
            Contact Me
          </a>
          <button
            onClick={() => setDark((d) => !d)}
            className="inline-block px-7 py-3 rounded-full border-2 border-white text-white font-bold transition hover:bg-white hover:text-primary"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex flex-wrap justify-center gap-1 bg-nav text-nav-foreground py-3 px-2 shadow-card">
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} className="px-3 py-2 rounded-md font-semibold hover:text-primary transition">
            {label}
          </a>
        ))}
      </nav>

      <main className="space-y-9 py-9">
        <Section id="about" title="About Me">
          <p className="text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold text-primary">Pradeep M</span> — a BCA student
            passionate about turning ideas into clean, working software. I specialize in
            <span className="font-semibold"> Java development</span> and
            <span className="font-semibold"> data analytics</span>, and I love the moment a messy
            dataset becomes a clear story or a few lines of code start solving a real problem.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Over the past two years I've built console and database-driven Java applications,
            designed Power BI dashboards on real-world datasets, and shipped responsive websites
            using HTML, CSS, and JavaScript. I'm currently sharpening my skills in
            Data Structures & Algorithms, SQL, and full-stack development to grow into a
            versatile software engineer.
          </p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-base">
            <li>🎯 5+ personal projects shipped</li>
            <li>📊 50K+ rows analyzed in Power BI</li>
            <li>💻 Comfortable with Java, SQL & JS</li>
            <li>🚀 Always learning something new</li>
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <div className="space-y-5">
            {SKILLS.map((s) => (
              <div key={s.name}>
                <p className="font-semibold mb-2 flex justify-between">
                  <span>{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </p>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {PROJECTS.map((p) => (
              <article key={p.title} className="bg-muted rounded-2xl p-6 border-l-4 border-primary transition hover:-translate-y-1.5 hover:shadow-soft">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-sm font-bold text-primary hover:underline">Live Demo →</a>
                  <a href="#" className="text-sm font-bold text-primary hover:underline">GitHub →</a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="space-y-5">
            <div className="bg-muted rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-muted-foreground mt-1">Sri Krishna Arts and Science College, Coimbatore</p>
              <p className="text-muted-foreground">2023 – 2026 · CGPA: 8.4 / 10</p>
              <p className="mt-2 text-sm">Relevant coursework: Java, DBMS, Data Structures, Web Technologies, Software Engineering.</p>
            </div>
            <div className="bg-muted rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold">Higher Secondary (12th — Computer Science)</h3>
              <p className="text-muted-foreground mt-1">Government Higher Secondary School, Tamil Nadu</p>
              <p className="text-muted-foreground">2022 – 2023 · 88%</p>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-5">
            <div className="bg-muted rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold">Java Developer Intern</h3>
              <p className="text-muted-foreground mt-1">CodeClause · Remote · Jun 2025 – Aug 2025</p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li>Built 3 Java mini-projects including a Bank Management System using JDBC and MySQL.</li>
                <li>Implemented OOP design, exception handling, and modular code reviewed by senior developers.</li>
                <li>Improved query performance by ~30% by refactoring SQL joins and adding indexes.</li>
              </ul>
            </div>
            <div className="bg-muted rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold">Data Analyst Trainee</h3>
              <p className="text-muted-foreground mt-1">YBI Foundation · Remote · Jan 2025 – Mar 2025</p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li>Analyzed real-world datasets using Python (Pandas) and Power BI.</li>
                <li>Delivered 4 dashboards covering sales, HR, and customer churn use cases.</li>
                <li>Presented insights and recommendations to mentors in weekly demo sessions.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="certificates" title="Certificates">
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {CERTIFICATES.map((c) => (
              <div key={c.title} className="bg-muted rounded-2xl p-6 border-l-4 border-primary">
                <h3 className="text-lg font-bold mb-1">{c.title}</h3>
                <p className="text-muted-foreground">{c.issuer}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="bg-muted rounded-2xl p-6 border-l-4 border-primary">
                <h3 className="text-lg font-bold mb-1">{a.title}</h3>
                <p className="text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="resume" title="Resume">
          <p className="mb-5 text-lg">View or download my professional resume below.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-block px-7 py-3 rounded-full bg-primary text-primary-foreground font-bold transition hover:scale-105">
              View Resume
            </a>
            <a href="#" download className="inline-block px-7 py-3 rounded-full border-2 border-primary text-primary font-bold transition hover:bg-primary hover:text-primary-foreground">
              Download Resume
            </a>
          </div>
        </Section>

        <Section id="contact" title="Contact Me">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p><span className="font-bold">Email:</span> pradeepmuniyandi2002@gmail.com</p>
              <p><span className="font-bold">Phone:</span> +91 6379475645</p>
              <div className="flex gap-4 pt-3">
                <a href="#" className="font-bold text-primary hover:underline">LinkedIn</a>
                <a href="#" className="font-bold text-primary hover:underline">GitHub</a>
              </div>
            </div>
            <form onSubmit={handleContact} className="space-y-3">
              <input required name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border bg-background" />
              <input required type="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border bg-background" />
              <textarea required name="message" rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-xl border bg-background resize-none" />
              <button type="submit" className="w-full px-7 py-3 rounded-full bg-primary text-primary-foreground font-bold transition hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>
        </Section>
      </main>

      <footer className="bg-footer text-footer-foreground text-center py-7">
        <p>© 2026 Pradeep M · Portfolio Website</p>
      </footer>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="max-w-5xl mx-4 md:mx-auto bg-card text-card-foreground rounded-2xl p-8 md:p-10 shadow-card animate-fade-up scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">{title}</h2>
      {children}
    </section>
  );
}
