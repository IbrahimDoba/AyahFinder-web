# Waitlist & Lifetime Offer Implementation Guide

## Overview
This document outlines the implementation of two key features for Ayahfinder:
1. **Waitlist Form** - Replaces App Store buttons in Hero section
2. **Lifetime Offer Banner** - $20 lifetime access offer with dismissible banner

---

## Prerequisites

### 1. Resend Account Setup
Before starting implementation, complete these steps:

1. **Sign up for Resend**: https://resend.com
2. **Verify your domain**: getayahfinder.com
   - Add DNS records as instructed by Resend
   - Wait for verification (usually a few minutes)

3. **Create Two Audiences**:
   - Navigate to Audiences in Resend dashboard
   - Create "Waitlist" audience → Copy the Audience ID
   - Create "Lifetime Offer" audience → Copy the Audience ID

4. **Get API Key**:
   - Go to API Keys in Resend dashboard
   - Create new API key → Copy it

5. **Prepare Environment Variables**:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_WAITLIST_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   RESEND_LIFETIME_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   NEXT_PUBLIC_SITE_URL=https://getayahfinder.com
   ```

---

## Features Breakdown

### Feature 1: Waitlist Form

**Purpose**: Collect early user signups while the app is in development

**Location**: Hero section (replaces current App Store/Play Store buttons)

**Data Collected**:
- Email address (required)
- How did you hear about us? (dropdown)
- What interests you most? (textarea)

**User Flow**:
1. User visits homepage
2. Sees waitlist form in Hero section
3. Fills out email, source, and interest
4. Clicks "Join Waitlist"
5. Form validates and shows loading state
6. On success: Shows success message + confirmation email sent
7. On error: Shows error message

**Technical Flow**:
```
WaitlistForm Component (Client)
    ↓
POST /api/waitlist
    ↓
Validate input data
    ↓
Add contact to Resend "Waitlist" Audience
    ↓
Send confirmation email
    ↓
Return success/error response
    ↓
Show success screen or error message
```

---

### Feature 2: Lifetime Offer Banner

**Purpose**: Promote $20 lifetime access offer to early adopters

**Location**: Top of page (above navbar), visible on all pages

**Offer Details**:
- **Price**: $20 (one-time payment)
- **Includes**:
  - Lifetime access to Ayahfinder
  - Priority support
  - Access to all upcoming features
  - No recurring fees ever

**Data Collected**:
- Email address (required)
- Name (optional)

**User Flow**:
1. User visits any page
2. Sees banner at top: "$20 Lifetime Access - Limited Early Bird Offer"
3. Clicks "Get Lifetime Access" button
4. Modal opens with offer details and form
5. User fills email (+ optional name)
6. Clicks "Claim My Lifetime Offer"
7. Form validates and shows loading state
8. On success: Shows success message in modal + confirmation email sent
9. User can dismiss banner with X button (won't show again)

**Technical Flow**:
```
LifetimeOfferBanner Component (Client)
    ↓
Check localStorage for dismissal state
    ↓
If not dismissed: Show banner
    ↓
User clicks CTA → Open LifetimeOfferModal
    ↓
POST /api/lifetime-offer
    ↓
Validate input data
    ↓
Add contact to Resend "Lifetime Offer" Audience
    ↓
Send confirmation email with offer details
    ↓
Return success/error response
    ↓
Show success state in modal
```

---

## Files Structure

### New Files to Create (9 files)

```
ayahfinderWeb/
├── .env.local (git-ignored)
├── .env.example (tracked in git)
├── lib/
│   ├── resend.ts (Resend client initialization)
│   └── types.ts (TypeScript interfaces)
├── app/
│   └── api/
│       ├── waitlist/
│       │   └── route.ts (Waitlist API handler)
│       └── lifetime-offer/
│           └── route.ts (Lifetime offer API handler)
└── components/
    ├── forms/
    │   └── WaitlistForm.tsx (Waitlist form component)
    ├── LifetimeOfferBanner.tsx (Top banner component)
    └── LifetimeOfferModal.tsx (Offer modal component)
```

### Files to Modify (3 files)

```
ayahfinderWeb/
├── package.json (add resend dependency)
├── components/
│   └── sections/
│       └── Hero.tsx (replace buttons with waitlist form)
└── app/
    └── layout.tsx (add banner above navbar)
