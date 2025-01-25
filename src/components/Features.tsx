import React, { useState } from 'react';
import { Zap, Smartphone, ShoppingBag, Bell, MessageSquareMore } from 'lucide-react';
import SolutionModal from './SolutionModal';

interface SolutionDetail {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  caseStudy: {
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
  };
}

const features = [
  {
    icon: Zap,
    title: '闪电式部署',
    description: '5分钟内完成独立站到APP的转型升级',
    color: 'from-blue-600 to-blue-400',
    highlights: [
      '导入现有独立站',
      'Service Worker配置',
      '性能自动优化',
      '多语言支持'
    ],
    detail: {
      title: '闪电式部署解决方案',
      description: '通过自动化工具和预设配置，帮助商家在5分钟内完成从传统独立站到PWA应用的转型升级。',
      features: [
        '一键导入现有独立站内容和数据',
        '自动配置Service Worker离线功能',
        '智能性能优化和资源压缩',
        '内置多语言支持和自动翻译',
        '自动生成应用图标和启动画面',
        '跨平台兼容性自动适配'
      ],
      benefits: [
        '显著减少技术转型时间和成本',
        '保持现有业务正常运营',
        '提升网站性能和用户体验',
        '扩大全球市场覆盖范围',
        '降低维护和运营成本',
        '提高团队工作效率'
      ],
      caseStudy: {
        company: '某跨境电商品牌',
        industry: '时尚服饰',
        challenge: '传统独立站在移动端表现不佳，需要快速完成数字化转型，但担心转型过程影响现有业务运营。',
        implementation: '采用闪电式部署方案，通过自动化工具在保持原有业务正常运营的同时，完成了向PWA应用的转型。',
        timeline: '7天',
        metrics: [
          {
            label: '部署时间',
            before: '3个月',
            after: '7天',
            improvement: '提升98%'
          },
          {
            label: '页面加载速度',
            before: '8.2秒',
            after: '2.1秒',
            improvement: '提升74%'
          },
          {
            label: '移动端转化率',
            before: '2.3%',
            after: '5.8%',
            improvement: '提升152%'
          }
        ],
        keyPoints: [
          '零代码实现PWA转型',
          '现有数据完整迁移',
          '无缝切换不影响运营',
          '首月ROI达到285%'
        ],
        testimonial: {
          quote: '原本以为数字化转型需要很长时间，没想到这么快就完成了。最让我惊喜的是整个过程完全没有影响到日常运营，而且效果显著超出预期。',
          author: '张经理',
          role: '电商运营总监'
        }
      }
    }
  },
  {
    icon: Smartphone,
    title: '原生APP体验',
    description: '提供完整的移动端购物体验',
    color: 'from-purple-600 to-purple-400',
    highlights: [
      '手势交互优化',
      '转场动画效果',
      '离线购物功能',
      '设备推送'
    ],
    detail: {
      title: '原生APP体验解决方案',
      description: '通过先进的PWA技术和原生功能集成，为用户提供媲美原生APP的流畅购物体验。',
      features: [
        '流畅的手势导航系统',
        '精美的转场动画效果',
        '完整的离线购物功能',
        '智能设备推送通知',
        '快速的页面预加载',
        '沉浸式购物界面'
      ],
      benefits: [
        '提升用户购物体验',
        '增加用户停留时间',
        '提高购物转化率',
        '降低用户跳出率',
        '增强品牌认知度',
        '提升用户忠诚度'
      ],
      caseStudy: {
        company: '某美妆品牌',
        industry: '美妆护肤',
        challenge: '传统移动端网站体验差，用户抱怨操作不便，导致购物车放弃率高，转化率低。',
        implementation: '实施原生APP体验解决方案，优化手势交互，添加流畅动画，实现离线购物功能。',
        timeline: '2周',
        metrics: [
          {
            label: '购物车完成率',
            before: '23%',
            after: '68%',
            improvement: '提升196%'
          },
          {
            label: '用户停留时间',
            before: '2.5分钟',
            after: '8.6分钟',
            improvement: '提升244%'
          },
          {
            label: '跳出率',
            before: '65%',
            after: '28%',
            improvement: '降低57%'
          }
        ],
        keyPoints: [
          '用户体验显著提升',
          '购物流程更加流畅',
          '客户满意度提高',
          '品牌形象改善'
        ],
        testimonial: {
          quote: '升级后的购物体验太棒了！用户反馈非常正面，购物车完成率和转化率都创下新高。',
          author: '李总监',
          role: '产品负责人'
        }
      }
    }
  },
  {
    icon: ShoppingBag,
    title: '智能营销系统',
    description: '多维度精准营销推送',
    color: 'from-pink-600 to-pink-400',
    highlights: [
      '个性化推荐',
      '自动触发营销',
      'A/B测试系统',
      '多渠道触达'
    ],
    detail: {
      title: '智能营销系统解决方案',
      description: '基于AI技术的智能营销系统，实现个性化推荐、自动化营销和精准用户触达。',
      features: [
        'AI驱动的个性化推荐',
        '智能营销自动触发',
        '多变量A/B测试系统',
        '全渠道营销协同',
        '实时数据分析',
        '智能预测引擎'
      ],
      benefits: [
        '提高营销效率',
        '降低获客成本',
        '提升用户转化率',
        '增加客单价',
        '提高营销ROI',
        '优化库存周转'
      ],
      caseStudy: {
        company: '某数码配件品牌',
        industry: '消费电子',
        challenge: '传统营销方式效果差，获客成本高，用户转化率低，无法实现精准营销。',
        implementation: '部署智能营销系统，实现个性化推荐和自动化营销，建立数据驱动的营销决策体系。',
        timeline: '1个月',
        metrics: [
          {
            label: '营销ROI',
            before: '1.8',
            after: '4.2',
            improvement: '提升133%'
          },
          {
            label: '获客成本',
            before: '￥128',
            after: '￥45',
            improvement: '降低65%'
          },
          {
            label: '用户转化率',
            before: '2.8%',
            after: '6.5%',
            improvement: '提升132%'
          }
        ],
        keyPoints: [
          '营销效率大幅提升',
          '获客成本显著降低',
          '用户转化率倍增',
          '营销ROI创新高'
        ],
        testimonial: {
          quote: '智能营销系统帮我们实现了真正的精准营销，不仅降低了成本，还提高了效率，效果超出预期。',
          author: '王经理',
          role: '营销总监'
        }
      }
    }
  },
  {
    icon: Bell,
    title: '会员运营体系',
    description: '打造完整的会员成长体系',
    color: 'from-orange-600 to-orange-400',
    highlights: [
      '等级体系设计',
      '积分商城系统',
      '社群活动策划',
      '数据分析'
    ],
    detail: {
      title: '会员运营体系解决方案',
      description: '构建完整的会员成长体系，通过积分奖励、等级特权和社群运营提升用户忠诚度。',
      features: [
        '多层级会员体系',
        '积分奖励机制',
        '会员特权设计',
        '社群活动系统',
        '自动化运营工具',
        '会员数据分析'
      ],
      benefits: [
        '提升用户忠诚度',
        '增加复购率',
        '提高客户终身价值',
        '降低获客成本',
        '增强品牌粘性',
        '建立私域流量'
      ],
      caseStudy: {
        company: '某生活用品品牌',
        industry: '日用百货',
        challenge: '用户忠诚度低，复购率差，缺乏有效的会员运营体系，无法建立长期客户关系。',
        implementation: '搭建会员成长体系，设计积分奖励机制，开展社群运营活动，实现会员精细化运营。',
        timeline: '3周',
        metrics: [
          {
            label: '会员复购率',
            before: '15%',
            after: '45%',
            improvement: '提升200%'
          },
          {
            label: '会员活跃度',
            before: '22%',
            after: '68%',
            improvement: '提升209%'
          },
          {
            label: '客单价',
            before: '￥168',
            after: '￥386',
            improvement: '提升130%'
          }
        ],
        keyPoints: [
          '会员体系完善',
          '用户活跃度提升',
          '社群氛围活跃',
          '品牌忠诚度增强'
        ],
        testimonial: {
          quote: '会员运营体系帮助我们建立了稳定的客户关系，不仅提高了复购率，还带来了大量口碑传播。',
          author: '陈经理',
          role: '用户运营主管'
        }
      }
    }
  },
  {
    icon: MessageSquareMore,
    title: '智能消息系统',
    description: '打造全渠道智能触达体系',
    color: 'from-green-600 to-green-400',
    highlights: [
      '购物流程推送',
      '个性化消息',
      '定时/触发推送',
      '多渠道协同'
    ],
    flowSteps: [
      { title: '浏览商品', message: '相关品类推荐' },
      { title: '加入购物车', message: '限时优惠提醒' },
      { title: '完成订单', message: '物流状态更新' },
      { title: '收货评价', message: '会员积分奖励' },
      { title: '定期未访问', message: '个性化召回' }
    ],
    detail: {
      title: '智能消息系统解决方案',
      description: '基于用户行为和场景的智能消息系统，实现精准触达和个性化沟通。',
      features: [
        '智能场景识别',
        '个性化消息推送',
        '多渠道消息分发',
        '消息触发自动化',
        '用户行为分析',
        'A/B测试优化'
      ],
      benefits: [
        '提升用户参与度',
        '增加营销转化率',
        '改善用户体验',
        '提高消息到达率',
        '降低营销成本',
        '增强品牌互动'
      ],
      caseStudy: {
        company: '某母婴品牌',
        industry: '母婴用品',
        challenge: '消息触达率低，用户参与度差，缺乏个性化沟通，无法建立有效的用户互动。',
        implementation: '部署智能消息系统，实现场景化推送，建立多渠道触达机制，提供个性化互动体验。',
        timeline: '2周',
        metrics: [
          {
            label: '消息触达率',
            before: '25%',
            after: '85%',
            improvement: '提升240%'
          },
          {
            label: '用户参与度',
            before: '18%',
            after: '56%',
            improvement: '提升211%'
          },
          {
            label: '营销转化率',
            before: '3.2%',
            after: '8.6%',
            improvement: '提升169%'
          }
        ],
        keyPoints: [
          '消息触达效果提升',
          '用户互动增强',
          '营销效率提高',
          '客户满意度提升'
        ],
        testimonial: {
          quote: '智能消息系统让我们的用户沟通变得更加精准和高效，不仅提高了转化率，还增强了用户粘性。',
          author: '刘总监',
          role: '客户服务总监'
        }
      }
    }
  }
];

