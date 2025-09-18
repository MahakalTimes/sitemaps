# Sitemaps Hosting for Backlinks

This repository contains sitemap files for submitting to Google Search Console (GSC).  
These sitemaps help Google discover and crawl your Tier backlinks.

---

## 📂 Files Included
- `sitemap-part-1.xml` → Contains all backlink URLs (deduplicated).  
- `sitemap_index_final.xml` → Master sitemap index that references the part files.

---

## 🚀 How to Host on GitHub Pages

1. **Create a new GitHub repo**  
   Name it something like `sitemaps`.

2. **Upload files**  
   Upload `sitemap-part-1.xml` and `sitemap_index_final.xml` to the root of the repo.

3. **Enable GitHub Pages**  
   - Go to **Settings → Pages**.  
   - Select branch: `main`  
   - Select folder: `/root`  
   - Save changes.

4. **Live Sitemap URL**  
   Your sitemap will be available at:  
   ```
   https://<your-username>.github.io/sitemaps/sitemap_index_final.xml
   ```

5. **Submit to Google Search Console (GSC)**  
   - Open [Google Search Console](https://search.google.com/search-console/)  
   - Go to *Indexing → Sitemaps*  
   - Submit your GitHub Pages sitemap URL.  
   Example:  
   ```
   https://<your-username>.github.io/sitemaps/sitemap_index_final.xml
   ```

6. **Optional Ping**  
   You can ping Google manually to speed up crawl:  
   ```
   https://www.google.com/ping?sitemap=https://<your-username>.github.io/sitemaps/sitemap_index_final.xml
   ```

---

## ✅ Notes
- Maximum 50,000 URLs per part sitemap. If you add more URLs, create `sitemap-part-2.xml`, `sitemap-part-3.xml`, etc., and reference them inside `sitemap_index_final.xml`.
- This method is 100% safe and Google-friendly.
- If some low-tier backlinks still don't index, that's normal (Google may choose to ignore low-value pages).

---

© MahakalTimes Sitemap Automation Guide
