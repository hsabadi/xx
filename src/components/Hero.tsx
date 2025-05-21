
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* Background Elements */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-smm-yellow opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-smm-purple opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">عزز تواجدك الاجتماعي</span> اليوم
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl">
              احصل على تفاعل حقيقي لملفاتك الشخصية على وسائل التواصل الاجتماعي. متابعون وإعجابات ومشاهدات عالية الجودة يتم تسليمها بسرعة وأمان.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gradient-smm hover:opacity-90 transition-all text-white font-medium px-8 py-6">
                <Link to="/services">تصفح الخدمات</Link>
              </Button>
              <Button asChild variant="outline" className="border-smm-purple text-smm-purple hover:bg-smm-purple/5 px-8 py-6">
                <Link to="/services">عرض الأسعار</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex flex-col items-center">
                <span className="font-bold text-3xl text-smm-purple">50K+</span>
                <span className="text-gray-600">طلبات مكتملة</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-3xl text-smm-purple">100%</span>
                <span className="text-gray-600">رضا العملاء</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-3xl text-smm-purple">24/7</span>
                <span className="text-gray-600">دعم فني</span>
              </div>
            </div>
          </div>
          
          {/* Image/illustration side */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-64 md:h-96 bg-gradient-to-r from-smm-purple to-smm-pink rounded-2xl overflow-hidden shadow-xl animate-float">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center px-6">
                  <h3 className="text-2xl font-bold mb-2">خدمات مميزة لوسائل التواصل الاجتماعي</h3>
                  <p className="mb-4">انستغرام، تيك توك، تليجرام، يوتيوب والمزيد</p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full"></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full"></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
