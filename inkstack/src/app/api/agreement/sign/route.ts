import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      clientName,
      clientEmail,
      studioName,
      studioCity,
      studioState,
      paymentOption,
      clientSignature,
      providerSignature,
      signedAt,
    } = body;

    // Validate required fields
    if (!clientName || !clientEmail || !studioName || !clientSignature || !providerSignature) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const paymentText =
      paymentOption === "full"
        ? "$4,500.00 (Pay in Full — 10% discount)"
        : "$1,250.00/month × 4 ($5,000.00 total)";

    const signedDate = new Date(signedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    // Build email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a2e; color: #e0e0e0; padding: 32px; border-radius: 12px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h1 style="color: #00d4ff; margin: 0; font-size: 24px;">Tattoo Shop Accelerator</h1>
          <p style="color: #888; margin: 8px 0 0;">Service Agreement — Signed</p>
        </div>

        <div style="background: #252540; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
          <h2 style="color: #fff; font-size: 16px; margin: 0 0 12px;">Agreement Summary</h2>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="color: #888; padding: 4px 0;">Studio:</td><td style="color: #fff; padding: 4px 0;">${studioName}</td></tr>
            <tr><td style="color: #888; padding: 4px 0;">Client:</td><td style="color: #fff; padding: 4px 0;">${clientName}</td></tr>
            <tr><td style="color: #888; padding: 4px 0;">Location:</td><td style="color: #fff; padding: 4px 0;">${studioCity || "—"}, ${studioState || "—"}</td></tr>
            <tr><td style="color: #888; padding: 4px 0;">Payment:</td><td style="color: #fff; padding: 4px 0;">${paymentText}</td></tr>
            <tr><td style="color: #888; padding: 4px 0;">Monthly Hosting:</td><td style="color: #fff; padding: 4px 0;">$249.00/month after launch</td></tr>
            <tr><td style="color: #888; padding: 4px 0;">Signed:</td><td style="color: #fff; padding: 4px 0;">${signedDate}</td></tr>
          </table>
        </div>

        <div style="background: #252540; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
          <h2 style="color: #fff; font-size: 16px; margin: 0 0 12px;">Signatures</h2>
          <div style="display: flex; gap: 16px;">
            <div style="flex: 1;">
              <p style="color: #00d4ff; font-size: 12px; text-transform: uppercase; margin: 0 0 4px;">Provider</p>
              <p style="color: #fff; font-style: italic; font-family: Georgia, serif; font-size: 18px; margin: 0;">${providerSignature}</p>
            </div>
            <div style="flex: 1;">
              <p style="color: #00d4ff; font-size: 12px; text-transform: uppercase; margin: 0 0 4px;">Client</p>
              <p style="color: #fff; font-style: italic; font-family: Georgia, serif; font-size: 18px; margin: 0;">${clientSignature}</p>
            </div>
          </div>
        </div>

        <p style="color: #666; font-size: 12px; text-align: center; margin-top: 24px;">
          This is a confirmation of the digitally signed agreement between Tattoo Shop Accelerator and ${studioName}.
          The full terms of the agreement are available at tattooshopaccelerator.com/agreement.
          For questions, contact beto@betoparedes.com or call (208) 440-7609.
        </p>
      </div>
    `;

    // Try to send emails if RESEND_API_KEY is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const emails = [clientEmail, "beto@betoparedes.com"];

      for (const to of emails) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Tattoo Shop Accelerator <agreements@tattooshopaccelerator.com>",
            to,
            subject: `Service Agreement Signed — ${studioName}`,
            html: emailHtml,
          }),
        });
      }
    }

    // Log the agreement (console for now — integrate with Supabase/DB later)
    console.log("Agreement signed:", {
      studioName,
      clientName,
      clientEmail,
      studioCity,
      studioState,
      paymentOption,
      providerSignature,
      clientSignature,
      signedAt,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Agreement signing error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
