import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageGalleryProps {
    images: string[];
    projectName: string;
}

const ImageGallery = ({ images, projectName }: ImageGalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (selectedImage === null) return;

        if (e.key === "Escape") {
            setSelectedImage(null);
        } else if (e.key === "ArrowLeft") {
            setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
        } else if (e.key === "ArrowRight") {
            setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
        }
    };

    React.useEffect(() => {
        if (selectedImage !== null) {
            window.addEventListener("keydown", handleKeyDown as any);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown as any);
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);

    return (
        <section className="space-y-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-black text-white text-center"
            >
                Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8]">Gallery</span>
            </motion.h2>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImage(index)}
                        className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
                    >
                        <img
                            src={image}
                            alt={`${projectName} screenshot ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <span className="text-white font-semibold">Click to view</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-8 right-8 text-white hover:text-[#915eff] transition-colors z-10"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
                            }}
                            className="absolute left-8 text-white hover:text-[#915eff] transition-colors z-10"
                        >
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
                            }}
                            className="absolute right-8 text-white hover:text-[#915eff] transition-colors z-10"
                        >
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Image */}
                        <motion.img
                            key={selectedImage}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            src={images[selectedImage]}
                            alt={`${projectName} screenshot ${selectedImage + 1}`}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />

                        {/* Image Counter */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                            {selectedImage + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ImageGallery;
