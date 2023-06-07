

::: mermaid 

sequenceDiagram 
    participant B as Browser
    participant S as Server

    Note right of B: add extra data to given address 
    

    B ->> S: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate S
    
    S -->> B: Status 302: redirect requested resource to /exampleapp/notes
    deactivate S

    Note right of B: repeat the sequence given in the example 


    