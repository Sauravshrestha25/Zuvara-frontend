import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="min-h-screen grid place-items-center bg-[#f6efdc] px-6">
      <div className="rounded-3xl border border-[#eadfca] bg-white px-8 py-10 text-center">
        <h1 className="text-2xl font-semibold text-[#41355f]">Product not found</h1>
        <p className="mt-2 text-zinc-600">Please check the URL and try again.</p>
        <Link
          href="/babyCareProduct"
          className="mt-6 inline-flex rounded-full bg-[#41355f] px-5 py-2 text-sm font-semibold text-white"
        >
          Explore gentle care
        </Link>
      </div>
    </main>
  );
}
