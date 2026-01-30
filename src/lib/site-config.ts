/**
 * إعدادات الموقع والروابط — عدّل هنا مرة واحدة لتطبيق التغييرات في كل الصفحات.
 */

/** رابط واتساب — رسالة مباشرة لهذا الرقم (استبدل بالمتغير إن أردت جروباً) */
export const WHATSAPP_LINK = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK ?? "https://wa.me/201550035776"

/** رابط تحميل التطبيق على Google Play */
export const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.awady.ostawy"

/** أرقام موحدة للمحتوى (SEO وتجربة المستخدم) */
export const APP_STATS = {
  questionsCount: 500,
  signsCount: 250,
  signCategories: 6,
} as const

/**
 * إرسال نموذج التواصل:
 * - إن تركت غير معرّف: النموذج يعرض تنبيهاً فقط (مناسب للتطوير).
 * - لربط خدمة مثل Formspree: عيّن NEXT_PUBLIC_CONTACT_FORM_ACTION إلى رابط الـ endpoint.
 */
export const CONTACT_FORM_ACTION = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION

/** معرّف Google Analytics 4 (اختياري — لتفعيل التحليلات) */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
