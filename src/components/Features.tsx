import React from 'react';
import { Brush, HeartHandshake, Gem, Heart } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Brush size={28} strokeWidth={1} />,
    title: 'CHUYÊN NGHIỆP',
    description: 'Kinh nghiệm nhiều năm trong lĩnh vực trang điểm.'
  },
  {
    icon: <HeartHandshake size={28} strokeWidth={1} />,
    title: 'TẬN TÂM',
    description: 'Lắng nghe và tôn vinh vẻ đẹp riêng của bạn.'
  },
  {
    icon: <Gem size={28} strokeWidth={1} />,
    title: 'SẢN PHẨM CAO CẤP',
    description: 'Sử dụng mỹ phẩm chính hãng, an toàn cho làn da.'
  },
  {
    icon: <Heart size={28} strokeWidth={1} />,
    title: 'CÁ NHÂN HÓA',
    description: 'Phong cách trang điểm phù hợp với từng cá nhân và sự kiện.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-text">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
