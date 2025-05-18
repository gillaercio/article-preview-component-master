// const avatar = document.querySelector('.avatar');
// // const shareBar = document.querySelector('.share-bar');
// const dataAvatar = document.querySelector('.data-avatar');
// const btn = document.querySelector('.share');
// const btnShare = document.querySelector('.btn-share');

// btn.addEventListener('click', function() {
//   avatar.style.backgroundColor = `var(--Very-Dark-Grayish-Blue)`;
//   avatar.style.borderBottomLeftRadius = '20px';
//   avatar.style.borderBottomRightRadius = '20px';
//   dataAvatar.style.display = 'none';
//   btn.style.backgroundColor = `var(--Desaturated-Dark-Blue)`;
// })

let state = true;

function alternar() {
  const avatar = document.querySelector('.avatar');
  const picAvatar = document.querySelector('.pic-avatar');
  const message = document.querySelector('.messageShare');
  const infoAvatar = document.querySelector('.info-avatar');
  const socialIcons = document.querySelector('.social-icons');
  if (window.innerWidth < 992) {
    if (state) {
      avatar.style.backgroundColor = `white`;
      picAvatar.style.display = "block";
      infoAvatar.style.display = "block";
      message.style.display = "none";
      socialIcons.style.display = "none";
    } else {
      avatar.style.backgroundColor = `var(--Very-Dark-Grayish-Blue)`;
      avatar.style.borderBottomLeftRadius = '20px';
      avatar.style.borderBottomRightRadius = '20px';
      picAvatar.style.display = "none";
      infoAvatar.style.display = "none";
      message.style.display = "block";
      socialIcons.style.display = "block";
    }
    state = !state;
  }
}