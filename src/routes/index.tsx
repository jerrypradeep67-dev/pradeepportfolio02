import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pradeep M | Java Developer & Data Analyst Portfolio" },
      { name: "description", content: "Portfolio of Pradeep M — Java Developer, Data Analyst, and Web Developer. Projects, skills, certificates and contact." },
      { name: "keywords", content: "Pradeep M, Java Developer, Data Analyst, Portfolio, HTML CSS JavaScript, Power BI" },
      { name: "author", content: "Pradeep M" },
      { property: "og:title", content: "Pradeep M | Portfolio" },
      { property: "og:description", content: "Java Developer & Data Analyst Portfolio" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PortfolioPage,
});

const ROLES = [
  "Java Developer",
  "Data Analyst",
  "Web Developer",
  "Problem Solver",
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
  { name: "Java", level: 85 },
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 75 },
  { name: "Power BI", level: 70 },
  { name: "SQL", level: 80 },
];

const PROJECTS = [
  {
    title: "Student Management System",
    desc: "Java project for managing student records, marks and attendance with a clean console interface.",
    tags: ["Java", "OOP", "JDBC"],
  },
  {
    title: "Sales Data Analysis",
    desc: "Business insights dashboard built with Excel, SQL and Power BI on real sales data.",
    tags: ["Power BI", "SQL", "Excel"],
  },
  {
    title: "Portfolio Website",
    desc: "Responsive personal portfolio built with modern HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JS"],
  },
];

const CERTIFICATES = [
  { title: "Java Programming", issuer: "Completed Java programming training." },
  { title: "Data Analysis", issuer: "Excel, SQL and Power BI fundamentals." },
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
          <p className="text-lg">
            I am a motivated student and beginner developer interested in Java development,
            data analysis, and web development. I enjoy solving problems, learning new
            technologies, and building real-world projects that create impact.
          </p>
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
          <div className="bg-muted rounded-2xl p-6 border-l-4 border-primary">
            <h3 className="text-xl font-bold">BCA — Bachelor of Computer Applications</h3>
            <p className="text-muted-foreground mt-1">Your College Name</p>
            <p className="text-muted-foreground">2024 – 2027</p>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="bg-muted rounded-2xl p-6 border-l-4 border-primary">
            <h3 className="text-xl font-bold">Java Developer Intern</h3>
            <p className="text-muted-foreground mt-1">XYZ Company · 2026</p>
            <p className="mt-3">
              Worked on Java applications, SQL databases, and frontend web pages.
              Collaborated with the team on production features and bug fixes.
            </p>
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
