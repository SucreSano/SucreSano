// app.js

// Función para manejar la obtención de la ubicación
function getLocation() {
    const status = document.getElementById('location-status');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                status.textContent = `Ubicación obtenida: (${lat}, ${lon})`;
                // Redirigir al menú después de obtener la ubicación
                setTimeout(() => {
                    window.location.href = 'menu.html';
                }, 1000);
            },
            (error) => {
                status.textContent = 'No se pudo obtener la ubicación.';
            }
        );
    } else {
        status.textContent = 'La geolocalización no es soportada por este navegador.';
    }
}

// Evento para el botón de ubicación
if (document.getElementById('location-btn')) {
    document.getElementById('location-btn').addEventListener('click', getLocation);
}

// Evento para el botón de pedido
if (document.getElementById('order-btn')) {
    document.getElementById('order-btn').addEventListener('click', function () {
        const selectedDish = document.querySelector('input[name="plato"]:checked');
        if (selectedDish) {
            const dish = selectedDish.value;
            const phoneNumber = "59168638955";  // Número de WhatsApp
            const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Quiero%20pedir%20${encodeURIComponent(dish)}.`;
            window.open(whatsappURL, '_blank');
        } else {
            alert("Por favor, selecciona un plato.");
        }
    });
}
