# Spring Config Parser

A simple parser for Spring externalized configuration files.

It takes a yaml file + a set of active profiles and returns an object with the computed configuration.

> **Warning**: This is highly untested and may only work for my specific use case. Use with caution.

## Usage

```
const fs = require("fs")
const path = require("path")
const parser = require("spring-config-parser")

const filePath = path.join(__dirname, "application.yml")
const file = fs.readFileSync(filePath, "utf8")

const configForProfile = parser(file)

// Get the default configuration
configForProfile()

// Get the configuration for the "test" profile, merged with the default configuration
configForProfile("test")

// Get the configuration for the "test" and "ci" profiles,
// merged together with the default configuration
configForProfile(["test", "ci"])
```

See [the tests](__tests__/spring-config-parser.spec.js) for more examples