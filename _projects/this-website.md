---
title: 'This Website!'
subtitle: 'My Portfolio of Personal Engineering Projects'
date: 2000-01-01 00:00:00
description: 'Static website built using Jekyll and hosted on GitHub Pages.'
featured_image: '/images/projects/this-website/homepage.jpg'
backdrop_image: '/images/projects/this-website/jekyll-logo.png'
---

## About this Project

> Check out the source code[on GitHub](https://github.com/richardsonian/ianrichardson.me)!

### Overview

This website was built using [Jekyll](https://jekyllrb.com/), a static site generator that uses templating to make adding content to blogs and portfolios easy while still allowing complete control over the source code of the site. It's made this site a really fun project to build, and I couldn't recommend it enough. Combined with a theme and some basic coding skills, I've found Jekyll a much better alternative to SquareSpace, Weebly, and WordPress. It takes a bit more effort to get started (learning jekyll, setting up dev environment, etc.), but once you have everything set up, writing posts is a breeze (SquareSpace's online editor is laggy!), and the only limit to the style of your site is your creativity (and your CSS skills, but I found that part much more pleasant than dealing with inconsistiences in SquareSpace's editor—and that's really saying something).

### Programming the Site

I started by downloading a theme—which for jekyll is essentially a body of bare-bones HTML and SASS—to speed up the process of getting all the fundamentals like a header, page navigation, blog posts (which I ended up using as "projects"), a color pallate system, and a media query system (mobile responsiveness). With the annoying parts of writing a new website from scratch mostly out of the way, I could focus on the content I cared about!

The most interesting part is the front page. I wanted something light-hearted and eye-catching—and the idea of a typewriter animation quickly came to mind. Luckily, I'm far from the first person with this idea, and [a SASS library for that very animation already exists!](https://typedcss.com/). Why code when you can copy? Unfortunately, the code didn't work out of box—I actually ended up contributing some fixes to the [project GitHub](https://github.com/brandonmcconnell/typed.css). But it certainly made the whole process _much_ easer. Thanks, Brandon!

The front page was a bit tricky to make mobile responsive. I'm not the best at CSS, and I had never used SASS before (TL;DR: It's way better.) I ended up using a CSS grid and the jekyll theme's media query mixin (essentially just an `@media` call) to get everything where it should be. Way better than `inline-block`!

### Hosting

One of the best things about Jekyll is that it integrates with GitHub Pages for seamless _free_ hosting. I just push changes to [the project GitHub Repository](https://github.com/richardsonian/ianrichardson.me) and the website auto-magically updates! How cool! It also means that the only thing I'll ever pay for this site to be public is the domain rights, which is pretty sweet.

### Future Todo

It would be nice to get this site on HTTPS, which is one apparent difficulty with the GitHub Pages / Jekyll approach. I'll have to learn more about SSL certificates to get that one done, though. In the meantime, though, I promise I'm not trying to hack you.