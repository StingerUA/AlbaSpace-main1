import React from 'react';

// FIX: Add TypeScript declaration for the 'model-viewer' custom element.
// This resolves the error "Property 'model-viewer' does not exist on type 'JSX.IntrinsicElements'".
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.HTMLAttributes<HTMLElement> & {
        src: string;
        alt?: string;
        ar?: boolean;
        arModes?: string;
        cameraControls?: boolean;
        shadowIntensity?: string;
        autoplay?: boolean;
        loop?: boolean;
      };
    }
  }
}

interface ModelViewerProps {
  src: string;
  alt: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ src, alt }) => {
  if (!src) {
    return (
        <div className="w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">3D model is not available for this item.</p>
        </div>
    );
  }

  return (
    <model-viewer
      src={src}
      alt={alt}
      ar
      // NOTE: Custom element attributes with hyphens (e.g., 'ar-modes') are used as camelCase props in React (e.g., 'arModes').
      arModes="webxr scene-viewer quick-look"
      cameraControls
      shadowIntensity="1"
      autoplay
      loop
      style={{ width: '100%', height: '500px', borderRadius: '8px' }}
    ></model-viewer>
  );
};

export default ModelViewer;