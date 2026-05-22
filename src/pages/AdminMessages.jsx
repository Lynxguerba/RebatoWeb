import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { Trash2, LogOut, MessageSquare, Clock, User } from 'lucide-react';
import { db, auth } from '../firebase';

export default function AdminMessages() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate('/admin/login');
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribeAuth();
  }, [navigate]);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgs);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching messages:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteDoc(doc(db, 'messages', id));
      } catch (error) {
        console.error('Error deleting document:', error);
        alert('Failed to delete message.');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Just now';
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit'
    }).format(date);
  };

  if (!user) return null;

  return (
    <div className="w-full max-w-6xl mx-auto pt-10 pb-24 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 flex items-center gap-3">
            <MessageSquare className="text-pink-500" size={32} />
            Messages Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Manage messages received from the contact form.
          </p>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleLogout}
          className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-red-500 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-200 dark:hover:border-red-500/30 transition-all font-medium text-sm shadow-sm"
        >
          <LogOut size={16} />
          Sign Out
        </motion.button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
      ) : messages.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-zinc-800/50 p-12 text-center shadow-lg"
        >
          <div className="w-20 h-20 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="text-gray-400" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No messages yet</h3>
          <p className="text-gray-500 dark:text-gray-400">
            When someone fills out the contact form, their message will appear here.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-500/20 dark:to-purple-500/20 flex items-center justify-center text-pink-500">
                      <User size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white truncate max-w-[150px]" title={msg.name}>
                        {msg.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Clock size={12} />
                        {formatDate(msg.createdAt)}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                    title="Delete message"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <div className="flex-grow">
                  <div className="p-4 bg-gray-50/50 dark:bg-zinc-800/50 rounded-2xl text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap h-full">
                    {msg.message}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
