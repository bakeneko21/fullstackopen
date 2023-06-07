201 source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201

::: mermaid

sequenceDiagram
    participant B as Browser
    participant S as Server

    B ->> S: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate S
    S -->> B: {content: "viesti", date: ...
    Note left of S: Resource has been created