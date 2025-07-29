import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpBackend from 'i18next-http-backend';



const savedLng = localStorage.getItem('i18nextLng') || 'it';

i18n
    .use(initReactI18next)
    .use(HttpBackend)
    .init({
        // resources,
        lng: savedLng,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // путь к файлам
        },
        ns: [
            'home/HomeStart'
        ],
        defaultNS: 'home/HomeStart',
        interpolation: {
            escapeValue: false,
        },
  
    })
    .then(() => console.log('i18n инициализирован'))
    .catch((err) => console.error('Ошибка i18n:', err));

export default i18n;