
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { modelData } from '../constants';
import ModelViewer from '../components/ModelViewer';
import PlaceholderPage from './PlaceholderPage';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


const ModelPage: React.FC = () => {
  const { modelId } = useParams<{ modelId: string }>();
  
  if (!modelId || !modelData[modelId]) {
    return <PlaceholderPage title="Model Not Found" />;
  }

  const data = modelData[modelId];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-10 text-gray-900 uppercase tracking-tight"
        >
          {data.title}
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-12">
          <ModelViewer src={data.glbUrl} alt={data.title} />
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.images.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`${data.title} - view ${index + 1}`}
                className="w-full max-w-2xl h-auto object-contain shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ModelPage;