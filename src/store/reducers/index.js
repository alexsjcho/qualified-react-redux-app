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
    comment: ""
  },

  need: {
    question: [""],
    departments: {
      type: [
        "sales",
        "marketing",
        "leadership",
        "product",
        "engineering",
        "human resource"
      ],
      departmentComments: ""
    },
    comment: ""
  },
  timeline: {
    closeDate: "",
    comment: ""
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
