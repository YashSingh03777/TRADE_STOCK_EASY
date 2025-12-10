
# TRADE_STOCK_EASY: Intelligent Trading Platform**

## Overview

TRADE_STOCK_EASY is an innovative trading platform designed to optimize stock market trading by leveraging **Machine Learning (ML)** techniques. The platform aims to **reduce brokerage costs**, maximize returns, and provide users with intelligent trade insights. Unlike traditional trading platforms, TRADE_STOCK_EASY focuses on **cost efficiency** and **data-driven decision making**, allowing users to trade smarter with minimal manual intervention.

The platform is built with modern web technologies and integrates ML algorithms to analyze historical trading data, predict optimal trade strategies, and automate brokerage management. By reducing unnecessary transaction costs, TRADE_STOCK_EASY helps traders retain more of their profits while maintaining complete control over their trades.


## **Key Features**

### 1. **Machine Learning-Based Trade Analysis**

* Uses historical market data to identify patterns and trends.
* Predicts high-probability trading opportunities.
* Provides actionable insights to minimize losses and maximize profits.

### 2. **Brokerage Reduction**

* Analyzes trade frequency and volume to **optimize brokerage fees**.
* Suggests strategies to combine trades or adjust timing, reducing costs per transaction.
* Automatically calculates potential brokerage savings for each trade.

### 3. **Real-Time Market Monitoring**

* Tracks live stock prices and market trends using API integrations.
* Sends alerts and notifications for favorable trading conditions.
* Displays real-time performance metrics and portfolio analytics.

### 4. **User-Friendly Dashboard**

* Clean and interactive UI for traders of all experience levels.
* Visualizes stock performance, predicted trade outcomes, and brokerage savings.
* Includes filters and search features for easy portfolio management.

### 5. **Secure and Reliable**

* Secure authentication and encrypted data storage.
* Handles sensitive user data and trading information safely.
* Built with scalable architecture to handle multiple users concurrently.

---

## **Technology Stack**

* **Frontend:** React.js, HTML5, CSS3, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB / MySQL (depending on configuration)
* **Machine Learning:** Python, scikit-learn, pandas, NumPy
* **APIs:** Stock market data APIs for live price tracking

---

## **How It Works**

1. **Data Collection:** The platform collects historical and live stock market data from trusted sources.
2. **Analysis:** Machine Learning models analyze patterns, trends, and trade histories.
3. **Trade Optimization:** The system predicts the best trade times and volumes, aiming to reduce brokerage fees.
4. **User Decision:** Traders receive intelligent suggestions on trades, expected returns, and cost savings.
5. **Execution:** Users can manually execute trades or integrate with supported brokers for semi-automated trading.

---

## **Benefits**

* Reduces transaction costs and brokerage fees.
* Helps traders make informed, data-driven decisions.
* Enhances profitability without compromising control.
* Suitable for both novice and experienced traders.

---


@File path of my project (DATA-FLOW)

