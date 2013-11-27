## MyMathApp

It is a simple web app for kids for practicing maths. It has been built with Express framework at the back end and AngularJS on the front end.

It currently resides at - [http://mymathapp.herokuapp.com](http://mymathapp.herokuapp.com)

It also provides a simple API for generating Maths problems.


## API

The URL for accessing the API is - `/api/v1/problems`.
The response is in JSON.

A single problem object looks like this:
```javascript
{
    n1: 5,
    n2: 2,
    op: "sub",
    opSym: "-",
    ans: 3
}

```

* `n1` and `n2` are the randomly generated numbers. 
* `op` and `opSym` represent the type of operation to be performed on those numbers. 
* `ans` is the result of the operation.



The URL `/api/v1/problems`, when does not provided with any parameters, returns a set of 10 problems of different type.

It may accept following parameters:

|  Name   | Default Value |              Use/Possible Values            |
|:-------:|:-------------:|---------------------------------------------|
| `limit` |      10       | Number of problems. Anything greater than 0 |
| `type`  |    `rand`     | `add` - Only addition problems              |
|         |               | `sub` - Only subtraction problems           |
|         |               | `mul` - Only multiplication problems        |
|         |               | `div` - Only division problems              |
|         |               | `rand` - Random problems                    |
| `level` |    `one`      | `one` - Numbers from 0 - 9                  |
|         |               | `two` - Numbers from 0 - 49                 |
|         |               | `three` - Numbers from 0 - 99               |

Example:

Query - `/api/v1/problems?limit=3`

Response:

```javascript
[
    {
        n1: 1,
        n2: 1,
        op: "div",
        opSym: "/",
        ans: 1
    },
    {
        n1: 2,
        n2: 5,
        op: "sub",
        opSym: "-",
        ans: -3
    },
    {
        n1: 0,
        n2: 4,
        op: "mul",
        opSym: "x",
        ans: 0
    }
]

```

Query - `/api/v1/problems?limit=3&level=two&type=mul`

Response:

```javascript
[
    {
        n1: 33,
        n2: 10,
        op: "mul",
        opSym: "x",
        ans: 330
    },
    {
        n1: 11,
        n2: 5,
        op: "mul",
        opSym: "x",
        ans: 55
    },
    {
        n1: 13,
        n2: 26,
        op: "mul",
        opSym: "x",
        ans: 338
    }
]
```

---
Any suggestions are welcome.
