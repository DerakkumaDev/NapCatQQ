function _0x4058(){const _0x134c89=['10960895UMeTwV','getMsgsBySeqAndCount','5471595NwtRlU','hZyDf','21146oXESBm','转发消息超时','setMsgRead','parse','发送超时','chatType','获取群文件列表超时','forwardMsg','992709HGKjei','KiBAy','XEItL','msgId','ANSNT','com.tencent.multimsg','length','multiForwardMsgWithComment','nick','getMultiMsg','IUjFG','ZmXiN','getMsgService','kdaZY','GQbNB','8180442kUSXdC','BexFj','session','okOch','xsjaI','sendMsg','CSvmB','rwMiR','2091eGkGLe','set','map','NjCZk','ZBPfD','forEach','arkElement','onLoginSuccess','addListener','wIIiL','onMsgInfoListUpdate','getMsgsIncludeSelf','6556MFQzsl','activateChat','setMsgEmojiLikes','getMsgsByMsgId','28CVkAPy','setEmojiLike','20fDXDfY','dGYep','lXJvM','xTRAB','getRichMediaService','catch','getMsgHistory','2441048NQhUeo','activateChatAndGetHistory','delete','onAddSendMsg','app','47OBYpZC','recallMsg','elements','uid','senderUid','CpCrk','cNngI','multiForwardMsg','sendStatus','then','KGJzJ','peerUid','toString'];_0x4058=function(){return _0x134c89;};return _0x4058();}const _0x219883=_0x1d68;(function(_0x3d9a6c,_0x4cafc4){const _0x1a1119=_0x1d68,_0x30533b=_0x3d9a6c();while(!![]){try{const _0x1446f2=-parseInt(_0x1a1119(0x11a))/0x1*(parseInt(_0x1a1119(0x12b))/0x2)+-parseInt(_0x1a1119(0xfc))/0x3*(-parseInt(_0x1a1119(0x108))/0x4)+parseInt(_0x1a1119(0x129))/0x5+-parseInt(_0x1a1119(0x142))/0x6+parseInt(_0x1a1119(0x10c))/0x7*(parseInt(_0x1a1119(0x115))/0x8)+parseInt(_0x1a1119(0x133))/0x9*(parseInt(_0x1a1119(0x10e))/0xa)+-parseInt(_0x1a1119(0x127))/0xb;if(_0x1446f2===_0x4cafc4)break;else _0x30533b['push'](_0x30533b['shift']());}catch(_0x62c672){_0x30533b['push'](_0x30533b['shift']());}}}(_0x4058,0xc8735));import{selfInfo}from'@/core/data';function _0x1d68(_0x3dfdf0,_0x577e22){const _0x40584e=_0x4058();return _0x1d68=function(_0x1d6822,_0x2c644c){_0x1d6822=_0x1d6822-0xfb;let _0x5ea80c=_0x40584e[_0x1d6822];return _0x5ea80c;},_0x1d68(_0x3dfdf0,_0x577e22);}import{log,logError}from'@/common/utils/log';import{sleep}from'@/common/utils/helper';import{napCatCore}from'@/core';import{MsgListener}from'@/core/listeners';import{randomUUID}from'crypto';const sendMessagePool={},sendSuccessCBMap={},GroupFileInfoUpdateTasks=new Map(),sentMsgTasks=new Map(),msgListener=new MsgListener();msgListener['onGroupFileInfoUpdate']=_0x1db44c=>{const _0x423a09=_0x1d68,_0x379dbc={'ZBPfD':function(_0x43597b,_0xb99cd){return _0x43597b(_0xb99cd);}};for(const [_0xb8d27f,_0x30fc1d]of GroupFileInfoUpdateTasks){_0x379dbc[_0x423a09(0x100)](_0x30fc1d,_0x1db44c),GroupFileInfoUpdateTasks[_0x423a09(0x117)](_0xb8d27f);}},msgListener[_0x219883(0x118)]=_0x322fdf=>{const _0x460149=_0x219883,_0x24b627={'cNngI':function(_0x242dc1,_0x4ec3fa){return _0x242dc1(_0x4ec3fa);},'xTRAB':function(_0xf84bc9,_0x5619cc){return _0xf84bc9 instanceof _0x5619cc;}};for(const [_0x3d22b8,_0x58f562]of sentMsgTasks){_0x24b627[_0x460149(0x120)](_0x58f562,_0x322fdf),sentMsgTasks['delete'](_0x3d22b8);}if(sendMessagePool[_0x322fdf[_0x460149(0x125)]]){const _0x20728d=sendMessagePool[_0x322fdf[_0x460149(0x125)]]?.(_0x322fdf);_0x24b627[_0x460149(0x111)](_0x20728d,Promise)&&_0x20728d[_0x460149(0x123)]()['catch'](logError);}},msgListener[_0x219883(0x106)]=_0x22d951=>{const _0x565e13=_0x219883,_0x2cd24d={'okOch':function(_0x828fb4,_0xd2d120){return _0x828fb4 instanceof _0xd2d120;},'rwMiR':function(_0x2900ed,_0xe6a50a){return _0x2900ed(_0xe6a50a);}};_0x22d951[_0x565e13(0x101)](_0x2c1a89=>{const _0xf02909=_0x565e13;new Promise((_0x3c5a65,_0xd59f20)=>{const _0x257a2b=_0x1d68;for(const _0x2f4e7b in sendSuccessCBMap){const _0x5d7f1f=sendSuccessCBMap[_0x2f4e7b],_0x240f70=_0x5d7f1f(_0x2c1a89),_0x314d45=_0x4d8147=>{_0x4d8147&&delete sendSuccessCBMap[_0x2f4e7b];};_0x2cd24d[_0x257a2b(0x145)](_0x240f70,Promise)?_0x240f70[_0x257a2b(0x123)](_0x314d45):_0x2cd24d[_0x257a2b(0xfb)](_0x314d45,_0x240f70);}})[_0xf02909(0x123)]()[_0xf02909(0x113)](log);});},setTimeout(()=>{const _0x2ecbe3=_0x219883;napCatCore[_0x2ecbe3(0x103)](()=>{const _0x3ae62b=_0x2ecbe3;napCatCore[_0x3ae62b(0x104)](msgListener);});},0x64);export class NTQQMsgApi{static async[_0x219883(0x10d)](_0xde14de,_0xb58ebb,_0x31bc52,_0x3ceae7=!![]){const _0x3f7ece=_0x219883;return _0x31bc52=_0x31bc52[_0x3f7ece(0x126)](),napCatCore['session'][_0x3f7ece(0x13f)]()[_0x3f7ece(0x10a)](_0xde14de,_0xb58ebb,_0x31bc52,_0x31bc52[_0x3f7ece(0x139)]>0x3?'2':'1',_0x3ceae7);}static async[_0x219883(0x13c)](_0x23f196,_0x50245a,_0x3881b3){const _0x294efe=_0x219883;return napCatCore[_0x294efe(0x144)][_0x294efe(0x13f)]()['getMultiMsg'](_0x23f196,_0x50245a,_0x3881b3);}static async[_0x219883(0x10b)](_0xd02e20,_0x336695){const _0x56d25d=_0x219883;return await napCatCore[_0x56d25d(0x144)][_0x56d25d(0x13f)]()[_0x56d25d(0x10b)](_0xd02e20,_0x336695);}static async[_0x219883(0x128)](_0x1424a1,_0x1460e7,_0xb0186b,_0x16656a,_0x42b1ec){const _0x4f81f6=_0x219883;return await napCatCore[_0x4f81f6(0x144)][_0x4f81f6(0x13f)]()[_0x4f81f6(0x128)](_0x1424a1,_0x1460e7,_0xb0186b,_0x16656a,_0x42b1ec);}static async[_0x219883(0x109)](_0x5582cc){}static async[_0x219883(0x116)](_0x323dd8){}static async[_0x219883(0x12d)](_0x2756f5){const _0x5c3edb=_0x219883;return napCatCore['session'][_0x5c3edb(0x13f)]()[_0x5c3edb(0x12d)](_0x2756f5);}static async['getGroupFileList'](_0x12a150,_0x6561dc){const _0x484d36={'IUjFG':function(_0x388aad,_0x950175){return _0x388aad(_0x950175);},'CpCrk':function(_0x3b6c6f,_0x2d6369,_0x2341a7){return _0x3b6c6f(_0x2d6369,_0x2341a7);},'ANSNT':function(_0x15f70e){return _0x15f70e();}};return new Promise(async(_0x284304,_0x2cb96b)=>{const _0x46aef0=_0x1d68,_0x3f3c97={'KGJzJ':_0x46aef0(0x131)};let _0x61dd63=![];_0x484d36[_0x46aef0(0x11f)](setTimeout,()=>{const _0x33b5fe=_0x46aef0;!_0x61dd63&&_0x2cb96b(_0x3f3c97[_0x33b5fe(0x124)]);},0x1388);const _0x26f712=_0x4cc7d4=>{const _0x183540=_0x46aef0;_0x61dd63=!![],_0x484d36[_0x183540(0x13d)](_0x284304,_0x4cc7d4['item']);};GroupFileInfoUpdateTasks[_0x46aef0(0xfd)](_0x484d36[_0x46aef0(0x137)](randomUUID),_0x26f712),await napCatCore['session'][_0x46aef0(0x112)]()['getGroupFileList'](_0x12a150,_0x6561dc);});}static async[_0x219883(0x114)](_0x451377,_0xd39960,_0x1471dc){const _0x11548f=_0x219883;return napCatCore[_0x11548f(0x144)]['getMsgService']()[_0x11548f(0x107)](_0x451377,_0xd39960,_0x1471dc,!![]);}static async['fetchRecentContact'](){}static async[_0x219883(0x11b)](_0x5d1f6c,_0x2e6c3e){const _0xa85e36=_0x219883;await napCatCore[_0xa85e36(0x144)][_0xa85e36(0x13f)]()[_0xa85e36(0x11b)]({'chatType':_0x5d1f6c[_0xa85e36(0x130)],'peerUid':_0x5d1f6c['peerUid']},_0x2e6c3e);}static async[_0x219883(0x147)](_0x1c3ecf,_0x1bcb70,_0x2ea40c=!![],_0x28e256=0x2710){const _0x1e0139=_0x219883,_0x35d42a={'XEItL':_0x1e0139(0x12f),'mYJMm':function(_0x2e79ff,_0x1128c3){return _0x2e79ff(_0x1128c3);},'ZmXiN':function(_0x414cae){return _0x414cae();},'dGYep':function(_0x3513cc,_0x5973c9){return _0x3513cc===_0x5973c9;},'KiBAy':function(_0x1e5832,_0x3334ac){return _0x1e5832(_0x3334ac);},'lXJvM':function(_0x48e5f0){return _0x48e5f0();}},_0x1ec357=_0x1c3ecf[_0x1e0139(0x125)];let _0xcbb3d0=0x0;const _0x5550d4=async()=>{const _0x30a619=_0x1e0139;if(_0xcbb3d0>_0x28e256)throw _0x35d42a[_0x30a619(0x135)];const _0x4614dd=sendMessagePool[_0x1c3ecf[_0x30a619(0x125)]];if(_0x4614dd)return await _0x35d42a['mYJMm'](sleep,0x1f4),_0xcbb3d0+=0x1f4,await _0x35d42a[_0x30a619(0x13e)](_0x5550d4);else return;};return await _0x35d42a[_0x1e0139(0x110)](_0x5550d4),new Promise((_0xdf01b4,_0x3b6b35)=>{const _0x57a4df=_0x1e0139,_0x4bd77d={'xsjaI':function(_0x4ce1ed,_0x48b6b5){const _0x3b7c3f=_0x1d68;return _0x35d42a[_0x3b7c3f(0x10f)](_0x4ce1ed,_0x48b6b5);},'JCbUz':function(_0x16c02d,_0x34f175){const _0x34fa28=_0x1d68;return _0x35d42a[_0x34fa28(0x134)](_0x16c02d,_0x34f175);},'kdaZY':_0x35d42a['XEItL']};let _0x502604=![],_0x22f520=null;const _0x17ff46=_0x35d42a['lXJvM'](randomUUID);sendSuccessCBMap[_0x17ff46]=_0x31b057=>{const _0x117b36=_0x1d68;if(_0x4bd77d[_0x117b36(0x146)](_0x31b057['msgId'],_0x22f520?.[_0x117b36(0x136)])){if(_0x4bd77d[_0x117b36(0x146)](_0x31b057[_0x117b36(0x122)],0x2))return delete sendSuccessCBMap[_0x17ff46],_0x502604=!![],_0x4bd77d['JCbUz'](_0xdf01b4,_0x31b057),!![];return![];}return![];},sendMessagePool[_0x1ec357]=async _0x36b36f=>{delete sendMessagePool[_0x1ec357],_0x22f520=_0x36b36f;},setTimeout(()=>{const _0x1a19f4=_0x1d68;if(_0x502604)return;delete sendMessagePool[_0x1ec357],delete sendSuccessCBMap[_0x17ff46],_0x4bd77d['JCbUz'](_0x3b6b35,_0x4bd77d[_0x1a19f4(0x140)]);},_0x28e256);const _0x14f710=napCatCore['session'][_0x57a4df(0x13f)]()[_0x57a4df(0x147)]('0',_0x1c3ecf,_0x1bcb70,new Map());});}static async[_0x219883(0x132)](_0x7232a3,_0x3e822a,_0x1ebfe7){const _0x49d4a6=_0x219883;return napCatCore[_0x49d4a6(0x144)]['getMsgService']()[_0x49d4a6(0x132)](_0x1ebfe7,_0x7232a3,[_0x3e822a],new Map());}static async[_0x219883(0x121)](_0x4aa339,_0x3f9b3f,_0x1639b1){const _0xb066c2=_0x219883,_0x415587={'GQbNB':function(_0x4b35a3,_0x2bf182){return _0x4b35a3!=_0x2bf182;},'JykCr':_0xb066c2(0x138),'ORNsd':function(_0x16e862,_0x59e70c){return _0x16e862(_0x59e70c);},'MJjHG':_0xb066c2(0x12c),'gpzui':function(_0x52fc4d){return _0x52fc4d();},'BexFj':function(_0x2b9995,_0x188d78,_0xc1eb75){return _0x2b9995(_0x188d78,_0xc1eb75);}},_0x5636aa=_0x1639b1[_0xb066c2(0xfe)](_0x53c980=>{const _0x47ae02=_0xb066c2;return{'msgId':_0x53c980,'senderShowName':selfInfo[_0x47ae02(0x13b)]};});return new Promise((_0x21b5c0,_0x11ab3c)=>{const _0x235e52=_0xb066c2,_0x12fa49={'CSvmB':function(_0x45e960,_0xa2c184){const _0x4eb0f8=_0x1d68;return _0x415587[_0x4eb0f8(0x141)](_0x45e960,_0xa2c184);},'jXWxL':_0x415587['JykCr'],'wIIiL':function(_0x44f407,_0x4b1286){return _0x44f407==_0x4b1286;},'CWTzU':function(_0x2cf125,_0x34e4c2){return _0x2cf125(_0x34e4c2);},'NjCZk':function(_0x21e4e,_0x55f5d7){return _0x415587['ORNsd'](_0x21e4e,_0x55f5d7);},'hZyDf':_0x415587['MJjHG']};let _0xd9340e=![];const _0x3563ac=_0x194631=>{const _0xdd8c2d=_0x1d68,_0x388354=_0x194631[_0xdd8c2d(0x11c)]['find'](_0x2b59d9=>_0x2b59d9[_0xdd8c2d(0x102)]);if(!_0x388354)return;const _0x51adcf=JSON[_0xdd8c2d(0x12e)](_0x388354[_0xdd8c2d(0x102)]['bytesData']);if(_0x12fa49[_0xdd8c2d(0x148)](_0x51adcf[_0xdd8c2d(0x119)],_0x12fa49['jXWxL']))return;_0x12fa49[_0xdd8c2d(0x105)](_0x194631[_0xdd8c2d(0x125)],_0x3f9b3f[_0xdd8c2d(0x125)])&&_0x194631[_0xdd8c2d(0x11e)]==selfInfo[_0xdd8c2d(0x11d)]&&(_0xd9340e=!![],_0x12fa49['CWTzU'](_0x21b5c0,_0x194631));};sentMsgTasks[_0x235e52(0xfd)](_0x415587['gpzui'](randomUUID),_0x3563ac),_0x415587[_0x235e52(0x143)](setTimeout,()=>{const _0x271f88=_0x235e52;!_0xd9340e&&_0x12fa49[_0x271f88(0xff)](_0x11ab3c,_0x12fa49[_0x271f88(0x12a)]);},0x1388),napCatCore[_0x235e52(0x144)]['getMsgService']()[_0x235e52(0x13a)](_0x5636aa,_0x4aa339,_0x3f9b3f,[],new Map());});}}