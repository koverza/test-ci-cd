export function speedLine() {
  console.log('speedLine works');
  const marquee = document.getElementById('marquee');

  let textWidth = marquee.offsetWidth;
  let containerWidth = marquee.parentElement.offsetWidth;

  let speed = 4;

  let currentPosition = containerWidth;

  function animateMarquee() {
    currentPosition -= speed;

    if (currentPosition < -textWidth) {
      currentPosition = containerWidth;
    }

    marquee.style.transform = `translateX(${currentPosition}px)`;

    requestAnimationFrame(animateMarquee);
  }

  window.addEventListener('resize', () => {
    textWidth = marquee.offsetWidth;
    containerWidth = marquee.parentElement.offsetWidth;
  });

  animateMarquee();
}
