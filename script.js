/**
 * script.js
 * ポートフォリオサイト用の軽量JavaScript
 * - スムーススクロール（ブラウザ互換補完用）
 * - ナビゲーションのアクティブ状態の制御（将来的な拡張用）
 */

document.addEventListener('DOMContentLoaded', () => {
    // スムーススクロールの実装 (Vanilla JS)
    // ※ CSS の scroll-behavior: smooth; がモダンブラウザで効くため補助的に実装
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // hrefが "#" だけの場合はトップへ戻る
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            // IDに基づいてスクロール
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    // ヘッダーの高さ分だけオフセットを確保（約60px）
                    const headerOffset = 60;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 簡易的なフォーム送信時の処理（デフォルトの動作を制御するため）
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Backend(例えばFormspree連携)を設定する前はアラートを出す
            if (contactForm.getAttribute('action') === '#') {
                e.preventDefault();
                alert('Thank you for your message! \n(This is a demo. Please configure a form endpoint to receive messages.)');
            }
        });
    }
});
