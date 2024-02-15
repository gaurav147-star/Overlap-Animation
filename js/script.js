// script.js

document.addEventListener('DOMContentLoaded', function() {
    fetch('./cards.json')
      .then(response => response.json())
      .then(data => {
        const cardContainer = document.getElementById('card-container');
        data.cards.forEach(card => {
          // Split the title into words
          const words = card.title.split(' ');
          let coloredTitle = '';
  
          // Apply different colors to alternate words
          words.forEach((word, index) => {
            if (index % 2 === 0) {
              coloredTitle += `<span class="even-word">${word}</span> `;
            } else {
              coloredTitle += `<span class="odd-word">${word}</span> `;
            }
          });
  
          cardContainer.innerHTML += `
            <div class="row">
              <div class="image-container">
                <img src="${card.image}" alt="${card.title}" />
                <div class="content1">
                  <h2>${coloredTitle}</h2>
                </div>
                <div class="content">
                  <h2>${card.title}</h2>
                  <p>${card.description}</p>
                </div>
              </div>
            </div>
          `;
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  