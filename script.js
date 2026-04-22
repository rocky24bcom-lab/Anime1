document.addEventListener("DOMContentLoaded", () => {
    console.log("Anime World Loaded Successfully!");

    // Smooth Page Transition Effect
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.8s";
    
    window.setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

    // Hover effect for cards (Visual Feedback)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log("Exploring: " + card.querySelector('h3').innerText);
        });
    });
});
    
    const data = animeDatabase[animeName] || animeDatabase["Jujutsu Kaisen"];
    
    document.querySelector('.content h1').innerText = animeName;
    document.querySelector('.poster img').src = data.img;
    document.querySelector('.rating').innerText = `⭐ ${data.rating} / 10 | Trending Now`;
    document.querySelector('.description').innerText = data.desc;
    
    
    const metaDiv = document.querySelector('.meta-info');
    metaDiv.innerHTML = data.meta.map(m => `<span>${m}</span>`).join('');

    
    function addToWatchlist() {
        let list = JSON.parse(localStorage.getItem('myWatchlist')) || [];
        if(!list.some(item => item.title === animeName)) {
            list.push({ title: animeName, img: data.img });
            localStorage.setItem('myWatchlist', JSON.stringify(list));
            alert(animeName + " added to your Watchlist!");
        } else {
            alert("This is already in your Watchlist!");
        }
    }