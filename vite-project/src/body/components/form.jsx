import React from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import './form.css'

function Form() {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const pressText = (event) => {
      setText(event.target.value);
    };
  
    const pressEmail = (event) => {
      setEmail(event.target.value);
    };
  
    const pressMessage = (event) => {
      setMessage(event.target.value);
    };
  
    const send = (event) => {
      event.preventDefault();
      const templateParams = {
        from_name: text,
        from_email: email,
        to_name: 'Joaquin Sanchez', // Reemplaza con el nombre del destinatario
        subject: 'Empleo o freelance.',
        message: message,
      };
      const campoValidacion = {};
  
      if (text.trim() === '') {
        campoValidacion.nombre = 'Se requiere nombre';
      }
  
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        campoValidacion.email = 'El email no es válido';
      }
  
      if (message.trim() === '') {
        campoValidacion.mensaje = 'El mensaje es requerido';
      }
  
      setError(campoValidacion);
  
      if (Object.keys(campoValidacion).length === 0) {
        emailjs.send('service_8ep3rf9','template_0fm7z6o',templateParams,'Jbxdd2IbV9wpoJ56C')
        .then((response) => {
          alert('Correo enviado correctamente.');
        }, (error) => {
          alert('Error al enviar el correo: ' + error);
        });
        
        setText('');
        setEmail('');
        setMessage('');
        setIsSubmitted(true);
      } else {
        console.log('Formulario no enviado', error);
      }
    };
  
    return (
      <form className="form" onSubmit={send}>
        <input
          onChange={pressText}
          type="text"
          value={text}
          name="name"
          placeholder="Name"
          className="input-text"
        />
        {error.nombre && <span className="error-text">{error.nombre}</span>}
  
        <input
          onChange={pressEmail}
          type="email"
          value={email}
          placeholder="Email"
          className="input-text"
        />
        {error.email && <span className="error-text">{error.email}</span>}
  
        <textarea
          onChange={pressMessage}
          type="text"
          value={message}
          placeholder="Message"
          className="input-text-area"
        />
        {error.mensaje && <span className="error-text">{error.mensaje}</span>}
  
        <button className="button-form" type="submit">Send</button>
        {isSubmitted && !error.nombre && !error.mensaje && !error.email && <span className="sended-text">¡Message sent!</span>}
      </form>
    );
  }
  
  export default Form;