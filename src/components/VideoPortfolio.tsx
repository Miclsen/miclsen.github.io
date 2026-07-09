import { useEffect, useState } from 'react'

interface Props {
  visible: boolean
  onBack: () => void
}

const PROJECTS = [
  {
    title: 'NEON DREAMS',
    type: 'Music Video',
    desc: 'Directed and edited a surrealist music video blending hand-drawn animation with live-action footage. Motion tracking, color grading, and VFX compositing.',
    tools: ['Premiere Pro', 'After Effects', 'Cinema 4D'],
    color: '#FFB5C8',
    duration: '3:47',
    year: '2024',
  },
  {
    title: 'BEYOND THE SURFACE',
    type: 'Short Documentary',
    desc: 'Feature documentary on underground artists. Managed multi-camera sync, archival footage restoration, and narrative pacing across 28 minutes.',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Audition'],
    color: '#C8A8E9',
    duration: '28:12',
    year: '2024',
  },
  {
    title: 'MIDNIGHT BLOOM',
    type: 'Brand Campaign',
    desc: 'Series of 6 cinematic brand spots for an independent fragrance label. HDR grading pipeline and synchronized motion graphics package.',
    tools: ['After Effects', 'DaVinci Resolve', 'Illustrator'],
    color: '#FFE8A0',
    duration: '0:30 × 6',
    year: '2023',
  },
  {
    title: 'ECHOES',
    type: 'Lyric Video',
    desc: 'Animated lyric video using procedural motion design. Typography-driven visual language synced to stem audio, exported for multi-platform distribution.',
    tools: ['After Effects', 'Premiere Pro'],
    color: '#B8E8D0',
    duration: '4:15',
    year: '2023',
  },
]

const SKILLS = [
  { name: 'Adobe Premiere Pro', level: 95 },
  { name: 'After Effects', level: 88 },
  { name: 'DaVinci Resolve', level: 82 },
  { name: 'Motion Graphics', level: 80 },
  { name: 'Color Grading', level: 85 },
  { name: 'Sound Design', level: 70 },
]

function PixelBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 7, color: '#5B4E77', fontFamily: "'Press Start 2P', monospace" }}>{label}</span>
        <span style={{ fontSize: 7, color: color, fontFamily: "'Press Start 2P', monospace" }}>{value}%</span>
      </div>
      <div style={{ height: 8, background: '#F0E8F8', border: '2px solid #C8A8E9', display: 'flex' }}>
        <div
          style={{
            width: `${value}%`,
            height: '100%',
            background: `repeating-linear-gradient(90deg, ${color} 0px, ${color} 6px, transparent 6px, transparent 8px)`,
            transition: 'width 1s ease',
          }}
        />
      </div>
    </div>
  )
}

