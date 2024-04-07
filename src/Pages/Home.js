import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        const cookieBox = document.querySelector(".wrapper--modifier");
        const buttons = document.querySelectorAll(".button");

        const executeCodes = () => {
            if (document.cookie.includes("codinglab")) return;
            cookieBox.classList.add("show");

            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    cookieBox.classList.remove("show");

                    if (button.id === "acceptBtn") {
                        document.cookie = "cookieBy=codinglab; max-age=" + 60 * 60 * 24 * 30;
                    }
                });
            });
        };

        window.addEventListener("load", executeCodes);

        return () => {
            window.removeEventListener("load", executeCodes);
        };
    }, []);

    return (
<div>
  <section className="dis-sto">
    <div className="container">
      <div className="res-info">
      </div>
    </div>
    <h1 className="heading-1">Servicios que ofrecemos</h1>
  </section>
  <div className="wrapper">
    <div className="box">
      <div className="front-face">
        <div className="icon">
          <i className="fas fa-broom" />
        </div>
        <span>Limpiezas</span>
      </div>
      <div className="back-face">
        <span>Limpiezas</span>
        <p>
          En nuestra joyería, ofrecemos un servicio de limpieza de joyas excepcional para ayudarte a mantener tus piezas preciosas en su mejor estado. 
        </p>
        <Link to="/Iniciar_Sesion" className="btn cta-btn cta-btn--edit">Agenda tu cita</Link>
      </div>
    </div>
    <div className="box">
      <div className="front-face">
        <div className="icon">
          <i className="fas fa-tools" />
        </div>
        <span>Reparación</span>
      </div>
      <div className="back-face">
        <span>Reparación</span>
        <p>
          En nuestra joyería, nos enorgullece ofrecer un servicio de reparación de joyas excepcional para ayudarte a restaurar y renovar tus piezas favoritas. 
        </p>
        <Link to="/Iniciar_Sesion" className="btn cta-btn cta-btn--edit">Agenda tu cita</Link>
      </div>
    </div>
    <div className="box">
      <div className="front-face">
        <div className="icon">
          <i className="fas fa-wrench" />
        </div>
        <span>Mantenimiento</span>
      </div>
      <div className="back-face">
        <span>Mantenimiento</span>
        <p>
          En nuestra prestigiosa joyería, ofrecemos un servicio completo de mantenimiento de joyas para garantizar que tus piezas preciadas se mantengan en perfecto estado a lo largo del tiempo. 
        </p>
        <Link to="/Iniciar_Sesion" className="btn cta-btn cta-btn--edit">Agenda tu cita</Link>
      </div>
    </div>
  </div>
  <section>
    <section className="dis-sto">
      <div className="container">
        <div className="res-info">
        </div>
      </div>
      <h1 className="heading-1">Galeria</h1>
    </section>
    <div className="slider-container">
      <div className="slider">
        <img src="img/Slider1.png" alt="Imagen 1" />
        <img src="img/Slider2.png" alt="Imagen 2" />
        <img src="img/Slider3.png" alt="Imagen 3" />
        <img src="img/Slider4.png" alt="Imagen 4" />
        <img src="img/Slider5.png" alt="Imagen 1" />
        <img src="img/Slider6.png" alt="Imagen 2" />
        <img src="img/Slider10.png" alt="Imagen 3" />
        <img src="img/Slider9.png" alt="Imagen 4" />
        <img src="img/Slider8.png" alt="Imagen 1" />
        <img src="img/Slider10.png" alt="Imagen 2" />
        <img src="img/Slider11.png" alt="Imagen 3" />
        <img src="img/Slider12.png" alt="Imagen 4" />
        <img src="img/Slider16.png" alt="Imagen 1" />
        <img src="img/Slider14.png" alt="Imagen 2" />
        <img src="img/Slider15.png" alt="Imagen 3" />
        <img src="img/Slider16.png" alt="Imagen 4" />
        <img src="img/Slider17.png" alt="Imagen 3" />
        <img src="img/Slider18.png" alt="Imagen 4" />
        <img src="img/Slider19.png" alt="Imagen 3" />
        <img src="img/Slider9.png" alt="Imagen 4" />
      </div>
    </div>
  </section>
  <section className="container top-products">
    <h1 className="heading-1">Algunos descuentos</h1>
    <div className="container-options">
      <span>Destacados</span>
      <span>Más recientes</span>
    </div>
    <div className="container-products">
      {/* Producto 1 */}
      <div className="card-product">
        <div className="container-img">
          <img src="images/IMG-20230321-WA0028.jpg" alt="Cafe Irish" />
          <span className="discount">-13%</span>
          <div className="button-group">
            <span>
              <i className="fa-regular fas fa-eye" />
            </span>
            <span>
              <i className="fa-regular fas fa-heart" />
            </span>
          </div>
        </div>
        <div className="content-card-product">
          <div className="stars">
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-regular fas fa-star" />
          </div>
          <h3>Collar</h3>
          <span className="add-cart">
            <a href="Carrito.html"><i className="fa-solid fas fa-shopping-cart" /></a>
          </span>
          <p className="price">$4.60 <span>$5.30</span></p>
        </div>
      </div>
      {/* Producto 2 */}
      <div className="card-product">
        <div className="container-img">
          <img src="images/IMG-20230321-WA0017.jpg" alt="Cafe incafe-ingles.jpg" />
          <span className="discount">-22%</span>
          <div className="button-group">
            <span>
              <i className="fa-regular fas  fa-eye" />
            </span>
            <span>
              <i className="fa-regular fas fa-heart" />
            </span>
          </div>
        </div>
        <div className="content-card-product">
          <div className="stars">
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-regular fas fa-star" />
            <i className="fa-regular fas fa-star" />
          </div>
          <h3>Collar hoja</h3>
          <span className="add-cart">
            <a href="Carrito.html"><i className="fa-solid fas fa-shopping-cart" /></a>
          </span>
          <p className="price">$5.70 <span>$7.30</span></p>
        </div>
      </div>
      {/* Producto 3 */}
      <div className="card-product">
        <div className="container-img">
          <img src="images/IMG-20230321-WA0015.jpg" alt="Cafe Australiano" />
          <span className="discount">-13%</span>
          <div className="button-group">
            <span>
              <i className="fa-regular fas fa-eye" />
            </span>
            <span>
              <i className="fa-regular fas fa-heart" />
            </span>
          </div>
        </div>
        <div className="content-card-product">
          <div className="stars">
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
          </div>
          <h3>Collar de hoja</h3>
          <span className="add-cart">
            <a href="Carrito.html"><i className="fa-solid fas fa-shopping-cart" /></a>
          </span>
          <p className="price">$3.20 <span>$7.30</span></p>
        </div>
      </div>
      {/* Producto 4 */}
      <div className="card-product">
        <div className="container-img">
          <img src="images/IMG-20230321-WA0023.jpg" alt="Cafe Helado" />
          <span className="discount">-13%</span>
          <div className="button-group">
            <span>
              <i className="fa-regular fas fa-eye" />
            </span>
            <span>
              <i className="fa-regular fas fa-heart" />
            </span>
          </div>
        </div>
        <div className="content-card-product">
          <div className="stars">
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-solid fas fa-star" />
            <i className="fa-regular fas fa-star" />
          </div>
          <h3>Collar de piedras</h3>
          <span className="add-cart">
            <a href="Carrito.html"><i className="fa-solid fas fa-shopping-cart" /></a>
          </span>
          <p className="price">$5.60 <span>$7.30</span></p>
        </div>
      </div>
    </div>
  </section>
  <section className="gallery">
    <div className="gallery-img-1">
      <img src="img/anillonegro.jpeg" alt="Gallery Img1" className="gallery-img-1" />
      <div className="hover-galeria">
        <a href="Colecciones.html">Anillos y argollas</a>
      </div>
    </div>
    <div className="gallery-img-2">
      <img src="img/Aretesorquideas.png" alt="Gallery Img2" className="gallery-img-2" />
      <div className="hover-galeria">
        <a href="Colecciones.html">Aretes y aros</a>
      </div>
    </div>
    <div className="gallery-img-3">
      <img src="img/CollarNegro.jpeg" alt="Gallery Img3" className="gallery-img-3" />
      <div className="hover-galeria">
        <a href="Colecciones.html">Cadenas y Collares</a>
      </div>
    </div>
    <div className="gallery-img-4">
      <img src="img/Cadenahoja.png" alt="Gallery Img4" className="gallery-img-4" />
      <div className="hover-galeria">
        <a href="Colecciones.html">Dijes</a>
      </div>
    </div>
    <div className="gallery-img-5">
      <img src="img/accesorio.jpeg" alt="Gallery Img5" className="gallery-img-5" />
      <div className="hover-galeria">
        <a href="Colecciones.html">Accesorios</a>
      </div>
    </div>
  </section>
  <section className="testimonios">
    <h1 className="heading-1">Opiniones de nuestros clientes</h1>
    <div className="wrapper--edit">
      <div className="box">
        <i className="fas fa-quote-left quote" />
        <p>La joyería de JoyasKogi es una obra de arte. Me encanta cómo combinan los elementos naturales con las hojas metalizadas para crear diseños únicos y hermosos. Además, poder personalizar mis joyas hace que sean aún más especiales. Si buscas piezas únicas y de calidad, definitivamente deberías echar un vistazo a JoyasKogi</p>
        <div className="content">
          <div className="info">
            <div className="name">Alejandro González</div>
            <div className="job">Freelancer | Publicista</div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
          </div>
          <div className="image">
            <img src="images/Persona1.jpg" alt />
          </div>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-quote-left quote" />
        <p>Estoy enamorada de mis joyas de la joyeria JoyasKogi. El hecho de que utilicen materiales naturales y hojas metalizadas les da un encanto único. Cada pieza es verdaderamente especial y refleja mi estilo y personalidad. ¡Recomendaría JoyasKogi a cualquiera que busque joyería artesanal y personalizada!</p>
        <div className="content">
          <div className="info">
            <div className="name">Sofia Ramírez
            </div>
            <div className="job"> YouTuber | Blogger</div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
          </div>
          <div className="image">
            <img src="images/Persona2.jpg" alt />
          </div>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-quote-left  quote" />
        <p>JoyasKogi es mi tienda de joyería favorita. Su enfoque en los materiales naturales y las hojas metalizadas realmente las distingue de otras joyerías. Poder personalizar mis joyas me permite expresar mi estilo único. La calidad y la atención al detalle en cada pieza son increíbles. ¡No puedo tener suficiente de las joyas de JoyasKogi!</p>
        <div className="content">
          <div className="info">
            <div className="name">Aisha Johnson 
            </div>
            <div className="job"> Diseñador | Desarrollador</div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </div>
          </div>
          <div className="image">
            <img src="images/Persona3.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="wrapper--modifier">
    <header>
      <i className="bx bx-cookie" />
      <h2>Cookies</h2>
    </header>
    <div className="data">
      <p>Este sitio web utiliza cookies para garantizar la mejor experiencia de usuario. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. <a href="#"> Leer mas...</a></p>
    </div>
    <div className="buttons">
      <button className="button" id="acceptBtn">Aceptar</button>
      <button className="button" id="declineBtn">Rechazar</button>
    </div>
  </div>
</div>

    );
};

export default Home;
