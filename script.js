let currentAudio = null;

function addRecords() {
    let container = document.querySelector('.records-container');

    // Очистка контейнера перед добавлением (чтобы пластинки не дублировались)
    container.innerHTML = "";

    let tracks = [
        'audio/track1.mp3',
        'audio/track2.mp3',
        'audio/track3.mp3',
        'audio/track4.mp3',
        'audio/track6.mp3',
        'audio/track5.mp3'
    ];

    // Добавляем 6 пластинок
    for (let i = 0; i <= 5; i++) {
        let recordWrapper = document.createElement('div');
        recordWrapper.classList.add('record-wrapper');

        let record = document.createElement('div');
        record.classList.add('record');

        let description = document.createElement('p');
        description.classList.add('record-label');
        description.textContent = `Часть ${i + 1}`;

        let audio = new Audio(tracks[i]);

        record.addEventListener('click', function(){
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        });

        // Подпись
        // Добавляем пластинку в контейнер
        recordWrapper.appendChild(record);
        recordWrapper.appendChild(description);
        container.appendChild(recordWrapper);
    }
}

// Добавляем обработчик на кнопку
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.choose-record');
    button.addEventListener('click', addRecords);
});