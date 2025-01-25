import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">隐私政策</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 信息收集</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们收集的信息包括但不限于：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>基本信息：姓名、联系方式、公司信息等</li>
                <li>使用数据：访问记录、使用情况、设备信息等</li>
                <li>业务数据：交易记录、支付信息等</li>
                <li>反馈信息：用户评价、建议等</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 信息使用</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们使用收集的信息用于：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>提供和改进服务</li>
                <li>个性化用户体验</li>
                <li>发送服务通知和更新</li>
                <li>处理支付和交易</li>
                <li>分析服务使用情况</li>
                <li>提供客户支持</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 信息保护</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们采取以下措施保护您的信息：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>使用加密技术保护数据传输</li>
                <li>实施访问控制和认证机制</li>
                <li>定期安全审计和评估</li>
                <li>员工隐私保护培训</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 信息共享</h2>
              <p className="text-gray-600 leading-relaxed">
                我们不会出售、出租或以其他方式与第三方共享您的个人信息，除非：
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>获得您的明确同意</li>
                <li>为提供服务所必需</li>
                <li>法律要求或政府部门要求</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Cookie使用</h2>
              <p className="text-gray-600 leading-relaxed">
                我们使用Cookie和类似技术来改善用户体验、分析服务使用情况并提供个性化服务。您可以通过浏览器设置控制Cookie的使用。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 用户权利</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                您对自己的个人信息拥有以下权利：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>访问和查看个人信息</li>
                <li>更正或更新信息</li>
                <li>删除个人信息</li>
                <li>限制信息处理</li>
                <li>撤回同意</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 儿童隐私</h2>
              <p className="text-gray-600 leading-relaxed">
                我们的服务不面向13岁以下儿童。如果发现误收集了儿童信息，我们将立即删除相关信息。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 政策更新</h2>
              <p className="text-gray-600 leading-relaxed">
                我们可能会不时更新本隐私政策。更新后的政策将在网站上公布，并在重大变更时通知用户。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. 联系我们</h2>
              <p className="text-gray-600 leading-relaxed">
                如果您对我们的隐私政策有任何疑问或建议，请联系：
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