import React from 'react'

export default function Certificaciones() {
    return (
        <div>
            <hr className='custom'></hr>
            <h2 className='mt-5 text-center'>Certificaciones</h2>
            <div className='flex justify-center items-center'>
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    <div><img src="./iconos/oracleCertificationDBA.png" className="mx-auto d-block img-fluid" alt='' /></div>
                    <div><img src="./iconos/ecertificateOCI-Foundations.png" className="mx-auto d-block img-fluid" alt='' /></div>
                    <div><img src="./iconos/CertifiedArchitectAssociate.png" className="mx-auto d-block img-fluid" alt='' /></div>
                    <div><img src="./iconos/OracleDataPlatform2025.png" className="mx-auto d-block img-fluid" alt='' /></div>
                    <div><img src="./iconos/AIFoundationsAssociate.png" className="mx-auto d-block img-fluid" alt='' /></div>
                </div>
            </div>

        </div>
    )
}
