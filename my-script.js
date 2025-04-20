const months = document.querySelector('#months');
const days = document.querySelector('#day-inp');
const years = document.querySelector('#year-inp');
const submitBtn = document.querySelector('.submit-btn');
const fateHeader = document.querySelector('.fate-header');
const fatePara = document.querySelector('.fate-text');
const horoscopePara = document.querySelector('.text-horoscope');
const chineseZodiacPara = document.querySelector('.text-chinese-zodiac')
const horoscopeImg = document.querySelector('#horoscope-img');
const chineseZodiacImg = document.querySelector('#chinese-zodiac-img');
const resetBtn = document.querySelector('.reset-btn');
const modal = document.querySelector('.show');

submitBtn.addEventListener('click', () => {
    const validateValue = validateDateOfBirth(days, years, months);
    if (validateValue === true) {
        showResult(days, years, months)
        modal.classList.remove("show");
    } 
});

resetBtn.addEventListener('click', () => {
    resetResult();
});

const Horoscope = {
    aquarius: "../images/Horoscope Month/Aquarius.webp",
    pisces: "../images/Horoscope Month/Pisces.webp",
    aries: "../images/Horoscope Month/Aries.webp",
    taurus: "../images/Horoscope Month/Taurus.webp",
    gemini: "../images/Horoscope Month/Gemini.webp",
    cancer: "../images/Horoscope Month/Cancer.webp",
    leo: "../images/Horoscope Month/Leo.webp",
    virgo: "../images/Horoscope Month/Virgo.webp",
    libra: "../images/Horoscope Month/Libra.webp",
    scorpius: "../images/Horoscope Month/Scorpius.webp",
    sagittarius: "../images/Horoscope Month/Sagittarius.webp",
    capricornus: "../images/Horoscope Month/Capricornus.webp",
};

const ChineseZodiac = {
    monkey: "../images/Chinese Zodiac Sign/Monkey.webp",
    rooster: "../images/Chinese Zodiac Sign/Rooster.jpg",
    dog: "../images/Chinese Zodiac Sign/Dog.jpg",
    pig: "../images/Chinese Zodiac Sign/Pig.webp",
    rat: "../images/Chinese Zodiac Sign/Rat.jpg",
    ox: "../images/Chinese Zodiac Sign/Ox.jpg",
    tiger: "../images/Chinese Zodiac Sign/Tiger.jpg",
    rabbit: "../images/Chinese Zodiac Sign/Rabbit.jpg",
    dragon: "../images/Chinese Zodiac Sign/Dragon.jpg",
    snake: "../images/Chinese Zodiac Sign/Snake.jpg",
    horse: "../images/Chinese Zodiac Sign/Horse.jpg",
    goat: "../images/Chinese Zodiac Sign/Goat.jpg",
};

function validateDateOfBirth(days, years, months) {
    const dayValue = days.value;
    const yearValue = years.value;
    const monthValue = months.value;

    if (isNaN(dayValue) || isNaN(yearValue)) {
        alert("Number only!");
    } else if (dayValue === "" || yearValue === "" || monthValue === "") {
        alert("You must fill out everything.");
    } else if (yearValue < 1925 || yearValue > 2025 || dayValue < 1 || dayValue > 31) {
        alert("Invalid date of birth try again.");
    } else {
        return true;
    }
}

function getChineseZodiacSign(years) {
    const yearValue = years.value;

    if (yearValue % 12 === 0) {
        return "monkey";
    } else if (yearValue % 12 === 1) {
        return "rooster";
    } else if (yearValue % 12 === 2) {
        return "dog";
    } else if (yearValue % 12 === 3) {
        return "pig";
    } else if (yearValue % 12 === 4) {
        return "rat";
    } else if (yearValue % 12 === 5) {
        return "ox";
    } else if (yearValue % 12 === 6) {
        return "tiger";
    } else if (yearValue % 12 === 7) {
        return "rabbit";
    } else if (yearValue % 12 === 8) {
        return "dragon";
    } else if (yearValue % 12 === 9) {
        return "snake";
    } else if (yearValue % 12 === 10) {
        return "horse";
    } else {
        return "goat";
    }
}

