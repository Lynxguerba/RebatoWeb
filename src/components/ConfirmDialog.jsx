import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmDialog({ isOpen, onClose, onConfirm, title, message, confirmText, cancelText, type }) {
  const isDanger = type === 'danger';
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] p-4 w-full max-w-sm"
          >
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-pink-500 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
              <div className="p-6 text-center">
                <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${isDanger ? 'bg-red-100 dark:bg-red-500/10' : 'bg-pink-100 dark:bg-pink-500/10'}`}>
                  <AlertTriangle className={isDanger ? 'text-red-500' : 'text-pink-500'} size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{message}</p>
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all"
                  >
                    {cancelText || 'Cancel'}
                  </button>
                  <button
                    onClick={onConfirm}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg shadow-pink-500/30"
                  >
                    {confirmText || 'Confirm'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
