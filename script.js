// ===============================
// Gramuday Foundation Script
// ===============================

// Scroll Reveal Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});


// Animated Impact Counter
const counters = document.querySelectorAll(".counter");

let started = false;

function runCounters() {
  if (started) return;
  started = true;

  counters.forEach(counter => {

    const target = Number(counter.dataset.target);
    let count = 0;

    const updateCounter = () => {

      const increment = Math.max(1, Math.ceil(target / 40));

      count += increment;

      if (count >= target) {
        counter.innerText = target;
      } else {
        counter.innerText = count;
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();

  });
}

const impact = document.querySelector(".impact");

if (impact) {

  const impactObserver = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {
      runCounters();
    }

  }, {
    threshold: 0.4
  });

  impactObserver.observe(impact);

}
// Hamburger Menu

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    menuToggle.innerHTML =
        navMenu.classList.contains("active") ? "✖" : "☰";
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            item.classList.add("active");
        }
    });
});
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
const statcounters = document.querySelectorAll(".count");

statcounters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
        const increment = Math.ceil(target / 100);

        if (count < target) {
            count += increment;
            if (count > target) count = target;
            counter.innerText = count;
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    };

    update();
});
const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
const scriptURL = "https://script.google.com/macros/s/AKfycbymUfLa6vwkyFVHzEZ_zf2K6hCOyTDNgua_Y_S3uDGShpEy2efjvbFtqcWyN5_4Qs36mw/exec";

const form = document.getElementById("volunteerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    fullName: document.getElementById("fullName").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    occupation: document.getElementById("occupation").value,
    reason: document.getElementById("reason").value
  };

  const response = await fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  });

  if (response.ok) {
    alert("Thank you! Your application has been submitted.");
    form.reset();
  } else {
    alert("Submission failed.");
  }
});
