import { useEffect, useState } from 'react'

interface Props {
  visible: boolean
  onBack: () => void
}

const PROJECTS = [
  {
    title: 'DevFlow',
    type: 'Web App',
    desc: 'Full-stack task management platform with real-time collaboration, drag-and-drop Kanban boards, and GitHub integration. Handles 500+ concurrent users.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    status: 'LIVE',
    year: '2024',
    stars: 247,
  },
  {
    title: 'Chromashift',
    type: 'CLI Tool',
    desc: 'Intelligent color palette generator using perceptual color science. Exports accessible, contrast-checked palettes to CSS, Figma tokens, and Swift color assets.',
    stack: ['Python', 'NumPy', 'Click', 'Rich'],
    status: 'OPEN SOURCE',
    year: '2024',
    stars: 89,
  },
  {
    title: 'NeuralNotes',
    type: 'AI App',
    desc: 'AI-powered note-taking with semantic search, automatic summarization, and knowledge graph visualization. Built on Claude API with local-first storage.',
    stack: ['React', 'Anthropic API', 'SQLite', 'D3.js'],
    status: 'BETA',
    year: '2023',
    stars: 412,
  },
  {
    title: 'PixelForge',
    type: 'Creative Tool',
    desc: 'Browser-based pixel art editor with layer support, animation frames, palette management, and one-click export to GIF, PNG spritesheet, and ASEPRITE format.',
    stack: ['TypeScript', 'Canvas API', 'Vite', 'IndexedDB'],
    status: 'LIVE',
    year: '2023',
    stars: 156,
  },
]

