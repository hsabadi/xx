import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/"
          className="text-2xl font-bold gradient-text"
        >
Hson Store        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-smm-purple transition-colors">
            الرئيسية
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-smm-purple transition-colors">
            الخدمات
          </Link>
          <Link to="/about-us" className="text-gray-700 hover:text-smm-purple transition-colors">
            من نحن
          </Link>
          <Link to="/order-tracking" className="text-gray-700 hover:text-smm-purple transition-colors"> {/* Added Order Tracking link */}
            تتبع الطلبات
          </Link>
          <Button asChild className="bg-gradient-smm hover:bg-smm-purple transition-all duration-300">
            <Link to="/services">ابدأ الآن</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-smm-purple px-4 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-smm-purple px-4 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              الخدمات
            </Link>
            <Link
              to="/about-us"
              className="text-gray-700 hover:text-smm-purple px-4 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن
            </Link>
            <Link // Added Order Tracking link to mobile menu
              to="/order-tracking"
              className="text-gray-700 hover:text-smm-purple px-4 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              تتبع الطلبات
            </Link>
            <Button asChild className="bg-gradient-smm hover:bg-smm-purple transition-all duration-300 w-full">
              <Link to="/services" onClick={() => setIsMenuOpen(false)}>ابدأ الآن</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
