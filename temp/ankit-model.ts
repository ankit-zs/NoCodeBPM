/**
 * interface question-element-filter{
 *      button: {
 *          value: boolean,
 *          text: string
 *      },
 *      dropdown: {
 *          options: string[]
 *      },
 *      input: {
 *          title: string
 *      }
 * }
 * 
 * interface question-element{
 *  id: number,
 *  card: {
 *      type: string,
 *      data: {
 *          title: string,
 *          
 *      }
 *  }
 *  filter: question-element-filter,
 * }
 * 
 * 
 *    question-type   
 * 1. single-input
 * 2. radiobox
 * 3. rating
 * 4. file-upload
 * 5. multiple-mcq
 * 
 *      filter-type
 * 1. mandatory or not ? --- one or many   => structure: {}
 * 2. selectbox (dropdown)  --- one or many
 * 3. custom error field
 * 
 * filter: {
 *  button: {
 *      value: off/on,
 *      text: text of the button
 *  },
 *  dropdown: {
 *      options: ['one','two','three'],
 *  },
 *  input{
 *      title: "enter the title of the custom error field"
 *  }
 * 
 * }
 * 
 */ 