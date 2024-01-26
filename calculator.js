function calculateRate() {
  // Get values from the form elements:
  var materialType = document.getElementById('materialType').value;
  var materialWeight = parseFloat(document.getElementById('materialWeight').value);

  // Validate input
  if (isNaN(materialWeight)) {
    alert("Please enter a valid number for material weight.");
    return; // Prevent further execution if input is invalid
  }

  // Define rates for different material types:
  var rates = {
    'PAPER': 15,
    'STEEL': 45,
    'COPPER': 720,
    'ALUMINIUM': 200,
    'PLASTIC': 40,
  };

  // Calculate rate if material type is valid:
  if (materialType in rates) {
    var rate = rates[materialType];
    var totalRate = rate * materialWeight;
    document.getElementById('result').innerHTML = 'Rate: ₹ ' + totalRate.toFixed(2);
  } else {
    document.getElementById('result').innerHTML = 'Invalid material type';
  }
}

// Attach the function to a button or trigger:
document.getElementById('calculateButton').addEventListener('click', calculateRate);
