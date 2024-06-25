
interface QuestionElementCardStructure{
    type: string,
    data: {
        title: string,
    }
}

interface QuestionElementStructure{
    questionId: number,
    url: string,
    alt: string,
    name: string,
    selected: boolean,
    card: QuestionElementCardStructure,
    filter: any[], 
}


const questionCardsStructureList : QuestionElementStructure[] = [
    {
        questionId: 1,
        url: "../assets/edit-item-icon/text-format-icon.png",
        alt: "text-format-icon",
        name: "Text Format",
        selected : true,
        card: {
            type: "single-input",
            data: {
                title: "Enter your Question here"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "dropdown",
                options: [
                    "No Validation",
                    "Greater Than",
                    "Less Than",
                    "Between"
                ]
            },
            {
                filterId: 3,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 2,
        url: "../assets/edit-item-icon/statement-format-icon.png",
        alt: "statement-format-icon",
        name: "Statement Format",
        selected : true,
        card: {
            type: "single-input",
            data: {
                title: "Enter your Statement here"
            }
        },
        filter: []
    },
    {
        questionId: 3,
        url: "../assets/edit-item-icon/date-format-icon.png",
        alt: "date-format-icon",
        name: "Date Format",
        selected : true,
        card: {
            type: "single-input",
            data: {
                title: "How old are you?"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "dropdown",
                options: [
                    "No Validation",
                    "After",
                    "Before",
                    "Between"
                ]
            },
            {
                filterId: 3,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 4,
        url: "../assets/edit-item-icon/phone-number-icon.png",
        alt: "phone-number-icon",
        name: "Phone Number",
        selected : true,
        card: {
            type: "single-input",
            data: {
                title: "Enter Your Phone"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "dropdown",
                options: [
                    "India",
                    "Pakistan",
                    "Bangaladesh",
                    "China",
                    "Japan",
                    "USA",
                    "Brazil"
                ]
            },
            {
                filterId: 3,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 5,
        url: "../assets/edit-item-icon/multiple-choice-icon.png",
        alt: "multiple-choice-icon",
        name: "Multiple Choice",
        selected : true,
        card: {
            type: "multiple-mcq",
            data: {
                title: "Enter question for multiselection"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "dropdown",
                options: [
                    "No Validation",
                    "Select Atleast",
                    "Select Exactly",
                    "Select Atmost"
                ]
            },
            {
                filterId: 3,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 6,
        url: "../assets/edit-item-icon/dropdown-icon.png",
        alt: "dropdown-icon",
        name: "Dropdown Format",
        selected : true,
        card: {
            type: "multiple-mcq",
            data: {
                title: "Enter question for selection"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "dropdown",
                options: [
                    "No Validation",
                    "Select Atleast",
                    "Select Exactly",
                    "Select Atmost"
                ]
            },
            {
                filterId: 3,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 7,
        url: "../assets/edit-item-icon/true-false-icon.png",
        alt: "true-false-icon",
        name: "True/False Format",
        selected : true,
        card: {
            type: "radio-box",
            data: {
                title: "Are you married"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 8,
        url: "../assets/edit-item-icon/number-format-icon.png",
        alt: "number-format-icon",
        name: "Number Format",
        selected : true,
        card: {
            type: "single-input",
            data: {
                title: "Enter your amount in number here"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "dropdown",
                options: [
                    "No Validation",
                    "Greater Than",
                    "Less Than",
                    "Between"
                ]
            },
            {
                filterId:2,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 9,
        url: "../assets/edit-item-icon/email-format-icon.png",
        alt: "email-format-icon",
        name: "Email Format",
        selected : true,
        card: {
            type: "single-input",
            data: {
                title: "Email"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "dropdown",
                options: [
                    "Gmail",
                    "Outlook",
                    "Yahoo",
                    "Zoho",
                    "Mail",
                    "Proton Mail",
                    "GMX"
                ]
            },
            {
                filterId: 3,
                type: "input",
                title: "Please enter a valid email",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 10,
        url: "../assets/edit-item-icon/website-format-icon.png",
        alt: "website-format-icon",
        name: "Website Format",
        selected : true,
        card: {
            type: "single-input",
            data: {
                title: "Enter Your Website Link"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "dropdown",
                options: [
                    "HTTP",
                    "HTTPS"
                ]
            },
            {
                filterId: 3,
                type: "dropdown",
                options: [
                    ".COM",
                    ".IN",
                    ".CO",
                    ".NET",
                    ".CO.IN",
                    ".NET.IN",
                    ".EDU"
                ]
            },
            {
                filterId: 4,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 11,
        url: "../assets/edit-item-icon/file-upload-icon.png",
        alt: "file-upload-icon",
        name: "File Upload Format",
        selected : true,
        card: {
            type: "file-upload",
            data: {
                title: "Upload your resume"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "dropdown",
                options: [
                    "No Validation",
                    "Kb",
                    "Mb",
                    "Gb"
                ]
            },
            {
                filterId: 3,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 12,
        url: "../assets/edit-item-icon/picture-choice-icon.png",
        alt: "picture-choice-icon",
        name: "Picture Choice",
        selected : true,
        card: {
            type: "multiple-mcq",
            data: {
                title: "Select your pictures"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "dropdown",
                options: [
                    "No Validation",
                    "Select Atleast",
                    "Select Exactly",
                    "Select Atmost"
                ]
            },
            {
                filterId : 3,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 13,
        url: "../assets/edit-item-icon/yes-no-icon.png",
        alt: "yes-no-icon",
        name: "Yes/No Format",
        selected : true,
        card: {
            type: "radio-box",
            data: {
                title: "Are you married"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId : 2,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
    {
        questionId: 14,
        url: "../assets/edit-item-icon/rating-icon.png",
        alt: "rating-icon",
        name: "Rating Scale",
        selected : true,
        card: {
            type: "rating",
            data: {
                title: "Rate our product"
            }
        },
        filter: [
            {
                filterId: 1,
                type: "button",
                value: true,
                text: "Mandatory Or Not?"
            },
            {
                filterId: 2,
                type: "button",
                value: false,
                text: "Comment is Required"
            },
            {
                filterId: 3,
                type: "input",
                title: "Custom Error Message",
                placeholder: "custom error message"
            }
        ]
    },
]

export { 
    questionCardsStructureList,
    QuestionElementStructure,
    QuestionElementCardStructure,
}
