 async function fetchData(searchQuery) {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const animeInfoContainer = document.getElementById('anime-info');
        animeInfoContainer.innerHTML = ''; // Clear previous results

        // Loop through the anime entries
        data.data.forEach(anime => {
          const animeCard = document.createElement('div');
          animeCard.classList.add('anime-card');
          animeCard.innerHTML = `
            <div class="anime-image">
              <a href="${anime.url}" target="_blank">
                <img src="${anime.images.jpg.image_url}" alt="Anime Image">
                <div class="anime-url">${anime.titles[0].title}</div>
              </a>
            </div>
            
          `;
          animeInfoContainer.appendChild(animeCard);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Function to search for anime
    function searchAnime() {
      const searchInput = document.getElementById('anime-search');
      const searchQuery = searchInput.value.trim();

      if (searchQuery) {
        fetchData(searchQuery);
      } else {
        alert('Please enter an anime name to search.');
      }
    }

    // Initial data load (you can replace this with a default search if needed)
    // fetchData('naruto');