import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, User as UserIcon, MessageSquare, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const MAX_ATTEMPTS = 3;
const COOLDOWN_TIME = 5 * 60 * 1000; // 5 minutes

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [modalState, setModalState] = useState({ isOpen: false, type: 'success', title: '', message: '' });
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  useEffect(() => {
    const checkCooldown = () => {
      const storedCooldownEnd = localStorage.getItem('contactCooldownEnd');
      if (storedCooldownEnd) {
        const remaining = parseInt(storedCooldownEnd) - Date.now();
        if (remaining > 0) {
          setCooldownRemaining(Math.ceil(remaining / 1000));
        } else {
          localStorage.removeItem('contactCooldownEnd');
          localStorage.setItem('contactAttempts', '0');
          setCooldownRemaining(0);
        }
      }
    };
    checkCooldown();
    const interval = setInterval(checkCooldown, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerModal = (type, title, msg) => {
    setModalState({ isOpen: true, type, title, message: msg });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cooldownRemaining > 0) {
      const minutes = Math.ceil(cooldownRemaining / 60);
      triggerModal('spam', 'Spam Protection', `You have reached the maximum number of attempts. Please wait ${minutes} minute${minutes > 1 ? 's' : ''} before sending another message.`);
      return;
    }

    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'messages'), {
        name,
        message,
        createdAt: serverTimestamp()
      });
      
      triggerModal('success', 'Message Sent!', 'Thank you for reaching out. Your message has been stored successfully.');
      setName('');
      setMessage('');
      
      let attempts = parseInt(localStorage.getItem('contactAttempts') || '0') + 1;
      localStorage.setItem('contactAttempts', attempts.toString());
      
      if (attempts >= MAX_ATTEMPTS) {
        const cooldownEnd = Date.now() + COOLDOWN_TIME;
        localStorage.setItem('contactCooldownEnd', cooldownEnd.toString());
        setCooldownRemaining(COOLDOWN_TIME / 1000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      triggerModal('error', 'Send Failed', 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pb-24 relative">
      {/* Modal */}
      <AnimatePresence>
        {modalState.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-gray-100 dark:border-zinc-800 text-center relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${
                modalState.type === 'success' ? 'bg-green-500' :
                modalState.type === 'error' ? 'bg-red-500' : 'bg-orange-500'
              }`}></div>
              
              <div className="flex justify-center mb-6">
                {modalState.type === 'success' && <CheckCircle2 className="text-green-500 w-16 h-16" />}
                {modalState.type === 'error' && <XCircle className="text-red-500 w-16 h-16" />}
                {modalState.type === 'spam' && <AlertCircle className="text-orange-500 w-16 h-16" />}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{modalState.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">{modalState.message}</p>
              
              <button
                onClick={closeModal}
                className={`w-full py-3 rounded-xl font-bold text-white shadow-lg transition-transform hover:-translate-y-1 active:translate-y-0 ${
                  modalState.type === 'success' ? 'bg-green-500 hover:bg-green-600 shadow-green-500/30' :
                  modalState.type === 'error' ? 'bg-red-500 hover:bg-red-600 shadow-red-500/30' : 
                  'bg-orange-500 hover:bg-orange-600 shadow-orange-500/30'
                }`}
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-sm font-bold mb-4 uppercase tracking-widest text-pink-500 flex items-center justify-center gap-2">
          <span className="w-8 h-[2px] bg-pink-500"></span>
          Get In Touch
          <span className="w-8 h-[2px] bg-pink-500"></span>
        </h2>
        {/* Hidden Admin Trigger */}
        <h1 
          onClick={() => navigate('/admin/login')}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 cursor-default"
        >
          Let's Connect
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {/* Contact Info & Direct Links */}
        <motion.div variants={item} className="flex flex-col gap-6">
          <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-zinc-800/50 shadow-xl relative overflow-hidden group h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-pink-500/20"></div>
            
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Contact Information</h3>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:rebato.ma.allysakrisebel@dnsc.edu.ph" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors border border-transparent hover:border-pink-500/20 group/link">
                <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-500/10 text-pink-500 shadow-inner group-hover/link:scale-110 transition-transform">
                  <Mail size={26} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email Me</p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 break-all">rebato.ma.allysakrisebel@dnsc.edu.ph</p>
                </div>
              </a>

              <a href="tel:+639675405193" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors border border-transparent hover:border-purple-500/20 group/link">
                <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-500 shadow-inner group-hover/link:scale-110 transition-transform">
                  <Phone size={26} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Call Me</p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 break-all">+639-67-540-5193</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={item}>
          <form 
            onSubmit={handleSubmit}
            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-zinc-800/50 shadow-xl flex flex-col gap-6 relative"
          >
            {cooldownRemaining > 0 && (
              <div className="absolute inset-0 z-10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-white/40">
                <AlertCircle className="text-orange-500 w-12 h-12 mb-3" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cooldown Active</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Please wait {Math.ceil(cooldownRemaining / 60)} minutes before sending more messages.
                </p>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">
                Anonymous Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <UserIcon size={18} />
                </div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  disabled={cooldownRemaining > 0}
                  className="w-full pl-11 pr-4 py-3 bg-white/60 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-gray-800 dark:text-white placeholder-gray-400 shadow-inner disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3.5 left-0 pl-4 pointer-events-none text-gray-400">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  required
                  disabled={cooldownRemaining > 0}
                  className="w-full pl-11 pr-4 py-3 bg-white/60 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-gray-800 dark:text-white placeholder-gray-400 resize-none shadow-inner disabled:opacity-50"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || cooldownRemaining > 0}
              className={`w-full py-4 mt-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 transform transition-all hover:-translate-y-1 active:translate-y-0 ${
                (isSubmitting || cooldownRemaining > 0) ? 'opacity-70 cursor-not-allowed hover:-translate-y-0' : ''
              }`}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

