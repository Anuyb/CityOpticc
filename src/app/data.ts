import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name:'john',
            email:'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin:true,
        },
        {
            name:'jane',
            email:'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin:false,
        },
    ],
    products:[
        {
            name: 'Гэгээ линк BLACK',
            slug: 'gegee-black',
            category: 'Өнгөтэй',
            category1: '1 жилийн хугацаатай', 
            image:  '/images/gegeeBl.jpeg',
            price: 35000,
            brand: 'GEGEE',
            description: 'Монгол шошготой, манай анхны брэнд.',  
            banner:'/images/gegeeBl.jpeg',
            countInStock:10,
            bc:'8.6',
            dia:'14.2',
            graDia:'13.3',
            water:'38',
            material:'Polymacon, Poly-HEMA',
            country:'Солонгос (Interojo)',
            baglaa:'2',
            isFeatured: true,
        },
        {
            name: 'Гэгээ линк CHOCO',
            slug: 'gegee-CHOCO',
            category: 'Өнгөтэй',
            category1: '1 жилийн хугацаатай', 
            image:  '/images/gegeeCh.jpeg',
            price: 35000,
            brand: 'GEGEE',
            description: 'Монгол шошготой, манай анхны брэнд.',  
            banner:'/images/gegeeCh.jpeg',
            countInStock:10,
            bc:'8.6',
            dia:'14.2',
            graDia:'13.3',
            water:'38',
            material:'Polymacon, Poly-HEMA',
            country:'Солонгос (Interojo)',
            baglaa:'2',
            isFeatured: true,
        },
        {
            name: 'Biofinity',
            slug: 'bio',
            category: 'Өнгөгүй',
            category1: '1 сарын хугацаатай', 
            image:  '/images/bio.jpeg',
            price: 22500,
            brand: 'CooperVision',
            description: '30 өдөр 29 шөнө авахгүй зүүх боломжтой',  
            banner:'/images/bio.jpeg',
            countInStock:10,
            bc:'8.6',
            dia:'14.0',
            graDia:'',
            water:'48',
            material:'comfilcon A',
            country:'Англи(CooperVision)',
            baglaa:'3',
            isFeatured: true,
        },
        {
            name: 'Eyelike',
            slug: 'eyelike',
            category: 'Өнгөгүй',
            category1: '1 сарын хугацаатай', 
            image:  '/images/eyelike.jpeg',
            price: 16000,
            brand: 'Interojo',
            description: 'Анх удаа хэрэглэж буй хүнд тохиромжтой',  
            banner:'/images/eyelike.jpeg',
            countInStock:10,
            bc:'8.6',
            dia:'14.2',
            graDia:'',
            water:'55',
            material:'Methafilcon A',
            country:'Герман (Interojo)',
            baglaa:'1',
            isFeatured: true,
        },
        {
            name: '1day Pure',
            slug: 'OneDayPure',
            category: 'Өнгөгүй',
            category1: '1 өдрийн хугацаатай', 
            image:  '/images/OneDayPure.jpeg',
            price: 3000,
            brand: 'SEED',
            description: 'Нэмэлт арчилгаа шаардлагагүй',  
            banner: '/images/OneDayPure.jpeg',
            countInStock:10,
            bc:'8.8',
            dia:'14.2',
            graDia:'',
            water:'55',
            material:'Polymacon, Poly-HEMA',
            country:'Герман (Interojo)',
            baglaa:'8',
            isFeatured: true,
        },
        {
            name: 'Adria Color - Black',
            slug: 'adriaBlack',
            category: 'Өнгөтэй',
            category1: '3 сарын хугацаатай', 
            image:  '/images/adriaBlack.jpeg',
            price: 24000,
            brand: 'Interjo',
            description: 'Дүрслэлийн алдааг багасгасан',  
            banner:'/images/adriaBlack.jpeg',
            countInStock:10,
            bc:'8.6',
            dia:'14.2',
            graDia:'13.1',
            water:'38',
            material:'Polymacon, Poly-HEMA',
            country:'Солонгос (Interojo)',
            baglaa:'2',
            isFeatured: true,
        },
        {
            name: 'Adria Color - LIGHT BLACK',
            slug: 'adriaLightBlack',
            category: 'Өнгөтэй',
            category1: '3 сарын хугацаатай', 
            image:  '/images/adriaLiBlack.jpeg',
            price: 24000,
            brand: 'Interjo',
            description: 'Дүрслэлийн алдааг багасгасан',  
            banner:'/images/adriaLiBlack.jpeg',
            countInStock:10,
            bc:'8.6',
            dia:'14.2',
            graDia:'13.1',
            water:'38',
            material:'Polymacon, Poly-HEMA',
            country:'Солонгос (Interojo)',
            baglaa:'2',
            isFeatured: true,
        },
    ],
    branchs:[
        {
            name: 'Метромалл салбар',
            slug: 'Метромалл',
            image: '/images/metroMall.jpeg',
            location: 'СБД, 6-р хороо Бага тойруу “Метромалл” их дэлгүүр 1-р давхарт',
            phone: 70114567,
            schedule: 'Да-Ба: 10:00-20:00, Бя-Ня: 11:00-20:00',
        },
        {
            name: 'Шангри-Ла салбар',
            slug: 'Шангри-Ла',
            image: '/images/shangriLa.jpeg',
            location: 'СБД, 1-р хороо, Олимпийн гудамж - 19, “Шангри-Ла Молл” төв, 2-р давхар',
            phone: 70154567,
            schedule: 'Өдөр бүр: 11:00-19:00',
        },
        {
            name: 'Гранд Плаза салбар',
            slug: 'Гранд Плаза',
            image: '/images/grandPlaza.jpeg',
            location: 'БГД, 2-р хороо Гранд Плаза цогцолбор 1 давхарт',
            phone: 70124567,
            schedule: 'Өдөр бүр: 10:00-20:30',
        },
        {
            name: 'Үйлдвэрийн салбар',
            slug: 'Үйлдвэр',
            image: '/images/uildver.jpeg',
            location: 'СБД, 4-р хороо Энх тайвны өргөн чөлөө 51-р байр 1 давхарт',
            phone: 70104555,
            schedule: 'Өдөр бүр: 10:00-19:00',
        },
        {
            name: 'УИД салбар',
            slug: 'УИД',
            image: '/images/uid.jpeg',
            location: 'ЧД, 3-р хороо, Энхтайваны өргөн чөлөө, УИД 1-р давхарт',
            phone: 95384567,
            schedule: 'Да-Ба: 08:30-22:00, Ня: 08:30-21:30',
        },
        {
            name: 'Ард салбар',
            slug: 'Ард',
            image: '/images/ard.jpeg',
            location: 'ЧД, 4-р хороо А4-р байр 1-р давхарт',
            phone: 70134567,
            schedule: 'Да-Ба: 10:00-18:00, Бя-Ня: 11:00-19:00',
        },
        {
            name: 'Зайсан Стар салбар',
            slug: 'Зайсан Стар',
            image: '/images/zaisanStar.jpeg',
            location: 'ХУД, "Зайсан Стар" дэлгүүр 2-р давхарт',
            phone: 95024567,
            schedule: 'Өдөр бүр: 11:00-19:00',
        },
        {
            name: 'Хархорин салбар',
            slug: 'Хархорин',
            image: '/images/kharkhorin.png',
            location: 'СХД, Хархорин автобусны буудлын урд талд',
            phone: 76004567,
            schedule: 'Да-Ба: 10:00-19:00, Бя-Ня: 11:00-19:00',
        },
        {
            name: 'Дархан салбар',
            slug: 'Дархан',
            image: '/images/darkhan.jpeg',
            location: 'Дархан хот, Дархан их дэлгүүр 1 давхарт',
            phone: 70377801,
            schedule: 'Өдөр бүр: 10:30-20:00',
        },
        {
            name: 'Эрдэнэт салбар',
            slug: 'Эрдэнэт',
            image: '/images/erdenet.jpeg',
            location: 'Эрдэнэт хот, Орхон молл 3 давхарт',
            phone: 70354567,
            schedule: 'Да-Ба: 10:00-19:00, Бя: 11:00-19:00, Ня: 10:00-18:00',
        },        
    ]
}

export default data