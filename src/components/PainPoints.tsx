import React, { useState } from 'react';
import { ShoppingCart, DollarSign, Users, BarChart2 } from 'lucide-react';
import PainPointModal from './PainPointModal';

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

const painPointsData = [
  {
    icon: ShoppingCart,
    title: '移动端购物体验差',
    description: '传统独立站移动端适配不足，加载速度慢，购物流程复杂',
    impact: [
      '移动端跳出率达67.8%',
      '购物车转化率仅2.3%'
    ],
    color: 'from-blue-600 to-blue-400',
    detail: {
      title: '移动端购物体验问题分析',
      description: '随着移动购物的普及，传统独立站在移动端的表现越来越难以满足用户需求，导致大量潜在订单流失。',
      statistics: [
        {
          label: '移动端跳出率',
          value: '67.8%',
          change: '同比上升 12.3%',
          trend: 'up'
        },
        {
          label: '页面加载时间',
          value: '8.2s',
          change: '高于行业标准 5.2s',
          trend: 'up'
        },
        {
          label: '购物车转化率',
          value: '2.3%',
          change: '低于行业平均 5.7%',
          trend: 'down'
        }
      ],
      challenges: [
        '移动端页面加载速度慢，影响用户体验',
        '购物流程步骤繁琐，表单填写不便',
        '移动端界面适配不足，操作体验差',
        '缺乏离线访问能力，网络波动影响大'
      ],
      impacts: [
        '高跳出率导致广告投放效果差',
        '低转化率造成获客成本升高',
        '用户体验差影响品牌形象',
        '流失大量潜在客户'
      ],
      solutions: [
        '采用PWA技术，提供接近原生APP的体验',
        '优化移动端界面，简化购物流程',
        '实现离线访问能力，提升用户体验',
        '引入智能表单，提升填写效率'
      ]
    }
  },
  {
    icon: DollarSign,
    title: '获客成本持续上涨',
    description: '主流广告平台竞价激烈，投放效果下滑，获客成本攀升',
    impact: [
      'Facebook广告CPA上涨31%',
      'Google广告ROAS降低28%'
    ],
    color: 'from-purple-600 to-purple-400',
    detail: {
      title: '获客成本持续上涨问题分析',
      description: '在主流广告平台竞争加剧的背景下，传统获客方式面临严重挑战，获客成本持续攀升而效果却在下滑。',
      statistics: [
        {
          label: 'Facebook CPA',
          value: '$32.5',
          change: '同比上升 31%',
          trend: 'up'
        },
        {
          label: 'Google ROAS',
          value: '2.1',
          change: '同比下降 28%',
          trend: 'down'
        },
        {
          label: '获客成本',
          value: '￥168',
          change: '同比上升 45%',
          trend: 'up'
        }
      ],
      challenges: [
        '广告平台竞价不断攀升',
        '广告素材同质化严重',
        '用户获取渠道单一',
        '缺乏精准用户画像'
      ],
      impacts: [
        '营销成本持续上升',
        '广告投放ROI下降',
        '获客成本居高不下',
        '盈利能力受到挤压'
      ],
      solutions: [
        '构建多渠道获客体系',
        '优化广告投放策略',
        '建立用户画像系统',
        '发展私域流量池'
      ]
    }
  },
  {
    icon: Users,
    title: '用户忠诚度不足',
    description: '缺乏完整的会员运营体系，无法建立品牌粘性和长期信任',
    impact: [
      '首次购买用户占比78%',
      '30天复购率仅15.6%'
    ],
    color: 'from-pink-600 to-pink-400',
    detail: {
      title: '用户忠诚度不足问题分析',
      description: '由于缺乏系统的会员运营体系和有效的用户激励机制，品牌难以建立起用户粘性，导致获客成本无法有效转化为长期价值。',
      statistics: [
        {
          label: '首购用户占比',
          value: '78%',
          change: '复购率仅 22%',
          trend: 'up'
        },
        {
          label: '30天复购率',
          value: '15.6%',
          change: '低于行业均值 25%',
          trend: 'down'
        },
        {
          label: '会员活跃度',
          value: '23%',
          change: '同比下降 8%',
          trend: 'down'
        }
      ],
      challenges: [
        '缺乏系统的会员体系',
        '用户激励机制不完善',
        '个性化营销能力不足',
        '会员权益设计不够吸引'
      ],
      impacts: [
        '用户终身价值低',
        '获客成本难以收回',
        '品牌忠诚度不足',
        '市场竞争力下降'
      ],
      solutions: [
        '建立多层级会员体系',
        '设计个性化权益',
        '打造社群运营体系',
        '实施精准营销策略'
      ]
    }
  },
  {
    icon: BarChart2,
    title: '营销决策缺乏数据',
    description: '数据分析能力不足，无法进行精准用户画像和个性化营销',
    impact: [
      '营销活动转化率4.2%',
      '用户生命周期价值偏低'
    ],
    color: 'from-orange-600 to-orange-400',
    detail: {
      title: '营销决策数据缺失问题分析',
      description: '在数字化时代，缺乏有效的数据分析能力和工具，导致营销决策缺乏科学依据，无法实现精准营销和个性化推荐。',
      statistics: [
        {
          label: '营销活动转化率',
          value: '4.2%',
          change: '低于行业标准 6.8%',
          trend: 'down'
        },
        {
          label: '用户画像准确率',
          value: '46%',
          change: '低于行业均值 35%',
          trend: 'down'
        },
        {
          label: '营销ROI',
          value: '1.8',
          change: '同比下降 15%',
          trend: 'down'
        }
      ],
      challenges: [
        '数据收集不全面',
        '分析工具不专业',
        '缺乏数据分析人才',
        '数据应用能力不足'
      ],
      impacts: [
        '营销效果难以评估',
        '资源配置不合理',
        '营销策略缺乏针对性',
        '决策风险增加'
      ],
      solutions: [
        '建立数据分析体系',
        '引入AI分析工具',
        '实现精准用户画像',
        '开展数据驱动营销'
      ]
    }
  }
];

export default function PainPoints() {
  const [selectedPainPoint, setSelectedPainPoint] = useState<PainPointDetail | null>(null);

  return (
    <section id="pain-points" className="relative -mt-20 pt-32 pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/80 to-gray-50" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            您的独立站是否面临这些
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              增长瓶颈
            </span>
            ？
          </h2>
          <p className="text-xl text-gray-600">
            基于对1000+跨境独立站数据分析，我们发现跨境独立站以下问题最为突出
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {painPointsData.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedPainPoint(point.detail)}
              >
                <div className="flex items-start gap-6 relative z-10">
                  <div className={`relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${point.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className="absolute inset-0 m-auto h-7 w-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
                      {point.description}
                    </p>
                    
                    <div className="space-y-3">
                      {point.impact.map((stat, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${point.color} mr-2 group-hover:scale-125 transition-transform duration-300`} />
                          <span className="text-gray-700 group-hover:text-gray-800 transition-colors">
                            {stat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 bg-gradient-to-br ${point.color}`} />
              </div>
            );
          })}
        </div>
      </div>

      <PainPointModal
        isOpen={!!selectedPainPoint}
        onClose={() => setSelectedPainPoint(null)}
        data={selectedPainPoint}
      />
    </section>
  );
}