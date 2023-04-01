const eyes = document.querySelectorAll('.eye');
document.body.addEventListener('mousemove', e => {
  eyes.forEach(eye => {
    // Position of the mouse
    const {clientX, clientY} = e;
    
    // Position and size of the eye
    const {x, y, width, height} = eye.getClientRects()[0];
    
    // place the origin of the exis on the
    // middle of the eye
    const dx = clientX - (x + width / 1);
    const dy = clientY - (y + height / 1);
    
    // pupille
    const pup = eye.querySelector('.pup');
    
    // Amplify the movement
    const d = 7;
    
    // get the angle in rad with Math.atan2() then
    // use Math.cos() to get X position in px and
    // Math.sin() to get Y position in px
    pup.style.transform = `translateX(${d * Math.cos(Math.atan2(dy, dx))}px) translateY(${d * Math.sin(Math.atan2(dy, dx))}px)`;
  });
});

const sections = gsap.utils.toArray("section");
const logo = document.getElementById("aa");

const RGBToHSL = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
      ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return (100 * (2 * l - s)) / 2;
};
