function _0x3c79(_0x2c7a05,_0x5a473f){const _0x9229ad=_0x9229();return _0x3c79=function(_0x3c7907,_0x5c8689){_0x3c7907=_0x3c7907-0xff;let _0x366379=_0x9229ad[_0x3c7907];return _0x366379;},_0x3c79(_0x2c7a05,_0x5a473f);}(function(_0x2e0ec4,_0x1197be){const _0x4ae9a5=_0x3c79,_0x50164e=_0x2e0ec4();while(!![]){try{const _0x2d7595=parseInt(_0x4ae9a5(0x100))/0x1+parseInt(_0x4ae9a5(0x104))/0x2*(parseInt(_0x4ae9a5(0x10a))/0x3)+-parseInt(_0x4ae9a5(0x10f))/0x4+-parseInt(_0x4ae9a5(0x115))/0x5*(parseInt(_0x4ae9a5(0x101))/0x6)+-parseInt(_0x4ae9a5(0x114))/0x7+-parseInt(_0x4ae9a5(0x10c))/0x8*(-parseInt(_0x4ae9a5(0x112))/0x9)+-parseInt(_0x4ae9a5(0x109))/0xa*(parseInt(_0x4ae9a5(0x113))/0xb);if(_0x2d7595===_0x1197be)break;else _0x50164e['push'](_0x50164e['shift']());}catch(_0x55e1cf){_0x50164e['push'](_0x50164e['shift']());}}}(_0x9229,0x4960f));import{isNumeric}from'@/common/utils/helper';import{NTQQGroupApi}from'@/core/apis';export const Credentials={'Skey':'','CreatTime':0x0};export const selfInfo={'uid':'','uin':'','nick':'','online':!![]};export const groups=new Map();export function deleteGroup(_0x2773be){groups['delete'](_0x2773be),groupMembers['delete'](_0x2773be);}export const groupMembers=new Map();export const friends=new Map();export const friendRequests={};export const groupNotifies={};export const napCatError={'ffmpegError':'','httpServerError':'','wsServerError':'','otherError':'NapCat未能正常启动，请检查日志查看错误'};export async function getFriend(_0x12ed29){const _0x206596=_0x3c79,_0x170ec1={'XFhHy':function(_0x328092,_0x2a820d){return _0x328092(_0x2a820d);}};_0x12ed29=_0x12ed29['toString']();if(_0x170ec1[_0x206596(0x116)](isNumeric,_0x12ed29)){const _0x1cdd8e=Array[_0x206596(0x106)](friends['values']());return _0x1cdd8e[_0x206596(0x10e)](_0x3f3c07=>_0x3f3c07[_0x206596(0x108)]===_0x12ed29);}else return friends[_0x206596(0xff)](_0x12ed29);}function _0x9229(){const _0x4ede86=['toString','18702KdFEXY','516296TLJCXa','1048873EMdfuN','503855WdPIKV','XFhHy','length','get','129660FnFzgZ','6OVaYOI','hGzAI','forEach','6mHHuzD','qgRAf','from','getGroups','uin','90RFEQsN','398400EiETDD','getGroupMembers','1784weqUdW','pvxzt','find','71444hpptSu','set'];_0x9229=function(){return _0x4ede86;};return _0x9229();}export async function getGroup(_0x246f2a){const _0x218411=_0x3c79;let _0x297e0c=groups['get'](_0x246f2a[_0x218411(0x111)]());if(!_0x297e0c)try{const _0x4ccd59=await NTQQGroupApi[_0x218411(0x107)]();_0x4ccd59[_0x218411(0x117)]&&_0x4ccd59[_0x218411(0x103)](_0x828aa4=>{const _0x22d81f=_0x218411;groups[_0x22d81f(0x110)](_0x828aa4['groupCode'],_0x828aa4);});}catch(_0x4265f6){return undefined;}return _0x297e0c=groups['get'](_0x246f2a[_0x218411(0x111)]()),_0x297e0c;}export async function getGroupMember(_0x383585,_0x569f1d){const _0x536a87=_0x3c79,_0x1d784b={'qgRAf':function(_0x431487,_0x446389){return _0x431487(_0x446389);},'bhOJo':function(_0x26ac82){return _0x26ac82();},'pvxzt':function(_0x48dfbb){return _0x48dfbb();}};_0x383585=_0x383585[_0x536a87(0x111)](),_0x569f1d=_0x569f1d[_0x536a87(0x111)]();let _0x52d429=groupMembers[_0x536a87(0xff)](_0x383585);if(!_0x52d429)try{_0x52d429=await NTQQGroupApi['getGroupMembers'](_0x383585),groupMembers[_0x536a87(0x110)](_0x383585,_0x52d429);}catch(_0x22027d){return null;}const _0x1a0671=()=>{const _0x3535a7=_0x536a87;let _0x147cf0=undefined;return _0x1d784b[_0x3535a7(0x105)](isNumeric,_0x569f1d)?_0x147cf0=Array[_0x3535a7(0x106)](_0x52d429['values']())['find'](_0x2b4930=>_0x2b4930['uin']===_0x569f1d):_0x147cf0=_0x52d429[_0x3535a7(0xff)](_0x569f1d),_0x147cf0;};let _0x5e5d3d=_0x1d784b['bhOJo'](_0x1a0671);return!_0x5e5d3d&&(_0x52d429=await NTQQGroupApi[_0x536a87(0x10b)](_0x383585),_0x5e5d3d=_0x1d784b[_0x536a87(0x10d)](_0x1a0671)),_0x5e5d3d;}export const uid2UinMap={};export function getUidByUin(_0x2520b5){const _0x28c6fc=_0x3c79,_0x8d75b={'hGzAI':function(_0x1848db,_0x1a5232){return _0x1848db===_0x1a5232;}};for(const _0x39e79a in uid2UinMap){if(_0x8d75b[_0x28c6fc(0x102)](uid2UinMap[_0x39e79a],_0x2520b5))return _0x39e79a;}}export const tempGroupCodeMap={};