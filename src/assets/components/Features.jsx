import React from 'react';

const Features = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#f8b90b] mb-6">
          Características Avanzadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="text-[#f8b90b] text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-[#f8b90b] mb-2">Monitoreo en Tiempo Real</h3>
            <p className="text-[#000000]">Seguimiento constante de humedad, temperatura y niveles de CO2 de tus granos.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="text-[#f8b90b] text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-[#f8b90b] mb-2">Uso Doméstico</h3>
            <p className="text-[#000000]">Diseñado para propietarios de granjas pequeñas y pequeños negocios.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="text-[#f8b90b] text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold text-[#f8b90b] mb-2">Alertas de Seguridad</h3>
            <p className="text-[#000000]">Notificaciones inmediatas ante cualquier anomalía.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
