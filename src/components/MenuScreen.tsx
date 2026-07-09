import { useEffect, useState } from 'react'

interface Props {
  visible: boolean
  onVideoClick: () => void
  onSoftwareClick: () => void
}

const DREAM_PIXELS = [
  { x: 8, y: 12, color: '#FFB5C8', size: 8, delay: 0 },
  { x: 22, y: 30, color: '#C8A8E9', size: 6, delay: 0.4 },
  { x: 15, y: 55, color: '#FFE8A0', size: 10, delay: 0.8 },
  { x: 35, y: 20, color: '#B8E8D0', size: 6, delay: 1.2 },
  { x: 42, y: 68, color: '#FFB5C8', size: 8, delay: 0.2 },
  { x: 60, y: 15, color: '#C8A8E9', size: 12, delay: 1.6 },
  { x: 72, y: 40, color: '#FFE8A0', size: 6, delay: 0.6 },
  { x: 55, y: 72, color: '#B8E8D0', size: 8, delay: 1.0 },
  { x: 80, y: 60, color: '#FFB5C8', size: 10, delay: 0.3 },
  { x: 28, y: 82, color: '#C8A8E9', size: 6, delay: 1.4 },
  { x: 65, y: 85, color: '#FFE8A0', size: 8, delay: 0.7 },
  { x: 48, y: 45, color: '#FFFFFF', size: 4, delay: 1.8 },
  { x: 18, y: 70, color: '#FFB5C8', size: 6, delay: 0.9 },
  { x: 88, y: 25, color: '#C8A8E9', size: 8, delay: 1.1 },
  { x: 38, y: 92, color: '#B8E8D0', size: 6, delay: 0.5 },
]

const REAL_PIXELS = [
  { x: 12, y: 18, opacity: 0.15 },
  { x: 28, y: 42, opacity: 0.25 },
  { x: 45, y: 10, opacity: 0.10 },
  { x: 60, y: 65, opacity: 0.20 },
  { x: 75, y: 30, opacity: 0.30 },
  { x: 20, y: 78, opacity: 0.15 },
  { x: 38, y: 55, opacity: 0.20 },
  { x: 82, y: 48, opacity: 0.12 },
  { x: 55, y: 88, opacity: 0.18 },
  { x: 10, y: 50, opacity: 0.22 },
  { x: 68, y: 15, opacity: 0.14 },
  { x: 90, y: 72, opacity: 0.28 },
  { x: 33, y: 25, opacity: 0.16 },
  { x: 77, y: 90, opacity: 0.20 },
  { x: 50, y: 38, opacity: 0.12 },
]

function StarIcon({ color }: { color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" style={{ imageRendering: 'pixelated' }}>
      <rect x="5" y="0" width="2" height="2" fill={color} />
      <rect x="5" y="10" width="2" height="2" fill={color} />
      <rect x="0" y="5" width="2" height="2" fill={color} />
      <rect x="10" y="5" width="2" height="2" fill={color} />
      <rect x="3" y="3" width="2" height="2" fill={color} />
      <rect x="7" y="3" width="2" height="2" fill={color} />
      <rect x="3" y="7" width="2" height="2" fill={color} />
      <rect x="7" y="7" width="2" height="2" fill={color} />
      <rect x="4" y="4" width="4" height="4" fill={color} />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" style={{ imageRendering: 'pixelated' }}>
      <rect x="1" y="2" width="4" height="2" fill="#FF6B6B" />
      <rect x="9" y="2" width="4" height="2" fill="#FF6B6B" />
      <rect x="0" y="4" width="5" height="4" fill="#FF6B6B" />
      <rect x="9" y="4" width="5" height="4" fill="#FF6B6B" />
      <rect x="5" y="2" width="4" height="6" fill="#FF6B6B" />
      <rect x="2" y="8" width="10" height="2" fill="#FF6B6B" />
      <rect x="4" y="10" width="6" height="2" fill="#FF6B6B" />
    </svg>
  )
}

function DreamBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #510AC9 0%, #611dd8 40%, #732fe9 70%, #9459fa 100%)',
        }}
      />
      {/* Checkerboard grass strip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{
          backgroundImage: 'repeating-conic-gradient(#B8E8B8 0% 25%, #9ED89E 0% 50%)',
          backgroundSize: '16px 16px',
        }}
      />
      {/* Clouds */}
      <div className="absolute" style={{ top: '12%', left: '10%', animation: 'float-slow 4s ease-in-out infinite' }}>
        <div style={{ background: '#FFFFFF', width: 40, height: 12, boxShadow: '8px -8px 0 #FFFFFF, 16px -8px 0 #FFFFFF, 24px -8px 0 #FFFFFF, 8px 0 0 #FFFFFF, 16px 0 0 #FFFFFF, 24px 0 0 #FFFFFF, -8px 0 0 #FFFFFF, 32px 0 0 #FFFFFF, 4px 12px 0 #FFFFFF, 28px 12px 0 #FFFFFF' }} />
      </div>
      <div className="absolute" style={{ top: '8%', left: '55%', animation: 'float-slow 5s ease-in-out infinite 1s' }}>
        <div style={{ background: '#FFFFFF', width: 32, height: 10, boxShadow: '8px -8px 0 #FFFFFF, 16px -8px 0 #FFFFFF, 8px 0 0 #FFFFFF, 16px 0 0 #FFFFFF, -8px 0 0 #FFFFFF, 24px 0 0 #FFFFFF' }} />
      </div>
      {/* Pixel trees */}
      <div className="absolute" style={{ bottom: 64, left: '15%' }}>
        <div style={{ width: 8, height: 24, background: '#8B6B3D', marginLeft: 12 }} />
        <div style={{ width: 32, height: 32, background: '#5CB85C', marginTop: -32, imageRendering: 'pixelated' }} />
        <div style={{ width: 48, height: 16, background: '#4CAF50', marginLeft: -8, marginTop: 0 }} />
      </div>
      <div className="absolute" style={{ bottom: 64, right: '12%' }}>
        <div style={{ width: 8, height: 20, background: '#8B6B3D', marginLeft: 10 }} />
        <div style={{ width: 28, height: 28, background: '#5CB85C', marginTop: -28 }} />
        <div style={{ width: 40, height: 12, background: '#4CAF50', marginLeft: -6 }} />
      </div>
      {/* Floating sparkle pixels */}
      {DREAM_PIXELS.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `sparkle ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <StarIcon color={p.color} />
        </div>
      ))}
      {/* Floating hearts */}
      <div className="absolute" style={{ left: '25%', top: '45%', animation: 'float 3s ease-in-out infinite 0.5s' }}>
        <HeartIcon />
      </div>
      <div className="absolute" style={{ left: '70%', top: '35%', animation: 'float 4s ease-in-out infinite 1.2s' }}>
        <HeartIcon />
      </div>
    </div>
  )
}

function RealBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0" style={{ background: '#1A1A1A' }} />
      {/* Sky - slightly lighter */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle, #264444 0%, #19201f 50%, #0e1b1b 100%)' }}
      />
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: '#111111' }} />
      {/* House silhouette */}
      <div className="absolute" style={{ bottom: 64, left: '50%', transform: 'translateX(-50%)' }}>
        {/* House body */}
        <div style={{ width: 80, height: 56, background: '#222222', border: '2px solid #333333', position: 'relative' }}>
          {/* Window */}
          <div style={{ position: 'absolute', top: 12, left: 10, width: 20, height: 20, background: '#1a1a1a', border: '2px solid #444444' }}>
            <div style={{ position: 'absolute', inset: 2, background: '#2A3040', opacity: 0.8 }} />
          </div>
          <div style={{ position: 'absolute', top: 12, right: 10, width: 20, height: 20, background: '#1a1a1a', border: '2px solid #444444' }}>
            <div style={{ position: 'absolute', inset: 2, background: '#1C2030', opacity: 0.6 }} />
          </div>
          {/* Door */}
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 20, height: 32, background: '#1A1A1A', border: '2px solid #333333' }} />
        </div>
        {/* Roof */}
        <div style={{ position: 'absolute', top: -32, left: -8, width: 0, height: 0, borderLeft: '48px solid transparent', borderRight: '48px solid transparent', borderBottom: '32px solid #1D1D1D' }} />
      </div>
      {/* Static noise dots */}
      {REAL_PIXELS.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: 3,
            height: 3,
            background: '#FFFFFF',
            opacity: p.opacity,
            animation: `blink ${0.5 + (i % 4) * 0.3}s steps(1) infinite`,
            animationDelay: `${(i * 0.13) % 1}s`,
          }}
        />
      ))}
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
          backgroundSize: '100% 4px',
        }}
      />
      {/* Flicker overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ animation: 'flicker 6s steps(1) infinite', background: 'rgba(255,255,255,0.02)' }}
      />
    </div>
  )
}

export default function MenuScreen({ visible, onVideoClick, onSoftwareClick }: Props) {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null)
  const [blinkOn, setBlinkOn] = useState(true)

  useEffect(() => {
    const t = setInterval(() => setBlinkOn(b => !b), 600)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
        fontFamily: "'Press Start 2P', monospace",
      }}
    >
      {/* Title bar */}
      <div
        className="relative z-20 flex items-center justify-center"
        style={{
          background: '#000000',
          borderBottom: '4px solid #333333',
          padding: '16px 0',
        }}
      >
        {/* Dream side title accent */}
        <div style={{ position: 'absolute', left: 24, display: 'flex', gap: 8, alignItems: 'center' }}>
          <StarIcon color="#FFB5C8" />
          <StarIcon color="#C8A8E9" />
          <StarIcon color="#FFE8A0" />
        </div>
        <span
          style={{
            fontSize: 14,
            letterSpacing: '0.15em',
            color: '#FFFFFF',
            textShadow: '2px 2px 0 #888888, 0 0 20px rgba(200,168,233,0.4)',
          }}
        >
          ✦ JED MICLSEN R. CADA ✦
        </span>
        {/* Real side title accent */}
        <div style={{ position: 'absolute', right: 24, display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 8, height: 8, background: '#444444' }} />
          <div style={{ width: 8, height: 8, background: '#333333' }} />
          <div style={{ width: 8, height: 8, background: '#444444' }} />
        </div>
      </div>

      {/* Split canvas */}
      <div className="relative flex flex-1">
        {/* Creative - Left */}
        <div
          className="relative flex-1 cursor-pointer overflow-hidden"
          onClick={onVideoClick}
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
          style={{
            transition: 'flex 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            flex: hoveredSide === 'left' ? 1.15 : hoveredSide === 'right' ? 0.85 : 1,
          }}
        >
          <DreamBackground />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,181,200,0.15) 0%, transparent 70%)',
              opacity: hoveredSide === 'left' ? 1 : 0,
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10" style={{ gap: 16 }}>
            {/* World label */}
            <div
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '4px solid #000000',
                boxShadow: '4px 4px 0 #000000',
                padding: '6px 14px',
                fontSize: 8,
                color: '#5B4E77',
                letterSpacing: '0.1em',
              }}
            >
              CREATIVES
            </div>

            {/* Main title */}
            <div
              style={{
                fontSize: 13,
                color: '#e9e1f8',
                textShadow: '2px 2px 0 rgba(41, 17, 65, 0.6)',
                textAlign: 'center',
                lineHeight: 2,
                letterSpacing: '0.05em',
              }}
            >
              VIDEO<br />EDITOR
            </div>

            {/* Decorative hearts row */}
            <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
              <HeartIcon />
              <HeartIcon />
              <HeartIcon />
            </div>

            {/* Press prompt */}
            <div
              style={{
                marginTop: 16,
                fontSize: 7,
                color: '#b097e6',
                opacity: blinkOn ? 1 : 0,
                letterSpacing: '0.08em',
                transition: 'opacity 0.1s',
              }}
            >
              ▶ CLICK TO ENTER
            </div>

            {/* Pixel border bottom accent */}
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 6,
              }}
            >
              {['#FFB5C8', '#C8A8E9', '#FFE8A0', '#B8E8D0', '#FFB5C8'].map((c, i) => (
                <div key={i} style={{ width: 8, height: 8, background: c }} />
              ))}
            </div>
          </div>

          {/* Right border */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10"
            style={{ width: 4, background: '#000000' }}
          />
        </div>

        {/* Tech - Right */}
        <div
          className="relative flex-1 cursor-pointer overflow-hidden"
          onClick={onSoftwareClick}
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
          style={{
            transition: 'flex 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            flex: hoveredSide === 'right' ? 1.15 : hoveredSide === 'left' ? 0.85 : 1,
          }}
        >
          <RealBackground />

          {/* Hover vignette */}
          <div
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(90,122,140,0.2) 0%, transparent 70%)',
              opacity: hoveredSide === 'right' ? 1 : 0,
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10" style={{ gap: 16 }}>
            {/* World label */}
            <div
              style={{
                background: 'rgba(20,20,20,0.9)',
                border: '4px solid #555555',
                boxShadow: '4px 4px 0 #000000',
                padding: '6px 14px',
                fontSize: 8,
                color: '#AAAAAA',
                letterSpacing: '0.1em',
              }}
            >
              TECH INDUSTRY
            </div>

            {/* Main title */}
            <div
              style={{
                fontSize: 10,
                color: '#E0E0E0',
                textShadow: '2px 2px 0 #000000',
                textAlign: 'center',
                lineHeight: 2.2,
                letterSpacing: '0.05em',
                animation: 'flicker 8s steps(1) infinite',
              }}
            >
              SOFTWARE<br />ENGINEER
            </div>

            {/* Pixel grid accent */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 8px)', gap: 4, marginTop: 4 }}>
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} style={{ width: 8, height: 8, background: i % 2 === 0 ? '#3A3A3A' : '#2A2A2A' }} />
              ))}
            </div>

            {/* Press prompt */}
            <div
              style={{
                marginTop: 16,
                fontSize: 7,
                color: '#888888',
                opacity: blinkOn ? 1 : 0,
                letterSpacing: '0.08em',
                transition: 'opacity 0.1s',
              }}
            >
              ▶ CLICK TO ENTER
            </div>

            {/* Bottom accent */}
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 6,
              }}
            >
              {['#555555', '#444444', '#333333', '#444444', '#555555'].map((c, i) => (
                <div key={i} style={{ width: 8, height: 8, background: c }} />
              ))}
            </div>
          </div>

          {/* Left border */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10"
            style={{ width: 4, background: '#000000' }}
          />
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          background: '#000000',
          borderTop: '4px solid #333333',
          padding: '10px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 7, color: '#666666', letterSpacing: '0.1em' }}>
          ✦ DREAM &nbsp;&nbsp;|&nbsp;&nbsp; REALITY ✦
        </span>
        <span style={{ fontSize: 7, color: '#666666', letterSpacing: '0.1em' }}>
          SELECT A WORLD
        </span>
      </div>
    </div>
  )
}
