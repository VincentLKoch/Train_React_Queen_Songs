import songReducer from "../../reducers/songReducer";

import { allSongs } from "../../songs";

describe("Filter Reducer Tests", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const allSongsObject = [];
  for (let it = 0; it < allSongs.length; it++) {
    allSongsObject.push({ id: it + 1, title: allSongs[it], selected: false });
  }
  const initialState = {
    songsList: allSongsObject,
    selectedSongList: []
  };

  it.each([
    ["Init test", , { type: "INIT" }, initialState],

    [
      "Unkown Type test ",
      { DummyState: true },
      { type: "Dummy" },
      { DummyState: true }
    ],

    [
      "SELECT_SONG Adding Action Test",
      {
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: false,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: []
      },

      {
        type: "SELECT_SONG",
        payload: { id: 2 }
      },
      {
        selectedSongList: [], // if payload.selected dont exist or = false
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: true,
            title: "A Dozen Red Roses For My Darling"
          }
        ]
      }
    ],

    [
      "SELECT_SONG Adding2 Action Test",
      {
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: false,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: []
      },
      {
        type: "SELECT_SONG",
        payload: { id: 2, selected: true }
      },
      {
        selectedSongList: [{ id: 2, selected: true }],
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: true,
            title: "A Dozen Red Roses For My Darling"
          }
        ]
      }
    ],

    [
      "SELECT_SONG Adding3 + Sort Action Test",
      {
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: false,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: [
          {
            id: 5,
            selected: true
          },
          {
            id: -1,
            selected: true
          }
        ]
      },
      {
        type: "SELECT_SONG",
        payload: { id: 2, selected: true }
      },
      {
        selectedSongList: [
          { id: -1, selected: true },
          { id: 2, selected: true },
          { id: 5, selected: true }
        ],
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: true,
            title: "A Dozen Red Roses For My Darling"
          }
        ]
      }
    ],

    [
      "SELECT_SONG Removing Action Test",
      {
        songsList: [
          {
            id: 1,
            selected: true,
            title: "'39"
          },
          {
            id: 2,
            selected: true,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: [
          { id: 1, selected: true, title: "'39" },
          { id: 2, selected: true, title: "testing" }
        ]
      },
      {
        type: "SELECT_SONG",
        payload: { id: 2, selected: false }
      },
      {
        selectedSongList: [{ id: 1, selected: true, title: "'39" }],
        songsList: [
          {
            id: 1,
            selected: true,
            title: "'39"
          },
          {
            id: 2,
            selected: false,
            title: "A Dozen Red Roses For My Darling"
          }
        ]
      }
    ]
  ])("%s", (testName, state, action, outputState) => {
    expect(songReducer(state, action)).toEqual(outputState);
  });

  it.each([
    [
      "VALIDATE_PLAYLIST EMPTY No reset Action test ",
      {
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: false,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: []
      },
      { type: "VALIDATE_PLAYLIST", payload: false },
      {
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: false,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: []
      }
    ],

    [
      "VALIDATE_PLAYLIST EMPTY With reset Action test ",
      {
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: false,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: []
      },
      { type: "VALIDATE_PLAYLIST", payload: false },
      {
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: false,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: []
      }
    ],

    [
      "VALIDATE_PLAYLIST No reset Action test ",
      {
        songsList: [
          {
            id: 1,
            selected: true,
            title: "'39"
          },
          {
            id: 2,
            selected: true,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: [
          {
            id: 1,
            selected: true,
            title: "'39"
          },
          {
            id: 2,
            selected: true,
            title: "A Dozen Red Roses For My Darling"
          }
        ]
      },
      { type: "VALIDATE_PLAYLIST", payload: false },
      {
        songsList: [
          {
            id: 1,
            selected: true,
            title: "'39"
          },
          {
            id: 2,
            selected: true,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: [
          {
            id: 1,
            selected: true,
            title: "'39"
          },
          {
            id: 2,
            selected: true,
            title: "A Dozen Red Roses For My Darling"
          }
        ]
      }
    ],

    [
      "VALIDATE_PLAYLIST With reset Action test ",
      {
        songsList: [
          {
            id: 1,
            selected: true,
            title: "'39"
          },
          {
            id: 2,
            selected: true,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: [
          {
            id: 1,
            selected: true,
            title: "'39"
          },
          {
            id: 2,
            selected: true,
            title: "A Dozen Red Roses For My Darling"
          }
        ]
      },
      { type: "VALIDATE_PLAYLIST", payload: true },
      {
        songsList: [
          {
            id: 1,
            selected: false,
            title: "'39"
          },
          {
            id: 2,
            selected: false,
            title: "A Dozen Red Roses For My Darling"
          }
        ],
        selectedSongList: []
      }
    ]
  ])("%s", (testName, state, action, outputState) => {
    jest.spyOn(window, "alert").mockImplementation(() => {});

    expect(songReducer(state, action)).toEqual(outputState);

    expect(window.alert).toHaveBeenCalledTimes(
      +(state.selectedSongList.length > 0) //call 1 if there is selected song
    );

    if (state.selectedSongList.length > 0) {
      expect(window.alert).toHaveBeenCalledWith([
        "'39",
        "\nA Dozen Red Roses For My Darling"
      ]);
    }
  });
});
