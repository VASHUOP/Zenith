import React from 'react';
import './SolarSystem.css';
import { MonitorSmartphone, Megaphone, UserPlus, TrendingUp, Video } from 'lucide-react';

const planets = [
  { icon: MonitorSmartphone, label: 'Web Dev', color: '#0066FF', size: 56, orbitSize: 160, speed: 25 },
  { icon: Megaphone, label: 'Meta Ads', color: '#3B82F6', size: 50, orbitSize: 240, speed: 35 },
  { icon: UserPlus, label: 'Leads', color: '#6366F1', size: 44, orbitSize: 320, speed: 45 },
  { icon: TrendingUp, label: 'Sales', color: '#8B5CF6', size: 40, orbitSize: 400, speed: 55 },
  { icon: Video, label: 'Video', color: '#EC4899', size: 36, orbitSize: 480, speed: 65 },
];

export default function SolarSystem() {
  return (
    <section className="solar-section">
      <div className="solar-container">
        {/* Central sun */}
        <div className="solar-sun">
          <div className="solar-sun-core">
            <span className="solar-sun-text">ZD</span>
          </div>
          <div className="solar-sun-ring solar-sun-ring--1"></div>
          <div className="solar-sun-ring solar-sun-ring--2"></div>
          <div className="solar-sun-ring solar-sun-ring--3"></div>
        </div>

        {/* Orbits and planets */}
        {planets.map((planet, i) => {
          const Icon = planet.icon;
          return (
            <div key={i} className="solar-orbit" style={{
              width: planet.orbitSize * 2,
              height: planet.orbitSize * 2,
            }}>
              <div
                className="solar-planet-wrapper"
                style={{
                  animationDuration: `${planet.speed}s`,
                }}
              >
                <div
                  className="solar-planet"
                  style={{
                    width: planet.size,
                    height: planet.size,
                    '--planet-color': planet.color,
                    animationDuration: `${planet.speed}s`,
                  }}
                >
                  <Icon size={planet.size * 0.45} strokeWidth={1.8} />
                  <span className="solar-planet-label">{planet.label}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
