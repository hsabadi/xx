import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    socialLink: '',
    paymentMethod: 'asiacell',
    asiacellNumber: '',
    asiacellSubMethod: 'card',
    asiacellTransferPhoneNumber: '',
    additionalInfo: '',
  });

  const [serviceInfo, setServiceInfo] = useState({
    serviceId: '',
    price: 0,
    quantity: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // استخراج بيانات الخدمة من Query Params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const serviceId = searchParams.get('service') || '';
    const price = parseFloat(searchParams.get('price') || '0');
    const quantity = parseInt(searchParams.get('quantity') || '0', 10);

    if (!serviceId || price === 0) {
      navigate('/services');
      toast({
        title: 'خطأ',
        description: 'يرجى اختيار خدمة أولاً',
        variant: 'destructive',
      });
      return;
    }

    setServiceInfo({ serviceId, price, quantity });

    console.log('Payment Page - Extracted Service Info:', {
      serviceId,
      price,
      quantity,
    });
  }, [location, navigate, toast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // التحقق من الحقول الأساسية
    if (!formData.socialLink) {
      toast({
        title: 'خطأ',
        description: 'يرجى ملء جميع الحقول المطلوبة',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // تحقق إضافي وفق طريقة الدفع
    if (formData.paymentMethod === 'asiacell') {
      if (formData.asiacellSubMethod === 'card' && !formData.asiacellNumber) {
        toast({
          title: 'خطأ',
          description: 'يرجى إدخال رقم كارت Asiacell',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }
      if (
        formData.asiacellSubMethod === 'transfer' &&
        !formData.asiacellTransferPhoneNumber
      ) {
        toast({
          title: 'خطأ',
          description: 'يرجى إدخال رقم هاتفك للتحويل',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }
    }

    // محاكاة استدعاء API
    setTimeout(() => {
      console.log('Order submitted:', { ...formData, ...serviceInfo });
      toast({
        title: 'تم استلام الطلب!',
        description: 'سنقوم بمعالجة طلبك قريباً. تحقق من بريدك الإلكتروني للتأكيد.',
      });

      setTimeout(() => navigate('/'), 2000);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen payment-page-font bg-gray-50">
      {/* خلفية رمادية فاتحة */}
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* زر الرجوع */}
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center text-gray-600 hover:text-smm-purple transition-colors text-sm font-medium"
            >
              &larr; العودة إلى الخدمات
            </Link>
          </div>

          {/* العنوان الرئيسي */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              أكمل طلبك
            </h1>
            <p className="text-gray-600 text-lg">
              املأ التفاصيل الخاصة بك لتقديم طلبك
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* نموذج الطلب */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg rounded-lg">
                <form onSubmit={handleSubmit}>
                  <CardHeader className="border-b border-gray-200 pb-4">
                    <CardTitle className="text-2xl font-semibold text-gray-800">
                      معلوماتك
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      سنستخدم هذه المعلومات لمعالجة طلبك
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 pt-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="socialLink"
                          className="text-gray-700 font-medium"
                        >
                          رابط وسائل التواصل الاجتماعي
                          <span className="text-sm text-gray-500 ml-1 font-normal">
                            (رابط إلى ملفك الشخصي/منشورك)
                          </span>
                        </Label>
                        <Input
                          id="socialLink"
                          name="socialLink"
                          placeholder="https://instagram.com/yourusername"
                          value={formData.socialLink}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-smm-purple focus:ring-smm-purple"
                        />
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-4">
                      <Label className="text-gray-700 font-medium">
                        طريقة الدفع
                      </Label>
                      <RadioGroup
                        value={formData.paymentMethod}
                        onValueChange={handleRadioChange}
                        className="flex flex-col space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="asiacell" id="asiacell" />
                          <Label
                            htmlFor="asiacell"
                            className="cursor-pointer text-gray-600"
                          >
                            رصيد Asiacell للجوال
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {formData.paymentMethod === 'asiacell' && (
                      <div className="space-y-4 mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
                        <Label className="text-gray-700 font-medium">
                          اختر طريقة الدفع عبر Asiacell:
                        </Label>
                        <RadioGroup
                          value={formData.asiacellSubMethod}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              asiacellSubMethod: value,
                            }))
                          }
                          className="flex flex-col space-y-3"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="asiacell-card" />
                            <Label
                              htmlFor="asiacell-card"
                              className="cursor-pointer text-gray-600"
                            >
                              ارسال رقم كارت الرصيد
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="transfer"
                              id="asiacell-transfer"
                            />
                            <Label
                              htmlFor="asiacell-transfer"
                              className="cursor-pointer text-gray-600"
                            >
                              التحويل
                            </Label>
                          </div>
                        </RadioGroup>

                        {formData.asiacellSubMethod === 'card' && (
                          <div className="space-y-2 mt-4">
                            <Label
                              htmlFor="asiacellNumber"
                              className="text-gray-700 font-medium"
                            >
                              رقم كارت الرصيد
                            </Label>
                            <Input
                              id="asiacellNumber"
                              name="asiacellNumber"
                              placeholder="أدخل رقم كارت الرصيد"
                              value={formData.asiacellNumber}
                              onChange={handleChange}
                              required
                              className="border-gray-300 focus:border-smm-purple focus:ring-smm-purple"
                            />
                          </div>
                        )}

                        {formData.asiacellSubMethod === 'transfer' && (
                          <div className="space-y-2 mt-4">
                            <Label
                              htmlFor="asiacellTransferPhoneNumber"
                              className="text-gray-700 font-medium"
                            >
                              رقم هاتفك الشخصي (للتأكيد)
                            </Label>
                            <Input
                              id="asiacellTransferPhoneNumber"
                              name="asiacellTransferPhoneNumber"
                              placeholder="أدخل رقم هاتفك"
                              value={formData.asiacellTransferPhoneNumber}
                              onChange={handleChange}
                              required
                              className="border-gray-300 focus:border-smm-purple focus:ring-smm-purple"
                            />
                            <p className="text-sm text-gray-600 mt-2">
                              يرجى تحويل المبلغ المطلوب إلى هذا الرقم:{' '}
                              <span className="font-bold text-smm-purple">
                                07704061932
                              </span>
                            </p>
                            <p className="text-sm text-gray-500">
                              بعد التحويل، أدخل رقم هاتفك أعلاه للتأكيد وسنقوم
                              بمعالجة طلبك.
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label
                        htmlFor="additionalInfo"
                        className="text-gray-700 font-medium"
                      >
                        معلومات إضافية (اختياري)
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder="أي متطلبات أو أسئلة محددة؟"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-smm-purple focus:ring-smm-purple"
                      />
                    </div>
                  </CardContent>

                  <CardFooter className="pt-6">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-smm hover:opacity-90 text-lg py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'جاري المعالجة...' : 'إكمال الطلب'}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>

            {/* ملخص الطلب */}
            <div>
              <Card className="shadow-lg rounded-lg">
                <CardHeader className="border-b border-gray-200 pb-4">
                  <CardTitle className="text-2xl font-semibold text-gray-800">
                    ملخص الطلب
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-700">
                      <span>معرف الخدمة:</span>
                      <span className="font-medium text-gray-800">
                        {serviceInfo.serviceId}
                      </span>
                    </div>

                    {serviceInfo.quantity > 0 && (
                      <div className="flex justify-between text-gray-700">
                        <span>الكمية:</span>
                        <span className="font-medium text-gray-800">
                          {serviceInfo.quantity}
                        </span>
                      </div>
                    )}

                    <Separator />

                    <div className="flex justify-between text-gray-700">
                      <span>المجموع الفرعي:</span>
                      <span className="font-medium text-gray-800">
                        ${serviceInfo.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>رسوم المعالجة:</span>
                      <span className="font-medium text-gray-800">$0.00</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between font-bold text-gray-800 text-xl">
                      <span>الإجمالي:</span>
                      <span>${serviceInfo.price.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-4 pt-6">
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold mb-2 text-gray-700">
                      ملاحظات الطلب:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>يبدأ التسليم خلال 24 ساعة</li>
                      <li>لا يتطلب كلمة مرور</li>
                      <li>آمن ومضمون 100%</li>
                    </ul>
                  </div>
                </CardFooter>
              </Card>

              <div className="mt-6 p-4 bg-gray-100 rounded-md border border-gray-200">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold block mb-1 text-gray-800">
                    هل تحتاج مساعدة؟
                  </span>
                  إذا كان لديك أي أسئلة أو تحتاج إلى مساعدة، اتصل بفريق الدعم
                  لدينا على{' '}
                  <a
                    href="mailto:uusheko@gmail.com"
                    className="text-smm-purple hover:underline"
                  >
                    uusheko@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
