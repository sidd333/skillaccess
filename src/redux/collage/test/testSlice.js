import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/";
const authToken = localStorage.getItem('auth-token');

const testState = {

    testName : "",
    testDescription : "",
    testType : "",
    topics :[],
    // testStatus : "",
  sections : [{
    id : 0,
    name : "section 0",
    type : "mcq",
    description : "this is section 0",
     questions :[],
  },{
        id : 1,
        name : "section 1",
        type : "mcq",
        description : "this is section 1",
         questions :[],
      },
      {
        id : 2,
        name : "section 2",
        type : "mcq",
        description : "this is section 2",
         questions :[],
      },
      {
        id : 3,
        name : "section 3",
        type : "mcq",
        description : "this is section 3",
         questions :[],
      },
      {
        id : 4,
        name : "section 4",
        type : "mcq",
        description : "this is section 4",
         questions :[],
      },
      {
        id :5,
        name : "section 5",
        type : "mcq",
        description : "this is section 5",
         questions :[],
      }],

      selectedSections : [],

    questions : [{
        question : "question 1",
        options : ["option 1","option 2","option 3","option 4"],
    },
    {
        question : "question 2",
        options : ["option 1","option 2","option 3","option 4"],
    }
],
    test : {
        testName : "",
        questionType : "",
        // testStatus : "",
        sections : [],
        questions : [{
          Duration : 0,
          QuestionType : "mcq",
          Title: "",
          Options: {},
          AnswerIndex: 0,
        }],
    },
    };

export const getTest = createAsyncThunk(
    "test/getTest",
    async (id, { rejectWithValue }) => {
        try {
            const req = await axios.get(
                `${process.env.REACT_APP_API_URL}api/assessments/${id}`,
                { withCredentials: true }
            );
            const res = req.data;
            return res.data;

        } catch (error) {
            console.log("catch");
            return rejectWithValue(error.response.data);
        }
    }
);



export const getAllTests = createAsyncThunk(
  'test/getAllTests',
  async (_, { rejectWithValue, getState }) => {
    try {
    
  
      console.log(`${REACT_APP_API_URL}api/assessments`);
      const req = await axios.get(`${REACT_APP_API_URL}/api/assessments`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': authToken,
        },
      });

    
      const res = req.data;

      return res.data;
    } catch (error) {
      console.log('catch', error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);


export const createTest = createAsyncThunk(
    "test/createTest",
    async (data, { rejectWithValue }) => {
        try {
            const req = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/assessments/create`,
                data,
                { headers: {
                  'Content-Type': 'application/json',
                  'auth-token': authToken,
                }, }
            );
            const res = req.data;
            console.log("success",res)
            return res.data.assessment;
        } catch (error) {
            console.log("catch");
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const getAllTopics = createAsyncThunk(
  'test/getAllTopics',
  async (_, { rejectWithValue, getState }) => {
    try {
      const req = await axios.get(`${REACT_APP_API_URL}/api/admin/get-all-topics`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': authToken,
        },
      });
      const res = req.data;
      return res.sections;
    } catch (error) {
      console.log('catch', error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);


const testSlice = createSlice({
    initialState: testState,
    name: "test",

    reducers: {
        setTestName: (state, action) => {
            state.test.testName = action.payload;
        },
       
        setTestType: (state, action) => {
            state.test.testType = action.payload;
        },
        setTest: (state, action) => {
            state.test = { ...state.test, ...action.payload };
            console.log(state.test, "test");
        },

        setMcq: (state, action) => {
          const { sectionId, questions } = action.payload;
          console.log(sectionId, "action.payload");
          const id = sectionId.toString(); // Convert to string to use it as object key
      
          // Check if the section already exists in state
          if (state.test.sections[id]) {
              // If the section already exists, update its questions array
              state.test.sections[id].questions=questions;
          } else {
              // If the section doesn't exist, create a new section object
              state.test.sections[id] = {
                  type: "mcq",
                  questions: questions
              };
          }
      },

        setSections: (state, action) => {
            const payload = action.payload;
            const selectedSections = state.test.selectedSections || [];
            const sections = state.test.sections || [];
            // Check if the payload is already included in selectedSections or sections
            if (!selectedSections.includes(payload) && !sections.includes(payload)) {
              return {
                ...state,
                test: {
                  ...state.test,
                  selectedSections: [...selectedSections, payload],
                  sections: [...sections, payload],
                },
              };
            }
          
            // If the payload is already included, return the current state without changes
            return state;
          },
          
          removeSections: (state, action) => {
            state.test.selectedSections = state.test.selectedSections.filter((section) => section !== action.payload);
          },
        setQuestions: (state, action) => {
            state.test.questions = action.payload;
        },

        getSelectedSections: (state, action) => {
            return state.test.selectedSections;
        },
     
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTest.pending, (state, action) => {
                state.status = "loading";
                console.log("pending");
            })
            .addCase(getTest.fulfilled, (state, action) => {
              
               state.test = action.payload;
                
                console.log("fullfilled");
            })
            .addCase(getTest.rejected, (state, action) => {
                console.log(action.payload);

                // window.alert(action.payload);
            })
            .addCase(getAllTests.pending, (state, action) => {
                state.status = "loading";
                console.log("pending");
            }
            )
            .addCase(getAllTests.fulfilled, (state, action) => {
                 state.tests = action.payload;
                console.log("fullfilled");
            })
            .addCase(getAllTests.rejected, (state, action) => {
                console.error("Error fetching tests:", action.payload);
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(createTest.pending, (state, action) => {
                state.status = "loading";
                console.log("pending");
            })
            .addCase(createTest.fulfilled, (state, action) => {
               console.log(action.payload)
                state.testName = action.payload.name;
               
                state.testType = action.payload.level;
                
                console.log("fullfilled");
            })
            .addCase(createTest.rejected, (state, action) => {
                // console.log(action.payload);
                console.log(action.payload);

                window.alert(action.payload);
            })
            .addCase(getAllTopics.pending, (state, action) => {
                state.status = "loading";
                console.log("pending");
            }
            )
            .addCase(getAllTopics.fulfilled, (state, action) => {
                state.topics = action.payload;
                console.log("fullfilled");
            })
            .addCase(getAllTopics.rejected, (state, action) => {
                console.error("Error fetching topics:", action.payload);
                state.status = "failed";
                state.error = action.payload;
            })

    },
});

export const { setTestName ,setTest,setSections,removeSections,setQuestions,getSelectedSections,setMcq} = testSlice.actions;

export default testSlice.reducer;
