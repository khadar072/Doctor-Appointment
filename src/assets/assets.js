import doc1 from './doc1.jpg';
import doc2 from './doc2.jpg';
import doc3 from './doc3.jpg';
import doc4 from './doc4.jpg';
import doc5 from './doc5.jpg';
import doc6 from './doc6.jpg';
import doc7 from './doc7.jpg';
import doc8 from './doc8.jpg';
import doc9 from './doc9.jpg';
import doc10 from './doc10.jpg';
import doc11 from './doc11.jpg';
import doc12 from './doc12.jpg';
import doc13 from './doc13.jpg';
import doc14 from './doc14.jpg';
import doc15 from './doc15.jpg';
import doc16 from './doc16.jpg';
import doc17 from './doc17.jpg';
import doc18 from './doc18.jpg';
import doc19 from './doc19.jpg';
// import doc22 from './doc22.jpg';
import man from './man.jpg';
import man1 from './man1.jpg';
import waman from './waman.jpg';
import profile from './profile.jpg';
import logo from './logo.jpg';
import banner from './banner.jpg';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';
import banner4 from './banner4.jpg';//
import banner5 from './banner5.jpg';//
import phone from './phone.jpg';
import person from './person.jpg';
import people from './people.jpg';
import patient from './patient.jpg';
import noUser from './noUser.jpg';
import money from './money.jpg';
import mission from './mission.jpg';
import message from './message.jpg';
import instogram from './instogram.jpg';
import health from './health.jpg';
import facebook from './facebook.jpg';
import expireince from './expireince.jpg';
import dashboard from './dashboard.jpg';
import curectDash from './curectDash.jpg';
import correct  from './correct.jpg';
import checkbox from './checkbox.jpg';
import cancelled from './banner4.jpg';
import calender from './calender.jpg';
import blueLocation from './blueLocation.jpg';
import Genitourinary from './Genitourinary.jpg';
import dermatology from './dermatology.jpg';
import gastroenterology from './gastroenterology.jpg';
import generalSurgery from './generalSurgery.jpg';
import surgery from './surgery.jpg';
import padiatric from './padiatric.jpg';
import publicHealth from './publicHealth.jpg';//
import dandist from './dendist.jpg';
import cardioligist from './cardioligist.jpg';
import generalDoctor from './GeneralDoctor.jpg';
import orthopidec from './orthopidec.jpg';
import otology from './otology.jpg';
import neuroligist from './neuroligist.jpg';
import neurological from './neurological.jpg';
import whitePhone from './whitePhone.jpg';
import vision1 from './vision1.jpg';
import twitter from './twitter.jpg';
import searching from './searching.jpg';
import rating from './rating.jpg';
import whiteMessage from './whiteMessage.jpg';
import doctors from './doctors.jpg';
import arrow from './arrow.jpg';
import close from './close.jpg';
import menu from './menu.jpg';
import achievements from './achievements.jpg';


export const assets = {
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
    doc11,
    doc12,
    doc13,
    doc14,
    doc15,
    doc16,
    doc17,
    doc18,
    doc19,
    // doc22,
    man,
    waman,
    man1,
    banner,
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    padiatric,
    publicHealth,
    generalSurgery,
    surgery,
    dermatology,
    Genitourinary,
    gastroenterology,
    profile,
    dashboard,
    curectDash,
    correct,
    checkbox,
    calender,
    cancelled,
    blueLocation,
    phone,person,
    people,
    patient,
    noUser,
    money,
    mission,
    message,
    instogram,
    health,
    facebook,
    expireince,
    logo,
    whitePhone,
    vision1,
    twitter,
    searching,
    rating,
    whiteMessage,
    doctors ,
    arrow,
    menu,
    close ,
    achievements,
    neuroligist,
    otology,
    orthopidec,
    generalDoctor,
    cardioligist,
    dandist,
    neurological
};



