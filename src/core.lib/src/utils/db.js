const _0x5ee3a4=_0x3bb5;function _0x4955(){const _0x527870=['INSERT\x20INTO\x20msgs\x20(shortId,\x20longId,\x20seq,\x20peerUid,\x20chatType)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?)','清理消息缓存','assign','RgJAf','KCrVn','djrZo','Database','Could\x20not\x20get\x20max\x20short\x20id,\x20Use\x20default\x20-2147483640','db\x20could\x20not\x20get\x20temp\x20uin\x20map','更新消息,\x20shortId:',',\x20msgId:\x20','bSCww','Could\x20not\x20create\x20table\x20temp_uins','element','getFileCacheByName','nVwQV','path','prepare','close','oxvOk','set','SELECT\x20MAX(shortId)\x20as\x20maxId\x20FROM\x20msgs','has','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20msgs\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20shortId\x20INTEGER\x20NOT\x20NULL\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20longId\x20TEXT\x20NOT\x20NULL\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20seq\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20peerUid\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20chatType\x20INTEGER\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)',',\x20seq:\x20','ONVLn','shortId','Could\x20not\x20get\x20msg','ANint','EwyXd','SELECT\x20*\x20FROM\x20files\x20WHERE\x20name\x20=\x20?','JTBFj','errno','SELECT\x20*\x20FROM\x20msgs\x20WHERE\x20shortId\x20=\x20?','ZWHgd','init','UJaKJ','size','KOxhl','kBOpn','globalMsgShortId','BzzJM','jWDZX','681950EeBKRG','fFWLb','1354872FMikHh','SjgQL','msgSeq','then','url','db\x20could\x20not\x20update\x20file\x20cache','数据库中消息最大短id','msgTime','UDDgY','18IPdVNq','RKYQM','msgList','2733545NkQZuz','getMsg','all','db\x20could\x20not\x20get\x20msg\x20by\x20long\x20id','name','JswWY','Uswrd','cHEji','MoSiK','Could\x20not\x20create\x20table\x20files','SPyEJ','SELECT\x20*\x20FROM\x20temp_uins','uid','sjkry','JvqCg','catch','updateFileCache','WnKmT','记录消息到数据库,\x20消息长id:\x20','updateMsg','db\x20could\x20not\x20add\x20file','addFileCache','uOmVE','db\x20could\x20not\x20add\x20temp\x20uin','db\x20getMsgByLongId\x20error','ueSjR',',\x20短id:\x20','createTable','OPEN_CREATE','3496imPeBg','OUzPx','msgId','msgCache','SELECT\x20*\x20FROM\x20msgs\x20WHERE\x20longId\x20=\x20?','hspew','uuid','LcZJb','INSERT\x20INTO\x20temp_uins\x20(uin,\x20uid)\x20VALUES\x20(?,\x20?)','chatType','9063666DfdKvG','getFileCache','run','lTsZB','getCurrentMaxShortId','sQOVv','hFvTS','parse','VaTsE','jKGGA','XLnzh','getMsgByShortId','getMsgByLongId','SpFGr','UPDATE\x20msgs\x20SET\x20seq=?\x20WHERE\x20longId=?','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20files\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20path\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20url\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20size\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uuid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20elementType\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20element\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20elementId\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20msgId\x20TEXT\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)','EkuiY','rxsAQ','SELECT\x20*\x20FROM\x20files\x20WHERE\x20uuid\x20=\x20?','AJWSC','peerUid','getMsgBySeq','maxId','LNmTq','now','getReceivedTempUinMap','YJgBI','yAHQQ','UPDATE\x20files\x20SET\x20path\x20=\x20?,\x20url\x20=\x20?\x20WHERE\x20uuid\x20=\x20?','sRmxp','get','21847HeIlQc','lNHiA','Could\x20not\x20connect\x20to\x20database','5214056eCVIGB','SELECT\x20*\x20FROM\x20temp_uins\x20WHERE\x20uin\x20=\x20?','elementType','yQcBm','UPziN','OPEN_READWRITE','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20temp_uins\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uin\x20TEXT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)','longId','forEach','stringify','addMsg','1629293kncAXX','KnJLe','delete','db\x20could\x20not\x20add\x20msg'];_0x4955=function(){return _0x527870;};return _0x4955();}(function(_0x1462c0,_0x438bf9){const _0x153e2e=_0x3bb5,_0x2b2fd5=_0x1462c0();while(!![]){try{const _0xb657b4=-parseInt(_0x153e2e(0x12e))/0x1+parseInt(_0x153e2e(0x15d))/0x2+-parseInt(_0x153e2e(0x15f))/0x3+-parseInt(_0x153e2e(0x123))/0x4+parseInt(_0x153e2e(0xda))/0x5*(parseInt(_0x153e2e(0x168))/0x6)+-parseInt(_0x153e2e(0x120))/0x7*(-parseInt(_0x153e2e(0xf7))/0x8)+parseInt(_0x153e2e(0x101))/0x9;if(_0xb657b4===_0x438bf9)break;else _0x2b2fd5['push'](_0x2b2fd5['shift']());}catch(_0x560f4c){_0x2b2fd5['push'](_0x2b2fd5['shift']());}}}(_0x4955,0xec3c6));function _0x3bb5(_0x6b6b46,_0x1075a1){const _0x4955e7=_0x4955();return _0x3bb5=function(_0x3bb508,_0x293124){_0x3bb508=_0x3bb508-0xda;let _0xd40839=_0x4955e7[_0x3bb508];return _0xd40839;},_0x3bb5(_0x6b6b46,_0x1075a1);}import _0xb295d4 from'sqlite3';import{logDebug,logError}from'@/common/utils/log';import{NTQQMsgApi}from'@/core';class DBUtilBase{['db'];async[_0x5ee3a4(0x155)](_0x30ef1d){const _0xb731b7=_0x5ee3a4,_0x560253={'cHEji':_0xb731b7(0x122),'OgyTc':function(_0x51e03b,_0x988bce){return _0x51e03b(_0x988bce);},'XLnzh':function(_0x1d0701){return _0x1d0701();},'jWDZX':function(_0x145f1a,_0x5c8da1){return _0x145f1a|_0x5c8da1;}};if(this['db'])return;return new Promise((_0x18c8a2,_0x2aee19)=>{const _0x397812=_0xb731b7,_0x1e69b5={'TrCEO':_0x560253[_0x397812(0xe1)],'sQOVv':function(_0x3e426c,_0x2eec5a){return _0x560253['OgyTc'](_0x3e426c,_0x2eec5a);},'EwyXd':function(_0xd8bc87){const _0x34bb96=_0x397812;return _0x560253[_0x34bb96(0x10b)](_0xd8bc87);}};this['db']=new _0xb295d4[(_0x397812(0x138))](_0x30ef1d,_0x560253[_0x397812(0x15c)](_0xb295d4[_0x397812(0x128)],_0xb295d4[_0x397812(0xf6)]),_0x228e79=>{const _0x38a5fa=_0x397812;if(_0x228e79){logError(_0x1e69b5['TrCEO'],_0x228e79),_0x1e69b5[_0x38a5fa(0x106)](_0x2aee19,_0x228e79);return;}this[_0x38a5fa(0xf5)](),_0x1e69b5[_0x38a5fa(0x14f)](_0x18c8a2);});});}[_0x5ee3a4(0xf5)](){const _0x4fcf67=_0x5ee3a4,_0x45c9ad={'ANint':'Method\x20not\x20implemented.'};throw new Error(_0x45c9ad[_0x4fcf67(0x14e)]);}['close'](){const _0x54f608=_0x5ee3a4;this['db']?.[_0x54f608(0x144)]();}}class DBUtil extends DBUtilBase{[_0x5ee3a4(0xfa)]=new Map();[_0x5ee3a4(0x15a)]=-0x7ffffff8;constructor(){const _0x865121=_0x5ee3a4,_0x171aa7={'JvqCg':function(_0x54adb4,_0x547935){return _0x54adb4*_0x547935;},'SPyEJ':function(_0x233b36,_0x46fb1){return _0x233b36(_0x46fb1);},'KnJLe':_0x865121(0x133),'WnKmT':function(_0x102549,_0x2963e0){return _0x102549*_0x2963e0;},'AJWSC':function(_0x5524ad,_0x4d64d0,_0x530c71){return _0x5524ad(_0x4d64d0,_0x530c71);}};super();const _0x2f9f3b=_0x171aa7[_0x865121(0xeb)](_0x171aa7['WnKmT'](0x3e8,0x3c),0xa);_0x171aa7[_0x865121(0x114)](setInterval,()=>{const _0xe0fb78=_0x865121,_0x23e95b={'UPziN':function(_0x18a549,_0x3bafb6){return _0x18a549-_0x3bafb6;},'VaTsE':function(_0x564a9b,_0x59d62a){const _0x3ae7a4=_0x3bb5;return _0x171aa7[_0x3ae7a4(0xe8)](_0x564a9b,_0x59d62a);}};_0x171aa7[_0xe0fb78(0xe4)](logDebug,_0x171aa7[_0xe0fb78(0x12f)]),this[_0xe0fb78(0xfa)]['forEach']((_0x4aec3a,_0x42251b)=>{const _0x23fcfe=_0xe0fb78;_0x23e95b[_0x23fcfe(0x127)](Date[_0x23fcfe(0x119)](),_0x23e95b[_0x23fcfe(0x109)](parseInt(_0x4aec3a[_0x23fcfe(0x166)]),0x3e8))>_0x2f9f3b&&this[_0x23fcfe(0xfa)][_0x23fcfe(0x130)](_0x42251b);});},_0x2f9f3b);}async[_0x5ee3a4(0x155)](_0x5aae1a){const _0x2683cd=_0x5ee3a4;await super[_0x2683cd(0x155)](_0x5aae1a),this[_0x2683cd(0x15a)]=await this[_0x2683cd(0x105)]();}[_0x5ee3a4(0xf5)](){const _0x1cd9df=_0x5ee3a4,_0x11c5d7={'lTsZB':'Could\x20not\x20create\x20table\x20msgs','sjkry':function(_0x1e3cd8,_0x337858,_0x57527d){return _0x1e3cd8(_0x337858,_0x57527d);},'KCrVn':_0x1cd9df(0xe3),'LNmTq':_0x1cd9df(0x13e)},_0x3571e6=_0x1cd9df(0x149);this['db'][_0x1cd9df(0x103)](_0x3571e6,function(_0x50e4c5){const _0x13edcd=_0x1cd9df;_0x50e4c5&&logError(_0x11c5d7[_0x13edcd(0x104)],_0x50e4c5['stack']);});const _0x24209d=_0x1cd9df(0x110);this['db'][_0x1cd9df(0x103)](_0x24209d,function(_0x43e97d){const _0x4efac9=_0x1cd9df;_0x43e97d&&_0x11c5d7[_0x4efac9(0xe7)](logError,_0x11c5d7[_0x4efac9(0x136)],_0x43e97d);});const _0x2a3bd6=_0x1cd9df(0x129);this['db'][_0x1cd9df(0x103)](_0x2a3bd6,function(_0x12ead4){const _0x2fc09f=_0x1cd9df;_0x12ead4&&logError(_0x11c5d7[_0x2fc09f(0x118)],_0x12ead4);});}async['getCurrentMaxShortId'](){const _0x2070fe=_0x5ee3a4,_0x502775={'hspew':_0x2070fe(0x139),'Uswrd':function(_0x16f4ed,_0x198b9c){return _0x16f4ed(_0x198b9c);},'OUzPx':function(_0x2c843b,_0x171847,_0x4203a1){return _0x2c843b(_0x171847,_0x4203a1);},'SpFGr':_0x2070fe(0x165),'BzzJM':_0x2070fe(0x147)};return new Promise((_0x3771b5,_0x36795c)=>{const _0x432402=_0x2070fe;this['db'][_0x432402(0x11f)](_0x502775[_0x432402(0x15b)],(_0x40c48b,_0x378b84)=>{const _0x34494a=_0x432402;if(_0x40c48b)return logDebug(_0x502775[_0x34494a(0xfc)],_0x40c48b),_0x502775[_0x34494a(0xe0)](_0x3771b5,-0x7ffffff8);_0x502775[_0x34494a(0xf8)](logDebug,_0x502775[_0x34494a(0x10e)],_0x378b84?.[_0x34494a(0x117)]),_0x502775[_0x34494a(0xe0)](_0x3771b5,_0x378b84?.[_0x34494a(0x117)]??-0x7ffffff8);});});}async['getMsg'](_0x206f95,_0x40b692){const _0x147280=_0x5ee3a4,_0x437302={'JTBFj':function(_0x16ef14,_0x53f6b0){return _0x16ef14(_0x53f6b0);}},_0x5759e0=this['db'][_0x147280(0x143)](_0x206f95);return new Promise((_0x121747,_0x5c6709)=>{const _0x55cf0d=_0x147280,_0x24ad03={'UJaKJ':function(_0x1e45a2,_0x5a9576){return _0x1e45a2(_0x5a9576);}};_0x5759e0[_0x55cf0d(0x11f)](..._0x40b692,(_0x4307df,_0x22cbe5)=>{const _0x37f731=_0x55cf0d;if(_0x4307df)return logError(_0x37f731(0x14d),_0x4307df,_0x206f95,_0x40b692),_0x437302[_0x37f731(0x151)](_0x121747,null);if(!_0x22cbe5){_0x121747(null);return;}const _0x17aada=_0x22cbe5[_0x37f731(0x12a)];NTQQMsgApi['getMsgsByMsgId']({'peerUid':_0x22cbe5['peerUid'],'chatType':_0x22cbe5[_0x37f731(0x100)]},[_0x17aada])[_0x37f731(0x162)](_0x3d5b8a=>{const _0x8cee3b=_0x37f731,_0x223402=_0x3d5b8a[_0x8cee3b(0x16a)][0x0];if(!_0x223402){_0x24ad03[_0x8cee3b(0x156)](_0x121747,null);return;}_0x223402['id']=_0x22cbe5[_0x8cee3b(0x14c)],_0x24ad03['UJaKJ'](_0x121747,_0x223402);})[_0x37f731(0xe9)](_0x3e76ab=>{_0x24ad03['UJaKJ'](_0x121747,null);});});});}async[_0x5ee3a4(0x10c)](_0x499407){const _0xdd1951=_0x5ee3a4,_0x386b58={'EDhWK':_0xdd1951(0x153)};if(this['msgCache'][_0xdd1951(0x148)](_0x499407))return this[_0xdd1951(0xfa)][_0xdd1951(0x11f)](_0x499407);const _0x329485=_0x386b58['EDhWK'];return this[_0xdd1951(0xdb)](_0x329485,[_0x499407]);}async[_0x5ee3a4(0x10d)](_0x2bfb2f){const _0x439a58=_0x5ee3a4,_0x27647f={'bSCww':_0x439a58(0xfb)};if(this[_0x439a58(0xfa)][_0x439a58(0x148)](_0x2bfb2f))return this['msgCache'][_0x439a58(0x11f)](_0x2bfb2f);return this['getMsg'](_0x27647f[_0x439a58(0x13d)],[_0x2bfb2f]);}async[_0x5ee3a4(0x116)](_0x4e3c17,_0x24c615){const _0x711dbe='SELECT\x20*\x20FROM\x20msgs\x20WHERE\x20peerUid\x20=\x20?\x20AND\x20seq\x20=\x20?';return this['getMsg'](_0x711dbe,[_0x4e3c17,_0x24c615]);}async[_0x5ee3a4(0x12d)](_0x41c275,_0x4f4d49=!![]){const _0x1cbf41=_0x5ee3a4,_0x1f4ee8={'JswWY':_0x1cbf41(0xdd),'crbiu':function(_0x13afe0,_0x1a4325){return _0x13afe0===_0x1a4325;},'KOxhl':function(_0x39aaad,_0x436513,_0x270cce){return _0x39aaad(_0x436513,_0x270cce);},'yAHQQ':_0x1cbf41(0x131),'MoSiK':_0x1cbf41(0x132),'yQcBm':function(_0x304173,_0x416a14){return _0x304173(_0x416a14);}},_0x46c00f=await this[_0x1cbf41(0x10d)](_0x41c275[_0x1cbf41(0xf9)]);if(_0x46c00f){if(_0x4f4d49)this[_0x1cbf41(0xed)](_0x41c275)[_0x1cbf41(0x162)]();return _0x46c00f['id'];}const _0x2272fe=this['db'][_0x1cbf41(0x143)](_0x1f4ee8[_0x1cbf41(0xe2)]),_0x46f885=++this[_0x1cbf41(0x15a)];return _0x41c275['id']=_0x46f885,_0x1f4ee8[_0x1cbf41(0x126)](logDebug,_0x1cbf41(0xec)+_0x41c275[_0x1cbf41(0xf9)]+_0x1cbf41(0xf4)+_0x41c275['id']),this[_0x1cbf41(0xfa)][_0x1cbf41(0x146)](_0x46f885,_0x41c275),this[_0x1cbf41(0xfa)][_0x1cbf41(0x146)](_0x41c275[_0x1cbf41(0xf9)],_0x41c275),_0x2272fe[_0x1cbf41(0x103)](this[_0x1cbf41(0x15a)],_0x41c275[_0x1cbf41(0xf9)],_0x41c275[_0x1cbf41(0x161)]['toString'](),_0x41c275[_0x1cbf41(0x115)],_0x41c275[_0x1cbf41(0x100)],_0x32abf6=>{const _0x324da3=_0x1cbf41,_0x3f78be={'LcZJb':function(_0x334bef,_0x3727b3,_0xb0c76){return _0x334bef(_0x3727b3,_0xb0c76);},'YJgBI':_0x1f4ee8[_0x324da3(0xdf)]};_0x32abf6&&(_0x1f4ee8['crbiu'](_0x32abf6[_0x324da3(0x152)],0x13)?this[_0x324da3(0x10d)](_0x41c275[_0x324da3(0xf9)])[_0x324da3(0x162)](_0x250892=>{const _0x36adb4=_0x324da3;_0x250892?(this[_0x36adb4(0xfa)]['set'](_0x46f885,_0x250892),this[_0x36adb4(0xfa)][_0x36adb4(0x146)](_0x250892[_0x36adb4(0xf9)],_0x250892)):_0x3f78be[_0x36adb4(0xfe)](logError,_0x3f78be[_0x36adb4(0x11b)],_0x32abf6);})['catch'](_0x8b9278=>logError(_0x324da3(0xf2),_0x8b9278)):_0x1f4ee8[_0x324da3(0x158)](logError,_0x1f4ee8[_0x324da3(0x11c)],_0x32abf6));}),_0x46f885;}async[_0x5ee3a4(0xed)](_0x53b6e8){const _0x3e3422=_0x5ee3a4,_0x3e5a98={'RKYQM':function(_0x13c68e,_0x104e94,_0x494796){return _0x13c68e(_0x104e94,_0x494796);},'uKgeK':'updateMsg\x20db\x20error','nVwQV':function(_0x3cf0eb,_0x3944b7){return _0x3cf0eb(_0x3944b7);},'fFWLb':_0x3e3422(0x10f)},_0x29377a=this[_0x3e3422(0xfa)][_0x3e3422(0x11f)](_0x53b6e8[_0x3e3422(0xf9)]);_0x29377a&&Object[_0x3e3422(0x134)](_0x29377a,_0x53b6e8);_0x3e5a98[_0x3e3422(0x141)](logDebug,_0x3e3422(0x13b)+_0x53b6e8['id']+_0x3e3422(0x14a)+_0x53b6e8[_0x3e3422(0x161)]+_0x3e3422(0x13c)+_0x53b6e8[_0x3e3422(0xf9)]);const _0x36e2c9=this['db'][_0x3e3422(0x143)](_0x3e5a98[_0x3e3422(0x15e)]);_0x36e2c9['run'](_0x53b6e8[_0x3e3422(0x161)],_0x53b6e8[_0x3e3422(0xf9)],_0x4fac94=>{const _0x2d7120=_0x3e3422;_0x4fac94&&_0x3e5a98[_0x2d7120(0x169)](logError,_0x3e5a98['uKgeK'],_0x4fac94);});}async[_0x5ee3a4(0xef)](_0x4767b1){const _0x7404b1=_0x5ee3a4,_0x4dbda2={'rOdvG':function(_0x19b81a,_0x588e34,_0x4976cd){return _0x19b81a(_0x588e34,_0x4976cd);},'kBOpn':_0x7404b1(0xee),'UFvkV':function(_0x46c185,_0x2f675d){return _0x46c185(_0x2f675d);},'RfUeb':'INSERT\x20INTO\x20files\x20(name,\x20path,\x20url,\x20size,\x20uuid,\x20elementType\x20,element,\x20elementId,\x20msgId)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?)'},_0x1dd11a=this['db'][_0x7404b1(0x143)](_0x4dbda2['RfUeb']);return new Promise((_0x1c06d6,_0x4a0f0e)=>{const _0x1851f1=_0x7404b1;_0x1dd11a[_0x1851f1(0x103)](_0x4767b1[_0x1851f1(0xde)],_0x4767b1[_0x1851f1(0x142)],_0x4767b1[_0x1851f1(0x163)],_0x4767b1[_0x1851f1(0x157)],_0x4767b1[_0x1851f1(0xfd)],_0x4767b1[_0x1851f1(0x125)],JSON[_0x1851f1(0x12c)](_0x4767b1['element']),_0x4767b1['elementId'],_0x4767b1['msgId'],function(_0x1cc7a7){const _0x484661=_0x1851f1;_0x1cc7a7&&(_0x4dbda2['rOdvG'](logError,_0x4dbda2[_0x484661(0x159)],_0x1cc7a7),_0x4dbda2['UFvkV'](_0x4a0f0e,_0x1cc7a7)),_0x1c06d6(null);});});}async[_0x5ee3a4(0x102)](_0x54b3c6,_0x4fb6ad){const _0x442b8c=_0x5ee3a4,_0x26a0c4={'UDDgY':function(_0x129190,_0x1cb8bd){return _0x129190(_0x1cb8bd);}},_0x2d3f23=this['db'][_0x442b8c(0x143)](_0x54b3c6);return new Promise((_0x3be77d,_0x1f4d2d)=>{const _0x47419b=_0x442b8c,_0x3f7d1c={'aewKa':function(_0x4fdc89,_0x5db0a7){const _0x175bd3=_0x3bb5;return _0x26a0c4[_0x175bd3(0x167)](_0x4fdc89,_0x5db0a7);}};_0x2d3f23[_0x47419b(0x11f)](..._0x4fb6ad,(_0x413ac3,_0x1ef085)=>{const _0x44dbcb=_0x47419b;_0x413ac3&&(logError('db\x20could\x20not\x20get\x20file\x20cache',_0x413ac3),_0x3f7d1c['aewKa'](_0x1f4d2d,_0x413ac3)),_0x1ef085&&(_0x1ef085['element']=JSON[_0x44dbcb(0x108)](_0x1ef085[_0x44dbcb(0x13f)])),_0x3f7d1c['aewKa'](_0x3be77d,_0x1ef085);});});}async[_0x5ee3a4(0x140)](_0x1564b9){const _0x209ce8=_0x5ee3a4,_0x207c1c={'ueSjR':_0x209ce8(0x150)};return this[_0x209ce8(0x102)](_0x207c1c[_0x209ce8(0xf3)],[_0x1564b9]);}async['getFileCacheByUuid'](_0xb4dff1){const _0x48997b=_0x5ee3a4;return this[_0x48997b(0x102)](_0x48997b(0x113),[_0xb4dff1]);}async[_0x5ee3a4(0xea)](_0x305647){const _0x6f72b3=_0x5ee3a4,_0x41a627={'VlhOz':_0x6f72b3(0x164),'SjgQL':function(_0xd54d5a,_0x28006b){return _0xd54d5a(_0x28006b);},'smtlm':function(_0x4d7d62,_0xd41e7f){return _0x4d7d62(_0xd41e7f);},'ZWHgd':_0x6f72b3(0x11d)},_0x5eaaf4=this['db']['prepare'](_0x41a627[_0x6f72b3(0x154)]);return new Promise((_0x5b5afd,_0x3d0fbf)=>{const _0x301438=_0x6f72b3,_0x12a0d7={'RgJAf':_0x41a627['VlhOz'],'EkuiY':function(_0x3742ef,_0x52ec5e){const _0x1c1ce9=_0x3bb5;return _0x41a627[_0x1c1ce9(0x160)](_0x3742ef,_0x52ec5e);},'rxsAQ':function(_0xd7abca,_0x4ae301){return _0x41a627['smtlm'](_0xd7abca,_0x4ae301);}};_0x5eaaf4[_0x301438(0x103)](_0x305647[_0x301438(0x142)],_0x305647[_0x301438(0x163)],_0x305647[_0x301438(0xfd)],function(_0x137e52){const _0x357bb6=_0x301438;_0x137e52&&(logError(_0x12a0d7[_0x357bb6(0x135)],_0x137e52),_0x12a0d7[_0x357bb6(0x111)](_0x3d0fbf,_0x137e52)),_0x12a0d7[_0x357bb6(0x112)](_0x5b5afd,null);});});}async[_0x5ee3a4(0x11a)](){const _0x528f82=_0x5ee3a4,_0x371fb8={'uOmVE':function(_0x2893f3,_0xcc5e53,_0x4df8d6){return _0x2893f3(_0xcc5e53,_0x4df8d6);},'jKGGA':function(_0x273b0e,_0x22246b){return _0x273b0e(_0x22246b);},'djrZo':_0x528f82(0xe5)},_0xb30bc7=_0x371fb8[_0x528f82(0x137)];return new Promise((_0x34d4d6,_0x75eb4f)=>{const _0x1488f9=_0x528f82;this['db'][_0x1488f9(0xdc)](_0xb30bc7,(_0x4a06c7,_0x3d7f74)=>{const _0x315316=_0x1488f9;_0x4a06c7&&(_0x371fb8[_0x315316(0xf0)](logError,_0x315316(0x13a),_0x4a06c7),_0x75eb4f(_0x4a06c7));const _0x257640={};_0x3d7f74[_0x315316(0x12b)](_0x4809a1=>{_0x257640[_0x4809a1['uin']]=_0x4809a1['uid'];}),_0x371fb8[_0x315316(0x10a)](_0x34d4d6,_0x257640);});});}async['getUidByTempUin'](_0x74d87b){const _0x350452=_0x5ee3a4,_0x1c4c15={'hFvTS':function(_0x152aa2,_0x3c38b1,_0x314d13){return _0x152aa2(_0x3c38b1,_0x314d13);},'sRmxp':_0x350452(0x13a),'lNHiA':function(_0x1a9813,_0x1d9c66){return _0x1a9813(_0x1d9c66);},'cusxH':_0x350452(0x124)},_0x2a5fcc=_0x1c4c15['cusxH'];return new Promise((_0x591bca,_0x4ea1cd)=>{const _0x3410bb=_0x350452;this['db'][_0x3410bb(0x11f)](_0x2a5fcc,[_0x74d87b],(_0x55c90b,_0x2e51e7)=>{const _0x52ac30=_0x3410bb;_0x55c90b&&(_0x1c4c15[_0x52ac30(0x107)](logError,_0x1c4c15[_0x52ac30(0x11e)],_0x55c90b),_0x1c4c15[_0x52ac30(0x121)](_0x4ea1cd,_0x55c90b)),_0x591bca(_0x2e51e7?.[_0x52ac30(0xe6)]);});});}async['addTempUin'](_0x32ad08,_0x484d79){const _0x5bb9e3=_0x5ee3a4,_0x23a49d={'oxvOk':function(_0x23f8f6,_0x2ecf2f,_0xea8f19){return _0x23f8f6(_0x2ecf2f,_0xea8f19);},'ONVLn':function(_0x33b428,_0x3e5e40){return _0x33b428(_0x3e5e40);}},_0x43c720=await this['getUidByTempUin'](_0x32ad08);if(!_0x43c720){const _0x22b0f4=this['db']['prepare'](_0x5bb9e3(0xff));return new Promise((_0x23489f,_0x5849d2)=>{const _0x40a820=_0x5bb9e3;_0x22b0f4[_0x40a820(0x103)](_0x32ad08,_0x484d79,function(_0x3272fe){const _0xcbc00c=_0x40a820;_0x3272fe&&(_0x23a49d[_0xcbc00c(0x145)](logError,_0xcbc00c(0xf1),_0x3272fe),_0x5849d2(_0x3272fe)),_0x23a49d[_0xcbc00c(0x14b)](_0x23489f,null);});});}}}export const dbUtil=new DBUtil();