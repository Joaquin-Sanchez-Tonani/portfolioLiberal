import './App.css'
import Header from './header/header'
import Body from './body/body'
import useStore from './zustand' // Importa el store
import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import es from './i19n/es.json'
import en from './i19n/en.json'


function App() {

  const l = useStore((state) => state.language);

  i18next.use(initReactI18next)
    .init({
        lng: l,
        interpolation:{
            escapeValue:false
        },
        resources:{
            en:{
                translation:en
            },
            es:{
                translation:es
            }
        }
    })
  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
