document.addEventListener('mousemove', function (e) {
    const ball = document.querySelector('.ball');
    const cursorDot = document.querySelector('.cursor-dot');
    const x = e.clientX;
    const y = e.clientY;

    console.log(`x: ${x}, y: ${y}`);

    if (ball && cursorDot) {
        console.log(`Ball position: ${x - ball.offsetWidth / 2}px, ${y - ball.offsetHeight / 2}px`);
        console.log(`Cursor Dot position: ${x - cursorDot.offsetWidth / 2}px, ${y - cursorDot.offsetHeight / 2}px`);

        ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${y - ball.offsetHeight / 2}px)`;
        cursorDot.style.transform = `translate(${x - cursorDot.offsetWidth / 2}px, ${y - cursorDot.offsetHeight / 2}px)`;
    }
});
