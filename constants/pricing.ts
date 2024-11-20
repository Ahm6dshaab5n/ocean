import {Pricing} from "@/types/interfaces";

export const pricingItems:Pricing[]=[
  {
    title:'freelancer',
    description:'the essentail to provide your best work for your clients',
    monthlyPrice:15,
    annuallyPrice:144,
    features:[
      '5 products',
      'up to 1000 subscribers',
      'basic analytics',
      '48-hour support response time'
      ],
      glowPostion:'right'
  },
  {
title:'startup',
    description:'A plan that scales with your rapidly growing business..',
    monthlyPrice:30,
    annuallyPrice:288,
    features:[
      '25 products',
      'up to 10000 subscribers',
      'advanced analytics',
      '24-hour support response time',
      'markting automations'
      ],
      isMostPopular:true
  },
  {
title:'enterprise',
    description:'Dedicated suppert and infrastructur',
    monthlyPrice:48,
    annuallyPrice:576,
    features:[
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
       'Marketing automations',
       'Custon reporting tools'
      ],
      glowPosition:"left"
  }
  ]