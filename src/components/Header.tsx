import React, { useState, useEffect } from 'react';
import { 
  Globe, Menu, X, ChevronDown,
  ShoppingCart, DollarSign, Users2, BarChart2, MessageSquareMore,
  Zap, Smartphone, ShoppingBag, Bell
} from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [showPainPointsDropdown, setShowPainPointsDropdown] = useState(false);

  const painPoints = [
    { 
      icon: ShoppingCart,
      href: '#pain-points', 
      label: '移动端购物体验差', 
      description: '传统独立站移动端适配不足，加载速度慢，购物流程复杂'
    },
    { 
      icon: DollarSign,
      href: '#pain-points', 
      label: '获客成本持续上涨', 
      description: '主流广告平台竞价激烈，投放效果下滑，获客成本攀升'
    },
    { 
      icon: Users2,
      href: '#pain-points', 
      label: '用户忠诚度不足', 
      description: '缺乏完整的会员运营体系，无法建立品牌粘性和长期信任'
    },
    { 
      icon: BarChart2,
      href: '#pain-points', 
      label: '营销决策缺乏数据', 
      description: '数据分析能力不足，无法进行精准用户画像和个性化营销'
    }
  ];

  const solutions = [
    { 
      icon: Zap,
      href: '#features', 
      label: '闪电式部署', 
      description: '5分钟内完成独立站到APP的转型升级' 
    },
    { 
      icon: Smartphone,
      href: '#features', 
      label: '原生APP体验', 
      description: '提供完整的移动端购物体验' 
    },
    { 
      icon: ShoppingBag,
      href: '#features', 
      label: '智能营销系统', 
      description: '多维度精准营销推送' 
    },
    { 
      icon: Bell,
      href: '#features', 
      label: '会员运营体系', 
      description: '打造完整的会员成长体系' 
    },
    { 
      icon: MessageSquareMore,
      href: '#features', 
      label: '智能消息系统', 
      description: '打造全渠道智能触达体系' 
    }
  ];

  const menuItems = [
    {
      href: '#pain-points',
      label: '行业痛点',
      hasDropdown: true,
      onMouseEnter: () => setShowPainPointsDropdown(true),
      onMouseLeave: () => setShowPainPointsDropdown(false)
    },
    {
      href: '#features',
      label: '解决方案',
      hasDropdown: true,
      onMouseEnter: () => setShowSolutionsDropdown(true),
      onMouseLeave: () => setShowSolutionsDropdown(false)
    },
    { href: '#benefits', label: '成功案例' },
    { href: '#contact', label: '立即咨询' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="relative z-10 flex items-center space-x-2.5 group focus:outline-none"
          >
            <div className="relative flex items-center">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-blue-600/80 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative flex">
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                  <Globe className="w-5 h-5 text-white/90 transform -rotate-12 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute -right-0.5 -top-0.5 w-2 h-2 rounded-full bg-purple-400/80 animate-pulse" />
                <div className="absolute -left-0.5 -bottom-0.5 w-1.5 h-1.5 rounded-full bg-blue-300/80 animate-pulse animation-delay-200" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text tracking-tight">
                Shoplink
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wider">
                GLOBAL COMMERCE
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={item.onMouseEnter}
                onMouseLeave={item.onMouseLeave}
              >
                <a
                  href={item.href}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center gap-1 ${
                    index === menuItems.length - 1
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transform'
                      : `text-gray-700 hover:text-blue-600 ${isScrolled ? 'hover:bg-blue-50/50' : 'hover:bg-white/80'} backdrop-blur-sm`
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.hasDropdown && (
                  index === 0 
                    ? renderDropdownMenu(painPoints, showPainPointsDropdown)
                    : renderDropdownMenu(solutions, showSolutionsDropdown)
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-50 p-2 rounded-lg ${
              isScrolled || isMobileMenuOpen ? 'hover:bg-blue-50/50' : 'hover:bg-white/80'
            } backdrop-blur-sm`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/5 backdrop-blur-sm" 
                 onClick={() => setIsMobileMenuOpen(false)} />
            
            {/* Menu Content */}
            <div className="fixed inset-y-0 right-0 w-full bg-white/95 shadow-xl">
              <div className="h-full overflow-y-auto">
                <div className="flex flex-col pt-20 pb-6 px-6">
                  {menuItems.map((item, index) => (
                    <div key={index} className="mb-6">
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-center text-xl font-medium mb-4 transition-all duration-300 ${
                          index === menuItems.length - 1
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 transform'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        {item.label}
                      </a>
                      {item.hasDropdown && (
                        <div className="grid grid-cols-1 gap-4">
                          {(index === 0 ? painPoints : solutions).map((subItem, idx) => {
                            const Icon = subItem.icon;
                            return (
                              <a
                                key={idx}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-4 p-4 bg-white/80 rounded-xl hover:bg-white transition-colors"
                              >
                                <div className={`relative flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${
                                  idx % 2 === 0 ? 'from-blue-600 to-blue-400' : 'from-purple-600 to-purple-400'
                                }`}>
                                  <Icon className="absolute inset-0 m-auto h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900">{subItem.label}</div>
                                  <div className="text-sm text-gray-600">{subItem.description}</div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

const renderDropdownMenu = (items: typeof solutions | typeof painPoints, show: boolean) => {
  if (!show) return null;
  
  return (
    <div className="absolute top-full left-0 pt-4 w-[380px]">
      <div className="relative">
        {/* Backdrop blur and gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-blue-50/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl" />
        
        {/* Content */}
        <div className="relative rounded-2xl overflow-hidden">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                className="flex items-start gap-4 p-4 hover:bg-white/40 transition-colors relative group"
              >
                {/* Icon container with gradient background */}
                <div className={`relative flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${
                  idx % 2 === 0 ? 'from-blue-600 to-blue-400' : 'from-purple-600 to-purple-400'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="absolute inset-0 m-auto h-5 w-5 text-white" />
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors line-clamp-2">
                    {item.description}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ChevronDown className="w-4 h-4 text-blue-600 rotate-[-90deg]" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};