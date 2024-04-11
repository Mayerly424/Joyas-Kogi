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
            <span>Aeróbicos</span>
          </div>
          <div className="back-face">
            <span>Aeróbicos</span>
            <p>
            Los aeróbicos son una combinación coordinada de movimientos que gimnásticos al ritmo de la música, ayuda a perfeccionar la coordinación y ejercita nuestra flexibilidad, desarrollo cardiovascular, orientación, ritmo y resistencia. Son mucho más comunes en los gimnasios para mujeres.
            </p>
            <Link to="/Iniciar_Sesion" className="btn cta-btn cta-btn--edit">Agenda tu cita</Link>
          </div>
        </div>
        <div className="box">
          <div className="front-face">
            <div className="icon">
              <i className="fas fa-tools" />
            </div>
            <span>Body combat</span>
          </div>
          <div className="back-face">
            <span>Body combat</span>
            <p>
            El body combat maneja movimientos intercalados y coordinados de diversas artes marciales al ritmo de la música
            y hace parte de los ejercicios cardiovasculares que puede ofrecerte  Gim Box
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
            <span>Entrenamiento con un personal trainner</span>
            <p>
            Depende de tu membresía el gym te puede dar el apoyo de un personal trainner, si una clase grupal es buena, tener a alguien dedicado a tu progreso será mil veces mejor.
            </p>
            <Link to="/Iniciar_Sesion" className="btn cta-btn cta-btn--edit">Agenda tu cita</Link>
          </div>
        </div>
      </div>

      <div>

  <br />
  <div id="theCarousel" className="carousel slide" data-ride="carousel">
    {/* Indicadores */}
    <ol className="carousel-indicators">
      <li data-target="#theCarousel" data-slide-to={0} className="active" />
      <li data-target="#theCarousel" data-slide-to={1} />
      <li data-target="#theCarousel" data-slide-to={2} />
      <li data-target="#theCarousel" data-slide-to={3} />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src="images/bicicletaestatica.jpg"alt="fotografia" width={200} height={224} />  
        <div className="carousel-caption d-none d-md-block">
          <h3>Bicicleta estatica</h3>
          <p>$999.999</p>
        </div>
      </div>
      <div className="item">
        <img src="images/maquinaductor.webp" alt="fotografia" width={200} height={224} /> 
        <div className="carousel-caption d-none d-md-block">
          <h3> Maquina de aductor</h3>
          <p>$999.999</p>
        </div>
      </div>
      <div className="item">
        <img src="images/prensa.jpg" alt="pintura" width={200} height={224} />
        <div className="carousel-caption d-none d-md-block">
          <h3>Prensa de pierna</h3>
          <p>$890.876</p>
        </div>
      </div>
      <div className="item">
        <img src="images/banco.jpg" alt="diseno" width={200} height={224} /> 
        <div className="carousel-caption d-none d-md-block">
          <h3>Banco con espaldar</h3>
          <p>950.308</p>
        </div>
      </div>
      <a className="left carousel-control" href="#theCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        <span className="sr-only">anterior</span>
      </a>
      <a className="right carousel-control" href="#theCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
        <span className="sr-only">siguiente</span>
      </a>
    </div>
  </div>
