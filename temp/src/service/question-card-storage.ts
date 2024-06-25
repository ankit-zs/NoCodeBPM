import { QuestionElementStructure } from "src/service/question-card-structure-data"


interface QuestionCardListProps {
    questionCardId: number,
    questionCardStructure: QuestionElementStructure
}


const questionCardList : QuestionCardListProps[] = [
    // {
    //     questionCardId: 101,
    //     questionCardStructure:  {
    //         questionId: 1,
    //         name: "text-format",
    //         selected : true,
    //         card: {
    //             type: "single-input",
    //             data: {
    //                 title: "Enter your Question here"
    //             }
    //         },
    //         filter: [
    //             {
    //                 type: "button",
    //                 value: true,
    //                 text: "Mandatory Or Not?"
    //             },
    //             {
    //                 type: "dropdown",
    //                 options: [
    //                     "No Validation",
    //                     "Greater Than",
    //                     "Less Than",
    //                     "Between"
    //                 ]
    //             },
    //             {
    //                 type: "input",
    //                 title: "Custom Error Message",
    //                 placeholder: "custom error message"
    //             }
    //         ]
    //     }
    // }
]

export {
    questionCardList,
    QuestionCardListProps
}