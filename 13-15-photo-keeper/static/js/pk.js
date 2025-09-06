console.log('start');

class MenuHandler {
    constructor() {
        this.menuTriger = document.querySelector('.menuTrigger');
        this.mainMenuContainer = document.querySelector('.mainMenuContainer');
        this.initEventListeners();
    }

    initEventListeners() {
        this.menuTriger.addEventListener('click', () => {
            this.mainMenuContainer.classList.toggle('mainMenuOpened');
        });
    }
}

class PhotoGallery {
    constructor() {
        this.allComments = [
            
    'Цей кадр нереально крутий! :)',
    'Ти вмієш дивувати! Кожен кадр - поєднання життєлюбності і краси',
    'Спинися мить, прекрасна ти!',
    'Просто супер! Як тобі це вдається?',
    'Це просто шедевр мистецтва',
    'В цьому штучному світі так приємно знайти щось натуральне))',
    'Клас!!!))',
    'Нереально чудово!',
    'А ти вмієш дивувати ;)',
    'Це фото так і проситься в рамочку на стіну']

        
        this.allDescriptions = [
    'Коли радості немає меж',
    'Любов в кожному пікселі',
    'Фото заряджене позитивом',
    'Зловив дзен',
    'Як мало потрібно для щастя',
    'Знали б ви що в мене на умі! ;)',
    'Show must go on',
    'Good vibes only',
    'My inspiration',
    'On my way to paradise',
    'Що це, якщо не любов? Х)'

        ]
    }
    genertePicturesDB() {
        const pictures = [];
        for (let i = 0; i <= number; i++) {
            const comments = [];
            const CommentsCount  =
    }
    showpictures = () {
    
    }
    showCheckedPicture() {
            
    }

}

        


document.addEventListener('DOMContentLoaded', () => {
    new MenuHandler();
});
