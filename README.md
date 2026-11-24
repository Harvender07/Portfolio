# Harvender Singh Rawat — Personal Portfolio

A minimal, recruiter-focused software engineering and AI/ML undergraduate portfolio built with **React**, **TypeScript**, **Tailwind CSS**, **Vite**, and **Lucide Icons**.

## Quick Customization Guide

All portfolio data—social URLs, projects, skills, education, certifications, and ATS resume content—is centralized in a single typed file:

- `src/data/portfolioData.ts`

### 1. Upload Profile Photo & Resume PDF
- **Profile Photo:** Place your headshot image at `public/profile.jpg` (automatically replaces the `HSR` monogram fallback in the Hero section).
- **Resume PDF:** Replace `public/resume.pdf` with your latest exported 1-page ATS resume PDF. Both the Hero and Resume download buttons link directly to `/resume.pdf`.

### 2. Upload Original Certificates
Place original PDFs or images inside `public/certificates/`:
- `public/certificates/worldquant-gold.pdf`
- `public/certificates/worldquant-silver.pdf`
- `public/certificates/worldquant-bronze.pdf`

(Or update `fileUrl` and `fileType` to `'image'` in `src/data/portfolioData.ts` if uploading `.png`/`.jpg` files.)

### 3. Update Projects & Links
Edit `PROJECTS_DATA` in `src/data/portfolioData.ts` to replace any placeholder slot with your finished project overview, screenshots (`public/projects/...`), GitHub repository URL, and live demo URL.

### 4. Contact Form Integration
The contact form in `src/components/Contact.tsx` uses **FormSubmit** AJAX targeting `harvendersinghrawat7336@gmail.com` with an automatic `mailto:` fallback. On the first live submission after deployment, check `harvendersinghrawat7336@gmail.com` and click FormSubmit's one-time verification link to activate direct delivery.

## Local Development

```bash
npm install
npm run dev
```

## Production Build & Vercel Deployment

```bash
npm run build
```

Deploy directly to Vercel by importing this GitHub repository; `vercel.json` is pre-configured for Vite.
