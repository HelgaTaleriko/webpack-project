export function readMore() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btnMore = document.getElementById("btnMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnMore.innerHTML = "Читать далее";
    more.style.display = "none";
    btnMore.className = "read-more__btn";
  } else {
    dots.style.display = "none";
    btnMore.innerHTML = "Скрыть";
    more.style.display = "inline";
    btnMore.className = "read-more__btn up";
  }
}
export function upDownBrands() {
  const onOpenClose = document.querySelector('.button__brands')
  const brandsMain = document.querySelector('.brands__more')
  if (brandsMain.clientHeight !== 180) {
    onOpenClose.innerHTML = "Показать все";
    onOpenClose.className = "button__brands"
    brandsMain.className = " brands__more"
  } else {
    onOpenClose.innerHTML = "Скрыть"
    brandsMain.className = " brands__more open-close "
    onOpenClose.className = "button__brands up"
  }
}

export function upDownTech() {
  const onOpenClose = document.querySelector('.button__tech')
  const techMain = document.querySelector('.tech-more')
  if (techMain.clientHeight !== 180) {
    onOpenClose.innerHTML = "Показать все";
    onOpenClose.className = "button__tech"
    techMain.className = " tech-more"
  } else {
    onOpenClose.innerHTML = "Скрыть"
    techMain.className = " tech-more open-close "
    onOpenClose.className = "button__tech up"
  }
}

export function openCallMobile() {
  const callButton = document.querySelector(".mobile-menu__call")
  const call = document.querySelector('.call')
  callButton.addEventListener('click', () => {
    call.classList.add('open');
  });
}

export function openChatMobile() {
  const callButton = document.querySelector(".mobile-menu__chat")
  const call = document.querySelector('.feedback')
  callButton.addEventListener('click', () => {
    call.classList.add('open');
  });
}

export function openCallAboutUs() {
  const callButton = document.querySelector(".menu__btn_call")
  const call = document.querySelector('.call')
  const closeButton = document.querySelector(".call__icon_close")

  callButton.addEventListener('click', () => {
    call.className = "call open";
  });
  closeButton.addEventListener('click', () => {
    call.className = "call";
  });
}

export function openChatAboutUs() {
  const chatButton = document.querySelector(".menu__btn_chat")
  const call = document.querySelector('.feedback')
  const closeButton = document.querySelector(".feedback__icon_close")

  chatButton.addEventListener('click', () => {
    call.className = "feedback open";
  });
  closeButton.addEventListener('click', () => {
    call.className = "feedback";
  });
}
