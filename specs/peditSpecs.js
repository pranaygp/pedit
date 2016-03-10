'use strict';

class testPage {
	constructor() {
		this.container = document.createElement("div");

		this.peditParagraph = document.createElement("p");
		this.peditParagraph.setAttribute("class","pedit");		
		this.peditParagraph.setAttribute("data-pedit","test");
		this.peditParagraph.innerHTML = "Hello Test!";
		this.container.appendChild(this.peditParagraph);

		this.nonPeditParagraph = document.createElement("p");
		this.nonPeditParagraph.setAttribute("class","no-pedit");
		this.nonPeditParagraph.innerHTML = "Please give me pedit.";
		this.container.appendChild(this.nonPeditParagraph);

		document.body.appendChild(this.container);
	}
}

function setupTestPage() {
	
}

describe("u2k", () => {

	it("returns text", () => {
    	expect(u2k("hello")).toBe("hello");
 	});

	it("replaces . with (dot)", () => {
		expect(u2k("t.e.s.t")).toBe("t(dot)e(dot)s(dot)t")
	})

	it("strips www", () => {
		expect(u2k("www.google.com")).toBe("google(dot)com");
	})

});

describe("getAllElementsWithAttribute", () => {

	var mockPage;

	beforeEach(() => {
		mockPage = new testPage();
	});

	it("does not return null", () => {
		expect(getAllElementsWithAttribute("data-pedit")).not.toBeNull();
	})

	it("is defines", () => {
		expect(getAllElementsWithAttribute("data-pedit")).toBeDefined();
	})

	it("contains pedit enabled elements", () => {
		expect(getAllElementsWithAttribute("data-pedit")).toContain(mockPage.peditParagraph);
	})

	it("does not contain non-pedit enabled elements", () => {
		expect(getAllElementsWithAttribute("data-pedit")).not.toContain(mockPage.nonPeditParagraph);
	})
})

describe("replaceDataInDOM", () => {

	let peditData = {"test":"Hello World!"};

	beforeEach(() => {
		var mockPage;
		mockPage = new testPage();
		replaceDataInDOM(peditData);
	})

	it("replaces pedit enabled tags", () => {
		expect(document.querySelector('.pedit').innerHTML).toEqual("Hello World!");
	})

	it("does not replace non-pedit enabled tage", () => {
		expect(document.querySelector('.no-pedit').innerHTML).toEqual("Please give me pedit.");
	})

})