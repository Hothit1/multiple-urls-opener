# Multiple URL Opener Chrome Extension

This extension lets you store multiple named lists of URLs and open any list with a single click.

Boost your workflow by launching entire groups of websites in one go. Whether it's your morning routine, a research toolkit, or a set of QA environments, save the links once and reopen them whenever you need with a single click—no typing, no copy-paste, no clutter.

**Highlights**
• Unlimited named lists  
• One-click open in background tabs  
• Syncs automatically via your Google account (Chrome Sync)  
• No ads, no tracking – fully open-source

## Installation (Developer Mode)

1. Download / clone this folder.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the `multiple_url_opener` directory.
5. The extension icon will appear in your toolbar – pin it for quick access.

## Usage

1. Click the extension icon – you’ll see any saved lists. If it’s empty, click *Manage Lists*.
2. In **Manage Lists**, add / edit your lists. Use one URL per line and give each list a name.
3. Click **Save All** – your lists are stored in Chrome sync storage (roams with your account).
4. Back in the popup, click a list’s button to open every URL in that list in new background tabs.

## Icons / Logo
PNG icons are stored in `icons/`:

```
icons/icon16.png
icons/icon32.png
icons/icon48.png
icons/icon128.png
```

If you want to change the artwork, replace those PNGs and make sure the filenames stay the same (or update the `icons` paths in `manifest.json`).

## Publishing to Chrome Web Store

1. **Clean the folder** – ensure only production files are present (no `.ico`, temporary scripts, etc.).
2. **Zip the contents** of the `multiple_url_opener` folder so that `manifest.json` sits at the root of the archive.
   ```powershell
   Compress-Archive -Path multiple_url_opener\* multiple_url_opener.zip
   ```
3. **Create/Log in** to a Chrome Web Store developer account (one-time USD 5 fee).
4. In the Developer Dashboard, click **Add new item** and upload your ZIP.
5. Fill out the required listing fields:
   - Title, short description, full description
   - Category (e.g. “Productivity”)
   - 128×128 PNG icon (use `icon128.png`)
   - At least one screenshot (1280×800 px)
   - Privacy Policy URL (state that no data leaves Chrome Sync)
6. Click **Submit for review**. Approval usually takes a few hours to 2 days.

When you need to publish an update, bump the `version` in `manifest.json`, rebuild the ZIP, and upload it as a new draft. Users will auto-update within a few hours after approval.

## Privacy & Data Policy

Multiple URL Opener is designed with privacy first:

• **Local-only storage** – Your URL lists live inside Chrome’s encrypted Sync storage, linked to your Google account so they roam only between your own browsers.  
• **Zero analytics** – The extension never sends any data to external servers, does not embed trackers, and makes no network requests aside from the sites you intentionally open.  
• **Minimal permissions** – It requests only `storage` (to save your lists) and `tabs` (to open them).  
• **No monetisation** – No ads, no in-app payments, no affiliate links.  

Removing the extension immediately deletes all stored data. By installing the extension you agree to this strictly local data usage. 