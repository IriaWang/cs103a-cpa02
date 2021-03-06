# The MET Open Access App

A video demonstration can be found [here](https://brandeis.zoom.us/rec/share/858aebr-L9cRXa8WUiS0RHMHlYlftN-74m9eHjIpgfd67z3kPWTiGfIkT42OOJd1.s1asio_AJdUy2rCb?startTime=1651072847000).

## Overview
The [Metropolitan Museum of Art](https://www.metmuseum.org/) of New York City, or colloquially "the MET", is the largest art museum in the Western Hemisphere and the fourth most visited art museum in the world. Over two million works reside in its permanent collection, with 17 curatorial departments ranging from Ancient Greek and Roman art to European paintings to Asian pieces to Modern art. With over 2.2 million square feet of space, it is impossible to fully explore what the MET has to offer within just a few visits.

Fortunately, the MET offers [open access](https://www.metmuseum.org/about-the-met/policies-and-documents/open-access) to more than 492,000 images of public-domain artworks through API. To demonstrate the use of MongoDB and HTML skills, this app is a platform through which users may view, search for, and interact with the art objects provided through the MET open access program.

As a minimum viable product, data for a sample art pieces selected from the MET open access API were uploaded to the cloud with MongoDB atlas. The sample includes 20,000 Greek and Roman art pieces, as well as 2,000 European paintings. Users with an account may search for and view artworks based on artist, title, culture, date, department, etc. Users may also star certain pieces they like, wish to know more about, or wish to visit.

This is on the about page!

![Alt text](./demonstration/about.png)

## Access and Installation
The link to the app can be found [here](https://frozen-coast-24672.herokuapp.com/). To install locally, however, the mongoDB server link is required.

With your command prompt terminal, download the project from github in your folder of choice with

```bash
git clone https://github.com/IriaWang/cs103a-cpa02
```

Install nodemon (the node monitoring app) and start the project with

```bash
npm install -g nodemon
nodemon
```

In the cloned folder, write a file called startup.sh with the following

```bash
export mongodb_URI='mongodb+srv://<mongodb_server_link'
echo "connecting to $mongodb_URI"
nodemon
```

where the special link, not provided publicly, would be in that first line. To run, then simply run startup.sh.

## Using the App (demonstration)

Users may view art pieces, make queries to search for objects of interest, and star specific pieces that may interest the user. Starred pieces and searches are linked to a user account.

### Login

After launching the app, the following screen can be seen. Click on the login/sign-up link.

<img src="./demonstration/home.png" width="500"/>

Then, on the next screen, login or sign up if you do not have an account. If you signed or logged in correctly, the brower will return you to the home screen with a logout button at the top bar.

![Alt text](./demonstration/login.png)

### Search

Click on the search tab on the top bar or the link on the home page to start a new search. The search screen is as follows

<img src="./demonstration/search.png" width="500"/>

The user can search through the database via a five different methods. The user can search by artist, title keyword, date, culture, or gallery number. Type in the query in the box and hit the submit button to the right.

* Artist: Type an artists's name, or part of an artist's name, and the app will return all objects by artists with names containing your input query. (e.g. David)

<img src="./demonstration/artist1.png" width="400"/><img src="./demonstration/artist2.png" width="400"/>

* Title Keyword: Type a keyword and the app will return all objects that have titles containing that keyword. (e.g. jug)

<img src="./demonstration/keyword1.png" width="400"/><img src="./demonstration/keyword2.png" width="400"/>

* Date: Type in a year and the app will return all objects dated at that year, or dated around that year. (e.g. 500)

<img src="./demonstration/date1.png" width="400"/><img src="./demonstration/date2.png" width="400"/>

* Culture: Type in a nationality and the app will return all objects from that region, given that is it provided in the database. (e.g. Roman)

<img src="./demonstration/culture1.png" width="400"/><img src="./demonstration/culture2.png" width="400"/>

* Gallery number: Some items are on display and correspond to a gallery number. If you know that gallery number, then type it in and the app will return all items in the database located in the gallery. (e.g. 171, 174, 158)

<img src="./demonstration/gallery1.png" width="400"/><img src="./demonstration/gallery2.png" width="400"/>

### View Object Details

Click on the title of an object to see the object details. There is a link to more details on the author and to the art piece on the MET site. In the lower right, there is also a blue button that allows the user to add the piece to starred items, or remove from starred items of that piece is already starred.

![Alt text](./demonstration/object.png)

### Modify Starred Items

After clicking on the blue button, the piece will be "starred", or added to the list of starred items. The app will redirect to this list. To remove an item click the "X" in the upper right corner of the piece you wish to remove, or click on the title again to see object details and click the blue button.

![Alt text](./demonstration/starred1.png)
![Alt text](./demonstration/starred2.png)

Enjoy the app!