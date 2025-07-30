import Contacts from './pages/Contacts';
import ReviewsPage from './pages/Reviews';
import AboutUs from './pages/AboutUs';
import OurWorks from './pages/OurWorks';

import TurnkeyRenovation from './pages/turnkey_renovation/TurnkeyRenovation';
import DesignerRenovation from './pages/turnkey_renovation/DesignerRenovation';
import ExclusiveRenovation from './pages/turnkey_renovation/ExclusiveRenovation';
import Studio from './pages/turnkey_renovation/Studio';
import TworoomApartment from './pages/turnkey_renovation/TworoomApartment';
import ThreeroomApartment from './pages/turnkey_renovation/ThreeroomApartment';
import FourroomApartment from './pages/turnkey_renovation/FourroomApartment';
import TwostoryApartment from './pages/turnkey_renovation/TwostoryApartment';

import RoomRenovation from './pages/room_renovation/RoomRenovation';
import LivingRoom from './pages/room_renovation/LivingRoom';
import Bedroom from './pages/room_renovation/Bedroom';
import ChildrenRoom from './pages/room_renovation/ChildrenRoom';
import Corridor from './pages/room_renovation/Corridor';
import Kitchen from './pages/room_renovation/Kitchen';
import Bathroom from './pages/room_renovation/Bathroom';
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

import ServisesPhone from './pages/servises/ServisesPhone';
import TurnkeyRenovationServices from './pages/servises/TurnkeyRenovationServices';
import RoomRenovationServices from './pages/servises/RoomRenovationServices';
import CommercialPremisesServices from './pages/servises/CommercialPremisesServices';
import SystemsServices from './pages/servises/SystemsServices';

