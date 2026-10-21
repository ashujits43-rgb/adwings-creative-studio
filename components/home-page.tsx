"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Camera,
  Clapperboard,
  Compass,
  Mail,
  Layers3,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Send,
  Sparkles
} from "lucide-react";
import { HoverPreviewCard } from "./hover-preview-card";

const heroStats = [
  { value: "4", label: "Core creative services" },
  { value: "8", label: "Flexible package options" },
  { value: "2", label: "Jharkhand locations" }
];

const heroTags = [
  "Brand Identity",
  "Content Production",
  "Social Growth",
  "Website Design"
];

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" }
];

const whatsappUrl =
  "https://wa.me/917905040341?text=Hi%20Adwings%2C%20I%20would%20like%20to%20discuss%20a%20project.";
const emailUrl = "mailto:adwings0007@gmail.com";

const services = [
  {
    eyebrow: "Content",
    title: "Video Content Making",
    description:
      "Engaging stories, scripting, production, and editing that give your business content a clear voice.",
    icon: Clapperboard,
    className: "md:col-span-2"
  },
  {
    eyebrow: "Design",
    title: "Creative Graphic Designing",
    description:
      "Visual identity, logos, branding, and marketing materials designed to make your business memorable.",
    icon: Layers3
  },
  {
    eyebrow: "Web",
    title: "Website Designing",
    description:
      "Static and dynamic websites with SEO, APIs, domain, hosting, and the essentials your business needs online.",
    icon: MonitorSmartphone
  },
  {
    eyebrow: "Google",
    title: "Google Business Profiling",
    description:
      "Creative profile setup with photos and verification support to strengthen local business discovery.",
    icon: BadgeCheck,
    className: "md:col-span-2"
  }
];

const packages = [
  { title: "Google Profiling", price: "₹1,500/-" },
  { title: "Facebook + Instagram Handling", price: "₹1,000/-" },
  { title: "Creative Flyer (15)", price: "₹1,500/-" },
  { title: "Video Reel (02)", price: "₹4,000/-" },
  { title: "AI Video (04)", price: "₹4,000/-" },
  { title: "Photography (50)", price: "₹2,000/-" },
  { title: "CGI Creative Ads (02)", price: "₹10,000/-" },
  { title: "Website Designing", price: "₹10,000 – ₹30,000" }
];

const founderHighlights = [
  "Creative direction rooted in on-set execution, not just visual theory.",
  "Brand, content, and growth strategy shaped together for a cleaner client workflow.",
  "A small, fast-moving team that can move from concept to delivery without handoff friction."
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Positioning",
    description:
      "We sharpen the brand story, audience, and offer so the creative direction starts with clarity.",
    icon: Sparkles
  },
  {
    step: "02",
    title: "Production & Design",
    description:
      "Shoots, edits, posters, and design assets are produced as one connected system instead of separate tasks.",
    icon: Camera
  },
  {
    step: "03",
    title: "Launch & Growth",
    description:
      "Campaign rollout, performance tracking, and iteration keep the brand active after launch day.",
    icon: Rocket
  }
];

const projects = [
  {
    title: "ASHU: Direction Frame 01",
    category: "On Set",
    description:
      "Ashujit Kumar aligning the team around the shot and keeping the production energy focused.",
    imageUrl: "/photos/pic1.jpeg"
  },
  {
    title: "ASHU: Direction Frame 02",
    category: "Crew Flow",
    description:
      "A working-direction moment that captures movement, pace, and the coordination behind the camera.",
    imageUrl: "/photos/pic2.jpeg"
  },
  {
    title: "ASHU: Direction Frame 03",
    category: "Shoot Energy",
    description:
      "A candid production image built around action, attention, and live-set momentum.",
    imageUrl: "/photos/pic3.jpeg"
  },
  {
    title: "ASHU: Direction Frame 04",
    category: "Creative Lead",
    description:
      "Ashujit in the middle of execution, showing the hands-on side of production leadership.",
    imageUrl: "/photos/pic4.jpeg"
  },
  {
    title: "ASHU: Direction Frame 05",
    category: "Behind The Scenes",
    description:
      "A final working glimpse that reinforces the team effort behind Adwings content production.",
    imageUrl: "/photos/pic5.jpeg"
  }
];

