import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-[#0f3460] p-4 text-center">
      {['PKA', 'Gazlar Almashinuvi', 'Ahamiyati', "Ta'sir Qiluvchi Omillar"].map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-block px-4 py-2 m-1 text-white no-underline rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-[#e94560]"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;