├── .gitignore
├── README.md
├── Server
    ├── Controllers
    │   └── AuthController.js
    ├── Middlewares
    │   └── AuthMiddle.js
    ├── Models
    │   └── UserModel.js
    ├── Routes
    │   └── AuthRoute.js
    ├── appindex.js
    ├── node_modules
    │   ├── .bin
    │   │   ├── bcrypt
    │   │   ├── bcrypt.cmd
    │   │   ├── bcrypt.ps1
    │   │   ├── semver
    │   │   ├── semver.cmd
    │   │   └── semver.ps1
    │   ├── .package-lock.json
    │   ├── @mongodb-js
    │   │   └── saslprep
    │   │   │   ├── LICENSE
    │   │   │   ├── dist
    │   │   │       ├── .esm-wrapper.mjs
    │   │   │       ├── browser.d.ts
    │   │   │       ├── browser.d.ts.map
    │   │   │       ├── browser.js
    │   │   │       ├── browser.js.map
    │   │   │       ├── code-points-data-browser.d.ts
    │   │   │       ├── code-points-data-browser.d.ts.map
    │   │   │       ├── code-points-data-browser.js
    │   │   │       ├── code-points-data-browser.js.map
    │   │   │       ├── code-points-data.d.ts
    │   │   │       ├── code-points-data.d.ts.map
    │   │   │       ├── code-points-data.js
    │   │   │       ├── code-points-data.js.map
    │   │   │       ├── code-points-src.d.ts
    │   │   │       ├── code-points-src.d.ts.map
    │   │   │       ├── code-points-src.js
    │   │   │       ├── code-points-src.js.map
    │   │   │       ├── generate-code-points.d.ts
    │   │   │       ├── generate-code-points.d.ts.map
    │   │   │       ├── generate-code-points.js
    │   │   │       ├── generate-code-points.js.map
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.d.ts.map
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       ├── memory-code-points.d.ts
    │   │   │       ├── memory-code-points.d.ts.map
    │   │   │       ├── memory-code-points.js
    │   │   │       ├── memory-code-points.js.map
    │   │   │       ├── node.d.ts
    │   │   │       ├── node.d.ts.map
    │   │   │       ├── node.js
    │   │   │       ├── node.js.map
    │   │   │       ├── util.d.ts
    │   │   │       ├── util.d.ts.map
    │   │   │       ├── util.js
    │   │   │       └── util.js.map
    │   │   │   ├── package.json
    │   │   │   └── readme.md
    │   ├── @types
    │   │   ├── webidl-conversions
    │   │   │   ├── LICENSE
    │   │   │   ├── README.md
    │   │   │   ├── index.d.ts
    │   │   │   └── package.json
    │   │   └── whatwg-url
    │   │   │   ├── LICENSE
    │   │   │   ├── README.md
    │   │   │   ├── index.d.ts
    │   │   │   ├── lib
    │   │   │       ├── URL-impl.d.ts
    │   │   │       ├── URL.d.ts
    │   │   │       ├── URLSearchParams-impl.d.ts
    │   │   │       └── URLSearchParams.d.ts
    │   │   │   ├── package.json
    │   │   │   └── webidl2js-wrapper.d.ts
    │   ├── accepts
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── bcryptjs
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── bin
    │   │   │   └── bcrypt
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── types.d.ts
    │   │   └── umd
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── package.json
    │   │   │   └── types.d.ts
    │   ├── body-parser
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── read.js
    │   │   │   ├── types
    │   │   │   │   ├── json.js
    │   │   │   │   ├── raw.js
    │   │   │   │   ├── text.js
    │   │   │   │   └── urlencoded.js
    │   │   │   └── utils.js
    │   │   └── package.json
    │   ├── bson
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── bson.d.ts
    │   │   ├── etc
    │   │   │   └── prepare.js
    │   │   ├── lib
    │   │   │   ├── bson.bundle.js
    │   │   │   ├── bson.bundle.js.map
    │   │   │   ├── bson.cjs
    │   │   │   ├── bson.cjs.map
    │   │   │   ├── bson.mjs
    │   │   │   ├── bson.mjs.map
    │   │   │   ├── bson.node.mjs
    │   │   │   ├── bson.node.mjs.map
    │   │   │   ├── bson.rn.cjs
    │   │   │   └── bson.rn.cjs.map
    │   │   ├── package.json
    │   │   ├── src
    │   │   │   ├── binary.ts
    │   │   │   ├── bson.ts
    │   │   │   ├── bson_value.ts
    │   │   │   ├── code.ts
    │   │   │   ├── constants.ts
    │   │   │   ├── db_ref.ts
    │   │   │   ├── decimal128.ts
    │   │   │   ├── double.ts
    │   │   │   ├── error.ts
    │   │   │   ├── extended_json.ts
    │   │   │   ├── index.ts
    │   │   │   ├── int_32.ts
    │   │   │   ├── long.ts
    │   │   │   ├── max_key.ts
    │   │   │   ├── min_key.ts
    │   │   │   ├── objectid.ts
    │   │   │   ├── parse_utf8.ts
    │   │   │   ├── parser
    │   │   │   │   ├── calculate_size.ts
    │   │   │   │   ├── deserializer.ts
    │   │   │   │   ├── on_demand
    │   │   │   │   │   ├── index.ts
    │   │   │   │   │   └── parse_to_elements.ts
    │   │   │   │   ├── serializer.ts
    │   │   │   │   └── utils.ts
    │   │   │   ├── regexp.ts
    │   │   │   ├── symbol.ts
    │   │   │   ├── timestamp.ts
    │   │   │   └── utils
    │   │   │   │   ├── byte_utils.ts
    │   │   │   │   ├── latin.ts
    │   │   │   │   ├── node_byte_utils.ts
    │   │   │   │   ├── number_utils.ts
    │   │   │   │   ├── string_utils.ts
    │   │   │   │   └── web_byte_utils.ts
    │   │   └── vendor
    │   │   │   ├── base64
    │   │   │       ├── LICENSE-MIT.txt
    │   │   │       ├── README.md
    │   │   │       ├── base64.js
    │   │   │       └── package.json
    │   │   │   └── text-encoding
    │   │   │       ├── LICENSE.md
    │   │   │       ├── README.md
    │   │   │       ├── index.js
    │   │   │       ├── lib
    │   │   │           ├── encoding-indexes.js
    │   │   │           └── encoding.js
    │   │   │       └── package.json
    │   ├── buffer-equal-constant-time
    │   │   ├── .npmignore
    │   │   ├── .travis.yml
    │   │   ├── LICENSE.txt
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test.js
    │   ├── bytes
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── call-bind-apply-helpers
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── actualApply.d.ts
    │   │   ├── actualApply.js
    │   │   ├── applyBind.d.ts
    │   │   ├── applyBind.js
    │   │   ├── functionApply.d.ts
    │   │   ├── functionApply.js
    │   │   ├── functionCall.d.ts
    │   │   ├── functionCall.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── reflectApply.d.ts
    │   │   ├── reflectApply.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── call-bound
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── content-disposition
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── content-type
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── cookie-parser
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── node_modules
    │   │   │   └── cookie-signature
    │   │   │   │   ├── .npmignore
    │   │   │   │   ├── History.md
    │   │   │   │   ├── Readme.md
    │   │   │   │   ├── index.js
    │   │   │   │   └── package.json
    │   │   └── package.json
    │   ├── cookie-signature
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── cookie
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── cors
    │   │   ├── CONTRIBUTING.md
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── lib
    │   │   │   └── index.js
    │   │   └── package.json
    │   ├── debug
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   └── src
    │   │   │   ├── browser.js
    │   │   │   ├── common.js
    │   │   │   ├── index.js
    │   │   │   └── node.js
    │   ├── depd
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   └── browser
    │   │   │   │   └── index.js
    │   │   └── package.json
    │   ├── dunder-proto
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── get.d.ts
    │   │   ├── get.js
    │   │   ├── package.json
    │   │   ├── set.d.ts
    │   │   ├── set.js
    │   │   ├── test
    │   │   │   ├── get.js
    │   │   │   ├── index.js
    │   │   │   └── set.js
    │   │   └── tsconfig.json
    │   ├── ecdsa-sig-formatter
    │   │   ├── CODEOWNERS
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   └── src
    │   │   │   ├── ecdsa-sig-formatter.d.ts
    │   │   │   ├── ecdsa-sig-formatter.js
    │   │   │   └── param-bytes-for-alg.js
    │   ├── ee-first
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── encodeurl
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── es-define-property
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── es-errors
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── eval.d.ts
    │   │   ├── eval.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── range.d.ts
    │   │   ├── range.js
    │   │   ├── ref.d.ts
    │   │   ├── ref.js
    │   │   ├── syntax.d.ts
    │   │   ├── syntax.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   ├── tsconfig.json
    │   │   ├── type.d.ts
    │   │   ├── type.js
    │   │   ├── uri.d.ts
    │   │   └── uri.js
    │   ├── es-object-atoms
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── RequireObjectCoercible.d.ts
    │   │   ├── RequireObjectCoercible.js
    │   │   ├── ToObject.d.ts
    │   │   ├── ToObject.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── isObject.d.ts
    │   │   ├── isObject.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── escape-html
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── etag
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── express
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── application.js
    │   │   │   ├── express.js
    │   │   │   ├── request.js
    │   │   │   ├── response.js
    │   │   │   ├── utils.js
    │   │   │   └── view.js
    │   │   └── package.json
    │   ├── finalhandler
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── forwarded
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── fresh
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── function-bind
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   ├── FUNDING.yml
    │   │   │   └── SECURITY.md
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── implementation.js
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   ├── .eslintrc
    │   │   │   └── index.js
    │   ├── get-intrinsic
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   └── GetIntrinsic.js
    │   ├── get-proto
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── Object.getPrototypeOf.d.ts
    │   │   ├── Object.getPrototypeOf.js
    │   │   ├── README.md
    │   │   ├── Reflect.getPrototypeOf.d.ts
    │   │   ├── Reflect.getPrototypeOf.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── gopd
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── gOPD.d.ts
    │   │   ├── gOPD.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── has-symbols
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── shams.d.ts
    │   │   ├── shams.js
    │   │   ├── test
    │   │   │   ├── index.js
    │   │   │   ├── shams
    │   │   │   │   ├── core-js.js
    │   │   │   │   └── get-own-property-symbols.js
    │   │   │   └── tests.js
    │   │   └── tsconfig.json
    │   ├── hasown
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── tsconfig.json
    │   ├── http-errors
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── node_modules
    │   │   │   └── statuses
    │   │   │   │   ├── HISTORY.md
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── README.md
    │   │   │   │   ├── codes.json
    │   │   │   │   ├── index.js
    │   │   │   │   └── package.json
    │   │   └── package.json
    │   ├── iconv-lite
    │   │   ├── .github
    │   │   │   └── dependabot.yml
    │   │   ├── .idea
    │   │   │   ├── codeStyles
    │   │   │   │   ├── Project.xml
    │   │   │   │   └── codeStyleConfig.xml
    │   │   │   ├── iconv-lite.iml
    │   │   │   ├── inspectionProfiles
    │   │   │   │   └── Project_Default.xml
    │   │   │   ├── modules.xml
    │   │   │   └── vcs.xml
    │   │   ├── Changelog.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── encodings
    │   │   │   ├── dbcs-codec.js
    │   │   │   ├── dbcs-data.js
    │   │   │   ├── index.js
    │   │   │   ├── internal.js
    │   │   │   ├── sbcs-codec.js
    │   │   │   ├── sbcs-data-generated.js
    │   │   │   ├── sbcs-data.js
    │   │   │   ├── tables
    │   │   │   │   ├── big5-added.json
    │   │   │   │   ├── cp936.json
    │   │   │   │   ├── cp949.json
    │   │   │   │   ├── cp950.json
    │   │   │   │   ├── eucjp.json
    │   │   │   │   ├── gb18030-ranges.json
    │   │   │   │   ├── gbk-added.json
    │   │   │   │   └── shiftjis.json
    │   │   │   ├── utf16.js
    │   │   │   ├── utf32.js
    │   │   │   └── utf7.js
    │   │   ├── lib
    │   │   │   ├── bom-handling.js
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── streams.js
    │   │   └── package.json
    │   ├── inherits
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── inherits.js
    │   │   ├── inherits_browser.js
    │   │   └── package.json
    │   ├── ipaddr.js
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── ipaddr.min.js
    │   │   ├── lib
    │   │   │   ├── ipaddr.js
    │   │   │   └── ipaddr.js.d.ts
    │   │   └── package.json
    │   ├── is-promise
    │   │   ├── LICENSE
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── index.mjs
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── jsonwebtoken
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── decode.js
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── JsonWebTokenError.js
    │   │   │   ├── NotBeforeError.js
    │   │   │   ├── TokenExpiredError.js
    │   │   │   ├── asymmetricKeyDetailsSupported.js
    │   │   │   ├── psSupported.js
    │   │   │   ├── rsaPssKeyDetailsSupported.js
    │   │   │   ├── timespan.js
    │   │   │   └── validateAsymmetricKey.js
    │   │   ├── package.json
    │   │   ├── sign.js
    │   │   └── verify.js
    │   ├── jwa
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── jws
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── data-stream.js
    │   │   │   ├── sign-stream.js
    │   │   │   ├── tostring.js
    │   │   │   └── verify-stream.js
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── kareem
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.includes
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.isboolean
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.isinteger
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.isnumber
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.isplainobject
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.isstring
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.once
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── math-intrinsics
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── abs.d.ts
    │   │   ├── abs.js
    │   │   ├── constants
    │   │   │   ├── maxArrayLength.d.ts
    │   │   │   ├── maxArrayLength.js
    │   │   │   ├── maxSafeInteger.d.ts
    │   │   │   ├── maxSafeInteger.js
    │   │   │   ├── maxValue.d.ts
    │   │   │   └── maxValue.js
    │   │   ├── floor.d.ts
    │   │   ├── floor.js
    │   │   ├── isFinite.d.ts
    │   │   ├── isFinite.js
    │   │   ├── isInteger.d.ts
    │   │   ├── isInteger.js
    │   │   ├── isNaN.d.ts
    │   │   ├── isNaN.js
    │   │   ├── isNegativeZero.d.ts
    │   │   ├── isNegativeZero.js
    │   │   ├── max.d.ts
    │   │   ├── max.js
    │   │   ├── min.d.ts
    │   │   ├── min.js
    │   │   ├── mod.d.ts
    │   │   ├── mod.js
    │   │   ├── package.json
    │   │   ├── pow.d.ts
    │   │   ├── pow.js
    │   │   ├── round.d.ts
    │   │   ├── round.js
    │   │   ├── sign.d.ts
    │   │   ├── sign.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── media-typer
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── memory-pager
    │   │   ├── .travis.yml
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test.js
    │   ├── merge-descriptors
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── mime-db
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── db.json
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── mime-types
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── mimeScore.js
    │   │   └── package.json
    │   ├── mongodb-connection-string-url
    │   │   ├── .esm-wrapper.mjs
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── lib
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── index.js.map
    │   │   │   ├── redact.d.ts
    │   │   │   ├── redact.js
    │   │   │   └── redact.js.map
    │   │   └── package.json
    │   ├── mongodb
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── etc
    │   │   │   └── prepare.js
    │   │   ├── lib
    │   │   │   ├── admin.js
    │   │   │   ├── admin.js.map
    │   │   │   ├── beta.d.ts
    │   │   │   ├── beta.js
    │   │   │   ├── beta.js.map
    │   │   │   ├── bson.js
    │   │   │   ├── bson.js.map
    │   │   │   ├── bulk
    │   │   │   │   ├── common.js
    │   │   │   │   ├── common.js.map
    │   │   │   │   ├── ordered.js
    │   │   │   │   ├── ordered.js.map
    │   │   │   │   ├── unordered.js
    │   │   │   │   └── unordered.js.map
    │   │   │   ├── change_stream.js
    │   │   │   ├── change_stream.js.map
    │   │   │   ├── client-side-encryption
    │   │   │   │   ├── auto_encrypter.js
    │   │   │   │   ├── auto_encrypter.js.map
    │   │   │   │   ├── client_encryption.js
    │   │   │   │   ├── client_encryption.js.map
    │   │   │   │   ├── crypto_callbacks.js
    │   │   │   │   ├── crypto_callbacks.js.map
    │   │   │   │   ├── errors.js
    │   │   │   │   ├── errors.js.map
    │   │   │   │   ├── mongocryptd_manager.js
    │   │   │   │   ├── mongocryptd_manager.js.map
    │   │   │   │   ├── providers
    │   │   │   │   │   ├── aws.js
    │   │   │   │   │   ├── aws.js.map
    │   │   │   │   │   ├── azure.js
    │   │   │   │   │   ├── azure.js.map
    │   │   │   │   │   ├── gcp.js
    │   │   │   │   │   ├── gcp.js.map
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── index.js.map
    │   │   │   │   ├── state_machine.js
    │   │   │   │   └── state_machine.js.map
    │   │   │   ├── cmap
    │   │   │   │   ├── auth
    │   │   │   │   │   ├── auth_provider.js
    │   │   │   │   │   ├── auth_provider.js.map
    │   │   │   │   │   ├── aws_temporary_credentials.js
    │   │   │   │   │   ├── aws_temporary_credentials.js.map
    │   │   │   │   │   ├── gssapi.js
    │   │   │   │   │   ├── gssapi.js.map
    │   │   │   │   │   ├── mongo_credentials.js
    │   │   │   │   │   ├── mongo_credentials.js.map
    │   │   │   │   │   ├── mongodb_aws.js
    │   │   │   │   │   ├── mongodb_aws.js.map
    │   │   │   │   │   ├── mongodb_oidc.js
    │   │   │   │   │   ├── mongodb_oidc.js.map
    │   │   │   │   │   ├── mongodb_oidc
    │   │   │   │   │   │   ├── automated_callback_workflow.js
    │   │   │   │   │   │   ├── automated_callback_workflow.js.map
    │   │   │   │   │   │   ├── azure_machine_workflow.js
    │   │   │   │   │   │   ├── azure_machine_workflow.js.map
    │   │   │   │   │   │   ├── callback_workflow.js
    │   │   │   │   │   │   ├── callback_workflow.js.map
    │   │   │   │   │   │   ├── command_builders.js
    │   │   │   │   │   │   ├── command_builders.js.map
    │   │   │   │   │   │   ├── gcp_machine_workflow.js
    │   │   │   │   │   │   ├── gcp_machine_workflow.js.map
    │   │   │   │   │   │   ├── human_callback_workflow.js
    │   │   │   │   │   │   ├── human_callback_workflow.js.map
    │   │   │   │   │   │   ├── k8s_machine_workflow.js
    │   │   │   │   │   │   ├── k8s_machine_workflow.js.map
    │   │   │   │   │   │   ├── token_cache.js
    │   │   │   │   │   │   ├── token_cache.js.map
    │   │   │   │   │   │   ├── token_machine_workflow.js
    │   │   │   │   │   │   └── token_machine_workflow.js.map
    │   │   │   │   │   ├── plain.js
    │   │   │   │   │   ├── plain.js.map
    │   │   │   │   │   ├── providers.js
    │   │   │   │   │   ├── providers.js.map
    │   │   │   │   │   ├── scram.js
    │   │   │   │   │   ├── scram.js.map
    │   │   │   │   │   ├── x509.js
    │   │   │   │   │   └── x509.js.map
    │   │   │   │   ├── command_monitoring_events.js
    │   │   │   │   ├── command_monitoring_events.js.map
    │   │   │   │   ├── commands.js
    │   │   │   │   ├── commands.js.map
    │   │   │   │   ├── connect.js
    │   │   │   │   ├── connect.js.map
    │   │   │   │   ├── connection.js
    │   │   │   │   ├── connection.js.map
    │   │   │   │   ├── connection_pool.js
    │   │   │   │   ├── connection_pool.js.map
    │   │   │   │   ├── connection_pool_events.js
    │   │   │   │   ├── connection_pool_events.js.map
    │   │   │   │   ├── errors.js
    │   │   │   │   ├── errors.js.map
    │   │   │   │   ├── handshake
    │   │   │   │   │   ├── client_metadata.js
    │   │   │   │   │   └── client_metadata.js.map
    │   │   │   │   ├── metrics.js
    │   │   │   │   ├── metrics.js.map
    │   │   │   │   ├── stream_description.js
    │   │   │   │   ├── stream_description.js.map
    │   │   │   │   └── wire_protocol
    │   │   │   │   │   ├── compression.js
    │   │   │   │   │   ├── compression.js.map
    │   │   │   │   │   ├── constants.js
    │   │   │   │   │   ├── constants.js.map
    │   │   │   │   │   ├── on_data.js
    │   │   │   │   │   ├── on_data.js.map
    │   │   │   │   │   ├── on_demand
    │   │   │   │   │       ├── document.js
    │   │   │   │   │       └── document.js.map
    │   │   │   │   │   ├── responses.js
    │   │   │   │   │   ├── responses.js.map
    │   │   │   │   │   ├── shared.js
    │   │   │   │   │   └── shared.js.map
    │   │   │   ├── collection.js
    │   │   │   ├── collection.js.map
    │   │   │   ├── connection_string.js
    │   │   │   ├── connection_string.js.map
    │   │   │   ├── constants.js
    │   │   │   ├── constants.js.map
    │   │   │   ├── cursor
    │   │   │   │   ├── abstract_cursor.js
    │   │   │   │   ├── abstract_cursor.js.map
    │   │   │   │   ├── aggregation_cursor.js
    │   │   │   │   ├── aggregation_cursor.js.map
    │   │   │   │   ├── change_stream_cursor.js
    │   │   │   │   ├── change_stream_cursor.js.map
    │   │   │   │   ├── client_bulk_write_cursor.js
    │   │   │   │   ├── client_bulk_write_cursor.js.map
    │   │   │   │   ├── find_cursor.js
    │   │   │   │   ├── find_cursor.js.map
    │   │   │   │   ├── list_collections_cursor.js
    │   │   │   │   ├── list_collections_cursor.js.map
    │   │   │   │   ├── list_indexes_cursor.js
    │   │   │   │   ├── list_indexes_cursor.js.map
    │   │   │   │   ├── list_search_indexes_cursor.js
    │   │   │   │   ├── list_search_indexes_cursor.js.map
    │   │   │   │   ├── run_command_cursor.js
    │   │   │   │   └── run_command_cursor.js.map
    │   │   │   ├── db.js
    │   │   │   ├── db.js.map
    │   │   │   ├── deps.js
    │   │   │   ├── deps.js.map
    │   │   │   ├── encrypter.js
    │   │   │   ├── encrypter.js.map
    │   │   │   ├── error.js
    │   │   │   ├── error.js.map
    │   │   │   ├── explain.js
    │   │   │   ├── explain.js.map
    │   │   │   ├── gridfs
    │   │   │   │   ├── download.js
    │   │   │   │   ├── download.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── upload.js
    │   │   │   │   └── upload.js.map
    │   │   │   ├── index.js
    │   │   │   ├── index.js.map
    │   │   │   ├── mongo_client.js
    │   │   │   ├── mongo_client.js.map
    │   │   │   ├── mongo_client_auth_providers.js
    │   │   │   ├── mongo_client_auth_providers.js.map
    │   │   │   ├── mongo_logger.js
    │   │   │   ├── mongo_logger.js.map
    │   │   │   ├── mongo_types.js
    │   │   │   ├── mongo_types.js.map
    │   │   │   ├── operations
    │   │   │   │   ├── aggregate.js
    │   │   │   │   ├── aggregate.js.map
    │   │   │   │   ├── bulk_write.js
    │   │   │   │   ├── bulk_write.js.map
    │   │   │   │   ├── client_bulk_write
    │   │   │   │   │   ├── client_bulk_write.js
    │   │   │   │   │   ├── client_bulk_write.js.map
    │   │   │   │   │   ├── command_builder.js
    │   │   │   │   │   ├── command_builder.js.map
    │   │   │   │   │   ├── common.js
    │   │   │   │   │   ├── common.js.map
    │   │   │   │   │   ├── executor.js
    │   │   │   │   │   ├── executor.js.map
    │   │   │   │   │   ├── results_merger.js
    │   │   │   │   │   └── results_merger.js.map
    │   │   │   │   ├── collections.js
    │   │   │   │   ├── collections.js.map
    │   │   │   │   ├── command.js
    │   │   │   │   ├── command.js.map
    │   │   │   │   ├── count.js
    │   │   │   │   ├── count.js.map
    │   │   │   │   ├── create_collection.js
    │   │   │   │   ├── create_collection.js.map
    │   │   │   │   ├── delete.js
    │   │   │   │   ├── delete.js.map
    │   │   │   │   ├── distinct.js
    │   │   │   │   ├── distinct.js.map
    │   │   │   │   ├── drop.js
    │   │   │   │   ├── drop.js.map
    │   │   │   │   ├── estimated_document_count.js
    │   │   │   │   ├── estimated_document_count.js.map
    │   │   │   │   ├── execute_operation.js
    │   │   │   │   ├── execute_operation.js.map
    │   │   │   │   ├── find.js
    │   │   │   │   ├── find.js.map
    │   │   │   │   ├── find_and_modify.js
    │   │   │   │   ├── find_and_modify.js.map
    │   │   │   │   ├── get_more.js
    │   │   │   │   ├── get_more.js.map
    │   │   │   │   ├── indexes.js
    │   │   │   │   ├── indexes.js.map
    │   │   │   │   ├── insert.js
    │   │   │   │   ├── insert.js.map
    │   │   │   │   ├── is_capped.js
    │   │   │   │   ├── is_capped.js.map
    │   │   │   │   ├── kill_cursors.js
    │   │   │   │   ├── kill_cursors.js.map
    │   │   │   │   ├── list_collections.js
    │   │   │   │   ├── list_collections.js.map
    │   │   │   │   ├── list_databases.js
    │   │   │   │   ├── list_databases.js.map
    │   │   │   │   ├── operation.js
    │   │   │   │   ├── operation.js.map
    │   │   │   │   ├── options_operation.js
    │   │   │   │   ├── options_operation.js.map
    │   │   │   │   ├── profiling_level.js
    │   │   │   │   ├── profiling_level.js.map
    │   │   │   │   ├── remove_user.js
    │   │   │   │   ├── remove_user.js.map
    │   │   │   │   ├── rename.js
    │   │   │   │   ├── rename.js.map
    │   │   │   │   ├── run_command.js
    │   │   │   │   ├── run_command.js.map
    │   │   │   │   ├── search_indexes
    │   │   │   │   │   ├── create.js
    │   │   │   │   │   ├── create.js.map
    │   │   │   │   │   ├── drop.js
    │   │   │   │   │   ├── drop.js.map
    │   │   │   │   │   ├── update.js
    │   │   │   │   │   └── update.js.map
    │   │   │   │   ├── set_profiling_level.js
    │   │   │   │   ├── set_profiling_level.js.map
    │   │   │   │   ├── stats.js
    │   │   │   │   ├── stats.js.map
    │   │   │   │   ├── update.js
    │   │   │   │   ├── update.js.map
    │   │   │   │   ├── validate_collection.js
    │   │   │   │   └── validate_collection.js.map
    │   │   │   ├── read_concern.js
    │   │   │   ├── read_concern.js.map
    │   │   │   ├── read_preference.js
    │   │   │   ├── read_preference.js.map
    │   │   │   ├── resource_management.js
    │   │   │   ├── resource_management.js.map
    │   │   │   ├── sdam
    │   │   │   │   ├── common.js
    │   │   │   │   ├── common.js.map
    │   │   │   │   ├── events.js
    │   │   │   │   ├── events.js.map
    │   │   │   │   ├── monitor.js
    │   │   │   │   ├── monitor.js.map
    │   │   │   │   ├── server.js
    │   │   │   │   ├── server.js.map
    │   │   │   │   ├── server_description.js
    │   │   │   │   ├── server_description.js.map
    │   │   │   │   ├── server_selection.js
    │   │   │   │   ├── server_selection.js.map
    │   │   │   │   ├── server_selection_events.js
    │   │   │   │   ├── server_selection_events.js.map
    │   │   │   │   ├── srv_polling.js
    │   │   │   │   ├── srv_polling.js.map
    │   │   │   │   ├── topology.js
    │   │   │   │   ├── topology.js.map
    │   │   │   │   ├── topology_description.js
    │   │   │   │   └── topology_description.js.map
    │   │   │   ├── sessions.js
    │   │   │   ├── sessions.js.map
    │   │   │   ├── sort.js
    │   │   │   ├── sort.js.map
    │   │   │   ├── timeout.js
    │   │   │   ├── timeout.js.map
    │   │   │   ├── transactions.js
    │   │   │   ├── transactions.js.map
    │   │   │   ├── utils.js
    │   │   │   ├── utils.js.map
    │   │   │   ├── write_concern.js
    │   │   │   └── write_concern.js.map
    │   │   ├── mongodb.d.ts
    │   │   ├── package.json
    │   │   ├── src
    │   │   │   ├── admin.ts
    │   │   │   ├── beta.ts
    │   │   │   ├── bson.ts
    │   │   │   ├── bulk
    │   │   │   │   ├── common.ts
    │   │   │   │   ├── ordered.ts
    │   │   │   │   └── unordered.ts
    │   │   │   ├── change_stream.ts
    │   │   │   ├── client-side-encryption
    │   │   │   │   ├── auto_encrypter.ts
    │   │   │   │   ├── client_encryption.ts
    │   │   │   │   ├── crypto_callbacks.ts
    │   │   │   │   ├── errors.ts
    │   │   │   │   ├── mongocryptd_manager.ts
    │   │   │   │   ├── providers
    │   │   │   │   │   ├── aws.ts
    │   │   │   │   │   ├── azure.ts
    │   │   │   │   │   ├── gcp.ts
    │   │   │   │   │   └── index.ts
    │   │   │   │   └── state_machine.ts
    │   │   │   ├── cmap
    │   │   │   │   ├── auth
    │   │   │   │   │   ├── auth_provider.ts
    │   │   │   │   │   ├── aws_temporary_credentials.ts
    │   │   │   │   │   ├── gssapi.ts
    │   │   │   │   │   ├── mongo_credentials.ts
    │   │   │   │   │   ├── mongodb_aws.ts
    │   │   │   │   │   ├── mongodb_oidc.ts
    │   │   │   │   │   ├── mongodb_oidc
    │   │   │   │   │   │   ├── automated_callback_workflow.ts
    │   │   │   │   │   │   ├── azure_machine_workflow.ts
    │   │   │   │   │   │   ├── callback_workflow.ts
    │   │   │   │   │   │   ├── command_builders.ts
    │   │   │   │   │   │   ├── gcp_machine_workflow.ts
    │   │   │   │   │   │   ├── human_callback_workflow.ts
    │   │   │   │   │   │   ├── k8s_machine_workflow.ts
    │   │   │   │   │   │   ├── token_cache.ts
    │   │   │   │   │   │   └── token_machine_workflow.ts
    │   │   │   │   │   ├── plain.ts
    │   │   │   │   │   ├── providers.ts
    │   │   │   │   │   ├── scram.ts
    │   │   │   │   │   └── x509.ts
    │   │   │   │   ├── command_monitoring_events.ts
    │   │   │   │   ├── commands.ts
    │   │   │   │   ├── connect.ts
    │   │   │   │   ├── connection.ts
    │   │   │   │   ├── connection_pool.ts
    │   │   │   │   ├── connection_pool_events.ts
    │   │   │   │   ├── errors.ts
    │   │   │   │   ├── handshake
    │   │   │   │   │   └── client_metadata.ts
    │   │   │   │   ├── metrics.ts
    │   │   │   │   ├── stream_description.ts
    │   │   │   │   └── wire_protocol
    │   │   │   │   │   ├── compression.ts
    │   │   │   │   │   ├── constants.ts
    │   │   │   │   │   ├── on_data.ts
    │   │   │   │   │   ├── on_demand
    │   │   │   │   │       └── document.ts
    │   │   │   │   │   ├── responses.ts
    │   │   │   │   │   └── shared.ts
    │   │   │   ├── collection.ts
    │   │   │   ├── connection_string.ts
    │   │   │   ├── constants.ts
    │   │   │   ├── cursor
    │   │   │   │   ├── abstract_cursor.ts
    │   │   │   │   ├── aggregation_cursor.ts
    │   │   │   │   ├── change_stream_cursor.ts
    │   │   │   │   ├── client_bulk_write_cursor.ts
    │   │   │   │   ├── find_cursor.ts
    │   │   │   │   ├── list_collections_cursor.ts
    │   │   │   │   ├── list_indexes_cursor.ts
    │   │   │   │   ├── list_search_indexes_cursor.ts
    │   │   │   │   └── run_command_cursor.ts
    │   │   │   ├── db.ts
    │   │   │   ├── deps.ts
    │   │   │   ├── encrypter.ts
    │   │   │   ├── error.ts
    │   │   │   ├── explain.ts
    │   │   │   ├── gridfs
    │   │   │   │   ├── download.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   └── upload.ts
    │   │   │   ├── index.ts
    │   │   │   ├── mongo_client.ts
    │   │   │   ├── mongo_client_auth_providers.ts
    │   │   │   ├── mongo_logger.ts
    │   │   │   ├── mongo_types.ts
    │   │   │   ├── operations
    │   │   │   │   ├── aggregate.ts
    │   │   │   │   ├── bulk_write.ts
    │   │   │   │   ├── client_bulk_write
    │   │   │   │   │   ├── client_bulk_write.ts
    │   │   │   │   │   ├── command_builder.ts
    │   │   │   │   │   ├── common.ts
    │   │   │   │   │   ├── executor.ts
    │   │   │   │   │   └── results_merger.ts
    │   │   │   │   ├── collections.ts
    │   │   │   │   ├── command.ts
    │   │   │   │   ├── count.ts
    │   │   │   │   ├── create_collection.ts
    │   │   │   │   ├── delete.ts
    │   │   │   │   ├── distinct.ts
    │   │   │   │   ├── drop.ts
    │   │   │   │   ├── estimated_document_count.ts
    │   │   │   │   ├── execute_operation.ts
    │   │   │   │   ├── find.ts
    │   │   │   │   ├── find_and_modify.ts
    │   │   │   │   ├── get_more.ts
    │   │   │   │   ├── indexes.ts
    │   │   │   │   ├── insert.ts
    │   │   │   │   ├── is_capped.ts
    │   │   │   │   ├── kill_cursors.ts
    │   │   │   │   ├── list_collections.ts
    │   │   │   │   ├── list_databases.ts
    │   │   │   │   ├── operation.ts
    │   │   │   │   ├── options_operation.ts
    │   │   │   │   ├── profiling_level.ts
    │   │   │   │   ├── remove_user.ts
    │   │   │   │   ├── rename.ts
    │   │   │   │   ├── run_command.ts
    │   │   │   │   ├── search_indexes
    │   │   │   │   │   ├── create.ts
    │   │   │   │   │   ├── drop.ts
    │   │   │   │   │   └── update.ts
    │   │   │   │   ├── set_profiling_level.ts
    │   │   │   │   ├── stats.ts
    │   │   │   │   ├── update.ts
    │   │   │   │   └── validate_collection.ts
    │   │   │   ├── read_concern.ts
    │   │   │   ├── read_preference.ts
    │   │   │   ├── resource_management.ts
    │   │   │   ├── sdam
    │   │   │   │   ├── common.ts
    │   │   │   │   ├── events.ts
    │   │   │   │   ├── monitor.ts
    │   │   │   │   ├── server.ts
    │   │   │   │   ├── server_description.ts
    │   │   │   │   ├── server_selection.ts
    │   │   │   │   ├── server_selection_events.ts
    │   │   │   │   ├── srv_polling.ts
    │   │   │   │   ├── topology.ts
    │   │   │   │   └── topology_description.ts
    │   │   │   ├── sessions.ts
    │   │   │   ├── sort.ts
    │   │   │   ├── timeout.ts
    │   │   │   ├── transactions.ts
    │   │   │   ├── utils.ts
    │   │   │   └── write_concern.ts
    │   │   └── tsconfig.json
    │   ├── mongoose
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── browser.js
    │   │   ├── deno.lock
    │   │   ├── dist
    │   │   │   └── browser.umd.js
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── aggregate.js
    │   │   │   ├── browser.js
    │   │   │   ├── browserDocument.js
    │   │   │   ├── cast.js
    │   │   │   ├── cast
    │   │   │   │   ├── bigint.js
    │   │   │   │   ├── boolean.js
    │   │   │   │   ├── date.js
    │   │   │   │   ├── decimal128.js
    │   │   │   │   ├── double.js
    │   │   │   │   ├── int32.js
    │   │   │   │   ├── number.js
    │   │   │   │   ├── objectid.js
    │   │   │   │   ├── string.js
    │   │   │   │   └── uuid.js
    │   │   │   ├── collection.js
    │   │   │   ├── connection.js
    │   │   │   ├── connectionState.js
    │   │   │   ├── constants.js
    │   │   │   ├── cursor
    │   │   │   │   ├── aggregationCursor.js
    │   │   │   │   ├── changeStream.js
    │   │   │   │   └── queryCursor.js
    │   │   │   ├── document.js
    │   │   │   ├── documentProvider.js
    │   │   │   ├── driver.js
    │   │   │   ├── drivers
    │   │   │   │   ├── SPEC.md
    │   │   │   │   ├── browser
    │   │   │   │   │   ├── binary.js
    │   │   │   │   │   ├── decimal128.js
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── objectid.js
    │   │   │   │   └── node-mongodb-native
    │   │   │   │   │   ├── bulkWriteResult.js
    │   │   │   │   │   ├── collection.js
    │   │   │   │   │   ├── connection.js
    │   │   │   │   │   └── index.js
    │   │   │   ├── error
    │   │   │   │   ├── browserMissingSchema.js
    │   │   │   │   ├── bulkSaveIncompleteError.js
    │   │   │   │   ├── bulkWriteError.js
    │   │   │   │   ├── cast.js
    │   │   │   │   ├── createCollectionsError.js
    │   │   │   │   ├── divergentArray.js
    │   │   │   │   ├── eachAsyncMultiError.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── invalidSchemaOption.js
    │   │   │   │   ├── messages.js
    │   │   │   │   ├── missingSchema.js
    │   │   │   │   ├── mongooseError.js
    │   │   │   │   ├── notFound.js
    │   │   │   │   ├── objectExpected.js
    │   │   │   │   ├── objectParameter.js
    │   │   │   │   ├── overwriteModel.js
    │   │   │   │   ├── parallelSave.js
    │   │   │   │   ├── parallelValidate.js
    │   │   │   │   ├── serverSelection.js
    │   │   │   │   ├── setOptionError.js
    │   │   │   │   ├── strict.js
    │   │   │   │   ├── strictPopulate.js
    │   │   │   │   ├── syncIndexes.js
    │   │   │   │   ├── validation.js
    │   │   │   │   ├── validator.js
    │   │   │   │   └── version.js
    │   │   │   ├── helpers
    │   │   │   │   ├── aggregate
    │   │   │   │   │   ├── prepareDiscriminatorPipeline.js
    │   │   │   │   │   └── stringifyFunctionOperators.js
    │   │   │   │   ├── arrayDepth.js
    │   │   │   │   ├── clone.js
    │   │   │   │   ├── common.js
    │   │   │   │   ├── createJSONSchemaTypeDefinition.js
    │   │   │   │   ├── cursor
    │   │   │   │   │   └── eachAsync.js
    │   │   │   │   ├── discriminator
    │   │   │   │   │   ├── applyEmbeddedDiscriminators.js
    │   │   │   │   │   ├── areDiscriminatorValuesEqual.js
    │   │   │   │   │   ├── checkEmbeddedDiscriminatorKeyProjection.js
    │   │   │   │   │   ├── getConstructor.js
    │   │   │   │   │   ├── getDiscriminatorByValue.js
    │   │   │   │   │   ├── getSchemaDiscriminatorByValue.js
    │   │   │   │   │   └── mergeDiscriminatorSchema.js
    │   │   │   │   ├── document
    │   │   │   │   │   ├── applyDefaults.js
    │   │   │   │   │   ├── applyTimestamps.js
    │   │   │   │   │   ├── applyVirtuals.js
    │   │   │   │   │   ├── cleanModifiedSubpaths.js
    │   │   │   │   │   ├── compile.js
    │   │   │   │   │   ├── getDeepestSubdocumentForPath.js
    │   │   │   │   │   ├── getEmbeddedDiscriminatorPath.js
    │   │   │   │   │   └── handleSpreadDoc.js
    │   │   │   │   ├── each.js
    │   │   │   │   ├── error
    │   │   │   │   │   └── combinePathErrors.js
    │   │   │   │   ├── firstKey.js
    │   │   │   │   ├── get.js
    │   │   │   │   ├── getConstructorName.js
    │   │   │   │   ├── getDefaultBulkwriteResult.js
    │   │   │   │   ├── getFunctionName.js
    │   │   │   │   ├── immediate.js
    │   │   │   │   ├── indexes
    │   │   │   │   │   ├── applySchemaCollation.js
    │   │   │   │   │   ├── decorateDiscriminatorIndexOptions.js
    │   │   │   │   │   ├── getRelatedIndexes.js
    │   │   │   │   │   ├── isDefaultIdIndex.js
    │   │   │   │   │   ├── isIndexEqual.js
    │   │   │   │   │   ├── isIndexSpecEqual.js
    │   │   │   │   │   ├── isTextIndex.js
    │   │   │   │   │   └── isTimeseriesIndex.js
    │   │   │   │   ├── isAsyncFunction.js
    │   │   │   │   ├── isBsonType.js
    │   │   │   │   ├── isMongooseObject.js
    │   │   │   │   ├── isObject.js
    │   │   │   │   ├── isPOJO.js
    │   │   │   │   ├── isPromise.js
    │   │   │   │   ├── isSimpleValidator.js
    │   │   │   │   ├── minimize.js
    │   │   │   │   ├── model
    │   │   │   │   │   ├── applyDefaultsToPOJO.js
    │   │   │   │   │   ├── applyHooks.js
    │   │   │   │   │   ├── applyMethods.js
    │   │   │   │   │   ├── applyStaticHooks.js
    │   │   │   │   │   ├── applyStatics.js
    │   │   │   │   │   ├── castBulkWrite.js
    │   │   │   │   │   ├── decorateBulkWriteResult.js
    │   │   │   │   │   ├── discriminator.js
    │   │   │   │   │   └── pushNestedArrayPaths.js
    │   │   │   │   ├── omitUndefined.js
    │   │   │   │   ├── once.js
    │   │   │   │   ├── parallelLimit.js
    │   │   │   │   ├── path
    │   │   │   │   │   ├── parentPaths.js
    │   │   │   │   │   └── setDottedPath.js
    │   │   │   │   ├── pluralize.js
    │   │   │   │   ├── populate
    │   │   │   │   │   ├── assignRawDocsToIdStructure.js
    │   │   │   │   │   ├── assignVals.js
    │   │   │   │   │   ├── createPopulateQueryFilter.js
    │   │   │   │   │   ├── getModelsMapForPopulate.js
    │   │   │   │   │   ├── getSchemaTypes.js
    │   │   │   │   │   ├── getVirtual.js
    │   │   │   │   │   ├── leanPopulateMap.js
    │   │   │   │   │   ├── lookupLocalFields.js
    │   │   │   │   │   ├── markArraySubdocsPopulated.js
    │   │   │   │   │   ├── modelNamesFromRefPath.js
    │   │   │   │   │   ├── removeDeselectedForeignField.js
    │   │   │   │   │   ├── setPopulatedVirtualValue.js
    │   │   │   │   │   ├── skipPopulateValue.js
    │   │   │   │   │   └── validateRef.js
    │   │   │   │   ├── printJestWarning.js
    │   │   │   │   ├── processConnectionOptions.js
    │   │   │   │   ├── projection
    │   │   │   │   │   ├── applyProjection.js
    │   │   │   │   │   ├── hasIncludedChildren.js
    │   │   │   │   │   ├── isDefiningProjection.js
    │   │   │   │   │   ├── isExclusive.js
    │   │   │   │   │   ├── isInclusive.js
    │   │   │   │   │   ├── isNestedProjection.js
    │   │   │   │   │   ├── isPathExcluded.js
    │   │   │   │   │   ├── isPathSelectedInclusive.js
    │   │   │   │   │   ├── isSubpath.js
    │   │   │   │   │   └── parseProjection.js
    │   │   │   │   ├── promiseOrCallback.js
    │   │   │   │   ├── query
    │   │   │   │   │   ├── applyGlobalOption.js
    │   │   │   │   │   ├── cast$expr.js
    │   │   │   │   │   ├── castFilterPath.js
    │   │   │   │   │   ├── castUpdate.js
    │   │   │   │   │   ├── getEmbeddedDiscriminatorPath.js
    │   │   │   │   │   ├── handleImmutable.js
    │   │   │   │   │   ├── handleReadPreferenceAliases.js
    │   │   │   │   │   ├── hasDollarKeys.js
    │   │   │   │   │   ├── isOperator.js
    │   │   │   │   │   ├── sanitizeFilter.js
    │   │   │   │   │   ├── sanitizeProjection.js
    │   │   │   │   │   ├── selectPopulatedFields.js
    │   │   │   │   │   ├── trusted.js
    │   │   │   │   │   └── validOps.js
    │   │   │   │   ├── schema
    │   │   │   │   │   ├── addAutoId.js
    │   │   │   │   │   ├── applyBuiltinPlugins.js
    │   │   │   │   │   ├── applyPlugins.js
    │   │   │   │   │   ├── applyReadConcern.js
    │   │   │   │   │   ├── applyWriteConcern.js
    │   │   │   │   │   ├── cleanPositionalOperators.js
    │   │   │   │   │   ├── getIndexes.js
    │   │   │   │   │   ├── getKeysInSchemaOrder.js
    │   │   │   │   │   ├── getPath.js
    │   │   │   │   │   ├── getSubdocumentStrictValue.js
    │   │   │   │   │   ├── handleIdOption.js
    │   │   │   │   │   ├── handleTimestampOption.js
    │   │   │   │   │   ├── idGetter.js
    │   │   │   │   │   └── merge.js
    │   │   │   │   ├── schematype
    │   │   │   │   │   └── handleImmutable.js
    │   │   │   │   ├── setDefaultsOnInsert.js
    │   │   │   │   ├── specialProperties.js
    │   │   │   │   ├── symbols.js
    │   │   │   │   ├── timers.js
    │   │   │   │   ├── timestamps
    │   │   │   │   │   ├── setDocumentTimestamps.js
    │   │   │   │   │   └── setupTimestamps.js
    │   │   │   │   ├── topology
    │   │   │   │   │   ├── allServersUnknown.js
    │   │   │   │   │   ├── isAtlas.js
    │   │   │   │   │   └── isSSLError.js
    │   │   │   │   ├── update
    │   │   │   │   │   ├── applyTimestampsToChildren.js
    │   │   │   │   │   ├── applyTimestampsToUpdate.js
    │   │   │   │   │   ├── castArrayFilters.js
    │   │   │   │   │   ├── decorateUpdateWithVersionKey.js
    │   │   │   │   │   ├── modifiedPaths.js
    │   │   │   │   │   ├── moveImmutableProperties.js
    │   │   │   │   │   ├── removeUnusedArrayFilters.js
    │   │   │   │   │   └── updatedPathsByArrayFilter.js
    │   │   │   │   └── updateValidators.js
    │   │   │   ├── index.js
    │   │   │   ├── internal.js
    │   │   │   ├── model.js
    │   │   │   ├── modifiedPathsSnapshot.js
    │   │   │   ├── mongoose.js
    │   │   │   ├── options.js
    │   │   │   ├── options
    │   │   │   │   ├── populateOptions.js
    │   │   │   │   ├── propertyOptions.js
    │   │   │   │   ├── saveOptions.js
    │   │   │   │   ├── schemaArrayOptions.js
    │   │   │   │   ├── schemaBufferOptions.js
    │   │   │   │   ├── schemaDateOptions.js
    │   │   │   │   ├── schemaDocumentArrayOptions.js
    │   │   │   │   ├── schemaMapOptions.js
    │   │   │   │   ├── schemaNumberOptions.js
    │   │   │   │   ├── schemaObjectIdOptions.js
    │   │   │   │   ├── schemaStringOptions.js
    │   │   │   │   ├── schemaSubdocumentOptions.js
    │   │   │   │   ├── schemaTypeOptions.js
    │   │   │   │   ├── schemaUnionOptions.js
    │   │   │   │   └── virtualOptions.js
    │   │   │   ├── plugins
    │   │   │   │   ├── index.js
    │   │   │   │   ├── saveSubdocs.js
    │   │   │   │   ├── sharding.js
    │   │   │   │   ├── trackTransaction.js
    │   │   │   │   └── validateBeforeSave.js
    │   │   │   ├── query.js
    │   │   │   ├── queryHelpers.js
    │   │   │   ├── schema.js
    │   │   │   ├── schema
    │   │   │   │   ├── array.js
    │   │   │   │   ├── bigint.js
    │   │   │   │   ├── boolean.js
    │   │   │   │   ├── buffer.js
    │   │   │   │   ├── date.js
    │   │   │   │   ├── decimal128.js
    │   │   │   │   ├── documentArray.js
    │   │   │   │   ├── documentArrayElement.js
    │   │   │   │   ├── double.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── int32.js
    │   │   │   │   ├── map.js
    │   │   │   │   ├── mixed.js
    │   │   │   │   ├── number.js
    │   │   │   │   ├── objectId.js
    │   │   │   │   ├── operators
    │   │   │   │   │   ├── bitwise.js
    │   │   │   │   │   ├── exists.js
    │   │   │   │   │   ├── geospatial.js
    │   │   │   │   │   ├── helpers.js
    │   │   │   │   │   ├── text.js
    │   │   │   │   │   └── type.js
    │   │   │   │   ├── string.js
    │   │   │   │   ├── subdocument.js
    │   │   │   │   ├── symbols.js
    │   │   │   │   ├── union.js
    │   │   │   │   └── uuid.js
    │   │   │   ├── schemaType.js
    │   │   │   ├── stateMachine.js
    │   │   │   ├── types
    │   │   │   │   ├── array
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── isMongooseArray.js
    │   │   │   │   │   └── methods
    │   │   │   │   │   │   └── index.js
    │   │   │   │   ├── arraySubdocument.js
    │   │   │   │   ├── buffer.js
    │   │   │   │   ├── decimal128.js
    │   │   │   │   ├── documentArray
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── isMongooseDocumentArray.js
    │   │   │   │   │   └── methods
    │   │   │   │   │   │   └── index.js
    │   │   │   │   ├── double.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── map.js
    │   │   │   │   ├── objectid.js
    │   │   │   │   ├── subdocument.js
    │   │   │   │   └── uuid.js
    │   │   │   ├── utils.js
    │   │   │   ├── validOptions.js
    │   │   │   └── virtualType.js
    │   │   ├── package.json
    │   │   └── types
    │   │   │   ├── aggregate.d.ts
    │   │   │   ├── augmentations.d.ts
    │   │   │   ├── callback.d.ts
    │   │   │   ├── collection.d.ts
    │   │   │   ├── connection.d.ts
    │   │   │   ├── cursor.d.ts
    │   │   │   ├── document.d.ts
    │   │   │   ├── error.d.ts
    │   │   │   ├── expressions.d.ts
    │   │   │   ├── helpers.d.ts
    │   │   │   ├── index.d.ts
    │   │   │   ├── indexes.d.ts
    │   │   │   ├── inferrawdoctype.d.ts
    │   │   │   ├── inferschematype.d.ts
    │   │   │   ├── middlewares.d.ts
    │   │   │   ├── models.d.ts
    │   │   │   ├── mongooseoptions.d.ts
    │   │   │   ├── pipelinestage.d.ts
    │   │   │   ├── populate.d.ts
    │   │   │   ├── query.d.ts
    │   │   │   ├── schemaoptions.d.ts
    │   │   │   ├── schematypes.d.ts
    │   │   │   ├── session.d.ts
    │   │   │   ├── types.d.ts
    │   │   │   ├── utility.d.ts
    │   │   │   ├── validation.d.ts
    │   │   │   └── virtuals.d.ts
    │   ├── mpath
    │   │   ├── .travis.yml
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── index.js
    │   │   │   └── stringToParts.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   ├── .eslintrc.yml
    │   │   │   ├── index.js
    │   │   │   └── stringToParts.js
    │   ├── mquery
    │   │   ├── .github
    │   │   │   ├── ISSUE_TEMPLATE.md
    │   │   │   └── PULL_REQUEST_TEMPLATE.md
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── lib
    │   │   │   ├── collection
    │   │   │   │   ├── collection.js
    │   │   │   │   ├── index.js
    │   │   │   │   └── node.js
    │   │   │   ├── env.js
    │   │   │   ├── mquery.js
    │   │   │   ├── permissions.js
    │   │   │   └── utils.js
    │   │   └── package.json
    │   ├── ms
    │   │   ├── index.js
    │   │   ├── license.md
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── negotiator
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── charset.js
    │   │   │   ├── encoding.js
    │   │   │   ├── language.js
    │   │   │   └── mediaType.js
    │   │   └── package.json
    │   ├── object-assign
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── object-inspect
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── example
    │   │   │   ├── all.js
    │   │   │   ├── circular.js
    │   │   │   ├── fn.js
    │   │   │   └── inspect.js
    │   │   ├── index.js
    │   │   ├── package-support.json
    │   │   ├── package.json
    │   │   ├── readme.markdown
    │   │   ├── test-core-js.js
    │   │   ├── test
    │   │   │   ├── bigint.js
    │   │   │   ├── browser
    │   │   │   │   └── dom.js
    │   │   │   ├── circular.js
    │   │   │   ├── deep.js
    │   │   │   ├── element.js
    │   │   │   ├── err.js
    │   │   │   ├── fakes.js
    │   │   │   ├── fn.js
    │   │   │   ├── global.js
    │   │   │   ├── has.js
    │   │   │   ├── holes.js
    │   │   │   ├── indent-option.js
    │   │   │   ├── inspect.js
    │   │   │   ├── lowbyte.js
    │   │   │   ├── number.js
    │   │   │   ├── quoteStyle.js
    │   │   │   ├── toStringTag.js
    │   │   │   ├── undef.js
    │   │   │   └── values.js
    │   │   └── util.inspect.js
    │   ├── on-finished
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── once
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── once.js
    │   │   └── package.json
    │   ├── parseurl
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── path-to-regexp
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── dist
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── index.js.map
    │   │   └── package.json
    │   ├── proxy-addr
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── punycode
    │   │   ├── LICENSE-MIT.txt
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   ├── punycode.es6.js
    │   │   └── punycode.js
    │   ├── qs
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── dist
    │   │   │   └── qs.js
    │   │   ├── lib
    │   │   │   ├── formats.js
    │   │   │   ├── index.js
    │   │   │   ├── parse.js
    │   │   │   ├── stringify.js
    │   │   │   └── utils.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   ├── empty-keys-cases.js
    │   │   │   ├── parse.js
    │   │   │   ├── stringify.js
    │   │   │   └── utils.js
    │   ├── range-parser
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── raw-body
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── node_modules
    │   │   │   └── iconv-lite
    │   │   │   │   ├── Changelog.md
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── README.md
    │   │   │   │   ├── encodings
    │   │   │   │       ├── dbcs-codec.js
    │   │   │   │       ├── dbcs-data.js
    │   │   │   │       ├── index.js
    │   │   │   │       ├── internal.js
    │   │   │   │       ├── sbcs-codec.js
    │   │   │   │       ├── sbcs-data-generated.js
    │   │   │   │       ├── sbcs-data.js
    │   │   │   │       ├── tables
    │   │   │   │       │   ├── big5-added.json
    │   │   │   │       │   ├── cp936.json
    │   │   │   │       │   ├── cp949.json
    │   │   │   │       │   ├── cp950.json
    │   │   │   │       │   ├── eucjp.json
    │   │   │   │       │   ├── gb18030-ranges.json
    │   │   │   │       │   ├── gbk-added.json
    │   │   │   │       │   └── shiftjis.json
    │   │   │   │       ├── utf16.js
    │   │   │   │       ├── utf32.js
    │   │   │   │       └── utf7.js
    │   │   │   │   ├── lib
    │   │   │   │       ├── bom-handling.js
    │   │   │   │       ├── helpers
    │   │   │   │       │   └── merge-exports.js
    │   │   │   │       ├── index.d.ts
    │   │   │   │       ├── index.js
    │   │   │   │       └── streams.js
    │   │   │   │   └── package.json
    │   │   └── package.json
    │   ├── router
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── layer.js
    │   │   │   └── route.js
    │   │   └── package.json
    │   ├── safe-buffer
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── safer-buffer
    │   │   ├── LICENSE
    │   │   ├── Porting-Buffer.md
    │   │   ├── Readme.md
    │   │   ├── dangerous.js
    │   │   ├── package.json
    │   │   ├── safer.js
    │   │   └── tests.js
    │   ├── semver
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── bin
    │   │   │   └── semver.js
    │   │   ├── classes
    │   │   │   ├── comparator.js
    │   │   │   ├── index.js
    │   │   │   ├── range.js
    │   │   │   └── semver.js
    │   │   ├── functions
    │   │   │   ├── clean.js
    │   │   │   ├── cmp.js
    │   │   │   ├── coerce.js
    │   │   │   ├── compare-build.js
    │   │   │   ├── compare-loose.js
    │   │   │   ├── compare.js
    │   │   │   ├── diff.js
    │   │   │   ├── eq.js
    │   │   │   ├── gt.js
    │   │   │   ├── gte.js
    │   │   │   ├── inc.js
    │   │   │   ├── lt.js
    │   │   │   ├── lte.js
    │   │   │   ├── major.js
    │   │   │   ├── minor.js
    │   │   │   ├── neq.js
    │   │   │   ├── parse.js
    │   │   │   ├── patch.js
    │   │   │   ├── prerelease.js
    │   │   │   ├── rcompare.js
    │   │   │   ├── rsort.js
    │   │   │   ├── satisfies.js
    │   │   │   ├── sort.js
    │   │   │   └── valid.js
    │   │   ├── index.js
    │   │   ├── internal
    │   │   │   ├── constants.js
    │   │   │   ├── debug.js
    │   │   │   ├── identifiers.js
    │   │   │   ├── lrucache.js
    │   │   │   ├── parse-options.js
    │   │   │   └── re.js
    │   │   ├── package.json
    │   │   ├── preload.js
    │   │   ├── range.bnf
    │   │   └── ranges
    │   │   │   ├── gtr.js
    │   │   │   ├── intersects.js
    │   │   │   ├── ltr.js
    │   │   │   ├── max-satisfying.js
    │   │   │   ├── min-satisfying.js
    │   │   │   ├── min-version.js
    │   │   │   ├── outside.js
    │   │   │   ├── simplify.js
    │   │   │   ├── subset.js
    │   │   │   ├── to-comparators.js
    │   │   │   └── valid.js
    │   ├── send
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── serve-static
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── setprototypeof
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   └── index.js
    │   ├── side-channel-list
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── list.d.ts
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── side-channel-map
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── side-channel-weakmap
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── side-channel
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── sift
    │   │   ├── MIT-LICENSE.txt
    │   │   ├── README.md
    │   │   ├── es
    │   │   │   ├── index.js
    │   │   │   └── index.js.map
    │   │   ├── es5m
    │   │   │   ├── index.js
    │   │   │   └── index.js.map
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── core.d.ts
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── index.js.map
    │   │   │   ├── operations.d.ts
    │   │   │   └── utils.d.ts
    │   │   ├── package.json
    │   │   ├── sift.csp.min.js
    │   │   ├── sift.csp.min.js.map
    │   │   ├── sift.min.js
    │   │   ├── sift.min.js.map
    │   │   └── src
    │   │   │   ├── core.ts
    │   │   │   ├── index.ts
    │   │   │   ├── operations.ts
    │   │   │   └── utils.ts
    │   ├── sparse-bitfield
    │   │   ├── .npmignore
    │   │   ├── .travis.yml
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test.js
    │   ├── statuses
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── codes.json
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── toidentifier
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── tr46
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── mappingTable.json
    │   │   │   ├── regexes.js
    │   │   │   └── statusMapping.js
    │   │   └── package.json
    │   ├── type-is
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── unpipe
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── vary
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── webidl-conversions
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── lib
    │   │   │   └── index.js
    │   │   └── package.json
    │   ├── whatwg-url
    │   │   ├── LICENSE.txt
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── Function.js
    │   │   │   ├── URL-impl.js
    │   │   │   ├── URL.js
    │   │   │   ├── URLSearchParams-impl.js
    │   │   │   ├── URLSearchParams.js
    │   │   │   ├── VoidFunction.js
    │   │   │   ├── encoding.js
    │   │   │   ├── infra.js
    │   │   │   ├── percent-encoding.js
    │   │   │   ├── url-state-machine.js
    │   │   │   ├── urlencoded.js
    │   │   │   └── utils.js
    │   │   ├── package.json
    │   │   └── webidl2js-wrapper.js
    │   └── wrappy
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   └── wrappy.js
    ├── package-lock.json
    ├── package.json
    └── util
    │   └── SecretToken.js
