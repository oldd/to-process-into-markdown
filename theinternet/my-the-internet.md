[internet for webdevs](https://www.youtube.com/watch?v=e4S8zfLdLgQ).  And there's a part two.  
  
[http video](https://www.youtube.com/watch?v=eesqK59rhGA)  
  
[req/res cycle slides](https://docs.google.com/presentation/d/1fEYdZilygtP25YkGvPY8YiPwu7JNtANowNUR0JlNZBw/edit#slide=id.g1f801b6943_0_169)  

[RESTFUL and stateless slides](https://docs.google.com/presentation/d/1Mhoj-SHEX-sMSqxlsigBGyEjjxTvAFHP1PHOP3M0N9o/edit#slide=id.g1f8026c0cf_0_35)  
  
[about http slides](https://docs.google.com/presentation/d/1Csig7JgJ0aE62_nH1v1HttVyayLhxL4L0DHUM1bMsLg/edit#slide=id.g17042a1233_0_16)  
  
[HTTP anatomy slides](https://docs.google.com/presentation/d/1S5R-k4ASEqP4fOnTWlXNaInUDHIHEpZ1HUp-hgkUa1I/edit#slide=id.g139f99ebf5_0_200)  
  
[OSI model slides](http://www.webopedia.com/quick_ref/OSI_Layers.asp)
  
all must be taught around request/response cycle
	server is a function:
		- args: http request
		- return: http response
		- behavior: use the information contained in the http request object to build an http response object. then send that response out over the interwebs.  essentially a giant series of ifs, else ifs, and else's
		- purpose: allow users in the outside world to access your data (websites, movies, ebooks, whatever) remotely, while still controling how they can interact with it. (can they read only, read and write, can all users see all things?)
	what is the request/response cycle
		demo on board
		mention pure node
		then express
		then res and req
		then middleware and handlers
	http anatomy