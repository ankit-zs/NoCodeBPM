interface FormOptionProps {
    id: number,
    url: string,
    name: string,
    alt: string,
    cardStructureId: number,
}

const formOptions : FormOptionProps[] = [
    {
        id: 1,
        url: "../assets/edit-item-icon/text-format-icon.png",
        alt: "text-format-icon",
        name: "Text Format",
        cardStructureId: 1,
    },
    {
        id: 2,
        url: "../assets/edit-item-icon/number-format-icon.png",
        alt: "number-format-icon",
        name: "Number Format",
        cardStructureId: 8,
    },
    {
        id: 3,
        url: "../assets/edit-item-icon/statement-format-icon.png",
        alt: "statement-format-icon",
        name: "Statement Format",
        cardStructureId: 2,
    },
    {
        id: 4,
        url: "../assets/edit-item-icon/email-format-icon.png",
        alt: "email-format-icon",
        name: "Email Format",
        cardStructureId: 9,
    },
    {
        id: 5,
        url: "../assets/edit-item-icon/date-format-icon.png",
        alt: "date-format-icon",
        name: "Date Format",
        cardStructureId: 3,
    },
    {
        id: 6,
        url: "../assets/edit-item-icon/website-format-icon.png",
        alt: "website-format-icon",
        name: "Website Format",
        cardStructureId: 10,
    },
    {
        id: 7,
        url: "../assets/edit-item-icon/phone-number-icon.png",
        alt: "phone-number-icon",
        name: "Phone Number",
        cardStructureId: 4,
    },
    {
        id: 8,
        url: "../assets/edit-item-icon/file-upload-icon.png",
        alt: "file-upload-icon",
        name: "File Upload Format",
        cardStructureId: 11,
    },
    {
        id: 9,
        url: "../assets/edit-item-icon/multiple-choice-icon.png",
        alt: "multiple-choice-icon",
        name: "Multiple Choice",
        cardStructureId: 5,
    },
    {
        id: 10,
        url: "../assets/edit-item-icon/picture-choice-icon.png",
        alt: "picture-choice-icon",
        name: "Picture Choice",
        cardStructureId: 12,
    },
    {
        id: 11,
        url: "../assets/edit-item-icon/dropdown-icon.png",
        alt: "dropdown-icon",
        name: "Dropdown Format",
        cardStructureId: 6,
    },
    {
        id: 12,
        url: "../assets/edit-item-icon/yes-no-icon.png",
        alt: "yes-no-icon",
        name: "Yes/No Format",
        cardStructureId: 13,
    },
    {
        id: 13,
        url: "../assets/edit-item-icon/true-false-icon.png",
        alt: "true-false-icon",
        name: "True/False Format",
        cardStructureId: 7,
    },
    {
        id: 14,
        url: "../assets/edit-item-icon/rating-icon.png",
        alt: "rating-icon",
        name: "Rating Scale",
        cardStructureId: 14,
    },
]

export {
    FormOptionProps, formOptions
}