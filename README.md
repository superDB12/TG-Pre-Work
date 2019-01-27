# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

At the most simple level, when you direct a browser to https://www.techtonic.com the first thing that happens is the domain name is sent to a domain name server to find the IP address associated with techtonic.com. Then an HTTP "get" request is sent to the server at that IP address. The server sends the appropriate HTML, CSS, JavaScript and images to the client, in this case the browser, which renders the webpage.

Beyond that simple view of the process there is a lot of additional complexity such as the security added in HTTPS, cookie management, and the recursive nature of how HTML is processed.
Techtonic's site uses HTTPS to secure the transmission of data from the browser to the server.  When HTTPS is used the HTTP "gets" and "posts" are secured over a connection using transport layer security(TLS). This is an encrypted connection that ensures privacy and data integrity.
Another import aspect is the way cookies are handled to pass state between the client and the server. In the initial HTTP request, a special set of headers referred to as cookies can also be sent to the server. These cookies represent data stored by the browser that is automatically sent back to the server during an HTTP request. The HTTP request can also confirm if a cached version of the website is still the current version and if it is, load from cache instead of downloading the entire page from the server.
One of the more powerful and often misused aspects of browser based interactions is the recursive nature of the HTML rendering process. The initial HTML page can refer to other assets that should be interpreted during the rendering phase.  Those assets in-turn can refer to other assets, and so on.  This allows a complex tree of content to be loaded from an initial HTML page which usually consists of CSS, Images, and associated Java Script, but because of the recursive nature of this process, all kinds of crazy things like tracking, and loading big dependency trees are all possible.  This mechanism can often be misused either intentionally or mistakenly leading to the current security dilemma the industry faces.

## From start to finish how does that data reach you to be rendered in the browser?

Once the HTTP get request is received by the server, the HTML file and any associated CSS stylesheets, images and JavaScript files are passed back through the transmission control protocol and the internet protocol(TCP/IP) stack over the network back to the browser. The TCP/IP stack breaks the data into chucks and assembles them into packets with routing and control information following the TCP/IP protocol. These TCP/IP packets are sent over the Internet where routers direct them to their destination.  The TCP/IP stack on the machine with the browser re-assembles the data and hands it to the browser. The browser then interprets each of the files and recursively requests any dependent files(like additional JavaScript, new images, etc.) using this same process.

## What code is rendered in the browser?

HTML, CSS and JavaScript are rendered in the browser. However as browsers have evolved they support rendering a variety of information such as XML files, raw text files, PDF files, video files, etc. These are all processed in a recursive manner and often rendering on type of data can lead to downloading and rendering another piece of data.   For example an HTML file can refer to a JavaScript file, which can in turn load a video file.  The subtleties and complexities this recursive loading system provides a lot of power, but, again, is responsible for many of the security problems the web faces today.

## What is the server-side code’s main function?

Server-side code's main function is to control what information is sent to the user or client. Server side code is typically where you put all the processing that isn't practical to do on the user's machine, whether that's a browser or a mobile device. A good example of that might be maintaining the inventory for an online store. The logic for accessing inventory data, analyzing the users preferences and profile, and making recommendations are examples of work that is best done with server-side code.

## What is the client-side code’s main function?

Client-side code mainly handles the structure and appearance of how the data is presented to the user as well as any complex interactions with the user. For example client code might determine how to best structure data for the client's current screen resolution.  It is also the best place to respond to user input or gesture say by changing the view, moving a visual component, or flashing a button.

It is also worth mentioning that there are grey areas where functionality could live on either the server side or the client side. Resolving the best place for this functionality can be a challenging design and architectural decision. I am quite interested in these problems and I cannot wait to increase my knowledge and skills to be able to intelligently make these types of decisions.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

To the developer it appears that one instance of client-side assets are created per request. However, modern browsers are good at managing objects they render. Under the covers, sophisticated browsers like Chrome or Firefox manage their memory use and object storage very carefully to provide the best performance while maintaining security. They often cache data and provide shadow copies of duplication information to different tabs a user may have open. This "under the hood" behavior can also lead to interesting security problems, which the browser vendors work hard to keep ahead of.

## How many instances of the server-side code are available at any given time?

The number of instances of server-side code that are available is dependent on the implementation of the server side components. While probably not necessary for a lot of websites, in many production environments server side components(including the ones used by my department at the State of Colorado)  are scaled horizontally which means they are striped across many physical servers to provide sociability. I have played around with Pivotal Cloud Foundry using run.pivotal.io and it allows users to easily increase the number of instances of an application through the console or with a simple command. The doc at  https://pivotal.io/platform/pcf-tutorials/getting-started-with-pivotal-cloud-foundry/scale-the-app describes how this works.

## What is runtime?

Runtime is the period of time that an application is actually running or executing. This term is often used along with design time, and compile time in discussing the life cycle code goes through.

## How many instances of the databases connected to the server application are created?

I opened the developer tools in Chrome for Techtonic's website and I could not find any clues about it's database connection(not that I know a TON about what I am looking for). This is good from a security perspective. Typically, web apps connect to one primary database instance. That database instance holds all the data needed by the system. However for larger enterprise applications, like my department at the State of Colorado uses, it's not rare for an application to integrate data from many different sources which means they need to connect to many different database instances. Each of those database instances might even be deployed on different database vendors tools. This is why almost every language has libraries designed to make managing database connections easy. In Python, I have used the SQLite3 library which provides a nice simple interface to provide a connection to SQLite database files.
