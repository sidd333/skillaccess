import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const authToken = localStorage.getItem("auth-token");

const testState = {
  testName: "",
  testDescription: "",
  testAttempts: "",

  // testStatus : "",
  assessments: {
    beginner: [],
    intermediate: [],
    advanced: [],
  },
  //all topics
  sections: [],

  selectedSections: [],

  questions: [
    {
      question: "question 1",
      options: ["option 1", "option 2", "option 3", "option 4"],
    },
    {
      question: "question 2",
      options: ["option 1", "option 2", "option 3", "option 4"],
    },
  ],
  test: {
    testName: "",
    questionType: "",
    // testStatus : "",
    sections: [],
    questions: [
      {
        Duration: 0,
        QuestionType: "mcq",
        Title: "",
        Options: [],
        AnswerIndex: 0,
      },
    ],
  },

  name: localStorage.getItem("testDetails")
    ? JSON.parse(localStorage.getItem("testDetails")).name
    : "",
  description: localStorage.getItem("testDetails")
    ? JSON.parse(localStorage.getItem("testDetails")).description
    : "",
  // JSON.parse(localStorage.getItem("testDetails")).description || "",
  attempts: 0,
  totalAttempts: localStorage.getItem("testDetails")
    ? JSON.parse(localStorage.getItem("testDetails")).totalAttempts
    : "",
  // JSON.parse(localStorage.getItem("testDetails")).totalAttempts || 0,
  totalTime: 0,
  totalQuestions: localStorage.getItem("testDetails")
    ? JSON.parse(localStorage.getItem("testDetails")).totalQuestions
    : null,
  topics: localStorage.getItem("topics")
    ? JSON.parse(localStorage.getItem("topics"))
    : [], //selected topics
  status: "",
  currentTopic: {}, //on edit
  TopicToBeAdded: {
    id: "",
    questions: [],
    findAnswers: [],
    essay: [],
    video: [],
    compiler: [],
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
  "test/getAllTests",
  async (_, { rejectWithValue, getState }) => {
    try {
      console.log(`get tests`);
      const req = await axios.get(`${REACT_APP_API_URL}/api/assessments`, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });

      const res = req.data;
      console.log(res);
      return res;
    } catch (error) {
      console.log("catch", error.response.data);
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
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      const res = req.data;

      return res.assessment;
    } catch (error) {
      console.log("catch");
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addQuestionToTopic = createAsyncThunk(
  "test/addQuestionToTopic",
  async (data, { rejectWithValue }) => {
    try {
      const req = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/college/add-questions/${data.id}/${data.type}`,
        { questions: [data.data] },
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );
      const res = req.data;

      return res.assessment;
    } catch (error) {
      console.log("catch");
      return rejectWithValue(error?.response?.data?.message || "");
    }
  }
);

export const getAllTopics = createAsyncThunk(
  "test/getAllTopics",
  async (_, { rejectWithValue, getState }) => {
    try {
      const req = await axios.get(
        `${REACT_APP_API_URL}/api/college/topics/all`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );
      const res = req.data;
      return res.topics;
    } catch (error) {
      console.log("catch", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTopicById = createAsyncThunk(
  "test/getTopicById",
  async (id, { rejectWithValue }) => {
    try {
      const req = await axios.get(
        `${REACT_APP_API_URL}/api/admin/topic/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );
      const res = req.data;
      return res.section;
    } catch (error) {
      console.log("catch", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const createTopic = createAsyncThunk(
  "test/createTopic",

  async (data, { rejectWithValue }) => {
    //   {

    //     "Heading": "DevOps 5",

    //     "Description": "The DevOps test assesses candidates' knowledge of DevOps concepts and practices and whether they can apply that knowledge to improve infrastructure, achieve faster time to market, and lower failure rates of new releases.",

    //     "Time": 10,

    //     "TotalQuestions": 10

    // }

    try {
      const req = await axios.post(
        `${REACT_APP_API_URL}/api/college/topics/create`,

        data,

        {
          headers: {
            "Content-Type": "application/json",

            "auth-token": authToken,
          },
        }
      );

      const res = req.data;

      return res.section;
    } catch (error) {
      console.log("catch", error.response.data);

      return rejectWithValue(error.response.data);
    }
  }
);

const testSlice = createSlice({
  initialState: testState,
  name: "test",
  reducers: {
    setAssessments: (state, action) => {
      state.assessments = {
        beginner: [],
        intermediate: [],
        advanced: [],
      };
    },
    addMcqToTopic: (state, action) => {
      state.TopicToBeAdded.questions = [
        ...state.TopicToBeAdded.questions,
        action.payload.question,
      ];
    },
    addFindAnsToTopic: (state, action) => {
      state.TopicToBeAdded.findAnswers = [
        ...state.TopicToBeAdded.findAnswers,
        action.payload.data,
      ];
    },
    addEssayToTopic: (state, action) => {
      state.TopicToBeAdded.essay = [
        ...state.TopicToBeAdded.essay,
        action.payload.data,
      ];
    },
    addVideoToTopic: (state, action) => {
      state.TopicToBeAdded.video = [
        ...state.TopicToBeAdded.video,
        action.payload.data,
      ];
    },
    addCompilerToTopic: (state, action) => {
      state.TopicToBeAdded.compiler = [
        ...state.TopicToBeAdded.compiler,
        action.payload.data,
      ];
    },
    addEssay: (state, action) => {
      state.topics[action.payload.id].essay = [
        ...state.topics[action.payload.id].essay,
        action.payload.data,
      ];
      localStorage.setItem("topics", JSON.stringify(state.topics));
      // localStorage.setItem("topics", state.topics);
    },
    addFindAns: (state, action) => {
      state.topics[action.payload.id].findAnswers = [
        ...state.topics[action.payload.id].findAnswers,
        action.payload.data,
      ];

      localStorage.setItem("topics", JSON.stringify(state.topics));
    },
    addMcq: (state, action) => {
      state.topics[action.payload.id].questions = [
        ...state.topics[action.payload.id].questions,
        action.payload.question,
      ];
      // for (let i = 0; i < state.topics.length; i++) {
      //   if (state.currentTopic._id === state.topics[i]._id) {
      //
      //   }
      // }
      // state.currentTopic.questions = [
      //   ...state.currentTopic.questions,
      //   action.payload.question,
      // ];
      localStorage.setItem("topics", JSON.stringify(state.topics));
      // localStorage.setItem("topics", state.topics);
    },
    addCompiler: (state, action) => {
      console.log("compiler");
      state.topics[action.payload.id].compiler = [
        ...state.topics[action.payload.id].compiler,
        action.payload.data,
      ];

      localStorage.setItem("topics", JSON.stringify(state.topics));
      // localStorage.setItem("topics", state.topics);
    },

    addVideo: (state, action) => {
      state.topics[action.payload.id].video = [
        ...state.topics[action.payload.id].video,
        action.payload.data,
      ];
      localStorage.setItem("topics", JSON.stringify(state.topics));
      // localStorage.setItem("topics", state.topics);
    },
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
        state.test.sections[id].questions = questions;
      } else {
        // If the section doesn't exist, create a new section object
        state.test.sections[id] = {
          type: "mcq",
          questions: questions,
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
      state.test.selectedSections = state.test.selectedSections.filter(
        (section) => section !== action.payload
      );
    },
    setQuestions: (state, action) => {
      state.test.questions = action.payload;
    },

    getSelectedSections: (state, action) => {
      return state.test.selectedSections;
    },

    setTestBasicDetails: (state, action) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.totalAttempts = action.payload.totalAttempts;
      state.totalQuestions = action.payload.totalQuestions;

      state.status = "active";
      localStorage.setItem(
        "testDetails",
        JSON.stringify({
          name: state.name,
          description: state.description,
          totalAttempts: state.totalAttempts,
          totalQuestions: state.totalQuestions,
        })
      );
      console.log(action.payload, "action.payload");
      // console.log(current(state));
    },
    setTestSelectedTopics: (state, action) => {
      state.topics = action.payload;
      // localStorage.setItem(
      //   "test",
      //   JSON.stringify({
      //     name: action.payload.name,
      //     description: action.payload.description,
      //     totalAttempts: action.payload.totalAttempts,
      //     status: "active",
      //   })
      // );
      localStorage.setItem("topics", JSON.stringify(action.payload));
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
      })
      .addCase(getAllTests.fulfilled, (state, action) => {
        let assessments = action.payload.assessments;
        assessments.map((assement) => {
          if (assement.level === "beginner") {
            state.assessments.beginner = [
              ...state.assessments.beginner,
              assement,
            ];
          } else if (assement.level === "intermediate") {
            state.assessments.intermediate = [assement];
          } else {
            state.assessments.advanced = [assement];
          }
        });
        // console.log(action.payload);
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
        console.log(action.payload);
        state.testName = action.payload.name;
        state.testDescription = action.payload.description;
        state.testAttempts = action.payload.totalAttempts;
        state.totalQuestions = action.payload.totalQuestions;
        state.name = "";
        state.totalAttempts = null;
        state.description = "";
        state.currentTopic = {};

        console.log("fullfilled");
      })
      .addCase(createTest.rejected, (state, action) => {
        // console.log(action.payload);
        console.log(action.payload);

        // window.alert(action.payload);
      })
      .addCase(getAllTopics.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(getAllTopics.fulfilled, (state, action) => {
        state.sections = action.payload;
        console.log("fullfilled");
      })
      .addCase(getAllTopics.rejected, (state, action) => {
        console.error("Error fetching topics:", action.payload);
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getTopicById.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(getTopicById.fulfilled, (state, action) => {
        state.currentTopic = action.payload;
        // console.log(action.payload);
        console.log("fullfilled");
      })
      .addCase(getTopicById.rejected, (state, action) => {
        console.error("Error fetching topic:", action.payload);
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createTopic.pending, (state, action) => {
        // return action.payload;
      })
      .addCase(createTopic.fulfilled, (state, action) => {
        state.TopicToBeAdded.id = action.payload._id;
      })
      .addCase(createTopic.rejected, (state, action) => {
        // return action.payload;
      });
  },
});

export const {
  addMcq,
  addEssay,
  addFindAns,
  setTestName,
  setTest,
  setSections,
  removeSections,
  setQuestions,
  getSelectedSections,
  setMcq,
  addCompiler,
  addVideo,
  setTestBasicDetails,
  setTestSelectedTopics,
  addMcqToTopic,
  addFindAnsToTopic,
  addEssayToTopic,
  addVideoToTopic,
  addCompilerToTopic,
  setAssessments,
} = testSlice.actions;

export default testSlice.reducer;
