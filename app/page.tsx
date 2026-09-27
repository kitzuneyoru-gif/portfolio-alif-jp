const projects = [
  {
    number: "01",
    title: "Stellar",
    description: "Mobile GIS & Navigation",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tech: ["Kotlin", "SQLite", "OSM"],
    link: "#",
  },
  {
    number: "02",
    title: "Inventory System",
    description: "Inventory Management System",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Node.js", "MySQL"],
    link: "#",
  },
  {
    number: "03",
    title: "UMKM Website",
    description: "Business & Company Website",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "Tailwind"],
    link: "#",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "PHP",
  "Laravel",
  "Kotlin",
  "Git",
  "GitHub",
  "Supabase",
];

export default function Home() {
  return (
    <main className="bg-main text-primary min-h-screen">

      {/* ==================================================
          NAVBAR
          ================================================== */}

      <nav className="navbar fixed top-0 z-50 w-full">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          {/* LOGO */}

          <a
            href="#home"
            className="logo"
          >
            ALIF<span>.</span>
          </a>


          {/* NAVIGATION */}

          <div className="hidden items-center gap-7 md:flex">

            <a
              href="#about"
              className="nav-link"
            >
              About
            </a>

            <a
              href="#skills"
              className="nav-link"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="nav-link"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="nav-link"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="nav-link"
            >
              Contact
            </a>

          </div>


          {/* CONTACT BUTTON */}

          <a
            href="#contact"
            className="nav-action"
          >
            Let's Talk
          </a>

        </div>

      </nav>


      {/* ==================================================
          HERO
          ================================================== */}

      <section
        id="home"
        className="hero-section"
      >

        <div className="hero-grid" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-32 md:grid-cols-2">

          {/* HERO TEXT */}

          <div className="relative z-10">

            <p className="jp-label">
              ようこそ
            </p>

            <p className="hero-kicker">
              WELCOME
            </p>


            <h1 className="hero-title">

              ALIF

              <br />

              <span>
                GHIFARI.
              </span>

            </h1>


            <p className="hero-role">

              WEB DEVELOPER

              <span>
                /
              </span>

              MOBILE DEVELOPER

            </p>


            <p className="text-secondary mt-6 max-w-lg leading-7">

              Saya membangun website dan aplikasi mobile
              dengan fokus pada tampilan yang sederhana,
              fungsional, dan mudah digunakan.

            </p>


            {/* BUTTON */}

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="btn-primary"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="btn-outline"
              >
                Contact Me
              </a>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="relative mx-auto w-full max-w-md">

            <div className="profile-frame">

              <div className="profile-line" />

              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80"
                alt="Profile"
                className="profile-image"
              />

            </div>


            <div className="profile-status">

              <span className="status-dot" />

              AVAILABLE FOR WORK

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          ABOUT
          ================================================== */}

      <section
        id="about"
        className="section"
      >

        <div className="mx-auto max-w-6xl px-6">

          <SectionHeading
            japanese="私について"
            title="About Me"
          />


          <div className="grid gap-10 md:grid-cols-2">

            {/* DESCRIPTION */}

            <div>

              <p className="text-secondary leading-8">

                Saya adalah developer yang memiliki
                ketertarikan pada pengembangan website
                dan aplikasi mobile.

              </p>


              <p className="text-secondary mt-5 leading-8">

                Saya senang mempelajari teknologi baru
                dan mengubah ide menjadi project yang
                dapat digunakan.

              </p>


              <p className="text-secondary mt-5 leading-8">

                Saat ini saya terus mengembangkan kemampuan
                di bidang fullstack web development sambil
                membangun berbagai project untuk menambah
                pengalaman.

              </p>

            </div>


            {/* PROFILE INFORMATION */}

            <div className="profile-info">

              <div>

                <span>
                  NAME
                </span>

                <strong>
                  Alif Ghifari
                </strong>

              </div>


              <div>

                <span>
                  ROLE
                </span>

                <strong>
                  Web & Mobile Developer
                </strong>

              </div>


              <div>

                <span>
                  FOCUS
                </span>

                <strong>
                  Frontend & Fullstack
                </strong>

              </div>


              <div>

                <span>
                  STATUS
                </span>

                <strong className="text-accent">
                  Available
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          SKILLS
          ================================================== */}

      <section
        id="skills"
        className="section section-dark"
      >

        <div className="mx-auto max-w-6xl px-6">

          <SectionHeading
            japanese="スキル"
            title="Skills"
          />


          <div className="flex flex-wrap gap-3">

            {skills.map((skill) => (

              <span
                key={skill}
                className="skill-tag"
              >

                {skill}

              </span>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          PROJECTS
          ================================================== */}

      <section
        id="projects"
        className="section section-dark"
      >

        <div className="mx-auto max-w-6xl px-6">


          {/* PROJECT HEADER */}

          <div className="projects-header">

            <div>

              <p className="jp-label">
                プロジェクト
              </p>

              <h2 className="projects-title">
                Featured Projects
              </h2>

            </div>


            <a
              href="#"
              className="view-all"
            >

              View All Projects

              <span>
                →
              </span>

            </a>

          </div>


          {/* PROJECT CARDS */}

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                key={project.number}
                className="featured-project"
              >

                {/* IMAGE */}

                <div className="featured-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />


                  <span className="project-index">
                    {project.number}
                  </span>

                </div>


                {/* INFORMATION */}

                <div className="featured-info">

                  <div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                  </div>


                  <a
                    href={project.link}
                    className="project-arrow"
                    aria-label={`View ${project.title}`}
                  >
                    ↗
                  </a>

                </div>


                {/* TECHNOLOGY */}

                <div className="featured-tech">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          EXPERIENCE
          ================================================== */}

      <section
        id="experience"
        className="section"
      >

        <div className="mx-auto max-w-6xl px-6">

          <SectionHeading
            japanese="経験"
            title="Experience"
          />


          <div className="experience-list">

            <ExperienceItem
              year="2025 — Present"
              title="Web & Mobile Development"
              description="Mempelajari dan mengembangkan berbagai project menggunakan teknologi web dan mobile."
            />


            <ExperienceItem
              year="2024 — 2025"
              title="Mobile Development"
              description="Mengembangkan aplikasi Android menggunakan Kotlin dan berbagai library pendukung."
            />

          </div>

        </div>

      </section>


      {/* ==================================================
          CONTACT
          ================================================== */}

      <section
        id="contact"
        className="section"
      >

        <div className="mx-auto max-w-4xl px-6 text-center">

          <SectionHeading
            japanese="お問い合わせ"
            title="Let's Work Together"
            center
          />


          <p className="text-secondary mx-auto mt-5 max-w-xl leading-7">

            Punya project atau ingin berdiskusi?

            <br />

            Jangan ragu untuk menghubungi saya.

          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:your.email@example.com"
              className="btn-primary"
            >
              Send Email
            </a>


            <a
              href="#"
              className="btn-outline"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          FOOTER
          ================================================== */}

      <footer className="footer">

        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-center md:flex-row md:items-center md:justify-between md:text-left">

          <p>
            © 2026 Alif Ghifari.
          </p>


          <p>

            Built with{" "}

            <span className="text-accent">
              Next.js
            </span>

          </p>

        </div>

      </footer>

    </main>
  );
}


/* ==================================================
   SECTION HEADING
   ================================================== */

function SectionHeading({
  japanese,
  title,
  center = false,
}: {
  japanese: string;
  title: string;
  center?: boolean;
}) {

  return (

    <div
      className={`section-heading ${
        center ? "text-center" : ""
      }`}
    >

      <p className="jp-label">
        {japanese}
      </p>


      <div className="flex items-center gap-4">

        <h2>
          {title}
        </h2>


        <span className="heading-mark">
          ///
        </span>

      </div>

    </div>

  );
}


/* ==================================================
   EXPERIENCE ITEM
   ================================================== */

function ExperienceItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {

  return (

    <div className="experience-item">

      <div className="experience-dot" />


      <div>

        <p className="text-accent text-sm">
          {year}
        </p>


        <h3 className="text-primary mt-2 text-xl font-semibold">
          {title}
        </h3>


        <p className="text-secondary mt-2 max-w-2xl leading-7">
          {description}
        </p>

      </div>

    </div>

  );
}