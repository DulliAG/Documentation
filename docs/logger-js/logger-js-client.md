---
sidebar_position: 1
sidebar_label: 'LoggerJS Client'
---

# LoggerJS Client

![npm](https://img.shields.io/npm/v/@dulliag/logger.js?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@dulliag/logger.js?label=Downloads&style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@dulliag/logger.js?style=for-the-badge)
![Issues](https://img.shields.io/github/issues-closed/dulliag/logger.js.svg?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/dulliag/logger.js.svg?style=for-the-badge)

---

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MariaDb](https://img.shields.io/badge/MariaDB-007ACC?style=for-the-badge&logo=mariadb&logoColor=white)

## Setup

### Database

|    Column     |        Type        |  Default   |          Description           |
| :-----------: | :----------------: | :--------: | :----------------------------: |
|     `id`      | `int(10) unsigned` |    `PK`    |                                |
| `application` |   `varchar(50)`    | `NOT NULL` |                                |
|    `type`     |   `varchar(10)`    | `NOT NULL` | `LOG - INFO - WARNING - ERROR` |
|    `code`     |   `varchar(25)`    | `NOT NULL` |    Group logs using `code`     |
|   `message`   |       `text`       | `NOT NULL` |                                |
| `created_at`  |    `timestamp`     |  `now()`   |                                |

### Installation

:::tip My Tip

Make sure to create a table named `logs` which contains [these](#database) columns.

:::

1. Install `@dulliag/logger.js`

   ```shell
   npm i @dulliag/logger.js
   ```

2. Initialize the client by passing the `database-type`, `credentails` and the `application-name` into the constructor.

   ```js title="src/logs.js"
   const { Database, LogVariant, Client } = require('@dulliag/logger.js');
   require('dotenv').config();

   const credentials = {
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_DATABASE,
   };

   const LOGGER = new Client(Database.PG, credentials, 'Dota2PatchBot');

   module.exports = {
     logger: LOGGER,
   };
   ```

   :::tip How to create a log

   |     Type      | Description                                                                              |
   | :-----------: | ---------------------------------------------------------------------------------------- |
   |     `LOG`     | Log an performed action                                                                  |
   | `INFORMATION` | Saving messages that do not contain any action                                           |
   |   `WARNING`   | Saving non-successful messages that do not contain any action but could lead to problems |
   |    `ERROR`    | Log non-successful performed action                                                      |

   ```js title="src/index.js"
   const { LogVariant } = require('@dulliag/logger.js');
   const { logger } = require('./log');

   logger.log(LogVariant.WARNING, 'Welcome', 'This is my first log!');
   logger.log(
     LogVariant.WARNING,
     'Welcome',
     JSON.stringify({ status: 200, message: 'This is how u log objects' })
   );
   ```

   :::
