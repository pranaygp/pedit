# pedit [![Build Status](https://travis-ci.org/pranaygp/pedit.svg?branch=develop)](https://travis-ci.org/pranaygp/pedit)
An easy way to make your websites editable! 

![pedit in action!](http://g.recordit.co/tdLfLYW4Cf.gif)

pedit helps you make the text on your site easily editable with the help of a [chrome extension][extension]. This could be helpful when you're making a website for a client who wants to keep their site updated, or if you just wanna easily edit the content on your own site without messing with html or pushing updates.

pedit works by dynamically loading all pedit enabled text from Firebase.

It's as easy as 1, 2, 3...

1. You use the `data-pedit` attribute in your html code on elements that you/your client might want to edit in the future. 
2. When viewing the site on chrome with the [extension][extension], you'll see the pedit logo in your address bar. Hit it!
3. Your website magically becomes editable (after authenticating you, ofcourse). All changes made are saved (as a hidden bonus, changes are live and updates are pushed to everyone viewing your page in realtime)!

## Installation

### NPM installation

Run this command to fetch required scripts

```bash
 $ npm install pedit-cms
```

Then, include the following code in your website

```html
 <script src="node_modules/pedit-cms/dist/pedit.js"></script>
```

### Bower installation

Run this command to fetch required scripts

```bash
 $ bower install pedit-cms
```

Then, include the following code in your website

```html
 <script src="bower_components/pedit/dist/pedit.js"></script>
```

### Source install

#### pedit 
Download the [latest release][pedit-zip] and extract it into your site's source directory.

Then, include the following code in your website

```html
 <script src="pedit/dist/pedit.js"></script>
```

## Usage

After installing the required js scripts and ensuring that you **included the js files for every page where you want to enable pedit**, 

Add the `data-pedit` attribute to any html element that you want to make editable. It's `value` should be an ID that you want to associate with that element.

**`data-pedit` values should be unique accross all pages in the same domain, unless you want elements to share content**

> Using the same `data-pedit` value on multiple elements will give them the same text data. This can be useful for common elements across pages like footer description.

Example:

```html
<body>
...
  <h1 data-pedit="title">Title</h1>
  <p data-pedit="paragraph">Lorem ipsum dolor sit amet</p>
  <p data-pedit="paragraph-2"></p>
...
</body>
```

Example 2 (Notice how using the same `data-pedit` value is useful here):

**index.html**
```html
<body>
...
  <footer>
    <p data-pedit="copyright-line">pedit. All rights reserved</p>
  </footer>
...
</body>
```

**about.html**
```html
<body>
...
  <footer>
    <p data-pedit="copyright-line">pedit. All rights reserved</p>
  </footer>
...
</body>
```
When the site's deployed, visit the url using chrome. With the [chrome extension][extension] installed, you'll see the pedit logo in the action bar. Click it to start editing content.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Pranay Prakash - [Personal Site](http://pranayprakash.co), [LinkedIn](http://linkedin.com/in/pranaygp), [Github](http://github.com/pranaygp)


[extension]: https://chrome.google.com/webstore/detail/pedit/adkanmbgbpddnlmijakakfajlcokkfje
[pedit-zip]: https://github.com/pranaygp/pedit/archive/0.4.0.zip