export function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slateNight text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 lg:min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(58,123,255,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(143,93,255,0.18),transparent_24%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_26%)]" />
          <div className="absolute inset-0">
            <Image
              src="/photos/pic1.jpeg"
              alt="Adwings production team on set"
              fill
              priority
              sizes="100vw"
              className="translate-x-[12%] object-cover object-center opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,22,0.18),rgba(6,8,22,0.82)_56%,#060816)]" />
          <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.07]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col px-6 pb-12 pt-5 md:px-10 lg:min-h-screen lg:px-16 lg:pb-8">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="glass-chip inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-100">
              <Sparkles size={14} />
              Adwings Creative Studio
            </div>
            <nav className="hidden items-center gap-2 md:flex">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-chip inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white"
              >
                Let&apos;s Talk
                <ArrowUpRight size={16} />
              </a>
            </nav>
          </header>

          <div className="mt-8 grid flex-1 gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.26em] text-blue-100">
                <Compass size={14} />
                Creative Direction Meets Performance
              </div>
              <h1 className="font-display text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-[clamp(3.4rem,4.7vw,4.6rem)]">
                Content, branding, and digital experiences that help your business move forward.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 lg:text-[1.05rem]">
                Adwings brings video content, creative design, website development, Google Business profiling, social media marketing, and ad shooting together under one team.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blueGlow px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_0_24px_rgba(58,123,255,0.55)] transition hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(58,123,255,0.7)]"
                >
                  Start A Project
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="#portfolio"
                  className="glass-chip inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:border-white/25 hover:bg-white/10"
                >
                  View Portfolio
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="glass-panel rounded-[2rem] p-4 shadow-glow md:p-5"
            >
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(58,123,255,0.24),transparent_34%)]" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.28em] text-blue-200">
                    Built To Move Fast
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-white lg:text-3xl">
                    Your creative partner for every business goal.
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
                    Choose the services that fit your goals and build a package around the work your business needs now.
                  </p>
                </div>
              </div>

              <div className="mt-3 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/55">
                    Core stack
                  </p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
                    <p>Social media marketing: strategy, management, engagement, and ad campaigns.</p>
                    <p>Ad shooting: high-quality video ads and cinematic shoots.</p>
                    <p>Websites, content, and design shaped around your business goals.</p>
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-1">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <p className="font-display text-2xl font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-18 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-5 rounded-[2.6rem] bg-[radial-gradient(circle,rgba(58,123,255,0.22),transparent_60%)] blur-2xl" />
            <div className="glass-panel relative overflow-hidden rounded-[2.4rem] p-3 shadow-violet">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/photos/ashu.jpeg"
                  alt="Ashujit Kumar"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-[0.32em] text-blue-200">
              Founder & Creative Lead
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-6xl">
              One team for your brand&apos;s content, creative, and online presence.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              We keep your creative work connected—from the first story and visual identity to social content, campaigns, and a website that represents the business well.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {founderHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="glass-panel rounded-[1.6rem] p-5 shadow-glow"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blueGlow/20 text-blue-100">
                    <BadgeCheck size={18} />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-200">
                    {highlight}
                  </p>
                </div>
              ))}
              <div className="glass-panel rounded-[1.6rem] p-5 shadow-glow">
                <p className="text-xs uppercase tracking-[0.28em] text-violet-200">
                  Client Fit
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-100">
                  Built for local businesses, founders, and growing brands that want a practical creative partner.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-18 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-blue-200">
              Services Showcase
            </p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold md:text-6xl">
              Creative services designed around your business goals.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300">
            From content making to a complete website, select the services that make the strongest difference for your brand.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className={`glass-panel group rounded-[2rem] p-6 shadow-glow transition hover:border-blue-200/20 hover:bg-white/10 ${service.className ?? ""}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.32em] text-blue-200">
                    {service.eyebrow}
                  </p>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-hover:text-blue-100">
                    <Icon size={18} />
                  </div>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold text-white md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 md:text-base">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-18 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-[2.4rem] p-7 shadow-violet md:p-8"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-violet-200">
              How We Work
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Tell us your goal. We&apos;ll help build the right mix.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Combine any of our services to create a tailored package for content, branding, marketing, or your digital presence.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {processSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="glass-panel flex flex-col gap-5 rounded-[1.8rem] p-5 shadow-glow md:flex-row md:items-start md:justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-blue-100">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                        Step {item.step}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-18 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-violet-200">
            Portfolio
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold md:text-6xl">
            Real production glimpses that keep the site visually alive.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <HoverPreviewCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-18 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-[2.4rem] p-7 shadow-glow md:p-10"
        >
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-blue-200">
                Packages
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                Customize your business goals.
              </h2>
            </div>
            <div className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
              <Rocket size={14} />
              Choose at least two options
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {packages.map((item, index) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4 rounded-[1.35rem] border border-white/10 bg-black/20 px-5 py-4"
              >
                <p className="text-sm font-medium text-slate-100 sm:text-base">
                  <span className="mr-2 text-blue-200">{String(index + 1).padStart(2, "0")}.</span>
                  {item.title}
                </p>
                <p className="whitespace-nowrap font-display text-lg font-semibold text-white">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            Social media marketing includes strategy, management, engagement, and ad campaigns. Ad shooting is available for high-quality video ads and cinematic shoots.
          </p>
        </motion.div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden px-6 pb-14 pt-16 md:px-10 md:pb-16 md:pt-20 lg:px-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,123,255,0.16),transparent_24%),radial-gradient(circle_at_right,rgba(143,93,255,0.12),transparent_30%)]" />
        <div className="glass-panel relative mx-auto max-w-7xl rounded-[2.8rem] p-8 shadow-glow md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-blue-200">
                Contact
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-white sm:text-6xl">
                Ready to create something your audience will remember?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Reach out for content, creative design, social media marketing, ad shoots, Google Business profiling, or a new website.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel flex items-center justify-between rounded-[1.5rem] px-5 py-4 text-white transition hover:border-green-300/30 hover:bg-black/30"
                >
                  <span className="inline-flex items-center gap-3 text-lg">
                    <MessageCircle size={20} />
                    WhatsApp: +91 79050 40341
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href={emailUrl}
                  className="glass-panel flex items-center justify-between rounded-[1.5rem] px-5 py-4 text-white transition hover:border-blue-300/30 hover:bg-black/30"
                >
                  <span className="inline-flex items-center gap-3 text-base sm:text-lg">
                    <Mail size={20} />
                    adwings0007@gmail.com
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 text-sm leading-6 text-slate-300">
                  <p>Shri Ram Plaza, Bank More, Dhanbad, Jharkhand – 826001</p>
                  <p className="mt-1">Kunwar Singh Colony, Chas, Bokaro, Jharkhand – 827013</p>
                  <p className="mt-1 text-white">Also call: +91 87973 74000</p>
                </div>
              </div>
            </div>

            <form
              className="grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");
                const subject = encodeURIComponent(`Adwings inquiry from ${name}`);
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
                );

                window.location.href = `${emailUrl}?subject=${subject}&body=${body}`;
              }}
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="glass-input rounded-[1.3rem] px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-300/40"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="glass-input rounded-[1.3rem] px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-300/40"
              />
              <textarea
                name="message"
                required
                placeholder="Tell us about the campaign, website, or brand work you need"
                rows={5}
                className="glass-input rounded-[1.3rem] px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-300/40"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-slateNight transition hover:scale-[1.01]"
              >
                Send Inquiry
                <Send size={16} />
              </button>
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                Crafted by Adwings Technical Team.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
