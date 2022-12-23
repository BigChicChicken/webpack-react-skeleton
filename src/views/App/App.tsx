import React, { Component } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import messagesEn from 'resources/translations/messages.en.yaml';

i18n.use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: messagesEn,
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })
    .catch(console.error);

class App extends Component<{}, {}> {
    render = () => {
        return <p className="text-white uppercase">Hello world !!!</p>;
    };
}

export default App;
