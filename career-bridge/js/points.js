// 포인트 충전 JavaScript

let currentBalance = 100; // 현재 보유 포인트
let selectedPackageData = null;

document.addEventListener('DOMContentLoaded', function() {
    console.log('포인트 충전 페이지 로드됨');

    // 약관 동의 체크박스
    const agreeCheckbox = document.getElementById('agreeTerms');
    if (agreeCheckbox) {
        agreeCheckbox.addEventListener('change', updatePaymentButton);
    }
});

// 패키지 선택
function selectPackage(id, price, stars, element) {
    // 모든 패키지 카드 선택 해제
    document.querySelectorAll('.package-card').forEach(card => {
        card.classList.remove('selected');
    });

    // 선택한 카드 활성화
    element.classList.add('selected');

    // 패키지 데이터 저장
    const baseStars = Math.floor(price / 100);
    const bonus = stars - baseStars;

    selectedPackageData = {
        id: id,
        price: price,
        baseStars: baseStars,
        bonus: bonus,
        totalStars: stars
    };

    // UI 업데이트
    updatePaymentSummary();
    updatePaymentButton();
}

// 결제 정보 업데이트
function updatePaymentSummary() {
    if (!selectedPackageData) return;

    document.getElementById('selectedPackage').textContent = `패키지 ${selectedPackageData.id}`;
    document.getElementById('selectedStars').textContent = `${selectedPackageData.baseStars}개`;
    document.getElementById('bonusStars').textContent = `+${selectedPackageData.bonus}개`;
    document.getElementById('totalStars').textContent = `⭐ ${selectedPackageData.totalStars}개`;
    document.getElementById('totalPrice').textContent = `${selectedPackageData.price.toLocaleString()}원`;
}

// 결제 버튼 상태 업데이트
function updatePaymentButton() {
    const paymentBtn = document.getElementById('paymentBtn');
    const agreeCheckbox = document.getElementById('agreeTerms');

    if (selectedPackageData && agreeCheckbox && agreeCheckbox.checked) {
        paymentBtn.disabled = false;
        paymentBtn.textContent = `${selectedPackageData.price.toLocaleString()}원 결제하기`;
        paymentBtn.style.background = '#7BA882';
    } else if (selectedPackageData) {
        paymentBtn.disabled = true;
        paymentBtn.textContent = '약관에 동의해주세요';
        paymentBtn.style.background = '#ccc';
    } else {
        paymentBtn.disabled = true;
        paymentBtn.textContent = '패키지를 선택하세요';
        paymentBtn.style.background = '#ccc';
    }
}

// 결제 처리
function processPayment() {
    if (!selectedPackageData) {
        alert('패키지를 선택해주세요.');
        return;
    }

    const agreeCheckbox = document.getElementById('agreeTerms');
    if (!agreeCheckbox || !agreeCheckbox.checked) {
        alert('결제 진행에 동의해주세요.');
        return;
    }

    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (!paymentMethod) {
        alert('결제 방법을 선택해주세요.');
        return;
    }

    // 실제로는 PG사 결제 연동
    console.log('결제 처리:', {
        package: selectedPackageData,
        method: paymentMethod.value
    });

    // 데모: 결제 성공 시뮬레이션
    setTimeout(() => {
        // 포인트 추가
        currentBalance += selectedPackageData.totalStars;

        // 모달 업데이트
        document.getElementById('chargedStars').textContent = selectedPackageData.totalStars;
        document.getElementById('newBalance').textContent = currentBalance;

        // UI 업데이트
        document.getElementById('currentPoints').textContent = currentBalance;
        document.getElementById('displayPoints').textContent = currentBalance;

        // 성공 모달 표시
        document.getElementById('paymentSuccessModal').style.display = 'flex';

        // 선택 초기화
        document.querySelectorAll('.package-card').forEach(card => {
            card.classList.remove('selected');
        });
        selectedPackageData = null;

        // 체크박스 초기화
        if (agreeCheckbox) {
            agreeCheckbox.checked = false;
        }

        // 결제 정보 초기화
        resetPaymentSummary();
    }, 1000);
}

// 결제 정보 초기화
function resetPaymentSummary() {
    document.getElementById('selectedPackage').textContent = '선택 안 함';
    document.getElementById('selectedStars').textContent = '0개';
    document.getElementById('bonusStars').textContent = '+0개';
    document.getElementById('totalStars').textContent = '⭐ 0개';
    document.getElementById('totalPrice').textContent = '0원';

    const paymentBtn = document.getElementById('paymentBtn');
    paymentBtn.disabled = true;
    paymentBtn.textContent = '패키지를 선택하세요';
    paymentBtn.style.background = '#ccc';
}

// 모달 닫기
function closeModal() {
    document.getElementById('paymentSuccessModal').style.display = 'none';
}
