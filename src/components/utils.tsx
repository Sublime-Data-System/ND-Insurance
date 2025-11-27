import Image from 'next/image'

export const insuranceData = [
  {
    title: 'Property',
    image: (
      <Image
        src={'/images/products/machinery.png'}
        height={193}
        width={193}
        className="mx-auto p-4 relative top-4"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/machinery.png'}
        height={228}
        width={228}
        className="mx-auto  relative -bottom-3"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Property insurance provides protection against most risks to property, such as fire, theft, natural disasters and other unexpected damages. One can cover any individual or business tangible asset like:',
    secondaryDesc: '',
    descList: [
      'Factory',
      'Shop or Office',
      'School, College, Auditorium, Hospital',
      'Warehouse, Shopping Mall',
      'Place of worship',
    ],
    tags: ['Standard Fire & Special Perils', 'Industrial All Risk', 'Property All Risk'],
  },
  {
    title: 'Project',
    image: (
      <Image
        src={'/images/products/project.png'}
        height={228}
        width={228}
        className="mx-auto -top-9 relative "
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/project.png'}
        height={260}
        width={260}
        className="mx-auto -bottom-4 relative "
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Project insurance offers coverage for accidents, damages and liabilities during execution of any project under construction. \nThis includes:',
    secondaryDesc: '',
    descList: [
      'Construction of Roads, Bridges, Dams & Manufacturing facilities',
      'Hydro, Thermal and Nuclear Power plants',
      'Solar & Wind Farms',
      'Transmission Lines, Gas & Hydro pipe lines',
      'Construction of Residential and Commercial Properties',
      'Construction of Schools/Colleges and Hotels',
    ],
    tags: [
      'Erection All Risk',
      'Machinery Breakdown',
      "Contractor's All Risk",
      'Plant & Machinery',
    ],
  },
  {
    title: 'Marine',
    image: (
      <Image
        src={'/images/products/boat.png'}
        height={164}
        width={260}
        className="mx-auto  relative top-8"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/boat.png'}
        height={180}
        width={285}
        className="mx-auto  relative top-3 left-4"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Marine insurance covers loss, damage, or delays during the transportation and logistics of goods. It protects the materials or commodities being transported, received, or held, from the point of origin to the final destination. \nCoverage includes, but is not limited to',
    secondaryDesc:
      'Marine Insurance policy can be bought as an annual policy that covers all shipments over a year under one policy or as a Single Transit Policy which covers a specific shipment or single transit only.',
    descList: [
      'Import, Export & Domestic Movement of Commercial Goods',
      'Capital Goods, Custom Duty, Demurrage, Container & Other Incidental Charges',
      'Physical damage or loss of the vessel or ship under Hull Insurance',
      'Marine Insurance policy can be bought as an annual policy that covers all shipments over a year under one policy or as a Single Transit Policy which covers a specific shipment or single transit only.',
    ],
    tags: ['Single Transit', 'Specific Policy', 'Open Policy', 'Sales Turnover Policy'],
  },
  {
    title: 'Financial Liability',
    image: (
      <Image
        src={'/images/products/cash.png'}
        height={183}
        width={183}
        className="mx-auto  relative bottom-0.5"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/cash.png'}
        height={229}
        width={229}
        className="mx-auto  relative bottom-0.5"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Financial liability insurance covers legal costs and compensation claims arising from lawsuits or third-party claims against the insured. \n \nCommon types of Financial Liability',
    secondaryDesc: '',
    descList: [
      'Protects directors and officers from wrongful act claims.',
      'Covers losses from data breaches or cyberattacks.',
      'Protects against negligence or error claims.',
      'Covers losses from employee fraud or theft.',
    ],
    tags: ['Directors & Officers (D&O) Liability', 'Cyber Risk', 'Professional Indemnity'],
  },
  {
    title: 'Commercial Liability',
    image: (
      <Image
        src={'/images/products/commercialLiability.png'}
        height={206}
        width={262}
        className="mx-auto  relative bottom-0.5"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/commercialLiability.png'}
        height={213}
        width={271}
        className="mx-auto  relative -bottom-5"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Commercial liability insurance covers legal fees, court costs, and settlement or compensation payments arising from third-party claims of injury, property damage, or negligence related to business operations. \n \nSome types of liability insurances :',
    secondaryDesc: '',
    descList: [
      'Covers business operation risks',
      'Protects against public liability claims',
      'Covers product-related damages',
      'Provides employee injury and workplace accident cover',
    ],
    tags: ['Commercial General Liability', 'Public Liability', 'Product Liability'],
  },
  {
    title: 'Group Insurance',
    image: (
      <Image
        src={'/images/products/groupInsurance.png'}
        height={214}
        width={214}
        className=" relative left-0 bottom-8"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/groupInsurance.png'}
        height={214}
        width={214}
        className=" relative -left-8 -bottom-0"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Group insurance is a type of insurance policy that covers a defined group of people under a single contract, typically offered by an employer, association, or organization to its employees or members. \nThese policies cover employees for health, life, accidents, disability, and more. These benefits can be fully employer-funded, employee-funded, or shared. \nSome types of Group policies are:',
    secondaryDesc: '',
    descList: [
      'Group Health: Covers medical expenses (hospitalization, doctor visits, etc.)',
      'Group Personal Accident: Covers medical expenses, accidental death, temporary and permanent disability and loss of pay',
      'Group Term Life: Provides a lump-sum payout to the beneficiary if the insured dies during the policy period',
      'Group Gratuity: Helps employers fund and fulfil long-term gratuity obligations with tax benefits',
    ],
    tags: ['Group Health', 'Group Personal Accident', 'Group Gratuity', 'Group Term Life'],
  },
  {
    title: 'Jewelers Block Insurance',
    image: (
      <Image
        src={'/images/products/jwellery.png'}
        height={175}
        width={212}
        className=" relative left-0 -bottom-4"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/jwellery.png'}
        height={191}
        width={231}
        className=" relative left-0 bottom-4"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Jewellers Block Insurance provides comprehensive coverage for loss or damage to jewellery, precious stones, watches, gold, silver, and related goods — whether they are in the shop, in transit, on display, or even in the custody of employees or customers.',
    secondaryDesc: '',
    descList: [
      'Provides comprehensive protection against theft, fire, or accidental loss',
      'Ensures business continuity and financial security for jewellers',
    ],
    tags: ['Jewellery Damage or loss', 'Transit Cover', 'Precious Stones & Metals'],
  },
  {
    title: 'Warranty Insurance',
    image: (
      <Image
        src={'/images/products/warrantyInsurance.png'}
        height={132}
        width={211}
        className="mx-auto relative -bottom-13"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/warrantyInsurance.png'}
        height={162}
        width={259}
        className=" relative left-0 bottom-2"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Warranty Coverage Insurance protects businesses against the financial burden of repair or replacement costs arising from product defects, malfunctions, or failures during the warranty period. This insurance helps manufacturers, distributors, and retailers manage risks related to product quality and customer satisfaction.',
    secondaryDesc: '',
    descList: [],
    tags: ['Repair & Replacement Cover', 'Warranty Protection', 'Product Liability'],
  },
  {
    title: 'Credit Insurance',
    image: (
      <Image
        src={'/images/products/payment.png'}
        height={113}
        width={246}
        className="mx-auto relative -bottom-13"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/payment.png'}
        height={113}
        width={246}
        className="mx-auto relative bottom-10"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Credit Insurance (Trade Receivable) ensures steady cash flow by covering unpaid invoices and credit risks. It protects businesses from losses due to non-payment by customers caused by insolvency, bankruptcy, or delayed payments. This insurance helps companies maintain financial stability, secure lending from banks, and safely extend credit to new or existing customers.',
    secondaryDesc: '',
    descList: [],
    tags: ['All Credit Risks', 'Invoice Protection', 'Bad Debt Protection', 'Financial Stability'],
  },
  {
    title: 'Surety Bond Insurance',
    image: (
      <Image
        src={'/images/products/bondInsurance.png'}
        height={183}
        width={280}
        className="mx-auto relative "
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/bondInsurance.png'}
        height={259}
        width={280}
        className="mx-auto relative bottom-4"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Surety Bond Insurance is a type of insurance that guarantees the fulfilment of a contractual obligation by one party (the principal) to another party (the obligee). The surety (usually an insurance company or a bank) provides a financial guarantee that the principal will perform as promised. If the principal fails to meet the terms of the contract, the surety compensates the obligee up to the bond amount and then seeks reimbursement from the principal. Surety bonds are commonly used in construction projects, government contracts, and other situations where a party needs assurance that obligations will be met.',
    secondaryDesc: '',
    descList: [],
    tags: ['Contract Guarantee', 'Performance Bond', 'Government Contract Bond'],
  },
  {
    title: 'Parametric Insurance',
    image: (
      <Image
        src={'/images/products/solar.png'}
        height={201}
        width={201}
        className="mx-auto relative -left-5"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Weather Insurance (Parametric) provides coverage against specific weather-related risks such as rainfall, temperature fluctuations, wind speed, or other climate events. Unlike traditional insurance, which pays out based on actual loss assessment, parametric insurance pays a pre-agreed amount when predefined weather conditions (parameters) are met or exceeded — for example, if rainfall drops below or exceeds a certain threshold. \nThis type of insurance is popular with agriculture, event organizers, and energy companies to manage financial risks linked to unpredictable weather.',
    secondaryDesc: '',
    descList: [],
    tags: ['Climate Risk Cover', 'Weather Insurance', 'Energy Sector Protection'],
  },
  {
    title: 'Hull Insurance',
    image: (
      <>
        <Image
          src={'/images/products/aeroplane.png'}
          height={139}
          width={249}
          className="mx-auto relative -left-5"
          alt={'Building.png'}
        />
        <Image
          src={'/images/products/ship.png'}
          height={109}
          width={171}
          className="mx-auto relative bottom-12 -right-10 z-10"
          alt={'Building.png'}
        />
      </>
    ),
    modalImage: (
      <>
        <Image
          src={'/images/products/aeroplane.png'}
          height={169}
          width={300}
          className="mx-auto relative -top-20 left-12"
          alt={'Building.png'}
        />
        <Image
          src={'/images/products/ship.png'}
          height={131}
          width={207}
          className="mx-auto relative -bottom-8 right-13 z-10"
          alt={'Building.png'}
        />
      </>
    ),
    primaryDesc:
      'Aviation Hull Insurance protects against risks related to aviation operations and the use of aircraft. It typically covers liabilities arising from bodily injury or property damage to third parties, damage to the aircraft itself, and other operational risks such as passenger injury, cargo loss, and legal liabilities. This type of insurance is essential for airlines, private aircraft owners, charter companies, and other entities involved in aviation to manage the financial impact of accidents, damage, or other unforeseen events. \nMarine Hull Insurance is a type of marine insurance that covers physical damage or loss to a ship or vessel and its machinery. It’s one of the core components of maritime risk management—essential for shipowners, operators, and financiers to safeguard against maritime perils.',
    secondaryDesc: '',
    descList: [],
    tags: ['Aviation Insurance', 'Marine Insurance', 'Hull & Liability Insurance'],
  },
]

export const personalInsuranceData = [
  {
    title: 'Health Insurance',
    image: (
      <Image
        src={'/images/products/hospital.png'}
        height={129}
        width={264}
        className="mx-auto p-4 relative top-14"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/hospital.png'}
        height={262}
        width={334}
        className="mx-auto p-4 relative top-4 w-[334px]"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Individual Health Insurance is a type of health coverage purchased by a person (rather than provided by an employer or group) to pay for medical expenses such as hospitalization, doctor visits, prescription drugs, and preventive care. \nIt can be opted in the following options:',
    secondaryDesc: '',
    descList: [
      'Basic Individual Mediclaim',
      'Family floater (covers entire family under one sum insured).',
      'Top-up / Super top-up plan (adds extra coverage over a base policy).',
      'Critical Illness plan (lump-sum pay out on diagnosis of major diseases like cancer)',
    ],
    tags: ['Basic Individual Mediclaim', 'Family floater', 'Top Up/Super Top Up'],
  },
  {
    title: 'Personal Accident',
    image: (
      <Image
        src={'/images/products/accident.png'}
        height={193}
        width={280}
        className="mx-auto  relative top-0"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/accident.png'}
        height={193}
        width={280}
        className="mx-auto  relative -top-16"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Individual Personal Accident Insurance (PA Insurance) provides financial protection in case of accidental injury, disability, or death resulting from an unforeseen and sudden event such as a road accident, fall, or industrial mishap. \nIt’s designed to help you or your family cope with the financial impact of accidents, which regular health or life insurance may not fully cover.',
    secondaryDesc: '',
    descList: [],
    tags: ['Injury Protection', 'Accident Cover', 'Financial Safety', 'Individual Protection'],
  },
  {
    title: 'Motor Insurance',
    image: (
      <Image
        src={'/images/products/car.png'}
        height={220}
        width={236}
        className="mx-auto relative top-4"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/car.png'}
        height={239}
        width={258}
        className="mx-auto relative top-4"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Motor Insurance (also known as vehicle insurance or auto insurance) is a type of insurance policy that provides financial protection against losses or damages arising from accidents, theft, or other incidents involving a motor vehicle — such as a car, motorcycle, truck, or commercial vehicle.\n \nTypes of Motor Insurance:',
    secondaryDesc: '',
    descList: [
      ' Third-Party Liability Insurance (Mandatory) \nThis is a mandatory insurance that covers legal liability for injury, death, or property damage to a third party caused by your vehicle. It does not cover damage to your own vehicle.',
      'Comprehensive Insurance (Own Damage + Third-Party) \nThis type covers both third-party liability and damage to your own vehicle due to:',
      'Accidents or collisions',
      'Fire or explosion',
      'Theft',
      'Natural disasters (floods, storms, earthquakes)',
      'Man-made disasters (riots, vandalism)',
      'Standalone Own Damage (OD) Cover \nThis covers only your vehicle’s damage (if you already have a third-party policy).',
    ],
    tags: ['Own Damage Cover', 'Third-Party Liability', 'Comprehensive Insurance (OD+TP)'],
  },
  {
    title: 'Home Insurance',
    image: (
      <Image
        src={'/images/products/home.png'}
        height={145}
        width={228}
        className="mx-auto  relative top-14"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/home.png'}
        height={168}
        width={262}
        className="mx-auto  relative top-0"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Home Insurance protects your home and belongings from fire, theft, natural disasters and accidents. It offers financial security for repairs, replacements, and rebuilding. \nYou can cover the structure only or contents (furniture, appliances, jewellery, electronics, and personal belongings) only or both.',
    secondaryDesc: '',
    descList: [],
    tags: ['Property Protection', 'Theft Insurance', 'Natural disasters and accidents'],
  },
  {
    title: 'Life Insurance',
    image: (
      <Image
        src={'/images/products/handshake.png'}
        height={112}
        width={280}
        className="mx-auto relative top-4"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/handshake.png'}
        height={112}
        width={280}
        className="mx-auto relative bottom-16"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Life Insurance is a financial contract between you (the policyholder) and an insurance company, where the insurer promises to pay a lump sum (called the death benefit) to your nominated beneficiary in case of your death — in exchange for regular premium payments. \nIt’s designed to provide financial protection and stability for your loved ones if something happens to you. \nThe most popular type of Life Insurance plan is the Term Plan.  \nTerm Life Insurance',
    secondaryDesc: '',
    descList: [
      'Provides coverage for a specific period (e.g., 10, 20, or 30 years).',
      'Pays the death benefit only if you die during the policy term.',
      'Most affordable type of life insurance.',
      'No maturity value if you outlive the term. \nOther types include Whole Life Insurance, Endowment Policy, Unit-Linked Insurance Plan, Money Back Policy and many more.',
    ],
    tags: ['Term Plan', 'Unit-Linked Insurance', 'Endowment Policy', 'Money Back Policy'],
  },
  {
    title: 'Professional Indemnity',
    image: (
      <Image
        src={'/images/products/shield.png'}
        height={134}
        width={108}
        className="mx-auto relative top-4"
        alt={'Building.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/shield.png'}
        height={134}
        width={108}
        className="mx-auto relative bottom-10"
        alt={'Building.png'}
      />
    ),
    primaryDesc:
      'Professional Indemnity Insurance (PI Insurance) is a type of liability insurance designed to protect professionals against claims of negligence, errors, omissions, or breach of professional duty while providing services to clients. It is also called Errors & Omissions (E&O) Insurance. \nWho Needs It? \nThis insurance is typically needed by professionals who provide advice, design, or services where mistakes could cause financial loss to clients, such as:',
    secondaryDesc: '',
    descList: [
      'Lawyers and solicitors',
      'Accountants and auditors',
      'Architects and engineers',
      'Consultants and IT service providers',
      'Medical practitioners (for advice rather than malpractice, which is a separate cover)',
      'Marketing and media professionals',
    ],
    tags: ['PI Insurance', 'Errors & Omissions', 'Liability Insurance', 'Professional Liability'],
  },
  {
    title: 'Pet Insurance',
    image: (
      <Image
        src={'/images/products/dog.png'}
        height={171}
        width={171}
        className="mx-auto relative top-3"
        alt={'dog.png'}
      />
    ),
    modalImage: (
      <Image
        src={'/images/products/dog.png'}
        height={171}
        width={171}
        className="mx-auto relative -top-0"
        alt={'dog.png'}
      />
    ),
    primaryDesc:
      'Pet Insurance is a type of insurance policy designed to cover the medical expenses and sometimes other costs associated with the care of your pet, typically dogs, cats, and occasionally other animals. It helps pet owners manage unexpected veterinary bills and ensures pets get timely treatment without financial strain.',
    secondaryDesc: '',
    descList: [],
    tags: ['Pet Health Protection', 'Medical expenses', 'Medical Insurance', 'Animal Care Cover'],
  },
]
