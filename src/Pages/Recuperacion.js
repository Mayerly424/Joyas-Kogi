import React, { useState } from 'react';

function Recuperacion() {
    const [active, setActive] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleLoginClick = () => {
        if (!active) {
            setActive(true);
            alert('Se ha activado el modo de Cambiar contraseña.');
        }
    };

    const handleSignupClick = () => {
        if (active) {
            setActive(false);
            alert('Se ha activado el modo enviar recuperar contraseña.');
        }
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        alert('Código enviado.');
    };

    const handlePasswordChangeSubmit = (e) => {
        e.preventDefault();
        const password = e.target.querySelector('input[type="password"]').value;
        const confirmPassword = e.target.querySelector('input[type="password"][placeholder="Confirme su contraseña"]').value;

        if (password !== confirmPassword) {
            setPasswordError(true);
            alert('Las contraseñas no coinciden.');
        } else {
            setPasswordError(false);
            alert('Contraseña cambiada.');
            setActive(true); // Vuelve a mostrar la página de recuperación de contraseña
        }
    };

    const handleRetry = () => {
        setPasswordError(false); // Reinicia el estado de error de contraseña
    };

    return (
        <main>
            <section className={`wrapper ${active ? 'active' : ''}`}>
                <div className="form signup">
                    <header onClick={handleSignupClick}>Recuperación contraseña</header>
                    <form onSubmit={handleCodeSubmit}>
                        <p className="rec-a">Te enviaremos un código de verificación a tu numero de telefono</p>
                        <input type="text" placeholder="Ingrese su nombre completo" required />
                        <input type="email" placeholder="Ingrese su email" required />
                        <input type="submit" value="Enviar código" />
                    </form>
                </div>
                <div className="form login">
                    <header onClick={handleLoginClick}>Cambiar contraseña</header>
                    <form onSubmit={handlePasswordChangeSubmit}>
                        <p className="rec-a">Te hemos enviado el código. Espera, esto puede tardar hasta un minuto</p>
                        <input type="text" placeholder="Ingrese el código que le enviamos" required />
                        <input type="password" placeholder="Ingrese su nueva contraseña" required />
                        <input type="password" placeholder="Confirme su contraseña" required />
                        {passwordError && (
                            <div className="retry-container">
                                <p>Las contraseñas no coinciden.</p>
                                <button onClick={handleRetry}>Volver a intentarlo</button>
                            </div>
                        )}
                        {!passwordError && <input type="submit" value="Guardar" />}
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Recuperacion;