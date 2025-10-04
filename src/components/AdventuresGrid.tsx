'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { X, ArrowRight } from 'lucide-react';

const AdventureModal = ({ adventure, isOpen, setIsOpen }: { adventure: any, isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
    if (!adventure) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog static as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel as={motion.div} initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden">
                            <div className="relative h-64 sm:h-80">
                                <Image src={adventure.coverImage} alt={adventure.title} fill className="object-cover" />
                            </div>
                            <div className="p-8">
                                <Dialog.Title as="h2" className="text-3xl font-bold mb-2 text-gray-900 font-serif">{adventure.title}</Dialog.Title>
                                <p className="text-md text-gray-600 mb-4">{adventure.location} &bull; {new Date(adventure.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
                                <Dialog.Description as="p" className="text-gray-700 leading-relaxed mb-6">{adventure.summary}</Dialog.Description>
                                <Link href={adventure.contentUrl} className="inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group">
                                    Continue Reading <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"><X /></button>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    );
};

export default function AdventuresGrid({ adventures }: { adventures: any[] }) {
    const [selectedAdventure, setSelectedAdventure] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (adventure: any) => {
        setSelectedAdventure(adventure);
        setIsModalOpen(true);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <section className="py-20 lg:py-24 bg-gray-50">
            <motion.div 
                className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {adventures.map(adventure => (
                    <motion.div 
                        key={adventure.slug}
                        variants={cardVariants}
                        onClick={() => handleCardClick(adventure)}
                        className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg"
                    >
                        <motion.div className="absolute inset-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                            <Image src={adventure.coverImage} alt={adventure.title} fill className="object-cover transition-all duration-500 group-hover:brightness-110" />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="relative h-full flex flex-col justify-end p-6 text-white">
                            <h3 className="text-2xl font-bold font-serif">{adventure.title}</h3>
                            <p className="text-sm text-white/80 mb-2">{adventure.location}</p>
                            <div className="flex flex-wrap gap-2">
                                {adventure.tags.map((tag: string) => (
                                    <span key={tag} className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 font-semibold text-sm">
                                Read Story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <AdventureModal adventure={selectedAdventure} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </section>
    );
}
