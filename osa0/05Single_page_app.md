::: mermaid

sequenceDiagram
    participant B as Browser
    participant S as Server

    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate S
    S -->> B: HTML
    deactivate S

    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/main.css 
    activate S
    S -->> B: CSS 
    deactivate S

    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate S
    S -->> B: JavaScript 
    deactivate S

    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate S
    S -->> B: [{"content":"nooooooooo","date": ...
    deactivate S

    B ->> S: GET https://studies.cs.helsinki.fi/favicon.ico
    activate S
    S -->> B: HTML
    deactivate S
