[![npm version](https://badge.fury.io/js/randcli.svg)](https://badge.fury.io/js/randcli) [![Build Status](https://travis-ci.org/randfun/randcli.svg?branch=master)](https://travis-ci.org/randfun/randcli)

# Randcli

`randcli` is the CLI you need to generate random data in your favorite terminal. Internally, it uses the [rand.fun API](https://rand.fun/api).

## Installation

Just run the following command to install `randcli` globally:

```
npm install -g randcli
```

## Usage

```
$ randcli --help

  Usage: randcli <category> [dataset]

  Options:

    -V, --version  output the version number
    -h, --help     output usage information

  Available categories:

    - animals
    - country
    - games
    - geo
    - hash
    - internet
    - movies
    - number
    - people
    - text

  [NOTE] If no dataset selected, the CLI will show the list of
         datasets of the category.

  Examples:

    $ randcli number
    $ randcli number integer
```

## License

This project is released under the [Apache-2.0 license](https://github.com/Angelmmiguel/movies-dataset/blob/master/LICENSE). By [Angel](https://twitter.com/laux_es)
