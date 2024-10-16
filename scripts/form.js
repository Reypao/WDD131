// Product array
const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
  ];
  
  // Populate product dropdown
  const productNameSelect = document.getElementById('productName');
  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productNameSelect.appendChild(option);
  });
  
  // Review Counter for the confirmation page
  window.onload = function() {
      if (window.location.pathname.includes('review.html')) {
          let reviewCount = localStorage.getItem('reviewCount') || 0;
          reviewCount++;
          localStorage.setItem('reviewCount', reviewCount);
          document.body.innerHTML = `<h1>Thank you for your review!</h1><p>You have submitted ${reviewCount} reviews.</p>`;
      }
  };
  