├── backend
    ├── .env
    ├── UserData.js
    ├── index.js
    ├── model
    │   ├── HoldingModel.js
    │   ├── OrderModel.js
    │   └── PositionModel.js
    ├── node_modules
    │   ├── .bin
    │   │   ├── bcrypt
    │   │   ├── bcrypt.cmd
    │   │   ├── bcrypt.ps1
    │   │   ├── nodemon
    │   │   ├── nodemon.cmd
    │   │   ├── nodemon.ps1
    │   │   ├── nodetouch
    │   │   ├── nodetouch.cmd
    │   │   ├── nodetouch.ps1
    │   │   ├── semver
    │   │   ├── semver.cmd
    │   │   └── semver.ps1
    │   ├── .package-lock.json
    │   ├── @mongodb-js
    │   │   └── saslprep
    │   │   │   ├── LICENSE
    │   │   │   ├── dist
    │   │   │       ├── .esm-wrapper.mjs
    │   │   │       ├── browser.d.ts
    │   │   │       ├── browser.d.ts.map
    │   │   │       ├── browser.js
    │   │   │       ├── browser.js.map
    │   │   │       ├── code-points-data-browser.d.ts
    │   │   │       ├── code-points-data-browser.d.ts.map
    │   │   │       ├── code-points-data-browser.js
    │   │   │       ├── code-points-data-browser.js.map
    │   │   │       ├── code-points-data.d.ts
    │   │   │       ├── code-points-data.d.ts.map
    │   │   │       ├── code-points-data.js
    │   │   │       ├── code-points-data.js.map
    │   │   │       ├── code-points-src.d.ts
    │   │   │       ├── code-points-src.d.ts.map
    │   │   │       ├── code-points-src.js
    │   │   │       ├── code-points-src.js.map
    │   │   │       ├── generate-code-points.d.ts
    │   │   │       ├── generate-code-points.d.ts.map
    │   │   │       ├── generate-code-points.js
    │   │   │       ├── generate-code-points.js.map
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.d.ts.map
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       ├── memory-code-points.d.ts
    │   │   │       ├── memory-code-points.d.ts.map
    │   │   │       ├── memory-code-points.js
    │   │   │       ├── memory-code-points.js.map
    │   │   │       ├── node.d.ts
    │   │   │       ├── node.d.ts.map
    │   │   │       ├── node.js
    │   │   │       ├── node.js.map
    │   │   │       ├── util.d.ts
    │   │   │       ├── util.d.ts.map
    │   │   │       ├── util.js
    │   │   │       └── util.js.map
    │   │   │   ├── package.json
    │   │   │   └── readme.md
    │   ├── @types
    │   │   ├── webidl-conversions
    │   │   │   ├── LICENSE
    │   │   │   ├── README.md
    │   │   │   ├── index.d.ts
    │   │   │   └── package.json
    │   │   └── whatwg-url
    │   │   │   ├── LICENSE
    │   │   │   ├── README.md
    │   │   │   ├── index.d.ts
    │   │   │   ├── lib
    │   │   │       ├── URL-impl.d.ts
    │   │   │       ├── URL.d.ts
    │   │   │       ├── URLSearchParams-impl.d.ts
    │   │   │       └── URLSearchParams.d.ts
    │   │   │   ├── package.json
    │   │   │   └── webidl2js-wrapper.d.ts
    │   ├── accepts
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── anymatch
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── asynckit
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── bench.js
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── abort.js
    │   │   │   ├── async.js
    │   │   │   ├── defer.js
    │   │   │   ├── iterate.js
    │   │   │   ├── readable_asynckit.js
    │   │   │   ├── readable_parallel.js
    │   │   │   ├── readable_serial.js
    │   │   │   ├── readable_serial_ordered.js
    │   │   │   ├── state.js
    │   │   │   ├── streamify.js
    │   │   │   └── terminator.js
    │   │   ├── package.json
    │   │   ├── parallel.js
    │   │   ├── serial.js
    │   │   ├── serialOrdered.js
    │   │   └── stream.js
    │   ├── axios
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── MIGRATION_GUIDE.md
    │   │   ├── README.md
    │   │   ├── dist
    │   │   │   ├── axios.js
    │   │   │   ├── axios.js.map
    │   │   │   ├── axios.min.js
    │   │   │   ├── axios.min.js.map
    │   │   │   ├── browser
    │   │   │   │   ├── axios.cjs
    │   │   │   │   └── axios.cjs.map
    │   │   │   ├── esm
    │   │   │   │   ├── axios.js
    │   │   │   │   ├── axios.js.map
    │   │   │   │   ├── axios.min.js
    │   │   │   │   └── axios.min.js.map
    │   │   │   └── node
    │   │   │   │   ├── axios.cjs
    │   │   │   │   └── axios.cjs.map
    │   │   ├── index.d.cts
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── adapters
    │   │   │   │   ├── README.md
    │   │   │   │   ├── adapters.js
    │   │   │   │   ├── fetch.js
    │   │   │   │   ├── http.js
    │   │   │   │   └── xhr.js
    │   │   │   ├── axios.js
    │   │   │   ├── cancel
    │   │   │   │   ├── CancelToken.js
    │   │   │   │   ├── CanceledError.js
    │   │   │   │   └── isCancel.js
    │   │   │   ├── core
    │   │   │   │   ├── Axios.js
    │   │   │   │   ├── AxiosError.js
    │   │   │   │   ├── AxiosHeaders.js
    │   │   │   │   ├── InterceptorManager.js
    │   │   │   │   ├── README.md
    │   │   │   │   ├── buildFullPath.js
    │   │   │   │   ├── dispatchRequest.js
    │   │   │   │   ├── mergeConfig.js
    │   │   │   │   ├── settle.js
    │   │   │   │   └── transformData.js
    │   │   │   ├── defaults
    │   │   │   │   ├── index.js
    │   │   │   │   └── transitional.js
    │   │   │   ├── env
    │   │   │   │   ├── README.md
    │   │   │   │   ├── classes
    │   │   │   │   │   └── FormData.js
    │   │   │   │   └── data.js
    │   │   │   ├── helpers
    │   │   │   │   ├── AxiosTransformStream.js
    │   │   │   │   ├── AxiosURLSearchParams.js
    │   │   │   │   ├── HttpStatusCode.js
    │   │   │   │   ├── README.md
    │   │   │   │   ├── ZlibHeaderTransformStream.js
    │   │   │   │   ├── bind.js
    │   │   │   │   ├── buildURL.js
    │   │   │   │   ├── callbackify.js
    │   │   │   │   ├── combineURLs.js
    │   │   │   │   ├── composeSignals.js
    │   │   │   │   ├── cookies.js
    │   │   │   │   ├── deprecatedMethod.js
    │   │   │   │   ├── estimateDataURLDecodedBytes.js
    │   │   │   │   ├── formDataToJSON.js
    │   │   │   │   ├── formDataToStream.js
    │   │   │   │   ├── fromDataURI.js
    │   │   │   │   ├── isAbsoluteURL.js
    │   │   │   │   ├── isAxiosError.js
    │   │   │   │   ├── isURLSameOrigin.js
    │   │   │   │   ├── null.js
    │   │   │   │   ├── parseHeaders.js
    │   │   │   │   ├── parseProtocol.js
    │   │   │   │   ├── progressEventReducer.js
    │   │   │   │   ├── readBlob.js
    │   │   │   │   ├── resolveConfig.js
    │   │   │   │   ├── speedometer.js
    │   │   │   │   ├── spread.js
    │   │   │   │   ├── throttle.js
    │   │   │   │   ├── toFormData.js
    │   │   │   │   ├── toURLEncodedForm.js
    │   │   │   │   ├── trackStream.js
    │   │   │   │   └── validator.js
    │   │   │   ├── platform
    │   │   │   │   ├── browser
    │   │   │   │   │   ├── classes
    │   │   │   │   │   │   ├── Blob.js
    │   │   │   │   │   │   ├── FormData.js
    │   │   │   │   │   │   └── URLSearchParams.js
    │   │   │   │   │   └── index.js
    │   │   │   │   ├── common
    │   │   │   │   │   └── utils.js
    │   │   │   │   ├── index.js
    │   │   │   │   └── node
    │   │   │   │   │   ├── classes
    │   │   │   │   │       ├── FormData.js
    │   │   │   │   │       └── URLSearchParams.js
    │   │   │   │   │   └── index.js
    │   │   │   └── utils.js
    │   │   └── package.json
    │   ├── balanced-match
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── bcryptjs
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── bin
    │   │   │   └── bcrypt
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── types.d.ts
    │   │   └── umd
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── package.json
    │   │   │   └── types.d.ts
    │   ├── binary-extensions
    │   │   ├── binary-extensions.json
    │   │   ├── binary-extensions.json.d.ts
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── body-parser
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── read.js
    │   │   │   ├── types
    │   │   │   │   ├── json.js
    │   │   │   │   ├── raw.js
    │   │   │   │   ├── text.js
    │   │   │   │   └── urlencoded.js
    │   │   │   └── utils.js
    │   │   └── package.json
    │   ├── brace-expansion
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── braces
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── compile.js
    │   │   │   ├── constants.js
    │   │   │   ├── expand.js
    │   │   │   ├── parse.js
    │   │   │   ├── stringify.js
    │   │   │   └── utils.js
    │   │   └── package.json
    │   ├── bson
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── bson.d.ts
    │   │   ├── etc
    │   │   │   └── prepare.js
    │   │   ├── lib
    │   │   │   ├── bson.bundle.js
    │   │   │   ├── bson.bundle.js.map
    │   │   │   ├── bson.cjs
    │   │   │   ├── bson.cjs.map
    │   │   │   ├── bson.mjs
    │   │   │   ├── bson.mjs.map
    │   │   │   ├── bson.node.mjs
    │   │   │   ├── bson.node.mjs.map
    │   │   │   ├── bson.rn.cjs
    │   │   │   └── bson.rn.cjs.map
    │   │   ├── package.json
    │   │   ├── src
    │   │   │   ├── binary.ts
    │   │   │   ├── bson.ts
    │   │   │   ├── bson_value.ts
    │   │   │   ├── code.ts
    │   │   │   ├── constants.ts
    │   │   │   ├── db_ref.ts
    │   │   │   ├── decimal128.ts
    │   │   │   ├── double.ts
    │   │   │   ├── error.ts
    │   │   │   ├── extended_json.ts
    │   │   │   ├── index.ts
    │   │   │   ├── int_32.ts
    │   │   │   ├── long.ts
    │   │   │   ├── max_key.ts
    │   │   │   ├── min_key.ts
    │   │   │   ├── objectid.ts
    │   │   │   ├── parse_utf8.ts
    │   │   │   ├── parser
    │   │   │   │   ├── calculate_size.ts
    │   │   │   │   ├── deserializer.ts
    │   │   │   │   ├── on_demand
    │   │   │   │   │   ├── index.ts
    │   │   │   │   │   └── parse_to_elements.ts
    │   │   │   │   ├── serializer.ts
    │   │   │   │   └── utils.ts
    │   │   │   ├── regexp.ts
    │   │   │   ├── symbol.ts
    │   │   │   ├── timestamp.ts
    │   │   │   └── utils
    │   │   │   │   ├── byte_utils.ts
    │   │   │   │   ├── latin.ts
    │   │   │   │   ├── node_byte_utils.ts
    │   │   │   │   ├── number_utils.ts
    │   │   │   │   ├── string_utils.ts
    │   │   │   │   └── web_byte_utils.ts
    │   │   └── vendor
    │   │   │   ├── base64
    │   │   │       ├── LICENSE-MIT.txt
    │   │   │       ├── README.md
    │   │   │       ├── base64.js
    │   │   │       └── package.json
    │   │   │   └── text-encoding
    │   │   │       ├── LICENSE.md
    │   │   │       ├── README.md
    │   │   │       ├── index.js
    │   │   │       ├── lib
    │   │   │           ├── encoding-indexes.js
    │   │   │           └── encoding.js
    │   │   │       └── package.json
    │   ├── buffer-equal-constant-time
    │   │   ├── .npmignore
    │   │   ├── .travis.yml
    │   │   ├── LICENSE.txt
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test.js
    │   ├── bytes
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── call-bind-apply-helpers
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── actualApply.d.ts
    │   │   ├── actualApply.js
    │   │   ├── applyBind.d.ts
    │   │   ├── applyBind.js
    │   │   ├── functionApply.d.ts
    │   │   ├── functionApply.js
    │   │   ├── functionCall.d.ts
    │   │   ├── functionCall.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── reflectApply.d.ts
    │   │   ├── reflectApply.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── call-bound
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── chokidar
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── constants.js
    │   │   │   ├── fsevents-handler.js
    │   │   │   └── nodefs-handler.js
    │   │   ├── package.json
    │   │   └── types
    │   │   │   └── index.d.ts
    │   ├── clone
    │   │   ├── .npmignore
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── clone.iml
    │   │   ├── clone.js
    │   │   └── package.json
    │   ├── combined-stream
    │   │   ├── License
    │   │   ├── Readme.md
    │   │   ├── lib
    │   │   │   └── combined_stream.js
    │   │   ├── package.json
    │   │   └── yarn.lock
    │   ├── concat-map
    │   │   ├── .travis.yml
    │   │   ├── LICENSE
    │   │   ├── README.markdown
    │   │   ├── example
    │   │   │   └── map.js
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   └── map.js
    │   ├── content-disposition
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── content-type
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── cookie-parser
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── node_modules
    │   │   │   └── cookie-signature
    │   │   │   │   ├── .npmignore
    │   │   │   │   ├── History.md
    │   │   │   │   ├── Readme.md
    │   │   │   │   ├── index.js
    │   │   │   │   └── package.json
    │   │   └── package.json
    │   ├── cookie-signature
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── cookie
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── cors
    │   │   ├── CONTRIBUTING.md
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── lib
    │   │   │   └── index.js
    │   │   └── package.json
    │   ├── debug
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   └── src
    │   │   │   ├── browser.js
    │   │   │   ├── common.js
    │   │   │   ├── index.js
    │   │   │   └── node.js
    │   ├── delayed-stream
    │   │   ├── .npmignore
    │   │   ├── License
    │   │   ├── Makefile
    │   │   ├── Readme.md
    │   │   ├── lib
    │   │   │   └── delayed_stream.js
    │   │   └── package.json
    │   ├── depd
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   └── browser
    │   │   │   │   └── index.js
    │   │   └── package.json
    │   ├── dotenv
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README-es.md
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── config.d.ts
    │   │   ├── config.js
    │   │   ├── lib
    │   │   │   ├── cli-options.js
    │   │   │   ├── env-options.js
    │   │   │   ├── main.d.ts
    │   │   │   └── main.js
    │   │   └── package.json
    │   ├── dunder-proto
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── get.d.ts
    │   │   ├── get.js
    │   │   ├── package.json
    │   │   ├── set.d.ts
    │   │   ├── set.js
    │   │   ├── test
    │   │   │   ├── get.js
    │   │   │   ├── index.js
    │   │   │   └── set.js
    │   │   └── tsconfig.json
    │   ├── ecdsa-sig-formatter
    │   │   ├── CODEOWNERS
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   └── src
    │   │   │   ├── ecdsa-sig-formatter.d.ts
    │   │   │   ├── ecdsa-sig-formatter.js
    │   │   │   └── param-bytes-for-alg.js
    │   ├── ee-first
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── encodeurl
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── es-define-property
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── es-errors
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── eval.d.ts
    │   │   ├── eval.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── range.d.ts
    │   │   ├── range.js
    │   │   ├── ref.d.ts
    │   │   ├── ref.js
    │   │   ├── syntax.d.ts
    │   │   ├── syntax.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   ├── tsconfig.json
    │   │   ├── type.d.ts
    │   │   ├── type.js
    │   │   ├── uri.d.ts
    │   │   └── uri.js
    │   ├── es-object-atoms
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── RequireObjectCoercible.d.ts
    │   │   ├── RequireObjectCoercible.js
    │   │   ├── ToObject.d.ts
    │   │   ├── ToObject.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── isObject.d.ts
    │   │   ├── isObject.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── es-set-tostringtag
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── escape-html
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── etag
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── express
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── application.js
    │   │   │   ├── express.js
    │   │   │   ├── request.js
    │   │   │   ├── response.js
    │   │   │   ├── utils.js
    │   │   │   └── view.js
    │   │   └── package.json
    │   ├── fill-range
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── finalhandler
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── follow-redirects
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── debug.js
    │   │   ├── http.js
    │   │   ├── https.js
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── form-data
    │   │   ├── CHANGELOG.md
    │   │   ├── License
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── lib
    │   │   │   ├── browser.js
    │   │   │   ├── form_data.js
    │   │   │   └── populate.js
    │   │   ├── node_modules
    │   │   │   ├── mime-db
    │   │   │   │   ├── HISTORY.md
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── README.md
    │   │   │   │   ├── db.json
    │   │   │   │   ├── index.js
    │   │   │   │   └── package.json
    │   │   │   └── mime-types
    │   │   │   │   ├── HISTORY.md
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── README.md
    │   │   │   │   ├── index.js
    │   │   │   │   └── package.json
    │   │   └── package.json
    │   ├── forwarded
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── fresh
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── function-bind
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   ├── FUNDING.yml
    │   │   │   └── SECURITY.md
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── implementation.js
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   ├── .eslintrc
    │   │   │   └── index.js
    │   ├── generaterr
    │   │   ├── .npmignore
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── release.js
    │   ├── get-intrinsic
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   └── GetIntrinsic.js
    │   ├── get-proto
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── Object.getPrototypeOf.d.ts
    │   │   ├── Object.getPrototypeOf.js
    │   │   ├── README.md
    │   │   ├── Reflect.getPrototypeOf.d.ts
    │   │   ├── Reflect.getPrototypeOf.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── glob-parent
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── gopd
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── gOPD.d.ts
    │   │   ├── gOPD.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── has-flag
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── has-symbols
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── shams.d.ts
    │   │   ├── shams.js
    │   │   ├── test
    │   │   │   ├── index.js
    │   │   │   ├── shams
    │   │   │   │   ├── core-js.js
    │   │   │   │   └── get-own-property-symbols.js
    │   │   │   └── tests.js
    │   │   └── tsconfig.json
    │   ├── has-tostringtag
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── shams.d.ts
    │   │   ├── shams.js
    │   │   ├── test
    │   │   │   ├── index.js
    │   │   │   ├── shams
    │   │   │   │   ├── core-js.js
    │   │   │   │   └── get-own-property-symbols.js
    │   │   │   └── tests.js
    │   │   └── tsconfig.json
    │   ├── hasown
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── tsconfig.json
    │   ├── http-errors
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── node_modules
    │   │   │   └── statuses
    │   │   │   │   ├── HISTORY.md
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── README.md
    │   │   │   │   ├── codes.json
    │   │   │   │   ├── index.js
    │   │   │   │   └── package.json
    │   │   └── package.json
    │   ├── iconv-lite
    │   │   ├── .github
    │   │   │   └── dependabot.yml
    │   │   ├── .idea
    │   │   │   ├── codeStyles
    │   │   │   │   ├── Project.xml
    │   │   │   │   └── codeStyleConfig.xml
    │   │   │   ├── iconv-lite.iml
    │   │   │   ├── inspectionProfiles
    │   │   │   │   └── Project_Default.xml
    │   │   │   ├── modules.xml
    │   │   │   └── vcs.xml
    │   │   ├── Changelog.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── encodings
    │   │   │   ├── dbcs-codec.js
    │   │   │   ├── dbcs-data.js
    │   │   │   ├── index.js
    │   │   │   ├── internal.js
    │   │   │   ├── sbcs-codec.js
    │   │   │   ├── sbcs-data-generated.js
    │   │   │   ├── sbcs-data.js
    │   │   │   ├── tables
    │   │   │   │   ├── big5-added.json
    │   │   │   │   ├── cp936.json
    │   │   │   │   ├── cp949.json
    │   │   │   │   ├── cp950.json
    │   │   │   │   ├── eucjp.json
    │   │   │   │   ├── gb18030-ranges.json
    │   │   │   │   ├── gbk-added.json
    │   │   │   │   └── shiftjis.json
    │   │   │   ├── utf16.js
    │   │   │   ├── utf32.js
    │   │   │   └── utf7.js
    │   │   ├── lib
    │   │   │   ├── bom-handling.js
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── streams.js
    │   │   └── package.json
    │   ├── ignore-by-default
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── inherits
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── inherits.js
    │   │   ├── inherits_browser.js
    │   │   └── package.json
    │   ├── ipaddr.js
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── ipaddr.min.js
    │   │   ├── lib
    │   │   │   ├── ipaddr.js
    │   │   │   └── ipaddr.js.d.ts
    │   │   └── package.json
    │   ├── is-binary-path
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── is-extglob
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── is-glob
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── is-number
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── is-promise
    │   │   ├── LICENSE
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── index.mjs
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── jsonwebtoken
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── decode.js
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── JsonWebTokenError.js
    │   │   │   ├── NotBeforeError.js
    │   │   │   ├── TokenExpiredError.js
    │   │   │   ├── asymmetricKeyDetailsSupported.js
    │   │   │   ├── psSupported.js
    │   │   │   ├── rsaPssKeyDetailsSupported.js
    │   │   │   ├── timespan.js
    │   │   │   └── validateAsymmetricKey.js
    │   │   ├── package.json
    │   │   ├── sign.js
    │   │   └── verify.js
    │   ├── jwa
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── jws
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── data-stream.js
    │   │   │   ├── sign-stream.js
    │   │   │   ├── tostring.js
    │   │   │   └── verify-stream.js
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── kareem
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.includes
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.isboolean
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.isinteger
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.isnumber
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.isplainobject
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.isstring
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── lodash.once
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── math-intrinsics
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── abs.d.ts
    │   │   ├── abs.js
    │   │   ├── constants
    │   │   │   ├── maxArrayLength.d.ts
    │   │   │   ├── maxArrayLength.js
    │   │   │   ├── maxSafeInteger.d.ts
    │   │   │   ├── maxSafeInteger.js
    │   │   │   ├── maxValue.d.ts
    │   │   │   └── maxValue.js
    │   │   ├── floor.d.ts
    │   │   ├── floor.js
    │   │   ├── isFinite.d.ts
    │   │   ├── isFinite.js
    │   │   ├── isInteger.d.ts
    │   │   ├── isInteger.js
    │   │   ├── isNaN.d.ts
    │   │   ├── isNaN.js
    │   │   ├── isNegativeZero.d.ts
    │   │   ├── isNegativeZero.js
    │   │   ├── max.d.ts
    │   │   ├── max.js
    │   │   ├── min.d.ts
    │   │   ├── min.js
    │   │   ├── mod.d.ts
    │   │   ├── mod.js
    │   │   ├── package.json
    │   │   ├── pow.d.ts
    │   │   ├── pow.js
    │   │   ├── round.d.ts
    │   │   ├── round.js
    │   │   ├── sign.d.ts
    │   │   ├── sign.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── media-typer
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── memory-pager
    │   │   ├── .travis.yml
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test.js
    │   ├── merge-descriptors
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── mime-db
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── db.json
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── mime-types
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── mimeScore.js
    │   │   └── package.json
    │   ├── minimatch
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── minimatch.js
    │   │   └── package.json
    │   ├── moment-timezone
    │   │   ├── .editorconfig
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── builds
    │   │   │   ├── moment-timezone-with-data-10-year-range.d.ts
    │   │   │   ├── moment-timezone-with-data-10-year-range.js
    │   │   │   ├── moment-timezone-with-data-10-year-range.min.js
    │   │   │   ├── moment-timezone-with-data-1970-2030.d.ts
    │   │   │   ├── moment-timezone-with-data-1970-2030.js
    │   │   │   ├── moment-timezone-with-data-1970-2030.min.js
    │   │   │   ├── moment-timezone-with-data-2012-2022.d.ts
    │   │   │   ├── moment-timezone-with-data-2012-2022.js
    │   │   │   ├── moment-timezone-with-data-2012-2022.min.js
    │   │   │   ├── moment-timezone-with-data.d.ts
    │   │   │   ├── moment-timezone-with-data.js
    │   │   │   ├── moment-timezone-with-data.min.js
    │   │   │   └── moment-timezone.min.js
    │   │   ├── changelog.md
    │   │   ├── composer.json
    │   │   ├── data
    │   │   │   ├── meta
    │   │   │   │   └── latest.json
    │   │   │   └── packed
    │   │   │   │   └── latest.json
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── moment-timezone-utils.d.ts
    │   │   ├── moment-timezone-utils.js
    │   │   ├── moment-timezone.d.ts
    │   │   ├── moment-timezone.js
    │   │   └── package.json
    │   ├── moment
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── dist
    │   │   │   ├── locale
    │   │   │   │   ├── af.js
    │   │   │   │   ├── ar-dz.js
    │   │   │   │   ├── ar-kw.js
    │   │   │   │   ├── ar-ly.js
    │   │   │   │   ├── ar-ma.js
    │   │   │   │   ├── ar-ps.js
    │   │   │   │   ├── ar-sa.js
    │   │   │   │   ├── ar-tn.js
    │   │   │   │   ├── ar.js
    │   │   │   │   ├── az.js
    │   │   │   │   ├── be.js
    │   │   │   │   ├── bg.js
    │   │   │   │   ├── bm.js
    │   │   │   │   ├── bn-bd.js
    │   │   │   │   ├── bn.js
    │   │   │   │   ├── bo.js
    │   │   │   │   ├── br.js
    │   │   │   │   ├── bs.js
    │   │   │   │   ├── ca.js
    │   │   │   │   ├── cs.js
    │   │   │   │   ├── cv.js
    │   │   │   │   ├── cy.js
    │   │   │   │   ├── da.js
    │   │   │   │   ├── de-at.js
    │   │   │   │   ├── de-ch.js
    │   │   │   │   ├── de.js
    │   │   │   │   ├── dv.js
    │   │   │   │   ├── el.js
    │   │   │   │   ├── en-au.js
    │   │   │   │   ├── en-ca.js
    │   │   │   │   ├── en-gb.js
    │   │   │   │   ├── en-ie.js
    │   │   │   │   ├── en-il.js
    │   │   │   │   ├── en-in.js
    │   │   │   │   ├── en-nz.js
    │   │   │   │   ├── en-sg.js
    │   │   │   │   ├── eo.js
    │   │   │   │   ├── es-do.js
    │   │   │   │   ├── es-mx.js
    │   │   │   │   ├── es-us.js
    │   │   │   │   ├── es.js
    │   │   │   │   ├── et.js
    │   │   │   │   ├── eu.js
    │   │   │   │   ├── fa.js
    │   │   │   │   ├── fi.js
    │   │   │   │   ├── fil.js
    │   │   │   │   ├── fo.js
    │   │   │   │   ├── fr-ca.js
    │   │   │   │   ├── fr-ch.js
    │   │   │   │   ├── fr.js
    │   │   │   │   ├── fy.js
    │   │   │   │   ├── ga.js
    │   │   │   │   ├── gd.js
    │   │   │   │   ├── gl.js
    │   │   │   │   ├── gom-deva.js
    │   │   │   │   ├── gom-latn.js
    │   │   │   │   ├── gu.js
    │   │   │   │   ├── he.js
    │   │   │   │   ├── hi.js
    │   │   │   │   ├── hr.js
    │   │   │   │   ├── hu.js
    │   │   │   │   ├── hy-am.js
    │   │   │   │   ├── id.js
    │   │   │   │   ├── is.js
    │   │   │   │   ├── it-ch.js
    │   │   │   │   ├── it.js
    │   │   │   │   ├── ja.js
    │   │   │   │   ├── jv.js
    │   │   │   │   ├── ka.js
    │   │   │   │   ├── kk.js
    │   │   │   │   ├── km.js
    │   │   │   │   ├── kn.js
    │   │   │   │   ├── ko.js
    │   │   │   │   ├── ku-kmr.js
    │   │   │   │   ├── ku.js
    │   │   │   │   ├── ky.js
    │   │   │   │   ├── lb.js
    │   │   │   │   ├── lo.js
    │   │   │   │   ├── lt.js
    │   │   │   │   ├── lv.js
    │   │   │   │   ├── me.js
    │   │   │   │   ├── mi.js
    │   │   │   │   ├── mk.js
    │   │   │   │   ├── ml.js
    │   │   │   │   ├── mn.js
    │   │   │   │   ├── mr.js
    │   │   │   │   ├── ms-my.js
    │   │   │   │   ├── ms.js
    │   │   │   │   ├── mt.js
    │   │   │   │   ├── my.js
    │   │   │   │   ├── nb.js
    │   │   │   │   ├── ne.js
    │   │   │   │   ├── nl-be.js
    │   │   │   │   ├── nl.js
    │   │   │   │   ├── nn.js
    │   │   │   │   ├── oc-lnc.js
    │   │   │   │   ├── pa-in.js
    │   │   │   │   ├── pl.js
    │   │   │   │   ├── pt-br.js
    │   │   │   │   ├── pt.js
    │   │   │   │   ├── ro.js
    │   │   │   │   ├── ru.js
    │   │   │   │   ├── sd.js
    │   │   │   │   ├── se.js
    │   │   │   │   ├── si.js
    │   │   │   │   ├── sk.js
    │   │   │   │   ├── sl.js
    │   │   │   │   ├── sq.js
    │   │   │   │   ├── sr-cyrl.js
    │   │   │   │   ├── sr.js
    │   │   │   │   ├── ss.js
    │   │   │   │   ├── sv.js
    │   │   │   │   ├── sw.js
    │   │   │   │   ├── ta.js
    │   │   │   │   ├── te.js
    │   │   │   │   ├── tet.js
    │   │   │   │   ├── tg.js
    │   │   │   │   ├── th.js
    │   │   │   │   ├── tk.js
    │   │   │   │   ├── tl-ph.js
    │   │   │   │   ├── tlh.js
    │   │   │   │   ├── tr.js
    │   │   │   │   ├── tzl.js
    │   │   │   │   ├── tzm-latn.js
    │   │   │   │   ├── tzm.js
    │   │   │   │   ├── ug-cn.js
    │   │   │   │   ├── uk.js
    │   │   │   │   ├── ur.js
    │   │   │   │   ├── uz-latn.js
    │   │   │   │   ├── uz.js
    │   │   │   │   ├── vi.js
    │   │   │   │   ├── x-pseudo.js
    │   │   │   │   ├── yo.js
    │   │   │   │   ├── zh-cn.js
    │   │   │   │   ├── zh-hk.js
    │   │   │   │   ├── zh-mo.js
    │   │   │   │   └── zh-tw.js
    │   │   │   └── moment.js
    │   │   ├── ender.js
    │   │   ├── locale
    │   │   │   ├── af.js
    │   │   │   ├── ar-dz.js
    │   │   │   ├── ar-kw.js
    │   │   │   ├── ar-ly.js
    │   │   │   ├── ar-ma.js
    │   │   │   ├── ar-ps.js
    │   │   │   ├── ar-sa.js
    │   │   │   ├── ar-tn.js
    │   │   │   ├── ar.js
    │   │   │   ├── az.js
    │   │   │   ├── be.js
    │   │   │   ├── bg.js
    │   │   │   ├── bm.js
    │   │   │   ├── bn-bd.js
    │   │   │   ├── bn.js
    │   │   │   ├── bo.js
    │   │   │   ├── br.js
    │   │   │   ├── bs.js
    │   │   │   ├── ca.js
    │   │   │   ├── cs.js
    │   │   │   ├── cv.js
    │   │   │   ├── cy.js
    │   │   │   ├── da.js
    │   │   │   ├── de-at.js
    │   │   │   ├── de-ch.js
    │   │   │   ├── de.js
    │   │   │   ├── dv.js
    │   │   │   ├── el.js
    │   │   │   ├── en-au.js
    │   │   │   ├── en-ca.js
    │   │   │   ├── en-gb.js
    │   │   │   ├── en-ie.js
    │   │   │   ├── en-il.js
    │   │   │   ├── en-in.js
    │   │   │   ├── en-nz.js
    │   │   │   ├── en-sg.js
    │   │   │   ├── eo.js
    │   │   │   ├── es-do.js
    │   │   │   ├── es-mx.js
    │   │   │   ├── es-us.js
    │   │   │   ├── es.js
    │   │   │   ├── et.js
    │   │   │   ├── eu.js
    │   │   │   ├── fa.js
    │   │   │   ├── fi.js
    │   │   │   ├── fil.js
    │   │   │   ├── fo.js
    │   │   │   ├── fr-ca.js
    │   │   │   ├── fr-ch.js
    │   │   │   ├── fr.js
    │   │   │   ├── fy.js
    │   │   │   ├── ga.js
    │   │   │   ├── gd.js
    │   │   │   ├── gl.js
    │   │   │   ├── gom-deva.js
    │   │   │   ├── gom-latn.js
    │   │   │   ├── gu.js
    │   │   │   ├── he.js
    │   │   │   ├── hi.js
    │   │   │   ├── hr.js
    │   │   │   ├── hu.js
    │   │   │   ├── hy-am.js
    │   │   │   ├── id.js
    │   │   │   ├── is.js
    │   │   │   ├── it-ch.js
    │   │   │   ├── it.js
    │   │   │   ├── ja.js
    │   │   │   ├── jv.js
    │   │   │   ├── ka.js
    │   │   │   ├── kk.js
    │   │   │   ├── km.js
    │   │   │   ├── kn.js
    │   │   │   ├── ko.js
    │   │   │   ├── ku-kmr.js
    │   │   │   ├── ku.js
    │   │   │   ├── ky.js
    │   │   │   ├── lb.js
    │   │   │   ├── lo.js
    │   │   │   ├── lt.js
    │   │   │   ├── lv.js
    │   │   │   ├── me.js
    │   │   │   ├── mi.js
    │   │   │   ├── mk.js
    │   │   │   ├── ml.js
    │   │   │   ├── mn.js
    │   │   │   ├── mr.js
    │   │   │   ├── ms-my.js
    │   │   │   ├── ms.js
    │   │   │   ├── mt.js
    │   │   │   ├── my.js
    │   │   │   ├── nb.js
    │   │   │   ├── ne.js
    │   │   │   ├── nl-be.js
    │   │   │   ├── nl.js
    │   │   │   ├── nn.js
    │   │   │   ├── oc-lnc.js
    │   │   │   ├── pa-in.js
    │   │   │   ├── pl.js
    │   │   │   ├── pt-br.js
    │   │   │   ├── pt.js
    │   │   │   ├── ro.js
    │   │   │   ├── ru.js
    │   │   │   ├── sd.js
    │   │   │   ├── se.js
    │   │   │   ├── si.js
    │   │   │   ├── sk.js
    │   │   │   ├── sl.js
    │   │   │   ├── sq.js
    │   │   │   ├── sr-cyrl.js
    │   │   │   ├── sr.js
    │   │   │   ├── ss.js
    │   │   │   ├── sv.js
    │   │   │   ├── sw.js
    │   │   │   ├── ta.js
    │   │   │   ├── te.js
    │   │   │   ├── tet.js
    │   │   │   ├── tg.js
    │   │   │   ├── th.js
    │   │   │   ├── tk.js
    │   │   │   ├── tl-ph.js
    │   │   │   ├── tlh.js
    │   │   │   ├── tr.js
    │   │   │   ├── tzl.js
    │   │   │   ├── tzm-latn.js
    │   │   │   ├── tzm.js
    │   │   │   ├── ug-cn.js
    │   │   │   ├── uk.js
    │   │   │   ├── ur.js
    │   │   │   ├── uz-latn.js
    │   │   │   ├── uz.js
    │   │   │   ├── vi.js
    │   │   │   ├── x-pseudo.js
    │   │   │   ├── yo.js
    │   │   │   ├── zh-cn.js
    │   │   │   ├── zh-hk.js
    │   │   │   ├── zh-mo.js
    │   │   │   └── zh-tw.js
    │   │   ├── min
    │   │   │   ├── locales.js
    │   │   │   ├── locales.min.js
    │   │   │   ├── locales.min.js.map
    │   │   │   ├── moment-with-locales.js
    │   │   │   ├── moment-with-locales.min.js
    │   │   │   ├── moment-with-locales.min.js.map
    │   │   │   ├── moment.min.js
    │   │   │   └── moment.min.js.map
    │   │   ├── moment.d.ts
    │   │   ├── moment.js
    │   │   ├── package.js
    │   │   ├── package.json
    │   │   ├── src
    │   │   │   ├── lib
    │   │   │   │   ├── create
    │   │   │   │   │   ├── check-overflow.js
    │   │   │   │   │   ├── date-from-array.js
    │   │   │   │   │   ├── from-anything.js
    │   │   │   │   │   ├── from-array.js
    │   │   │   │   │   ├── from-object.js
    │   │   │   │   │   ├── from-string-and-array.js
    │   │   │   │   │   ├── from-string-and-format.js
    │   │   │   │   │   ├── from-string.js
    │   │   │   │   │   ├── local.js
    │   │   │   │   │   ├── parsing-flags.js
    │   │   │   │   │   ├── utc.js
    │   │   │   │   │   └── valid.js
    │   │   │   │   ├── duration
    │   │   │   │   │   ├── abs.js
    │   │   │   │   │   ├── add-subtract.js
    │   │   │   │   │   ├── as.js
    │   │   │   │   │   ├── bubble.js
    │   │   │   │   │   ├── clone.js
    │   │   │   │   │   ├── constructor.js
    │   │   │   │   │   ├── create.js
    │   │   │   │   │   ├── duration.js
    │   │   │   │   │   ├── get.js
    │   │   │   │   │   ├── humanize.js
    │   │   │   │   │   ├── iso-string.js
    │   │   │   │   │   ├── prototype.js
    │   │   │   │   │   └── valid.js
    │   │   │   │   ├── format
    │   │   │   │   │   └── format.js
    │   │   │   │   ├── locale
    │   │   │   │   │   ├── base-config.js
    │   │   │   │   │   ├── calendar.js
    │   │   │   │   │   ├── constructor.js
    │   │   │   │   │   ├── en.js
    │   │   │   │   │   ├── formats.js
    │   │   │   │   │   ├── invalid.js
    │   │   │   │   │   ├── lists.js
    │   │   │   │   │   ├── locale.js
    │   │   │   │   │   ├── locales.js
    │   │   │   │   │   ├── ordinal.js
    │   │   │   │   │   ├── pre-post-format.js
    │   │   │   │   │   ├── prototype.js
    │   │   │   │   │   ├── relative.js
    │   │   │   │   │   └── set.js
    │   │   │   │   ├── moment
    │   │   │   │   │   ├── add-subtract.js
    │   │   │   │   │   ├── calendar.js
    │   │   │   │   │   ├── clone.js
    │   │   │   │   │   ├── compare.js
    │   │   │   │   │   ├── constructor.js
    │   │   │   │   │   ├── creation-data.js
    │   │   │   │   │   ├── diff.js
    │   │   │   │   │   ├── format.js
    │   │   │   │   │   ├── from.js
    │   │   │   │   │   ├── get-set.js
    │   │   │   │   │   ├── locale.js
    │   │   │   │   │   ├── min-max.js
    │   │   │   │   │   ├── moment.js
    │   │   │   │   │   ├── now.js
    │   │   │   │   │   ├── prototype.js
    │   │   │   │   │   ├── start-end-of.js
    │   │   │   │   │   ├── to-type.js
    │   │   │   │   │   ├── to.js
    │   │   │   │   │   └── valid.js
    │   │   │   │   ├── parse
    │   │   │   │   │   ├── regex.js
    │   │   │   │   │   └── token.js
    │   │   │   │   ├── units
    │   │   │   │   │   ├── aliases.js
    │   │   │   │   │   ├── constants.js
    │   │   │   │   │   ├── day-of-month.js
    │   │   │   │   │   ├── day-of-week.js
    │   │   │   │   │   ├── day-of-year.js
    │   │   │   │   │   ├── era.js
    │   │   │   │   │   ├── hour.js
    │   │   │   │   │   ├── millisecond.js
    │   │   │   │   │   ├── minute.js
    │   │   │   │   │   ├── month.js
    │   │   │   │   │   ├── offset.js
    │   │   │   │   │   ├── priorities.js
    │   │   │   │   │   ├── quarter.js
    │   │   │   │   │   ├── second.js
    │   │   │   │   │   ├── timestamp.js
    │   │   │   │   │   ├── timezone.js
    │   │   │   │   │   ├── units.js
    │   │   │   │   │   ├── week-calendar-utils.js
    │   │   │   │   │   ├── week-year.js
    │   │   │   │   │   ├── week.js
    │   │   │   │   │   └── year.js
    │   │   │   │   └── utils
    │   │   │   │   │   ├── abs-ceil.js
    │   │   │   │   │   ├── abs-floor.js
    │   │   │   │   │   ├── abs-round.js
    │   │   │   │   │   ├── compare-arrays.js
    │   │   │   │   │   ├── defaults.js
    │   │   │   │   │   ├── deprecate.js
    │   │   │   │   │   ├── extend.js
    │   │   │   │   │   ├── has-own-prop.js
    │   │   │   │   │   ├── hooks.js
    │   │   │   │   │   ├── index-of.js
    │   │   │   │   │   ├── is-array.js
    │   │   │   │   │   ├── is-calendar-spec.js
    │   │   │   │   │   ├── is-date.js
    │   │   │   │   │   ├── is-function.js
    │   │   │   │   │   ├── is-leap-year.js
    │   │   │   │   │   ├── is-moment-input.js
    │   │   │   │   │   ├── is-number.js
    │   │   │   │   │   ├── is-object-empty.js
    │   │   │   │   │   ├── is-object.js
    │   │   │   │   │   ├── is-string.js
    │   │   │   │   │   ├── is-undefined.js
    │   │   │   │   │   ├── keys.js
    │   │   │   │   │   ├── map.js
    │   │   │   │   │   ├── mod.js
    │   │   │   │   │   ├── some.js
    │   │   │   │   │   ├── to-int.js
    │   │   │   │   │   └── zero-fill.js
    │   │   │   ├── locale
    │   │   │   │   ├── af.js
    │   │   │   │   ├── ar-dz.js
    │   │   │   │   ├── ar-kw.js
    │   │   │   │   ├── ar-ly.js
    │   │   │   │   ├── ar-ma.js
    │   │   │   │   ├── ar-ps.js
    │   │   │   │   ├── ar-sa.js
    │   │   │   │   ├── ar-tn.js
    │   │   │   │   ├── ar.js
    │   │   │   │   ├── az.js
    │   │   │   │   ├── be.js
    │   │   │   │   ├── bg.js
    │   │   │   │   ├── bm.js
    │   │   │   │   ├── bn-bd.js
    │   │   │   │   ├── bn.js
    │   │   │   │   ├── bo.js
    │   │   │   │   ├── br.js
    │   │   │   │   ├── bs.js
    │   │   │   │   ├── ca.js
    │   │   │   │   ├── cs.js
    │   │   │   │   ├── cv.js
    │   │   │   │   ├── cy.js
    │   │   │   │   ├── da.js
    │   │   │   │   ├── de-at.js
    │   │   │   │   ├── de-ch.js
    │   │   │   │   ├── de.js
    │   │   │   │   ├── dv.js
    │   │   │   │   ├── el.js
    │   │   │   │   ├── en-au.js
    │   │   │   │   ├── en-ca.js
    │   │   │   │   ├── en-gb.js
    │   │   │   │   ├── en-ie.js
    │   │   │   │   ├── en-il.js
    │   │   │   │   ├── en-in.js
    │   │   │   │   ├── en-nz.js
    │   │   │   │   ├── en-sg.js
    │   │   │   │   ├── eo.js
    │   │   │   │   ├── es-do.js
    │   │   │   │   ├── es-mx.js
    │   │   │   │   ├── es-us.js
    │   │   │   │   ├── es.js
    │   │   │   │   ├── et.js
    │   │   │   │   ├── eu.js
    │   │   │   │   ├── fa.js
    │   │   │   │   ├── fi.js
    │   │   │   │   ├── fil.js
    │   │   │   │   ├── fo.js
    │   │   │   │   ├── fr-ca.js
    │   │   │   │   ├── fr-ch.js
    │   │   │   │   ├── fr.js
    │   │   │   │   ├── fy.js
    │   │   │   │   ├── ga.js
    │   │   │   │   ├── gd.js
    │   │   │   │   ├── gl.js
    │   │   │   │   ├── gom-deva.js
    │   │   │   │   ├── gom-latn.js
    │   │   │   │   ├── gu.js
    │   │   │   │   ├── he.js
    │   │   │   │   ├── hi.js
    │   │   │   │   ├── hr.js
    │   │   │   │   ├── hu.js
    │   │   │   │   ├── hy-am.js
    │   │   │   │   ├── id.js
    │   │   │   │   ├── is.js
    │   │   │   │   ├── it-ch.js
    │   │   │   │   ├── it.js
    │   │   │   │   ├── ja.js
    │   │   │   │   ├── jv.js
    │   │   │   │   ├── ka.js
    │   │   │   │   ├── kk.js
    │   │   │   │   ├── km.js
    │   │   │   │   ├── kn.js
    │   │   │   │   ├── ko.js
    │   │   │   │   ├── ku-kmr.js
    │   │   │   │   ├── ku.js
    │   │   │   │   ├── ky.js
    │   │   │   │   ├── lb.js
    │   │   │   │   ├── lo.js
    │   │   │   │   ├── lt.js
    │   │   │   │   ├── lv.js
    │   │   │   │   ├── me.js
    │   │   │   │   ├── mi.js
    │   │   │   │   ├── mk.js
    │   │   │   │   ├── ml.js
    │   │   │   │   ├── mn.js
    │   │   │   │   ├── mr.js
    │   │   │   │   ├── ms-my.js
    │   │   │   │   ├── ms.js
    │   │   │   │   ├── mt.js
    │   │   │   │   ├── my.js
    │   │   │   │   ├── nb.js
    │   │   │   │   ├── ne.js
    │   │   │   │   ├── nl-be.js
    │   │   │   │   ├── nl.js
    │   │   │   │   ├── nn.js
    │   │   │   │   ├── oc-lnc.js
    │   │   │   │   ├── pa-in.js
    │   │   │   │   ├── pl.js
    │   │   │   │   ├── pt-br.js
    │   │   │   │   ├── pt.js
    │   │   │   │   ├── ro.js
    │   │   │   │   ├── ru.js
    │   │   │   │   ├── sd.js
    │   │   │   │   ├── se.js
    │   │   │   │   ├── si.js
    │   │   │   │   ├── sk.js
    │   │   │   │   ├── sl.js
    │   │   │   │   ├── sq.js
    │   │   │   │   ├── sr-cyrl.js
    │   │   │   │   ├── sr.js
    │   │   │   │   ├── ss.js
    │   │   │   │   ├── sv.js
    │   │   │   │   ├── sw.js
    │   │   │   │   ├── ta.js
    │   │   │   │   ├── te.js
    │   │   │   │   ├── tet.js
    │   │   │   │   ├── tg.js
    │   │   │   │   ├── th.js
    │   │   │   │   ├── tk.js
    │   │   │   │   ├── tl-ph.js
    │   │   │   │   ├── tlh.js
    │   │   │   │   ├── tr.js
    │   │   │   │   ├── tzl.js
    │   │   │   │   ├── tzm-latn.js
    │   │   │   │   ├── tzm.js
    │   │   │   │   ├── ug-cn.js
    │   │   │   │   ├── uk.js
    │   │   │   │   ├── ur.js
    │   │   │   │   ├── uz-latn.js
    │   │   │   │   ├── uz.js
    │   │   │   │   ├── vi.js
    │   │   │   │   ├── x-pseudo.js
    │   │   │   │   ├── yo.js
    │   │   │   │   ├── zh-cn.js
    │   │   │   │   ├── zh-hk.js
    │   │   │   │   ├── zh-mo.js
    │   │   │   │   └── zh-tw.js
    │   │   │   └── moment.js
    │   │   └── ts3.1-typings
    │   │   │   └── moment.d.ts
    │   ├── mongodb-connection-string-url
    │   │   ├── .esm-wrapper.mjs
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── lib
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── index.js.map
    │   │   │   ├── redact.d.ts
    │   │   │   ├── redact.js
    │   │   │   └── redact.js.map
    │   │   └── package.json
    │   ├── mongodb
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── etc
    │   │   │   └── prepare.js
    │   │   ├── lib
    │   │   │   ├── admin.js
    │   │   │   ├── admin.js.map
    │   │   │   ├── beta.d.ts
    │   │   │   ├── beta.js
    │   │   │   ├── beta.js.map
    │   │   │   ├── bson.js
    │   │   │   ├── bson.js.map
    │   │   │   ├── bulk
    │   │   │   │   ├── common.js
    │   │   │   │   ├── common.js.map
    │   │   │   │   ├── ordered.js
    │   │   │   │   ├── ordered.js.map
    │   │   │   │   ├── unordered.js
    │   │   │   │   └── unordered.js.map
    │   │   │   ├── change_stream.js
    │   │   │   ├── change_stream.js.map
    │   │   │   ├── client-side-encryption
    │   │   │   │   ├── auto_encrypter.js
    │   │   │   │   ├── auto_encrypter.js.map
    │   │   │   │   ├── client_encryption.js
    │   │   │   │   ├── client_encryption.js.map
    │   │   │   │   ├── crypto_callbacks.js
    │   │   │   │   ├── crypto_callbacks.js.map
    │   │   │   │   ├── errors.js
    │   │   │   │   ├── errors.js.map
    │   │   │   │   ├── mongocryptd_manager.js
    │   │   │   │   ├── mongocryptd_manager.js.map
    │   │   │   │   ├── providers
    │   │   │   │   │   ├── aws.js
    │   │   │   │   │   ├── aws.js.map
    │   │   │   │   │   ├── azure.js
    │   │   │   │   │   ├── azure.js.map
    │   │   │   │   │   ├── gcp.js
    │   │   │   │   │   ├── gcp.js.map
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── index.js.map
    │   │   │   │   ├── state_machine.js
    │   │   │   │   └── state_machine.js.map
    │   │   │   ├── cmap
    │   │   │   │   ├── auth
    │   │   │   │   │   ├── auth_provider.js
    │   │   │   │   │   ├── auth_provider.js.map
    │   │   │   │   │   ├── aws_temporary_credentials.js
    │   │   │   │   │   ├── aws_temporary_credentials.js.map
    │   │   │   │   │   ├── gssapi.js
    │   │   │   │   │   ├── gssapi.js.map
    │   │   │   │   │   ├── mongo_credentials.js
    │   │   │   │   │   ├── mongo_credentials.js.map
    │   │   │   │   │   ├── mongodb_aws.js
    │   │   │   │   │   ├── mongodb_aws.js.map
    │   │   │   │   │   ├── mongodb_oidc.js
    │   │   │   │   │   ├── mongodb_oidc.js.map
    │   │   │   │   │   ├── mongodb_oidc
    │   │   │   │   │   │   ├── automated_callback_workflow.js
    │   │   │   │   │   │   ├── automated_callback_workflow.js.map
    │   │   │   │   │   │   ├── azure_machine_workflow.js
    │   │   │   │   │   │   ├── azure_machine_workflow.js.map
    │   │   │   │   │   │   ├── callback_workflow.js
    │   │   │   │   │   │   ├── callback_workflow.js.map
    │   │   │   │   │   │   ├── command_builders.js
    │   │   │   │   │   │   ├── command_builders.js.map
    │   │   │   │   │   │   ├── gcp_machine_workflow.js
    │   │   │   │   │   │   ├── gcp_machine_workflow.js.map
    │   │   │   │   │   │   ├── human_callback_workflow.js
    │   │   │   │   │   │   ├── human_callback_workflow.js.map
    │   │   │   │   │   │   ├── k8s_machine_workflow.js
    │   │   │   │   │   │   ├── k8s_machine_workflow.js.map
    │   │   │   │   │   │   ├── token_cache.js
    │   │   │   │   │   │   ├── token_cache.js.map
    │   │   │   │   │   │   ├── token_machine_workflow.js
    │   │   │   │   │   │   └── token_machine_workflow.js.map
    │   │   │   │   │   ├── plain.js
    │   │   │   │   │   ├── plain.js.map
    │   │   │   │   │   ├── providers.js
    │   │   │   │   │   ├── providers.js.map
    │   │   │   │   │   ├── scram.js
    │   │   │   │   │   ├── scram.js.map
    │   │   │   │   │   ├── x509.js
    │   │   │   │   │   └── x509.js.map
    │   │   │   │   ├── command_monitoring_events.js
    │   │   │   │   ├── command_monitoring_events.js.map
    │   │   │   │   ├── commands.js
    │   │   │   │   ├── commands.js.map
    │   │   │   │   ├── connect.js
    │   │   │   │   ├── connect.js.map
    │   │   │   │   ├── connection.js
    │   │   │   │   ├── connection.js.map
    │   │   │   │   ├── connection_pool.js
    │   │   │   │   ├── connection_pool.js.map
    │   │   │   │   ├── connection_pool_events.js
    │   │   │   │   ├── connection_pool_events.js.map
    │   │   │   │   ├── errors.js
    │   │   │   │   ├── errors.js.map
    │   │   │   │   ├── handshake
    │   │   │   │   │   ├── client_metadata.js
    │   │   │   │   │   └── client_metadata.js.map
    │   │   │   │   ├── metrics.js
    │   │   │   │   ├── metrics.js.map
    │   │   │   │   ├── stream_description.js
    │   │   │   │   ├── stream_description.js.map
    │   │   │   │   └── wire_protocol
    │   │   │   │   │   ├── compression.js
    │   │   │   │   │   ├── compression.js.map
    │   │   │   │   │   ├── constants.js
    │   │   │   │   │   ├── constants.js.map
    │   │   │   │   │   ├── on_data.js
    │   │   │   │   │   ├── on_data.js.map
    │   │   │   │   │   ├── on_demand
    │   │   │   │   │       ├── document.js
    │   │   │   │   │       └── document.js.map
    │   │   │   │   │   ├── responses.js
    │   │   │   │   │   ├── responses.js.map
    │   │   │   │   │   ├── shared.js
    │   │   │   │   │   └── shared.js.map
    │   │   │   ├── collection.js
    │   │   │   ├── collection.js.map
    │   │   │   ├── connection_string.js
    │   │   │   ├── connection_string.js.map
    │   │   │   ├── constants.js
    │   │   │   ├── constants.js.map
    │   │   │   ├── cursor
    │   │   │   │   ├── abstract_cursor.js
    │   │   │   │   ├── abstract_cursor.js.map
    │   │   │   │   ├── aggregation_cursor.js
    │   │   │   │   ├── aggregation_cursor.js.map
    │   │   │   │   ├── change_stream_cursor.js
    │   │   │   │   ├── change_stream_cursor.js.map
    │   │   │   │   ├── client_bulk_write_cursor.js
    │   │   │   │   ├── client_bulk_write_cursor.js.map
    │   │   │   │   ├── find_cursor.js
    │   │   │   │   ├── find_cursor.js.map
    │   │   │   │   ├── list_collections_cursor.js
    │   │   │   │   ├── list_collections_cursor.js.map
    │   │   │   │   ├── list_indexes_cursor.js
    │   │   │   │   ├── list_indexes_cursor.js.map
    │   │   │   │   ├── list_search_indexes_cursor.js
    │   │   │   │   ├── list_search_indexes_cursor.js.map
    │   │   │   │   ├── run_command_cursor.js
    │   │   │   │   └── run_command_cursor.js.map
    │   │   │   ├── db.js
    │   │   │   ├── db.js.map
    │   │   │   ├── deps.js
    │   │   │   ├── deps.js.map
    │   │   │   ├── encrypter.js
    │   │   │   ├── encrypter.js.map
    │   │   │   ├── error.js
    │   │   │   ├── error.js.map
    │   │   │   ├── explain.js
    │   │   │   ├── explain.js.map
    │   │   │   ├── gridfs
    │   │   │   │   ├── download.js
    │   │   │   │   ├── download.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── upload.js
    │   │   │   │   └── upload.js.map
    │   │   │   ├── index.js
    │   │   │   ├── index.js.map
    │   │   │   ├── mongo_client.js
    │   │   │   ├── mongo_client.js.map
    │   │   │   ├── mongo_client_auth_providers.js
    │   │   │   ├── mongo_client_auth_providers.js.map
    │   │   │   ├── mongo_logger.js
    │   │   │   ├── mongo_logger.js.map
    │   │   │   ├── mongo_types.js
    │   │   │   ├── mongo_types.js.map
    │   │   │   ├── operations
    │   │   │   │   ├── aggregate.js
    │   │   │   │   ├── aggregate.js.map
    │   │   │   │   ├── bulk_write.js
    │   │   │   │   ├── bulk_write.js.map
    │   │   │   │   ├── client_bulk_write
    │   │   │   │   │   ├── client_bulk_write.js
    │   │   │   │   │   ├── client_bulk_write.js.map
    │   │   │   │   │   ├── command_builder.js
    │   │   │   │   │   ├── command_builder.js.map
    │   │   │   │   │   ├── common.js
    │   │   │   │   │   ├── common.js.map
    │   │   │   │   │   ├── executor.js
    │   │   │   │   │   ├── executor.js.map
    │   │   │   │   │   ├── results_merger.js
    │   │   │   │   │   └── results_merger.js.map
    │   │   │   │   ├── collections.js
    │   │   │   │   ├── collections.js.map
    │   │   │   │   ├── command.js
    │   │   │   │   ├── command.js.map
    │   │   │   │   ├── count.js
    │   │   │   │   ├── count.js.map
    │   │   │   │   ├── create_collection.js
    │   │   │   │   ├── create_collection.js.map
    │   │   │   │   ├── delete.js
    │   │   │   │   ├── delete.js.map
    │   │   │   │   ├── distinct.js
    │   │   │   │   ├── distinct.js.map
    │   │   │   │   ├── drop.js
    │   │   │   │   ├── drop.js.map
    │   │   │   │   ├── estimated_document_count.js
    │   │   │   │   ├── estimated_document_count.js.map
    │   │   │   │   ├── execute_operation.js
    │   │   │   │   ├── execute_operation.js.map
    │   │   │   │   ├── find.js
    │   │   │   │   ├── find.js.map
    │   │   │   │   ├── find_and_modify.js
    │   │   │   │   ├── find_and_modify.js.map
    │   │   │   │   ├── get_more.js
    │   │   │   │   ├── get_more.js.map
    │   │   │   │   ├── indexes.js
    │   │   │   │   ├── indexes.js.map
    │   │   │   │   ├── insert.js
    │   │   │   │   ├── insert.js.map
    │   │   │   │   ├── is_capped.js
    │   │   │   │   ├── is_capped.js.map
    │   │   │   │   ├── kill_cursors.js
    │   │   │   │   ├── kill_cursors.js.map
    │   │   │   │   ├── list_collections.js
    │   │   │   │   ├── list_collections.js.map
    │   │   │   │   ├── list_databases.js
    │   │   │   │   ├── list_databases.js.map
    │   │   │   │   ├── operation.js
    │   │   │   │   ├── operation.js.map
    │   │   │   │   ├── options_operation.js
    │   │   │   │   ├── options_operation.js.map
    │   │   │   │   ├── profiling_level.js
    │   │   │   │   ├── profiling_level.js.map
    │   │   │   │   ├── remove_user.js
    │   │   │   │   ├── remove_user.js.map
    │   │   │   │   ├── rename.js
    │   │   │   │   ├── rename.js.map
    │   │   │   │   ├── run_command.js
    │   │   │   │   ├── run_command.js.map
    │   │   │   │   ├── search_indexes
    │   │   │   │   │   ├── create.js
    │   │   │   │   │   ├── create.js.map
    │   │   │   │   │   ├── drop.js
    │   │   │   │   │   ├── drop.js.map
    │   │   │   │   │   ├── update.js
    │   │   │   │   │   └── update.js.map
    │   │   │   │   ├── set_profiling_level.js
    │   │   │   │   ├── set_profiling_level.js.map
    │   │   │   │   ├── stats.js
    │   │   │   │   ├── stats.js.map
    │   │   │   │   ├── update.js
    │   │   │   │   ├── update.js.map
    │   │   │   │   ├── validate_collection.js
    │   │   │   │   └── validate_collection.js.map
    │   │   │   ├── read_concern.js
    │   │   │   ├── read_concern.js.map
    │   │   │   ├── read_preference.js
    │   │   │   ├── read_preference.js.map
    │   │   │   ├── resource_management.js
    │   │   │   ├── resource_management.js.map
    │   │   │   ├── sdam
    │   │   │   │   ├── common.js
    │   │   │   │   ├── common.js.map
    │   │   │   │   ├── events.js
    │   │   │   │   ├── events.js.map
    │   │   │   │   ├── monitor.js
    │   │   │   │   ├── monitor.js.map
    │   │   │   │   ├── server.js
    │   │   │   │   ├── server.js.map
    │   │   │   │   ├── server_description.js
    │   │   │   │   ├── server_description.js.map
    │   │   │   │   ├── server_selection.js
    │   │   │   │   ├── server_selection.js.map
    │   │   │   │   ├── server_selection_events.js
    │   │   │   │   ├── server_selection_events.js.map
    │   │   │   │   ├── srv_polling.js
    │   │   │   │   ├── srv_polling.js.map
    │   │   │   │   ├── topology.js
    │   │   │   │   ├── topology.js.map
    │   │   │   │   ├── topology_description.js
    │   │   │   │   └── topology_description.js.map
    │   │   │   ├── sessions.js
    │   │   │   ├── sessions.js.map
    │   │   │   ├── sort.js
    │   │   │   ├── sort.js.map
    │   │   │   ├── timeout.js
    │   │   │   ├── timeout.js.map
    │   │   │   ├── transactions.js
    │   │   │   ├── transactions.js.map
    │   │   │   ├── utils.js
    │   │   │   ├── utils.js.map
    │   │   │   ├── write_concern.js
    │   │   │   └── write_concern.js.map
    │   │   ├── mongodb.d.ts
    │   │   ├── package.json
    │   │   ├── src
    │   │   │   ├── admin.ts
    │   │   │   ├── beta.ts
    │   │   │   ├── bson.ts
    │   │   │   ├── bulk
    │   │   │   │   ├── common.ts
    │   │   │   │   ├── ordered.ts
    │   │   │   │   └── unordered.ts
    │   │   │   ├── change_stream.ts
    │   │   │   ├── client-side-encryption
    │   │   │   │   ├── auto_encrypter.ts
    │   │   │   │   ├── client_encryption.ts
    │   │   │   │   ├── crypto_callbacks.ts
    │   │   │   │   ├── errors.ts
    │   │   │   │   ├── mongocryptd_manager.ts
    │   │   │   │   ├── providers
    │   │   │   │   │   ├── aws.ts
    │   │   │   │   │   ├── azure.ts
    │   │   │   │   │   ├── gcp.ts
    │   │   │   │   │   └── index.ts
    │   │   │   │   └── state_machine.ts
    │   │   │   ├── cmap
    │   │   │   │   ├── auth
    │   │   │   │   │   ├── auth_provider.ts
    │   │   │   │   │   ├── aws_temporary_credentials.ts
    │   │   │   │   │   ├── gssapi.ts
    │   │   │   │   │   ├── mongo_credentials.ts
    │   │   │   │   │   ├── mongodb_aws.ts
    │   │   │   │   │   ├── mongodb_oidc.ts
    │   │   │   │   │   ├── mongodb_oidc
    │   │   │   │   │   │   ├── automated_callback_workflow.ts
    │   │   │   │   │   │   ├── azure_machine_workflow.ts
    │   │   │   │   │   │   ├── callback_workflow.ts
    │   │   │   │   │   │   ├── command_builders.ts
    │   │   │   │   │   │   ├── gcp_machine_workflow.ts
    │   │   │   │   │   │   ├── human_callback_workflow.ts
    │   │   │   │   │   │   ├── k8s_machine_workflow.ts
    │   │   │   │   │   │   ├── token_cache.ts
    │   │   │   │   │   │   └── token_machine_workflow.ts
    │   │   │   │   │   ├── plain.ts
    │   │   │   │   │   ├── providers.ts
    │   │   │   │   │   ├── scram.ts
    │   │   │   │   │   └── x509.ts
    │   │   │   │   ├── command_monitoring_events.ts
    │   │   │   │   ├── commands.ts
    │   │   │   │   ├── connect.ts
    │   │   │   │   ├── connection.ts
    │   │   │   │   ├── connection_pool.ts
    │   │   │   │   ├── connection_pool_events.ts
    │   │   │   │   ├── errors.ts
    │   │   │   │   ├── handshake
    │   │   │   │   │   └── client_metadata.ts
    │   │   │   │   ├── metrics.ts
    │   │   │   │   ├── stream_description.ts
    │   │   │   │   └── wire_protocol
    │   │   │   │   │   ├── compression.ts
    │   │   │   │   │   ├── constants.ts
    │   │   │   │   │   ├── on_data.ts
    │   │   │   │   │   ├── on_demand
    │   │   │   │   │       └── document.ts
    │   │   │   │   │   ├── responses.ts
    │   │   │   │   │   └── shared.ts
    │   │   │   ├── collection.ts
    │   │   │   ├── connection_string.ts
    │   │   │   ├── constants.ts
    │   │   │   ├── cursor
    │   │   │   │   ├── abstract_cursor.ts
    │   │   │   │   ├── aggregation_cursor.ts
    │   │   │   │   ├── change_stream_cursor.ts
    │   │   │   │   ├── client_bulk_write_cursor.ts
    │   │   │   │   ├── find_cursor.ts
    │   │   │   │   ├── list_collections_cursor.ts
    │   │   │   │   ├── list_indexes_cursor.ts
    │   │   │   │   ├── list_search_indexes_cursor.ts
    │   │   │   │   └── run_command_cursor.ts
    │   │   │   ├── db.ts
    │   │   │   ├── deps.ts
    │   │   │   ├── encrypter.ts
    │   │   │   ├── error.ts
    │   │   │   ├── explain.ts
    │   │   │   ├── gridfs
    │   │   │   │   ├── download.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   └── upload.ts
    │   │   │   ├── index.ts
    │   │   │   ├── mongo_client.ts
    │   │   │   ├── mongo_client_auth_providers.ts
    │   │   │   ├── mongo_logger.ts
    │   │   │   ├── mongo_types.ts
    │   │   │   ├── operations
    │   │   │   │   ├── aggregate.ts
    │   │   │   │   ├── bulk_write.ts
    │   │   │   │   ├── client_bulk_write
    │   │   │   │   │   ├── client_bulk_write.ts
    │   │   │   │   │   ├── command_builder.ts
    │   │   │   │   │   ├── common.ts
    │   │   │   │   │   ├── executor.ts
    │   │   │   │   │   └── results_merger.ts
    │   │   │   │   ├── collections.ts
    │   │   │   │   ├── command.ts
    │   │   │   │   ├── count.ts
    │   │   │   │   ├── create_collection.ts
    │   │   │   │   ├── delete.ts
    │   │   │   │   ├── distinct.ts
    │   │   │   │   ├── drop.ts
    │   │   │   │   ├── estimated_document_count.ts
    │   │   │   │   ├── execute_operation.ts
    │   │   │   │   ├── find.ts
    │   │   │   │   ├── find_and_modify.ts
    │   │   │   │   ├── get_more.ts
    │   │   │   │   ├── indexes.ts
    │   │   │   │   ├── insert.ts
    │   │   │   │   ├── is_capped.ts
    │   │   │   │   ├── kill_cursors.ts
    │   │   │   │   ├── list_collections.ts
    │   │   │   │   ├── list_databases.ts
    │   │   │   │   ├── operation.ts
    │   │   │   │   ├── options_operation.ts
    │   │   │   │   ├── profiling_level.ts
    │   │   │   │   ├── remove_user.ts
    │   │   │   │   ├── rename.ts
    │   │   │   │   ├── run_command.ts
    │   │   │   │   ├── search_indexes
    │   │   │   │   │   ├── create.ts
    │   │   │   │   │   ├── drop.ts
    │   │   │   │   │   └── update.ts
    │   │   │   │   ├── set_profiling_level.ts
    │   │   │   │   ├── stats.ts
    │   │   │   │   ├── update.ts
    │   │   │   │   └── validate_collection.ts
    │   │   │   ├── read_concern.ts
    │   │   │   ├── read_preference.ts
    │   │   │   ├── resource_management.ts
    │   │   │   ├── sdam
    │   │   │   │   ├── common.ts
    │   │   │   │   ├── events.ts
    │   │   │   │   ├── monitor.ts
    │   │   │   │   ├── server.ts
    │   │   │   │   ├── server_description.ts
    │   │   │   │   ├── server_selection.ts
    │   │   │   │   ├── server_selection_events.ts
    │   │   │   │   ├── srv_polling.ts
    │   │   │   │   ├── topology.ts
    │   │   │   │   └── topology_description.ts
    │   │   │   ├── sessions.ts
    │   │   │   ├── sort.ts
    │   │   │   ├── timeout.ts
    │   │   │   ├── transactions.ts
    │   │   │   ├── utils.ts
    │   │   │   └── write_concern.ts
    │   │   └── tsconfig.json
    │   ├── mongoose
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── browser.js
    │   │   ├── deno.lock
    │   │   ├── dist
    │   │   │   └── browser.umd.js
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── aggregate.js
    │   │   │   ├── browser.js
    │   │   │   ├── browserDocument.js
    │   │   │   ├── cast.js
    │   │   │   ├── cast
    │   │   │   │   ├── bigint.js
    │   │   │   │   ├── boolean.js
    │   │   │   │   ├── date.js
    │   │   │   │   ├── decimal128.js
    │   │   │   │   ├── double.js
    │   │   │   │   ├── int32.js
    │   │   │   │   ├── number.js
    │   │   │   │   ├── objectid.js
    │   │   │   │   ├── string.js
    │   │   │   │   └── uuid.js
    │   │   │   ├── collection.js
    │   │   │   ├── connection.js
    │   │   │   ├── connectionState.js
    │   │   │   ├── constants.js
    │   │   │   ├── cursor
    │   │   │   │   ├── aggregationCursor.js
    │   │   │   │   ├── changeStream.js
    │   │   │   │   └── queryCursor.js
    │   │   │   ├── document.js
    │   │   │   ├── documentProvider.js
    │   │   │   ├── driver.js
    │   │   │   ├── drivers
    │   │   │   │   ├── SPEC.md
    │   │   │   │   ├── browser
    │   │   │   │   │   ├── binary.js
    │   │   │   │   │   ├── decimal128.js
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── objectid.js
    │   │   │   │   └── node-mongodb-native
    │   │   │   │   │   ├── bulkWriteResult.js
    │   │   │   │   │   ├── collection.js
    │   │   │   │   │   ├── connection.js
    │   │   │   │   │   └── index.js
    │   │   │   ├── error
    │   │   │   │   ├── browserMissingSchema.js
    │   │   │   │   ├── bulkSaveIncompleteError.js
    │   │   │   │   ├── bulkWriteError.js
    │   │   │   │   ├── cast.js
    │   │   │   │   ├── createCollectionsError.js
    │   │   │   │   ├── divergentArray.js
    │   │   │   │   ├── eachAsyncMultiError.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── invalidSchemaOption.js
    │   │   │   │   ├── messages.js
    │   │   │   │   ├── missingSchema.js
    │   │   │   │   ├── mongooseError.js
    │   │   │   │   ├── notFound.js
    │   │   │   │   ├── objectExpected.js
    │   │   │   │   ├── objectParameter.js
    │   │   │   │   ├── overwriteModel.js
    │   │   │   │   ├── parallelSave.js
    │   │   │   │   ├── parallelValidate.js
    │   │   │   │   ├── serverSelection.js
    │   │   │   │   ├── setOptionError.js
    │   │   │   │   ├── strict.js
    │   │   │   │   ├── strictPopulate.js
    │   │   │   │   ├── syncIndexes.js
    │   │   │   │   ├── validation.js
    │   │   │   │   ├── validator.js
    │   │   │   │   └── version.js
    │   │   │   ├── helpers
    │   │   │   │   ├── aggregate
    │   │   │   │   │   ├── prepareDiscriminatorPipeline.js
    │   │   │   │   │   └── stringifyFunctionOperators.js
    │   │   │   │   ├── arrayDepth.js
    │   │   │   │   ├── clone.js
    │   │   │   │   ├── common.js
    │   │   │   │   ├── createJSONSchemaTypeDefinition.js
    │   │   │   │   ├── cursor
    │   │   │   │   │   └── eachAsync.js
    │   │   │   │   ├── discriminator
    │   │   │   │   │   ├── applyEmbeddedDiscriminators.js
    │   │   │   │   │   ├── areDiscriminatorValuesEqual.js
    │   │   │   │   │   ├── checkEmbeddedDiscriminatorKeyProjection.js
    │   │   │   │   │   ├── getConstructor.js
    │   │   │   │   │   ├── getDiscriminatorByValue.js
    │   │   │   │   │   ├── getSchemaDiscriminatorByValue.js
    │   │   │   │   │   └── mergeDiscriminatorSchema.js
    │   │   │   │   ├── document
    │   │   │   │   │   ├── applyDefaults.js
    │   │   │   │   │   ├── applyTimestamps.js
    │   │   │   │   │   ├── applyVirtuals.js
    │   │   │   │   │   ├── cleanModifiedSubpaths.js
    │   │   │   │   │   ├── compile.js
    │   │   │   │   │   ├── getDeepestSubdocumentForPath.js
    │   │   │   │   │   ├── getEmbeddedDiscriminatorPath.js
    │   │   │   │   │   └── handleSpreadDoc.js
    │   │   │   │   ├── each.js
    │   │   │   │   ├── error
    │   │   │   │   │   └── combinePathErrors.js
    │   │   │   │   ├── firstKey.js
    │   │   │   │   ├── get.js
    │   │   │   │   ├── getConstructorName.js
    │   │   │   │   ├── getDefaultBulkwriteResult.js
    │   │   │   │   ├── getFunctionName.js
    │   │   │   │   ├── immediate.js
    │   │   │   │   ├── indexes
    │   │   │   │   │   ├── applySchemaCollation.js
    │   │   │   │   │   ├── decorateDiscriminatorIndexOptions.js
    │   │   │   │   │   ├── getRelatedIndexes.js
    │   │   │   │   │   ├── isDefaultIdIndex.js
    │   │   │   │   │   ├── isIndexEqual.js
    │   │   │   │   │   ├── isIndexSpecEqual.js
    │   │   │   │   │   ├── isTextIndex.js
    │   │   │   │   │   └── isTimeseriesIndex.js
    │   │   │   │   ├── isAsyncFunction.js
    │   │   │   │   ├── isBsonType.js
    │   │   │   │   ├── isMongooseObject.js
    │   │   │   │   ├── isObject.js
    │   │   │   │   ├── isPOJO.js
    │   │   │   │   ├── isPromise.js
    │   │   │   │   ├── isSimpleValidator.js
    │   │   │   │   ├── minimize.js
    │   │   │   │   ├── model
    │   │   │   │   │   ├── applyDefaultsToPOJO.js
    │   │   │   │   │   ├── applyHooks.js
    │   │   │   │   │   ├── applyMethods.js
    │   │   │   │   │   ├── applyStaticHooks.js
    │   │   │   │   │   ├── applyStatics.js
    │   │   │   │   │   ├── castBulkWrite.js
    │   │   │   │   │   ├── decorateBulkWriteResult.js
    │   │   │   │   │   ├── discriminator.js
    │   │   │   │   │   └── pushNestedArrayPaths.js
    │   │   │   │   ├── omitUndefined.js
    │   │   │   │   ├── once.js
    │   │   │   │   ├── parallelLimit.js
    │   │   │   │   ├── path
    │   │   │   │   │   ├── parentPaths.js
    │   │   │   │   │   └── setDottedPath.js
    │   │   │   │   ├── pluralize.js
    │   │   │   │   ├── populate
    │   │   │   │   │   ├── assignRawDocsToIdStructure.js
    │   │   │   │   │   ├── assignVals.js
    │   │   │   │   │   ├── createPopulateQueryFilter.js
    │   │   │   │   │   ├── getModelsMapForPopulate.js
    │   │   │   │   │   ├── getSchemaTypes.js
    │   │   │   │   │   ├── getVirtual.js
    │   │   │   │   │   ├── leanPopulateMap.js
    │   │   │   │   │   ├── lookupLocalFields.js
    │   │   │   │   │   ├── markArraySubdocsPopulated.js
    │   │   │   │   │   ├── modelNamesFromRefPath.js
    │   │   │   │   │   ├── removeDeselectedForeignField.js
    │   │   │   │   │   ├── setPopulatedVirtualValue.js
    │   │   │   │   │   ├── skipPopulateValue.js
    │   │   │   │   │   └── validateRef.js
    │   │   │   │   ├── printJestWarning.js
    │   │   │   │   ├── processConnectionOptions.js
    │   │   │   │   ├── projection
    │   │   │   │   │   ├── applyProjection.js
    │   │   │   │   │   ├── hasIncludedChildren.js
    │   │   │   │   │   ├── isDefiningProjection.js
    │   │   │   │   │   ├── isExclusive.js
    │   │   │   │   │   ├── isInclusive.js
    │   │   │   │   │   ├── isNestedProjection.js
    │   │   │   │   │   ├── isPathExcluded.js
    │   │   │   │   │   ├── isPathSelectedInclusive.js
    │   │   │   │   │   ├── isSubpath.js
    │   │   │   │   │   └── parseProjection.js
    │   │   │   │   ├── promiseOrCallback.js
    │   │   │   │   ├── query
    │   │   │   │   │   ├── applyGlobalOption.js
    │   │   │   │   │   ├── cast$expr.js
    │   │   │   │   │   ├── castFilterPath.js
    │   │   │   │   │   ├── castUpdate.js
    │   │   │   │   │   ├── getEmbeddedDiscriminatorPath.js
    │   │   │   │   │   ├── handleImmutable.js
    │   │   │   │   │   ├── handleReadPreferenceAliases.js
    │   │   │   │   │   ├── hasDollarKeys.js
    │   │   │   │   │   ├── isOperator.js
    │   │   │   │   │   ├── sanitizeFilter.js
    │   │   │   │   │   ├── sanitizeProjection.js
    │   │   │   │   │   ├── selectPopulatedFields.js
    │   │   │   │   │   ├── trusted.js
    │   │   │   │   │   └── validOps.js
    │   │   │   │   ├── schema
    │   │   │   │   │   ├── addAutoId.js
    │   │   │   │   │   ├── applyBuiltinPlugins.js
    │   │   │   │   │   ├── applyPlugins.js
    │   │   │   │   │   ├── applyReadConcern.js
    │   │   │   │   │   ├── applyWriteConcern.js
    │   │   │   │   │   ├── cleanPositionalOperators.js
    │   │   │   │   │   ├── getIndexes.js
    │   │   │   │   │   ├── getKeysInSchemaOrder.js
    │   │   │   │   │   ├── getPath.js
    │   │   │   │   │   ├── getSubdocumentStrictValue.js
    │   │   │   │   │   ├── handleIdOption.js
    │   │   │   │   │   ├── handleTimestampOption.js
    │   │   │   │   │   ├── idGetter.js
    │   │   │   │   │   └── merge.js
    │   │   │   │   ├── schematype
    │   │   │   │   │   └── handleImmutable.js
    │   │   │   │   ├── setDefaultsOnInsert.js
    │   │   │   │   ├── specialProperties.js
    │   │   │   │   ├── symbols.js
    │   │   │   │   ├── timers.js
    │   │   │   │   ├── timestamps
    │   │   │   │   │   ├── setDocumentTimestamps.js
    │   │   │   │   │   └── setupTimestamps.js
    │   │   │   │   ├── topology
    │   │   │   │   │   ├── allServersUnknown.js
    │   │   │   │   │   ├── isAtlas.js
    │   │   │   │   │   └── isSSLError.js
    │   │   │   │   ├── update
    │   │   │   │   │   ├── applyTimestampsToChildren.js
    │   │   │   │   │   ├── applyTimestampsToUpdate.js
    │   │   │   │   │   ├── castArrayFilters.js
    │   │   │   │   │   ├── decorateUpdateWithVersionKey.js
    │   │   │   │   │   ├── modifiedPaths.js
    │   │   │   │   │   ├── moveImmutableProperties.js
    │   │   │   │   │   ├── removeUnusedArrayFilters.js
    │   │   │   │   │   └── updatedPathsByArrayFilter.js
    │   │   │   │   └── updateValidators.js
    │   │   │   ├── index.js
    │   │   │   ├── internal.js
    │   │   │   ├── model.js
    │   │   │   ├── modifiedPathsSnapshot.js
    │   │   │   ├── mongoose.js
    │   │   │   ├── options.js
    │   │   │   ├── options
    │   │   │   │   ├── populateOptions.js
    │   │   │   │   ├── propertyOptions.js
    │   │   │   │   ├── saveOptions.js
    │   │   │   │   ├── schemaArrayOptions.js
    │   │   │   │   ├── schemaBufferOptions.js
    │   │   │   │   ├── schemaDateOptions.js
    │   │   │   │   ├── schemaDocumentArrayOptions.js
    │   │   │   │   ├── schemaMapOptions.js
    │   │   │   │   ├── schemaNumberOptions.js
    │   │   │   │   ├── schemaObjectIdOptions.js
    │   │   │   │   ├── schemaStringOptions.js
    │   │   │   │   ├── schemaSubdocumentOptions.js
    │   │   │   │   ├── schemaTypeOptions.js
    │   │   │   │   ├── schemaUnionOptions.js
    │   │   │   │   └── virtualOptions.js
    │   │   │   ├── plugins
    │   │   │   │   ├── index.js
    │   │   │   │   ├── saveSubdocs.js
    │   │   │   │   ├── sharding.js
    │   │   │   │   ├── trackTransaction.js
    │   │   │   │   └── validateBeforeSave.js
    │   │   │   ├── query.js
    │   │   │   ├── queryHelpers.js
    │   │   │   ├── schema.js
    │   │   │   ├── schema
    │   │   │   │   ├── array.js
    │   │   │   │   ├── bigint.js
    │   │   │   │   ├── boolean.js
    │   │   │   │   ├── buffer.js
    │   │   │   │   ├── date.js
    │   │   │   │   ├── decimal128.js
    │   │   │   │   ├── documentArray.js
    │   │   │   │   ├── documentArrayElement.js
    │   │   │   │   ├── double.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── int32.js
    │   │   │   │   ├── map.js
    │   │   │   │   ├── mixed.js
    │   │   │   │   ├── number.js
    │   │   │   │   ├── objectId.js
    │   │   │   │   ├── operators
    │   │   │   │   │   ├── bitwise.js
    │   │   │   │   │   ├── exists.js
    │   │   │   │   │   ├── geospatial.js
    │   │   │   │   │   ├── helpers.js
    │   │   │   │   │   ├── text.js
    │   │   │   │   │   └── type.js
    │   │   │   │   ├── string.js
    │   │   │   │   ├── subdocument.js
    │   │   │   │   ├── symbols.js
    │   │   │   │   ├── union.js
    │   │   │   │   └── uuid.js
    │   │   │   ├── schemaType.js
    │   │   │   ├── stateMachine.js
    │   │   │   ├── types
    │   │   │   │   ├── array
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── isMongooseArray.js
    │   │   │   │   │   └── methods
    │   │   │   │   │   │   └── index.js
    │   │   │   │   ├── arraySubdocument.js
    │   │   │   │   ├── buffer.js
    │   │   │   │   ├── decimal128.js
    │   │   │   │   ├── documentArray
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── isMongooseDocumentArray.js
    │   │   │   │   │   └── methods
    │   │   │   │   │   │   └── index.js
    │   │   │   │   ├── double.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── map.js
    │   │   │   │   ├── objectid.js
    │   │   │   │   ├── subdocument.js
    │   │   │   │   └── uuid.js
    │   │   │   ├── utils.js
    │   │   │   ├── validOptions.js
    │   │   │   └── virtualType.js
    │   │   ├── package.json
    │   │   └── types
    │   │   │   ├── aggregate.d.ts
    │   │   │   ├── augmentations.d.ts
    │   │   │   ├── callback.d.ts
    │   │   │   ├── collection.d.ts
    │   │   │   ├── connection.d.ts
    │   │   │   ├── cursor.d.ts
    │   │   │   ├── document.d.ts
    │   │   │   ├── error.d.ts
    │   │   │   ├── expressions.d.ts
    │   │   │   ├── helpers.d.ts
    │   │   │   ├── index.d.ts
    │   │   │   ├── indexes.d.ts
    │   │   │   ├── inferrawdoctype.d.ts
    │   │   │   ├── inferschematype.d.ts
    │   │   │   ├── middlewares.d.ts
    │   │   │   ├── models.d.ts
    │   │   │   ├── mongooseoptions.d.ts
    │   │   │   ├── pipelinestage.d.ts
    │   │   │   ├── populate.d.ts
    │   │   │   ├── query.d.ts
    │   │   │   ├── schemaoptions.d.ts
    │   │   │   ├── schematypes.d.ts
    │   │   │   ├── session.d.ts
    │   │   │   ├── types.d.ts
    │   │   │   ├── utility.d.ts
    │   │   │   ├── validation.d.ts
    │   │   │   └── virtuals.d.ts
    │   ├── mpath
    │   │   ├── .travis.yml
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── index.js
    │   │   │   └── stringToParts.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   ├── .eslintrc.yml
    │   │   │   ├── index.js
    │   │   │   └── stringToParts.js
    │   ├── mquery
    │   │   ├── .github
    │   │   │   ├── ISSUE_TEMPLATE.md
    │   │   │   └── PULL_REQUEST_TEMPLATE.md
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── lib
    │   │   │   ├── collection
    │   │   │   │   ├── collection.js
    │   │   │   │   ├── index.js
    │   │   │   │   └── node.js
    │   │   │   ├── env.js
    │   │   │   ├── mquery.js
    │   │   │   ├── permissions.js
    │   │   │   └── utils.js
    │   │   └── package.json
    │   ├── ms
    │   │   ├── index.js
    │   │   ├── license.md
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── negotiator
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── charset.js
    │   │   │   ├── encoding.js
    │   │   │   ├── language.js
    │   │   │   └── mediaType.js
    │   │   └── package.json
    │   ├── node-cache
    │   │   ├── .nvmrc
    │   │   ├── .nycrc.yaml
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── _src
    │   │   │   └── test
    │   │   │   │   └── typedefinition_test.ts
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   └── node_cache.js
    │   │   ├── package.json
    │   │   └── tsconfig.json
    │   ├── nodemailer
    │   │   ├── .gitattributes
    │   │   ├── .ncurc.js
    │   │   ├── .prettierrc.js
    │   │   ├── CHANGELOG.md
    │   │   ├── CODE_OF_CONDUCT.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.txt
    │   │   ├── lib
    │   │   │   ├── addressparser
    │   │   │   │   └── index.js
    │   │   │   ├── base64
    │   │   │   │   └── index.js
    │   │   │   ├── dkim
    │   │   │   │   ├── index.js
    │   │   │   │   ├── message-parser.js
    │   │   │   │   ├── relaxed-body.js
    │   │   │   │   └── sign.js
    │   │   │   ├── fetch
    │   │   │   │   ├── cookies.js
    │   │   │   │   └── index.js
    │   │   │   ├── json-transport
    │   │   │   │   └── index.js
    │   │   │   ├── mail-composer
    │   │   │   │   └── index.js
    │   │   │   ├── mailer
    │   │   │   │   ├── index.js
    │   │   │   │   └── mail-message.js
    │   │   │   ├── mime-funcs
    │   │   │   │   ├── index.js
    │   │   │   │   └── mime-types.js
    │   │   │   ├── mime-node
    │   │   │   │   ├── index.js
    │   │   │   │   ├── last-newline.js
    │   │   │   │   ├── le-unix.js
    │   │   │   │   └── le-windows.js
    │   │   │   ├── nodemailer.js
    │   │   │   ├── punycode
    │   │   │   │   └── index.js
    │   │   │   ├── qp
    │   │   │   │   └── index.js
    │   │   │   ├── sendmail-transport
    │   │   │   │   └── index.js
    │   │   │   ├── ses-transport
    │   │   │   │   └── index.js
    │   │   │   ├── shared
    │   │   │   │   └── index.js
    │   │   │   ├── smtp-connection
    │   │   │   │   ├── data-stream.js
    │   │   │   │   ├── http-proxy-client.js
    │   │   │   │   └── index.js
    │   │   │   ├── smtp-pool
    │   │   │   │   ├── index.js
    │   │   │   │   └── pool-resource.js
    │   │   │   ├── smtp-transport
    │   │   │   │   └── index.js
    │   │   │   ├── stream-transport
    │   │   │   │   └── index.js
    │   │   │   ├── well-known
    │   │   │   │   ├── index.js
    │   │   │   │   └── services.json
    │   │   │   └── xoauth2
    │   │   │   │   └── index.js
    │   │   └── package.json
    │   ├── nodemon
    │   │   ├── .prettierrc.json
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── bin
    │   │   │   ├── nodemon.js
    │   │   │   └── windows-kill.exe
    │   │   ├── doc
    │   │   │   └── cli
    │   │   │   │   ├── authors.txt
    │   │   │   │   ├── config.txt
    │   │   │   │   ├── help.txt
    │   │   │   │   ├── logo.txt
    │   │   │   │   ├── options.txt
    │   │   │   │   ├── topics.txt
    │   │   │   │   ├── usage.txt
    │   │   │   │   └── whoami.txt
    │   │   ├── index.d.ts
    │   │   ├── jsconfig.json
    │   │   ├── lib
    │   │   │   ├── cli
    │   │   │   │   ├── index.js
    │   │   │   │   └── parse.js
    │   │   │   ├── config
    │   │   │   │   ├── command.js
    │   │   │   │   ├── defaults.js
    │   │   │   │   ├── exec.js
    │   │   │   │   ├── index.js
    │   │   │   │   └── load.js
    │   │   │   ├── help
    │   │   │   │   └── index.js
    │   │   │   ├── index.js
    │   │   │   ├── monitor
    │   │   │   │   ├── index.js
    │   │   │   │   ├── match.js
    │   │   │   │   ├── run.js
    │   │   │   │   ├── signals.js
    │   │   │   │   └── watch.js
    │   │   │   ├── nodemon.js
    │   │   │   ├── rules
    │   │   │   │   ├── add.js
    │   │   │   │   ├── index.js
    │   │   │   │   └── parse.js
    │   │   │   ├── spawn.js
    │   │   │   ├── utils
    │   │   │   │   ├── bus.js
    │   │   │   │   ├── clone.js
    │   │   │   │   ├── colour.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── log.js
    │   │   │   │   └── merge.js
    │   │   │   └── version.js
    │   │   └── package.json
    │   ├── normalize-path
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── object-assign
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── object-inspect
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── example
    │   │   │   ├── all.js
    │   │   │   ├── circular.js
    │   │   │   ├── fn.js
    │   │   │   └── inspect.js
    │   │   ├── index.js
    │   │   ├── package-support.json
    │   │   ├── package.json
    │   │   ├── readme.markdown
    │   │   ├── test-core-js.js
    │   │   ├── test
    │   │   │   ├── bigint.js
    │   │   │   ├── browser
    │   │   │   │   └── dom.js
    │   │   │   ├── circular.js
    │   │   │   ├── deep.js
    │   │   │   ├── element.js
    │   │   │   ├── err.js
    │   │   │   ├── fakes.js
    │   │   │   ├── fn.js
    │   │   │   ├── global.js
    │   │   │   ├── has.js
    │   │   │   ├── holes.js
    │   │   │   ├── indent-option.js
    │   │   │   ├── inspect.js
    │   │   │   ├── lowbyte.js
    │   │   │   ├── number.js
    │   │   │   ├── quoteStyle.js
    │   │   │   ├── toStringTag.js
    │   │   │   ├── undef.js
    │   │   │   └── values.js
    │   │   └── util.inspect.js
    │   ├── on-finished
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── once
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── once.js
    │   │   └── package.json
    │   ├── parseurl
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── passport-local-mongoose
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── authenticate.js
    │   │   │   ├── errors.js
    │   │   │   └── pbkdf2.js
    │   │   ├── package.json
    │   │   └── tsconfig.json
    │   ├── passport-local
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── lib
    │   │   │   ├── index.js
    │   │   │   ├── strategy.js
    │   │   │   └── utils.js
    │   │   └── package.json
    │   ├── passport-strategy
    │   │   ├── .jshintrc
    │   │   ├── .travis.yml
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── lib
    │   │   │   ├── index.js
    │   │   │   └── strategy.js
    │   │   └── package.json
    │   ├── path-to-regexp
    │   │   ├── LICENSE
    │   │   ├── Readme.md
    │   │   ├── dist
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── index.js.map
    │   │   └── package.json
    │   ├── picomatch
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── constants.js
    │   │   │   ├── parse.js
    │   │   │   ├── picomatch.js
    │   │   │   ├── scan.js
    │   │   │   └── utils.js
    │   │   └── package.json
    │   ├── proxy-addr
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── proxy-from-env
    │   │   ├── .eslintrc
    │   │   ├── .travis.yml
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test.js
    │   ├── pstree.remy
    │   │   ├── .travis.yml
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── lib
    │   │   │   ├── index.js
    │   │   │   ├── tree.js
    │   │   │   └── utils.js
    │   │   ├── package.json
    │   │   └── tests
    │   │   │   ├── fixtures
    │   │   │       ├── index.js
    │   │   │       ├── out1
    │   │   │       └── out2
    │   │   │   └── index.test.js
    │   ├── punycode
    │   │   ├── LICENSE-MIT.txt
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   ├── punycode.es6.js
    │   │   └── punycode.js
    │   ├── qs
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── dist
    │   │   │   └── qs.js
    │   │   ├── lib
    │   │   │   ├── formats.js
    │   │   │   ├── index.js
    │   │   │   ├── parse.js
    │   │   │   ├── stringify.js
    │   │   │   └── utils.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   ├── empty-keys-cases.js
    │   │   │   ├── parse.js
    │   │   │   ├── stringify.js
    │   │   │   └── utils.js
    │   ├── range-parser
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── raw-body
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── node_modules
    │   │   │   └── iconv-lite
    │   │   │   │   ├── Changelog.md
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── README.md
    │   │   │   │   ├── encodings
    │   │   │   │       ├── dbcs-codec.js
    │   │   │   │       ├── dbcs-data.js
    │   │   │   │       ├── index.js
    │   │   │   │       ├── internal.js
    │   │   │   │       ├── sbcs-codec.js
    │   │   │   │       ├── sbcs-data-generated.js
    │   │   │   │       ├── sbcs-data.js
    │   │   │   │       ├── tables
    │   │   │   │       │   ├── big5-added.json
    │   │   │   │       │   ├── cp936.json
    │   │   │   │       │   ├── cp949.json
    │   │   │   │       │   ├── cp950.json
    │   │   │   │       │   ├── eucjp.json
    │   │   │   │       │   ├── gb18030-ranges.json
    │   │   │   │       │   ├── gbk-added.json
    │   │   │   │       │   └── shiftjis.json
    │   │   │   │       ├── utf16.js
    │   │   │   │       ├── utf32.js
    │   │   │   │       └── utf7.js
    │   │   │   │   ├── lib
    │   │   │   │       ├── bom-handling.js
    │   │   │   │       ├── helpers
    │   │   │   │       │   └── merge-exports.js
    │   │   │   │       ├── index.d.ts
    │   │   │   │       ├── index.js
    │   │   │   │       └── streams.js
    │   │   │   │   └── package.json
    │   │   └── package.json
    │   ├── readdirp
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── router
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── layer.js
    │   │   │   └── route.js
    │   │   └── package.json
    │   ├── safe-buffer
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── safer-buffer
    │   │   ├── LICENSE
    │   │   ├── Porting-Buffer.md
    │   │   ├── Readme.md
    │   │   ├── dangerous.js
    │   │   ├── package.json
    │   │   ├── safer.js
    │   │   └── tests.js
    │   ├── scmp
    │   │   ├── .travis.yml
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── benchmark
    │   │   │   ├── benchmark.js
    │   │   │   └── crypto-check.js
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   └── scmpCompare.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   └── test.js
    │   ├── semver
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── bin
    │   │   │   └── semver.js
    │   │   ├── classes
    │   │   │   ├── comparator.js
    │   │   │   ├── index.js
    │   │   │   ├── range.js
    │   │   │   └── semver.js
    │   │   ├── functions
    │   │   │   ├── clean.js
    │   │   │   ├── cmp.js
    │   │   │   ├── coerce.js
    │   │   │   ├── compare-build.js
    │   │   │   ├── compare-loose.js
    │   │   │   ├── compare.js
    │   │   │   ├── diff.js
    │   │   │   ├── eq.js
    │   │   │   ├── gt.js
    │   │   │   ├── gte.js
    │   │   │   ├── inc.js
    │   │   │   ├── lt.js
    │   │   │   ├── lte.js
    │   │   │   ├── major.js
    │   │   │   ├── minor.js
    │   │   │   ├── neq.js
    │   │   │   ├── parse.js
    │   │   │   ├── patch.js
    │   │   │   ├── prerelease.js
    │   │   │   ├── rcompare.js
    │   │   │   ├── rsort.js
    │   │   │   ├── satisfies.js
    │   │   │   ├── sort.js
    │   │   │   └── valid.js
    │   │   ├── index.js
    │   │   ├── internal
    │   │   │   ├── constants.js
    │   │   │   ├── debug.js
    │   │   │   ├── identifiers.js
    │   │   │   ├── lrucache.js
    │   │   │   ├── parse-options.js
    │   │   │   └── re.js
    │   │   ├── package.json
    │   │   ├── preload.js
    │   │   ├── range.bnf
    │   │   └── ranges
    │   │   │   ├── gtr.js
    │   │   │   ├── intersects.js
    │   │   │   ├── ltr.js
    │   │   │   ├── max-satisfying.js
    │   │   │   ├── min-satisfying.js
    │   │   │   ├── min-version.js
    │   │   │   ├── outside.js
    │   │   │   ├── simplify.js
    │   │   │   ├── subset.js
    │   │   │   ├── to-comparators.js
    │   │   │   └── valid.js
    │   ├── send
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── serve-static
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── setprototypeof
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test
    │   │   │   └── index.js
    │   ├── side-channel-list
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── list.d.ts
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── side-channel-map
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── side-channel-weakmap
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── side-channel
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── .github
    │   │   │   └── FUNDING.yml
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── sift
    │   │   ├── MIT-LICENSE.txt
    │   │   ├── README.md
    │   │   ├── es
    │   │   │   ├── index.js
    │   │   │   └── index.js.map
    │   │   ├── es5m
    │   │   │   ├── index.js
    │   │   │   └── index.js.map
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── core.d.ts
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── index.js.map
    │   │   │   ├── operations.d.ts
    │   │   │   └── utils.d.ts
    │   │   ├── package.json
    │   │   ├── sift.csp.min.js
    │   │   ├── sift.csp.min.js.map
    │   │   ├── sift.min.js
    │   │   ├── sift.min.js.map
    │   │   └── src
    │   │   │   ├── core.ts
    │   │   │   ├── index.ts
    │   │   │   ├── operations.ts
    │   │   │   └── utils.ts
    │   ├── simple-update-notifier
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── build
    │   │   │   ├── index.d.ts
    │   │   │   └── index.js
    │   │   ├── package.json
    │   │   └── src
    │   │   │   ├── borderedText.ts
    │   │   │   ├── cache.spec.ts
    │   │   │   ├── cache.ts
    │   │   │   ├── getDistVersion.spec.ts
    │   │   │   ├── getDistVersion.ts
    │   │   │   ├── hasNewVersion.spec.ts
    │   │   │   ├── hasNewVersion.ts
    │   │   │   ├── index.spec.ts
    │   │   │   ├── index.ts
    │   │   │   ├── isNpmOrYarn.ts
    │   │   │   └── types.ts
    │   ├── sparse-bitfield
    │   │   ├── .npmignore
    │   │   ├── .travis.yml
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── test.js
    │   ├── statuses
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── codes.json
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── supports-color
    │   │   ├── browser.js
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── to-regex-range
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── toidentifier
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── touch
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── bin
    │   │   │   └── nodetouch.js
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── tr46
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── mappingTable.json
    │   │   │   ├── regexes.js
    │   │   │   └── statusMapping.js
    │   │   └── package.json
    │   ├── type-is
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── undefsafe
    │   │   ├── .github
    │   │   │   └── workflows
    │   │   │   │   └── release.yml
    │   │   ├── .jscsrc
    │   │   ├── .jshintrc
    │   │   ├── .travis.yml
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── example.js
    │   │   ├── lib
    │   │   │   └── undefsafe.js
    │   │   └── package.json
    │   ├── unpipe
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── vary
    │   │   ├── HISTORY.md
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── package.json
    │   ├── webidl-conversions
    │   │   ├── LICENSE.md
    │   │   ├── README.md
    │   │   ├── lib
    │   │   │   └── index.js
    │   │   └── package.json
    │   ├── whatwg-url
    │   │   ├── LICENSE.txt
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── Function.js
    │   │   │   ├── URL-impl.js
    │   │   │   ├── URL.js
    │   │   │   ├── URLSearchParams-impl.js
    │   │   │   ├── URLSearchParams.js
    │   │   │   ├── VoidFunction.js
    │   │   │   ├── encoding.js
    │   │   │   ├── infra.js
    │   │   │   ├── percent-encoding.js
    │   │   │   ├── url-state-machine.js
    │   │   │   ├── urlencoded.js
    │   │   │   └── utils.js
    │   │   ├── package.json
    │   │   └── webidl2js-wrapper.js
    │   └── wrappy
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   └── wrappy.js
    ├── package-lock.json
    ├── package.json
    └── schemas
    │   ├── HoldingSchema.js
    │   ├── OrderSchema.js
    │   └── PositionSchema.js
