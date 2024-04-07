import React from "react";

const Contactanos = () => {
    window.addEventListener("load", function () {
        document.getElementById("verAlerta").addEventListener("click", function () {
            alert('Se ha enviado tu mensaje!');
        })
    })

    // JavaScript para los desplegables de preguntas frecuentes
    document.addEventListener('DOMContentLoaded', function () {
        const questions = document.querySelectorAll('.question');

        questions.forEach(question => {
            question.addEventListener('click', function () {
                // Toggle class 'active' to show/hide the answer
                this.classList.toggle('active');
            });
        });
    });

    return (
        <main className="contact-main">
            <div className="container--edit">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt" />
                            <div className="topic">Dirección</div>
                            <div className="text-one">Bogotá, Colombia</div>
                            <div className="text-two">Calle 65 sur #80H 21</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt" />
                            <div className="topic">Telefono</div>
                            <div className="text-one">(+57)3223081570</div>
                            <div className="text-two">(+57)3108762060</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope" />
                            <div className="topic">Email</div>
                            <div className="text-one">JoyasKogi@gmail.com</div>
                            <div className="text-two">Comunicate con nosotros</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Envianos tú mensaje</div>
                        <p>¡Nos encantaría saber de ti! Si tienes alguna pregunta, consulta o simplemente deseas comunicarte con nosotros, no dudes en contactarnos. Nuestro equipo de atención al cliente está listo para ayudarte en lo que necesites.</p>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Ingresa tu nombre" />
                            </div>
                            <div className="input-box">
                                <input type="email" placeholder="Ingresa tu email" required />
                            </div>
                            <div className="input-box message-box">
                                <input type="text" placeholder="Ingresa tu mensaje" required />
                            </div>
                            <div className="button">
                                <input type="button" id="verAlerta" defaultValue="Enviar ahora" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Contactanos;
