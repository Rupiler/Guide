function toggleMap() {
    const imageContainer = document.getElementById('imageContainer');

    if (imageContainer.innerHTML === '') {
        const img = document.createElement('img');
        img.src = 'https://yahontbeauty.ru/images/WhatsApp%20Image%202023-07-05%20at%2014.17.00.jpeg';
        img.style.maxWidth = '100%'; // чтобы не выходила за границы
        imageContainer.appendChild(img);
        }

        else {
            imageContainer.innerHTML = '';
            }
}

AOS.init();