import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <footer className="bg-light mt-5">
      <div className="container d-flex justify-content-center py-4 gap-3 flex-wrap">
        <a
          href="https://www.facebook.com/jeloaiza2/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg btn-floating d-flex align-items-center justify-content-center"
          aria-label="Facebook"
        >
          <FacebookIcon fontSize="inherit" />
        </a>

        <a
          href="https://github.com/jorgeloaiza48"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark btn-lg btn-floating d-flex align-items-center justify-content-center"
          aria-label="GitHub"
        >
          <GitHubIcon fontSize="inherit" />
        </a>

        <a
          href="https://www.linkedin.com/in/jelm48/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info btn-lg btn-floating d-flex align-items-center justify-content-center"
          aria-label="LinkedIn"
        >
          <LinkedInIcon fontSize="inherit" />
        </a>
      </div>

      <div className="text-center text-white py-3 bg-info">
        <small>© 2024 - jorge.loaiza@utp.edu.co</small>
      </div>
    </footer>
  );
}
