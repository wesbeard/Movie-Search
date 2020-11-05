**Wes Beard**
**11/4/2020**
**CSI-301**
**Project 3: Movie App**

---------------------------------------------------------------------------------

- This app is a movie search engine which utilizes the Open Movie Database (OMBd)
    to fetch information on a searched title and display it's basic information
    as well as a link to it's IMDb page.

- The program features a search bar which passes the search term into a component
    that represents the searched movie information.

- If a searched movie doesn't exist it'll catch the error and display a message.

- The response from a searched movie is stored in a data store which can be accessed
    from components.

- The search function useState hooks to store the searched title data which it
    passes into the movie information component.

- The movie component contains to a useEffect hook which acts to update the data 
    store whenever the title is changed when a new movie is searched.

- The movie component also has a hook for using the movie data store which is
    used to update the stores information and use it for output.