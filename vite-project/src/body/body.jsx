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

export default function Body() {
    const myElementIsVisible = useStore((state) => state.myElementIsVisible);
    const setMyElementIsVisible = useStore((state) => state.setMyElementIsVisible);

    const myElementIsVisible2 = useStore((state) => state.myElementIsVisible2);
    const setMyElementIsVisible2 = useStore((state) => state.setMyElementIsVisible2);

    const myElementIsVisible3 = useStore((state) => state.myElementIsVisible3);
    const setMyElementIsVisible3 = useStore((state) => state.setMyElementIsVisible3);

    const projects = [
        { name: "Calculator", type: 'Application', img: Project1, alt: "calculadora", date: "07/05/2023" },
        { name: "Ecommerce site", type: 'Website Design', img: Project3, alt: "ecommerce site", date: "12/08/2023", path: 'https://joaquin-sanchez-tonani-ecommerce.netlify.app/' },
        { name: "Hangman", type: 'Application', img: Project4, alt: "hangman", date: "17/10/2023", path: 'https://hangmanjoaquin.netlify.app/' },
        { name: "Converter", type: 'Application', img: Project2, alt: "converter", date: "03/06/2023" },
        { name: "Portfolio", type: 'Website Design', img: Project5, alt: "portfolio", date: "03/04/2023", path: 'https://joaquinsancheztonani.netlify.app/' }
    ];



    const [filtered, setFiltered] = useState(projects)
    const [filterActive, setFilterActive] = useState(0)

    const filterProject = (type, index) => {
        setFilterActive(index)
        if (type === 'All') {
            setFiltered(projects); // Muestra todos los proyectos
        } else if (type === 'Date') {
            const sortedProjects = [...filtered]; // Copia el arreglo filtrado para no modificar el estado original
            sortedProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
            setFiltered(sortedProjects);
        } else {
            const newFilter = projects.filter((project) => project.type === type);
            setFiltered(newFilter);
        }
    }

    const filterLi = ['All', 'Website Design', 'Application', 'Date']

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
                    <h3 className='phrase-home'>Unlocking Potential through Code.</h3>
                    <div >
                        <h1 className='fullname'>Joaquin Sanchez Tonani</h1>
                        <h2 className='profession'>Web Design</h2>
                        <div className='content'>
                            <li className="redes"><i className="fi link fi-brands-github"></i></li>
                            <li className="redes"><i className="fi link fi-brands-linkedin"></i></li>
                            <li className="redes"><i className="fi link fi-brands-twitter"></i></li>
                        </div>
                    </div>
                    <div className='img-text'>
                        <img className='image_profile' src={img} alt="joaquin sanchez tonani" />
                        <div>
                            <p>I'm Joaquin, a 20-year-old web developer from Argentina, working as a freelance professional. I specialize in crafting websites, ranging from portfolios to blog pages. </p>
                            <p>👨‍💻 Since 2 years ago.</p>
                            <p>📍 Rosario - Argentina.</p>
                        </div>
                    </div>
                </div>
            </article>
            <article id="projects">
                <div className='tittle-projects-phrase'>
                    <h3 ref={myRef} className={myElementIsVisible ? 'phrase-projects animation-phrase' : 'phrase-projects'}>Let's See My Works</h3>
                    <h2 className='section_tittle'>Projects</h2>
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
                    <h2 className='double-tittle'>EDUCATION</h2>
                    <div className={myElementIsVisible2 ? 'education-description animation-desc' : 'education-description'}>
                        <div>
                            <h3>UNIVERSITY CERTIFICATE IN PROGRAMMING</h3>
                            <p>FIRST YEAR | Current</p>
                        </div>
                        <div>
                            <h3>F.A.S.T.A. N°1158 </h3>
                            <p>Bachelor's degree in Eco. and Adm.</p>
                        </div>
                        <div>
                            <h3>COURSES</h3>
                            <div>
                                <p>PROGRAMMING COURSE:</p>
                                <p>#YoProgramo.</p>
                            </div>
                            <div>
                                <p>REACT COURSE:</p>
                                <p>freeCodeCamp.</p>
                            </div>
                            <div>
                                <p>REACT COURSE:</p>
                                <p>Midudev.</p>
                            </div>
                            <div>
                                <p>JAVASCRIPT COURSE:</p>
                                <p>Lucas Dalto.</p>
                            </div>
                            <div>
                                <p>ENGLISH COURSE:</p>
                                <p>Basic program of English.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='technology-div'>
                    <h2 className='double-tittle'>TECHNOLOGIES</h2>
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
                    <h2 className='section_tittle'>Contact</h2>
                    <Form  />
                </div >
                <span ref={myRef3}></span>
            </article>

        </section>
    )
}