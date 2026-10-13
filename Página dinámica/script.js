document.addEventListener("DOMContentLoaded", () => { 

    const hamburgerBtn = document.getElementById("hamburger-btn"); 
    const navLinks = document.getElementById("nav-links"); 

    if (hamburgerBtn && navLinks) { 
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("open");
            navLinks.classList.toggle("active"); 
        }); 
        const links = navLinks.querySelectorAll("a"); 
        links.forEach(link => { 
            link.addEventListener("click", () => {
                hamburgerBtn.classList.remove("open"); 
                navLinks.classList.remove("active"); 
            }); 
        }); 
    } 
});

const buscadorInput = document.getElementById("buscador"); 
const tarjetas = document.querySelectorAll("#grid-papas .card");
 
if (buscadorInput && tarjetas.length > 0) { 
    buscadorInput.addEventListener("input", (e) => { 
        const textoBusqueda = e.target.value.toLowerCase().trim(); 
        tarjetas.forEach(tarjeta => { 
            const contenidoTarjeta = tarjeta.textContent.toLowerCase(); 
            if (contenidoTarjeta.includes(textoBusqueda)) { 
                tarjeta.style.display = "block"; 
            } else { 
                tarjeta.style.display = "none"; 
            } 
        }); 
    }); 
}