├── dashboard
    ├── .env
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── Roboto - Google Fonts.html
    │   ├── index.html
    │   ├── logo.png
    │   └── robots.txt
    └── src
    │   ├── components
    │       ├── Apps.css
    │       ├── Apps.js
    │       ├── BuyActionWindow.css
    │       ├── BuyActionWindow.js
    │       ├── ChartRef.js
    │       ├── Dashboard.js
    │       ├── DoughnutChart.js
    │       ├── Funds.js
    │       ├── GeneralContext.js
    │       ├── Holdings.js
    │       ├── Home.js
    │       ├── LiveData.css
    │       ├── LiveData.js
    │       ├── Menu.js
    │       ├── Orders.css
    │       ├── Orders.js
    │       ├── Positions.js
    │       ├── Summary.js
    │       ├── TopBar.js
    │       ├── VerticalGraph.js
    │       ├── WatchList.js
    │       └── style.css
    │   ├── data
    │       └── data.js
    │   ├── index.css
    │   └── index.js
└── frontend
    ├── .env
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
        ├── index.html
        ├── manifest.json
        ├── media
        │   ├── images
        │   │   └── media
        │   │   │   ├── VaibhavKanthiya.jpg
        │   │   │   ├── VanshikaMudgal.jpg
        │   │   │   ├── VanshitaPanchal.jpg
        │   │   │   ├── YashSingh.jpg
        │   │   │   ├── appstoreBadge.svg
        │   │   │   ├── coin.png
        │   │   │   ├── console.png
        │   │   │   ├── dittoLogo.png
        │   │   │   ├── ecosystem.png
        │   │   │   ├── education.svg
        │   │   │   ├── goldenpiLogo.png
        │   │   │   ├── googlePlayBadge.svg
        │   │   │   ├── homeHero.png
        │   │   │   ├── intradayTrades.svg
        │   │   │   ├── kite.png
        │   │   │   ├── kiteconnect.png
        │   │   │   ├── landing.png
        │   │   │   ├── largestBroker.svg
        │   │   │   ├── nithinKamath.jpg
        │   │   │   ├── press-logos.png
        │   │   │   ├── pricing0.svg
        │   │   │   ├── pricingEquity.svg
        │   │   │   ├── pricingMF.svg
        │   │   │   ├── sensibullLogo.svg
        │   │   │   ├── signup.png
        │   │   │   ├── smallcaseLogo.png
        │   │   │   ├── streakLogo.png
        │   │   │   ├── tijori.svg
        │   │   │   ├── twenty.svg
        │   │   │   ├── varsity.png
        │   │   │   ├── zero1.svg
        │   │   │   ├── zero2.svg
        │   │   │   └── zerodhaFundhouse.png
        │   └── logo.png
        └── robots.txt
    └── src
        ├── index.css
        ├── index.js
        └── landing_page
            ├── Footer.js
            ├── Navbar.js
            ├── NotFound.js
            ├── OpenAccount.js
            ├── about
                ├── AboutPage.js
                ├── Hero.js
                └── Team.js
            ├── apps
                ├── Accounts.js
                ├── Blogs.js
                ├── Challenges.js
                ├── Charges.js
                ├── Documentation.js
                ├── Funds.js
                ├── Hold.js
                ├── Intraday.js
                ├── Ipo.js
                ├── LongTerm.js
                ├── Machine.js
                ├── Pages.js
                ├── Positions.js
                ├── Prices.js
                ├── ReduceML.js
                ├── SaveTime.js
                ├── Stocks.js
                ├── Trade.js
                └── WhyWe.js
            ├── home
                ├── Awards.js
                ├── Education.js
                ├── Hero.js
                ├── HomePage.js
                ├── Pricing.js
                └── Stats.js
            ├── pricing
                ├── Brokerage.js
                ├── Hero.js
                └── PricingPage.js
            ├── products
                ├── Hero.js
                ├── LeftSection.js
                ├── ProductPage.js
                ├── RightSection.js
                └── Universe.js
            ├── signup
                ├── Signup.css
                └── Signup.js
            ├── support
                ├── CreateTicket.js
                ├── Hero.js
                └── SupportPage.js
            └── test
                └── Hero.test.js


