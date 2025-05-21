import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderId(e.target.value);
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setOrderDetails(null);

    if (!orderId) {
      setError('Please enter an Order ID.');
      return;
    }

    setIsLoading(true);

    // Simulate fetching order details (replace with actual API call)
    setTimeout(() => {
      setIsLoading(false);
      // In a real application, you would fetch data from your backend here
      // Based on the orderId, you would get details like status, items, etc.
      
      // Placeholder data for demonstration
      if (orderId === '12345') {
        setOrderDetails({
          id: '12345',
          service: 'رشق انستكرام',
          quantity: 500,
          status: 'قيد المعالجة',
          date: '2023-10-27',
        });
      } else {
        setError('Order not found.');
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">تتبع طلبك</h1>
          
          <Card className="shadow-lg rounded-lg">
            <CardHeader className="border-b border-gray-200 pb-4">
              <CardTitle className="text-2xl font-semibold text-gray-800">أدخل معرف الطلب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <form onSubmit={handleTrackOrder} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="orderId" className="text-gray-700 font-medium">معرف الطلب</Label>
                  <Input
                    id="orderId"
                    type="text"
                    placeholder="أدخل معرف طلبك هنا"
                    value={orderId}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-smm-purple focus:ring-smm-purple"
                  />
                </div>
                
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-smm hover:opacity-90 text-lg py-3"
                  disabled={isLoading}
                >
                  {isLoading ? 'جاري البحث...' : 'تتبع الطلب'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {orderDetails && (
            <Card className="shadow-lg rounded-lg mt-8">
              <CardHeader className="border-b border-gray-200 pb-4">
                <CardTitle className="text-2xl font-semibold text-gray-800">تفاصيل الطلب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex justify-between text-gray-700">
                  <span>معرف الطلب:</span>
                  <span className="font-medium text-gray-800">{orderDetails.id}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>الخدمة:</span>
                  <span className="font-medium text-gray-800">{orderDetails.service}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>الكمية:</span>
                  <span className="font-medium text-gray-800">{orderDetails.quantity}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>الحالة:</span>
                  <span className={`font-medium ${orderDetails.status === 'قيد المعالجة' ? 'text-yellow-600' : 'text-green-600'}`}>{orderDetails.status}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>التاريخ:</span>
                  <span className="font-medium text-gray-800">{orderDetails.date}</span>
                </div>
              </CardContent>
            </Card>
          )}

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderTracking;
