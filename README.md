# Astro for Rank Beginners

## The purpose

This repository is desiged for a daylong workshop on Astro.  It's called "Astro for Rank Beginners" because it basically assumes that you know very little about how Astro works. Each step in the repository is a building block on the previous step, an each step covers a specific aspect of Astro.

At the end, a student should have a basic idea how Astro sites are built.

## How the repository works

This repository is designed as a tutorial about Astro.  Each step -- and there are currently 20 -- is branched from the previous one and builds on what is there.  So, for example, Step 3 illustrates the use of the `<slot>` element, and then Step 4 branches from Step 3 and uses everything in the previous Steps while adding new code.

### Some things to note

* Since a change in one step will need to be included in all subsequent steps, there is a file in each branch called `mergebranches.sh` that migrates code from step to step.

## Introduction

* Review the structure of an empty Astro application
  * Discuss purpose and structure of each file that was created

## Step 1

* Show page-based routing
  * Be sure to point out directories are paths

## Step 2

* Basic component structure
* Basic use of props
  * Explain destructuring

## Step 3

* Components using the `<slot>` tag

## Step 4

* Integrating a layout
* Build a menu
  * Show how components can be embedded in components

## Step 5

*Adding styles to components and the site

## Step 6

* Display markdown content as a page

## Step 7

* Add a blog section via content collections

## Step 8

* Add a blog post summary page

## Step 9

* Add a Sitemap integtration
  * `npm install @astrojs/sitemap`

## Step 10

* Adding logging middleware

## Step 11

* Adding View Transitions

## Step 12

* Add a basic contact form
* Use Astro Actions to gather form data
* Use node adapter
  * `npx astro add node`

## Step 13

* Write contact information to AstroDB
  * `npx astro add db`

## Step 14

* Astro Client Islands
* Add newsletter signup component to bottom of all blogs
* Integrate React
  * `npx astro add react`

## Step 15

* Add quotes from a Quote API
* Run express-quotes-api project
  * [https://github.com/NickHodges/express-quotes-api]([https://](https://github.com/NickHodges/express-quotes-api))
* Choose random quote and build page for each quote via dynamic routing

## Step 16

* Add a server island
  * It's an avatar that delay loads
    * It doesn't hold up the page
    * It renders on the server, despite being "customized"

## Step 17

* Integrate MDX into application
  * `npx astro add mdx`
  * Use `client:visible`

## Step 18

* Show the Astro `<Image>` tag
  * Note how it converts and sizes images for efficiency

## Step 19

* Use pagination with the blog
  * Add 15 more posts, page them 4 at a time
