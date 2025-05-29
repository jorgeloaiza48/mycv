import React from 'react'


export default function ExperienciaLaboral() {
    return (
        <>
            
<section className="py-5 bg-light">
    <h4 className="text-center">Experiencia laboral</h4>
  <div className="container position-relative">
    {/* Línea horizontal */}
    <div className="position-absolute start-0 end-0 border-top border-3 border-primary"
         style={{ top: '93px', zIndex: 1 }}></div>

    {/* Timeline Items */}
    <div className="row pt-5 gy-5">
      {/* ITEM 1 */}
      <div className="col-12 col-md-4 d-flex flex-column align-items-center position-relative">
        {/* Punto azul */}
        <span className="position-absolute top-0 translate-middle-y bg-primary border border-white rounded-circle shadow"
              style={{ width: '1.5rem', height: '1.5rem', zIndex: 2 }}></span>

        {/* Tarjeta */}
        <div className="card mt-4 mt-md-5 shadow border-0 w-100">
          <div className="card-body text-center">
            <h6 className="text-secondary mb-1">2007-2008</h6>
            <h5 className="card-title mb-2">
              Secretaría departamental de RISARALDA<br />Docente Asesor del área informática
            </h5>
            <p className="mb-0"><strong>Tecnologías:</strong> C++, VISUALBASIC</p>
          </div>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="col-12 col-md-4 d-flex flex-column align-items-center position-relative">
        <span className="position-absolute top-0 translate-middle-y bg-primary border border-white rounded-circle shadow"
              style={{ width: '1.5rem', height: '1.5rem', zIndex: 2 }}></span>

        <div className="card mt-4 mt-md-5 shadow border-0 w-100">
          <div className="card-body text-center">
            <h6 className="text-secondary mb-1">2009-2024</h6>
            <h5 className="card-title mb-2">
              SENA<br />Instructor de Análisis y desarrollo de software
            </h5>
            <p className="mb-0"><strong>Tecnologías:</strong> PYTHON, SQL, NODE JS, REACTJS, EXCEL AVANZADO...</p>
          </div>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="col-12 col-md-4 d-flex flex-column align-items-center position-relative">
        <span className="position-absolute top-0 translate-middle-y bg-primary border border-white rounded-circle shadow"
              style={{ width: '1.5rem', height: '1.5rem', zIndex: 2 }}></span>

        <div className="card mt-4 mt-md-5 shadow border-0 w-100">
          <div className="card-body text-center">
            <h6 className="text-secondary mb-1">2022</h6>
            <h5 className="card-title mb-2">
              Digital House<br />Desarrollador Web FullStack
            </h5>
            <p className="mb-1"><strong>Tecnologías:</strong> HTML, JS, NODEJS, SEQUELIZE, REACT</p>
            <p className="mb-0">
              <a href="https://myecommerce.onrender.com/" target="_blank" className="link-primary">
                Proyecto desarrollado
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>

    )
}
