import './body.css'
import img from '../assets/profile.jpg'
import Project from './components/project'
import Form from './components/form'

import Project1 from '../assets/proj/c.png'
import Project2 from '../assets/proj/conv.png'
import Project3 from '../assets/proj/ecs.png'
import Project4 from '../assets/proj/hm.png'
import Project5 from '../assets/proj/pf.png'

import { useEffect, useState, useRef } from 'react'
import useStore from '../zustand' // Importa el store
import JS from '../assets/tech/js.png'
import NODE from '../assets/tech/node.png'
import REACT from '../assets/tech/react.png'
import MYSQL from '../assets/tech/mysql.png'
import HTML from '../assets/tech/html.png'
import CSS from '../assets/tech/css.png'
import GITHUB from '../assets/tech/github.png'
import GIT from '../assets/tech/git.png'

import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

import { useTranslation } from 'react-i18next';

export default function Body() {
    
    
    const {t} = useTranslation()
    
    const myElementIsVisible = useStore((state) => state.myElementIsVisible);
    const setMyElementIsVisible = useStore((state) => state.setMyElementIsVisible);

    const myElementIsVisible2 = useStore((state) => state.myElementIsVisible2);
    const setMyElementIsVisible2 = useStore((state) => state.setMyElementIsVisible2);

    const myElementIsVisible3 = useStore((state) => state.myElementIsVisible3);
    const setMyElementIsVisible3 = useStore((state) => state.setMyElementIsVisible3);

    const projects = [
        { name: "Calculator", type: t("filtrado3"), img: Project1, alt: "calculadora", date: "07/05/2023" },
        { name: "Ecommerce site", type: t("filtrado2"), img: Project3, alt: "ecommerce site", date: "12/08/2023", path: 'https://joaquin-sanchez-tonani-ecommerce.netlify.app/' },
        { name: "Hangman", type: t("filtrado3"), img: Project4, alt: "hangman", date: "17/10/2023", path: 'https://hangmanjoaquin.netlify.app/' },
        { name: "Converter", type: t("filtrado3"), img: Project2, alt: "converter", date: "03/06/2023" },
        { name: "Portfolio", type: t("filtrado2"), img: Project5, alt: "portfolio", date: "03/04/2023", path: 'https://joaquinsancheztonani.netlify.app/' }
    ];



    const [filtered, setFiltered] = useState(projects)
    const [filterActive, setFilterActive] = useState(0)

    const filterProject = (type, index) => {
        setFilterActive(index)
        if (type === 'All' || type === 'Todo') {
            setFiltered(projects); // Muestra todos los proyectos
        } else if (type === 'Date' || type === 'Fecha') {
            const sortedProjects = [...filtered]; // Copia el arreglo filtrado para no modificar el estado original
            sortedProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
            setFiltered(sortedProjects);
        } else {
            const newFilter = projects.filter((project) => project.type === type);
            setFiltered(newFilter);
        }
    }

    const filterLi = [t("filtrado1"), t("filtrado2"), t("filtrado3"), t("filtrado4")]

    // animation useRef
    const myRef = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])
    const myRef2 = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMyElementIsVisible2(entry.isIntersecting)
        })
        observer.observe(myRef2.current)
    }, [])

    const myRef3 = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMyElementIsVisible3(entry.isIntersecting)
        })
        observer.observe(myRef3.current)
    }, [])

    return (
        <section>
            <article className='article_about_me'>
                <div className='tittles_name_profession'>
                    <h3 className='phrase-home'> {t("PHRASE")}</h3>
                    <div >
                        <Flip left cascade>
                            <h1 className='fullname'>Joaquin Sanchez Tonani</h1>
                            <h2 className='profession'>Full-Stack Developer</h2>  
                        </Flip>
                        
                        <div className='content'>
                            <li className="redes"><a target='_blank' href="https://github.com/Joaquin-Sanchez-Tonani"><i className="fi link fi-brands-github"></i></a></li>
                            <li className="redes"><a target='_blank' href="https://www.linkedin.com/in/joaquin-dario-sanchez-tonani-ba7117272/"><i className="fi link fi-brands-linkedin"></i></a></li>
                            <li className="redes"><a target='_blank' href='https://twitter.com/sanchez_joaq'><i className="fi link fi-brands-twitter"></i></a></li>
                        </div>
                    </div>
                    <div className='img-text'>
                        <img className='image_profile' src={img} alt="joaquin sanchez tonani" />
                        <Zoom bottom left cascade>
                        <div>
                            <p>{t("description")}</p>
                            <p>{t("description2")}</p>
                            <p>📍 Rosario - Argentina.</p>
                        </div>
                        </Zoom>
                    </div>
                </div>
                <a className='down-arrow' href="#projects"><i className="fi fi-sr-arrow-circle-down"></i></a>
            </article>
            <article id="projects">
                <div className='tittle-projects-phrase'>
                    <h3  className={myElementIsVisible ? 'phrase-projects animation-phrase' : 'phrase-projects'}>Let's See My Works</h3>
                    <h2 ref={myRef} className='section_tittle'>{t("section1")}</h2>
                </div>
                <div>
                    <ul className='filtered-out'>
                        {filterLi.map((e, index) => {
                            return (
                                <li className={filterActive === index ? 'liActive marked' : 'liActive'} key={index} onClick={() => filterProject(e, index)}>{e}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className='container-projects'>
                    {filtered.map((project, index) => {
                        return (
                            <Project key={index} name={project.name} img={project.img} alt={project.alt} date={project.date} path={project.path} />
                        )
                    })}

                </div>
            </article>
            <article id='education' className='education'>
                <div className='education-div'>
                    <h2 className='double-tittle'>{t("section2")}</h2>
                    <div className={myElementIsVisible2 ? 'education-description animation-desc' : 'education-description'}>
                        <div>
                            <h3>{t("educationSection1")}</h3>
                            <p>{t("grado2")}</p>
                        </div>
                        <div>
                            <h3>{t("educationSection2")}</h3>
                            <p>{t("grado")}</p>
                        </div>
                        <div>
                            <h3>{t("educationSection3")}</h3>
                            <div>
                                <p>{t("grado6")}</p>
                                <p>#YoProgramo.</p>
                            </div>
                            <div>
                                <p>{t("grado3")}</p>
                                <p>freeCodeCamp.</p>
                            </div>
                            <div>
                                <p>{t("grado3")}</p>
                                <p>Midudev.</p>
                            </div>
                            <div>
                                <p>{t("grado5")}</p>
                                <p>Lucas Dalto.</p>
                            </div>
                            <div>
                                <p>{t("grado4")}</p>
                                <p>Basic program of English.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='technology-div'>
                    <h2 className='double-tittle'>{t("section4")}</h2>
                    <div>
                        <div ref={myRef2}> <h3 className="tittle-tech">JavaScript</h3> <img src={JS} alt="" className='technologies' />          </div>
                        <div> <h3 className='tittle-tech'>Node</h3> <img src={NODE} alt="" className='technologies' />        </div>
                        <div> <h3 className='tittle-tech'>React</h3> <img src={REACT} alt="" className='technologies' />       </div>
                        <div> <h3 className='tittle-tech'>MySQL</h3> <img src={MYSQL} alt="" className='technologies' />       </div>
                        <div> <h3 className='tittle-tech'>HTML</h3> <img src={HTML} alt="" className='technologies' />        </div>
                        <div> <h3 className='tittle-tech'>CSS</h3> <img src={CSS} alt="" className='technologies' />         </div>
                        <div> <h3 className='tittle-tech'>GitHub</h3> <img src={GITHUB} alt="" className='technologies' />      </div>
                        <div> <h3 className='tittle-tech'>Git</h3> <img src={GIT} alt="" className='technologies' />         </div>
                    </div>
                </div>

            </article>
            <article id='contact' className='article-contact'>
                <div  className='contact'>
                    <h2 className='section_tittle'>{t("section3")}</h2>
                    <Form  />
                </div >
                <span ref={myRef3}></span>
            </article>

        </section>
    )
}