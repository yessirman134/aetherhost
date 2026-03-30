export default function Page() {
  const plans = [
    {
      id: "grass",
      name: "Grass",
      ram: "2 GB RAM",
      players: "Up to 8 players",
      storage: "50 GB NVMe SSD",
      price: "£3.99/mo",
    },
    {
      id: "stone",
      name: "Stone",
      ram: "4 GB RAM",
      players: "Up to 16 players",
      storage: "100 GB NVMe SSD",
      price: "£6.99/mo",
      featured: true,
    },
    {
      id: "redstone",
      name: "Redstone",
      ram: "6 GB RAM",
      players: "Up to 24 players",
      storage: "140 GB NVMe SSD",
      price: "£9.99/mo",
    },
    {
      id: "diamond",
      name: "Diamond",
      ram: "8 GB RAM",
      players: "Up to 40 players",
      storage: "180 GB NVMe SSD",
      price: "£13.99/mo",
    },
    {
      id: "netherite",
      name: "Netherite",
      ram: "12 GB RAM",
      players: "Up to 70 players",
      storage: "250 GB NVMe SSD",
      price: "£19.99/mo",
    },
  ];

  const features = [
    {
      title: "Instant setup",
      desc: "Launch your server fast and get online in minutes.",
      icon: "⚡",
    },
    {
      title: "DDoS protection",
      desc: "Built-in protection helps keep your server stable.",
      icon: "🛡️",
    },
    {
      title: "Modpack support",
      desc: "Run Forge, Fabric, Paper, Purpur, and more.",
      icon: "🧩",
    },
    {
      title: "Fast NVMe storage",
      desc: "Better loading speed for worlds, plugins, and backups.",
      icon: "💾",
    },
    {
      title: "Global locations",
      desc: "Choose a region closer to your players for lower ping.",
      icon: "🌍",
    },
    {
      title: "Full control panel",
      desc: "Manage files, versions, console, and backups easily.",
      icon: "🖥️",
    },
  ];

  const stats = [
    { value: "1,284+", label: "Servers launched" },
    { value: "99.9%", label: "Uptime target" },
    { value: "< 5 min", label: "Average setup time" },
    { value: "24/7", label: "Support coverage" },
  ];

  const reasons = [
    {
      title: "Built to look premium",
      desc: "AetherHost is designed to feel sharper, cleaner, and more trustworthy than a generic hosting template.",
    },
    {
      title: "Made for real growth",
      desc: "Start small, then upgrade as your player count, world size, and plugins grow.",
    },
    {
      title: "Focused on what matters",
      desc: "Clear pricing, strong performance, easy controls, and a simpler buying experience from start to finish.",
    },
  ];

  const faqs = [
    {
      q: "Why choose AetherHost?",
      a: "AetherHost focuses on the things players actually care about: performance, cleaner design, simple controls, and clear pricing.",
    },
    {
      q: "Can I run modded Minecraft?",
      a: "Yes. You can use Forge, Fabric, Paper, Purpur, and many popular setups.",
    },
    {
      q: "Can I upgrade later?",
      a: "Yes. You can start with a smaller plan and move up whenever your server grows.",
    },
    {
      q: "Are backups included?",
      a: "Yes. Backups are included to help protect your worlds and player data.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060816] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute right-0 top-24 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-400 to-fuchsia-400 text-lg font-black text-white shadow-[0_0_30px_rgba(59,130,246,0.45)]">
              A
            </div>
            <div>
              <div className="text-lg font-bold leading-none">AetherHost</div>
              <div className="text-xs text-slate-400">Minecraft Hosting</div>
            </div>
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#why" className="transition hover:text-white">Why Aether</a>
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#plans" className="transition hover:text-white">Plans</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </div>

          <a
            href="#plans"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_22px_rgba(59,130,246,0.35)] transition hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-block rounded-full border border-cyan-400/20 bg-white/5 px-4 py-1 text-sm text-cyan-300 backdrop-blur">
              Premium hosting. Stronger performance. Better first impression.
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
              Launch a Minecraft server that looks as good as it performs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              AetherHost gives you cleaner design, fast setup, easy upgrades, and
              a premium hosting experience built for SMPs, survival worlds, modded
              servers, and growing communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#plans"
                className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] transition hover:scale-105"
              >
                View Plans
              </a>
              <a
                href="#why"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Why Choose Aether
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                From £3.99/mo
              </span>
              <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                Instant setup
              </span>
              <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                Easy upgrades
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
                alt="Gaming setup"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <div className="text-sm text-slate-400">Better performance</div>
                <div className="mt-2 text-2xl font-bold">Smooth gameplay</div>
                <p className="mt-2 text-slate-300">
                  Cleaner, faster, and more stable gameplay for every player.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(96,165,250,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
                alt="Hosting dashboard"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <div className="text-sm text-cyan-300">Cleaner management</div>
                <div className="mt-2 text-2xl font-bold">Simple control panel</div>
                <p className="mt-2 text-slate-300">
                  Restart, edit files, switch versions, and manage everything easily.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl sm:col-span-2">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <div className="text-sm text-slate-400">Starting price</div>
                  <div className="mt-2 text-4xl font-bold">£3.99</div>
                  <div className="text-slate-400">monthly</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Best for</div>
                  <div className="mt-2 text-xl font-semibold">SMP, Survival, Modded</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Upgrade path</div>
                  <div className="mt-2 text-xl font-semibold">Easy to scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur-xl"
            >
              <div className="text-3xl font-bold text-cyan-300">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Why use AetherHost?</h2>
          <p className="mt-4 text-lg text-slate-300">
            AetherHost is designed to feel sharper, darker, and more premium while
            still being easy to use and affordable to start with.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-xl transition hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Everything you need for a better server</h2>
          <p className="mt-4 text-lg text-slate-300">
            Powerful features, premium visuals, and the tools players expect from
            a serious hosting brand.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-slate-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Better first impression
            </div>
            <h2 className="mt-4 text-4xl font-bold">Hosting should feel polished</h2>
            <p className="mt-4 text-slate-300">
              A strong website and clean buying experience helps users feel more
              confident. AetherHost is made to feel modern, welcoming, and easier
              to trust from the first click.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Clear plan choices</li>
              <li>• Simple design without clutter</li>
              <li>• More premium visual feel</li>
              <li>• Straight path from homepage to checkout</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Built to grow
            </div>
            <h2 className="mt-4 text-4xl font-bold">Start small, upgrade later</h2>
            <p className="mt-4 text-slate-300">
              Not every server needs a large plan on day one. AetherHost gives
              users affordable entry options while still making it easy to upgrade
              as the world, player count, and plugin load grows.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Lower-cost starter options</li>
              <li>• Strong mid-range plans</li>
              <li>• Bigger packages for large servers</li>
              <li>• A structure that makes scaling easier</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Choose the plan that fits your server</h2>
          <p className="mt-4 text-lg text-slate-300">
            Start small or go bigger straight away. AetherHost gives you flexible
            options without making the choice confusing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[2rem] border p-6 transition hover:-translate-y-1 ${
                plan.featured
                  ? "border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 shadow-[0_0_35px_rgba(34,211,238,0.14)] backdrop-blur-xl"
                  : "border-white/10 bg-white/5 shadow-sm backdrop-blur-xl"
              }`}
            >
              {plan.featured && (
                <div className="mb-4 inline-block rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-300">
                  Most Popular
                </div>
              )}

              <div className="text-sm text-slate-400">{plan.name}</div>
              <div className="mt-2 text-5xl font-bold">{plan.price}</div>
              <div className="mt-5 text-2xl font-semibold">{plan.ram}</div>
              <div className="mt-2 text-slate-300">{plan.players}</div>
              <div className="mt-1 text-slate-400">{plan.storage}</div>

              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                <li>• Instant deployment</li>
                <li>• DDoS protection included</li>
                <li>• Automatic backups</li>
                <li>• Full file and console access</li>
              </ul>

              <a
                href={`/checkout?plan=${plan.id}`}
                className="mt-8 block w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-center font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.25)] transition hover:scale-[1.02]"
              >
                Buy {plan.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-slate-300">
            Answers to the things people usually want to know before they buy.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-2 text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-white/5 via-cyan-500/10 to-blue-500/10 px-8 py-14 text-center shadow-[0_0_40px_rgba(59,130,246,0.14)] backdrop-blur-xl">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Ready to host with AetherHost?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Pick a plan, launch your server, and start with a hosting brand that
            feels darker, sharper, and much more premium.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#plans"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.25)] transition hover:scale-105"
            >
              View Plans
            </a>
            <a
              href="#why"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Why AetherHost
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
