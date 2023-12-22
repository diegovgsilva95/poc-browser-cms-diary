# Overview
**Proof-of-concept** of a **simple "offline" CMS** (Content Management System). Using a [`contenteditable`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) element and some **browser-based storage** such as [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), it's possible to **store notes, documents and even images** (pasted from the clipboard into the contents of editable element, in which it'll be placed as a `data` URI).

# Motivation
There's a bunch of CMS frameworks out there, such as [**Wordpress**](https://wordpress.com/pricing/), [**Drupal**](https://www.drupal.org/), as well as online blogging/microblogging platforms such as [**Tumblr**](https://www.tumblr.com). All of them depends on a not-so-simple infrastructure, installing **PHP** or other **server-side engines**, a server running **24/7**, etc. In **Android**, I tested so many diary apps such as [**Logseq**](https://github.com/logseq/logseq), [**Notally**](https://github.com/OmGodse/Notally), I even tried to use [**instant messaging platforms**](https://telegram.org/) as a form of ***"keeping notes"***, but while they somehow work for keeping notes, **I needed a specific space**, _my_ space (pun not intended). I need somewhere mine to write what's in my mind, while [**Keeping It Simple**](https://en.wikipedia.org/wiki/KISS_principle). I needed a way to fast-switch between notes, as I'm constantly a re-writer of my own writings, in order to improve my (poetic) writing skills.  

# Dependencies (current)
- [`jquery`](https://github.com/jquery/jquery) (for better DOM manipulation than the HTML5 Vanilla ones, also creates paragraph for an emptied editor)
- [`feather-icons`](https://github.com/feathericons/feather) (it's self-describing... icons.)
- [`moment`](https://github.com/moment/moment) (I need to format the date and time in a better way than needing to read and recalculate all getters for some `Date` instance, so I use **moment** for showing the date and time in the title)

# Planned improvements
Note that these are just ideas, they may or may not be implemented in the future (by the way, it's just a PoC).

- Add a `manifest.json` in order to inform the browser the SPA nature of this project, allowing it to be "installed" as an offline app. It's currently not an offline app, although it's originally intended to be so.
- Add interface for **Cache Storage**
- Add interface for **other means of storing data**, including **online** such as Google Drive, MS OneDrive, as well as using **Android's Intents URIs to trigger a "share" action** from a link in the HTML (Android Apps/Activities can be invoked through specific URI schemas that can be used in the anchor's `href`).
- Add a **toolbar**. While the HTML has a `.toolbar` element, I didn't actually implement it. It is supposed to contain buttons for formatting functionalities such as **Bold**, *Italic*, Underline, as well as controls for font size and color for specific selected text/paragraph, alignment, loading image from filesystem, etc. This idea could be replaced by the next idea:
- Allow usage of **WYSIWYG editor libraries**, such as **CKEditor**.
- Use **Vue** to structure and organize the components of the page (such as `FileList`, `Editor`, `Toolbar`, `EditorTitle`)
- Add some **settings page/component**, in order to allow changes in font, themes, etc.
- Add **themes** (although I personally prefer the current styling, #FFFFFF text on #000000 bg with gray borders, high contrast, best visibility, better for OLED displays).
- **Encryption** of content and **password-protection** of notes
- Add some sort of **compression**, such as Huffman's, GZIP, etc, as the nature of any given text use to have repetitive patterns along the text.
- Add some sort of **backup/restore**. The browser cache can be accidentaly emptied and, if this happens, all notes go to the scary voids of /dev/null. *We need some savior for holding us so we won't fall in that bottomless pit*.

# How to run (how I usually run it)
- Clone the repo and `cd` to it.
- `npm install`
- Open the folder with VS Code (i.e. simply run `code .`)
- Use [**Live Server**](https://github.com/ritwickdey/vscode-live-server) VS Code extension specially configured to serve the page via HTTPS to the LAN and to the localhost.
- Access **https://`(ip.of.machine)`/index.htm** and start writing notes. They're automatically saved after 1 second of no typing
- Load notes simply clicking on their titles in the left-side list.
- Create a new note simply clicking in a empty spot of the left-side list (i.e. clicking in the empty space below the list items) or clicking in the paper-icon button.
- Delete a note selecting it on the left-side list, clicking the trash-icon button and confirming the action.
- That's all, for now (see [**Planned Improvements**](#planned-improvements))

# How to run (alternative way)
We can take advantage on the [**GitHub Pages**](https://pages.github.com/) in order to run it without the need of hosting a local server. In this way, you can fork this project and deploy an action for GH Pages setup.

