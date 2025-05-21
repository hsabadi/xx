import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    // Instagram Services
    {
        id: 'insta-followers',
        title: 'رشق انستكرام',
        description: 'متابعون انستغرام عالي الجودة يتفاعلون مع محتواك',
        features: [
            'لا يتطلب كلمة مرور',
            'ثابت بدون نزول'
        ],
        popular: true,
        platform: 'Instagram',
        icon: '📸',
        minQuantity: 300, // Minimum quantity
        pricePerUnit: 1, // Price per 300 followers
        category: 'instagram'
    },
    // Telegram Services
    {
        id: 'telegram-followers',
        title: 'رشق متابعين تيليكرام',
        description: 'احصل على متابعين حقيقيين لقناتك التليجرام',
        features: [
            'متابعون عالي الجودة',
            'نمط نمو طبيعي',
            'ضمان عدم النقص',
            'دعم للقنوات الخاصة'
        ],
        popular: true,
        platform: 'Telegram',
        icon: '✈️',
        minQuantity: 500,
        pricePerUnit: 1, // $1 for every 500 followers
        category: 'telegram'
    },
    // TikTok Services
    {
        id: 'tiktok-followers-1000',
        title: 'متابعين تيك توك',
        description: 'نمو حسابك على تيك توك مع متابعين عالي الجودة',
        features: [
            'صورة ملف شخصي وسيرة ذاتية',
            'متابعون مستقرون',
            'لا يتطلب كلمة مرور',
            'نمو آمن وطبيعي'
        ],
        popular: false,
        platform: 'TikTok',
        icon: '🎵',
        minQuantity: 1000,
        pricePerUnit: 8.99,
        category: 'tiktok'
    },
    {
        id: 'tiktok-likes-2000',
        title: 'إعجابات تيك توك',
        description: 'احصل على المزيد من التفاعل مع إعجابات تيك توك',
        features: [
            'احتفاظ عالٍ',
            'تسليم سريع',
            'يعمل مع جميع الفيديوهات',
            'يزيد الوصول الخوارزمي'
        ],
        popular: false,
        platform: 'TikTok',
        icon: '❤️',
        minQuantity: 2000,
        pricePerUnit: 5.99,
        category: 'tiktok'
    },
    // YouTube Services
    {
        id: 'youtube-views-5000',
        title: 'مشاهدات يوتيوب',
        description: 'عزز أداء فيديوهاتك مع المزيد من المشاهدات',
        features: [
            'مشاهدات باحتفاظ عالٍ',
            'آمن لـ Ad-sense',
            'استهداف جغرافي',
            'يساعد في التوصيات'
        ],
        popular: true,
        platform: 'YouTube',
        icon: '🎬',
        minQuantity: 5000,
        pricePerUnit: 19.99,
        category: 'youtube'
    },
    {
        id: 'youtube-subscribers-500',
        title: 'مشتركين يوتيوب',
        description: 'نمو قناتك على يوتيوب مع مشتركين عالي الجودة',
        features: [
            'حسابات تبدو حقيقية',
            'تسليم تدريجي',
            'لا يتطلب كلمة مرور',
            'مشتركون مفعلون للإشعارات'
        ],
        popular: false,
        platform: 'YouTube',
        icon: '👥',
        minQuantity: 500,
        pricePerUnit: 29.99,
        category: 'youtube'
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen payment-page-font">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">خدماتنا</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تصفح مجموعتنا من خدمات وسائل التواصل الاجتماعي عالية الجودة لتعزيز تواجدك وتفاعلك عبر الإنترنت.
            </p>
          </div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <div className="flex justify-center">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">جميع الخدمات</TabsTrigger>
                <TabsTrigger value="instagram">انستغرام</TabsTrigger>
                <TabsTrigger value="telegram">تليجرام</TabsTrigger>
                <TabsTrigger value="tiktok">تيك توك</TabsTrigger>
                <TabsTrigger value="youtube">يوتيوب</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <ServiceCard 
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    popular={service.popular}
                    platform={service.platform}
                    icon={service.icon}
                    // Pass all relevant pricing and quantity props
                    minQuantity={service.minQuantity}
                    pricePerUnit={service.pricePerUnit}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">هل تحتاج إلى باقة مخصصة؟</h2>
              <p className="text-gray-600">
                لا تجد ما تبحث عنه؟ اتصل بنا للحصول على حل مخصص يلبي احتياجاتك.
              </p>
            </div>
            <div className="flex justify-center">
              <a 
                href="mailto:uusheko@gmail.com" 
                className="inline-flex items-center justify-center bg-smm-purple hover:bg-smm-purple/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
