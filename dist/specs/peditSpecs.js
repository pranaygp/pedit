'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var testPage = function testPage() {
	_classCallCheck(this, testPage);

	this.container = document.createElement("div");

	this.peditParagraph = document.createElement("p");
	this.peditParagraph.setAttribute("class", "pedit");
	this.peditParagraph.setAttribute("data-pedit", "test");
	this.peditParagraph.innerHTML = "Hello Test!";
	this.container.appendChild(this.peditParagraph);

	this.nonPeditParagraph = document.createElement("p");
	this.nonPeditParagraph.setAttribute("class", "no-pedit");
	this.nonPeditParagraph.innerHTML = "Please give me pedit.";
	this.container.appendChild(this.nonPeditParagraph);

	document.body.appendChild(this.container);
};

function setupTestPage() {}

describe("u2k", function () {

	it("returns text", function () {
		expect(u2k("hello")).toBe("hello");
	});

	it("replaces . with (dot)", function () {
		expect(u2k("t.e.s.t")).toBe("t(dot)e(dot)s(dot)t");
	});

	it("strips www", function () {
		expect(u2k("www.google.com")).toBe("google(dot)com");
	});
});

describe("getAllElementsWithAttribute", function () {

	var mockPage;

	beforeEach(function () {
		mockPage = new testPage();
	});

	it("does not return null", function () {
		expect(getAllElementsWithAttribute("data-pedit")).not.toBeNull();
	});

	it("is defines", function () {
		expect(getAllElementsWithAttribute("data-pedit")).toBeDefined();
	});

	it("contains pedit enabled elements", function () {
		expect(getAllElementsWithAttribute("data-pedit")).toContain(mockPage.peditParagraph);
	});

	it("does not contain non-pedit enabled elements", function () {
		expect(getAllElementsWithAttribute("data-pedit")).not.toContain(mockPage.nonPeditParagraph);
	});
});

describe("replaceDataInDOM", function () {

	var peditData = { "test": "Hello World!" };

	beforeEach(function () {
		var mockPage;
		mockPage = new testPage();
		replaceDataInDOM(peditData);
	});

	it("replaces pedit enabled tags", function () {
		expect(document.querySelector('.pedit').innerHTML).toEqual("Hello World!");
	});

	it("does not replace non-pedit enabled tage", function () {
		expect(document.querySelector('.no-pedit').innerHTML).toEqual("Please give me pedit.");
	});
});