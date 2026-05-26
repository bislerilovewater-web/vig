import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, LogOut, Scale, FileText, BookOpen, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import NotificationBell from './NotificationBell';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    setProfileOpen(false);
    await logout();
    navigate('/');
  };

  // Contextual quick-links based on role — shown in navbar bar directly
  const quickLinks =
    user?.role === 'client' ? [
      { to: '/client/dashboard', icon: Scale, label: 'Intelligence' },
      { to: '/client/affidavit', icon: FileText, label: 'Affidavit' },
      { to: '/client/cases', icon: BookOpen, label: 'My Cases' },
    ] :
    user?.role === 'lawyer' ? [
      { to: '/lawyer/dashboard', icon: Scale, label: 'Dashboard' },
    ] :
    user?.role === 'legal_writer' ? [
      { to: '/writer/dashboard', icon: Scale, label: 'Dashboard' },
    ] : [];

  return (
    <nav
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#EFE7D6]"
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="font-heading text-2xl font-extrabold tracking-tight text-[#6D071A]"
            data-testid="navbar-logo"
          >
            VakilSetu
          </Link>

          {/* Centre links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/services"
              className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-colors duration-200
                ${location.pathname === '/services'
                  ? 'text-[#6D071A] bg-[#6D071A]/8'
                  : 'text-stone-600 hover:text-[#6D071A] hover:bg-[#6D071A]/5'}`}
              data-testid="navbar-services"
            >
              Services
            </Link>
            {quickLinks.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors duration-200
                  ${location.pathname === to
                    ? 'text-[#6D071A] bg-[#6D071A]/8'
                    : 'text-stone-600 hover:text-[#6D071A] hover:bg-[#6D071A]/5'}`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Mobile Services link */}
            <Link
              to="/services"
              className="text-stone-600 hover:text-[#6D071A] transition-colors duration-200 text-sm md:hidden"
            >
              Services
            </Link>

            {user && <NotificationBell />}

            {!user ? (
              <Link to="/login" data-testid="navbar-login-button">
                <button className="btn-primary">Login / Signup</button>
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 h-9 px-3 rounded-xl border border-[#EFE7D6] bg-white hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#6D071A]/10 transition-all text-sm text-stone-600"
                  data-testid="navbar-user-menu"
                >
                  <User className="w-4 h-4 text-[#6D071A]" />
                  <span className="hidden sm:block font-medium max-w-[120px] truncate">{user.name}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute right-0 top-12 w-52 bg-white rounded-2xl shadow-2xl shadow-[#6D071A]/15 border border-[#EFE7D6] z-50 overflow-hidden"
                    >
                      <div className="px-4 py-3 bg-[#FFFDF7] border-b border-[#EFE7D6]">
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Signed in as</p>
                        <p className="text-sm font-semibold text-slate-900 truncate">{user.name}</p>
                        <p className="text-xs text-slate-400 capitalize">{user.role?.replace('_', ' ')}</p>
                      </div>

                      {/* Mobile quick-links */}
                      {quickLinks.length > 0 && (
                        <div className="py-1.5 md:hidden border-b border-slate-100">
                          {quickLinks.map(({ to, icon: Icon, label }) => (
                            <Link
                              key={to}
                              to={to}
                              onClick={() => setProfileOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-stone-700 hover:bg-[#FFFDF7] hover:text-[#6D071A] transition-colors"
                            >
                              <span className="w-7 h-7 rounded-lg bg-[#6D071A]/5 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-3.5 h-3.5" />
                              </span>
                              {label}
                            </Link>
                          ))}
                        </div>
                      )}

                      <div className="py-1.5">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors group"
                          data-testid="navbar-logout-button"
                        >
                          <span className="w-7 h-7 rounded-lg bg-red-50 group-hover:bg-red-100 flex items-center justify-center flex-shrink-0">
                            <LogOut className="w-3.5 h-3.5" />
                          </span>
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Backdrop */}
                {profileOpen && (
                  <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
