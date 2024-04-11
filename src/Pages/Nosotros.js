import React from "react";

const Nosotros = () =>{
    return (
       <div>
  <section className="dis-sto">
    <div className="container">
      <div className="res-info">
      </div>
    </div>
    <h1 className="heading-1">Servicios que ofrecemos</h1>
  </section>
  <section className="vision-mision-valores">
    <div className="container">
      {/* Visión */}
      <div className="vision">
        <h3>Visión</h3>
        <p>En Gim Box, nuestra visión es crear una comunidad vibrante y empoderada donde el fitness se convierta en un estilo de vida arraigado. Nos esforzamos por ser reconocidos como el estándar de excelencia en la industria del fitness, ofreciendo programas innovadores, instalaciones de primer nivel y un equipo de entrenadores expertos dedicados a inspirar y guiar a nuestros miembros en su viaje hacia la salud y el bienestar óptimo</p>
      </div>
      {/* Misión */}
      <div className="mision">
        <h3>Misión</h3>
        <p>En Gim Box, nuestra misión es ser el destino definitivo para aquellos que buscan transformar sus vidas a través del fitness y el bienestar. Nos comprometemos a proporcionar un ambiente inclusivo y motivador donde cada individuo, sin importar su nivel de condición física, pueda alcanzar sus metas y superar sus límites</p>
      </div>
      {/* Valores */}
      <div className="valores">
        <h3>Valores</h3>
        <ul>
          <li><strong>Calidad del servicio:</strong> Es la razón primera de nuestra existencia, servir a nuestros usuarios de forma incondicional, poniendo a su disposición nuestras instalaciones, recursos humanos y material, con el objetivo de ayudar a la mejora de su bienestar y calidad de vida.</li>
          <li><strong>Compromiso social:</strong>Compromiso con nuestros clientes, colaboradores y con la sociedad en la realización de un trabajo, bajo unas normas éticas que garanticen el logro de los objetivos individuales </li>
          <li><strong>Igualdad:</strong> Nos fundamentamos en el principio de igualdad social, por el que todos tenemos el mismo derecho a vivir en una sociedad que respete las diferencias.</li>
          <li><strong>Respeto Cultural:</strong>Todas las actividades del centro deben estar enmarcadas en el respeto a la dignidad humana, los derechos individuales, las diferencias,  las leyes sociales y las nacionales.</li>
        </ul>
      </div>
    </div>
    
  </section>
  <div className="Nosotros">
    <section className="about-section">
      <div className="container">
        <h2 className="heading-1">Descubre nuestra historia</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Inicio de Gim Box</h3>
              <p>Gim Box fue fundada en el año 2009 por Juan Lopez. Desde sus modestos comienzos en un taller artesanal, la joyería se ha convertido en un referente de elegancia y creatividad.</p>
              <p className="timeline-date">2009</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Apertura de la Primera Tienda</h3>
              <p>En 2010 dio un gran paso al abrir su primera tienda física en el corazón de la ciudad. Este evento marcó el inicio de su presencia directa con los clientes.</p>
              <p className="timeline-date">2010</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Expansión Nacional</h3>
              <p>Con el reconocimiento creciente, Gim Box expandió su presencia a nivel nacional en 2012. Abrieron tiendas en varias ciudades, llevando sus exclusivas creaciones a más amantes de la joyería.</p>
              <p className="timeline-date">2012</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>El desafío del campeón</h3>
              <p> Los participantes se sumergen en una sesión de entrenamiento diseñada para replicar la intensidad y la resistencia física requeridas en un combate de boxeo profesional. </p>
              <p className="timeline-date">2015</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Carrera contra el reloj</h3>
              <p>En esta sesión, los miembros se enfrentan a una serie de estaciones de entrenamiento de alta intensidad, cada una diseñada para desafiar diferentes aspectos de la fuerza, la resistencia y la agilidad. Con un tiempo limitado en cada estación, los participantes deben trabajar rápidamente y con precisión para completar los desafíos y acumular puntos antes de que suene la campana final.</p>
              <p className="timeline-date">2018</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Apertura de Tiendas Internacionales</h3>
              <p>El año 2020 marcó un hito internacional con la apertura de tiendas Joyas Kogi en ciudades de renombre mundial. La marca comenzó a conquistar mercados internacionales con su elegancia única.</p>
              <p className="timeline-date">2020</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Aventura en la montaña</h3>
              <p>Inspirada en las exigentes condiciones físicas requeridas para escalar montañas, esta sesión de entrenamiento combina ejercicios de escalada, levantamiento de peso y cardio de alta intensidad. Los participantes se embarcan en un viaje virtual hacia la cima de una montaña.</p>
              <p className="timeline-date">2022</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>La búsqueda del tesoro</h3>
              <p>Los participantes se dividen en equipos y se embarcan en una búsqueda del tesoro dentro del gimnasio, donde cada estación de entrenamiento es un paso más cerca del tesoro final.</p>
              <p className="timeline-date">Presente</p>
            </div>
          </div>
          {/* Agrega más elementos de la línea de tiempo según sea necesario */}
        </div>
      </div>
    </section>
  </div>

</div>

    )

};

export default Nosotros;