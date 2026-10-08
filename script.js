const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12));

// Scroll to sections without leaving #home, #pass or #download in the URL.
const cleanHash = () => {
  window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
};
if (window.location.hash) cleanHash();
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    event.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
    cleanHash();
  });
});

// Use the icon image files supplied in public/.
document.querySelectorAll('.steam-icon').forEach((icon) => {
  icon.innerHTML = '<img src="public/steam-logo-icon-7.png" alt="Steam">';
});
document.querySelectorAll('.social a:first-child').forEach((link) => {
  link.innerHTML = '<img src="https://cdn.simpleicons.org/discord/5865F2" alt="Discord">';
});
document.querySelectorAll('.social a:last-child').forEach((link) => {
  link.innerHTML = '<img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook">';
});
const discordUrl = 'https://discord.gg/zUWVpYAQM5';
const facebookUrl = 'https://www.facebook.com/profile.php?id=61583145381608';
document.querySelectorAll('.social a:first-child, .button.discord').forEach((link) => {
  link.href = discordUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelectorAll('.social a:last-child').forEach((link) => {
  link.href = facebookUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelectorAll('.button.discord').forEach((link) => {
  link.innerHTML = '<img src="https://cdn.simpleicons.org/discord/5865F2" alt="Discord"> Tham gia Discord';
});

const iconPolish = document.createElement('style');
iconPolish.textContent = `
  body { background: #07111d url('public/bg.png') center top / cover fixed no-repeat; }
  .site-header { width: 100%; padding-left: max(24px, calc((100% - 1160px) / 2)); padding-right: max(24px, calc((100% - 1160px) / 2)); background: #091522; border-bottom: 1px solid rgba(68, 126, 167, .14); }
  .hero { min-height: 390px; background: linear-gradient(90deg, rgba(5, 14, 25, .9), rgba(7, 17, 29, .76), rgba(5, 14, 25, .9)), url('public/hero.png') center center / cover no-repeat; }
  .hero-grid { display: none; }
  .hero-content { padding: 58px 0 72px; }
  .hero .eyebrow, .hero h1 { display: none; }
  .hero p { margin: 24px 0 29px; color: #e4ebf3; font-size: 13px; line-height: 1.8; }
  .hero-logo { font-size: 35px; }
  .hero-logo .steam-icon.large { width: 56px; height: 56px; }
  .hero-logo .steam-icon.large i { font-size: 35px; }
  .hero .button { font-size: 14px; padding: 14px 23px; }
  .hero-note { display: none; }
  .pass { background: transparent; }
  .pass-banner.image-pass-banner { padding: 0; border: 0; background: transparent; box-shadow: none; overflow: hidden; }
  .pass-banner.image-pass-banner img { display: block; width: 100%; height: auto; border-radius: 7px; }
  .app-window.preview-image { padding: 0; overflow: hidden; background: transparent; }
  .app-window.preview-image img { display: block; width: 100%; height: auto; }
  .showcase { align-items: start; }
  .pass > .container { width: min(1160px, calc(100% - 48px)); }
  .showcase { grid-template-columns: minmax(0, 2.55fr) minmax(280px, 1fr); grid-template-rows: auto auto; gap: 18px; }
  .app-window.preview-image { grid-column: 1; grid-row: 1 / span 2; border-radius: 11px; }
  .app-info { grid-column: 2; grid-row: 1; min-height: 500px; padding: 30px 30px 26px; border-radius: 19px; background: rgba(5, 12, 20, .9); }
  .app-info h3 { font-size: 30px; letter-spacing: .2px; white-space: nowrap; }
  .app-info .muted { margin: 4px 0 27px; padding-bottom: 22px; border-bottom: 2px solid rgba(215, 223, 231, .78); color: #d4dbe2; font-size: 15px; }
  .info-list { border-top: 0; padding-top: 0; }
  .info-list p { margin-bottom: 19px; color: #c4cbd2; font-size: 12px; line-height: 1.55; }
  .info-list b { color: #c4cbd2; font-weight: 400; }
  .showcase-download-link { grid-column: 2; grid-row: 2; display: flex; align-items: center; min-height: 66px; margin: 0; padding: 0 20px; border: 1px solid #1676be; border-radius: 12px; background: #0c1825; color: #46b5ff; }
  @media (max-width: 760px) {
    .site-header { width: 100%; padding-left: 15px; padding-right: 15px; }
    .pass > .container { width: calc(100% - 30px); }
    .showcase { display: flex; flex-direction: column; }
    .app-window.preview-image, .app-info, .showcase-download-link { width: 100%; }
    .app-info { min-height: 0; padding: 26px 22px 20px; }
    .app-info h3 { font-size: 27px; }
    .showcase-download-link { min-height: 58px; }
  }
  .steam-icon { width: 34px; height: 34px; overflow: hidden; background: transparent; box-shadow: none; }
  .steam-icon img { width: 100%; height: 100%; object-fit: contain; }
  .steam-icon.large { width: 58px; height: 58px; }
  .steam-icon.large img { width: 100%; height: 100%; }
  .social { gap: 18px; }
  .social a { width: 44px; height: 44px; border-radius: 50%; background: transparent; }
  .social a:hover { transform: translateY(-2px); background: rgba(30, 74, 111, .35); }
  .social a img { width: 36px; height: 36px; object-fit: contain; }
  .social a:first-child img { mix-blend-mode: normal; }
  .social a:last-child img { width: 36px; height: 36px; }
  .button.discord img { width: 18px; height: 18px; object-fit: contain; mix-blend-mode: normal; }
  footer.design-footer { padding: 0; background: #111827; border-top: 1px solid rgba(148, 163, 184, .08); }
  .design-footer-inner { min-height: 94px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; color: #8b98aa; text-align: center; }
  .design-footer-inner p { margin: 0; font-size: 10px; line-height: 1.4; }
  .design-footer-inner p:last-child { color: #aeb8c5; }
  .download-count { min-height: 24px; margin: 16px auto 0; padding: 0; background: transparent; color: #dcecf8; font-size: 15px; font-weight: 600; letter-spacing: .1px; text-align: center; text-shadow: 0 2px 12px rgba(0, 0, 0, .45); }
  .download-count strong { margin: 0 4px; color: #61c5ff; font-size: 21px; font-weight: 800; }
`;
document.head.appendChild(iconPolish);

// Use the supplied design assets for the pass banner and the app preview.
const passBanner = document.querySelector('.pass-banner');
if (passBanner) {
  passBanner.innerHTML = '<img src="public/pass.png" alt="Steam Game Pass - 49.000đ và 99.000đ mỗi tháng">';
  passBanner.classList.add('image-pass-banner');
}

const preview = document.querySelector('.app-window');
if (preview) {
  preview.innerHTML = '<img src="public/preview.png" alt="Giao diện Steam Box App">';
  preview.classList.add('preview-image');
}

const infoList = document.querySelector('.app-info .info-list');
if (infoList) {
  infoList.innerHTML = `
    <p><b>Tên sản phẩm:</b> Steam Box</p>
    <p><b>Hệ điều hành:</b> Win 10 / Win 11</p>
    <p><b>Số phiên bản:</b> 3.38454.000</p>
    <p><b>Cập nhập ngày:</b> 28/10/2025</p>
    <p><b>Nhà phát triển:</b> Cty TNHH Công Nghệ ShunWang</p>
  `;
}

const showcase = document.querySelector('.showcase');
const downloadLink = document.querySelector('.app-info .download-link');
if (showcase && downloadLink) {
  showcase.appendChild(downloadLink);
  downloadLink.classList.add('showcase-download-link');
}

const footer = document.querySelector('footer');
if (footer) {
  footer.classList.add('design-footer');
  footer.innerHTML = `
    <div class="container design-footer-inner">
      <p>© 2025 Steambox. Đã đăng ký bản quyền.</p>
      <p>Nền tảng cho thuê và mua game Steambox hàng đầu Việt Nam.</p>
    </div>
  `;
}

document.querySelectorAll('.button.primary, .download-link, .download-card a').forEach((downloadButton) => {
  downloadButton.href = './download.php';
  downloadButton.removeAttribute('download');
});

// The download section can be removed from the page without breaking these CTAs.
document.querySelectorAll('a[href="#download"]').forEach((downloadButton) => {
  downloadButton.href = './download.php';
  downloadButton.removeAttribute('download');
});

const downloadCount = document.createElement('div');
downloadCount.className = 'download-count';
downloadCount.innerHTML = 'Đã tải&nbsp;<strong>...</strong>&nbsp;lượt';
document.querySelector('.actions')?.after(downloadCount);
fetch('./download-count.php', { cache: 'no-store' })
  .then((response) => response.ok ? response.json() : Promise.reject(response.status))
  .then((data) => {
  downloadCount.innerHTML = data.downloads === null
      ? 'Lượt tải đang được cập nhật'
      : `Đã tải&nbsp;<strong>${Number(data.downloads).toLocaleString('vi-VN')}</strong>&nbsp;lượt`;
  })
  .catch(() => {
    downloadCount.innerHTML = 'Lượt tải đang cập nhật';
  });
