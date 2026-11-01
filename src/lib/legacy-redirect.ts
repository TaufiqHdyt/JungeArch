export function legacyRedirect(destination: string, label: string): Response {
  const base = import.meta.env.BASE_URL === "/" ? "/" : `${import.meta.env.BASE_URL}/`;
  const target = `${base}${destination.replace(/^\//, "")}`;
  const safeTarget = JSON.stringify(target).slice(1, -1);
  const safeLabel = label.replace(/[<>&"]/g, "");

  return new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${safeTarget}"><link rel="canonical" href="${safeTarget}"><title>Redirecting — Junge Architekt</title></head><body><p>Redirecting to <a href="${safeTarget}">${safeLabel}</a>…</p></body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}
