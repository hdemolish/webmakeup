import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-brand">
          <div className="brand-monogram">AT</div>
          <div className="brand-text">
            <span>ANH THU NGUYỄN</span>
            <small>MAKEUP ARTIST</small>
          </div>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home">TRANG CHỦ</a>
          <a href="#about">GIỚI THIỆU</a>
          <a href="#services">DỊCH VỤ</a>
          <a href="#gallery">BỘ SƯU TẬP</a>
          <a href="#clients">KHÁCH HÀNG</a>
          <a href="#blog">BLOG</a>
          <a href="#contact">LIÊN HỆ</a>
        </div>

        <div className="nav-actions">
          <button className="btn-primary">ĐẶT LỊCH NGAY</button>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
