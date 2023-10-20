import { useState, useEffect, useRef } from 'react'
import './header.css'
import useStore from '../zustand' // Importa el store

export default function Header(){
    
    const sections = [{name: 'PROJECTS', ruta: '#projects'},{name: 'EDUCATION', ruta: '#education'},{name: 'CONTACT', ruta: '#contact'}]

   
    const myElementIsVisible = useStore((state) => state.myElementIsVisible);
    const myElementIsVisible2 = useStore((state) => state.myElementIsVisible2);
    const myElementIsVisible3 = useStore((state) => state.myElementIsVisible3);


    return(
        <header>
            <div>
                <h1 className='logo'>
                    JS
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
                    <i className="fi fi-rr-language"></i>
                </button>
                
            </div>
        </header>
    )
}

