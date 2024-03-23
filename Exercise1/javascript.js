var presidents = [
    { number: "1", name: "Soekarno", period: "(1945-1967)", image: "soekarno.jpg", profile: "Soekarno adalah Presiden Indonesia pertama yang menjabat dari tahun 1945 hingga 1967. Beliau dikenal sebagai proklamator kemerdekaan Indonesia." },
    { number: "2", name: "Soeharto", period: "(1967-1998)", image: "soeharto.jpg", profile: "Soeharto adalah Presiden Indonesia kedua yang menjabat dari tahun 1967 hingga 1998. Beliau dikenal dengan era Orde Baru." },
    { number: "3", name: "B.J. Habibie", period: "(1998-1999)", image: "habibie.jpg", profile: "B.J. Habibie adalah Presiden Indonesia ketiga yang menjabat hanya selama kurang lebih 1 tahun, dari tahun 1998 hingga 1999. Beliau dikenal sebagai pakar teknologi dan penerus Soeharto." },
    { number: "4", name: "Abdurrahman Wahid", period: "(1999-2001)", image: "gusdur.jpg", profile: "Abdurrahman Wahid, atau yang akrab dipanggil Gus Dur, adalah Presiden Indonesia keempat yang menjabat dari tahun 1999 hingga 2001. Beliau merupakan tokoh Nahdlatul Ulama (NU) dan dikenal karena pendekatannya yang inklusif." },
    { number: "5", name: "Megawati Soekarnoputri", period: "(2001-2004)", image: "megawati.jpg", profile: "Megawati Soekarnoputri adalah Presiden Indonesia kelima yang menjabat dari tahun 2001 hingga 2004. Beliau adalah putri dari Presiden Soekarno." },
    { number: "6", name: "Susilo Bambang Yudhoyono", period: "(2004-2014)", image: "sby.jpg", profile: "Susilo Bambang Yudhoyono atau yang akrab disebut SBY adalah Presiden Indonesia keenam yang menjabat selama dua periode, dari tahun 2004 hingga 2014." },
    { number: "7", name: "Joko Widodo", period: "(2014-sekarang)", image: "jokowi.jpg", profile: "Joko Widodo atau Jokowi adalah Presiden Indonesia ketujuh yang menjabat sejak tahun 2014 hingga sekarang. Beliau adalah mantan walikota Solo dan gubernur DKI Jakarta sebelum menjadi presiden." }
  ];
  
  var container = document.getElementById("presidentsContainer");
  var currentPresidentIndex = 0;
  
  function showPresident(index) {
    container.innerHTML = ""; 
  
    var president = presidents[index];
  
    var card = document.createElement("div");
    card.className = "presidentCard";
  
    var image = document.createElement("img");
    image.src = president.image;
    image.alt = president.name;
  
    var number = document.createElement("div");
    number.className = "presidentNumber";
    number.textContent = "Presiden " + president.number;
  
    var name = document.createElement("p");
    name.textContent = president.name;
  
    var period = document.createElement("p");
    period.className = "presidentPeriod";
    period.textContent = president.period;
  
    var profile = document.createElement("p");
    profile.className = "presidentProfile";
    profile.textContent = president.profile;
  
    card.appendChild(image);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(period);
    card.appendChild(profile);
  
    container.appendChild(card);
  }
  
  function showNextPresident() {
    currentPresidentIndex = (currentPresidentIndex + 1) % presidents.length;
    showPresident(currentPresidentIndex);
  }
  
  function showPreviousPresident() {
    currentPresidentIndex = (currentPresidentIndex - 1 + presidents.length) % presidents.length;
    showPresident(currentPresidentIndex);
  }
  
  document.getElementById("prevButton").addEventListener("click", showPreviousPresident);
  document.getElementById("nextButton").addEventListener("click", showNextPresident);
  
  showPresident(currentPresidentIndex);