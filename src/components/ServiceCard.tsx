import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Input } from '@/components/ui/input'; // Import Input component
import { Label } from '@/components/ui/label'; // Import Label component

interface ServiceCardProps {
  title: string;
  description: string;
  price?: number; // Make price optional
  features: string[];
  popular?: boolean;
  platform: string;
  icon: React.ReactNode;
  quantity?: number; // Make quantity optional
  id: string;
  minQuantity?: number; // New optional prop
  pricePerUnit?: number; // Changed from pricePerFollower back to pricePerUnit
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  features,
  popular = false,
  platform,
  icon,
  quantity,
  id,
  minQuantity, // Destructure new prop
  pricePerUnit // Destructure new prop
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState(minQuantity || quantity || 0);
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    setSelectedQuantity(minQuantity || quantity || 0);
  }, [minQuantity, quantity]);

  // Add console log for debugging
  console.log('ServiceCard:', {
    id,
    title,
    minQuantity,
    pricePerUnit,
    selectedQuantity,
    calculatedPrice: minQuantity && pricePerUnit
      ? (Math.ceil(selectedQuantity / minQuantity) * pricePerUnit)
      : price,
  });


  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && minQuantity) {
      let newQuantity = value;
      if (newQuantity < minQuantity) {
        newQuantity = minQuantity;
      } else {
        // Round to the nearest multiple of minQuantity
        newQuantity = Math.round(newQuantity / minQuantity) * minQuantity;
        // Ensure it's at least minQuantity after rounding
        if (newQuantity < minQuantity) {
          newQuantity = minQuantity;
        }
      }
      setSelectedQuantity(newQuantity);
    } else if (minQuantity) {
       setSelectedQuantity(minQuantity);
    } else {
       setSelectedQuantity(0);
    }
  };

  // Updated price calculation logic
  const calculatedPrice = minQuantity && pricePerUnit
    ? (Math.ceil(selectedQuantity / minQuantity) * pricePerUnit)
    : price;

  const handleOrderClick = () => {
    const queryParams = new URLSearchParams();
    queryParams.append('service', id);
    if (minQuantity && pricePerUnit) {
      queryParams.append('minQuantity', minQuantity.toString());
      queryParams.append('pricePerUnit', pricePerUnit.toString());
      queryParams.append('price', calculatedPrice?.toString() || '0');
      queryParams.append('quantity', selectedQuantity.toString());
    } else {
       queryParams.append('price', price?.toString() || '0');
       queryParams.append('quantity', quantity?.toString() || '0');
    }
    navigate(`/payment?${queryParams.toString()}`);
  };


  return (
    <Card className={`w-full transition-all duration-300 hover:shadow-lg ${
      popular ? 'border-2 border-smm-pink relative' : ''
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-smm-pink text-white text-sm py-1 px-3 rounded-full">
          الاختيار الأكثر شيوعًا
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-gradient-smm w-10 h-10 rounded-full flex items-center justify-center text-white">
            {icon}
          </div>
          <span className="text-sm text-gray-500">{platform}</span>
        </div>
        <CardTitle className="text-xl sm:text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          {/* Quantity and Price display commented out as per user request */}
          
          {minQuantity && pricePerUnit ? (
            <div className="space-y-4">
              <div className="space-y-2">
                 <Label htmlFor={`quantity-${id}`}>الكمية ({minQuantity}+)</Label>
                 <Input
                    id={`quantity-${id}`}
                    type="number"
                    value={selectedQuantity}
                    onChange={handleQuantityChange}
                    min={minQuantity}
                    step={minQuantity} // Added step attribute
                 />
              </div>
              <p className="text-3xl font-bold text-smm-purple">
                ${calculatedPrice?.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">
                 السعر لـ {selectedQuantity} {title.toLowerCase()}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-3xl font-bold text-smm-purple">
                ${price?.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">لـ {quantity} {title.toLowerCase()}</p>
            </div>
          )}
          
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${popular ? 'bg-gradient-smm' : 'bg-smm-purple'} hover:opacity-90`}
          onClick={handleOrderClick} // Use onClick to trigger navigation
        >
          اطلب الآن
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
