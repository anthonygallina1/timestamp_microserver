# timestamp_microserver


User stories:
1) I can pass a string as a parameter by pasting it into the browser, it will check to see whether that string contains either a unix timestamp or a natural language date (example: March 8, 2016)
2) If it does, it returns both the Unix timestamp and the natural language form of that date.
3) If it does not contain a date or Unix timestamp, it returns null for those properties.

    Example usage:
    https://timestamp-microserver-anthonygallina1.c9users.io/March 8, 2016
    https://timestamp-microserver-anthonygallina1.c9users.io/March%2015
    https://timestamp-microserver-anthonygallina1.c9users.io/1457395200
    Example output:
    { "unix": 1457395200, "natural": "March 8, 2016" } 

This is a fullstack design built on Linux at https://c9.io Cloud Nine. As a project from Free Code Camp 
```
├─┬ express@4.13.4
│ ├─┬ accepts@1.2.13
│ │ ├─┬ mime-types@2.1.10
│ │ │ └── mime-db@1.22.0
│ │ └── negotiator@0.5.3
│ ├── array-flatten@1.1.1
│ ├── content-disposition@0.5.1
│ ├── content-type@1.0.1
│ ├── cookie@0.1.5
│ ├── cookie-signature@1.0.6
│ ├─┬ debug@2.2.0
│ │ └── ms@0.7.1
│ ├── depd@1.1.0
│ ├── escape-html@1.0.3
│ ├── etag@1.7.0
│ ├─┬ finalhandler@0.4.1
│ │ └── unpipe@1.0.0
│ ├── fresh@0.3.0
│ ├── merge-descriptors@1.0.1
│ ├── methods@1.1.2
│ ├─┬ on-finished@2.3.0
│ │ └── ee-first@1.1.1
│ ├── parseurl@1.3.1
│ ├── path-to-regexp@0.1.7
│ ├─┬ proxy-addr@1.0.10
│ │ ├── forwarded@0.1.0
│ │ └── ipaddr.js@1.0.5
│ ├── qs@4.0.0
│ ├── range-parser@1.0.3
│ ├─┬ send@0.13.1
│ │ ├── destroy@1.0.4
│ │ ├─┬ http-errors@1.3.1
│ │ │ └── inherits@2.0.1
│ │ ├── mime@1.3.4
│ │ ├── ms@0.7.1
│ │ └── statuses@1.2.1
│ ├── serve-static@1.10.2
│ ├─┬ type-is@1.6.12
│ │ ├── media-typer@0.3.0
│ │ └─┬ mime-types@2.1.10
│ │   └── mime-db@1.22.0
│ ├── utils-merge@1.0.0
│ └── vary@1.0.1
├── moment@2.11.2
└─┬ morgan@1.7.0
  ├── basic-auth@1.0.3
  ├─┬ debug@2.2.0
  │ └── ms@0.7.1
  ├── depd@1.1.0
  ├─┬ on-finished@2.3.0
  │ └── ee-first@1.1.1
  └── on-headers@1.0.1
  ```
  The requirements to run this are a node v4.2.4 instalation, express 4.13.4, morgan 1.7.0 and moment 2.11.2.
  The server outputs the validated time in jason format.
