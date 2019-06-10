const quizInfo = {
    title: 'Can You Identify These Guitars?',
    intro: {
        image: 'https://images.unsplash.com/photo-1519508234439-4f23643125c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80',
        message: 'Try to figure out which guitar model is shown in the picture',
    },
    questions: [
        {
            id: 0,
            image: 'https://d1aeri3ty3izns.cloudfront.net/media/32/326049/1200/preview.jpg',
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Fender Jaguar',
            answer1: 'Ibanez Talman',
            answer2: 'Fender Jaguar',
            answer3: 'Kay Vanguard',
            answer4: 'Fender Jazzmaster',
        },
        {
            id: 1,
            image: 'https://thehub.musiciansfriend.com/images/guitarsguide/gibson2018/Gibson-J45-Standard.jpg',
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Gibson J-45',
            answer1: 'Gibson Hummingbird',
            answer2: 'Gibson J-200',
            answer3: 'Gibson Songwriter',
            answer4: 'Gibson J-45',
        },
        {
            id: 2,
            image: 'https://images.reverb.com/image/upload/s--mwRCLtF9--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1384829641/hcgziqa7hgkw4lwul2ch.jpg',
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Gretsch Electromatic Double Jet',
            answer1: 'Gretsch Electromatic Double Jet',
            answer2: 'Gretsch Electromatic Center Block',
            answer3: 'Guild Starfire II',
            answer4: 'Danelectro 59X',
        },
        {
            id: 3,
            image: 'https://d1aeri3ty3izns.cloudfront.net/media/24/245579/1200/preview.jpg',
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Martin D-18',
            answer1: 'Martin D-28',
            answer2: 'Martin D-18',
            answer3: 'Martin 000-18',
            answer4: 'Martin OM-28',
        },
    ],
    correct: {
        image: 'https://www.colourbox.com/preview/12004600-correct.jpg',
        message: 'Correct!  Nice job',
    },
    incorrect: {
        image: 'https://www.colourbox.com/preview/12004558-incorrect.jpg',
        message: 'WRONG! Better luck next time',
    },
    final: {
        image: 'https://images.unsplash.com/photo-1523325343676-4136d25d013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        message: 'Congratulations, you finished the quiz!',
    }
};

export default quizInfo;