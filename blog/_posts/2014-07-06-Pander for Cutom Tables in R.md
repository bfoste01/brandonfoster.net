---
title: Publishable Quality Tables in R-Custom Formatting 
layout: post
summary: Rethinking a past solution with the pander package in R
tags:  [rmarkdown, reproducible research]
---
#Custom Pander Tables in R: Over-thinking Customization

Many roads lead to Rome. Similarly, there are often many ways to solve a problem in R. 

Yesterday I posted a solution for customizing the variable names in tables using `xtable`. It was a solid solution; however, I woke up this morning and realized there might be an easier way to sole this problem. It involves the `colnames` function from the base features in R. We will forgo the `xtable` package for this solution, and instead utilize the `pander` package, so if you don't have that package get it by typing `install.packages("pander")` into the R console window.

Before I present the simplified solution it is worth mentioning that there are many packages within the R ethos that do ostensibly the same thing, but in practice the subtitles matter. The distinction between `pander` and `xtable` highlights this fact.

xtable:

* Prints latex and html tables.
* Good for using R Markdown v2 to render PDF documents.
* Highly customizable outputs (i.e., if you need one line in a table bold, and another not bold xtable can hook you up).
* <s>Will not provide you with tables that appear when you use R Markdown v2 to render into Word or HTML documents.</s> Edit: not totally true, but there is some difficulty involved...

pander:

* Prints markdown tables. 
* Maximizes R Markdown v2 rendering, as your tables will appear in pdf, html and Word formats. 
* Less customizable table appearances, but still should be publishable in most contexts. 

Now let's look at the simplified solution for how to crack this problem with pander.

Using the same data we used in the `xtable` example:


	```{r}
	chiSq <- 1600
	df <- 780
	p <- 0.95
	CFI <- 0.95
	TLI <- 0.95 
	RMSEA <- 0.04
	LOWRMSEA <- 0.03
	HIGHRMSEA <- 0.04
	```

Combine the vectors into a data frame:

	```{r}
	fit.stat <- data.frame(chiSq, df, p, CFI, TLI, RMSEA, LOWRMSEA, HIGHRMSEA)
	```

Combine the LOWRMSEA and HIGHRMSEA columns into the RMSEA column so that each appears as upper and lower bounds of the RMSEA estimate:

	```{r}
	fit.stat <- data.frame(chiSq, df, p, CFI, TLI, 
	RMSEA = paste0(RMSEA , " (",LOWRMSEA," - ", HIGHRMSEA,")"))
	```

Now here's where I slapped myself in the face when I realized how simple I could have solved this problem:

	```{r, results='asis'}
	colnames(fit.stat) <- c('$x^2$', '*df*', '*p*', 'CFI', 'TLI', 'RMSEA') #rewrite columns with colnames
	```
Make the table:

	```{r, results = 'asis'}
	pandoc.table(fit.stat, style = "rmarkdown")
	```

The same goes as with the last post, cut and paste this post into an R Markdown document, and render it into whatever format you want this time!
