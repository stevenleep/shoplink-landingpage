import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-gray-500">
          <p className="mb-2">© 2024 Shoplink. 保留所有权利</p>
          <div className="flex justify-center space-x-4">
            <Link to="/terms" className="hover:text-blue-600 transition-colors">服务条款</Link>
            <span>·</span>
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">隐私政策</Link>
            <span>·</span>
            <a href="#contact" className="hover:text-blue-600 transition-colors">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  );
}