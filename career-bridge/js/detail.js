// 프로그램 상세 페이지 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('상세 페이지 로드됨');

    // 관심 프로그램 토글
    initWishlist();
});

// FAQ 토글
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = element.querySelector('.faq-icon');

    // 현재 열려있는 다른 FAQ 닫기
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem && item.classList.contains('active')) {
            item.classList.remove('active');
            const otherIcon = item.querySelector('.faq-icon');
            if (otherIcon) otherIcon.textContent = '▼';
        }
    });

    // 클릭한 FAQ 토글
    faqItem.classList.toggle('active');

    if (faqItem.classList.contains('active')) {
        icon.textContent = '▲';
    } else {
        icon.textContent = '▼';
    }
}

// 관심 프로그램 토글
function initWishlist() {
    const wishlistBtn = document.getElementById('wishlistBtn');

    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            const icon = this.querySelector('.wishlist-icon');
            const text = this.querySelector('.wishlist-text');

            if (icon.textContent === '♡') {
                icon.textContent = '♥';
                text.textContent = '관심 등록됨';
                this.classList.add('active');
                showNotification('관심 프로그램에 추가되었습니다.', 'success');
            } else {
                icon.textContent = '♡';
                text.textContent = '관심 프로그램';
                this.classList.remove('active');
                showNotification('관심 프로그램에서 제거되었습니다.', 'info');
            }
        });
    }
}

// 링크 복사
function copyLink() {
    const url = window.location.href;

    // 클립보드 API 사용
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            alert('링크가 클립보드에 복사되었습니다!');
        }).catch(err => {
            console.error('복사 실패:', err);
            fallbackCopyLink(url);
        });
    } else {
        fallbackCopyLink(url);
    }
}

// 구형 브라우저용 복사 함수
function fallbackCopyLink(url) {
    const textArea = document.createElement('textarea');
    textArea.value = url;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
        alert('링크가 클립보드에 복사되었습니다!');
    } catch (err) {
        console.error('복사 실패:', err);
        alert('링크 복사에 실패했습니다.');
    }

    document.body.removeChild(textArea);
}
