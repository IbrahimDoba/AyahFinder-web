import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

// Audience IDs
export const WAITLIST_AUDIENCE_ID = process.env.RESEND_WAITLIST_AUDIENCE_ID || '';
export const LIFETIME_AUDIENCE_ID = process.env.RESEND_LIFETIME_AUDIENCE_ID || '';