/.gitignore:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/.gitignore


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/README.md


--------------------------------------------------------------------------------
/Server/Controllers/AuthController.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/Controllers/AuthController.js


--------------------------------------------------------------------------------
/Server/Middlewares/AuthMiddle.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/Middlewares/AuthMiddle.js


--------------------------------------------------------------------------------
/Server/Models/UserModel.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/Models/UserModel.js


--------------------------------------------------------------------------------
/Server/Routes/AuthRoute.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/Routes/AuthRoute.js


--------------------------------------------------------------------------------
/Server/appindex.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/appindex.js


--------------------------------------------------------------------------------
/Server/node_modules/.bin/bcrypt:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/.bin/bcrypt


--------------------------------------------------------------------------------
/Server/node_modules/.bin/bcrypt.cmd:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/.bin/bcrypt.cmd


--------------------------------------------------------------------------------
/Server/node_modules/.bin/bcrypt.ps1:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/.bin/bcrypt.ps1


--------------------------------------------------------------------------------
/Server/node_modules/.bin/semver:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/.bin/semver


--------------------------------------------------------------------------------
/Server/node_modules/.bin/semver.cmd:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/.bin/semver.cmd


--------------------------------------------------------------------------------
/Server/node_modules/.bin/semver.ps1:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/.bin/semver.ps1


