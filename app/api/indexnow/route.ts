import { NextResponse } from "next/server";

const INDEXNOW_KEY = "ae39f19cc3994d868c195925e4469aa4";

export async function POST(req: Request) {
  try {
    const { urls } = await req.json();

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const body = {
      host: "t4atlas.com",
      key: INDEXNOW_KEY,
      keyLocation: "https://t4atlas.com/ae39f19cc3994d868c195925e4469aa4.txt",
      urlList: urls,
    };

    await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}