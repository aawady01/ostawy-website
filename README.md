This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## متغيرات البيئة (اختياري)

انسخ `.env.example` إلى `.env.local` وعدّل حسب الحاجة:

- **نموذج التواصل:** عيّن `NEXT_PUBLIC_CONTACT_FORM_ACTION` (مثلاً رابط Formspree) لتفعيل إرسال الرسائل فعلياً.
- **واتساب:** عيّن `NEXT_PUBLIC_WHATSAPP_GROUP_LINK` لتغيير الرابط الافتراضي (رقم أو جروب).
- **تحليلات:** عيّن `NEXT_PUBLIC_GA_MEASUREMENT_ID` لتفعيل Google Analytics 4 لاحقاً.

## النشر (GitHub Pages)

المشروع مضبوط للبناء الثابت والنشر عبر GitHub Actions. بعد الـ push على الفرع `main` يتم البناء والنشر تلقائياً. تأكد من تفعيل **Pages** من **Settings → Pages** واختيار **GitHub Actions** كمصدر.
