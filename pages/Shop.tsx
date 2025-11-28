
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../constants';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Shop: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 my-8 bg-white rounded-lg shadow-xl"
    >
      <div className="flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">İncele:</h2>
          <ul>
            <li>
              <a href="#" className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-1">Tüm ürünler</a>
            </li>
          </ul>
        </aside>
        <div className="w-full md:w-3/4 lg:w-4/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tüm ürünler</h1>
              <p className="text-gray-500 mt-1">{products.length} ürünler</p>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <label htmlFor="sort" className="mr-2 text-gray-600">Sırala:</label>
              <select id="sort" className="border border-gray-300 rounded-md p-2">
                <option>Varsayılan</option>
                <option>Fiyata göre: düşükten yükseğe</option>
                <option>Fiyata göre: yüksekten düşüğe</option>
              </select>
            </div>
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;