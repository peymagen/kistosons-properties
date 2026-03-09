import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface QueryData {
  name: string;
  email: string;
  phone: string;
  property_type: string;
  location: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const data: QueryData = await req.json();

    const emailContent = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">

          <div style="background: linear-gradient(to right, #dc2626, #b91c1c); color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">New Property Query Received</h2>
          </div>

          <div style="padding: 20px;">
            <h3 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">Customer Details</h3>

            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>

            <h3 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px; margin-top: 20px;">Property Interest</h3>

            <p><strong>Property Type:</strong> ${data.property_type}</p>
            <p><strong>Location:</strong> ${data.location}</p>

            <h3 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px; margin-top: 20px;">Message</h3>

            <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #dc2626; border-radius: 4px;">
              ${data.message || 'No message provided'}
            </p>

            <div style="background-color: #f0f0f0; padding: 15px; margin-top: 20px; border-radius: 4px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                This is an automated email from Kisto Associates Property Portal.
                <br>Please contact the customer within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "noreply@kistoassociates.com",
        to: "Kistosons@gmail.com",
        reply_to: data.email,
        subject: `New Property Query - ${data.property_type} in ${data.location}`,
        html: emailContent,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});