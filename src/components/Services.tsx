import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Services.css';
import bridalImg from '../assets/1.jpg';
import partyImg from '../assets/2.jpg';
import editorialImg from '../assets/3.jpg';
import courseImg from '../assets/4.jpg';

const services = [
  {
    image: bridalImg,
    title: 'TRANG ĐIỂM CÔ DÂU',
    description: 'Tôn vinh vẻ đẹp thuần khiết và sang trọng của bạn trong ngày trọng đại nhất. Phong cách từ tự nhiên, trong trẻo đến quyến rũ, sắc sảo.',
  },
  {
    image: partyImg,
    title: 'TRANG ĐIỂM TIỆC',
    description: 'Thu hút mọi ánh nhìn tại các sự kiện, event, hay dạ tiệc. Lớp nền hoàn hảo và lâu trôi giúp bạn luôn rạng rỡ.',
  },
  {
    image: editorialImg,
    title: 'TRANG ĐIỂM CHỤP ẢNH',
    description: 'Chuyên nghiệp và sắc nét dưới mọi góc máy. Phù hợp cho lookbook, beauty, kỷ yếu hay các concept nghệ thuật.',
  },
  {
    image: courseImg,
    title: 'KHÓA HỌC MAKEUP',
    description: 'Chia sẻ đam mê và kỹ năng qua các khóa học cá nhân & chuyên nghiệp. Thực hành 1 kèm 1 với giáo trình bài bản.',
  }
];

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title reveal-up">DỊCH VỤ NỔI BẬT</h2>
        
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <div className="service-image-wrapper reveal-up">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <div className="service-content reveal-up delay-1">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#detail" className="btn-outline">
                  XEM CHI TIẾT <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-footer reveal-up">
          <button className="btn-primary">XEM TẤT CẢ DỊCH VỤ</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
