   const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> observer.observe(el)); 
    
    const nav = document.querySelector('#nav');
    const abrir = document.querySelector('#abrir');
    const cerrar = document.querySelector('#cerrar');

    abrir.addEventListener("click", ()=> {
        nav.classList.add("visible");
    })
   
    cerrar.addEventListener("click", ()=> {
        nav.classList.remove("visible");
    })
    