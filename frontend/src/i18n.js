import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const resources  = {
    en:{
        'translation':{
            list :{
                first_stroke :'We want to transform',
                second_stroke: {
                    text_1: 'your ',
                    span: 'ideas',
                    text_2 : ' into'
                },
                third_stroke:{
                    text:'extraordinary spaces for ',
                    span: 'living'
                }
            },
            button:'REQUEST A QUOTE',
        },
    },
    ru: {
        'translation':{
            list :{
                first_stroke :'Мы хотим превратить',
                second_stroke: {
                    text_1: 'ваши',
                    span: 'идеи',
                    text_2 : ' в'
                },
                third_stroke:{
                    text:'необыкновенные пространства для ',
                    span: 'жизни'
                }
            },
            button:'ЗАПРОСИТЬ РАСЦЕНКИ',
        },
    }
}

i18n
    .use(initReactI18next)
    .use(HttpBackend)
    .init({
        // resources,
        lng: 'en',
        fallbackLng: 'ru',
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