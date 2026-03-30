import PayPalCheckout from "./paypal-checkout";

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
      id: string;
      name: string;
      price: string;
      amount: string;
      ram: string;
      players: string;
      storage: string;
    }
  > = {
    grass: {
      id: "grass",
      name: "Grass",
      price: "£3.99/mo",
      amount: "3.99",
      ram: "2 GB RAM",
      players: "Up to 8 players",
      storage: "50 GB NVMe SSD",
    },
    stone: {
      id: "stone",
      name: "Stone",
      price: "£6.99/mo",
      amount: "6.99",
      ram: "4 GB RAM",
      players: "Up to 16 players",
      storage: "100 GB NVMe SSD",
    },
    redstone: {
      id: "redstone",
      name: "Redstone",
      price: "£9.99/mo",
      amount: "9.99",
      ram: "6 GB RAM",
      players: "Up to 24 players",
      storage: "140 GB NVMe SSD",
    },
    diamond: {
      id: "diamond",
      name: "Diamond",
      price: "£13.99/mo",
      amount: "13.99",
      ram: "8 GB RAM",
      players: "Up to 40 players",
      storage: "180 GB NVMe SSD",
    },
    netherite: {
      id: "netherite",
      name: "Netherite",
      price: "£19.99/mo",
      amount: "19.99",
      ram: "12 GB RAM",
      players: "Up to 70 players",
      storage: "250 GB NVMe SSD",
    },
  };

  const plan = plans[selectedPlan] || plans.grass;

  return (
    <main
      className="min-h-screen text-slate-900"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #bfdbfe 50%, #fda4af 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <a
          href="/"
          className="inline-flex items-center rounded-xl border border-white/70 bg-white/55 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur-xl transition hover:bg-white/70"
        >
          ← Back to homepage
        </a>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/50 p-8 shadow-xl backdrop-blur-xl">
            <div className="inline-block rounded-full border border-white/70 bg-white/55 px-4 py-1 text-sm text-slate-700 shadow-sm">
              Complete your order
            </div>

            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
              Buy your Minecraft server
            </h1>

            <p className="mt-4 text-slate-700">
              You selected the <span className="font-semibold">{plan.name}</span>{" "}
              plan.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/70 bg-white/55 p-4">
                <div className="text-sm text-slate-600">Selected plan</div>
                <div className="mt-1 text-lg font-semibold">{plan.name}</div>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/55 p-4">
                <div className="text-sm text-slate-600">Monthly price</div>
                <div className="mt-1 text-lg font-semibold">{plan.price}</div>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-slate-900 outline-none backdrop-blur transition focus:border-slate-300"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-slate-900 outline-none backdrop-blur transition focus:border-slate-300"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-700">
                  Server Name
                </label>
                <input
                  type="text"
                  placeholder="My Survival Server"
                  className="w-full rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-slate-900 outline-none backdrop-blur transition focus:border-slate-300"
                />
              </div>

              <div className="pt-2">
                <PayPalCheckout
                  planId={plan.id}
                  amount={plan.amount}
                  name={plan.name}
                />
              </div>
            </div>
          </div>

          <div className="h-fit rounded-[2rem] border border-white/70 bg-white/50 p-8 shadow-xl backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-600">
              Order Summary
            </div>

            <h2 className="mt-4 text-3xl font-bold">{plan.name}</h2>
            <div className="mt-3 text-5xl font-bold">{plan.price}</div>

            <div className="mt-8 space-y-4 text-slate-800">
              <div className="rounded-2xl border border-white/70 bg-white/55 p-4">
                <div className="text-sm text-slate-600">RAM</div>
                <div className="mt-1 text-lg font-semibold">{plan.ram}</div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/55 p-4">
                <div className="text-sm text-slate-600">Players</div>
                <div className="mt-1 text-lg font-semibold">{plan.players}</div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/55 p-4">
                <div className="text-sm text-slate-600">Storage</div>
                <div className="mt-1 text-lg font-semibold">{plan.storage}</div>
              </div>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              <li>• Instant deployment</li>
              <li>• DDoS protection included</li>
              <li>• Automatic backups</li>
              <li>• Full file and console access</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}