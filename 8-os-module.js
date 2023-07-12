const { log, error, debug } = require("console");
const os = require("os");

//info about curent use

const user = os.userInfo();

log(user);
log(os.uptime());

const osinfo = {
  osType: os.type(),
  osName: os.hostname(),
  usedMem: os.totalmem(),
  freeMem: os.freemem(),
};

log(osinfo);
