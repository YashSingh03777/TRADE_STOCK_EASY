// import React from 'react';
// import Accounts from './Accounts';
// import Challenges from './Challenges';
// import Stocks from './Stocks ';    
// import Blogs from './Blogs';
// import Charges from './Charges';
// import Equity from './Equity';
// import Funds from './Funds';
// import Hold from './Hold';
// import Intraday from './Intraday';
// import Ipo from './Ipo';
// import LongTerm from './LongTerm';
// import Machine from './Machine';
// import Positions from './Positions';
// import Prices from './Prices';
// import ReduceML from './ReduceML';
// import SaveTime from './SaveTime';
// import Trade from './Trade';
// import WhyWe from './WhyWe';




// function Pages() {
//   return (
//     <>
//       <Accounts />
//       <Blogs/>
//       <Challenges />
//       <Charges/>
//       <Equity/>
//       <Funds/>
//       <Hold/>
//       <Intraday/>
//       <Ipo/>
//       <LongTerm/>
//       <Machine/>
//       <Positions/>
//       <Prices/>
//       <ReduceML/>
//       <SaveTime/>
//       <Trade/>
//       <Stocks/>
//       <WhyWe/>
//     </>
//   );
// }

// export default Pages;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Accounts from './Accounts';
import Blogs from './Blogs';
import Stocks from './Stocks';
import Charges from './Charges';
import Challenges from './Challenges';
import Documentation from './Documentation';
import Funds from './Funds';
import Hold from './Hold';
import Intraday from './Intraday';
import Ipo from './Ipo';
import LongTerm from './LongTerm';
import Machine from './Machine';
import Positions from './Positions'; // ✅ Fixed this
import ReduceML from './ReduceML';
import SaveTime from './SaveTime'; // ✅ Only once
import Trade from './Trade';
import WhyWe from './WhyWe';
import Prices from './Prices';

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="stocks" element={<Stocks />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="charges" element={<Charges />} />
        <Route path="challenges" element={<Challenges />} />
        <Route path="documentation" element={<Documentation  />} />
        <Route path="funds" element={<Funds />} />
        <Route path="hold" element={<Hold />} />
        <Route path="intraday" element={<Intraday />} />
        <Route path="ipo" element={<Ipo />} />
        <Route path="longterm" element={<LongTerm />} />
        <Route path="machine" element={<Machine />} />
        <Route path="positions" element={<Positions />} />
        <Route path="prices" element={<Prices />} />
        <Route path="reduceml" element={<ReduceML />} />
        <Route path="savetime" element={<SaveTime />} />
        <Route path="trade" element={<Trade />} />
        <Route path="whywe" element={<WhyWe />} />
      </Routes>
    </div>
  );
}

export default Pages;
