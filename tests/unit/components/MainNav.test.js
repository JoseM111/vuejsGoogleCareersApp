/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import MainNav from "../../../src/components/main-nav/MainNav.vue";

describe("MainNav", () => {
  // company name test
  it("display's the company name", () => {
    const mainNavWrapper = mount(MainNav);

    // console.log("running mainNavWrapper text:", mainNavWrapper.text());
    expect(mainNavWrapper.text()).toMatch("Destiny Under Sacrifice Careers");
  });

  // displays menu items test
  it("displays menu items for navigation", () => {
    const mainNavWrapper = mount(MainNav);

    // searching for list items
    const navigationMenuItems = mainNavWrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuText = navigationMenuItems.map((item) => item.text());

    // console.log(navigationMenuText)
    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at DAS",
      "How we Hire",
      "Students",
      "Jobs",
    ]);
  });

  /* =============================
   *       log in & out test
   *  ============================= */
  describe("when the user is logged out", () => {
    // test login
    it("should prompt the user to log in", () => {
      const mainNavWrapper = mount(MainNav);

      /* instance of components to test */
      const loginButton = mainNavWrapper.find("[data-test='login-button']");

      // we expect the button to exist
      expect(loginButton.exists()).toBe(true);
    });

    // should show user profile picture
    describe("when user is logged out", () => {
      // should display profile picture
      it("should display user profile picture", async () => {
        const mainNavWrapper = mount(MainNav);
        
        let profileImage = mainNavWrapper.find("[data-test='profile-image']");
        // checking if the component exist
        expect(profileImage.exists()).toBe(false);
      
        const loginButton = mainNavWrapper.find("[data-test='login-button']");
        // trigger simulates an action/event & is async
        await loginButton.trigger("click")
        
        // need to use the find method again because of the click event
        profileImage = mainNavWrapper.find("[data-test='profile-image']");
        // we expect the image to be there
        expect(profileImage.exists()).toBe(true);
      });
    });
  });
});







