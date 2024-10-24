import React from 'react';
import maiz from '../img/maiz.jpg';

const HowItWorks = () => {
  return (
    <section className="bg-[#f8b90b] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Cómo Funciona Grain
        </h2>
        <div className="md:flex items-center">
          {/* Mantén el texto a la izquierda */}
          <div className="md:w-1/2 mb-6 md:mb-0 order-1">
            <ol className="list-decimal pl-6 text-lg space-y-4">
              <li>Instala nuestras Cajas Inteligentes con sensores para monitorear la calidad de los granos.</li>
              <li>Conecta el dispositivo a tu Wi-Fi para transmitir datos en tiempo real.</li>
              <li>Accede a los datos desde nuestra plataforma web.</li>
              <li>Recibe alertas y reportes sobre tus granos.</li>
            </ol>
          </div>
          {/* Imagen a la derecha */}
          <div className="relative md:w-1/2 order-2">
            <img
              src={maiz}
              alt="Granos de Maíz"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
