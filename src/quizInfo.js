import Guitar1 from './images/Guitar-1.jpg';
import Guitar2 from './images/Guitar-2.jpg';
import Guitar3 from './images/Guitar-3.jpg';
import Guitar4 from './images/Guitar-4.jpg';
import Guitar5 from './images/Guitar-5.jpg';
import Guitar6 from './images/Guitar-6.jpg';
import Guitar7 from './images/Guitar-7.jpg';
import Guitar8 from './images/Guitar-8.jpg';
import Correct from './images/correct.jpg';
import Incorrect from './images/incorrect.jpg';

const quizInfo = {
    title: 'Can You Identify These Guitars?',
    intro: {
        image: 'https://images.unsplash.com/photo-1519508234439-4f23643125c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80',
        message: 'Try to figure out which guitar model is shown in the picture',
    },
    questions: [
        {
            id: 0,
            image: Guitar1,
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Fender Jaguar',
            answer1: 'Ibanez Talman',
            answer2: 'Fender Jaguar',
            answer3: 'Kay Vanguard',
            answer4: 'Fender Jazzmaster',
        },
        {
            id: 1,
            image: Guitar2,
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Gibson J-45',
            answer1: 'Gibson Hummingbird',
            answer2: 'Gibson J-200',
            answer3: 'Gibson Songwriter',
            answer4: 'Gibson J-45',
        },
        {
            id: 2,
            image: Guitar3,
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Gretsch Electromatic Double Jet',
            answer1: 'Gretsch Electromatic Double Jet',
            answer2: 'Gretsch Electromatic Center Block',
            answer3: 'Guild Starfire II',
            answer4: 'Danelectro 59X',
        },
        {
            id: 3,
            image: Guitar4,
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Martin D-18',
            answer1: 'Martin D-28',
            answer2: 'Martin D-18',
            answer3: 'Martin 000-18',
            answer4: 'Martin OM-28',
        },
        {
            id: 4,
            image: Guitar5,
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Gibson ES-175',
            answer1: 'Gibson ES-335',
            answer2: 'Gibson ES-175',
            answer3: 'Gibson ES-339',
            answer4: 'Epiphone Casino',
        },
        {
            id: 5,
            image: Guitar6,
            correctAnswer: 'B.C. Rich Mockingbird',
            answer1: 'Dean ML 79',
            answer2: 'Dean Razorback',
            answer3: 'B.C. Rich Warlock',
            answer4: 'B.C. Rich Mockingbird',
        },
        {
            id: 6,
            image: Guitar7,
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Rickenbacker 360/12',
            answer1: 'Rickenbacker 360/12',
            answer2: 'Rickenbacker 330',
            answer3: 'Rickenbacker 4003',
            answer4: 'Airline 2P',
        },
        {
            id: 7,
            image: Guitar8,
            question: 'Which famous guitar is pictured above?',
            correctAnswer: 'Taylor 414ce',
            answer1: 'Taylor 414ce',
            answer2: 'Guild OM-240',
            answer3: 'Taylor BBT',
            answer4: 'Guild Westerly',
        },
    ],
    correct: {
        image: Correct,
        message: 'Correct!  Nice job',
    },
    incorrect: {
        image: Incorrect,
        message: 'Wrong answer, see how you do on the next question!',
    },
    final: {
        image: 'https://images.unsplash.com/photo-1523325343676-4136d25d013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        message: 'Congratulations, you finished the quiz!',
    }
};

export default quizInfo;