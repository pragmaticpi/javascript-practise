const buttons = document.querySelectorAll('.btn-crazy');

function moveButtons() {
    const topOffset = Math.random() * (window.innerHeight - this.clientHeight);
    const leftOffset = Math.random() * (window.innerWidth - this.clientWidth);

    console.log(topOffset);
    console.log(leftOffset);

    this.style.top = topOffset + 'px';
    this.style.left = leftOffset + 'px';
}

buttons.forEach((button) => button.addEventListener('mouseenter', moveButtons));