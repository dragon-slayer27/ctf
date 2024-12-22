const riddleInput = document.querySelector('.riddle-input');
const messageElement = document.getElementById('message');

const config = {
    correctAnswer: "DJI 100",
    redirectPage: "https://www.example.com/",
    successDelay: 2000,
    errorMessageDuration: 3000
};

function showMessage(text, isSuccess) {
    messageElement.textContent = text;
    messageElement.className = `message ${isSuccess ? 'success' : 'error'} visible`;
    
    if (!isSuccess) {
        riddleInput.classList.add('error');
    } else {
        riddleInput.classList.remove('error');
    }
}

function hideMessage() {
    messageElement.className = 'message';
    riddleInput.classList.remove('error');
}

function checkAnswer(userAnswer) {
    if (userAnswer.toLowerCase().trim() === config.correctAnswer.toLowerCase()) {
        showMessage("Great work!", true);
        setTimeout(() => {
            window.location.href = config.redirectPage;
        }, config.successDelay);
        return true;
    } else {
        showMessage("Try again!", false);
        setTimeout(hideMessage, config.errorMessageDuration);
        return false;
    }
}

riddleInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer(e.target.value);
    }
});

riddleInput.addEventListener('input', () => {
    hideMessage();
});