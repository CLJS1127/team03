// CareerBridge 메인 JavaScript

console.log('🌉 CareerBridge 웹사이트가 로드되었습니다!');

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('페이지 초기화 중...');

    // 부드러운 스크롤
    initSmoothScroll();

    // 검색 기능
    initSearchBox();

    // 필터 초기화 버튼
    initFilterReset();
});

// 부드러운 스크롤
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// 검색 기능
function initSearchBox() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.btn-search');

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput ? searchInput.value : '';
            if (query.trim()) {
                alert(`"${query}" 검색 기능은 준비 중입니다!`);
            } else {
                alert('검색어를 입력해주세요.');
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
}

// 필터 초기화
function initFilterReset() {
    const resetBtn = document.querySelector('.filters-sidebar .btn-block');

    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            // 모든 체크박스 초기화
            document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = false;
            });

            // 첫 번째 라디오 버튼 선택
            const firstRadio = document.querySelector('.filters-sidebar input[type="radio"]');
            if (firstRadio) {
                firstRadio.checked = true;
            }

            alert('필터가 초기화되었습니다.');
        });
    }
}

// 알림 표시 함수
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#50C878' : '#4A90E2'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 애니메이션 스타일 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
