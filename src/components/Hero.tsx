import React from 'react';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

const metrics = [
  { value: '200%', label: '转化率提升', color: 'from-blue-600 to-purple-600' },
  { value: '75%', label: '用户复购率', color: 'from-purple-600 to-pink-600' },
  { value: '85%', label: '用户留存', color: 'from-pink-600 to-red-600' },
  { value: '5分钟', label: '快速部署', color: 'from-red-600 to-orange-600' }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[35%] left-[5%] w-[35vw] h-[35vw] max-w-[280px] max-h-[280px] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-[45%] right-[5%] w-[35vw] h-[35vw] max-w-[280px] max-h-[280px] bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%] w-[35vw] h-[35vw] max-w-[280px] max-h-[280px] bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-blue-500"></span>
            </span>
            独立站 → PWA应用 + 原生APP
          </div>

          {/* Hero Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight animate-fade-in animation-delay-200">
            <span className="inline-block">将中国商家的</span>
            <span className="inline-block">跨境独立站</span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                转化提升200%
              </span>
            </span>
          </h1>

          {/* Hero Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 animate-fade-in animation-delay-400 px-4">
            <span className="inline-block">5分钟将您的独立站</span>
            <span className="inline-block">转换为PWA应用和原生APP，</span>
            <br />
            <span className="inline-block">无需编码，提供完整的移动端购物体验</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 animate-fade-in animation-delay-600">
            {/* Primary CTA Button */}
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center"
            >
              <button className="relative w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-base sm:text-lg font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                免费获取Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            {/* Secondary CTA Button */}
            <a 
              href="#benefits"
              className="group inline-flex items-center justify-center rounded-lg border border-blue-600/20 bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-blue-600 transition-all duration-200 hover:border-blue-600 hover:bg-white"
            >
              <span className="flex items-center gap-2">
                查看成功案例
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 animate-fade-in animation-delay-800">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-100 transition-all duration-200 hover:border-gray-200 hover:bg-white">
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${metric.color} text-transparent bg-clip-text transition-transform duration-200 group-hover:scale-105`}>
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}