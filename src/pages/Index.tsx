
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const platforms = [
    {
      name: 'Instagram',
      icon: '📸',
      description: 'احصل على متابعين حقيقيين وإعجابات وتعليقات على انستغرام',
    },
    {
      name: 'Telegram',
      icon: '✈️',
      description: 'نمو قناتك على تليجرام مع مشتركين حقيقيين',
    },
    {
      name: 'TikTok',
      icon: '🎵',
      description: 'زيادة مشاهداتك ومتابعيك وتفاعلك على تيك توك',
    },
    {
      name: 'YouTube',
      icon: '🎬',
      description: 'عزز مشاهداتك ومشتركيك ووقت المشاهدة على يوتيوب',
    },
  ];

  const testimonials = [
    {
      name: 'سارة ك.',
      role: 'مؤثرة',
      content: 'ساعدني SocialBoost على زيادة عدد متابعيني على انستغرام بمقدار 10 آلاف في شهر واحد فقط. المتابعون ذوو جودة عالية ومتفاعلون!',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: 'مايكل ت.',
      role: 'منشئ محتوى',
      content: 'كنت متشككًا في البداية، لكن النتائج تتحدث عن نفسها. قناتي على يوتيوب حصلت على دفعة قوية في المشاهدات والمشتركين.',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      name: 'ليلى م.',
      role: 'صاحبة عمل',
      content: 'مشتركو تليجرام الذين حصلت عليهم كانوا بالضبط ما احتاجه عملي. خدمة رائعة وتسليم فوري!',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen payment-page-font">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Platforms Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">المنصات التي ندعمها</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                نقدم خدمات عالية الجودة لوسائل التواصل الاجتماعي عبر جميع المنصات الرئيسية لمساعدتك على تنمية تواجدك عبر الإنترنت.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <span className="text-4xl mb-4">{platform.icon}</span>
                      <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                      <p className="text-gray-600">{platform.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف تعمل</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                عمليتنا بسيطة وسريعة ومصممة لتحقيق النتائج بسرعة.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-smm flex items-center justify-center text-white text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">اختر باقة</h3>
                <p className="text-gray-600">
                  تصفح مجموعتنا من الخدمات واختر الباقة التي تناسب احتياجاتك.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-smm flex items-center justify-center text-white text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">أكمل الدفع</h3>
                <p className="text-gray-600">
                  ادفع بأمان باستخدام طرق الدفع المختلفة لدينا، بما في ذلك رصيد آسيا سيل.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-smm flex items-center justify-center text-white text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">شاهد نموك</h3>
                <p className="text-gray-600">
                  استرخ وشاهد بينما نقدم تفاعلاً عالي الجودة لملفاتك الشخصية على وسائل التواصل الاجتماعي.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-gradient-smm hover:opacity-90 px-8 py-6">
                <Link to="/services">ابدأ الآن</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-smm text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لتعزيز تواجدك الاجتماعي؟</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              انضم إلى آلاف العملاء الراضين الذين نجحوا في تنمية تواجدهم على وسائل التواصل الاجتماعي من خلال خدماتنا المتميزة.
            </p>
            <Button asChild className="bg-white text-smm-purple hover:bg-white/90 px-8 py-6">
              <Link to="/services">عرض جميع الخدمات</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
