'use client'

import { useState } from 'react'
import styles from './ServicesSection.module.css'

interface ServiceItem {
  id: number
  text: string
}

interface ServiceData {
  id: number
  title: string
  icon: string
  slogan: string
  subtitle: string
  items: ServiceItem[]
}

const servicesData: ServiceData[] = [
  {
    id: 1,
    title: 'Lender Insurance Advisory',
    icon: '🛡️',
    slogan: 'Protecting Lenders, Securing Futures',
    subtitle: 'Advisory & Risk Protection',
    items: [
      { id: 1, text: 'Loan & Project Risk Guidance' },
      { id: 2, text: 'Policy Adequacy Review' },
      { id: 3, text: 'Ongoing Advisory Support' },
      { id: 4, text: 'Claims Assistance' },
      { id: 5, text: 'Risk Assessment Reports' },
      { id: 6, text: 'Project Financing Expertise' },
    ],
  },
  {
    id: 2,
    title: 'Placement of Insurance',
    icon: '📋',
    slogan: 'Strategic Coverage, Maximum Protection',
    subtitle: 'Insurance Solutions',
    items: [
      { id: 1, text: 'Policy Placement Services' },
      { id: 2, text: 'Coverage Optimization' },
      { id: 3, text: 'Market Analysis' },
      { id: 4, text: 'Premium Negotiation' },
      { id: 5, text: 'Documentation Support' },
      { id: 6, text: 'Renewal Management' },
    ],
  },
  {
    id: 3,
    title: 'Risk Inspection',
    icon: '🔍',
    slogan: 'Thorough Assessment, Smart Decisions',
    subtitle: 'Risk Management',
    items: [
      { id: 1, text: 'Property Risk Assessment' },
      { id: 2, text: 'Safety Compliance Review' },
      { id: 3, text: 'Hazard Identification' },
      { id: 4, text: 'Mitigation Recommendations' },
      { id: 5, text: 'Regular Monitoring' },
      { id: 6, text: 'Detailed Reporting' },
    ],
  },
  {
    id: 4,
    title: 'Claims Management',
    icon: '⚖️',
    slogan: 'Efficient Processing, Fair Settlements',
    subtitle: 'Claims Support',
    items: [
      { id: 1, text: 'Claims Filing Assistance' },
      { id: 2, text: 'Documentation Support' },
      { id: 3, text: 'Settlement Negotiation' },
      { id: 4, text: 'Legal Coordination' },
      { id: 5, text: 'Progress Tracking' },
      { id: 6, text: 'Dispute Resolution' },
    ],
  },
  {
    id: 5,
    title: 'Global Program',
    icon: '🌍',
    slogan: 'Worldwide Coverage, Local Expertise',
    subtitle: 'International Services',
    items: [
      { id: 1, text: 'Multi-Country Coverage' },
      { id: 2, text: 'Local Compliance' },
      { id: 3, text: 'Currency Management' },
      { id: 4, text: 'Cross-Border Claims' },
      { id: 5, text: 'Regulatory Updates' },
      { id: 6, text: 'Cultural Adaptation' },
    ],
  },
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const currentService = servicesData[activeTab]

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % servicesData.length)
  }

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + servicesData.length) % servicesData.length)
  }

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className="text-[14px] md:text-[18px] w-[110px] sm:w-[151px] h-[32px] sm:h-[43px] pt-1 mx-auto border-[1.8px] border-[#A9BF6838] flex justify-center items-center bg-[#F6FFDB] rounded-[40px]">
            Our Services
          </div>
          <h3 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[121%] -tracking-[1.2px] text-center my-5 mb-10">
            Get To Know Us
          </h3>
        </div>

        {/* Main Content Container */}
        <div className={styles.mainContainer}>
          {/* Desktop Layout - Three Columns */}
          <div className={styles.desktopLayout}>
            {/* Left Panel - Service Navigation */}
            <div className={styles.leftPanel}>
              <div className={styles.serviceTabs}>
                {servicesData.map((service, index) => (
                  <button
                    key={service.id}
                    className={`${styles.serviceTab} ${index === activeTab ? styles.activeTab : ''} text-[22px]! -tracking-[0.66px] w-[375px]! h-[72px]!`}
                    onClick={() => setActiveTab(index)}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Center Card */}
            <div className={styles.centralCard}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className={styles.slogan}>{currentService.slogan}</h3>
            </div>

            {/* Right Panel - Service List */}
            <div className={styles.rightPanel}>
              <div className={styles.rightCard}>
                <div className={styles.rightBadge}>{currentService.subtitle}</div>
                <div className={styles.rightDivider}></div>
                <ul className={styles.serviceList}>
                  {currentService.items.map((item) => (
                    <li key={item.id} className={styles.serviceItem}>
                      <span className={styles.serviceText}>{item.text}</span>
                      <span className={styles.checkIcon}>✓</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Carousel */}
          <div className={styles.mobileLayout}>
            {/* Tab Selector */}
            <div className={styles.tabSelector}>
              <button className={styles.tabButton}>{currentService.title}</button>
            </div>

            {/* Navigation Arrows */}
            <div className={styles.navigation}>
              <button className={styles.navButton} onClick={prevTab}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className={styles.navButton} onClick={nextTab}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Central Content Area */}
            <div className={styles.mobileCentralCard}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className={styles.slogan}>{currentService.slogan}</h3>
            </div>

            {/* Bottom Content Area */}
            <div className={styles.mobileBottomCard}>
              <h4 className={styles.subtitle}>{currentService.subtitle}</h4>
              <div className={styles.divider}></div>
              <ul className={styles.serviceList}>
                {currentService.items.map((item) => (
                  <li key={item.id} className={styles.serviceItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span className={styles.serviceText}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
