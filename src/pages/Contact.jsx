import { motion } from 'framer-motion';
import { Mail, Phone, Send, User as UserIcon, MessageSquare } from 'lucide-react';

export default function Contact() {
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

  return (
    <div className="w-full max-w-4xl mx-auto pb-24">
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
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
            onSubmit={(e) => { e.preventDefault(); alert("Message sent! (Mock)"); }}
            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-zinc-800/50 shadow-xl flex flex-col gap-6"
          >
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
                  placeholder="John Doe"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-white/60 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-gray-800 dark:text-white placeholder-gray-400 shadow-inner"
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
                  placeholder="Type your message here..."
                  required
                  className="w-full pl-11 pr-4 py-3 bg-white/60 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-gray-800 dark:text-white placeholder-gray-400 resize-none shadow-inner"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 transform transition-all hover:-translate-y-1 active:translate-y-0"
            >
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
