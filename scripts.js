//function expression to select eelements
const selectElement = (s) => document.querySelector(s);
//open the menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

$(function() {
  $('#WAButton').floatingWhatsApp({
    phone: '1231231231', //WhatsApp Business phone number International format-
    //Get it with Toky at https://toky.co/en/features/whatsapp.
    headerTitle: 'Chat with us on WhatsApp!', //Popup Title
    popupMessage: 'Hello, how can we help you?', //Popup Message
    showPopup: true, //Enables popup display
    buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    //headerColor: 'crimson', //Custom header color
    //backgroundColor: 'crimson', //Custom background button color
    position: "right"    
  });
});