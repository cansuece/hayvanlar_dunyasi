// ==================== ANIMAL FACTS DATABASE ====================

const animalFacts = {
    all: [
        "Flamingolar pembe renk değildir, doğduklarında beyazdırlar. Yedikleri yosunlar ve kabuklu deniz canlıları sayesinde pembeye dönerler! 🦩",
        "Bir arının kanatları saniyede 200 kez çırpar! Bu nedenle 'vızıltı' sesini duyarız.",
        "Yunuslar birbirlerine özel isimlerle seslenirler. Her yunusun kendine özgü bir 'ıslık dili' vardır!",
        "Kediler günde 16 saat uyuyabilirler. Ömürlerinin %70'ini uyuyarak geçirirler!",
        "Köpeklerin burnu parmak izi gibidir - her biri benzersizdir!",
        "Tavşanların gözleri neredeyse 360 derece görüş açısına sahiptir!",
        "Penguen erkekleri, yumurtayı 2 ay boyunca bacaklarının arasında sıcak tutar ve hiç yemek yemezler!",
        "Filler üzülebilir, sevinebilir ve hatta yas tutabilirler. Ölmüş arkadaşlarını ziyaret ederler.",
        "Aslanlar günde 20 saate kadar uyuyabilirler. Gerçek hayatteki 'kral' tembeldir!",
        "Zürafa'nın dili 50 cm uzunluğundadır ve mavimsi-siyah renktedir!",
        "Ahtapotların 3 kalbi ve mavi kanı vardır!",
        "Koala'lar günde 22 saate kadar uyuyabilirler. Ökaliptüs yaprakları enerji vermez!",
        "Karıncayiyenler günde 30.000 karınca yiyebilirler!",
        "Timsahlar 100 yaşına kadar yaşayabilir ve ömürleri boyunca büyümeye devam ederler!"
    ],
    evcil: [
        "Kedilerin miyavlaması yalnızca insanlarla iletişim kurmak içindir. Birbirleriyle hiç miyavlamazlar!",
        "Köpekler insanların duygusal durumunu koklayarak anlayabilirler. Korku ve stres kokusunu alırlar!",
        "Tavşanlar mutlu olduklarında havaya zıplar ve dönerler. Buna 'binky' denir!",
        "Hamsterlar bir gecede 9 kilometre koşabilirler! Küçük ama çok enerjiktirler.",
        "Muhabbet kuşları 100'den fazla kelime öğrenebilirler ve şarkı söyleyebilirler!",
        "Akvaryum balıkları sahibini tanıyabilir ve yemek zamanlarını hatırlayabilirler!",
        "Köpekler rüya görür ve uyurken havlamak, koşmak gibi hareketler yaparlar!",
        "Kediler insanlardan daha iyi duyarlar - 64 kHz'e kadar sesleri algılayabilirler!",
        "Tavşanların dişleri ömür boyu büyür, bu yüzden sürekli kemirmeleri gerekir!",
        "Hamsterlar yanaklarında taşıyabildikleri kadar yiyecek depolayabilirler!",
        "Köpeklerin ter bezleri sadece pati aralarında bulunur!",
        "Kediler insanlara göre 5 kat daha iyi karanlıkta görürler!",
        "Muhabbet kuşlarının her birinin kafasındaki tüy deseni benzersizdir - tıpkı parmak izi gibi!",
        "Tavşanlar geri geri koşabilirler ama kusamazlar!"
    ],
    yabani: [
        "Guepard 3 saniyede 0'dan 100 km/s hıza ulaşabilir! Dünyanın en hızlı kara hayvanıdır.",
        "Koala'lar günde 22 saate kadar uyuyabilirler. Ökaliptüs yaprakları enerji vermez!",
        "Ahtapotların 3 kalbi ve mavi kanı vardır! İki kalp solungaçlar için çalışır.",
        "Aslanların kükremeleri 8 kilometre uzaktan duyulabilir!",
        "Fil yavrular doğduklarında 100 kg ağırlığındadır ve hemen yürüyebilirler!",
        "Timsahlar 100 yaşına kadar yaşayabilir ve ömürleri boyunca büyümeye devam ederler!",
        "Kutup ayıları aslında siyah deriye sahiptir. Beyaz görünen tüyleri içi boş ve şeffaftır!",
        "Goril DNA'sı %98 oranında insanlarla aynıdır!",
        "Karıncayiyenler günde 30.000 karınca yiyebilirler!",
        "Papağanlar 50-100 yıl yaşayabilirler, bazı türler sahibinden daha uzun yaşar!",
        "Zürafa'nın boynunda 7 omur vardır - insanlarla aynı sayıda!",
        "Kangurular geri geri yürüyemezler!",
        "Yunuslar uyurken beynlerinin sadece yarısı uyur, diğer yarısı uyanık kalır!",
        "Filler su altında şnorkel gibi hortumlarını kullanarak nefes alabilirler!"
    ],
    tehlike: [
        "Dünyada her gün yaklaşık 150 tür yok oluyor. Bu doğal yok oluş hızının 1000 katıdır!",
        "Gergedanlar için boynuzları yok oluşlarının nedenidir. Boynuzlar saç ve tırnak gibi keratinden yapılıdır!",
        "Dev Panda'lar günde 12-16 saat yemek yer! Ama beslenmeleri zordur çünkü bambu az besin verir.",
        "Kaplan popülasyonu son 100 yılda %97 azaldı. Sadece 4000 kadar vahşi kaplan kaldı!",
        "Deniz kaplumbağaları 100 yaşına kadar yaşayabilir ama plastik kirliliği onları öldürüyor.",
        "Mavi balinalar dünyanın en büyük hayvanlarıdır ama neredeyse yok oluyorlardı. Koruma sayesinde sayıları artıyor!",
        "Orangutanlar sadece Endonezya ve Malezya'da yaşar. Ormanların %80'i kaybedildi!",
        "Kar leoparları o kadar nadir ki, 'dağların hayaleti' olarak bilinirler!",
        "Gorilla bebekleri 8-9 ay anne karnında kalır ve tıpkı insan bebekleri gibi gelişir!",
        "Afrika filleri kulakları dünya haritasına benzer!",
        "Sadece 80 kadar Javan gergedanı kaldı - dünyanın en nadir memelilerinden biri!",
        "Vaquita (körfez domuzbalığı) sadece 10 birey kaldı. Dünyanın en nadir deniz memelisi!",
        "Hawksbill deniz kaplumbağaları son 100 yılda %90 azaldı!",
        "Sumatran orangutanları 7000'den az kaldı ve her yıl habitatları küçülüyor!"
    ],
    koruma: [
        "Türkiye'de 5199 sayılı Hayvanları Koruma Kanunu 2004 yılında yürürlüğe girdi!",
        "Hayvanlara işkence etmek Türkiye'de suçtur ve hapis cezası vardır!",
        "WWF 1961'den beri 100'den fazla ülkede çalışıyor!",
        "PETA dünyânın en büyük hayvan hakları örgütüdür!",
        "Sokak hayvanları için 'Kısırlaştır-Aşıla-Bırak' uygulaması yapılıyor!",
        "Kozmetik ürünler için hayvan deneyi artık yasaktır!",
        "Evcil hayvanları terk etmek yasadışıdır ve ağır cezası vardır!",
        "Köpeklerin kayıt ve çiplenmesi zorunludur!",
        "Nesli tehlikede olan türler özel koruma altındadır!",
        "Sea Shepherd 1977'den beri deniz ekosistemini koruyor!",
        "Born Free Foundation vahşi hayvanların doğal ortamlarında korunmasını savunur!",
        "FOUR PAWS Türkiye'de de aktif hayvan kurtarma projeleri yürütüyor!",
        "Hayvan hakları konusunda farkındalık her geçen gün artıyor!"
    ]
};

