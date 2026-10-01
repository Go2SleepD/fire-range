(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="170",jm=0,Yu=1,Zm=2,lp=1,cp=2,Pi=3,zi=0,fn=1,En=2,Fi=0,Fs=1,ti=2,Ku=3,ju=4,Jm=5,As=100,Qm=101,t0=102,e0=103,n0=104,i0=200,s0=201,r0=202,a0=203,Xc=204,qc=205,o0=206,l0=207,c0=208,h0=209,u0=210,d0=211,f0=212,p0=213,m0=214,Yc=0,Kc=1,jc=2,Er=3,Zc=4,Jc=5,Qc=6,th=7,jh=0,g0=1,v0=2,ki=0,hp=1,up=2,dp=3,fp=4,x0=5,pp=6,mp=7,gp=300,Tr=301,Ar=302,eh=303,nh=304,yl=306,Bs=1e3,Is=1001,ih=1002,An=1003,_0=1004,io=1005,hi=1006,Dl=1007,Us=1008,Bi=1009,vp=1010,xp=1011,La=1012,Zh=1013,Hs=1014,ui=1015,pi=1016,Jh=1017,Qh=1018,Cr=1020,_p=35902,yp=1021,Mp=1022,Zn=1023,bp=1024,Sp=1025,Sr=1026,Rr=1027,tu=1028,eu=1029,wp=1030,nu=1031,iu=1033,Vo=33776,Go=33777,Wo=33778,$o=33779,sh=35840,rh=35841,ah=35842,oh=35843,lh=36196,ch=37492,hh=37496,uh=37808,dh=37809,fh=37810,ph=37811,mh=37812,gh=37813,vh=37814,xh=37815,_h=37816,yh=37817,Mh=37818,bh=37819,Sh=37820,wh=37821,Xo=36492,Eh=36494,Th=36495,Ep=36283,Ah=36284,Ch=36285,Rh=36286,y0=3200,M0=3201,Tp=0,b0=1,rs="",dn="srgb",Fr="srgb-linear",Ml="linear",ue="srgb",Ys=7680,Zu=519,S0=512,w0=513,E0=514,Ap=515,T0=516,A0=517,C0=518,R0=519,Ph=35044,P0=35048,Ju="300 es",Ui=2e3,il=2001;class kr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qu=1234567;const ya=Math.PI/180,Da=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function su(i,t){return(i%t+t)%t}function L0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function D0(i,t,e){return i!==t?(e-i)/(t-i):0}function Ma(i,t,e){return(1-e)*i+e*t}function I0(i,t,e,n){return Ma(i,t,1-Math.exp(-e*n))}function U0(i,t=1){return t-Math.abs(su(i,t*2)-t)}function N0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function F0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function k0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function O0(i,t){return i+Math.random()*(t-i)}function z0(i){return i*(.5-Math.random())}function B0(i){i!==void 0&&(Qu=i);let t=Qu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function H0(i){return i*ya}function V0(i){return i*Da}function G0(i){return(i&i-1)===0&&i!==0}function W0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function X0(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const We={DEG2RAD:ya,RAD2DEG:Da,generateUUID:mi,clamp:Ge,euclideanModulo:su,mapLinear:L0,inverseLerp:D0,lerp:Ma,damp:I0,pingpong:U0,smoothstep:N0,smootherstep:F0,randInt:k0,randFloat:O0,randFloatSpread:z0,seededRandom:B0,degToRad:H0,radToDeg:V0,isPowerOfTwo:G0,ceilPowerOfTwo:W0,floorPowerOfTwo:$0,setQuaternionFromProperEuler:X0,normalize:de,denormalize:jn};class Z{constructor(t=0,e=0){Z.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],y=s[4],x=s[7],D=s[2],A=s[5],C=s[8];return r[0]=a*v+o*_+l*D,r[3]=a*m+o*y+l*A,r[6]=a*p+o*x+l*C,r[1]=c*v+h*_+u*D,r[4]=c*m+h*y+u*A,r[7]=c*p+h*x+u*C,r[2]=d*v+f*_+g*D,r[5]=d*m+f*y+g*A,r[8]=d*p+f*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Il.makeScale(t,e)),this}rotate(t){return this.premultiply(Il.makeRotation(-t)),this}translate(t,e){return this.premultiply(Il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new Yt;function Cp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function q0(){const i=sl("canvas");return i.style.display="block",i}const td={};function fa(i){i in td||(td[i]=!0,console.warn(i))}function Y0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function K0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function j0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=wr(i.r),i.g=wr(i.g),i.b=wr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rs?Ml:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ed=[.64,.33,.3,.6,.15,.06],nd=[.2126,.7152,.0722],id=[.3127,.329],sd=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rd=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[Fr]:{primaries:ed,whitePoint:id,transfer:Ml,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:nd,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:ed,whitePoint:id,transfer:ue,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:nd,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}});let Ks;class Z0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ks===void 0&&(Ks=sl("canvas")),Ks.width=t.width,Ks.height=t.height;const n=Ks.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ks}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let J0=0;class Rp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ul(s[a].image)):r.push(Ul(s[a]))}else r=Ul(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Z0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q0=0;class Ze extends kr{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Is,s=Is,r=hi,a=Us,o=Zn,l=Bi,c=Ze.DEFAULT_ANISOTROPY,h=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=mi(),this.name="",this.source=new Rp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case Is:t.x=t.x<0?0:1;break;case ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case Is:t.y=t.y<0?0:1;break;case ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=gp;Ze.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,D=(p+1)/2,A=(h+d)/4,C=(u+v)/4,P=(g+m)/4;return y>x&&y>D?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=C/n):x>D?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=P/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=C/r,s=P/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tg extends kr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends tg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pp extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eg extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const D=Math.sqrt(y),A=Math.atan2(D,p*_);m=Math.sin(m*A)/D,o=Math.sin(o*A)/D}const x=o*_;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ad.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ad.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nl=new b,ad=new hs;class gn{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),ro.subVectors(this.max,Yr),js.subVectors(t.a,Yr),Zs.subVectors(t.b,Yr),Js.subVectors(t.c,Yr),qi.subVectors(Zs,js),Yi.subVectors(Js,Zs),ds.subVectors(js,Js);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-ds.z,ds.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,ds.z,0,-ds.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-ds.y,ds.x,0];return!Fl(e,js,Zs,Js,ro)||(e=[1,0,0,0,1,0,0,0,1],!Fl(e,js,Zs,Js,ro))?!1:(ao.crossVectors(qi,Yi),e=[ao.x,ao.y,ao.z],Fl(e,js,Zs,Js,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wi=[new b,new b,new b,new b,new b,new b,new b,new b],Vn=new b,so=new gn,js=new b,Zs=new b,Js=new b,qi=new b,Yi=new b,ds=new b,Yr=new b,ro=new b,ao=new b,fs=new b;function Fl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fs.fromArray(i,r);const o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ng=new gn,Kr=new b,kl=new b;class Ga{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ng.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);const e=Kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Kr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(kl)),this.expandByPoint(Kr.copy(t.center).sub(kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new b,Ol=new b,oo=new b,Ki=new b,zl=new b,lo=new b,Bl=new b;class Lp{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ol.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(Ol);const r=t.distanceTo(e)*.5,a=-this.direction.dot(oo),o=Ki.dot(this.direction),l=-Ki.dot(oo),c=Ki.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ol).addScaledVector(oo,d),f}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,s,r){zl.subVectors(e,t),lo.subVectors(n,t),Bl.crossVectors(zl,lo);let a=this.direction.dot(Bl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,t);const l=o*this.direction.dot(lo.crossVectors(Ki,lo));if(l<0)return null;const c=o*this.direction.dot(zl.cross(Ki));if(c<0||l+c>a)return null;const h=-o*Ki.dot(Bl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),a=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ig,t,sg)}lookAt(t,e,n){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ji.crossVectors(n,xn),ji.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ji.crossVectors(n,xn)),ji.normalize(),co.crossVectors(xn,ji),s[0]=ji.x,s[4]=co.x,s[8]=xn.x,s[1]=ji.y,s[5]=co.y,s[9]=xn.y,s[2]=ji.z,s[6]=co.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],D=n[15],A=s[0],C=s[4],P=s[8],E=s[12],S=s[1],L=s[5],$=s[9],z=s[13],k=s[2],B=s[6],H=s[10],Y=s[14],W=s[3],it=s[7],pt=s[11],wt=s[15];return r[0]=a*A+o*S+l*k+c*W,r[4]=a*C+o*L+l*B+c*it,r[8]=a*P+o*$+l*H+c*pt,r[12]=a*E+o*z+l*Y+c*wt,r[1]=h*A+u*S+d*k+f*W,r[5]=h*C+u*L+d*B+f*it,r[9]=h*P+u*$+d*H+f*pt,r[13]=h*E+u*z+d*Y+f*wt,r[2]=g*A+v*S+m*k+p*W,r[6]=g*C+v*L+m*B+p*it,r[10]=g*P+v*$+m*H+p*pt,r[14]=g*E+v*z+m*Y+p*wt,r[3]=_*A+y*S+x*k+D*W,r[7]=_*C+y*L+x*B+D*it,r[11]=_*P+y*$+x*H+D*pt,r[15]=_*E+y*z+x*Y+D*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,D=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,A=e*_+n*y+s*x+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=_*C,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*C,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*C,t[4]=y*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*C,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*C,t[8]=x*C,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*C,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*C,t[12]=D*C,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*C,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,_=l*c,y=l*h,x=l*u,D=n.x,A=n.y,C=n.z;return s[0]=(1-(v+p))*D,s[1]=(f+x)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(d+p))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+y)*C,s[9]=(m-_)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qs.set(s[0],s[1],s[2]).length();const a=Qs.set(s[4],s[5],s[6]).length(),o=Qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);const c=1/r,h=1/a,u=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ui){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===Ui)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===il)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ui){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let g,v;if(o===Ui)g=(a+r)*u,v=-2*u;else if(o===il)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qs=new b,Gn=new ne,ig=new b(0,0,0),sg=new b(1,1,1),ji=new b,co=new b,xn=new b,od=new ne,ld=new hs;class xi{constructor(t=0,e=0,n=0,s=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return od.makeRotationFromQuaternion(t),this.setFromRotationMatrix(od,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ld.setFromEuler(this),this.setFromQuaternion(ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class ru{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rg=0;const cd=new b,tr=new hs,Ti=new ne,ho=new b,jr=new b,ag=new b,og=new hs,hd=new b(1,0,0),ud=new b(0,1,0),dd=new b(0,0,1),fd={type:"added"},lg={type:"removed"},er={type:"childadded",child:null},Hl={type:"childremoved",child:null};class Ne extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new b,e=new xi,n=new hs,s=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Yt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(hd,t)}rotateY(t){return this.rotateOnAxis(ud,t)}rotateZ(t){return this.rotateOnAxis(dd,t)}translateOnAxis(t,e){return cd.copy(t).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hd,t)}translateY(t){return this.translateOnAxis(ud,t)}translateZ(t){return this.translateOnAxis(dd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ho.copy(t):ho.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(jr,ho,this.up):Ti.lookAt(ho,jr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Ti),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fd),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lg),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fd),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,ag),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,og,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new b(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new b,Ai=new b,Vl=new b,Ci=new b,nr=new b,ir=new b,pd=new b,Gl=new b,Wl=new b,$l=new b,Xl=new ve,ql=new ve,Yl=new ve;class Un{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Wn.subVectors(s,e),Ai.subVectors(n,e),Vl.subVectors(t,e);const a=Wn.dot(Wn),o=Wn.dot(Ai),l=Wn.dot(Vl),c=Ai.dot(Ai),h=Ai.dot(Vl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Xl.setScalar(0),ql.setScalar(0),Yl.setScalar(0),Xl.fromBufferAttribute(t,e),ql.fromBufferAttribute(t,n),Yl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Xl,r.x),a.addScaledVector(ql,r.y),a.addScaledVector(Yl,r.z),a}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),Ai.subVectors(t,e),Wn.cross(Ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Wn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;nr.subVectors(s,n),ir.subVectors(r,n),Gl.subVectors(t,n);const l=nr.dot(Gl),c=ir.dot(Gl);if(l<=0&&c<=0)return e.copy(n);Wl.subVectors(t,s);const h=nr.dot(Wl),u=ir.dot(Wl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(nr,a);$l.subVectors(t,r);const f=nr.dot($l),g=ir.dot($l);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ir,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return pd.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(pd,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=su(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kl(a,r,t+1/3),this.g=Kl(a,r,t),this.b=Kl(a,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=Dp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return ee.fromWorkingColorSpace(je.copy(this),t),Math.round(Ge(je.r*255,0,255))*65536+Math.round(Ge(je.g*255,0,255))*256+Math.round(Ge(je.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=dn){ee.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(uo);const n=Ma(Zi.h,uo.h,e),s=Ma(Zi.s,uo.s,e),r=Ma(Zi.l,uo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new xt;xt.NAMES=Dp;let cg=0;class Or extends kr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=mi(),this.name="",this.blending=Fs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==qc&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tn extends Or{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new b,fo=new Z;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ph&&(t.usage=this.usage),t}}class Ip extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Up extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hg=0;const Rn=new ne,jl=new Ne,sr=new b,_n=new gn,Zr=new gn,He=new b;class Be extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cp(t)?Up:Ip)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return jl.lookAt(t),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ga);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(_n.min,Zr.min),_n.expandByPoint(He),He.addVectors(_n.max,Zr.max),_n.expandByPoint(He)):(_n.expandByPoint(Zr.min),_n.expandByPoint(Zr.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(t,c),He.add(sr)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new b,l[P]=new b;const c=new b,h=new b,u=new b,d=new Z,f=new Z,g=new Z,v=new b,m=new b;function p(P,E,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[P].add(v),o[E].add(v),o[S].add(v),l[P].add(m),l[E].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,E=_.length;P<E;++P){const S=_[P],L=S.start,$=S.count;for(let z=L,k=L+$;z<k;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const y=new b,x=new b,D=new b,A=new b;function C(P){D.fromBufferAttribute(s,P),A.copy(D);const E=o[P];y.copy(E),y.sub(D.multiplyScalar(D.dot(E))).normalize(),x.crossVectors(A,E);const L=x.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,E=_.length;P<E;++P){const S=_[P],L=S.start,$=S.count;for(let z=L,k=L+$;z<k;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new b,r=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const md=new ne,ps=new Lp,po=new Ga,gd=new b,mo=new b,go=new b,vo=new b,Zl=new b,xo=new b,vd=new b,_o=new b;class ct extends Ne{constructor(t=new Be,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Zl.fromBufferAttribute(u,t),a?xo.addScaledVector(Zl,h):xo.addScaledVector(Zl.sub(e),h))}e.add(xo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(po.containsPoint(ps.origin)===!1&&(ps.intersectSphere(po,gd)===null||ps.origin.distanceToSquared(gd)>(t.far-t.near)**2))&&(md.copy(r).invert(),ps.copy(t.ray).applyMatrix4(md),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,D=y;x<D;x+=3){const A=o.getX(x),C=o.getX(x+1),P=o.getX(x+2);s=yo(this,p,t,n,c,h,u,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=yo(this,a,t,n,c,h,u,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,D=y;x<D;x+=3){const A=x,C=x+1,P=x+2;s=yo(this,p,t,n,c,h,u,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;s=yo(this,a,t,n,c,h,u,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ug(i,t,e,n,s,r,a,o){let l;if(t.side===fn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===zi,o),l===null)return null;_o.copy(o),_o.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_o);return c<e.near||c>e.far?null:{distance:c,point:_o.clone(),object:i}}function yo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,mo),i.getVertexPosition(l,go),i.getVertexPosition(c,vo);const h=ug(i,t,e,n,mo,go,vo,vd);if(h){const u=new b;Un.getBarycoord(vd,mo,go,vo,u),s&&(h.uv=Un.getInterpolatedAttribute(s,o,l,c,u,new Z)),r&&(h.uv1=Un.getInterpolatedAttribute(r,o,l,c,u,new Z)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new b,materialIndex:0};Un.getNormal(mo,go,vo,d.normal),h.face=d,h.barycoord=u}return h}class _i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(v,m,p,_,y,x,D,A,C,P,E){const S=x/C,L=D/P,$=x/2,z=D/2,k=A/2,B=C+1,H=P+1;let Y=0,W=0;const it=new b;for(let pt=0;pt<H;pt++){const wt=pt*L-z;for(let $t=0;$t<B;$t++){const ae=$t*S-$;it[v]=ae*_,it[m]=wt*y,it[p]=k,c.push(it.x,it.y,it.z),it[v]=0,it[m]=0,it[p]=A>0?1:-1,h.push(it.x,it.y,it.z),u.push($t/C),u.push(1-pt/P),Y+=1}}for(let pt=0;pt<P;pt++)for(let wt=0;wt<C;wt++){const $t=d+wt+B*pt,ae=d+wt+B*(pt+1),j=d+(wt+1)+B*(pt+1),rt=d+(wt+1)+B*pt;l.push($t,ae,rt),l.push(ae,j,rt),W+=6}o.addGroup(f,W,E),f+=W,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=Pr(i[e]);for(const s in n)t[s]=n[s]}return t}function dg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Np(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Ia={clone:Pr,merge:tn};var fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ue extends Or{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=dg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fp extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new b,xd=new Z,_d=new Z;class wn extends Fp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,xd,_d),e.subVectors(_d,xd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ya*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,ar=1;class mg extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(rr,ar,t,e);s.layers=this.layers,this.add(s);const r=new wn(rr,ar,t,e);r.layers=this.layers,this.add(r);const a=new wn(rr,ar,t,e);a.layers=this.layers,this.add(a);const o=new wn(rr,ar,t,e);o.layers=this.layers,this.add(o);const l=new wn(rr,ar,t,e);l.layers=this.layers,this.add(l);const c=new wn(rr,ar,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===il)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class kp extends Ze{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Tr,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gg extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new kp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _i(5,5,5),r=new Ue({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Fi});r.uniforms.tEquirect.value=e;const a=new ct(s,r),o=e.minFilter;return e.minFilter===Us&&(e.minFilter=hi),new mg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Jl=new b,vg=new b,xg=new Yt;class ai{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Jl.subVectors(n,e).cross(vg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xg.getNormalMatrix(t),s=this.coplanarPoint(Jl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Ga,Mo=new b;class au{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ui){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+_).normalize(),n[3].setComponents(l-a,d-h,m-g,x-_).normalize(),n[4].setComponents(l-o,d-u,m-v,x-y).normalize(),e===Ui)n[5].setComponents(l+o,d+u,m+v,x+y).normalize();else if(e===il)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Mo.x=s.normal.x>0?t.max.x:t.min.x,Mo.y=s.normal.y>0?t.max.y:t.min.y,Mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Op(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _g(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Je extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*d-a;for(let y=0;y<c;y++){const x=y*u-r;g.push(x,-_,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const y=_+c*p,x=_+c*(p+1),D=_+1+c*(p+1),A=_+1+c*p;f.push(y,x,A),f.push(x,D,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.width,t.height,t.widthSegments,t.heightSegments)}}var yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$g=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_v=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,px=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ax=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ox=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:yg,alphahash_pars_fragment:Mg,alphamap_fragment:bg,alphamap_pars_fragment:Sg,alphatest_fragment:wg,alphatest_pars_fragment:Eg,aomap_fragment:Tg,aomap_pars_fragment:Ag,batching_pars_vertex:Cg,batching_vertex:Rg,begin_vertex:Pg,beginnormal_vertex:Lg,bsdfs:Dg,iridescence_fragment:Ig,bumpmap_pars_fragment:Ug,clipping_planes_fragment:Ng,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Og,color_fragment:zg,color_pars_fragment:Bg,color_pars_vertex:Hg,color_vertex:Vg,common:Gg,cube_uv_reflection_fragment:Wg,defaultnormal_vertex:$g,displacementmap_pars_vertex:Xg,displacementmap_vertex:qg,emissivemap_fragment:Yg,emissivemap_pars_fragment:Kg,colorspace_fragment:jg,colorspace_pars_fragment:Zg,envmap_fragment:Jg,envmap_common_pars_fragment:Qg,envmap_pars_fragment:tv,envmap_pars_vertex:ev,envmap_physical_pars_fragment:dv,envmap_vertex:nv,fog_vertex:iv,fog_pars_vertex:sv,fog_fragment:rv,fog_pars_fragment:av,gradientmap_pars_fragment:ov,lightmap_pars_fragment:lv,lights_lambert_fragment:cv,lights_lambert_pars_fragment:hv,lights_pars_begin:uv,lights_toon_fragment:fv,lights_toon_pars_fragment:pv,lights_phong_fragment:mv,lights_phong_pars_fragment:gv,lights_physical_fragment:vv,lights_physical_pars_fragment:xv,lights_fragment_begin:_v,lights_fragment_maps:yv,lights_fragment_end:Mv,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Ev,map_fragment:Tv,map_pars_fragment:Av,map_particle_fragment:Cv,map_particle_pars_fragment:Rv,metalnessmap_fragment:Pv,metalnessmap_pars_fragment:Lv,morphinstance_vertex:Dv,morphcolor_vertex:Iv,morphnormal_vertex:Uv,morphtarget_pars_vertex:Nv,morphtarget_vertex:Fv,normal_fragment_begin:kv,normal_fragment_maps:Ov,normal_pars_fragment:zv,normal_pars_vertex:Bv,normal_vertex:Hv,normalmap_pars_fragment:Vv,clearcoat_normal_fragment_begin:Gv,clearcoat_normal_fragment_maps:Wv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:Xv,opaque_fragment:qv,packing:Yv,premultiplied_alpha_fragment:Kv,project_vertex:jv,dithering_fragment:Zv,dithering_pars_fragment:Jv,roughnessmap_fragment:Qv,roughnessmap_pars_fragment:tx,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:nx,shadowmap_vertex:ix,shadowmask_pars_fragment:sx,skinbase_vertex:rx,skinning_pars_vertex:ax,skinning_vertex:ox,skinnormal_vertex:lx,specularmap_fragment:cx,specularmap_pars_fragment:hx,tonemapping_fragment:ux,tonemapping_pars_fragment:dx,transmission_fragment:fx,transmission_pars_fragment:px,uv_pars_fragment:mx,uv_pars_vertex:gx,uv_vertex:vx,worldpos_vertex:xx,background_vert:_x,background_frag:yx,backgroundCube_vert:Mx,backgroundCube_frag:bx,cube_vert:Sx,cube_frag:wx,depth_vert:Ex,depth_frag:Tx,distanceRGBA_vert:Ax,distanceRGBA_frag:Cx,equirect_vert:Rx,equirect_frag:Px,linedashed_vert:Lx,linedashed_frag:Dx,meshbasic_vert:Ix,meshbasic_frag:Ux,meshlambert_vert:Nx,meshlambert_frag:Fx,meshmatcap_vert:kx,meshmatcap_frag:Ox,meshnormal_vert:zx,meshnormal_frag:Bx,meshphong_vert:Hx,meshphong_frag:Vx,meshphysical_vert:Gx,meshphysical_frag:Wx,meshtoon_vert:$x,meshtoon_frag:Xx,points_vert:qx,points_frag:Yx,shadow_vert:Kx,shadow_frag:jx,sprite_vert:Zx,sprite_frag:Jx},ut={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},oi={basic:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new xt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:tn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:tn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new xt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:tn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:tn([ut.points,ut.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:tn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:tn([ut.common,ut.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:tn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:tn([ut.sprite,ut.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:tn([ut.common,ut.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:tn([ut.lights,ut.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};oi.physical={uniforms:tn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const bo={r:0,b:0,g:0},gs=new xi,Qx=new ne;function t_(i,t,e,n,s,r,a){const o=new xt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?p(o,l):x&&x.isColor&&(p(x,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===yl)?(h===void 0&&(h=new ct(new _i(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:Pr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gs.copy(y.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(gs)),h.material.toneMapped=ee.getTransfer(x.colorSpace)!==ue,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ct(new Je(2,2),new Ue({name:"BackgroundMaterial",uniforms:Pr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ee.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(bo,Np(i)),n.buffers.color.setClear(bo.r,bo.g,bo.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:v,addToRenderList:m}}function e_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,L,$,z,k){let B=!1;const H=u(z,$,L);r!==H&&(r=H,c(r.object)),B=f(S,z,$,k),B&&g(S,z,$,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,x(S,L,$,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,$){const z=$.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let B=k[L.id];B===void 0&&(B={},k[L.id]=B);let H=B[z];return H===void 0&&(H=d(l()),B[z]=H),H}function d(S){const L=[],$=[],z=[];for(let k=0;k<e;k++)L[k]=0,$[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:$,attributeDivisors:z,object:S,attributes:{},index:null}}function f(S,L,$,z){const k=r.attributes,B=L.attributes;let H=0;const Y=$.getAttributes();for(const W in Y)if(Y[W].location>=0){const pt=k[W];let wt=B[W];if(wt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),pt===void 0||pt.attribute!==wt||wt&&pt.data!==wt.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function g(S,L,$,z){const k={},B=L.attributes;let H=0;const Y=$.getAttributes();for(const W in Y)if(Y[W].location>=0){let pt=B[W];pt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor));const wt={};wt.attribute=pt,pt&&pt.data&&(wt.data=pt.data),k[W]=wt,H++}r.attributes=k,r.attributesNum=H,r.index=z}function v(){const S=r.newAttributes;for(let L=0,$=S.length;L<$;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const $=r.newAttributes,z=r.enabledAttributes,k=r.attributeDivisors;$[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),k[S]!==L&&(i.vertexAttribDivisor(S,L),k[S]=L)}function _(){const S=r.newAttributes,L=r.enabledAttributes;for(let $=0,z=L.length;$<z;$++)L[$]!==S[$]&&(i.disableVertexAttribArray($),L[$]=0)}function y(S,L,$,z,k,B,H){H===!0?i.vertexAttribIPointer(S,L,$,k,B):i.vertexAttribPointer(S,L,$,z,k,B)}function x(S,L,$,z){v();const k=z.attributes,B=$.getAttributes(),H=L.defaultAttributeValues;for(const Y in B){const W=B[Y];if(W.location>=0){let it=k[Y];if(it===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const pt=it.normalized,wt=it.itemSize,$t=t.get(it);if($t===void 0)continue;const ae=$t.buffer,j=$t.type,rt=$t.bytesPerElement,Tt=j===i.INT||j===i.UNSIGNED_INT||it.gpuType===Zh;if(it.isInterleavedBufferAttribute){const ot=it.data,Nt=ot.stride,Gt=it.offset;if(ot.isInstancedInterleavedBuffer){for(let Bt=0;Bt<W.locationSize;Bt++)p(W.location+Bt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Bt=0;Bt<W.locationSize;Bt++)y(W.location+Bt,wt/W.locationSize,j,pt,Nt*rt,(Gt+wt/W.locationSize*Bt)*rt,Tt)}else{if(it.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot,it.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ot=0;ot<W.locationSize;ot++)m(W.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ot=0;ot<W.locationSize;ot++)y(W.location+ot,wt/W.locationSize,j,pt,wt*rt,wt/W.locationSize*ot*rt,Tt)}}else if(H!==void 0){const pt=H[Y];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(W.location,pt);break;case 3:i.vertexAttrib3fv(W.location,pt);break;case 4:i.vertexAttrib4fv(W.location,pt);break;default:i.vertexAttrib1fv(W.location,pt)}}}}_()}function D(){P();for(const S in n){const L=n[S];for(const $ in L){const z=L[$];for(const k in z)h(z[k].object),delete z[k];delete L[$]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const $ in L){const z=L[$];for(const k in z)h(z[k].object),delete z[k];delete L[$]}delete n[S.id]}function C(S){for(const L in n){const $=n[L];if($[S.id]===void 0)continue;const z=$[S.id];for(const k in z)h(z[k].object),delete z[k];delete $[S.id]}}function P(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function n_(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function i_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Bi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ui&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function s_(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ai,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const _=r?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=h(g,d,y,f);for(let D=0;D!==y;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function r_(i){let t=new WeakMap;function e(a,o){return o===eh?a.mapping=Tr:o===nh&&(a.mapping=Ar),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===eh||o===nh)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gg(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wa extends Fp{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mr=4,yd=[.125,.215,.35,.446,.526,.582],Cs=20,Ql=new Wa,Md=new xt;let tc=null,ec=0,nc=0,ic=!1;const Ts=(1+Math.sqrt(5))/2,or=1/Ts,bd=[new b(-Ts,or,0),new b(Ts,or,0),new b(-or,0,Ts),new b(or,0,Ts),new b(0,Ts,-or),new b(0,Ts,or),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Sd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tc,ec,nc),this._renderer.xr.enabled=ic,t.scissorTest=!1,So(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Tr||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:pi,format:Zn,colorSpace:Fr,depthBuffer:!1},s=wd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a_(r)),this._blurMaterial=o_(r,t,e)}return s}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,Ql)}_sceneToCubeUV(t,e,n,s){const o=new wn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Md),h.toneMapping=ki,h.autoClear=!1;const f=new Tn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new ct(new _i,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Md),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;So(s,_*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Tr||t.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;So(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ql)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bd[(s-r-1)%bd.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ct(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Cs;m>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);const p=[];let _=0;for(let C=0;C<Cs;++C){const P=C/v,E=Math.exp(-P*P/2);p.push(E),C===0?_+=E:C<m&&(_+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],D=3*x*(s>y-Mr?s-y+Mr:0),A=4*(this._cubeSize-x);So(e,D,A,3*x,2*x),l.setRenderTarget(e),l.render(u,Ql)}}function a_(i){const t=[],e=[],n=[];let s=i;const r=i-Mr+1+yd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Mr?l=yd[a-i+Mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,P=A>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(E,v*g*A),y.set(d,m*g*A);const S=[A,A,A,A,A,A];x.set(S,p*g*A)}const D=new Be;D.setAttribute("position",new qe(_,v)),D.setAttribute("uv",new qe(y,m)),D.setAttribute("faceIndex",new qe(x,p)),t.push(D),s>Mr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wd(i,t,e){const n=new pn(i,t,e);return n.texture.mapping=yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function o_(i,t,e){const n=new Float32Array(Cs),s=new b(0,1,0);return new Ue({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ed(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Td(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function l_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===eh||l===nh,h=l===Tr||l===Ar;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Sd(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Sd(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function c_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function h_(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const D=_[y+0],A=_[y+1],C=_[y+2];d.push(D,A,A,C,C,D)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const D=y+0,A=y+1,C=y+2;d.push(D,A,A,C,C,D)}}else return;const m=new(Cp(d)?Up:Ip)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function u_(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function d_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function f_(i,t,e){const n=new WeakMap,s=new ve;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let D=o.attributes.position.count*x,A=1;D>t.maxTextureSize&&(A=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const C=new Float32Array(D*A*4*u),P=new Pp(C,D,A,u);P.type=ui,P.needsUpdate=!0;const E=x*4;for(let L=0;L<u;L++){const $=p[L],z=_[L],k=y[L],B=D*A*4*L;for(let H=0;H<$.count;H++){const Y=H*E;g===!0&&(s.fromBufferAttribute($,H),C[B+Y+0]=s.x,C[B+Y+1]=s.y,C[B+Y+2]=s.z,C[B+Y+3]=0),v===!0&&(s.fromBufferAttribute(z,H),C[B+Y+4]=s.x,C[B+Y+5]=s.y,C[B+Y+6]=s.z,C[B+Y+7]=0),m===!0&&(s.fromBufferAttribute(k,H),C[B+Y+8]=s.x,C[B+Y+9]=s.y,C[B+Y+10]=s.z,C[B+Y+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Z(D,A)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function p_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class zp extends Ze{constructor(t,e,n,s,r,a,o,l,c,h=Sr){if(h!==Sr&&h!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Sr&&(n=Hs),n===void 0&&h===Rr&&(n=Cr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bp=new Ze,Ad=new zp(1,1),Hp=new Pp,Vp=new eg,Gp=new kp,Cd=[],Rd=[],Pd=new Float32Array(16),Ld=new Float32Array(9),Dd=new Float32Array(4);function zr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Cd[s];if(r===void 0&&(r=new Float32Array(s),Cd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bl(i,t){let e=Rd[t];e===void 0&&(e=new Int32Array(t),Rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function m_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function g_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function v_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function x_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function __(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Dd.set(n),i.uniformMatrix2fv(this.addr,!1,Dd),ze(e,n)}}function y_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Ld.set(n),i.uniformMatrix3fv(this.addr,!1,Ld),ze(e,n)}}function M_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Pd.set(n),i.uniformMatrix4fv(this.addr,!1,Pd),ze(e,n)}}function b_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function S_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function w_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function E_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function T_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function A_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function C_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function R_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function P_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ad.compareFunction=Ap,r=Ad):r=Bp,e.setTexture2D(t||r,s)}function L_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vp,s)}function D_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gp,s)}function I_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hp,s)}function U_(i){switch(i){case 5126:return m_;case 35664:return g_;case 35665:return v_;case 35666:return x_;case 35674:return __;case 35675:return y_;case 35676:return M_;case 5124:case 35670:return b_;case 35667:case 35671:return S_;case 35668:case 35672:return w_;case 35669:case 35673:return E_;case 5125:return T_;case 36294:return A_;case 36295:return C_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return I_}}function N_(i,t){i.uniform1fv(this.addr,t)}function F_(i,t){const e=zr(t,this.size,2);i.uniform2fv(this.addr,e)}function k_(i,t){const e=zr(t,this.size,3);i.uniform3fv(this.addr,e)}function O_(i,t){const e=zr(t,this.size,4);i.uniform4fv(this.addr,e)}function z_(i,t){const e=zr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function B_(i,t){const e=zr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function H_(i,t){const e=zr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function V_(i,t){i.uniform1iv(this.addr,t)}function G_(i,t){i.uniform2iv(this.addr,t)}function W_(i,t){i.uniform3iv(this.addr,t)}function $_(i,t){i.uniform4iv(this.addr,t)}function X_(i,t){i.uniform1uiv(this.addr,t)}function q_(i,t){i.uniform2uiv(this.addr,t)}function Y_(i,t){i.uniform3uiv(this.addr,t)}function K_(i,t){i.uniform4uiv(this.addr,t)}function j_(i,t,e){const n=this.cache,s=t.length,r=bl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Bp,r[a])}function Z_(i,t,e){const n=this.cache,s=t.length,r=bl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vp,r[a])}function J_(i,t,e){const n=this.cache,s=t.length,r=bl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gp,r[a])}function Q_(i,t,e){const n=this.cache,s=t.length,r=bl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hp,r[a])}function t1(i){switch(i){case 5126:return N_;case 35664:return F_;case 35665:return k_;case 35666:return O_;case 35674:return z_;case 35675:return B_;case 35676:return H_;case 5124:case 35670:return V_;case 35667:case 35671:return G_;case 35668:case 35672:return W_;case 35669:case 35673:return $_;case 5125:return X_;case 36294:return q_;case 36295:return Y_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Q_}}class e1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=U_(e.type)}}class n1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t1(e.type)}}class i1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function Id(i,t){i.seq.push(t),i.map[t.id]=t}function s1(i,t,e){const n=i.name,s=n.length;for(sc.lastIndex=0;;){const r=sc.exec(n),a=sc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Id(e,c===void 0?new e1(o,i,t):new n1(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new i1(o),Id(e,u)),e=u}}}class qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);s1(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ud(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const r1=37297;let a1=0;function o1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Nd=new Yt;function l1(i){ee._getMatrix(Nd,ee.workingColorSpace,i);const t=`mat3( ${Nd.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Ml:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+o1(i.getShaderSource(t),a)}else return s}function c1(i,t){const e=l1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function h1(i,t){let e;switch(t){case hp:e="Linear";break;case up:e="Reinhard";break;case dp:e="Cineon";break;case fp:e="ACESFilmic";break;case pp:e="AgX";break;case mp:e="Neutral";break;case x0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wo=new b;function u1(){ee.getLuminanceCoefficients(wo);const i=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function f1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function p1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pa(i){return i!==""}function kd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Od(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const m1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(i){return i.replace(m1,v1)}const g1=new Map;function v1(i,t){let e=jt[t];if(e===void 0){const n=g1.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Lh(e)}const x1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(i){return i.replace(x1,_1)}function _1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function y1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function M1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Tr:case Ar:t="ENVMAP_TYPE_CUBE";break;case yl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function S1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jh:t="ENVMAP_BLENDING_MULTIPLY";break;case g0:t="ENVMAP_BLENDING_MIX";break;case v0:t="ENVMAP_BLENDING_ADD";break}return t}function w1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function E1(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=y1(e),c=M1(e),h=b1(e),u=S1(e),d=w1(e),f=d1(e),g=f1(r),v=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(m=[Bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[Bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?jt.tonemapping_pars_fragment:"",e.toneMapping!==ki?h1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,c1("linearToOutputTexel",e.outputColorSpace),u1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pa).join(`
`)),a=Lh(a),a=kd(a,e),a=Od(a,e),o=Lh(o),o=kd(o,e),o=Od(o,e),a=zd(a),o=zd(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+a,x=_+p+o,D=Ud(s,s.VERTEX_SHADER,y),A=Ud(s,s.FRAGMENT_SHADER,x);s.attachShader(v,D),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(D).trim(),k=s.getShaderInfoLog(A).trim();let B=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,A);else{const Y=Fd(s,D,"vertex"),W=Fd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+Y+`
`+W)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(z===""||k==="")&&(H=!1);H&&(L.diagnostics={runnable:B,programLog:$,vertexShader:{log:z,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(D),s.deleteShader(A),P=new qo(s,v),E=p1(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,r1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=A,this}let T1=0;class A1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new C1(t),e.set(t,n)),n}}class C1{constructor(t){this.id=T1++,this.code=t,this.usedTimes=0}}function R1(i,t,e,n,s,r,a){const o=new ru,l=new A1,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,L,$,z){const k=$.fog,B=z.geometry,H=E.isMeshStandardMaterial?$.environment:null,Y=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),W=Y&&Y.mapping===yl?Y.image.height:null,it=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,wt=pt!==void 0?pt.length:0;let $t=0;B.morphAttributes.position!==void 0&&($t=1),B.morphAttributes.normal!==void 0&&($t=2),B.morphAttributes.color!==void 0&&($t=3);let ae,j,rt,Tt;if(it){const he=oi[it];ae=he.vertexShader,j=he.fragmentShader}else ae=E.vertexShader,j=E.fragmentShader,l.update(E),rt=l.getVertexShaderID(E),Tt=l.getFragmentShaderID(E);const ot=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Gt=z.isInstancedMesh===!0,Bt=z.isBatchedMesh===!0,ie=!!E.map,Q=!!E.matcap,st=!!Y,R=!!E.aoMap,Lt=!!E.lightMap,et=!!E.bumpMap,Mt=!!E.normalMap,ht=!!E.displacementMap,Ot=!!E.emissiveMap,_t=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,O=E.clearcoat>0,q=E.dispersion>0,tt=E.iridescence>0,K=E.sheen>0,At=E.transmission>0,dt=M&&!!E.anisotropyMap,yt=O&&!!E.clearcoatMap,Zt=O&&!!E.clearcoatNormalMap,nt=O&&!!E.clearcoatRoughnessMap,bt=tt&&!!E.iridescenceMap,zt=tt&&!!E.iridescenceThicknessMap,Vt=K&&!!E.sheenColorMap,St=K&&!!E.sheenRoughnessMap,te=!!E.specularMap,Kt=!!E.specularColorMap,xe=!!E.specularIntensityMap,I=At&&!!E.transmissionMap,ft=At&&!!E.thicknessMap,X=!!E.gradientMap,J=!!E.alphaMap,vt=E.alphaTest>0,mt=!!E.alphaHash,Xt=!!E.extensions;let Ce=ki;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Ye={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:ae,fragmentShader:j,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:Tt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&z._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&z.instanceColor!==null,instancingMorph:Gt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Fr,alphaToCoverage:!!E.alphaToCoverage,map:ie,matcap:Q,envMap:st,envMapMode:st&&Y.mapping,envMapCubeUVHeight:W,aoMap:R,lightMap:Lt,bumpMap:et,normalMap:Mt,displacementMap:d&&ht,emissiveMap:Ot,normalMapObjectSpace:Mt&&E.normalMapType===b0,normalMapTangentSpace:Mt&&E.normalMapType===Tp,metalnessMap:_t,roughnessMap:T,anisotropy:M,anisotropyMap:dt,clearcoat:O,clearcoatMap:yt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:nt,dispersion:q,iridescence:tt,iridescenceMap:bt,iridescenceThicknessMap:zt,sheen:K,sheenColorMap:Vt,sheenRoughnessMap:St,specularMap:te,specularColorMap:Kt,specularIntensityMap:xe,transmission:At,transmissionMap:I,thicknessMap:ft,gradientMap:X,opaque:E.transparent===!1&&E.blending===Fs&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:vt,alphaHash:mt,combine:E.combine,mapUv:ie&&v(E.map.channel),aoMapUv:R&&v(E.aoMap.channel),lightMapUv:Lt&&v(E.lightMap.channel),bumpMapUv:et&&v(E.bumpMap.channel),normalMapUv:Mt&&v(E.normalMap.channel),displacementMapUv:ht&&v(E.displacementMap.channel),emissiveMapUv:Ot&&v(E.emissiveMap.channel),metalnessMapUv:_t&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:dt&&v(E.anisotropyMap.channel),clearcoatMapUv:yt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(E.sheenRoughnessMap.channel),specularMapUv:te&&v(E.specularMap.channel),specularColorMapUv:Kt&&v(E.specularColorMap.channel),specularIntensityMapUv:xe&&v(E.specularIntensityMap.channel),transmissionMapUv:I&&v(E.transmissionMap.channel),thicknessMapUv:ft&&v(E.thicknessMap.channel),alphaMapUv:J&&v(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Mt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!B.attributes.uv&&(ie||J),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:z.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:$t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:ie&&E.map.isVideoTexture===!0&&ee.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:Ot&&E.emissiveMap.isVideoTexture===!0&&ee.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===En,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&E.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(_(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const S=g[E.type];let L;if(S){const $=oi[S];L=Ia.clone($.uniforms)}else L=E.uniforms;return L}function D(E,S){let L;for(let $=0,z=h.length;$<z;$++){const k=h[$];if(k.cacheKey===S){L=k,++L.usedTimes;break}}return L===void 0&&(L=new E1(i,S,E,r),h.push(L)),L}function A(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function P1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function L1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||L1),n.length>1&&n.sort(d||Hd),s.length>1&&s.sort(d||Hd)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function D1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Vd,i.set(n,[a])):s>=r.length?(a=new Vd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function I1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new xt};break;case"SpotLight":e={position:new b,direction:new b,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function U1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let N1=0;function F1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k1(i){const t=new I1,e=U1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const s=new b,r=new ne,a=new ne;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,x=0,D=0,A=0,C=0;c.sort(F1);for(let E=0,S=c.length;E<S;E++){const L=c[E],$=L.color,z=L.intensity,k=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=$.r*z,u+=$.g*z,d+=$.b*z;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],z);C++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,W=e.get(L);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=L.shadow.matrix,_++}n.directional[f]=H,f++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy($).multiplyScalar(z),H.distance=k,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[v]=H;const Y=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,Y.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=Y.matrix,L.castShadow){const W=e.get(L);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=B,x++}v++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy($).multiplyScalar(z),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Y=L.shadow,W=e.get(L);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(z),H.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==D||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=D,P.numLightProbes=C,n.version=N1++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Gd(i){const t=new k1(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function O1(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Gd(i),t.set(s,[o])):r>=a.length?(o=new Gd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class z1 extends Or{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class B1 extends Or{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G1(i,t,e){let n=new au;const s=new Z,r=new Z,a=new ve,o=new z1({depthPacking:M0}),l=new B1,c={},h=e.maxTextureSize,u={[zi]:fn,[fn]:zi,[En]:En},d=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:H1,fragmentShader:V1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lp;let p=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Fi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const z=p!==Pi&&this.type===Pi,k=p===Pi&&this.type!==Pi;for(let B=0,H=A.length;B<H;B++){const Y=A[B],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const it=W.getFrameExtents();if(s.multiply(it),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,W.mapSize.y=r.y)),W.map===null||z===!0||k===!0){const wt=this.type!==Pi?{minFilter:An,magFilter:An}:{};W.map!==null&&W.map.dispose(),W.map=new pn(s.x,s.y,wt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const pt=W.getViewportCount();for(let wt=0;wt<pt;wt++){const $t=W.getViewport(wt);a.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),$.viewport(a),W.updateMatrices(Y,wt),n=W.getFrustum(),x(C,P,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Pi&&_(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,L)};function _(A,C){const P=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,f,v,null)}function y(A,C,P,E){let S=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const $=S.uuid,z=C.uuid;let k=c[$];k===void 0&&(k={},c[$]=k);let B=k[z];B===void 0&&(B=S.clone(),k[z]=B,C.addEventListener("dispose",D)),S=B}if(S.visible=C.visible,S.wireframe=C.wireframe,E===Pi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=i.properties.get(S);$.light=P}return S}function x(A,C,P,E,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Pi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const z=t.update(A),k=A.material;if(Array.isArray(k)){const B=z.groups;for(let H=0,Y=B.length;H<Y;H++){const W=B[H],it=k[W.materialIndex];if(it&&it.visible){const pt=y(A,it,E,S);A.onBeforeShadow(i,A,C,P,z,pt,W),i.renderBufferDirect(P,null,z,pt,A,W),A.onAfterShadow(i,A,C,P,z,pt,W)}}}else if(k.visible){const B=y(A,k,E,S);A.onBeforeShadow(i,A,C,P,z,B,null),i.renderBufferDirect(P,null,z,B,A,null),A.onAfterShadow(i,A,C,P,z,B,null)}}const $=A.children;for(let z=0,k=$.length;z<k;z++)x($[z],C,P,E,S)}function D(A){A.target.removeEventListener("dispose",D);for(const P in c){const E=c[P],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const W1={[Yc]:Kc,[jc]:Qc,[Zc]:th,[Er]:Jc,[Kc]:Yc,[Qc]:jc,[th]:Zc,[Jc]:Er};function $1(i,t){function e(){let I=!1;const ft=new ve;let X=null;const J=new ve(0,0,0,0);return{setMask:function(vt){X!==vt&&!I&&(i.colorMask(vt,vt,vt,vt),X=vt)},setLocked:function(vt){I=vt},setClear:function(vt,mt,Xt,Ce,Ye){Ye===!0&&(vt*=Ce,mt*=Ce,Xt*=Ce),ft.set(vt,mt,Xt,Ce),J.equals(ft)===!1&&(i.clearColor(vt,mt,Xt,Ce),J.copy(ft))},reset:function(){I=!1,X=null,J.set(-1,0,0,0)}}}function n(){let I=!1,ft=!1,X=null,J=null,vt=null;return{setReversed:function(mt){if(ft!==mt){const Xt=t.get("EXT_clip_control");ft?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const Ce=vt;vt=null,this.setClear(Ce)}ft=mt},getReversed:function(){return ft},setTest:function(mt){mt?ot(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(mt){X!==mt&&!I&&(i.depthMask(mt),X=mt)},setFunc:function(mt){if(ft&&(mt=W1[mt]),J!==mt){switch(mt){case Yc:i.depthFunc(i.NEVER);break;case Kc:i.depthFunc(i.ALWAYS);break;case jc:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case Zc:i.depthFunc(i.EQUAL);break;case Jc:i.depthFunc(i.GEQUAL);break;case Qc:i.depthFunc(i.GREATER);break;case th:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=mt}},setLocked:function(mt){I=mt},setClear:function(mt){vt!==mt&&(ft&&(mt=1-mt),i.clearDepth(mt),vt=mt)},reset:function(){I=!1,X=null,J=null,vt=null,ft=!1}}}function s(){let I=!1,ft=null,X=null,J=null,vt=null,mt=null,Xt=null,Ce=null,Ye=null;return{setTest:function(he){I||(he?ot(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(he){ft!==he&&!I&&(i.stencilMask(he),ft=he)},setFunc:function(he,Bn,bi){(X!==he||J!==Bn||vt!==bi)&&(i.stencilFunc(he,Bn,bi),X=he,J=Bn,vt=bi)},setOp:function(he,Bn,bi){(mt!==he||Xt!==Bn||Ce!==bi)&&(i.stencilOp(he,Bn,bi),mt=he,Xt=Bn,Ce=bi)},setLocked:function(he){I=he},setClear:function(he){Ye!==he&&(i.clearStencil(he),Ye=he)},reset:function(){I=!1,ft=null,X=null,J=null,vt=null,mt=null,Xt=null,Ce=null,Ye=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,D=null,A=null,C=new xt(0,0,0),P=0,E=!1,S=null,L=null,$=null,z=null,k=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=Y>=2);let it=null,pt={};const wt=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),ae=new ve().fromArray(wt),j=new ve().fromArray($t);function rt(I,ft,X,J){const vt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(I,mt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<X;Xt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ft+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return mt}const Tt={};Tt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(Er),et(!1),Mt(Yu),ot(i.CULL_FACE),R(Fi);function ot(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Nt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Gt(I,ft){return u[I]!==ft?(i.bindFramebuffer(I,ft),u[I]=ft,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Bt(I,ft){let X=f,J=!1;if(I){X=d.get(ft),X===void 0&&(X=[],d.set(ft,X));const vt=I.textures;if(X.length!==vt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Xt=vt.length;mt<Xt;mt++)X[mt]=i.COLOR_ATTACHMENT0+mt;X.length=vt.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function ie(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Q={[As]:i.FUNC_ADD,[Qm]:i.FUNC_SUBTRACT,[t0]:i.FUNC_REVERSE_SUBTRACT};Q[e0]=i.MIN,Q[n0]=i.MAX;const st={[i0]:i.ZERO,[s0]:i.ONE,[r0]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[u0]:i.SRC_ALPHA_SATURATE,[c0]:i.DST_COLOR,[o0]:i.DST_ALPHA,[a0]:i.ONE_MINUS_SRC_COLOR,[qc]:i.ONE_MINUS_SRC_ALPHA,[h0]:i.ONE_MINUS_DST_COLOR,[l0]:i.ONE_MINUS_DST_ALPHA,[d0]:i.CONSTANT_COLOR,[f0]:i.ONE_MINUS_CONSTANT_COLOR,[p0]:i.CONSTANT_ALPHA,[m0]:i.ONE_MINUS_CONSTANT_ALPHA};function R(I,ft,X,J,vt,mt,Xt,Ce,Ye,he){if(I===Fi){v===!0&&(Nt(i.BLEND),v=!1);return}if(v===!1&&(ot(i.BLEND),v=!0),I!==Jm){if(I!==m||he!==E){if((p!==As||x!==As)&&(i.blendEquation(i.FUNC_ADD),p=As,x=As),he)switch(I){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ti:i.blendFunc(i.ONE,i.ONE);break;case Ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ju:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ti:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ju:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,y=null,D=null,A=null,C.set(0,0,0),P=0,m=I,E=he}return}vt=vt||ft,mt=mt||X,Xt=Xt||J,(ft!==p||vt!==x)&&(i.blendEquationSeparate(Q[ft],Q[vt]),p=ft,x=vt),(X!==_||J!==y||mt!==D||Xt!==A)&&(i.blendFuncSeparate(st[X],st[J],st[mt],st[Xt]),_=X,y=J,D=mt,A=Xt),(Ce.equals(C)===!1||Ye!==P)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Ye),C.copy(Ce),P=Ye),m=I,E=!1}function Lt(I,ft){I.side===En?Nt(i.CULL_FACE):ot(i.CULL_FACE);let X=I.side===fn;ft&&(X=!X),et(X),I.blending===Fs&&I.transparent===!1?R(Fi):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function Mt(I){I!==jm?(ot(i.CULL_FACE),I!==L&&(I===Yu?i.cullFace(i.BACK):I===Zm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),L=I}function ht(I){I!==$&&(H&&i.lineWidth(I),$=I)}function Ot(I,ft,X){I?(ot(i.POLYGON_OFFSET_FILL),(z!==ft||k!==X)&&(i.polygonOffset(ft,X),z=ft,k=X)):Nt(i.POLYGON_OFFSET_FILL)}function _t(I){I?ot(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+B-1),it!==I&&(i.activeTexture(I),it=I)}function M(I,ft,X){X===void 0&&(it===null?X=i.TEXTURE0+B-1:X=it);let J=pt[X];J===void 0&&(J={type:void 0,texture:void 0},pt[X]=J),(J.type!==I||J.texture!==ft)&&(it!==X&&(i.activeTexture(X),it=X),i.bindTexture(I,ft||Tt[I]),J.type=I,J.texture=ft)}function O(){const I=pt[it];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(I){ae.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function St(I){j.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function te(I,ft){let X=c.get(ft);X===void 0&&(X=new WeakMap,c.set(ft,X));let J=X.get(I);J===void 0&&(J=i.getUniformBlockIndex(ft,I.name),X.set(I,J))}function Kt(I,ft){const J=c.get(ft).get(I);l.get(ft)!==J&&(i.uniformBlockBinding(ft,J,I.__bindingPointIndex),l.set(ft,J))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,pt={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,D=null,A=null,C=new xt(0,0,0),P=0,E=!1,S=null,L=null,$=null,z=null,k=null,ae.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Nt,bindFramebuffer:Gt,drawBuffers:Bt,useProgram:ie,setBlending:R,setMaterial:Lt,setFlipSided:et,setCullFace:Mt,setLineWidth:ht,setPolygonOffset:Ot,setScissorTest:_t,activeTexture:T,bindTexture:M,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:tt,texImage2D:bt,texImage3D:zt,updateUBOMapping:te,uniformBlockBinding:Kt,texStorage2D:Zt,texStorage3D:nt,texSubImage2D:K,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:yt,scissor:Vt,viewport:St,reset:xe}}function Wd(i,t,e,n){const s=X1(n);switch(e){case yp:return i*t;case bp:return i*t;case Sp:return i*t*2;case tu:return i*t/s.components*s.byteLength;case eu:return i*t/s.components*s.byteLength;case wp:return i*t*2/s.components*s.byteLength;case nu:return i*t*2/s.components*s.byteLength;case Mp:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case iu:return i*t*4/s.components*s.byteLength;case Vo:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rh:case oh:return Math.max(i,16)*Math.max(t,8)/4;case sh:case ah:return Math.max(i,8)*Math.max(t,8)/2;case lh:case ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ph:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _h:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xo:case Eh:case Th:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ep:case Ah:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ch:case Rh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function X1(i){switch(i){case Bi:case vp:return{byteLength:1,components:1};case La:case xp:case pi:return{byteLength:2,components:1};case Jh:case Qh:return{byteLength:2,components:4};case Hs:case Zh:case ui:return{byteLength:4,components:1};case _p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function q1(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):sl("canvas")}function v(T,M,O){let q=1;const tt=_t(T);if((tt.width>O||tt.height>O)&&(q=O/Math.max(tt.width,tt.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(q*tt.width),At=Math.floor(q*tt.height);u===void 0&&(u=g(K,At));const dt=M?g(K,At):u;return dt.width=K,dt.height=At,dt.getContext("2d").drawImage(T,0,0,K,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+At+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,M,O,q,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=M;if(M===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),M===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),M===i.RGBA){const At=tt?Ml:ee.getTransfer(q);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=At===ue?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(T,M){let O;return T?M===null||M===Hs||M===Cr?O=i.DEPTH24_STENCIL8:M===ui?O=i.DEPTH32F_STENCIL8:M===La&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hs||M===Cr?O=i.DEPTH_COMPONENT24:M===ui?O=i.DEPTH_COMPONENT32F:M===La&&(O=i.DEPTH_COMPONENT16),O}function D(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==An&&T.minFilter!==hi?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),P(M),M.isVideoTexture&&h.delete(M)}function C(T){const M=T.target;M.removeEventListener("dispose",C),S(M)}function P(T){const M=n.get(T);if(M.__webglInit===void 0)return;const O=T.source,q=d.get(O);if(q){const tt=q[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(T),Object.keys(q).length===0&&d.delete(O)}n.remove(T)}function E(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const O=T.source,q=d.get(O);delete q[M.__cacheKey],a.memory.textures--}function S(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let tt=0;tt<M.__webglFramebuffer[q].length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[q][tt]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=T.textures;for(let q=0,tt=O.length;q<tt;q++){const K=n.get(O[q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(T)}let L=0;function $(){L=0}function z(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function k(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function B(T,M){const O=n.get(T);if(T.isVideoTexture&&ht(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,T,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function H(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){j(O,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function Y(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){j(O,T,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function W(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){rt(O,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const it={[Bs]:i.REPEAT,[Is]:i.CLAMP_TO_EDGE,[ih]:i.MIRRORED_REPEAT},pt={[An]:i.NEAREST,[_0]:i.NEAREST_MIPMAP_NEAREST,[io]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[Dl]:i.LINEAR_MIPMAP_NEAREST,[Us]:i.LINEAR_MIPMAP_LINEAR},wt={[S0]:i.NEVER,[R0]:i.ALWAYS,[w0]:i.LESS,[Ap]:i.LEQUAL,[E0]:i.EQUAL,[C0]:i.GEQUAL,[T0]:i.GREATER,[A0]:i.NOTEQUAL};function $t(T,M){if(M.type===ui&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===hi||M.magFilter===Dl||M.magFilter===io||M.magFilter===Us||M.minFilter===hi||M.minFilter===Dl||M.minFilter===io||M.minFilter===Us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,it[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,it[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,it[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,pt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,pt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,wt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==io&&M.minFilter!==Us||M.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ae(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const q=M.source;let tt=d.get(q);tt===void 0&&(tt={},d.set(q,tt));const K=k(M);if(K!==T.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[K].usedTimes++;const At=tt[T.__cacheKey];At!==void 0&&(tt[T.__cacheKey].usedTimes--,At.usedTimes===0&&E(M)),T.__cacheKey=K,T.__webglTexture=tt[K].texture}return O}function j(T,M,O){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);const tt=ae(T,M),K=M.source;e.bindTexture(q,T.__webglTexture,i.TEXTURE0+O);const At=n.get(K);if(K.version!==At.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);const dt=ee.getPrimaries(ee.workingColorSpace),yt=M.colorSpace===rs?null:ee.getPrimaries(M.colorSpace),Zt=M.colorSpace===rs||dt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let nt=v(M.image,!1,s.maxTextureSize);nt=Ot(M,nt);const bt=r.convert(M.format,M.colorSpace),zt=r.convert(M.type);let Vt=y(M.internalFormat,bt,zt,M.colorSpace,M.isVideoTexture);$t(q,M);let St;const te=M.mipmaps,Kt=M.isVideoTexture!==!0,xe=At.__version===void 0||tt===!0,I=K.dataReady,ft=D(M,nt);if(M.isDepthTexture)Vt=x(M.format===Rr,M.type),xe&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Vt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,nt.width,nt.height,0,bt,zt,null));else if(M.isDataTexture)if(te.length>0){Kt&&xe&&e.texStorage2D(i.TEXTURE_2D,ft,Vt,te[0].width,te[0].height);for(let X=0,J=te.length;X<J;X++)St=te[X],Kt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,bt,zt,St.data):e.texImage2D(i.TEXTURE_2D,X,Vt,St.width,St.height,0,bt,zt,St.data);M.generateMipmaps=!1}else Kt?(xe&&e.texStorage2D(i.TEXTURE_2D,ft,Vt,nt.width,nt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,bt,zt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,nt.width,nt.height,0,bt,zt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Kt&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Vt,te[0].width,te[0].height,nt.depth);for(let X=0,J=te.length;X<J;X++)if(St=te[X],M.format!==Zn)if(bt!==null)if(Kt){if(I)if(M.layerUpdates.size>0){const vt=Wd(St.width,St.height,M.format,M.type);for(const mt of M.layerUpdates){const Xt=St.data.subarray(mt*vt/St.data.BYTES_PER_ELEMENT,(mt+1)*vt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,mt,St.width,St.height,1,bt,Xt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,nt.depth,bt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Vt,St.width,St.height,nt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,nt.depth,bt,zt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Vt,St.width,St.height,nt.depth,0,bt,zt,St.data)}else{Kt&&xe&&e.texStorage2D(i.TEXTURE_2D,ft,Vt,te[0].width,te[0].height);for(let X=0,J=te.length;X<J;X++)St=te[X],M.format!==Zn?bt!==null?Kt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,bt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Vt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,bt,zt,St.data):e.texImage2D(i.TEXTURE_2D,X,Vt,St.width,St.height,0,bt,zt,St.data)}else if(M.isDataArrayTexture)if(Kt){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Vt,nt.width,nt.height,nt.depth),I)if(M.layerUpdates.size>0){const X=Wd(nt.width,nt.height,M.format,M.type);for(const J of M.layerUpdates){const vt=nt.data.subarray(J*X/nt.data.BYTES_PER_ELEMENT,(J+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,bt,zt,vt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,bt,zt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,nt.width,nt.height,nt.depth,0,bt,zt,nt.data);else if(M.isData3DTexture)Kt?(xe&&e.texStorage3D(i.TEXTURE_3D,ft,Vt,nt.width,nt.height,nt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,bt,zt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,nt.width,nt.height,nt.depth,0,bt,zt,nt.data);else if(M.isFramebufferTexture){if(xe)if(Kt)e.texStorage2D(i.TEXTURE_2D,ft,Vt,nt.width,nt.height);else{let X=nt.width,J=nt.height;for(let vt=0;vt<ft;vt++)e.texImage2D(i.TEXTURE_2D,vt,Vt,X,J,0,bt,zt,null),X>>=1,J>>=1}}else if(te.length>0){if(Kt&&xe){const X=_t(te[0]);e.texStorage2D(i.TEXTURE_2D,ft,Vt,X.width,X.height)}for(let X=0,J=te.length;X<J;X++)St=te[X],Kt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,bt,zt,St):e.texImage2D(i.TEXTURE_2D,X,Vt,bt,zt,St);M.generateMipmaps=!1}else if(Kt){if(xe){const X=_t(nt);e.texStorage2D(i.TEXTURE_2D,ft,Vt,X.width,X.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,zt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,bt,zt,nt);m(M)&&p(q),At.__version=K.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function rt(T,M,O){if(M.image.length!==6)return;const q=ae(T,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const K=n.get(tt);if(tt.version!==K.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const At=ee.getPrimaries(ee.workingColorSpace),dt=M.colorSpace===rs?null:ee.getPrimaries(M.colorSpace),yt=M.colorSpace===rs||At===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Zt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,bt=[];for(let J=0;J<6;J++)!Zt&&!nt?bt[J]=v(M.image[J],!0,s.maxCubemapSize):bt[J]=nt?M.image[J].image:M.image[J],bt[J]=Ot(M,bt[J]);const zt=bt[0],Vt=r.convert(M.format,M.colorSpace),St=r.convert(M.type),te=y(M.internalFormat,Vt,St,M.colorSpace),Kt=M.isVideoTexture!==!0,xe=K.__version===void 0||q===!0,I=tt.dataReady;let ft=D(M,zt);$t(i.TEXTURE_CUBE_MAP,M);let X;if(Zt){Kt&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,te,zt.width,zt.height);for(let J=0;J<6;J++){X=bt[J].mipmaps;for(let vt=0;vt<X.length;vt++){const mt=X[vt];M.format!==Zn?Vt!==null?Kt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,mt.width,mt.height,Vt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,te,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,mt.width,mt.height,Vt,St,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,te,mt.width,mt.height,0,Vt,St,mt.data)}}}else{if(X=M.mipmaps,Kt&&xe){X.length>0&&ft++;const J=_t(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,te,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,bt[J].width,bt[J].height,Vt,St,bt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,te,bt[J].width,bt[J].height,0,Vt,St,bt[J].data);for(let vt=0;vt<X.length;vt++){const Xt=X[vt].image[J].image;Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,Xt.width,Xt.height,Vt,St,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,te,Xt.width,Xt.height,0,Vt,St,Xt.data)}}else{Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Vt,St,bt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,te,Vt,St,bt[J]);for(let vt=0;vt<X.length;vt++){const mt=X[vt];Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,Vt,St,mt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,te,Vt,St,mt.image[J])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),K.__version=tt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Tt(T,M,O,q,tt,K){const At=r.convert(O.format,O.colorSpace),dt=r.convert(O.type),yt=y(O.internalFormat,At,dt,O.colorSpace),Zt=n.get(M),nt=n.get(O);if(nt.__renderTarget=M,!Zt.__hasExternalTextures){const bt=Math.max(1,M.width>>K),zt=Math.max(1,M.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,yt,bt,zt,M.depth,0,At,dt,null):e.texImage2D(tt,K,yt,bt,zt,0,At,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,tt,nt.__webglTexture,0,et(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,tt,nt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(T,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const q=M.depthTexture,tt=q&&q.isDepthTexture?q.type:null,K=x(M.stencilBuffer,tt),At=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=et(M);Mt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,K,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,T)}else{const q=M.textures;for(let tt=0;tt<q.length;tt++){const K=q[tt],At=r.convert(K.format,K.colorSpace),dt=r.convert(K.type),yt=y(K.internalFormat,At,dt,K.colorSpace),Zt=et(M);O&&Mt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,yt,M.width,M.height):Mt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,yt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,yt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const tt=q.__webglTexture,K=et(M);if(M.depthTexture.format===Sr)Mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Rr)Mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Gt(T){const M=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",tt)};q.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=q}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Nt(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),ot(M.__webglDepthbuffer[q],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ot(M.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(T,M,O){const q=n.get(T);M!==void 0&&Tt(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Gt(T)}function ie(T){const M=T.texture,O=n.get(T),q=n.get(M);T.addEventListener("dispose",C);const tt=T.textures,K=T.isWebGLCubeRenderTarget===!0,At=tt.length>1;if(At||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let yt=0;yt<M.mipmaps.length;yt++)O.__webglFramebuffer[dt][yt]=i.createFramebuffer()}else O.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)O.__webglFramebuffer[dt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(At)for(let dt=0,yt=tt.length;dt<yt;dt++){const Zt=n.get(tt[dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Mt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){const yt=tt[dt];O.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);const Zt=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),bt=y(yt.internalFormat,Zt,nt,yt.colorSpace,T.isXRRenderTarget===!0),zt=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,bt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),$t(i.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Tt(O.__webglFramebuffer[dt][yt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,yt);else Tt(O.__webglFramebuffer[dt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,yt=tt.length;dt<yt;dt++){const Zt=tt[dt],nt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),$t(i.TEXTURE_2D,Zt),Tt(O.__webglFramebuffer,T,Zt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(Zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,q.__webglTexture),$t(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Tt(O.__webglFramebuffer[yt],T,M,i.COLOR_ATTACHMENT0,dt,yt);else Tt(O.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,dt,0);m(M)&&p(dt),e.unbindTexture()}T.depthBuffer&&Gt(T)}function Q(T){const M=T.textures;for(let O=0,q=M.length;O<q;O++){const tt=M[O];if(m(tt)){const K=_(T),At=n.get(tt).__webglTexture;e.bindTexture(K,At),p(K),e.unbindTexture()}}}const st=[],R=[];function Lt(T){if(T.samples>0){if(Mt(T)===!1){const M=T.textures,O=T.width,q=T.height;let tt=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(T),dt=M.length>1;if(dt)for(let yt=0;yt<M.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let yt=0;yt<M.length;yt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const Zt=n.get(M[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,tt,i.NEAREST),l===!0&&(st.length=0,R.length=0,st.push(i.COLOR_ATTACHMENT0+yt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(st.push(K),R.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let yt=0;yt<M.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const Zt=n.get(M[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function et(T){return Math.min(s.maxSamples,T.samples)}function Mt(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ht(T){const M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Ot(T,M){const O=T.colorSpace,q=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Fr&&O!==rs&&(ee.getTransfer(O)===ue?(q!==Zn||tt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function _t(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=$,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Bt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Mt}function Y1(i,t){function e(n,s=rs){let r;const a=ee.getTransfer(s);if(n===Bi)return i.UNSIGNED_BYTE;if(n===Jh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_p)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vp)return i.BYTE;if(n===xp)return i.SHORT;if(n===La)return i.UNSIGNED_SHORT;if(n===Zh)return i.INT;if(n===Hs)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===yp)return i.ALPHA;if(n===Mp)return i.RGB;if(n===Zn)return i.RGBA;if(n===bp)return i.LUMINANCE;if(n===Sp)return i.LUMINANCE_ALPHA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Rr)return i.DEPTH_STENCIL;if(n===tu)return i.RED;if(n===eu)return i.RED_INTEGER;if(n===wp)return i.RG;if(n===nu)return i.RG_INTEGER;if(n===iu)return i.RGBA_INTEGER;if(n===Vo||n===Go||n===Wo||n===$o)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sh||n===rh||n===ah||n===oh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ah)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lh||n===ch||n===hh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lh||n===ch)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===vh||n===xh||n===_h||n===yh||n===Mh||n===bh||n===Sh||n===wh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ph)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_h)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wh)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===Eh||n===Th)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xo)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ep||n===Ah||n===Ch||n===Rh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class K1 extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class It extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j1={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ue({vertexShader:Z1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new Je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ty extends kr{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new Q1,m=e.getContextAttributes();let p=null,_=null;const y=[],x=[],D=new Z;let A=null;const C=new wn;C.viewport=new ve;const P=new wn;P.viewport=new ve;const E=[C,P],S=new K1;let L=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let rt=y[j];return rt===void 0&&(rt=new rc,y[j]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(j){let rt=y[j];return rt===void 0&&(rt=new rc,y[j]=rt),rt.getGripSpace()},this.getHand=function(j){let rt=y[j];return rt===void 0&&(rt=new rc,y[j]=rt),rt.getHandSpace()};function z(j){const rt=x.indexOf(j.inputSource);if(rt===-1)return;const Tt=y[rt];Tt!==void 0&&(Tt.update(j.inputSource,j.frame,c||a),Tt.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",B);for(let j=0;j<y.length;j++){const rt=x[j];rt!==null&&(x[j]=null,y[j].disconnect(rt))}L=null,$=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new pn(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Tt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Rr:Sr,Tt=m.stencil?Cr:Hs);const Nt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new pn(d.textureWidth,d.textureHeight,{format:Zn,type:Bi,depthTexture:new zp(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(j){for(let rt=0;rt<j.removed.length;rt++){const Tt=j.removed[rt],ot=x.indexOf(Tt);ot>=0&&(x[ot]=null,y[ot].disconnect(Tt))}for(let rt=0;rt<j.added.length;rt++){const Tt=j.added[rt];let ot=x.indexOf(Tt);if(ot===-1){for(let Gt=0;Gt<y.length;Gt++)if(Gt>=x.length){x.push(Tt),ot=Gt;break}else if(x[Gt]===null){x[Gt]=Tt,ot=Gt;break}if(ot===-1)break}const Nt=y[ot];Nt&&Nt.connect(Tt)}}const H=new b,Y=new b;function W(j,rt,Tt){H.setFromMatrixPosition(rt.matrixWorld),Y.setFromMatrixPosition(Tt.matrixWorld);const ot=H.distanceTo(Y),Nt=rt.projectionMatrix.elements,Gt=Tt.projectionMatrix.elements,Bt=Nt[14]/(Nt[10]-1),ie=Nt[14]/(Nt[10]+1),Q=(Nt[9]+1)/Nt[5],st=(Nt[9]-1)/Nt[5],R=(Nt[8]-1)/Nt[0],Lt=(Gt[8]+1)/Gt[0],et=Bt*R,Mt=Bt*Lt,ht=ot/(-R+Lt),Ot=ht*-R;if(rt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ot),j.translateZ(ht),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Nt[10]===-1)j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const _t=Bt+ht,T=ie+ht,M=et-Ot,O=Mt+(ot-Ot),q=Q*ie/T*_t,tt=st*ie/T*_t;j.projectionMatrix.makePerspective(M,O,q,tt,_t,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function it(j,rt){rt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(rt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let rt=j.near,Tt=j.far;v.texture!==null&&(v.depthNear>0&&(rt=v.depthNear),v.depthFar>0&&(Tt=v.depthFar)),S.near=P.near=C.near=rt,S.far=P.far=C.far=Tt,(L!==S.near||$!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,$=S.far),C.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,S.layers.mask=C.layers.mask|P.layers.mask;const ot=j.parent,Nt=S.cameras;it(S,ot);for(let Gt=0;Gt<Nt.length;Gt++)it(Nt[Gt],ot);Nt.length===2?W(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),pt(j,S,ot)};function pt(j,rt,Tt){Tt===null?j.matrix.copy(rt.matrixWorld):(j.matrix.copy(Tt.matrixWorld),j.matrix.invert(),j.matrix.multiply(rt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Da*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let wt=null;function $t(j,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){const Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let ot=!1;Tt.length!==S.cameras.length&&(S.cameras.length=0,ot=!0);for(let Gt=0;Gt<Tt.length;Gt++){const Bt=Tt[Gt];let ie=null;if(f!==null)ie=f.getViewport(Bt);else{const st=u.getViewSubImage(d,Bt);ie=st.viewport,Gt===0&&(t.setRenderTargetTextures(_,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(_))}let Q=E[Gt];Q===void 0&&(Q=new wn,Q.layers.enable(Gt),Q.viewport=new ve,E[Gt]=Q),Q.matrix.fromArray(Bt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Bt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ie.x,ie.y,ie.width,ie.height),Gt===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ot===!0&&S.cameras.push(Q)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Gt=u.getDepthInformation(Tt[0]);Gt&&Gt.isValid&&Gt.texture&&v.init(t,Gt,s.renderState)}}for(let Tt=0;Tt<y.length;Tt++){const ot=x[Tt],Nt=y[Tt];ot!==null&&Nt!==void 0&&Nt.update(ot,rt,c||a)}wt&&wt(j,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const ae=new Op;ae.setAnimationLoop($t),this.setAnimationLoop=function(j){wt=j},this.dispose=function(){}}}const vs=new xi,ey=new ne;function ny(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Np(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,vs.copy(x),vs.x*=-1,vs.y*=-1,vs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),m.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(vs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iy(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=s[_.id];x===void 0&&(g(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",m));const D=y.program;n.updateUBOMapping(_,D);const A=t.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function h(_){const y=u();_.__bindingPointIndex=y;const x=i.createBuffer(),D=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=s[_.id],x=_.uniforms,D=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=P.length;E<S;E++){const L=P[E];if(f(L,A,E,D)===!0){const $=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let B=0;B<z.length;B++){const H=z[B],Y=v(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,$+k,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,x,D){const A=_.value,C=y+"_"+x;if(D[C]===void 0)return typeof A=="number"||typeof A=="boolean"?D[C]=A:D[C]=A.clone(),!0;{const P=D[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return D[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(_){const y=_.uniforms;let x=0;const D=16;for(let C=0,P=y.length;C<P;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,L=E.length;S<L;S++){const $=E[S],z=Array.isArray($.value)?$.value:[$.value];for(let k=0,B=z.length;k<B;k++){const H=z[k],Y=v(H),W=x%D,it=W%Y.boundary,pt=W+it;x+=it,pt!==0&&D-pt<Y.storage&&(x+=D-pt),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=x,x+=Y.storage}}}const A=x%D;return A>0&&(x+=D-A),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class sy{constructor(t={}){const{canvas:e=q0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=ki,this.toneMappingExposure=1;const x=this;let D=!1,A=0,C=0,P=null,E=-1,S=null;const L=new ve,$=new ve;let z=null;const k=new xt(0);let B=0,H=e.width,Y=e.height,W=1,it=null,pt=null;const wt=new ve(0,0,H,Y),$t=new ve(0,0,H,Y);let ae=!1;const j=new au;let rt=!1,Tt=!1;const ot=new ne,Nt=new ne,Gt=new b,Bt=new ve,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function st(){return P===null?W:1}let R=n;function Lt(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kh}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),R===null){const U="webgl2";if(R=Lt(U,w),R===null)throw Lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,Mt,ht,Ot,_t,T,M,O,q,tt,K,At,dt,yt,Zt,nt,bt,zt,Vt,St,te,Kt,xe,I;function ft(){et=new c_(R),et.init(),Kt=new Y1(R,et),Mt=new i_(R,et,t,Kt),ht=new $1(R,et),Mt.reverseDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),Ot=new d_(R),_t=new P1,T=new q1(R,et,ht,_t,Mt,Kt,Ot),M=new r_(x),O=new l_(x),q=new _g(R),xe=new e_(R,q),tt=new h_(R,q,Ot,xe),K=new p_(R,tt,q,Ot),Vt=new f_(R,Mt,T),nt=new s_(_t),At=new R1(x,M,O,et,Mt,xe,nt),dt=new ny(x,_t),yt=new D1,Zt=new O1(et),zt=new t_(x,M,O,ht,K,f,l),bt=new G1(x,K,Mt),I=new iy(R,Ot,Mt,ht),St=new n_(R,et,Ot),te=new u_(R,et,Ot),Ot.programs=At.programs,x.capabilities=Mt,x.extensions=et,x.properties=_t,x.renderLists=yt,x.shadowMap=bt,x.state=ht,x.info=Ot}ft();const X=new ty(x,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(H,Y,!1))},this.getSize=function(w){return w.set(H,Y)},this.setSize=function(w,U,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,Y=U,e.width=Math.floor(w*W),e.height=Math.floor(U*W),V===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(H*W,Y*W).floor()},this.setDrawingBufferSize=function(w,U,V){H=w,Y=U,W=V,e.width=Math.floor(w*V),e.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,U,V,G){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,U,V,G),ht.viewport(L.copy(wt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy($t)},this.setScissor=function(w,U,V,G){w.isVector4?$t.set(w.x,w.y,w.z,w.w):$t.set(w,U,V,G),ht.scissor($.copy($t).multiplyScalar(W).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){ht.setScissorTest(ae=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){pt=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(w=!0,U=!0,V=!0){let G=0;if(w){let N=!1;if(P!==null){const at=P.texture.format;N=at===iu||at===nu||at===eu}if(N){const at=P.texture.type,gt=at===Bi||at===Hs||at===La||at===Cr||at===Jh||at===Qh,Ct=zt.getClearColor(),Rt=zt.getClearAlpha(),Wt=Ct.r,qt=Ct.g,Pt=Ct.b;gt?(g[0]=Wt,g[1]=qt,g[2]=Pt,g[3]=Rt,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Wt,v[1]=qt,v[2]=Pt,v[3]=Rt,R.clearBufferiv(R.COLOR,0,v))}else G|=R.COLOR_BUFFER_BIT}U&&(G|=R.DEPTH_BUFFER_BIT),V&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),yt.dispose(),Zt.dispose(),_t.dispose(),M.dispose(),O.dispose(),K.dispose(),xe.dispose(),I.dispose(),At.dispose(),X.dispose(),X.removeEventListener("sessionstart",Bu),X.removeEventListener("sessionend",Hu),us.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=Ot.autoReset,U=bt.enabled,V=bt.autoUpdate,G=bt.needsUpdate,N=bt.type;ft(),Ot.autoReset=w,bt.enabled=U,bt.autoUpdate=V,bt.needsUpdate=G,bt.type=N}function mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xt(w){const U=w.target;U.removeEventListener("dispose",Xt),Ce(U)}function Ce(w){Ye(w),_t.remove(w)}function Ye(w){const U=_t.get(w).programs;U!==void 0&&(U.forEach(function(V){At.releaseProgram(V)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,G,N,at){U===null&&(U=ie);const gt=N.isMesh&&N.matrixWorld.determinant()<0,Ct=qm(w,U,V,G,N);ht.setMaterial(G,gt);let Rt=V.index,Wt=1;if(G.wireframe===!0){if(Rt=tt.getWireframeAttribute(V),Rt===void 0)return;Wt=2}const qt=V.drawRange,Pt=V.attributes.position;let se=qt.start*Wt,_e=(qt.start+qt.count)*Wt;at!==null&&(se=Math.max(se,at.start*Wt),_e=Math.min(_e,(at.start+at.count)*Wt)),Rt!==null?(se=Math.max(se,0),_e=Math.min(_e,Rt.count)):Pt!=null&&(se=Math.max(se,0),_e=Math.min(_e,Pt.count));const be=_e-se;if(be<0||be===1/0)return;xe.setup(N,G,Ct,V,Rt);let an,oe=St;if(Rt!==null&&(an=q.get(Rt),oe=te,oe.setIndex(an)),N.isMesh)G.wireframe===!0?(ht.setLineWidth(G.wireframeLinewidth*st()),oe.setMode(R.LINES)):oe.setMode(R.TRIANGLES);else if(N.isLine){let Dt=G.linewidth;Dt===void 0&&(Dt=1),ht.setLineWidth(Dt*st()),N.isLineSegments?oe.setMode(R.LINES):N.isLineLoop?oe.setMode(R.LINE_LOOP):oe.setMode(R.LINE_STRIP)}else N.isPoints?oe.setMode(R.POINTS):N.isSprite&&oe.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)oe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))oe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Dt=N._multiDrawStarts,Si=N._multiDrawCounts,le=N._multiDrawCount,Hn=Rt?q.get(Rt).bytesPerElement:1,qs=_t.get(G).currentProgram.getUniforms();for(let vn=0;vn<le;vn++)qs.setValue(R,"_gl_DrawID",vn),oe.render(Dt[vn]/Hn,Si[vn])}else if(N.isInstancedMesh)oe.renderInstances(se,be,N.count);else if(V.isInstancedBufferGeometry){const Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Si=Math.min(V.instanceCount,Dt);oe.renderInstances(se,be,Si)}else oe.render(se,be)};function he(w,U,V){w.transparent===!0&&w.side===En&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,no(w,U,V),w.side=zi,w.needsUpdate=!0,no(w,U,V),w.side=En):no(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),p=Zt.get(V),p.init(U),y.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const at=N.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){const Ct=at[gt];he(Ct,V,N),G.add(Ct)}else he(at,V,N),G.add(at)}),y.pop(),p=null,G},this.compileAsync=function(w,U,V=null){const G=this.compile(w,U,V);return new Promise(N=>{function at(){if(G.forEach(function(gt){_t.get(gt).currentProgram.isReady()&&G.delete(gt)}),G.size===0){N(w);return}setTimeout(at,10)}et.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Bn=null;function bi(w){Bn&&Bn(w)}function Bu(){us.stop()}function Hu(){us.start()}const us=new Op;us.setAnimationLoop(bi),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(w){Bn=w,X.setAnimationLoop(w),w===null?us.stop():us.start()},X.addEventListener("sessionstart",Bu),X.addEventListener("sessionend",Hu),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,P),p=Zt.get(w,y.length),p.init(U),y.push(p),Nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Nt),Tt=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,Tt),m=yt.get(w,_.length),m.init(),_.push(m),X.enabled===!0&&X.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&Ll(at,U,-1/0,x.sortObjects)}Ll(w,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(it,pt),Q=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Q&&zt.addToRenderList(m,w),this.info.render.frame++,rt===!0&&nt.beginShadows();const V=p.state.shadowsArray;bt.render(V,w,U),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const at=U.cameras;if(N.length>0)for(let gt=0,Ct=at.length;gt<Ct;gt++){const Rt=at[gt];Gu(G,N,w,Rt)}Q&&zt.render(w);for(let gt=0,Ct=at.length;gt<Ct;gt++){const Rt=at[gt];Vu(m,w,Rt,Rt.viewport)}}else N.length>0&&Gu(G,N,w,U),Q&&zt.render(w),Vu(m,w,U);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,U),xe.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],rt===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ll(w,U,V,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){G&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Nt);const gt=K.update(w),Ct=w.material;Ct.visible&&m.push(w,gt,Ct,V,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const gt=K.update(w),Ct=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Bt.copy(gt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ct)){const Rt=gt.groups;for(let Wt=0,qt=Rt.length;Wt<qt;Wt++){const Pt=Rt[Wt],se=Ct[Pt.materialIndex];se&&se.visible&&m.push(w,gt,se,V,Bt.z,Pt)}}else Ct.visible&&m.push(w,gt,Ct,V,Bt.z,null)}}const at=w.children;for(let gt=0,Ct=at.length;gt<Ct;gt++)Ll(at[gt],U,V,G)}function Vu(w,U,V,G){const N=w.opaque,at=w.transmissive,gt=w.transparent;p.setupLightsView(V),rt===!0&&nt.setGlobalState(x.clippingPlanes,V),G&&ht.viewport(L.copy(G)),N.length>0&&eo(N,U,V),at.length>0&&eo(at,U,V),gt.length>0&&eo(gt,U,V),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Gu(w,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new pn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?pi:Bi,minFilter:Us,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const at=p.state.transmissionRenderTarget[G.id],gt=G.viewport||L;at.setSize(gt.z,gt.w);const Ct=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(k),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Q&&zt.render(V);const Rt=x.toneMapping;x.toneMapping=ki;const Wt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),rt===!0&&nt.setGlobalState(x.clippingPlanes,G),eo(w,V,G),T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at),et.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Pt=0,se=U.length;Pt<se;Pt++){const _e=U[Pt],be=_e.object,an=_e.geometry,oe=_e.material,Dt=_e.group;if(oe.side===En&&be.layers.test(G.layers)){const Si=oe.side;oe.side=fn,oe.needsUpdate=!0,Wu(be,V,G,an,oe,Dt),oe.side=Si,oe.needsUpdate=!0,qt=!0}}qt===!0&&(T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at))}x.setRenderTarget(Ct),x.setClearColor(k,B),Wt!==void 0&&(G.viewport=Wt),x.toneMapping=Rt}function eo(w,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=w.length;N<at;N++){const gt=w[N],Ct=gt.object,Rt=gt.geometry,Wt=G===null?gt.material:G,qt=gt.group;Ct.layers.test(V.layers)&&Wu(Ct,U,V,Rt,Wt,qt)}}function Wu(w,U,V,G,N,at){w.onBeforeRender(x,U,V,G,N,at),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(x,U,V,G,w,at),N.transparent===!0&&N.side===En&&N.forceSinglePass===!1?(N.side=fn,N.needsUpdate=!0,x.renderBufferDirect(V,U,G,N,w,at),N.side=zi,N.needsUpdate=!0,x.renderBufferDirect(V,U,G,N,w,at),N.side=En):x.renderBufferDirect(V,U,G,N,w,at),w.onAfterRender(x,U,V,G,N,at)}function no(w,U,V){U.isScene!==!0&&(U=ie);const G=_t.get(w),N=p.state.lights,at=p.state.shadowsArray,gt=N.state.version,Ct=At.getParameters(w,N.state,at,U,V),Rt=At.getProgramCacheKey(Ct);let Wt=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?O:M).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",Xt),Wt=new Map,G.programs=Wt);let qt=Wt.get(Rt);if(qt!==void 0){if(G.currentProgram===qt&&G.lightsStateVersion===gt)return Xu(w,Ct),qt}else Ct.uniforms=At.getUniforms(w),w.onBeforeCompile(Ct,x),qt=At.acquireProgram(Ct,Rt),Wt.set(Rt,qt),G.uniforms=Ct.uniforms;const Pt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=nt.uniform),Xu(w,Ct),G.needsLights=Km(w),G.lightsStateVersion=gt,G.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=qt,G.uniformsList=null,qt}function $u(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=qo.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Xu(w,U){const V=_t.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function qm(w,U,V,G,N){U.isScene!==!0&&(U=ie),T.resetTextureUnits();const at=U.fog,gt=G.isMeshStandardMaterial?U.environment:null,Ct=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fr,Rt=(G.isMeshStandardMaterial?O:M).get(G.envMap||gt),Wt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,_e=!!V.morphAttributes.color;let be=ki;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(be=x.toneMapping);const an=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,oe=an!==void 0?an.length:0,Dt=_t.get(G),Si=p.state.lights;if(rt===!0&&(Tt===!0||w!==S)){const Cn=w===S&&G.id===E;nt.setState(G,w,Cn)}let le=!1;G.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Si.state.version||Dt.outputColorSpace!==Ct||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==Rt||G.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==nt.numPlanes||Dt.numIntersection!==nt.numIntersection)||Dt.vertexAlphas!==Wt||Dt.vertexTangents!==qt||Dt.morphTargets!==Pt||Dt.morphNormals!==se||Dt.morphColors!==_e||Dt.toneMapping!==be||Dt.morphTargetsCount!==oe)&&(le=!0):(le=!0,Dt.__version=G.version);let Hn=Dt.currentProgram;le===!0&&(Hn=no(G,U,N));let qs=!1,vn=!1,Xr=!1;const Se=Hn.getUniforms(),ii=Dt.uniforms;if(ht.useProgram(Hn.program)&&(qs=!0,vn=!0,Xr=!0),G.id!==E&&(E=G.id,vn=!0),qs||S!==w){ht.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),K0(ot),j0(ot),Se.setValue(R,"projectionMatrix",ot)):Se.setValue(R,"projectionMatrix",w.projectionMatrix),Se.setValue(R,"viewMatrix",w.matrixWorldInverse);const $i=Se.map.cameraPosition;$i!==void 0&&$i.setValue(R,Gt.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&Se.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Se.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,vn=!0,Xr=!0)}if(N.isSkinnedMesh){Se.setOptional(R,N,"bindMatrix"),Se.setOptional(R,N,"bindMatrixInverse");const Cn=N.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Se.setValue(R,"boneTexture",Cn.boneTexture,T))}N.isBatchedMesh&&(Se.setOptional(R,N,"batchingTexture"),Se.setValue(R,"batchingTexture",N._matricesTexture,T),Se.setOptional(R,N,"batchingIdTexture"),Se.setValue(R,"batchingIdTexture",N._indirectTexture,T),Se.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&Se.setValue(R,"batchingColorTexture",N._colorsTexture,T));const qr=V.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&Vt.update(N,V,Hn),(vn||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,Se.setValue(R,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ii.envMap.value=Rt,ii.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(ii.envMapIntensity.value=U.environmentIntensity),vn&&(Se.setValue(R,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&Ym(ii,Xr),at&&G.fog===!0&&dt.refreshFogUniforms(ii,at),dt.refreshMaterialUniforms(ii,G,W,Y,p.state.transmissionRenderTarget[w.id]),qo.upload(R,$u(Dt),ii,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qo.upload(R,$u(Dt),ii,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Se.setValue(R,"center",N.center),Se.setValue(R,"modelViewMatrix",N.modelViewMatrix),Se.setValue(R,"normalMatrix",N.normalMatrix),Se.setValue(R,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Cn=G.uniformsGroups;for(let $i=0,Xi=Cn.length;$i<Xi;$i++){const qu=Cn[$i];I.update(qu,Hn),I.bind(qu,Hn)}}return Hn}function Ym(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Km(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,U,V){_t.get(w.texture).__webglTexture=U,_t.get(w.depthTexture).__webglTexture=V;const G=_t.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const V=_t.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){P=w,A=U,C=V;let G=!0,N=null,at=!1,gt=!1;if(w){const Rt=_t.get(w);if(Rt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(Rt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Rt.__hasExternalTextures)T.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pt=w.depthTexture;if(Rt.__boundDepthTexture!==Pt){if(Pt!==null&&_t.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(gt=!0);const qt=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[U])?N=qt[U][V]:N=qt[U],at=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?N=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?N=qt[V]:N=qt,L.copy(w.viewport),$.copy(w.scissor),z=w.scissorTest}else L.copy(wt).multiplyScalar(W).floor(),$.copy($t).multiplyScalar(W).floor(),z=ae;if(ht.bindFramebuffer(R.FRAMEBUFFER,N)&&G&&ht.drawBuffers(w,N),ht.viewport(L),ht.scissor($),ht.setScissorTest(z),at){const Rt=_t.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,V)}else if(gt){const Rt=_t.get(w.texture),Wt=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Rt.__webglTexture,V||0,Wt)}E=-1},this.readRenderTargetPixels=function(w,U,V,G,N,at,gt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(Ct=Ct[gt]),Ct){ht.bindFramebuffer(R.FRAMEBUFFER,Ct);try{const Rt=w.texture,Wt=Rt.format,qt=Rt.type;if(!Mt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N&&R.readPixels(U,V,G,N,Kt.convert(Wt),Kt.convert(qt),at)}finally{const Rt=P!==null?_t.get(P).__webglFramebuffer:null;ht.bindFramebuffer(R.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,G,N,at,gt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(Ct=Ct[gt]),Ct){const Rt=w.texture,Wt=Rt.format,qt=Rt.type;if(!Mt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N){ht.bindFramebuffer(R.FRAMEBUFFER,Ct);const Pt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Pt),R.bufferData(R.PIXEL_PACK_BUFFER,at.byteLength,R.STREAM_READ),R.readPixels(U,V,G,N,Kt.convert(Wt),Kt.convert(qt),0);const se=P!==null?_t.get(P).__webglFramebuffer:null;ht.bindFramebuffer(R.FRAMEBUFFER,se);const _e=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Y0(R,_e,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Pt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,at),R.deleteBuffer(Pt),R.deleteSync(_e),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,V=0){w.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-V),N=Math.floor(w.image.width*G),at=Math.floor(w.image.height*G),gt=U!==null?U.x:0,Ct=U!==null?U.y:0;T.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,gt,Ct,N,at),ht.unbindTexture()},this.copyTextureToTexture=function(w,U,V=null,G=null,N=0){w.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let at,gt,Ct,Rt,Wt,qt,Pt,se,_e;const be=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(at=V.max.x-V.min.x,gt=V.max.y-V.min.y,Ct=V.isBox3?V.max.z-V.min.z:1,Rt=V.min.x,Wt=V.min.y,qt=V.isBox3?V.min.z:0):(at=be.width,gt=be.height,Ct=be.depth||1,Rt=0,Wt=0,qt=0),G!==null?(Pt=G.x,se=G.y,_e=G.z):(Pt=0,se=0,_e=0);const an=Kt.convert(U.format),oe=Kt.convert(U.type);let Dt;U.isData3DTexture?(T.setTexture3D(U,0),Dt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Dt=R.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Dt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Si=R.getParameter(R.UNPACK_ROW_LENGTH),le=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Hn=R.getParameter(R.UNPACK_SKIP_PIXELS),qs=R.getParameter(R.UNPACK_SKIP_ROWS),vn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,be.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,be.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Rt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Wt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qt);const Xr=w.isDataArrayTexture||w.isData3DTexture,Se=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const ii=_t.get(w),qr=_t.get(U),Cn=_t.get(ii.__renderTarget),$i=_t.get(qr.__renderTarget);ht.bindFramebuffer(R.READ_FRAMEBUFFER,Cn.__webglFramebuffer),ht.bindFramebuffer(R.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Xi=0;Xi<Ct;Xi++)Xr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(w).__webglTexture,N,qt+Xi),w.isDepthTexture?(Se&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,N,_e+Xi),R.blitFramebuffer(Rt,Wt,at,gt,Pt,se,at,gt,R.DEPTH_BUFFER_BIT,R.NEAREST)):Se?R.copyTexSubImage3D(Dt,N,Pt,se,_e+Xi,Rt,Wt,at,gt):R.copyTexSubImage2D(Dt,N,Pt,se,_e+Xi,Rt,Wt,at,gt);ht.bindFramebuffer(R.READ_FRAMEBUFFER,null),ht.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Se?w.isDataTexture||w.isData3DTexture?R.texSubImage3D(Dt,N,Pt,se,_e,at,gt,Ct,an,oe,be.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Dt,N,Pt,se,_e,at,gt,Ct,an,be.data):R.texSubImage3D(Dt,N,Pt,se,_e,at,gt,Ct,an,oe,be):w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Pt,se,at,gt,an,oe,be.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Pt,se,be.width,be.height,an,be.data):R.texSubImage2D(R.TEXTURE_2D,N,Pt,se,at,gt,an,oe,be);R.pixelStorei(R.UNPACK_ROW_LENGTH,Si),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,le),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Hn),R.pixelStorei(R.UNPACK_SKIP_ROWS,qs),R.pixelStorei(R.UNPACK_SKIP_IMAGES,vn),N===0&&U.generateMipmaps&&R.generateMipmap(Dt),ht.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V=null,G=null,N=0){return w.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,V,G,N)},this.initRenderTarget=function(w){_t.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),ht.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,ht.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class $a extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ry{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qe=new b;class rl{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class al extends Or{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let lr;const Jr=new b,cr=new b,hr=new b,ur=new Z,Qr=new Z,Wp=new ne,Eo=new b,ta=new b,To=new b,$d=new Z,ac=new Z,Xd=new Z;class Dh extends Ne{constructor(t=new al){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ry(e,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new rl(n,3,0,!1)),lr.setAttribute("uv",new rl(n,2,3,!1))}this.geometry=lr,this.material=t,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),Wp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-hr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ao(Eo.set(-.5,-.5,0),hr,a,cr,s,r),Ao(ta.set(.5,-.5,0),hr,a,cr,s,r),Ao(To.set(.5,.5,0),hr,a,cr,s,r),$d.set(0,0),ac.set(1,0),Xd.set(1,1);let o=t.ray.intersectTriangle(Eo,ta,To,!1,Jr);if(o===null&&(Ao(ta.set(-.5,.5,0),hr,a,cr,s,r),ac.set(0,1),o=t.ray.intersectTriangle(Eo,To,ta,!1,Jr),o===null))return;const l=t.ray.origin.distanceTo(Jr);l<t.near||l>t.far||e.push({distance:l,point:Jr.clone(),uv:Un.getInterpolation(Jr,Eo,ta,To,$d,ac,Xd,new Z),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ao(i,t,e,n,s,r){ur.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Qr.x=r*ur.x-s*ur.y,Qr.y=s*ur.x+r*ur.y):Qr.copy(ur),i.copy(t),i.x+=Qr.x,i.y+=Qr.y,i.applyMatrix4(Wp)}class ay extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=An,h=An,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qd extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const dr=new ne,Yd=new ne,Co=[],Kd=new gn,oy=new ne,ea=new ct,na=new Ga;class Ih extends ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,oy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,dr),Kd.copy(t.boundingBox).applyMatrix4(dr),this.boundingBox.union(Kd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ga),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,dr),na.copy(t.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),t.ray.intersectsSphere(na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,dr),Yd.multiplyMatrices(n,dr),ea.matrixWorld=Yd,ea.raycast(t,Co);for(let a=0,o=Co.length;a<o;a++){const l=Co[a];l.instanceId=r,l.object=this,e.push(l)}Co.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ay(new Float32Array(s*this.count),s,this.count,tu,ui));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $p extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Z:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new b,s=[],r=[],a=[],o=new b,l=new ne;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new b)}r[0]=new b,a[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ge(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ge(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lu extends yi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Z){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ly extends lu{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ro=new b,oc=new cu,lc=new cu,cc=new cu;class Xp extends yi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new b){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ro.subVectors(s[0],s[1]).add(s[0]),c=Ro);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),oc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),lc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),cc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),lc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),cc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(oc.calc(l),lc.calc(l),cc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jd(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function cy(i,t){const e=1-i;return e*e*t}function hy(i,t){return 2*(1-i)*i*t}function uy(i,t){return i*i*t}function ba(i,t,e,n){return cy(i,t)+hy(i,e)+uy(i,n)}function dy(i,t){const e=1-i;return e*e*e*t}function fy(i,t){const e=1-i;return 3*e*e*i*t}function py(i,t){return 3*(1-i)*i*i*t}function my(i,t){return i*i*i*t}function Sa(i,t,e,n,s){return dy(i,t)+fy(i,e)+py(i,n)+my(i,s)}class qp extends yi{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sa(t,s.x,r.x,a.x,o.x),Sa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gy extends yi{constructor(t=new b,e=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sa(t,s.x,r.x,a.x,o.x),Sa(t,s.y,r.y,a.y,o.y),Sa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yp extends yi{constructor(t=new Z,e=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vy extends yi{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kp extends yi{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ba(t,s.x,r.x,a.x),ba(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jp extends yi{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ba(t,s.x,r.x,a.x),ba(t,s.y,r.y,a.y),ba(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zp extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(jd(o,l.x,c.x,h.x,u.x),jd(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Z().fromArray(s))}return this}}var ol=Object.freeze({__proto__:null,ArcCurve:ly,CatmullRomCurve3:Xp,CubicBezierCurve:qp,CubicBezierCurve3:gy,EllipseCurve:lu,LineCurve:Yp,LineCurve3:vy,QuadraticBezierCurve:Kp,QuadraticBezierCurve3:jp,SplineCurve:Zp});class xy extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ol[s.type]().fromJSON(s))}return this}}class Uh extends xy{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yp(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Kp(this.currentPoint.clone(),new Z(t,e),new Z(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new qp(this.currentPoint.clone(),new Z(t,e),new Z(n,s),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new lu(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xa extends Be{constructor(t=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ge(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new b,d=new Z,f=new b,g=new b,v=new b;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=e;_++){const y=n+_*h*s,x=Math.sin(y),D=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*x,u.y=t[A].y,u.z=t[A].x*D,a.push(u.x,u.y,u.z),d.x=_/e,d.y=A/(t.length-1),o.push(d.x,d.y);const C=l[3*A+0]*x,P=l[3*A+1],E=l[3*A+0]*D;c.push(C,P,E)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const x=y+_*t.length,D=x,A=x+t.length,C=x+t.length+1,P=x+1;r.push(D,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.points,t.segments,t.phiStart,t.phiLength)}}class Sl extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new b,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class sn extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function _(){const x=new b,D=new b;let A=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const E=[],S=P/r,L=S*(e-t)+t;for(let $=0;$<=s;$++){const z=$/s,k=z*l+o,B=Math.sin(k),H=Math.cos(k);D.x=L*B,D.y=-S*n+m,D.z=L*H,u.push(D.x,D.y,D.z),x.set(B,C,H).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-S),E.push(g++)}v.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const S=v[E][P],L=v[E+1][P],$=v[E+1][P+1],z=v[E][P+1];(t>0||E!==0)&&(h.push(S,L,z),A+=3),(e>0||E!==r-1)&&(h.push(L,$,z),A+=3)}c.addGroup(p,A,0),p+=A}function y(x){const D=g,A=new Z,C=new b;let P=0;const E=x===!0?t:e,S=x===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const L=g;for(let $=0;$<=s;$++){const k=$/s*l+o,B=Math.cos(k),H=Math.sin(k);C.x=E*H,C.y=m*S,C.z=E*B,u.push(C.x,C.y,C.z),d.push(0,S,0),A.x=B*.5+.5,A.y=H*.5*S+.5,f.push(A.x,A.y),g++}for(let $=0;$<s;$++){const z=D+$,k=L+$;x===!0?h.push(k,k+1,z):h.push(k+1,k,z),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wl extends sn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new wl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hu extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new b,x=new b,D=new b;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],x),f(e[A+2],D),l(y,x,D,_)}function l(_,y,x,D){const A=D+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const E=_.clone().lerp(x,P/A),S=y.clone().lerp(x,P/A),L=A-P;for(let $=0;$<=L;$++)$===0&&P===A?C[P][$]=E:C[P][$]=E.clone().lerp(S,$/L)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){const S=Math.floor(E/2);E%2===0?(d(C[P][S+1]),d(C[P+1][S]),d(C[P][S])):(d(C[P][S+1]),d(C[P+1][S+1]),d(C[P+1][S]))}}function c(_){const y=new b;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(_),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const _=new b;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const x=m(_)/2/Math.PI+.5,D=p(_)/Math.PI+.5;a.push(x,1-D)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){const y=a[_+0],x=a[_+2],D=a[_+4],A=Math.max(y,x,D),C=Math.min(y,x,D);A>.9&&C<.1&&(y<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),D<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const _=new b,y=new b,x=new b,D=new b,A=new Z,C=new Z,P=new Z;for(let E=0,S=0;E<r.length;E+=9,S+=6){_.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),A.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),D.copy(_).add(y).add(x).divideScalar(3);const L=m(D);v(A,S+0,_,L),v(C,S+2,y,L),v(P,S+4,x,L)}}function v(_,y,x,D){D<0&&_.x===1&&(a[y]=_.x-1),x.x===0&&x.z===0&&(a[y]=D/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hu(t.vertices,t.indices,t.radius,t.details)}}class Br extends Uh{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Uh().fromJSON(s))}return this}}const _y={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Jp(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=wy(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Ua(r,a,e,o,l,f,0),a}};function Jp(i,t,e,n,s){let r,a;if(s===Ny(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Zd(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Zd(r,i[r],i[r+1],a);return a&&El(a,a.next)&&(Fa(a),a=a.next),a}function Vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(El(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Fa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ua(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ry(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?My(i,n,s,r):yy(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Fa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=by(Vs(i),t,e),Ua(i,t,e,n,s,r,2)):a===2&&Sy(i,t,e,n,s,r):Ua(Vs(i),t,e,n,s,r,1);break}}}function yy(i){const t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&br(s,o,r,l,a,c,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function My(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ae(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Nh(f,g,t,e,n),_=Nh(v,m,t,e,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&br(o,h,l,u,c,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&br(o,h,l,u,c,d,x.x,x.y)&&Ae(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&br(o,h,l,u,c,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&br(o,h,l,u,c,d,x.x,x.y)&&Ae(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function by(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!El(s,r)&&Qp(s,n,n.next,r)&&Na(s,r)&&Na(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fa(n),Fa(n.next),n=i=r),n=n.next}while(n!==i);return Vs(n)}function Sy(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dy(a,o)){let l=tm(a,o);a=Vs(a,a.next),l=Vs(l,l.next),Ua(a,t,e,n,s,r,0),Ua(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function wy(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Jp(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ly(c));for(s.sort(Ey),r=0;r<s.length;r++)e=Ty(s[r],e);return e}function Ey(i,t){return i.x-t.x}function Ty(i,t){const e=Ay(i,t);if(!e)return t;const n=tm(e,i);return Vs(n,n.next),Vs(e,e.next)}function Ay(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&br(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Na(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Cy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Cy(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function Ry(i,t,e,n){let s=i;do s.z===0&&(s.z=Nh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Py(s)}function Py(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Nh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ly(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function br(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Dy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Iy(i,t)&&(Na(i,t)&&Na(t,i)&&Uy(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||El(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function El(i,t){return i.x===t.x&&i.y===t.y}function Qp(i,t,e,n){const s=Lo(Ae(i,t,e)),r=Lo(Ae(i,t,n)),a=Lo(Ae(e,n,i)),o=Lo(Ae(e,n,t));return!!(s!==r&&a!==o||s===0&&Po(i,e,t)||r===0&&Po(i,n,t)||a===0&&Po(e,i,n)||o===0&&Po(e,t,n))}function Po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lo(i){return i>0?1:i<0?-1:0}function Iy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Na(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function Uy(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tm(i,t){const e=new Fh(i.i,i.x,i.y),n=new Fh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zd(i,t,e,n){const s=new Fh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ny(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class wa{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return wa.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Jd(t),Qd(n,t);let a=t.length;e.forEach(Jd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Qd(n,e[l]);const o=_y.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Jd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Tl extends Be{constructor(t=new Br([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Fy;let y,x=!1,D,A,C,P;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,D=p.computeFrenetFrames(h,!1),A=new b,C=new b,P=new b),d||(m=0,f=0,g=0,v=0);const E=o.extractPoints(c);let S=E.shape;const L=E.holes;if(!wa.isClockWise(S)){S=S.reverse();for(let Q=0,st=L.length;Q<st;Q++){const R=L[Q];wa.isClockWise(R)&&(L[Q]=R.reverse())}}const z=wa.triangulateShape(S,L),k=S;for(let Q=0,st=L.length;Q<st;Q++){const R=L[Q];S=S.concat(R)}function B(Q,st,R){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(st,R)}const H=S.length,Y=z.length;function W(Q,st,R){let Lt,et,Mt;const ht=Q.x-st.x,Ot=Q.y-st.y,_t=R.x-Q.x,T=R.y-Q.y,M=ht*ht+Ot*Ot,O=ht*T-Ot*_t;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(M),tt=Math.sqrt(_t*_t+T*T),K=st.x-Ot/q,At=st.y+ht/q,dt=R.x-T/tt,yt=R.y+_t/tt,Zt=((dt-K)*T-(yt-At)*_t)/(ht*T-Ot*_t);Lt=K+ht*Zt-Q.x,et=At+Ot*Zt-Q.y;const nt=Lt*Lt+et*et;if(nt<=2)return new Z(Lt,et);Mt=Math.sqrt(nt/2)}else{let q=!1;ht>Number.EPSILON?_t>Number.EPSILON&&(q=!0):ht<-Number.EPSILON?_t<-Number.EPSILON&&(q=!0):Math.sign(Ot)===Math.sign(T)&&(q=!0),q?(Lt=-Ot,et=ht,Mt=Math.sqrt(M)):(Lt=ht,et=Ot,Mt=Math.sqrt(M/2))}return new Z(Lt/Mt,et/Mt)}const it=[];for(let Q=0,st=k.length,R=st-1,Lt=Q+1;Q<st;Q++,R++,Lt++)R===st&&(R=0),Lt===st&&(Lt=0),it[Q]=W(k[Q],k[R],k[Lt]);const pt=[];let wt,$t=it.concat();for(let Q=0,st=L.length;Q<st;Q++){const R=L[Q];wt=[];for(let Lt=0,et=R.length,Mt=et-1,ht=Lt+1;Lt<et;Lt++,Mt++,ht++)Mt===et&&(Mt=0),ht===et&&(ht=0),wt[Lt]=W(R[Lt],R[Mt],R[ht]);pt.push(wt),$t=$t.concat(wt)}for(let Q=0;Q<m;Q++){const st=Q/m,R=f*Math.cos(st*Math.PI/2),Lt=g*Math.sin(st*Math.PI/2)+v;for(let et=0,Mt=k.length;et<Mt;et++){const ht=B(k[et],it[et],Lt);ot(ht.x,ht.y,-R)}for(let et=0,Mt=L.length;et<Mt;et++){const ht=L[et];wt=pt[et];for(let Ot=0,_t=ht.length;Ot<_t;Ot++){const T=B(ht[Ot],wt[Ot],Lt);ot(T.x,T.y,-R)}}}const ae=g+v;for(let Q=0;Q<H;Q++){const st=d?B(S[Q],$t[Q],ae):S[Q];x?(C.copy(D.normals[0]).multiplyScalar(st.x),A.copy(D.binormals[0]).multiplyScalar(st.y),P.copy(y[0]).add(C).add(A),ot(P.x,P.y,P.z)):ot(st.x,st.y,0)}for(let Q=1;Q<=h;Q++)for(let st=0;st<H;st++){const R=d?B(S[st],$t[st],ae):S[st];x?(C.copy(D.normals[Q]).multiplyScalar(R.x),A.copy(D.binormals[Q]).multiplyScalar(R.y),P.copy(y[Q]).add(C).add(A),ot(P.x,P.y,P.z)):ot(R.x,R.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const st=Q/m,R=f*Math.cos(st*Math.PI/2),Lt=g*Math.sin(st*Math.PI/2)+v;for(let et=0,Mt=k.length;et<Mt;et++){const ht=B(k[et],it[et],Lt);ot(ht.x,ht.y,u+R)}for(let et=0,Mt=L.length;et<Mt;et++){const ht=L[et];wt=pt[et];for(let Ot=0,_t=ht.length;Ot<_t;Ot++){const T=B(ht[Ot],wt[Ot],Lt);x?ot(T.x,T.y+y[h-1].y,y[h-1].x+R):ot(T.x,T.y,u+R)}}}j(),rt();function j(){const Q=s.length/3;if(d){let st=0,R=H*st;for(let Lt=0;Lt<Y;Lt++){const et=z[Lt];Nt(et[2]+R,et[1]+R,et[0]+R)}st=h+m*2,R=H*st;for(let Lt=0;Lt<Y;Lt++){const et=z[Lt];Nt(et[0]+R,et[1]+R,et[2]+R)}}else{for(let st=0;st<Y;st++){const R=z[st];Nt(R[2],R[1],R[0])}for(let st=0;st<Y;st++){const R=z[st];Nt(R[0]+H*h,R[1]+H*h,R[2]+H*h)}}n.addGroup(Q,s.length/3-Q,0)}function rt(){const Q=s.length/3;let st=0;Tt(k,st),st+=k.length;for(let R=0,Lt=L.length;R<Lt;R++){const et=L[R];Tt(et,st),st+=et.length}n.addGroup(Q,s.length/3-Q,1)}function Tt(Q,st){let R=Q.length;for(;--R>=0;){const Lt=R;let et=R-1;et<0&&(et=Q.length-1);for(let Mt=0,ht=h+m*2;Mt<ht;Mt++){const Ot=H*Mt,_t=H*(Mt+1),T=st+Lt+Ot,M=st+et+Ot,O=st+et+_t,q=st+Lt+_t;Gt(T,M,O,q)}}}function ot(Q,st,R){l.push(Q),l.push(st),l.push(R)}function Nt(Q,st,R){Bt(Q),Bt(st),Bt(R);const Lt=s.length/3,et=_.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);ie(et[0]),ie(et[1]),ie(et[2])}function Gt(Q,st,R,Lt){Bt(Q),Bt(st),Bt(Lt),Bt(st),Bt(R),Bt(Lt);const et=s.length/3,Mt=_.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);ie(Mt[0]),ie(Mt[1]),ie(Mt[3]),ie(Mt[1]),ie(Mt[2]),ie(Mt[3])}function Bt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function ie(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ky(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ol[s.type]().fromJSON(s)),new Tl(n,t.options)}}const Fy={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Z(r,a),new Z(o,l),new Z(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Z(a,1-l),new Z(c,1-u),new Z(d,1-g),new Z(v,1-p)]:[new Z(o,1-l),new Z(h,1-u),new Z(f,1-g),new Z(m,1-p)]}};function ky(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class uu extends hu{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uu(t.radius,t.detail)}}class du extends Be{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new b,g=new Z;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const _=p+m,y=_,x=_+n+1,D=_+n+2,A=_+1;o.push(y,x,A),o.push(x,D,A)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hr extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new b,d=new b,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const A=D/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+x,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=h[p][_+1],x=h[p][_],D=h[p+1][_],A=h[p+1][_+1];(p!==0||a>0)&&f.push(y,x,A),(p!==n-1||l<Math.PI)&&f.push(x,D,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qa extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;a.push(v,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fu extends Be{constructor(t=new jp(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new b,l=new b,c=new Z;let h=new b;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function v(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),_(),p()}function m(y){h=t.getPointAt(y/e,h);const x=a.normals[y],D=a.binormals[y];for(let A=0;A<=s;A++){const C=A/s*Math.PI*2,P=Math.sin(C),E=-Math.cos(C);l.x=E*x.x+P*D.x,l.y=E*x.y+P*D.y,l.z=E*x.z+P*D.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){const D=(s+1)*(y-1)+(x-1),A=(s+1)*y+(x-1),C=(s+1)*y+x,P=(s+1)*(y-1)+x;g.push(D,A,P),g.push(A,C,P)}}function _(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new fu(new ol[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Oy extends Ue{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class zy extends Or{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pu extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ya extends pu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const hc=new ne,tf=new b,ef=new b;class em{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new au,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(tf),ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ef),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nf=new ne,ia=new b,uc=new b;class By extends em{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ia.setFromMatrixPosition(t.matrixWorld),n.position.copy(ia),uc.copy(n.position),uc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(uc),n.updateMatrixWorld(),s.makeTranslation(-ia.x,-ia.y,-ia.z),nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf)}}class Hy extends pu{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new By}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vy extends em{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ka extends pu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Vy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=sf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function sf(){return performance.now()}const rf=new ne;class mu{constructor(t,e,n=0,s=1/0){this.ray=new Lp(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(t,e=!0,n=[]){return kh(t,this,n,e),n.sort(af),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)kh(t[s],this,n,e);return n.sort(af),n}}function af(i,t){return i.distance-t.distance}function kh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)kh(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);const im={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gy=new Wa(-1,1,1,-1,0,1);class Wy extends Be{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const $y=new Wy;class gu{constructor(t){this._mesh=new ct($y,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Gy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class sm extends Vr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ue?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ia.clone(t.uniforms),this.material=new Ue({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new gu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class of extends Vr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Xy extends Vr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class qy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Z);this._width=n.width,this._height=n.height,e=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sm(im),this.copyPass.material.blending=Fi,this.clock=new nm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}of!==void 0&&(a instanceof of?n=!0:a instanceof Xy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yy extends Vr{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Ky={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Lr extends Vr{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Z(t.x,t.y):new Z(256,256),this.clearColor=new xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(r,a,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new pn(r,a,{type:pi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new pn(r,a,{type:pi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Ky;this.highPassUniforms=Ia.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ue({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Z(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=im;this.copyUniforms=Ia.clone(h.uniforms),this.blendMaterial=new Ue({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xt,this.oldClearAlpha=1,this.basic=new Tn,this.fsQuad=new gu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Lr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Lr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ue({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ue({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Lr.BlurDirectionX=new Z(1,0);Lr.BlurDirectionY=new Z(0,1);const jy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Zy extends Vr{constructor(){super();const t=jy;this.uniforms=Ia.clone(t.uniforms),this.material=new Oy({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new gu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===up?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mp&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const sa=new b;function Pn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;sa.copy(t),sa[n]=0,sa.normalize();const c=.5*a/(a+o),h=1-sa.angleTo(i)/l;return Math.sign(sa[e])===1?h*c:o/(a+o)+c+c*(1-h)}class nn extends _i{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new b,l=new b,c=new b(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new b,v=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Pn(g,l,"z","y",r,n),d[p+1]=1-Pn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Pn(g,l,"z","y",r,n),d[p+1]=1-Pn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Pn(g,l,"x","z",r,t),d[p+1]=Pn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Pn(g,l,"x","z",r,t),d[p+1]=1-Pn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Pn(g,l,"x","y",r,t),d[p+1]=1-Pn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Pn(g,l,"x","y",r,t),d[p+1]=1-Pn(g,l,"y","x",r,e);break}}}const dc={sheenSky:{value:new xt().setRGB(.16,.36,.82)},sheenGround:{value:new xt().setRGB(.02,.04,.09)},rimColor:{value:new xt().setRGB(.55,.7,1)}},we={sky:new xt().setRGB(.8,.86,1),ground:new xt().setRGB(.3,.34,.46),key:new xt().setRGB(1,.89,.6),keyIntensity:.55,keyDir:new b(-.36,.72,.6).normalize()},Jy=`
varying vec3 vViewPosition;
uniform float toySpec;
uniform float toyGloss;
uniform float toySheen;
uniform float toyRim;
uniform float toyWrap;
uniform vec3 toySheenSky;
uniform vec3 toySheenGround;
uniform vec3 toyRimColor;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Toy( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float ndl = dot( geometryNormal, directLight.direction );
	float w = saturate( ( ndl + toyWrap ) / ( 1.0 + toyWrap ) );
	w = w * w * ( 3.0 - 2.0 * w );
	reflectedLight.directDiffuse += directLight.color * ( w * material.diffuseColor );
	vec3 h = normalize( directLight.direction + geometryViewDir );
	float s = pow( saturate( dot( geometryNormal, h ) ), toyGloss );
	s = smoothstep( 0.25, 0.75, s ) * step( 0.0, ndl );
	reflectedLight.directDiffuse += directLight.color * ( s * toySpec * material.specularStrength );
}
void RE_IndirectDiffuse_Toy( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * material.diffuseColor;
	float fres = 1.0 - saturate( dot( geometryNormal, geometryViewDir ) );
	fres *= fres;
	vec3 up = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
	float k = saturate( dot( geometryNormal, up ) * 0.5 + 0.5 );
	vec3 env = mix( toySheenGround, toySheenSky, k * k );
	reflectedLight.indirectDiffuse += env * ( toySheen * ( 0.4 + 0.6 * fres ) ) + toyRimColor * ( toyRim * fres * fres );
}
#define RE_Direct RE_Direct_Toy
#define RE_IndirectDiffuse RE_IndirectDiffuse_Toy
`;function Et(i,t={}){const e=new zy({color:i,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,map:t.map??null,vertexColors:t.vertexColors??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??zi,flatShading:t.flat??!1,depthWrite:t.depthWrite??!0}),n={toySpec:{value:t.spec??.06},toyGloss:{value:t.gloss??16},toySheen:{value:t.sheen??0},toyRim:{value:t.rim??.08},toyWrap:{value:t.wrap??.5},toySheenSky:dc.sheenSky,toySheenGround:dc.sheenGround,toyRimColor:dc.rimColor};return e.userData.toy=n,e.onBeforeCompile=s=>{Object.assign(s.uniforms,n),s.fragmentShader=s.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Jy)},e.customProgramCacheKey=()=>"toy1",e}function Xe(i,t={}){return Et(i,{spec:.22,gloss:22,sheen:.14,rim:.12,...t})}function Ee(i,t={}){return Et(i,{spec:.16,gloss:12,sheen:.04,rim:.08,...t})}function lf(i="#e3a93a",t={}){return Et(i,{spec:.45,gloss:18,sheen:.05,rim:.2,...t})}function Vi(i,t=i){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Gi(i,{srgb:t=!0,repeat:e=!1,aniso:n=4}={}){const s=new $p(i);return t&&(s.colorSpace=dn),e&&(s.wrapS=s.wrapT=Bs),s.anisotropy=n,s}const cf={},Wi=(i,t)=>cf[i]??(cf[i]=t());function Qy(){return Wi("flash",()=>{const[i,t]=Vi(256,128),e=(n,s,r,a)=>{const o=t.createLinearGradient(20,64,s,n);o.addColorStop(0,`rgba(255,255,242,${a})`),o.addColorStop(.3,`rgba(255,228,174,${a*.75})`),o.addColorStop(1,"rgba(255,170,80,0)"),t.fillStyle=o,t.beginPath(),t.moveTo(18,64),t.bezierCurveTo(60,64-r,s*.7,n-r*.2,s,n),t.bezierCurveTo(s*.7,n+r*.3,50,64+r,18,64),t.fill()};return t.filter="blur(3px)",e(61,249,20,.5),e(43,177,18,.3),e(82,153,15,.28),t.filter="blur(1px)",e(64,151,8,.95),Gi(i)})}function tM(){return Wi("burst",()=>{const[i,t]=Vi(128);t.lineCap="round";for(const[n,s]of[[.3,31],[1.7,24],[2.9,37],[4.5,20],[5.5,27]]){const r=64+Math.cos(n)*s,a=64+Math.sin(n)*s,o=t.createLinearGradient(64,64,r,a);o.addColorStop(0,"#fff4d8"),o.addColorStop(1,"rgba(255,223,180,0)"),t.strokeStyle=o,t.lineWidth=2,t.beginPath(),t.moveTo(64,64),t.lineTo(r,a),t.stroke()}const e=t.createRadialGradient(64,64,0,64,64,12);return e.addColorStop(0,"#fff8e5"),e.addColorStop(1,"rgba(255,230,185,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Gi(i)})}function rm(){return Wi("glow",()=>{const[t,e]=Vi(128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),Gi(t)})}function eM(){return Wi("fade",()=>{const[i,t]=Vi(4,256),e=t.createLinearGradient(0,256,0,0);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,4,256),Gi(i)})}function nM(){return Wi("shadow",()=>{const[e,n]=Vi(256,128);n.fillStyle="rgba(255,255,255,0.075)";for(let s=0;s<16;s++){const r=4+s*3.2,a=r,o=r,l=256-r*2,c=128-r*2,h=Math.max(4,40-s*2);n.beginPath(),n.moveTo(a+h,o),n.arcTo(a+l,o,a+l,o+c,h),n.arcTo(a+l,o+c,a,o+c,h),n.arcTo(a,o+c,a,o,h),n.arcTo(a,o,a+l,o,h),n.closePath(),n.fill()}return Gi(e)})}function iM(){return Wi("pool",()=>{const[t,e]=Vi(256);e.save(),e.scale(1,1.25);const n=e.createRadialGradient(256/2,0,0,256/2,0,256*.62);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,0.5)"),n.addColorStop(.65,"rgba(255,255,255,0.12)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),e.restore(),Gi(t)})}function vu(){return Wi("floor",()=>{const[e,n]=Vi(256,512),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"rgb(150,166,206)"),s.addColorStop(.45,"rgb(205,212,232)"),s.addColorStop(1,"rgb(255,255,255)"),n.fillStyle=s,n.fillRect(0,0,256,512);const r=[190,360];n.fillStyle="rgba(60,72,110,0.22)";for(const l of[0,128,256])n.fillRect(l-1.5,0,3,512);for(const l of r)n.fillRect(0,l-1.5,256,3);n.fillStyle="rgba(255,255,255,0.18)";for(const l of[0,128,256])n.fillRect(l+1.5,0,1.5,512);for(const l of r)n.fillRect(0,l+1.5,256,1.5);const a=n.createLinearGradient(0,0,0,512*.14);a.addColorStop(0,"rgba(10,18,44,0.75)"),a.addColorStop(1,"rgba(10,18,44,0)"),n.fillStyle=a,n.fillRect(0,0,256,512*.14);const o=Gi(e,{aniso:8});return o.wrapS=Bs,o})}function am(){return Wi("mat",()=>{const[t,e]=Vi(64);e.fillStyle="rgb(215,215,215)",e.fillRect(0,0,64,64),e.lineWidth=3;for(const[n,s]of[[1,"rgba(255,255,255,0.55)"],[-1,"rgba(120,120,120,0.45)"]]){e.strokeStyle=s;for(let r=-64;r<=64*2;r+=16)e.beginPath(),e.moveTo(r,0),e.lineTo(r+n*64,64),e.stroke()}return Gi(t,{repeat:!0,aniso:8})})}function sM(){return Wi("hazard",()=>{const[i,t]=Vi(128,64);t.fillStyle="#ffc533",t.fillRect(0,0,128,64),t.fillStyle="#2b2f3a";for(let e=-64;e<128;e+=64)t.beginPath(),t.moveTo(e,64),t.lineTo(e+32,64),t.lineTo(e+96,0),t.lineTo(e+64,0),t.closePath(),t.fill();return Gi(i,{repeat:!0})})}const Kn=5.2/350,rM=Z,F={slide:Xe("#393c47"),frame:Xe("#3e414c",{spec:.18}),mag:Xe("#2d303b"),barrel:Xe("#5d6270",{spec:.4,gloss:26}),uzi:Xe("#5c6584",{spec:.32,sheen:.1}),uziDark:Xe("#444c66"),uziGrip:Xe("#37425a"),gunmetal:Xe("#4a4f5e",{spec:.34,gloss:26}),gunDark:Xe("#2e384e"),wood:Ee("#b35a20"),woodDark:Ee("#8f4416"),dark:Et("#1b1d23",{spec:.02,rim:0}),groove:Et("#25272e",{spec:.03,rim:0}),orange:Ee("#f08a20"),yellow:Ee("#ffc533"),olive:Ee("#56703a"),oliveDark:Ee("#46602f"),rubber:Et("#262a35",{spec:.03}),brass:lf(),copper:lf("#d08a3c"),shell:Ee("#d9412e",{spec:.22}),white:Et("#f4f0e4")};function di(i){return i.castShadow=!0,i.receiveShadow=!0,i}function lt(i,t,e,n,s,r,a,o,l=3){const c=t-i,h=n-e,u=r-s,d=Math.max(.05,Math.min(a,c/2-.01,h/2-.01,u/2-.01)),f=new ct(new nn(c,h,u,l,d),o);return f.position.set((i+t)/2,(e+n)/2,(s+r)/2),di(f)}function pe(i,t,e,n){const s=Math.max(.05,t-e*2),r=new Tl(i,{depth:s,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelOffset:-e,bevelSegments:4,curveSegments:10});return r.translate(0,0,-s/2),di(new ct(r,n))}function om(i,t,e){const n=t.length;for(let s=0;s<n;s++){const[r,a,o=e]=t[s],[l,c]=t[(s+n-1)%n],[h,u]=t[(s+1)%n],d=Math.hypot(l-r,c-a)||1,f=Math.hypot(h-r,u-a)||1,g=Math.min(o,d/2,f/2),v=r+(l-r)/d*g,m=a+(c-a)/d*g,p=r+(h-r)/f*g,_=a+(u-a)/f*g;s===0?i.moveTo(v,m):i.lineTo(v,m),i.quadraticCurveTo(r,a,p,_)}return i.closePath(),i}function Me(i,t=0){return om(new Br,i,t)}function ka(i,t=0){return om(new Uh,i,t)}function kt(i,t,e,n,s=0,r=0,a=24){const o=new sn(e,e,t-i,a);o.rotateZ(-Math.PI/2);const l=new ct(o,n);return l.position.set((i+t)/2,s,r),di(l)}function ll(i,t,e,n,s,r=0,a=20){const o=new sn(e,e,n,a);o.rotateX(Math.PI/2);const l=new ct(o,s);return l.position.set(i,t,r),di(l)}function cl(i,t,e,n,s,r=.45){const a=new ct(new Hr(e,20,12),s);return a.scale.z=r,a.position.set(i,t,n),di(a)}const fc={};function $s(i,t,e=20){if(fc[i])return fc[i];const n=new Xa(t.map(([s,r])=>new rM(s,r)),e);return n.rotateZ(-Math.PI/2),fc[i]=n}function xu(){return $s("casing",[[0,0],[8.4,0],[9,.8],[9,2.4],[8.2,3.2],[8.6,4],[8.6,26],[6.6,26],[6.6,4],[0,4]])}function lm(){return $s("rifle",[[0,0],[8.4,0],[9,.8],[9,2.4],[8.2,3.2],[8.6,4],[8.4,28],[6,33],[5.6,40],[4,40],[4,33],[0,32]])}function cm(){return $s("rifle-long",[[0,0],[8.4,0],[9,.8],[9,2.4],[8.2,3.2],[8.6,4],[8.4,39],[6,45],[5.6,51],[4,51],[4,45],[0,44]])}function aM(){return $s("rifle-bullet",[[0,0],[5.3,0],[5.3,6],[4.7,11],[3.1,17],[1.2,21],[0,22]])}function oM(){return $s("bullet",[[0,0],[8.2,0],[8.2,4],[7.4,9],[5,13.5],[0,15.5]])}function hm(){return $s("hull",[[0,9],[11,9],[11,42],[9.5,44],[4,44.5],[0,44.5]])}function _u(){return $s("shellHead",[[0,0],[12,0],[12.5,1],[12.5,3],[11.4,3.6],[11.4,11],[11,11.5],[0,11.5]])}function Dr(i="pistol"){const t=new It;if(i==="shell")return t.add(di(new ct(hm(),F.shell))),t.add(di(new ct(_u(),F.brass))),t;const e=i==="rifle"||i==="rifle-long";t.add(di(new ct(i==="rifle-long"?cm():e?lm():xu(),F.brass)));const n=di(new ct(e?aM():oM(),F.copper));return n.position.x=i==="rifle-long"?49:e?38:25,t.add(n),t}class Gr{constructor(){this.root=new It,this.pivot=new It,this.root.add(this.pivot),this.model=new It,this.model.scale.setScalar(Kn),this.pivot.add(this.model),this.muzzleAnchor=new Ne,this.portAnchor=new Ne,this.model.add(this.muzzleAnchor,this.portAnchor),this.magSlot=new It,this.model.add(this.magSlot),this.mags=[],this.mag=null,this.magAxis=new b(0,-1,0),this.magCenter=new b,this.magTilt=0,this.inset=0,this.rest=new gn,this.kit=new Set,this.evoParts=[],this.evoHidden=[],this.baseMuzzle=new b,this.blast=null}finish(t){this.model.position.copy(t).multiplyScalar(-Kn),this.baseMuzzle.copy(this.muzzleAnchor.position),this.blast=this.spec.blast,this.seatNewMag(),this.shadows(),this.measure()}seatNewMag(){var e;for(const n of this.mags)(e=n.parent)==null||e.remove(n);const t=this.buildMag();this.mags=t?[t]:[],this.mag=t,t&&(this.magSlot.add(t),this.setMagOut(t,0))}shadows(){this.root.traverse(t=>{t.isMesh&&!t.material.transparent&&t.material!==F.dark&&(t.castShadow=!0)})}measure(){const t=this.pivot,e=[t.position.clone(),t.quaternion.clone(),t.scale.clone()];t.position.set(0,0,0),t.quaternion.identity(),t.scale.set(1,1,1),this.root.updateMatrixWorld(!0),hf.copy(this.root.matrixWorld).invert(),uf(this.model,this.rest,hf),t.position.copy(e[0]),t.quaternion.copy(e[1]),t.scale.copy(e[2]),this.root.updateMatrixWorld(!0)}setEvo(t,e){var r;for(const a of this.evoParts)(r=a.parent)==null||r.remove(a);for(const a of this.evoHidden)a.visible=!0;this.evoParts=[],this.evoHidden=[];const n=e.slice(0,t);this.kit=new Set(n),this.root.updateMatrixWorld(!0),this.muzzleAnchor.position.copy(this.baseMuzzle),this.blast=this.spec.blast;let s=null;return n.forEach((a,o)=>{const l=this.kitPart(a);if(l){if(l.add){const c=new It;c.userData.kind=a,(l.parent??this.model).add(c),c.add(l.add),c.updateMatrixWorld(!0),uf(l.add,lM).getCenter(Do),c.worldToLocal(Do),c.position.copy(Do),l.add.position.sub(Do),this.evoParts.push(c),o===n.length-1&&(s=c)}for(const c of l.hide??[])c.visible=!1,this.evoHidden.push(c);l.muzzle&&(this.muzzleAnchor.position.x=l.muzzle),l.blast&&(this.blast={...this.blast,...l.blast})}}),this.seatNewMag(),this.shadows(),this.measure(),s}kitPart(){return null}buildMag(){return null}setAction(){}setTrigger(){}setHold(){}setCatch(){}setLoading(){}spin(){}setMagOut(t,e,n=0){t.position.copy(this.magAxis).multiplyScalar(e).add(this.magCenter),t.position.z+=n*40,t.rotation.z=this.magTilt*e+n*.5}wrapMag(t,e=()=>{}){const n=new It;return t.position.copy(this.magCenter).negate(),n.add(t),n.userData.setLoaded=e,n}silhouette(t){this.root.traverse(e=>{e.isMesh&&(e.material.transparent&&(e.visible=!1),e.material=t,e.castShadow=!1,e.receiveShadow=!1)})}muzzleWorld(t){return this.muzzleAnchor.getWorldPosition(t)}portWorld(t){return this.portAnchor.getWorldPosition(t)}boreDir(t){return this.model.updateWorldMatrix(!0,!1),t.set(1,0,0).transformDirection(this.model.matrixWorld)}sideDir(t){return this.model.updateWorldMatrix(!0,!1),t.set(0,0,1).transformDirection(this.model.matrixWorld)}upDir(t){return this.model.updateWorldMatrix(!0,!1),t.set(0,1,0).transformDirection(this.model.matrixWorld)}}const hf=new ne,pc=new ne,lM=new gn,cM=new gn,Do=new b;function uf(i,t,e=null){return t.makeEmpty(),i.traverseVisible(n=>{!n.isMesh||n.userData.noBounds||(n.geometry.boundingBox||n.geometry.computeBoundingBox(),pc.copy(n.matrixWorld),e&&pc.premultiply(e),t.union(cM.copy(n.geometry.boundingBox).applyMatrix4(pc)))}),t}const ei=5.2,ci=.45,bn=.5,Oh=.06,Yo=bn+Oh,ss=[-1.25,2.35],mc=.55,fr=3.3,$e=-4,xs=ei-ci,$n=92,pr=5.96,hM=-1,Sn=i=>-i*ei-ei/2,um=i=>Math.max(0,Math.ceil((-i-ei/2)/ei-1e-6)),fe={halfW:15,gunX:-11,benchX0:-15.5,benchX1:-5.5,targetX:11};function dm(i,t,e){const n=Sn(um(t)),s=n+Yo;return i>fe.benchX0&&i<fe.benchX1&&e>ss[0]&&e<ss[1]&&t>=s-.25?s:n}function Yn(i,t,e,n,s,r,a,o,l=!0){const c=new ct(new nn(i,t,e,3,Math.min(n,i/2-.001,t/2-.001,e/2-.001)),s);return c.position.set(r,a,o),c.castShadow=l,c.receiveShadow=!0,c}function Ko(i,t,e,n,s,{additive:r=!1,flat:a=!1}={}){const o=new ct(new Je(t,e),new Tn({color:n,map:i,transparent:!0,opacity:s,depthWrite:!1,blending:r?ti:Fs,polygonOffset:!0,polygonOffsetFactor:-2}));return a&&(o.rotation.x=-Math.PI/2),o.renderOrder=1,o}function zh(i,t,e=.55){return Ko(nM(),i,t,"#060b1c",e,{flat:!0})}function ra(i,t,e,n,s){const r=new Ih(t,e,n);r.receiveShadow=!0;const a=new ne;for(let o=0;o<n;o++){const[l,c,h]=s(o);r.setMatrixAt(o,a.makeTranslation(l,c,h))}return i.add(r),r}function uM(i,t,e,n,s){const r=new It,a=e-t,o=ss[1]-ss[0],l=(ss[0]+ss[1])/2,c=(t+e)/2,h=zh(a+1,o+1,.55);h.position.set(c,.006,l),r.add(h),r.add(Yn(a,bn-.06,o,.16,i.stand,c,(bn-.06)/2,l)),r.add(Yn(a+.06,.12,o+.06,.06,i.standTop,c,bn-.06,l)),r.add(Yn(.72,bn+.1,1,.16,i.orange,t+.3,(bn+.1)/2,ss[1]-.42)),r.add(Yn(.62,bn+.2,.95,.16,i.orange,e-.22,(bn+.2)/2,ss[1]-.4));const u=n+.35,d=e-.4,f=Yn(d-u,Oh,2.5,.03,i.mat,(u+d)/2,bn+Oh/2,.35,!1);r.add(f);const g=new It,v=zh(2.1,1.4,.5);v.position.y=.004,g.add(v),g.add(Yn(1.6,.5,1,.1,i.olive,0,.25,0)),g.add(Yn(1.66,.2,1.06,.08,i.oliveLid,0,.56,0)),g.add(Yn(1.18,.07,.68,.035,i.oliveLid,0,.68,0)),g.position.set(n-.48,bn,.25),r.add(g);const m=p=>{const _=Dr(s);return s==="shell"?_.scale.set(Kn*.82,Kn*.95,Kn*.95):_.scale.set(Kn*.82,Kn*1.45,Kn*1.45),p&&(_.rotation.z=Math.PI/2),_};if(s==="shell")for(const[p,_]of[[.2,1.8],[.52,2]]){const y=m(!0);y.position.set(n+p,bn,_),r.add(y)}else{const p=m(!0);p.position.set(n+.19,bn,.62),r.add(p);const _=m(!1);_.position.set(n+.36,bn+9*Kn*1.45,.78),_.rotation.y=-.15,r.add(_)}return r}function dM(i,t,e,{shadowSize:n=2048}={}){i.background=new xt("#0c1730"),i.add(new Ya(we.sky,we.ground,1));const s=new Ka(we.key,we.keyIntensity);s.castShadow=!0,s.shadow.mapSize.set(n,n),s.shadow.intensity=.7,s.shadow.radius=3;const r=s.shadow.camera;r.left=-19,r.right=19,r.top=12,r.bottom=-12,r.near=1,r.far=50,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,i.add(s,s.target);const a={floor:Et("#9a979e",{map:vu(),spec:.03,gloss:8,rim:0}),floorLip:Et("#8794ad",{spec:.1}),slab:Et("#2b4b73",{spec:.04}),slabLow:Et("#203a5f",{spec:.02}),wall:Et("#1b3961",{spec:0,rim:0}),panel:Et("#1f3e68",{spec:.03,rim:0}),panelFrame:Et("#22446d",{spec:.08,gloss:10,rim:0}),wainscot:Et("#1d406b",{spec:.06,rim:0}),pillar:Et("#355b83",{spec:.06,gloss:10,rim:.05}),plinth:Et("#33587f",{spec:.1,gloss:10}),stand:Et("#4a6186",{spec:.08,gloss:10}),standTop:Et("#4d5f80",{spec:.08,gloss:10}),orange:Ee("#e88724"),mat:Et("#3a4560",{map:am(),spec:.03,rim:0}),olive:Ee("#56703a"),oliveLid:Ee("#5c7742"),lampHousing:Et("#16264a",{spec:.1}),lamp:Et("#fff2c0",{emissive:"#ffe7a6",emissiveIntensity:1.5,rim:0})};a.mat.map.repeat.set(10,5);const o=fr-$e,l=new nn($n,ci,o+.8,2,.08),c=new nn($n,ci*.42,.1,2,.04),h=new nn($n,.1,.3,3,.045),u=new Je($n,o);a.floor.map.repeat.set($n/5.2,1);for(let k=-1;k<e;k++){const B=Sn(k),H=new ct(l,a.slab);H.position.set(0,B-ci/2,(fr+$e-.8)/2),H.receiveShadow=!0,i.add(H);const Y=new ct(c,a.slabLow);Y.position.set(0,B-ci+ci*.21,fr+.03),i.add(Y);const W=new ct(u,a.floor);W.rotation.x=-Math.PI/2,W.position.set(0,B+.004,(fr+$e)/2),W.receiveShadow=!0,i.add(W);const it=new ct(h,a.floorLip);it.position.set(0,B-.02,fr-.1),it.receiveShadow=!0,i.add(it)}const d=new ct(new _i($n,4,o+.8),a.slabLow);d.position.set(0,Sn(-1)+2,(fr+$e-.8)/2),i.add(d);const f=Sn(-1),g=Sn(e-1),v=new ct(new Je($n,f-g+2),a.wall);v.position.set(0,(f+g)/2,$e-.05),v.receiveShadow=!0,i.add(v);const m=Math.ceil($n/pr),p=-Math.floor(m/2),_=e*m,y=k=>[Math.floor(k/m)%e,k%m+p],x=k=>hM+k*pr,D=4.3,A=2.86,C=2.11,P=.17;ra(i,new nn(D-P,A-P,.1,2,.04),a.panel,_,k=>{const[B,H]=y(k);return[x(H)+pr/2,Sn(B)+C,$e+.05]}),ra(i,new nn(D,P,.22,3,.07),a.panelFrame,_*2,k=>{const[B,H]=y(k%_),Y=k<_?1:-1;return[x(H)+pr/2,Sn(B)+C+Y*(A-P)/2,$e+.11]}),ra(i,new nn(P,A-P*1.2,.22,3,.07),a.panelFrame,_*2,k=>{const[B,H]=y(k%_),Y=k<_?1:-1;return[x(H)+pr/2+Y*(D-P)/2,Sn(B)+C,$e+.11]}),ra(i,new nn(1.15,xs,.55,3,.16),a.pillar,_,k=>{const[B,H]=y(k);return[x(H),Sn(B)+xs/2,$e+.27]}),ra(i,new nn(1.45,.76,.8,3,.14),a.plinth,_,k=>{const[B,H]=y(k);return[x(H),Sn(B)+.38,$e+.4]});const E=[],S=eM(),L=iM(),$=new al({map:rm(),color:new xt(1.2,.95,.6),transparent:!0,opacity:.4,blending:ti,depthWrite:!1}),z=[];for(let k=p;k<p+m;k+=2)z.push(x(k)-pr/2);for(let k=0;k<e;k++){const B=Sn(k);i.add(Yn($n,.42,.22,.08,a.wainscot,0,B+.32,$e+.11,!1));const H=Ko(S,$n,.9,"#08112a",.6);H.position.set(0,B+.45,$e+.85),i.add(H);const Y=Ko(S,$n,1.5,"#07102a",.85);Y.rotation.z=Math.PI,Y.position.set(0,B+xs-.75,$e+.6),i.add(Y);for(const W of z){i.add(Yn(1.4,.2,.5,.08,a.lampHousing,W,B+xs-.1,$e+.9,!1)),i.add(Yn(1.12,.13,.36,.06,a.lamp,W,B+xs-.2,$e+.98,!1));const it=new Dh($);it.scale.set(2.6,.85,1),it.position.set(W,B+xs-.24,$e+1.25),i.add(it);const pt=Ko(L,5.2,3,"#ffc97a",.13,{additive:!0});pt.position.set(W,B+xs-.25-1.5,$e+.62),i.add(pt)}E.push({floor:B,bench:null,benchKey:""})}return{key:s,lanes:E,relayout(k){E.forEach((B,H)=>{const Y=k(H),W=`${fe.benchX0.toFixed(3)}|${fe.benchX1.toFixed(3)}|${fe.gunX.toFixed(3)}|${Y}`;B.benchKey!==W&&(B.bench&&(i.remove(B.bench),B.bench.traverse(it=>it.isMesh&&it.geometry.type!=="LatheGeometry"&&it.geometry.dispose())),B.bench=uM(a,fe.benchX0,fe.benchX1,fe.gunX,Y),B.bench.position.y=B.floor,B.benchKey=W,i.add(B.bench))})},follow(k){s.target.position.set(0,k-.5,0),s.position.copy(we.keyDir).multiplyScalar(22).add(s.target.position)}}}const fM={pistol:{length:.64,diameter:.3,points:[[0,-1],[.82,-1],[1,-.9],[1,-.4],[.86,-.22],[.48,-.06],[0,0]]},rifle:{length:.88,diameter:.28,points:[[0,-1],[.75,-1],[1,-.88],[1,-.49],[.77,-.27],[.35,-.08],[0,0]]},shell:{length:.4,diameter:.38,points:[[0,-1],[.65,-.88],[.95,-.66],[1,-.5],[.95,-.34],[.65,-.12],[0,0]]}};let aa;function pM(){if(aa)return aa;aa={};for(const[i,t]of Object.entries(fM)){const e=new Xa(t.points.map(([s,r])=>new Z(s*t.diameter*.5,r*t.length)),12);e.rotateZ(-Math.PI/2);const n=new qa(t.diameter*.47,t.diameter*.055,4,12);n.rotateY(Math.PI/2),n.translate(-t.length*.79,0,0),aa[i]={geometry:e,band:n,length:t.length,diameter:t.diameter}}return aa}function mM(i){return{body:Et("#df9e49",{spec:.7,gloss:34,sheen:.12,rim:.2,emissive:i,emissiveIntensity:.045}),band:Et("#ffe296",{spec:.85,gloss:26,rim:.1})}}const gM=`
  attribute vec2 aCorner;
  attribute vec4 aData;   // x: half-size, y: age 0..1, z: seed, w: opacity
  attribute vec3 aTint;
  attribute vec2 aShape; // stretch and initial drift angle
  varying vec2 vUv;
  varying float vAge;
  varying float vSeed;
  varying float vAlpha;
  varying vec3 vTint;
  void main() {
    vUv = aCorner;
    vAge = aData.y;
    vSeed = aData.z;
    vAlpha = aData.w;
    vTint = aTint;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec2 p = aCorner * vec2(aShape.x, 1.0) * aData.x;
    float c = cos(aShape.y), s = sin(aShape.y);
    mv.xy += mat2(c, s, -s, c) * p;
    gl_Position = projectionMatrix * mv;
  }`,vM=`
  uniform float uTime;
  varying vec2 vUv;
  varying float vAge;
  varying float vSeed;
  varying float vAlpha;
  varying vec3 vTint;

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  void main() {
    vec2 p = vUv;
    float t = uTime * 0.16 + vSeed * 13.0;
    float n = noise(p * 2.8 + vec2(vSeed * 7.0, -t));
    vec2 drift = vec2(noise(p * 2.0 + t) - 0.5, n - 0.5) * 0.26;
    float r = length((p + drift) * vec2(1.0, 1.08));
    float body = exp(-r * r * 2.6) * (1.0 - smoothstep(0.66, 1.0, r));
    float fade = 1.0 - smoothstep(0.22, 1.0, vAge);
    float a = body * fade * vAlpha * (0.7 + n * 0.3);
    if (a < 0.003) discard;
    // Broad lit upper lobe and a cooler lower edge give each puff readable volume.
    float light = 0.76 + 0.20 * smoothstep(-0.7, 0.65, p.y) + n * 0.12;
    vec3 col = vTint * light;
    gl_FragColor = vec4(col, a);
  }`,xM=i=>1-(1-i)*(1-i);class _M{constructor(t,e=240){this.max=e,this.items=[];for(let o=0;o<e;o++)this.items.push({active:!1,t:0,life:1,size:.1,drag:3,alpha:1,stretch:1,angle:0,seed:Math.random(),pos:new b,vel:new b,tint:new xt});this.next=0,this.time=0;const n=new Be,s=new Float32Array(e*8),r=[],a=[-1,-1,1,-1,1,1,-1,1];for(let o=0;o<e;o++){s.set(a,o*8);const l=o*4;r.push(l,l+1,l+2,l,l+2,l+3)}this.pos=new qe(new Float32Array(e*12),3),this.data=new qe(new Float32Array(e*16),4),this.shapes=new qe(new Float32Array(e*8),2),this.tints=new qe(new Float32Array(e*12),3);for(const o of[this.pos,this.data,this.tints,this.shapes])o.setUsage(P0);n.setAttribute("position",this.pos),n.setAttribute("aCorner",new qe(s,2)),n.setAttribute("aData",this.data),n.setAttribute("aTint",this.tints),n.setAttribute("aShape",this.shapes),n.setIndex(r),this.mat=new Ue({uniforms:{uTime:{value:0}},vertexShader:gM,fragmentShader:vM,transparent:!0,depthWrite:!1}),this.mesh=new ct(n,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,t.add(this.mesh)}spawn(t,e,n,s,r,a=3,o=1,l=1){let c=null;for(let h=0;h<this.max;h++){const u=this.items[(this.next+h)%this.max];if(!u.active){c=u,this.next=(this.next+h+1)%this.max;break}}c||(c=this.items[this.next],this.next=(this.next+1)%this.max),c.active=!0,c.t=0,c.life=s,c.size=n,c.drag=a,c.alpha=o,c.stretch=l,c.angle=Math.atan2(e.y,e.x),c.seed=Math.random(),c.pos.copy(t),c.vel.copy(e),c.tint.copy(r)}update(t){this.time=(this.time+t)%200,this.mat.uniforms.uTime.value=this.time;const e=this.pos.array,n=this.data.array,s=this.tints.array;for(let r=0;r<this.max;r++){const a=this.items[r];let o=0,l=0,c=0;a.active&&(a.t+=t,l=a.t/a.life,l>=1?(a.active=!1,l=0):(a.vel.multiplyScalar(Math.exp(-a.drag*t)),a.vel.y+=.9*t,a.pos.addScaledVector(a.vel,t),o=a.size*(.8+1.75*xM(l)),c=a.alpha*Math.min(1,a.t/.022)));for(let h=0;h<4;h++){const u=r*4+h;e[u*3]=a.pos.x,e[u*3+1]=a.pos.y,e[u*3+2]=a.pos.z,n[u*4]=o,n[u*4+1]=l,n[u*4+2]=a.seed,n[u*4+3]=c,this.shapes.array[u*2]=1+(a.stretch-1)*(1-l*.6),this.shapes.array[u*2+1]=a.angle,s[u*3]=a.tint.r,s[u*3+1]=a.tint.g,s[u*3+2]=a.tint.b}}this.shapes.needsUpdate=!0,this.pos.needsUpdate=!0,this.data.needsUpdate=!0,this.tints.needsUpdate=!0}}const rn={glock19:{name:"GLOCK 19",magSize:15,damage:10,fireRate:3.5,autoRate:.3,minSpread:1.05,maxSpread:2.2,bloom:.6,convergence:2.6,reload:2.4},uzi:{name:"UZI",magSize:32,damage:6.5,fireRate:9,autoRate:.6,minSpread:1.15,maxSpread:2.4,bloom:.35,convergence:2.2,reload:2.6},m870:{name:"M870",magSize:6,pellets:8,damage:4,fireRate:1.3,autoRate:.22,minSpread:1.2,maxSpread:2.3,bloom:1,convergence:2.4,reload:3.6},ak47:{name:"AK-47",magSize:30,damage:11,fireRate:6.5,autoRate:.45,minSpread:.95,maxSpread:2.3,bloom:.4,convergence:2.4,reload:2.8},minigun:{name:"MINIGUN",magSize:120,damage:5.5,fireRate:18,autoRate:1.2,minSpread:1.2,maxSpread:2.4,bloom:.22,convergence:2,reload:4},revolver:{name:"РЕВОЛЬВЕР",magSize:6,damage:24,fireRate:1.8,autoRate:.2,minSpread:.95,maxSpread:2.3,bloom:.9,convergence:2.4,reload:2.6,crit:3,fan:8}},yM=["glock19","revolver","uzi","m870","ak47","minigun"],ja=[{weapon:"glock19",scale:1,startTier:0},{weapon:"revolver",scale:1,startTier:0},{weapon:"uzi",scale:1,startTier:0},{weapon:"glock19",scale:1,startTier:0}],ks=[{id:"damage",icon:"💥",title:"Урон",baseCost:12,growth:1.75,max:60,value:(i,t,e)=>i.damage*e.scale*Math.pow(1.22,t),fmt:(i,t)=>(t.pellets??1)>1?`${t.pellets}×${hl(i)}`:hl(i)},{id:"auto",icon:"🤖",title:"Автострельба",baseCost:20,growth:1.65,max:25,value:(i,t)=>t>=25?i.fireRate:i.autoRate*Math.pow(i.fireRate/i.autoRate,Math.max(0,t)/25),fmt:i=>i>=1?`${i.toFixed(1)}/с`:`1 в ${(1/i).toFixed(1)}с`},{id:"accuracy",icon:"🎯",title:"Точность",baseCost:18,growth:1.7,max:20,value:(i,t)=>Math.max(.1,i.minSpread*Math.pow(.88,t)),fmt:i=>`±${(i*10).toFixed(0)} см`},{id:"focus",icon:"🔭",title:"Точность автострельбы",baseCost:16,growth:1.6,max:15,value:(i,t)=>.7*Math.pow(.84,t),fmt:i=>`ждёт ${Math.round((1-i)*100)}% сведения`},{id:"aim",icon:"◎",title:"Сведение",baseCost:16,growth:1.6,max:15,value:(i,t)=>i.convergence*Math.pow(.88,t),fmt:i=>`${i.toFixed(2)}с`},{id:"reload",icon:"🔄",title:"Перезарядка",baseCost:14,growth:1.6,max:15,value:(i,t)=>Math.max(.6,i.reload*Math.pow(.9,t)),fmt:i=>`${i.toFixed(2)}с`}];function MM(i,t,e){return Math.round(i.baseCost*Math.pow(i.growth,t)*e.scale)}function Ea(i,t,e=0,n={}){const s=rn[i.weapon],r=l=>ks.find(c=>c.id===l).value(s,t[l]||0,i),a={damage:1,minSpread:1,magSize:1,autoRate:1,bloom:1,convergence:1,reload:1};for(const l of Za[i.weapon].slice(0,e))for(const[c,h]of Object.entries(EM(l,n[l]||0)))a[c]*=h;const o=l=>Math.pow(fm[l],e);return{magSize:Math.round(s.magSize*a.magSize),pellets:s.pellets??1,damage:r("damage")*a.damage*o("damage"),fireRate:s.fireRate,autoRate:Math.min(s.fireRate,r("auto")*a.autoRate*o("autoRate")),minSpread:r("accuracy")*a.minSpread,maxSpread:s.maxSpread,bloom:s.bloom*a.bloom,convergence:r("aim")*a.convergence,reload:Math.max(.4,r("reload")*a.reload*o("reload")),autoThr:r("focus"),crit:s.crit??2,fan:s.fan??0}}const bM={damage:"damage",auto:"autoRate",accuracy:"minSpread",focus:"autoThr",aim:"convergence",reload:"reload"},kn=[25,90,280,800,2e3],Nn=[{name:"COMMON",color:"#dce5ed",accent:"#a8b9cb",energy:1.25},{name:"UNCOMMON",color:"#77e885",accent:"#32b873",energy:1.4},{name:"RARE",color:"#56baff",accent:"#4b7bff",energy:1.55},{name:"EPIC",color:"#c783ff",accent:"#ee5cff",energy:1.7},{name:"LEGENDARY",color:"#ffd267",accent:"#ff931f",energy:1.85},{name:"ULTRA MEGA LEGENDARY",color:"#ff83d9",accent:"#79f6ff",energy:2.1}],Za={glock19:["optic","mag","laser","suppressor","stock"],uzi:["optic","mag","grip","suppressor","stock"],m870:["optic","saddle","light","stock","brake"],ak47:["optic","mag","rail","suppressor","stock"],minigun:["optic","box","laser","shield","brake"],revolver:["optic","loader","comp","engraved","barrel"]},Oa={optic:{name:"Коллиматор",icon:"🔴",label:"точность",sign:"+",mul:{minSpread:.85}},mag:{name:"Увеличенный магазин",icon:"🧱",label:"магазин",sign:"+",mul:{magSize:1.6}},saddle:{name:"Боковой патронташ",icon:"🧱",label:"патронов",sign:"+",mul:{magSize:1.5}},box:{name:"Большой короб",icon:"🧱",label:"лента",sign:"+",mul:{magSize:1.5}},laser:{name:"ЛЦУ с фонарём",icon:"🔦",label:"автострельба",sign:"+",mul:{autoRate:1.25}},light:{name:"Фонарь с ЛЦУ",icon:"🔦",label:"автострельба",sign:"+",mul:{autoRate:1.25}},grip:{name:"Рукоятка и ЛЦУ",icon:"✊",label:"отдача",sign:"−",mul:{bloom:.8}},rail:{name:"Цевьё с планками",icon:"✊",label:"отдача",sign:"−",mul:{bloom:.8}},suppressor:{name:"Глушитель",icon:"🔇",label:"урон",sign:"+",mul:{damage:1.15}},stock:{name:"Тактический приклад",icon:"🪵",label:"сведение",sign:"+",mul:{convergence:.8,bloom:.9}},brake:{name:"Дульный тормоз",icon:"💨",label:"урон",sign:"+",mul:{damage:1.12,bloom:.9}},shield:{name:"Бронещиток",icon:"🛡️",label:"урон",sign:"+",mul:{damage:1.1}},loader:{name:"Ускоритель заряжания",icon:"⚡",label:"перезарядка",sign:"−",mul:{reload:.8}},comp:{name:"Компенсатор",icon:"💨",label:"отдача",sign:"−",mul:{bloom:.8}},engraved:{name:"Гравированный барабан",icon:"✨",label:"урон",sign:"+",mul:{damage:1.15}},barrel:{name:"Длинный ствол",icon:"🎯",label:"сведение",sign:"+",mul:{convergence:.8,minSpread:.9}}},fm={damage:1.2,autoRate:1.05,reload:.94},yu=4,pm=.6,SM=[10,25,60,150],df=i=>Math.min(yu,i);function wM(i){return i>=yu?null:SM[i]}function EM(i,t=0){const e=1+pm*t,n={};for(const[s,r]of Object.entries(Oa[i].mul))n[s]=Math.max(.2,1+(r-1)*e);return n}function Bh(i,t=0){const e=Oa[i],n=Object.values(e.mul)[0];return`${e.label} ${e.sign}${Math.round(Math.abs(n-1)*(1+pm*t)*100)}%`}const TM={glock19:20,revolver:40,uzi:30,m870:90,ak47:260,minigun:700},AM={glock19:8,revolver:14,uzi:12,m870:30,ak47:80,minigun:200},gi={seconds:14,hpDivisor:8,hitRate:.6,time:60,coins:8,trophyWin:25,trophyLoss:15},ff=[{kind:"regular",min:.9,max:1},{kind:"regular",min:.9,max:1},{kind:"regular",min:.9,max:1},{kind:"challenge",min:1.2,max:1.35},{kind:"even",min:.98,max:1.02}],Ta=[{count:6,time:30,hp:.6,dmgLv:0,speed:1.5,radius:.5,alive:2},{count:8,time:32,hp:.8,dmgLv:3,speed:2.2,radius:.47,alive:3},{count:10,time:35,hp:1,dmgLv:7,speed:2.9,radius:.44,alive:3},{count:12,time:38,hp:1.2,dmgLv:11,speed:3.6,radius:.41,alive:4},{count:14,time:46,hp:1.4,dmgLv:15,speed:4.4,radius:.38,alive:4}];function mm(i,t){const e=rn[i.weapon],n=Ta[t],s=e.damage*i.scale*(e.pellets??1)*e.fireRate;return Math.max(1,Math.round(s*n.hp*Math.pow(1.22,n.dmgLv)))}function CM(i,t){const e=rn[i.weapon],n=Ta[t],s=e.damage*i.scale*(e.pellets??1)*Math.pow(1.22,n.dmgLv),r=Math.max(1,Math.ceil(mm(i,t)/(s*.65))),a=n.count*r;return Math.max(n.time,Math.ceil((a/e.autoRate+Math.floor(a/e.magSize)*e.reload+n.count*.7)*1.4))}function hl(i){if(i>=1e15){const e=Math.min(675,Math.floor(Math.log10(i)/3)-5);return`${(i/Math.pow(10,(e+5)*3)).toFixed(2)}${String.fromCharCode(97+Math.floor(e/26),97+e%26)}`}if(i>=1e12)return`${(i/1e12).toFixed(2)}T`;if(i>=1e9)return`${(i/1e9).toFixed(2)}B`;if(i>=1e6)return`${(i/1e6).toFixed(2)}M`;if(i>=1e4)return`${(i/1e3).toFixed(1)}K`;const t=Math.floor(i);return t>=1e3?`${Math.floor(t/1e3)} ${String(t%1e3).padStart(3,"0")}`:`${t}`}const ul=Nn.map(i=>({color:new xt(i.color).multiplyScalar(i.energy),accent:new xt(i.accent).multiplyScalar(i.energy),smoke:new xt(i.color).lerp(new xt("#eef1f8"),.85)})),gc=i=>ul[Math.min(i,ul.length-1)];function pf(i){return i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`
      #ifdef USE_MAP
        vec4 texel = texture2D(map, vMapUv);
        diffuseColor *= vec4(vec3(max(max(texel.r, texel.g), texel.b)), texel.a);
      #endif
    `)},i.customProgramCacheKey=()=>"rarity-tint",i}const RM=24,ke=new b,Io=new b,mf=new hs,Hh=new b(0,1,0),Vh=new b(0,0,1),Ht=(i,t)=>i+Math.random()*(t-i),gf=i=>1-(1-i)*(1-i),PM={pistol:{body:xu,bodyMat:"brass",head:null,off:-13,scale:1,size:.13},rifle:{body:lm,bodyMat:"brass",head:null,off:-20,scale:1,size:.13},"rifle-long":{body:cm,bodyMat:"brass",head:null,off:-25.5,scale:1,size:.13},shell:{body:hm,bodyMat:"shell",head:_u,headMat:"brass",off:-22,scale:.95,size:.17}},LM={scale:1,smoke:3,rings:1,bubble:!0},vf=3.3,DM=2,IM=.115,UM={side:[1.6,2.8],up:[4.5,6],back:[.3,1.2]};function vr(i,t,e){return new xt().setRGB(i,t,e)}const NM=new ne,oa=new b,xf=new b,mr=new b;function vc(i,t){oa.copy(t).normalize(),mr.copy(Vh).addScaledVector(oa,-oa.dot(Vh)),mr.lengthSq()<1e-6&&mr.set(0,1,0),mr.normalize(),xf.crossVectors(mr,oa),i.quaternion.setFromRotationMatrix(NM.makeBasis(oa,xf,mr))}function FM(){return new Ue({transparent:!0,depthWrite:!1,blending:ti,uniforms:{uColor:{value:vr(1.9,1.05,.35)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec2 vUv;
      uniform vec3 uColor;
      void main() {
        // MSAA edge samples can extrapolate UVs beyond the triangle. A fractional
        // pow(negative UV, ...) produces NaN, which contaminates the HDR bloom buffers.
        // Clamp before shaping and use a polynomial with no undefined domain.
        vec2 p = clamp(vUv, vec2(0.0), vec2(1.0));
        float across = abs(p.y * 2.0 - 1.0);
        float taper = mix(0.06, 1.0, p.x);
        float edge = 1.0 - smoothstep(taper * 0.55, taper, across);
        float core = 1.0 - smoothstep(taper * 0.08, taper * 0.26, across);
        float along = p.x * p.x * (2.0 - p.x);
        float a = along * edge * 0.72;
        if (a <= 0.001) discard;
        gl_FragColor = vec4(mix(uColor, vec3(2.0, 1.9, 1.5), core * 0.65), a);
      }`})}class _s{constructor(t,e){this.items=[];for(let n=0;n<e;n++)this.items.push(t(n));this.i=0}get(){for(let e=0;e<this.items.length;e++){const n=this.items[(this.i+e)%this.items.length];if(!n.active)return this.i=(this.i+e+1)%this.items.length,n}const t=this.items[this.i];return this.i=(this.i+1)%this.items.length,t}}class xc{constructor(t,{size:e=.1,restitution:n=.38,life:s=6,onDone:r=null,ground:a=dm}={}){this.obj=t,this.ground=a,this.size=e,this.rest=n,this.onDone=r,this.life=s,this.vel=new b,this.ang=new b,this.settled=!1,this.t=0,this.bounces=0,this.baseScale=t.scale.x,this.active=!0}step(t){var n;const e=this.obj.position;if(this.t+=t,this.settled){this.obj.quaternion.slerp(this.flatQ,Math.min(1,t*14));const s=this.t-this.settleT;if(s>this.life){const r=Math.max(0,1-(s-this.life)/.4);if(this.obj.scale.setScalar(this.baseScale*r),r<=0)return this.active=!1,this.obj.scale.setScalar(this.baseScale),(n=this.onDone)==null||n.call(this,this),!1}}else{const s=this.ground(e.x,e.y-this.size,e.z);this.vel.y-=RM*t,e.addScaledVector(this.vel,t);const r=this.ang.length();if(r>1e-4&&(mf.setFromAxisAngle(ke.copy(this.ang).divideScalar(r),r*t),this.obj.quaternion.premultiply(mf)),e.y<s+this.size&&(e.y=s+this.size,this.vel.y<0)){const a=-this.vel.y;if(this.vel.y=a*this.rest,this.vel.x*=.55,this.vel.z*=.55,this.ang.multiplyScalar(.5).add(ke.set(Ht(-6,6),Ht(-6,6),Ht(-6,6))),this.bounces++,a<1.4||this.bounces>5){this.settled=!0,this.vel.set(0,0,0),this.settleT=this.t;const o=ke.set(0,0,1).applyQuaternion(this.obj.quaternion);o.y<0&&o.negate(),this.flatQ=new hs().setFromUnitVectors(o,Hh).multiply(this.obj.quaternion)}}}return!0}}class Mu{constructor(t,{ground:e=dm}={}){this.ground=e,this.farScale=1,this.scene=t,this.bodies=[],this.wisps=[];const n=new Je(vf,DM);n.translate(vf*(.5-.08),0,0);const s=Qy(),r=rm(),a=new Xa([[0,0],[.13,.04],[.23,.25],[.12,.58],[0,1.1]].map(([f,g])=>new Z(f,g)),8);a.rotateZ(-Math.PI/2),this.flashes=new _s(()=>{const f=new ct(n,pf(new Tn({map:s,color:vr(1.9,1.6,1.3),transparent:!0,depthWrite:!1,side:En})));f.renderOrder=7;const g=new Dh(new al({map:r,color:vr(1.5,.7,.22),transparent:!0,blending:ti,depthWrite:!1}));g.renderOrder=6;const v=new ct(a,new Tn({color:vr(3.2,2.8,1.9),transparent:!0,depthWrite:!1}));return v.renderOrder=8,f.visible=g.visible=v.visible=!1,t.add(f,g,v),{star:f,glow:g,hot:v,active:!1,t:0,k:1,flip:1,dir:new b,get:null}},16),this.light=new Hy("#ffa040",0,6,1.6),this.lightT=1,this.lightK=0,t.add(this.light);const o=new du(.8,1,48);this.rings=new _s(()=>{const f=new ct(o,new Tn({color:vr(1.4,1.3,1.15),transparent:!0,blending:ti,depthWrite:!1,side:En}));return f.visible=!1,t.add(f),{m:f,active:!1,t:0,dur:.2,s0:.1,s1:1,a0:1}},12),this.smoke=new _M(t,260),this.smokeTints={white:new xt("#eef1f8"),grey:new xt("#c3c9d8"),dust:new xt("#ecdcbc"),dark:new xt("#7c8296")};const l=new uu(1,0);this.crumbMats=new Map,this.crumbs=new _s(()=>{const f=new ct(l,F.white);return f.visible=!1,f.castShadow=!0,t.add(f),{m:f,active:!1,body:null}},140),this.casings=new _s(()=>{const f=new It,g=new ct(xu(),F.brass),v=new ct(_u(),F.brass);return g.castShadow=!0,f.add(g,v),f.visible=!1,t.add(f),{g:f,mesh:g,head:v,active:!1,body:null,smoke:0}},80),this.projectileShapes=pM();const c=new Je(1,1);c.translate(-.5,0,0);const h=FM();this.projectileMats=ul.map(f=>{const g=h.clone();return g.uniforms.uColor.value.copy(f.accent),{...mM(f.color),trail:g}}),this.bullets=new _s(()=>{const f=new It,g=this.projectileShapes.pistol,v=new ct(g.geometry,this.projectileMats[0].body),m=new ct(g.band,this.projectileMats[0].band),p=new ct(c,h);return p.renderOrder=7,f.add(p,v,m),f.visible=!1,t.add(f),{g:f,tr:p,slug:v,band:m,active:!1,from:new b,to:new b,t:0,dur:.1,size:1,length:g.length,diameter:g.diameter,getTo:null,onArrive:null}},96);const u=tM();this.sparks=new _s(()=>{const f=new Dh(pf(new al({map:u,color:vr(1.6,1.4,1.2),transparent:!0,depthWrite:!1})));return f.renderOrder=7,f.visible=!1,t.add(f),{s:f,active:!1,t:0,strength:1,scale:1}},10);const d=new wl(1,1,4);this.glintMats=ul.map(f=>new Tn({color:f.accent})),this.glints=new _s(()=>{const f=new ct(d,this.glintMats[0]);return f.visible=!1,t.add(f),{m:f,active:!1,t:0,life:.2,width:.04,length:.5,vel:new b}},72)}muzzleBlast(t,e,n,s,r=LM,a=0){const o=gc(a),l=r.scale*Math.min(1.6,Math.sqrt(this.farScale)),c=this.flashes.get();c.active=!0,c.t=0,c.k=l*Ht(.92,1.08),c.flip=Math.random()<.5?1:-1,c.dir.copy(e),c.get=s,c.star.position.copy(t),vc(c.star,e),c.star.visible=c.glow.visible=c.hot.visible=!0,c.hot.position.copy(t),c.hot.quaternion.copy(c.star.quaternion),c.hot.material.opacity=1,c.hot.scale.setScalar(l),c.star.scale.set(l,l*c.flip,1),c.star.material.opacity=1,c.glow.scale.setScalar(l*2.6),c.glow.material.opacity=.5,c.star.material.color.copy(o.color),c.glow.material.color.copy(o.accent),c.glow.position.copy(t).addScaledVector(e,.3*l),this.light.position.copy(t).addScaledVector(e,.4),this.lightT=0,this.lightK=l,this.light.color.copy(o.accent);const h=Math.max(.9,Math.sqrt(l)),u=Math.min(7,Math.max(4,r.smoke||3));for(let d=0;d<u;d++){const f=d<2,g=(f?Ht(8,13):Ht(2,5))*h;ke.copy(e).multiplyScalar(g).addScaledVector(n,Ht(-.6,1.2)),Io.copy(t).addScaledVector(e,(.18+d*.13)*h).addScaledVector(n,Ht(-.15,.15)),this.puff(Io,ke,(f?Ht(.27,.4):Ht(.4,.62))*h,f?Ht(.32,.48):Ht(.9,1.45),f?"white":"grey",f?5:2.4,f?.7:.5,f?2.6:1.25)}if(s){const d=this.wisps.find(f=>f.get===s);d?d.t=.65:this.wisps.push({get:s,t:.65})}}ring(t,e,n,s,r,a,o=0){const l=this.rings.get();l.active=!0,l.t=0,l.dur=n,l.s0=s,l.s1=r,l.a0=a,l.m.position.copy(t),l.m.quaternion.setFromUnitVectors(Vh,e),l.m.visible=!0,l.m.material.color.copy(gc(o).accent)}dustTint(t){this.dustTints??(this.dustTints=new Map);let e=this.dustTints.get(t);return e||this.dustTints.set(t,e=new xt(t).lerp(this.smokeTints.dust,.55)),e}puff(t,e,n,s,r="white",a=3,o=.9,l=1){this.smoke.spawn(t,e,n,s,r.isColor?r:this.smokeTints[r],a,o,l)}ejectCasing(t,e,n,s,r="pistol",a=UM){const o=this.casings.get();o.body&&(o.body.active=!1);const l=PM[r];o.mesh.geometry=l.body(),o.mesh.material=F[l.bodyMat],o.head.visible=!!l.head,l.head&&(o.head.geometry=l.head(),o.head.material=F[l.headMat]),o.mesh.position.x=o.head.position.x=l.off,o.active=!0,o.g.visible=!0,o.g.position.copy(t),o.g.quaternion.setFromUnitVectors(ke.set(1,0,0),e),o.g.scale.setScalar(Kn*l.scale);const c=new xc(o.g,{ground:this.ground,size:l.size,restitution:.42,life:7,onDone:()=>{o.active=!1,o.g.visible=!1}});c.vel.copy(n).multiplyScalar(Ht(a.side[0],a.side[1])).addScaledVector(s,Ht(a.up[0],a.up[1])).addScaledVector(e,-Ht(a.back[0],a.back[1])),c.ang.set(Ht(-4,4),Ht(-4,4),0).addScaledVector(n,Ht(18,32)*(Math.random()<.5?-1:1)),o.body=c,o.smoke=0,this.bodies.push(c),o.smoke>0&&this.puff(t,ke.copy(s).multiplyScalar(1.2).addScaledVector(n,.8),.06,.4,"grey",4)}fireBullet(t,e,n,s=75,r=1,a=0,o="pistol"){var u;const l=this.bullets.get();l.active&&((u=l.onArrive)==null||u.call(l,l.to.clone())),l.active=!0,r*=Math.min(1.6,Math.sqrt(this.farScale)),l.size=r;const c=this.projectileMats[Math.min(a,this.projectileMats.length-1)],h=this.projectileShapes[o==="rifle-long"?"rifle":o]||this.projectileShapes.pistol;l.slug.geometry=h.geometry,l.band.geometry=h.band,l.slug.material=c.body,l.band.material=c.band,l.tr.material=c.trail,l.slug.scale.setScalar(r),l.band.scale.setScalar(r),l.length=h.length*r,l.diameter=h.diameter*r,l.tr.position.x=-l.length,l.t=0,l.from.copy(t),l.getTo=e,e(l.to),l.dur=Math.max(.05,l.from.distanceTo(l.to)/s),l.onArrive=n,l.g.position.copy(t),l.g.visible=!0,vc(l.g,ke.subVectors(l.to,t)),l.tr.visible=!1,l.tr.scale.set(1,l.diameter*1.05,1)}impact(t,e,n,s=1,r=0){const a=this.farScale,o=this.sparks.get();o.active=!0,o.t=0,o.s.visible=!0,o.s.position.copy(t).addScaledVector(e,.08*a),o.s.material.rotation=Math.random()*6,o.strength=s,o.scale=a,o.s.material.color.copy(gc(r).color);for(let h=0;h<Math.min(9,3+Math.ceil(s*2));h++){const u=this.glints.get();u.active=!0,u.t=0,u.life=Ht(.16,.3),u.width=Ht(.018,.035)*a,u.length=Ht(.28,.6)*a,u.m.material=this.glintMats[Math.min(r,this.glintMats.length-1)],u.m.visible=!0,u.m.position.copy(t).addScaledVector(e,.12*a),u.vel.copy(e).multiplyScalar(Ht(4,8)).add(ke.set(Ht(-3,3),Ht(-1,5),Ht(-2,2))).multiplyScalar(Math.sqrt(a)),u.m.quaternion.setFromUnitVectors(Hh,ke.copy(u.vel).normalize()),u.m.scale.set(u.width,u.length,u.width)}const l=Math.max(2,Math.round(4*Math.min(1.5,s)));for(let h=0;h<l;h++)ke.copy(e).multiplyScalar(Ht(1.5,3.5)*a).add(Io.set(Ht(-1.2,1.2),Ht(0,1.5),Ht(-1.2,1.2)).multiplyScalar(a)),this.puff(t,ke,Ht(.15,.26)*a,Ht(.6,1),this.dustTint(n[h%n.length]),4,.85);const c=Math.max(3,Math.round(6*s));for(let h=0;h<c;h++)this.crumb(t,e,n[h%n.length],a)}crumb(t,e,n,s=1){const r=this.crumbs.get();r.body&&(r.body.active=!1);let a=this.crumbMats.get(n);a||this.crumbMats.set(n,a=Et(n,{flat:!0,spec:.1,rim:.1})),r.m.material=a,r.m.visible=!0,r.active=!0;const o=Ht(.06,.12)*s;r.m.scale.set(o,o*Ht(.6,1.2),o*Ht(.6,1)),r.m.position.copy(t).addScaledVector(e,.05);const l=new xc(r.m,{ground:this.ground,size:o*.6,restitution:.3,life:Ht(1.5,3),onDone:()=>{r.active=!1,r.m.visible=!1}});l.vel.copy(e).multiplyScalar(Ht(2,6)*s).add(ke.set(Ht(-2.5,2.5),Ht(.5,4),Ht(-2.5,2.5)).multiplyScalar(Math.sqrt(s))),l.ang.set(Ht(-20,20),Ht(-20,20),Ht(-20,20)),r.body=l,this.bodies.push(l)}drop(t,e,n,s,r){const a=new xc(t,{ground:this.ground,size:s,restitution:.3,life:1.2,onDone:r});return a.vel.copy(e),a.ang.copy(n),this.bodies.push(a),a}clear(){var t,e;for(const n of this.bodies)n.active=!1,(t=n.onDone)==null||t.call(n);this.bodies.length=0,this.wisps.length=0;for(const n of[this.flashes,this.rings,this.crumbs,this.casings,this.bullets,this.sparks,this.glints])for(const s of n.items){s.active=!1,"get"in s&&(s.get=null),"getTo"in s&&(s.getTo=null,s.onArrive=null);for(const r of["star","glow","hot","m","g","s"])(e=s[r])!=null&&e.isObject3D&&(s[r].visible=!1)}for(const n of this.smoke.items)n.active=!1;this.smoke.update(0),this.lightT=1,this.light.intensity=0}update(t){var n;for(const s of this.flashes.items){if(!s.active)continue;s.t+=t;const r=s.t/IM;if(r>=1){s.active=!1,s.star.visible=s.glow.visible=s.hot.visible=!1,s.get=null;continue}const a=1-r;s.get&&(s.get(s.star.position),s.hot.position.copy(s.star.position),s.glow.position.copy(s.star.position).addScaledVector(s.dir,.35*s.k));const o=.78+Math.sin(Math.min(1,r*2)*Math.PI/2)*.22;s.star.scale.set(s.k*o*(1-r*.28),s.k*s.flip*o*(1-r*.48),1),s.star.material.opacity=Math.min(1,a*1.6),s.hot.material.opacity=Math.max(0,1-s.t/.035),s.hot.visible=s.hot.material.opacity>0,s.glow.scale.setScalar(s.k*2.6*(1-r*.3)),s.glow.material.opacity=a*.5}this.lightT+=t;const e=this.lightT/.1;this.light.intensity=e<1?5.5*this.lightK*(1-e)*(1-e):0;for(let s=this.wisps.length-1;s>=0;s--){const r=this.wisps[s];if(r.t-=t,r.t<=0){this.wisps.splice(s,1);continue}if(Math.random()<t*5){const a=r.get(Io);this.puff(a,ke.set(Ht(-.15,.15),Ht(.8,1.4),Ht(-.15,.15)),Ht(.22,.32),Ht(.7,1.1),"grey",1.5,.32,1.6)}}for(const s of this.rings.items){if(!s.active)continue;s.t+=t;const r=s.t/s.dur;if(r>=1){s.active=!1,s.m.visible=!1;continue}s.m.scale.setScalar(s.s0+(s.s1-s.s0)*gf(r)),s.m.material.opacity=s.a0*(1-r)*(1-r)}this.smoke.update(t);for(const s of this.sparks.items){if(!s.active)continue;s.t+=t;const r=s.t/.14;if(r>=1){s.active=!1,s.s.visible=!1;continue}s.s.scale.setScalar((.7+gf(r)*1)*(.6+s.strength*.3)*s.scale),s.s.material.opacity=1-r*r}for(const s of this.glints.items){if(!s.active)continue;if(s.t+=t,s.t>=s.life){s.active=s.m.visible=!1;continue}s.vel.y-=12*t,s.m.position.addScaledVector(s.vel,t),s.m.quaternion.setFromUnitVectors(Hh,ke.copy(s.vel).normalize());const r=1-s.t/s.life;s.m.scale.set(s.width*r,s.length*(.35+.65*r),s.width*r)}for(const s of this.bullets.items){if(!s.active)continue;s.t+=t,s.getTo(s.to);const r=Math.min(1,s.t/s.dur);s.g.position.lerpVectors(s.from,s.to,r),ke.subVectors(s.to,s.from);const a=ke.length();vc(s.g,ke.divideScalar(a||1));const o=Math.min(a*r-s.length,s.length*5.5);s.tr.visible=o>s.diameter*.1,s.tr.visible&&s.tr.scale.set(o,s.diameter*1.05,1),r>=1&&(s.active=!1,s.g.visible=!1,(n=s.onArrive)==null||n.call(s,s.to.clone()))}for(const s of this.casings.items)!s.active||s.smoke<=0||(s.smoke-=t,Math.random()<t*24&&this.puff(s.g.position,ke.set(0,.4,0),.025,.6,"white",2,.5));for(let s=this.bodies.length-1;s>=0;s--){const r=this.bodies[s];(!r.active||!r.step(t))&&this.bodies.splice(s,1)}}}const Ir=[{e:"🦊",bg:"#ff8a3d"},{e:"🐻",bg:"#b0703c"},{e:"🐼",bg:"#6c7a93"},{e:"🐯",bg:"#ffb62e"},{e:"🦁",bg:"#e8a23a"},{e:"🐸",bg:"#58c46a"},{e:"🐵",bg:"#a8693e"},{e:"🐺",bg:"#5c6f99"},{e:"🦉",bg:"#8c6bd6"},{e:"🤖",bg:"#4a9ee8"},{e:"👽",bg:"#3fb9a0"},{e:"💀",bg:"#4b4f63"},{e:"🤠",bg:"#d9773a"},{e:"🥷",bg:"#30364a"},{e:"🐙",bg:"#e35d8f"},{e:"🦈",bg:"#3b7cc4"}],kM=["Sn1per_Ko","DuckHunter","PewPewPro","Барабашка","ТапТап","xX_Glock_Xx","Гильза","КосойЗаяц","Zero_Recoil","MiniGunMama","Шмель","HeadshotHank","Ракета","Bullseye","КапитанОтдача","Tactical_Tim","Пиу-Пиу","Мушка","Курок","LuckyLoad","Totoro_007","Бабах","RangeRat","Сапсан","NoScopeNika","Дробь","Kalash_Kid","Ёжик"],gm=16;function OM(i=Math.random){return{name:`Стрелок${1e3+Math.floor(i()*9e3)}`,avatar:Math.floor(i()*Ir.length),wins:0,losses:0,trophies:0}}function zM(i){const t=String(i??"").replace(/\s+/g," ").trim().slice(0,gm);return t.length>=2?t:null}function BM(i,t=Math.random){let n=(s=>s[Math.floor(t()*s.length)])(kM);return n===i.name&&(n+="2"),{name:n,avatar:Math.floor(t()*Ir.length),trophies:Math.max(0,Math.round((i.trophies||0)+(t()-.45)*80))}}const za={glock19:{kind:"pistol",caliber:"9×19",halfHeight:29},revolver:{kind:"pistol",caliber:".357 Magnum",halfHeight:29},uzi:{kind:"pistol",caliber:"9×19",halfHeight:29},m870:{kind:"shell",caliber:"12 GA",halfHeight:29},ak47:{kind:"rifle",caliber:"7.62×39",halfHeight:35},minigun:{kind:"rifle-long",caliber:"7.62×51",halfHeight:42}},jo=new Map,_c=new Map;let In;function HM(i){In=i}function Al(i){const t=za[i]||za.glock19;if(jo.has(t.kind))return jo.get(t.kind).texture;if(!In)throw new Error("Initialize ammunition portraits before constructing lanes");const e=new $a;e.add(new Ya(we.sky,we.ground,1));const n=new Ka(we.key,we.keyIntensity);n.position.copy(we.keyDir).multiplyScalar(20),e.add(n);const s=Dr(t.kind);s.rotation.set(.08,-.12,Math.PI/2),s.updateMatrixWorld(!0);const r=new gn().setFromObject(s).getCenter(new b);s.position.sub(r),e.add(s);const a=t.halfHeight,o=new Wa(-a*.5,a*.5,a,-a,.1,300);o.position.set(0,0,160),o.lookAt(0,0,0);const l=new pn(96,192,{depthBuffer:!0,samples:4});l.texture.name=`Toy ammunition ${t.caliber}`;const c=In.getRenderTarget(),h=In.getClearColor(new xt),u=In.getClearAlpha();return In.setRenderTarget(l),In.setClearColor(0,0),In.clear(),In.render(e,o),In.setRenderTarget(c),In.setClearColor(h,u),jo.set(t.kind,l),l.texture}function VM(i){const t=za[i]||za.glock19;if(_c.has(t.kind))return _c.get(t.kind);Al(i);const e=jo.get(t.kind),n=e.width,s=e.height,r=new Uint8Array(n*s*4);In.readRenderTargetPixels(e,0,0,n,s,r);const a=document.createElement("canvas");a.width=n,a.height=s;const o=a.getContext("2d"),l=o.createImageData(n,s),c=u=>Math.round(255*(u<=.0031308?u*12.92:1.055*Math.pow(u,1/2.4)-.055));for(let u=0;u<s;u++)for(let d=0;d<n;d++){const f=((s-1-u)*n+d)*4,g=(u*n+d)*4,v=r[f+3];for(let m=0;m<3;m++)l.data[g+m]=v?c(Math.min(1,r[f+m]/v)):0;l.data[g+3]=v}o.putImageData(l,0,0);const h=a.toDataURL("image/png");return _c.set(t.kind,h),h}const si=i=>document.getElementById(i),Pe=hl,GM=`<svg viewBox="0 0 64 74" aria-hidden="true">
  <path d="M18 35V24a14 14 0 0 1 28 0v11" fill="none" stroke="#f1e8d8" stroke-width="8.5" stroke-linecap="round"/>
  <path d="M18 35V24a14 14 0 0 1 28 0v11" fill="none" stroke="#cfc3ae" stroke-width="2.5" stroke-linecap="round" transform="translate(1.5 1.5)"/>
  <rect x="8" y="32" width="48" height="38" rx="9" fill="#f1e8d8"/>
  <rect x="8" y="57" width="48" height="13" rx="6.5" fill="#d9ccb5"/>
  <circle cx="32" cy="47" r="6" fill="#3b3631"/>
  <path d="M29.4 49h5.2l1.5 10.5h-8.2z" fill="#3b3631"/>
</svg>`,WM=`<svg viewBox="0 0 40 40" aria-hidden="true">
  <path d="M20 3.5 37 21.5H27.5V36.5H12.5V21.5H3Z" fill="#e58f00" stroke="#e58f00" stroke-width="3" stroke-linejoin="round"/>
  <path d="M20 3.5 37 21.5H27.5V34H12.5V21.5H3Z" fill="#ffb91d" stroke="#ffb91d" stroke-width="3" stroke-linejoin="round"/>
  <path d="M20 7.5 30 18.5H24V22H16V18.5H10Z" fill="#ffd54a"/>
</svg>`,Gh=`<svg viewBox="0 0 48 48" aria-hidden="true">
  <circle cx="24" cy="26" r="21" fill="#c97d04"/><circle cx="24" cy="23.5" r="21" fill="#ffc21c"/><circle cx="24" cy="23.5" r="15.5" fill="#f2a60e"/>
  <path d="M11 17a15 15 0 0 1 21-8" fill="none" stroke="#ffe37a" stroke-width="3" stroke-linecap="round"/>
  <text x="24" y="32" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-weight="700" font-size="24" fill="#fff1b8" stroke="#c27400" stroke-width="2" paint-order="stroke">$</text>
</svg>`,vm='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z" fill="#ffc533" stroke="#a85d00" stroke-width="1.6" stroke-linejoin="round"/></svg>',$M=`<svg viewBox="0 0 26 32" aria-hidden="true">
  <g><path d="M1.5 12Q1.5 2.5 6 1Q10.5 2.5 10.5 12Z" fill="#ffd25a"/><rect x="1.5" y="11" width="9" height="20" rx="1.6" fill="#f0ac2a"/><rect x="3" y="12" width="2.4" height="17" rx="1.2" fill="#ffe08a"/></g>
  <g transform="translate(13.5 0)"><path d="M1.5 12Q1.5 2.5 6 1Q10.5 2.5 10.5 12Z" fill="#ffd25a"/><rect x="1.5" y="11" width="9" height="20" rx="1.6" fill="#f0ac2a"/><rect x="3" y="12" width="2.4" height="17" rx="1.2" fill="#ffe08a"/></g>
</svg>`;function _f(i,t,e,n,s){const r=[],a=Math.PI*2/s;for(let o=0;o<s;o++){const l=o*a;for(const[c,h]of[[n,-.5],[n,-.27],[e,-.16],[e,.16],[n,.27]])r.push(`${(i+Math.cos(l+h*a)*c).toFixed(2)} ${(t+Math.sin(l+h*a)*c).toFixed(2)}`)}return`M${r.join("L")}Z`}const dl=`<svg viewBox="0 0 48 48" aria-hidden="true">
  <path d="${_f(24,26.5,21,15.5,8)}" fill="#4f5d79" stroke="#4f5d79" stroke-width="3" stroke-linejoin="round"/>
  <path d="${_f(24,23.5,21,15.5,8)}" fill="#b8c7e0" stroke="#b8c7e0" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="24" cy="23.5" r="11.5" fill="none" stroke="#8c9cba" stroke-width="3"/>
  <circle cx="24" cy="23.5" r="6.5" fill="#1c2639"/>
  <path d="M10 18a15 15 0 0 1 10-9" fill="none" stroke="#e6eefc" stroke-width="3" stroke-linecap="round"/>
</svg>`,XM=`<svg viewBox="0 0 40 40" aria-hidden="true">
  <rect x="4" y="14" width="32" height="23" rx="4" fill="#3c5228"/>
  <rect x="4" y="12" width="32" height="22" rx="4" fill="#56703a"/>
  <rect x="2.5" y="6.5" width="35" height="9" rx="3" fill="#6d8a4c"/>
  <rect x="8" y="17" width="4" height="13" rx="1.5" fill="#46602f"/><rect x="28" y="17" width="4" height="13" rx="1.5" fill="#46602f"/>
  <rect x="15.5" y="13" width="9" height="12" rx="2" fill="#ffc533"/><rect x="17.5" y="15" width="5" height="4" rx="1" fill="#a85d00"/>
</svg>`,yf='<path d="M15.5 15Q15.5 4.5 20 3Q24.5 4.5 24.5 15Z" fill="#ffd25a"/><rect x="15.5" y="14" width="9" height="22" rx="1.6" fill="#f0ac2a"/><rect x="17" y="15" width="2.4" height="19" rx="1.2" fill="#ffe08a"/>',qM=`<svg viewBox="0 0 40 40" aria-hidden="true">
  <circle cx="20" cy="20" r="16" fill="#ff5a3d"/><circle cx="20" cy="18.5" r="16" fill="#ff7a45"/>
  <g transform="rotate(-38 20 20) scale(0.82) translate(4.4 4.4)">${yf}</g><g transform="rotate(38 20 20) scale(0.82) translate(4.4 4.4)">${yf}</g>
</svg>`,YM='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="2" width="2.6" height="20.5" rx="1.3" fill="#c9cfdb"/><path d="M6.6 3.6c4.2-2.3 6.6 2.1 11 0v9.2c-4.4 2.1-6.8-2.3-11 0z" fill="#fff4dc"/></svg>';function Rs(i){const t=Ir[(i??0)%Ir.length];return`<span class="ava-face" style="background:${t.bg}">${t.e}</span>`}function Os(i){const t=Nn[Math.min(i,Nn.length-1)];return`<span class="rar" style="--rc:${t.color}">${t.name}</span>`}const Zo=i=>`<i class="gear-s">${dl}</i>${hl(i)}`;function Li(i,t,e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.innerHTML=e),n}class KM{constructor({onBuy:t,onPanelAction:e,onProfile:n,onArsenal:s,onDuel:r}){this.onBuy=t,this.onPanelAction=e,this.money=si("money"),this.wallet=si("wallet"),this.partsEl=si("parts"),this.partsN=si("parts-n"),this.partsEl.querySelector(".gear").innerHTML=dl;for(const l of document.querySelectorAll("i.flag"))l.innerHTML=YM;document.querySelector("#arsenal-btn .ti").innerHTML=XM,document.querySelector("#duel-btn .ti").innerHTML=qM,this.profileBtn=si("profile-btn");const a=(l,c)=>si(l).addEventListener("click",h=>{h.stopPropagation(),c()});a("profile-btn",n),a("arsenal-btn",s),a("duel-btn",r),this.hint=si("hint"),this.popups=si("popups"),this.layer=si("lanes-ui"),this.shownMoney=0,this.targetMoney=0,this.panel=si("panel"),this.panelTitle=this.panel.querySelector(".p-title"),this.panelSub=this.panel.querySelector(".p-sub"),this.panelList=this.panel.querySelector(".p-list"),this.panelFoot=this.panel.querySelector(".p-foot"),this.panelThumb=this.panel.querySelector(".p-thumb"),this.panelTabs=this.panel.querySelector(".p-tabs"),this.panelTab=0,this.panelTabs.addEventListener("click",l=>{const c=l.target.closest("[data-section]");c&&(this.panelTab=+c.dataset.section,this.panelList.scrollTop=0,this.refreshPanel())}),this.panelFoot.addEventListener("click",l=>{l.stopPropagation();const c=l.target.closest("[data-act]");c&&this.panelLane&&this.onPanelAction(this.panelLane,c.dataset.act)}),this.panelLane=null;const o=l=>{l.stopPropagation(),this.closePanel()};this.panel.querySelector(".p-close").addEventListener("pointerdown",o),this.panelList.addEventListener("click",l=>{l.stopPropagation();const c=l.target.closest("[data-buy]");c&&this.panelLane&&this.onBuy(this.panelLane,c.dataset.buy);const h=l.target.closest("[data-act]");h&&!h.disabled&&this.panelLane&&this.onPanelAction(this.panelLane,h.dataset.act)})}hideHint(){this.hint.classList.add("gone")}setParts(t){this.partsValue=t,this.partsN.textContent=Pe(t)}bumpParts(){this.partsEl.classList.remove("bump"),this.partsEl.offsetWidth,this.partsEl.classList.add("bump")}setProfile(t){this.profileBtn.querySelector(".ava").innerHTML=Rs(t.avatar),this.profileBtn.querySelector(".pf-name").textContent=t.name,this.profileBtn.querySelector(".pf-trophy").textContent=`🏆 ${t.trophies||0}`}setMoney(t,e=!1){this.targetMoney=t,e&&(this.shownMoney=t,this.money.textContent=Pe(t))}bumpWallet(){this.wallet.classList.remove("bump"),this.wallet.offsetWidth,this.wallet.classList.add("bump")}tick(t){if(this.shownMoney!==this.targetMoney){const e=this.targetMoney-this.shownMoney,n=Math.max(1,Math.abs(e)*t*8);this.shownMoney=Math.abs(e)<=n?this.targetMoney:this.shownMoney+Math.sign(e)*n,this.money.textContent=Pe(this.shownMoney)}}openPanel(t){this.panelLane=t,this.panelTab=0,this.panel.inert=!1,this.panel.classList.add("open"),this.refreshPanel()}closePanel(){this.panel.classList.remove("open"),this.panel.inert=!0,this.panelLane=null}get panelOpen(){return!!this.panelLane}refreshPanel(t){const e=this.panelLane;if(!e)return;const n=e.panelData(),s=t??this.targetMoney;this.panelTabs.innerHTML=n.sections.map((a,o)=>`<button class="dock-tab ${o===this.panelTab?"on":""}" role="tab" aria-selected="${o===this.panelTab}" data-section="${o}">${a.title}</button>`).join(""),this.panelTitle.innerHTML=`${n.title} ${Os(n.tier)}<span class="p-stars">${vm.repeat(n.tier)}</span>`,this.panelSub.textContent=n.sub,this.panelThumb.dataset.key!==n.thumbKey&&(this.panelThumb.dataset.key=n.thumbKey,this.panelThumb.innerHTML=n.thumb?`<img alt="" src="${n.thumb}">`:"");const r=this.panelList.scrollTop;this.panelList.innerHTML=n.sections.filter((a,o)=>o===this.panelTab).map(a=>`<div class="p-sec">${a.title}${a.note?`<small>${a.note}</small>`:""}</div>${a.rows.map(o=>{if(o.off)return`<div class="p-row off"><div class="p-ic">${o.icon}</div><div class="p-info"><div class="p-name">${o.title}</div>
            <div class="p-val">${o.now}</div></div><div class="p-buy blocked">${o.off}</div></div>`;if(o.btns)return`<div class="p-row"><div class="p-ic">${o.icon}</div><div class="p-info"><div class="p-name">${o.title} <span class="p-lvl">${o.lvl}</span></div>
            <div class="p-val">${o.now}</div></div><div class="p-steps">${o.btns.map(d=>`<button class="p-step" data-act="${d.act}" ${d.off?"disabled":""}>${d.label}</button>`).join("")}</div></div>`;const l=o.cost==null&&!o.block,c=o.cur==="parts",h=!l&&!o.block&&(c?this.partsValue??0:s)>=o.cost,u=o.block?`<div class="p-buy blocked">${o.block}</div>`:`<button class="p-buy ${l?"maxed":h?"":"locked"}" ${l?"disabled":`data-buy="${o.id}" ${h?"":"disabled"}`}>
            ${l?"MAX":c?Zo(o.cost):`<span class="c">$</span>${Pe(o.cost)}`}</button>`;return`<div class="p-row"><div class="p-ic">${o.icon}</div>
          <div class="p-info"><div class="p-name">${o.title} <span class="p-lvl">${o.lvl}</span></div>
            <div class="p-val">${l||o.block?`${o.now}${l?" · MAX":""}`:`${o.now} <b>→ ${o.next}</b>`}</div></div>${u}</div>`}).join("")}`).join(""),this.panelList.scrollTop=r,this.panelFoot.innerHTML=n.foot.map(a=>`<button class="m-btn ${a.cls||""}" data-act="${a.act}">${a.label}</button>`).join("")}flashRow(t){var n;const e=this.panelList.querySelector(`[data-buy="${t}"]`);(n=e==null?void 0:e.closest(".p-row"))==null||n.animate([{background:"rgba(255,210,63,0.45)"},{background:"rgba(255,255,255,0.06)"}],{duration:350})}popup(t,e,n,s=""){const r=Li("div",`pop ${s}`);r.textContent=n,this.popups.appendChild(r);const a=(Math.random()-.5)*40,o=r.animate([{transform:`translate(${t}px, ${e}px) translate(-50%, -50%) scale(0.3)`,opacity:0},{transform:`translate(${t+a*.3}px, ${e-24}px) translate(-50%, -50%) scale(1.2)`,opacity:1,offset:.15},{transform:`translate(${t+a*.6}px, ${e-46}px) translate(-50%, -50%) scale(1)`,opacity:1,offset:.6},{transform:`translate(${t+a}px, ${e-70}px) translate(-50%, -50%) scale(0.9)`,opacity:0}],{duration:800,easing:"cubic-bezier(.2,.7,.3,1)"});o.onfinish=()=>r.remove()}flyCoins(t,e,n,s){this.fly(t,e,n,this.wallet.querySelector(".coin"),Gh,s)}flyParts(t,e,n,s,r){this.fly(t,e,n,s,dl,r)}fly(t,e,n,s,r,a){const o=s.getBoundingClientRect(),l=o.left+o.width/2,c=o.top+o.height/2;for(let h=0;h<n;h++){const u=Li("div","fly-coin",r);this.popups.appendChild(u);const d=t+(Math.random()-.5)*60,f=e+(Math.random()-.5)*40,g=(d+l)/2+(Math.random()-.5)*160,v=Math.min(f,c)-40-Math.random()*60,m=u.animate([{transform:`translate(${d}px, ${f}px) scale(0.2)`},{transform:`translate(${d+(Math.random()-.5)*80}px, ${f-40}px) scale(1.15)`,offset:.2},{transform:`translate(${g}px, ${v}px) scale(1)`,offset:.55},{transform:`translate(${l}px, ${c}px) scale(0.6)`}],{duration:700+h*60,easing:"cubic-bezier(.5,0,.7,1)"});m.onfinish=()=>{u.remove(),a==null||a(h)}}}}class bu{constructor(t){this.el=Li("div","target-hud",'<div class="th-bar"><i class="th-chip"></i><i class="th-fill"></i><span class="th-num"></span></div>'),this.number=this.el.querySelector(".th-num"),this.fill=this.el.querySelector(".th-fill"),this.chipFill=this.el.querySelector(".th-chip"),this.chip=this.fraction=1,t&&t.append(this.el)}set(t,e,n=!1){this.fraction=e?Math.max(0,t/e):0,this.fill.style.transform=`scaleX(${this.fraction})`,this.number.textContent=Pe(Math.ceil(Math.max(0,t))),this.el.classList.toggle("low",this.fraction<.25),n&&(this.chip=this.fraction,this.chipFill.style.transform=`scaleX(${this.chip})`)}tick(t){this.chip=this.chip>this.fraction?Math.max(this.fraction,this.chip-t*.9):this.fraction,this.chipFill.style.transform=`scaleX(${this.chip})`}place(t,e){this.el.style.transform=`translate(${t}px, ${e}px) translate(-50%, -100%)`}}class jM{constructor(t,{onUpgrade:e,onUnlock:n,onEvolve:s,onEquip:r}){this.gun=Li("div","gun-hud",`<button class="gh-up">${WM}<i class="gh-badge"></i></button>
       <b class="gh-name"></b><span class="gh-evo"></span>
       <div class="gh-ammo"><i class="gh-bullets">${$M}</i><span></span><div class="gh-reload"><i></i></div></div>`),this.gun.querySelector(".gh-up").addEventListener("pointerdown",a=>{a.stopPropagation(),e()}),this.nameEl=this.gun.querySelector(".gh-name"),this.evoEl=this.gun.querySelector(".gh-evo"),this.ammoBox=this.gun.querySelector(".gh-ammo"),this.ammoEl=this.ammoBox.querySelector("span"),this.reloadEl=this.gun.querySelector(".gh-reload"),this.reloadFill=this.reloadEl.querySelector("i"),this.badge=this.gun.querySelector(".gh-badge"),this.gauge=Li("button","gauge",'<b class="g-val"></b><div class="g-track" role="progressbar"><i class="g-fill"></i></div><small class="g-status"></small>'),this.gVal=this.gauge.querySelector(".g-val"),this.gFill=this.gauge.querySelector(".g-fill"),this.gTrack=this.gauge.querySelector(".g-track"),this.gStatus=this.gauge.querySelector(".g-status"),this.gauge.addEventListener("click",a=>{a.stopPropagation(),this.evoReady&&s()}),this.evoReady=!1,this.hpUI=new bu,this.target=this.hpUI.el,this.reward=Li("span","th-reward",`<i class="coin-s">${Gh}</i><b></b>`),this.rewardText=this.reward.querySelector("b"),this.rewardIcon=this.reward.querySelector("i"),this.target.append(this.reward),this.shownReward=null,this.comboEl=Li("div","lane-combo","<b></b><small>комбо</small>"),this.comboText=this.comboEl.querySelector("b"),this.shownCombo=0,this.lock=Li("div","lane-lock",`<div class="ll-icon">${GM}</div><button class="ll-buy"></button>`),this.lockBtn=this.lock.querySelector(".ll-buy"),this.lock.addEventListener("pointerdown",a=>{a.stopPropagation(),n()}),this.empty=Li("button","lane-empty","<b>+</b><span>Поставить оружие</span>"),this.empty.addEventListener("click",a=>{a.stopPropagation(),r()}),t.append(this.gauge,this.gun,this.target,this.lock,this.empty,this.comboEl),this.mode=null,this.hidden=!1}setHidden(t){if(this.hidden!==t){this.hidden=t;for(const e of[this.gun,this.gauge,this.target,this.lock,this.empty,this.comboEl])e.classList.toggle("hud-hidden",t)}}setMode(t){if(this.mode!==t){this.mode=t;for(const e of[this.gun,this.gauge,this.target])e.style.display=t==="armed"?"":"none";this.lock.style.display=t==="locked"?"":"none",this.empty.style.display=t==="empty"?"":"none"}}setLock(t,e,n){this.lock.classList.toggle("next",e),this.lock.classList.toggle("ready",e&&n),this.lockBtn.style.display=e?"":"none",this.lockBtn.innerHTML=t,this.lockBtn.classList.toggle("locked",!n)}setGun(t,e,n=0,s="glock19"){var r;if(this.nameEl.textContent=t,this.magSize=e,this.evoEl.innerHTML=vm.repeat(n),this.ammoKind!==s){this.ammoKind=s;const a=VM(s);this.gun.querySelector(".gh-bullets").innerHTML=`<img src="${a}" alt=""><img src="${a}" alt="">`,this.ammoBox.title=((r=za[s])==null?void 0:r.caliber)||""}}setAmmo(t){this.ammoEl.textContent=`${t}/${this.magSize}`,this.ammoBox.classList.toggle("low",t<=Math.max(1,Math.round(this.magSize*.2)))}setReload(t,e){this.gun.classList.toggle("reloading",t),this.reloadFill.style.transform=`scaleX(${e})`}setBadge(t){this.badge.style.display=t?"":"none"}setEvo({p:t,ready:e,max:n,current:s,required:r,wait:a,attempts:o}){const l=Math.round(t*100);this.gVal.textContent=n?"MAX":`${s}/${r}`,this.gFill.style.height=`${l}%`;const c=Math.ceil(a/1e3),h=`${Math.floor(c/60)}:${String(c%60).padStart(2,"0")}`;this.gStatus.textContent=a?h:e?`${4-o}/3`:"EVO",this.gauge.disabled=!e,this.gauge.title=n?"Все эволюции пройдены":a?`Повтор через ${h}`:`Эволюция: ${s}/${r}. Осталось попыток: ${o}`,this.gauge.setAttribute("aria-label",this.gauge.title),this.gTrack.setAttribute("aria-valuemin","0"),this.gTrack.setAttribute("aria-valuemax",String(r||1)),this.gTrack.setAttribute("aria-valuenow",String(n?1:s)),this.evoReady=e,this.gauge.classList.toggle("ready",e),this.gauge.classList.toggle("max",n),this.gauge.classList.toggle("cooldown",a>0)}setTarget(){}setHp(t,e,n=!1){this.hpUI.set(t,e,n)}setCombo(t){if(t===this.shownCombo)return;const e=t>this.shownCombo;this.shownCombo=t,this.comboEl.classList.toggle("on",t>0),t&&(this.comboText.textContent=`×${t.toFixed(2)}`,this.comboEl.classList.toggle("hot",t>=1.5),e&&(this.comboEl.classList.remove("bump"),this.comboEl.offsetWidth,this.comboEl.classList.add("bump")))}setReward(t){const e=t==null?"crate":Pe(t);e!==this.shownReward&&(this.shownReward=e,this.rewardIcon.innerHTML=t==null?"📦":Gh,this.rewardText.textContent=t==null?"ящик":e)}setHpVisible(t){this.hpOn!==t&&(this.hpOn=t,this.target.classList.toggle("hp-off",!t))}tick(t){this.hpUI.tick(t)}place(t){this.gauge.style.transform=`translate(${t.gaugeX}px, ${t.gaugeY}px)`,this.gun.style.transform=`translate(${t.chipX}px, ${t.chipY}px)`,this.target.style.transform=`translate(${t.hpX}px, ${t.hpY}px) translate(-50%, -100%)`,this.lock.style.transform=`translate(${t.lockX}px, ${t.lockY}px) translate(-50%, calc(var(--k) * -44px))`,this.empty.style.transform=`translate(${t.lockX}px, ${t.lockY}px) translate(-50%, -50%)`,this.comboEl.style.transform=`translate(${t.comboX}px, ${t.comboY}px) translate(-50%, -100%)`}}const ce={black:Xe("#262a33",{spec:.28}),rubber:Et("#1f222a",{spec:.05}),tan:Ee("#c2a06c",{spec:.14}),glass:Et("#6fd2ff",{spec:.7,gloss:30,sheen:.35,rim:.35}),dot:Et("#ff4030",{emissive:"#ff2a10",emissiveIntensity:2.6,rim:0}),lens:Et("#fff6dc",{emissive:"#ffefc0",emissiveIntensity:1.8,rim:0})};function ZM(){return new Ue({transparent:!0,depthWrite:!1,blending:ti,uniforms:{uColor:{value:new xt().setRGB(2.4,.25,.12)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec2 vUv;
      uniform vec3 uColor;
      void main() {
        float across = abs(vUv.y * 2.0 - 1.0);
        float along = 1.0 - clamp(vUv.x, 0.0, 1.0);
        float a = along * along * (1.0 - across * across);
        gl_FragColor = vec4(uColor, a);
      }`})}let Mf=null;function xm(i,t,e,n=8){const s=new It;s.add(lt(i,t,e,e+6,-n,n,2,ce.black));for(let r=i+4;r<t-4;r+=9)s.add(lt(r,r+4,e+5,e+8.5,-n-.5,n+.5,1,F.groove,1));return s}function Wr(i,t,e=64){const n=e*.62,s=i+(e-n)*.5,r=xm(s-3,s+n+3,t,7),a=t+8;r.add(lt(s,s+n,a,a+5,-10,10,2,ce.black)),r.add(lt(s+3,s+n*.5,a+5,a+9,-8,8,2,F.gunDark));const o=Me([[-12,0],[12,0],[12,22],[8,27],[-8,27],[-12,22]],3);o.holes.push(ka([[-8,5],[-8,20],[-5,23],[5,23],[8,20],[8,5]],2));const l=pe(o,8,1.4,ce.black);l.rotation.y=Math.PI/2,l.position.set(s+n-7,a+3,0),r.add(l);const c=new Tn({color:"#8ad8eb",transparent:!0,opacity:.22,depthWrite:!1,side:En}),h=new ct(new Je(15,19),c);h.rotation.y=Math.PI/2,h.position.set(s+n-7,a+17,0),r.add(h);const u=new ct(new Sl(.85,12),ce.dot);return u.rotation.y=-Math.PI/2,u.position.set(s+n-11.1,a+17,0),r.add(u),r.add(ll(s+10,a+4,2.2,1.5,F.barrel,10.5,12)),r}function Su(i,t,e,n=0){const s=new It;s.add(kt(i,i+t,e,ce.black,n));for(const r of[.2,.5,.8])s.add(kt(i+t*r-3,i+t*r+3,e+1.2,ce.tan,n));return s.add(kt(i+t-5,i+t+1,e-2.5,ce.black,n)),s.add(kt(i+t+.5,i+t+1.7,e*.35,F.dark,n)),s}function Ja(i,t,e,n){const s=new It,r=n-e,a=(e+n)/2;s.add(lt(i,t,e,n,-12,12,6,ce.black)),s.add(kt(t-3,t+4,r*.42,ce.black,a+2)),s.add(kt(t+3.6,t+4.8,r*.3,ce.lens,a+2));const o=new ct(new Hr(2.4,10,8),ce.dot);o.position.set(t+2,e+4,10),s.add(o),Mf??(Mf=ZM());const l=new Je(900,3);l.translate(450,0,0);const c=new ct(l,Mf);return c.position.set(t+3,e+4,10),c.renderOrder=5,c.userData.noBounds=!0,s.add(c),s}function _m(i,t,e,n){const s=new It;s.add(lt(i-4,t+4,e-8,e+2,-11,11,4,ce.black)),s.add(lt(i,t,n,e-4,-11,11,10,ce.tan));for(let r=n+12;r<e-12;r+=14)s.add(lt(i-.8,i+4,r,r+6,-11.5,11.5,2,ce.rubber,2));return s}function Cl(i,t,e=1){const n=new It;return n.add(kt(i-135,i+4,9,ce.black,t-11)),n.add(pe(Me([[i-70,t,6],[i-176,t+4,8],[i-184,t-6,6],[i-184,t-84,8],[i-168,t-90,10],[i-120,t-36,14],[i-74,t-22,8]]),30,7,ce.tan)),n.add(lt(i-197,i-183,t-91,t+6,-15,15,5,ce.rubber)),n.add(lt(i-150,i-100,t+2,t+12,-12,12,5,ce.black)),e!==1&&(n.position.set(i*(1-e),t*(1-e),0),n.scale.set(e,e,1)),n}function JM(i,t){return pe(Me([[i,t,4],[i+28,t,4],[i+16,t-78,9],[i-14,t-72,9]]),30,6,ce.tan)}function ym(i,t,e,n=0){const s=new It;s.add(kt(i,i+t,e,ce.black,n));for(let r=0;r<3;r++){const a=i+7+r*((t-14)/2);s.add(lt(a-3,a+3,n-e*.55,n+e*.55,e-3,e+.8,2,F.dark,2))}return s.add(kt(i+t-.6,i+t+.6,e*.4,F.dark,n)),s}const yc=new Map;function QM(i,t){const e=`${i.uuid}|${t}`;if(!yc.has(e)){const n=new xt(Nn[t].color),s=i===ce.tan?Ee(`#${n.getHexString()}`,{spec:.22}):Xe(`#${new xt(i.color).lerp(n,.32).getHexString()}`,{spec:.32,rim:.2});t>=3&&(s.emissive.copy(n),s.emissiveIntensity=i===ce.tan?.18:.08),yc.set(e,s)}return yc.get(e)}function Aa(i,t={}){for(const e of i.evoParts){const n=t[e.userData.kind]||0;e.traverse(s=>{var a;if(!s.isMesh)return;(a=s.userData).stockMat??(a.stockMat=s.material);const r=s.userData.stockMat;s.material=n>0&&(r===ce.tan||r===ce.black)?QM(r,n):r})}}const tb=40,eb=new b(-.316,-.949,0),bf=new b(28,-112,0),nb=new b(22,-128,0),ib={scale:.55,rings:0,bubble:!1,smoke:6};function sb(i,t,e,n,s){const r=[],a=[];for(let o=0;o<=12;o++){const l=o/12,c=1-l,h=c*c*i[0]+2*c*l*t[0]+l*l*e[0],u=c*c*i[1]+2*c*l*t[1]+l*l*e[1],d=2*c*(t[0]-i[0])+2*l*(e[0]-t[0]),f=2*c*(t[1]-i[1])+2*l*(e[1]-t[1]),g=Math.hypot(d,f)||1,v=(n+(s-n)*l)/2;r.push(new Z(h+-f/g*v,u+d/g*v)),a.push(new Z(h- -f/g*v,u-d/g*v))}return new Br([...r,...a.reverse()])}function rb(){const i=new It;i.add(pe(Me([[-2,-16,3],[227,-16,4],[227,24,10],[-2,24,7]]),30,5,F.slide)),i.add(lt(101,143,2,19,11,15.6,3,F.dark));for(const[t,e]of[[20,29],[34,42],[47,55],[60,69]])for(const n of[1,-1])i.add(lt(t,e,-12,19,n>0?12:-15.6,n>0?15.6:-12,2.5,F.groove,2));return i.add(lt(13,37,21,33,-7,7,3.5,F.slide)),i.add(lt(199,214,21,32,-5,5,3,F.slide)),i}function ab(){const i=new It;i.position.set(225,0,0);const t=new It;t.position.set(-225,0,0),i.add(t),t.add(kt(110,224,10,F.barrel)),t.add(lt(104,150,-6,14,-10,10,4,F.barrel)),t.add(kt(222,238,13,F.barrel));const e=kt(237.4,238.6,6.5,F.dark);return e.castShadow=!1,t.add(e),i}function ob(){const i=Me([[-8,-16,2],[226,-16,2],[227,-44,7],[168,-44,6],[168,-92,11],[80,-92,4],[68,-146,8],[-19,-146,8],[23,-48,13],[-8,-33,8]]);return i.holes.push(ka([[100,-50],[156,-50],[156,-82],[100,-82]],9)),i}function lb(i){const t=new It;t.add(pe(Me([[26,-58],[80,-58],[51,-146],[-3,-146]],4),26,3,F.mag)),i?(t.add(pe(Me([[-3,-146],[51,-146],[38.4,-186],[-15.6,-186]],4),26,3,F.mag)),t.add(lt(-15,47,-195,-184,-16.5,16.5,4,F.mag)),t.add(lt(-19,53,-207,-192,-18,18,6,F.orange))):(t.add(lt(-2,60,-155,-144,-16.5,16.5,4,F.mag)),t.add(lt(-6,66,-167,-152,-18,18,6,F.mag)));const e=lt(30,74,-62,-55,-10,10,3,F.orange);t.add(e);const n=Dr("pistol");n.position.set(32,-48,0),t.add(n);const s=r=>{n.visible=r,e.visible=!r};return s(!0),{g:t,setLoaded:s}}class cb extends Gr{constructor(){super(),this.spec={cycle:{delay:0,back:.03,hold:.012,fwd:.06,ejectAt:.024,lockOnEmpty:!0},recoil:{kick:[6.5,8],push:[2.8,3.4],roll:1.5,squash:1},pose:{tilt:.2,yaw:.25,roll:.5,lift:.6},reload:"mag",magOut:36,magIn:42,dropSize:.24,casing:"pistol",eject:{side:[1.6,2.6],up:[5,6.5],back:[.3,1]},blast:{scale:1,smoke:3,rings:1,bubble:!0},pellet:1,impact:1,rack:1,ammo:"pistol"},this.magAxis.copy(eb),this.magCenter.copy(bf),this.inset=50;const t=this.model;t.add(pe(ob(),32,4.5,F.frame)),t.add(pe(Me([[26,-60],[76,-64],[60,-136],[-10,-136]],10),34,2.5,F.frame)),this.slideStop=lt(117,137,-34,-18,13,17.4,3,F.frame),t.add(this.slideStop),this.trigger=new It,this.trigger.position.set(112,-50,0),this.trigger.add(pe(sb([0,2],[-14,-12],[3,-28],9,6),9,2.5,F.frame)),t.add(this.trigger),this.barrel=ab(),this.barrelInner=this.barrel.children[0],t.add(this.barrel),this.slide=rb(),t.add(this.slide),this.muzzleAnchor.position.set(241,0,0),this.portAnchor.position.set(122,12,16),this.finish(new b(38,-78,0)),this.setAction(0)}buildMag(){const t=this.kit.has("mag");this.magCenter.copy(t?nb:bf);const{g:e,setLoaded:n}=lb(t);return this.wrapMag(e,n)}kitPart(t){switch(t){case"optic":return{add:Wr(44,24,56),parent:this.slide};case"laser":return{add:Ja(170,224,-68,-46)};case"suppressor":return{add:Su(236,150,17),parent:this.barrelInner,muzzle:390,blast:ib};case"stock":return{add:Cl(-6,-18,.8)}}return null}setAction(t){const e=t*tb;this.slide.position.x=-e;const n=We.smoothstep(e,4,14);this.barrel.position.x=225-Math.min(e,5),this.barrel.rotation.z=n*.05,this.barrel.position.y=-n*1.2}setTrigger(t){this.trigger.rotation.z=-.35*t}setHold(t){this.slideStop.position.y=-26+t*3}}const Sf=-16,Ri=44,ri=114,la=31,fl=18,xr=Math.PI/3,wf=-46,hb=1.15,Ef=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,Tf=(i,t,e)=>Math.min(1,Math.max(0,(i-t)/(e-t)));function ma(...i){const t=new It;return t.add(...i),t}function ub(){const i=new It,t=[];for(let s=0;s<6;s++){const r=s*xr,a=Dr("pistol");a.scale.setScalar(.92),a.position.set(-70/2-2,Math.cos(r)*fl,Math.sin(r)*fl),i.add(a),t.push(a.children[1])}const e=ma(kt(-70/2-12,-70/2-4,24,ce.black),kt(-70/2-26,-70/2-11,11,ce.black));i.add(e);const n=s=>{for(const r of t)r.visible=s;e.visible=s};return n(!0),{g:i,setLoaded:n}}class db extends Gr{constructor(){super(),this.spec={cycle:{delay:0,back:.07,hold:0,fwd:.05,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[9,11.5],push:[3.6,4.6],roll:1.6,squash:1.3},pose:{tilt:.42,yaw:.3,roll:.55,lift:.55},reload:"mag",magOut:64,magIn:80,dropSize:.12,casing:null,eject:{side:[1.4,2.4],up:[4,5.5],back:[.4,1.2]},blast:{scale:1.35,smoke:5,rings:1,bubble:!0},pellet:1.15,impact:1.3,rack:1.4,ammo:"pistol"},this.inset=46;const t=this.model,e=Me([[-6,-24,8],[Ri-6,-24,4],[Ri-6,-58,6],[ri+30,-58,6],[ri+30,26,8],[10,26,10],[-6,6,8]]);e.holes.push(ka([[Ri-4,16],[ri+4,16],[ri+4,-48],[Ri-4,-48]],8)),t.add(pe(e,30,4,F.gunmetal)),t.add(lt(4,Ri-10,-20,18,13,16.5,4,F.gunDark)),t.add(cl(16,-6,4,16.4,F.gunmetal)),t.add(cl(30,8,4,16.4,F.gunmetal)),t.add(lt(30,ri+26,20,30,-8,8,4,F.gunDark)),t.add(lt(14,30,20,34,-6,6,3,F.gunDark)),t.add(kt(ri+26,268,13,F.gunmetal)),t.add(lt(ri+26,262,-30,-4,-10,10,7,F.gunmetal)),t.add(lt(244,262,10,27,-3.5,3.5,2.5,F.orange)),this.crown=ma(kt(264,272,14.5,F.gunmetal),kt(271.4,272.6,6.5,F.dark)),this.crown.children[1].castShadow=!1,t.add(this.crown),this.crane=new It,this.crane.position.set((Ri+ri)/2,wf,0),t.add(this.crane),this.cyl=new It,this.cyl.position.set(0,Sf-wf,0),this.crane.add(this.cyl);const n=ri-Ri;this.cyl.add(kt(-n/2,n/2,la,F.uzi,0,0,36));for(let r=0;r<6;r++){const a=r*xr+xr/2,o=lt(-n/2+12,n/2-12,-5,5,-3,3,2.5,F.uziDark);o.position.set(0,Math.cos(a)*(la-1),Math.sin(a)*(la-1)),o.rotation.x=a,this.cyl.add(o);const l=r*xr,c=kt(n/2-.6,n/2+.6,7,F.dark,Math.cos(l)*fl,Math.sin(l)*fl,16);c.castShadow=!1,this.cyl.add(c)}this.cyl.add(kt(n/2,n/2+6,9,F.gunmetal)),this.crane.add(lt(-n/2+6,n/2+10,-6,8,-9,9,4,F.gunDark)),this.cyl.add(this.magSlot),this.magAxis.set(-1,0,0),this.magCenter.set(0,0,0),this.hammer=new It,this.hammer.position.set(4,8,0),this.hammer.add(pe(Me([[-4,-10,4],[8,-6,3],[6,18,4],[-14,30,5],[-24,26,4],[-12,10,3]]),10,2.2,F.gunDark)),t.add(this.hammer),t.add(pe(Me([[-4,-16,6],[40,-22,10],[34,-70,14],[24,-126,12],[-36,-126,12],[-30,-70,14],[-18,-28,8]]),34,6,F.wood)),t.add(lt(-38,26,-136,-122,-15,15,6,F.gunDark)),t.add(lt(-12,16,-70,-40,16,18.6,6,F.woodDark));const s=Me([[40,-40,6],[90,-40,3],[90,-84,14],[44,-84,12]]);s.holes.push(ka([[46,-46],[84,-46],[84,-76],[50,-76]],9)),t.add(pe(s,14,2,F.gunmetal)),this.trig=new It,this.trig.position.set(62,-44,0),this.trig.add(pe(Me([[-3,2,2],[4,2,2],[6,-16,4],[-2,-28,3],[-6,-24,3],[-2,-12,2]]),8,2,F.gunDark)),t.add(this.trig),this.muzzleAnchor.position.set(274,0,0),this.portAnchor.position.set(Ri-10,Sf,18),this.cylBase=0,this.prevT=0,this.falling=!1,this.finish(new b(10,-72,0))}buildMag(){const{g:t,setLoaded:e}=ub();return this.wrapMag(t,e)}kitPart(t){switch(t){case"optic":return{add:Wr(40,30,74)};case"loader":{const e=ma(lt(-30,18,-112,-84,17,23,5,ce.black));for(let n=0;n<6;n++)e.add(ll(-20+n%3*13,-92-Math.floor(n/3)*12,4.4,2.4,F.brass,24.2,14));return{add:e}}case"comp":return{add:ym(270,30,16),muzzle:302,blast:{scale:1.55,smoke:6}};case"engraved":{const e=ri-Ri;return{add:ma(kt(-e/2+2,-e/2+9,la+1.4,F.yellow),kt(e/2-9,e/2-2,la+1.4,F.yellow)),parent:this.cyl}}case"barrel":return{add:ma(kt(268,322,13,F.gunmetal),lt(268,316,-30,-4,-10,10,7,F.gunmetal),lt(298,316,10,27,-3.5,3.5,2.5,F.orange)),hide:[this.crown],muzzle:324}}return null}setAction(t){this.hammer.rotation.z=t*.75,t>this.prevT?(this.falling=!1,this.cyl.rotation.x=this.cylBase+t*xr):t<this.prevT&&!this.falling&&(this.falling=!0,this.cylBase+=this.prevT*xr,this.cyl.rotation.x=this.cylBase),this.prevT=t}setTrigger(t){this.trig.rotation.z=-.35*t}reloadPhase(t){const e=t<0?0:Ef(Tf(t,.03,.12))*(1-Ef(Tf(t,.62,.72)));this.crane.rotation.x=e*hb}}const Mm={scale:.5,rings:0,bubble:!1,smoke:6};function Ba(...i){const t=new It;return t.add(...i),t}const fb=i=>1-Math.pow(1-i,3);function wu(i,t=F.gunDark){const e=new It,n=[],s=[];for(let r=0;r<=10;r++){const a=r/10,o=-Math.sin(a*Math.PI)*i*.32+a*i*.12,l=2-a*i,c=4.2-a*1.6;n.push(new Z(o+c,l)),s.push(new Z(o-c,l))}return e.add(pe(new Br([...n,...s.reverse()]),7,2.2,t)),e}function Eu(i,t,e,n=14){const[s,r,a,o]=i,[l,c,h,u]=t,d=Me([[s,o,2],[r,o,3],[r,a,9],[s,a,6]]);return d.holes.push(ka([[l,u],[c,u],[c,h],[l,h]],6)),pe(d,n,2,e)}class pb extends Gr{constructor(){super(),this.spec={cycle:{delay:0,back:.025,hold:.005,fwd:.04,ejectAt:.02,lockOnEmpty:!1},recoil:{kick:[3,4],push:[1.6,2.2],roll:1.2,squash:.7},pose:{tilt:.18,yaw:.2,roll:.45,lift:.6},reload:"mag",magOut:36,magIn:42,dropSize:.2,casing:"pistol",eject:{side:[1.8,3],up:[3.5,5],back:[.2,1],smoke:.12},blast:{scale:.8,smoke:2,rings:1,bubble:!0},pellet:1,impact:.6,rack:2.5,ammo:"pistol"},this.magAxis.set(0,-1,0),this.magCenter.set(89,-112,0),this.inset=8;const t=this.model;t.add(pe(Me([[0,-39,12],[240,-39,10],[240,32,12],[0,32,16]]),44,7,F.uzi)),t.add(lt(18,44,26,50,-6,6,6,F.uzi)),t.add(lt(200,225,24,46,-6,6,6,F.uzi)),t.add(ll(31,41,3.4,1.2,F.dark,6.2)),t.add(ll(212.5,37,3.2,1.2,F.dark,6.2)),t.add(lt(72,116,10,23,18,22.6,3,F.dark)),this.knob=lt(75,113,13,20,18,24,2.5,F.uzi),t.add(this.knob),t.add(lt(72,153,-6,7,18,22.6,3,F.dark)),t.add(lt(78,137,-28,-9,18,25.5,6,F.uzi)),t.add(cl(40,-11,11,22,F.uzi)),t.add(cl(183,-11,10,22,F.uzi)),t.add(kt(236,249,17,F.uziDark)),t.add(kt(248,276,13.5,F.gunmetal)),t.add(kt(275.4,276.6,6,F.dark)),this.stockParts=[lt(-66,4,-21,14,-12,12,8,F.uziDark),lt(-14,3,-17,16,-14,14,4,F.uziGrip),lt(-88,-55,-75,16,-14,14,10,F.uziDark),pe(Me([[-58,-19],[-38,-19],[-58,-42]],4),22,3,F.uziDark)],t.add(...this.stockParts),t.add(pe(Me([[78,-36,4],[124,-36,4],[124,-114,6],[57,-114,6]]),34,6,F.uziGrip)),t.add(lt(55,72,-62,-36,-10,10,5,F.uziGrip)),t.add(Eu([122,177,-77,-36],[128,166,-70,-42],F.uzi)),this.trig=wu(24),this.trig.position.set(142,-40,0),t.add(this.trig),this.muzzleAnchor.position.set(279,0,0),this.portAnchor.position.set(130,16,23),this.finish(new b(95,-75,0))}buildMag(){const t=this.kit.has("mag"),e=t?40:0;this.magCenter.set(89,-112-e/2,0);const n=new It;return n.add(lt(66,112,-150-e,-40,-12,12,4,F.mag)),n.add(lt(63,115,-158-e,-147-e,-13.5,13.5,4,t?F.orange:F.mag)),this.wrapMag(n)}kitPart(t){switch(t){case"optic":return{add:Wr(72,32,80)};case"grip":return{add:Ba(_m(196,226,-38,-110),Ja(232,268,-40,-20))};case"suppressor":return{add:Su(274,150,18),muzzle:428,blast:Mm};case"stock":return{add:Cl(2,14),hide:this.stockParts}}return null}setAction(t){this.knob.position.x=94-t*26}setTrigger(t){this.trig.rotation.z=-.3*t}}class mb extends Gr{constructor(){super(),this.spec={cycle:{delay:.1,back:.11,hold:.04,fwd:.11,ejectAt:.06,lockOnEmpty:!1},recoil:{kick:[6,7.2],push:[4.5,5.5],roll:2,squash:1.2},pose:{tilt:.18,yaw:.15,roll:.6,lift:.3},reload:"tube",casing:"shell",eject:{side:[2,3],up:[4,5.5],back:[.2,.8]},blast:{scale:1.45,smoke:6,rings:2,bubble:!0},pellet:.55,impact:.45,rack:1.3,ammo:"shell"},this.inset=30;const t=this.model;t.add(pe(Me([[0,-46,6],[153,-46,6],[153,16,6],[22,16,10],[0,2,6]]),36,6,F.gunDark)),t.add(lt(82,130,-13,11,14,18.6,4,F.dark)),this.bolt=lt(88,124,-6,4,13,17.2,3,F.gunmetal),t.add(this.bolt),t.add(Eu([18,72,-68,-42],[26,62,-61,-47],F.gunDark)),this.trig=wu(17),this.trig.position.set(44,-46,0),t.add(this.trig),this.woodStock=pe(Me([[3,6,6],[-24,-8,10],[-36,-1,10],[-140,-12,10],[-150,-18,6],[-148,-62,8],[-128,-69,10],[-28,-73,14],[-12,-64,10],[8,-44,6]]),30,8,F.wood),t.add(this.woodStock),t.add(kt(150,430,14,F.gunmetal)),t.add(kt(426,437,15,F.gunmetal)),t.add(kt(436.4,437.6,7,F.dark)),t.add(lt(404,422,10,23,-3,3,3,F.gunmetal)),t.add(kt(150,424,12.5,F.gunDark,-28)),t.add(kt(418,426,13.5,F.gunmetal,-28)),t.add(kt(326,338,15.5,F.gunDark,-28)),this.pump=new It,this.pump.add(lt(193,327,-54,-4,-23,23,9,F.wood));for(const e of[222,248,273,298])this.pump.add(lt(e-1.8,e+1.8,-47,-11,22.2,23.7,1.4,F.woodDark,2));t.add(this.pump),this.loadShell=Dr("shell"),this.loadShell.visible=!1,t.add(this.loadShell),this.muzzleAnchor.position.set(440,0,0),this.portAnchor.position.set(106,0,19),this.finish(new b(12,-44,0))}kitPart(t){switch(t){case"optic":return{add:Wr(40,16,80)};case"saddle":{const e=Ba(lt(18,130,-45,-15,18,23,4,ce.black));for(let n=0;n<4;n++){const s=Dr("shell");s.rotation.z=-Math.PI/2,s.scale.setScalar(.62),s.position.set(32+n*26,-13,25),e.add(s)}return{add:e}}case"light":return{add:Ja(352,404,-64,-44)};case"stock":return{add:Ba(Cl(2,8),JM(-6,-44)),hide:[this.woodStock]};case"brake":return{add:ym(436,36,17),muzzle:474,blast:{scale:1.7,smoke:8}}}return null}setAction(t){this.pump.position.x=-t*40,this.bolt.position.x=106-t*40}setTrigger(t){this.trig.rotation.z=-.3*t}setLoading(t){const e=this.loadShell;if(e.visible=t>=0&&t<1,!!e.visible)if(t<.55){const n=fb(t/.55);e.position.set(30,-110+n*82,0),e.scale.setScalar(.6+Math.min(1,t/.15)*.4)}else{const n=(t-.55)/.45;e.position.set(30+n*70,-28,0),e.scale.setScalar(1)}}}class gb extends Gr{constructor(){super(),this.spec={cycle:{delay:0,back:.03,hold:.008,fwd:.05,ejectAt:.022,lockOnEmpty:!1},recoil:{kick:[3.8,4.6],push:[2.6,3.2],roll:1.4,squash:.8},pose:{tilt:.14,yaw:.18,roll:.45,lift:.6},reload:"mag",magOut:30,magIn:40,dropSize:.2,casing:"rifle",eject:{side:[2.2,3.4],up:[4,5.5],back:[.2,1]},blast:{scale:1.2,smoke:3,rings:2,bubble:!0},pellet:1,impact:.85,rack:2.2,ammo:"rifle"},this.magAxis.set(.35,-.94,0).normalize(),this.magCenter.set(118,-95,0),this.magTilt=.004;const t=this.model;t.add(pe(Me([[0,-30],[152,-30],[152,12],[0,12]],6),34,6,F.gunDark)),t.add(pe(Me([[2,8,4],[150,8,4],[150,26,10],[8,26,12]]),30,6,F.gunmetal)),t.add(lt(72,120,-4,8,13,17.6,3,F.dark)),t.add(lt(10,70,-12,-4,15,18.4,3,F.gunmetal)),this.carrier=new It,this.carrier.add(lt(104,124,-2,7,12,17,2.5,F.gunmetal)),this.carrier.add(lt(112,124,-1,7,15,27,3,F.gunmetal)),t.add(this.carrier),t.add(lt(140,160,12,30,-8,8,4,F.gunDark)),this.woodGuards=[pe(Me([[150,-28,6],[268,-24,8],[268,6,6],[150,6,4]]),34,7,F.wood),pe(Me([[156,10],[262,10],[262,26],[156,26]],7),26,6,F.woodDark)],t.add(...this.woodGuards),t.add(lt(146,156,-30,28,-17,17,4,F.gunDark)),t.add(lt(266,276,-26,26,-15,15,4,F.gunDark)),t.add(kt(270,334,6,F.gunmetal,18)),t.add(lt(330,350,-8,24,-10,10,5,F.gunDark)),t.add(lt(335,345,22,40,-4,4,3,F.gunDark)),t.add(kt(150,392,9,F.gunmetal)),t.add(kt(372,396,11,F.gunDark)),t.add(kt(395.4,396.6,5,F.dark)),t.add(pe(Me([[22,-28,4],[58,-28,4],[46,-108,8],[12,-104,8]]),30,6,F.woodDark)),t.add(Eu([56,112,-54,-26],[64,104,-46,-31],F.gunDark,12)),this.trig=wu(15),this.trig.position.set(82,-30,0),t.add(this.trig),this.catchLever=lt(110,118,-40,-28,-6,6,2.5,F.gunmetal),t.add(this.catchLever),this.woodStock=[pe(Me([[4,10,6],[-176,-8,8],[-184,-16,6],[-184,-88,8],[-172,-96,10],[-84,-62,14],[-30,-36,10],[4,-28,6]]),30,8,F.wood),lt(-192,-180,-98,-6,-15,15,5,F.gunDark)],t.add(...this.woodStock),this.muzzleAnchor.position.set(399,0,0),this.portAnchor.position.set(96,4,18),this.finish(new b(40,-66,0))}buildMag(){const t=this.kit.has("mag"),e=t?1.28:1;this.magCenter.set(118+(e-1)*40,-95-(e-1)*70,0);const n=new It,s=new Br;s.moveTo(84,-26),s.lineTo(124,-26),s.quadraticCurveTo(128,-26-64*e,124+42*e,-26-120*e),s.lineTo(88+42*e,-26-140*e),s.quadraticCurveTo(92,-26-74*e,84,-26),n.add(pe(s,20,4,F.gunDark));const r=lt(-21,21,-6,6,-12,12,4,t?F.orange:F.gunmetal);return r.position.set(106+42*e,-26-132*e,0),r.rotation.z=.5,n.add(r),this.wrapMag(n)}kitPart(t){switch(t){case"optic":return{add:Wr(40,26,76)};case"rail":{const e=Ba(pe(Me([[150,-28],[268,-24],[268,26],[150,26]],7),36,6,ce.black),xm(158,262,26,7),_m(206,234,-24,-96),Ja(240,266,-46,-28));for(let n=162;n<258;n+=14)e.add(lt(n,n+6,-10,10,17.4,19.4,2,F.groove,2));return{add:e,hide:this.woodGuards}}case"suppressor":return{add:Su(394,140,17),muzzle:538,blast:Mm};case"stock":return{add:Cl(4,10),hide:this.woodStock}}return null}setAction(t){this.carrier.position.x=-t*42}setTrigger(t){this.trig.rotation.z=-.3*t}setCatch(t){this.catchLever.position.x=114-t*4}}class vb extends Gr{constructor(){super(),this.spec={cycle:{delay:0,back:.012,hold:0,fwd:.012,ejectAt:.008,lockOnEmpty:!1},recoil:{kick:[.5,.8],push:[.6,.9],roll:.5,squash:.25},pose:{tilt:.06,yaw:.1,roll:.3,lift:.55},reload:"mag",magOut:30,magIn:40,dropSize:.5,casing:"rifle-long",eject:{side:[1.2,2.2],up:[-.5,1],back:[.5,1.5],smoke:0},blast:{scale:.85,smoke:1,rings:1,bubble:!1},pellet:.9,impact:.35,rack:0,vibrate:.012,ammo:"rifle-long"},this.magAxis.set(0,-1,0),this.magCenter.set(60,-110,0),this.spinV=0;const t=this.model;this.rotor=new It;for(let n=0;n<6;n++){const s=n/6*Math.PI*2,r=Math.cos(s)*18,a=Math.sin(s)*18;this.rotor.add(kt(150,470,6.5,F.gunmetal,r,a,14)),this.rotor.add(kt(469.4,470.6,3.5,F.dark,r,a,10))}this.rotor.add(kt(150,460,5,F.gunDark)),this.rotor.add(kt(250,262,28,F.gunDark,0,0,6)),this.rotor.add(kt(436,448,29,F.gunDark,0,0,6));for(let n=0;n<3;n++){const s=n/3*Math.PI*2+.5;this.rotor.add(kt(447,452,4,F.gunmetal,Math.cos(s)*21,Math.sin(s)*21,10))}t.add(this.rotor),t.add(kt(20,150,40,F.gunmetal,0,0,28)),t.add(kt(148,162,34,F.gunDark,0,0,28)),t.add(kt(6,22,36,F.gunDark,0,0,28));for(const n of[46,96])t.add(kt(n,n+6,41.5,F.gunDark,0,0,28));t.add(lt(60,90,-10,10,37,42.5,3,F.yellow)),t.add(kt(40,130,17,F.gunDark,52));for(let n=0;n<5;n++)t.add(kt(50+n*16,56+n*16,19.5,F.gunmetal,52));t.add(lt(40,47,40,80,-4,4,3,F.gunDark)),t.add(lt(117,124,40,80,-4,4,3,F.gunDark)),t.add(lt(34,130,76,89,-6,6,6,F.rubber)),t.add(lt(-16,6,-40,40,-26,26,6,F.gunDark)),t.add(lt(-60,-14,22,34,-6,6,6,F.gunDark)),t.add(lt(-60,-14,-40,-28,-6,6,6,F.gunDark)),t.add(lt(-74,-56,-46,40,-9,9,9,F.rubber)),this.thumb=lt(-58,-46,20,30,5,12,3,F.orange),t.add(this.thumb);const e=new Xp([new b(70,-64,18),new b(84,-56,34),new b(98,-44,34),new b(104,-32,22)]);t.add(di(new ct(new fu(e,16,9,12,!1),F.gunDark))),this.muzzleAnchor.position.set(473,0,0),this.portAnchor.position.set(90,-40,30),this.finish(new b(-60,-6,0))}buildMag(){const t=this.kit.has("box")?40:0;this.magCenter.set(60,-110-t/2,0);const e=new It;return e.add(lt(-4,124,-160-t,-62,-34,34,10,F.olive)),e.add(lt(-8,128,-70,-56,-36,36,6,F.oliveDark)),e.add(lt(-4.6,124.6,-122,-110,-34.6,34.6,2,F.yellow)),t&&e.add(lt(-4.6,124.6,-170,-158,-34.6,34.6,2,F.orange)),e.add(lt(50,70,-100,-84,33,37.5,2,F.oliveDark)),this.wrapMag(e)}kitPart(t){switch(t){case"optic":return{add:Wr(48,89,70)};case"laser":return{add:Ja(110,152,-60,-40)};case"shield":return{add:Ba(lt(168,186,-66,104,-48,48,8,F.oliveDark),lt(166,188,80,92,-48.6,48.6,3,F.orange))};case"brake":return{add:kt(452,486,30,ce.black,0,0,6),parent:this.rotor,muzzle:488}}return null}setTrigger(t){this.thumb.position.z=8.5-t*2.5}spin(t,e){const n=e?42:0;this.spinV+=(n-this.spinV)*(1-Math.exp(-t*(e?7:1.1))),this.rotor.rotation.x+=this.spinV*t}get spinning(){return this.spinV/42}}const Tu={glock19:cb,revolver:db,uzi:pb,m870:mb,ak47:gb,minigun:vb},es=(i,t)=>i+Math.random()*(t-i),Af=([i,t])=>es(i,t),bm=i=>Math.min(1,Math.max(0,i)),Cf=i=>1-Math.pow(1-i,3),Rf=i=>i*i*i,Pf=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ca=(i,t,e)=>bm((i-t)/(e-t)),xb=new b,_b=new b,yb=new b,Mb=new b;class Sm{constructor(t,e,n,s,r={}){this.scene=t,this.fx=e,this.fxTier=0,this.hooks=r,this.m=new Tu[n],this.spec=this.m.spec,t.add(this.m.root),this.magSize=s,this.ammo=s,this.state="ready",this.reloadDur=1.8,this.minInterval=.3,this.cycle=null,this.trigger=0,this.pendingEject=-1,this.lockTimer=0,this.firing=0,this.rec={a:0,av:0,y:0,yv:0,b:0,bv:0,r:0,rv:0,s:0,sv:0},this.time=Math.random()*10,this.settle=1,this.reload=null,this.muzzleGetter=a=>this.m.muzzleWorld(a)}get canFire(){return this.state==="ready"&&this.ammo>0}get reloadProgress(){return this.reload?bm(this.reload.t/this.reloadDur):0}fire(t=null){this.pendingEject>=0&&this._eject(),this.ammo--,this.m.root.updateMatrixWorld(!0);const e=this.m.muzzleWorld(new b),n=this.m.boreDir(new b),s=this.m.upDir(new b),r=this.spec;this.fx.muzzleBlast(e,n,s,this.muzzleGetter,this.m.blast??r.blast,this.fxTier);const a=r.cycle,o=a.delay+a.back+a.hold+a.fwd,l=Math.min(1,this.minInterval*.9/o),c=this.ammo===0;this.cycle={t:0,k:l,locked:c&&a.lockOnEmpty},this.pendingEject=r.casing?(a.delay+a.ejectAt)*l:-1,this.trigger=1,this.firing=.2;const h=r.recoil;let u=t==null?void 0:t.x,d=t==null?void 0:t.y;if(t==null){const g=Math.random()*Math.PI*2,v=Math.sqrt(Math.random());u=Math.cos(g)*v,d=Math.sin(g)*v}const f=Af(h.kick);return this.rec.av+=f*(.25+.75*We.clamp(d,-1,1)),this.rec.yv-=f*.75*We.clamp(u,-1,1),this.rec.bv+=Af(h.push),this.rec.rv+=es(-h.roll,h.roll),this.rec.sv+=(h.squash??1)*9,c&&(this.state="locked",this.lockTimer=Math.max(.22,o*l+.05)),{pos:e,dir:n}}_eject(){if(this.pendingEject=-1,!this.spec.casing)return;const t=this.m;t.root.updateMatrixWorld(!0),this.fx.ejectCasing(t.portWorld(xb),t.boreDir(_b),t.sideDir(yb),t.upDir(Mb),this.spec.casing,this.spec.eject)}reset(){var t,e;this.cycle=null,this.reload=null,this.pendingEject=-1,this.state="ready",this.ammo=this.magSize,this.m.setAction(0),this.m.setHold(0),this.m.setCatch(0),this.m.setLoading(-1),(e=(t=this.m).reloadPhase)==null||e.call(t,-1)}startReload(){var t,e;this.state!=="reload"&&(this.state="reload",this.reload={t:0,ejected:!1,incoming:null,seated:!1,released:!1,need:-1,done:0,racked:!1},(e=(t=this.hooks).onReloadStart)==null||e.call(t))}_freeMag(){const t=this.m;let e=t.mags.find(n=>n.userData.free);return e||(e=t.buildMag(),e.traverse(n=>n.isMesh&&!n.material.transparent&&(n.castShadow=!0)),t.mags.push(e)),e.userData.free=!1,e}_ejectMag(){const t=this.m,e=t.mag;e.userData.setLoaded(!1),this.scene.attach(e);const n=t.model.getWorldQuaternion(new hs),s=t.magAxis.clone().applyQuaternion(n).multiplyScalar(4.5).add(new b(es(-.4,.4),0,es(.4,1.2))),r=new b(es(-3,3),es(-2,2),es(-5,5));this.fx.drop(e,s,r,this.spec.dropSize,()=>{var a;if(!t.mags.includes(e)){(a=e.parent)==null||a.remove(e);return}t.magSlot.add(e),e.quaternion.identity(),t.setMagOut(e,0),e.scale.setScalar(1),e.visible=!1,e.userData.free=!0})}_rack(){const t=this.spec.cycle;t.lockOnEmpty?(this.m.setHold(0),this.cycle={t:t.delay+t.back+t.hold,k:1,locked:!1}):this.spec.rack>0&&(this.cycle={t:0,k:this.spec.rack,locked:!1}),this.rec.av+=2.2,this.rec.rv+=es(-1,1)}_updateMagReload(t){var r,a;const e=this.reload,n=this.m,s=this.spec;if(n.setCatch(t>.07&&t<.3?1:0),e.ejected||(n.setMagOut(n.mag,Rf(ca(t,.1,.27))*s.magOut),t>=.27&&(e.ejected=!0,this._ejectMag())),t>=.3&&!e.incoming&&(e.incoming=this._freeMag(),e.incoming.userData.setLoaded(!0),n.magSlot.add(e.incoming),e.incoming.visible=!0),e.incoming&&!e.seated){const o=Cf(ca(t,.32,.6));n.setMagOut(e.incoming,(1-o)*s.magIn,1-o),t>=.6&&(e.seated=!0,n.setMagOut(e.incoming,0),n.mag=e.incoming,this.ammo=this.magSize,this.rec.av-=3.5,(a=(r=this.hooks).onMagIn)==null||a.call(r))}!e.released&&t>=.72&&(e.released=!0,this._rack())}_updateTubeReload(t){var s,r;const e=this.reload;e.need<0&&(e.need=this.magSize-this.ammo,e.wasEmpty=this.ammo===0);const n=.68/Math.max(1,e.need);for(;e.done<e.need&&t>=.12+n*(e.done+1);)e.done++,this.ammo++,this.rec.av-=.9,(r=(s=this.hooks).onMagIn)==null||r.call(s);this.m.setLoading(e.done<e.need?ca(t,.12+n*e.done,.12+n*(e.done+1)):-1),!e.racked&&t>=.83&&(e.racked=!0,e.wasEmpty&&this._rack())}_updateReload(t){var s,r,a,o,l,c;const e=this.reload;e.t+=t;const n=e.t/this.reloadDur;this.spec.reload==="tube"?this._updateTubeReload(n):this._updateMagReload(n),(r=(s=this.m).reloadPhase)==null||r.call(s,Math.min(1,n)),n>=1&&(this.m.setLoading(-1),(o=(a=this.m).reloadPhase)==null||o.call(a,-1),this.reload=null,this.state="ready",(c=(l=this.hooks).onReloadEnd)==null||c.call(l))}_reloadPose(){if(!this.reload)return 0;const t=this.reload.t/this.reloadDur;return Pf(ca(t,0,.14))*(1-Pf(ca(t,.8,1)))}update(t,e){this.time+=t,this.settle=e;const n=this.m,s=this.spec;if(this.cycle){const f=this.cycle,g=s.cycle;f.t+=t/f.k;const v=f.t-g.delay;let m;if(v<0)m=0;else if(v<g.back)m=Cf(v/g.back);else if(f.locked||v<g.back+g.hold)m=1;else{const p=(v-g.back-g.hold)/g.fwd;m=p>=1?0:p<.8?1-Rf(p/.8):Math.sin((p-.8)/.2*Math.PI)*.04,p>=1&&(this.cycle=null)}n.setAction(m),f.locked&&v>=g.back&&n.setHold(1)}this.pendingEject>=0&&(this.pendingEject-=t,this.pendingEject<0&&this._eject()),this.trigger=Math.max(0,this.trigger-t*9),n.setTrigger(this.trigger),this.firing=Math.max(0,this.firing-t),n.spin(t,this.firing>0),this.state==="locked"&&(this.lockTimer-=t,this.lockTimer<=0&&this.startReload()),this.reload&&this._updateReload(t);const r=this.rec;r.av+=(-170*r.a-15*r.av)*t,r.a+=r.av*t,r.yv+=(-150*r.y-15*r.yv)*t,r.y+=r.yv*t,r.bv+=(-260*r.b-24*r.bv)*t,r.b+=r.bv*t,r.rv+=(-120*r.r-12*r.rv)*t,r.r+=r.rv*t,r.sv+=(-320*r.s-16*r.sv)*t,r.s+=r.sv*t;const a=this.time,o=(1-e)*.045,l=s.vibrate?s.vibrate*(n.spinning??0):0,c=this._reloadPose(),h=s.pose,u=n.pivot;u.rotation.z=r.a+Math.sin(a*1.7)*.008+Math.sin(a*11.3)*o+c*h.tilt+(Math.random()-.5)*l,u.rotation.y=r.y+Math.sin(a*9.1+1)*o*.6+c*h.yaw,u.rotation.x=r.r*.3+Math.sin(a*1.1)*.01-c*h.roll+(Math.random()-.5)*l,u.position.x=-r.b,u.position.y=Math.sin(a*1.7+.5)*.02+c*h.lift;const d=We.clamp(r.s,-1,1);u.scale.set(1-d*.07,1+d*.05,1+d*.03)}}const bb=new b(1,0,0),Lf=new b,Sb=(()=>{const i=new sn(1,0,1,64,12,!0);return i.translate(0,.5,0),i.rotateZ(-Math.PI/2),i})(),Mc=Nn.map(i=>new xt(i.color));function wb(){return new Ue({transparent:!0,depthWrite:!1,side:En,blending:ti,uniforms:{uColor:{value:new xt},uAlpha:{value:0},uPulse:{value:0},uTime:{value:0},uFill:{value:0}},vertexShader:`
      varying float vU;
      varying float vAng;
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vU = position.x;
        vAng = uv.x * 37.699; // six streaks around the cone
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vU;
      varying float vAng;
      varying vec3 vN;
      varying vec3 vV;
      uniform vec3 uColor;
      uniform float uAlpha, uPulse, uTime, uFill;
      void main() {
        vec3 n = normalize(vN);
        if (!gl_FrontFacing) n = -n;
        float facing = clamp(abs(dot(n, normalize(vV))), 0.0, 1.0);
        float rim = pow(1.0 - facing, 2.2);                      // bright silhouette edges
        float u = clamp(vU, 0.0, 1.0);
        float grow = smoothstep(0.0, 0.1, u);                    // grows out of the muzzle
        float along = grow * (1.0 - smoothstep(0.36, 1.0, u));  // holds then fades well downrange
        float flow = 0.8 + 0.2 * sin(u * 30.0 - uTime * 10.0);   // ripples running to the target
        float streak = 0.85 + 0.15 * sin(vAng + uTime * 1.5);    // slow twist so it never looks static
        // auto-fire charge fills the cone from the muzzle; the front reaches the visible end when full
        float front = uFill * 0.85;
        float filled = 1.0 - smoothstep(front - 0.02, front + 0.02, u);
        float x = (u - front) * 24.0;
        float edge = exp(-x * x) * step(0.01, uFill) * (1.0 - step(0.999, uFill));
        float body = (0.16 + 0.95 * rim) * along * flow * streak;
        float a = body * (0.3 + 0.7 * filled) + edge * grow * (0.45 + 0.8 * rim) * (1.0 - 0.6 * u);
        a *= uAlpha * (1.0 + 0.5 * uPulse);
        vec3 col = mix(uColor, vec3(1.0), clamp(0.3 * rim + 0.45 * uPulse + 0.5 * edge, 0.0, 1.0));
        gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
      }`})}class wm{constructor(t){this.mat=wb(),this.mesh=new ct(Sb,this.mat),this.mesh.renderOrder=6,t.add(this.mesh),this.alpha=0,this.pulse=0,this.time=Math.random()*10,this.mat.uniforms.uColor.value.copy(Mc[0])}kick(){this.pulse=1}update(t,e,n,s,r,a,o,l=0){this.time+=t,this.alpha+=((o?1:0)-this.alpha)*Math.min(1,t*8),this.pulse=Math.max(0,this.pulse-t*6);const c=this.mat.uniforms;if(c.uColor.value.lerp(Mc[Math.min(l,Mc.length-1)],Math.min(1,t*10)),c.uAlpha.value=this.alpha*.14,c.uPulse.value=this.pulse,c.uTime.value=this.time,c.uFill.value=a,this.mesh.visible=this.alpha>.01,!this.mesh.visible)return;const h=Lf.subVectors(n,e).length();this.mesh.position.copy(e),this.mesh.quaternion.setFromUnitVectors(bb,Lf.divideScalar(h||1));const u=.88,d=Math.max(.03,s*u);this.mesh.scale.set(h*u,d,d)}}function Au(i=3.2){return new Ue({transparent:!0,depthWrite:!1,uniforms:{uR:{value:.5},uThr:{value:.5},uT:{value:.05},uK:{value:1},uHalf:{value:i},uColor:{value:new xt("#5fd16a")},uPulse:{value:0},uTime:{value:0},uFill:{value:0},uSticks:{value:0},uLeft:{value:0},uReloading:{value:0},uShowThr:{value:0},uAmmo:{value:null}},vertexShader:`
      varying vec2 vP;
      uniform float uHalf;
      void main() {
        vP = (uv * 2.0 - 1.0) * uHalf;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec2 vP;
      uniform float uR, uThr, uT, uK, uPulse, uTime, uFill, uSticks, uLeft, uShowThr;
      uniform vec3 uColor;
      uniform sampler2D uAmmo;
      uniform float uReloading;
      float band(float d, float w) { return 1.0 - smoothstep(w * 0.5, w * 0.5 + 0.012 * uK, d); }
      // premultiplied "over"
      void over(inout vec4 acc, vec3 c, float a) {
        a = clamp(a, 0.0, 1.0);
        acc.rgb = c * a + acc.rgb * (1.0 - a);
        acc.a = a + acc.a * (1.0 - a);
      }
      void main() {
        float d = length(vP);
        float ang = atan(vP.y, vP.x + 1e-5); // offset: atan(0, 0) is NaN on some GPUs
        float a01 = fract(0.25 - ang / 6.2831853); // 0 at 12 o'clock, growing clockwise
        vec3 ink = vec3(0.03, 0.05, 0.13);
        vec4 acc = vec4(0.0);
        float t = uT * uK;
        vec3 col = mix(uColor, vec3(1.0), uPulse * 0.5);
        float ringR = max(0.52 * uK, uR + 0.23 * uK);
        float ringD = abs(d - ringR);
        float ringAA = max(fwidth(d), 0.004 * uK);
        float ringW = 0.030 * uK;
        over(acc, ink, (1.0 - smoothstep(ringW + 0.025 * uK, ringW + 0.025 * uK + ringAA, ringD)) * 0.9);
        float ring = 1.0 - smoothstep(ringW, ringW + ringAA, ringD);
        over(acc, vec3(0.40, 0.48, 0.58), ring * 0.48);
        float filled = (1.0 - step(clamp(uFill, 0.0, 1.0), a01)) * step(0.001, uFill);
        vec3 chargeColor = mix(vec3(1.0, 0.74, 0.20), col, step(0.999, uFill));
        chargeColor = mix(chargeColor, vec3(0.35, 0.72, 1.0), uReloading);
        over(acc, chargeColor, ring * filled);

        // Four outlined brackets spread with the real shot cone. The central dot stays fixed.
        vec2 q = abs(vP);
        float gap = max(0.055 * uK, uR - 0.08 * uK);
        float arm = 0.13 * uK;
        float cross = min(max(abs(q.x - gap - arm * 0.5) - arm * 0.5, q.y - 0.024 * uK),
                          max(q.x - 0.024 * uK, abs(q.y - gap - arm * 0.5) - arm * 0.5));
        cross = min(cross, d - 0.027 * uK);
        float aa = max(fwidth(cross), 0.003 * uK);
        float outline = max(0.032 * uK, aa * 1.25);
        over(acc, ink, 1.0 - smoothstep(outline - aa, outline + aa, cross));
        over(acc, vec3(1.0, 0.97, 0.88), 1.0 - smoothstep(-aa, aa, cross));

        // Fixed angular slots start EXACTLY at twelve o'clock and descend clockwise on the right.
        // Small magazines use less of the arc; no magazine stretches around the entire reticle.
        if (uSticks > 0.5) {
          float angle = atan(vP.x, vP.y + 1e-5);
          float pitch = 0.12;
          float idx = floor(angle / pitch + 0.5);
          if (idx >= 0.0 && idx < uSticks) {
            float ca = idx * pitch;
            vec2 radial = vec2(sin(ca), cos(ca));
            vec2 tangent = vec2(cos(ca), -sin(ca));
            float radius = ringR + 0.27 * uK;
            float len = 0.32 * uK;
            float width = min(0.19 * uK, radius * pitch * 0.88);
            vec2 uv = vec2(dot(vP, tangent) / width + 0.5,
                           (dot(vP, radial) - radius) / len + 0.5);
            if (uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0) {
              vec4 cartridge = texture2D(uAmmo, uv);
              // Offscreen model portraits contain premultiplied antialiasing edges.
              cartridge.rgb /= max(cartridge.a, 0.003);
              // Spend from 12 o'clock downwards; reload refills in the same direction.
              float loaded = mix(step(uSticks - uLeft - 0.5, idx), 1.0 - step(uLeft, idx), uReloading);
              vec3 rgb = mix(vec3(0.12, 0.16, 0.23), cartridge.rgb, loaded);
              over(acc, rgb, cartridge.a * mix(0.32, 1.0, loaded));
            }
          }
        }
        if (acc.a < 0.01) discard;
        gl_FragColor = vec4(acc.rgb / acc.a, acc.a);
      }`})}const Ii={duck:{name:"Резиновая утка",hp:30,reward:3,speed:1.5,tags:["weak","small"]},teddy:{name:"Плюшевый мишка",hp:110,reward:10,speed:1.1,tags:["big","weak"]},duckling:{name:"Утёнок",hp:12,reward:1.2,speed:2.1,group:4,tags:["flock","small","fast"]},box:{name:"Коробка со щитом",hp:70,reward:8,speed:1.35,filling:"duckling",fill:2,tags:["shield","weak"]},candy:{name:"Конфета",hp:6,reward:.6,speed:2.4,tags:["small"]},popper:{name:"Хлопушка",hp:20,reward:6,speed:1.4,tags:["boom"]},bigteddy:{name:"Мишка-великан",hp:110*22,reward:0,speed:.5,tags:["big","weak"]},pinata:{name:"Пиньята-гигант",hp:1,reward:0,speed:0,tags:["big","weak"]}},Uo={every:16,gap:.5,first:2.5},Jo={chance:.07,radius:2.6,damage:1.2},No={step:.05,max:1,show:3},ns={need:60,seconds:10,bloom:.4},Eb={rare:{reward:3,label:"редкий"},golden:{reward:10,label:"золотой"}},zs={step:.04,starEvery:5,starMul:1.2,cost:12,costLine:1.7,growth:1.17,catalogMul:1.3},Em={hp:1.85,reward:1.9},bc={share:.1,sorted:.2,partsEvery:5},is={every:480,burst:25,flow:3,crate:1,parts:5},_r={minutes:[3,5],crate:.75,pause:30},Ps={rare:.02,golden:.003,refFlow:8,set1:{rare:3},set2:{rare:8,golden:1},parts:10},pl={share:.5,step:.12,reach:5.5,shield:.25},Tb=[8,20,50,120],Ab=4,Jt={id:1,name:"Склад игрушек",next:"Бешеная кухня",lines:[{name:"Резиновые утки",short:"Утки",junk:"duck",flow:18},{name:"Плюшевые мишки",short:"Мишки",junk:"teddy",flow:10},{name:"Стая утят",short:"Утята",junk:"duckling",flow:40},{name:"Коробки со щитом",short:"Коробки",junk:"box",flow:12,rule:"ricochet"}],gates:[{at:3,kind:"line",line:1},{at:6,kind:"machine",id:"sorter"},{at:7,kind:"line",line:2},{at:11,kind:"mini"},{at:13,kind:"line",line:3},{at:16,kind:"machine",id:"magnet"},{at:18,kind:"rush"},{at:20,kind:"boss"}],machines:{sorter:{name:"Сортировщик",text:"пресс платит 20% и даёт детали",icon:"⚙️"},magnet:{name:"Монетный магнит",text:"+12% ко всем наградам",icon:"🧲",income:1.12}},mini:{junk:"bigteddy",line:1,crate:1},rush:{name:"Распродажа",flow:1.6},boss:{name:"Пиньята-гигант",junk:"pinata",line:0,seconds:35,crate:3,loot:"m870",candies:6},story:{golden:210}},Tm={ricochet:{name:"Рикошет",icon:"↩️",text:i=>`${Math.round(Am(i)*100)}% урона отскакивает в соседа; щиток отражает весь`}},Am=i=>pl.share+pl.step*i,Cu=i=>Math.floor((i||0)/zs.starEvery);function Df(i=0,t=0){return(1+zs.step*i)*Math.pow(zs.starMul,Cu(i))*Math.pow(zs.catalogMul,t)}function Cb(i,t=0,e=1){return Math.round(zs.cost*e*Math.pow(zs.costLine,i)*Math.pow(zs.growth,t))}const Rb=i=>Math.pow(Em.hp,i),Pb=i=>Math.pow(Em.reward,i);function If(i,t){return Ps[t]*Math.min(1,Ps.refFlow/i)}const Lb=i=>i>=Ab?null:Tb[i],Db=i=>i.reduce((t,e)=>t+Cu(e),0),Ib=new Hr(1,22,16),Ru=new wl(1,1,18),ml=new sn(1,1,1,18),Sc=new Map;function Ub(i,t,e,n){const s=`${i}|${t}|${e}|${n}`;return Sc.has(s)||Sc.set(s,new nn(i,t,e,3,n)),Sc.get(s)}const wc=new Map;function vi(i,t="lacquer"){const e=`${t}|${i}`;if(!wc.has(e)){let n;t==="gold"?n=Et(i,{spec:.75,gloss:22,sheen:.12,rim:.4,emissive:"#5a3a00",emissiveIntensity:.55}):t==="steel"?n=Xe(i,{spec:.32}):t==="toy"?n=Et(i,{spec:.08,gloss:10,rim:.06}):n=Ee(i,{spec:.22,gloss:16,rim:.1}),wc.set(e,n)}return wc.get(e)}function re(i,t,e,n,s,r,a=r,o=r,l,c=!0){const h=new ct(Ib,vi(t,l));return h.position.set(e,n,s),h.scale.set(r,a,o),h.castShadow=c,i.add(h),h}function Ls(i,t,e,n,s,r,a,o,l,c){const h=new ct(Ub(e,n,s,r),vi(t,c));return h.position.set(a,o,l),h.castShadow=!0,i.add(h),h}const Ur="#ffcf3a",gl="#1b1d23";function Nb(i,t,e,n,s=.085){for(const r of[1,-1])re(i,"#fffaf0",t,e,n*r,s,s,s*.8,"toy",!1),re(i,gl,t-s*.65,e+s*.1,n*r*1.08,s*.58,s*.58,s*.45,"toy",!1)}function Uf(i,t,e=!1){const n=t==="golden",s=n?Ur:t==="rare"?"#7fd6ff":e?"#ffe066":"#ffd23f",r=n?"#f0b51f":t==="rare"?"#5cb8e8":e?"#ffd23f":"#f2b52a",a=n?"gold":"lacquer";re(i,s,.05,.45,0,.62,.45,.5,a),re(i,s,.55,.64,0,.2,.15,.17,a).rotation.z=-.6,re(i,s,-.33,.95,0,.34,.33,.32,a),re(i,n?"#ffb020":"#ff8a1f",-.66,.9,0,.21,.08,.16,a),re(i,n?"#e89a10":"#f2741a",-.62,.83,0,.16,.06,.13,a),Nb(i,-.46,1.05,.2);for(const o of[1,-1])re(i,r,.1,.52,.44*o,.32,.2,.09,a);if(t==="rare"&&!e){const o=new ct(ml,vi("#f6f0e4","toy"));o.scale.set(.24,.12,.24),o.position.set(-.3,1.27,0),o.castShadow=!0,i.add(o);const l=new ct(ml,vi("#2f4569","toy"));l.scale.set(.25,.05,.25),l.position.set(-.3,1.22,0),i.add(l)}return{spheres:e?[{c:new b(-.1,.55,0),r:.62}]:[{c:new b(.05,.45,0),r:.6},{c:new b(-.35,.95,0),r:.36,weak:!0}],colors:[s,r,"#ff8a1f","#fffaf0"],height:1.35}}function Nf(i,t,e=!1){const n=t==="golden",s=n?Ur:t==="rare"?"#f29bc0":"#b4703a",r=n?"#ffe08a":t==="rare"?"#ffd6e6":"#f0c793",a=n?"gold":"toy";re(i,s,0,.72,0,.58,.66,.5,a),re(i,r,0,.66,.3,.38,.42,.22,a),re(i,s,0,1.52,0,.46,.42,.42,a),re(i,r,0,1.44,.34,.2,.15,.13,a),re(i,"#3b2416",0,1.5,.46,.08,.06,.05,"lacquer");for(const o of[1,-1])re(i,gl,.16*o,1.62,.36,.06,.07,.05,"lacquer",!1),re(i,s,.34*o,1.86,0,.17,.17,.1,a),re(i,r,.34*o,1.86,.06,.1,.1,.06,a,!1),re(i,s,.56*o,.86,.1,.18,.3,.18,a).rotation.z=.5*o,re(i,s,.28*o,.2,.18,.22,.2,.28,a);if(t==="rare"||e){const o=e?"#e8384d":"#ff4f8b";for(const l of[1,-1])re(i,o,.15*l,1.14,.36,.14,.1,.07,"lacquer");re(i,o,0,1.14,.4,.07,.07,.06,"lacquer")}if(e){for(const o of[1,-1]){const l=Ls(i,gl,.2,.05,.05,.02,.15*o,1.73,.38,"toy");l.rotation.z=-.35*o}re(i,"#7fd6ff",-.28,.95,.38,.14,.14,.05,"toy")}return{spheres:[{c:new b(0,.72,0),r:.66},{c:new b(0,1.52,.05),r:.46,weak:!0}],colors:[s,r,"#fffaf0","#fffaf0"],height:2.1}}function Fb(i,t){const e=t==="golden",n=e?Ur:t==="rare"?"#9b6bd6":"#c98f52",s=e?"#ffe08a":t==="rare"?"#b48ae6":"#d9a467",r=t==="rare"?"#ffd23f":"#ead6a8",a=e?"gold":"toy";Ls(i,n,1.05,.9,.95,.08,0,.47,0,a);for(const o of[1,-1]){const l=Ls(i,s,.5,.06,.9,.03,.27*o,.95,0,a);l.rotation.z=-.35*o}Ls(i,r,1.07,.92,.18,.04,0,.47,0,"toy");for(const o of[1,-1])re(i,"#ff4f5e",.14*o,1.03,0,.15,.1,.08,"lacquer");re(i,"#ff4f5e",0,1,0,.07,.07,.07,"lacquer"),Ls(i,"#58698c",.1,.92,1.05,.04,-.62,.55,0,"steel");for(const o of[.13,.97])Ls(i,"#f08a20",.12,.07,1.07,.03,-.63,o,0,"lacquer");for(const o of[.35,-.35])re(i,"#8a9ab8",-.68,.55,o,.05,.05,.03,"steel",!1);return{spheres:[{c:new b(-.62,.55,0),r:.55,shield:!0},{c:new b(0,.47,0),r:.62},{c:new b(0,1.02,0),r:.22,weak:!0}],colors:[n,s,r,"#58698c"],height:1.25}}const Ff=["#ff5a8a","#44c4ff","#ffd23f","#7be36b","#c783ff"];function kb(i){const t=Ff[Math.floor(Math.random()*Ff.length)];re(i,t,0,.22,0,.24,.2,.2,"lacquer");for(const e of[1,-1]){const n=new ct(Ru,vi(t,"lacquer"));n.scale.set(.13,.22,.13),n.position.set(.3*e,.22,0),n.rotation.z=Math.PI/2*e,i.add(n)}return re(i,"#ffffff",-.06,.32,.12,.06,.04,.03,"toy",!1),{spheres:[{c:new b(0,.22,0),r:.32}],colors:[t,"#ffffff",t],height:.5}}function Ob(i){const t=new ct(ml,vi("#ff4f5e","lacquer"));t.scale.set(.3,.72,.3),t.position.y=.4,t.castShadow=!0,i.add(t);for(const n of[.2,.42,.64]){const s=new ct(ml,vi("#fff4dc","lacquer"));s.scale.set(.31,.07,.31),s.position.y=n,i.add(s)}const e=new ct(Ru,vi(Ur,"gold"));return e.scale.set(.34,.3,.34),e.position.y=.91,e.castShadow=!0,i.add(e),["#44c4ff","#7be36b","#c783ff","#ffd23f"].forEach((n,s)=>{const r=s/4*Math.PI*2;Ls(i,n,.05,.36,.1,.02,Math.cos(r)*.1,1.15,Math.sin(r)*.1,"lacquer").rotation.set(Math.sin(r)*.6,0,-Math.cos(r)*.6)}),{spheres:[{c:new b(0,.5,0),r:.45}],colors:["#ff4f5e","#fff4dc",Ur,"#44c4ff","#7be36b"],height:1.3}}const Ec=["#ffd23f","#44c4ff","#ff8a1f","#7be36b","#c783ff"];function zb(i){re(i,"#ff6fae",0,0,0,.95,.95,.85,"toy"),Ec.forEach((t,e)=>{const n=new ct(new qa(.9-e*.02,.07,10,40),vi(t,"toy"));n.rotation.set(Math.PI/2,0,0),n.position.y=-.52+e*.26,n.scale.setScalar(Math.sqrt(Math.max(.05,1-Math.pow((-.52+e*.26)/.95,2)))),i.add(n)});for(let t=0;t<5;t++){const e=Math.PI/2+t*Math.PI*2/5,n=new ct(Ru,vi(Ec[t],"toy"));n.scale.set(.34,.85,.3),n.position.set(Math.cos(e)*1.15,Math.sin(e)*1.15,0),n.rotation.z=e-Math.PI/2,n.castShadow=!0,i.add(n),re(i,"#ff4f5e",Math.cos(e)*1.62,Math.sin(e)*1.62,0,.1,.1,.1,"lacquer")}for(const t of[1,-1])re(i,"#fffaf0",.3*t,.22,.74,.2,.22,.12,"toy",!1),re(i,gl,.27*t,.18,.84,.1,.11,.06,"toy",!1);return re(i,"#e8384d",0,-.2,.8,.16,.08,.06,"lacquer",!1),re(i,Ur,-.84,0,.36,.24,.24,.12,"gold").rotation.y=-1.1,{spheres:[{c:new b(-.86,0,.36),r:.36,weak:!0},{c:new b(0,0,0),r:1.25}],colors:["#ff6fae",...Ec],height:1.8}}const Bb={duck:(i,t)=>Uf(i,t),duckling:(i,t)=>Uf(i,t,!0),teddy:(i,t)=>Nf(i,t),bigteddy:(i,t)=>Nf(i,t,!0),box:(i,t)=>Fb(i,t),candy:i=>kb(i),popper:i=>Ob(i),pinata:i=>zb(i)},kf={duck:1,duckling:.5,teddy:1,bigteddy:2.1,box:1,candy:1,popper:1,pinata:1.25},Hb={duck:.35,duckling:.35,teddy:-.55,bigteddy:-.55,box:.15,candy:0,popper:0,pinata:.25},Vb=new b;class Gb{constructor(t,e=null){this.kind=t,this.variant=e,this.def=Ii[t],this.root=new It,this.body=new It,this.root.add(this.body);const n=kf[t]??1,s=Bb[t](this.body,e);this.body.scale.setScalar(n),this.body.rotation.y=Hb[t]??0,this.spheres=s.spheres.map(r=>({...r,c:r.c.clone().applyAxisAngle(Vb.set(0,1,0),this.body.rotation.y).multiplyScalar(n),r:r.r*n})),this.colors=s.colors,this.height=s.height*n,this.radius=Math.max(...this.spheres.map(r=>Math.hypot(r.c.x,r.c.z)+r.r))*.8,this.hp=this.maxHp=1,this.alive=!1,this.gen=0,this.t=Math.random()*10,this.punch=0,this.punchV=0,this.pop=1,this.x=0,this.z=0,this.speed=this.def.speed,this.state="ride"}sphereWorld(t,e){return e.copy(this.spheres[t].c).applyMatrix4(this.root.matrixWorld)}aimPoint(t){const e=this.spheres.findIndex(n=>n.weak);return this.sphereWorld(e>=0?e:this.spheres.length-1,t)}hit(t=1){this.punchV+=5*t}update(t){this.t+=t,this.pop=Math.min(1,this.pop+t/.3),this.punchV+=(-300*this.punch-18*this.punchV)*t,this.punch+=this.punchV*t;const e=We.clamp(this.punch*.06,-.12,.16),n=this.body,s=this.t,r=(kf[this.kind]??1)*(this.pop<1?1+2.7*Math.pow(this.pop-1,3)+1.7*Math.pow(this.pop-1,2):1);switch(n.scale.set(r*(1+e),r*(1-e*1.3),r*(1+e)),this.kind){case"duck":n.rotation.z=Math.sin(s*3.2)*.08,n.position.y=Math.abs(Math.sin(s*6.4))*.03;break;case"duckling":n.position.y=Math.abs(Math.sin(s*11))*.09;break;case"teddy":case"bigteddy":n.rotation.z=Math.sin(s*(this.kind==="teddy"?5:2.6))*.09;break;case"box":n.rotation.z=Math.sin(s*7)*.02;break;case"candy":n.rotation.x=s*3;break;case"popper":n.rotation.z=Math.sin(s*23)*.05,n.position.y=Math.abs(Math.sin(s*9))*.04;break;case"pinata":n.rotation.z=Math.sin(s*1.3)*.12+We.clamp(this.punch*.04,-.3,.3);break}}}const Fe=.34,ye=-.9,on=1.8,ys=1.5,Of=2.55,Wb={down:.16,hold:.14,up:.32},$b=1.2,zf=1.15,Bf=12,Ca=["#e88724","#3fbf6a","#3c9bff","#a35cff","#ffc533","#ff6fd0"],Xb=i=>1+2.7*Math.pow(i-1,3)+1.7*Math.pow(i-1,2);let ha=null;function qb(){if(ha)return ha;const i=new Br;for(let t=0;t<10;t++){const e=Math.PI/2+t*Math.PI/5,n=t%2?.09:.22;t?i.lineTo(Math.cos(e)*n,Math.sin(e)*n):i.moveTo(Math.cos(e)*n,Math.sin(e)*n)}return ha=new Tl(i,{depth:.05,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2}),ha.translate(0,0,-.025),ha}const Tc=new b,Ac=new b;function Xn(i,t,e,n,s,r,a,o){const l=new ct(new nn(i,t,e,2,Math.min(n,i/2-.001,t/2-.001,e/2-.001)),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}let Cc=null;function Yb(){if(!Cc){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#323c55",e.fillRect(0,0,128,128),e.strokeStyle="#4a5878",e.lineWidth=14,e.lineCap="round",e.beginPath(),e.moveTo(84,10),e.lineTo(44,64),e.lineTo(84,118),e.stroke(),e.strokeStyle="#26304a",e.lineWidth=4,e.beginPath(),e.moveTo(92,16),e.lineTo(54,64),e.lineTo(92,112),e.stroke(),Cc=t}const i=new $p(Cc);return i.wrapS=i.wrapT=Bs,i.colorSpace=dn,i.anisotropy=4,i}const Fo={};function Hf(){return Fo.frame||Object.assign(Fo,{frame:Et("#2f4569",{spec:.1,gloss:10,rim:.06}),rail:Ee("#e88724"),roller:Xe("#8a96ae",{spec:.4}),steel:Xe("#4b5872",{spec:.3}),ram:Xe("#6c7894",{spec:.35}),piston:Xe("#c9d2e0",{spec:.6,gloss:30}),hazard:Ee("#ffc533"),dark:Et("#1b2236",{spec:.02,rim:0}),bin:Ee("#56703a"),binLid:Ee("#46602f"),lamp:Et("#ff9a3a",{emissive:"#ff6a10",emissiveIntensity:.4,rim:0}),starOff:Et("#4a5878",{spec:.1,rim:.1,transparent:!0,opacity:.75}),post:Xe("#3a4560"),rails:Ca.map(i=>Ee(i)),stripes:Ca.map(i=>Ee(i))}),Fo}class Kb{constructor(t,e,n={}){this.scene=t,this.line=e,this.hooks=n,this.group=new It,t.add(this.group),this.static=null,this.key="",this.items=[],this.pool=new Map,this.running=!1,this.waveT=Uo.first,this.pending=0,this.gapT=0,this.press={t:-1,junk:null},this.floor=0,this.beltSpeed=Ii[e.junk].speed,this.tex=Yb(),this.lampK=0,this.visible=!0,this.stars=0,this.rails=[],this.stripes=[],this.deco=null,this.starPop=null,this.starFlash=0,this.starOn=Et("#ffd23f",{emissive:"#ffb300",emissiveIntensity:1.3,spec:.5,rim:.3})}get pressX(){return fe.benchX1+.75+1.35}get beltX0(){return this.pressX+ys/2}get beltX1(){return fe.halfW+$b+.6}get visibleX(){return fe.halfW-.4}relayout(t){this.floor=t,this.group.position.set(0,t,0);const e=`${fe.benchX1.toFixed(3)}|${fe.halfW.toFixed(3)}`;e!==this.key&&(this.key=e,this.static&&(this.group.remove(this.static),this.static.traverse(n=>n.isMesh&&n.geometry.dispose())),this.static=this.build(),this.group.add(this.static),this.decorate())}build(){const t=Hf(),e=new It,n=this.beltX0,s=this.beltX1,r=s-n,a=(n+s)/2,o=zh(r+1,on+1.2,.5);o.position.set(a,.006,ye),e.add(o),e.add(Xn(r,Fe-.1,on,.06,t.frame,a,(Fe-.1)/2,ye)),this.rails=[];for(const p of[1,-1]){const _=Xn(r,.2,.14,.05,t.rail,a,Fe+.04,ye+p*(on/2+.03));this.rails.push(_),e.add(_)}this.tex.repeat.set(r*zf,1),this.beltMat??(this.beltMat=Et("#ffffff",{map:this.tex,spec:.05,rim:0}));const l=new ct(new Je(r,on-.08),this.beltMat);l.rotation.x=-Math.PI/2,l.position.set(a,Fe+.002,ye),l.receiveShadow=!0,e.add(l);const c=new sn(.17,.17,on+.1,18);c.rotateX(Math.PI/2);const h=new ct(c,t.roller);h.position.set(n+.05,Fe-.12,ye),e.add(h);const u=this.pressX;e.add(Xn(ys+.1,Fe+.04,on+.3,.06,t.steel,u,(Fe+.04)/2,ye));const d=ye-on/2-.42;e.add(Xn(.62,3.55,.62,.1,t.frame,u,3.55/2,d)),this.stripes=[];for(const p of[.5,1.1,1.7]){const _=Xn(.66,.16,.66,.04,t.hazard,u,p,d);_.castShadow=!1,this.stripes.push(_),e.add(_)}e.add(Xn(ys+.15,.5,on+.85,.12,t.frame,u,3.42,ye-.22)),e.add(Xn(ys+.25,.12,on+.95,.05,t.rail,u,3.17,ye-.22)),this.lamp=new ct(new Hr(.13,16,10),t.lamp.clone()),this.lamp.position.set(u+.45,3.74,ye+.3),e.add(this.lamp);const f=new sn(.3,.3,.32,20),g=new ct(f,t.steel);g.position.set(u,3.05,ye),e.add(g),this.piston=new ct(new sn(.17,.17,1,18),t.piston),this.piston.castShadow=!0,e.add(this.piston),this.ram=Xn(ys-.05,.26,on-.1,.06,t.ram,u,0,ye),e.add(this.ram),this.ramStripe=Xn(ys-.02,.07,on-.06,.03,t.hazard,u,0,ye),this.ramStripe.castShadow=!1,e.add(this.ramStripe),this.setRam(0);const v=fe.benchX1+.75;e.add(Xn(1.15,.7,1.5,.1,t.bin,v,.35,ye)),e.add(Xn(1.25,.12,1.6,.05,t.binLid,v,.72,ye));const m=new ct(new Je(.9,1.25),t.dark);return m.rotation.x=-Math.PI/2,m.position.set(v,.785,ye),e.add(m),this.binX=v,e}setStars(t,e=!1){this.stars=t,this.decorate(e?t-1:-1),e&&(this.starFlash=1)}starWorld(t,e){return e.set(this.starX(t),this.floor+Fe+.62,ye+on/2+.12)}starX(t){const e=this.visibleX-this.beltX0-1.6;return this.beltX0+1+t*Math.min(1.5,e/(Bf-1))}decorate(t=-1){if(!this.static)return;const e=Hf(),n=this.stars,s=Math.min(Ca.length-1,Math.floor(n/2));for(const l of this.rails)l.material=e.rails[s];for(const l of this.stripes)l.material=n>=5?e.stripes[s]:e.hazard;this.beltMat.emissive.set(n>=3?Ca[s]:"#000000"),this.beltMat.emissiveIntensity=n>=3?.06+.02*Math.min(5,n-3):0,this.lamp&&n>=5&&this.lamp.material.emissive.set(Ca[s]),this.deco&&this.group.remove(this.deco);const r=new It,a=this.postGeo??(this.postGeo=new sn(.035,.035,.36,8)),o=this.running?Math.min(Bf,n+1):0;this.starMeshes=[];for(let l=0;l<o;l++){const c=l<n,h=this.starX(l),u=new ct(a,e.post);u.position.set(h,Fe+.3,ye+on/2+.06),r.add(u);const d=new ct(qb(),c?this.starOn:e.starOff);d.position.set(h,Fe+.62,ye+on/2+.12),d.scale.setScalar(c?1:.8),d.castShadow=c,r.add(d),this.starMeshes.push(d)}this.deco=r,this.group.add(r),this.starPop=t>=0&&t<this.starMeshes.length?{mesh:this.starMeshes[t],t:0}:null,this.starPop&&this.starPop.mesh.scale.setScalar(.01)}setRam(t){const e=Fe+.13+(Of-.13)*(1-t);this.ram.position.y=e,this.ramStripe.position.y=e+.1;const n=2.9,s=e+.13;this.piston.scale.y=Math.max(.05,n-s),this.piston.position.set(this.pressX,(n+s)/2,ye)}take(t,e){const s=(this.pool.get(`${t}|${e}`)||[]).pop()??new Gb(t,e);return s.gen++,s.alive=!0,s.state="ride",s.pop=0,s.punch=s.punchV=0,s.dieT=0,s.root.visible=this.visible,s.root.scale.setScalar(1),s.body.position.set(0,0,0),s.speed=s.def.speed,this.group.add(s.root),this.items.push(s),s}release(t){t.alive=!1,t.state="gone",t.gen++,this.group.remove(t.root);const e=`${t.kind}|${t.variant}`;this.pool.has(e)||this.pool.set(e,[]),this.pool.get(e).push(t);const n=this.items.indexOf(t);n>=0&&this.items.splice(n,1)}spawn(t,e=null,n=null,s=0){var a,o;const r=this.take(t,e);return r.x=n??this.beltX1+Math.random()*.3,r.z=s,r.root.position.set(r.x,Fe,ye+r.z),r.root.rotation.set(0,0,0),r.root.updateWorldMatrix(!0,!1),(o=(a=this.hooks).onSpawn)==null||o.call(a,r),r}hang(t){const e=this.take(t,null);e.state="hang",e.x=(this.beltX0+this.visibleX)/2+1.5,e.z=0,e.root.position.set(e.x,Fe+2,ye+.3),e.root.updateWorldMatrix(!0,!1),e.rope||(e.rope=new ct(new sn(.035,.035,1,8),Ee("#c98f52")),e.root.add(e.rope));const n=4.7-(Fe+2),s=1.15;return e.rope.scale.y=Math.max(.2,n-s),e.rope.position.y=(n+s)/2,e}spawnLine(){const t=Ii[this.line.junk],e=t.group||1,n=Math.random()<Jo.chance?Math.floor(Math.random()*e):-1;for(let s=0;s<e;s++){const r=e>1?(s%2?.38:-.38)*(s%4<2?1:.4):0,a=this.beltX1+s*.55+Math.random()*.2;if(s===n){this.spawn("popper",null,a,r).speed=t.speed;continue}const o=Math.random(),l=If(this.line.flow,"golden"),c=o<l?"golden":o<l+If(this.line.flow,"rare")?"rare":null;this.spawn(this.line.junk,c,a,r)}}kill(t){t.alive=!1,t.state="dying",t.dieT=0,t.gen++,this.press.junk===t&&(this.press.junk=null)}clear(){for(const t of[...this.items])this.release(t);this.press={t:-1,junk:null},this.setRam(0)}setVisible(t){this.visible=t,this.group.visible=t}update(t,e={}){const n=e.flowMul??1;if(this.running&&e.spawn!==!1){if(this.waveT-=t,this.waveT<=0){this.waveT+=Uo.every;const a=Ii[this.line.junk];this.pending+=Math.max(1,Math.round(this.line.flow*n*Uo.every/60/(a.group||1)))}this.pending>0&&(this.gapT-=t,this.gapT<=0&&(this.gapT=Uo.gap,this.pending--,this.spawnLine()))}this.running&&(this.tex.offset.x+=this.beltSpeed*t*zf);const s=this.items.filter(a=>a.state==="ride").sort((a,o)=>a.x-o.x),r=this.pressX;for(let a=0;a<s.length;a++){const o=s[a];let l=r;this.press.t>=0&&(l=r+ys/2+o.radius);for(let c=0;c<a;c++){const h=s[c];Math.abs(h.z-o.z)<.45&&(l=Math.max(l,h.x+(h.radius+o.radius)*.95))}o.x=Math.max(l,o.x-o.speed*t),o.x<=r+.001&&this.press.t<0&&(o.state="press",o.x=r,o.z*=.3,this.press={t:0,junk:o,crushed:!1}),o.root.position.set(o.x,Fe,ye+o.z)}this.updatePress(t);for(const a of[...this.items])if(a.update(t),a.state==="dying"){a.dieT+=t;const o=a.dieT/.12;a.root.scale.setScalar(1+.3*Math.min(1,o)),o>=1&&this.release(a)}if(this.lampK=Math.max(0,this.lampK-t*3),this.lamp&&(this.lamp.material.emissiveIntensity=(this.stars>=5?1:.4)+this.lampK*3),this.starPop){const a=this.starPop;a.t+=t;const o=Math.min(1,a.t/.55);a.mesh.scale.setScalar(Math.max(.01,Xb(o)*1.15)),a.mesh.rotation.y=(1-o)*Math.PI*2,o>=1&&(a.mesh.scale.setScalar(1),a.mesh.rotation.y=0,this.starPop=null)}this.starFlash>0&&(this.starFlash=Math.max(0,this.starFlash-t*1.2),this.starOn.emissiveIntensity=1.3+this.starFlash*2.5),this.group.updateMatrixWorld(!0)}updatePress(t){var l,c;const e=this.press;if(e.t<0)return;e.t+=t;const{down:n,hold:s,up:r}=Wb,a=e.junk;let o;if(e.t<n?o=(e.t/n)**2:e.t<n+s?o=1:o=Math.max(0,1-(e.t-n-s)/r),this.setRam(o),a&&a.alive){const h=Fe+.13+(Of-.13)*(1-o),u=We.clamp((h-Fe)/Math.max(.3,a.height),.14,1);a.root.scale.set(1+(1-u)*.35,u,1+(1-u)*.35),!e.crushed&&e.t>=n&&(e.crushed=!0,this.lampK=1,(c=(l=this.hooks).onCrush)==null||c.call(l,a))}e.t>=n+s&&a&&a.state==="press"&&(a.state="binned",a.alive=!1,a.gen++,a.binT=0),e.t>=n+s+r&&(this.press={t:-1,junk:null});for(const h of[...this.items]){if(h.state!=="binned")continue;h.binT+=t;const u=Math.min(1,h.binT/.35);h.x=this.pressX+(this.binX-this.pressX)*u,h.root.position.set(h.x,Fe+.2*Math.sin(u*Math.PI)-u*u*.6,ye),u>=1&&this.release(h)}}candidates(){return this.items.filter(t=>t.alive&&(t.state==="ride"||t.state==="hang")&&t.x<this.visibleX)}raycast(t,e,n=80){let s=null;for(const r of this.items)!r.alive||r.state!=="ride"&&r.state!=="hang"||r.x>this.visibleX+.8||r.spheres.forEach((a,o)=>{r.sphereWorld(o,Ac),Tc.subVectors(Ac,t);const l=Tc.dot(e);if(l<=0)return;const c=Tc.lengthSq()-l*l;if(c>a.r*a.r)return;const h=l-Math.sqrt(a.r*a.r-c);h>0&&h<n&&(!s||h<s.t)&&(s={junk:r,sphere:a,t:h,point:t.clone().addScaledVector(e,h)})});return s}nearest(t,e,n){let s=null,r=n;for(const a of this.candidates()){if(a===e)continue;const o=a.aimPoint(Ac).distanceTo(t);o<r&&(r=o,s=a)}return s}}const jb=[6e4,18e4];function Cm(i,t=Date.now()){const e=i.evo||0;if(e>=kn.length)return{level:e,p:1,ready:!1,max:!0,current:0,required:0,wait:0,attempts:0};const n=e?kn[e-1]:0,s=kn[e]-n,r=Math.min(s,Math.max(0,(i.kills||0)-n-(i.evoKillOffset||0))),a=Math.max(0,(i.evoRetryAt||0)-t);return{level:e,p:r/s,current:r,required:s,left:s-r,ready:r>=s&&a===0&&!i.evoInFlight,max:!1,wait:a,attempts:3-(i.evoAttempts||0)}}function Zb(i,t=Date.now()){return Cm(i,t).ready?(i.evoAttempts=(i.evoAttempts||0)+1,i.evoInFlight=!0,i.evoRetryAt=0,!0):!1}function Rm(i,t=Date.now()){if(!i.evoInFlight)return!1;i.evoInFlight=!1;const e=i.evoAttempts||1;if(e<3)i.evoRetryAt=t+jb[e-1];else{const n=i.evo?kn[i.evo-1]:0;i.evoKillOffset=(i.kills||0)-n,i.evoAttempts=0,i.evoRetryAt=0}return!0}function Jb(i){i.evo=Math.min(kn.length,(i.evo||0)+1),i.evoAttempts=0,i.evoRetryAt=0,i.evoInFlight=!1}function Wh(i,t,e,n){const s=i.minSpread+i.autoThr*(i.maxSpread-i.minSpread),r=t<=s+1e-4,a=Math.min(1,e*i.autoRate),o=n<=s?1:Math.max(0,Math.min(1,(n-t)/(n-s)));return{threshold:s,armed:r,charge:Math.min(a,o),ready:r&&e>=1/i.autoRate}}function Qb(i){return i*2}function $h(i,t){const e=i-t;return e<t?Math.max(0,e):0}class Pm{constructor(){this.reset()}reset(){this.held=!1,this.buffer=0}press(t){this.held=!0,this.buffer=Math.max(.18,1/t.fireRate+.05)}release(t=!1){this.held=!1,t&&(this.buffer=0)}update(t,e){this.buffer=e?Math.max(0,this.buffer-t):0}state(t,e,n,s){const r=this.held||this.buffer>0;if(!r)return{...Wh(t,e,n,s),manual:r,interval:1/t.autoRate};const a=1/t.fireRate;return{manual:r,interval:a,charge:Math.min(1,n/a),ready:n>=a}}consume(t,e){return this.buffer=0,$h(t,e.interval)}}const Qo=Object.keys(rn),Pu=["evoKillOffset","evoAttempts","evoRetryAt"],Lm=()=>Math.random().toString(36).slice(2,10);function Rl(i,t={}){return{id:Lm(),weapon:i,levels:{},evo:0,kills:0,mods:{},...t}}function Ra(i,t){return i.weapon===void 0?ja[t].weapon:i.weapon}function Vf(i,t){const e=Ra(i,t);if(!e)return null;const n=Rl(e,{levels:{...i.levels||{}},evo:i.evo||0,kills:i.kills||0,mods:{...i.mods||{}}});i.wid&&(n.id=i.wid);for(const s of Pu)i[s]&&(n[s]=i[s]);return n}function Dm(i){for(const t of["wid","evo","kills","mods","evoInFlight",...Pu])delete i[t];i.weapon=null,i.levels={}}function tS(i,t){Dm(i),Object.assign(i,{weapon:t.weapon,wid:t.id,levels:{...t.levels},evo:t.evo||0,kills:t.kills||0,mods:{...t.mods||{}}});for(const e of Pu)t[e]&&(i[e]=t[e])}const Gf=i=>Object.values(i||{}).reduce((t,e)=>t+e,0);function Lu(i){const t=AM[i.weapon];return Math.round(t*(1+.75*(i.evo||0))*(1+.03*Gf(i.levels))+t*.5*Gf(i.mods))}const Im=i=>TM[i];function eS(i){const t=ks.find(s=>s.id==="auto").max;let e=0;const n=(s,r,a)=>{if(!s.levels||!Object.hasOwn(s.levels,"rate"))return;const o=Math.min(20,Math.max(0,Math.floor(Number(s.levels.rate)||0)));if(delete s.levels.rate,!!rn[r])for(let l=0;l<o;l++){const c=Ea({weapon:r,scale:a},s.levels,s.evo||0,s.mods||{});(s.levels.auto||0)<t&&c.autoRate<c.fireRate-1e-8?s.levels.auto=(s.levels.auto||0)+1:e+=Math.round(15*Math.pow(1.6,l)*a)}};i.lanes.forEach((s,r)=>n(s,Ra(s,r),ja[r].scale));for(const s of i.storage)n(s,s.weapon,1);return i.money+=e,e}function as(i){return Ea({weapon:i.weapon,scale:1},i.levels||{},i.evo||0,i.mods||{})}const os=i=>i.damage*i.pellets*i.fireRate,nS=i=>Math.max(1,Math.round(Math.max(10,Math.round(os(i)*gi.seconds*gi.hitRate))/gi.hpDivisor)),Rc=(i,t,e)=>Math.min(e,Math.max(t,i));function Um(i){const t=i.duelsStarted??(i.wins||0)+(i.losses||0);return Math.max(0,Math.floor(Number(t)||0))}const iS=i=>ff[Math.max(0,Math.floor(i))%ff.length];function sS(i,t,e,n,s=null){var f;const r=s!=null&&s.length?s.filter(g=>Qo.includes(g)):Qo.slice(0,Rc(Math.floor(t)+2,1,Qo.length)),a=r[Math.floor(n()*r.length)],o=Rc((i.evo||0)+Math.round(n()*2-1),0,kn.length),l={};for(const g of ks)l[g.id]=Rc(Math.round((((f=i.levels)==null?void 0:f[g.id])||0)+n()*4-2),0,g.max);const c={};for(const g of Za[a].slice(0,o))c[g]=Math.floor(n()*(Math.min(yu,o)+1));const h=ks.find(g=>g.id==="damage");let u=0,d=1/0;for(let g=0;g<=h.max;g++){l.damage=g;const v=Math.abs(Math.log(os(as({weapon:a,levels:l,evo:o,mods:c}))/e));v<d&&(u=g,d=v)}return l.damage=u,Rl(a,{levels:l,evo:o,mods:c,kills:o?kn[o-1]:0})}function rS(i,t,e=0,n=Math.random,s=null){const r=iS(e),a=r.min+n()*(r.max-r.min),o=os(as(i))*a,l=sS(i,t,o,n,s);return{inst:l,index:e,kind:r.kind,powerRatio:a,damageScale:o/os(as(l))}}const yn=new b,Ms=new b,Wf=new b,ko=new b,bs=new b,ua=new b,$f=new b,Pc=new b,aS=new b(0,1,0),Xf=i=>Math.min(1,Math.max(0,i)),oS=new Tn({color:"#05070d"}),lS=.05,cS=.04,hS=17,uS=12,dS=.18,fS=4,Lc=75,Oo={gaugeX:38,gaugeTop:40,chipX:140,hpGap:6},pS=24,Dc=["#ff4f5e","#ffd23f","#44c4ff","#7be36b","#c783ff"];class mS{constructor(t,e,n,s){this.i=t,this.base=e,this.line=Jt.lines[t],this.def={...e,weapon:Ra(n,t)??e.weapon},this.save=n,n.line??(n.line=0),n.batch=0,n.cat??(n.cat=0),this.ctx=s,this.floor=Sn(t),this.weapon=rn[this.def.weapon],this.ui=new jM(s.hud.layer,{onUpgrade:()=>s.onUpgrade(this),onUnlock:()=>s.onUnlock(this),onEvolve:()=>s.onEvolve(this),onEquip:()=>s.onEquip(this)}),this.conveyor=new Kb(s.scene,this.line,{onSpawn:r=>this.prepare(r),onCrush:r=>this.onCrush(r)}),this.conveyor.stars=this.stars,this.trial=null,this.gun=null,this.ghost=null,this.lockCenter=new b,this.presses=0,this.holdT=0,this.tapBuffer=0,this.sinceShot=0,this.pop=null,this.visible=!0,this.focus=null,this.manual=null,this.manualT=0,this.share=.6,this.combo=0,this.aimBase=new b,this.aimP=new b,this.jitter=new b,this.jitSpread=0,this.yaw=0,this.pitch=0,this.shownHp="",this.reticleMat=Au(3.2),this.reticleMat.depthTest=!1,this.reticle=new ct(new Je(6.4,6.4),this.reticleMat),this.reticle.renderOrder=9,this.reticle.visible=!1,s.scene.add(this.reticle),this.cone=new wm(s.scene),this.cone.mesh.visible=!1,this.pulse=0,this.ui.setMode("locked"),n.unlocked?this.activate():(this.ghost=new Tu[e.weapon],this.ghost.silhouette(oS),s.scene.add(this.ghost.root))}get unlocked(){return!!this.save.unlocked}get armed(){return!!this.gun}get mods(){var t;return(t=this.save).mods??(t.mods={})}get model(){var t;return((t=this.gun)==null?void 0:t.m)??this.ghost}get evo(){return this.save.evo||0}get kit(){return Za[this.def.weapon]}get scale(){return this.base.scale}get value(){return Df(this.save.line,this.save.cat)}get stars(){return Cu(this.save.line)}junkHp(t){return Ii[t].hp*this.scale*Rb(this.save.batch)}junkReward(t){return Ii[t.kind].reward*this.scale*Pb(this.save.batch)*this.value*this.ctx.incomeMul()*(t.variant?Eb[t.variant].reward:1)}prepare(t){t.hp=t.maxHp=this.junkHp(t.kind)}evoState(){return Cm(this.save)}refreshEvo(){this.ui.setEvo(this.evoState())}evolve(){Jb(this.save),this.gun.fxTier=this.evo,this.restat();const t=this.gun;t.reset();const e=t.m.setEvo(this.evo,this.kit);return Aa(t.m,this.mods),this.ui.setGun(this.weapon.name,t.magSize,this.evo,this.def.weapon),this.ui.setAmmo(t.ammo),this.refreshEvo(),e}restat(){this.stats=Ea(this.def,this.save.levels,this.evo,this.mods);const t=this.gun;t&&(t.reloadDur=this.stats.reload,t.minInterval=1/Math.max(this.stats.fireRate,this.stats.fan||0),t.magSize!==this.stats.magSize&&(t.magSize=this.stats.magSize,t.ammo=Math.min(t.ammo,t.magSize),this.ui.setGun(this.weapon.name,t.magSize,this.evo,this.def.weapon),this.ui.setAmmo(t.ammo)))}ammoSticks(){const t=this.gun,e=Math.min(t.magSize,pS),s=t.state==="reload"&&t.spec.reload==="mag"?t.reloadProgress:t.ammo/t.magSize;return{sticks:e,left:Math.ceil(s*e-1e-6)}}activate(){this.save.unlocked=!0,this.ghost&&(this.ctx.scene.remove(this.ghost.root),this.ghost=null),this.conveyor.running=!0,this.conveyor.setStars(this.stars),Ra(this.save,this.i)?this.mount():this.showEmpty(),this.relayout()}mount(){var n,s;this.save.evoInFlight&&Rm(this.save);const{scene:t,fx:e}=this.ctx;this.save.weapon=Ra(this.save,this.i),(n=this.save).levels??(n.levels={}),(s=this.save).wid??(s.wid=Lm()),this.def={...this.base,weapon:this.save.weapon},this.weapon=rn[this.def.weapon],this.stats=Ea(this.def,this.save.levels,this.evo,this.mods),this.gun=new Sm(t,e,this.def.weapon,this.stats.magSize,{onMagIn:()=>this.ui.setAmmo(this.gun.ammo),onReloadEnd:()=>this.sinceShot=0}),this.evo&&this.gun.m.setEvo(this.evo,this.kit),Aa(this.gun.m,this.mods),this.gun.reloadDur=this.stats.reload,this.gun.fxTier=this.evo,this.gun.minInterval=1/Math.max(this.stats.fireRate,this.stats.fan||0),this.reticleMat.uniforms.uAmmo.value=Al(this.def.weapon),this.spread=this.stats.maxSpread,this.spreadAfterShot=this.spread,this.jitter.set(0,0,0),this.charge=0,this.sinceShot=0,this.presses=0,this.tapBuffer=0,this.ui.setGun(this.weapon.name,this.gun.magSize,this.evo,this.def.weapon),this.ui.setAmmo(this.gun.ammo),this.refreshEvo(),this.ui.setMode("armed")}unmount(){if(!this.gun||this.trial)return null;const t=Vf(this.save,this.i);return this.ctx.scene.remove(this.gun.m.root),this.gun=null,Dm(this.save),this.showEmpty(),t}equip(t){return this.gun?!1:(tS(this.save,t),this.mount(),this.relayout(),!0)}showEmpty(){this.reticle.visible=!1,this.cone.mesh.visible=!1,this.pop=null,this.ui.setMode("empty"),this.ui.setBadge(!1)}standPoint(t){return t.set(fe.targetX,this.floor+Fe+.9,ye)}setRangeVisible(t){this.conveyor.setVisible(t),t||(this.reticle.visible=!1,this.cone.mesh.visible=!1)}relayout(){this.conveyor.relayout(this.floor);const t=this.model;if(!t)return;const e=t.root;e.position.set(fe.gunX+t.inset*Kn-t.rest.min.x,this.floor+Yo+cS-t.rest.min.y,mc),e.rotation.set(0,0,0),e.updateMatrixWorld(!0),this.boreH=t.muzzleWorld(bs).y-e.position.y,this.yaw=this.pitch=0,this.standPoint(this.aimBase),this.aimP.copy(this.aimBase),this.pointAt(this.aimP,1),this.ghost&&(e.updateMatrixWorld(!0),new gn().setFromObject(e).getCenter(this.lockCenter))}pointAt(t,e){const n=this.model;if(!n)return;const s=n.root,r=s.position,a=Math.max(1,Math.hypot(t.x-r.x,t.z-r.z)),o=We.clamp(Math.atan2(-(t.z-r.z),t.x-r.x),-.9,.9),l=We.clamp(Math.atan2(t.y-r.y-(this.boreH||0),a),-.45,.55);this.yaw+=(o-this.yaw)*e,this.pitch+=(l-this.pitch)*e,s.rotation.set(0,this.yaw,this.pitch)}press(){this.gun&&(this.presses++,this.holdT=0,this.tapBuffer=.22)}release(){this.presses=Math.max(0,this.presses-1)}focusRay(t,e){const n=this.conveyor.raycast(t,e);return n?(this.manual=n.junk,this.manualT=fS,!0):!1}get threshold(){const t=this.stats;return t.minSpread+t.autoThr*(t.maxSpread-t.minSpread)}spreadAt(t,e=this.spread){return this.gun.m.muzzleWorld(ko),e*Math.max(2,ko.distanceTo(t))/hS}get fanning(){return this.stats.fan>0&&this.presses>0&&this.holdT>=dS}shoot(){var u,d;const{fx:t}=this.ctx,e=this.gun,n=this.stats,s=this.fanning;e.m.root.updateMatrixWorld(!0),e.m.muzzleWorld(bs);const r=this.aimBase;ua.subVectors(r,bs).normalize(),Pc.crossVectors(ua,aS).normalize(),$f.crossVectors(Pc,ua).normalize();const a=this.spreadAt(r)*(s?1.25:1),o=[];for(let f=0;f<n.pellets;f++){const g=Math.random()*Math.PI*2,v=Math.sqrt(Math.random());o.push({x:Math.cos(g)*v,y:Math.sin(g)*v})}const l=this.spread/n.maxSpread,{pos:c}=e.fire({x:o[0].x*l,y:o[0].y*l}),h=e.spec.pellet;this.tapBuffer=0,this.ui.setAmmo(e.ammo),o.forEach((f,g)=>{const v=Wf.copy(r).addScaledVector(Pc,f.x*a).addScaledVector($f,f.y*a),m=v.clone().sub(c).normalize();g===0&&this.jitter.copy(v).sub(r);const p=this.conveyor.raycast(c,m);if(p){const _=p.junk,y=_.gen,x=p.point.clone().sub(_.root.getWorldPosition(ko)),D=p.point.clone(),A=C=>_.gen===y?C.copy(_.root.getWorldPosition(D).add(x)):C.copy(D);t.fireBullet(c,A,C=>this.onHit(p,y,C),Lc,h,this.evo,e.spec.ammo)}else{const _=m.z<-.05?(-3.75-c.z)/m.z:40,y=m.y<-.02?(this.floor+.02-c.y)/m.y:40,x=c.clone().addScaledVector(m,Math.min(40,_,y));x.y=We.clamp(x.y,this.floor+.02,this.floor+ei-ci-.4),t.fireBullet(c,D=>D.copy(x),D=>this.onMiss(D,m),Lc,h,this.evo,e.spec.ammo)}}),this.spread=Math.min(n.maxSpread,this.spread+n.bloom*(s?1.6:1)*((d=(u=this.ctx).frenzy)!=null&&d.call(u)?ns.bloom:1)),this.spreadAfterShot=this.spread,this.jitSpread=this.spread,this.pulse=1,this.cone.kick(),this.ctx.onShot(this)}onHit(t,e,n){var h;const s=t.junk,r=Ms.subVectors(((h=this.gun)==null?void 0:h.m.muzzleWorld(ko))??n,n).normalize();if(s.gen!==e||!s.alive){this.ctx.fx.impact(n,r,s.colors,.4,this.evo);return}const a=this.stats,o=this.ctx.module("ricochet");let l=a.damage;if(t.sphere.shield){if(this.ctx.fx.impact(n,r,["#c9d2e0","#f08a20","#8a9ab8"],.7,this.evo),o>=0){this.bounce(n,s,l),this.collect(n,null,"щиток!");return}l*=pl.shield,this.damage(s,n,r,l,!1,.5);return}const c=!!t.sphere.weak;c&&(l*=a.crit),this.damage(s,n,r,l,c,c?1.4:.9),o>=0&&this.bounce(n,s,l*Am(o))}damage(t,e,n,s,r,a){var o;t.alive&&(t.hp=Math.max(0,t.hp-s),t.hit(r?1.6:1),this.ctx.fx.impact(e,n,t.colors,a*(((o=this.gun)==null?void 0:o.spec.impact)??1),this.evo),this.collect(e,{dmg:s,bull:r,zone:r?4:2}),t.hp<=0&&this.kill(t))}bounce(t,e,n){var h,u;const s=this.conveyor.nearest(t,e,pl.reach),r=this.ctx.fx;if(!s){r.impact(t,Ms.set(-.3,.8,.5).normalize(),["#ffe08a","#ffffff"],.4,this.evo);return}const a=s.gen,o=t.clone(),l=s.aimPoint(new b),c=d=>s.gen===a?d.copy(s.aimPoint(l)):d.copy(l);r.fireBullet(o,c,d=>{s.gen!==a||!s.alive||this.damage(s,d,Ms.subVectors(o,d).normalize(),n,!1,.8)},Lc*.8,(((h=this.gun)==null?void 0:h.spec.pellet)??1)*.8,this.evo,((u=this.gun)==null?void 0:u.spec.ammo)??"pistol")}get comboMul(){return 1+Math.min(No.max,No.step*Math.max(0,this.combo-1))}kill(t){this.flushPopup();const e=this.ctx.fx,n=t.root.getWorldPosition(new b);n.y+=t.height*.45,this.combo++,this.ui.setCombo(this.combo>=No.show?this.comboMul:0);const s=this.junkReward(t)*this.comboMul;this.conveyor.kill(t);const r=Ms.set(-.5,.35,.8).normalize();e.impact(n,r,t.colors,t.kind==="duckling"||t.kind==="candy"?1.6:3,this.evo),e.ring(n.clone().addScaledVector(r,.2),r,.35,.3,t.height*1.6,1,this.evo);const a=t.kind==="teddy"||t.kind==="bigteddy"?7:t.kind==="pinata"?10:3;for(let l=0;l<a;l++)yn.set(Math.random()*3-1.5,Math.random()*2.5+.5,Math.random()*2-.6),e.puff(n,yn,.18+Math.random()*.14,.9+Math.random()*.5,"white",3,.9);const o=Ii[t.kind].filling;if(o)for(let l=0;l<Ii[t.kind].fill;l++){const c=this.conveyor.spawn(o,null,t.x+.2+l*.45,l%2?.32:-.32);c.pop=0}t.kind===this.line.junk&&(this.share=this.share*.9+.1),this.save.kills=(this.save.kills||0)+1,this.refreshEvo(),this.focus===t&&(this.focus=null),this.manual===t&&(this.manual=null),this.ctx.onKill(this,s,n,t),t.kind==="popper"&&this.explode(n)}explode(t){var r,a;const e=this.ctx.fx,n=new b(-.4,.4,.8).normalize();e.impact(t,n,Dc,4,this.evo),e.ring(t.clone(),n,.5,.4,Jo.radius*2.2,1,4);for(let o=0;o<12;o++)e.crumb(t,yn.set(Math.random()-.5,1.2,Math.random()-.3).normalize(),Dc[o%Dc.length],1.3);const s=this.junkHp(this.line.junk)*Jo.damage;for(const o of this.conveyor.candidates()){const l=o.aimPoint(new b);l.distanceTo(t)>Jo.radius||this.damage(o,l,new b().subVectors(l,t).normalize(),s,!1,.8)}(a=(r=this.ctx).onBlast)==null||a.call(r,this,t)}onCrush(t){if(t.kind===this.line.junk&&(this.share*=.9),this.combo>=No.show&&this.visible){const n=this.ctx.project(this.conveyor.starWorld(0,new b).setX(this.conveyor.pressX));this.ctx.hud.popup(n.x,n.y-40,"комбо сорвано","miss")}this.combo=0,this.ui.setCombo(0);const e=t.root.getWorldPosition(new b);e.y+=.3;for(let n=0;n<4;n++)this.ctx.fx.crumb(e,Ms.set(-.2,1,.4).normalize(),t.colors[n%t.colors.length]);this.ctx.fx.puff(e,yn.set(0,.8,.6),.3,.8,"grey",3,.7),this.ctx.onPress(this,this.junkReward(t)*this.ctx.pressShare(),e,t)}onMiss(t,e){var n;this.ctx.fx.impact(t,Ms.copy(e).negate(),["#1f3e68","#355b83","#e8d6b4"],.5*(((n=this.gun)==null?void 0:n.spec.impact)??1),this.evo),this.collect(t,null)}collect(t,e,n=null){this.pop||(this.pop={t:lS,dmg:0,hits:0,bull:!1,zone:-1,pos:new b,label:null});const s=this.pop;n&&(s.label=n),e?(s.hits||s.pos.copy(t),s.hits++,s.dmg+=e.dmg,s.bull||(s.bull=e.bull),s.zone=Math.max(s.zone,e.zone)):s.hits||s.pos.copy(t)}flushPopup(){const t=this.pop;t&&(this.pop=null,t.hits?this.ctx.onHit(this,t,t.pos):t.label?this.ctx.hud.popup(...Object.values(this.ctx.project(t.pos)),t.label,"z3"):this.ctx.onMiss(this,t.pos))}currencyOf(t){return t.startsWith("mod:")||t.startsWith("rule:")?"parts":"coins"}costOf(t){if(!this.unlocked)return null;if(t==="line")return Cb(this.i,this.save.line,this.scale);if(t.startsWith("rule:")){const s=this.ctx.module(t.slice(5));return s<0?null:Lb(s)}if(!this.gun)return null;if(t.startsWith("mod:")){const s=t.slice(4),r=this.kit.indexOf(s),a=this.mods[s]||0;return r>=0&&r<this.evo&&a<df(this.evo)?wM(a):null}const e=ks.find(s=>s.id===t);if(!e||t==="auto"&&this.stats.autoRate>=this.stats.fireRate-1e-8)return null;const n=this.save.levels[t]||0;return n>=e.max?null:MM(e,n,this.def)}applyUpgrade(t){if(t==="line"){const e=this.stars;if(this.save.line++,this.stars>e){this.conveyor.setStars(this.stars,!0);const n=this.conveyor.starWorld(this.stars-1,new b),s=Ms.set(0,.2,1).normalize();this.ctx.fx.impact(n,s,["#ffd23f","#fff1b8","#ffb300"],1.4,Math.min(5,Math.floor(this.stars/2))),this.ctx.fx.ring(n,s,.45,.2,2.4,1,Math.min(5,Math.floor(this.stars/2))),this.ctx.onStar(this)}return}if(t.startsWith("rule:")){this.ctx.raiseModule(t.slice(5));return}if(t.startsWith("mod:")){const e=t.slice(4);this.mods[e]=(this.mods[e]||0)+1,Aa(this.gun.m,this.mods)}else this.save.levels[t]=(this.save.levels[t]||0)+1;this.restat()}upgradeIds(){const t=["line"];return this.gun&&t.push(...ks.map(e=>e.id),...this.kit.slice(0,this.evo).map(e=>`mod:${e}`)),this.ctx.module("ricochet")>=0&&t.push("rule:ricochet"),t}canAfford(t,e=0){return this.upgradeIds().some(n=>{const s=this.costOf(n);return s!=null&&s<=(this.currencyOf(n)==="parts"?e:t)})}instance(){return Vf(this.save,this.i)}lineRows(){const t=this.save.line,e=(this.stars+1)*5;return[{id:"line",icon:"⭐",title:"Ценность партии",lvl:`ур. ${t} · ★${this.stars}`,now:`награда ×${this.value.toFixed(2)} · разбивается ~${Math.round(this.share*100)}%`,next:`×${Df(t+1,this.save.cat).toFixed(2)}${t+1===e?" ★":` · до ★ ${e-t}`}`,cost:this.costOf("line")}]}panelData(){var l,c;const t=this.weapon,e=this.save.levels||{},n=this.evo,s=[];if(this.gun){const h=this.stats,u=ks.map(p=>{const _=e[p.id]||0,y=this.costOf(p.id),x=bM[p.id],D=y==null?null:Ea(this.def,{...e,[p.id]:_+1},n,this.mods);return{id:p.id,icon:p.icon,title:p.title,lvl:`ур. ${_}`,now:p.fmt(h[x],t),next:D?p.fmt(D[x],t):"",cost:y}}),d=df(n),f=this.kit.map((p,_)=>{const y=Oa[p];if(_>=n)return{id:`mod:${p}`,icon:y.icon,title:y.name,now:`появится после ${_+1}-й эволюции`,off:`Эволюция ${_+1}`};const x=this.mods[p]||0,D={id:`mod:${p}`,icon:y.icon,title:y.name,lvl:Os(x),now:Bh(p,x),next:Bh(p,x+1),cost:this.costOf(`mod:${p}`),cur:"parts"};return D.cost==null&&x<4&&(D.block=`нужен тир<br>${Nn[x+1].name}`),D}),g=this.ctx.module("ricochet"),v=Tm.ricochet;f.unshift(g<0?{id:"rule:ricochet",icon:v.icon,title:`Поведение: ${v.name}`,now:"откроется на линии «Коробки со щитом»",off:"Линия 4"}:{id:"rule:ricochet",icon:v.icon,title:`Поведение: ${v.name}`,lvl:Os(g),now:v.text(g),next:v.text(g+1),cost:this.costOf("rule:ricochet"),cur:"parts"});const m=p=>Math.pow(fm[p],n);s.push({title:"Характеристики",note:`Темп ${t.fireRate.toFixed(1)}/с${this.stats.fan?` · «веер» ${this.stats.fan}/с при удержании`:""} · слабое место ×${this.stats.crit}${n?` · урон тира ×${m("damage").toFixed(2)}`:""}`,rows:u},{title:"Модули",note:n?`прокачка за детали до ${Nn[d].name} · поведение — общее для цеха`:"обвесы ставятся эволюциями, качаются за детали · поведение — общее для цеха",rows:f})}s.push({title:"Линия",note:`${this.line.name}: ★ каждые 5 уровней ценности, +20% к награде · звёзды двигают цех`,rows:this.lineRows()});const r=this.evoState(),a=r.max?"эволюция MAX":r.wait?`повтор через ${Math.ceil(r.wait/1e3)} с`:r.ready?"эволюция готова — жми на шкалу":`до эволюции ${r.left}`,o=this.gun?this.instance():null;return{title:this.gun?t.name:this.line.name.toUpperCase(),tier:this.gun?n:0,thumb:o?(c=(l=this.ctx).thumb)==null?void 0:c.call(l,o):null,thumbKey:o?`${o.weapon}|${n}|${JSON.stringify(o.mods)}`:"empty",sub:`Линия ${this.i+1} «${this.line.short}» · ★${this.stars} · разбито ${this.save.kills||0}${this.gun?` · ${a}`:""}`,sections:s,foot:[{act:"swap",label:this.gun?"Сменить оружие":"Поставить оружие"}]}}pickFocus(t){const e=this.conveyor.candidates();this.manualT=Math.max(0,this.manualT-t),this.manual&&(!this.manual.alive||!e.includes(this.manual)||this.manualT<=0)&&(this.manual=null);const n=e.find(r=>r.state==="hang");if(this.manual)return this.manual;if(n&&!e.some(r=>r!==n&&r.x<n.x-2))return n;let s=null;for(const r of e)(!s||r.x<s.x)&&(s=r);return s}update(t){var f,g;this.ui.tick(t),this.pop&&(this.pop.t-=t)<=0&&this.flushPopup();const e=!!this.trial;if(e||this.conveyor.update(t,this.ctx.flow(this)),!this.gun){this.reticle.visible=!1,this.cone.mesh.visible=!1,this.focus=null,this.ui.setHpVisible(!1);return}this.save.evoRetryAt&&this.refreshEvo();const n=this.stats;this.spread=Math.max(n.minSpread,this.spread-(n.maxSpread-n.minSpread)/n.convergence*t);const s=this.threshold,r=this.spread<=s+1e-4;this.sinceShot+=t,this.tapBuffer=Math.max(0,this.tapBuffer-t),this.presses>0&&(this.holdT+=t);const a=!e&&!!((g=(f=this.ctx).frenzy)!=null&&g.call(f)),o=!e&&(this.presses>0||this.tapBuffer>0||a&&!!this.focus);if(!e){this.focus=this.pickFocus(t),this.focus?this.focus.aimPoint(this.aimBase):this.standPoint(this.aimBase);const v=this.jitSpread>n.minSpread+1e-6?Xf((this.spread-n.minSpread)/(this.jitSpread-n.minSpread)):0;this.aimP.copy(this.aimBase).addScaledVector(this.jitter,v),this.pointAt(this.aimP,1-Math.exp(-t*uS))}let l=!1;if(this.focus&&!e){this.gun.m.muzzleWorld(bs),this.gun.m.boreDir(ua),yn.subVectors(this.aimBase,bs);const v=yn.length();l=yn.normalize().dot(ua)>Math.cos(Math.atan(this.spreadAt(this.aimBase)/v)+.05)}if(this.gun.canFire&&!e&&!this.review)if(o){const v=1/(this.fanning?n.fan:n.fireRate);this.sinceShot>=v&&(this.sinceShot=$h(this.sinceShot,v),this.shoot())}else this.focus&&l&&Wh(n,this.spread,this.sinceShot,this.spreadAfterShot).ready&&(this.sinceShot=$h(this.sinceShot,1/n.autoRate),this.shoot());let c=0;o&&this.gun.canFire?c=Math.min(1,this.sinceShot*(this.fanning?n.fan:n.fireRate)):this.gun.canFire&&!e&&(c=Wh(n,this.spread,this.sinceShot,this.spreadAfterShot).charge),this.charge=c;const h=1-Xf((this.spread-n.minSpread)/(n.maxSpread-n.minSpread));this.gun.update(t,h);const u=!e&&!!this.focus;if(this.reticle.visible=u,u){this.reticle.position.copy(this.aimBase);const v=this.reticleMat.uniforms;v.uR.value=We.clamp(this.spreadAt(this.aimBase),.08,2.35),v.uThr.value=We.clamp(this.spreadAt(this.aimBase,s),.08,2.35),v.uTime.value+=t,r?v.uColor.value.setRGB(.25,1,.38):v.uColor.value.setRGB(1,.5,.1),this.pulse=Math.max(0,this.pulse-t*5),v.uPulse.value=this.pulse;const m=this.ammoSticks();v.uSticks.value=m.sticks,v.uLeft.value=m.left,v.uReloading.value=this.gun.state==="reload"?1:0,v.uFill.value=this.gun.state==="reload"?this.gun.reloadProgress:c}if(e||(this.gun.m.muzzleWorld(bs),this.cone.update(t,bs,this.aimBase,this.spreadAt(this.aimBase),r,c,u&&this.gun.state!=="reload",this.evo)),this.focus&&!e){const v=`${Math.ceil(this.focus.hp)}|${this.focus.gen}`;v!==this.shownHp&&(this.ui.setHp(this.focus.hp,this.focus.maxHp,this.focus.gen!==this.hpGen),this.shownHp=v,this.hpGen=this.focus.gen),this.ui.setReward(Ii[this.focus.kind].reward>0?this.junkReward(this.focus):null)}this.ui.setHpVisible(!!this.focus&&!e);const d=this.gun.state==="reload";(d||this.shownReload)&&this.ui.setReload(d,this.gun.reloadProgress),this.shownReload=d}updateLock(t,e){const n=this.ctx.gate(this);this.ui.setLock(`★ ${n}`,t,e>=n)}resetReview(){this.conveyor.clear();const t=this.conveyor.spawn(this.line.junk,null,fe.targetX-2,0);t.pop=1,this.manual=t,this.manualT=1e9}placeUI(t,e,n){const s=this.ctx.project,r=s(yn.set(0,this.floor+2.3,0));if(this.visible=r.y>-e*.5&&r.y<t+e*.5,r.y<-e||r.y>t+e)return;const a=n.k,o=s(yn.set(fe.gunX,this.floor+ei-ci,3.3)).y,l=this.focus,c=l?s(l.root.getWorldPosition(yn).add(Wf.set(0,l.height+.1,0))):{x:-999,y:-999},h=s(yn.set(fe.gunX,this.floor+Yo+.72,mc)),u=this.ghost?s(this.lockCenter):this.gun?r:s(yn.set(fe.gunX+2.4,this.floor+Yo+1.1,mc)),d=s(yn.set(this.conveyor.pressX,this.floor+4,ye+.6));this.ui.place({comboX:d.x,comboY:d.y,gaugeX:n.left+Oo.gaugeX*a,gaugeY:o+Oo.gaugeTop*a,chipX:n.left+Oo.chipX*a,chipY:h.y,hpX:c.x,hpY:c.y-Oo.hpGap*a,lockX:u.x,lockY:u.y})}}const ls=-4;class gS{constructor(t){this.scene=t,this.root=new It,t.add(this.root),t.background=new xt("#101d2e"),t.add(new Ya(we.sky,we.ground,1)),this.key=new Ka(we.key,we.keyIntensity),this.key.castShadow=!0,this.key.shadow.mapSize.set(1536,1536),this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.03,t.add(this.key,this.key.target),this.materials={wall:Et("#22384d",{spec:0,rim:0}),panel:Et("#2c465e",{spec:.02,rim:0}),beam:Et("#3e566c",{spec:.08,rim:0}),floor:Et("#777d82",{map:vu().clone(),spec:.03,rim:0}),rubber:Et("#202932",{spec:0,rim:0}),stripe:Et("#bb914b",{spec:0,rim:0}),light:new Tn({color:new xt(1.4,1.35,1.18)})}}build(t,e){this.root.traverse(c=>{c.isMesh&&c.geometry.dispose()}),this.root.clear(),this.left=Math.min(-6,e-1.5),this.right=t+10;const n=this.right-this.left,s=(this.left+this.right)/2;this.height=Math.max(14,n/2.1);const r=ls,a=r+this.height,o=(c,h,u,d,f,g,v)=>{const m=new ct(new _i(c,h,u),this.materials[v]);return m.position.set(d,f,g),m.receiveShadow=!0,this.root.add(m),m};this.materials.floor.map.repeat.set(n/5,1),o(n,.6,12,s,r-.3,-1,"floor"),o(n,this.height,.6,s,r+this.height/2,-6.7,"wall"),o(n,.7,12,s,a+.35,-1,"beam"),o(.8,this.height,12,this.left-.4,r+this.height/2,-1,"beam"),o(.8,this.height,12,this.right+.4,r+this.height/2,-1,"beam");for(let c=this.left+3;c<this.right-1;c+=6)o(5.4,this.height-3,.25,c,r+this.height/2,-6.2,"panel"),o(.18,this.height,.6,c-2.85,r+this.height/2,-5.9,"beam"),o(3.5,.12,.35,c,a-.8,-4.9,"light"),o(.07,.025,5.5,c,r+.02,0,"stripe");o(7,.4,4.5,-3.5,r+.2,.3,"rubber"),o(.13,.03,6,1,r+.025,0,"stripe"),o(7.5,this.height-2,.35,t+5,r+this.height/2,-5.8,"rubber");for(let c=r+1;c<a-1;c+=.7)o(.22,.32,.08,t+1.1,c,-5.55,"stripe"),o(.22,.32,.08,t+8.9,c,-5.55,"stripe");this.key.target.position.set(s,r+3,0),this.key.position.copy(we.keyDir).multiplyScalar(n).add(this.key.target.position);const l=this.key.shadow.camera;l.left=-n/2,l.right=n/2,l.top=this.height,l.bottom=-this.height,l.near=1,l.far=n*3,l.updateProjectionMatrix()}groundAt(t,e,n){return t>-7&&t<0&&Math.abs(n-.3)<2.25&&e>=ls+.2?ls+.4:ls}}const ga=-.2,vS=18,xS=.5,_S=.7,yS=.6,MS=1.8,qf=110,bS=14.56,SS=130,wS=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,Nm=i=>1+2.7*Math.pow(i-1,3)+1.7*Math.pow(i-1,2),hn=(i,t)=>i+Math.random()*(t-i),en=We.clamp,Yf=We.lerp,Re=new b,Kf=new b,Qi=new b,zo=new b,Bo=new b,ES=new b(0,0,1),vl=[{rim:"#2f4569",arm:"#2f4569",tube:.12},{rim:"#2f4569",arm:"#f08a20",tube:.14},{rim:"#7d8aa0",arm:"#2f4569",tube:.17},{rim:"#3a3f4d",arm:"#f08a20",tube:.2},{rim:"#e0a43a",arm:"#3a3f4d",tube:.23}],Di=["#efdbbb","#5d5b60","#f76445","#fbc838"];function TS(){const i=new sn(1,1,.24,40);i.rotateX(Math.PI/2);const t=new Map,e=(n,s=Et)=>t.get(n)??t.set(n,s(n,{spec:.14,gloss:12,rim:.08})).get(n);return{discGeo:i,faceGeo:new Sl(1,40),armGeo:new nn(1.6,.16,.3,2,.06),hubGeo:new sn(.12,.12,.14,12),bladeGeo:new nn(.95,.04,.16,1,.02),torus:new Map,mat:e,blade:Ee("#f08a20")}}class AS{constructor(t,e,n){this.kit=e,this.root=new It,this.root.visible=!1,t.add(this.root),this.body=new It,this.body.rotation.y=-.35,this.root.add(this.body),this.body.add(new ct(e.discGeo,e.mat(Di[0]))),[[.82,Di[1]],[.64,Di[0]],[.46,Di[2]],[.2,Di[3]]].forEach(([r,a],o)=>{const l=new ct(e.faceGeo,e.mat(a));l.scale.set(r,r,1),l.position.z=.125+o*.006,this.body.add(l)}),this.rim=new ct(e.discGeo,e.mat(Di[0])),this.body.add(this.rim),this.arm=new ct(e.armGeo,e.mat("#2f4569")),this.arm.position.y=1.16,this.body.add(this.arm),this.rotors=[];for(const r of[-.66,.66]){const a=new ct(e.hubGeo,e.mat("#2f4569"));a.position.set(r,1.28,0);const o=new It;o.position.set(r,1.37,0),o.add(new ct(e.bladeGeo,e.blade)),this.body.add(a,o),this.rotors.push(o)}for(const r of this.body.children)r.castShadow=!0;this.flashMat=new Tn({color:16777215,transparent:!0,opacity:0,blending:ti,depthWrite:!1});const s=new ct(e.faceGeo,this.flashMat);s.scale.setScalar(.95),s.position.z=.16,this.body.add(s),this.hpUI=new bu(n),this.hpUI.el.classList.add("drone-hp"),this.hpLeader=document.createElement("i"),this.hpLeader.className="hp-leader",this.hpUI.el.append(this.hpLeader),this.hpUI.el.hidden=!0,this.pos=new b,this.alive=!1,this.gen=0}setLook(t){const e=vl[Math.min(t,vl.length-1)];let n=this.kit.torus.get(e.tube);n||this.kit.torus.set(e.tube,n=new qa(1,e.tube,10,40)),this.rim.geometry=n,this.rim.material=this.kit.mat(e.rim),this.arm.material=this.kit.mat(e.arm)}spawn(t,e,n,s){this.setLook(e),this.alive=!0,this.leaving=!1,this.gen++,this.r=n.radius*2.6,this.hp=this.maxHp=s,this.speed=n.speed*hn(.85,1.15),this.t=0,this.pop=0,this.punch=0,this.punchV=0,this.flash=0,this.vx=0,this.ph=hn(0,6.28),this.ph2=hn(0,6.28);const r=e===0?["patrol","patrol","wave","hop"]:["patrol","wave","loop","hop","loop"];this.mode=r[Math.floor(Math.random()*r.length)],this.dir=Math.random()<.5?-1:1,this.baseY=hn(t.y0+.3,t.y1-.3),this.cx=hn(t.x0,t.x1),this.cy=hn(t.y0,t.y1),this.pos.set(hn(t.x0,t.x1),this.baseY,ga),this.wx=this.pos.x,this.wy=this.pos.y,this.root.visible=!0,this.root.scale.setScalar(.01),this.hpUI.set(this.hp,this.maxHp,!0)}hit(){this.punchV+=6,this.flash=1,this.hpUI.set(this.hp,this.maxHp)}update(t,e){this.t+=t,this.pop=Math.min(1,this.pop+t/.35),this.punchV+=(-300*this.punch-18*this.punchV)*t,this.punch+=this.punchV*t,this.flash=Math.max(0,this.flash-t*8),this.flashMat.opacity=this.flash*.75;for(const l of this.rotors)l.rotation.y+=t*38;const n=this.pos;if(this.leaving){n.y+=t*6,this.pop=Math.max(0,this.pop-t*2.5),this.root.position.copy(n),this.root.scale.setScalar(Math.max(.01,this.r*this.pop)),this.pop<=0&&(this.root.visible=!1);return}const s=e.x1-e.x0,r=e.y1-e.y0,a=n.x;switch(this.mode){case"patrol":case"wave":{n.x+=this.dir*this.speed*t,n.x>e.x1&&(n.x=e.x1,this.dir=-1),n.x<e.x0&&(n.x=e.x0,this.dir=1);const l=this.mode==="wave",c=l?Math.min(2.6,r/2):.35;n.y=en(this.baseY+c*Math.sin(this.t*(l?1.7:2.4)+this.ph),e.y0,e.y1);break}case"loop":{const l=en(s/2-.2,.4,5),c=en(r/2-.1,.3,2.6),h=en(this.cx,e.x0+l,e.x1-l),u=en(this.cy,e.y0+c,e.y1-c),d=this.speed/l*.6,f=h+l*Math.sin(this.t*d+this.ph),g=u+c*Math.sin(this.t*d*2+this.ph2),v=Math.min(1,this.t/.6);n.x=Yf(n.x,f,v),n.y=Yf(n.y,g,v);break}default:{const l=this.wx-n.x,c=this.wy-n.y,h=Math.hypot(l,c);if(h<.12)this.wx=hn(e.x0,e.x1),this.wy=hn(e.y0,e.y1);else{const u=Math.min(h,this.speed*1.3*t*Math.min(1,h/.8+.3));n.x+=l/h*u,n.y+=c/h*u}}}n.x=en(n.x,e.x0,e.x1),n.y=en(n.y,e.y0,e.y1),this.vx=(n.x-a)/Math.max(t,.001),this.root.position.copy(n);const o=this.r*Math.max(.01,Nm(this.pop))*(1+en(this.punch,-.2,.3)*.18);this.root.scale.setScalar(o),this.body.rotation.z=en(-this.vx*.06,-.3,.3)}hide(){this.alive=!1,this.root.visible=!1,this.hpUI.el.hidden=!0}}class CS{constructor(t){this.homeScene=t.scene,this.homeFX=t.fx,this.scene=new $a,this.room=new gS(this.scene),this.fx=new Mu(this.scene,{ground:(a,o,l)=>this.room.groundAt(a,o,l)}),this.ctx={...t,scene:this.scene,fx:this.fx};const e=document.createElement("div");e.className="drone-hp-layer",document.querySelector("#evo").append(e),this.active=!1,this.state="idle",this.trigger=new Pm,this.z=0;const n=TS();this.drones=Array.from({length:5},()=>new AS(this.scene,n,e)),this.retMat=Au(2.1),this.retMat.depthTest=!1;const s=this.retMat.uniforms;s.uK.value=.9,s.uShowThr.value=0,this.reticle=new ct(new Je(4.2,4.2),this.retMat),this.reticle.renderOrder=9,this.reticle.visible=!1,this.scene.add(this.reticle),this.aimP=new b,this.aimRaw=new b,this.lock=null,this.ray=new mu,this.plane=new ai(new b(0,0,1),-ga),this.cam={cx:0,cy:0,viewH:20,left:0,right:0};const r=a=>document.querySelector(a);this.el=r("#evo"),this.dimTop=r("#evo .evo-dim.top"),this.dimBottom=r("#evo .evo-dim.bottom"),this.timeEl=r("#evo .evo-time"),this.goalEl=r("#evo .evo-goal"),this.banner=r("#evo .evo-banner"),this.bStep=r("#evo .eb-step"),this.bTitle=r("#evo .eb-title"),this.bText=r("#evo .eb-text"),this.bBtn=r("#evo .eb-btn"),this.bBtn.addEventListener("pointerdown",a=>{a.stopPropagation(),this.dismiss()}),r("#evo .evo-leave").addEventListener("pointerdown",a=>{a.stopPropagation(),this.surrender()})}start(t){var a,o,l,c;if(this.active||!t.gun||!t.evoState().ready||!Zb(t.save))return;(o=(a=this.ctx).onStateChange)==null||o.call(a),(c=(l=this.ctx).onStart)==null||c.call(l),this.lane=t,this.trigger.reset(),this.retMat.uniforms.uAmmo.value=Al(t.def.weapon),t.setRangeVisible(!1),t.gun.reset(),t.model.seatNewMag(),this.step=t.evo,this.cfg={...Ta[Math.min(this.step,Ta.length-1)]},this.cfg.time=CM(t.def,this.step),this.hp=mm(t.def,Math.min(this.step,Ta.length-1)),this.kind=t.kit[this.step],t.trial=this,this.active=!0,this.state="in",this.t=0,this.z=0,this.killed=0,this.timeLeft=this.cfg.time,this.spawnT=0,t.sinceShot=0,this.charge=0,this.pulse=0,this.popPart=null;const e=t.model,n=e.root;n.updateMatrixWorld(!0);const s=e.muzzleWorld(new b);this.standDistance=s.distanceTo(t.standPoint(new b)),this.range=Qb(this.standDistance),this.scene.add(n,t.cone.mesh),t.gun.scene=this.scene,t.gun.fx=this.fx,this.fx.clear(),n.position.set(0,0,0),n.rotation.set(0,0,0),e.pivot.position.set(0,0,0),e.pivot.rotation.set(0,0,0),e.pivot.scale.set(1,1,1),n.updateMatrixWorld(!0),e.muzzleWorld(Re),this.poseX=-Re.x,this.poseY=ls+.65-e.rest.min.y,this.poseZ=.55,this.boreY=Re.y,this.pitch=this.yaw=0,this.room.build(this.range,this.poseX+e.rest.min.x),this.frame();const r=this.arena();this.aimP.set((r.x0+r.x1)/2,(r.y0+r.y1)/2,ga),this.aimRaw.copy(this.aimP),this.lock=null,this.poseGun(1,r),this.introShown=!1,this.goalEl.textContent=`0/${this.cfg.count}`,this.timeEl.textContent=`${this.cfg.time}`,this.el.classList.remove("off","low","on")}frame(){const t=this.cam,e=this.room;t.cx=(e.left+e.right)/2,t.cy=ls+e.height*.46,t.viewH=Math.max(e.height+2,(e.right-e.left+3)/this.ctx.camera.aspect),t.left=t.cx-t.viewH*this.ctx.camera.aspect/2,t.right=t.cx+t.viewH*this.ctx.camera.aspect/2,this.fx.farScale=en(t.viewH/bS,1,2.6)}arena(){const t=this.cfg.radius*2.6;return{x0:4+t,x1:this.room.right-t-1,y0:ls+t+.5,y1:ls+this.room.height-t-1.6}}view(t){return this.active?{cx:this.cam.cx,cy:this.cam.cy,viewH:this.cam.viewH*(1+(1-wS(this.z))*.025)}:t}relayout(){this.active&&(this.frame(),this.poseGun(1,this.arena()))}pointer(t,e,n){if(!this.active||this.state!=="in"&&this.state!=="play"||n!==!0)return;this.trigger.press(this.lane.stats);const s=Kf.set(t/innerWidth*2-1,-(e/innerHeight)*2+1,0);if(this.ray.setFromCamera(s,this.ctx.camera),!this.ray.ray.intersectPlane(this.plane,Re))return;const r=SS*this.cam.viewH/941;let a=null,o=r;for(const l of this.drones){if(!l.alive||l.pop<.6)continue;const c=Math.hypot(l.pos.x-Re.x,l.pos.y-Re.y)-l.r;c<o&&(a=l,o=c)}a&&(this.lock=a)}release(t=!1){this.trigger.release(t)}assist(t){let e=this.lock&&this.lock.alive&&this.lock.pop>=.6?this.lock:null;if(!e&&this.state==="play"){let s=1/0;for(const r of this.drones){if(!r.alive||r.pop<.6)continue;const a=Math.hypot(r.pos.x-this.aimP.x,r.pos.y-this.aimP.y);a<s&&(e=r,s=a)}}this.lock=this.state==="play"?e:null;const n=this.lock?this.lock.pos:this.aimRaw;this.aimP.lerp(n,1-Math.exp(-t*(this.lock?10:3))),this.aimP.z=ga}dismiss(){(this.state==="won"||this.state==="lost")&&this.leave()}surrender(){(this.state==="play"||this.state==="in")&&this.lose(!0)}update(t){if(!this.active)return;const e=this.lane;if(this.t+=t,this.frame(),this.state==="in"&&(this.z=Math.min(1,this.z+t/_S)),this.state==="out"&&(this.z=Math.max(0,this.z-t/yS),this.z<=0)){this.finish();return}const n=this.arena();if(this.assist(t),this.poseGun(t,n),this.el.classList.toggle("playing",this.state==="in"||this.state==="play"),this.state==="in"&&!this.introShown&&this.t>.25){this.introShown=!0,this.el.classList.add("on");const r=Oa[this.kind];this.showBanner(`ЭВОЛЮЦИЯ ${this.step+1}`,r.name,`Сбей ${this.cfg.count} дронов за ${this.cfg.time} с<br><small>Прицел наводится сам · тап / удержание — быстрый огонь, тап по дрону — сменить цель</small>`)}this.state==="in"&&this.t>MS&&(this.state="play",e.sinceShot=1/e.stats.fireRate,this.hideBanner()),this.state==="play"&&this.play(t,n),(this.state==="won"||this.state==="lost")&&this.t>4&&this.leave();for(const r of this.drones)r.root.visible&&r.update(t,n);this.updateReticle(t),this.fx.update(t);const s=this.popPart;if(s){s.t+=t;const r=Math.max(.01,Nm(Math.min(1,s.t/.5)));s.obj.scale.setScalar(r),s.t>=.5&&(s.obj.scale.setScalar(1),this.popPart=null)}}poseGun(t,e){const n=this.lane.model.root,s=this.poseX,r=this.poseY,a=this.poseZ,o=this.aimP;o.x=en(o.x,e.x0-1,e.x1+1),o.y=en(o.y,e.y0-.8,e.y1+.6);const l=o.x-s,c=o.y-r,h=Math.hypot(l,c),u=en(Math.atan2(c,l)-Math.asin(en(this.boreY/h,-1,1)),-.8,1.2),d=Math.atan2(-(o.z-a),h),f=1-Math.exp(-t*16);this.pitch+=(u-this.pitch)*f,this.yaw+=(d-this.yaw)*f,n.position.set(s,r,a),n.rotation.set(0,this.yaw,this.pitch),n.updateMatrixWorld(!0)}play(t,e){const n=this.cfg;if(this.timeLeft-=t,this.timeLeft<=0){this.timeLeft=0,this.lose();return}const s=this.drones.filter(l=>l.alive).length;if(this.spawnT-=t,s<Math.min(n.alive,n.count-this.killed)&&this.spawnT<=0){const l=this.drones.find(c=>!c.alive&&!c.root.visible)??this.drones.find(c=>!c.alive);l&&(l.spawn(e,this.step,n,this.hp),this.ctx.fx.puff(l.pos,Re.set(0,.6,0),.12,.8,"white",3,.7),this.spawnT=.45)}const r=this.lane.gun,a=this.lane.stats;this.trigger.update(t,r.canFire);const o=this.trigger.state(a,this.lane.spread,this.lane.sinceShot,this.lane.spreadAfterShot);if(this.charge=r.canFire?o.charge:0,this.onTarget=!1,r.canFire){const l=r.m.muzzleWorld(Qi),c=r.m.boreDir(zo);this.onTarget=!!this.aimed(l,c),(o.manual||this.onTarget)&&o.ready&&(this.lane.sinceShot=this.trigger.consume(this.lane.sinceShot,o),this.fire())}}angle(){return this.lane.spread/vS*xS}aimed(t,e){const n=Math.tan(this.angle());for(const s of this.drones){if(!s.alive||s.pop<.6)continue;Re.subVectors(s.pos,t);const r=Re.dot(e);if(r<=0)continue;if(Math.sqrt(Math.max(0,Re.lengthSq()-r*r))<s.r*1.05+r*n*.5)return s}return null}raycast(t,e){let n=null,s=1/0;for(const a of this.drones){if(!a.alive)continue;Re.subVectors(a.pos,t);const o=Re.dot(e);if(o<=0||o>=s)continue;const l=a.r*1.12;Re.lengthSq()-o*o<l*l&&(n=a,s=o)}if(!n)return null;const r=new b().copy(t).addScaledVector(e,s).sub(n.pos);return r.z=0,r.length()>n.r*.85&&r.setLength(n.r*.85),{drone:n,off:r}}fire(){var l,c;const t=this.lane,e=t.gun,n=t.stats,s=this.ctx.fx,{pos:r,dir:a}=e.fire(),o=this.angle();t.spread=Math.min(n.maxSpread,t.spread+n.bloom),t.spreadAfterShot=t.spread,this.pulse=1,t.cone.kick(),(c=(l=this.ctx).onShot)==null||c.call(l,t),Qi.crossVectors(a,ES),Qi.lengthSq()<1e-6&&Qi.set(0,1,0),Qi.normalize(),zo.crossVectors(a,Qi).normalize();for(let h=0;h<n.pellets;h++){const u=Math.tan(o*Math.sqrt(Math.random())),d=Math.random()*Math.PI*2,f=new b().copy(a).addScaledVector(Qi,Math.cos(d)*u).addScaledVector(zo,Math.sin(d)*u).normalize(),g=this.raycast(r,f);if(g){const{drone:v,off:m}=g,p=v.gen,_=new b().copy(v.pos).add(m),y=x=>v.gen===p?x.copy(_.copy(v.pos).add(m)):x.copy(_);s.fireBullet(r,y,x=>this.hitDrone(v,p,x),qf,e.spec.pellet,t.evo,e.spec.ammo)}else{const v=new b().copy(r).addScaledVector(f,this.range+14);s.fireBullet(r,m=>m.copy(v),null,qf,e.spec.pellet,t.evo,e.spec.ammo)}}}hitDrone(t,e,n){const s=this.ctx.fx,r=Bo.set(-.4,.1,1).normalize();if(t.gen!==e||!t.alive||this.state!=="play"){s.impact(n,r,Di,.3,this.lane.evo);return}t.hp-=this.lane.stats.damage,t.hit(),s.impact(n,r,Di,.4*this.lane.gun.spec.impact+.2,this.lane.evo),t.hp<=0&&this.kill(t)}burst(t){const e=this.ctx.fx;t.alive=!1,t.gen++;const n=Bo.set(-.4,.1,1).normalize();e.impact(t.pos,n,[...Di,vl[Math.min(this.step,vl.length-1)].rim],2.2,this.lane.evo),e.ring(Re.copy(t.pos).addScaledVector(n,.1),n,.35,.2,1.8,1,this.lane.evo);for(let s=0;s<5;s++)e.puff(t.pos,Re.set(hn(-1.5,1.5),hn(-.5,1.5),hn(-.5,.5)),hn(.1,.16),hn(.8,1.2),s%2?"grey":"dust",3,.85);t.root.visible=!1}kill(t){this.burst(t),this.killed++;const e=this.ctx.project(t.pos);this.ctx.hud.popup(e.x,e.y-20,`${this.killed}/${this.cfg.count}`,"bull"),this.killed>=this.cfg.count&&this.win()}win(){var s,r;this.state="won",this.t=0;const t=this.lane,e=Oa[this.kind],n=t.evolve();(r=(s=this.ctx).onStateChange)==null||r.call(s),n&&(n.getWorldPosition(Re),n.scale.setScalar(.01),this.popPart={obj:n,t:0},this.ctx.fx.impact(Re,Bo.set(0,.3,1).normalize(),["#ffc533","#fff1b8","#f08a20"],1.6,t.evo),this.ctx.fx.ring(Re,Bo,.4,.2,2.2,1,t.evo)),t.gun.rec.sv+=14;for(const a of this.drones)a.alive&&this.burst(a);this.showBanner(`ЭВОЛЮЦИЯ ${this.step+1} ПРОЙДЕНА`,e.name,`${Bh(this.kind)} · тир ${Nn[t.evo].name}<br><small>статы оружия выросли, модули качаются в меню ⬆</small>`,"Круто!","win")}lose(t=!1){var s,r;if(this.state!=="play"&&!(t&&this.state==="in"))return;this.hideBanner(),this.state="lost",this.t=0,Rm(this.lane.save),this.lane.refreshEvo(),(r=(s=this.ctx).onStateChange)==null||r.call(s);for(const a of this.drones)a.alive&&(a.alive=!1,a.gen++,a.leaving=!0);const e=this.lane.evoState(),n=e.wait?`Следующая попытка через ${Math.ceil(e.wait/6e4)} мин · осталось ${e.attempts}`:`Три попытки закончились. Прогресс: 0/${e.required}<br><small>Сбивай мишени, чтобы снова открыть испытание</small>`;this.showBanner(t?"ТЫ СДАЛСЯ":"НЕ УСПЕЛ",`Сбито ${this.killed} из ${this.cfg.count}`,n,"Ок","lose")}leave(){this.state="out",this.hideBanner(),this.reticle.visible=!1,this.el.classList.remove("on")}finish(){var e,n;const t=this.lane;for(const s of this.drones)s.hide();this.popPart&&this.popPart.obj.scale.setScalar(1),this.popPart=null,this.reticle.visible=!1,t.trial=null,t.setRangeVisible(!0),this.homeScene.add(t.model.root,t.cone.mesh),t.gun.scene=this.homeScene,t.gun.fx=this.homeFX,this.fx.clear(),t.gun.reset(),t.model.seatNewMag(),t.sinceShot=0,t.relayout(),this.active=!1,this.state="idle",this.el.classList.add("off"),(n=(e=this.ctx).onDone)==null||n.call(e,t,t.evo>this.step)}updateReticle(t){const e=this.state==="play"||this.state==="in"&&this.z>.9;this.reticle.visible=e;const n=this.lane.gun;this.charge=n.canFire?this.trigger.state(this.lane.stats,this.lane.spread,this.lane.sinceShot,this.lane.spreadAfterShot).charge:0;const s=n.m.muzzleWorld(Qi),r=n.m.boreDir(zo),a=Math.max(1,Re.subVectors(this.aimP,s).length());if(Re.copy(s).addScaledVector(r,a),this.lane.cone.update(t,s,Re,a*Math.tan(this.angle()),!0,this.charge,e,this.lane.evo),!e)return;this.reticle.position.copy(s).addScaledVector(r,a),this.reticle.position.z=ga+.4;const o=this.cam.viewH/14.56;this.reticle.scale.setScalar(o);const l=this.retMat.uniforms;l.uR.value=en(a*Math.tan(this.angle())/o,.1,1.1),l.uColor.value.setRGB(...this.onTarget?[.25,1,.38]:[1,.5,.1]),this.pulse=Math.max(0,this.pulse-t*6),l.uPulse.value=this.pulse,l.uFill.value=n.state==="reload"?n.reloadProgress:this.charge,l.uTime.value=this.t;const c=this.lane.ammoSticks();l.uSticks.value=c.sticks,l.uLeft.value=c.left,l.uReloading.value=n.state==="reload"?1:0}updateHud(t=0){if(!this.active)return;this.dimTop.style.height="0px",this.dimBottom.style.top="100%";const e=[];for(const s of this.drones){if(s.hpUI.el.hidden=!s.alive||!s.root.visible,!s.alive)continue;s.hpUI.tick(t);const r=this.ctx.project(Re.copy(s.pos).add(Kf.set(0,s.r*1.65,0)));e.push({d:s,x:r.x,y:r.y-4})}e.sort((s,r)=>r.y-s.y);const n=[];for(const s of e){const{d:r,x:a,y:o}=s,l=r.hpUI.el.offsetWidth,c=r.hpUI.el.offsetHeight;let h=o,u=a;for(let g=0;g<e.length*2;g++){h-c<58&&(u-=l+8,h=o);const v=n.find(m=>Math.abs(u-m.x)<(l+m.w)/2+4&&h>m.bottom-m.h-5&&h-c<m.bottom+5);if(!v)break;h=v.bottom-v.h-6}r.hpUI.place(u,h);const d=a-u,f=o-h;r.hpLeader.style.height=`${Math.hypot(d,f)}px`,r.hpLeader.style.transform=`rotate(${-Math.atan2(d,f)}rad)`,n.push({x:u,bottom:h,w:l,h:c})}this.timeEl.textContent=`${Math.ceil(this.timeLeft)}`,this.el.classList.toggle("low",this.state==="play"&&this.timeLeft<6),this.goalEl.textContent=`${this.killed}/${this.cfg.count}`}showBanner(t,e,n,s="",r=""){this.bStep.textContent=t,this.bTitle.textContent=e,this.bText.innerHTML=n,this.bBtn.textContent=s,this.bBtn.style.display=s?"":"none",this.banner.className=`evo-banner show ${r}`}hideBanner(){this.banner.classList.remove("show")}}const Ve=16,ln=-7,Pa=-.75;function li(i,t,e,n,s){const r=new ct(new nn(i,t,e,2,Math.min(n,i/2-.001,t/2-.001,e/2-.001)),s);return r.castShadow=!0,r.receiveShadow=!0,r}class jf{constructor(t,e){this.side=e,this.root=new It;const n=new It;n.scale.x=-e,this.root.add(n);const s=li(1,1.7,.95,.14,t.navy);s.position.set(0,-.55,Pa);for(const o of[-1.05,-.05]){const l=li(1.12,.26,1.07,.1,t.orange);l.position.set(0,o,Pa),n.add(l)}this.arm=li(1,.34,.5,.1,t.navy),this.arm.position.set(.5,-.36,Pa+.55),this.platform=new It;const r=li(1,.26,1.7,.08,t.slab);r.position.y=-.13;const a=li(.96,.06,1.5,.03,t.mat);a.position.y=0,this.slab=r,this.mat=a,this.bumper=li(.24,.36,1.78,.1,t.orange),this.bumper.position.y=-.12,this.platform.add(r,a,this.bumper),this.platform.position.z=.55,n.add(s,this.arm,this.platform),this.inward=n}setSpan(t,e){const n=Math.max(.6,e-t);this.slab.scale.x=n,this.mat.scale.x=n-.12,this.slab.position.x=this.mat.position.x=t+n/2,this.bumper.position.x=e,this.arm.scale.x=Math.max(.3,t+.4),this.arm.position.x=this.arm.scale.x/2}}class RS{constructor(t){this.scene=t,t.background=new xt("#0e1a2c"),t.add(new Ya(we.sky,we.ground,1)),this.key=new Ka(we.key,we.keyIntensity),this.key.castShadow=!0,this.key.shadow.mapSize.set(1536,1536),this.key.shadow.intensity=.7,this.key.shadow.radius=3,this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.03,t.add(this.key,this.key.target);const e=sM();this.mats={floor:Et("#8b8f99",{map:vu().clone(),spec:.03,gloss:8,rim:0}),wall:Et("#1d3557",{spec:0,rim:0}),rib:Et("#264670",{spec:.05,rim:0}),ribLight:Et("#2c5080",{spec:.06,rim:0}),girder:Et("#355b83",{spec:.08,gloss:10,rim:.05}),door:Et("#2f5a86",{spec:.06,gloss:10}),doorRib:Et("#3a6a99",{spec:.08,gloss:10}),hazard:Et("#ffffff",{map:e,spec:.08}),column:Et("#ffffff",{map:e.clone(),spec:.1}),navy:Et("#2f4569",{spec:.1,gloss:10,rim:.06}),slab:Et("#4a6186",{spec:.08,gloss:10}),mat:Et("#3a4560",{map:am(),spec:.03,rim:0}),orange:Ee("#e88724"),olive:Ee("#56703a"),oliveLid:Ee("#5c7742"),lampHousing:Et("#16264a",{spec:.1}),lamp:new Tn({color:new xt(1.6,1.45,1.1)}),cream:Et("#efdbbb",{spec:.05}),ring:Et("#5d5b60",{spec:.05}),coral:Et("#f76445",{spec:.05}),yellow:Et("#fbc838",{spec:.05})},this.mats.column.map.wrapS=this.mats.column.map.wrapT=Bs,this.mats.mat.map=this.mats.mat.map.clone(),this.mats.mat.map.repeat.set(3,1),this.static=new It,t.add(this.static),this.lifts=[new jf(this.mats,-1),new jf(this.mats,1)],this.columns=[];for(const n of this.lifts)t.add(n.root);this.halfW=0}build(t,e){if(this.colX=e,Math.abs(t-this.halfW)<.01&&this.static.children.length)return this.placeColumns();this.halfW=t,this.static.traverse(v=>{v.isMesh&&v.geometry.dispose()}),this.static.clear();const n=t*2+12,s=this.mats,r=(v,m,p,_,y,x,D,A=!1)=>{const C=new ct(new _i(v,m,p),D);return C.position.set(_,y,x),C.receiveShadow=!0,C.castShadow=A,this.static.add(C),C};s.floor.map.repeat.set(n/5.2,2),r(n,.6,16,0,-.3,-.5,s.floor),r(.16,.02,9,0,.01,-1.5,s.yellow),r(n,Ve+4,.6,0,(Ve+4)/2-1,ln,s.wall);const a=new _i(.34,Ve-1.2,.22),o=Math.ceil(n/.9),l=new Ih(a,s.rib,o),c=new Ih(a,s.ribLight,o),h=new ne;for(let v=0;v<o;v++){const m=-n/2+v*.9;l.setMatrixAt(v,h.makeTranslation(m,(Ve-1.2)/2+.6,ln+.42)),c.setMatrixAt(v,h.makeTranslation(m+.45,(Ve-1.2)/2+.6,ln+.36))}for(const v of[l,c])v.receiveShadow=!0,this.static.add(v);r(n,.9,.9,0,.45,ln+.7,s.girder),r(n,.7,1.2,0,Ve-.6,ln+.9,s.girder),r(n,.5,.9,0,6.2,ln+.75,s.girder);for(let v=-Math.floor(n/2/7)*7;v<=n/2;v+=7)r(.7,Ve,1.1,v,Ve/2,ln+.85,s.girder);const u=Math.min(14,t*.95),d=11.2;for(const v of[-1,1]){const m=r(u/2-.08,d,.4,v*u/4,d/2,ln+1.1,s.door);m.castShadow=!1;for(let _=1.6;_<d-.4;_+=1.25)r(u/2-.5,.18,.12,v*u/4,_,ln+1.36,s.doorRib);const p=r(.55,d+.6,.7,v*(u/2+.28),(d+.6)/2,ln+1.2,s.hazard);p.material=s.column}const f=r(u,.7,.5,0,.35,ln+1.4,s.hazard);s.hazard.map.repeat.set(u/1.4,1),f.receiveShadow=!0,[[1.5,s.cream],[1.22,s.ring],[.96,s.cream],[.66,s.coral],[.3,s.yellow]].forEach(([v,m],p)=>{const _=new ct(new sn(v,v,.12,48),m);_.rotation.x=Math.PI/2,_.position.set(0,d+2.3,ln+1.25+p*.03),this.static.add(_)});for(let v=-Math.floor(n/2/9)*9+4.5;v<n/2;v+=9)r(2.6,.32,.8,v,Ve-1.7,-2.6,s.lampHousing,!0),r(2.3,.08,.5,v,Ve-1.89,-2.6,s.lamp),r(.06,1.3,.06,v-1,Ve-1,-2.6,s.lampHousing),r(.06,1.3,.06,v+1,Ve-1,-2.6,s.lampHousing);for(const[v,m,p]of[[-u/2-2.6,.55,1],[-u/2-4.1,.55,1],[-u/2-3.3,1.65,1],[u/2+3,.55,1.1]]){const _=li(1.4*p,1.1*p,1.2*p,.12,s.olive);_.position.set(v,m*p,ln+2.2);const y=li(1.5*p,.22*p,1.3*p,.08,s.oliveLid);y.position.set(v,m*p+.6*p,ln+2.2),this.static.add(_,y)}this.columns=[-1,1].map(()=>{const v=li(.6,Ve+2,.6,.12,s.column);v.position.set(0,(Ve+2)/2-.6,Pa);const m=li(1.4,.4,1.4,.12,s.navy);m.position.set(0,.2,Pa);const p=new It;return p.add(v,m),this.static.add(p),p}),s.column.map.rotation=Math.PI/2,s.column.map.repeat.set((Ve+2)/1.2,1),this.key.target.position.set(0,Ve*.4,0),this.key.position.copy(we.keyDir).multiplyScalar(40).add(this.key.target.position);const g=this.key.shadow.camera;g.left=-n/2,g.right=n/2,g.top=Ve,g.bottom=-Ve,g.near=1,g.far=90,g.updateProjectionMatrix(),this.placeColumns()}placeColumns(){this.columns.forEach((t,e)=>t.position.set((e?1:-1)*this.colX,0,0))}groundAt(){return 0}}const Ic=15.6,PS=7.4,Ds=.55,tl=1.35,va=1.6,xa=10.4,Zf=4.2,Jf=70,Qf=18,tp=.6,LS=9,DS=.06,Ho=["#4a4f5e","#2e384e","#ffc533","#e3a93a"],me=(i,t)=>i+Math.random()*(t-i),Ns=We.clamp,IS=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,yr=new b,Ss=new b,ep=new b,Uc=new gn,Nc=new b;class np{constructor(t,e,n,s=1){this.duel=t,this.side=n,this.inst=e,this.stats=as(e),this.stats.damage*=s,this.maxHp=this.hp=nS(this.stats);const r=this.gun=new Sm(t.scene,t.fx,e.weapon,this.stats.magSize),a=r.m;e.evo&&a.setEvo(e.evo,Za[e.weapon]),Aa(a,e.mods||{}),r.reloadDur=this.stats.reload,r.minInterval=1/this.stats.fireRate,r.fxTier=e.evo||0,this.lift=t.arena.lifts[n<0?0:1];const o=a.root;o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(n<0?1:-1,1,1),o.updateMatrixWorld(!0),this.boreY=a.muzzleWorld(yr).y,this.y=n<0?me(va+1,xa-3):me(va+3,xa-1),this.vy=0,this.goalY=this.y,this.wait=me(.3,.8),this.pitch=0,this.aim=new b(-n*6,this.y+1,Ds),this.spread=this.stats.maxSpread,this.spreadAfterShot=this.spread,this.sinceShot=0,this.trigger=new Pm,this.alive=!0,this.pop=null,this.center=new b,this.half=new Z(1,.5)}get m(){return this.gun.m}move(t){if(this.wait>0){if(this.wait-=t,this.wait<=0){let n;do n=me(va,xa);while(Math.abs(n-this.y)<2.2);this.goalY=n}}else Math.abs(this.goalY-this.y)<.08&&(this.wait=me(.1,.8));const e=Ns((this.goalY-this.y)*3,-Zf,Zf);this.vy+=(e-this.vy)*(1-Math.exp(-t*6)),this.y=Ns(this.y+this.vy*t,va,xa)}pose(t,e,n=!1){const s=this.m,r=s.root,a=this.side,o=a<0?-e+tl-s.rest.min.x:e-tl+s.rest.min.x,l=this.y-s.rest.min.y+.08,c=this.aim.x-o,h=this.aim.y-l,u=Math.max(1,Math.hypot(c,h)),d=Math.atan2(h,c),f=Math.asin(Ns(this.boreY/u,-1,1));let g=a<0?d-f:d-Math.PI+f;g=Math.atan2(Math.sin(g),Math.cos(g)),g=Ns(g,-.75,.75),this.pitch=n?g:this.pitch+(g-this.pitch)*(1-Math.exp(-t*14)),r.position.set(o,l,Ds),r.rotation.set(0,0,this.pitch),r.updateMatrixWorld(!0);const v=e-tl+.55,m=s.rest.max.x-s.rest.min.x;this.lift.root.position.set(a*v,this.y,0),this.lift.setSpan(.3,.55+m*.82),Uc.copy(s.rest).applyMatrix4(r.matrixWorld),Uc.getCenter(this.center),Uc.getSize(Nc),this.half.set(Nc.x*.46,Nc.y*.5)}rayHit(t,e,n=1,s=null){const r=this.half.x*n,a=this.half.y*n,o=(t.x-this.center.x)/r,l=(t.y-this.center.y)/a,c=e.x/r,h=e.y/a,u=c*c+h*h,d=2*(o*c+l*h),f=o*o+l*l-1,g=d*d-4*u*f;if(g<0)return-1;const v=(-d-Math.sqrt(g))/(2*u);return v<=0?-1:(s&&s.set(t.x+e.x*v-this.center.x,t.y+e.y*v-this.center.y,0).multiplyScalar(.8),v)}}class US{constructor(t){this.ctx=t,this.scene=new $a,this.arena=new RS(this.scene),this.fx=new Mu(this.scene,{ground:()=>0}),this.active=!1,this.state="idle",this.z=0,this.cone=new wm(this.scene),this.retMat=Au(2.1),this.retMat.depthTest=!1,this.retMat.uniforms.uK.value=.9,this.reticle=new ct(new Je(4.2,4.2),this.retMat),this.reticle.renderOrder=9,this.reticle.visible=!1,this.scene.add(this.reticle),this.ray=new mu,this.plane=new ai(new b(0,0,1),-Ds),this.wrecks=[];const e=n=>document.querySelector(n);this.el=e("#duel"),this.cards=["me","foe"].map(n=>{const s=e(`#duel .du-card.${n}`),r=new bu(s.querySelector(".du-hp"));return{card:s,hp:r,ava:s.querySelector(".ava"),name:s.querySelector(".du-name"),gun:s.querySelector(".du-gun")}}),this.timeEl=e("#duel .du-time"),this.banner=e("#duel .du-banner"),this.bStep=e("#duel .db-step"),this.bTitle=e("#duel .db-title"),this.bText=e("#duel .db-text"),this.bLoot=e("#duel .db-loot"),this.bBtn=e("#duel .db-btn"),this.bBtn.addEventListener("pointerdown",n=>{n.stopPropagation(),this.state==="result"&&this.leave()}),e("#duel .du-leave").addEventListener("pointerdown",n=>{n.stopPropagation(),this.surrender()})}start(t){if(this.active)return;this.opts=t,this.active=!0,this.state="intro",this.t=0,this.z=0,this.result=null,this.fx.clear(),this.relayout(),this.me=new np(this,t.me.inst,-1),this.foe=new np(this,t.foe.inst,1,t.foe.damageScale),this.fighters=[this.me,this.foe],this.timeLeft=gi.time;const e=Ns((t.foe.profile.trophies||0)/1200,0,1);this.bot={react:1.5+2*e,err:1.35-.55*e,tol:1.5-.35*e,spread:1.6-.45*e,rate:.5+.25*e,rest:1.3-.5*e,ph:me(0,6),aimY:this.me.y,hold:!1,burstT:me(.6,1.2)},this.lock=!1;for(const n of this.fighters)n.aim.set(-n.side*4,(va+xa)/2+1,Ds),n.pose(0,this.halfW,!0);this.me.aim.copy(this.foe.center),this.retMat.uniforms.uAmmo.value=Al(t.me.inst.weapon),this.cards.forEach((n,s)=>{const r=s?t.foe:t.me;n.ava.innerHTML=Rs(r.profile.avatar),n.name.textContent=r.profile.name,n.gun.innerHTML=`${rn[r.inst.weapon].name} ${Os(r.inst.evo||0)}`;const a=s?this.foe:this.me;n.hp.set(a.hp,a.maxHp,!0)}),this.hideBanner(),this.el.classList.remove("off","on","fight","low")}relayout(){const t=this.ctx.camera.aspect;this.halfW=Ic/2*t,this.arena.build(this.halfW,this.halfW-tl+.55)}view(t){return this.active?{cx:0,cy:PS,viewH:Ic*(1+(1-IS(this.z))*.08)}:t}pointer(t,e,n){!this.active||this.state!=="intro"&&this.state!=="fight"||(n===!0&&this.me.trigger.press(this.me.stats),n===!1&&this.release())}release(t=!1){this.active&&this.me.trigger.release(t)}surrender(){(this.state==="fight"||this.state==="intro")&&this.ko(this.me,!0)}update(t){if(!this.active)return;if(this.t+=t,this.state==="out"){if(this.z=Math.max(0,this.z-t/.5),this.z<=0)return this.finish()}else this.z=Math.min(1,this.z+t/.7);this.state==="intro"&&this.intro(),this.state==="fight"&&(this.timeLeft-=t,this.timeLeft<=0&&(this.timeLeft=0,this.ko(this.me.hp/this.me.maxHp<=this.foe.hp/this.foe.maxHp?this.me:this.foe))),this.state==="ko"&&this.t>1.8&&this.showResult();const e=this.state==="fight";for(const n of this.fighters){if(!n.alive)continue;this.state!=="result"&&this.state!=="out"&&n.move(t);const s=n.stats;n.spread=Math.max(s.minSpread,n.spread-(s.maxSpread-s.minSpread)/s.convergence*t),n.sinceShot+=t,n.trigger.update(t,n.gun.canFire)}this.me.alive&&this.aimPlayer(t),this.foe.alive&&this.aimBot(t);for(const n of this.fighters){if(!n.alive)continue;n.pose(t,this.halfW);const s=1-Ns((n.spread-n.stats.minSpread)/(n.stats.maxSpread-n.stats.minSpread),0,1);n.gun.update(t,s),e&&this.trigger(n,n===this.me?this.foe:this.me),n.pop&&(n.pop.t-=t)<=0&&this.flushPop(n)}for(const n of this.wrecks)n.t-=t,n.t>0&&Math.random()<t*14&&this.fx.puff(n.obj.position,yr.set(me(-.3,.3),me(1.2,2.2),0),me(.35,.6),me(.9,1.4),"dark",1.5,.55);this.updateReticle(t),this.fx.update(t)}intro(){const t=this.t;t>.2&&!this.el.classList.contains("on")&&this.el.classList.add("on");const e=3-Math.floor((t-.6)/.75);if(t>.6&&e>=1&&this.shownCount!==e&&(this.shownCount=e,this.showBanner("",`${e}`,"","","count")),t>.6+3*.75){this.state="fight";for(const n of this.fighters)n.sinceShot=1/n.stats.fireRate;this.shownCount=0,this.el.classList.add("fight"),this.showBanner("","БОЙ!","","","count"),this.bannerOff=this.t+.6}}aimPlayer(t){const e=this.foe;this.lock=this.state==="fight"&&e.alive,e.alive&&this.me.aim.lerp(e.center,1-Math.exp(-t*LS)),this.me.aim.z=Ds}aimBot(t){const e=this.bot,n=this.me;e.aimY+=(n.center.y-e.aimY)*(1-Math.exp(-t*e.react));const s=e.err*(Math.sin(this.t*1.9+e.ph)*.7+Math.sin(this.t*4.3+e.ph*2)*.3);this.foe.aim.set(n.center.x,e.aimY+s,Ds),e.burstT-=t,e.burstT<=0&&(e.hold=!e.hold,e.burstT=e.hold?me(.35,.8):me(.8,1.6)*e.rest),this.foe.trigger.held=e.hold}trigger(t,e){if(!t.gun.canFire||!e.alive){t.onTarget=!1;return}const s=t.m.muzzleWorld(yr),r=t.m.boreDir(ep);t.onTarget=e.rayHit(s,r,t===this.foe?this.bot.tol:1)>0;const a=t.stats,o=t.trigger.state(a,t.spread,t.sinceShot,t.spreadAfterShot);(!o.manual||t===this.foe)&&!t.onTarget||o.ready&&(t===this.foe&&o.manual&&t.sinceShot<o.interval/this.bot.rate||(t.sinceShot=t.trigger.consume(t.sinceShot,o),this.shoot(t,e)))}shoot(t,e){var c,h;const n=this.fx,s=t.stats,{pos:r,dir:a}=t.gun.fire(),o=t.spread/Qf*tp*(t===this.foe?this.bot.spread:1);t.spread=Math.min(s.maxSpread,t.spread+s.bloom),t.spreadAfterShot=t.spread,t===this.me&&(this.pulse=1,this.cone.kick(),(h=(c=this.ctx).onShot)==null||h.call(c));const l=t.inst.evo||0;for(let u=0;u<s.pellets;u++){const d=(Math.random()*2-1)*o*Math.sqrt(Math.random()),f=Math.cos(d),g=Math.sin(d),v=new b(a.x*f-a.y*g,a.x*g+a.y*f,0).normalize(),m=new b;if(e.rayHit(r,v,1,m)>0){const p=new b,_=y=>e.alive?y.copy(p.copy(e.center).add(m)):y.copy(p);_(p),n.fireBullet(r,_,y=>this.hit(t,e,y),Jf,t.gun.spec.pellet,l,t.gun.spec.ammo)}else{let _=(-t.side*(this.halfW+2)-r.x)/(v.x||1e-4);v.y<-.001&&(_=Math.min(_,-r.y/v.y)),v.y>.001&&(_=Math.min(_,(15-r.y)/v.y));const y=r.clone().addScaledVector(v,Math.max(1,_)),x=y.y<.05;n.fireBullet(r,D=>D.copy(y),x?D=>n.impact(D,Ss.set(0,1,.2).normalize(),["#8b8f99","#6f767d"],.5,l):null,Jf,t.gun.spec.pellet,l,t.gun.spec.ammo)}}}hit(t,e,n){const s=this.fx,r=Ss.set(-e.side*.8,.2,.6).normalize();if(s.impact(n,r,Ho,.6*t.gun.spec.impact+.35,t.inst.evo||0),!e.alive||this.state!=="fight")return;const a=t.stats.damage;e.hp=Math.max(0,e.hp-a),e.gun.rec.av+=me(1.5,3),e.gun.rec.sv+=4,this.cards[e===this.me?0:1].hp.set(e.hp,e.maxHp),e.pop??(e.pop={t:DS,dmg:0,pos:n.clone()}),e.pop.dmg+=a,e.hp<=0&&this.ko(e)}flushPop(t){const e=t.pop;t.pop=null;const n=this.ctx.project(e.pos);this.ctx.hud.popup(n.x,n.y-14,`-${Pe(e.dmg)}`,t===this.me?"miss":"z3")}ko(t,e=!1){var c,h;if(this.state!=="fight"&&this.state!=="intro")return;this.state="ko",this.t=0,this.lock=!1,this.el.classList.remove("fight"),this.hideBanner();const n=this.fx;t.alive=!1,t.hp=0,this.cards[t===this.me?0:1].hp.set(0,t.maxHp),t.pop&&this.flushPop(t);const s=t.center.clone(),r=Ss.set(0,.2,1).normalize(),a=(t===this.me?this.foe:this.me).inst.evo||0;n.impact(s,r,[...Ho,"#ff7a45"],3.2,a),n.ring(s,r,.45,.4,3.6,1,a);for(let u=0;u<8;u++)n.puff(s,yr.set(me(-2,2),me(0,2.5),me(-.5,.8)),me(.35,.6),me(.9,1.5),u%3?"dark":"grey",2.5,.8);const o=t.m.root,l=t===this.foe;if(l){o.visible=!1;for(let u=0;u<28;u++)n.crumb(s,yr.set(me(-1,1),me(.2,1.4),me(-.3,.9)).normalize(),Ho[u%Ho.length],1.6);n.ring(s,r,.35,.3,2.4,1,a)}else n.drop(o,new b(-t.side*me(1,3),me(4,7),me(.5,1.5)),new b(me(-3,3),me(-2,2),-t.side*me(5,9)),.45,null).life=60,this.wrecks.push({obj:o,t:3});this.result={won:l,forfeit:e,coins:l?this.opts.coins:0,parts:l?Lu(this.foe.inst):0,from:l?this.ctx.project(s):null},(h=(c=this.ctx).onResult)==null||h.call(c,this.result)}showResult(){this.state="result";const t=this.result;if(t.won){this.bLoot.innerHTML=`<div class="parts-loot"><i class="gear-s">${dl}</i><b>+0</b></div>`,this.showBanner("ПОБЕДА",`+$${Pe(t.coins)} · 🏆 +${gi.trophyWin}`,`Оружие соперника разобрано на детали: +${t.parts}`,"Забрать","win");const e=this.bLoot.querySelector(".parts-loot"),n=e.querySelector("b"),s=Math.min(12,Math.max(4,t.parts));this.ctx.hud.flyParts(t.from.x,t.from.y,s,e,r=>{n.textContent=`+${Math.round(t.parts*(r+1)/s)}`,e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")})}else this.bLoot.innerHTML="",this.showBanner(t.forfeit?"ТЫ СДАЛСЯ":"ПОРАЖЕНИЕ",`🏆 −${gi.trophyLoss}`,"Прокачай оружие в тире и возвращайся","Ок","lose")}leave(){this.state="out",this.hideBanner(),this.reticle.visible=!1,this.el.classList.remove("on","fight")}finish(){var t,e;for(const n of this.fighters)this.scene.remove(n.m.root),n.m.root.traverse(s=>s.geometry&&s.geometry.type!=="LatheGeometry"&&s.geometry.dispose());this.fx.clear(),this.wrecks.length=0,this.fighters=[],this.active=!1,this.state="idle",this.el.classList.add("off"),(e=(t=this.ctx).onDone)==null||e.call(t,this.result)}updateReticle(t){const e=this.me,n=e.alive&&(this.state==="fight"||this.state==="intro"&&this.z>.9);this.reticle.visible=n;const s=e.m.muzzleWorld(yr),r=e.m.boreDir(ep),a=Math.max(1,Ss.subVectors(e.aim,s).length()),o=e.spread/Qf*tp,l=e.trigger.state(e.stats,e.spread,e.sinceShot,e.spreadAfterShot).charge;if(Ss.copy(s).addScaledVector(r,a),this.cone.update(t,s,Ss,a*Math.tan(o),!0,e.gun.canFire?l:0,n,e.inst.evo||0),this.bannerOff&&this.t>this.bannerOff&&(this.bannerOff=0,this.hideBanner()),!n)return;this.reticle.position.copy(Ss),this.reticle.position.z=Ds+.4,this.reticle.scale.setScalar(Ic/14.56);const c=this.retMat.uniforms;c.uR.value=Ns(a*Math.tan(o)/this.reticle.scale.x,.1,1.1),c.uColor.value.setRGB(...e.onTarget?[.25,1,.38]:[1,.5,.1]),this.pulse=Math.max(0,(this.pulse||0)-t*6),c.uPulse.value=this.pulse,c.uFill.value=e.gun.state==="reload"?e.gun.reloadProgress:e.gun.canFire?l:0,c.uTime.value=this.t;const h=e.gun,u=Math.min(h.magSize,24),d=h.state==="reload"&&h.spec.reload==="mag"?h.reloadProgress:h.ammo/h.magSize;c.uSticks.value=u,c.uLeft.value=Math.ceil(d*u-1e-6),c.uReloading.value=h.state==="reload"?1:0}updateHud(t){if(this.active){for(const e of this.cards)e.hp.tick(t);this.timeEl.textContent=`${Math.ceil(this.timeLeft)}`,this.el.classList.toggle("low",this.state==="fight"&&this.timeLeft<10)}}showBanner(t,e,n,s="",r=""){this.bStep.textContent=t,this.bTitle.textContent=e,this.bText.innerHTML=n,this.bBtn.textContent=s,r!=="win"&&(this.bLoot.innerHTML=""),this.banner.className=`du-banner show ${r}`}hideBanner(){this.banner.classList.remove("show")}}const NS=i=>document.querySelector(i),Fc=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),FS=i=>Object.values(i.levels||{}).reduce((t,e)=>t+e,0);class kS{constructor(t){this.ctx=t,this.el=NS("#modal"),this.card=this.el.querySelector(".m-card"),this.title=this.el.querySelector(".m-title"),this.body=this.el.querySelector(".m-body"),this.tabs=this.el.querySelector(".dock-tabs"),this.tabs.addEventListener("click",n=>{const s=n.target.closest("[data-act]");s&&!s.disabled&&this.act(s.dataset.act,s.dataset)}),this.view=null,this.timers=[];const e=n=>{n.stopPropagation(),this.view!=="search"&&this.close()};this.el.querySelector(".m-close").addEventListener("click",e),this.el.querySelector(".m-backdrop").addEventListener("click",e),this.body.addEventListener("click",n=>{n.stopPropagation();const s=n.target.closest("[data-act]");s&&!s.disabled&&this.act(s.dataset.act,s.dataset)}),this.body.addEventListener("input",n=>{n.target.classList.contains("pr-name")&&this.rename(n.target.value)})}get open(){return!!this.view}show(t,e){this.view=t,this.title.innerHTML=e,this.el.classList.add("open"),this.el.dataset.view=t,this.el.inert=!1,this.tabs.innerHTML=""}close(){var t,e;for(const n of this.timers)clearTimeout(n);this.timers=[],this.view==="profile"&&this.ctx.actions.profileChanged(),this.view=null,this.el.classList.remove("open"),this.el.inert=!0,(e=(t=document.activeElement)==null?void 0:t.blur)==null||e.call(t)}refresh(){this.view==="arsenal"?this.renderArsenal():this.view==="lobby"&&this.renderLobby()}owned(){const{state:t,lanes:e}=this.ctx,n=[];for(const s of e)s.armed&&n.push({inst:s.instance(),src:{lane:s.i},where:`Дорожка ${s.i+1}`});return t.storage.forEach((s,r)=>n.push({inst:s,src:{store:r},where:"Склад"})),n.sort((s,r)=>("lane"in r.src)-("lane"in s.src)||("lane"in s.src?s.src.lane-r.src.lane:r.src.store-s.src.store)),n}srcAttr(t){return"lane"in t?`data-lane="${t.lane}"`:`data-store="${t.store}"`}srcOf(t){return t.lane!=null?{lane:+t.lane}:{store:+t.store}}weaponCard(t,e="",n=""){const s=Nn[Math.min(t.evo||0,Nn.length-1)],r=this.ctx.thumb(t),a=as(t);return`<div class="w-card ${n}" style="--rc:${s.color}">
      <div class="w-thumb">${r?`<img alt="" src="${r}">`:""}</div>
      <div class="w-name"><span>${rn[t.weapon].name}</span>${Os(t.evo||0)}</div>
      <div class="w-meta">⚔ ${Pe(os(a))} урона/с · прокачек ${FS(t)}</div>${e}</div>`}openProfile(){this.show("profile","Профиль"),this.renderProfile()}renderProfile(){this.tabs.innerHTML='<span class="dock-tab on">Профиль</span>';const t=this.ctx.state.profile;this.body.innerHTML=`<div class="pr-top"><span class="ava">${Rs(t.avatar)}</span>
      <div class="pr-fields"><label for="pr-name">Ник — его видят соперники в дуэлях</label>
        <input id="pr-name" class="pr-name" maxlength="${gm}" value="${Fc(t.name)}" autocomplete="off" spellcheck="false">
        <div class="pr-stats"><span>🏆 ${t.trophies||0}</span><span>Победы ${t.wins||0}</span><span>Поражения ${t.losses||0}</span></div></div></div>
      <div class="p-sec">Аватар</div>
      <div class="ava-grid">${Ir.map((e,n)=>`<button class="ava-pick ${n===t.avatar?"on":""}" data-act="avatar" data-i="${n}">${Rs(n)}</button>`).join("")}</div>`}rename(t){const e=zM(t);e&&(this.ctx.state.profile.name=e,this.ctx.actions.profileChanged())}openArsenal(t="mine",e=null){this.tab=t,this.forLane=e,this.confirm=null,this.picking=null,this.show("arsenal","Арсенал"),this.renderArsenal()}renderArsenal(){const{state:t,lanes:e}=this.ctx,n=`<span class="m-note">${Zo(t.parts)} деталей</span>`;if(this.tabs.innerHTML=`<button class="dock-tab ${this.tab==="mine"?"on":""}" role="tab" aria-selected="${this.tab==="mine"}" data-act="tab" data-tab="mine">Моё оружие</button>
      <button class="dock-tab ${this.tab==="shop"?"on":""}" role="tab" aria-selected="${this.tab==="shop"}" data-act="tab" data-tab="shop">Магазин за детали</button>`,this.picking){const c=e.filter(h=>h.unlocked).map(h=>`<div class="p-row"><div class="p-ic">${h.i+1}</div>
        <div class="p-info"><div class="p-name">Дорожка ${h.i+1}</div><div class="p-val">${h.armed?`${rn[h.def.weapon].name} уйдёт на склад`:"пустая"}</div></div>
        <button class="m-btn gold" data-act="put" data-to="${h.i}" ${this.srcAttr(this.picking)}>Сюда</button></div>`).join("");this.body.innerHTML=`<div class="p-sec">Куда поставить<small>${rn[this.instOf(this.picking).weapon].name}</small></div>${c}
        <div class="p-foot"><button class="m-btn" data-act="unpick">Назад</button></div>`;return}if(this.tab==="shop"){const c=this.ctx.unlockedTypes(),h=yM.filter(u=>c.includes(u)).map(u=>{const d=Im(u);return this.weaponCard({weapon:u,evo:0,levels:{},mods:{}},`<div class="w-acts"><button class="m-btn gold ${t.parts>=d?"":"locked"}" data-act="buy" data-w="${u}" ${t.parts>=d?"":"disabled"}>Купить ${Zo(d)}</button></div>`)}).join("");this.body.innerHTML=`${n}<div class="w-grid">${h}</div><div class="m-note">Копии стволов, которые уже выдал цех; купленное попадает на склад. Новые стволы приходят с линиями цеха и боссом. Детали дают пресс после Сортировщика, поставки, каталог и разборка.</div>`;return}const s=this.owned(),r=s.length<=1,a=this.forLane!=null?e[this.forLane]:null,o=s.map(({inst:c,src:h,where:u})=>{const d="lane"in h?`l${h.lane}`:`s${c.id}`,f=a&&"lane"in h&&h.lane===a.i,g=[];a&&!f?g.push(`<button class="m-btn gold" data-act="put" data-to="${a.i}" ${this.srcAttr(h)}>Поставить сюда</button>`):!a&&"store"in h?g.push(`<button class="m-btn gold" data-act="pick" ${this.srcAttr(h)}>Поставить</button>`):"lane"in h&&g.push(`<button class="m-btn" data-act="unequip" data-lane="${h.lane}">На склад</button>`);const v=Lu(c),m=this.confirm===d;return g.push(`<button class="m-btn ${m?"red":""}" data-act="scrap" data-key="${d}" ${this.srcAttr(h)} ${r?'disabled title="Последнее оружие нельзя разобрать"':""}>${m?"Точно? ":"Разобрать "}+${Zo(v)}</button>`),this.weaponCard(c,`<span class="w-where">${f?"Стоит здесь":u}</span><div class="w-acts">${g.join("")}</div>`,f?"sel":"")}).join(""),l=a?`<div class="p-sec">Дорожка ${a.i+1}<small>${a.armed?"выбери оружие на замену — текущее уйдёт на его место":"выбери, что поставить на пустую дорожку"}</small></div>`:"";this.body.innerHTML=`${n}${l}<div class="w-grid">${o}</div>
      <div class="m-note">Разборка уничтожает оружие и даёт детали: больше за тир, прокачки и модули. За детали покупается новое оружие.</div>`}instOf(t){return"lane"in t?this.ctx.lanes[t.lane].instance():this.ctx.state.storage[t.store]}openDuel(){const t=this.owned();if(!this.pickKey||!t.some(e=>e.inst.id===this.pickKey)){const e=t.reduce((n,s)=>!n||os(as(s.inst))>os(as(n.inst))?s:n,null);this.pickKey=(e==null?void 0:e.inst.id)??null}this.show("lobby","Дуэль"),this.renderLobby()}renderLobby(){this.el.dataset.view="lobby",this.tabs.innerHTML='<span class="dock-tab on">Дуэль</span>';const t=this.ctx.state.profile,n=this.owned().map(({inst:s,where:r})=>`<div class="w-card ${s.id===this.pickKey?"sel":""}" data-act="duelpick" data-id="${s.id}" style="--rc:${Nn[s.evo||0].color}">
        <div class="w-thumb">${this.ctx.thumb(s)?`<img alt="" src="${this.ctx.thumb(s)}">`:""}</div>
        <div class="w-name"><span>${rn[s.weapon].name}</span>${Os(s.evo||0)}</div>
        <div class="w-meta">⚔ ${Pe(os(as(s)))}/с · ${r}</div></div>`).join("");this.body.innerHTML=`<div class="lb-vs">${this.playerCard(t)}<div class="lb-x">VS</div>
        <div class="lb-card"><span class="ava"><span class="ava-face" style="background:#33436a">?</span></span><b>Соперник</b><small>подбор по силе оружия</small></div></div>
      <div class="p-sec">Чем воюешь<small>оружие не теряется при поражении</small></div>
      <div class="lb-pick">${n||'<div class="m-note">Нет оружия — купи его за детали в арсенале</div>'}</div>
      <div class="m-note">Прицел наводится на соперника сам. Тап / удержание — быстрый огонь; отпусти — автоогонь со сведением.
        Победа: монеты, 🏆 +${gi.trophyWin} и детали — оружие соперника разлетается на запчасти.</div>
      <div class="p-foot"><button class="m-btn gold big" data-act="search" ${this.pickKey?"":"disabled"}>В бой!</button></div>`}playerCard(t){return`<div class="lb-card"><span class="ava">${Rs(t.avatar)}</span><b>${Fc(t.name)}</b><small>🏆 ${t.trophies||0}</small></div>`}search(){const t=this.owned().find(v=>v.inst.id===this.pickKey);if(!t)return;const{state:e,lanes:n}=this.ctx,s=JSON.parse(JSON.stringify(t.inst)),r=this.ctx.unlockedTypes(),a=Math.max(0,...r.map(v=>Qo.indexOf(v))),o=BM(e.profile),l=rS(s,a,Um(e.profile),Math.random,r),c=l.inst;this.view="search",this.el.dataset.view="search";const h=performance.now();this.body.innerHTML=`<div class="lb-vs">${this.playerCard(e.profile)}<div class="lb-x">VS</div>
        <div class="lb-card searching"><span class="ava"></span><b>???</b><small class="lb-timer">0:00</small></div></div>
      <div class="lb-status">Поиск соперника<span class="dots"></span></div>
      <div class="p-foot"><button class="m-btn" data-act="cancel">Отмена</button></div>`;const u=this.body.querySelector(".searching .ava"),d=this.body.querySelector(".lb-timer");let f=0;const g=()=>{if(this.view!=="search")return;u.innerHTML=Rs(f++%Ir.length);const v=Math.floor((performance.now()-h)/1e3);d.textContent=`0:${String(v).padStart(2,"0")}`,this.timers.push(setTimeout(g,120))};g(),this.timers.push(setTimeout(()=>{if(this.view!=="search")return;this.view="found";const v=Nn[c.evo||0];this.body.innerHTML=`<div class="lb-vs">${this.playerCard(e.profile)}<div class="lb-x">VS</div>
          <div class="lb-card" style="border-color:${v.color}"><span class="ava">${Rs(o.avatar)}</span><b>${Fc(o.name)}</b><small>🏆 ${o.trophies}</small>
          <div class="w-thumb">${this.ctx.thumb(c)?`<img alt="" src="${this.ctx.thumb(c)}">`:""}</div>
          <small>${rn[c.weapon].name} ${Os(c.evo||0)}</small></div></div>
        <div class="lb-status">${l.kind==="challenge"?"Сильный соперник!":"Соперник найден!"}</div>`,this.timers.push(setTimeout(()=>{this.view==="found"&&(this.close(),this.ctx.actions.startDuel(s,o,c,l))},1500))},1600+Math.random()*1800))}act(t,e){const{state:n,actions:s}=this.ctx;switch(t){case"avatar":n.profile.avatar=+e.i,s.profileChanged(),this.renderProfile();break;case"tab":this.tab=e.tab,this.confirm=null,this.renderArsenal();break;case"pick":this.picking=this.srcOf(e),this.renderArsenal();break;case"unpick":this.picking=null,this.renderArsenal();break;case"put":s.move(this.srcOf(e),+e.to),this.picking=null,this.forLane!=null?this.close():this.renderArsenal();break;case"unequip":s.unequip(+e.lane),this.renderArsenal();break;case"scrap":this.confirm!==e.key?this.confirm=e.key:(this.confirm=null,s.scrap(this.srcOf(e))),this.renderArsenal();break;case"buy":s.buyWeapon(e.w),this.renderArsenal();break;case"duelpick":this.pickKey=e.id,this.renderLobby();break;case"search":this.search();break;case"cancel":for(const r of this.timers)clearTimeout(r);this.timers=[],this.view="lobby",this.renderLobby();break}}}const qn=256,Ln=128,Mn=2;let Dn=null,ws=null,kc=null;const ts=new Wa(-1,1,1,-1,.1,100),Oc=new Map,zc=new b,da=new b,Bc=new gn;function OS(i){Dn=i}const el=new Uint8Array(256);for(let i=0;i<256;i++){const t=i/255;el[i]=Math.round(255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055))}function zS(i){if(!Dn)return null;const t=`${i.weapon}|${i.evo||0}|${JSON.stringify(i.mods||{})}`;if(Oc.has(t))return Oc.get(t);if(!ws){ws=new $a,ws.add(new Ya(we.sky,we.ground,1));const v=new Ka(we.key,we.keyIntensity);v.position.copy(we.keyDir).multiplyScalar(20),ws.add(v),kc=new pn(qn*Mn,Ln*Mn)}const e=new Tu[i.weapon];i.evo&&e.setEvo(i.evo,Za[i.weapon]),Aa(e,i.mods||{}),e.root.rotation.set(-.08,-.22,0),e.root.updateMatrixWorld(!0),e.measure(),ws.add(e.root),Bc.copy(e.rest).applyMatrix4(e.root.matrixWorld),Bc.getSize(zc),Bc.getCenter(da);const n=Math.max(zc.x/2/(qn/Ln),zc.y/2)*1.08;ts.left=-n*(qn/Ln),ts.right=n*(qn/Ln),ts.top=n,ts.bottom=-n,ts.position.set(da.x,da.y,30),ts.lookAt(da.x,da.y,0),ts.updateProjectionMatrix();const s=Dn.getRenderTarget(),r=Dn.getClearColor(new xt),a=Dn.getClearAlpha();Dn.setRenderTarget(kc),Dn.setClearColor(0,0),Dn.clear(),Dn.render(ws,ts);const o=new Uint8Array(qn*Mn*Ln*Mn*4);Dn.readRenderTargetPixels(kc,0,0,qn*Mn,Ln*Mn,o),Dn.setRenderTarget(s),Dn.setClearColor(r,a),ws.remove(e.root),e.root.traverse(v=>v.geometry&&v.geometry.type!=="LatheGeometry"&&v.geometry.dispose());const l=document.createElement("canvas");l.width=qn*Mn,l.height=Ln*Mn;const c=l.getContext("2d"),h=c.createImageData(qn*Mn,Ln*Mn),u=qn*Mn*4;for(let v=0;v<Ln*Mn;v++){const m=(Ln*Mn-1-v)*u,p=v*u;for(let _=0;_<u;_+=4){const y=o[m+_+3],x=y?255/y:0;h.data[p+_]=el[Math.min(255,Math.round(o[m+_]*x))],h.data[p+_+1]=el[Math.min(255,Math.round(o[m+_+1]*x))],h.data[p+_+2]=el[Math.min(255,Math.round(o[m+_+2]*x))],h.data[p+_+3]=y}}c.putImageData(h,0,0);const d=document.createElement("canvas");d.width=qn,d.height=Ln;const f=d.getContext("2d");f.imageSmoothingQuality="high",f.drawImage(l,0,0,qn,Ln);const g=d.toDataURL("image/png");return Oc.set(t,g),g}function BS({lanes:i,fx:t,draw:e,select:n}){const s={paused:!0,speed:.25,frame:0,lane:i[0]};for(const c of i)c.review=!0;const r=document.createElement("div");r.className="fx-review",r.innerHTML=`<label>Кадры выстрела <select aria-label="Оружие">${i.map((c,h)=>`<option value="${h}">${c.weapon.name}</option>`).join("")}</select></label>
    <button data-action="shot">Выстрел</button><button data-action="play">▶ ¼ скорости</button><button data-action="step">Кадр +1</button><output>0 мс</output>`,document.body.append(r);const a=r.querySelector("output"),o=r.querySelector('[data-action="play"]');s.tick=c=>{s.frame+=c*60,a.value=`${Math.round(s.frame)} к · ${Math.round(s.frame/60*1e3)} мс`};const l=()=>{s.paused=!0,o.textContent="▶ ¼ скорости"};return r.querySelector("select").addEventListener("change",c=>{s.lane=i[+c.target.value],l(),n(s.lane),e(0)}),r.addEventListener("click",c=>{const h=c.target.dataset.action;if(h==="shot"){l(),t.clear();const u=s.lane;u.gun.reset(),u.model.seatNewMag();for(const d of Object.keys(u.gun.rec))u.gun.rec[d]=0;u.resetReview(),u.update(0),u.spread=u.stats.minSpread,u.sinceShot=0,e(0),u.shoot(),s.frame=0,e(0)}else h==="step"?(l(),e(1/60)):h==="play"&&(s.paused=!s.paused,o.textContent=s.paused?"▶ ¼ скорости":"Ⅱ Пауза")}),n(s.lane),s}const Es=i=>document.getElementById(i),HS=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function VS(){return{id:Jt.id,fired:0,delivery:is.every,deliveries:0,burst:0,order:null,orderWait:_r.pause,rush:!1,boss:null,done:!1,modules:{},story:{},playT:0,rare:{},gold:{},sets:{},partsCrushed:0,frenzy:0,frenzyT:0}}class GS{constructor(t){this.ctx=t,this.s=t.state.ws,this.gpm=0,this.chip=Es("ws-chip"),this.chipName=this.chip.querySelector(".ws-name"),this.chipStars=this.chip.querySelector(".ws-stars b"),this.chipFill=this.chip.querySelector(".ws-fill"),this.chipNext=this.chip.querySelector(".ws-next"),this.deliveryEl=Es("ws-delivery"),this.orderEl=Es("ws-order"),this.toasts=Es("toasts"),this.banner=Es("ws-banner"),this.banner.querySelector(".wb-btn").addEventListener("click",e=>{e.stopPropagation(),this.banner.classList.remove("show")}),this.chipName.textContent=Jt.name,this.frenzyEl=Es("frenzy"),this.frenzyFill=this.frenzyEl.querySelector(".fz-bar i"),this.frenzyBtn=this.frenzyEl.querySelector(".fz-btn"),this.frenzyTime=this.frenzyEl.querySelector(".fz-time"),this.frenzyBtn.addEventListener("pointerdown",e=>{e.stopPropagation(),this.startFrenzy()}),this.hudEl=Es("hud"),this.earnedWindow=0,this.shown=""}get stars(){return Db(this.ctx.lanes.filter(t=>t.unlocked).map(t=>t.save.line))}get rush(){return this.s.rush&&!this.s.done}get frenzyOn(){return this.s.frenzyT>0}startFrenzy(){const t=this.s;t.frenzyT>0||t.frenzy<ns.need||(t.frenzy=0,t.frenzyT=ns.seconds,this.showBanner("ЯРОСТЬ",`${ns.seconds} секунд`,"Все пушки бьют на полном темпе, разброс почти не растёт","rush","В бой!"),clearTimeout(this.bannerT),this.bannerT=setTimeout(()=>this.banner.classList.remove("show"),1400))}module(t){return this.s.modules[t]??-1}raiseModule(t){this.module(t)<0||this.s.modules[t]++}incomeMul(){return this.firedGate("magnet")?Jt.machines.magnet.income:1}pressShare(){return this.firedGate("sorter")?bc.sorted:bc.share}firedGate(t){const e=Jt.gates.findIndex(n=>n.id===t||n.kind===t);return e>=0&&e<this.s.fired}gateOf(t){var e;return((e=Jt.gates.find(n=>n.kind==="line"&&n.line===t))==null?void 0:e.at)??0}flow(t){let e=1;this.rush&&(e*=Jt.rush.flow),this.s.burst>0&&(e*=is.flow);const n=this.s.boss&&!this.s.boss.dead&&t.i===Jt.boss.line;return{flowMul:e,spawn:!n}}earned(t){this.earnedWindow+=t}crate(t){return Math.max(10,this.gpm*t)}onKill(t,e){const n=this.s;if(n.frenzyT<=0&&(n.frenzy=Math.min(ns.need,n.frenzy+1)),n.story.firstKill||(n.story.firstKill=!0,this.toast("🦆","Первая добыча!","Утка лопнула — монеты твои")),e.variant&&e.kind===t.line.junk){const s=t.i;e.variant==="rare"?n.rare[s]=(n.rare[s]||0)+1:n.gold[s]=(n.gold[s]||0)+1,e.variant==="golden"&&!n.story.goldKill&&(n.story.goldKill=!0,this.toast("✨","Золотая утка!","Награда ×10 и запись в каталог")),this.checkCatalog(t)}if(n.order&&n.order.line===t.i&&e.kind===t.line.junk&&n.order.got++,e.kind==="bigteddy"){const s=this.crate(Jt.mini.crate);this.ctx.earn(s,e,`Мини-босс: +$${Pe(s)}`),this.toast("🧸","Мишка-великан разбит!",`Ящик: +$${Pe(s)}`)}e.kind==="pinata"&&this.bossDown(t,e)}onPress(t,e){const n=this.s;n.story.firstPress||(n.story.firstPress=!0,this.toast("🗜️","Пресс","Не успел — не беда: пресс переработает хлам и заплатит 10%")),this.firedGate("sorter")&&e.kind!=="candy"&&(n.partsCrushed++,n.partsCrushed%bc.partsEvery===0&&this.ctx.parts(1))}onStar(t){this.toast("⭐",`Звезда линии «${t.line.short}»`,`★${t.stars} · +20% к её награде`,"star")}checkCatalog(t){const e=this.s,n=t.i,s=t.save.cat||0,r=e.rare[n]||0,a=e.gold[n]||0;(s===0?Ps.set1.rare<=r:s===1&&r>=Ps.set2.rare&&a>=Ps.set2.golden)&&(t.save.cat=s+1,this.ctx.parts(Ps.parts),this.toast("📒",`Каталог: «${t.line.short}» ${s?"золотой экспонат":"собраны"}`,`+30% к награде линии · +${Ps.parts} деталей`,"big"))}update(t){const e=this.s;if(e.playT+=t,e.frenzyT>0&&(e.frenzyT=Math.max(0,e.frenzyT-t)),this.gpm+=(this.earnedWindow*(60/Math.max(t,.001))-this.gpm)*Math.min(1,t/60),this.earnedWindow=0,!e.story.golden&&e.playT>=Jt.story.golden&&this.ctx.lanes[0].armed&&(e.story.golden=!0,this.ctx.lanes[0].conveyor.spawn("duck","golden")),e.delivery-=t,e.burst>0&&(e.burst=Math.max(0,e.burst-t)),e.delivery<=0){e.delivery+=is.every,e.deliveries++,e.burst=is.burst;const s=this.crate(is.crate);this.ctx.earn(s,null,`Поставка №${e.deliveries}: +$${Pe(s)}`),this.ctx.parts(is.parts),this.toast("📦",`Большая поставка №${e.deliveries}`,`Ящик: +$${Pe(s)} · +${is.parts} деталей · хлама ×3 на ${is.burst} с`,"big")}this.updateOrder(t);const n=this.stars;for(;e.fired<Jt.gates.length&&n>=Jt.gates[e.fired].at;){const s=Jt.gates[e.fired];e.fired++,this.fire(s)}e.boss&&!e.boss.dead&&(this.bossJunk||this.spawnBoss(),this.updateBoss(t)),this.render()}updateOrder(t){const e=this.s;if(!e.order){e.orderWait-=t;const s=this.ctx.lanes.filter(o=>o.armed&&o.unlocked);if(e.orderWait>0||!s.length)return;const r=s[Math.floor(Math.random()*s.length)],a=_r.minutes[0]+Math.random()*(_r.minutes[1]-_r.minutes[0]);e.order={line:r.i,need:Math.max(10,Math.round(r.line.flow*a*.5/5)*5),got:0};return}const n=this.ctx.lanes[e.order.line];if(!n.armed){e.order=null,e.orderWait=5;return}if(e.order.got>=e.order.need){const s=this.crate(_r.crate);this.ctx.earn(s,null,`Заказ: +$${Pe(s)}`),this.toast("📋",`Заказ выполнен: ${e.order.need} × «${n.line.short}»`,`Ящик: +$${Pe(s)}`),e.order=null,e.orderWait=_r.pause}}fire(t){var n,s;const e=this.s;if(t.kind==="line"){const r=this.ctx.lanes[t.line];this.ctx.openLine(t.line);const a=rn[r.base.weapon].name,o=r.line.rule?Tm[r.line.rule]:null;o&&((n=e.modules)[s=r.line.rule]??(n[s]=0)),this.showBanner(`ЛИНИЯ ${t.line+1}`,r.line.name,`На линии — ${a}${o?`<br>Новое поведение: <b>${o.name}</b> — ${o.text(0)}`:""}`,"line")}else if(t.kind==="machine"){const r=Jt.machines[t.id];this.toast(r.icon,`Станок: ${r.name}`,r.text,"big")}else if(t.kind==="mini"){const r=this.ctx.lanes[Jt.mini.line].unlocked?this.ctx.lanes[Jt.mini.line]:this.ctx.lanes[0];r.conveyor.spawn(Jt.mini.junk),this.toast("🧸","Мини-босс: Мишка-великан",`Едет по линии «${r.line.short}» — разбей до пресса`,"big")}else t.kind==="rush"?(e.rush=!0,this.showBanner("АВРАЛ",`«${Jt.rush.name}»`,`Хлама ×${Jt.rush.flow} на всех линиях до босса цеха`,"rush")):t.kind==="boss"&&this.startBoss();this.ctx.refresh()}startBoss(){const t=this.s,n=this.ctx.lanes[Jt.boss.line].stats??{damage:10,pellets:1,fireRate:3.5},s=Math.max(400,n.damage*n.pellets*n.fireRate*.6*Jt.boss.seconds);t.boss={hp:s,max:s,dead:!1,drops:0},this.spawnBoss(),this.showBanner("БОСС ЦЕХА",Jt.boss.name,"Висит над линией 1. Тапай по ней — в золотую дверцу крит.<br>Из разбитой пиньяты сыплются конфеты","boss")}spawnBoss(){const t=this.s,n=this.ctx.lanes[Jt.boss.line].conveyor.hang(Jt.boss.junk);n.hp=t.boss.hp,n.maxHp=t.boss.max,this.bossJunk=n}updateBoss(){const t=this.s,e=this.bossJunk;if(!e||e.kind!=="pinata")return;if(!e.alive&&e.state==="gone"&&!t.boss.dead){this.spawnBoss();return}t.boss.hp=e.hp;const n=Math.floor((1-e.hp/e.maxHp)*3);for(;t.boss.drops<Math.min(2,n);)t.boss.drops++,this.spill(e,Jt.boss.candies/2)}spill(t,e){const n=this.ctx.lanes[Jt.boss.line];for(let s=0;s<e;s++)n.conveyor.spawn("candy",null,t.x-1+s*.45,s%3*.3-.3)}bossDown(t,e){const n=this.s;n.boss.dead=!0,n.done=!0,n.rush=!1,this.spill(e,Jt.boss.candies);const s=this.crate(Jt.boss.crate);this.ctx.earn(s,e,`Босс: +$${Pe(s)}`),this.ctx.loot(Jt.boss.loot);const r=e.root.getWorldPosition(new b),a=new b(-.3,.2,1).normalize();for(let o=0;o<4;o++)this.ctx.fx.ring(r,a,.45+o*.12,.4,4+o*1.5,1,o+1);this.showBanner("ЦЕХ ПРОЙДЕН",`${Jt.boss.name} разбита!`,`${rn[Jt.boss.loot].name} — на склад, ставь на любую линию · ящик +$${Pe(s)}<br>Лифт в «${Jt.next}» — в следующем обновлении; линии работают дальше`,"lift","Круто!")}render(){const t=this.s,e=this.stars,n=Jt.gates[t.fired],s=t.fired?Jt.gates[t.fired-1].at:0,r=t.done?"цех пройден":n?`${WS(n)} — ★${n.at}`:"босс цеха",a=n?Math.min(1,(e-s)/Math.max(1,n.at-s)):1,o=t.order,l=o?`${o.got}/${o.need} × ${this.ctx.lanes[o.line].line.short}`:"",c=t.frenzy>=ns.need&&t.frenzyT<=0;this.frenzyFill.style.transform=`scaleX(${t.frenzyT>0?t.frenzyT/ns.seconds:t.frenzy/ns.need})`,this.frenzyEl.classList.toggle("ready",c),this.frenzyEl.classList.toggle("on",t.frenzyT>0),this.hudEl.classList.toggle("frenzy",t.frenzyT>0),this.frenzyTime.textContent=t.frenzyT>0?`${Math.ceil(t.frenzyT)} с`:"";const h=`${e}|${r}|${a.toFixed(3)}|${Math.ceil(t.delivery)}|${l}|${this.rush}|${t.burst>0}`;h!==this.shown&&(this.shown=h,this.chipStars.textContent=e,this.chipFill.style.transform=`scaleX(${a})`,this.chipNext.textContent=r,this.chip.classList.toggle("rush",this.rush),this.deliveryEl.querySelector("b").textContent=t.burst>0?"идёт!":HS(Math.max(0,t.delivery)),this.deliveryEl.classList.toggle("soon",t.delivery<30||t.burst>0),this.orderEl.hidden=!o,o&&(this.orderEl.querySelector("b").textContent=l,this.orderEl.querySelector("i").style.transform=`scaleX(${Math.min(1,o.got/o.need)})`))}toast(t,e,n,s=""){const r=document.createElement("div");for(r.className=`toast ${s}`,r.innerHTML=`<span class="t-ic">${t}</span><span class="t-tx"><b></b><small></small></span>`,r.querySelector("b").textContent=e,r.querySelector("small").textContent=n,this.toasts.prepend(r);this.toasts.children.length>4;)this.toasts.lastElementChild.remove();setTimeout(()=>r.classList.add("out"),s==="star"?1800:3600),setTimeout(()=>r.remove(),s==="star"?2300:4100)}showBanner(t,e,n,s="",r="Ок"){const a=this.banner;a.querySelector(".wb-step").textContent=t,a.querySelector(".wb-title").textContent=e,a.querySelector(".wb-text").innerHTML=n,a.querySelector(".wb-btn").textContent=r,a.className=`show ${s}`,clearTimeout(this.bannerT),this.bannerT=setTimeout(()=>a.classList.remove("show"),6e3)}}function WS(i){return i.kind==="line"?`линия ${i.line+1}`:i.kind==="machine"?Jt.machines[i.id].name:i.kind==="mini"?"мини-босс":i.kind==="rush"?"аврал":"босс цеха"}function $S({state:i,lanes:t,hud:e,busy:n,refresh:s,save:r}){const a=document.createElement("div");a.id="cheats",a.innerHTML=`<button class="ch-toggle" aria-label="Читы">🛠</button>
    <div class="ch-body">
      <b>Монеты</b><div class="ch-row"><button data-cheat="coins" data-n="1000">+1K</button><button data-cheat="coins" data-n="100000">+100K</button><button data-cheat="coinsx">×10</button></div>
      <b>Детали</b><div class="ch-row"><button data-cheat="parts" data-n="50">+50</button><button data-cheat="parts" data-n="1000">+1000</button></div>
      <b>Эволюция</b><div class="ch-row"><button data-cheat="evofill">шкала полная</button><button data-cheat="evoup">+1 без испытания</button></div>
      <b>Линии</b><div class="ch-row"><button data-cheat="star">+★ всем линиям</button></div>
    </div>`,document.getElementById("hud").append(a),a.addEventListener("pointerdown",c=>c.stopPropagation()),a.addEventListener("click",c=>{if(c.stopPropagation(),c.target.closest(".ch-toggle")){a.classList.toggle("open");return}const h=c.target.closest("[data-cheat]");!h||n()||(o(h.dataset.cheat,+h.dataset.n||0),s(),r())});function o(c,h){switch(c){case"coins":case"coinsx":i.money=c==="coins"?i.money+h:Math.max(1e3,i.money*10),e.setMoney(i.money),e.bumpWallet(),e.popup(innerWidth/2,innerHeight*.18,`$${Pe(i.money)}`,"money");break;case"parts":i.parts+=h,e.setParts(i.parts),e.bumpParts();break;case"evofill":for(const u of t)u.armed&&l(u);break;case"evoup":for(const u of t)!u.armed||u.trial||(u.save.evo||0)>=kn.length||(l(u),u.evolve());break;case"star":for(const u of t){if(!u.unlocked)continue;const d=5-u.save.line%5;for(let f=0;f<d;f++)u.applyUpgrade("line")}break}}function l(c){const h=c.save,u=h.evo||0;u>=kn.length||(h.kills=Math.max(h.kills||0,kn[u]+(h.evoKillOffset||0)),h.evoRetryAt=0,h.evoAttempts=0,c.refreshEvo())}}const Du=2.8,Iu=30,XS=3.4,qS=941,Qa=new URLSearchParams(location.search),Uu=Qa.has("fx"),Pl=Qa.has("ref")||Uu,Fm=Qa.has("evo"),fi=document.getElementById("scene"),km=matchMedia("(pointer: coarse)").matches,zn=new sy({canvas:fi,antialias:!1,powerPreference:"high-performance"});zn.setPixelRatio(Math.min(devicePixelRatio,km?1.75:2));zn.shadowMap.enabled=!0;zn.shadowMap.type=cp;zn.toneMapping=ki;const Xs=new $a,On=new wn(Iu,2,.5,200),Gs=new qy(zn,new pn(1,1,{type:pi,samples:4})),Om=new Yy(Xs,On);Gs.addPass(Om);Gs.addPass(new Lr(new Z(256,256),.55,.45,1));Gs.addPass(new Zy);Gs.addPass(new sm({uniforms:{tDiffuse:{value:null},uSat:{value:1.04},uContrast:{value:1.03},uVignette:{value:.24}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uSat, uContrast, uVignette;
      varying vec2 vUv;
      void main() {
        vec4 c = texture2D(tDiffuse, vUv);
        float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
        c.rgb = mix(vec3(l), c.rgb, uSat);
        c.rgb = (c.rgb - 0.5) * uContrast + 0.5;
        vec2 d = vUv - 0.5;
        c.rgb *= 1.0 - uVignette * smoothstep(0.2, 0.75, dot(d, d) * 2.0);
        gl_FragColor = vec4(clamp(c.rgb, 0.0, 1.0), c.a);
      }`}));const Nu=dM(Xs,zn,ja.length,{shadowSize:km?1536:2048});OS(zn);HM(zn);const Fu=i=>zS(i),$r=new Mu(Xs),zm="firerange.v4",YS="firerange.v3",gr=Pl?{money:1240,lanes:[{unlocked:!0},{unlocked:!0},{unlocked:!0}],ws:{fired:3}}:(()=>{try{const i=JSON.parse(localStorage.getItem(zm));if(i)return i;const t=JSON.parse(localStorage.getItem(YS));return t!=null&&t.profile?{profile:t.profile}:{}}catch{return{}}})(),Ut={money:gr.money??0,parts:gr.parts??0,profile:{...OM(),...gr.profile||{}},storage:gr.storage??[],lanes:ja.map((i,t)=>{var e;return{unlocked:t===0,levels:{},kills:0,line:0,batch:0,cat:0,...((e=gr.lanes)==null?void 0:e[t])||{}}}),ws:{...VS(),...gr.ws||{}}};eS(Ut);if(Fm)for(const i of Ut.lanes)i.kills=Math.max(i.kills,kn[Math.min(i.evo||0,kn.length-1)]);if(Uu)for(const i of Ut.lanes)i.unlocked=!0;let Hc=0;function mn(){if(!(Pl||Fm))try{localStorage.setItem(zm,JSON.stringify(Ut))}catch{}}mn();const Ft=new KM({onBuy:p2,onPanelAction:s2,onProfile:()=>Wc("openProfile"),onArsenal:()=>Wc("openArsenal"),onDuel:()=>Wc("openDuel")}),Vc=new b;function Mi(i){return Vc.copy(i).project(On),{x:(Vc.x+1)*.5*innerWidth,y:(1-Vc.y)*.5*innerHeight}}let ge=null;const KS={scene:Xs,fx:$r,hud:Ft,project:Mi,thumb:Fu,onShot:Vm,onHit:r2,onMiss:a2,onKill:o2,onPress:l2,onUpgrade:u2,onUnlock:f2,onEvolve:jS,onEquip:Hm,onStar:i=>ge.onStar(i),flow:i=>ge.flow(i),incomeMul:()=>(ge==null?void 0:ge.incomeMul())??1,module:i=>(ge==null?void 0:ge.module(i))??-1,raiseModule:i=>ge.raiseModule(i),pressShare:()=>ge.pressShare(),gate:i=>(ge==null?void 0:ge.gateOf(i.i))??0,frenzy:()=>(ge==null?void 0:ge.frenzyOn)??!1,onBlast:i=>{i.visible&&(Fn=Math.min(1,Fn+.9))}},Te=ja.map((i,t)=>new mS(t,i,Ut.lanes[t],KS));ge=new GS({state:Ut,lanes:Te,hud:Ft,fx:$r,earn:c2,parts(i){Ut.parts+=i,Ft.setParts(Ut.parts),Ft.bumpParts(),Ha()},openLine(i){Te[i].unlocked||(Te[i].activate(),Nr())},loot(i){Ut.storage.push(Rl(i)),Nr()},refresh:Ha,save:mn});const ip=document.getElementById("hud"),Le=new CS({scene:Xs,fx:$r,hud:Ft,camera:On,project:Mi,onShot:Vm,onStateChange:mn,onStart:()=>{document.getElementById("popups").replaceChildren()},onDone:i=>{mn(),cs()}}),Ie=new US({camera:On,project:Mi,hud:Ft,thumb:Fu,onShot:()=>{Fn=Math.min(1,Fn+.25)},onResult:i=>{const t=Ut.profile;i.won?(t.wins=(t.wins||0)+1,t.trophies=(t.trophies||0)+gi.trophyWin,Ut.money+=i.coins,Ut.parts+=i.parts,Ft.setMoney(Ut.money),Ft.setParts(Ut.parts)):(t.losses=(t.losses||0)+1,t.trophies=Math.max(0,(t.trophies||0)-gi.trophyLoss)),Ft.setProfile(t),mn(),cs()},onDone:()=>{mn(),cs()}});function Bm(){const i=new Set(Te.filter(t=>t.unlocked).map(t=>t.base.weapon));for(const t of Te)t.armed&&i.add(t.def.weapon);for(const t of Ut.storage)i.add(t.weapon);return Ut.ws.done&&i.add("m870"),[...i]}const Hi=new kS({state:Ut,lanes:Te,thumb:Fu,unlockedTypes:Bm,actions:{move:t2,unequip:e2,scrap:n2,buyWeapon:i2,profileChanged:()=>{Ft.setProfile(Ut.profile),mn()},startDuel:JS}}),ni=()=>Le.active||Ie.active;function to(){var i;for(const t of Ws.values())(i=t.lane)==null||i.release();Ws.clear()}function jS(i){ni()||(Ft.closePanel(),Hi.close(),Ft.hideHint(),to(),Le.start(i))}function ZS(){return Math.round(Math.max(50,ge.gpm*gi.coins/4))}function JS(i,t,e,n){ni()||(Ft.closePanel(),Ft.hideHint(),to(),Ie.start({me:{profile:Ut.profile,inst:i},foe:{profile:t,inst:e,damageScale:n.damageScale},coins:ZS()}),Ut.profile.duelsStarted=Um(Ut.profile)+1,mn())}const QS=()=>Te.filter(i=>i.armed).length+Ut.storage.length;function t2(i,t){const e=Te[t];if(ni()||!(e!=null&&e.unlocked)||"lane"in i&&i.lane===t)return;const n="lane"in i?Te[i.lane].unmount():Ut.storage.splice(i.store,1)[0];if(!n)return;const s=e.unmount();e.equip(n),s&&("lane"in i?Te[i.lane].equip(s):Ut.storage.push(s)),Nr()}function e2(i){const t=ni()?null:Te[i].unmount();t&&Ut.storage.push(t),Nr()}function n2(i){if(ni()||QS()<=1)return;const t="lane"in i?Te[i.lane].unmount():Ut.storage.splice(i.store,1)[0];t&&(Ut.parts+=Lu(t),Ft.bumpParts(),Nr())}function i2(i){const t=Im(i);Ut.parts<t||!Bm().includes(i)||(Ut.parts-=t,Ut.storage.push(Rl(i)),Nr())}function Nr(){Nu.relayout(i=>{var t;return((t=Te[i].model)==null?void 0:t.spec.ammo)??"pistol"}),Ft.setParts(Ut.parts),mn(),cs()}function Hm(i){ni()||(Ft.closePanel(),Hi.openArsenal("mine",i.i))}function s2(i,t){t==="swap"&&Hm(i)}let Fn=0;function Vm(i){i.visible&&(Fn=Math.min(1,Fn+.3))}function r2(i,t,e){if(!i.visible)return;const n=Mi(e),s=t.bull?"bull":t.zone>=3?"z3":t.zone<1?"z0":"",r=Pe(t.dmg);Ft.popup(n.x,n.y-14,t.bull?`-${r}!`:`-${r}`,s)}function a2(i,t){if(!i.visible)return;const e=Mi(t);Ft.popup(e.x,e.y,"мимо","miss")}function o2(i,t,e,n){if(Ut.money+=t,ge.earned(t),i.visible&&t>0){const s=Mi(e),r=n.variant?` ${n.variant==="golden"?"✨":"★"}`:"";Ft.popup(s.x,s.y-30,`+$${Pe(t)}${r}`,"money"),Fn=Math.min(1,Fn+(n.kind==="duckling"||n.kind==="candy"?.15:.4)),Ft.flyCoins(s.x,s.y,n.kind==="duckling"||n.kind==="candy"?2:5,a=>{a===0&&(Ft.setMoney(Ut.money),Ft.bumpWallet())})}else Ft.setMoney(Ut.money);ge.onKill(i,n),Ha()}function l2(i,t,e,n){if(Ut.money+=t,ge.earned(t),i.visible&&t>0){const s=Mi(e);Ft.popup(s.x,s.y-10,`+$${Pe(t)}`,"press")}Ft.setMoney(Ut.money),ge.onPress(i,n),Ha()}function c2(i,t,e){Ut.money+=i;let n=innerWidth/2,s=innerHeight*.3;if(t){const r=Mi(t.root.getWorldPosition(h2));n=r.x,s=r.y}Ft.popup(n,s-40,e,"money"),Ft.flyCoins(n,s,9,r=>{r===0&&(Ft.setMoney(Ut.money),Ft.bumpWallet())}),Ha()}const h2=new b;let Xh=!1,Gc=0;function Ha(){Xh=!0}function u2(i){ni()||(to(),Hi.close(),Ft.openPanel(i),Ft.refreshPanel(Ut.money))}function Wc(i){ni()||(to(),Ft.closePanel(),Hi[i]())}function d2(){return Te.findIndex(i=>!i.unlocked)}function f2(i){if(ni())return;const t=ge.gateOf(i.i);ge.toast("🔒",`Линия ${i.i+1} «${i.line.short}» — на ★${t}`,`Сейчас ★${ge.stars}. Звезда — каждые 5 уровней «Ценности партии» любой линии (кнопка ⬆)`)}function p2(i,t){const e=i.costOf(t),n=i.currencyOf(t)==="parts";e==null||(n?Ut.parts:Ut.money)<e||(n?(Ut.parts-=e,Ft.setParts(Ut.parts)):Ut.money-=e,i.applyUpgrade(t),Ft.setMoney(Ut.money),mn(),cs(),Ft.flashRow(t))}function cs(){const i=d2(),t=ge.stars;for(const e of Te)e.armed?e.ui.setBadge(e.canAfford(Ut.money,Ut.parts)):e.unlocked||e.updateLock(e.i===i,t);Ft.panelOpen&&!Ft.panelLane.armed&&Ft.closePanel(),Ft.panelOpen&&Ft.refreshPanel(Ut.money)}Ft.setMoney(Ut.money,!0);Ft.setParts(Ut.parts);Ft.setProfile(Ut.profile);cs();Pl&&Ft.hideHint();!Qa.has("nocheat")&&!Pl&&$S({state:Ut,lanes:Te,hud:Ft,busy:ni,refresh:cs,save:mn});let Va=1,qh=30,un=0,Jn=0;const ku=document.createElement("div");ku.style.cssText="position:fixed;left:0;top:0;visibility:hidden;padding-left:env(safe-area-inset-left,0px)";document.body.appendChild(ku);let $c=0;const _a={k:1,left:0},nl={max:0,min:0},m2=new b,Yh=Du*ei;function Gm(i,t,e=Yh,n=0,s=0){const r=e/2/Math.tan(We.degToRad(Iu/2));On.position.set(i+n,t+XS*e/Yh+s,r),On.lookAt(m2.set(i,t,0)),On.updateMatrixWorld()}function sp(i,t){let e=0;for(let n=0;n<3;n++)Gm(0,e),e+=(t-Mi(g2.set(0,i,3.3)).y)/(Va*qh/(qh-3.3));return e}const g2=new b;function Ou(){return nl}function Wm(){const i=innerWidth,t=innerHeight;zn.setSize(i,t,!1),Gs.setPixelRatio(zn.getPixelRatio()),Gs.setSize(i,t),On.aspect=i/t,On.updateProjectionMatrix();const e=Du*ei;qh=e/2/Math.tan(We.degToRad(Iu/2)),Va=t/e,$c=parseFloat(getComputedStyle(ku).paddingLeft)||0,_a.k=We.clamp(t/qS,.5,1.6),_a.left=$c,document.documentElement.style.setProperty("--k",_a.k.toFixed(4)),fe.halfW=e/2*On.aspect,fe.gunX=-fe.halfW+($c+134*_a.k)/Va,fe.benchX0=-fe.halfW-.25,fe.benchX1=fe.gunX+5.45,fe.targetX=fe.halfW-2.9,Nu.relayout(n=>{var s;return((s=Te[n].model)==null?void 0:s.spec.ammo)??"pistol"}),Te.forEach(n=>{n.trial||n.relayout()}),Le.relayout(),Ie.active&&Ie.relayout(),nl.max=sp(ei/2-ci,.065*t),nl.min=Math.min(nl.max,sp(Sn(Te.length-1)-ci,t))}addEventListener("resize",Wm);Wm();un=Ou().max;const xl=new mu,v2=new ai(new b(0,0,1),0),rp=new Z,ap=new b;function $m(i,t){if(rp.set(i/innerWidth*2-1,-(t/innerHeight)*2+1),xl.setFromCamera(rp,On),!xl.ray.intersectPlane(v2,ap))return null;const e=Te[um(ap.y)];return e!=null&&e.unlocked?e:null}const Ws=new Map;let Ni=null;fi.addEventListener("pointerdown",i=>{if(i.button!==0||Hi.open)return;if(i.preventDefault(),Ft.hideHint(),Le.active){if(Ni!==null)return;Ni=i.pointerId,fi.setPointerCapture(i.pointerId),Le.pointer(i.clientX,i.clientY,!0);return}if(Ie.active){if(Ni!==null)return;Ni=i.pointerId,fi.setPointerCapture(i.pointerId),Ie.pointer(i.clientX,i.clientY,!0);return}const t=$m(i.clientX,i.clientY);Ws.set(i.pointerId,{y0:i.clientY,y:i.clientY,t:performance.now(),lane:t,drag:!1}),fi.setPointerCapture(i.pointerId),t==null||t.focusRay(xl.ray.origin,xl.ray.direction),t==null||t.press(),Jn=0});fi.addEventListener("pointermove",i=>{var n;if(Ni!==null&&Ni!==i.pointerId)return;if(Le.active){Le.pointer(i.clientX,i.clientY);return}if(Ie.active){Ie.pointer(i.clientX,i.clientY);return}const t=Ws.get(i.pointerId);if(!t)return;const e=performance.now();if(!t.drag&&Math.abs(i.clientY-t.y0)>12&&(t.drag=!0,(n=t.lane)==null||n.release(),t.lane=null),t.drag){const{min:s,max:r}=Ou();let a=(i.clientY-t.y)/Va;(un>r||un<s)&&(a*=.35),un+=a;const o=Math.max(1,e-t.t)/1e3;Jn=Jn*.6+a/o*.4}t.y=i.clientY,t.t=e});const zu=i=>{var e;if(Ni===i.pointerId){const n=i.type!=="pointerup";Le.release(n),Ie.release(n),Ni=null}const t=Ws.get(i.pointerId);t&&((e=t.lane)==null||e.release(),(!t.drag||performance.now()-t.t>80)&&(Jn=t.drag?Jn*.3:0),Ws.delete(i.pointerId))};fi.addEventListener("pointerup",zu);fi.addEventListener("pointercancel",zu);fi.addEventListener("lostpointercapture",zu);fi.addEventListener("contextmenu",i=>i.preventDefault());addEventListener("wheel",i=>{var t,e;Hi.open||ni()||(e=(t=i.target).closest)!=null&&e.call(t,"#panel .p-sheet")||(Jn=0,un-=i.deltaY/Va*.6)},{passive:!0});let Qn=null;addEventListener("keydown",i=>{if(i.code==="Escape"){Ft.closePanel(),Hi.close();return}if(!(i.code!=="Space"||i.repeat||Hi.open||/INPUT|TEXTAREA|BUTTON/.test(i.target.tagName))){if(i.preventDefault(),Le.active){Le.trigger.press(Le.lane.stats);return}if(Ie.active){Ie.me.trigger.press(Ie.me.stats);return}Ft.hideHint(),Qn=$m(innerWidth/2,innerHeight/2),Qn==null||Qn.press()}});addEventListener("keyup",i=>{i.code==="Space"&&(Qn==null||Qn.release(),Le.release(),Ie.release())});function Xm(){to(),Ni=null,Qn==null||Qn.release(),Qn=null,Le.release(!0),Ie.release(!0)}addEventListener("blur",Xm);document.addEventListener("visibilitychange",()=>{document.hidden&&Xm()});const x2=new nm;let op=0,cn=null;function _l(i){const t=Math.min(x2.getDelta(),.05);if(cn!=null&&cn.paused&&i===void 0)return;const e=i??t*((cn==null?void 0:cn.speed)??1);cn==null||cn.tick(e),op+=e;const n=Le.active?Le:Ie.active?Ie:null;n||ge.update(e);for(const u of Te)(!n||Le.active&&u===Le.lane)&&u.update(e);Gc-=e,Xh&&Gc<=0&&(Xh=!1,Gc=.25,cs()),Le.update(e),Ie.update(e),n||$r.update(e),Ft.tick(e);const s=[...Ws.values()].some(u=>u.drag),{min:r,max:a}=Ou();!s&&!cn&&(un+=Jn*e,Jn*=Math.exp(-4*e),un>a&&(un+=(a-un)*Math.min(1,e*12),Jn*=.5),un<r&&(un+=(r-un)*Math.min(1,e*12),Jn*=.5)),Fn=Math.max(0,Fn-e*4);const o=cn?0:Fn*Fn*.06,l={cx:0,cy:un,viewH:Yh},c=n?n.view(l):l;Gm(c.cx,c.cy,c.viewH,(Math.random()-.5)*o+(cn?0:Math.sin(op*.3)*.1),(Math.random()-.5)*o),Nu.follow(c.cy),Le.updateHud(e),Ie.updateHud(e);const h=innerHeight/Du;for(const u of Te)u.ui.setHidden(!!n),n||u.placeUI(innerHeight,h,_a);ip.classList.toggle("trial",Le.active),ip.classList.toggle("duel",Ie.active),Hc+=e,Hc>5&&(Hc=0,mn()),Om.scene=n?n.scene:Xs,Gs.render(e)}zn.setAnimationLoop(()=>_l());Uu&&(cn=BS({lanes:Te,fx:$r,draw:_l,select:i=>{un=i.floor+ei*.45,Jn=0}}),_l(0));addEventListener("pagehide",mn);Qa.has("debug")&&(window.__range={scene:Xs,camera:On,renderer:zn,lanes:Te,workshop:ge,trial:Le,duel:Ie,menus:Hi,state:Ut,fx:$r,project:Mi,save:mn,frame:_l,review:cn});
