import React from 'react';
import { 
  X, 
  TrendingUp, 
  BarChart3, 
  Users2, 
  CheckCircle2, 
  Globe2, 
  DollarSign,
  Building2,
  Clock,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  description: string;
  industry: string;
  region: string;
  timeline: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  keyAchievements: string[];
  timeline_events: TimelineEvent[];
  roi: {
    investment: string;
    return: string;
    period: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CaseStudy | null;
}

export default function SuccessModal({ isOpen, onClose, data }: SuccessModalProps) {
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
            {/* Company Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-blue-50/50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm">行业</span>
                </div>
                <div className="font-medium text-gray-900">{data.industry}</div>
              </div>
              <div className="bg-purple-50/50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-purple-600 mb-1">
                  <Globe2 className="w-4 h-4" />
                  <span className="text-sm">地区</span>
                </div>
                <div className="font-medium text-gray-900">{data.region}</div>
              </div>
              <div className="bg-pink-50/50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-pink-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">实施周期</span>
                </div>
                <div className="font-medium text-gray-900">{data.timeline}</div>
              </div>
              <div className="bg-green-50/50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-600 mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm">投资回报</span>
                </div>
                <div className="font-medium text-gray-900">{data.roi.return}</div>
              </div>
            </div>

            {/* Challenge and Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50/50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h4 className="text-lg font-semibold text-gray-900">面临挑战</h4>
                </div>
                <p className="text-gray-600">{data.challenge}</p>
              </div>
              <div className="bg-green-50/50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                  <h4 className="text-lg font-semibold text-gray-900">解决方案</h4>
                </div>
                <p className="text-gray-600">{data.solution}</p>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-gray-900" />
                <h4 className="text-lg font-semibold text-gray-900">关键指标改善</h4>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="relative group bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-all duration-300"
                  >
                    <div className="text-sm text-gray-500 mb-2">{metric.label}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-gray-400 line-through text-sm">{metric.before}</div>
                      <div className="text-xl font-bold text-gray-900">{metric.after}</div>
                    </div>
                    <div className="text-green-600 text-sm mt-1">
                      {metric.improvement}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.01] to-purple-600/[0.01] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-gray-900" />
                <h4 className="text-lg font-semibold text-gray-900">实施时间线</h4>
              </div>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-[21px] w-px bg-gray-200" />
                <div className="space-y-6">
                  {data.timeline_events.map((event, index) => (
                    <div key={index} className="relative flex gap-6">
                      <div className="flex-none">
                        <div className="h-11 w-11 rounded-full bg-blue-50 border-2 border-blue-500 flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">
                            {event.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1.5">
                        <h5 className="text-lg font-medium text-gray-900 mb-1">
                          {event.title}
                        </h5>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROI Analysis */}
            <div className="bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h4 className="text-lg font-semibold text-gray-900">投资回报分析</h4>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">初始投资</div>
                  <div className="text-xl font-bold text-gray-900">{data.roi.investment}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">投资回报</div>
                  <div className="text-xl font-bold text-green-600">{data.roi.return}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">回收周期</div>
                  <div className="text-xl font-bold text-gray-900">{data.roi.period}</div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                <h4 className="text-lg font-semibold text-gray-900">关键成果</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {data.keyAchievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 group-hover:scale-150 transition-transform" />
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users2 className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <blockquote className="text-gray-600 italic mb-4">
                    "{data.testimonial.quote}"
                  </blockquote>
                  <div className="font-medium text-gray-900">
                    {data.testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {data.testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {data.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}