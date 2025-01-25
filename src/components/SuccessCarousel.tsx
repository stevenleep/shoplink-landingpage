import React from 'react';
import { Building2, Users2, BarChart3 } from 'lucide-react';
import SuccessModal from './SuccessModal';

const cases = [
  {
    icon: Building2,
    title: '某跨境电子品牌',
    description: '从传统独立站到PWA应用的转型升级',
    color: 'from-blue-600 to-blue-400',
    metrics: [
      { label: '移动端转化', value: '+168%' },
      { label: '获客成本', value: '-45%' },
      { label: '用户留存', value: '85%' }
    ],
    results: [
      '移动端转化率从2.3%提升至6.2%',
      '平均获客成本降低45%',
      '30天用户留存率提升至85%',
      '运营效率显著提升'
    ],
    detail: {
      title: '跨境电子品牌转型案例',
      description: '通过快速部署PWA应用，实现移动端体验升级',
      industry: '电子消费品',
      region: '东南亚市场',
      timeline: '7天',
      challenge: '传统独立站在移动端表现不佳，加载速度慢，用户体验差，导致转化率低下。',
      solution: '采用快速部署方案，在一周内完成PWA应用转型，实现性能优化和用户体验提升。',
      metrics: [
        {
          label: '移动端转化率',
          before: '2.3%',
          after: '6.2%',
          improvement: '提升169%'
        },
        {
          label: '页面加载时间',
          before: '8.2秒',
          after: '2.1秒',
          improvement: '提升74%'
        },
        {
          label: '跳出率',
          before: '65%',
          after: '28%',
          improvement: '降低57%'
        }
      ],
      keyAchievements: [
        '一周内完成系统升级',
        '零代码实现PWA转型',
        '无缝迁移现有数据',
        '显著提升用户体验',
        '大幅降低运营成本',
        '提高团队工作效率'
      ],
      timeline_events: [
        {
          date: 'D1',
          title: '需求分析',
          description: '完成现状评估和方案设计'
        },
        {
          date: 'D2-3',
          title: 'PWA转换',
          description: '完成核心功能开发'
        },
        {
          date: 'D4-5',
          title: '性能优化',
          description: '实现性能和体验提升'
        },
        {
          date: 'D6-7',
          title: '全面上线',
          description: '完成部署和团队培训'
        }
      ],
      roi: {
        investment: '￥85,000',
        return: '￥255,000',
        period: '1个月'
      },
      testimonial: {
        quote: '从决策到上线仅用了7天时间，效果远超预期。现在我们的移动端体验和转化率都得到了显著提升。',
        author: '张经理',
        role: '电商运营总监',
        company: '某知名电子品牌'
      }
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  },
  {
    icon: Users2,
    title: '某美妆护肤品牌',
    description: '打造私域流量运营新模式',
    color: 'from-purple-600 to-purple-400',
    metrics: [
      { label: '会员活跃', value: '+225%' },
      { label: '复购率', value: '76%' },
      { label: '客单价', value: '+86%' }
    ],
    results: [
      '月活跃会员数提升225%',
      '90天会员复购率达76%',
      '会员平均客单价提升86%',
      '社群活跃度大幅提升'
    ],
    detail: {
      title: '美妆品牌私域转型案例',
      description: '快速构建会员运营体系，提升用户粘性',
      industry: '美妆护肤',
      region: '全球市场',
      timeline: '14天',
      challenge: '传统运营模式获客成本高，用户粘性差，缺乏有效的会员运营体系。',
      solution: '快速搭建智能会员系统，实现精准营销和个性化推荐。',
      metrics: [
        {
          label: '会员活跃度',
          before: '22%',
          after: '68%',
          improvement: '提升209%'
        },
        {
          label: '复购率',
          before: '25%',
          after: '76%',
          improvement: '提升204%'
        },
        {
          label: '客单价',
          before: '￥168',
          after: '￥312',
          improvement: '提升86%'
        }
      ],
      keyAchievements: [
        '两周内完成系统搭建',
        '实现会员精准画像',
        '建立多层级权益',
        '打造活跃社群',
        '提升品牌忠诚度',
        '降低获客成本'
      ],
      timeline_events: [
        {
          date: 'D1-3',
          title: '需求分析',
          description: '完成会员体系设计'
        },
        {
          date: 'D4-7',
          title: '系统搭建',
          description: '完成核心功能开发'
        },
        {
          date: 'D8-11',
          title: '数据迁移',
          description: '完成用户数据整合'
        },
        {
          date: 'D12-14',
          title: '运营启动',
          description: '开始会员运营'
        }
      ],
      roi: {
        investment: '￥120,000',
        return: '￥480,000',
        period: '2个月'
      },
      testimonial: {
        quote: '两周时间就搭建起了完整的会员体系，现在我们的用户粘性和复购率都创下新高。',
        author: '李总监',
        role: '品牌总监',
        company: '某知名美妆品牌'
      }
    },
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&h=400&fit=crop'
  },
  {
    icon: BarChart3,
    title: '某数码配件品牌',
    description: '全球化营销体系升级改造',
    color: 'from-pink-600 to-pink-400',
    metrics: [
      { label: '运营效率', value: '+195%' },
      { label: '库存周转', value: '+78%' },
      { label: '营销ROI', value: '+156%' }
    ],
    results: [
      '客服效率提升195%',
      '库存周转率提升78%',
      '营销投入回报提升156%',
      '全球化运营成本降低'
    ],
    detail: {
      title: '数码品牌全球化升级案例',
      description: '快速实现全球化营销系统升级',
      industry: '数码配件',
      region: '全球市场',
      timeline: '21天',
      challenge: '全球化运营效率低下，各地区数据孤岛，营销决策缺乏数据支持。',
      solution: '构建统一的全球化营销平台，实现数据智能决策。',
      metrics: [
        {
          label: '运营效率',
          before: '100个/人日',
          after: '295个/人日',
          improvement: '提升195%'
        },
        {
          label: '库存周转',
          before: '45天',
          after: '25天',
          improvement: '提升78%'
        },
        {
          label: '营销ROI',
          before: '1.8',
          after: '4.6',
          improvement: '提升156%'
        }
      ],
      keyAchievements: [
        '三周内完成系统升级',
        '打通全球数据孤岛',
        '实现智能库存调配',
        '提升营销决策效率',
        '降低运营成本',
        '提高市场响应速度'
      ],
      timeline_events: [
        {
          date: 'D1-5',
          title: '需求分析',
          description: '完成全球化需求评估'
        },
        {
          date: 'D6-12',
          title: '系统升级',
          description: '完成核心系统改造'
        },
        {
          date: 'D13-18',
          title: '数据整合',
          description: '实现全球数据打通'
        },
        {
          date: 'D19-21',
          title: '全面上线',
          description: '启动全球化运营'
        }
      ],
      roi: {
        investment: '￥200,000',
        return: '￥680,000',
        period: '3个月'
      },
      testimonial: {
        quote: '三周时间就实现了全球化系统升级，现在我们的运营效率和决策能力都得到了质的提升。',
        author: '王经理',
        role: '全球运营总监',
        company: '某知名数码品牌'
      }
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
  }
];

function SuccessCarousel() {
  const [selectedCase, setSelectedCase] = React.useState(null);

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">他们已经成功转型</h2>
          <p className="text-xl text-gray-600">独立站转型PWA应用的成功案例</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedCase(item.detail)}
              >
                {/* Image Header */}
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className={`text-lg font-bold bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {item.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} mr-2`} />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SuccessModal
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
        data={selectedCase}
      />
    </section>
  );
}

export default SuccessCarousel;