const _0x43d642=_0x5283;function _0x5a19(){const _0x313216=['3110132nsSkDz','session','获取好友列表完成','then','handleFriendRequest','wprWh','8JVnusO','onLoginSuccess','KyYXa','uid','getBuddyList','5tesFLr','onBuddyListChange','1aULIET','9184175EMvyLs','45oNcEyj','getBuddyService','3629460iMzpbQ','getFriends','721882abwrCH','ufezq','2834349VNynUF','2038090ufqPPG','push','YDTCJ','开始获取好友列表','获取好友列表超时','addListener','uin','cmPnp','Wgtxj','683018yJqWAG','dSCJk'];_0x5a19=function(){return _0x313216;};return _0x5a19();}(function(_0x3f105c,_0x489ddf){const _0x3f80ab=_0x5283,_0x434d1f=_0x3f105c();while(!![]){try{const _0x5d47f2=parseInt(_0x3f80ab(0x100))/0x1*(-parseInt(_0x3f80ab(0xf1))/0x2)+-parseInt(_0x3f80ab(0xe7))/0x3+parseInt(_0x3f80ab(0xf3))/0x4*(parseInt(_0x3f80ab(0xfe))/0x5)+-parseInt(_0x3f80ab(0xe3))/0x6+-parseInt(_0x3f80ab(0xe5))/0x7*(-parseInt(_0x3f80ab(0xf9))/0x8)+parseInt(_0x3f80ab(0xe1))/0x9*(parseInt(_0x3f80ab(0xe8))/0xa)+parseInt(_0x3f80ab(0x101))/0xb;if(_0x5d47f2===_0x489ddf)break;else _0x434d1f['push'](_0x434d1f['shift']());}catch(_0x4eda4e){_0x434d1f['push'](_0x434d1f['shift']());}}}(_0x5a19,0xcdea3));import{BuddyListener,napCatCore}from'@/core';import{logDebug}from'@/common/utils/log';import{uid2UinMap}from'@/core/data';function _0x5283(_0x55554a,_0x5ad60f){const _0x5a1985=_0x5a19();return _0x5283=function(_0x528377,_0x5e9eb9){_0x528377=_0x528377-0xe1;let _0x1ada88=_0x5a1985[_0x528377];return _0x1ada88;},_0x5283(_0x55554a,_0x5ad60f);}import{randomUUID}from'crypto';const buddyChangeTasks=new Map(),buddyListener=new BuddyListener();buddyListener[_0x43d642(0xff)]=_0x4dda90=>{const _0x2c75a1=_0x43d642,_0x37cae2={'wprWh':function(_0x5745f0,_0x90d404){return _0x5745f0(_0x90d404);}};for(const [_0x5d542a,_0xac083f]of buddyChangeTasks){_0x37cae2[_0x2c75a1(0xf8)](_0xac083f,_0x4dda90),buddyChangeTasks['delete'](_0x5d542a);}},setTimeout(()=>{const _0x414423=_0x43d642;napCatCore[_0x414423(0xfa)](()=>{const _0x4ac090=_0x414423;napCatCore[_0x4ac090(0xed)](buddyListener);});},0x64);export class NTQQFriendApi{static async[_0x43d642(0xe4)](_0x3c4ba=![]){const _0x47d9e6=_0x43d642,_0x125d98={'cmPnp':_0x47d9e6(0xec),'jDoYH':function(_0x337f23,_0x14fadf){return _0x337f23(_0x14fadf);},'KyYXa':function(_0x1916f3,_0x39703c,_0x379e3f){return _0x1916f3(_0x39703c,_0x379e3f);},'YDTCJ':_0x47d9e6(0xf5),'Wgtxj':_0x47d9e6(0xeb),'dSCJk':function(_0x2b40c8){return _0x2b40c8();}};return new Promise((_0x3bc4bd,_0x27e824)=>{const _0x56c7cc=_0x47d9e6,_0x1a2e05={'ufezq':_0x125d98[_0x56c7cc(0xf0)]};let _0x27d963=![];setTimeout(()=>{const _0x478448=_0x56c7cc;!_0x27d963&&(logDebug(_0x125d98[_0x478448(0xef)]),_0x125d98['jDoYH'](_0x27e824,_0x125d98[_0x478448(0xef)]));},0x1388);const _0x2af3a2=[],_0x349379=_0x543a78=>{const _0x4e5250=_0x56c7cc;for(const _0x15ef9a of _0x543a78){for(const _0x241c9f of _0x15ef9a['buddyList']){_0x2af3a2[_0x4e5250(0xe9)](_0x241c9f),uid2UinMap[_0x241c9f[_0x4e5250(0xfc)]]=_0x241c9f[_0x4e5250(0xee)];}}_0x27d963=!![],_0x125d98[_0x4e5250(0xfb)](logDebug,_0x125d98[_0x4e5250(0xea)],_0x2af3a2),_0x3bc4bd(_0x2af3a2);};buddyChangeTasks['set'](_0x125d98[_0x56c7cc(0xf2)](randomUUID),_0x349379),napCatCore['session'][_0x56c7cc(0xe2)]()[_0x56c7cc(0xfd)](_0x3c4ba)[_0x56c7cc(0xf6)](_0x4f088e=>{const _0x324439=_0x56c7cc;logDebug(_0x1a2e05[_0x324439(0xe6)],_0x4f088e);});});}static async[_0x43d642(0xf7)](_0x47b0a6,_0x4bae5c){const _0x21fd3e=_0x43d642;napCatCore[_0x21fd3e(0xf4)][_0x21fd3e(0xe2)]()?.['approvalFriendRequest']({'friendUid':_0x47b0a6['friendUid'],'reqTime':_0x47b0a6['reqTime'],'accept':_0x4bae5c});}}