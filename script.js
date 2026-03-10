// Animación cuando el elemento entra en pantalla

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      // Animar barras
      const bars = entry.target.querySelectorAll(".bar-fill")

      bars.forEach(bar => {

        const width = bar.style.width
        bar.style.width = "0px"

        setTimeout(() => {
          bar.style.transition = "width 1.5s ease"
          bar.style.width = width
        }, 200)

      })

      // Animar porcentaje
      const metric = entry.target.querySelector(".metric")

      if(metric){

        let target = 28
        let count = 0

        const interval = setInterval(() => {

          count++
          metric.textContent = "+" + count + "%"

          if(count >= target){
            clearInterval(interval)
          }

        }, 30)

      }

      observer.unobserve(entry.target)

    }

  })
})


// observar la sección

const section = document.querySelector(".solution-section")

if(section){
  observer.observe(section)
}


// efecto hover suave en tarjetas

const features = document.querySelectorAll(".feature")

features.forEach(feature => {

  feature.addEventListener("mouseenter", () => {

    feature.style.transform = "translateX(6px)"
    feature.style.transition = "all 0.25s ease"

  })

  feature.addEventListener("mouseleave", () => {

    feature.style.transform = "translateX(0)"

  })

})

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    function openMobileMenu() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }

    mobileMenuBtn.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', checkFade);
    window.addEventListener('load', checkFade);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Animate chart bars on load
    window.addEventListener('load', function() {
      const chartBars = document.querySelectorAll('.chart-bar');
      chartBars.forEach((bar, index) => {
        const height = bar.style.height;
        bar.style.height = '0%';
        setTimeout(() => {
          bar.style.height = height;
        }, 100 + (index * 100));
      });
    });