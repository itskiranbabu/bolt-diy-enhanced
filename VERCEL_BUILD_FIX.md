# Vercel Build Settings

## Clear Build Cache
To force a clean build without cached dependencies:
1. Go to: https://vercel.com/babujtek-4200s-projects/bolt-diy-enhanced/settings
2. Click "General" tab
3. Scroll to "Build & Development Settings"
4. Add Environment Variable:
   - Name: `VERCEL_FORCE_NO_BUILD_CACHE`
   - Value: `1`
5. Redeploy

## Or via Vercel CLI
```bash
vercel --force
```

## Current Issue
Vercel is caching old Remix dependencies. The above steps will force a clean build with Next.js.