```

---

## Implementation Details

### 1. Package Installation

```bash
npm install resend
```

### 2. Environment Configuration

Create `.env.local` in project root:
```env
RESEND_API_KEY=your_actual_api_key_here
RESEND_WAITLIST_AUDIENCE_ID=your_waitlist_audience_id
RESEND_LIFETIME_AUDIENCE_ID=your_lifetime_audience_id
NEXT_PUBLIC_SITE_URL=https://getayahfinder.com
```

Create `.env.example` for reference:
```env
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here
RESEND_WAITLIST_AUDIENCE_ID=your_waitlist_audience_id
RESEND_LIFETIME_AUDIENCE_ID=your_lifetime_offer_audience_id
NEXT_PUBLIC_SITE_URL=https://getayahfinder.com
```

### 3. Resend Client (lib/resend.ts)

Centralized Resend initialization:
- Validates API key exists
- Exports configured Resend instance
- Exports audience IDs

### 4. Type Definitions (lib/types.ts)

TypeScript interfaces for:
- WaitlistFormData
- LifetimeOfferFormData
- ApiResponse

### 5. API Routes

Both routes follow similar patterns:
- Validate incoming data
- Check email format
- Add contact to Resend Audience
- Send HTML confirmation email
- Return JSON response
- Handle errors gracefully

### 6. Components

**WaitlistForm**:
- Client component with form state
- Email, dropdown, textarea inputs
- Validation and error handling
- Loading state with spinner
- Success screen after submission

**LifetimeOfferBanner**:
- Sticky position at top
- Checks localStorage for dismissal
- Opens modal on CTA click
- Gradient background with brand colors

**LifetimeOfferModal**:
- Modal overlay with backdrop blur
- Email + optional name fields
- Lists offer benefits
- Success state after submission

---

## Email Templates

### Waitlist Confirmation Email

**Subject**: "You're on the Ayahfinder Waitlist!"

**Content**:
- Welcome message
- Confirms their responses (source, interest)
- Link to blog
- Promise to notify on launch
- Professional footer

### Lifetime Offer Confirmation Email

**Subject**: "$20 Lifetime Access - You're on the List!"

**Content**:
- Confirmation of interest
- Lists benefits (4 checkmarks)
- What happens next (3 steps)
- Professional branding
- Footer

Both emails use:
- Inline CSS for compatibility
- Responsive design
- Brand colors (#2d5f3f green)
- Professional layout

---

## Testing Checklist

### Manual Testing

**Waitlist Form**:
- [ ] Form appears in Hero section
- [ ] Email validation works
- [ ] Required field validation works
- [ ] Dropdown options display correctly
- [ ] Textarea accepts input
- [ ] Submit button shows loading state
- [ ] Success message appears after submission
- [ ] Error message appears on failure
- [ ] Confirmation email received
- [ ] Contact appears in Resend "Waitlist" audience

**Lifetime Offer**:
- [ ] Banner appears at top of page
- [ ] Banner is sticky/fixed
- [ ] "Get Lifetime Access" button opens modal
- [ ] Modal displays offer details
- [ ] Email field validates
- [ ] Name field is optional
- [ ] Submit button shows loading state
- [ ] Success message appears in modal
- [ ] Confirmation email received
- [ ] Contact appears in Resend "Lifetime Offer" audience
- [ ] X button dismisses banner
- [ ] Banner stays hidden after dismissal (localStorage)
- [ ] Banner reappears after clearing localStorage

**Responsive Design**:
- [ ] Test on mobile (320px, 375px, 414px widths)
- [ ] Test on tablet (768px, 1024px widths)
- [ ] Test on desktop (1280px, 1920px widths)
- [ ] Form fields are usable on mobile
- [ ] Modal is centered and readable on all sizes
- [ ] Banner text wraps appropriately

**Error Handling**:
- [ ] Invalid email shows error
- [ ] Missing required fields show error
- [ ] Network errors display user-friendly message
- [ ] Resend API errors handled gracefully

---

## Verification Steps

After implementation, verify the complete flow:

### Waitlist Verification
1. Visit https://getayahfinder.com
2. Scroll to Hero section
3. Fill waitlist form:
   - Email: test@example.com
   - Source: Social Media
   - Interest: "Testing the waitlist feature"
4. Click "Join Waitlist"
5. Verify success message appears
6. Check email inbox for confirmation
7. Log into Resend dashboard
8. Navigate to "Waitlist" audience
9. Verify contact "test@example.com" appears

### Lifetime Offer Verification
1. Visit https://getayahfinder.com
2. See banner at top: "$20 Lifetime Access..."
3. Click "Get Lifetime Access" button
4. Verify modal opens
5. Fill form:
   - Email: test2@example.com
   - Name: Test User (optional)
6. Click "Claim My Lifetime Offer"
7. Verify success message in modal
8. Check email inbox for confirmation
9. Log into Resend dashboard
10. Navigate to "Lifetime Offer" audience
11. Verify contact "test2@example.com" appears
12. Click X on banner
13. Refresh page
14. Verify banner doesn't reappear

---

## Deployment Checklist

Before deploying to production:

- [ ] Environment variables set in production (Vercel/hosting platform)
- [ ] Domain verified in Resend
- [ ] Test emails in production environment
- [ ] Verify Resend audiences are correct
- [ ] Test both features on production URL
- [ ] Monitor Resend dashboard for deliverability
- [ ] Check email spam scores
- [ ] Set up error logging/monitoring

---

## Common Issues & Solutions

### Issue: Emails not sending
**Solution**:
- Verify domain in Resend dashboard
- Check API key is correct
- Ensure from address uses verified domain
- Check Resend logs for errors

### Issue: Banner won't dismiss
**Solution**:
- Clear localStorage in browser
- Check browser console for errors
- Verify localStorage.setItem() is working

### Issue: Form validation not working
**Solution**:
- Check browser console for JavaScript errors
- Verify "use client" directive is present
- Ensure state is updating correctly

### Issue: Contacts not appearing in Resend Audience
**Solution**:
- Verify audience IDs in .env.local
- Check API route response for errors
- Look at Resend API logs
- Ensure audience exists in Resend

---

## Future Enhancements

### Phase 2 (Post-Launch)
- Add payment integration (Stripe) for lifetime offer
- Create admin dashboard to view waitlist members
- Add analytics tracking (conversion rates, sources)
- A/B test different copy and CTAs

### Phase 3 (Growth)
- Email drip campaign for waitlist members
- Referral system (reward users who refer friends)
- Social proof (display waitlist count)
- Early access invites for top waitlist members

---

## Support & Resources

- **Resend Documentation**: https://resend.com/docs
- **Next.js API Routes**: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **Resend Audiences API**: https://resend.com/docs/api-reference/audiences
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## Contact

For questions or issues during implementation:
- Check browser console for errors
- Check Resend dashboard logs
- Review this guide
- Test in development first before production

---

**Last Updated**: February 2026
**Version**: 1.0
