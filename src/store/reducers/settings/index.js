// 1st iteration
settings = {
  qualification: {
    sections: {
      budget: {
        label: "Budget",
        comment: "",
        questions: [
          {
            label: "Configure budget target",
            question: "Does this company has $15,000 budget?",
            type: "radio | select",
            options: [{ value: "yes", metric: 20 }, { value: "no", metric: 0 }],
            required: true | false
          }
        ]
      },
      authority: {
        label: "Authority",
        questions: [
          {
            // All questions have personas
            label: "Set ideal customer personal?",
            question: "who makes the buying decision?",
            type: "text input",
            required: true | false,
            hasPersonas: true | false
          }
        ],
        comment: ""
      },

      need: {
        label: "Need",
        questions: [
          {
            // All questions have departments and personas
            label: "Set pain point criterias",
            question: "how much money are you losing per month?",
            type: "select",
            options: [
              { value: "less than $500", metric: 5 },
              { value: "$500 - $2000", metric: 10 },
              { value: "more than $2000", metric: 20 }
            ],
            comment: "",
            required: true | false,
            hasPersonas: true | false
          }
        ],
        comment: ""
      },
      timeline: {
        label: "Timeline",
        questions: [
          {
            label: "Set deal close timeline",
            question: "when do you want this change to happen?",
            type: "date-input",
            required: true | false
          }
        ],
        comment: ""
      },

      objections: {
        label: "Objections",
        questions: [
          {
            label: "What is the severity of concern?",
            question: "What concerns the client has?",
            comment: "",
            type: "select",
            options: [
              { value: "big", metric: -5 },
              { value: "medium", metric: -4 },
              { value: "small", metric: -3 }
            ]
          }
        ]
      },

      nextMeeting: {
        label: "Next Meeting",
        questions: [
          {
            label: "Set next meeting",
            question: "When is your next meeting?",
            type: "date input",
            required: true | false
          }
        ],
        comment: "requirements"
      }
    },

    score: {
      totalScore: ""
    }
  },
  discovery: {},
  negotiation: {},
  companies: [
    //multipliers based off of the department value
    {
      departments: [
        { value: "marketing", metric: 2 },
        { value: "sales", metric: 3 },
        { value: "product", metric: 4 },
        { value: "leadership", metric: 5 }
      ],
      personas: [
        { value: "individual", metric: 2 },
        { value: "manager", metric: 3 },
        { value: "executive", metric: 4 },
        { value: "CXO", metric: 5 }
      ],
      roles: [
        { value: "influencer", metric: 2 },
        { value: "champion", metric: 3 },
        { value: "decision-maker", metric: 4 }
      ]
    }
  ]
};
