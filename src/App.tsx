import './App.css'
import { SedoHeader } from './components/shared/Header'
import { FieldTab } from './components/shared/Sidebar'
import { DetailsTab } from './components/shared/Body'

function App() {

  return (
    <div className="flex flex-col bg-[#DAD8E7] h-screen w-screen overflow-y-auto overflow-x-hidden">
      <SedoHeader />  
      <div className='flex flex-col lg:flex-row flex-1 gap-2 m-2 rounded-md min-h-0'>
        <FieldTab />
        <DetailsTab />
      </div>
    </div>
  )
}

export default App
