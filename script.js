document.addEventListener('DOMContentLoaded', function() {
    const playerButtons = document.querySelectorAll('.player-btn');
    const playerCards = document.querySelectorAll('.player-card');
    
    playerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const playerId = this.getAttribute('data-player');
            
            // Hapus active
            playerButtons.forEach(btn => btn.classList.remove('active'));
            playerCards.forEach(card => card.classList.remove('active'));
            
            // Tambahkan active
            this.classList.add('active');
            document.getElementById(playerId).classList.add('active');
        });
    });
});
