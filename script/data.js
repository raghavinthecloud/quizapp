var surveyJSON = {
 completedHtml: "<h3>Results</h3>",
 showProgressBar: "top",
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
     type: "rating",
     name: "extraversion",
     title: "I enjoy working on problems in a team setting rather than by myself.",    
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
       text: "Agree Moderately"
      }
     ]
    }
    ]
  },
    {
   name: "quarrelsome",
   elements: [
    {
     type: "rating",
     name: "quarrelsome_R",
     title: "I have frequent mood swings",    
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
       text: "Agree Moderately"
      }
     ]
    }
    ]
  },
   {
   name: "dependable",
   elements: [
    {
     type: "rating",
     name: "dependable",
     title: "I get chores done right away",    
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
       text: "Agree Moderately"
      }
     ]
    }
    ]
  },
  {
   name: "anxious",
   elements: [
    {
     type: "rating",
     name: "anxious",
     title: "I have frequent mood swings",    
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
       text: "Agree Moderately"
      }
     ]
    }
    ]
  },
    {
   name: "openness",
   elements: [
    {
     type: "rating",
     name: "openness",
     title: "I like to explore new places",    
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
       text: "Agree Moderately"
      }
     ]
    }
    ]
  },
  {
   name: "calm",
   elements: [
    {
     type: "rating",
     name: "calm_R",
     title: "I keep in the background",    
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
       text: "Agree Moderately"
      }
     ]
    }
    ]
  },
    {
   name: "Sympathetic",
   elements: [
    {
     type: "rating",
     name: "Sympathetic",
     title: "I am interested in other people’s problems.",    
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
       text: "Agree Moderately"
      }
     ]
    }
    ]
  },
   {
   name: "careless",
   elements: [
    {
     type: "rating",
     name: "careless",
     title: "I forget to put things back in their proper place",    
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
       text: "Agree Moderately"
      }
     ]
    }
    ]
  },
  {
   name: "conventional",
   elements: [
    {
     type: "rating",
     name: "conventional",
     title: "I have difficulty understanding abstract ideas",    
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
       text: "Agree Moderately"
      }
     ]
    }
    ]
  },
    {
   name: "openness",
   elements: [
    {
     type: "rating",
     name: "openness",
     title: "I like to explore new places",    
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
       text: "Agree Moderately"
      }
     ]
    }
    ]
  }     
 ]
 
};