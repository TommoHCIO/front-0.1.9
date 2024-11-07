import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-[#1a2634] border border-white/10 rounded-2xl shadow-xl p-6 md:p-8 overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#2D9CDB] mb-2">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  To revolutionize social media by creating a sustainable ecosystem where users are rewarded for their post engagement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Project Dynamics</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-[#2D9CDB] rounded-full flex-shrink-0" />
                    <span>Blockchain-powered reward system that ensures transparent and fair distribution of tokens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-[#2D9CDB] rounded-full flex-shrink-0" />
                    <span>Smart contract automation for instant reward distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-[#2D9CDB] rounded-full flex-shrink-0" />
                    <span>Community-driven governance system for sustainable growth</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Future Plans</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-[#2D9CDB] rounded-full flex-shrink-0" />
                    <span>Advanced analytics dashboard for tracking engagement metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-[#2D9CDB] rounded-full flex-shrink-0" />
                    <span>Mobile application development for enhanced accessibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-[#2D9CDB] rounded-full flex-shrink-0" />
                    <span>Expansion of reward mechanisms and token utility</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};