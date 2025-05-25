let state = true;

function alternar() {
  const elementos = {
    shareBar: document.querySelector('.share-bar'),
    avatar: document.querySelector('.avatar'),
    picAvatar: document.querySelector('.pic-avatar'),
    messageShare: document.querySelector('.messageShare'),
    messageBar: document.querySelector('.messageBar'),
    infoAvatar: document.querySelector('.info-avatar'),
    socialIcons: document.querySelector('.social-icons'),
    socialIconsBar: document.querySelector('.social-icons-bar'),
    share: document.querySelector('.share'),
    btnShare: document.querySelector('.btn-share'),
    ftImg: document.querySelector('#feature-img')
  };

  const ajustes = {
    pequeno: {
      avatarBg: state ? "white" : "var(--Very-Dark-Grayish-Blue)",
      avatarBorderBottomLeftRadius: "20px",
      avatarBorderBottomRightRadius: "20px",
      ftImgSize: "210px",
      picAvatarDisplay: state ? "block" : "none",
      infoAvatarDisplay: state ? "grid" : "none",
      messageShareDisplay: state ? "none" : "block",
      socialIconsDisplay: state ? "none" : "grid",
      btnShareBg: state ? "var(--Light-Grayish-Blue)" : "var(--Desaturated-Dark-Blue)",
      shareImg: state ? "../images/forward_icon-share.png" : "../images/forward_icon-share-active2.png",
      btnShareOpacity: state ? "1" : ".5",
      shareBarDisplay: "none"
    },
    medio: {
      messageShareDisplay: "none",
      messageBarDisplay: state ? "none" : "block",
      socialIconsBarDisplay: state ? "none" : "block",
      ftImgHeight: state ? "424px" : "498px",
      shareBarDisplay: state ? "none" : "grid"
    },
    grande: {
      messageShareDisplay: "none",
      messageBarDisplay: state ? "none" : "block",
      socialIconsBarDisplay: state ? "none" : "block",
      ftImgHeight: state ? "478px" : "498px",
      shareBarDisplay: state ? "none" : "grid"
    }
  };

  const aplicarAjustes = config => {
    elementos.avatar.style.backgroundColor = config.avatarBg || elementos.avatar.style.backgroundColor;
    elementos.avatar.style.borderBottomLeftRadius = config.avatarBorderBottomLeftRadius || elementos.avatar.style.borderBottomLeftRadius;
    elementos.avatar.style.borderBottomRightRadius = config.avatarBorderBottomRightRadius || elementos.avatar.style.borderBottomRightRadius;
    elementos.ftImg.style.height = config.ftImgHeight || config.ftImgSize;
    elementos.picAvatar.style.display = config.picAvatarDisplay;
    elementos.infoAvatar.style.display = config.infoAvatarDisplay;
    elementos.messageShare.style.display = config.messageShareDisplay;
    elementos.messageBar.style.display = config.messageBarDisplay;
    elementos.socialIcons.style.display = config.socialIconsDisplay || elementos.socialIcons.style.display;
    elementos.socialIconsBar.style.display = config.socialIconsBarDisplay;
    elementos.btnShare.style.backgroundColor = config.btnShareBg || elementos.btnShare.style.backgroundColor;
    elementos.share.style.backgroundImage = `url('${config.shareImg}')`;
    elementos.btnShare.style.opacity = config.btnShareOpacity;
    elementos.shareBar.style.display = config.shareBarDisplay;
  };

  if (window.innerWidth < 992) {
    aplicarAjustes(ajustes.pequeno);
  } else if (window.innerWidth < 1201) {
    aplicarAjustes(ajustes.medio);
  } else {
    aplicarAjustes(ajustes.grande);
  }

  state = !state;
}