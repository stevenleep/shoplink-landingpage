import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          返回
        </button>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">服务条款</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 服务协议的确立</h2>
              <p className="text-gray-600 leading-relaxed">
                通过访问和使用Shoplink的服务，您同意受本服务条款的约束。如果您不同意这些条款，请不要使用我们的服务。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 服务内容</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Shoplink提供跨境独立站转型解决方案，包括但不限于：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>独立站到PWA应用的转换服务</li>
                <li>移动端用户体验优化</li>
                <li>会员运营系统搭建</li>
                <li>智能营销工具集成</li>
                <li>技术支持和咨询服务</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 用户责任</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                用户在使用Shoplink服务时应当：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>提供真实、准确、完整的信息</li>
                <li>遵守所有适用的法律法规</li>
                <li>保护账户安全，对账户活动负责</li>
                <li>尊重知识产权和其他合法权益</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 服务费用</h2>
              <p className="text-gray-600 leading-relaxed">
                服务费用将根据您选择的具体服务方案确定。所有费用和支付条款将在服务协议中明确说明。我们保留随时调整服务价格的权利，但会提前通知用户任何价格变动。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 知识产权</h2>
              <p className="text-gray-600 leading-relaxed">
                Shoplink平台及其服务中的所有知识产权均属于我们或我们的许可方所有。用户不得未经授权使用、复制或分发这些内容。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 免责声明</h2>
              <p className="text-gray-600 leading-relaxed">
                我们努力确保服务的可靠性和安全性，但不对服务的中断或数据丢失承担责任。我们建议用户定期备份重要数据。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 条款修改</h2>
              <p className="text-gray-600 leading-relaxed">
                我们保留随时修改这些条款的权利。修改后的条款将在网站上公布，继续使用我们的服务即表示您接受修改后的条款。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 联系我们</h2>
              <p className="text-gray-600 leading-relaxed">
                如果您对这些条款有任何疑问，请通过以下方式联系我们：
              </p>
              <div className="mt-4 text-gray-600">
                <p>公司：成都西咪文化科技有限责任公司</p>
                <p>电话：17002830465</p>
                <p>地址：四川省成都市双流区中和镇新下街125号</p>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              最后更新时间：2024年1月23日
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}