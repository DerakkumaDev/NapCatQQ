const _0x1fb08f=_0x5790;(function(_0x17e3fd,_0x1c81b1){const _0x4149a2=_0x5790,_0x18ad64=_0x17e3fd();while(!![]){try{const _0x14a2a5=parseInt(_0x4149a2(0x211))/0x1*(-parseInt(_0x4149a2(0x202))/0x2)+parseInt(_0x4149a2(0x1fe))/0x3*(-parseInt(_0x4149a2(0x1f7))/0x4)+-parseInt(_0x4149a2(0x20e))/0x5+parseInt(_0x4149a2(0x20c))/0x6*(parseInt(_0x4149a2(0x1e9))/0x7)+-parseInt(_0x4149a2(0x1ed))/0x8+parseInt(_0x4149a2(0x207))/0x9+parseInt(_0x4149a2(0x1d6))/0xa;if(_0x14a2a5===_0x1c81b1)break;else _0x18ad64['push'](_0x18ad64['shift']());}catch(_0x1bcb8b){_0x18ad64['push'](_0x18ad64['shift']());}}}(_0x3a98,0x46c90));import{selfInfo}from'@/core/data';import{log,logError}from'@/common/utils/log';import{sleep}from'@/common/utils/helper';import{napCatCore}from'@/core';import{MsgListener}from'@/core/listeners';import{randomUUID}from'crypto';const sendMessagePool={},sendSuccessCBMap={},sentMsgTasks=new Map(),msgListener=new MsgListener();msgListener[_0x1fb08f(0x1e2)]=_0x11539e=>{const _0x2e5dfe=_0x1fb08f,_0x4e68c7={'wZkjZ':function(_0x59feba,_0x1eccdb){return _0x59feba(_0x1eccdb);},'LQuer':function(_0x2752ef,_0x89b592){return _0x2752ef instanceof _0x89b592;}};for(const [_0x1db115,_0x4a8a15]of sentMsgTasks){_0x4e68c7[_0x2e5dfe(0x20f)](_0x4a8a15,_0x11539e),sentMsgTasks[_0x2e5dfe(0x1fc)](_0x1db115);}if(sendMessagePool[_0x11539e[_0x2e5dfe(0x210)]]){const _0x1ed5f7=sendMessagePool[_0x11539e[_0x2e5dfe(0x210)]]?.(_0x11539e);_0x4e68c7[_0x2e5dfe(0x20d)](_0x1ed5f7,Promise)&&_0x1ed5f7[_0x2e5dfe(0x203)]()['catch'](logError);}},msgListener[_0x1fb08f(0x1ff)]=_0x34e0e7=>{const _0x1cfa54=_0x1fb08f,_0x52bab1={'rsIHb':function(_0x5f32ad,_0x107d8f){return _0x5f32ad(_0x107d8f);},'EnjjX':function(_0x47892d,_0x4437b1){return _0x47892d instanceof _0x4437b1;},'bSnNE':function(_0x52e9ae,_0x46af34){return _0x52e9ae(_0x46af34);}};_0x34e0e7[_0x1cfa54(0x1da)](_0x522088=>{const _0x44c734=_0x1cfa54;new Promise((_0x1d58f3,_0x273fb8)=>{const _0x5a43eb=_0x5790;for(const _0x40e40d in sendSuccessCBMap){const _0x48d14e=sendSuccessCBMap[_0x40e40d],_0x45989f=_0x52bab1[_0x5a43eb(0x1e0)](_0x48d14e,_0x522088),_0x209cf4=_0xa935c6=>{_0xa935c6&&delete sendSuccessCBMap[_0x40e40d];};_0x52bab1[_0x5a43eb(0x1ea)](_0x45989f,Promise)?_0x45989f[_0x5a43eb(0x203)](_0x209cf4):_0x52bab1[_0x5a43eb(0x1fb)](_0x209cf4,_0x45989f);}})[_0x44c734(0x203)]()['catch'](log);});},setTimeout(()=>{const _0x39b012=_0x1fb08f;napCatCore[_0x39b012(0x1e1)](()=>{const _0x2f1313=_0x39b012;napCatCore[_0x2f1313(0x20b)](msgListener);});},0x64);function _0x3a98(){const _0x228de0=['fetchRecentContact','8jwPfzm','then','GVfgS','WTxys','RkTKj','583173DZzYoE','yQKrW','map','mVlwm','addListener','1928154kSYRbz','LQuer','2401515SWGJTh','wZkjZ','peerUid','90703qILeiv','DvwWc','转发消息超时','senderUid','sendStatus','kInDU','setEmojiLike','recallMsg','sendMsg','Zuqjy','12995520yYWgiX','set','fyrtf','bytesData','forEach','uid','multiForwardMsgWithComment','getMultiMsg','nyqfb','getMsgsBySeqAndCount','rsIHb','onLoginSuccess','onAddSendMsg','activateChatAndGetHistory','setMsgEmojiLikes','getMsgsIncludeSelf','getMsgService','elements','app','7ACopgp','EnjjX','chatType','parse','884712JoBdXJ','setMsgRead','msgId','session','SnZQb','QUQEt','OpuhC','fxVaO','length','arkElement','44AepEyQ','nick','forwardMsg','getMsgHistory','bSnNE','delete','getMsgsByMsgId','120564UOuaBd','onMsgInfoListUpdate','find'];_0x3a98=function(){return _0x228de0;};return _0x3a98();}function _0x5790(_0x590c1d,_0x27de06){const _0x3a98ed=_0x3a98();return _0x5790=function(_0x5790a4,_0x2d33cf){_0x5790a4=_0x5790a4-0x1d6;let _0x7b9316=_0x3a98ed[_0x5790a4];return _0x7b9316;},_0x5790(_0x590c1d,_0x27de06);}export class NTQQMsgApi{static async[_0x1fb08f(0x217)](_0x26f00d,_0x2aee41,_0x1d9f3c,_0x19cc56=!![]){const _0x128637=_0x1fb08f,_0xfad979={'nyqfb':function(_0x4e116d,_0x2d96a3){return _0x4e116d>_0x2d96a3;}};return _0x1d9f3c=_0x1d9f3c['toString'](),napCatCore[_0x128637(0x1f0)][_0x128637(0x1e6)]()[_0x128637(0x1e4)](_0x26f00d,_0x2aee41,_0x1d9f3c,_0xfad979[_0x128637(0x1de)](_0x1d9f3c[_0x128637(0x1f5)],0x3)?'2':'1',_0x19cc56);}static async[_0x1fb08f(0x1dd)](_0x247174,_0x443cbf,_0x5d8bca){const _0x3bdf7c=_0x1fb08f;return napCatCore[_0x3bdf7c(0x1f0)][_0x3bdf7c(0x1e6)]()['getMultiMsg'](_0x247174,_0x443cbf,_0x5d8bca);}static async[_0x1fb08f(0x1fd)](_0x1398fe,_0x43db29){const _0x2b28d7=_0x1fb08f;return await napCatCore[_0x2b28d7(0x1f0)]['getMsgService']()[_0x2b28d7(0x1fd)](_0x1398fe,_0x43db29);}static async[_0x1fb08f(0x1df)](_0xbe51d9,_0x1bec83,_0x2a0d3c,_0x4dae7d,_0x4ebe9e){const _0x146bac=_0x1fb08f;return await napCatCore['session']['getMsgService']()[_0x146bac(0x1df)](_0xbe51d9,_0x1bec83,_0x2a0d3c,_0x4dae7d,_0x4ebe9e);}static async['activateChat'](_0x2d7331){}static async[_0x1fb08f(0x1e3)](_0x428203){}static async['setMsgRead'](_0x2f7488){const _0x3f28d4=_0x1fb08f;return napCatCore[_0x3f28d4(0x1f0)][_0x3f28d4(0x1e6)]()[_0x3f28d4(0x1ee)](_0x2f7488);}static async[_0x1fb08f(0x1fa)](_0x46c03d,_0x112129,_0x42baf9){const _0x17fb85=_0x1fb08f;return napCatCore[_0x17fb85(0x1f0)][_0x17fb85(0x1e6)]()[_0x17fb85(0x1e5)](_0x46c03d,_0x112129,_0x42baf9,!![]);}static async[_0x1fb08f(0x201)](){}static async['recallMsg'](_0x28afc0,_0x213e32){const _0x55b736=_0x1fb08f;await napCatCore[_0x55b736(0x1f0)][_0x55b736(0x1e6)]()[_0x55b736(0x218)]({'chatType':_0x28afc0[_0x55b736(0x1eb)],'peerUid':_0x28afc0['peerUid']},_0x213e32);}static async[_0x1fb08f(0x219)](_0x110699,_0x274d23,_0x94026=!![],_0x31e118=0x2710){const _0xed45e5=_0x1fb08f,_0x4ad1bd={'fyrtf':function(_0x2d7783,_0x55a19a){return _0x2d7783>_0x55a19a;},'Zuqjy':'发送超时','mVlwm':function(_0x4cee38,_0x242ac9){return _0x4cee38(_0x242ac9);},'kfBtl':function(_0x30c0f5){return _0x30c0f5();},'QUQEt':function(_0x237cb0,_0x46cde4){return _0x237cb0===_0x46cde4;},'kInDU':function(_0x385296){return _0x385296();},'DvwWc':function(_0x2c27d8,_0x2ef70b,_0x366b5e){return _0x2c27d8(_0x2ef70b,_0x366b5e);},'OpuhC':function(_0x9280b4){return _0x9280b4();}},_0x91dbe4=_0x110699['peerUid'];let _0x512067=0x0;const _0x55374f=async()=>{const _0x2b0325=_0x5790;if(_0x4ad1bd[_0x2b0325(0x1d8)](_0x512067,_0x31e118))throw _0x4ad1bd[_0x2b0325(0x21a)];const _0xcdcbca=sendMessagePool[_0x110699[_0x2b0325(0x210)]];if(_0xcdcbca)return await _0x4ad1bd['mVlwm'](sleep,0x1f4),_0x512067+=0x1f4,await _0x4ad1bd['kfBtl'](_0x55374f);else return;};return await _0x4ad1bd[_0xed45e5(0x1f3)](_0x55374f),new Promise((_0x319b02,_0x472285)=>{const _0x4d0d7c=_0xed45e5,_0x3fbc44={'SnZQb':function(_0xfd2332,_0x763b24){const _0x24650f=_0x5790;return _0x4ad1bd[_0x24650f(0x1f2)](_0xfd2332,_0x763b24);},'WTxys':function(_0x5b11b3,_0xd17a6){return _0x4ad1bd['QUQEt'](_0x5b11b3,_0xd17a6);},'SNGrp':function(_0x20bb4b,_0x7cfcdd){return _0x20bb4b(_0x7cfcdd);}};let _0x39e4ed=![],_0xcfcf0a=null;const _0x3f40d6=_0x4ad1bd[_0x4d0d7c(0x216)](randomUUID);sendSuccessCBMap[_0x3f40d6]=_0x44e030=>{const _0x1502fb=_0x4d0d7c;if(_0x3fbc44[_0x1502fb(0x1f1)](_0x44e030[_0x1502fb(0x1ef)],_0xcfcf0a?.['msgId'])){if(_0x3fbc44[_0x1502fb(0x205)](_0x44e030[_0x1502fb(0x215)],0x2))return delete sendSuccessCBMap[_0x3f40d6],_0x39e4ed=!![],_0x3fbc44['SNGrp'](_0x319b02,_0x44e030),!![];return![];}return![];},sendMessagePool[_0x91dbe4]=async _0x219494=>{delete sendMessagePool[_0x91dbe4],_0xcfcf0a=_0x219494;},_0x4ad1bd[_0x4d0d7c(0x212)](setTimeout,()=>{const _0x4a31a5=_0x4d0d7c;if(_0x39e4ed)return;delete sendMessagePool[_0x91dbe4],delete sendSuccessCBMap[_0x3f40d6],_0x4ad1bd[_0x4a31a5(0x20a)](_0x472285,_0x4ad1bd[_0x4a31a5(0x21a)]);},_0x31e118);const _0x5ac267=napCatCore[_0x4d0d7c(0x1f0)][_0x4d0d7c(0x1e6)]()['sendMsg']('0',_0x110699,_0x274d23,new Map());});}static async[_0x1fb08f(0x1f9)](_0x3ba767,_0x22b2b0,_0x356045){const _0x189c77=_0x1fb08f;return napCatCore[_0x189c77(0x1f0)][_0x189c77(0x1e6)]()[_0x189c77(0x1f9)](_0x356045,_0x3ba767,[_0x22b2b0],new Map());}static async['multiForwardMsg'](_0x114a36,_0x5d633c,_0x444cb3){const _0xd81534=_0x1fb08f,_0x3521eb={'mbIrR':function(_0x26be0a,_0x51555f){return _0x26be0a==_0x51555f;},'RkTKj':function(_0x43e2c3,_0x35a55e){return _0x43e2c3==_0x35a55e;},'GVfgS':function(_0x508775,_0x31f3cf){return _0x508775(_0x31f3cf);},'KQbSv':function(_0x35b7bb,_0x36b944){return _0x35b7bb(_0x36b944);},'fxVaO':function(_0x53380e,_0xe5bfdd,_0x10f496){return _0x53380e(_0xe5bfdd,_0x10f496);}},_0xc17f0a=_0x444cb3[_0xd81534(0x209)](_0x17a8a1=>{const _0x1b55a2=_0xd81534;return{'msgId':_0x17a8a1,'senderShowName':selfInfo[_0x1b55a2(0x1f8)]};});return new Promise((_0x373ec7,_0x4623da)=>{const _0x38c801=_0xd81534,_0x482d77={'yQKrW':function(_0x17993a,_0x37af31){return _0x3521eb['KQbSv'](_0x17993a,_0x37af31);}};let _0x2f586c=![];const _0x10cfe8=_0x1329a4=>{const _0x484fbc=_0x5790,_0x1c8831=_0x1329a4[_0x484fbc(0x1e7)][_0x484fbc(0x200)](_0x310234=>_0x310234[_0x484fbc(0x1f6)]);if(!_0x1c8831)return;const _0x30ab44=JSON[_0x484fbc(0x1ec)](_0x1c8831[_0x484fbc(0x1f6)][_0x484fbc(0x1d9)]);if(_0x30ab44[_0x484fbc(0x1e8)]!='com.tencent.multimsg')return;_0x3521eb['mbIrR'](_0x1329a4[_0x484fbc(0x210)],_0x5d633c[_0x484fbc(0x210)])&&_0x3521eb[_0x484fbc(0x206)](_0x1329a4[_0x484fbc(0x214)],selfInfo[_0x484fbc(0x1db)])&&(_0x2f586c=!![],_0x3521eb[_0x484fbc(0x204)](_0x373ec7,_0x1329a4));};sentMsgTasks[_0x38c801(0x1d7)](randomUUID(),_0x10cfe8),_0x3521eb[_0x38c801(0x1f4)](setTimeout,()=>{const _0x2d0f12=_0x38c801;!_0x2f586c&&_0x482d77[_0x2d0f12(0x208)](_0x4623da,_0x2d0f12(0x213));},0x1388),napCatCore[_0x38c801(0x1f0)]['getMsgService']()[_0x38c801(0x1dc)](_0xc17f0a,_0x114a36,_0x5d633c,[],new Map());});}}