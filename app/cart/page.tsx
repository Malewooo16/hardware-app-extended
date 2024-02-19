"use client"

import { useState } from 'react';
import Cart from './Cart';
import CartCheckOut from './CartCheckOut';
import Footer from '../main-components/Footer';

interface CartProps {
  next: () => void; // Adjust the type accordingly
  prev: () => void; // If it also needs a 'prev' prop
}
function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Cart next={nextStep} />;
      case 2:
        return <CartCheckOut  prev={prevStep} />;
      
      default:
        return null;
    }
  };

  return (
    <div >
      {renderStep()}
      {/* Add navigation buttons */}
      {currentStep !== 1 && (
        null
      )}
      {currentStep !== 2 && (
        null
      )}

    </div>
  );
}

export default MultiStepForm;

