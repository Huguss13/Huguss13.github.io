document.addEventListener('DOMContentLoaded', () => {

    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    window.responder = function(isCorrect) {
        if (isCorrect) {
            let score = parseInt(localStorage.getItem('score'));
            score++;
            localStorage.setItem('score', score);
        }

        
        if (window.location.pathname.includes('pergunta6.html')) {
            
            window.location.href = 'result.html';
        } else {
            
            nextQuestion();
        }
    }

    function nextQuestion() {
        
        const totalQuestions = 6; 
        let currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;
        currentQuestionIndex++;

        if (currentQuestionIndex <= totalQuestions) {
            localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
            
            window.location.href = `pergunta${currentQuestionIndex}.html`; 
        } else {
            
            window.location.href = 'result.html';
        }
    }

    
    if (window.location.pathname.includes('result.html')) {
        const resultElement = document.getElementById('resultado');
        const finalScore = localStorage.getItem('score');
        const totalQuestions = 6; 
        if (resultElement) {
            resultElement.innerHTML = `Você acertou: <br/> ${finalScore} de ${totalQuestions} perguntas!`;
        }
        
        localStorage.removeItem('score');
        localStorage.removeItem('currentQuestionIndex');
    }
});
