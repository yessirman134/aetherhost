export default function OrderSuccessPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const plan = searchParams?.plan || "grass";

  return (
    <main className="min-h-screen bg-[#060816] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-xl backdrop-blur-xl">
        <div className="text-5xl">✅</div>
        <h1 className="mt-4 text-4xl font-bold">Order Received</h1>
        <p className="mt-4 text-slate-300">
          Thanks for your order. Your selected plan was:
        </p>
        <p className="mt-2 text-2xl font-semibold capitalize text-cyan-300">
          {plan}
        </p>
        <p className="mt-6 text-slate-300">
          We will set up your server shortly and contact you with the details.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition hover:scale-[1.02]"
          >
            Back to Homepage
          </a>
          <a
            href="/checkout?plan=stone"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Make Another Order
          </a>
        </div>
      </div>
    </main>
  );
}
