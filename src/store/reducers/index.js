// 1st iteration
settings = {
  qualification: {
    budget: {
      comment: "",
      questions: [
        {
          question: "Does this company has $15,000 budget?",
          type: "radio | select",
          options: [{ value: "yes", metric: 20 }, { value: "no", metric: 0 }],
          required: true | false
        }
      ]
    }
  },

  authority: {
    questions: [
      {
        // All questions have personas
        question: "who makes the buying decision?",
        type: "text input",
        personaComments: "",
        required: true | false
      }
    ],
    personas: [
      { value: "individual contributor", metric: 2 },
      { value: "manager", metric: 3 },
      { value: "executive", metric: 4 },
      { value: "CXO", metric: 5 }
    ],

    roles: [
      { value: "influencer", metric: 2 },
      { value: "champion", metric: 3 },
      { value: "decision-maker", metric: 4 }
    ],
    comment: ""
  },

  need: {
    questions: [
      {
        // All questions have departments and personas
        question: "how much money are you losing per month?",
        type: "select",
        options: [
          { value: "less than $500", metric: 5 },
          { value: "$500 - $2000", metric: 10 },
          { value: "more than $2000", metric: 20 }
        ],
        comment: "",
        required: true | false
      }
    ],
    departments: [
      { value: "marketing", metric: 2 },
      { value: "sales", metric: 3 },
      { value: "product", metric: 4 },
      { value: "leadership", metric: 5 }
    ],
    comment: ""
  },
  timeline: {
    questions: [
      {
        question: "when do you want this change to happen?",
        closeDate: "",
        comment: "",
        required: true | false
      }
    ]
  },

  objections: {
    questions: [
      {
        question: "your product is too expensive",
        comment: "",
        impact: [
          { value: "big", metric: -5 },
          { value: "medium", metric: -4 },
          { value: "small", metric: -3 }
        ]
      }
    ]
  },

  nextMeeting: {
    date: "",
    requirements: ""
  },

  score: {
    currentScore: "",
    totalScore: ""
  }
};
