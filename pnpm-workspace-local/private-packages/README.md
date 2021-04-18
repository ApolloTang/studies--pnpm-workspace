```
.
├── node_modules/
│   └── @apollotang/
│       ├── demo-diamond-dependency-pkg-b/
│       │   ├── src/
│       │   │   └── index.js
│       │   └── package.json
│       ├── demo-diamond-dependency-pkg-c/
│       │   ├── node_modules/
│       │   │   └── @apollotang/
│       │   │       └── demo-diamond-dependency-pkg-d/
│       │   │           ├── src/
│       │   │           │   └── index.js
│       │   │           └── package.json
│       │   ├── src/
│       │   │   └── index.js
│       │   └── package.json
│       └── demo-diamond-dependency-pkg-d/
│           ├── src/
│           │   └── index.js
│           └── package.json
├── src/
│   └── index.js
├── package.json
└── yarn.lock

```
13 directories, 11 files
