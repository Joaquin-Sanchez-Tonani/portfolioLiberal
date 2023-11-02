import { useState, useEffect, useRef } from 'react'
import './header.css'
import useStore from '../zustand' // Importa el store
import { useTranslation } from 'react-i18next'

export default function Header(){
    const {t} = useTranslation()

    const sections = [{name: t("section1"), ruta: '#projects'},{name: t("section2"), ruta: '#education'},{name: t("section3"), ruta: '#contact'}]

   
    const myElementIsVisible = useStore((state) => state.myElementIsVisible);
    const myElementIsVisible2 = useStore((state) => state.myElementIsVisible2);
    const myElementIsVisible3 = useStore((state) => state.myElementIsVisible3);
    const language = useStore((state) => state.language);
    const setLanguage = useStore((state) => state.setLanguage);

    const changeLanguage = () =>{
        if(language === 'es'){
            setLanguage('en')
        }else{
            setLanguage('es')
        }
    }

    return(
        <header>
            <div className='logo-div'>
                <h1 className='logo'>
                    JST
                </h1>
            </div>
            <ul className='header_ul'>
                {
                    sections.map((e,index) =>{
                        return(
                        <li key={index} className={myElementIsVisible && index === 0 ? 'header_section_active' : (myElementIsVisible2 && index === 1 ? 'header_section_active' : (myElementIsVisible3 && index === 2 ? 'header_section_active' : 'header_section'))}>
                            <a  href={e.ruta}>
                                <div className="header_links_a">
                                    <h3  className='h3-header'>{e.name}                                
                                    </h3>
                                </div>
                            </a>
                        </li>
                        )
                    })
                }
            </ul>
            <div className='idioma-darkMode'>
                <button>
                    <p className='language' onClick={changeLanguage}>{language === 'en' ? 'EN' : 'ES'}</p>
                </button>
                
            </div>
        </header>
    )
}

