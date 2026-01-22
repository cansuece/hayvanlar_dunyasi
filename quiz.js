// ==================== QUIZ SYSTEM ====================

const quizData = [
    {
        question: "Hangi hayvanım?",
        hints: [
            "🐾 Ömrümün %70'ini uyuyarak geçiririm",
            "😺 Miyavlarım ama sadece insanlarla konuşurken",
            "🧹 Kendimi temizlemek için günde saatler harcıyorum",
            "🐱 Yüksek yerlerden atladığımda her zaman ayaklarımın üzerine düşerim"
        ],
        options: ["Köpek", "Kedi", "Tavşan", "Hamster"],
        correct: 1,
        emoji: "🐱",
        fact: "Kediler günde 16 saat uyuyabilir ve ömürlerinin yaklaşık %70'ini uyuyarak geçirirler!"
    },
    {
        question: "Hangi hayvanım?",
        hints: [
            "🐕 İnsanın en iyi arkadaşı olarak biliniyorum",
            "👃 Burnum parmak izi gibi benzersizdir",
            "🦴 Kemikleri çok seviyorum",
            "🐶 Sahibimin duygularını koklayarak anlayabilirim"
        ],
        options: ["Kedi", "Köpek", "Muhabbet Kuşu", "Balık"],
        correct: 1,
        emoji: "🐕",
        fact: "Köpeklerin burnu tıpkı parmak izi gibidir - her biri benzersizdir ve kimlik tespitinde kullanılabilir!"
    },
    {
        question: "Hangi hayvanım?",
        hints: [
            "🦁 Hayvanlar aleminin kralıyım",
            "😴 Günde 20 saate kadar uyuyabilirim",
            "📢 Kükreyişim 8 km uzaktan duyulabilir",
            "👑 Erkeklerimizin muhteşem yelesi vardır"
        ],
        options: ["Kaplan", "Aslan", "Leopar", "Guepard"],
        correct: 1,
        emoji: "🦁",
        fact: "Aslan erkekleri günde 20 saat uyur! Avlanma işini genellikle dişiler yapar."
    },
    {
        question: "Hangi hayvanım?",
        hints: [
            "🐼 Siyah-beyaz rengim var",
            "🎋 Bambulara bayılıyorum ve günde 12-16 saat yiyorum",
            "🐻 Aslında ayı ailesindenim",
            "💚 Nesli tükenmekte olan bir türüm"
        ],
        options: ["Koala", "Zebra", "Dev Panda", "Penguen"],
        correct: 2,
        emoji: "🐼",
        fact: "Dev Pandalar günde 12-16 saat bambu yer! Ancak bambu çok az besin değerine sahip olduğu için sürekli yemek zorundalar."
    },
    {
        question: "Hangi hayvanım?",
        hints: [
            "🐇 Kulak larım çok uzundur",
            "💨 Çok hızlı koşabilirim ve sıçrayabilirim",
            "🦷 Dişlerim ömür boyu büyümeye devam eder",
            "🥕 Havuç ve sebze severim ama en çok kuru ot yerim"
        ],
        options: ["Fare", "Tavşan", "Sincap", "Hamster"],
        correct: 1,
        emoji: "🐰",
        fact: "Tavşanların dişleri ömür boyu büyür! Bu yüzden sürekli kemirmeleri ve dişlerini aşındırmaları gerekir."
    },
    {
        question: "Hangi hayvanım?",
        hints: [
            "🐘 Dünyanın en büyük kara hayvanıyım",
            "👂 Kulaklarım koskocaman",
            "💧 Çok fazla su içerim (günde 200 litre!)",
            "🧠 Harika bir hafızaya sahibim ve yas tutabilirim"
        ],
        options: ["Gergedan", "Fil", "Zürafa", "Su aygırı"],
        correct: 1,
        emoji: "🐘",
        fact: "Filler inanılmaz zekilar! Ölmüş aile üyelerini ziyaret eder, üzülür ve yas tutabilirler."
    },
    {
        question: "Hangi hayvanım?",
        hints: [
            "🐬 Denizlerde yaşıyorum ama balık değilim",
            "🗣️ Birbirimizle özel ıslıklarla konuşuruz",
            "😊 Her zaman gülümsüyormuşum gibi görünürüm",
            "🤸 Suyun üstünde akrobasi yapabilirim"
        ],
        options: ["Balina", "Yunus", "Köpekbalığı", "Fok"],
        correct: 1,
        emoji: "🐬",
        fact: "Yunuslar birbirlerine özel 'isimlerle' seslenirler! Her yunusun kendine özgü bir ıslık sesi vardır."
    },
    {
        question: "Hangi hayvanım?",
        hints: [
            "🐯 Çizgili desenime sahibim",
            "🥩 Et yemeyi seviyorum, etçilim",
            "🏃 Güçlü ve büyük bir kedi türüyüm",
            "🌏 Asya ormanlarında yaşıyorum"
        ],
        options: ["Leopar", "Guepard", "Kaplan", "Aslan"],
        correct: 2,
        emoji: "🐯",
        fact: "Her kaplanın çizgi deseni benzersizdir! Tıpkı insan parmak izi gibi, hiçbir iki kaplan aynı desene sahip değildir."
    },
    {
        question: "Hangi hayvanım?",
        hints: [
            "🐧 Siyah-beyaz smokin gibi görünürüm",
            "🧊 Çok soğuk yerlerde yaşıyorum",
            "🥚 Erkekler yumurtayı bacakları arasında sıcak tutar",
            "🏊 Su içinde çok iyi yüzerim ama uçamam"
        ],
        options: ["Papağan", "Penguen", "Martı", "Albatros"],
        correct: 1,
        emoji: "🐧",
        fact: "Penguen babaları 2 ay boyunca yumurtayı bacaklarının arasında tutarlar ve bu süre boyunca hiç yemek yemediler!"
    },
    {
        question: "Hangi hayvanım?",
        hints: [
            "🦒 Dünyanın en uzun hayvanıyım",
            "💙 Dilim 50 cm uzunluğunda ve mavimsi-siyah renkli",
            "🌿 Ağaçların yapraklarını yiyorum",
            "❤️ Kalbim 60 cm büyüklüğünde!"
        ],
        options: ["Deve", "Fil", "Zürafa", "At"],
        correct: 2,
        emoji: "🦒",
        fact: "Zürafalar 6 metre boyunda olabilir ve kalpleri de dev gibidir - 60 cm büyüklüğünde ve 11 kg ağırlığında!"
    }
];

class AnimalQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.currentHint = 0;
        this.quizContainer = document.getElementById('animal-quiz');
        this.usedQuestions = [];
        
        if (this.quizContainer) {
            this.init();
        }
    }

    init() {
        this.selectRandomQuestion();
        this.renderQuestion();
        this.attachEventListeners();
    }

    selectRandomQuestion() {
        let availableQuestions = quizData.filter((_, index) => !this.usedQuestions.includes(index));
        
        if (availableQuestions.length === 0) {
            this.usedQuestions = [];
            availableQuestions = quizData;
        }
        
        const randomIndex = Math.floor(Math.random() * quizData.length);
        this.currentQuestion = randomIndex;
        this.usedQuestions.push(randomIndex);
        this.currentHint = 0;
    }

    renderQuestion() {
        const question = quizData[this.currentQuestion];
        const quizContent = document.querySelector('.quiz-content');
        
        quizContent.innerHTML = `
            <div class="quiz-header">
                <h3>${question.question}</h3>
                <div class="quiz-emoji">${question.emoji}</div>
            </div>
            
            <div class="hints-container">
                <h4>İpuçları:</h4>
                <div class="hints-list">
                    ${question.hints.map((hint, index) => `
                        <div class="hint ${index <= this.currentHint ? 'hint-visible' : ''}" data-hint="${index}">
                            ${hint}
                        </div>
                    `).join('')}
                </div>
                ${this.currentHint < question.hints.length - 1 ? 
                    '<button class="hint-btn">Bir İpucu Daha Ver 💡</button>' : 
                    '<p class="all-hints-shown">Tüm ipuçları gösterildi! 🎯</p>'
                }
            </div>
            
            <div class="options-container">
                <h4>Cevabını Seç:</h4>
                <div class="options-grid">
                    ${question.options.map((option, index) => `
                        <button class="option-btn" data-option="${index}">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="quiz-result" style="display: none;"></div>
        `;
        
        this.attachQuestionEventListeners();
    }

    attachQuestionEventListeners() {
        // Hint button
        const hintBtn = document.querySelector('.hint-btn');
        if (hintBtn) {
            hintBtn.addEventListener('click', () => this.showNextHint());
        }
        
        // Option buttons
        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedOption = parseInt(e.target.getAttribute('data-option'));
                this.checkAnswer(selectedOption);
            });
        });
    }

    showNextHint() {
        if (this.currentHint < quizData[this.currentQuestion].hints.length - 1) {
            this.currentHint++;
            this.renderQuestion();
        }
    }

    checkAnswer(selectedOption) {
        const question = quizData[this.currentQuestion];
        const resultDiv = document.querySelector('.quiz-result');
        const optionBtns = document.querySelectorAll('.option-btn');
        
        // Disable all buttons
        optionBtns.forEach(btn => btn.disabled = true);
        
        if (selectedOption === question.correct) {
            // Correct answer
            this.score++;
            optionBtns[selectedOption].classList.add('correct');
            resultDiv.innerHTML = `
                <div class="result-correct">
                    <h3>🎉 Doğru Bildin! 🎉</h3>
                    <p class="result-emoji">${question.emoji}</p>
                    <p class="result-text">${question.fact}</p>
                    <button class="next-question-btn">Yeni Soru 🎯</button>
                </div>
            `;
        } else {
            // Wrong answer
            optionBtns[selectedOption].classList.add('wrong');
            optionBtns[question.correct].classList.add('correct');
            resultDiv.innerHTML = `
                <div class="result-wrong">
                    <h3>😅 Üzgünüm, Yanlış!</h3>
                    <p class="result-emoji">${question.emoji}</p>
                    <p class="result-text">Doğru cevap: <strong>${question.options[question.correct]}</strong></p>
                    <p class="result-fact">${question.fact}</p>
                    <button class="next-question-btn">Yeni Soru 🎯</button>
                </div>
            `;
        }
        
        resultDiv.style.display = 'block';
        
        // Update score display
        this.updateScoreDisplay();
        
        // Next question button
        const nextBtn = document.querySelector('.next-question-btn');
        nextBtn.addEventListener('click', () => {
            this.nextQuestion();
        });
    }

    updateScoreDisplay() {
        const scoreDisplay = document.querySelector('.quiz-score');
        if (scoreDisplay) {
            scoreDisplay.textContent = `Skor: ${this.score} 🏆`;
        }
    }

    nextQuestion() {
        this.selectRandomQuestion();
        this.renderQuestion();
        
        // Scroll to quiz
        this.quizContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    attachEventListeners() {
        const resetBtn = document.querySelector('.reset-quiz-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.score = 0;
                this.usedQuestions = [];
                this.updateScoreDisplay();
                this.selectRandomQuestion();
                this.renderQuestion();
            });
        }
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('animal-quiz')) {
        new AnimalQuiz();
    }
});
