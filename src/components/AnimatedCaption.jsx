import React, { useEffect, useState } from 'react';

const message = `Designed with feeling. Nikita uses almost 100% natural fibers- silks, organza, silk chiffon, and reworked handcrafted new and vintage Japanese obi belt fabric. Materials hold energy. Nikita will always aim to produce with as little polyester as possible. The first collection was build around reworked Japanese obi belts- not as much as a traditional reference, but a nod to Tokyo’s street fashion culture, where people express themselves unapologetically, mixing beauty with chaos and individuality with excess. That spirit is Nikita. Going forward every collection will source fabrics that match the world we’re launching into. The second collection, being dropped in Ibiza; the materials will reflect it; fluid silks, iridescent finishes that shimmer. Every location informs the materials. Clothing that belong to the place, the mood, and the version of you that shows up there.`;

const lines = message.match(/[^.?!]+[.?!]+/g) || [message]; // Split by sentences

function AnimatedCaption() {
  const [current, setCurrent] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let timeout;
    if (current < lines.length) {
      let i = 0;
      setTyped('');
      function type() {
        setTyped(lines[current].slice(0, i + 1));
        if (i < lines[current].length - 1) {
          i++;
          timeout = setTimeout(type, 18); // typing speed
        }
      }
      type();
    }
    return () => clearTimeout(timeout);
  }, [current]);

  useEffect(() => {
    if (typed === lines[current]) {
      const timer = setTimeout(() => setCurrent((c) => c + 1), 1200); // pause before next
      return () => clearTimeout(timer);
    }
  }, [typed, current]);

 // Only show last four lines
const visibleLines = [];
for (let i = Math.max(0, current - 3); i < current; i++) {
  visibleLines.push(lines[i]);
}
if (typed) visibleLines.push(typed);

  return (
    <div style={{
      width: '600px',
      minHeight: 80,
      fontSize: '2.2rem',
      color: '#ff69b4',
      fontWeight: 700,
      background: 'rgba(255,255,255,0.0)',
      borderRadius: 0,
      padding: '18px 24px',
      boxShadow: 'none',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: 200,
      lineHeight: 1.3,
      position: 'relative'
    }}>
      {visibleLines.map((line, idx) => (
        <div
          key={idx}
          style={{
            opacity: idx === 0 && visibleLines.length === 2 ? 0.6 : 1,
            transform: idx === 0 && visibleLines.length === 2 ? 'translateY(-10px)' : 'none',
            transition: 'opacity 0.4s, transform 0.4s',
            whiteSpace: 'pre-line'
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}

export default AnimatedCaption;