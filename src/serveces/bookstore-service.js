import {allBooksRemoveFromCart} from "../actions";

export default class BookstoreService {
   data = [
       {
        id: 1,
        title: 'Гарри Поттер',
        author: 'Джоан Роулинг',
        price: 32,
        coverImage: "https://avatars.mds.yandex.net/get-zen_doc/1708012/pub_5e5e77c2170e395c41043f49_5e5e8290ac9a236dd3d946dd/scale_1200"
       },
       {
            id: 2,
            title: 'A million Little Pieces ',
            author: 'Michael T. Nygard',
            price: 43,
            coverImage: "https://static-cse.canva.com/blob/193579/millionlittlepieces_2.jpg"
       },
       {
           id: 3,
           title: 'Гарри Поттер',
           author: 'Джоан Роулинг',
           price: 32,
           coverImage: "https://avatars.mds.yandex.net/get-zen_doc/1708012/pub_5e5e77c2170e395c41043f49_5e5e8290ac9a236dd3d946dd/scale_1200"
       },
       {
           id: 4,
           title: 'A million Little Pieces ',
           author: 'Michael T. Nygard',
           price: 43,
           coverImage: "https://static-cse.canva.com/blob/193579/millionlittlepieces_2.jpg"
       },
       {
           id: 5,
           title: 'Гарри Поттер',
           author: 'Джоан Роулинг',
           price: 32,
           coverImage: "https://avatars.mds.yandex.net/get-zen_doc/1708012/pub_5e5e77c2170e395c41043f49_5e5e8290ac9a236dd3d946dd/scale_1200"
       },
       {
           id: 6,
           title: 'A million Little Pieces ',
           author: 'Michael T. Nygard',
           price: 43,
           coverImage: "https://static-cse.canva.com/blob/193579/millionlittlepieces_2.jpg"
       },
       {
           id: 7,
           title: 'Гарри Поттер',
           author: 'Джоан Роулинг',
           price: 32,
           coverImage: "https://avatars.mds.yandex.net/get-zen_doc/1708012/pub_5e5e77c2170e395c41043f49_5e5e8290ac9a236dd3d946dd/scale_1200"
       },
       {
           id: 8,
           title: 'A million Little Pieces ',
           author: 'Michael T. Nygard',
           price: 43,
           coverImage: "https://static-cse.canva.com/blob/193579/millionlittlepieces_2.jpg"
       },
       {
           id: 9,
           title: 'Гарри Поттер',
           author: 'Джоан Роулинг',
           price: 32,
           coverImage: "https://avatars.mds.yandex.net/get-zen_doc/1708012/pub_5e5e77c2170e395c41043f49_5e5e8290ac9a236dd3d946dd/scale_1200"
       },
       {
           id: 10,
           title: 'A million Little Pieces ',
           author: 'Michael T. Nygard',
           price: 43,
           coverImage: "https://static-cse.canva.com/blob/193579/millionlittlepieces_2.jpg"
       },
       {
           id: 11,
           title: 'Гарри Поттер',
           author: 'Джоан Роулинг',
           price: 32,
           coverImage: "https://avatars.mds.yandex.net/get-zen_doc/1708012/pub_5e5e77c2170e395c41043f49_5e5e8290ac9a236dd3d946dd/scale_1200"
       },
       {
           id: 12,
           title: 'A million Little Pieces ',
           author: 'Michael T. Nygard',
           price: 43,
           coverImage: "https://static-cse.canva.com/blob/193579/millionlittlepieces_2.jpg"
       },

    ];
    description = [
        {
            id: 1,
            title: 'Гарри Поттер',
            author: 'Джоан Роулинг',
            price: 32,
            coverImage: "https://avatars.mds.yandex.net/get-zen_doc/1708012/pub_5e5e77c2170e395c41043f49_5e5e8290ac9a236dd3d946dd/scale_1200",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,' +
                ' est numquam placeat provident quibusdam sed unde veniam voluptatem. ' +
                'Adipisci aliquam aspernatur, excepturi ipsam odio officia voluptatum.' +
                ' Asperiores laborum maiores vel.'
        },
        {
            id: 2,
            title: 'A million Little Pieces ',
            author: 'Michael T. Nygard',
            price: 43,
            coverImage: "https://static-cse.canva.com/blob/193579/millionlittlepieces_2.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,' +
                ' est numquam placeat provident quibusdam sed unde veniam voluptatem. ' +
                'Adipisci aliquam aspernatur, excepturi ipsam odio officia voluptatum.' +
                ' Asperiores laborum maiores vel.'
        },
        {
            id: 3,
            title: 'Production-Ready Microservicesdfsafdsdfsdfsdfsdfsdgfddddddddddddddddddddddddddddddddd',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: "https://avatars.mds.yandex.net/get-zen_doc/1708012/pub_5e5e77c2170e395c41043f49_5e5e8290ac9a236dd3d946dd/scale_1200",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,' +
                ' est numquam placeat provident quibusdam sed unde veniam voluptatem. ' +
                'Adipisci aliquam aspernatur, excepturi ipsam odio officia voluptatum.' +
                ' Asperiores laborum maiores vel.'
        },
    ];
    getBookById(bookId){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(Math.random()>0.99){
                    reject(new Error('something bad happened'))
                }else{
                    resolve(...this.description.filter((book)=>book.id ==bookId ));
                }

            }, 700)
    })
    };
    getBook(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(Math.random()>0.99){
                    reject(new Error('something bad happened'))
                }else{
                    resolve(this.data);
                }

            }, 700)

        })
    }
}