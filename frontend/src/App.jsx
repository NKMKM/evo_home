
  import './App.css'
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import { useTranslation } from 'react-i18next';
  import { urlTranslations } from './urlTranslation';
  import LanguageRouter from './components/LanguageRouter';
  import { useState, useEffect } from 'react';

  import ScrollToTop from './components/ScrollToTop'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Breadcrumbs from './components/Breadcrumbs'

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
    const {i18n} = useTranslation();
    const [isI18nInitialized, setIsI18nInitialized] = useState(false);
    
    useEffect(() => {
      // Ждем инициализации i18n
      if (i18n.isInitialized) {
        setIsI18nInitialized(true);
      } else {
        const handleInitialized = () => setIsI18nInitialized(true);
        i18n.on('initialized', handleInitialized);
        return () => i18n.off('initialized', handleInitialized);
      }
    }, [i18n]);

    // Показываем загрузку пока i18n не инициализирован
    if (!isI18nInitialized) {
      return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }
    
    return (
      <BrowserRouter>
        <LanguageRouter>
          <ScrollToTop/>
          <Nav />
          <div className='h-[65px] lg:h-[128px]'></div>
          <Breadcrumbs />
          <Routes>
            {/* Главная страница */}
            <Route path={urlTranslations.home[i18n.language] || '/'} element={<Main />} />
            
            {/* Контакты */}
            <Route path={urlTranslations.contacts[i18n.language]} element={<Contacts />} />
            
            {/* Отзывы */}
            <Route path={urlTranslations.reviews[i18n.language]} element={<ReviewsPage />} />
            
            {/* О нас */}
            <Route path={urlTranslations.aboutUs[i18n.language]} element={<AboutUs />} />
            
            {/* Наши работы */}
            <Route path={urlTranslations.ourWorks[i18n.language]} element={<OurWorks />} />

            {/* Ремонт под ключ */}
            <Route path={urlTranslations.turnkeyRenovation[i18n.language]} element={<TurnkeyRenovation />} />
            <Route path={urlTranslations.designerRenovation[i18n.language]} element={<DesignerRenovation />} />
            <Route path={urlTranslations.exclusiveRenovation[i18n.language]} element={<ExclusiveRenovation />} />
            <Route path={urlTranslations.studio[i18n.language]} element={<Studio />} />
            <Route path={urlTranslations.tworoomApartment[i18n.language]} element={<TworoomApartment />} />
            <Route path={urlTranslations.threeroomApartment[i18n.language]} element={<ThreeroomApartment />} />
            <Route path={urlTranslations.fourroomApartment[i18n.language]} element={<FourroomApartment />} />
            <Route path={urlTranslations.twostoryApartment[i18n.language]} element={<TwostoryApartment />} />

            {/* Ремонт комнат */}
            <Route path={urlTranslations.roomRenovation[i18n.language]} element={<RoomRenovation />} />
            <Route path={urlTranslations.livingRoom[i18n.language]} element={<LivingRoom />} />
            <Route path={urlTranslations.bedroom[i18n.language]} element={<Bedroom />} />
            <Route path={urlTranslations.childrenRoom[i18n.language]} element={<ChildrenRoom />} />
            <Route path={urlTranslations.corridor[i18n.language]} element={<Corridor />} />
            <Route path={urlTranslations.kitchen[i18n.language]} element={<Kitchen />} />
            <Route path={urlTranslations.bathroom[i18n.language]} element={<Bathroom />} />
            <Route path={urlTranslations.stairs[i18n.language]} element={<Stairs />} />

            {/* Системы */}
            <Route path={urlTranslations.systems[i18n.language]} element={<Systems />} />
            <Route path={urlTranslations.electricalSystem[i18n.language]} element={<ElectricalSystem />} />
            <Route path={urlTranslations.gasSystem[i18n.language]} element={<GasSystem />} />
            <Route path={urlTranslations.floorHeating[i18n.language]} element={<FloorHeating />} />
            <Route path={urlTranslations.sewage[i18n.language]} element={<Sewage />} />
            <Route path={urlTranslations.climateControl[i18n.language]} element={<ClimateControl />} />

            {/* Коммерческие помещения */}
            <Route path={urlTranslations.commercialPremises[i18n.language]} element={<CommercialPremises />} />
            <Route path={urlTranslations.businessCenter[i18n.language]} element={<BusinessCenter />} />
            <Route path={urlTranslations.restaurant[i18n.language]} element={<Restaurant />} />
            <Route path={urlTranslations.commercialPremisesRenovation[i18n.language]} element={<CommercialPremisesRenovation />} />
            <Route path={urlTranslations.office[i18n.language]} element={<Office />} />
            <Route path={urlTranslations.warehouse[i18n.language]} element={<Warehouse />} />
            <Route path={urlTranslations.fitnessClub[i18n.language]} element={<FitnessClub />} />
            <Route path={urlTranslations.hotel[i18n.language]} element={<Hotel />} />

            {/* Услуги */}
            <Route path={urlTranslations.services[i18n.language]} element={<ServisesPhone />} />
            <Route path={urlTranslations.turnkeyRenovationServices[i18n.language]} element={<TurnkeyRenovationServices />} />
            <Route path={urlTranslations.roomRenovationServices[i18n.language]} element={<RoomRenovationServices />} />
            <Route path={urlTranslations.commercialPremisesServices[i18n.language]} element={<CommercialPremisesServices />} />
            <Route path={urlTranslations.systemsServices[i18n.language]} element={<SystemsServices />} />

            {/* 404 страница */}
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <Footer/>
        </LanguageRouter>
      </BrowserRouter>
    )
  }


  export default App
