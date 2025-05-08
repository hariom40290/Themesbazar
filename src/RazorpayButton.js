import React, { useState } from 'react';

function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    document.body.appendChild(script);
  });
}

function RazorpayButton({ amount, zipPath }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);

    const isLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!isLoaded || !window.Razorpay) {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
      setIsLoading(false);
      return;
    }

    const options = {
      key: "rzp_test_z1rTiDtv9XPBrK",
      amount: amount * 100,
      currency: "INR",
      name: "Code Seller",
      description: "Buy Project Code",
      handler: function () {
        const link = document.createElement('a');
        link.href = zipPath;
        link.download = zipPath.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setIsLoading(false);
        setIsSuccess(true);

        // 5 second baad wapas Buy Now dikhao
        setTimeout(() => setIsSuccess(false), 5000);
      },
      prefill: {
        email: localStorage.getItem("user") || "example@email.com"
      },
      theme: {
        color: "#3399cc"
      },
      modal: {
        ondismiss: function () {
          setIsLoading(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    rzp.on('payment.failed', function () {
      setIsLoading(false);
    });
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      style={{
        padding: '10px 20px',
        backgroundColor: isLoading ? '#aaa' : (isSuccess ? 'green' : '#007bff'),
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100px'
      }}
    >
      {isLoading ? (
        <div
          style={{
            width: '18px',
            height: '18px',
            border: '2px solid #fff',
            borderTop: '2px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}
        />
      ) : isSuccess ? (
        'Success ✅'
      ) : (
        'Buy Now'
      )}

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </button>
  );
}

export default RazorpayButton;
