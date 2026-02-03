import { NextRequest, NextResponse } from 'next/server';
import { resend, WAITLIST_AUDIENCE_ID } from '@/lib/resend';
import { WaitlistFormData, ApiResponse } from '@/lib/types';

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistFormData = await request.json();
    const { email, source, interest } = body;

    // Validation
    if (!email || !source || !interest) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Missing required fields: email, source, and interest are required',
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
      audienceId: WAITLIST_AUDIENCE_ID,
      firstName: email.split('@')[0], // Extract name from email as fallback
      unsubscribed: false,
    });

    if (audienceResponse.error) {
      console.error('Resend Audience API Error:', audienceResponse.error);
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Failed to add to waitlist. Please try again.',
        },
        { status: 500 }
      );
    }

    // Send confirmation email
    const emailResponse = await resend.emails.send({
      from: 'Ayahfinder <noreply@getayahfinder.com>',
      to: email,
      subject: "You're on the Ayahfinder Waitlist!",
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
              .button { display: inline-block; background: #2d5f3f; color: #ffffff !important; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
              .footer { text-align: center; color: #95a5a6; font-size: 12px; margin-top: 30px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to Ayahfinder!</h1>
              </div>
              <div class="content">
                <p>Thank you for joining our waitlist! We're excited to have you as part of our community.</p>
                <p><strong>What you told us:</strong></p>
                <ul>
                  <li><strong>How you heard about us:</strong> ${source}</li>
                  <li><strong>What interests you:</strong> ${interest}</li>
                </ul>
                <p>We're working hard to bring Ayahfinder to life. You'll be among the first to know when we launch!</p>
                <p>In the meantime, stay connected:</p>
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog" class="button" style="color: #ffffff !important;">Read Our Blog</a>
                <p>We'll keep you updated on our progress and notify you as soon as the app is ready.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Ayahfinder. All rights reserved.</p>
                <p>You're receiving this email because you signed up for the Ayahfinder waitlist.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      console.error('Resend Email API Error:', emailResponse.error);
      // Still return success since contact was added to audience
      return NextResponse.json<ApiResponse>(
        {
          success: true,
          message: 'Added to waitlist, but confirmation email failed to send',
        },
        { status: 200 }
      );
    }

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
