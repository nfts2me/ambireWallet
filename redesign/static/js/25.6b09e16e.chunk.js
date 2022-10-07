(this["webpackJsonpambire-wallet"]=this["webpackJsonpambire-wallet"]||[]).push([[25],{1543:function(e,t,n){var r=n(2),a=n(177),s=n(55).ethers,i=["function isValidSignature(bytes32 hash, bytes signature) view returns (bytes4)"],c=function(){var e=a(r.mark((function e(t){var n,a,i,c,d,y,l;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.provider,a=t.signer,i=t.message,c=t.typedData,d=t.finalDigest,y=t.signature,l=t.undeployedCallback,!i){e.next=5;break}d=s.utils.hashMessage(i),e.next=13;break;case 5:if(!c){e.next=11;break}if(c.domain&&c.types&&c.message){e.next=8;break}throw Error("Missing one or more properties for typedData (domain, types, message)");case 8:d=s.utils._TypedDataEncoder.hash(c.domain,c.types,c.message),e.next=13;break;case 11:if(d){e.next=13;break}throw Error("Missing one of the properties: message, unPrefixedMessage, typedData or finalDigest");case 13:if(!o(u(d,y),a)){e.next=15;break}return e.abrupt("return",!0);case 15:return e.next=17,p(n,a,d,y);case 17:if(e.t0=e.sent,"0x1626ba7e"!==e.t0){e.next=20;break}return e.abrupt("return",!0);case 20:if(!l){e.next=29;break}if(e.prev=21,!l(a,d,y)){e.next=24;break}return e.abrupt("return",!0);case 24:e.next=29;break;case 26:throw e.prev=26,e.t1=e.catch(21),new Error("undeployedCallback error: "+e.t1.message);case 29:return e.abrupt("return",!1);case 30:case"end":return e.stop()}}),e,null,[[21,26]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e,t){try{return s.utils.recoverAddress(e,t)}catch(n){return!1}},o=function(e,t){if(!1===e)return!1;if(!s.utils.isAddress(e))throw new Error("Invalid recovered address: "+e);return e.toLowerCase()===t.toLowerCase()},p=function(){var e=a(r.mark((function e(t,n,a,c){var u,o,p;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=s.providers.Provider.isProvider(t)?t:new s.providers.Web3Provider(t),e.next=3,u.getCode(n);case 3:if(!(o=e.sent)||"0x"===o){e.next=7;break}return p=new s.Contract(n,i,u),e.abrupt("return",p.isValidSignature(a,c));case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}();e.exports={verifyMessage:c}},1544:function(e,t,n){"use strict";t.a=["https://snapshot.org","https://guild.xyz","https://sudoswap.xyz","https://evm-sigtools.ambire.com","https://app.swappin.gifts"]},1609:function(e,t,n){"use strict";var r=n(2),a=n.n(r),s=n(12),i=n(9),c=n(537),u=n(106),o=n(21),p=n(3),d=n(1543),y=n(146),l=n(73),f=n(50),m=n(214);function b(e){return Object(o.isHexString)(e)?Object(o.arrayify)(e):Object(o.toUtf8Bytes)(e)}var g=function(e){var t,n,r=e.fetch,g=e.account,h=e.everythingToSign,v=e.relayerURL,x=e.addToast,k=e.resolve,w=e.onConfirmationCodeRequired,T=e.onLastMessageSign,M=e.getHardwareWallet,A=Object(p.useState)(!1),S=Object(i.a)(A,2),O=S[0],j=S[1],E=Object(p.useState)(null),I=Object(i.a)(E,2),L=I[0],D=I[1],N=Object(p.useState)(null),C=Object(i.a)(N,2),P=C[0],B=C[1],R=Object(p.useState)(null),q=Object(i.a)(R,2),_=q[0],U=q[1],Q=Object(p.useState)(null),G=Object(i.a)(Q,2),F=G[0],H=G[1],V=Object(p.useMemo)((function(){return h[0]||{}}),[h]),W=V.chainId,J=-1!==["eth_signTypedData_v4","eth_signTypedData"].indexOf(null===V||void 0===V?void 0:V.type);if(J){n=V.txn;try{n.startsWith("{")&&(n=JSON.parse(V.txn))}catch(oe){n=V.txn}if("object"===typeof n&&null!==n)try{var z,K,X,Y,Z,$,ee,te;if(null===(z=n)||void 0===z||null===(K=z.types)||void 0===K?void 0:K.EIP712Domain)null===($=n)||void 0===$||(null===(ee=$.types)||void 0===ee||delete ee.EIP712Domain);if(o._TypedDataEncoder.hash(null===(X=n)||void 0===X?void 0:X.domain,n.types,null===(Y=n)||void 0===Y?void 0:Y.message),null===(Z=n.domain)||void 0===Z?void 0:Z.chainId)W=null===(te=n.domain)||void 0===te?void 0:te.chainId}catch(pe){t=".txn has Invalid TypedData object. Should be {domain, types, message}"}else t=".txn should be a TypedData object"}var ne,re=(ne=W)?f.b.find((function(e){return e.chainId===parseInt(ne.toString(),10)})):null,ae=Object(p.useCallback)(Object(s.a)(a.a.mark((function e(){var t,n,s,i,u,p,d,f,b,h,v,x,k,w;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(re){e.next=2;break}return e.abrupt("return");case 2:return s=new c.Bundle({network:null===re||void 0===re?void 0:re.id,identity:null===g||void 0===g?void 0:g.id,signer:null===g||void 0===g?void 0:g.signer}),e.next=5,Object(m.a)(null===re||void 0===re?void 0:re.id);case 5:i=e.sent,(null===g||void 0===g||null===(t=g.signer)||void 0===t?void 0:t.quickAccManager)?(h=y.a.quickAccTimelock,v=[h,null===g||void 0===g||null===(d=g.signer)||void 0===d?void 0:d.one,null===g||void 0===g||null===(f=g.signer)||void 0===f?void 0:f.two],x=new o.AbiCoder,p=Object(o.keccak256)(x.encode(["tuple(uint, address, address)"],[v])),u=null===(b=g.signer)||void 0===b?void 0:b.quickAccManager):u=null===(k=g.signer)||void 0===k?void 0:k.address,w={method:"eth_call",params:[{to:s.identity,data:"0xc066a5b1000000000000000000000000".concat(u.toLowerCase().substring(2))},"latest"],id:1,jsonrpc:"2.0"},Object(l.b)(r,null===i||void 0===i||null===(n=i.connection)||void 0===n?void 0:n.url,w).then((function(e){var t;e.result&&"0x"!==e.result?(D(!0),(null===g||void 0===g||null===(t=g.signer)||void 0===t?void 0:t.quickAccManager)?B(e.result===p):"0x0000000000000000000000000000000000000000000000000000000000000001"===e.result?B(!0):B(!1)):D(!1)})).catch((function(e){U(e.message)}));case 9:case"end":return e.stop()}}),e)}))),[g,re,r]);Object(p.useEffect)((function(){ae()}),[ae]);var se=Object(p.useCallback)((function(e){var t;e&&e.message.includes("must provide an Ethereum address")?x("Signing error: not connected with the correct address. Make sure you're connected with ".concat(null===(t=g.signer)||void 0===t?void 0:t.address,"."),{error:!0}):x("Signing error: ".concat(e.message||e),{error:!0})}),[g,x]),ie=Object(p.useCallback)((function(e,t,r){var a=Object(m.a)(r);return Object(d.verifyMessage)({provider:a,signer:g.id,message:J?null:b(e.txn),typedData:J?n:null,signature:t}).then((function(t){t?x("".concat(e.type," SIGNATURE VALID")):x("".concat(e.type," SIGNATURE INVALID"),{error:!0})})).catch((function(t){x("".concat(e.type," SIGNATURE INVALID: ").concat(t.message),{error:!0})}))}),[g,x,n,J]),ce=Object(p.useCallback)(function(){var e=Object(s.a)(a.a.mark((function e(t){var s,i,o,p,d,y,f,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=3;break}return x("Email/pass accounts not supported without a relayer connection",{error:!0}),e.abrupt("return");case 3:if(t.password){e.next=6;break}return x("Password required to unlock the account",{error:!0}),e.abrupt("return");case 6:return j(!0),e.prev=7,e.next=10,Object(l.b)(r,"".concat(v,"/second-key/").concat(g.id,"/ethereum/sign").concat(J?"?typedData=true":""),{toSign:V.txn,code:(null===(s=t.code)||void 0===s?void 0:s.length)?t.code:void 0});case 10:if(i=e.sent,o=i.signature,p=i.success,d=i.message,y=i.confCodeRequired,p){e.next=24;break}if(j(!1),d){e.next=19;break}throw new Error("Secondary key: no success but no error message");case 19:return d.includes("invalid confirmation code")&&x("Unable to sign: wrong confirmation code",{error:!0}),x("Second signature error: ".concat(d),{error:!0}),H(null),j(!1),e.abrupt("return");case 24:if(!y){e.next=31;break}if(H(y),!w){e.next=29;break}return e.next=29,w(y,ce);case 29:return j(!1),e.abrupt("return");case 31:if(g.primaryKeyBackup){e.next=33;break}throw new Error("No key backup found: you need to import the account from JSON or login again.");case 33:return e.next=35,u.Wallet.fromEncryptedJson(JSON.parse(g.primaryKeyBackup),t.password);case 35:return f=e.sent,e.next=38,J?Object(c.signMessage712)(f,g.id,g.signer,n.domain,n.types,n.message,o):Object(c.signMessage)(f,g.id,g.signer,b(V.txn),o);case 38:return m=e.sent,e.next=41,ie(V,m,null===re||void 0===re?void 0:re.id);case 41:k({success:!0,result:m}),x("Successfully signed!"),1===h.length&&T&&T(),e.next=49;break;case 46:e.prev=46,e.t0=e.catch(7),se(e.t0);case 49:j(!1);case 50:case"end":return e.stop()}}),e,null,[[7,46]])})));return function(t){return e.apply(this,arguments)}}(),[g,x,n,h,r,se,J,w,T,v,re,k,V,ie]),ue=Object(p.useCallback)(function(){var e=Object(s.a)(a.a.mark((function e(t,r){var s,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(s=g.signer)||void 0===s?void 0:s.quickAccManager)){e.next=4;break}return e.next=3,ce(t);case 3:return e.abrupt("return");case 4:return j(!0),e.prev=5,e.next=8,M(r);case 8:if(i=e.sent){e.next=11;break}return e.abrupt("return");case 11:return e.next=13,"eth_signTypedData_v4"===V.type||"eth_signTypedData"===V.type?Object(c.signMessage712)(i,g.id,g.signer,n.domain,n.types,n.message):Object(c.signMessage)(i,g.id,g.signer,b(V.txn));case 13:return u=e.sent,e.next=16,ie(V,u,null===re||void 0===re?void 0:re.id);case 16:k({success:!0,result:u}),x("Successfully signed!"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),se(e.t0);case 23:j(!1);case 24:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(t,n){return e.apply(this,arguments)}}(),[g,x,ce,n,M,se,null===re||void 0===re?void 0:re.id,k,V,ie]);return{approve:ue,approveQuickAcc:ce,toSign:V,isLoading:O,hasPrivileges:P,hasProviderError:_,typeDataErr:t,isDeployed:L,dataV4:n,requestedNetwork:re,requestedChainId:W,isTypedData:J,confirmationType:F}};t.a=g},497:function(e,t,n){(function(t){var r=n(496).BN;function a(e){if("string"!==typeof e||42!==e.length||!e.startsWith("0x"))throw new Error("invalid address: must start with a 0x and be 42 characters long");return e}function s(e){if("string"===typeof e&&e.startsWith("0x")&&66===e.length)return t.from(e.slice(2),"hex");if(32!==e.length||!t.isBuffer(e))throw new Error("32 byte Buffer expected");return e}e.exports={Uint256:function(e){var t=new r(e,10);if(t.isNeg())throw new Error("uint256 expected, negative number given");return t},Bytes32:s,Address:a,Bytes:function(e){if("string"===typeof e&&e.startsWith("0x"))return t.from(e.slice(2),"hex");if(!t.isBuffer(e))throw new Error("Buffer expected");return e},Bytes32Array:function(e,t){return(-1===t||void 0===t||e.length===t)&&e.map((function(e){return s(e)}))},Channel:function(e){return a(e.leader),a(e.follower),a(e.guardian),a(e.tokenAddr),s(e.nonce),e}}}).call(this,n(28).Buffer)},537:function(e,t,n){var r=n(324),a=n(2),s=n(177),i=n(55).utils,c=i.AbiCoder,u=i.hexlify,o=i.arrayify,p=i.keccak256,d=i.Interface,y=n(55),l=y.Contract,f=y.BigNumber,m=n(497),b=n(327),g=n(538),h=new d(b);function v(e){return this.identity=m.Address(e.identity),this.network=e.network,this.signer=e.signer,this.txns=e.txns,this.gasLimit=e.gasLimit,this.nonce=e.nonce,this.signature=e.signature,this.minFeeInUSDPerGas=e.minFeeInUSDPerGas,this.recoveryMode=e.recoveryMode,this.meta=e.meta,this.gasTankFee=e.gasTankFee,this}v.prototype.getNonce=function(){var e=s(a.mark((function e(t){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t,this);case 2:return this.nonce=e.sent,e.abrupt("return",this.nonce);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),v.prototype.estimate=function(){var e=s(a.mark((function e(t){var n,s,i,c,u,o,p;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.fetch,s=t.relayerURL,i=t.replacing,c=t.getNextNonce,u=t.gasTank,o=Object.fromEntries(Object.entries({getNextNonce:c,gasTank:u}).filter((function(e){var t=r(e,2);t[0];return t[1]}))),e.next=4,D(n,"".concat(s,"/identity/").concat(this.identity,"/").concat(this.network,"/estimate?").concat(new URLSearchParams(o).toString()),{txns:this.txns,signer:this.signer,replacing:i,minFeeInUSDPerGas:this.minFeeInUSDPerGas});case 4:return p=e.sent,this.gasLimit=p.gasLimit,e.abrupt("return",p);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),v.prototype.sign=function(){var e=s(a.mark((function e(t,n){var r,s,i;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!isNaN(this.nonce)){e.next=2;break}throw new Error("nonce is not set");case 2:if(!isNaN(this.gasLimit)){e.next=4;break}throw new Error("gasLimit is not set");case 4:return r=T(this,n),s=o(p(r)),e.next=8,S(t,s);case 8:return i=e.sent,this.signature=i,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}(),v.prototype.submit=function(){var e=s(a.mark((function e(t){var n,r,s;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.fetch,r=t.relayerURL,e.next=3,D(n,"".concat(r,"/identity/").concat(this.identity,"/").concat(this.network,"/submit"),{nonce:this.nonce,signer:this.signer,txns:this.txns,gasLimit:this.gasLimit,signature:this.signature,signatureTwo:this.signatureTwo,meta:this.meta,gasTankFee:this.gasTankFee});case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),v.prototype.cancel=function(){var e=s(a.mark((function e(t){var n,r,s;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.fetch,r=t.relayerURL,e.next=3,D(n,"".concat(r,"/identity/").concat(this.identity,"/").concat(this.network,"/cancel"),{nonce:this.nonce,signer:this.signer});case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}();var x=/gas required exceeds allowance|always failing transaction|execution reverted/;function k(){return(k=s(a.mark((function e(t,n,r,s,i){var u,o,p,d;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.address){e.next=2;break}return e.abrupt("return",S(t,s,!0));case 2:if(!r.quickAccManager){e.next=10;break}return e.next=5,S(t,s,!0);case 5:return u=e.sent,o=new c,p=o.encode(["uint","bytes","bytes"],[r.timelock,u,i]),d="".concat(p+o.encode(["address"],[r.quickAccManager]).slice(2),"02"),e.abrupt("return",d);case 10:throw new Error("invalid signer object");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=s(a.mark((function e(t,n,r,s,i,u,o){var p,d,y,l;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.address){e.next=2;break}return e.abrupt("return",j(t,s,i,u));case 2:if(!r.quickAccManager){e.next=10;break}return e.next=5,j(t,s,i,u);case 5:return p=e.sent,d=new c,y=d.encode(["uint","bytes","bytes"],[r.timelock,p,o]),l="".concat(y+d.encode(["address"],[r.quickAccManager]).slice(2),"02"),e.abrupt("return",l);case 10:throw new Error("invalid signer object");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){var n=new c,r=e.signer;if(r.address)return n.encode(["address","uint","uint","tuple(address, uint, bytes)[]"],[e.identity,M(e.network),e.nonce,e.txns]);if(r.quickAccManager){var a=p(n.encode(["tuple(uint, address, address)"],[[e.signer.timelock,e.signer.one,e.signer.two]]));return n.encode(["address","uint","address","bytes32","uint","tuple(address, uint, bytes)[]","bool"],[r.quickAccManager,M(e.network),e.identity,a,e.nonce,e.txns,!t])}throw new Error("invalid signer object")}function M(e){if("ethereum"===e)return 1;if("polygon"===e)return 137;if("binance-smart-chain"===e)return 56;if("bsc"===e)return 56;if("fantom"===e)return 250;if("avalanche"===e)return 43114;if("arbitrum"===e)return 42161;if("moonbeam"===e)return 1284;if("moonriver"===e)return 1285;if("gnosis"===e)return 100;if("kucoin"===e)return 321;if("andromeda"===e)return 1088;if("cronos"===e)return 25;if("aurora"===e)return 1313161554;if("rinkeby"===e)return 4;if("optimism"===e)return 10;throw new Error("unsupported network ".concat(e))}function A(e){var t=o(e);return t[64]<27&&(t[64]+=27),u(t)}function S(e,t){return O.apply(this,arguments)}function O(){return O=s(a.mark((function e(t,n){var r,s=arguments;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>2&&void 0!==s[2]&&s[2],e.t0="",e.t1=A,e.next=5,t.signMessage(n);case 5:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.abrupt("return",e.t0.concat.call(e.t0,e.t3).concat(r?"00":"01"));case 8:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function j(e,t,n,r){return E.apply(this,arguments)}function E(){return(E=s(a.mark((function e(t,n,r,s){var i;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._signTypedData(n,r,s);case 2:return i=e.sent,e.abrupt("return","".concat(A(i),"00"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return L.apply(this,arguments)}function L(){return(L=s(a.mark((function e(t,n){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n.signer.quickAccManager){e.next=7;break}return e.next=4,new l(n.signer.quickAccManager,g,t).nonces(n.identity);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,new l(n.identity,b,t).nonce();case 9:e.t0=e.sent;case 10:return e.abrupt("return",e.t0.toNumber());case 13:if(e.prev=13,e.t1=e.catch(0),e.t2="CALL_EXCEPTION"===e.t1.code,!e.t2){e.next=21;break}return e.next=19,t.getCode(n.identity);case 19:e.t3=e.sent,e.t2="0x"===e.t3;case 21:if(!e.t2){e.next=23;break}return e.abrupt("return",0);case 23:throw e.t1;case 24:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function D(e,t,n){return N.apply(this,arguments)}function N(){return(N=s(a.mark((function e(t,n,r){var s;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n,{headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify(r)});case 2:return s=e.sent,e.abrupt("return",s.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}v.prototype.estimateNoRelayer=function(){var e=s(a.mark((function e(t){var n,r,s,i,c,u,o,p,d,y,l;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.provider,r=t.replacing,s={from:this.signer.quickAccManager||this.signer.address,to:this.identity,data:h.encodeFunctionData("executeBySender",[this.txns])},i=r?"latest":"pending",e.next=5,R(n,i,s);case 5:if(c=e.sent,u=c.error,o=c.gasLimit,!u||!u.message.startsWith("execution reverted: ")){e.next=11;break}return p=u.message.slice(20),e.abrupt("return",{success:!1,message:p});case 11:if(!u){e.next=18;break}if("UNPREDICTABLE_GAS_LIMIT"===u.code||u.message.match(x)){e.next=14;break}throw u;case 14:return e.next=16,P(n,s,i);case 16:return e.t0=e.sent,e.abrupt("return",{success:!1,message:e.t0});case 18:return this.gasLimit=o.toNumber(),e.next=21,n.getFeeData();case 21:return d=e.sent,y=d.gasPrice.toNumber(),l=y*o/1e18,e.abrupt("return",{success:!0,gasLimit:this.gasLimit,gasPrice:y,feeInNative:{slow:.9*l,medium:1*l,fast:1.15*l,ape:1.4*l}});case 25:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}();var C="0x08c379a0";function P(e,t,n){return B.apply(this,arguments)}function B(){return(B=s(a.mark((function e(t,n,r){var s;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.call(n,r);case 3:return s=e.sent,e.abrupt("return",s.startsWith(C)?(new c).decode(["string"],"0x".concat(s.slice(10)))[0]:s);case 7:if(e.prev=7,e.t0=e.catch(0),"UNPREDICTABLE_GAS_LIMIT"!==e.t0.code||!e.t0.error){e.next=11;break}return e.abrupt("return",e.t0.error.message.slice(20));case 11:if("CALL_EXCEPTION"!==e.t0.code){e.next=13;break}return e.abrupt("return","no error string, possibly insufficient amount");case 13:if("INVALID_ARGUMENT"!==e.t0.code){e.next=15;break}return e.abrupt("return","unable to deserialize: ".concat(u(e.t0.value)));case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function R(e,t,n){return q.apply(this,arguments)}function q(){return(q=s(a.mark((function e(t,n,r){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.send("eth_estimateGas",[r,n]).then((function(e){return{gasLimit:f.from(e)}})).catch((function(e){return"SERVER_ERROR"===e.code?{error:e.error}:{error:e}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.exports={Bundle:v,signMessage:function(e,t,n,r,a){return k.apply(this,arguments)},signMessage712:function(e,t,n,r,a,s,i){return w.apply(this,arguments)},getSignable:T,signMsg:S,signMsg712:j}},538:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txnHash","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"accHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"signer","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"LogCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txnHash","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"accHash","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"LogExecScheduled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txnHash","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"accHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"signer","type":"address"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"indexed":false,"internalType":"struct Identity.Transaction[]","name":"txns","type":"tuple[]"}],"name":"LogScheduled","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract Identity","name":"identity","type":"address"},{"components":[{"internalType":"uint256","name":"timelock","type":"uint256"},{"internalType":"address","name":"one","type":"address"},{"internalType":"address","name":"two","type":"address"}],"internalType":"struct QuickAccManager.QuickAccount","name":"acc","type":"tuple"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Identity.Transaction[]","name":"txns","type":"tuple[]"}],"name":"cancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Identity","name":"identity","type":"address"},{"internalType":"bytes32","name":"accHash","type":"bytes32"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Identity.Transaction[]","name":"txns","type":"tuple[]"}],"name":"execScheduled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"scheduled","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract Identity","name":"identity","type":"address"},{"components":[{"internalType":"uint256","name":"timelock","type":"uint256"},{"internalType":"address","name":"one","type":"address"},{"internalType":"address","name":"two","type":"address"}],"internalType":"struct QuickAccManager.QuickAccount","name":"acc","type":"tuple"},{"components":[{"internalType":"bool","name":"isBothSigned","type":"bool"},{"internalType":"bytes","name":"one","type":"bytes"},{"internalType":"bytes","name":"two","type":"bytes"}],"internalType":"struct QuickAccManager.DualSig","name":"sigs","type":"tuple"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Identity.Transaction[]","name":"txns","type":"tuple[]"}],"name":"send","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Identity","name":"identity","type":"address"},{"components":[{"internalType":"uint256","name":"timelock","type":"uint256"},{"internalType":"address","name":"one","type":"address"},{"internalType":"address","name":"two","type":"address"}],"internalType":"struct QuickAccManager.QuickAccount","name":"acc","type":"tuple"},{"components":[{"internalType":"bytes","name":"one","type":"bytes"},{"internalType":"bytes","name":"two","type":"bytes"}],"internalType":"struct QuickAccManager.DualSigAlwaysBoth","name":"sigs","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"}],"internalType":"struct QuickAccManager.Transfer","name":"t","type":"tuple"}],"name":"sendTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Identity","name":"identity","type":"address"},{"components":[{"internalType":"uint256","name":"timelock","type":"uint256"},{"internalType":"address","name":"one","type":"address"},{"internalType":"address","name":"two","type":"address"}],"internalType":"struct QuickAccManager.QuickAccount","name":"acc","type":"tuple"},{"components":[{"internalType":"bytes","name":"one","type":"bytes"},{"internalType":"bytes","name":"two","type":"bytes"}],"internalType":"struct QuickAccManager.DualSigAlwaysBoth","name":"sigs","type":"tuple"},{"components":[{"internalType":"string","name":"description","type":"string"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct QuickAccManager.Txn[]","name":"txns","type":"tuple[]"}],"name":"sendTxns","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}}]);
//# sourceMappingURL=25.6b09e16e.chunk.js.map