import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const ALLOWED_ADMIN_UIDS = import.meta.env.VITE_ALLOWED_ADMIN_UIDS?.split(',') || [];

export default function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Logged in user UID:", result.user.uid);
      console.log("Allowed UIDs:", ALLOWED_ADMIN_UIDS);
      
      if (!ALLOWED_ADMIN_UIDS.includes(result.user.uid)) {
        console.error("Access denied for UID:", result.user.uid);
        await signOut(auth);
        setError('Unauthorized user. You do not have admin access.');
      } else {
        navigate('/admin/messages');
      }
    } catch (err) {
      console.error("Login error details:", err);
      setError(`Failed to login: ${err.message || 'Check browser console'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto pt-20 pb-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-zinc-800/50 shadow-xl flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Admin Login
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Sign in with your authorized Google account to view messages.
        </p>

        {error && (
          <div className="w-full bg-red-100 text-red-600 p-3 rounded-lg text-sm border border-red-200">
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className={`w-full py-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-white rounded-xl font-bold text-lg shadow-sm flex items-center justify-center gap-3 transform transition-all hover:-translate-y-1 active:translate-y-0 hover:shadow-md ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span>{loading ? 'Signing in...' : 'Sign in with Google'}</span>
        </button>
      </motion.div>
    </div>
  );
}
