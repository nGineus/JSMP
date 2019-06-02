Home task - RxJS
REQUIRE: JSONPlaceholder API - https://jsonplaceholder.typicode.com/

1-3p.
Create an request call for API data (ex. posts) fetch. Convert fetch response to Observable.
Map data to model (model should be based on DTO that comes). Display models on UI.

4p. 
Create button. Create Subject. On click fire subject, that will make API call created above. (use
switchMap)

5p.
Create input. Wrap input changes in subject. On every input change wait until no new data
comes in 1 sec then search in posts’ (from previous 2 steps) body and filter UI.
