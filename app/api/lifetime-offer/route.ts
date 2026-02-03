import { NextRequest, NextResponse } from 'next/server';
import { resend, LIFETIME_AUDIENCE_ID } from '@/lib/resend';
import { LifetimeOfferFormData, ApiResponse } from '@/lib/types';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: LifetimeOfferFormData = await request.json();
    const { email, name } = body;

    // Validation
    if (!email) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Email is required',
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Invalid email address',
        },
        { status: 400 }
      );
    }

    // Add contact to Resend Audience
    const audienceResponse = await resend.contacts.create({
      email,
      audienceId: LIFETIME_AUDIENCE_ID,
      firstName: name || email.split('@')[0],
      unsubscribed: false,
    });

    if (audienceResponse.error) {
      console.error('Resend Audience API Error:', audienceResponse.error);
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Failed to register interest. Please try again.',
        },
        { status: 500 }
      );
    }

    // Send confirmation email
    const emailResponse = await resend.emails.send({
      from: 'Ayahfinder <noreply@getayahfinder.com>',
      to: email,
      subject: '$20 Lifetime Access - You\'re on the List!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #2c3e50; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2d5f3f 0%, #4a9d6d 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f4f6f8; padding: 30px; border-radius: 0 0 8px 8px; }
              .highlight { background: #fff; border-left: 4px solid #2d5f3f; padding: 15px; margin: 20px 0; border-radius: 4px; }
              .footer { text-align: center; color: #95a5a6; font-size: 12px; margin-top: 30px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 You're In!</h1>
              </div>
              <div class="content">
                <p>Hi${name ? ' ' + name : ''},</p>
                <p>Thank you for your interest in our <strong>$20 Lifetime Access</strong> offer!</p>
                <div class="highlight">
                  <h3>What's Included:</h3>
                  <ul>
                    <li>✅ Lifetime access to Ayahfinder</li>
                    <li>✅ Priority support</li>
                    <li>✅ Access to all upcoming features</li>
                    <li>✅ No recurring fees, ever!</li>
                  </ul>
                </div>
                <p>We'll send you an exclusive link to claim your lifetime offer as soon as we're ready to launch. This is a limited-time offer for early supporters like you!</p>
                <p><strong>What happens next:</strong></p>
                <ol>
                  <li>We'll notify you when the offer goes live</li>
                  <li>You'll receive a unique link to purchase</li>
                  <li>Lock in your $20 lifetime price before it increases</li>
                </ol>
                <p>Stay tuned!</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Ayahfinder. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      console.error('Resend Email API Error:', emailResponse.error);
      return NextResponse.json<ApiResponse>(
        {
          success: true,
          message: 'Interest registered, but confirmation email failed to send',
        },
        { status: 200 }
      );
    }

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: 'Interest registered successfully!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lifetime Offer API Error:', error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
