let linkButton  = document.querySelector(".link-button");
let popup = document.querySelector('#popup');
let overlay = document.querySelector('#overlay');

linkButton.addEventListener('click', () => {
    // Display the popup
    console.log("Popup clicked")
    popup.style.display = 'block';
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto'; // Enable clicks on the overlay
});
overlay.addEventListener('click', () => {
    // Hide the popup and overlay
    popup.style.display = 'none';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none'; // Disable clicks on the overlay
});