const SKILLS = [
  { category: 'FRONTEND', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { category: 'BACKEND', items: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL'] },
  { category: 'TOOLS', items: ['Git', 'Docker', 'Linux', 'Figma', 'Claude API'] },
  { category: 'CONCEPTS', items: ['System Design', 'CI/CD', 'Testing', 'Performance', 'A11y'] },
]

const STATUS_COLORS: Record<string, string> = {
  'LIVE': '#5CB85C',
  'OPEN SOURCE': '#5B9BD5',
  'BETA': '#D4A017',
}

function TerminalLine({ text, delay }: { text: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s', color: '#AAAAAA', fontSize: 13, fontFamily: 'VT323, monospace', lineHeight: 1.5 }}>
      {text}
    </div>
  )
}

export default function SoftwarePortfolio({ visible, onBack }: Props) {
  const [mounted, setMounted] = useState(false)
  const [blinkOn, setBlinkOn] = useState(true)

  useEffect(() => {
    if (visible) setTimeout(() => setMounted(true), 100)
    else setMounted(false)
  }, [visible])

  useEffect(() => {
    const t = setInterval(() => setBlinkOn(b => !b), 500)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      className="absolute inset-0 overflow-y-auto"
      style={{
        transform: visible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Press Start 2P', monospace",
        background: '#111111',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Header */}
      <div
        style={{
          background: '#0A0A0A',
          borderBottom: '4px solid #333333',
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
            border: '3px solid #555555',
            color: '#AAAAAA',
            padding: '6px 10px',
            fontSize: 8,
            cursor: 'pointer',
            fontFamily: "'Press Start 2P', monospace",
            boxShadow: '3px 3px 0 #333333',
            transition: 'all 0.1s',
          }}
          onMouseEnter={e => {
            (e.target as HTMLElement).style.borderColor = '#AAAAAA'
            ;(e.target as HTMLElement).style.color = '#FFFFFF'
          }}
          onMouseLeave={e => {
            (e.target as HTMLElement).style.borderColor = '#555555'
            ;(e.target as HTMLElement).style.color = '#AAAAAA'
          }}
        >
          ◀ BACK
        </button>
        <span style={{ fontSize: 10, color: '#E0E0E0', letterSpacing: '0.1em', animation: 'flicker 8s steps(1) infinite' }}>
          // SOFTWARE ENGINEER
        </span>
        <span style={{ marginLeft: 'auto', fontSize: 8, color: '#555555' }}>
          {blinkOn ? '█' : ' '}
        </span>
      </div>

      <div style={{ padding: '32px 32px 64px', maxWidth: 900, margin: '0 auto' }}>
        {/* Terminal bio */}
        <div
          style={{
            background: '#0D0D0D',
            border: '4px solid #333333',
            boxShadow: '6px 6px 0 #000000',
            padding: 20,
            marginBottom: 32,
          }}
        >
          {/* Terminal title bar */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #222222' }}>
            <div style={{ width: 12, height: 12, background: '#3A3A3A', border: '2px solid #444' }} />
            <div style={{ width: 12, height: 12, background: '#3A3A3A', border: '2px solid #444' }} />
            <div style={{ width: 12, height: 12, background: '#3A3A3A', border: '2px solid #444' }} />
            <span style={{ marginLeft: 8, fontSize: 7, color: '#555555' }}>terminal — portfolio@local</span>
          </div>
          {mounted && (
            <>
              <TerminalLine text="> whoami" delay={0} />
              <TerminalLine text="  software engineer · builder · creative technologist" delay={150} />
              <TerminalLine text="> cat skills.txt" delay={350} />
              <TerminalLine text="  3+ years professional experience" delay={500} />
              <TerminalLine text="  full-stack development, AI/ML integration" delay={650} />
              <TerminalLine text="  open to full-time & contract opportunities" delay={800} />
              <TerminalLine text={`> █`} delay={950} />
            </>
          )}
        </div>

        {/* Projects */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 9, color: '#E0E0E0', marginBottom: 20, borderBottom: '2px solid #333333', paddingBottom: 8 }}>
            // SELECTED_PROJECTS
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {PROJECTS.map((project, i) => (
              <div
                key={project.title}
                style={{
                  background: '#161616',
                  border: '4px solid #2A2A2A',
                  boxShadow: '4px 4px 0 #000000',
                  padding: 20,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.4s ease ${i * 0.1}s, transform 0.4s ease ${i * 0.1}s`,
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#444444'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#2A2A2A'
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 6, color: '#666666', border: '2px solid #2A2A2A', padding: '2px 5px' }}>
                    {project.type}
                  </span>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ fontSize: 6, color: STATUS_COLORS[project.status] || '#888888', border: `2px solid ${STATUS_COLORS[project.status] || '#444'}`, padding: '2px 5px' }}>
                      {project.status}
                    </span>
                    <span style={{ fontSize: 6, color: '#555555' }}>{project.year}</span>
                  </div>
                </div>

                {/* Title */}
                <div style={{ fontSize: 9, color: '#E0E0E0', marginBottom: 10 }}>
                  {project.title}
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  <span style={{ fontSize: 10, color: '#888888' }}>★</span>
                  <span style={{ fontSize: 7, color: '#666666' }}>{project.stars}</span>
                </div>

                <p style={{ fontSize: 13, color: '#888888', lineHeight: 1.6, fontFamily: 'VT323, monospace', marginBottom: 14 }}>
                  {project.desc}
                </p>

                {/* Stack */}
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  {project.stack.map(tech => (
                    <span key={tech} style={{ fontSize: 6, color: '#777777', background: '#1D1D1D', border: '1px solid #333333', padding: '2px 5px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div
          style={{
            marginTop: 32,
            background: '#161616',
            border: '4px solid #2A2A2A',
            boxShadow: '6px 6px 0 #000000',
            padding: 24,
          }}
        >
          <div style={{ fontSize: 9, color: '#E0E0E0', marginBottom: 20 }}>// TECH_STACK</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 20 }}>
            {SKILLS.map(group => (
              <div key={group.category}>
                <div style={{ fontSize: 7, color: '#666666', marginBottom: 10, borderBottom: '1px solid #2A2A2A', paddingBottom: 6 }}>
                  {group.category}
                </div>
                {group.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <div style={{ width: 4, height: 4, background: '#444444' }} />
                    <span style={{ color: '#888888', fontFamily: 'VT323, monospace', fontSize: 14 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* GitHub activity bar */}
        <div
          style={{
            marginTop: 24,
            background: '#161616',
            border: '4px solid #2A2A2A',
            boxShadow: '4px 4px 0 #000000',
            padding: 20,
          }}
        >
          <div style={{ fontSize: 8, color: '#666666', marginBottom: 14 }}>// COMMIT_ACTIVITY — 2024</div>
          <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            {Array.from({ length: 52 }, (_, week) =>
              Array.from({ length: 7 }, (_, day) => {
                const activity = Math.random()
                const bg = activity > 0.75 ? '#4A6A4A' : activity > 0.5 ? '#3A5A3A' : activity > 0.3 ? '#2A3A2A' : '#1A1A1A'
                return (
                  <div
                    key={`${week}-${day}`}
                    style={{ width: 8, height: 8, background: bg, border: '1px solid #111111' }}
                    title={`Week ${week + 1}, Day ${day + 1}`}
                  />
                )
              })
            )}
          </div>
          <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 7, color: '#555555' }}>LESS</span>
            {['#1A1A1A', '#2A3A2A', '#3A5A3A', '#4A6A4A'].map((c, i) => (
              <div key={i} style={{ width: 8, height: 8, background: c, border: '1px solid #111' }} />
            ))}
            <span style={{ fontSize: 7, color: '#555555' }}>MORE</span>
          </div>
        </div>

        {/* Contact */}
        <div
          style={{
            marginTop: 24,
            background: '#0D0D0D',
            border: '4px solid #333333',
            boxShadow: '4px 4px 0 #000000',
            padding: 24,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 8, color: '#AAAAAA', marginBottom: 12 }}>// CONTACT</div>
          <div style={{ fontSize: 16, color: '#666666', fontFamily: 'VT323, monospace', marginBottom: 16 }}>
            hello@yourname.dev
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['GITHUB', 'LINKEDIN', 'RESUME.PDF', 'TWITTER'].map(link => (
              <button
                key={link}
                style={{
                  fontSize: 7,
                  color: '#888888',
                  background: 'transparent',
                  border: '3px solid #333333',
                  padding: '6px 10px',
                  cursor: 'pointer',
                  fontFamily: "'Press Start 2P', monospace",
                  boxShadow: '3px 3px 0 #000000',
                  transition: 'all 0.1s',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.borderColor = '#666666'
                  ;(e.target as HTMLElement).style.color = '#E0E0E0'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.borderColor = '#333333'
                  ;(e.target as HTMLElement).style.color = '#888888'
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
