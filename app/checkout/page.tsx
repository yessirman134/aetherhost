export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const selectedPlan = searchParams?.plan || "grass";

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
    <main className="min-h-screen bg-[#060816] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Checkout</h1>

        <div className="mt-6 rounded-2xl bg-white/5 p-6">
          <h2 className="text-2xl font-bold">{plan.name}</h2>
          <p className="text-xl">{plan.price}</p>
          <p>{plan.ram}</p>
          <p>{plan.players}</p>
          <p>{plan.storage}</p>

          <button
            onClick={() =>
              alert("✅ Order received! We will set up your server shortly.")
            }
            className="mt-6 w-full rounded-xl bg-blue-500 px-4 py-3 font-semibold"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </main>
  );
}
