/* 1 */

let userName = "Max";
let userAge = 19;

createVisitor = (a, b, c) => {
    const userInfo = {
        uName: a,
        uAge: b,
        uTicket: c
    }
    console.log(userInfo);
    return userInfo;
}

/* 2 */

revokeTicket = info => {
    info.uTicket = null;
    console.log(info);
}

const userInfo = createVisitor(userName, userAge, "H32AZ123");
revokeTicket(userInfo);

/* 3 */

ticketStatus = (ticketObj, ticketId) => {
    if(ticketObj.hasOwnProperty(ticketId) && ticketObj[ticketId] != null) {
        console.log(`sold to ${ticketObj[ticketId]}`);
    }
    else if(ticketObj.hasOwnProperty(ticketId)) {
        console.log("not sold");
    }
    else {
        console.log("unknown ticket id");
    }
}

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };
  ticketStatus(tickets, 'RE90VAW7');
  ticketStatus(tickets, '0H2AZ123');
  ticketStatus(tickets, '23LA9T41');

/* 4 */

  simpleTicketStatus = (ticketObj, ticketId) => {
    if(ticketObj.hasOwnProperty(ticketId) && ticketObj[ticketId] != null) {
        console.log(`sold to ${ticketObj[ticketId]}`);
    }
    else {
        console.log("invalid ticket !!!");
    }
}
simpleTicketStatus(tickets, '23LA9T41');
simpleTicketStatus(tickets, '0H2AZ123');
simpleTicketStatus(tickets, 'RE90VAW7');

/* 5 */

const gtcVersion = visitor => {
    if (visitor.gtc && visitor.gtc.signed && visitor.gtc.version) {
        return console.log(visitor.gtc.version);
    } else {return console.log(undefined);}
}
const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
  };

  const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };
gtcVersion(visitorNew);
gtcVersion(visitorOld);