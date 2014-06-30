---
title: My Basic Markdown Workflow
layout: post
summary: My favorite tools in my Markdown workflow
tags:  [markdown, tools, R, dynamic documents]
---
#My Basic Markdown Workflow
*(The estimated reading time for this article is 4.5 minutes)*

I have recently made the switch to using [Markdown](http://daringfireball.net/projects/markdown/) almost exclusively in my writing workflows. The purpose of Markdown has been highlighted in several blogs over the last several years, and you can click [here](http://mathewmitchell.net/tutorials/markdown/#matters), and [here](http://brettterpstra.com/2011/08/31/why-markdown-a-two-minute-explanation/), and [here](http://chronicle.com/blogs/profhacker/markdown-the-syntax-you-probably-already-know/35295) for some of my favorite write-ups. 

It took me a while to find a setup I enjoyed. There were several issues I needed to workout before I was happy with my Markdown workflow:

1. I wanted the act of writing in Markdown to be enjoyable, and it is in it's simplicity, but I wanted the aesthetic experience to feel enjoyable.
2.  I wanted to be able to preview my Markdown with custom CSS (e.g., [Bootswatch](http://bootswatch.com) themes, etc.).
3. My Markdown prose needed to be exportable in several different formats (i.e., HTML, pdf, Word, etc.).
4. I wanted to be able to create and access Markdown files everywhere. 
5.  I wanted smart search capability for all my Markdown documents.
6. I wanted clipboard capability so that I could copy my writing in HTML or RTF format to the clipboard and easily paste into other formats (e.g., emails) with the proper formatting applied. 

What I settled on is as follows: 

- [Byword2](http://bywordapp.com) is the text editor that I chose for most of my writing. It's a beautiful application to work with, that allows me to easily focus on what I am working on at the sentence, paragraph, page or document level. Byword2 has zero bells and whistles other than a pure design aesthetic. I use Byword2 for almost everything: lab notebook, class notes, meeting notes, blog posts, short form prose, etc. 
- [nvALT](http://brettterpstra.com/projects/nvalt/) functions as a backend search API/database for all of my notes. nvALT is a fork of the popular note-taking app, Notational Velocity. nvALT has great smart search and filter capabilities. I use nvALT to quickly search through all of my Markdown writing (e.g., class notes, lab notes,  meeting notes, etc.), and make quick changes as needed. Creating a quick note is simple in nvALT, with a simple key shortcut you can create a new note faster than any other application, which is great for those moments where you need to quickly get something down to remember. Ultimately, I don't like the design aesthetic of nvALT, and it's not a tool I want to spend a good amount of time writing within, though plenty do and are very happy as a result. 
- nvALT's Notational Database is a folder that is created in the /Application Support/  folder when you install nvALT.  All the Markdown writing I do in Byword gets saved into this folder, and this is the folder nvALT looks into in order to execute its search functionality. 
	- I've moved this folder to Dropbox, which allows me to access my notes from the cloud. This also gives me more control over which mobile note taking apps I use with my iPhone and iPad Mini. I've still yet to iron out what app I like for my mobile needs, but am leaning towards [nvNotes](http://www.nvnotes.co.uk) because of its similarity with nvALT. However, I should mention creating content on mobile is not a priority for me, as I tend to use those devices primarily for media consumption. In addition, a Dropbox accessible folder allows me more control over the note-taking software I utilize across operating systems, and allows me to carefully tailor my Markdown workflow on the Windows machines that I frequent in my lab. 
- [Marked2](http://marked2app.com) is the app I use to render my Markdown writing with various custom style sheets (i.e., CSS). Marked2 instantly renders my writing every time I save it, and I like this feature because I'm easily distracted by live previews. Marked2 also allows me to easily export my Markdown, with custom CSS applied to the prose. Marked2's export feature also allows me to export the documents in various file-formats, including Word, which is handy when you get badgered into using Word for a particular task in collaborative efforts. In addition Marked2 provides clipboard capabilities, which automatically copies my formatting of the prose when I paste into email documents, etc. In addition, Marked2 has a host of analytic features to help writers including: collapsible sections and an automatic table of contents panel that makes navigating longer documents a breeze, advanced analysis including word count, reading time, Fog Index and Flesch-Kincaid scores, highlight text to get word and character counts for the selection, highlight word repetition and density, highlight overused words and custom keywords with wildcard support, manuscript format preview and output, support for previewing compiled Scrivener documents live. 
- [Scrivener](http://www.literatureandlatte.com/scrivener.php) is what I use to write long-form asymmetrical documents (e.g., thesis, manuscripts, dissertation, etc.). I like Scrivener because it provides me with all sorts of built in GUI features to organize my often asymmetrically fluid thought process (e.g., outlines, index cards, etc.). Scrivener allows me to write and utilize all these features with simultaneous integrated preview with Marked2. Cool! Finally, Scrivener saves all of my fluid work in a way that is very easily exportable to [GitHub](https://github.com), which allows me proper version control over these important documents.
- [R Markdown V2](http://rmarkdown.rstudio.com) is what I use for all data-related writing. R Markdown V2 allows complete integration of Markdown prose with all of my R analyses, and helps to make fully integrated dynamic documents. If you're still writing your research articles or briefs in Word you really need to stop now, and start working with R and markdown through R-Studio and its accompanying R Markdown V2 capabilities. This will be the topic of another post.

I find this workflow to be fast, integrated, beautiful and efficient. Try it out, and see if it works for you. 

