import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import Modal from '../components/Modal';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { id: 'cert1', image: '/images/certificates/cert_img1.png', title: 'Certificate of Achievement' },
    { id: 'cert2', image: '/images/certificates/cert_img2.png', title: 'Certificate of Completion' },
    { id: 'cert3', image: '/images/certificates/cert_ethical_hacker.jpg', title: 'Ethical Hacker Certificate' },
    { id: 'cert4', image: '/images/certificates/cert_packet_tracer.jpg', title: 'Introduction to Packet Tracer' },
    { id: 'cert5', image: '/images/certificates/cert_cybersecurity.jpg', title: 'Junior Cybersecurity Analyst' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-sm font-bold mb-8 uppercase tracking-widest text-pink-500 flex items-center gap-2">
        <span className="w-8 h-[2px] bg-pink-500"></span>
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedCert(cert)}
            className="group cursor-pointer p-2 rounded-[2rem] bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl hover:border-pink-500/50 transition-all duration-500"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <Maximize2 className="text-white drop-shadow-md" size={32} />
              </div>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-center text-gray-500 dark:text-gray-400 group-hover:text-pink-500 transition-colors px-2 pb-2">
              {cert.title}
            </p>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
        {selectedCert && (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{selectedCert.title}</h3>
            <img 
              src={selectedCert.image} 
              alt={selectedCert.title} 
              className="w-full rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800" 
            />
          </div>
        )}
      </Modal>
    </div>
  );
}
