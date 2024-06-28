document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu-link');
    const menuCategories = document.querySelectorAll('.menu-category');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetCategory = this.getAttribute('href'); // Bağlantıyı al

            menuCategories.forEach(category => {
                if ('#' + category.getAttribute('id') === targetCategory) {
                    category.classList.toggle('active'); // Tıklanan kategoriyi göster/gizle
                } else {
                    category.classList.remove('active'); // Diğer kategorileri gizle
                }
            });
        });
    });

    
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.mySlides');
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }


     

     // Başlangıçta sadece ilk kategori gösterilsin
     menuCategories[0].classList.add('active');

     menuLinks.forEach(link => {
         link.addEventListener('click', (e) => {
             e.preventDefault();
             const targetId = link.getAttribute('href').substring(1);
             menuCategories.forEach(category => {
                 category.classList.remove('active');
                 if (category.getAttribute('id') === targetId) {
                     category.classList.add('active');
                 }
             });
             menuLinks.forEach(menuLink => {
                 menuLink.classList.remove('active');
             });
             link.classList.add('active');
         });
     });
});