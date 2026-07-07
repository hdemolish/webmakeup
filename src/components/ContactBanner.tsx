import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './ContactBanner.css';

const ContactBanner: React.FC = () => {
  return (
    <section className="contact-banner" id="contact">
      <div className="container contact-container">
        
        <div className="contact-intro reveal-up">
          <h2 className="contact-title">ĐẶT LỊCH TƯ VẤN</h2>
          <p className="contact-subtitle">
            Hãy để Anh Thư giúp bạn tỏa sáng<br/>theo cách riêng của bạn.
          </p>
        </div>
        
        <div className="contact-info">
          <div className="contact-item reveal-up delay-1">
            <Phone size={20} strokeWidth={1.5} />
            <div className="contact-text">
              <span className="label">ĐIỆN THOẠI</span>
              <span className="value">0966 123 456</span>
            </div>
          </div>
          
          <div className="contact-item reveal-up delay-2">
            <Mail size={20} strokeWidth={1.5} />
            <div className="contact-text">
              <span className="label">EMAIL</span>
              <span className="value">anhthunguyen.makeup@gmail.com</span>
            </div>
          </div>
          
          <div className="contact-item reveal-up delay-3">
            <MapPin size={20} strokeWidth={1.5} />
            <div className="contact-text">
              <span className="label">ĐỊA CHỈ</span>
              <span className="value">TP. Hồ Chí Minh</span>
            </div>
          </div>
        </div>
        
        <div className="contact-action reveal-up delay-3">
          <button className="btn-primary">ĐẶT LỊCH NGAY</button>
        </div>
        
      </div>
    </section>
  );
};

export default ContactBanner;