--------------------------------------------------------------------------------
/Server/node_modules/.package-lock.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/.package-lock.json


--------------------------------------------------------------------------------
/Server/node_modules/@mongodb-js/saslprep/dist/generate-code-points.d.ts:
--------------------------------------------------------------------------------
1 | export {};
2 | //# sourceMappingURL=generate-code-points.d.ts.map


--------------------------------------------------------------------------------
/Server/node_modules/accepts/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/accepts/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/accepts/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/accepts/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/accepts/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/accepts/README.md


--------------------------------------------------------------------------------
/Server/node_modules/accepts/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/accepts/index.js


--------------------------------------------------------------------------------
/Server/node_modules/accepts/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/accepts/package.json


--------------------------------------------------------------------------------
/Server/node_modules/bcryptjs/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bcryptjs/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/bcryptjs/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bcryptjs/README.md


--------------------------------------------------------------------------------
/Server/node_modules/bcryptjs/bin/bcrypt:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bcryptjs/bin/bcrypt


--------------------------------------------------------------------------------
/Server/node_modules/bcryptjs/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bcryptjs/index.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/bcryptjs/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bcryptjs/index.js


--------------------------------------------------------------------------------
/Server/node_modules/bcryptjs/types.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bcryptjs/types.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/bcryptjs/umd/package.json:
--------------------------------------------------------------------------------
1 | {
2 |   "type": "commonjs"
3 | }
4 | 


--------------------------------------------------------------------------------
/Server/node_modules/body-parser/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/body-parser/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/body-parser/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/body-parser/index.js


--------------------------------------------------------------------------------
/Server/node_modules/bson/LICENSE.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/LICENSE.md


--------------------------------------------------------------------------------
/Server/node_modules/bson/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/README.md


--------------------------------------------------------------------------------
/Server/node_modules/bson/bson.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/bson.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/etc/prepare.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/etc/prepare.js


--------------------------------------------------------------------------------
/Server/node_modules/bson/lib/bson.cjs:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/lib/bson.cjs


--------------------------------------------------------------------------------
/Server/node_modules/bson/lib/bson.mjs:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/lib/bson.mjs


--------------------------------------------------------------------------------
/Server/node_modules/bson/lib/bson.rn.cjs:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/lib/bson.rn.cjs


--------------------------------------------------------------------------------
/Server/node_modules/bson/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/package.json


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/binary.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/binary.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/bson.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/bson.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/code.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/code.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/db_ref.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/db_ref.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/double.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/double.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/error.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/error.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/index.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/index.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/int_32.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/int_32.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/long.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/long.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/max_key.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/max_key.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/min_key.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/min_key.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/objectid.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/objectid.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/regexp.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/regexp.ts


--------------------------------------------------------------------------------
/Server/node_modules/bson/src/symbol.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bson/src/symbol.ts


--------------------------------------------------------------------------------
/Server/node_modules/buffer-equal-constant-time/.npmignore:
--------------------------------------------------------------------------------
1 | .*.sw[mnop]
2 | node_modules/
3 | 


--------------------------------------------------------------------------------
/Server/node_modules/bytes/History.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bytes/History.md


--------------------------------------------------------------------------------
/Server/node_modules/bytes/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bytes/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/bytes/Readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bytes/Readme.md


--------------------------------------------------------------------------------
/Server/node_modules/bytes/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bytes/index.js


--------------------------------------------------------------------------------
/Server/node_modules/bytes/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/bytes/package.json


--------------------------------------------------------------------------------
/Server/node_modules/call-bind-apply-helpers/actualApply.d.ts:
--------------------------------------------------------------------------------
1 | export = Reflect.apply;


--------------------------------------------------------------------------------
/Server/node_modules/call-bind-apply-helpers/functionApply.d.ts:
--------------------------------------------------------------------------------
1 | export = Function.prototype.apply;


--------------------------------------------------------------------------------
/Server/node_modules/call-bind-apply-helpers/functionCall.d.ts:
--------------------------------------------------------------------------------
1 | export = Function.prototype.call;


--------------------------------------------------------------------------------
/Server/node_modules/call-bound/.eslintrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/call-bound/.eslintrc


--------------------------------------------------------------------------------
/Server/node_modules/call-bound/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/call-bound/.nycrc


--------------------------------------------------------------------------------
/Server/node_modules/call-bound/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/call-bound/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/call-bound/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/call-bound/README.md


--------------------------------------------------------------------------------
/Server/node_modules/call-bound/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/call-bound/index.js


--------------------------------------------------------------------------------
/Server/node_modules/content-type/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/content-type/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/cookie-parser/node_modules/cookie-signature/.npmignore:
--------------------------------------------------------------------------------
1 | support
2 | test
3 | examples
4 | *.sock
5 | 


--------------------------------------------------------------------------------
/Server/node_modules/cookie/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cookie/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/cookie/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cookie/README.md


--------------------------------------------------------------------------------
/Server/node_modules/cookie/SECURITY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cookie/SECURITY.md


--------------------------------------------------------------------------------
/Server/node_modules/cookie/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cookie/index.js


--------------------------------------------------------------------------------
/Server/node_modules/cookie/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cookie/package.json


--------------------------------------------------------------------------------
/Server/node_modules/cors/CONTRIBUTING.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cors/CONTRIBUTING.md


--------------------------------------------------------------------------------
/Server/node_modules/cors/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cors/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/cors/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cors/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/cors/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cors/README.md


--------------------------------------------------------------------------------
/Server/node_modules/cors/lib/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cors/lib/index.js


--------------------------------------------------------------------------------
/Server/node_modules/cors/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/cors/package.json


--------------------------------------------------------------------------------
/Server/node_modules/debug/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/debug/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/debug/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/debug/README.md


--------------------------------------------------------------------------------
/Server/node_modules/debug/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/debug/package.json


--------------------------------------------------------------------------------
/Server/node_modules/debug/src/browser.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/debug/src/browser.js


--------------------------------------------------------------------------------
/Server/node_modules/debug/src/common.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/debug/src/common.js


--------------------------------------------------------------------------------
/Server/node_modules/debug/src/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/debug/src/index.js


--------------------------------------------------------------------------------
/Server/node_modules/debug/src/node.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/debug/src/node.js


--------------------------------------------------------------------------------
/Server/node_modules/depd/History.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/depd/History.md


--------------------------------------------------------------------------------
/Server/node_modules/depd/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/depd/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/depd/Readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/depd/Readme.md


--------------------------------------------------------------------------------
/Server/node_modules/depd/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/depd/index.js


--------------------------------------------------------------------------------
/Server/node_modules/depd/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/depd/package.json


--------------------------------------------------------------------------------
/Server/node_modules/dunder-proto/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/dunder-proto/.nycrc


--------------------------------------------------------------------------------
/Server/node_modules/dunder-proto/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/dunder-proto/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/dunder-proto/get.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/dunder-proto/get.js


--------------------------------------------------------------------------------
/Server/node_modules/dunder-proto/set.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/dunder-proto/set.js


--------------------------------------------------------------------------------
/Server/node_modules/ecdsa-sig-formatter/CODEOWNERS:
--------------------------------------------------------------------------------
1 | * @omsmith
2 | 


--------------------------------------------------------------------------------
/Server/node_modules/ee-first/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/ee-first/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/ee-first/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/ee-first/README.md


--------------------------------------------------------------------------------
/Server/node_modules/ee-first/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/ee-first/index.js


--------------------------------------------------------------------------------
/Server/node_modules/encodeurl/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/encodeurl/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/encodeurl/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/encodeurl/README.md


--------------------------------------------------------------------------------
/Server/node_modules/encodeurl/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/encodeurl/index.js


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/.eslintrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/.eslintrc


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/README.md


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/eval.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/eval.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/eval.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/eval.js


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/index.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/index.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('.')} */
4 | module.exports = Error;
5 | 


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/range.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/range.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/range.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/range.js


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/ref.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/ref.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/ref.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./ref')} */
4 | module.exports = ReferenceError;
5 | 


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/syntax.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/syntax.js


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/type.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/type.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/type.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/type.js


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/uri.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/es-errors/uri.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/es-errors/uri.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./uri')} */
4 | module.exports = URIError;
5 | 


--------------------------------------------------------------------------------
/Server/node_modules/es-object-atoms/index.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('.')} */
4 | module.exports = Object;
5 | 


--------------------------------------------------------------------------------
/Server/node_modules/escape-html/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/escape-html/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/escape-html/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/escape-html/index.js


--------------------------------------------------------------------------------
/Server/node_modules/etag/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/etag/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/etag/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/etag/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/etag/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/etag/README.md


--------------------------------------------------------------------------------
/Server/node_modules/etag/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/etag/index.js


--------------------------------------------------------------------------------
/Server/node_modules/etag/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/etag/package.json


--------------------------------------------------------------------------------
/Server/node_modules/express/History.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/express/History.md


--------------------------------------------------------------------------------
/Server/node_modules/express/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/express/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/express/Readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/express/Readme.md


--------------------------------------------------------------------------------
/Server/node_modules/express/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/express/index.js


