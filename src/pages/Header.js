import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import fotopersonal from './fotopersonal.jpeg';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Header() {
  return (
    <div className="container py-5" style={{ background: 'linear-gradient(90deg, #fed7aa 0%, #fef3c7 50%, #fed7aa 100%)' }}>
      <motion.div
        className="bg-white rounded-4 shadow-lg p-4 d-flex flex-column flex-md-row align-items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Foto personal */}
        <motion.div
          className="rounded-circle border border-4 border-warning overflow-hidden"
          style={{ width: '144px', height: '144px', position: 'relative', flexShrink: 0 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={fotopersonal}
            alt="Foto personal"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-circle"
          />
        </motion.div>

        {/* Información */}
        <div className="flex-grow-1 text-center text-md-start">
          <h1 className="h4 text-warning fw-bold mb-2">
            JORGE ELIÉCER LOAIZA MUÑOZ
          </h1>
          <p className="mb-1 text-secondary">Ingeniero de Sistemas y Computación</p>
          <p className="mb-1 text-secondary">Msc. Ingeniería de Sistemas y Computación</p>
          <p className="mb-3 text-secondary">Desarrollador Web FullStack - Analista de Bases de Datos</p>

          {/* Botón de CV */}
          <a
            href="/hoja_de_vida.pdf"
            download
            className="btn btn-warning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar Hoja de Vida
          </a>
        </div>

        {/* Contacto */}
        <div className="text-secondary" style={{ minWidth: '200px' }}>
          <ul className="list-unstyled mb-0">
            <li className="d-flex align-items-center mb-2">
              <WhatsAppIcon fontSize="small" className="me-2" /> (+57) 3122727084
            </li>
            <li className="d-flex align-items-center mb-2">
              <SmartphoneIcon fontSize="small" className="me-2" /> (+57) 3162565148
            </li>
            <li className="d-flex align-items-center mb-2">
              <LocationOnIcon fontSize="small" className="me-2" /> Pereira / Risaralda - Colombia
            </li>
            <li className="d-flex align-items-center mb-2">
              <EmailIcon fontSize="small" className="me-2" /> jelm48@hotmail.com
            </li>
            <li className="d-flex align-items-center">
              <AlternateEmailIcon fontSize="small" className="me-2" /> jorge.loaiza@utp.edu.co
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
