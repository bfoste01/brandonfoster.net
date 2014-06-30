---
title: An Argument for Adopting Markdown Into Your Workflow
layout: post
summary:
tags:  [Mardown, RStudio, knitr, Pandoc, HTML, Java]
---
#Why Markdown?

*(The estimated time to read this article is 2.1 minutes)*

##Goal
By the conclusion of this post I hope you have a better understanding of why Markdown is an important tool to adopt into your workflows. 

##The Problem
Many of the tools of academia are memetic in their adoption by new waves of graduate students. Microsoft Word is one of those tools. You probably write with Word, and can not imagine a world without it. Using Word has many problems. Here are a few:

- Word wraps your content in a proprietary file format.
- In doing so, it inserts many hidden formatting characters into your content (i.e., try copying and pasting your word text into emails, text editors, older versions of Word, content management systems, etc.)
- Increased probability of loosing your content across time. If you have ever collaborated with someone who utilizes a newer feature in Word when you are stuck with an old version then you know what I mean. 
- The user needs to manually apply formats. 
- An inability to create dynamic documents (e.g., integrating your writing with your analyses, tables, figures and citations).

##What is Markdown?
Markdown is a simple and flexible plain text. Therefore, the filetype is non-proprietary, and you can be totally sure that your content will be future proof. Markdown was created by John Gruber as a formatting language that is easily readable by humans. In this sense you can use Markdown to assign structure to your prose. At its core Markdown is a deceptively simple software that is written in Perl, and converts your plain text syntax to HTML. However, don't let the terminology fool you because Markdown was designed so content could be published "as is," and current extensions allow you to write for a variety of formats simultaneously (i.e., .html, .docx, .rtf). This means that by using Markdown your content is easily transportable and viewable across multiple platforms. 

##Extending Markdown 

Two tools should help make Markdown and indispensable part of your workflows. [knitr](http://yihui.name/knitr/) allows you to weave together syntax and Markdown into an integrated HTML document. What this means is that your prose + analysis, provided your statistical language functions at the command line level, are fully integrated into a dynamic document. [Pandoc](http://johnmacfarlane.net/pandoc/) allows you to integrate your Markdown document with a .bib file to insert citations, and add custom .css to your document (e.g., apply APA formatting to the entire document). 

##Free Markdown Resources
**Online Markdown Guides:**

You can find a quick guide to writing in Markdown if you [click here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

**Free Online Markdown Text Editor with Live Preview:**

Online Markdown with preview using [Dillinger](http://dillinger.io).

**Free Markdown Text Editors with Live Preview:**

[Mou](http://mouapp.com) for Mac.

[MarkdownPad](http://markdownpad.com) for Windows.

![Markdown Logo]({{ site.url }}/img/markdown-logo.png)


