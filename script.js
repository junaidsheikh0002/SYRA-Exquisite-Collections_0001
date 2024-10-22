const collections = [{
        id: 1,
        name: "Midnight Bloom Collection",
        description: "Elegant black suits with vibrant embroidery",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/462273262_122177089754151957_6614633728876564826_n-WVJfNevv83RqWxf5jNkfvrNQuYmORd.jpg",
    },
    {
        id: 2,
        name: "Royal Navy Collection",
        description: "Majestic navy blue suits with golden embellishments",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/462181400_122177089838151957_5569875757330981807_n-6Y7Gaiki3yEC3AtujyTPtlcF1Rz7Ih.jpg",
    },
    {
        id: 3,
        name: "Olive Elegance Collection",
        description: "Sophisticated olive green suits with intricate designs",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/462231966_122177089796151957_3587070996062264656_n-4ce7tIAJeeHyJ2uiQuLZbbdn6bDWUK.jpg",
    },
    {
        id: 4,
        name: "Crimson Glory Collection",
        description: "Stunning red suits with luxurious gold embroidery",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/462273990_122177089706151957_4650502059831696250_n-kD8RFlMfkWvEf4v0sDwnxwbZ4w2mV5.jpg",
    },
    {
        id: 5,
        name: "Azure Dreams Collection",
        description: "Enchanting blue suits with colorful embroidery",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/462285693_122177089262151957_6531188420066421576_n-TtX67v3eQ9Dgk3ugAWxIBfYiBkCK8O.jpg",
    }
];

const contacts = [
    { name: "Irfan Khushal", phone: "+923332229912" },
    { name: "Junaid Ul Haque Sheikh", phone: "+923359033554" },
    { name: "Abdul Naeem", phone: "+923462559865" },
    { name: "Abdul Hameed", phone: "+923492592150", altPhone: "+923022157772" }
];

let currentIndex = 0;

const slideContainer = document.getElementById('slideContainer');
const thumbnailContainer = document.getElementById('thumbnailContainer');
const contactContainer = document.getElementById('contactContainer');

// Load initial slide
function loadSlide(index) {
    const collection = collections[index];
    slideContainer.style.backgroundImage = `url(${collection.image})`;
    slideContainer.innerHTML = `
        <div class="slide-info">
            <h2>${collection.name}</h2>
            <p>${collection.description}</p>
        </div>`;
}

// Populate thumbnails
collections.forEach((collection, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';
    thumbnail.style.backgroundImage = `url(${collection.image})`;
    thumbnail.onclick = () => {
        currentIndex = index;
        loadSlide(currentIndex);
    };
    thumbnailContainer.appendChild(thumbnail);
});

// Populate contacts
contacts.forEach(contact => {
            const contactCard = document.createElement('div');
            contactCard.className = 'contact-card';
            contactCard.innerHTML = `
        <h3>${contact.name}</h3>
        <a href="tel:${contact.phone}">${contact.phone}</a>
        ${contact.altPhone ? `<br><a href="tel:${contact.altPhone}">${contact.altPhone}</a>` : ''}
    `;
    contactContainer.appendChild(contactCard);
});

// Navigation buttons
document.getElementById('nextBtn').onclick = () => {
    currentIndex = (currentIndex + 1) % collections.length;
    loadSlide(currentIndex);
};

document.getElementById('prevBtn').onclick = () => {
    currentIndex = (currentIndex - 1 + collections.length) % collections.length;
    loadSlide(currentIndex);
};

// Load the first slide initially
loadSlide(currentIndex);