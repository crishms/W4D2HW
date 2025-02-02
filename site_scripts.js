// Create the section element
const section = document.createElement('section');

// Create the unordered list (ul) element
const ul = document.createElement('ul');
ul.id = 'partners';

// Create the list items (li) and image elements
const partners = [
{ src: 'Images/partner-bustour.png', alt: 'Partner Bus Tour' },
{ src: 'Images/partner-cabinrental.png', alt: 'Partner Cabin Rental' },
{ src: 'Images/partner-campingadv.png', alt: 'Partner Camping Adventure' },
{ src: 'Images/partner-collegetours.png', alt: 'Partner College Tours' },
{ src: 'Images/partner-rentalbike.png', alt: 'Partner Bike Rental' },
{ src: 'Images/partner-tourgroup.png', alt: 'Partner Tour Group' }
];

// Loop through the partners array to create each list item with an image
partners.forEach(partner => {
const li = document.createElement('li');
li.classList.add('partner');

const img = document.createElement('img');
img.src = partner.src;
img.alt = partner.alt;

li.appendChild(img);
ul.appendChild(li);
});

// Append the unordered list to the section
section.appendChild(ul);

// Finally, append the section to the body (or wherever you'd like it to go in your document)
document.body.appendChild(section);