function getHoroscopeSign(days, months) {
    const dayValue = days.value;
    const monthValue = months.value;

    if (monthValue === "January" && dayValue >= 20 || monthValue === "February" && dayValue <= 18) {
        return "aquarius";
    }  else if (monthValue === "February" && dayValue >= 19 || monthValue === "March" && dayValue <= 20) {
        return "pisces";
    } else if (monthValue === "March" && dayValue >= 21 || monthValue === "April" && dayValue <= 19) {
        return "aries";
    } else if (monthValue === "April" && dayValue >= 20 || monthValue === "May" && dayValue <= 20) {
        return "taurus";
    } else if (monthValue === "May" && dayValue >= 21 || monthValue === "June" && dayValue <= 21) {
        return "gemini";
    } else if (monthValue === "June" && dayValue >= 22 || monthValue === "July" && dayValue <= 22) {
        return "cancer";
    } else if (monthValue === "July" && dayValue >= 23 || monthValue === "August" && dayValue <= 22) {
        return "leo";
    } else if (monthValue === "August" && dayValue >= 23 || monthValue === "September" && dayValue <= 22) {
        return "virgo";
    } else if (monthValue === "September" && dayValue >= 23 || monthValue === "October" && dayValue <= 23) {
        return "libra";
    } else if (monthValue === "October" && dayValue >= 24 || monthValue === "November" && dayValue <= 21) {
        return "scorpius";
    } else if (monthValue === "November" && dayValue >= 22 || monthValue === "December" && dayValue <= 21) {
        return "sagittarius";
    } else {
        return "capricornus";
    } 
}

