const SCROLL_ITEM_1 = document.getElementById('item-1');
const SCROLL_ITEM_2 = document.getElementById('item-2');
const SCROLL_ITEM_3 = document.getElementById('item-3');
const SCROLL_ITEM_4 = document.getElementById('item-4');
const SCROLL_ITEM_5 = document.getElementById('item-5');

let activeItem = 1;
let canSwipe = true;

function changeSwipe() {
  canSwipe = false;
  setTimeout(function() {
    canSwipe = true;
  }, 1200);
}

document.getElementById('scroll-item-1').addEventListener('click', function() {
  if (canSwipe) {
    changeSwipe();
    activeItem = 1;
    this.classList.add('active');
    SCROLL_ITEM_1.classList.remove('non-active');
    SCROLL_ITEM_2.classList.remove('non-active');
    SCROLL_ITEM_3.classList.remove('non-active');
    SCROLL_ITEM_4.classList.remove('non-active');
    document.getElementById('scroll-item-2').classList.remove('active');
    document.getElementById('scroll-item-3').classList.remove('active');
    document.getElementById('scroll-item-4').classList.remove('active');
    document.getElementById('scroll-item-5').classList.remove('active');
  }
});

document.getElementById('scroll-item-2').addEventListener('click', function() {
  if (canSwipe) {
    changeSwipe();
    activeItem = 2;
    this.classList.add('active');
    SCROLL_ITEM_1.classList.add('non-active');
    SCROLL_ITEM_3.classList.remove('non-active');
    SCROLL_ITEM_4.classList.remove('non-active');
    SCROLL_ITEM_5.classList.remove('non-active');
    document.getElementById('scroll-item-1').classList.remove('active');
    document.getElementById('scroll-item-3').classList.remove('active');
    document.getElementById('scroll-item-4').classList.remove('active');
    document.getElementById('scroll-item-5').classList.remove('active');
  }
});

document.getElementById('scroll-item-3').addEventListener('click', function() {
  if (canSwipe) {
    changeSwipe();
    activeItem = 3;
    this.classList.add('active');
    SCROLL_ITEM_1.classList.add('non-active');
    SCROLL_ITEM_2.classList.add('non-active');
    SCROLL_ITEM_4.classList.remove('non-active');
    SCROLL_ITEM_5.classList.remove('non-active');
    document.getElementById('scroll-item-1').classList.remove('active');
    document.getElementById('scroll-item-2').classList.remove('active');
    document.getElementById('scroll-item-4').classList.remove('active');
    document.getElementById('scroll-item-5').classList.remove('active');
  }
});

document.getElementById('scroll-item-4').addEventListener('click', function() {
  if (canSwipe) {
    changeSwipe();
    activeItem = 4;
    this.classList.add('active');
    SCROLL_ITEM_1.classList.add('non-active');
    SCROLL_ITEM_2.classList.add('non-active');
    SCROLL_ITEM_3.classList.add('non-active');
    SCROLL_ITEM_5.classList.remove('non-active');
    document.getElementById('scroll-item-1').classList.remove('active');
    document.getElementById('scroll-item-2').classList.remove('active');
    document.getElementById('scroll-item-3').classList.remove('active');
    document.getElementById('scroll-item-5').classList.remove('active');
  }
});

document.getElementById('scroll-item-5').addEventListener('click', function() {
  if (canSwipe) {
    changeSwipe();
    activeItem = 5;
    this.classList.add('active');
    SCROLL_ITEM_1.classList.add('non-active');
    SCROLL_ITEM_2.classList.add('non-active');
    SCROLL_ITEM_3.classList.add('non-active');
    SCROLL_ITEM_4.classList.add('non-active');
    document.getElementById('scroll-item-1').classList.remove('active');
    document.getElementById('scroll-item-2').classList.remove('active');
    document.getElementById('scroll-item-3').classList.remove('active');
    document.getElementById('scroll-item-4').classList.remove('active');
  }
});

document.addEventListener('wheel', function(event) {
  if (event.deltaY < 0) {
    const item = document.getElementById(`item-${activeItem-1}`);
    if (activeItem > 1 && canSwipe) {
      changeSwipe();
      document.getElementById(`scroll-item-${activeItem}`).classList.remove('active');
      document.getElementById(`scroll-item-${activeItem-1}`).classList.add('active');
      activeItem = activeItem - 1;
      item.classList.remove('non-active');
    }
  } else {
    const item = document.getElementById(`item-${activeItem}`);
    if (activeItem < 5 && canSwipe) {
      changeSwipe();
      document.getElementById(`scroll-item-${activeItem}`).classList.remove('active');
      document.getElementById(`scroll-item-${activeItem+1}`).classList.add('active');
      activeItem = activeItem + 1;
      item.classList.add('non-active');
    }
  }
});