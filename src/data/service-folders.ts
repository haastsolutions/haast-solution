// src/data/service-folders.ts

export interface ServiceItem {
  title: string
  desc: string
}

export interface ServiceFolder {
  id: string
  title: string
  subtitle: string
  items: ServiceItem[]
}

export const serviceFolders: ServiceFolder[] = [
  {
    id: "plumbing",
    title: "Plumbing Support",
    subtitle: "3 items",
    items: [
      {
        title: "Emergency Dispatch",
        desc: "Leakages, burst pipes, and overflow management with immediate technician routing."
      },
      {
        title: "Customer Triage",
        desc: "Pre-screening calls to understand the severity of plumbing issues before dispatching."
      },
      {
        title: "Job Follow-ups",
        desc: "Post-service satisfaction calls and warranty scheduling."
      }
    ]
  },
  {
    id: "electrician",
    title: "Electrician Dispatch & Support",
    subtitle: "3 workflows",
    items: [
      {
        title: "Urgent Troubleshooting",
        desc: "Power outages, tripped panels, and hazardous wiring response workflows."
      },
      {
        title: "Scheduled Bookings",
        desc: "Routine panel upgrades, fixture installations, and routine maintenance logging."
      },
      {
        title: "Contractor Coordination",
        desc: "Direct communication channel with field electricians via CRM/dispatch software."
      }
    ]
  },
  {
    id: "emergency",
    title: "Emergency Service & Response",
    subtitle: "24/7 coverage",
    items: [
      {
        title: "After-Hours Answering",
        desc: "Handling midnight urgent calls when local offices are closed (US/EU time zones)."
      },
      {
        title: "Escalation Protocols",
        desc: "Immediate flagging and direct phone/SMS transfer for critical life-safety or property damage situations."
      }
    ]
  },
  {
    id: "hvac",
    title: "HVAC & Field Operation",
    subtitle: "Back Office",
    items: [
      {
        title: "Dispatch & Routing",
        desc: "Optimizing technician routes for heating, ventilation, and AC repair calls."
      },
      {
        title: "Parts & Inventory Tracking",
        desc: "Logging equipment requests and tracking replacement parts status."
      },
      {
        title: "Invoicing & Documentation",
        desc: "Post-job paperwork processing, digital estimates, and customer billing support."
      }
    ]
  }
]