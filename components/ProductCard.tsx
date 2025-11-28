
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      className="group relative border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="aspect-w-1 aspect-h-1 w-full bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
        {product.tag && (
            <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                {product.tag}
            </div>
        )}
      </div>
      <div className="p-4 bg-white text-center">
        <h3 className="text-md font-medium text-gray-800">
            {product.name}
        </h3>
        <p className="mt-1 text-lg font-semibold text-gray-900">₺{product.price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-white text-gray-800 py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300">
          Sepete Ekle
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;