export const specialityData = [
    { speciality: 'Surgery', image: generalSurgery },
    { speciality: 'Neurological', image: neurological },
    // { speciality: 'Gastroenterology', image: gastroenterology },
    // { speciality: 'Genitourinary', image: Genitourinary },
    // { speciality: 'Dermatology', image: dermatology },
    { speciality: 'Pediatrics', image: padiatric },
    // { speciality: 'Public Health', image: publicHealth },
    { speciality: 'Dandist', image: dandist },
    // { speciality: 'Neuroligist', image: neuroligist },
    { speciality: 'General Doctor', image: generalDoctor },
    { speciality: 'Cardioligist ', image: cardioligist },
    { speciality: 'Orthopidec ', image: orthopidec },
    { speciality: 'Otology', image: otology },
];

export const Userscomment=[
    {
        name: 'khadar',
        image: man,
        rating:rating,
        comment:'world-class care for everone. Our health System world-class care for everone. Our health System '
    },
    {
        name: 'bashka',
        image: man1,
        rating:rating,
        comment:'world-class care for everone. Our health System '
    },
    {
        name: 'maryan',
        image: waman,
        rating:rating,
        comment:'world-class care for everone. Our health System '
    },
    {
        name: 'casho',
        image: waman,
        rating:rating,
        comment:'world-class care for everone. Our health System '
    },
    {
        name: 'raxmo',
        image: waman,
        rating:rating,
        comment:'world-class care for everone. Our health System '
    },
    {
        name: 'maxamud',
        image: man,
        rating:rating,
        comment:'world-class care for everone. Our health System '
    },
    {
        name: 'c/lahi',
        image: man1,
        rating:rating,
        comment:'world-class care for everone. Our health System '
    },
    {
        name: 'zaki',
        image: man1,
        rating:rating,
        comment:'world-class care for everone. Our health System '
    },
]



export const Doctor = [
    {
        _id: 'doc1',
        name: 'Dr. Xawo',
        image: doc1,
        speciality: 'Surgery',
        degree: 'MBBS',
        experience: '4 years',
        about: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
           
    },
    {
        _id: 'doc2',
        name: 'Dr. Muno',
        image: doc18,
        speciality: 'Neurological',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc3',
        name: 'Dr. Casho',
        image: doc3,
        speciality: 'Neurological',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc4',
        name: 'Dr. Sumayo',
        image: doc4,
        speciality: 'Surgery',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc5',
        name: 'Dr. Milgo',
        image: doc19,
        speciality: 'Orthopidec',
        degree: 'MBBS',
        experience: '4 years',
        about: 'SLorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc6',
        name: 'Dr. Saki',
        image: doc6,
        speciality: 'Orthopidec',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc7',
        name: 'Dr. Bashka',
        image: doc7,
        speciality: 'Pediatrics',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc8',
        name: 'Dr. Khadar',
        image: doc8,
        speciality: 'Pediatrics',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.r',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc9',
        name: 'Dr. Bilan',
        image: doc9,
        speciality: 'Otology',
        degree: 'MBBS',
        experience: '4 years',
        about: 'SLorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.r',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc10',
        name: 'Dr. Salmo',
        image: doc10,
        speciality: 'Otology',
        degree: 'MBBS',
        experience: '4 years',
        about: 'SLorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc11',
        name: 'Dr. Maan',
        image: doc11,
        speciality: 'Dandist',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc12',
        name: 'Dr. Cali',
        image: doc12,
        speciality: 'General Doctor',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc13',
        name: 'Dr. Yaxye',
        image: doc13,
        speciality: 'Dandist',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc14',
        name: 'Dr. Maryan',
        image: doc14,
        speciality: 'General Doctor',
        degree: 'MBBS',
        experience: '4 years',
        about: 'SLorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.r',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc15',
        name: 'Dr. Xamdi',
        image: doc15,
        speciality: 'Cardioligist',
        degree: 'MBBS',
        experience: '4 years',
        about: 'SLorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
    {
        _id: 'doc16',
        name: 'Dr. Warsame',
        image: doc17,
        speciality: 'Cardioligist',
        degree: 'MBBS',
        experience: '4 years',
        about: 'SLorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores neque hic voluptas corporis! Natus minus, adipisci qui cupiditate magnam iste, hic error itaque quaerat nulla nobis sunt nam repellat.',
        fees: 50,
        address:  '17th Cross'
    },
];
