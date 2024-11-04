function zodiacSign() {
    return ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][Math.floor(Math.random() * 12)];
};

//Test zodiacSign
//console.log(zodiacSign());

function zodiacMessage(sign) {
    switch (sign) {
        case 'Aries':
            return 'Meditate to a candle flame or metaphorically embody the essence of fire to transmute old energies into new more high vibing ones.';
            
        case 'Taurus':
            return 'Ask your unicorn to manifest your happiest life for you.';

        case 'Gemini':
            return 'Playfully explore the details to reach an expanded perspective.';

        case 'Cancer':
            return 'Empower people to see who they are and what they can do, by choosing it for yourself.';

        case 'Leo':
            return 'As within, so without, as above, so below, as the universe, so the soul.';

        case 'Virgo':
            return 'Seek the truth to lead the way.';

        case 'Libra':
            return 'Stand in your power and lead others forward.';

        case 'Scorpio':
            return 'Listen to your divine feminine wisdom.';

        case 'Sagittarius':
            return 'Master your spirit to master life.';

        case 'Capricorn':
            return 'Changing generational patterns needs you to hold the faith and come from an expanded perspective.';

        case 'Aquarius':
            return 'Now is not the time to crumble.';

        case 'Pisces':
            return 'Be open-minded, open-hearted and non-judgmental, even towards yourself.';
    
        default:
            return 'Invalid Input';
    }
    
};


function dateOfBirth(sign) {
    switch (sign) {
        case 'Aries':
            return 'You were born betweeen March 21–April 19';

        case 'Taurus':
            return 'April 20–May 20';

        case 'Gemini':
            return ' May 21–June 21';

        case 'Cancer':
            return 'June 22–July 22';

        case 'Leo':
            return 'July 23–August 22';

        case 'Virgo':
            return 'August 23–September 22';

        case 'Libra':
            return 'September 23–October 23';

        case 'Scorpius':
            return 'October 24–November 21';

        case 'Sagittarius':
            return 'November 22–December 21';

        case 'Capricorn':
            return 'December 22–January 19';

        case 'Aquarius':
            return 'January 20–February 18';

        case 'Pisces':
            return 'February 19–March 20';

        default:
            return 'Invalid input'
    }
};

function yourSign() {
    const sign = zodiacSign();
    const message = zodiacMessage(sign);
    const birthDate = dateOfBirth(sign);
    
    console.log(`Your zodiac sign is: ${sign}.`);
    console.log(`The cosmic tip for your sign is: ${message}`);
    console.log(`Your date of birth is somewhere between ${birthDate}.`);
};

yourSign();