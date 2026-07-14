const fs = require('fs');

let stars1 = [];
for(let i=0; i<300; i++) {
  stars1.push(`${Math.floor(Math.random()*2000)}px ${Math.floor(Math.random()*2000)}px #FFF`);
}
let stars2 = [];
for(let i=0; i<150; i++) {
  stars2.push(`${Math.floor(Math.random()*2000)}px ${Math.floor(Math.random()*2000)}px #FFF`);
}
let stars3 = [];
for(let i=0; i<50; i++) {
  stars3.push(`${Math.floor(Math.random()*2000)}px ${Math.floor(Math.random()*2000)}px #FFF`);
}

const css = `

/* Space animations */
.stars, .stars2, .stars3 {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%; height: 100%;
  z-index: 0;
  overflow: hidden;
}

.stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${stars1.join(', ')};
  animation: animStar 50s linear infinite;
}
.stars:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${stars1.join(', ')};
}

.stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${stars2.join(', ')};
  animation: animStar 100s linear infinite;
}
.stars2:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${stars2.join(', ')};
}

.stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${stars3.join(', ')};
  animation: animStar 150s linear infinite;
}
.stars3:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${stars3.join(', ')};
}

@keyframes animStar {
  from { transform: translateY(0px); }
  to { transform: translateY(-2000px); }
}

/* High Conversion Lead Capture */
.hero-lead-capture {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.lead-form {
  display: flex;
  gap: 0.5rem;
  background: rgba(255,255,255,0.05);
  padding: 0.5rem;
  border-radius: 50px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 500px;
}

.lead-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 0.8rem 1.5rem;
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
}

.lead-input::placeholder {
  color: rgba(255,255,255,0.5);
}

.pulse-btn {
  border-radius: 40px;
  padding: 0.8rem 2rem;
  animation: pulse-glow-btn 2s infinite;
}

@keyframes pulse-glow-btn {
  0% { box-shadow: 0 0 0 0 rgba(0, 102, 255, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(0, 102, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 102, 255, 0); }
}

.hero-trust {
  font-size: 0.9rem;
  color: var(--text-secondary);
  letter-spacing: 1px;
  text-transform: uppercase;
}
`;

fs.appendFileSync('src/components/Hero.css', css);
