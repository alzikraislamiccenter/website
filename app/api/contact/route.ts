import { NextResponse, type NextRequest } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max + 1) : "";

export async function POST(request: NextRequest) {
  if (!request.headers.get("content-type")?.includes("application/json")) return NextResponse.json({ message: "Invalid request." }, { status: 415 });
  if (Number(request.headers.get("content-length") || 0) > 12000) return NextResponse.json({ message: "Message is too large." }, { status: 413 });
  const origin = request.headers.get("origin");
  if (origin) {
    try { if (new URL(origin).host !== request.nextUrl.host) return NextResponse.json({ message: "Invalid request origin." }, { status: 403 }); }
    catch { return NextResponse.json({ message: "Invalid request origin." }, { status: 403 }); }
  }
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  if (body.website) return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const subject = clean(body.subject, 160);
  const message = clean(body.message, 5000);
  if (!name || name.length > 100 || !emailPattern.test(email) || email.length > 254 || !subject || subject.length > 160 || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });
  }
  return NextResponse.json(
    { message: "Enquiries are temporarily unavailable. Please try again later." },
    { status: 503 },
  );
}