function getRandomFateText() {
    const generateRandomText = Math.floor(Math.random() * 9) + 1;
    console.log(generateRandomText);
    switch(generateRandomText) {
        case 1: return fateHeader.textContent = "Guiding Light", 
        fatePara.textContent = "Fate is a compassionate force that illuminates our path, gently steering us toward growth and fulfillment. It acts as an inner compass, aligning our choices with unseen opportunities. Even in uncertainty, it whispers reassurance, reminding us that every step—whether joyful or challenging—carries purpose. Trust in this guiding light fosters resilience, transforming obstacles into lessons and coincidences into catalysts for transformation. By surrendering to its wisdom, we embrace life’s journey with courage, knowing we’re never truly lost.";
        case 2: return fateHeader.textContent = "Cosmic Tapestry", 
        fatePara.textContent = "Life’s events are threads in a grand, interconnected tapestry woven by fate. Each experience—joyful or painful—adds vibrant hues to the larger design. From chance encounters to pivotal decisions, every moment is meticulously stitched into a pattern that reveals meaning over time. This perspective invites awe, teaching us to honor both triumphs and trials as essential to our story. The tapestry’s beauty lies in its complexity, reminding us that even fragmented moments contribute to a masterpiece.";
        case 3: return fateHeader.textContent = "Unseen Hand", 
        fatePara.textContent = "Fate operates like an invisible artisan, shaping our lives with precision and care. It crafts serendipitous meetings, timely opportunities, and unexpected blessings, often when we least expect them. This unseen hand doesn’t control our free will but nudges us toward alignment with our deepest potential. By recognizing its subtle influence, we learn to flow with life’s rhythms, finding grace in uncertainty and gratitude for the hidden support that guides us toward wholeness.";
        case 4: return fateHeader.textContent = "Symphony of Synchronicity", 
        fatePara.textContent = "Existence is a harmonious symphony conducted by fate, where every event resonates with purpose. Synchronicities—meaningful coincidences—act as melodies that bridge past, present, and future. These moments feel like “aha” sparks, revealing connections we might otherwise miss. By attuning to this rhythm, we become both composers and listeners, co-creating our journey while trusting the universe’s perfect timing. The symphony reassures us that chaos is merely a prelude to harmony.";
        case 5: return fateHeader.textContent = "Compass of Destiny", 
        fatePara.textContent = "Fate is an unwavering compass pointing us toward our soul’s purpose. It doesn’t dictate our path but highlights directions that align with our authentic selves. Challenges become detours that refine our resolve, while triumphs validate our alignment. Trusting this compass means embracing curiosity over fear, knowing that even detours lead to growth. Destiny isn’t a fixed endpoint but a dynamic journey of self-discovery, guided by the compass’s steady pull.";
        case 6: return fateHeader.textContent = "River of Possibility", 
        fatePara.textContent = "Life flows like a river shaped by fate’s currents, carrying us through landscapes of change. Rapids represent challenges that strengthen us; calm waters reflect moments of clarity. Resistance leads to struggle, but surrender allows the river’s wisdom to guide us. Fate ensures that every bend holds new vistas, teaching us to navigate with flexibility and faith. The river’s journey reminds us that stagnation is temporary—forward motion is inevitable.";
        case 7: return fateHeader.textContent = "Garden of Growth", 
        fatePara.textContent = "Fate tends the garden of our existence, planting seeds of potential in fertile soil. Some sprout quickly; others require patience and nurturing. Storms may shake the garden, but they also nourish growth. Weeds of doubt are uprooted by time, revealing resilient blooms. This metaphor invites us to trust the seasons of life, understanding that fate’s design ensures every seed has its moment to flourish into something vibrant and true.";
        case 8: return fateHeader.textContent = "Dance of Alignment", 
        fatePara.textContent = "Life is a dance choreographed by fate, where steps unfold in perfect rhythm. Missteps are invitations to improvise, while synchronicities feel like partners moving in harmony. Fate doesn’t demand perfection but encourages us to sway with trust. The dance floor expands as we embrace uncertainty, learning that every turn—whether planned or spontaneous—belongs to a larger, joyful performance. The music never stops; it simply shifts tempo.";
        case 9: return fateHeader.textContent = "Mosaic of Meaning", 
        fatePara.textContent = "Our lives are mosaics pieced together by fate, each fragment a moment of joy, sorrow, or discovery. Individually, the pieces may seem insignificant, but collectively they form a stunning portrait of purpose. Fate ensures that even shattered dreams find their place, adding depth and contrast. This perspective transforms regret into gratitude, as we recognize that every experience—light or dark—contributes to the artistry of our existence.";
        default: return fateHeader.textContent = "Echo of Eternity", 
        fatePara.textContent = "Fate is the echo of timeless wisdom reverberating through our mortal lives. It connects fleeting moments to eternal truths, reminding us that our actions ripple beyond the present. Challenges become echoes of resilience; love becomes a resonance that transcends time. By listening to this echo, we align with a legacy larger than ourselves, understanding that our journey is both unique and universally intertwined.";
    }
}


function showResult(days, years, months) {
    const horocopeValue = getHoroscopeSign(days, months);
    const chineseZodiacValue = getChineseZodiacSign(years);
    getRandomFateText();

    for (let propertyName in Horoscope) {
        if (horocopeValue === propertyName) {
            horoscopeImg.setAttribute('src', Horoscope[propertyName]);
            horoscopePara.textContent = propertyName.toUpperCase();
            console.log(horoscopePara);
            break;
        }
    }
    for (let propertyName in ChineseZodiac) {
        if (chineseZodiacValue === propertyName) {
            chineseZodiacImg.setAttribute('src', ChineseZodiac[propertyName]);
            chineseZodiacPara.textContent = propertyName.toUpperCase();
            console.log(chineseZodiacPara);
            break;
        }
    }
}

function resetResult() {
    months.value = "";
    days.value = "";
    years.value = "";
    modal.classList.add("show");
}

