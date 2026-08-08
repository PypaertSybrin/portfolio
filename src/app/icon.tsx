import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/** Phosphor initials on terminal ink, the mark for the whole rebrand. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#08090A',
          color: '#5CF29B',
          fontSize: 19,
          fontWeight: 700,
          letterSpacing: -1,
          fontFamily: 'monospace',
        }}
      >
        SP
      </div>
    ),
    { ...size },
  )
}
