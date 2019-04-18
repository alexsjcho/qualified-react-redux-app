// 3rd iteration
settings = {
  //SPIN Sales Methodology
  qualification: {
    sections: {
      situation: {
        label: "Situational Questions",
        comment: "Placeholder",
        questions: [
          {
            label: "Set questions to understand client's situation",
            question: "Why are you considering our company's product?",
            type: "text input",
            options: [{ value: "yes", points: 10 }, { value: "no", points: 0 }],
            required: true
          }
        ]
      },
      problem: {
        label: "Problem",
        questions: [
          {
            // All questions have departments and personas
            label: "What are their problems? What is their payout?",
            question: "how much money are you losing per month?",
            type: "select",
            options: [
              { value: "less than $500", points: 5 },
              { value: "$500 - $2000", points: 10 },
              { value: "more than $2000", points: 20 }
            ],
            comment: "",
            required: true,
            hasPersonas: true
          }
        ],
        concerns: ""
      },

      implication: {
        label: "Implications",
        questions: [
          {
            // All questions have departments and personas
            label: "Consequences of customer's problems",
            question: "how much money are you losing per month?",
            type: "select",
            options: [
              { value: "less than $500", points: 5 },
              { value: "$500 - $2000", points: 10 },
              { value: "more than $2000", points: 20 }
            ],
            comment: "",
            required: true,
            hasPersonas: true
          }
        ],
        concerns: ""
      },

      need: {
        label: "Need for Change",
        questions: [
          {
            // All questions have departments and personas
            label: "Why do you need to change and fix this problem?",
            question: "how much money are you losing per month?",
            type: "text input",
            options: [{ value: "yes", points: 10 }, { value: "no", points: 0 }],
            comment: "",
            required: true,
            hasPersonas: true
          }
        ],
        concerns: ""
      },

      timeline: {
        label: "Timeline",
        questions: [
          {
            label: "Set deal close timeline",
            question: "when do you want this change to happen?",
            type: "date-input",
            required: true
          }
        ],
        concerns: ""
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
              { value: "big", points: -5 },
              { value: "medium", points: -4 },
              { value: "small", points: -3 }
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
            required: true
          }
        ],
        concerns: "requirements"
      }
    },

    score: {
      totalScore: ""
    }
  },

  //MEDDIC Sales Methodology
  discovery: {
    sections: {
      metrics: {
        label: "Customer Success Metrics",
        questions: [
          {
            // All questions have personas
            label: "Set ideal customer personal?",
            question: "who makes the buying decision?",
            type: "text input",
            required: true,
            hasPersonas: true,
            comment: ""
          }
        ]
      },
      economicBuyer: {
        label: "Economic Buyer",
        questions: [
          {
            // All questions have personas
            comment: "Placeholder",
            questions: [
              {
                label: "Economic Buyer",
                question: "Who's in charge of the budget for this project?",
                type: "text",
                comment: "",
                required: true,
                hasPersonas: true,
                comment: ""
              }
            ]
          }
        ]
      },

      budget: {
        label: "Budget",
        comment: "Placeholder",
        questions: [
          {
            label: "Configure budget target",
            question: "Does this company has $15,000 budget?",
            type: "radio",
            options: [{ value: "yes", points: 20 }, { value: "no", points: 0 }],
            required: true
          }
        ]
      },

      decisionCriteria: {
        label: "Decision Criteria",
        questions: [
          {
            // All questions have departments and personas
            label: "What's The Decision Making Checklist?",
            question:
              "what are the top 3 must have for you to purchase a solution?",
            type: "text-area",
            comment: "",
            required: true,
            hasPersonas: true
          }
        ],
        concerns: ""
      },

      decisionProcess: {
        label: "Decision Process",
        questions: [
          {
            // All questions have departments and personas
            label: "Decision Process and Steps",
            question:
              "how long is the decision making process and what are the steps?",
            type: "list",
            comment: "",
            required: true,
            hasPersonas: true
          }
        ],
        concerns: ""
      },

      identifyPain: {
        label: "Identify Pain",
        questions: [
          {
            // All questions have departments and personas
            label: "What are their problems? What is their payout?",
            question:
              "how much money are you losing per month? | how much time are you losing? | how many employees are quiting?",
            type: "select",
            options: [
              { value: "less than $500", points: 5 },
              { value: "$500 - $2000", points: 10 },
              { value: "more than $2000", points: 20 }
            ],
            comment: "",
            required: true,
            hasPersonas: true
          }
        ],
        concerns: ""
      },

      champion: {
        label: "Economic Buyer",
        questions: [
          {
            // All questions have personas
            questions: [
              {
                label: "Champion",
                question:
                  "Besides yourself, who else is pushing for this change?",
                type: "text-input",
                comment: "",
                required: true,
                hasPersonas: true,
                comment: ""
              }
            ]
          }
        ],
        concerns: ""
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
              { value: "big", points: -5 },
              { value: "medium", points: -4 },
              { value: "small", points: -3 }
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
            required: true,
            comment: ""
          }
        ],
        concerns: "requirements"
      }
    },

    score: {
      totalScore: ""
    }
  },
  demo: {
    //Leverage Pain Points
    //Saved data from Qualification
    problem: {},
    implication: {},
    need: {},

    //Saved text input from Discovery
    metrics: {},
    identifyPain: {},

    //Performed Demo?
    budget: {
      label: "Demo",
      comment: "Save presentation URL link",
      questions: [
        {
          label: "Configure budget target",
          question: "Does this company has $15,000 budget?",
          type: "radio",
          options: [{ value: "yes", points: 10 }, { value: "no", points: 0 }],
          required: true,
          comment: ""
        }
      ]
    },

    //Post-Demo Feedback
    objections: {
      label: "Objections",
      questions: [
        {
          label: "What is the severity of concern?",
          question: "What concerns the client has?",
          comment: "",
          type: "select",
          options: [
            { value: "big", points: -5 },
            { value: "medium", points: -4 },
            { value: "small", points: -3 }
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
          required: true,
          comment: ""
        }
      ],
      concerns: "requirements"
    }
  },

  //NEAT Sales Methodology
  handleObstacles: {
    //Qualification stage
    objections: {},
    //Discovery State
    objections: {},
    //Demo State
    objections: {},

    need: {
      label: "Need for Change",
      questions: [
        {
          // All questions have departments and personas
          label: "Why do you need to change and fix this problem?",
          question: "how much money are you losing per month?",
          type: "text input",
          options: [{ value: "yes", points: 10 }, { value: "no", points: 0 }],
          comment: "",
          required: true,
          hasPersonas: true
        }
      ],
      concerns: ""
    },

    economicImpact: {
      label: "Impact of Purchase",
      questions: [
        {
          // All questions have departments and personas
          label: "Consequences of customer's problems",
          question: "how much money are you losing per month?",
          type: "select",
          options: [
            { value: "less than $500", points: 5 },
            { value: "$500 - $2000", points: 10 },
            { value: "more than $2000", points: 20 }
          ],
          comment: "",
          required: true,
          hasPersonas: true
        }
      ],
      concerns: ""
    },

    accessToAuthority: {
      label: "Access to Buyer Authority",
      questions: [
        {
          // All questions have personas
          questions: [
            {
              label: "Buying Decision Maker",
              question: "Who are in charge of making this buying decision?",
              type: "text-input",
              comment: "",
              required: true,
              hasPersonas: true,
              comment: ""
            }
          ]
        }
      ]
    },

    timeline: {
      label: "Timeline",
      questions: [
        {
          label: "Set deal close timeline",
          question: "when do you want this change to happen?",
          type: "date-input",
          required: true
        }
      ],
      concerns: ""
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
            { value: "big", points: -5 },
            { value: "medium", points: -4 },
            { value: "small", points: -3 }
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
          required: true,
          comment: ""
        }
      ],
      concerns: "requirements"
    }
  },

  //BATNA Negotiation Methodology
  negotiation: {
    //Leverage Pain Points
    //Saved data from Qualification
    problem: {},
    implication: {},
    need: {},
    //Saved text input from Discovery
    metrics: {},
    identifyPain: {},

    //BATNA (Best Alternative To Negotiated Agreement)
    sellerPrice: {
      label: "Product Retail Value",
      questions: [
        {
          //finalScore is score / totalScore, depending on finalScore of opportunity, then ask for different pricing tier
          label: "Seller Pricing Tier",
          comment: "",
          type: "select",
          options: [
            { value: "original", points: "$10,000" },
            { value: "10% discount", points: "$9,000" },
            { value: "20%", points: "8,000" },
            { value: "bottom-line", points: "$7,000" }
          ]
        }
      ]
    }
  },
  buyerAskingPrice: {
    label: "Buyer Price Request",
    questions: [
      {
        label: "Buyer Purchase Price Tier",
        comment: "",
        type: "select",
        options: [
          { value: "original", points: "$10,000" },
          { value: "10% discount", points: "$9,000" },
          { value: "20%", points: "8,000" }
        ]
      }
    ]
  },

  companies: [
    //multipliers based off of the department value
    {
      departments: [
        { value: "marketing", points: 2 },
        { value: "sales", points: 3 },
        { value: "product", points: 4 },
        { value: "leadership", points: 5 }
      ],
      personas: [
        { value: "individual", points: 2 },
        { value: "manager", points: 3 },
        { value: "executive", points: 4 },
        { value: "CXO", points: 5 }
      ],
      roles: [
        { value: "influencer", points: 2 },
        { value: "champion", points: 3 },
        { value: "decision-maker", points: 4 }
      ]
    }
  ],
  supportedInputs: ["radio", "select", "date", "text"]
};
