---
title: 'FingerPass'
subtitle: "USB Fingerprint Password Key"
date: 2018-01-01 00:00:00
description: 'Arduino powered USB device which securely enters a password to any computer upon placing a fingerprint. Passwords encrypted and responsive to website context if optional browser extension installed.'
featured_image: '/images/projects/fingerpass/fingerpass-iso.jpg'
backdrop_image: '/images/projects/fingerpass/fingerpass-connected-iso.jpg'
---
## About this Project
When the iPhone got its first fingerprint scanner, I became fascinated with biometric security. Inspired to create a portable biometric key that I could use to log into my accounts on any computer, I created *FingerPass*, a USB fingerprint password key powered by Arduino and the [GT-511C3 fingerprint scanner](https://www.sparkfun.com/products/retired/11792?__hstc=77938635.99a265337744294b740e0787aea508c4.1563235200074.1563235200075.1563235200076.1&__hssc=77938635.1.1563235200077&__hsfp=4181247164). The device can be plugged into any computer and is recognized as a keyboard. Once a registered fingerprint is placed, it enters a password by sending keystrokes to the computer. Using this method, no special software is required—meaning the device can be used on any computer in any password context. However, I also wrote a companion chrome extension that, if installed, will change the password entered depending on current website according to an encrypted password database on the key.

![](/images/projects/fingerpass/fingerpass-v2.jpg)
<center>Fingerpass 2.0</center>

This was my first self designed project that I realized from start to finish. Having fallen in love with Arduino, I knew this project would be a great way to challenge myself in both the worlds of hardware and software. Above is the latest version of the project, built Spring 2019. Below is a slideshow showing some of the build process.

<div class="gallery" data-columns="1">
        <img src="/images/projects/fingerpass/v2_dev/img1.jpg">
        <img src="/images/projects/fingerpass/v2_dev/img2.jpg">
        <img src="/images/projects/fingerpass/v2_dev/img3.jpg">
        <img src="/images/projects/fingerpass/v2_dev/img4.jpg">
        <img src="/images/projects/fingerpass/v2_dev/img5.jpg">
        <img src="/images/projects/fingerpass/v2_dev/img6.jpg">
        <img src="/images/projects/fingerpass/v2_dev/img7.jpg">
        <img src="/images/projects/fingerpass/v2_dev/img8.jpg">
        <img src="/images/projects/fingerpass/v2_dev/img8.jpg">
        <img src="/images/projects/fingerpass/v2_dev/img10.jpg">
</div>
<center>Fingerpass 2.0 development slideshow!</center>

### Prototypes

Here are the early prototypes of FingerPass, 2015-2017. I've come back to refine this project several times throughout the years, each one getting slightly more compact and streamlined. 

Here is the first breadboard of the project I built, 2015:
![](/images/projects/fingerpass/fingerpass-breadboard.jpg)
<center>Fingerpass Original Breadboard, 2015</center>

The goal of my second prototype was to get everything in a single box. At this point in my life, I didn’t know how to use any CAD programs other than SketchUp, so it was really hard to get a case to fit around my electronics. In the latest iteration, I used OnShape to make a proper case that fit the components exactly.

<div class="gallery" data-columns="1">
        <img src="/images/projects/fingerpass/v1_dev/img1.jpg">
        <img src="/images/projects/fingerpass/v1_dev/img2.jpg">
        <img src="/images/projects/fingerpass/v1_dev/img3.jpg">
        <img src="/images/projects/fingerpass/v1_dev/img4.jpg">
        <img src="/images/projects/fingerpass/v1_dev/img5.jpg">
        <img src="/images/projects/fingerpass/v1_dev/img6.jpg">
</div>
<center>Second prototype of FingerPass, 2016-2017</center>


### Demo Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/Gp5phZwox8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This is a video of the latest iteration of my USB fingerprint scanner unlocking my laptop by entering my PIN. The RGB indicator LED shines blue for standby, blinks green when it's ready for a fingerprint, then shines green or red, depending on whether the fingerprint was accepted. After 10 seconds, the device powers off so that the lights don’t get annoying.

### Code
Unfortunately this code isn't on GitHub. For the incredibly curious, here are some archives on Google Drive
1. [Arduino Code](https://drive.google.com/drive/folders/1ZQ2vi6FqQKK2Yz5xblJ6h4yPyxcebAVx?usp=sharing), which runs on the fingerprint key
2. [Chrome Extension Code](https://drive.google.com/file/d/1Wd3bOq-pFPC5yfVu3I_Q0sbCQuau2QwW/view?usp=sharing), optional companion software