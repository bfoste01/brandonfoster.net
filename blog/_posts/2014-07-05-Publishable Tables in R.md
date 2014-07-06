---
title: Publishable Quality Tables in R-Custom Formatting 
layout: post
summary: Publishable quality tables in R with custom variable names
tags:  [rmarkdown, reproducible research]
---
#Publishable Quality Tables in R: Custom Formatting 

**What you will need for this tutorial**

* [R](http://www.r-project.org)
* The most recent version of [R-Studio](http://www.rstudio.com/products/RStudio/). It's free, so there is no excuse. 
* The `xtable` package. **Type `install.packages("xtable")` into the R Console window to get the package.**
* The ability to create an R Markdown document within R Studio. It's easy: 
	1. Create a new project in R-Studio.
	2. Go to File, New File, R Markdown. 
	3. When the wizard pops up hit Document and then the PDF bubble.  


##Reproducible Research

Lately I've been better about creating [dynamic documents](http://www.stat.tamu.edu/~mmclean/iamcs2/#2) as a way of implementing a fully reproducible scientific work-flow. Science is in the midst of a reproducibility crisis- I won't bother linking a specific article, as you can just Google "reproducibility crisis in science," and find a trove of articles. 

Reproducibility starts with the ability to reproduce your own work. Most people can not reproduce their own work. Don't believe me? *Can you reproduce all the data, decision points, code, analyses, formatting decisions and versions of prose for that paper you wrote and submitted for publication a year ago?*

![Buster is Scared]({{ site.url }}/img/buster_scared.gif)

This is a fair expectation of all scientists, and is easy to achieve if you rethink the paradigm of tools you use to do scholarship. Yes, this means you need to stop using Microsoft Office Suite as the one tool to rule everything in your scholarly work flows. [R Markdown v2](http://rmarkdown.rstudio.com) is my tool of choice for creating dynamic documents, and version 2 is much easier to use than its previous iteration. [R Markdown v2](http://rmarkdown.rstudio.com) allows me to fully integrate my code, prose, formatting and citations into single document, making everything I do highly reproducible. Check [this vimeo out](http://vimeo.com/94181521) for a better idea of this if you are not familiar with dynamic documents.

##The Issues

However, as great as [R Markdown v2](http://rmarkdown.rstudio.com) is, I still get a headache from time to time, and these headaches usually come from trying to customize my tables in Markdown. The specific issue that was bugging me this week was trying to figure out a way to make custom variable labels in my tables. More specifically, I wanted the ability to utilize Greek letters as labels, and italicize some variable names. For example, I like to use the symbol for chi-square, and to italicize the df (i.e., degrees of freedom) and p (i.e. p-value) symbols. However, I've found this difficult to do up until now.

##Solutions

The Code:

First, let's create some vectors of data so that we can combine them in a data frame in order to simulate the kind of output you might get from running structural equation models in R. 

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

Here's what I'd do before this solution: 

	```{r, results = 'asis'}
	library(xtable)
	print(xtable(fit.stat, caption = "Model Fit Information for CFA"),
	caption.placement = "top", include.rownames = FALSE, type = "latex")
	``` 


Okay, so now we need to work out the following issues with the table above: 

* The LOWRMSEA and HIGHRMSEA columns are upper and lower bounds of the RMSEA estimate, therefore they need to be in the same column as the RMSEA estimate, and in parentheses, separated by a hyphen. 
* The df and p column labels need to be in italics.
* the chiSq should appear as the mathematical symbol for chi-square.  

In order to crack the HIGHRMSEA and LOWRMSEA issue we use the `paste` feature in R to combine and rewrite the RMSEA columns:


	```{r}
	fit.stat <- data.frame(chiSq, df, p, CFI, TLI, 
	RMSEA = paste0(RMSEA , " (",LOWRMSEA," - ", HIGHRMSEA,")"))
	```

If you check out the data frame things should be starting to look like what we want to see in the output:


	```{r}
	print(fit.stat)
	```

Awesome. 

For the remaining two issues (i.e., the italics and the mathematical symbol for chi-square) we are going to use a `sanitize` function. It was right there in front of me in the manual for the `xtable` package, but directions for how to implement it were not straight forward. 

Here's what the `sanitize` function looks like:

	```{r}
	formatcolheads<-function(x) {
	sanitize<-get("sanitize", parent.frame())
    x<-sanitize(x) #replace special features from xtable output
    x<-gsub("chiSq","$x^2$",x) #latex mathematical replacement for chisq
    x<-gsub("df","{\\\\it df}",x) #italicize df
    x<-gsub("p","{\\\\it p}",x) #italicize p
    x
	}
	```

Let's call on `xtable` again to print the latex formatted table with our tweaks, making sure the function we assigned above is included as an option within the `print` command. 

	```{r, results='asis'}
	library(xtable)
	print(xtable(fit.stat, caption = "Model Fit Information for CFA"), 
	caption.placement = "top", sanitize.colnames.function = formatcolheads,
	include.rownames = FALSE, type = "latex")
	```

You did it! 

*To see this example live in action cut and paste each piece of code into an R Markdown document and hit the Knit PDF button to see it render. You can also cut and paste the text from this entire blog into your R Markdown document as well. And if you want a Gist [click here](https://gist.github.com/bfoste01/c4633c367cc8aa016e2b).*