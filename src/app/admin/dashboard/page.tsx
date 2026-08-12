import { getAdminData, logout } from "../actions";

export const dynamic = "force-dynamic";

interface Row { id: number; name: string; email: string; created_at: string; [k: string]: unknown }

function Table({ title, rows, extra }: { title: string; rows: Row[]; extra: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold">{title} <span className="font-body text-sm opacity-60">({rows.length})</span></h2>
      <div className="mt-3 overflow-x-auto border border-ink/15 bg-ivory">
        <table className="w-full text-left text-sm">
          <thead className="bg-sand text-xs uppercase tracking-wider">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              {extra.map((e) => <th key={e} className="p-3 capitalize">{e.replace("_", " ")}</th>)}
              <th className="p-3">Received</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr><td className="p-3 opacity-60" colSpan={3 + extra.length}>No submissions yet.</td></tr>
            )}
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-ink/10">
                <td className="p-3 font-semibold">{r.name}</td>
                <td className="p-3">{r.email}</td>
                {extra.map((e) => <td key={e} className="p-3">{String(r[e] ?? "—")}</td>)}
                <td className="p-3">{new Date(r.created_at).toLocaleDateString("en-GB")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default async function DashboardPage() {
  const [community, partners, applications] = await Promise.all([
    getAdminData("/community/join"),
    getAdminData("/partners/enquiries"),
    getAdminData("/team-applications"),
  ]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">BNN Admin</p>
          <h1 className="text-3xl font-bold">Submissions dashboard</h1>
        </div>
        <form action={logout}>
          <button className="inline-flex items-center gap-2 rounded-full border-2 border-current px-6 py-[0.8rem] text-[0.95rem] font-bold transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">Sign out</button>
        </form>
      </div>
      <Table title="Community applications" rows={community} extra={["sector", "country"]} />
      <Table title="Partnership enquiries" rows={partners} extra={["organisation", "partnership_type"]} />
      <Table title="Team applications" rows={applications} extra={["profession", "area_of_interest"]} />
      <p className="mt-8 text-sm opacity-60">
        Content editing (events, team, media, roadmap, focus pages, donation details) is
        available through the API — see the backend Swagger docs at /api-docs.
      </p>
    </section>
  );
}
