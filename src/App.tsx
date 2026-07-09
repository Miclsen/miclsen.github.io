import { useState } from 'react'
import MenuScreen from './components/MenuScreen'
import VideoPortfolio from './components/VideoPortfolio'
import SoftwarePortfolio from './components/SoftwarePortfolio'

export type View = 'menu' | 'video' | 'software'

export default function App() {
  const [view, setView] = useState<View>('menu')

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <MenuScreen
        visible={view === 'menu'}
        onVideoClick={() => setView('video')}
        onSoftwareClick={() => setView('software')}
      />
      <VideoPortfolio
        visible={view === 'video'}
        onBack={() => setView('menu')}
      />
      <SoftwarePortfolio
        visible={view === 'software'}
        onBack={() => setView('menu')}
      />
    </div>
  )
}
