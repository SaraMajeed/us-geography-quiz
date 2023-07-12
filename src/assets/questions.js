export default [
  {
    question: "What is the capital of California?",
    answer: "sacramento",
    type: "textbox",
  },
  {
    question: "What is the longest river?",
    answer: "mo",
    options: {ms: "Mississippi", mo: "Missouri", co: "Colorado", de: "Delaware"},
    type: "dropdown",
  },
  {
    question: "What presidents are carved into mount Rushmore?",
    answer: ["Jefferson", "Roosevelt"],
    options: ["A. Jackson", "B. Franklin", "T. Jefferson", "T. Roosevelt"],
    type: "checkbox",
  },
  {
    question: "What is the smallest US State?",
    answer: "Rhode Island",
    options: ["Maine", "Rhode Island", "Maryland", "Delaware"],
    type: "radio",
  },
  {
    question: "What city is the Golden Gate Bridge located?",
    answer: "san francisco",
    type: "textbox",
  },
  {
    question: "Which two lakes are connected by Niagara Falls?",
    answer: ["Erie", "Ontario"],
    options: ["Erie", "Ontario", "Michigan", "Huron"],
    type: "checkbox",
  },
  {
    question: "What is the lowest point (elevation) in the US?",
    answer: "dv",
    options: {
        dv: "Death Valley, California", 
        no: "New Orleans, Louisiana", 
        co: "Coachella, California", 
        ssb: "Salton Sea Beach, California"
    }, 
    type: "dropdown",
  },
  {
    question: "What US State has the largest number of endangered species?",
    answer: "Hawaii",
    options: ["Hawaii", "Alaska", "Texas", "Florida"],
    type: "radio"
  },
  {
    question: "What state is the only state that starts with the letter P?",
    answer: "pennsylvania",
    type: "textbox",
  },
  {
    question: "What California city shares a name with another country?",
    answer: "calexico",
    type: "textbox",
  },
];