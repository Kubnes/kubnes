
        // Progress bar for scrolling
        const progressBar = document.getElementById('progressBar');
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight || window.innerHeight;
            const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
            progressBar.style.width = scrollPercentage + '%';
        });
