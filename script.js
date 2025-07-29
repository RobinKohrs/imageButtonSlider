document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.image-button');
    const image = document.getElementById('displayed-image');

    const imageMap = {
        'neolithikum': 'Neolithikum.webp',
        'roemische': 'Römische Kaiserzeit.webp',
        'moderner': 'Moderner Küstenverlauf.webp'
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const imageKey = button.id;
            image.src = imageMap[imageKey];
        });
    });
}); 