</div>

      




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
              <img src="images/bandaelastica.png" alt="Cafe Irish" />
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
              <h3>Bandas Elasticas</h3>
              <span className="add-cart">
                <Link to="/Galeria"><i className="fa-solid fas fa-shopping-cart" /></Link>
              </span>
              <p className="price">$32.594 <span>$45.390</span></p>
            </div>
          </div>
          {/* Producto 2 */}
          <div className="card-product">
            <div className="container-img">
              <img src="images/tapete.jpg" alt="Cafe incafe-ingles.jpg" />
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
              <h3>Tapete</h3>
              <span className="add-cart">
                <Link to="/Galeria"><i className="fa-solid fas fa-shopping-cart" /></Link>
              </span>
              <p className="price">$32.999 <span>$45.890</span></p>
            </div>
          </div>
          {/* Producto 3 */}
          <div className="card-product">
            <div className="container-img">
              <img src="images/bicicletaestatica.jpg" alt="Cafe Australiano" />
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
              <h3>Bicicleta estatica</h3>
              <span className="add-cart">
                <Link to="/Galeria"><i className="fa-solid fas fa-shopping-cart" /></Link>
              </span>
              <p className="price">$999.999 <span>$1.500.985</span></p>
            </div>
          </div>
          {/* Producto 4 */}
          <div className="card-product">
            <div className="container-img">
              <img src="images/Polea.jpg" alt="Cafe Helado" />
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
              <h3>Polea Cruzada</h3>
              <span className="add-cart">
                <Link to="/Galeria"><i className="fa-solid fas fa-shopping-cart" /></Link>
              </span>
              <p className="price">$888.999 <span>$1.200.000</span></p>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="gallery-img-1">
          <img src="images/caja.webp" alt="Gallery Img1" className="gallery-img-1" />
          <div className="hover-galeria">
            <Link to="/Galeria">Caja</Link>
          </div>
        </div>
        <div className="gallery-img-2">
          <img src="images/caminadora.jpg" alt="Gallery Img2" className="gallery-img-2" />
          <div className="hover-galeria">
            <Link to="/Galeria">Caminadora</Link>
          </div>
        </div>
        <div className="gallery-img-3">
          <img src="images/pesas_2_kilos.webp" alt="Gallery Img3" className="gallery-img-3" />
          <div className="hover-galeria">
            <Link to="/Galeria">Pesas de 2 kilos</Link>
          </div>
        </div>
        <div className="gallery-img-4">
          <img src="images/Polea.jpg" alt="Gallery Img4" className="gallery-img-4" />
          <div className="hover-galeria">
            <Link to="/Galeria">Polea Cruzada</Link>
          </div>
        </div>
        <div className="gallery-img-5">
          <img src="images/bicicletaestatica.jpg" alt="Gallery Img5" className="gallery-img-5" />
          <div className="hover-galeria">
            <Link to="/Galeria">Bicicleta estatica</Link>
          </div>
        </div>
      </section>
      <section className="testimonios">
        <h1 className="heading-1">Opiniones de nuestros clientes</h1>
        <div className="wrapper--edit">
          <div className="box">
            <i className="fas fa-quote-left quote" />
            <p>Mi experiencia en GimBox ha sido excelente. El personal es amable y servicial, siempre dispuesto a ayudar y motivar. 
              Las instalaciones están bien mantenidas y cuentan con una amplia variedad de equipos de entrenamiento. 
              Me siento cómodo y seguro cada vez que entro al gimnasio.</p>
            <div className="content">
              <div className="info">
                <div className="name">Alejandro González</div>
                <div className="job"> Publicista</div>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
              </div>
              <div className="image">
                <img src="images/Persona5.jpg" alt />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left quote" />
            <p>GimBox ofrece una excelente relación calidad-precio. Me inscribí hace varios meses y estoy muy satisfecho con lo que obtengo por mi membresía. 
              No solo tengo acceso a equipos de alta calidad, sino que también puedo participar en clases grupales dirigidas por entrenadores expertos, 
              todo a un precio asequible.</p>
            <div className="content">
              <div className="info">
                <div className="name">Sofia Ramírez
                </div>
                <div className="job"> Influencer | Blogger</div>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
              </div>
              <div className="image">
                <img src="images/Persona4.jpg" alt />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left  quote" />
            <p>Lo que más me gusta de GimBox es el ambiente motivador y comunitario. Los entrenadores son apasionados y están comprometidos con ayudarte a alcanzar tus objetivos de fitness. Además, la comunidad de socios es muy solidaria y alentadora. </p>
            <div className="content">
              <div className="info">
                <div className="name">Aisha Johnson
                </div>
                <div className="job"> Ingeniera quimica</div>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                </div>
              </div>
              <div className="image">
                <img src="images/Persona7.jpg" alt />
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
