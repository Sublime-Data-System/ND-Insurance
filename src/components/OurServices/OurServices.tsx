import React from 'react'
import { ServicesCardLG, ServicesCardXL } from './ServicesCard'

const OurServices = () => {
  const serviceData = [
    {
      title: 'Lender Insurance Advisory',
      logo: 'security.svg',
      description: [
        'We are regularly engaged in project financing’s where we serve as advisers to lenders on the risk and insurance aspects of the project. ',
        'We guide on the insurable and uninsurable risks of the project and comment on the adequacy of the insurance policy.',
      ],
      features: [
        'Project Risk Guidance',
        'Policy Adequacy Review',
        'Ongoing Advisory Support',
        'Claims Assistance',
        'Risk Assessment Reports',
      ],
    },
    {
      title: 'Placement Of Insurance',
      logo: 'cross.svg',
      description: [
        'Placement of policy is a rigorous process of risk inspection, policy analysis, request for quotations, negotiation for the most value-based coverage, evaluation and recommendation of the policy, placement of policy and post-placement supervision.',
      ],
      features: [
        'Risk Profiling',
        'Policy Analysis',
        'Portfolio Rationalization',
        'Gathering Quotations',
        'Recommendations for best coverage',
      ],
    },
    {
      title: 'Risk Inspection',
      logo: 'inspection.svg',
      description: [
        'We thoroughly analyze the requirements of our clients/insurers to provide the best possible coverage, taking into consideration all risks associated with their business.',
        'The purpose of the inspection is to provide the insurer with a clear picture of the potential risks to be insured, it is also an invaluable tool in identifying & advising the client of loss preventive measures when dealt with on a proactive basis.',
      ],
      features: [
        'Inspection Preparation',
        'Document Review',
        'On-site/Virtual Inspection Coordination',
        'Risk Identification & Evaluation',
        'Recommendations & Reporting',
      ],
    },
    {
      title: 'Insurance Policy Vetting',
      logo: 'policy_vetting.svg',
      description: [
        'We help you review, analyze, and validate your insurance policies to ensure complete clarity and protection. Our experts carefully examine terms, conditions, exclusions, and coverage gaps, so you fully understand what’s included and what’s not.',
        'With our vetting service, you gain confidence that your policy is fair, transparent, and aligned with your actual needs — no hidden surprises, just trusted protection.',
      ],
      features: ['Policy Coverage Review', 'Exclusions Check', 'Deductibles', 'Compliance Check'],
    },
    {
      title: 'Claims Management',
      logo: 'claims_service.svg',
      description: [
        'Whenever clients have claims, we provide excellent support to ensure that the communication between the client and the insurer is transparent and smooth.',
        'We follow up rigorously with the insurer till the clients are compensated for their losses as per the terms of their insurance policy.',
      ],
      features: [
        'Claims intimation to insurance company',
        'Appointment of surveyors/loss adjusters',
        'Documentation Guidance',
        'Coordination with surveyors/TPAs/Hospitals',
        'Coordination with claims departments of Insurers',
        'Dispute Resolution',
      ],
    },
    {
      title: 'Global Program',
      logo: 'globe.svg',
      description: [
        'We have partnered with reputed reinsurance brokers to provide optimal services for clients with Indian interests abroad.',
        'This collaboration allows us to offer expert guidance, seamless cross-border insurance solutions, and tailored coverage that meets both regulatory requirements and individual client needs.',
      ],
      features: [
        'International Coverage',
        'Multi-national Policies',
        'Centralized Management',
        'Local Support',
        'Streamlined Administration',
      ],
    },
  ]

  return (
    <>
      <div className="w-full max-xl:hidden">
        {serviceData.map((data, index) => (
          <ServicesCardXL key={index} isOdd={index % 2 != 0} serviceData={data} />
        ))}
      </div>

      <div className="w-full xl:hidden px-3">
        {serviceData.map((data, index) => (
          <ServicesCardLG key={index} isOdd={index % 2 != 0} serviceData={data} />
        ))}
      </div>
    </>
  )
}

export default OurServices
