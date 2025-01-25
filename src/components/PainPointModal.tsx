import React from 'react';
import { X, TrendingUp, TrendingDown, Target, AlertTriangle, Lightbulb } from 'lucide-react';

interface PainPointDetail {
  title: string;
  description: string;
  statistics: {
    label: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
  }[];
  challenges: string[];
  impacts: string[];
  solutions: string[];
}

interface PainPointModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PainPointDetail | null;
}

export default function PainPointModal({ isOpen, onClose, data }: PainPointModalProps) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div 
          className="relative bg-white rounded-2xl w-full max-w-3xl shadow-xl max-h-[85vh] flex flex-col overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex-shrink-0 p-6 border-b border-gray-100 relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 pr-12">{data.title}</h3>
            <p className="text-gray-600 mt-2">{data.description}</p>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.statistics.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-colors group"
                >
                  <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className={`flex items-center gap-1.5 text-sm ${
                    stat.trend === 'up' 
                      ? 'text-red-600' 
                      : 'text-green-600'
                  }`}>
                    {stat.trend === 'up' 
                      ? <TrendingUp className="w-4 h-4" />
                      : <TrendingDown className="w-4 h-4" />
                    }
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Three Column Layout for Challenges, Impacts, and Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Challenges */}
              <div className="bg-red-50/50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-red-600" />
                  <h4 className="text-lg font-semibold text-gray-900">主要挑战</h4>
                </div>
                <ul className="space-y-3">
                  {data.challenges.map((challenge, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 group-hover:scale-150 transition-transform" />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Impacts */}
              <div className="bg-orange-50/50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  <h4 className="text-lg font-semibold text-gray-900">业务影响</h4>
                </div>
                <ul className="space-y-3">
                  {data.impacts.map((impact, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 group-hover:scale-150 transition-transform" />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                        {impact}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-green-50/50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                  <h4 className="text-lg font-semibold text-gray-900">解决方案</h4>
                </div>
                <ul className="space-y-3">
                  {data.solutions.map((solution, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 group-hover:scale-150 transition-transform" />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}