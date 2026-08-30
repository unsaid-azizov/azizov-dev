interface Env {
  GHL_WEBHOOK_URL: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const form = await context.request.formData();
  const value = (key: string) => String(form.get(key) ?? "").trim();
  const name = value("name");
  const email = value("email");
  const company = value("company");

  if (value("website")) return new Response("", { status: 204 });
  if (!name || !company || !emailPattern.test(email)) return new Response("Please complete the required fields.", { status: 400 });
  if (!context.env.GHL_WEBHOOK_URL) return new Response("Lead routing is not configured yet.", { status: 503 });

  const payload = {
    formType: value("formType") || "audit",
    name,
    email,
    company,
    challenge: value("challenge"),
    caseStudy: value("caseStudy"),
    sourcePage: new URL(context.request.url).pathname,
    submittedAt: new Date().toISOString(),
  };

  const response = await fetch(context.env.GHL_WEBHOOK_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) return new Response("Unable to send your request. Please try again or email said@azizovhq.com.", { status: 502 });
  return Response.redirect(new URL("/revenue-systems-audit/?submitted=1", context.request.url), 303);
};
