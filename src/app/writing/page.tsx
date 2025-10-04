'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect, Fragment } from 'react';
import { Dialog } from '@headlessui/react';
import { Star, X, Search } from 'lucide-react';

// --- DATA IMPORT ---
// To add, remove, or edit books, modify the 'data/books.json' file in the project root.
// For the bookshelf, ensure each book has a title, author, and a valid 13-digit ISBN.
import booksData from '../../../data/books.json';

// --- REUSABLE & HELPER COMPONENTS ---
const GradientBlob = ({ className }: { className: string }) => (
  <div className={`absolute blur-3xl rounded-full opacity-10 -z-10 animate-pulse ${className}`} />
);

const Rating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
        ))}
    </div>
);

const FormatBadge = ({ format }: { format: string }) => {
    const colorClasses: { [key: string]: string } = {
        audiobook: 'bg-purple-100 text-purple-800',
        hardcover: 'bg-blue-100 text-blue-800',
        paperback: 'bg-green-100 text-green-800',
        ebook: 'bg-sky-100 text-sky-800',
    };
    return <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses[format.toLowerCase()] || 'bg-gray-100 text-gray-800'}`}>{format}</span>;
};

// --- PAGE-SPECIFIC COMPONENTS ---

const BookModal = ({ isOpen, setIsOpen, book }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void, book: any }) => (
    <AnimatePresence>
        {isOpen && (
            <Dialog static as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel as={motion.div} initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full flex flex-col md:flex-row overflow-hidden">
                        <motion.div layoutId={`book-cover-${book.id}`} className="w-full md:w-1/3 flex-shrink-0 bg-gray-100">
                            <Image src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} alt={book.title} width={400} height={600} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="p-8 flex flex-col">
                            <Dialog.Title as="h2" className="text-3xl font-bold mb-1 text-gray-900">{book.title}</Dialog.Title>
                            <p className="text-lg text-gray-600 mb-4">by {book.author}</p>
                            <div className="flex items-center justify-between mb-6 border-t border-b border-gray-200 py-4">
                                {book.rating && <Rating rating={book.rating} />}
                                {book.format && <FormatBadge format={book.format} />}
                            </div>
                            {book.review && <Dialog.Description as="p" className="text-gray-700 leading-relaxed flex-grow">{book.review}</Dialog.Description>}
                            <button onClick={() => setIsOpen(false)} className="mt-6 text-indigo-600 font-semibold hover:underline self-start">Close</button>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10"><X /></button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        )}
    </AnimatePresence>
);

function LibrarySection() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBook, setSelectedBook] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filterBooks = (books: any[]) => books.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleBookClick = (book: any) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const Shelf = ({ title, books }: { title: string, books: any[] }) => (
        books.length > 0 && <div className="mb-12 last:mb-0">
            <h3 className="font-semibold text-gray-500 mb-6 text-center tracking-widest">{title}</h3>
            <div className="flex gap-8 pb-4 -mb-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {books.map(book => (
                    <motion.div 
                        key={book.id} 
                        onClick={() => handleBookClick(book)} 
                        className="flex-shrink-0 snap-start cursor-pointer group"
                        whileHover={{ y: -8 }}
                    >
                        <motion.div layoutId={`book-cover-${book.id}`} className="w-40 h-56 shadow-xl rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl bg-gray-100">
                            <Image src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} alt={book.title} width={160} height={224} className="w-full h-full object-cover" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="relative py-20 lg:py-24 bg-gray-100 overflow-hidden">
            <GradientBlob className="top-0 left-0 w-[40rem] h-[40rem] bg-blue-200/50" />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Library Bookshelf</h2>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">A selection of books I've enjoyed. Click on a cover to see my review.</p>
                
                <div className="max-w-md mx-auto mb-12">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text"
                            placeholder="Search by title or author..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-full shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-md border border-white/10">
                    <Shelf title="FICTION" books={filterBooks(booksData.fiction)} />
                    <Shelf title="NON-FICTION" books={filterBooks(booksData.nonFiction)} />
                </div>
            </div>
            <BookModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} book={selectedBook} />
        </section>
    );
}

function CurrentlyReadingSection() {
    return (
        <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
            <GradientBlob className="bottom-0 right-0 w-[40rem] h-[40rem] bg-purple-200/50" />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Currently Reading</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {booksData.currentlyReading.map((book: any, i: number) => (
                        <motion.div 
                            key={book.id} 
                            className="flex items-center gap-8"
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: i * 0.15 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <motion.div 
                                className="w-40 h-56 flex-shrink-0 shadow-2xl rounded-lg overflow-hidden bg-gray-100"
                                animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} alt={book.title} width={160} height={224} className="w-full h-full object-cover" />
                            </motion.div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{book.title}</h3>
                                <p className="text-gray-600 mb-4">by {book.author}</p>
                                <FormatBadge format={book.format} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CurrentlyWritingSection() {
    const stages = ["First Draft", "Editing", "Beta Reading", "Final", "Published"];
    const currentStage = "Editing";
    const currentStageIndex = stages.indexOf(currentStage);

    return (
        <section className="relative py-20 lg:py-24 bg-gray-100 overflow-hidden">
            <GradientBlob className="top-1/2 left-[-25rem] -translate-y-1/2 w-[50rem] h-[50rem] bg-teal-200/50" />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Currently Writing</h2>
                <motion.div className="max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}>
                    <motion.div
                        className="p-8 bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl border-white/10 text-white"
                        whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 35px rgba(0,0,0,0.2)" }}
                    >
                        <h3 className="text-3xl font-bold mb-2">The Fintech Files</h3>
                        <p className="text-blue-300 mb-6">Estimated Release: Late 2026</p>
                        <p className="text-gray-300 mb-8 leading-relaxed">A thriller about a rogue data scientist who uncovers a conspiracy to manipulate global markets, forcing him to go on the run with only an AI as his ally.</p>
                        <div>
                            <div className="grid grid-cols-5 gap-2 mb-3 text-xs font-medium text-center">
                                {stages.map((stage, i) => (
                                    <div key={stage} className={`p-2 rounded-md transition-all duration-300 ${i === currentStageIndex ? 'bg-white/20 shadow-lg ring-1 ring-inset ring-white/20' : 'opacity-40'}`}>
                                        <span className={`${i === currentStageIndex ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300' : ''}`}>{stage}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

const BeehiivEmbedScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            const allScripts = document.querySelectorAll('script[src="https://subscribe-forms.beehiiv.com/embed.js"]');
            allScripts.forEach(s => s.remove());
        };
    }, []);
    return null;
};

function NewsletterSection() {
  return (
    <motion.section 
      className="py-16"
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Inkpot Newsletter</h2>
      <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">
        Inkpot is a newsletter for writers who wrestle with stories — essays, reflections, 
        and journeys into the art of fiction writing.
      </p>
      
      <div className="max-w-3xl mx-auto px-4">
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 p-6">
          <iframe
            src="https://subscribe-forms.beehiiv.com/dcc71a9d-066f-4f27-9e2c-2b8aeb6ff481?slim=true"
            className="w-full rounded-xl"
            style={{ border: "none", overflow: "hidden", minHeight: "500px", backgroundColor: "transparent" }}
            scrolling="no"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function WritingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BeehiivEmbedScript />
      <LibrarySection />
      <CurrentlyReadingSection />
      <CurrentlyWritingSection />
      <NewsletterSection />
    </main>
  );
}