interface WorkFlowProps {
    id: number,
    title: string, 
    category: string,
    description: string
}

const workFlowData : WorkFlowProps[]= [
  {
    id: 1,
    title: "Employee Onboarding",
    category: "Human Resources",
    description: "onboarding new employees into the company."
  },
  {
    id: 2,
    title: "Purchase Order Approval",
    category: "Procurement",
    description: "approving purchase orders for goods and services."
  },
  {
    id: 3,
    title: "Expense Reimbursement",
    category: "Finance",
    description: "request reimbursement for business expenses."
  },
  {
    id: 4,
    title: "Leave Request",
    category: "Human Resources",
    description: "request time off for vacations or other reasons."
  },
  {
    id: 5,
    title: "Project Approval",
    category: "Project Management",
    description: "approving new projects and allocating resources."
  },
  {
    id: 6,
    title: "Invoice Processing",
    category: "Finance",
    description: "processing and approving invoices from vendors."
  },
  // {
  //   id: 7,
  //   title: "IT Support Ticket",
  //   category: "Information Technology",
  //   description: "handling IT support requests from employees."
  // },
  // {
  //   id: 8,
  //   title: "Customer Onboarding",
  //   category: "Sales",
  //   description: "onboarding new customers and setting up accounts."
  // },
  // {
  //   id: 9,
  //   title: "Marketing Campaign Approval",
  //   category: "Marketing",
  //   description: "approving marketing campaigns and allocating budget."
  // },
  // {
  //   id: 10,
  //   title: "Product Development",
  //   category: "Product Management",
  //   description: "development of new products from concept to launch."
  // },
  // {
  //   id: 11,
  //   title: "Training Request",
  //   category: "Human Resources",
  //   description: "request training and development opportunities."
  // },
  // {
  //   id: 12,
  //   title: "Facility Maintenance Request",
  //   category: "Operations",
  //   description: "arequesting maintenance and repairs for company facilities."
  // }
];


  export{
    WorkFlowProps,
    workFlowData
  }