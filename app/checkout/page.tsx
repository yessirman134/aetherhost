type SearchParams = Promise<{ plan?: string }>;

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const selectedPlan = params.plan || "grass";

  const plans: Record<
    string,
    {
      name: string;
      price: string;
      ram: string;
      players: string;
      storage: string;
    }
  > = {
    grass: {
      name: "Grass",
      price: "£3.99/mo",
      ram: "2 GB RAM",
      players: "Up to 8 players",
      storage: "50 GB NVMe SSD",
    },
    stone: {
      name: "Stone",
      price: "£6.99/mo",
      ram: "4 GB RAM",
      players: "Up to 16 players",
      storage: "100 GB NVMe SSD",
    },
    redstone: {
      name: "Redstone",
      price: "£9.99/mo",
      ram: "6 GB RAM",
      players: "Up to 24 players",
      storage: "140 GB NVMe SSD",
    },
    diamond: {
      name: "Diamond",
      price: "£13.99/mo",
      ram: "8 GB RAM",
      players: "Up to 40 players",
      storage: "180 GB NVMe SSD",
    },
    netherite: {
      name: "Netherite",
      price: "£19.99/mo",
      ram: "12 GB RAM",
      players: "Up to 70 players",
      storage: "250 GB NVMe SSD",
    },
  };

  const plan = plans[selectedPlan] || plans.grass;

  return (
    <main className="min-h-screen bg-[#0f172a] px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          ← Back to homepage
        </a>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
            <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
              Complete your order
            </div>

            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
              Buy your Minecraft server
            </h1>

            <p className="mt-4 text-slate-300">
              You selected the <span className="font-semibold text-white">{plan.name}</span> plan.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Server Name
                </label>
                <input
                  type="text"
                  placeholder="My Survival Server"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Proceed to Payment
              </button>
            </form>
          </div>

          <div className="h-fit rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Order Summary
            </div>

            <h2 className="mt-4 text-3xl font-bold">{plan.name}</h2>
            <div className="mt-3 text-5xl font-bold">{plan.price}</div>

            <div className="mt-8 space-y-4 text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm text-slate-400">RAM</div>
                <div className="mt-1 text-lg font-semibold">{plan.ram}</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm text-slate-400">Players</div>
                <div className="mt-1 text-lg font-semibold">{plan.players}</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm text-slate-400">Storage</div>
                <div className="mt-1 text-lg font-semibold">{plan.storage}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
