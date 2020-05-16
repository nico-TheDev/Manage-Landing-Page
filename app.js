const navi = document.querySelector('.mobilenav');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');
const menuIcon = document.querySelector('.open');

closeIcon.style.display = 'none';

menu.addEventListener('click',()=>{

    navi.classList.toggle('openNav');

    if (navi.className.includes('openNav')){
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';

    }
    else{
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    }

});

// SLIDER

const mediaQuery = window.matchMedia('(max-width:950px)');

if (mediaQuery.matches){
    const buttons = document.querySelectorAll('.navBtn');
    const slider = document.querySelector('.slider');
    const sliderItems = document.querySelectorAll('.testimony');
    
    sliderItems.forEach((item,index)=>{
        item.style.left = `${(index * 100) + 50}%`
    });

    /*
    1 - 175% ,300 ,425
    */


    buttons.forEach(btn=>{
        btn.addEventListener('click',moveSlide);
    });

    let movement = [50,175,300,425];
    let count = 0;

    setInterval(()=>{
        if (count >= 4){
            count = 0;
        }
        else{

            sliderItems.forEach(item=>{
                item.style.transform = `translateX(-${movement[count]}%)`;
            });

            buttons.forEach((btn,index)=>{
                if (index !== count){
                    btn.style.backgroundColor = 'white';
                }
                else{
                    buttons[count].classList.add('coloredButton');

                }
            });
            count++;

            console.log(count);
        }

    },5000);

    function moveSlide(){
        //click the button the cards will move 
        buttons.forEach((btn,index)=>{
            btn.addEventListener('click',(e)=>{
                count = index;
                sliderItems.forEach(item=>{
                    item.style.transform = `translateX(-${movement[index]}%)`;
                });

            });

        });



    }
}

