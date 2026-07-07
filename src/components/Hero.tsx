import React from 'react';
import './Hero.css';
import heroPortrait from '../assets/hero.png';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-script reveal-up">
            Makeup is not a mask,<br/>
            <span style={{ marginLeft: '10%' }}>it's an expression of you.</span>
          </div>
          <h1 className="hero-title reveal-up delay-1">
            ANH THƯ<br/>
            NGUYỄN
          </h1>
          <h2 className="hero-subtitle reveal-up delay-2">M A K E U P &nbsp;&nbsp;A R T I S T</h2>
          <p className="hero-description reveal-up delay-3">
            Tôn vinh vẻ đẹp tự nhiên và cá tính riêng của mỗi người phụ nữ
            qua nghệ thuật trang điểm chuyên nghiệp.
          </p>
          <div className="hero-actions reveal-up delay-3">
            <button className="btn-primary">Khám Phá Dịch Vụ</button>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <img src={heroPortrait} alt="Anh Thu Nguyen Makeup Artist" className="hero-image reveal-up" />
          <div className="hero-signature reveal-up delay-2">
            <div className="script">Anh Thư Nguyễn</div>
            <div className="subtitle">MAKEUP ARTIST</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
