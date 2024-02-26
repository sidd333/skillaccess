
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const authToken = localStorage.getItem("auth-token");

const testState = {
  testName: "",
  testDescription: "",
  testType: "",

  sections: [], // All sections from the database
  assessments: [], // All assessments from the database
  name: "",
  description: "",
  attempts: 0,
  totalAttempts: 0,
  totalTime: 0,
  totalQuestions: 0,
  topics: [], //selected topics
  status: "",
  currentTopic: {}, //on edit
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



export const getAllTopics = createAsyncThunk(
  "test/getAllTopics",
  async (_, { rejectWithValue, getState }) => {
    try {
      const req = await axios.get(
        `${REACT_APP_API_URL}/api/collge/topics/all`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );
      const res = req.data;
      return res.sections;
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
            "auth-token": authToken,
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
    addMcq: (state, action) => {
      for (let i = 0; i < state.topics.length; i++) {
        if (state.currentTopic._id === state.topics[i]._id) {
          state.topics[i].questions = [
            ...state.topics[i].questions,
            action.payload.question,
          ];
        }
      }
      state.currentTopic.questions = [
        ...state.currentTopic.questions,
        action.payload.question,
      ];
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
      state.status = "active";
      // console.log(current(state));
    },
    setTestSelectedTopics: (state, action) => {
      state.topics = action.payload;
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
      .addCase(createTest.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(createTest.fulfilled, (state, action) => {
        console.log(action.payload);
        state.testName = action.payload.name;

        state.testType = action.payload.level;

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
        state.status = "loading";
        console.log("pending");
      })
      .addCase(createTopic.fulfilled, (state, action) => {
        state.sections = action.payload;
        console.log("fullfilled");
      })
      .addCase(createTopic.rejected, (state, action) => {
        console.error("Error creating topic:", action.payload);
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getAllAssessments.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(getAllAssessments.fulfilled, (state, action) =>

      {
        state.assessments = action.payload;
        console.log("fullfilled");
      })
      .addCase(getAllAssessments.rejected, (state, action) => {
        console.error("Error fetching assessments:", action.payload);
        state.status = "failed";
        state.error = action.payload;
      });

  },
});

export const {
  addMcq,
  setTestName,
  setTest,
  setSections,
  removeSections,
  setQuestions,
  getSelectedSections,
  setMcq,
  setTestBasicDetails,
  setTestSelectedTopics,
} = testSlice.actions;

export default testSlice.reducer;
