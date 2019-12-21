import React from "react";
import renderer from "react-test-renderer";

import App from "../App";

describe("Testing Snapshoot:", () => {
  const testRenderer = renderer.create(<App />);
  const testInstance = testRenderer.root;

  it("Render correctly", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it("Only one root", () => {
    expect(testInstance.findAllByProps({ className: "App" }).length).toBe(1);
  });

  it("Header is conform :", () => {
    const header = testInstance.findAllByProps({ className: "header" });

    expect(header.length).toBe(1);
    expect(header[0].children).toEqual(["Queens playlist selector"]);
    expect(header[0].type).toBe("div");
  });

  describe("Test Home page (./):", () => {
    it("Only one container", () => {
      expect(
        testInstance.findAllByProps({ className: "container" }).length
      ).toBe(1);
    });

    const splitPart = testInstance.findAllByProps({ className: "split" });
    it("got 3 Split Part", () => {
      expect(splitPart.length).toBe(3);
    });

    describe("Test Search Bars:", () => {
      const search = testInstance.findAllByProps({
        className: "search-bar"
      });

      it("got 2 Search Bars", () => {
        expect(search.length).toBe(2);
      });

      it.each([0, 1])("test Search Bar number(%i)", input => {
        expect(search[input].type).toBe("form"); //It's a form
        expect(search[input].children.length).toBe(1); //With only one child

        //Test the child (input) props
        expect(search[input].children[0].props).toEqual({
          type: "text",
          name: "searchBar",
          placeholder: "Filter by Song Name",
          value: "",
          onChange: expect.any(Function),
          className: "input"
        });
      });
    }); // end seachBar test

    describe("Test Song List", () => {
      const songLists = testInstance.findAllByProps({
        className: "song-list"
      });

      it("got 2 Song List", () => {
        expect(songLists.length).toBe(2);
      });

      it.each([
        [0, 189],
        [1, 0]
      ])("test Song List number(%i)", (input, expected) => {
        expect(songLists[input].type).toBe("div"); //It's a div
        expect(songLists[input].children.length).toBe(1); //With only one child

        const songListChild = songLists[input].children[0]; //reduce code verbose
        expect(songListChild.children.length).toBe(expected); //Number of song expected (189 or 0)
        expect(songListChild.props.isSelectedList).toBe(Boolean(input));

        const songArray = songListChild.props.songlist; //reduce code verbose
        for (let songId = 0; songId < songArray.length; songId++) {
          expect(songArray[songId]).toEqual({
            id: songId + 1,
            selected: false,
            title: expect.any(String)
          });
        }
      });
    }); // end Song List test

    describe("Test Middle Split", () => {
      it("got 3 part in middle split:", () => {
        expect(splitPart[1].children.length).toBe(3); // logo, playingframe, export button
      });

      it("Test logo:", () => {
        expect(splitPart[1].children[0].type).toBe("img");
        expect(splitPart[1].children[0].props).toEqual({
          alt: "logo",
          id: "logo",
          src: "../images/logo_queen.png"
        });
      });

      it("test Playing Frame", () => {
        //the iframe test wont go too deep due to it's nature

        const PlayingFrame = splitPart[1].children[1]; //Again reduce code verbose

        expect(PlayingFrame.type).toBe("div");
        expect(PlayingFrame.props.className).toBe("playing-frame");

        expect(PlayingFrame.children.length).toBe(1); //iframe

        // iframe
        expect(PlayingFrame.children[0].type).toBe("iframe");
        expect(PlayingFrame.children[0].props).toEqual({
          title: "Playlist",
          scrolling: "no",
          frameBorder: expect.any(String),
          src: expect.any(String),
          width: expect.any(String),
          height: expect.any(String)
        });
      });

      it("test Export Button", () => {
        expect(splitPart[1].children[2].props.validatePlaylist).toEqual(
          expect.any(Function)
        );

        const validateDiv = splitPart[1].children[2].children[0];

        //Wrapper div:
        expect(splitPart[1].children[2].children.length).toBe(1);
        expect(validateDiv.type).toBe("div");

        expect(validateDiv.children.length).toBe(3); // button, br, switch

        //button :
        expect(validateDiv.children[0].type).toBe("button");
        expect(validateDiv.children[0].props).toEqual({
          id: "validate",
          type: "button",
          onClick: expect.any(Function),
          children: "Validate Playlist" //text of the button
        });

        //br
        expect(validateDiv.children[1].type).toBe("br");

        //switch label
        expect(validateDiv.children[2].type).toBe("label");
        expect(validateDiv.children[2].props.className).toBe("switch");

        expect(validateDiv.children[2].children.length).toBe(2); // input checkbox, slider

        //input checkbox
        expect(validateDiv.children[2].children[0].type).toBe("input");
        expect(validateDiv.children[2].children[0].props).toEqual({
          checked: false,
          onChange: expect.any(Function),
          type: "checkbox"
        });

        //slider
        expect(validateDiv.children[2].children[1].type).toBe("span");
        expect(validateDiv.children[2].children[1].props).toEqual({
          className: "slider round"
        });
      }); //end test Export Button
    }); // end Test Middle Split
  }); // end Test Home page

  //testInstance.findAllByProps({ className: "song-list" }).length
});
