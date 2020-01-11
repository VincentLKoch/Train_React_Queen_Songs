import filterReducer from "../../reducers/filterReducer";

describe("Filter Reducer Tests", () => {
  it.each([
    ["Init test", , { type: "INIT" }, { filter: ["", ""] }],
    [
      "Unkown Type test ",
      { DummyState: true },
      { type: "Dummy" },
      { DummyState: true }
    ],
    [
      "FILTER_SONG all song list Action Test",
      { filter: ["", ""] },
      {
        type: "FILTER_SONG",
        payload: { isSelectedList: false, filterContent: "dummy" }
      },
      { filter: ["dummy", ""] }
    ],
    [
      "FILTER_SONG selected song list Action Test",
      { filter: ["", ""] },
      {
        type: "FILTER_SONG",
        payload: { isSelectedList: true, filterContent: "dummy" }
      },
      { filter: ["", "dummy"] }
    ],
    [
      "RESET_FILTERS Action Test",
      { filter: ["A crazy", "Under"] },
      {
        type: "RESET_FILTERS"
      },
      { filter: ["", ""] }
    ]
  ])("%s", (testName, state, action, outputState) => {
    expect(filterReducer(state, action)).toEqual(outputState);
  });
});