--------------------------------------------------------------------------------
/Server/node_modules/express/lib/utils.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/express/lib/utils.js


--------------------------------------------------------------------------------
/Server/node_modules/express/lib/view.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/express/lib/view.js


--------------------------------------------------------------------------------
/Server/node_modules/express/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/express/package.json


--------------------------------------------------------------------------------
/Server/node_modules/finalhandler/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/finalhandler/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/forwarded/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/forwarded/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/forwarded/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/forwarded/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/forwarded/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/forwarded/README.md


--------------------------------------------------------------------------------
/Server/node_modules/forwarded/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/forwarded/index.js


--------------------------------------------------------------------------------
/Server/node_modules/fresh/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/fresh/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/fresh/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/fresh/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/fresh/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/fresh/README.md


--------------------------------------------------------------------------------
/Server/node_modules/fresh/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/fresh/index.js


--------------------------------------------------------------------------------
/Server/node_modules/fresh/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/fresh/package.json


--------------------------------------------------------------------------------
/Server/node_modules/function-bind/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/function-bind/.nycrc


--------------------------------------------------------------------------------
/Server/node_modules/get-intrinsic/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/get-intrinsic/.nycrc


--------------------------------------------------------------------------------
/Server/node_modules/get-proto/.eslintrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/get-proto/.eslintrc


--------------------------------------------------------------------------------
/Server/node_modules/get-proto/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/get-proto/.nycrc


--------------------------------------------------------------------------------
/Server/node_modules/get-proto/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/get-proto/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/get-proto/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/get-proto/README.md


--------------------------------------------------------------------------------
/Server/node_modules/get-proto/Reflect.getPrototypeOf.d.ts:
--------------------------------------------------------------------------------
1 | declare const x: typeof Reflect.getPrototypeOf | null;
2 | 
3 | export = x;


--------------------------------------------------------------------------------
/Server/node_modules/get-proto/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/get-proto/index.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/get-proto/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/get-proto/index.js


--------------------------------------------------------------------------------
/Server/node_modules/gopd/.eslintrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/gopd/.eslintrc


--------------------------------------------------------------------------------
/Server/node_modules/gopd/CHANGELOG.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/gopd/CHANGELOG.md


--------------------------------------------------------------------------------
/Server/node_modules/gopd/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/gopd/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/gopd/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/gopd/README.md


--------------------------------------------------------------------------------
/Server/node_modules/gopd/gOPD.d.ts:
--------------------------------------------------------------------------------
1 | export = Object.getOwnPropertyDescriptor;
2 | 


--------------------------------------------------------------------------------
/Server/node_modules/gopd/gOPD.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/gopd/gOPD.js


--------------------------------------------------------------------------------
/Server/node_modules/gopd/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/gopd/index.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/gopd/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/gopd/index.js


--------------------------------------------------------------------------------
/Server/node_modules/gopd/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/gopd/package.json


--------------------------------------------------------------------------------
/Server/node_modules/gopd/test/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/gopd/test/index.js


--------------------------------------------------------------------------------
/Server/node_modules/gopd/tsconfig.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/gopd/tsconfig.json


--------------------------------------------------------------------------------
/Server/node_modules/has-symbols/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/has-symbols/.nycrc


--------------------------------------------------------------------------------
/Server/node_modules/has-symbols/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/has-symbols/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/has-symbols/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/has-symbols/index.js


--------------------------------------------------------------------------------
/Server/node_modules/has-symbols/shams.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/has-symbols/shams.js


--------------------------------------------------------------------------------
/Server/node_modules/hasown/.eslintrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/hasown/.eslintrc


--------------------------------------------------------------------------------
/Server/node_modules/hasown/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/hasown/.nycrc


--------------------------------------------------------------------------------
/Server/node_modules/hasown/CHANGELOG.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/hasown/CHANGELOG.md


--------------------------------------------------------------------------------
/Server/node_modules/hasown/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/hasown/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/hasown/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/hasown/README.md


--------------------------------------------------------------------------------
/Server/node_modules/hasown/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/hasown/index.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/hasown/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/hasown/index.js


--------------------------------------------------------------------------------
/Server/node_modules/hasown/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/hasown/package.json


--------------------------------------------------------------------------------
/Server/node_modules/hasown/tsconfig.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/hasown/tsconfig.json


--------------------------------------------------------------------------------
/Server/node_modules/http-errors/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/http-errors/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/http-errors/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/http-errors/index.js


--------------------------------------------------------------------------------
/Server/node_modules/iconv-lite/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/iconv-lite/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/iconv-lite/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/iconv-lite/README.md


--------------------------------------------------------------------------------
/Server/node_modules/inherits/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/inherits/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/inherits/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/inherits/README.md


--------------------------------------------------------------------------------
/Server/node_modules/inherits/inherits.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/inherits/inherits.js


--------------------------------------------------------------------------------
/Server/node_modules/ipaddr.js/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/ipaddr.js/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/ipaddr.js/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/ipaddr.js/README.md


--------------------------------------------------------------------------------
/Server/node_modules/is-promise/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/is-promise/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/is-promise/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/is-promise/index.js


--------------------------------------------------------------------------------
/Server/node_modules/is-promise/index.mjs:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/is-promise/index.mjs


--------------------------------------------------------------------------------
/Server/node_modules/is-promise/readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/is-promise/readme.md


--------------------------------------------------------------------------------
/Server/node_modules/jsonwebtoken/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jsonwebtoken/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/jsonwebtoken/sign.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jsonwebtoken/sign.js


--------------------------------------------------------------------------------
/Server/node_modules/jwa/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jwa/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/jwa/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jwa/README.md


--------------------------------------------------------------------------------
/Server/node_modules/jwa/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jwa/index.js


--------------------------------------------------------------------------------
/Server/node_modules/jwa/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jwa/package.json


--------------------------------------------------------------------------------
/Server/node_modules/jws/CHANGELOG.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jws/CHANGELOG.md


--------------------------------------------------------------------------------
/Server/node_modules/jws/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jws/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/jws/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jws/index.js


--------------------------------------------------------------------------------
/Server/node_modules/jws/lib/tostring.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jws/lib/tostring.js


--------------------------------------------------------------------------------
/Server/node_modules/jws/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jws/package.json


--------------------------------------------------------------------------------
/Server/node_modules/jws/readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/jws/readme.md


--------------------------------------------------------------------------------
/Server/node_modules/kareem/CHANGELOG.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/kareem/CHANGELOG.md


--------------------------------------------------------------------------------
/Server/node_modules/kareem/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/kareem/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/kareem/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/kareem/README.md


--------------------------------------------------------------------------------
/Server/node_modules/kareem/SECURITY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/kareem/SECURITY.md


--------------------------------------------------------------------------------
/Server/node_modules/kareem/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/kareem/index.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/kareem/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/kareem/index.js


--------------------------------------------------------------------------------
/Server/node_modules/kareem/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/kareem/package.json


--------------------------------------------------------------------------------
/Server/node_modules/lodash.once/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/lodash.once/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/lodash.once/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/lodash.once/index.js


--------------------------------------------------------------------------------
/Server/node_modules/math-intrinsics/abs.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.abs;


--------------------------------------------------------------------------------
/Server/node_modules/math-intrinsics/floor.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.floor;


--------------------------------------------------------------------------------
/Server/node_modules/math-intrinsics/isNaN.d.ts:
--------------------------------------------------------------------------------
1 | export = Number.isNaN;


--------------------------------------------------------------------------------
/Server/node_modules/math-intrinsics/max.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.max;


--------------------------------------------------------------------------------
/Server/node_modules/math-intrinsics/min.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.min;


--------------------------------------------------------------------------------
/Server/node_modules/math-intrinsics/pow.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.pow;


--------------------------------------------------------------------------------
/Server/node_modules/math-intrinsics/round.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.round;


--------------------------------------------------------------------------------
/Server/node_modules/math-intrinsics/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 | 	"extends": "@ljharb/tsconfig",
3 | }
4 | 


--------------------------------------------------------------------------------
/Server/node_modules/media-typer/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/media-typer/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/media-typer/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/media-typer/index.js


--------------------------------------------------------------------------------
/Server/node_modules/memory-pager/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/memory-pager/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/memory-pager/test.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/memory-pager/test.js


--------------------------------------------------------------------------------
/Server/node_modules/mime-db/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mime-db/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/mime-db/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mime-db/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/mime-db/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mime-db/README.md


--------------------------------------------------------------------------------
/Server/node_modules/mime-db/db.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mime-db/db.json


--------------------------------------------------------------------------------
/Server/node_modules/mime-db/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mime-db/index.js


--------------------------------------------------------------------------------
/Server/node_modules/mime-db/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mime-db/package.json


--------------------------------------------------------------------------------
/Server/node_modules/mime-types/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mime-types/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/mime-types/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mime-types/README.md


--------------------------------------------------------------------------------
/Server/node_modules/mime-types/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mime-types/index.js


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/LICENSE.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/LICENSE.md


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/README.md


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/lib/admin.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/lib/admin.js


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/lib/beta.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/lib/beta.js


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/lib/bson.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/lib/bson.js


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/lib/db.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/lib/db.js


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/lib/deps.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/lib/deps.js


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/lib/error.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/lib/error.js


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/lib/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/lib/index.js


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/lib/sort.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/lib/sort.js


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/lib/utils.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/lib/utils.js


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/mongodb.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/mongodb.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/package.json


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/src/admin.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/src/admin.ts


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/src/beta.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/src/beta.ts


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/src/bson.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/src/bson.ts


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/src/db.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/src/db.ts


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/src/deps.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/src/deps.ts


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/src/error.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/src/error.ts


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/src/index.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/src/index.ts


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/src/sort.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/src/sort.ts


--------------------------------------------------------------------------------
/Server/node_modules/mongodb/src/utils.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongodb/src/utils.ts


--------------------------------------------------------------------------------
/Server/node_modules/mongoose/LICENSE.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongoose/LICENSE.md


--------------------------------------------------------------------------------
/Server/node_modules/mongoose/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongoose/README.md


--------------------------------------------------------------------------------
/Server/node_modules/mongoose/SECURITY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongoose/SECURITY.md


--------------------------------------------------------------------------------
/Server/node_modules/mongoose/browser.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongoose/browser.js


--------------------------------------------------------------------------------
/Server/node_modules/mongoose/deno.lock:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongoose/deno.lock


--------------------------------------------------------------------------------
/Server/node_modules/mongoose/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongoose/index.js


--------------------------------------------------------------------------------
/Server/node_modules/mongoose/lib/cast.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mongoose/lib/cast.js


--------------------------------------------------------------------------------
/Server/node_modules/mongoose/lib/drivers/SPEC.md:
--------------------------------------------------------------------------------
1 | 
2 | # Driver Spec
3 | 
4 | TODO
5 | 


--------------------------------------------------------------------------------
/Server/node_modules/mpath/.travis.yml:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mpath/.travis.yml


--------------------------------------------------------------------------------
/Server/node_modules/mpath/History.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mpath/History.md


--------------------------------------------------------------------------------
/Server/node_modules/mpath/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mpath/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/mpath/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mpath/README.md


--------------------------------------------------------------------------------
/Server/node_modules/mpath/SECURITY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mpath/SECURITY.md


--------------------------------------------------------------------------------
/Server/node_modules/mpath/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mpath/index.js


--------------------------------------------------------------------------------
/Server/node_modules/mpath/lib/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mpath/lib/index.js


--------------------------------------------------------------------------------
/Server/node_modules/mpath/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mpath/package.json


--------------------------------------------------------------------------------
/Server/node_modules/mpath/test/.eslintrc.yml:
--------------------------------------------------------------------------------
1 | env:
2 |   mocha: true
3 | rules:
4 |   no-unused-vars: off


--------------------------------------------------------------------------------
/Server/node_modules/mpath/test/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mpath/test/index.js


--------------------------------------------------------------------------------
/Server/node_modules/mquery/History.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mquery/History.md


--------------------------------------------------------------------------------
/Server/node_modules/mquery/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mquery/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/mquery/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mquery/README.md


--------------------------------------------------------------------------------
/Server/node_modules/mquery/SECURITY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mquery/SECURITY.md


--------------------------------------------------------------------------------
/Server/node_modules/mquery/lib/env.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mquery/lib/env.js


--------------------------------------------------------------------------------
/Server/node_modules/mquery/lib/mquery.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mquery/lib/mquery.js


--------------------------------------------------------------------------------
/Server/node_modules/mquery/lib/utils.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mquery/lib/utils.js


--------------------------------------------------------------------------------
/Server/node_modules/mquery/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/mquery/package.json


--------------------------------------------------------------------------------
/Server/node_modules/ms/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/ms/index.js


--------------------------------------------------------------------------------
/Server/node_modules/ms/license.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/ms/license.md


--------------------------------------------------------------------------------
/Server/node_modules/ms/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/ms/package.json


--------------------------------------------------------------------------------
/Server/node_modules/ms/readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/ms/readme.md


--------------------------------------------------------------------------------
/Server/node_modules/negotiator/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/negotiator/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/negotiator/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/negotiator/README.md


--------------------------------------------------------------------------------
/Server/node_modules/negotiator/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/negotiator/index.js


--------------------------------------------------------------------------------
/Server/node_modules/object-inspect/util.inspect.js:
--------------------------------------------------------------------------------
1 | module.exports = require('util').inspect;
2 | 


--------------------------------------------------------------------------------
/Server/node_modules/on-finished/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/on-finished/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/on-finished/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/on-finished/index.js


--------------------------------------------------------------------------------
/Server/node_modules/once/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/once/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/once/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/once/README.md


--------------------------------------------------------------------------------
/Server/node_modules/once/once.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/once/once.js


--------------------------------------------------------------------------------
/Server/node_modules/once/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/once/package.json


--------------------------------------------------------------------------------
/Server/node_modules/parseurl/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/parseurl/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/parseurl/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/parseurl/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/parseurl/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/parseurl/README.md


--------------------------------------------------------------------------------
/Server/node_modules/parseurl/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/parseurl/index.js


--------------------------------------------------------------------------------
/Server/node_modules/proxy-addr/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/proxy-addr/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/proxy-addr/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/proxy-addr/README.md


--------------------------------------------------------------------------------
/Server/node_modules/proxy-addr/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/proxy-addr/index.js


--------------------------------------------------------------------------------
/Server/node_modules/punycode/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/punycode/README.md


--------------------------------------------------------------------------------
/Server/node_modules/punycode/punycode.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/punycode/punycode.js


--------------------------------------------------------------------------------
/Server/node_modules/qs/.editorconfig:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/.editorconfig


--------------------------------------------------------------------------------
/Server/node_modules/qs/.eslintrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/.eslintrc


--------------------------------------------------------------------------------
/Server/node_modules/qs/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/.nycrc


--------------------------------------------------------------------------------
/Server/node_modules/qs/CHANGELOG.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/CHANGELOG.md


--------------------------------------------------------------------------------
/Server/node_modules/qs/LICENSE.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/LICENSE.md


--------------------------------------------------------------------------------
/Server/node_modules/qs/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/README.md


--------------------------------------------------------------------------------
/Server/node_modules/qs/dist/qs.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/dist/qs.js


--------------------------------------------------------------------------------
/Server/node_modules/qs/lib/formats.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/lib/formats.js


--------------------------------------------------------------------------------
/Server/node_modules/qs/lib/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/lib/index.js


--------------------------------------------------------------------------------
/Server/node_modules/qs/lib/parse.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/lib/parse.js


--------------------------------------------------------------------------------
/Server/node_modules/qs/lib/stringify.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/lib/stringify.js


--------------------------------------------------------------------------------
/Server/node_modules/qs/lib/utils.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/lib/utils.js


--------------------------------------------------------------------------------
/Server/node_modules/qs/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/package.json


--------------------------------------------------------------------------------
/Server/node_modules/qs/test/parse.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/test/parse.js


--------------------------------------------------------------------------------
/Server/node_modules/qs/test/stringify.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/test/stringify.js


--------------------------------------------------------------------------------
/Server/node_modules/qs/test/utils.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/qs/test/utils.js


--------------------------------------------------------------------------------
/Server/node_modules/range-parser/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/range-parser/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/raw-body/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/raw-body/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/raw-body/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/raw-body/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/raw-body/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/raw-body/README.md


--------------------------------------------------------------------------------
/Server/node_modules/raw-body/SECURITY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/raw-body/SECURITY.md


--------------------------------------------------------------------------------
/Server/node_modules/raw-body/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/raw-body/index.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/raw-body/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/raw-body/index.js


--------------------------------------------------------------------------------
/Server/node_modules/router/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/router/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/router/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/router/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/router/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/router/README.md


--------------------------------------------------------------------------------
/Server/node_modules/router/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/router/index.js


--------------------------------------------------------------------------------
/Server/node_modules/router/lib/layer.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/router/lib/layer.js


--------------------------------------------------------------------------------
/Server/node_modules/router/lib/route.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/router/lib/route.js


--------------------------------------------------------------------------------
/Server/node_modules/router/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/router/package.json


--------------------------------------------------------------------------------
/Server/node_modules/safe-buffer/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/safe-buffer/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/safe-buffer/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/safe-buffer/index.js


--------------------------------------------------------------------------------
/Server/node_modules/safer-buffer/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/safer-buffer/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/semver/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/semver/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/semver/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/semver/README.md


--------------------------------------------------------------------------------
/Server/node_modules/semver/bin/semver.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/semver/bin/semver.js


--------------------------------------------------------------------------------
/Server/node_modules/semver/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/semver/index.js


--------------------------------------------------------------------------------
/Server/node_modules/semver/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/semver/package.json


--------------------------------------------------------------------------------
/Server/node_modules/semver/preload.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/semver/preload.js


--------------------------------------------------------------------------------
/Server/node_modules/semver/range.bnf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/semver/range.bnf


--------------------------------------------------------------------------------
/Server/node_modules/semver/ranges/gtr.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/semver/ranges/gtr.js


--------------------------------------------------------------------------------
/Server/node_modules/semver/ranges/ltr.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/semver/ranges/ltr.js


--------------------------------------------------------------------------------
/Server/node_modules/send/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/send/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/send/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/send/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/send/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/send/README.md


--------------------------------------------------------------------------------
/Server/node_modules/send/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/send/index.js


--------------------------------------------------------------------------------
/Server/node_modules/send/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/send/package.json


--------------------------------------------------------------------------------
/Server/node_modules/serve-static/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/serve-static/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/side-channel/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/side-channel/.nycrc


--------------------------------------------------------------------------------
/Server/node_modules/side-channel/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/side-channel/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/sift/MIT-LICENSE.txt:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/MIT-LICENSE.txt


--------------------------------------------------------------------------------
/Server/node_modules/sift/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/README.md


--------------------------------------------------------------------------------
/Server/node_modules/sift/es/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/es/index.js


--------------------------------------------------------------------------------
/Server/node_modules/sift/es/index.js.map:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/es/index.js.map


--------------------------------------------------------------------------------
/Server/node_modules/sift/es5m/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/es5m/index.js


--------------------------------------------------------------------------------
/Server/node_modules/sift/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/index.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/sift/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/index.js


--------------------------------------------------------------------------------
/Server/node_modules/sift/lib/core.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/lib/core.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/sift/lib/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/lib/index.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/sift/lib/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/lib/index.js


--------------------------------------------------------------------------------
/Server/node_modules/sift/lib/utils.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/lib/utils.d.ts


--------------------------------------------------------------------------------
/Server/node_modules/sift/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/package.json


--------------------------------------------------------------------------------
/Server/node_modules/sift/sift.csp.min.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/sift.csp.min.js


--------------------------------------------------------------------------------
/Server/node_modules/sift/sift.min.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/sift.min.js


--------------------------------------------------------------------------------
/Server/node_modules/sift/sift.min.js.map:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/sift.min.js.map


--------------------------------------------------------------------------------
/Server/node_modules/sift/src/core.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/src/core.ts


--------------------------------------------------------------------------------
/Server/node_modules/sift/src/index.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/src/index.ts


--------------------------------------------------------------------------------
/Server/node_modules/sift/src/utils.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/sift/src/utils.ts


--------------------------------------------------------------------------------
/Server/node_modules/sparse-bitfield/.npmignore:
--------------------------------------------------------------------------------
1 | node_modules
2 | 


--------------------------------------------------------------------------------
/Server/node_modules/statuses/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/statuses/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/statuses/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/statuses/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/statuses/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/statuses/README.md


--------------------------------------------------------------------------------
/Server/node_modules/statuses/codes.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/statuses/codes.json


--------------------------------------------------------------------------------
/Server/node_modules/statuses/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/statuses/index.js


--------------------------------------------------------------------------------
/Server/node_modules/toidentifier/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/toidentifier/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/tr46/LICENSE.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/tr46/LICENSE.md


--------------------------------------------------------------------------------
/Server/node_modules/tr46/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/tr46/README.md


--------------------------------------------------------------------------------
/Server/node_modules/tr46/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/tr46/index.js


--------------------------------------------------------------------------------
/Server/node_modules/tr46/lib/regexes.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/tr46/lib/regexes.js


--------------------------------------------------------------------------------
/Server/node_modules/tr46/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/tr46/package.json


--------------------------------------------------------------------------------
/Server/node_modules/type-is/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/type-is/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/type-is/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/type-is/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/type-is/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/type-is/README.md


--------------------------------------------------------------------------------
/Server/node_modules/type-is/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/type-is/index.js


--------------------------------------------------------------------------------
/Server/node_modules/type-is/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/type-is/package.json


--------------------------------------------------------------------------------
/Server/node_modules/unpipe/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/unpipe/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/unpipe/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/unpipe/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/unpipe/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/unpipe/README.md


--------------------------------------------------------------------------------
/Server/node_modules/unpipe/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/unpipe/index.js


--------------------------------------------------------------------------------
/Server/node_modules/unpipe/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/unpipe/package.json


--------------------------------------------------------------------------------
/Server/node_modules/vary/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/vary/HISTORY.md


--------------------------------------------------------------------------------
/Server/node_modules/vary/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/vary/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/vary/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/vary/README.md


--------------------------------------------------------------------------------
/Server/node_modules/vary/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/vary/index.js


--------------------------------------------------------------------------------
/Server/node_modules/vary/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/vary/package.json


--------------------------------------------------------------------------------
/Server/node_modules/whatwg-url/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/whatwg-url/README.md


--------------------------------------------------------------------------------
/Server/node_modules/whatwg-url/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/whatwg-url/index.js


--------------------------------------------------------------------------------
/Server/node_modules/wrappy/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/wrappy/LICENSE


--------------------------------------------------------------------------------
/Server/node_modules/wrappy/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/wrappy/README.md


--------------------------------------------------------------------------------
/Server/node_modules/wrappy/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/wrappy/package.json


--------------------------------------------------------------------------------
/Server/node_modules/wrappy/wrappy.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/node_modules/wrappy/wrappy.js


--------------------------------------------------------------------------------
/Server/package-lock.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/package-lock.json


--------------------------------------------------------------------------------
/Server/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/package.json


--------------------------------------------------------------------------------
/Server/util/SecretToken.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/Server/util/SecretToken.js


--------------------------------------------------------------------------------
/backend/.env:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/.env


--------------------------------------------------------------------------------
/backend/UserData.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/UserData.js


--------------------------------------------------------------------------------
/backend/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/index.js


--------------------------------------------------------------------------------
/backend/model/HoldingModel.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/model/HoldingModel.js


--------------------------------------------------------------------------------
/backend/model/OrderModel.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/model/OrderModel.js


--------------------------------------------------------------------------------
/backend/model/PositionModel.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/model/PositionModel.js


--------------------------------------------------------------------------------
/backend/node_modules/.bin/bcrypt:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/bcrypt


--------------------------------------------------------------------------------
/backend/node_modules/.bin/bcrypt.cmd:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/bcrypt.cmd


--------------------------------------------------------------------------------
/backend/node_modules/.bin/bcrypt.ps1:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/bcrypt.ps1


--------------------------------------------------------------------------------
/backend/node_modules/.bin/nodemon:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/nodemon


--------------------------------------------------------------------------------
/backend/node_modules/.bin/nodemon.cmd:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/nodemon.cmd


--------------------------------------------------------------------------------
/backend/node_modules/.bin/nodemon.ps1:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/nodemon.ps1


--------------------------------------------------------------------------------
/backend/node_modules/.bin/nodetouch:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/nodetouch


--------------------------------------------------------------------------------
/backend/node_modules/.bin/nodetouch.cmd:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/nodetouch.cmd


--------------------------------------------------------------------------------
/backend/node_modules/.bin/nodetouch.ps1:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/nodetouch.ps1


--------------------------------------------------------------------------------
/backend/node_modules/.bin/semver:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/semver


--------------------------------------------------------------------------------
/backend/node_modules/.bin/semver.cmd:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/semver.cmd


--------------------------------------------------------------------------------
/backend/node_modules/.bin/semver.ps1:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.bin/semver.ps1


--------------------------------------------------------------------------------
/backend/node_modules/.package-lock.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/.package-lock.json


--------------------------------------------------------------------------------
/backend/node_modules/@mongodb-js/saslprep/dist/generate-code-points.d.ts:
--------------------------------------------------------------------------------
1 | export {};
2 | //# sourceMappingURL=generate-code-points.d.ts.map


--------------------------------------------------------------------------------
/backend/node_modules/accepts/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/accepts/HISTORY.md


--------------------------------------------------------------------------------
/backend/node_modules/accepts/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/accepts/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/accepts/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/accepts/README.md


--------------------------------------------------------------------------------
/backend/node_modules/accepts/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/accepts/index.js


--------------------------------------------------------------------------------
/backend/node_modules/anymatch/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/anymatch/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/anymatch/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/anymatch/README.md


--------------------------------------------------------------------------------
/backend/node_modules/anymatch/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/anymatch/index.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/anymatch/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/anymatch/index.js


--------------------------------------------------------------------------------
/backend/node_modules/asynckit/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/asynckit/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/asynckit/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/asynckit/README.md


--------------------------------------------------------------------------------
/backend/node_modules/asynckit/bench.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/asynckit/bench.js


--------------------------------------------------------------------------------
/backend/node_modules/asynckit/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/asynckit/index.js


--------------------------------------------------------------------------------
/backend/node_modules/asynckit/serial.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/asynckit/serial.js


--------------------------------------------------------------------------------
/backend/node_modules/asynckit/stream.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/asynckit/stream.js


--------------------------------------------------------------------------------
/backend/node_modules/axios/CHANGELOG.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/axios/CHANGELOG.md


--------------------------------------------------------------------------------
/backend/node_modules/axios/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/axios/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/axios/MIGRATION_GUIDE.md:
--------------------------------------------------------------------------------
1 | # Migration Guide
2 | 
3 | ## 0.x.x -> 1.1.0
4 | 


--------------------------------------------------------------------------------
/backend/node_modules/axios/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/axios/README.md


--------------------------------------------------------------------------------
/backend/node_modules/axios/dist/axios.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/axios/dist/axios.js


--------------------------------------------------------------------------------
/backend/node_modules/axios/index.d.cts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/axios/index.d.cts


--------------------------------------------------------------------------------
/backend/node_modules/axios/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/axios/index.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/axios/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/axios/index.js


--------------------------------------------------------------------------------
/backend/node_modules/axios/lib/axios.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/axios/lib/axios.js


--------------------------------------------------------------------------------
/backend/node_modules/axios/lib/env/data.js:
--------------------------------------------------------------------------------
1 | export const VERSION = "1.12.2";


--------------------------------------------------------------------------------
/backend/node_modules/axios/lib/helpers/null.js:
--------------------------------------------------------------------------------
1 | // eslint-disable-next-line strict
2 | export default null;
3 | 


--------------------------------------------------------------------------------
/backend/node_modules/axios/lib/utils.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/axios/lib/utils.js


--------------------------------------------------------------------------------
/backend/node_modules/axios/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/axios/package.json


--------------------------------------------------------------------------------
/backend/node_modules/balanced-match/.github/FUNDING.yml:
--------------------------------------------------------------------------------
1 | tidelift: "npm/balanced-match"
2 | patreon: juliangruber
3 | 


--------------------------------------------------------------------------------
/backend/node_modules/bcryptjs/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bcryptjs/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/bcryptjs/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bcryptjs/README.md


--------------------------------------------------------------------------------
/backend/node_modules/bcryptjs/bin/bcrypt:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bcryptjs/bin/bcrypt


--------------------------------------------------------------------------------
/backend/node_modules/bcryptjs/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bcryptjs/index.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/bcryptjs/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bcryptjs/index.js


--------------------------------------------------------------------------------
/backend/node_modules/bcryptjs/types.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bcryptjs/types.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/bcryptjs/umd/package.json:
--------------------------------------------------------------------------------
1 | {
2 |   "type": "commonjs"
3 | }
4 | 


--------------------------------------------------------------------------------
/backend/node_modules/binary-extensions/index.js:
--------------------------------------------------------------------------------
1 | module.exports = require('./binary-extensions.json');
2 | 


--------------------------------------------------------------------------------
/backend/node_modules/body-parser/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/body-parser/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/braces/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/braces/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/braces/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/braces/README.md


--------------------------------------------------------------------------------
/backend/node_modules/braces/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/braces/index.js


--------------------------------------------------------------------------------
/backend/node_modules/braces/lib/parse.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/braces/lib/parse.js


--------------------------------------------------------------------------------
/backend/node_modules/braces/lib/utils.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/braces/lib/utils.js


--------------------------------------------------------------------------------
/backend/node_modules/braces/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/braces/package.json


--------------------------------------------------------------------------------
/backend/node_modules/bson/LICENSE.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/LICENSE.md


--------------------------------------------------------------------------------
/backend/node_modules/bson/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/README.md


--------------------------------------------------------------------------------
/backend/node_modules/bson/bson.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/bson.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/etc/prepare.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/etc/prepare.js


--------------------------------------------------------------------------------
/backend/node_modules/bson/lib/bson.cjs:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/lib/bson.cjs


--------------------------------------------------------------------------------
/backend/node_modules/bson/lib/bson.mjs:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/lib/bson.mjs


