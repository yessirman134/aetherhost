export default function Page() {
  const plans = [
    {
      id: "grass",
      name: "Grass",
      ram: "2 GB RAM",
      players: "Up to 8 players",
      storage: "50 GB NVMe SSD",
      price: "£3.99/mo",
      paymentLink: "https://buy.stripe.com/REPLACE_GRASS",
    },
    {
      id: "stone",
      name: "Stone",
      ram: "4 GB RAM",
      players: "Up to 16 players",
      storage: "100 GB NVMe SSD",
      price: "£6.99/mo",
      featured: true,
      paymentLink: "https://buy.stripe.com/REPLACE_STONE",
    },
    {
      id: "redstone",
      name: "Redstone",
      ram: "6 GB RAM",
      players: "Up to 24 players",
      storage: "140 GB NVMe SSD",
      price: "£9.99/mo",
      paymentLink: "https://buy.stripe.com/REPLACE_REDSTONE",
    },
    {
      id: "diamond",
      name: "Diamond",
      ram: "8 GB RAM",
      players: "Up to 40 players",
      storage: "180 GB NVMe SSD",
      price: "£13.99/mo",
      paymentLink: "https://buy.stripe.com/REPLACE_DIAMOND",
    },
    {
      id: "netherite",
      name: "Netherite",
      ram: "12 GB RAM",
      players: "Up to 70 players",
      storage: "250 GB NVMe SSD",
      price: "£19.99/mo",
      paymentLink: "https://buy.stripe.com/REPLACE_NETHERITE",
    },
  ];

  const features = [
    {
      title: "Instant setup",
      desc: "Launch your server quickly and get online without waiting around.",
      icon: "⚡",
    },
    {
      title: "DDoS protection",
      desc: "Built-in protection helps keep your server online and stable.",
      icon: "🛡️",
    },
    {
      title: "Version support",
      desc: "Run Paper, Purpur, Forge, Fabric, and more with less hassle.",
      icon: "🧩",
    },
    {
      title: "Fast storage",
      desc: "Worlds, plugins, and backups load faster with NVMe SSD storage.",
      icon: "💾",
    },
    {
      title: "Global locations",
      desc: "Choose a region closer to your players for lower ping.",
      icon: "🌍",
    },
    {
      title: "Full control panel",
      desc: "Manage files, console, restarts, backups, and settings easily.",
      icon: "🖥️",
    },
  ];

  const reasons = [
    {
      title: "Cleaner and easier to trust",
      desc: "AetherHost is built to feel simple, polished, and easy to understand. Instead of clutter, it focuses on clear pricing, a better layout, and a smoother experience.",
    },
    {
      title: "Made for growing communities",
      desc: "Start small with a lower-cost plan, then scale up as your player base, worlds, and plugins grow. It works for both friend groups and bigger servers.",
    },
    {
      title: "Better value for players",
      desc: "AetherHost aims to give people the mix they actually want: good performance, simple controls, fair prices, and a more premium-looking brand.",
    },
  ];

  const stats = [
    { value: "1,284+", label: "Servers launched" },
    { value: "99.9%", label: "Uptime target" },
    { value: "< 5 min", label: "Average setup time" },
    { value: "24/7", label: "Support coverage" },
  ];

  const faqs = [
    {
      q: "Why choose AetherHost?",
      a: "AetherHost focuses on what Minecraft players actually care about: clear pricing, strong performance, simpler controls, and a cleaner overall experience.",
    },
    {
      q: "Can I run modded Minecraft?",
      a: "Yes. You can use Forge, Fabric, Paper, Purpur, and many popular setups.",
    },
    {
      q: "Can I upgrade later?",
      a: "Yes. You can start on a smaller plan and move up whenever your server grows.",
    },
    {
      q: "Are backups included?",
      a: "Yes. Backups are included to help protect your worlds and player data.",
    },
  ];

  return (
    <main
      className="min-h-screen text-slate-900"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #bfdbfe 50%, #fda4af 100%)",
      }}
    >
      <nav className="sticky top-0 z-50 border-b border-white/50 bg-white/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-400 to-rose-300 text-lg font-black text-white shadow-lg">
              A
            </div>
            <div>
              <div className="text-lg font-bold leading-none">AetherHost</div>
              <div className="text-xs text-slate-600">Minecraft Hosting</div>
            </div>
          </a>

          <div className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#why" className="hover:text-slate-950">Why Aether</a>
            <a href="#features" className="hover:text-slate-950">Features</a>
            <a href="#plans" className="hover:text-slate-950">Plans</a>
            <a href="#faq" className="hover:text-slate-950">FAQ</a>
          </div>

          <a
            href="#plans"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get Started
          </a>
        </div>
      </nav>

      <section id="top">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-block rounded-full border border-white/70 bg-white/55 px-4 py-1 text-sm text-slate-700 shadow-sm backdrop-blur">
              Cleaner hosting. Better performance. Fair pricing.
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
              Minecraft hosting that feels modern, premium, and easy to trust.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-700">
              AetherHost is built for players and communities who want reliable
              hosting without confusing dashboards or messy pricing. Get smooth
              performance, a clean control panel, flexible upgrades, and a better
              experience from homepage to checkout.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#plans"
                className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                View Plans
              </a>
              <a
                href="#why"
                className="rounded-2xl border border-white/70 bg-white/55 px-6 py-3 font-semibold text-slate-900 backdrop-blur transition hover:bg-white/70"
              >
                Why Choose Aether
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-xl border border-white/70 bg-white/55 px-3 py-2 shadow-sm backdrop-blur">
                From £3.99/mo
              </span>
              <span className="rounded-xl border border-white/70 bg-white/55 px-3 py-2 shadow-sm backdrop-blur">
                Instant setup
              </span>
              <span className="rounded-xl border border-white/70 bg-white/55 px-3 py-2 shadow-sm backdrop-blur">
                Easy upgrades
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/50 shadow-xl backdrop-blur-xl transition hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
                alt="Gaming setup"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <div className="text-sm text-slate-600">Better performance</div>
                <div className="mt-2 text-2xl font-bold">Smooth gameplay</div>
                <p className="mt-2 text-slate-700">
                  Give players a cleaner, faster, and more stable server experience.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/50 shadow-xl backdrop-blur-xl transition hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
                alt="Hosting dashboard"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <div className="text-sm text-slate-600">Cleaner management</div>
                <div className="mt-2 text-2xl font-bold">Simple control panel</div>
                <p className="mt-2 text-slate-700">
                  Restart, edit files, switch versions, and manage everything easily.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/70 bg-white/50 p-6 shadow-xl backdrop-blur-xl sm:col-span-2">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <div className="text-sm text-slate-600">Starting price</div>
                  <div className="mt-2 text-4xl font-bold">£3.99</div>
                  <div className="text-slate-600">monthly</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Best for</div>
                  <div className="mt-2 text-xl font-semibold">SMP, Survival, Modded</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Upgrade path</div>
                  <div className="mt-2 text-xl font-semibold">Easy to scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/70 bg-white/45 p-6 text-center shadow-sm backdrop-blur-xl"
            >
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Why use AetherHost?</h2>
          <p className="mt-4 text-lg text-slate-700">
            AetherHost is designed to feel cleaner and more professional while
            still being affordable. It focuses on the things server owners
            actually care about: speed, simplicity, flexibility, and trust.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/70 bg-white/45 p-8 shadow-sm backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Everything you need for a better server</h2>
          <p className="mt-4 text-lg text-slate-700">
            AetherHost keeps the hosting experience simple while still giving
            users the tools they expect from a serious server host.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/70 bg-white/45 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-slate-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/70 bg-white/45 p-8 shadow-sm backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-600">
              Better first impression
            </div>
            <h2 className="mt-4 text-4xl font-bold">Hosting should feel polished</h2>
            <p className="mt-4 text-slate-700">
              A strong website and clean buying experience helps users feel more
              confident. AetherHost is made to feel modern, welcoming, and easier
              to trust from the first click.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Clear plan choices</li>
              <li>• Simple design without clutter</li>
              <li>• More premium visual feel</li>
              <li>• Straight path from homepage to checkout</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/45 p-8 shadow-sm backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-600">
              Built to grow
            </div>
            <h2 className="mt-4 text-4xl font-bold">Start small, upgrade later</h2>
            <p className="mt-4 text-slate-700">
              Not every server needs a large plan on day one. AetherHost gives
              users affordable entry options while still making it easy to upgrade
              as the world, player count, and plugin load grows.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Lower-cost starter options</li>
              <li>• Strong mid-range plans</li>
              <li>• Bigger packages for large servers</li>
              <li>• A structure that makes scaling easier</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Choose the plan that fits your server</h2>
          <p className="mt-4 text-lg text-slate-700">
            Start with something small or choose a stronger plan right away.
            AetherHost gives you flexibility without making the options confusing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[2rem] border p-6 transition hover:-translate-y-1 ${
                plan.featured
                  ? "border-sky-200 bg-white/65 shadow-lg backdrop-blur-xl"
                  : "border-white/70 bg-white/45 shadow-sm backdrop-blur-xl"
              }`}
            >
              {plan.featured && (
                <div className="mb-4 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800">
                  Most Popular
                </div>
              )}

              <div className="text-sm text-slate-600">{plan.name}</div>
              <div className="mt-2 text-5xl font-bold">{plan.price}</div>
              <div className="mt-5 text-2xl font-semibold">{plan.ram}</div>
              <div className="mt-2 text-slate-700">{plan.players}</div>
              <div className="mt-1 text-slate-600">{plan.storage}</div>

              <ul className="mt-8 space-y-3 text-sm text-slate-700">
                <li>• Instant deployment</li>
                <li>• DDoS protection included</li>
                <li>• Automatic backups</li>
                <li>• Full file and console access</li>
              </ul>

              <a
                href={`/checkout?plan=${plan.id}`}
                className="mt-8 block w-full rounded-2xl bg-slate-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
              >
                Buy {plan.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-slate-700">
            Answers to the things people usually want to know before they buy.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-3xl border border-white/70 bg-white/45 p-6 shadow-sm backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] border border-white/70 bg-white/50 px-8 py-14 text-center shadow-xl backdrop-blur-xl">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Ready to host with AetherHost?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-700">
            Pick a plan, launch your server, and start with a hosting brand that
            feels cleaner, brighter, and easier to trust.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#plans"
              className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              View Plans
            </a>
            <a
              href="#why"
              className="rounded-2xl border border-white/70 bg-white/55 px-6 py-3 font-semibold text-slate-900 backdrop-blur transition hover:bg-white/70"
            >
              Why AetherHost
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}