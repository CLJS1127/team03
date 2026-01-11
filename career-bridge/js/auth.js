// 로그인 및 회원가입 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('인증 페이지 로드됨');

    // 로그인 폼
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // 회원가입 폼
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
        initSignupValidation();
    }
});

// 로그인 처리
function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 실제로는 서버에 인증 요청
    console.log('로그인 시도:', email);

    // 데모: 모든 로그인 성공
    setTimeout(() => {
        alert('로그인 성공!');
        location.href = 'mypage.html';
    }, 500);
}

// 회원가입 처리
function handleSignup(e) {
    e.preventDefault();

    // 유효성 검사
    if (!validateSignupForm()) {
        return;
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // 실제로는 서버에 회원가입 요청
    console.log('회원가입 데이터:', data);

    // 성공 모달 표시
    const modal = document.getElementById('signupSuccessModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// 회원가입 유효성 검사 초기화
function initSignupValidation() {
    // 비밀번호 강도 체크
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', checkPasswordStrength);
    }

    // 비밀번호 확인
    const passwordConfirm = document.getElementById('passwordConfirm');
    if (passwordConfirm) {
        passwordConfirm.addEventListener('input', checkPasswordMatch);
    }

    // 전체 동의
    const agreeAll = document.getElementById('agreeAll');
    const agreeItems = document.querySelectorAll('.agree-item');

    if (agreeAll) {
        agreeAll.addEventListener('change', function() {
            agreeItems.forEach(item => {
                item.checked = this.checked;
            });
        });

        agreeItems.forEach(item => {
            item.addEventListener('change', function() {
                const allChecked = Array.from(agreeItems).every(i => i.checked);
                agreeAll.checked = allChecked;
            });
        });
    }

    // 관심 분야 3개 제한
    const interestCheckboxes = document.querySelectorAll('input[name="interest"]');
    interestCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedCount = document.querySelectorAll('input[name="interest"]:checked').length;
            if (checkedCount > 3) {
                this.checked = false;
                alert('관심 분야는 최대 3개까지 선택 가능합니다.');
            }
        });
    });
}

// 비밀번호 강도 체크
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');

    let strength = 0;
    let text = '';
    let color = '';

    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength === 0) {
        text = '비밀번호를 입력하세요';
        color = '#ddd';
    } else if (strength === 1) {
        text = '약함';
        color = '#FF6B6B';
    } else if (strength === 2) {
        text = '보통';
        color = '#FFB84D';
    } else if (strength === 3) {
        text = '강함';
        color = '#50C878';
    } else {
        text = '매우 강함';
        color = '#4A90E2';
    }

    if (strengthFill && strengthText) {
        strengthFill.style.width = (strength * 25) + '%';
        strengthFill.style.backgroundColor = color;
        strengthText.textContent = text;
        strengthText.style.color = color;
    }
}

// 비밀번호 일치 확인
function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const hint = document.getElementById('passwordHint');

    if (passwordConfirm === '') {
        hint.textContent = '';
        hint.style.color = '';
    } else if (password === passwordConfirm) {
        hint.textContent = '✓ 비밀번호가 일치합니다';
        hint.style.color = '#50C878';
    } else {
        hint.textContent = '✗ 비밀번호가 일치하지 않습니다';
        hint.style.color = '#FF6B6B';
    }
}

// 이메일 중복 확인
function checkEmailDuplicate() {
    const email = document.getElementById('email').value;
    const hint = document.getElementById('emailHint');

    if (!email) {
        alert('이메일을 입력해주세요.');
        return;
    }

    if (!validateEmail(email)) {
        alert('올바른 이메일 형식이 아닙니다.');
        return;
    }

    // 실제로는 서버에 중복 체크 요청
    console.log('이메일 중복 확인:', email);

    // 데모: 랜덤으로 사용 가능/불가능
    const isAvailable = Math.random() > 0.3;

    if (isAvailable) {
        hint.textContent = '✓ 사용 가능한 이메일입니다';
        hint.style.color = '#50C878';
    } else {
        hint.textContent = '✗ 이미 사용 중인 이메일입니다';
        hint.style.color = '#FF6B6B';
    }
}

// 회원가입 폼 유효성 검사
function validateSignupForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const phone = document.getElementById('phone').value.trim();
    const agreeTerms = document.querySelector('input[name="agreeTerms"]').checked;
    const agreePrivacy = document.querySelector('input[name="agreePrivacy"]').checked;
    const agreeAge = document.querySelector('input[name="agreeAge"]').checked;

    if (!name) {
        alert('이름을 입력해주세요.');
        return false;
    }

    if (!email || !validateEmail(email)) {
        alert('올바른 이메일을 입력해주세요.');
        return false;
    }

    if (password.length < 8) {
        alert('비밀번호는 8자 이상이어야 합니다.');
        return false;
    }

    if (password !== passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return false;
    }

    if (!phone) {
        alert('전화번호를 입력해주세요.');
        return false;
    }

    if (!agreeTerms || !agreePrivacy || !agreeAge) {
        alert('필수 약관에 동의해주세요.');
        return false;
    }

    return true;
}

// 이메일 유효성 검사
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
