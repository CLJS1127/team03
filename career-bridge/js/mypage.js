// 마이페이지 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('마이페이지 로드됨');
});

// 탭 전환
function showTab(tabId, event) {
    if (event) {
        event.preventDefault();
    }

    // 모든 탭 비활성화
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // 모든 네비게이션 비활성화
    document.querySelectorAll('.mypage-nav-item').forEach(nav => {
        nav.classList.remove('active');
    });

    // 선택한 탭 활성화
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // 선택한 네비게이션 활성화
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// 상태별 필터링
function filterStatus(status, button) {
    // 모든 필터 버튼 비활성화
    document.querySelectorAll('.status-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    // 클릭한 버튼 활성화
    button.classList.add('active');

    // 카드 필터링
    const cards = document.querySelectorAll('.application-card');
    cards.forEach(card => {
        if (status === 'all') {
            card.style.display = 'block';
        } else {
            if (card.getAttribute('data-status') === status) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}
