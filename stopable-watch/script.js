
    let inputs = document.querySelectorAll("button");

    let time = document.getElementById("stop-watch-time-s");
    let ms = document.getElementById("stop-watch-time-ms");

    let time_index = 00; //local variables
    let timeseconds = 00;



    var Interval;
    function startTime() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    function stopTime() {
        clearInterval(this.Interval);
    }

    function startTimer() { //! START TİMER METODU BAŞLIYOR 
        time_index++; //* fonksiyon her tetiklendiğinde bir artan değişken
        if (time_index <= 9) { //? index küçükmü 9 dan yada eşitmi 9 a
            ms.innerHTML = "0" + time_index //? true ise 
        }
        if (time_index > 9) {
            ms.innerHTML = time_index
        }
        if (time_index > 99) { //! 99 DAN BÜYÜK OLUNCA 1. H1 OBJE STRİNGİ RETURN EDİYOR
            timeseconds++; //* Saniyeyi bir arttır yani hatalı h1 e gidicek olan değeri
            time.innerHTML = "0" + timeseconds
            time_index = 0
            ms.innerHTML = "0" + 0;
        }
        if (timeseconds > 9) {
            time.innerHTML = timeseconds
        }
    }
    function resetTimer() {
        timeseconds = 0;
        time_index = 0;
        clearInterval(Interval);
        time.innerHTML = timeseconds
        ms.innerHTML = time_index
    }