--------------------------------------------------------------------------------
/backend/node_modules/bson/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/package.json


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/binary.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/binary.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/bson.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/bson.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/code.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/code.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/db_ref.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/db_ref.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/double.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/double.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/error.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/error.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/index.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/index.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/int_32.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/int_32.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/long.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/long.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/max_key.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/max_key.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/min_key.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/min_key.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/regexp.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/regexp.ts


--------------------------------------------------------------------------------
/backend/node_modules/bson/src/symbol.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bson/src/symbol.ts


--------------------------------------------------------------------------------
/backend/node_modules/buffer-equal-constant-time/.npmignore:
--------------------------------------------------------------------------------
1 | .*.sw[mnop]
2 | node_modules/
3 | 


--------------------------------------------------------------------------------
/backend/node_modules/bytes/History.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bytes/History.md


--------------------------------------------------------------------------------
/backend/node_modules/bytes/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bytes/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/bytes/Readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bytes/Readme.md


--------------------------------------------------------------------------------
/backend/node_modules/bytes/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bytes/index.js


--------------------------------------------------------------------------------
/backend/node_modules/bytes/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/bytes/package.json


--------------------------------------------------------------------------------
/backend/node_modules/call-bind-apply-helpers/actualApply.d.ts:
--------------------------------------------------------------------------------
1 | export = Reflect.apply;


--------------------------------------------------------------------------------
/backend/node_modules/call-bind-apply-helpers/functionApply.d.ts:
--------------------------------------------------------------------------------
1 | export = Function.prototype.apply;


--------------------------------------------------------------------------------
/backend/node_modules/call-bind-apply-helpers/functionCall.d.ts:
--------------------------------------------------------------------------------
1 | export = Function.prototype.call;


--------------------------------------------------------------------------------
/backend/node_modules/call-bound/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/call-bound/.nycrc


--------------------------------------------------------------------------------
/backend/node_modules/call-bound/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/call-bound/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/call-bound/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/call-bound/index.js


--------------------------------------------------------------------------------
/backend/node_modules/chokidar/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/chokidar/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/chokidar/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/chokidar/README.md


--------------------------------------------------------------------------------
/backend/node_modules/chokidar/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/chokidar/index.js


--------------------------------------------------------------------------------
/backend/node_modules/clone/.npmignore:
--------------------------------------------------------------------------------
1 | /node_modules/
2 | /test.js
3 | /.travis.yml
4 | *.html
5 | 


--------------------------------------------------------------------------------
/backend/node_modules/clone/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/clone/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/clone/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/clone/README.md


--------------------------------------------------------------------------------
/backend/node_modules/clone/clone.iml:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/clone/clone.iml


--------------------------------------------------------------------------------
/backend/node_modules/clone/clone.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/clone/clone.js


--------------------------------------------------------------------------------
/backend/node_modules/clone/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/clone/package.json


--------------------------------------------------------------------------------
/backend/node_modules/concat-map/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/concat-map/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/concat-map/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/concat-map/index.js


--------------------------------------------------------------------------------
/backend/node_modules/cookie-parser/node_modules/cookie-signature/.npmignore:
--------------------------------------------------------------------------------
1 | support
2 | test
3 | examples
4 | *.sock
5 | 


--------------------------------------------------------------------------------
/backend/node_modules/cookie/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/cookie/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/cookie/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/cookie/README.md


--------------------------------------------------------------------------------
/backend/node_modules/cookie/SECURITY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/cookie/SECURITY.md


--------------------------------------------------------------------------------
/backend/node_modules/cookie/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/cookie/index.js


--------------------------------------------------------------------------------
/backend/node_modules/cookie/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/cookie/package.json


--------------------------------------------------------------------------------
/backend/node_modules/cors/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/cors/HISTORY.md


--------------------------------------------------------------------------------
/backend/node_modules/cors/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/cors/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/cors/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/cors/README.md


--------------------------------------------------------------------------------
/backend/node_modules/cors/lib/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/cors/lib/index.js


--------------------------------------------------------------------------------
/backend/node_modules/cors/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/cors/package.json


--------------------------------------------------------------------------------
/backend/node_modules/debug/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/debug/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/debug/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/debug/README.md


--------------------------------------------------------------------------------
/backend/node_modules/debug/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/debug/package.json


--------------------------------------------------------------------------------
/backend/node_modules/debug/src/common.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/debug/src/common.js


--------------------------------------------------------------------------------
/backend/node_modules/debug/src/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/debug/src/index.js


--------------------------------------------------------------------------------
/backend/node_modules/debug/src/node.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/debug/src/node.js


--------------------------------------------------------------------------------
/backend/node_modules/delayed-stream/.npmignore:
--------------------------------------------------------------------------------
1 | test
2 | 


--------------------------------------------------------------------------------
/backend/node_modules/depd/History.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/depd/History.md


--------------------------------------------------------------------------------
/backend/node_modules/depd/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/depd/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/depd/Readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/depd/Readme.md


--------------------------------------------------------------------------------
/backend/node_modules/depd/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/depd/index.js


--------------------------------------------------------------------------------
/backend/node_modules/depd/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/depd/package.json


--------------------------------------------------------------------------------
/backend/node_modules/dotenv/CHANGELOG.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dotenv/CHANGELOG.md


--------------------------------------------------------------------------------
/backend/node_modules/dotenv/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dotenv/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/dotenv/README-es.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dotenv/README-es.md


--------------------------------------------------------------------------------
/backend/node_modules/dotenv/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dotenv/README.md


--------------------------------------------------------------------------------
/backend/node_modules/dotenv/SECURITY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dotenv/SECURITY.md


--------------------------------------------------------------------------------
/backend/node_modules/dotenv/config.d.ts:
--------------------------------------------------------------------------------
1 | export {};
2 | 


--------------------------------------------------------------------------------
/backend/node_modules/dotenv/config.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dotenv/config.js


--------------------------------------------------------------------------------
/backend/node_modules/dotenv/lib/main.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dotenv/lib/main.js


--------------------------------------------------------------------------------
/backend/node_modules/dotenv/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dotenv/package.json


--------------------------------------------------------------------------------
/backend/node_modules/dunder-proto/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dunder-proto/.nycrc


--------------------------------------------------------------------------------
/backend/node_modules/dunder-proto/get.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dunder-proto/get.js


--------------------------------------------------------------------------------
/backend/node_modules/dunder-proto/set.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/dunder-proto/set.js


--------------------------------------------------------------------------------
/backend/node_modules/ecdsa-sig-formatter/CODEOWNERS:
--------------------------------------------------------------------------------
1 | * @omsmith
2 | 


--------------------------------------------------------------------------------
/backend/node_modules/ee-first/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/ee-first/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/ee-first/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/ee-first/README.md


--------------------------------------------------------------------------------
/backend/node_modules/ee-first/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/ee-first/index.js


--------------------------------------------------------------------------------
/backend/node_modules/encodeurl/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/encodeurl/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/encodeurl/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/encodeurl/README.md


--------------------------------------------------------------------------------
/backend/node_modules/encodeurl/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/encodeurl/index.js


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/.eslintrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/.eslintrc


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/README.md


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/eval.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/eval.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/eval.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/eval.js


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/index.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('.')} */
4 | module.exports = Error;
5 | 


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/range.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/range.js


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/ref.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/ref.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/ref.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./ref')} */
4 | module.exports = ReferenceError;
5 | 


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/syntax.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/syntax.js


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/type.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/type.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/type.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/type.js


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/uri.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/es-errors/uri.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/es-errors/uri.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./uri')} */
4 | module.exports = URIError;
5 | 


--------------------------------------------------------------------------------
/backend/node_modules/es-object-atoms/index.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('.')} */
4 | module.exports = Object;
5 | 


--------------------------------------------------------------------------------
/backend/node_modules/escape-html/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/escape-html/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/etag/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/etag/HISTORY.md


--------------------------------------------------------------------------------
/backend/node_modules/etag/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/etag/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/etag/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/etag/README.md


--------------------------------------------------------------------------------
/backend/node_modules/etag/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/etag/index.js


--------------------------------------------------------------------------------
/backend/node_modules/etag/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/etag/package.json


--------------------------------------------------------------------------------
/backend/node_modules/express/History.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/express/History.md


--------------------------------------------------------------------------------
/backend/node_modules/express/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/express/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/express/Readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/express/Readme.md


--------------------------------------------------------------------------------
/backend/node_modules/express/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/express/index.js


--------------------------------------------------------------------------------
/backend/node_modules/express/lib/view.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/express/lib/view.js


--------------------------------------------------------------------------------
/backend/node_modules/fill-range/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/fill-range/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/fill-range/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/fill-range/index.js


--------------------------------------------------------------------------------
/backend/node_modules/follow-redirects/http.js:
--------------------------------------------------------------------------------
1 | module.exports = require("./").http;
2 | 


--------------------------------------------------------------------------------
/backend/node_modules/follow-redirects/https.js:
--------------------------------------------------------------------------------
1 | module.exports = require("./").https;
2 | 


--------------------------------------------------------------------------------
/backend/node_modules/form-data/License:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/form-data/License


--------------------------------------------------------------------------------
/backend/node_modules/form-data/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/form-data/README.md


--------------------------------------------------------------------------------
/backend/node_modules/forwarded/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/forwarded/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/forwarded/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/forwarded/README.md


--------------------------------------------------------------------------------
/backend/node_modules/fresh/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/fresh/HISTORY.md


--------------------------------------------------------------------------------
/backend/node_modules/fresh/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/fresh/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/fresh/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/fresh/README.md


--------------------------------------------------------------------------------
/backend/node_modules/fresh/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/fresh/index.js


--------------------------------------------------------------------------------
/backend/node_modules/get-proto/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/get-proto/.nycrc


--------------------------------------------------------------------------------
/backend/node_modules/get-proto/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/get-proto/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/get-proto/Reflect.getPrototypeOf.d.ts:
--------------------------------------------------------------------------------
1 | declare const x: typeof Reflect.getPrototypeOf | null;
2 | 
3 | export = x;


--------------------------------------------------------------------------------
/backend/node_modules/gopd/.eslintrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/gopd/.eslintrc


--------------------------------------------------------------------------------
/backend/node_modules/gopd/CHANGELOG.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/gopd/CHANGELOG.md


--------------------------------------------------------------------------------
/backend/node_modules/gopd/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/gopd/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/gopd/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/gopd/README.md


--------------------------------------------------------------------------------
/backend/node_modules/gopd/gOPD.d.ts:
--------------------------------------------------------------------------------
1 | export = Object.getOwnPropertyDescriptor;
2 | 


--------------------------------------------------------------------------------
/backend/node_modules/gopd/gOPD.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/gopd/gOPD.js


--------------------------------------------------------------------------------
/backend/node_modules/gopd/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/gopd/index.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/gopd/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/gopd/index.js


--------------------------------------------------------------------------------
/backend/node_modules/gopd/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/gopd/package.json


--------------------------------------------------------------------------------
/backend/node_modules/has-flag/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/has-flag/index.js


--------------------------------------------------------------------------------
/backend/node_modules/has-flag/license:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/has-flag/license


--------------------------------------------------------------------------------
/backend/node_modules/hasown/.eslintrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/hasown/.eslintrc


--------------------------------------------------------------------------------
/backend/node_modules/hasown/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/hasown/.nycrc


--------------------------------------------------------------------------------
/backend/node_modules/hasown/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/hasown/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/hasown/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/hasown/README.md


--------------------------------------------------------------------------------
/backend/node_modules/hasown/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/hasown/index.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/hasown/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/hasown/index.js


--------------------------------------------------------------------------------
/backend/node_modules/inherits/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/inherits/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/ipaddr.js/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/ipaddr.js/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/is-glob/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/is-glob/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/is-glob/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/is-glob/README.md


--------------------------------------------------------------------------------
/backend/node_modules/is-glob/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/is-glob/index.js


--------------------------------------------------------------------------------
/backend/node_modules/is-number/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/is-number/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/jwa/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/jwa/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/jwa/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/jwa/README.md


--------------------------------------------------------------------------------
/backend/node_modules/jwa/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/jwa/index.js


--------------------------------------------------------------------------------
/backend/node_modules/jwa/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/jwa/package.json


--------------------------------------------------------------------------------
/backend/node_modules/jws/CHANGELOG.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/jws/CHANGELOG.md


--------------------------------------------------------------------------------
/backend/node_modules/jws/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/jws/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/jws/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/jws/index.js


--------------------------------------------------------------------------------
/backend/node_modules/jws/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/jws/package.json


--------------------------------------------------------------------------------
/backend/node_modules/jws/readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/jws/readme.md


--------------------------------------------------------------------------------
/backend/node_modules/kareem/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/kareem/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/kareem/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/kareem/README.md


--------------------------------------------------------------------------------
/backend/node_modules/kareem/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/kareem/index.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/kareem/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/kareem/index.js


--------------------------------------------------------------------------------
/backend/node_modules/math-intrinsics/abs.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.abs;


--------------------------------------------------------------------------------
/backend/node_modules/math-intrinsics/floor.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.floor;


--------------------------------------------------------------------------------
/backend/node_modules/math-intrinsics/isNaN.d.ts:
--------------------------------------------------------------------------------
1 | export = Number.isNaN;


--------------------------------------------------------------------------------
/backend/node_modules/math-intrinsics/max.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.max;


--------------------------------------------------------------------------------
/backend/node_modules/math-intrinsics/min.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.min;


--------------------------------------------------------------------------------
/backend/node_modules/math-intrinsics/pow.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.pow;


--------------------------------------------------------------------------------
/backend/node_modules/math-intrinsics/round.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.round;


--------------------------------------------------------------------------------
/backend/node_modules/math-intrinsics/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 | 	"extends": "@ljharb/tsconfig",
3 | }
4 | 


--------------------------------------------------------------------------------
/backend/node_modules/mime-db/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mime-db/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/mime-db/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mime-db/README.md


--------------------------------------------------------------------------------
/backend/node_modules/mime-db/db.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mime-db/db.json


--------------------------------------------------------------------------------
/backend/node_modules/mime-db/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mime-db/index.js


--------------------------------------------------------------------------------
/backend/node_modules/minimatch/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/minimatch/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/moment/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/moment/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/moment/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/moment/README.md


--------------------------------------------------------------------------------
/backend/node_modules/moment/ender.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/moment/ender.js


--------------------------------------------------------------------------------
/backend/node_modules/moment/moment.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/moment/moment.js


--------------------------------------------------------------------------------
/backend/node_modules/moment/package.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/moment/package.js


--------------------------------------------------------------------------------
/backend/node_modules/mongodb/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mongodb/README.md


--------------------------------------------------------------------------------
/backend/node_modules/mongodb/lib/db.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mongodb/lib/db.js


--------------------------------------------------------------------------------
/backend/node_modules/mongodb/src/db.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mongodb/src/db.ts


--------------------------------------------------------------------------------
/backend/node_modules/mongoose/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mongoose/index.js


--------------------------------------------------------------------------------
/backend/node_modules/mongoose/lib/drivers/SPEC.md:
--------------------------------------------------------------------------------
1 | 
2 | # Driver Spec
3 | 
4 | TODO
5 | 


--------------------------------------------------------------------------------
/backend/node_modules/mpath/.travis.yml:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mpath/.travis.yml


--------------------------------------------------------------------------------
/backend/node_modules/mpath/History.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mpath/History.md


--------------------------------------------------------------------------------
/backend/node_modules/mpath/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mpath/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/mpath/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mpath/README.md


--------------------------------------------------------------------------------
/backend/node_modules/mpath/SECURITY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mpath/SECURITY.md


--------------------------------------------------------------------------------
/backend/node_modules/mpath/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mpath/index.js


--------------------------------------------------------------------------------
/backend/node_modules/mpath/test/.eslintrc.yml:
--------------------------------------------------------------------------------
1 | env:
2 |   mocha: true
3 | rules:
4 |   no-unused-vars: off


--------------------------------------------------------------------------------
/backend/node_modules/mquery/History.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mquery/History.md


--------------------------------------------------------------------------------
/backend/node_modules/mquery/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mquery/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/mquery/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mquery/README.md


--------------------------------------------------------------------------------
/backend/node_modules/mquery/lib/env.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/mquery/lib/env.js


--------------------------------------------------------------------------------
/backend/node_modules/ms/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/ms/index.js


--------------------------------------------------------------------------------
/backend/node_modules/ms/license.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/ms/license.md


--------------------------------------------------------------------------------
/backend/node_modules/ms/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/ms/package.json


--------------------------------------------------------------------------------
/backend/node_modules/ms/readme.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/ms/readme.md


--------------------------------------------------------------------------------
/backend/node_modules/node-cache/.nvmrc:
--------------------------------------------------------------------------------
1 | 10.16
2 | 


--------------------------------------------------------------------------------
/backend/node_modules/nodemon/.prettierrc.json:
--------------------------------------------------------------------------------
1 | {
2 |   "singleQuote": true
3 | }
4 | 


--------------------------------------------------------------------------------
/backend/node_modules/nodemon/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/nodemon/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/nodemon/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/nodemon/README.md


--------------------------------------------------------------------------------
/backend/node_modules/nodemon/lib/index.js:
--------------------------------------------------------------------------------
1 | module.exports = require('./nodemon');


--------------------------------------------------------------------------------
/backend/node_modules/object-inspect/util.inspect.js:
--------------------------------------------------------------------------------
1 | module.exports = require('util').inspect;
2 | 


--------------------------------------------------------------------------------
/backend/node_modules/once/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/once/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/once/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/once/README.md


--------------------------------------------------------------------------------
/backend/node_modules/once/once.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/once/once.js


--------------------------------------------------------------------------------
/backend/node_modules/once/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/once/package.json


--------------------------------------------------------------------------------
/backend/node_modules/parseurl/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/parseurl/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/parseurl/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/parseurl/index.js


--------------------------------------------------------------------------------
/backend/node_modules/picomatch/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/picomatch/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/picomatch/index.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | module.exports = require('./lib/picomatch');
4 | 


--------------------------------------------------------------------------------
/backend/node_modules/qs/.editorconfig:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/.editorconfig


--------------------------------------------------------------------------------
/backend/node_modules/qs/.eslintrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/.eslintrc


--------------------------------------------------------------------------------
/backend/node_modules/qs/.nycrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/.nycrc


--------------------------------------------------------------------------------
/backend/node_modules/qs/CHANGELOG.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/CHANGELOG.md


--------------------------------------------------------------------------------
/backend/node_modules/qs/LICENSE.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/LICENSE.md


--------------------------------------------------------------------------------
/backend/node_modules/qs/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/README.md


--------------------------------------------------------------------------------
/backend/node_modules/qs/dist/qs.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/dist/qs.js


--------------------------------------------------------------------------------
/backend/node_modules/qs/lib/formats.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/lib/formats.js


--------------------------------------------------------------------------------
/backend/node_modules/qs/lib/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/lib/index.js


--------------------------------------------------------------------------------
/backend/node_modules/qs/lib/parse.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/lib/parse.js


--------------------------------------------------------------------------------
/backend/node_modules/qs/lib/utils.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/lib/utils.js


--------------------------------------------------------------------------------
/backend/node_modules/qs/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/package.json


--------------------------------------------------------------------------------
/backend/node_modules/qs/test/parse.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/test/parse.js


--------------------------------------------------------------------------------
/backend/node_modules/qs/test/utils.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/qs/test/utils.js


--------------------------------------------------------------------------------
/backend/node_modules/raw-body/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/raw-body/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/raw-body/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/raw-body/index.js


--------------------------------------------------------------------------------
/backend/node_modules/readdirp/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/readdirp/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/readdirp/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/readdirp/index.js


--------------------------------------------------------------------------------
/backend/node_modules/router/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/router/HISTORY.md


--------------------------------------------------------------------------------
/backend/node_modules/router/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/router/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/router/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/router/README.md


--------------------------------------------------------------------------------
/backend/node_modules/router/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/router/index.js


--------------------------------------------------------------------------------
/backend/node_modules/scmp/.travis.yml:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/scmp/.travis.yml


--------------------------------------------------------------------------------
/backend/node_modules/scmp/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/scmp/HISTORY.md


--------------------------------------------------------------------------------
/backend/node_modules/scmp/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/scmp/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/scmp/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/scmp/README.md


--------------------------------------------------------------------------------
/backend/node_modules/scmp/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/scmp/index.js


--------------------------------------------------------------------------------
/backend/node_modules/scmp/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/scmp/package.json


--------------------------------------------------------------------------------
/backend/node_modules/scmp/test/test.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/scmp/test/test.js


--------------------------------------------------------------------------------
/backend/node_modules/semver/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/semver/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/semver/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/semver/README.md


--------------------------------------------------------------------------------
/backend/node_modules/semver/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/semver/index.js


--------------------------------------------------------------------------------
/backend/node_modules/semver/preload.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/semver/preload.js


--------------------------------------------------------------------------------
/backend/node_modules/semver/range.bnf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/semver/range.bnf


--------------------------------------------------------------------------------
/backend/node_modules/send/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/send/HISTORY.md


--------------------------------------------------------------------------------
/backend/node_modules/send/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/send/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/send/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/send/README.md


--------------------------------------------------------------------------------
/backend/node_modules/send/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/send/index.js


--------------------------------------------------------------------------------
/backend/node_modules/send/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/send/package.json


--------------------------------------------------------------------------------
/backend/node_modules/sift/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/sift/README.md


--------------------------------------------------------------------------------
/backend/node_modules/sift/es/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/sift/es/index.js


--------------------------------------------------------------------------------
/backend/node_modules/sift/index.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/sift/index.d.ts


--------------------------------------------------------------------------------
/backend/node_modules/sift/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/sift/index.js


--------------------------------------------------------------------------------
/backend/node_modules/sift/lib/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/sift/lib/index.js


--------------------------------------------------------------------------------
/backend/node_modules/sift/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/sift/package.json


--------------------------------------------------------------------------------
/backend/node_modules/sift/sift.min.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/sift/sift.min.js


--------------------------------------------------------------------------------
/backend/node_modules/sift/src/core.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/sift/src/core.ts


--------------------------------------------------------------------------------
/backend/node_modules/sift/src/index.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/sift/src/index.ts


--------------------------------------------------------------------------------
/backend/node_modules/sift/src/utils.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/sift/src/utils.ts


--------------------------------------------------------------------------------
/backend/node_modules/sparse-bitfield/.npmignore:
--------------------------------------------------------------------------------
1 | node_modules
2 | 


--------------------------------------------------------------------------------
/backend/node_modules/statuses/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/statuses/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/statuses/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/statuses/index.js


--------------------------------------------------------------------------------
/backend/node_modules/touch/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/touch/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/touch/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/touch/README.md


--------------------------------------------------------------------------------
/backend/node_modules/touch/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/touch/index.js


--------------------------------------------------------------------------------
/backend/node_modules/tr46/LICENSE.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/tr46/LICENSE.md


--------------------------------------------------------------------------------
/backend/node_modules/tr46/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/tr46/README.md


--------------------------------------------------------------------------------
/backend/node_modules/tr46/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/tr46/index.js


--------------------------------------------------------------------------------
/backend/node_modules/tr46/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/tr46/package.json


--------------------------------------------------------------------------------
/backend/node_modules/type-is/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/type-is/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/type-is/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/type-is/README.md


--------------------------------------------------------------------------------
/backend/node_modules/type-is/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/type-is/index.js


--------------------------------------------------------------------------------
/backend/node_modules/undefsafe/.jscsrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/undefsafe/.jscsrc


--------------------------------------------------------------------------------
/backend/node_modules/undefsafe/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/undefsafe/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/unpipe/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/unpipe/HISTORY.md


--------------------------------------------------------------------------------
/backend/node_modules/unpipe/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/unpipe/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/unpipe/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/unpipe/README.md


--------------------------------------------------------------------------------
/backend/node_modules/unpipe/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/unpipe/index.js


--------------------------------------------------------------------------------
/backend/node_modules/vary/HISTORY.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/vary/HISTORY.md


--------------------------------------------------------------------------------
/backend/node_modules/vary/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/vary/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/vary/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/vary/README.md


--------------------------------------------------------------------------------
/backend/node_modules/vary/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/vary/index.js


--------------------------------------------------------------------------------
/backend/node_modules/vary/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/vary/package.json


--------------------------------------------------------------------------------
/backend/node_modules/wrappy/LICENSE:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/wrappy/LICENSE


--------------------------------------------------------------------------------
/backend/node_modules/wrappy/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/wrappy/README.md


--------------------------------------------------------------------------------
/backend/node_modules/wrappy/wrappy.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/node_modules/wrappy/wrappy.js


--------------------------------------------------------------------------------
/backend/package-lock.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/package-lock.json


--------------------------------------------------------------------------------
/backend/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/package.json


--------------------------------------------------------------------------------
/backend/schemas/HoldingSchema.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/schemas/HoldingSchema.js


--------------------------------------------------------------------------------
/backend/schemas/OrderSchema.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/schemas/OrderSchema.js


--------------------------------------------------------------------------------
/backend/schemas/PositionSchema.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/backend/schemas/PositionSchema.js


--------------------------------------------------------------------------------
/dashboard/.env:
--------------------------------------------------------------------------------
1 | REACT_APP_BACKEND_URL=https://tradebackend-pc2r.onrender.com
2 | 


--------------------------------------------------------------------------------
/dashboard/.gitignore:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/.gitignore


--------------------------------------------------------------------------------
/dashboard/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/README.md


--------------------------------------------------------------------------------
/dashboard/package-lock.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/package-lock.json


--------------------------------------------------------------------------------
/dashboard/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/package.json


--------------------------------------------------------------------------------
/dashboard/public/index.html:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/public/index.html


--------------------------------------------------------------------------------
/dashboard/public/logo.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/public/logo.png


--------------------------------------------------------------------------------
/dashboard/public/robots.txt:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/public/robots.txt


--------------------------------------------------------------------------------
/dashboard/src/components/Apps.css:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Apps.css


--------------------------------------------------------------------------------
/dashboard/src/components/Apps.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Apps.js


--------------------------------------------------------------------------------
/dashboard/src/components/ChartRef.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/ChartRef.js


--------------------------------------------------------------------------------
/dashboard/src/components/Dashboard.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Dashboard.js


--------------------------------------------------------------------------------
/dashboard/src/components/Funds.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Funds.js


--------------------------------------------------------------------------------
/dashboard/src/components/Holdings.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Holdings.js


--------------------------------------------------------------------------------
/dashboard/src/components/Home.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Home.js


--------------------------------------------------------------------------------
/dashboard/src/components/LiveData.css:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/LiveData.css


--------------------------------------------------------------------------------
/dashboard/src/components/LiveData.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/LiveData.js


--------------------------------------------------------------------------------
/dashboard/src/components/Menu.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Menu.js


--------------------------------------------------------------------------------
/dashboard/src/components/Orders.css:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Orders.css


--------------------------------------------------------------------------------
/dashboard/src/components/Orders.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Orders.js


--------------------------------------------------------------------------------
/dashboard/src/components/Positions.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Positions.js


--------------------------------------------------------------------------------
/dashboard/src/components/Summary.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/Summary.js


--------------------------------------------------------------------------------
/dashboard/src/components/TopBar.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/TopBar.js


--------------------------------------------------------------------------------
/dashboard/src/components/WatchList.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/WatchList.js


--------------------------------------------------------------------------------
/dashboard/src/components/style.css:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/components/style.css


--------------------------------------------------------------------------------
/dashboard/src/data/data.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/data/data.js


--------------------------------------------------------------------------------
/dashboard/src/index.css:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/index.css


--------------------------------------------------------------------------------
/dashboard/src/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/dashboard/src/index.js


--------------------------------------------------------------------------------
/frontend/.env:
--------------------------------------------------------------------------------
1 | REACT_APP_BACKEND_URL=https://tradebackend-pc2r.onrender.com
2 | 


--------------------------------------------------------------------------------
/frontend/.gitignore:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/.gitignore


--------------------------------------------------------------------------------
/frontend/README.md:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/README.md


--------------------------------------------------------------------------------
/frontend/package-lock.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/package-lock.json


--------------------------------------------------------------------------------
/frontend/package.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/package.json


--------------------------------------------------------------------------------
/frontend/public/index.html:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/public/index.html


--------------------------------------------------------------------------------
/frontend/public/manifest.json:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/public/manifest.json


--------------------------------------------------------------------------------
/frontend/public/media/logo.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/public/media/logo.png


--------------------------------------------------------------------------------
/frontend/public/robots.txt:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/public/robots.txt


--------------------------------------------------------------------------------
/frontend/src/index.css:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/src/index.css


--------------------------------------------------------------------------------
/frontend/src/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/src/index.js


--------------------------------------------------------------------------------
/frontend/src/landing_page/Footer.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/src/landing_page/Footer.js


--------------------------------------------------------------------------------
/frontend/src/landing_page/Navbar.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/src/landing_page/Navbar.js


--------------------------------------------------------------------------------
/frontend/src/landing_page/NotFound.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/src/landing_page/NotFound.js


--------------------------------------------------------------------------------
/frontend/src/landing_page/apps/Hold.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/src/landing_page/apps/Hold.js


--------------------------------------------------------------------------------
/frontend/src/landing_page/apps/Ipo.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/src/landing_page/apps/Ipo.js


--------------------------------------------------------------------------------
/frontend/src/landing_page/home/Hero.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/YashSingh03777/TRADE_STOCK_EASY/HEAD/frontend/src/landing_page/home/Hero.js


--------------------------------------------------------------------------------



## **Getting Started**

1. **Clone the repository:**

```bash
git clone https://github.com/YashSingh03777/TRADE_STOCK_EASY.git
```

2. **Install dependencies for backend and frontend:**

```bash
cd backend
npm install

cd ../frontend
npm install
```

3. **Configure environment variables** (API keys, database URLs).
4. **Run the platform locally:**

```bash
# Backend
npm start

# Frontend
npm start
```

5. Open your browser at `http://localhost:3000` to access the dashboard.

---

## **Future Enhancements**

* Integrate advanced reinforcement learning for automated trading strategies.
* Support multiple brokerage integrations for global markets.
* Provide predictive analytics dashboards for risk management.
* Add AI-based portfolio optimization features for long-term investments.