// ==================== DID YOU KNOW FUNCTIONALITY ====================

function initDidYouKnow() {
    const didYouKnowSection = document.querySelector('.did-you-know');
    if (!didYouKnowSection) return;

    const factText = didYouKnowSection.querySelector('.fact-text');
    const newFactBtn = didYouKnowSection.querySelector('.new-fact-btn');
    
    // Determine which facts to use based on page
    let factsToUse = animalFacts.all;
    const currentPath = window.location.pathname.toLowerCase();
    
    if (currentPath.includes('evcil')) {
        factsToUse = animalFacts.evcil;
    } else if (currentPath.includes('yabani')) {
        factsToUse = animalFacts.yabani;
    } else if (currentPath.includes('tehlike')) {
        factsToUse = animalFacts.tehlike;
    } else if (currentPath.includes('koruma')) {
        factsToUse = animalFacts.koruma;
    }

    let currentFactIndex = Math.floor(Math.random() * factsToUse.length);
    factText.textContent = factsToUse[currentFactIndex];

    newFactBtn.addEventListener('click', () => {
        // Get new random fact
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * factsToUse.length);
        } while (newIndex === currentFactIndex && factsToUse.length > 1);
        
        currentFactIndex = newIndex;
        
        // Animate transition
        factText.style.opacity = '0';
        factText.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            factText.textContent = factsToUse[currentFactIndex];
            factText.style.opacity = '1';
            factText.style.transform = 'translateY(0)';
        }, 300);
    });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDidYouKnow);
} else {
    initDidYouKnow();
}
