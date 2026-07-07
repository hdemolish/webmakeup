import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Gallery.css';
import bridalImg from '../assets/bridal_makeup.png';
import partyImg from '../assets/party_makeup.png';
import heroImg from '../assets/hero_portrait.png';
import aboutImg from '../assets/about_portrait.png';

const images = [
  bridalImg,
  partyImg,
  heroImg,
  aboutImg,
  bridalImg,
  partyImg
];

const Gallery: React.FC = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header reveal-up">
          <h2 className="section-title" style={{ marginBottom: 0 }}>BỘ SƯU TẬP</h2>
          <a href="#all" className="btn-outline">
            XEM TẤT CẢ <ArrowRight size={14} />
          </a>
        </div>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className={`gallery-item reveal-up delay-${(index % 3) + 1}`} key={index}>
              <img src={img} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