export default function VideoPortfolio({ visible, onBack }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (visible) setTimeout(() => setMounted(true), 50)
    else setMounted(false)
  }, [visible])

  return (
    <div
      className="absolute inset-0 overflow-y-auto"
      style={{
        transform: visible ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Press Start 2P', monospace",
        background: 'linear-gradient(160deg, #F8F0FF 0%, #FFF5F8 35%, #F0FAFF 70%, #FFFBE8 100%)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: '#000000',
          borderBottom: '4px solid #FFB5C8',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          position: 'sticky',
          top: 0,
          zIndex: 20,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'transparent',
            border: '3px solid #FFB5C8',
            color: '#FFB5C8',
            padding: '6px 10px',
            fontSize: 8,
            cursor: 'pointer',
            fontFamily: "'Press Start 2P', monospace",
            boxShadow: '3px 3px 0 #FF8FA3',
            transition: 'all 0.1s',
          }}
          onMouseEnter={e => {
            (e.target as HTMLElement).style.background = '#FFB5C8'
            ;(e.target as HTMLElement).style.color = '#000000'
          }}
          onMouseLeave={e => {
            (e.target as HTMLElement).style.background = 'transparent'
            ;(e.target as HTMLElement).style.color = '#FFB5C8'
          }}
        >
          ◀ BACK
        </button>
        <span style={{ fontSize: 10, color: '#FFFFFF', letterSpacing: '0.1em', textShadow: '0 0 12px rgba(255,181,200,0.6)' }}>
          ✦ VIDEO EDITOR
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          {['#FFB5C8', '#C8A8E9', '#FFE8A0'].map((c, i) => (
            <div key={i} style={{ width: 8, height: 8, background: c, animation: `sparkle ${1.5 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }} />
          ))}
        </div>
      </div>

      <div style={{ padding: '32px 32px 64px', maxWidth: 900, margin: '0 auto' }}>
        {/* Hero bio */}
        <div
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '4px solid #000000',
            boxShadow: '6px 6px 0 #C8A8E9',
            padding: 24,
            marginBottom: 32,
          }}
        >
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Avatar pixel art */}
            <div
              style={{
                width: 64,
                height: 64,
                background: '#FFB5C8',
                border: '4px solid #000',
                flexShrink: 0,
                position: 'relative',
                boxShadow: '4px 4px 0 #000',
              }}
            >
              <div style={{ position: 'absolute', inset: 6, background: '#FFEEF4', border: '2px solid #000' }}>
                <div style={{ position: 'absolute', top: 8, left: 6, width: 6, height: 6, background: '#5B4E77' }} />
                <div style={{ position: 'absolute', top: 8, right: 6, width: 6, height: 6, background: '#5B4E77' }} />
                <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', width: 16, height: 4, background: '#FF6B6B', borderRadius: 0 }} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: '#2D1B4E', marginBottom: 12, textShadow: '2px 2px 0 rgba(200,168,233,0.4)' }}>
                CREATIVE EDITOR
              </div>
              <p style={{ color: '#5B4E77', lineHeight: 2.2, fontFamily: 'VT323, monospace', fontSize: 16 }}>
                Crafting visual stories through precision editing, color science, and motion design.
                Specializing in music videos, documentaries, and brand campaigns that leave an impression.
              </p>
              <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['3+ YEARS EXP', 'FREELANCE OPEN', 'REMOTE READY'].map(tag => (
                  <span key={tag} style={{ fontSize: 6, color: '#C8A8E9', border: '2px solid #C8A8E9', padding: '3px 6px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 9, color: '#2D1B4E', marginBottom: 20, borderBottom: '2px solid #C8A8E9', paddingBottom: 8 }}>
            ✦ SELECTED WORKS
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {PROJECTS.map((project, i) => (
              <div
                key={project.title}
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: '4px solid #000000',
                  boxShadow: `4px 4px 0 ${project.color}`,
                  padding: 20,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.4s ease ${i * 0.1}s, transform 0.4s ease ${i * 0.1}s`,
                }}
              >
                {/* Type badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 6, color: project.color, border: `2px solid ${project.color}`, padding: '2px 6px', background: 'rgba(255,255,255,0.8)' }}>
                    {project.type}
                  </span>
                  <span style={{ fontSize: 6, color: '#888888' }}>{project.year}</span>
                </div>
                {/* Title */}
                <div style={{ fontSize: 9, color: '#2D1B4E', marginBottom: 10, textShadow: `1px 1px 0 ${project.color}` }}>
                  {project.title}
                </div>
                {/* Preview bar */}
                <div
                  style={{
                    height: 48,
                    background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
                    border: `2px solid ${project.color}66`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 12,
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: 16, color: project.color }}>▶</span>
                  <span style={{ marginLeft: 8, fontSize: 7, color: '#5B4E77' }}>{project.duration}</span>
                </div>
                <p style={{ fontSize: 12, color: '#5B4E77', lineHeight: 1.6, fontFamily: 'VT323, monospace', marginBottom: 12 }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  {project.tools.map(tool => (
                    <span key={tool} style={{ fontSize: 6, color: '#888888', background: '#F8F0FF', border: '1px solid #E8D8F8', padding: '2px 5px' }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div
          style={{
            marginTop: 32,
            background: 'rgba(255,255,255,0.85)',
            border: '4px solid #000000',
            boxShadow: '6px 6px 0 #FFB5C8',
            padding: 24,
          }}
        >
          <div style={{ fontSize: 9, color: '#2D1B4E', marginBottom: 20 }}>✦ SKILL LEVELS</div>
          {SKILLS.map(s => (
            <PixelBar key={s.name} label={s.name} value={s.level} color="#C8A8E9" />
          ))}
        </div>

        {/* Contact */}
        <div
          style={{
            marginTop: 24,
            textAlign: 'center',
            padding: 24,
            border: '4px solid #FFB5C8',
            background: 'rgba(255,181,200,0.08)',
            boxShadow: '4px 4px 0 #C8A8E9',
          }}
        >
          <div style={{ fontSize: 8, color: '#2D1B4E', marginBottom: 12 }}>AVAILABLE FOR PROJECTS</div>
          <div style={{ fontSize: 14, color: '#C8A8E9', fontFamily: 'VT323, monospace', marginBottom: 16 }}>
            hello@yourname.com
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['BEHANCE', 'VIMEO', 'INSTAGRAM', 'LINKEDIN'].map(link => (
              <button
                key={link}
                style={{
                  fontSize: 7,
                  color: '#FFB5C8',
                  background: 'transparent',
                  border: '3px solid #FFB5C8',
                  padding: '6px 10px',
                  cursor: 'pointer',
                  fontFamily: "'Press Start 2P', monospace",
                  boxShadow: '3px 3px 0 #C8A8E9',
                }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
