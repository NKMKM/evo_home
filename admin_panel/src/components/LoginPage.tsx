import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, LockIcon, ArrowRightIcon } from 'lucide-react';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    console.log('🔁 handleSubmit старт');

    try {
      const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // очень важно для сессий!
        body: JSON.stringify({ username, password })
      });

      console.log('📦 Ответ от сервера:', res.status);

      if (res.ok) {
        const json = await res.json();
        console.log('✅ Успешный вход:', json);
        window.location.href = '/dashboard';
      } else {
        const errText = await res.text();
        console.warn('❌ Ошибка логина:', res.status, errText);
        setError('Неверный логин или пароль');
      }
    } catch (err) {
      console.error('🔥 Ошибка сети/сервер не отвечает:', err);
      setError('Ошибка соединения с сервером');
    } finally {
      console.log('⏹️ handleSubmit завершён');
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 mx-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-light text-gray-800"
          >
            Evo Admin Panel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-500 mt-1"
          >
            Sign in to access your dashboard
          </motion.p>
        </div>
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <label className="block text-sm font-light text-gray-600 mb-1" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-4 w-4 text-gray-400" />
              </div>
              <input
                id="username"
                type="text"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-100 focus:border-blue-200 transition-all duration-200"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <label className="block text-sm font-light text-gray-600 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon className="h-4 w-4 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-100 focus:border-blue-200 transition-all duration-200"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-500 mb-4 text-center"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center transition-all duration-200"
            disabled={loading}
          >
            {loading ? 'Вход...' : 'Sign In'}
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
