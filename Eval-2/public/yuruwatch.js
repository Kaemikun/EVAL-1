const menuToggle = document.getElementById('menuToggle');
      const menu = document.getElementById('menu');
      
      menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      });

      function switchDiv(divId) {
        // Hide all divs
        const divs = document.querySelectorAll('div[id^="div"]');
        divs.forEach(div => {
          div.classList.add('hidden');
        });
  
        // Show the selected div
        document.getElementById(divId).classList.remove('hidden');
      }

      function switchDiv2(divId) {
        // Hide all divs
        const divs = document.querySelectorAll('div[id^="ddiv"]');
        divs.forEach(div => {
          div.classList.add('hidden');
          div.classList.remove('listt')
        });
  
        // Show the selected div
        document.getElementById(divId).classList.remove('hidden');
        document.getElementById(divId).classList.add('listt');
      }


      const wanttowatch = document.getElementById("ddiv1");
      const currentlywatching = document.getElementById("ddiv2");
      const dropped = document.getElementById("ddiv3"); 
      const onhold = document.getElementById("ddiv4");

      function addtolist(imageSrc, link, listElement) {
        const imagelink = document.createElement('a');
        imagelink.href = link;
    
        const img = document.createElement('img'); // Rename the image element to 'img'
        img.src = imageSrc; // Set the image source
        img.style.height = '30vh';
    
        imagelink.appendChild(img);
        listElement.appendChild(imagelink);
    }
    
    const watchbutton = document.getElementById("wtw");
    
    watchbutton.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-product-image'); // Use a different variable name
        const link = this.getAttribute('data-product-link');
    
        const lisstt = document.getElementById('ddiv1'); // Replace with the correct list element ID
    
        addtolist(imageSrc, link, lisstt);
    });
    

    function toggleDropdown() {
      const bookmarkContainer = document.querySelector('.bookmark-container');
      bookmarkContainer.classList.toggle('active');
  }

  
  window.onclick = function(event) {
      if (!event.target.matches('.btn btn-secondary') && !event.target.matches('ion-icon')) {
          const dropdown = document.querySelector('.bookmark-container');
          if (dropdown.classList.contains('active')) {
              dropdown.classList.remove('active');
          }
      }
  }

