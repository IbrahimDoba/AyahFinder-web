/**
 * IndexNow URL Submission Script for getayahfinder.com
 * 
 * This script submits all website URLs to Bing via IndexNow API.
 * Run after every deployment to notify search engines of new/updated content.
 * 
 * Usage: node scripts/submit-indexnow.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  host: 'getayahfinder.com',
  key: '662d8d61bc6d4e91b50cde79cb5912c6',
  keyLocation: 'https://getayahfinder.com/662d8d61bc6d4e91b50cde79cb5912c6.txt',
  searchEngine: 'api.indexnow.org',
};

// Extract URLs from sitemap XML
function getUrlsFromSitemap() {
  const urls = [];
  
  // Define all URLs from your sitemap manually (since sitemap is generated at build time)
  // This list contains all 178 URLs from your sitemap
  const sitemapUrls = [
    // Static pages
    'https://getayahfinder.com/',
    'https://getayahfinder.com/about',
    'https://getayahfinder.com/blog',
    'https://getayahfinder.com/support',
    'https://getayahfinder.com/privacy',
    'https://getayahfinder.com/terms',
    
    // Blog posts (100 articles)
    'https://getayahfinder.com/blog/50-why-we-built-ayahfinder-our-story',
    'https://getayahfinder.com/blog/49-user-reviews-what-muslims-actually-say-about-quran-apps',
    'https://getayahfinder.com/blog/48-ios-vs-android-quran-app-performance-comparison',
    'https://getayahfinder.com/blog/47-free-vs-premium-which-quran-app-tier-is-right-for-you',
    'https://getayahfinder.com/blog/46-quran-recognition-apps-tested-accuracy-showdown',
    'https://getayahfinder.com/blog/45-best-islamic-apps-for-converts-navigating-arabic-when-you-are-learning',
    'https://getayahfinder.com/blog/44-ayahfinder-alternatives-full-market-comparison',
    'https://getayahfinder.com/blog/43-shazam-for-quran-do-these-apps-actually-work',
    'https://getayahfinder.com/blog/42-the-science-of-audio-fingerprinting-in-islamic-apps',
    'https://getayahfinder.com/blog/41-building-a-personal-quran-library-on-your-phone',
    'https://getayahfinder.com/blog/40-traveling-muslim-essentials-quran-access-without-bulk',
    'https://getayahfinder.com/blog/39-memorization-helpers-connecting-sound-to-text-in-hifz',
    'https://getayahfinder.com/blog/38-how-to-deepen-your-khushoo-with-tech-aids',
    'https://getayahfinder.com/blog/37-famous-quran-reciters-you-should-know-audio-profiles',
    'https://getayahfinder.com/blog/36-understanding-different-qiraat-a-beginners-guide',
    'https://getayahfinder.com/blog/35-eid-prep-saving-your-favorite-ramadan-recitations',
    'https://getayahfinder.com/blog/34-suhoor-to-suhoor-30-days-of-quran-discovery-with-ayahfinder',
    'https://getayahfinder.com/blog/33-taraweeh-companion-tech-tools-for-long-night-prayers',
    'https://getayahfinder.com/blog/32-the-ultimate-ramadan-app-stack-for-2026',
    'https://getayahfinder.com/blog/31-preparing-your-phone-for-ramadan-spirituality',
    'https://getayahfinder.com/blog/30-last-10-nights-hack-quick-surah-lookup-during-qiyam',
    'https://getayahfinder.com/blog/29-from-iftar-to-tahajjud-streamlining-your-quran-routine-with-voice-recognition',
    'https://getayahfinder.com/blog/28-ramadanprep-building-your-digital-quran-study-kit',
    'https://getayahfinder.com/blog/27-night-prayer-tech-following-along-with-live-recitation-using-ayahfinder',
    'https://getayahfinder.com/blog/26-tech-setup-for-ramadan-2026-essential-apps-for-spiritual-productivity',
    'https://getayahfinder.com/blog/25-the-group-chat-mystery-solving-what-surah-is-this-questions',
    'https://getayahfinder.com/blog/24-the-social-media-quran-hunt-identifying-verses-from-instagram-and-tiktok',
    'https://getayahfinder.com/blog/23-driving-and-hearing-quran-safe-ways-to-identify-verses',
    'https://getayahfinder.com/blog/22-kids-asking-what-surah-is-this-parenting-wins-with-tech',
    'https://getayahfinder.com/blog/21-the-converts-dilemma-finding-verses-you-cannot-yet-read',
    'https://getayahfinder.com/blog/20-how-to-follow-along-when-the-imam-recites-too-fast',
    'https://getayahfinder.com/blog/19-solved-the-mystery-surah-from-the-radio',
    'https://getayahfinder.com/blog/18-when-you-hear-quran-at-the-mosque-but-cannot-identify-it',
    'https://getayahfinder.com/blog/17-finding-that-quran-verse-stuck-in-your-head-a-complete-guide',
    'https://getayahfinder.com/blog/16-the-voice-memo-confessional-how-i-stopped-losing-beautiful-recitations',
    'https://getayahfinder.com/blog/15-what-surah-is-this-common-recitations-during-ramadan-explained',
    'https://getayahfinder.com/blog/14-name-that-surah-tools-for-converting-audio-to-quran-text',
    'https://getayahfinder.com/blog/13-struggling-to-follow-taraweeh-real-time-ayah-tracking-solutions',
    'https://getayahfinder.com/blog/12-how-to-find-a-specific-ayah-when-you-only-remember-the-melody',
    'https://getayahfinder.com/blog/11-heard-a-beautiful-recitation-but-do-not-know-which-surah-here-is-the-fix',
    'https://getayahfinder.com/blog/10-from-idea-to-app-store-the-ayahfinder-origin-story',
    'https://getayahfinder.com/blog/09-ayahfinder-security-how-we-protect-your-data-and-privacy',
    'https://getayahfinder.com/blog/08-the-technology-behind-ayahfinder-how-audio-fingerprinting-works',
    'https://getayahfinder.com/blog/07-ayahfinder-for-imams-and-quran-teachers-professional-features',
    'https://getayahfinder.com/blog/06-how-ayahfinder-built-the-worlds-largest-quran-audio-database',
    'https://getayahfinder.com/blog/05-5-hidden-features-in-ayahfinder-power-users-love',
    'https://getayahfinder.com/blog/04-ai-voice-recognition-accuracy-test-does-it-work-with-different-qaris',
    'https://getayahfinder.com/blog/03-offline-mode-deep-dive-reading-the-complete-quran-without-wifi',
    'https://getayahfinder.com/blog/02-ayahfinder-vs-traditional-quran-apps-what-is-the-difference',
    'https://getayahfinder.com/blog/01-how-to-identify-any-quran-recitation-in-3-seconds',
    'https://getayahfinder.com/blog/184-the-complete-islamic-app-stack-how-ayahfinder-fits-your-digital-life',
    'https://getayahfinder.com/blog/182-ayahfinder-vs-muslim-pro-which-app-should-you-actually-download',
    'https://getayahfinder.com/blog/180-connecting-ayahfinder-to-your-smart-home-alexa-google-home-siri',
    'https://getayahfinder.com/blog/178-ayahfinder-for-the-hearing-impaired-visual-and-vibration-features',
    'https://getayahfinder.com/blog/176-ayahfinder-for-non-arabic-speakers-translation-features-deep-dive',
    'https://getayahfinder.com/blog/174-ayahfinder-for-grandparents-sharing-technology-across-generations',
    'https://getayahfinder.com/blog/172-ayahfinder-for-teenagers-making-quran-cool-for-gen-z',
    'https://getayahfinder.com/blog/170-ayahfinder-for-new-muslims-navigating-quran-without-arabic',
    'https://getayahfinder.com/blog/168-ayahfinder-for-anxiety-finding-peace-through-verse-identification',
    'https://getayahfinder.com/blog/166-ayahfinder-while-walking-outdoor-quran-discovery',
    'https://getayahfinder.com/blog/164-ayahfinder-at-work-discreet-quran-engagement-in-office',
    'https://getayahfinder.com/blog/162-ayahfinder-for-insomnia-falling-asleep-to-quran-recognition',
    'https://getayahfinder.com/blog/160-ayahfinder-during-pregnancy-connecting-baby-to-quran',
    'https://getayahfinder.com/blog/158-ayahfinder-and-studying-focus-music-vs-quran-background',
    'https://getayahfinder.com/blog/156-ayahfinder-for-long-drives-road-trip-quran-engagement',
    'https://getayahfinder.com/blog/154-using-ayahfinder-while-cooking-making-kitchen-time-spiritual',
    'https://getayahfinder.com/blog/152-ayahfinder-at-the-gym-combining-fitness-and-faith',
    'https://getayahfinder.com/blog/150-is-the-reward-the-same-digital-vs-physical-mushaf-reading',
    'https://getayahfinder.com/blog/148-listening-to-quran-while-working-permissibility-and-blessings',
    'https://getayahfinder.com/blog/146-can-you-use-ayahfinder-in-the-bathroom-islamic-guidelines',
    'https://getayahfinder.com/blog/144-digital-adab-islamic-etiquette-for-using-quran-apps',
    'https://getayahfinder.com/blog/142-is-using-quran-recognition-apps-permissible-islamic-perspective',
    'https://getayahfinder.com/blog/140-how-to-share-quran-verses-from-ayahfinder-to-whatsapp-instagram-and-more',
    'https://getayahfinder.com/blog/138-ayahfinder-search-finding-verses-in-your-history-like-a-pro',
    'https://getayahfinder.com/blog/136-customizing-your-ayahfinder-experience-themes-fonts-and-settings',
    'https://getayahfinder.com/blog/134-ayahfinder-notifications-setting-up-daily-quran-reminders',
    'https://getayahfinder.com/blog/132-how-much-data-does-ayahfinder-use-wifi-vs-cellular-breakdown',
    'https://getayahfinder.com/blog/ayahfinder-success-stories-real-muslims,-real-transformations',
    'https://getayahfinder.com/blog/130-does-ayahfinder-work-on-ipad-the-complete-tablet-experience',
    'https://getayahfinder.com/blog/history-quran-preservation-oral-tradition-ai',
    'https://getayahfinder.com/blog/understanding-quran-translations-which-one-matches-heart',
    'https://getayahfinder.com/blog/128-how-to-export-your-ayahfinder-data-backup-and-transfer-guide',
    'https://getayahfinder.com/blog/ayahfinder-busy-executive-5-minute-spiritual-breaks',
    'https://getayahfinder.com/blog/dealing-quran-guilt-technology-helps-reconnect',
    'https://getayahfinder.com/blog/126-how-to-export-your-ayahfinder-data-backup-and-transfer-guide',
    'https://getayahfinder.com/blog/ayahfinder-family-bonding-learning-quran-together',
    'https://getayahfinder.com/blog/science-audio-memory-hearing-quran-sticks-better',
    'https://getayahfinder.com/blog/build-morning-quran-routine-ayahfinder',
    'https://getayahfinder.com/blog/ayahfinder-quran-teachers-classroom-integration-tips',
    'https://getayahfinder.com/blog/psychology-we-forget-quran-verses-and-ayahfinder-helps',
    'https://getayahfinder.com/blog/ayahfinder-success-stories-real-muslims-real-transformations',
    'https://getayahfinder.com/blog/the-history-of-quran-preservation-from-oral-tradition-to-ai',
    'https://getayahfinder.com/blog/understanding-quran-translations-which-one-matches-your-heart',
    'https://getayahfinder.com/blog/ayahfinder-for-the-busy-executive-5-minute-spiritual-breaks',
    'https://getayahfinder.com/blog/dealing-with-quran-guilt-how-technology-helps-you-reconnect',
    'https://getayahfinder.com/blog/the-future-of-quran-recognition-whats-coming-to-ayahfinder',
    'https://getayahfinder.com/blog/ayahfinder-on-different-devices-phone-tablet-and-more',
    'https://getayahfinder.com/blog/how-to-report-recognition-errors-and-help-improve-ayahfinder',
    'https://getayahfinder.com/blog/ayahfinder-etiquette-when-and-when-not-to-use-it',
    'https://getayahfinder.com/blog/managing-your-recognition-history-organization-tips',
    'https://getayahfinder.com/blog/ayahfinder-for-seniors-simple-guide-for-older-users',
    'https://getayahfinder.com/blog/how-we-tested-ayahfinder-our-quality-process',
    'https://getayahfinder.com/blog/the-best-times-and-places-to-use-ayahfinder',
    'https://getayahfinder.com/blog/why-we-built-ayahfinder-our-story',
    'https://getayahfinder.com/blog/why-your-quran-recognition-failed-and-how-to-fix-it',
    'https://getayahfinder.com/blog/getting-started-your-first-week-with-ayahfinder',
    'https://getayahfinder.com/blog/user-reviews-what-muslims-actually-say-about-quran-apps',
    'https://getayahfinder.com/blog/ios-vs-android-quran-app-performance-comparison',
    'https://getayahfinder.com/blog/free-vs-premium-which-quran-app-tier-is-right-for-you',
    'https://getayahfinder.com/blog/quran-recognition-apps-tested-accuracy-showdown',
    'https://getayahfinder.com/blog/best-islamic-apps-for-converts-navigating-arabic-when-you-are-learning',
    'https://getayahfinder.com/blog/ayahfinder-alternatives-full-market-comparison',
    'https://getayahfinder.com/blog/shazam-for-quran-do-these-apps-actually-work',
    'https://getayahfinder.com/blog/the-science-of-audio-fingerprinting-in-islamic-apps',
    'https://getayahfinder.com/blog/building-a-personal-quran-library-on-your-phone',
    'https://getayahfinder.com/blog/traveling-muslim-essentials-quran-access-without-bulk',
    'https://getayahfinder.com/blog/memorization-helpers-connecting-sound-to-text-in-hifz',
    'https://getayahfinder.com/blog/how-to-deepen-your-khushoo-with-tech-aids',
    'https://getayahfinder.com/blog/famous-quran-reciters-you-should-know-audio-profiles',
    'https://getayahfinder.com/blog/understanding-different-qiraat-a-beginners-guide',
    'https://getayahfinder.com/blog/eid-prep-saving-your-favorite-ramadan-recitations',
    'https://getayahfinder.com/blog/suhoor-to-suhoor-30-days-of-quran-discovery-with-ayahfinder',
    'https://getayahfinder.com/blog/taraweeh-companion-tech-tools-for-long-night-prayers',
    'https://getayahfinder.com/blog/the-ultimate-ramadan-app-stack-for-2026',
    'https://getayahfinder.com/blog/preparing-your-phone-for-ramadan-spirituality',
    'https://getayahfinder.com/blog/last-10-nights-hack-quick-surah-lookup-during-qiyam',
    'https://getayahfinder.com/blog/from-iftar-to-tahajjud-streamlining-your-quran-routine-with-voice-recognition',
    'https://getayahfinder.com/blog/ramadanprep-building-your-digital-quran-study-kit',
    'https://getayahfinder.com/blog/night-prayer-tech-following-along-with-live-recitation-using-ayahfinder',
    'https://getayahfinder.com/blog/tech-setup-for-ramadan-2026-essential-apps-for-spiritual-productivity',
    'https://getayahfinder.com/blog/the-group-chat-mystery-solving-what-surah-is-this-questions',
    'https://getayahfinder.com/blog/the-social-media-quran-hunt-identifying-verses-from-instagram-and-tiktok',
    'https://getayahfinder.com/blog/driving-and-hearing-quran-safe-ways-to-identify-verses',
    'https://getayahfinder.com/blog/kids-asking-what-surah-is-this-parenting-wins-with-tech',
    'https://getayahfinder.com/blog/the-converts-dilemma-finding-verses-you-cannot-yet-read',
    'https://getayahfinder.com/blog/how-to-follow-along-when-the-imam-recites-too-fast',
    'https://getayahfinder.com/blog/solved-the-mystery-surah-from-the-radio',
    'https://getayahfinder.com/blog/when-you-hear-quran-at-the-mosque-but-cannot-identify-it',
    'https://getayahfinder.com/blog/finding-that-quran-verse-stuck-in-your-head-a-complete-guide',
    'https://getayahfinder.com/blog/the-voice-memo-confessional-how-i-stopped-losing-beautiful-recitations',
    'https://getayahfinder.com/blog/what-surah-is-this-common-recitations-during-ramadan-explained',
    'https://getayahfinder.com/blog/name-that-surah-tools-for-converting-audio-to-quran-text',
    'https://getayahfinder.com/blog/struggling-to-follow-taraweeh-real-time-ayah-tracking-solutions',
    'https://getayahfinder.com/blog/how-to-find-a-specific-ayah-when-you-only-remember-the-melody',
    'https://getayahfinder.com/blog/heard-a-beautiful-recitation-but-do-not-know-which-surah-here-is-the-fix',
    'https://getayahfinder.com/blog/from-idea-to-app-store-the-ayahfinder-origin-story',
    'https://getayahfinder.com/blog/ayahfinder-security-how-we-protect-your-data-and-privacy',
    'https://getayahfinder.com/blog/the-technology-behind-ayahfinder-how-audio-fingerprinting-works',
    'https://getayahfinder.com/blog/ayahfinder-for-imams-and-quran-teachers-professional-features',
    'https://getayahfinder.com/blog/how-ayahfinder-built-the-worlds-largest-quran-audio-database',
    'https://getayahfinder.com/blog/5-hidden-features-in-ayahfinder-power-users-love',
    'https://getayahfinder.com/blog/ai-voice-recognition-accuracy-test-does-it-work-with-different-qaris',
    'https://getayahfinder.com/blog/offline-mode-deep-dive-reading-the-complete-quran-without-wifi',
    'https://getayahfinder.com/blog/ayahfinder-vs-traditional-quran-apps-what-is-the-difference',
    'https://getayahfinder.com/blog/how-to-identify-any-quran-recitation-in-3-seconds-ayahfinder-tutorial',
    
    // Pagination pages (18 pages)
    'https://getayahfinder.com/blog/page/2',
    'https://getayahfinder.com/blog/page/3',
    'https://getayahfinder.com/blog/page/4',
    'https://getayahfinder.com/blog/page/5',
    'https://getayahfinder.com/blog/page/6',
    'https://getayahfinder.com/blog/page/7',
    'https://getayahfinder.com/blog/page/8',
    'https://getayahfinder.com/blog/page/9',
    'https://getayahfinder.com/blog/page/10',
    'https://getayahfinder.com/blog/page/11',
    'https://getayahfinder.com/blog/page/12',
    'https://getayahfinder.com/blog/page/13',
    'https://getayahfinder.com/blog/page/14',
    'https://getayahfinder.com/blog/page/15',
    'https://getayahfinder.com/blog/page/16',
    'https://getayahfinder.com/blog/page/17',
    'https://getayahfinder.com/blog/page/18',
  ];
  
  return sitemapUrls;
}

// Submit URLs to IndexNow
async function submitToIndexNow(urls) {
  const data = JSON.stringify({
    host: CONFIG.host,
    key: CONFIG.key,
    keyLocation: CONFIG.keyLocation,
    urlList: urls,
  });

  const options = {
    hostname: CONFIG.searchEngine,
    path: '/IndexNow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(data),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        switch (res.statusCode) {
          case 200:
            console.log('✅ Success: URLs submitted successfully!');
            resolve({ success: true, status: res.statusCode });
            break;
          case 202:
            console.log('✅ Accepted: URLs received, will be processed shortly');
            resolve({ success: true, status: res.statusCode });
            break;
          case 400:
            console.error('❌ Bad Request: Invalid format');
            reject(new Error('Invalid format'));
            break;
          case 403:
            console.error('❌ Forbidden: Key not valid - check your API key file is accessible');
            reject(new Error('Key not valid'));
            break;
          case 422:
            console.error('❌ Unprocessable Entity: URLs dont belong to host or key mismatch');
            reject(new Error('URL/Key mismatch'));
            break;
          case 429:
            console.error('❌ Too Many Requests: Rate limit hit, try again later');
            reject(new Error('Rate limited'));
            break;
          default:
            console.log(`Response: ${responseData}`);
            resolve({ success: false, status: res.statusCode });
        }
      });
    });

    req.on('error', (error) => {
      console.error('Request Error:', error);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

// Submit a single URL (for testing)
async function submitSingleUrl(url) {
  console.log(`\n📤 Testing with single URL: ${url}`);
  
  const submitUrl = `https://${CONFIG.searchEngine}/indexnow?url=${encodeURIComponent(url)}&key=${CONFIG.key}`;
  
  return new Promise((resolve, reject) => {
    https.get(submitUrl, (res) => {
      console.log(`Status Code: ${res.statusCode}`);
      
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log('✅ URL submitted successfully!');
        resolve(true);
      } else {
        console.error('❌ Failed to submit URL');
        resolve(false);
      }
    }).on('error', (err) => {
      console.error('Error:', err);
      reject(err);
    });
  });
}

// Main function
async function main() {
  console.log('🚀 IndexNow URL Submission for getayahfinder.com\n');
  console.log(`Host: ${CONFIG.host}`);
  console.log(`Key: ${CONFIG.key}`);
  console.log(`Key Location: ${CONFIG.keyLocation}\n`);

  // Get URLs to submit
  const urls = getUrlsFromSitemap();
  console.log(`📋 Found ${urls.length} URLs to submit\n`);

  // Show sample URLs
  console.log('Sample URLs:');
  urls.slice(0, 5).forEach(url => console.log(`  - ${url}`));
  console.log(`  ... and ${urls.length - 5} more`);
  console.log('');

  // First, test with a single URL
  console.log('🔍 Step 1: Testing with single URL...');
  try {
    await submitSingleUrl('https://getayahfinder.com/');
    console.log('');
  } catch (error) {
    console.error('Single URL test failed:', error.message);
    console.log('Continuing with bulk submission...\n');
  }

  // Submit URLs in batches
  console.log('📤 Step 2: Submitting all URLs to IndexNow...\n');
  
  try {
    // IndexNow supports up to 10,000 URLs per request
    // We have ~178 URLs, so one batch is sufficient
    const batchSize = 10000;
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      console.log(`Submitting batch ${Math.floor(i / batchSize) + 1} (${batch.length} URLs)...`);
      await submitToIndexNow(batch);
    }
    
    console.log('\n✅ All URLs submitted successfully!');
    console.log('📊 Check Bing Webmaster Tools to verify receipt');
    console.log('   https://www.bing.com/webmasters');
  } catch (error) {
    console.error('\n❌ Error submitting URLs:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { submitToIndexNow, submitSingleUrl, getUrlsFromSitemap };
