
import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, LinkedinIcon, XIcon } from '../components/icons';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const heroItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const Home: React.FC = () => {
  return (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center -mt-20 pt-20" // Adjust for header height
        style={{ backgroundImage: "url('https://i.imgur.com/gK2xR5w.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div 
            className="relative z-10 p-4 text-white"
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
        >
          <motion.h1 variants={heroItemVariants} className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
            Geleceğinizi Uzaya Taşıyın!
          </motion.h1>
          <motion.p variants={heroItemVariants} className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Markanızı Uzaya Gönderiyoruz, Fark Yaratın!
          </motion.p>
          <motion.div variants={heroItemVariants} className="flex justify-center items-center space-x-6">
            <Link to="/hakkimizda" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
              İncele
            </Link>
            <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300"><InstagramIcon className="h-7 w-7"/></a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-300"><LinkedinIcon className="h-7 w-7"/></a>
            <a href="#" aria-label="X" className="text-white hover:text-gray-300"><XIcon className="h-7 w-7"/></a>
          </motion.div>
        </motion.div>
      </section>

      {/* Promote Brand Section */}
      <section className="bg-black text-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Uzayda Markanızı Tanıtın</h2>
              <p className="text-gray-400 mb-8">
                Alba Space, uzay taşımacılığı ve reklamda liderdir. Yenilikçi çözümlerle markanızı global boyuta taşımak için buradayız.
              </p>
              <div className="flex space-x-12">
                <div>
                  <p className="text-5xl font-bold text-cyan-400">150+</p>
                  <p className="text-gray-400 mt-2">Yenilikçi Çözümler</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-cyan-400">15</p>
                  <p className="text-gray-400 mt-2">Uzayda Başarı</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
              <img src="https://i.imgur.com/u5pTR12.png" alt="Satellite over Earth" className="rounded-lg shadow-2xl shadow-cyan-500/20 max-w-sm md:max-w-md" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Product Categories Section */}
      <section className="bg-white text-gray-800 py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ürün Kategorileri</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Uzayda markanızı tanıtmak için yenilikçi çözümler sunuyoruz.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Card 1 */}
                  <motion.div 
                      className="relative rounded-lg overflow-hidden p-8 flex flex-col justify-end items-start text-left h-96 bg-cover bg-center text-white"
                      style={{ backgroundImage: "url('https://i.imgur.com/oWbQZ1a.jpeg')"}}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.7 }}
                      whileHover={{ scale: 1.05 }}
                  >
                      <div className="absolute inset-0 bg-orange-600 opacity-80"></div>
                      <div className="relative z-10">
                          <h3 className="text-3xl font-bold mb-2">Uzay Tanıtımı</h3>
                          <p className="mb-6">Markanızı uzaya gönderin, dikkat çekin.</p>
                          <Link to="/hizmetler" className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-600 transition duration-300">
                              Keşfet
                          </Link>
                      </div>
                  </motion.div>
                  {/* Card 2 */}
                  <motion.div 
                      className="relative rounded-lg overflow-hidden p-8 flex flex-col justify-end items-start text-left h-96 bg-cover bg-center text-white"
                      style={{ backgroundImage: "url('https://i.imgur.com/jE1wz7l.jpeg')"}}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                  >
                      <div className="absolute inset-0 bg-orange-600 opacity-80"></div>
                       <div className="relative z-10">
                          <h3 className="text-3xl font-bold mb-2">Uzay Reklamları</h3>
                          <p className="mb-6">Eşsiz deneyimler sunuyoruz.</p>
                          <Link to="/hizmetler" className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-600 transition duration-300">
                              İncele
                          </Link>
                      </div>
                  </motion.div>
              </div>
          </div>
      </section>
    </motion.div>
  );
};

export default Home;