import React from 'react';
import './About.css';
import aboutImg from '../assets/about_portrait.png';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-image-column reveal-up">
          <div className="about-image-wrapper">
            <img src={aboutImg} alt="Anh Thu Nguyen" className="about-image" />
            <div className="about-badge reveal-up delay-2">
              <svg viewBox="0 0 100 100" className="badge-text-svg">
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                <text>
                  <textPath href="#circlePath" startOffset="0%" className="badge-text">
                    ANH THƯ NGUYỄN • MAKEUP ARTIST •
                  </textPath>
                </text>
              </svg>
              <div className="badge-center">AT</div>
            </div>
          </div>
        </div>
        
        <div className="about-text-column">
          <h4 className="section-subtitle-small reveal-up delay-1">GIỚI THIỆU</h4>
          <h2 className="about-title reveal-up delay-1">Xin chào, tôi là<br/>Anh Thư Nguyễn</h2>
          <p className="about-description reveal-up delay-2">
            Với niềm đam mê nghệ thuật và sự tỉ mỉ trong từng chi tiết, tôi luôn khát khao mang đến cho bạn vẻ đẹp thanh lịch, tinh tế và tự tin nhất. Mỗi gương mặt đều là một bức tranh độc bản mà tôi vinh dự được tô điểm trong những khoảnh khắc quan trọng nhất của cuộc đời bạn.
          </p>
          <div className="reveal-up delay-3">
            <button className="btn-primary">TÌM HIỂU THÊM</button>
          </div>
        </div>
        
        <div className="about-stats-column reveal-up delay-2">
          <div className="stats-box">
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">NĂM KINH NGHIỆM</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">KHÁCH HÀNG</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">DỰ ÁN ĐÃ THỰC HIỆN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
