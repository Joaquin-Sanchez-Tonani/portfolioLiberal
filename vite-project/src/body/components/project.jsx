import './project.css'
import {useState, useEffect, useRef } from 'react'

export default function Project(props){
    const [myElementIsVisible,setMyElementIsVisible] = useState(false)
    const myRef = useRef()
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    },[])
    // date-name-type-img-alt
    return(
        <a target='_blank' href={props.path}>
            <div ref={myRef} className={myElementIsVisible ? 'project-container project-container-animation' : 'project-container'}>
                <h2 className='project-name'>{props.name}</h2>
                <img className="project-image" src={props.img} alt={props.alt} />
                <h4 className='project-date'>{props.date}</h4>
            </div>
        </a>
    )
}
