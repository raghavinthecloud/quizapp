var surveyJSON = {
 completedHtml: "<h3>Results</h3>",
 showProgressBar: "bottom",
 goNextPageAutomatic: true,
 pages: [
//  {
//   name: "page1",
//   elements: [
//    {
//     type: "matrix",
//     title: "On a Friday, I would always finish my work before getting home to my family",
//     name: "emotion",    
//     isRequired: true,
//     columns: [
//      {
//       value: 1,
//       text: "Disagree Strongly",
//             
//      },
//      {
//       value: 2,
//       text: "Disagree Moderately"
//      },
//      {
//       value: "3",
//       text: "Disagree a Little"
//      },
//      {
//       value: "4",
//       text: "Neither agree nor disagree"
//      },
//      {
//       value: "5",
//       text: "Agree a Little"
//      },
//      {
//       value: "6",
//       text: "Agree Moderately"
//      },
//      {
//       value: "7",
//       text: "Agree Moderately"
//      }
//     ]
//    }
//   ]
//  },
  {
   name: "extraversion",
   elements: [
    {
            type: "html",
            html: "Please select an answer to indicate the extent to which you agree or disagree with the statement. You should rate the extent to which the statement applies to you."
            },

    {
     type: "rating",
     name: "extraversion_r",
     title: "I enjoy working on problems alone than in a team setting.",    
     isRequired: true,
     rateValues: [
      {
       value: 1,
       text: "Disagree Strongly"
      },
      {
       value: 2,
       text: "Disagree Moderately"
      },
      {
       value: 3,
       text: "Disagree a Little"
      },
      {
       value: 4,
       text: "Neither agree nor disagree"
      },
      {
       value: 5,
       text: "Agree a Little"
      },
      {
       value: 6,
       text: "Agree Moderately"
      },
      {
       value: 7,
       text: "Agree Strongly"
      }
     ]
    }
    ]
  },
    {
   name: "agreeableness",
   elements: [
    {
            type: "html",
            html: "Please select an answer to indicate the extent to which you agree or disagree with the statement. You should rate the extent to which the statement applies to you"
        },
    {
     type: "rating",
     name: "agreeableness_r",
     title: "I don’t easily believe what others say.",    
     isRequired: true,
    rateValues: [
      {
       value: 1,
       text: "Disagree Strongly"
      },
      {
       value: 2,
       text: "Disagree Moderately"
      },
      {
       value: 3,
       text: "Disagree a Little"
      },
      {
       value: 4,
       text: "Neither agree nor disagree"
      },
      {
       value: 5,
       text: "Agree a Little"
      },
      {
       value: 6,
       text: "Agree Moderately"
      },
      {
       value: 7,
       text: "Agree Strongly"
      }
     ]
    }
    ]
  },
   {
   name: "conscientiousness",
   elements: [
    {
            type: "html",
            html: "Please select an answer to indicate the extent to which you agree or disagree with the statement. You should rate the extent to which the statement applies to you"
        },
    {
     type: "rating",
     name: "conscientiousness",
     title: "I get chores done right away.",    
     isRequired: true,
     rateValues: [
      {
       value: 1,
       text: "Disagree Strongly"
      },
      {
       value: 2,
       text: "Disagree Moderately"
      },
      {
       value: 3,
       text: "Disagree a Little"
      },
      {
       value: 4,
       text: "Neither agree nor disagree"
      },
      {
       value: 5,
       text: "Agree a Little"
      },
      {
       value: 6,
       text: "Agree Moderately"
      },
      {
       value: 7,
       text: "Agree Strongly"
      }
     ]
    }
    ]
  },
  {
   name: "neuroticism",
   elements: [
    {
            type: "html",
            html: "Please select an answer to indicate the extent to which you agree or disagree with the statement. You should rate the extent to which the statement applies to you"
        },
    {
     type: "rating",
     name: "neuroticism",
     title: "I frequently feel moody.",    
     isRequired: true,
     rateValues: [
      {
       value: 1,
       text: "Disagree Strongly"
      },
      {
       value: 2,
       text: "Disagree Moderately"
      },
      {
       value: 3,
       text: "Disagree a Little"
      },
      {
       value: 4,
       text: "Neither agree nor disagree"
      },
      {
       value: 5,
       text: "Agree a Little"
      },
      {
       value: 6,
       text: "Agree Moderately"
      },
      {
       value: 7,
       text: "Agree Strongly"
      }
     ]
    }
    ]
  },
    {
   name: "openness",
   elements: [
    {
            type: "html",
            html: "Please select an answer to indicate the extent to which you agree or disagree with the statement. You should rate the extent to which the statement applies to you"
        },
    {
     type: "rating",
     name: "openness",
     title: "I enjoy exploring new places.",    
     isRequired: true,
     rateValues: [
      {
       value: 1,
       text: "Disagree Strongly"
      },
      {
       value: 2,
       text: "Disagree Moderately"
      },
      {
       value: 3,
       text: "Disagree a Little"
      },
      {
       value: 4,
       text: "Neither agree nor disagree"
      },
      {
       value: 5,
       text: "Agree a Little"
      },
      {
       value: 6,
       text: "Agree Moderately"
      },
      {
       value: 7,
       text: "Agree Strongly"
      }
     ]
    }
    ]
  },
  {
   name: "extraversion",
   elements: [
    {
            type: "html",
            html: "Please select an answer to indicate the extent to which you agree or disagree with the statement. You should rate the extent to which the statement applies to you"
        },
    {
     type: "rating",
     name: "extraversion",
     title: "I like to talk to strangers at parties.",    
     isRequired: true,
     rateValues: [
      {
       value: 1,
       text: "Disagree Strongly"
      },
      {
       value: 2,
       text: "Disagree Moderately"
      },
      {
       value: 3,
       text: "Disagree a Little"
      },
      {
       value: 4,
       text: "Neither agree nor disagree"
      },
      {
       value: 5,
       text: "Agree a Little"
      },
      {
       value: 6,
       text: "Agree Moderately"
      },
      {
       value: 7,
       text: "Agree Strongly"
      }
     ]
    }
    ]
  },
    {
   name: "agreeableness",
   elements: [
    {
            type: "html",
            html: "Please select an answer to indicate the extent to which you agree or disagree with the statement. You should rate the extent to which the statement applies to you"
        },
    {
     type: "rating",
     name: "agreeableness",
     title: "I am interested in hearing other people’s problems.",    
     isRequired: true,
     rateValues: [
      {
       value: 1,
       text: "Disagree Strongly"
      },
      {
       value: 2,
       text: "Disagree Moderately"
      },
      {
       value: 3,
       text: "Disagree a Little"
      },
      {
       value: 4,
       text: "Neither agree nor disagree"
      },
      {
       value: 5,
       text: "Agree a Little"
      },
      {
       value: 6,
       text: "Agree Moderately"
      },
      {
       value: 7,
       text: "Agree Strongly"
      }
     ]
    }
    ]
  },
   {
   name: "conscientiousness",
   elements: [
    {
            type: "html",
            html: "Please select an answer to indicate the extent to which you agree or disagree with the statement. You should rate the extent to which the statement applies to you"
        },
    {
     type: "rating",
     name: "conscientiousness_r",
     title: "I don't usually put things back in their proper place.",    
     isRequired: true,
     rateValues: [
      {
       value: 1,
       text: "Disagree Strongly"
      },
      {
       value: 2,
       text: "Disagree Moderately"
      },
      {
       value: 3,
       text: "Disagree a Little"
      },
      {
       value: 4,
       text: "Neither agree nor disagree"
      },
      {
       value: 5,
       text: "Agree a Little"
      },
      {
       value: 6,
       text: "Agree Moderately"
      },
      {
       value: 7,
       text: "Agree Strongly"
      }
     ]
    }
    ]
  },
  {
   name: "neuroticism",
   elements: [
    {
            type: "html",
            html: "Please select an answer to indicate the extent to which you agree or disagree with the statement. You should rate the extent to which the statement applies to you"
        },
    {
     type: "rating",
     name: "neuroticism_r",
     title: "I am relaxed most of the time.",    
     isRequired: true,
     rateValues: [
      {
       value: 1,
       text: "Disagree Strongly"
      },
      {
       value: 2,
       text: "Disagree Moderately"
      },
      {
       value: 3,
       text: "Disagree a Little"
      },
      {
       value: 4,
       text: "Neither agree nor disagree"
      },
      {
       value: 5,
       text: "Agree a Little"
      },
      {
       value: 6,
       text: "Agree Moderately"
      },
      {
       value: 7,
       text: "Agree Strongly"
      }
     ]
    }
    ]
  },
  {
   name: "openness",
   elements: [
    {
            type: "html",
            html: "Please select an answer to indicate the extent to which you agree or disagree with the statement. You should rate the extent to which the statement applies to you"
        },
    {
     type: "rating",
     name: "openness_r",
     title: "I have difficulty understanding abstract ideas.",    
     isRequired: true,
     rateValues: [
      {
       value: 1,
       text: "Disagree Strongly"
      },
      {
       value: 2,
       text: "Disagree Moderately"
      },
      {
       value: 3,
       text: "Disagree a Little"
      },
      {
       value: 4,
       text: "Neither agree nor disagree"
      },
      {
       value: 5,
       text: "Agree a Little"
      },
      {
       value: 6,
       text: "Agree Moderately"
      },
      {
       value: 7,
       text: "Agree Strongly"
      }
     ]
    }
    ]
  }    
 ]
 
};