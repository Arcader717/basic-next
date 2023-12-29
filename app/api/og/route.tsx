import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          fontSize: 40,
          fontWeight: 600,
        }}
      >
        <svg
          width="150"
          viewBox="0 0 75 65"
          fill="#000"
          style={{ margin: '0 75px' }}
        >
          <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
        </svg>
        <div style={{ marginTop: 40 }}>Chronic</div>
        <div style={{ marginTop: 20, fontSize: 25, color: '#555' }}>More moronic than you would know</div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    },
  );
}
