let state = true;

function alternar() {
  const avatar = document.querySelector('.avatar');
  const picAvatar = document.querySelector('.pic-avatar');
  const message = document.querySelector('.messageShare');
  const infoAvatar = document.querySelector('.info-avatar');
  const socialIcons = document.querySelector('.social-icons');
  const share = document.querySelector('.share');
  const btnShare = document.querySelector('.btn-share');

  if (window.innerWidth < 992) {
    if (state) {
      avatar.style.backgroundColor = `white`;
      avatar.style.borderBottomLeftRadius = '20px';
      avatar.style.borderBottomRightRadius = '20px';
      picAvatar.style.display = "block";
      infoAvatar.style.display = "grid";
      message.style.display = "none";
      socialIcons.style.display = "none";
      btnShare.style.backgroundColor = `var(--Light-Grayish-Blue)`;
      share.style.backgroundImage = `url('../images/forward_icon-share.png')`;
      btnShare.style.opacity = '1';
    } else {
      avatar.style.backgroundColor = `var(--Very-Dark-Grayish-Blue)`;
      avatar.style.borderBottomLeftRadius = '20px';
      avatar.style.borderBottomRightRadius = '20px';
      picAvatar.style.display = "none";
      infoAvatar.style.display = "none";
      message.style.display = "block";
      socialIcons.style.display = "block";
      btnShare.style.backgroundColor = `var(--Desaturated-Dark-Blue)`;
      share.style.backgroundImage = `url('../images/forward_icon-share-active2.png')`;
      btnShare.style.opacity = '.5';
    }
    state = !state;
  }
}