
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import ScrollToTop from './components/ScrollToTop'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Main from './pages/Main'
import Contacts from './pages/Contacts'
import ReviewsPage from './pages/Reviews'
import AboutUs from './pages/AboutUs'
import OurWorks from './pages/OurWorks'

import TurnkeyRenovation from './pages/turnkey_renovation/TurnkeyRenovation';
import DesignerRenovation from './pages/turnkey_renovation/DesignerRenovation';
import ExclusiveRenovation from './pages/turnkey_renovation/ExclusiveRenovation';
import Studio from './pages/turnkey_renovation/Studio';
import TworoomApartment from './pages/turnkey_renovation/TworoomApartment';
import ThreeroomApartment from './pages/turnkey_renovation/ThreeroomApartment';
import FourroomApartment from './pages/turnkey_renovation/FourroomApartment';
import TwostoryApartment from './pages/turnkey_renovation/TwostoryApartment';

import RoomRenovation from './pages/room_renovation/RoomRenovation'
import LivingRoom from './pages/room_renovation/LivingRoom'
import Bedroom from './pages/room_renovation/Bedroom'
import ChildrenRoom from './pages/room_renovation/ChildrenRoom'
import Corridor from './pages/room_renovation/Corridor'
import Kitchen from './pages/room_renovation/Kitchen'
import Bathroom from './pages/room_renovation/Bathroom'
import Stairs from './pages/room_renovation/Stairs';

import Systems from './pages/systems/Systems';
import ElectricalSystem from './pages/systems/ElectricalSystem';
import GasSystem from './pages/systems/GasSystem';
import FloorHeating from './pages/systems/FloorHeating';
import Sewage from './pages/systems/Sewage';
import ClimateControl from './pages/systems/ClimateControl';

import CommercialPremises from './pages/commercial_premises/CommercialPremises';
import BusinessCenter from './pages/commercial_premises/BusinessCenter';
import Restaurant from './pages/commercial_premises/Restaurant';
import CommercialPremisesRenovation from './pages/commercial_premises/CommercialPremisesRenovation';
import Office from './pages/commercial_premises/Office';
import Warehouse from './pages/commercial_premises/Warehouse';
import FitnessClub from './pages/commercial_premises/FitnessClub';
import Hotel from './pages/commercial_premises/Hotel';

import NotFound from './pages/NotFound';

import ServisesPhone from './pages/servises/ServisesPhone';
import TurnkeyRenovationServices from './pages/servises/TurnkeyRenovationServices';
import RoomRenovationServices from './pages/servises/RoomRenovationServices';
import CommercialPremisesServices from './pages/servises/CommercialPremisesServices';
import SystemsServices from './pages/servises/SystemsServices';

function App() {
  return (
    
    <BrowserRouter>
        <ScrollToTop/>
        <Nav />
        <div className='h-[65px] lg:h-[128px]'></div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/reviews' element={<ReviewsPage />} />
          <Route path='/about_us' element={<AboutUs />} />
          <Route path='/our_works' element={<OurWorks />} />

          <Route path='/turnkey_renovation' element={<TurnkeyRenovation />} />
          <Route path='/turnkey_renovation/designer_renovation' element={<DesignerRenovation />} />
          <Route path='/turnkey_renovation/exclusive_renovation' element={<ExclusiveRenovation />} />
          <Route path='/turnkey_renovation/studio' element={<Studio />} />
          <Route path='/turnkey_renovation/tworoom_apartments' element={<TworoomApartment />} />
          <Route path='/turnkey_renovation/threeroom_apartments' element={<ThreeroomApartment />} />
          <Route path='/turnkey_renovation/fourroom_apartments' element={<FourroomApartment />} />
          <Route path='/turnkey_renovation/twostory_apartments' element={<TwostoryApartment />} />

          <Route path='/room_renovation' element={<RoomRenovation />} />
          <Route path='/room_renovation/living_room' element={<LivingRoom />} />
          <Route path='/room_renovation/bedroom' element={<Bedroom />} />
          <Route path='/room_renovation/children_room' element={<ChildrenRoom />} />
          <Route path='/room_renovation/corridor' element={<Corridor />} />
          <Route path='/room_renovation/kitchen' element={<Kitchen />} />
          <Route path='/room_renovation/bathroom' element={<Bathroom />} />
          <Route path='/room_renovation/stairs' element={<Stairs />} />

          <Route path='/systems' element={<Systems />} />
          <Route path='/systems/electrical_system' element={<ElectricalSystem />} />
          <Route path='/systems/gas_system' element={<GasSystem />} />
          <Route path='/systems/floor_heating' element={<FloorHeating />} />
          <Route path='/systems/sewage' element={<Sewage />} />
          <Route path='/systems/climate_control' element={<ClimateControl />} />

          <Route path='/commercial_premises' element={<CommercialPremises />} />
          <Route path='/commercial_premises/business_center' element={<BusinessCenter />} />
          <Route path='/commercial_premises/restaurant' element={<Restaurant />} />
          <Route path='/commercial_premises/commercial_premises_renovation' element={<CommercialPremisesRenovation />} />
          <Route path='/commercial_premises/office' element={<Office />} />
          <Route path='/commercial_premises/warehouse' element={<Warehouse />} />
          <Route path='/commercial_premises/fitness_club' element={<FitnessClub />} />
          <Route path='/commercial_premises/hotel' element={<Hotel />} />

          <Route path='/*' element={<NotFound />} />

          <Route path='/services' element={<ServisesPhone />} />
          <Route path='/services/turnkey_renovation' element={<TurnkeyRenovationServices />} />
          <Route path='/services/room_renovation' element={<RoomRenovationServices />} />
          <Route path='/services/commercial_premises' element={<CommercialPremisesServices />} />
          <Route path='/services/systems' element={<SystemsServices />} />

        


        </Routes>
        <Footer/>

    </BrowserRouter>

    



  )
}


export default App
