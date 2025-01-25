import React, { useState } from 'react';
import { Building2, User, Mail, Phone, MessageSquare, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface FormData {
  businessType: 'personal' | 'company';
  name: string;
  companyName: string;
  email: string;
  phone: string;
  description: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    businessType: 'personal',
    name: '',
    companyName: '',
    email: '',
    phone: '',
    description: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          business_type: formData.businessType,
          name: formData.name,
          company_name: formData.businessType === 'company' ? formData.companyName : null,
          email: formData.email,
          phone: formData.phone,
          description: formData.description || null
        }]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: '感谢您的咨询，我们会尽快与您联系！'
      });

      setFormData({
        businessType: 'personal',
        name: '',
        companyName: '',
        email: '',
        phone: '',
        description: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: '提交失败，请稍后重试或直接联系我们。'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const renderInputIcon = (Icon: typeof User, isTextarea: boolean = false) => (
    <div className={`absolute left-4 ${isTextarea ? 'top-4' : 'top-1/2 -translate-y-1/2'} text-gray-500 transition-colors duration-200 group-focus-within:text-blue-600`}>
      <Icon className="w-5 h-5 stroke-[1.5]" />
    </div>
  );

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-70" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-100 p-8 relative">
            {/* Form Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-700 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                免费咨询
              </div>
              <h2 className="text-3xl font-bold mb-4">立即开启独立站转型之旅</h2>
              <p className="text-gray-600">填写以下信息，获取免费Demo演示和顾问咨询</p>
            </div>

            {/* Status Message */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg text-center ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-red-50 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Type Selection */}
              <div className="flex gap-4 p-1 bg-gray-50 rounded-lg">
                {['personal', 'company'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                      formData.businessType === type
                        ? 'bg-white text-blue-600 shadow'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    onClick={() => setFormData({ ...formData, businessType: type as 'personal' | 'company' })}
                  >
                    {type === 'personal' ? '个人卖家' : '企业/公司'}
                  </button>
                ))}
              </div>

              {/* Input Fields */}
              <div className="space-y-4">
                {formData.businessType === 'company' && (
                  <div className="group relative">
                    {renderInputIcon(Building2)}
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('companyName')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="请输入公司名称"
                    />
                  </div>
                )}

                <div className="group relative">
                  {renderInputIcon(User)}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="请输入联系人姓名"
                    required
                  />
                </div>

                <div className="group relative">
                  {renderInputIcon(Mail)}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="请输入邮箱地址"
                    required
                  />
                </div>

                <div className="group relative">
                  {renderInputIcon(Phone)}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="请输入联系电话"
                    required
                  />
                </div>

                <div className="group relative">
                  {renderInputIcon(MessageSquare, true)}
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('description')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 min-h-[120px] resize-y"
                    placeholder="请简单描述您的需求（选填）"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      提交中...
                    </>
                  ) : (
                    <>
                      立即获取Demo
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              <p className="text-center text-sm text-gray-500">
                提交即表示您同意我们的
                <Link to="/terms" className="text-blue-600 hover:underline">服务条款</Link>
                和
                <Link to="/privacy" className="text-blue-600 hover:underline">隐私政策</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}