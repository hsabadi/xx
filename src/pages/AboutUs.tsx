import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero-like Section for About Us */}
        <section className="py-16 bg-gray-100 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">عن متجرنا المميز</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              اكتشف قصتنا، مهمتنا، والأشخاص الشغوفين وراء نجاحنا.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">قصتنا</h2>
                <p className="text-gray-600 mb-4">
                  تأسس متجرنا المميز في [السنة] بهدف بسيط: توفير [منتجات/خدمات] عالية الجودة لمجتمعنا. ما بدأ كمشروع صغير نما ليصبح اسمًا موثوقًا به، معروفًا بالتزامنا بالتميز ورضا العملاء.
                </p>
                <p className="text-gray-600">
                  على مر السنين، قمنا بتوسيع عروضنا وحققنا إنجازات جديدة، لكن قيمنا الأساسية لا تزال كما هي. نؤمن ببناء علاقات دائمة مع عملائنا وإحداث تأثير إيجابي.
                </p>
              </div>
              <div className="md:w-1/2">
                {/* Placeholder for an image or illustration */}
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-500">
                  صورة توضيحية
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">مهمتنا</h2>
                <p className="text-gray-600 mb-4">
                  مهمتنا هي [بيان مهمتك]. نسعى جاهدين لـ [الجوانب الرئيسية لمهمتك، مثل: تقديم قيمة استثنائية، تعزيز الابتكار، دعم المجتمعات المحلية].
                </p>
                <p className="text-gray-600">
                  نحن ملتزمون بـ [جانب رئيسي آخر من مهمتك]. كل قرار نتخذه يسترشد بالتزامنا بـ [القيمة الأساسية المتعلقة بالمهمة].
                </p>
              </div>
              <div className="md:w-1/2">
                 {/* Placeholder for an image or illustration */}
                 <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-500">
                  صورة توضيحية
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section (Optional) */}
        {/*
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">قابل الفريق</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* مثال لبطاقة عضو الفريق (يمكن استخدام مكون Card) }
              <div className="flex flex-col items-center">
                <img src="[رابط صورة عضو الفريق]" alt="[اسم عضو الفريق]" className="w-32 h-32 rounded-full object-cover mb-4"/>
                <h3 className="text-xl font-semibold">[اسم عضو الفريق]</h3>
                <p className="text-gray-600">[دور عضو الفريق]</p>
              </div>
              {/* كرر لأعضاء الفريق الآخرين }
            </div>
          </div>
        </section>
        */}

      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
