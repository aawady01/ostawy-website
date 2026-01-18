import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'أُسطاوى - تعلم إشارات المرور واختبار القيادة'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #05767C, #0F172A)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}
                >
                    {/* Simple Icon Representation */}
                    <svg
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8" />
                        <path d="M8 12h8" />
                    </svg>
                </div>
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        background: 'linear-gradient(to right, #ffffff, #4CBAC2)',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    أُسطاوى
                </div>
                <div style={{ fontSize: 40, opacity: 0.8 }}>
                    رفيقك الذكي لتعلم القيادة في مصر
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
