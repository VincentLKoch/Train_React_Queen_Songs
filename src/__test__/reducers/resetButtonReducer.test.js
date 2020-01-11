import resetButtonReducer from "../../reducers/resetButtonReducer";

describe("Filter Reducer Tests", () => {
  it.each([
    ["Init test", , { type: "INIT" }, { isResetChecked: false }],
    [
      "Unkown Type test ",
      { DummyState: true },
      { type: "Dummy" },
      { DummyState: true }
    ],
    [
      "CHANGE_RESET_PLAYLIST Action Test",
      { isResetChecked: true },
      { type: "CHANGE_RESET_PLAYLIST" },
      { isResetChecked: false }
    ],
    [
      "CHANGE_RESET_PLAYLIST Action Test2",
      { isResetChecked: false },
      { type: "CHANGE_RESET_PLAYLIST" },
      { isResetChecked: true }
    ]
  ])("%s", (testName, state, action, outputState) => {
    expect(resetButtonReducer(state, action)).toEqual(outputState);
  });
});
