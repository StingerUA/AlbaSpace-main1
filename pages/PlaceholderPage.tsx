
import React from 'react';
import { motion } from 'framer-motion';

interface PlaceholderPageProps {
  title: string;
}

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 my-8 bg-white rounded-lg shadow-xl"
    >
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="mt-4 text-lg text-gray-600">This page is under construction.</p>
      </div>
    </motion.div>
  );
};

export default PlaceholderPage;