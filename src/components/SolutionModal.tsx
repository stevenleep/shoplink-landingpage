import React from 'react';
import { X, TrendingUp, BarChart3, Users2, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  implementation: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  keyPoints: string[];
  timeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

interface SolutionDetail {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  caseStudy: CaseStudy;
}

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: SolutionDetail | null;
}

export default function SolutionModal({ isOpen, onClose, data }: SolutionModalProps) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div 
          className="relative bg-white rounded-2xl w-full max-w-4xl shadow-xl max-h-[85vh] flex flex-col overflow-hidden"
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
            {/* Features and Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Features */}
              <div className="bg-blue-50/50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-900">核心功能</h4>
                </div>
                <ul className="space-y-3">
                  {data.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 group-hover:scale-150 transition-transform" />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-purple-50/50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <h4 className="text-lg font-semibold text-gray-900">业务价值</h4>
                </div>
                <ul className="space-y-3">
                  {data.benefits.map((benefit, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 group-hover:scale-150 transition-transform" />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-gray-900" />
                <h4 className="text-lg font-semibold text-gray-900">案例研究：{data.caseStudy.company}</h4>
              </div>

              <div className="space-y-6">
                {/* Company Info */}
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white px-4 py-2 rounded-lg border border-gray-100">
                    <span className="text-sm text-gray-500">行业</span>
                    <div className="font-medium text-gray-900">{data.caseStudy.industry}</div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg border border-gray-100">
                    <span className="text-sm text-gray-500">实施周期</span>
                    <div className="font-medium text-gray-900">{data.caseStudy.timeline}</div>
                  </div>
                </div>

                {/* Challenge and Implementation */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">面临挑战</h5>
                    <p className="text-gray-600">{data.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">实施方案</h5>
                    <p className="text-gray-600">{data.caseStudy.implementation}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h5 className="font-medium text-gray-900 mb-4">改进效果</h5>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.caseStudy.metrics.map((metric, index) => (
                      <div 
                        key={index}
                        className="bg-white rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-colors"
                      >
                        <div className="text-sm text-gray-500 mb-2">{metric.label}</div>
                        <div className="flex items-center gap-2">
                          <div className="text-gray-400 line-through text-sm">{metric.before}</div>
                          <div className="text-xl font-bold text-gray-900">{metric.after}</div>
                        </div>
                        <div className="text-green-600 text-sm mt-1">
                          {metric.improvement}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points */}
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">关键成果</h5>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {data.caseStudy.keyPoints.map((point, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                {data.caseStudy.testimonial && (
                  <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-lg p-6 mt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Users2 className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <blockquote className="text-gray-600 italic mb-4">
                          "{data.caseStudy.testimonial.quote}"
                        </blockquote>
                        <div className="font-medium text-gray-900">
                          {data.caseStudy.testimonial.author}
                        </div>
                        <div className="text-sm text-gray-500">
                          {data.caseStudy.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}