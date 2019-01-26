# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

When you direct a browser to https://www.techtonic.com the first thing that happens is that the domain name is sent to a domain name server to find the IP address associated with techtonic.com. Then an HTTP "get" request is sent to the server at that IP address. The server sends the appropriate HTML, CSS, JavaScript and images to the client, in this case the browser, which renders the webpage.

## From start to finish how does that data reach you to be rendered in the browser?

Once the HTTP get request is received by the server, the HTML file and any associated CSS stylesheets, images and JavaScript files are broken down into smaller chunks of data called "packets". These packets are encoded with the instructions on how to put them back together and the requesting IP address using transmission control protocol and internet protocol (TCP/IP). The packets are sent over the internet and routers route the data to the destination, which is your browser. The browser is then tasked with rendering the data that was delivered.

## What code is rendered in the browser?

HTML, CSS and JavaScript are rendered in the browser.

## What is the server-side code’s main function?

Server-side code's main function is to control what information is sent to the user or client.

## What is the client-side code’s main function?

Client-side code mainly handles the structure and appearance of how the data is presented to the user.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance of the client-side assets are created per request.

## How many instances of the server-side code are available at any given time?

I think just one?

## What is runtime?

Runtime is the time that an application is running or executing.

## How many instances of the databases connected to the server application are created?

This I have no idea.
