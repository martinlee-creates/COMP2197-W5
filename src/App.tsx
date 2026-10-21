import { useState } from 'react'
import Admin from './Admin'
import Namegate from './Namegate'
import StaffScreen from './StaffScreen'

type Screen = 'namegate' | 'staff' | 'admin'

function App() {
  const [screen, setScreen] = useState<Screen>('namegate')

  switch (screen) {
    case 'admin':
      return <Admin onSelectStaff={() => setScreen('staff')} />
    case 'staff':
      return <StaffScreen onSelectAdmin={() => setScreen('admin')} />
    default:
      return <Namegate onContinue={() => setScreen('staff')} />
  }
}

export default App
