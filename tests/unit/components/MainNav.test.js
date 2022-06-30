/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import MainNav from "@/components/main-nav/MainNav.vue";

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
});
