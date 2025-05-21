import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
            Hson Store
            </Link>
            <p className="text-gray-600 mb-4">
              خدمات تسويق مميزة على وسائل التواصل الاجتماعي لمساعدتك على تنمية تواجدك وتفاعلك عبر الإنترنت.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-smm-purple/10 flex items-center justify-center text-smm-purple hover:bg-smm-purple hover:text-white transition-colors">
                <span className="sr-only">فيسبوك</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-smm-purple/10 flex items-center justify-center text-smm-purple hover:bg-smm-purple hover:text-white transition-colors">
                <span className="sr-only">انستغرام</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-smm-purple/10 flex items-center justify-center text-smm-purple hover:bg-smm-purple hover:text-white transition-colors">
                <span className="sr-only">تويتر</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-smm-purple/10 flex items-center justify-center text-smm-purple hover:bg-smm-purple hover:text-white transition-colors">
                <span className="sr-only">تليجرام</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.38.193.768.193c.39 0 .786-.16 1.022-.53.133-.206.2-.494.2-.798.008-.47-.377-1.027-.377-1.027s-3.95-3.604-6.215-5.68c.61-.61 1.223-1.22 1.83-1.83.442-.44.882-.882 1.32-1.325.87-.874 1.152-1.295 1.288-1.53.13-.233.166-.362.166-.362.009-.13.022-.283.006-.466-.04-.33-.2-.617-.48-.817-.28-.203-.67-.248-.67-.248h-3.478c-.392.013-.792.123-1.115.332-.323.2-.584.46-.79.752l-.178.284s-2.05 2.97-3.55 4.84c-1.596 1.987-2.07 1.77-2.07 1.77l-.024-.04s-.114-.066-.19-.215c-.083-.176-.114-.37-.114-.52 0-.36-.004-4.368-.004-4.368s-.146-.414-.493-.604c-.348-.19-.84-.233-.84-.233l-4.75.03s-.368.023-.605.207-.4.555-.264.847c.143.282.453.509.762.781.308.273 7.924 8.575 16.8 12.224 0 0 .883.353 1.427.392.544.04 1.043-.124 1.43-.358.386-.234.58-.494.656-.8.07-.298.07-.703.07-.703.006-.26-.025-.398-.025-.398z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-smm-purple transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-smm-purple transition-colors">
                  الخدمات
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-smm-purple transition-colors">
                  كيف تعمل
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-smm-purple transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-smm-purple transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-smm-purple transition-colors">
                  متابعين انستغرام
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-smm-purple transition-colors">
                  مشتركين تليجرام
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-smm-purple transition-colors">
                  إعجابات انستغرام
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-smm-purple transition-colors">
                  مشاهدات يوتيوب
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-smm-purple transition-colors">
                  متابعين تيك توك
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HSON STORE. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-smm-purple text-sm">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-gray-500 hover:text-smm-purple text-sm">
              شروط الخدمة
            </a>
            <a href="#" className="text-gray-500 hover:text-smm-purple text-sm">
              سياسة الاسترداد
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
