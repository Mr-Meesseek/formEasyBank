let currentStep = 0;
        const steps = document.querySelectorAll('.step');
        const questions = document.querySelectorAll('.folder');

        function updateSteps() {
            steps.forEach((step, index) => {
                step.classList.toggle('active', index === currentStep);
            });
        }

        function showQuestion() {
            questions.forEach((q, index) => {
                if (index === currentStep) {
                    q.classList.add('active');
                    q.classList.remove('answered');
                } else if (index < currentStep) {
                    q.classList.add('answered');
                    q.classList.remove('active');
                    // Calculate the stack offset based on the folder's position in the stack
                    q.style.setProperty('--index', currentStep - index);
                } else {
                    q.classList.remove('active', 'answered');
                }
            });
            updateSteps();
        }

        function nextQuestion() {
            if (currentStep < questions.length - 1) {
                currentStep++;
                showQuestion();
            }
        }

        function prevQuestion() {
            if (currentStep > 0) {
                currentStep--;
                showQuestion();
            }
        }

        showQuestion();