export const urlTranslations = [
  { key: 'Contacts', paths: { it: '/informazioni-di-contatto', en: '/contacts', ru: '/kontakty' }, element: <Contacts /> },
  { key: 'ReviewsPage', paths: { it: '/recensioni-2', en: '/reviews', ru: '/otzyvy' }, element: <ReviewsPage /> },
  { key: 'AboutUs', paths: { it: '/riguardo-alla-societa-di-costruzioni-evo-home', en: '/about-us', ru: '/o-nas' }, element: <AboutUs /> },
  { key: 'OurWorks', paths: { it: '/galleria-di-progetti-video-e-foto-di-ristrutturazioni-a-roma', en: '/our-works', ru: '/nashi-raboty' }, element: <OurWorks /> },

  { key: 'TurnkeyRenovation', paths: { it: '/ristrutturazione-di-un-appartamento-chiavi-in-mano', en: '/turnkey-renovation', ru: '/remont-pod-klyuch' }, element: <TurnkeyRenovation /> },
  { key: 'DesignerRenovation', paths: { it: '/ristrutturazione-di-design', en: '/designer-renovation', ru: '/dizajnerskij-remont' }, element: <DesignerRenovation /> },
  { key: 'ExclusiveRenovation', paths: { it: '/trasforma-la-tua-casa-con-evohome-ristrutturazioni-esclusive-ad-alto-livello', en: '/exclusive-renovation', ru: '/eksklyuzivnyj-remont' }, element: <ExclusiveRenovation /> },
  { key: 'Studio', paths: { it: '/ristrutturazione-di-monolocali-2', en: '/studio-renovation', ru: '/remont-studii' }, element: <Studio /> },
  { key: 'TworoomApartment', paths: { it: '/ristrutturazione-di-bilocali-2', en: '/two-room-renovation', ru: '/remont-dvushki' }, element: <TworoomApartment /> },
  { key: 'ThreeroomApartment', paths: { it: '/ristrutturazione-di-trilocale', en: '/three-room-renovation', ru: '/remont-treshki' }, element: <ThreeroomApartment /> },
  { key: 'FourroomApartment', paths: { it: '/ristrutturazione-quadrilocale-a-roma-2', en: '/four-room-renovation', ru: '/remont-chetirehkomnatnoj' }, element: <FourroomApartment /> },
  { key: 'TwostoryApartment', paths: { it: '/ristrutturazione-di-un-appartamento-su-due-piani', en: '/duplex-renovation', ru: '/remont-dvuhurovnevogo' }, element: <TwostoryApartment /> },

  { key: 'RoomRenovation', paths: { it: '/ristrutturazione-delle-stanze', en: '/room-renovation', ru: '/remont-komnat' }, element: <RoomRenovation /> },
  { key: 'LivingRoom', paths: { it: '/ristrutturazione-soggiorno-a-roma', en: '/living-room-renovation', ru: '/remont-gostinoj' }, element: <LivingRoom /> },
  { key: 'Bedroom', paths: { it: '/ristrutturazione-camera-da-letto-a-roma', en: '/bedroom-renovation', ru: '/remont-spalni' }, element: <Bedroom /> },
  { key: 'ChildrenRoom', paths: { it: '/ristrutturazione-della-stanza-dei-bambini-a-roma', en: '/children-room-renovation', ru: '/remont-detskoj' }, element: <ChildrenRoom /> },
  { key: 'Corridor', paths: { it: '/ristrutturazione-corridoio-a-roma', en: '/corridor-renovation', ru: '/remont-koridora' }, element: <Corridor /> },
  { key: 'Kitchen', paths: { it: '/ristrutturazione-cucina-a-roma', en: '/kitchen-renovation', ru: '/remont-kuhni' }, element: <Kitchen /> },
  { key: 'Bathroom', paths: { it: '/ristrutturazione-del-bagno-a-roma-2', en: '/bathroom-renovation', ru: '/remont-vannoj' }, element: <Bathroom /> },
  { key: 'Stairs', paths: { it: '/ristrutturazione-scale-a-roma-2', en: '/stairs-renovation', ru: '/remont-lestnicy' }, element: <Stairs /> },

  { key: 'Systems', paths: { it: '/impianti', en: '/systems', ru: '/sistemy' }, element: <Systems /> },
  { key: 'ElectricalSystem', paths: { it: '/impianto-elettrico-a-roma-2', en: '/electrical-system', ru: '/elektrosistema' }, element: <ElectricalSystem /> },
  { key: 'GasSystem', paths: { it: '/impianto-gas-a-roma', en: '/gas-system', ru: '/gazosnabzhenie' }, element: <GasSystem /> },
  { key: 'FloorHeating', paths: { it: '/riscaldamenti-a-pavimento-roma-3', en: '/floor-heating', ru: '/teplyj-pol' }, element: <FloorHeating /> },
  { key: 'Sewage', paths: { it: '/impianto-di-scarico-e-fognature-a-roma', en: '/sewage-system', ru: '/kanalizaciya' }, element: <Sewage /> },
  { key: 'ClimateControl', paths: { it: '/gli-impianti-di-climatizzazione-e-controllo-del-clima-a-roma', en: '/climate-control', ru: '/klimat-kontrol' }, element: <ClimateControl /> },

  { key: 'CommercialPremises', paths: { it: '/ristrutturazione-di-locali-commerciali-a-roma', en: '/commercial-renovation', ru: '/remont-kommercheskih' }, element: <CommercialPremises /> },
  { key: 'BusinessCenter', paths: { it: '/ristrutturazione-del-business-center-a-roma-2', en: '/business-center-renovation', ru: '/remont-biznes-centra' }, element: <BusinessCenter /> },
  { key: 'Restaurant', paths: { it: '/ristrutturazione-di-bar-e-ristoranti-a-roma', en: '/restaurant-renovation', ru: '/remont-restorana' }, element: <Restaurant /> },
  { key: 'CommercialPremisesRenovation', paths: { it: '/ristrutturazione-di-spazi-commerciali-a-roma', en: '/commercial-space-renovation', ru: '/remont-kommercheskih-pomeshchenij' }, element: <CommercialPremisesRenovation /> },
  { key: 'Office', paths: { it: '/ristrutturazione-di-uffici-a-roma-2', en: '/office-renovation', ru: '/remont-ofisa' }, element: <Office /> },
  { key: 'Warehouse', paths: { it: '/ristrutturazione-di-magazzini-a-roma-2', en: '/warehouse-renovation', ru: '/remont-sklada' }, element: <Warehouse /> },
  { key: 'FitnessClub', paths: { it: '/ristrutturazione-di-fitness-club-a-roma', en: '/fitness-club-renovation', ru: '/remont-fitnes-kluba' }, element: <FitnessClub /> },
  { key: 'Hotel', paths: { it: '/ristrutturazione-di-hotel-a-roma-2', en: '/hotel-renovation', ru: '/remont-otelya' }, element: <Hotel /> },

  { key: 'ServisesPhone', paths: { it: '/servizi', en: '/services', ru: '/uslugi' }, element: <ServisesPhone /> },
  { key: 'TurnkeyRenovationServices', paths: { it: '/servizi-ristrutturazione-di-un-appartamento-chiavi-in-mano', en: '/services-turnkey-renovation', ru: '/uslugi-remont-pod-klyuch' }, element: <TurnkeyRenovationServices /> },
  { key: 'RoomRenovationServices', paths: { it: '/servizi-ristrutturazione-delle-stanze', en: '/services-room-renovation', ru: '/uslugi-remont-komnat' }, element: <RoomRenovationServices /> },
  { key: 'CommercialPremisesServices', paths: { it: '/servizi-ristrutturazione-di-locali-commerciali-a-roma', en: '/services-commercial-renovation', ru: '/uslugi-kommercheskij-remont' }, element: <CommercialPremisesServices /> },
  { key: 'SystemsServices', paths: { it: '/servizi-impianti', en: '/services-systems', ru: '/uslugi-sistemy' }, element: <SystemsServices /> },
];
