'use client'

import styles from './IndustriesSection.module.css'

interface Industry {
  id: number
  name: string
  icon: string
}

const industries: Industry[] = [
  {
    id: 1,
    name: 'Pharmaceuticals',
    icon: '💊',
  },
  {
    id: 2,
    name: 'Educational Institutes',
    icon: '🏫',
  },
  {
    id: 3,
    name: 'Financial Institutes',
    icon: '🏦',
  },
  {
    id: 4,
    name: 'Engineering Workshops',
    icon: '⚙️',
  },
  {
    id: 5,
    name: 'Software & Technology',
    icon: '💻',
  },
  {
    id: 6,
    name: 'Aviation',
    icon: '✈️',
  },
  {
    id: 7,
    name: 'BPO',
    icon: '👥',
  },
  {
    id: 8,
    name: 'Renewable Energy',
    icon: '⚡',
  },
]

export default function IndustriesSection() {
  // Split industries into two rows
  const firstRow = industries.slice(0, 4)
  const secondRow = industries.slice(4, 8)

  return (
    <section className={styles.industriesSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>Industries</div>
          <h2 className={styles.title}>Industries We Have Served</h2>
        </div>

        {/* Marquee Container */}
        <div className={styles.marqueeContainer}>
          {/* Left Overlay */}
          <div className={styles.leftOverlay}></div>

          {/* Right Overlay */}
          <div className={styles.rightOverlay}></div>

          {/* First Row - Moving Left */}
          <div className={styles.marqueeRow}>
            <div className={`${styles.marqueeContent} ${styles.marqueeLeft}`}>
              {[...firstRow, ...firstRow, ...firstRow].map((industry, index) => (
                <div key={`${industry.id}-${index}`} className={styles.industryCard}>
                  <div className={styles.industryIcon}>{industry.icon}</div>
                  <span className={styles.industryName}>{industry.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Moving Right */}
          <div className={styles.marqueeRow}>
            <div className={`${styles.marqueeContent} ${styles.marqueeRight}`}>
              {[...secondRow, ...secondRow, ...secondRow].map((industry, index) => (
                <div key={`${industry.id}-${index}`} className={styles.industryCard}>
                  <div className={styles.industryIcon}>{industry.icon}</div>
                  <span className={styles.industryName}>{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
