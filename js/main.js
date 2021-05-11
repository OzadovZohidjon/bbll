$('.header_slider').slick({
    dots: true,
    arrows: true,
    speed: 300
});

// HIDE TEXT START

const hideLink = document.querySelectorAll('.content_link');
const hideTexts = document.querySelectorAll('.hide_text');

hideLink.forEach((el) => {
    el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            hideTexts.forEach(element => {
                element.classList.remove('active');
            });

            el.innerHTML = 'Читать подробнее';
        } else {
            el.classList.add('active');
            hideTexts.forEach(element => {
                element.classList.add('active');
            });

            el.innerHTML = 'Свернуть';

        }
    })
})



// HIDE TEXT END

// Accardion start


const acc = document.querySelectorAll('.item_head');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('acc_active');

        var panel = this.nextElementSibling;
        console.log(panel)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.marginTop = '0px';

        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.style.marginTop = '35px';

        }

        var icon = this.children[0].children[0];

        if (this.classList.contains('acc_active')) {
            icon.style.transform = 'rotate(90deg)';
        }
        else {
            icon.style.transform = 'rotate(360deg)';
        }
    })
}

// Accordion end

// Img Settings start

const imgContainers = document.querySelectorAll('#img_container');

imgContainers.forEach((el) => {
    $(function () {
        $(el).twentytwenty({
            no_overlay: true,
        });
    });
})



// Img Settings end

// Slider two start

$('.section_three-slider').slick({
    dots: true,
    arrows: true,
    speed: 300,
    draggable: false,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                draggable: false,
            }
        },
        {
            breakpoint: 760,
            settings: {
                draggable: false,
            }
        }
    ]
});

// Slider two end

// Slider three start

$('.section_four-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
});

if (window.screen.width <= 567) {
    document.querySelector('.section_three-boxes').classList.remove('section_three-slider--two');
} else {
    document.querySelector('.section_three-boxes').classList.add('section_three-slider--two');
}


$('.section_three-slider--two').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: false,
    speed: 300,
    arrows: true,
    responsive: [
        {
            breakpoint: 790,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        }
    ]
});

// Slider three end

// Slider four start

$('.block_slider').slick({
    arrows: true,
    speed: 300
});

// Slider four end

// Slider five start

$('.slider_block').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
});

// Slider five end

// Slider six start

$('.section_eight-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
});

// Slider six end

// Slider seven start

$('.section_nine-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
});

// Slider seven end

// Modals Start

const bioModalOpenBtn = document.querySelectorAll('.slider_item-btn');
const bioModal = document.querySelector('.modal-three');
const formModal = document.querySelector('.modal');
const bioModalCloseBtn = document.querySelector('.bio-modal-close-btn');
const formModalCloseBtn = document.querySelectorAll('.form-modal-close-btn');
const formModalOpenBtn = document.querySelectorAll('.form-modal-open-btn');
const secondModalOpenBtn = document.querySelectorAll('.second-modal-open-btn');
const secondModalCloseBtn = document.querySelectorAll('.second-modal-close-btn');
const secondModal = document.querySelector('.modal-two');
const doctorInfoOpenBtn = document.querySelectorAll('.doctor-info-open-btn');
const reviewsModalOpenBtn = document.querySelectorAll('.reviews-modal-open-btn');
const reviewsModalCloseBtn = document.querySelector('.reviews-modal-close-btn');
const reviewsModal = document.querySelector('.modal-four');

if (window.screen.width > 576) {
    bioModalOpenBtn.forEach(el => {
        el.addEventListener('click', () => {
            bioModal.classList.add('active');
        })
    })
};

if (window.screen.width < 576) {
    doctorInfoOpenBtn.forEach((el) => {
        el.addEventListener('click', () => {

            if (!el.classList.contains('active')) {
                el.classList.add('active');
                el.nextElementSibling.classList.add('active');

                document.querySelector('.section_seven-blocks .slider_block .slick-next').style.top = '-3%';
                document.querySelector('.section_seven-blocks .slider_block .slick-prev').style.top = '-3%';
            } else {
                el.classList.remove('active');
                el.nextElementSibling.classList.remove('active');

                document.querySelector('.section_seven-blocks .slider_block .slick-next').style.top = '-12%';
                document.querySelector('.section_seven-blocks .slider_block .slick-prev').style.top = '-12%';
            }

        })
    })
}




bioModalCloseBtn.addEventListener('click', () => {
    bioModal.classList.remove('active');
})

formModalOpenBtn.forEach(el => {
    el.addEventListener('click', () => {
        bioModal.classList.remove('active');
        formModal.classList.add('active');

    })
})



formModalCloseBtn.forEach(el => {
    el.addEventListener('click', () => {
        formModal.classList.remove('active');
    })
})

secondModalOpenBtn.forEach(el => {
    el.addEventListener('click', () => {
        secondModal.classList.add('active');
        bioModal.classList.remove('active');

    })
})


secondModalCloseBtn.forEach(el => {
    el.addEventListener('click', () => {
        secondModal.classList.remove('active');
    })
})

reviewsModalOpenBtn.forEach(el => {
    el.addEventListener('click', () => {
        reviewsModal.classList.add('active');
    })
})


reviewsModalCloseBtn.addEventListener('click', () => {
    reviewsModal.classList.remove('active');
})


if (window.screen.width < 576) {
    document.querySelectorAll('.section_nine-blocks .block_left-item .item_text p').forEach(el => {
        el.innerHTML = 'Я долго мучилась проблемой сосудистой сетки на щеках и крыльях носа. Оказалось, что избавиться от неё очень просто. Врач Панчук Инна Николаевна, объяснила мне разницу между ними и рассказала оптимальные методы устранения этих недостатков. Мы использовали BBL, и за 2 коротких сеанса удалили все патологически расширенные сосуды. Теперь сосуды на лице не нужно замазывать, идеально!'
    })
}

// Modals End