export default function Features() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionDetail | null>(null);

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            一站式
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              跨境独立站转型
            </span>
            解决方案
          </h2>
          <p className="text-xl text-gray-600">
            基于AI技术的新一代跨境电商解决方案，助力品牌快速实现数字化转型
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl cursor-pointer relative overflow-hidden ${
                  feature.flowSteps ? 'md:col-span-2' : ''
                }`}
                onClick={() => setSelectedSolution(feature.detail)}
              >
                <div className="flex items-start gap-6 relative z-10">
                  <div className={`relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="absolute inset-0 m-auto h-7 w-7 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {feature.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} mr-2`} />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {feature.flowSteps && (
                      <div className="mt-8 pt-8 border-t border-gray-100">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative">
                          <div className="absolute top-5 left-0 right-0 h-0.5 hidden md:block bg-gradient-to-r from-green-600/20 to-green-400/20" />
                          
                          {/* Mobile: Vertical Steps */}
                          <div className="flex flex-col w-full space-y-6 md:hidden">
                            {feature.flowSteps.map((step, i) => (
                              <div key={i} className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} flex-shrink-0 flex items-center justify-center text-white font-semibold`}>
                                  {i + 1}
                                </div>
                                <div>
                                  <div className="font-medium text-gray-800">{step.title}</div>
                                  <div className="text-sm text-gray-600">{step.message}</div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Desktop: Horizontal Steps */}
                          <div className="hidden md:flex w-full items-center justify-between">
                            {feature.flowSteps.map((step, i) => (
                              <div key={i} className="flex flex-col items-center text-center relative z-10 px-2">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white font-semibold mb-2`}>
                                  {i + 1}
                                </div>
                                <div className="text-sm font-medium text-gray-800 mb-1 whitespace-nowrap">{step.title}</div>
                                <div className="text-xs text-gray-600 whitespace-nowrap">{step.message}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 bg-gradient-to-br ${feature.color}`} />
              </div>
            );
          })}
        </div>
      </div>

      <SolutionModal
        isOpen={!!selectedSolution}
        onClose={() => setSelectedSolution(null)}
        data={selectedSolution}
      />
    </section>
  );
}