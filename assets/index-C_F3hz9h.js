(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ed="170",Mg=0,Zd=1,wg=2,y0=1,b0=2,_s=3,Rs=0,zn=1,Zn=2,Es=0,Tr=1,En=2,Jd=3,Qd=4,Sg=5,xr=100,Eg=101,Tg=102,Ag=103,Cg=104,Rg=200,Pg=201,Lg=202,Dg=203,$h=204,Xh=205,kg=206,Ig=207,Ug=208,Ng=209,zg=210,Fg=211,Og=212,Bg=213,Hg=214,qh=0,Yh=1,jh=2,va=3,Kh=4,Zh=5,Jh=6,Qh=7,nd=0,Vg=1,Gg=2,Ts=0,M0=1,w0=2,S0=3,E0=4,Wg=5,T0=6,A0=7,C0=300,xa=301,_a=302,tu=303,eu=304,pc=306,Ps=1e3,wr=1001,nu=1002,Jn=1003,$g=1004,$o=1005,Ji=1006,Rc=1007,Sr=1008,Ls=1009,R0=1010,P0=1011,Mo=1012,id=1013,Rr=1014,Qi=1015,ns=1016,sd=1017,rd=1018,ya=1020,L0=35902,D0=1021,k0=1022,Ii=1023,I0=1024,U0=1025,fa=1026,ba=1027,ad=1028,od=1029,N0=1030,ld=1031,cd=1033,Il=33776,Ul=33777,Nl=33778,zl=33779,iu=35840,su=35841,ru=35842,au=35843,ou=36196,lu=37492,cu=37496,hu=37808,uu=37809,du=37810,fu=37811,pu=37812,mu=37813,gu=37814,vu=37815,xu=37816,_u=37817,yu=37818,bu=37819,Mu=37820,wu=37821,Fl=36492,Su=36494,Eu=36495,z0=36283,Tu=36284,Au=36285,Cu=36286,Xg=3200,qg=3201,F0=0,Yg=1,Ys="",Un="srgb",Ra="srgb-linear",mc="linear",we="srgb",Nr=7680,tf=519,jg=512,Kg=513,Zg=514,O0=515,Jg=516,Qg=517,t1=518,e1=519,Ru=35044,n1=35048,ef="300 es",ws=2e3,Zl=2001;class Pa{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nf=1234567;const fo=Math.PI/180,wo=180/Math.PI;function is(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function on(s,t,e){return Math.max(t,Math.min(e,s))}function hd(s,t){return(s%t+t)%t}function i1(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function s1(s,t,e){return s!==t?(e-s)/(t-s):0}function po(s,t,e){return(1-e)*s+e*t}function r1(s,t,e,n){return po(s,t,1-Math.exp(-e*n))}function a1(s,t=1){return t-Math.abs(hd(s,t*2)-t)}function o1(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function l1(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function c1(s,t){return s+Math.floor(Math.random()*(t-s+1))}function h1(s,t){return s+Math.random()*(t-s)}function u1(s){return s*(.5-Math.random())}function d1(s){s!==void 0&&(nf=s);let t=nf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function f1(s){return s*fo}function p1(s){return s*wo}function m1(s){return(s&s-1)===0&&s!==0}function g1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function v1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function x1(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ki(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Je={DEG2RAD:fo,RAD2DEG:wo,generateUUID:is,clamp:on,euclideanModulo:hd,mapLinear:i1,inverseLerp:s1,lerp:po,damp:r1,pingpong:a1,smoothstep:o1,smootherstep:l1,randInt:c1,randFloat:h1,randFloatSpread:u1,seededRandom:d1,degToRad:f1,radToDeg:p1,isPowerOfTwo:m1,ceilPowerOfTwo:g1,floorPowerOfTwo:v1,setQuaternionFromProperEuler:x1,normalize:Se,denormalize:ki};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,i,r,a,o,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=i[0],m=i[3],d=i[6],_=i[1],x=i[4],y=i[7],k=i[2],A=i[5],R=i[8];return r[0]=a*v+o*_+l*k,r[3]=a*m+o*x+l*A,r[6]=a*d+o*y+l*R,r[1]=c*v+h*_+u*k,r[4]=c*m+h*x+u*A,r[7]=c*d+h*y+u*R,r[2]=f*v+p*_+g*k,r[5]=f*m+p*x+g*A,r[8]=f*d+p*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pc.makeScale(t,e)),this}rotate(t){return this.premultiply(Pc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new ee;function B0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _1(){const s=Jl("canvas");return s.style.display="block",s}const sf={};function so(s){s in sf||(sf[s]=!0,console.warn(s))}function y1(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function b1(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function M1(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const de={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(s.r=pa(s.r),s.g=pa(s.g),s.b=pa(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ys?mc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function As(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const rf=[.64,.33,.3,.6,.15,.06],af=[.2126,.7152,.0722],of=[.3127,.329],lf=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);de.define({[Ra]:{primaries:rf,whitePoint:of,transfer:mc,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:af,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:rf,whitePoint:of,transfer:we,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:af,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}});let zr;class w1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zr===void 0&&(zr=Jl("canvas")),zr.width=t.width,zr.height=t.height;const n=zr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=As(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(As(e[n]/255)*255):e[n]=As(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let S1=0;class H0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Lc(i[a].image)):r.push(Lc(i[a]))}else r=Lc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?w1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E1=0;class gn extends Pa{constructor(t=gn.DEFAULT_IMAGE,e=gn.DEFAULT_MAPPING,n=wr,i=wr,r=Ji,a=Sr,o=Ii,l=Ls,c=gn.DEFAULT_ANISOTROPY,h=Ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=is(),this.name="",this.source=new H0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==C0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case nu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case nu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=C0;gn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,i=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(p+1)/2,k=(d+1)/2,A=(h+f)/4,R=(u+v)/4,L=(g+m)/4;return x>y&&x>k?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=R/n):y>k?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=L/i):k<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(k),n=R/r,i=L/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T1 extends Pa{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new gn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new H0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends T1{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class V0 extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class A1 extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*v,_=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const k=Math.sqrt(x),A=Math.atan2(k,d*_);m=Math.sin(m*A)/k,o=Math.sin(o*A)/k}const y=o*_;if(l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-o){const k=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=k,c*=k,h*=k,u*=k}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new b,hf=new tr;class Bn{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Si):Si.fromBufferAttribute(r,a),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(t.matrixWorld),this.union(Xo)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oa),qo.subVectors(this.max,Oa),Fr.subVectors(t.a,Oa),Or.subVectors(t.b,Oa),Br.subVectors(t.c,Oa),zs.subVectors(Or,Fr),Fs.subVectors(Br,Or),ir.subVectors(Fr,Br);let e=[0,-zs.z,zs.y,0,-Fs.z,Fs.y,0,-ir.z,ir.y,zs.z,0,-zs.x,Fs.z,0,-Fs.x,ir.z,0,-ir.x,-zs.y,zs.x,0,-Fs.y,Fs.x,0,-ir.y,ir.x,0];return!kc(e,Fr,Or,Br,qo)||(e=[1,0,0,0,1,0,0,0,1],!kc(e,Fr,Or,Br,qo))?!1:(Yo.crossVectors(zs,Fs),e=[Yo.x,Yo.y,Yo.z],kc(e,Fr,Or,Br,qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ds=[new b,new b,new b,new b,new b,new b,new b,new b],Si=new b,Xo=new Bn,Fr=new b,Or=new b,Br=new b,zs=new b,Fs=new b,ir=new b,Oa=new b,qo=new b,Yo=new b,sr=new b;function kc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){sr.fromArray(s,r);const o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),l=t.dot(sr),c=e.dot(sr),h=n.dot(sr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const C1=new Bn,Ba=new b,Ic=new b;class Io{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):C1.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ba.subVectors(t,this.center);const e=Ba.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ba,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ba.copy(t.center).add(Ic)),this.expandByPoint(Ba.copy(t.center).sub(Ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fs=new b,Uc=new b,jo=new b,Os=new b,Nc=new b,Ko=new b,zc=new b;class G0{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fs.copy(this.origin).addScaledVector(this.direction,e),fs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Uc.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),Os.copy(this.origin).sub(Uc);const r=t.distanceTo(e)*.5,a=-this.direction.dot(jo),o=Os.dot(this.direction),l=-Os.dot(jo),c=Os.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Uc).addScaledVector(jo,f),p}intersectSphere(t,e){fs.subVectors(t.center,this.origin);const n=fs.dot(this.direction),i=fs.dot(fs)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fs)!==null}intersectTriangle(t,e,n,i,r){Nc.subVectors(e,t),Ko.subVectors(n,t),zc.crossVectors(Nc,Ko);let a=this.direction.dot(zc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Os.subVectors(this.origin,t);const l=o*this.direction.dot(Ko.crossVectors(Os,Ko));if(l<0)return null;const c=o*this.direction.dot(Nc.cross(Os));if(c<0||l+c>a)return null;const h=-o*Os.dot(zc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,r,a,o,l,c,h,u,f,p,g,v,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,p,g,v,m)}set(t,e,n,i,r,a,o,l,c,h,u,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Hr.setFromMatrixColumn(t,0).length(),r=1/Hr.setFromMatrixColumn(t,1).length(),a=1/Hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R1,t,P1)}lookAt(t,e,n){const i=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Bs.crossVectors(n,Gn),Bs.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Bs.crossVectors(n,Gn)),Bs.normalize(),Zo.crossVectors(Gn,Bs),i[0]=Bs.x,i[4]=Zo.x,i[8]=Gn.x,i[1]=Bs.y,i[5]=Zo.y,i[9]=Gn.y,i[2]=Bs.z,i[6]=Zo.z,i[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],_=n[3],x=n[7],y=n[11],k=n[15],A=i[0],R=i[4],L=i[8],S=i[12],M=i[1],D=i[5],z=i[9],B=i[13],j=i[2],Z=i[6],Y=i[10],nt=i[14],X=i[3],mt=i[7],xt=i[11],ot=i[15];return r[0]=a*A+o*M+l*j+c*X,r[4]=a*R+o*D+l*Z+c*mt,r[8]=a*L+o*z+l*Y+c*xt,r[12]=a*S+o*B+l*nt+c*ot,r[1]=h*A+u*M+f*j+p*X,r[5]=h*R+u*D+f*Z+p*mt,r[9]=h*L+u*z+f*Y+p*xt,r[13]=h*S+u*B+f*nt+p*ot,r[2]=g*A+v*M+m*j+d*X,r[6]=g*R+v*D+m*Z+d*mt,r[10]=g*L+v*z+m*Y+d*xt,r[14]=g*S+v*B+m*nt+d*ot,r[3]=_*A+x*M+y*j+k*X,r[7]=_*R+x*D+y*Z+k*mt,r[11]=_*L+x*z+y*Y+k*xt,r[15]=_*S+x*B+y*nt+k*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+v*(+e*l*p-e*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],_=u*m*c-v*f*c+v*l*p-o*m*p-u*l*d+o*f*d,x=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,y=h*v*c-g*u*c+g*o*p-a*v*p-h*o*d+a*u*d,k=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,A=e*_+n*x+i*y+r*k;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=_*R,t[1]=(v*f*r-u*m*r-v*i*p+n*m*p+u*i*d-n*f*d)*R,t[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*d+n*l*d)*R,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*R,t[4]=x*R,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*d+e*f*d)*R,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*d-e*l*d)*R,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*p+e*l*p)*R,t[8]=y*R,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*d-e*u*d)*R,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*d+e*o*d)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*R,t[12]=k*R,t[13]=(h*v*i-g*u*i+g*n*f-e*v*f-h*n*m+e*u*m)*R,t[14]=(g*o*i-a*v*i-g*n*l+e*v*l+a*n*m-e*o*m)*R,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,v=a*h,m=a*u,d=o*u,_=l*c,x=l*h,y=l*u,k=n.x,A=n.y,R=n.z;return i[0]=(1-(v+d))*k,i[1]=(p+y)*k,i[2]=(g-x)*k,i[3]=0,i[4]=(p-y)*A,i[5]=(1-(f+d))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(g+x)*R,i[9]=(m-_)*R,i[10]=(1-(f+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Hr.set(i[0],i[1],i[2]).length();const a=Hr.set(i[4],i[5],i[6]).length(),o=Hr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ei.copy(this);const c=1/r,h=1/a,u=1/o;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=u,Ei.elements[9]*=u,Ei.elements[10]*=u,e.setFromRotationMatrix(Ei),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=ws){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(o===ws)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Zl)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ws){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,p=(n+i)*h;let g,v;if(o===ws)g=(a+r)*u,v=-2*u;else if(o===Zl)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hr=new b,Ei=new fe,R1=new b(0,0,0),P1=new b(1,1,1),Bs=new b,Zo=new b,Gn=new b,uf=new fe,df=new tr;class os{constructor(t=0,e=0,n=0,i=os.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return df.setFromEuler(this),this.setFromQuaternion(df,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class ud{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let L1=0;const ff=new b,Vr=new tr,ps=new fe,Jo=new b,Ha=new b,D1=new b,k1=new tr,pf=new b(1,0,0),mf=new b(0,1,0),gf=new b(0,0,1),vf={type:"added"},I1={type:"removed"},Gr={type:"childadded",child:null},Fc={type:"childremoved",child:null};class tn extends Pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new b,e=new os,n=new tr,i=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new ee}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vr.setFromAxisAngle(t,e),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(t,e){return Vr.setFromAxisAngle(t,e),this.quaternion.premultiply(Vr),this}rotateX(t){return this.rotateOnAxis(pf,t)}rotateY(t){return this.rotateOnAxis(mf,t)}rotateZ(t){return this.rotateOnAxis(gf,t)}translateOnAxis(t,e){return ff.copy(t).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pf,t)}translateY(t){return this.translateOnAxis(mf,t)}translateZ(t){return this.translateOnAxis(gf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jo.copy(t):Jo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(Ha,Jo,this.up):ps.lookAt(Jo,Ha,this.up),this.quaternion.setFromRotationMatrix(ps),i&&(ps.extractRotation(i.matrixWorld),Vr.setFromRotationMatrix(ps),this.quaternion.premultiply(Vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vf),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(I1),Fc.child=t,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vf),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,t,D1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,k1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}tn.DEFAULT_UP=new b(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new b,ms=new b,Oc=new b,gs=new b,Wr=new b,$r=new b,xf=new b,Bc=new b,Hc=new b,Vc=new b,Gc=new Ae,Wc=new Ae,$c=new Ae;class pi{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ti.subVectors(t,e),i.cross(Ti);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ti.subVectors(i,e),ms.subVectors(n,e),Oc.subVectors(t,e);const a=Ti.dot(Ti),o=Ti.dot(ms),l=Ti.dot(Oc),c=ms.dot(ms),h=ms.dot(Oc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gs.x),l.addScaledVector(a,gs.y),l.addScaledVector(o,gs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Gc.setScalar(0),Wc.setScalar(0),$c.setScalar(0),Gc.fromBufferAttribute(t,e),Wc.fromBufferAttribute(t,n),$c.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Gc,r.x),a.addScaledVector(Wc,r.y),a.addScaledVector($c,r.z),a}static isFrontFacing(t,e,n,i){return Ti.subVectors(n,e),ms.subVectors(t,e),Ti.cross(ms).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Ti.cross(ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return pi.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Wr.subVectors(i,n),$r.subVectors(r,n),Bc.subVectors(t,n);const l=Wr.dot(Bc),c=$r.dot(Bc);if(l<=0&&c<=0)return e.copy(n);Hc.subVectors(t,i);const h=Wr.dot(Hc),u=$r.dot(Hc);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Wr,a);Vc.subVectors(t,r);const p=Wr.dot(Vc),g=$r.dot(Vc);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector($r,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return xf.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(xf,o);const d=1/(m+v+f);return a=v*d,o=f*d,e.copy(n).addScaledVector(Wr,a).addScaledVector($r,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hs={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Xc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=hd(t,1),e=on(e,0,1),n=on(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xc(a,r,t+1/3),this.g=Xc(a,r,t),this.b=Xc(a,r,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=Un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Un){const n=W0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}copyLinearToSRGB(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return de.fromWorkingColorSpace(pn.copy(this),t),Math.round(on(pn.r*255,0,255))*65536+Math.round(on(pn.g*255,0,255))*256+Math.round(on(pn.b*255,0,255))}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,i=pn.g,r=pn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Un){de.fromWorkingColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,i=pn.b;return t!==Un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hs),this.setHSL(Hs.h+t,Hs.s+e,Hs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hs),t.getHSL(Qo);const n=po(Hs.h,Qo.h,e),i=po(Hs.s,Qo.s,e),r=po(Hs.l,Qo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new _t;_t.NAMES=W0;let U1=0;class La extends Pa{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=is(),this.name="",this.blending=Tr,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Xh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==Rs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$h&&(n.blendSrc=this.blendSrc),this.blendDst!==Xh&&(n.blendDst=this.blendDst),this.blendEquation!==xr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nn extends La{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new b,tl=new et;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ru,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tl.fromBufferAttribute(this,e),tl.applyMatrix3(t),this.setXY(e,tl.x,tl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ru&&(t.usage=this.usage),t}}class $0 extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class X0 extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let N1=0;const ri=new fe,qc=new tn,Xr=new b,Wn=new Bn,Va=new Bn,rn=new b;class sn extends Pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B0(t)?X0:$0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,n){return ri.makeTranslation(t,e,n),this.applyMatrix4(ri),this}scale(t,e,n){return ri.makeScale(t,e,n),this.applyMatrix4(ri),this}lookAt(t){return qc.lookAt(t),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Va.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Wn.min,Va.min),Wn.expandByPoint(rn),rn.addVectors(Wn.max,Va.max),Wn.expandByPoint(rn)):(Wn.expandByPoint(Va.min),Wn.expandByPoint(Va.max))}Wn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)rn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(rn));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(t,c),rn.add(Xr)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new b,l[L]=new b;const c=new b,h=new b,u=new b,f=new et,p=new et,g=new et,v=new b,m=new b;function d(L,S,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[L].add(v),o[S].add(v),o[M].add(v),l[L].add(m),l[S].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,S=_.length;L<S;++L){const M=_[L],D=M.start,z=M.count;for(let B=D,j=D+z;B<j;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new b,y=new b,k=new b,A=new b;function R(L){k.fromBufferAttribute(i,L),A.copy(k);const S=o[L];x.copy(S),x.sub(k.multiplyScalar(k.dot(S))).normalize(),y.crossVectors(A,S);const D=y.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,D)}for(let L=0,S=_.length;L<S;++L){const M=_[L],D=M.start,z=M.count;for(let B=D,j=D+z;B<j;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new b,r=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new cn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _f=new fe,rr=new G0,el=new Io,yf=new b,nl=new b,il=new b,sl=new b,Yc=new b,rl=new b,bf=new b,al=new b;class W extends tn{constructor(t=new sn,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Yc.fromBufferAttribute(u,t),a?rl.addScaledVector(Yc,h):rl.addScaledVector(Yc.sub(e),h))}e.add(rl)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(r),rr.copy(t.ray).recast(t.near),!(el.containsPoint(rr.origin)===!1&&(rr.intersectSphere(el,yf)===null||rr.origin.distanceToSquared(yf)>(t.far-t.near)**2))&&(_f.copy(r).invert(),rr.copy(t.ray).applyMatrix4(_f),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rr)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,k=x;y<k;y+=3){const A=o.getX(y),R=o.getX(y+1),L=o.getX(y+2);i=ol(this,d,t,n,c,h,u,A,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=ol(this,a,t,n,c,h,u,_,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,k=x;y<k;y+=3){const A=y,R=y+1,L=y+2;i=ol(this,d,t,n,c,h,u,A,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=m,x=m+1,y=m+2;i=ol(this,a,t,n,c,h,u,_,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function z1(s,t,e,n,i,r,a,o){let l;if(t.side===zn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Rs,o),l===null)return null;al.copy(o),al.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(al);return c<e.near||c>e.far?null:{distance:c,point:al.clone(),object:s}}function ol(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,nl),s.getVertexPosition(l,il),s.getVertexPosition(c,sl);const h=z1(s,t,e,n,nl,il,sl,bf);if(h){const u=new b;pi.getBarycoord(bf,nl,il,sl,u),i&&(h.uv=pi.getInterpolatedAttribute(i,o,l,c,u,new et)),r&&(h.uv1=pi.getInterpolatedAttribute(r,o,l,c,u,new et)),a&&(h.normal=pi.getInterpolatedAttribute(a,o,l,c,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new b,materialIndex:0};pi.getNormal(nl,il,sl,f.normal),h.face=f,h.barycoord=u}return h}class Qn extends sn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function g(v,m,d,_,x,y,k,A,R,L,S){const M=y/R,D=k/L,z=y/2,B=k/2,j=A/2,Z=R+1,Y=L+1;let nt=0,X=0;const mt=new b;for(let xt=0;xt<Y;xt++){const ot=xt*D-B;for(let ct=0;ct<Z;ct++){const Ft=ct*M-z;mt[v]=Ft*_,mt[m]=ot*x,mt[d]=j,c.push(mt.x,mt.y,mt.z),mt[v]=0,mt[m]=0,mt[d]=A>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(ct/R),u.push(1-xt/L),nt+=1}}for(let xt=0;xt<L;xt++)for(let ot=0;ot<R;ot++){const ct=f+ot+Z*xt,Ft=f+ot+Z*(xt+1),q=f+(ot+1)+Z*(xt+1),it=f+(ot+1)+Z*xt;l.push(ct,Ft,it),l.push(Ft,q,it),X+=6}o.addGroup(p,X,S),p+=X,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ma(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function bn(s){const t={};for(let e=0;e<s.length;e++){const n=Ma(s[e]);for(const i in n)t[i]=n[i]}return t}function F1(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function q0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const So={clone:Ma,merge:bn};var O1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends La{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O1,this.fragmentShader=B1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ma(t.uniforms),this.uniformsGroups=F1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Y0 extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ws}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vs=new b,Mf=new et,wf=new et;class jn extends Y0{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vs.x,Vs.y).multiplyScalar(-t/Vs.z),Vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vs.x,Vs.y).multiplyScalar(-t/Vs.z)}getViewSize(t,e){return this.getViewBounds(t,Mf,wf),e.subVectors(wf,Mf)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qr=-90,Yr=1;class H1 extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jn(qr,Yr,t,e);i.layers=this.layers,this.add(i);const r=new jn(qr,Yr,t,e);r.layers=this.layers,this.add(r);const a=new jn(qr,Yr,t,e);a.layers=this.layers,this.add(a);const o=new jn(qr,Yr,t,e);o.layers=this.layers,this.add(o);const l=new jn(qr,Yr,t,e);l.layers=this.layers,this.add(l);const c=new jn(qr,Yr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ws)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class j0 extends gn{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xa,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class V1 extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new j0(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ji}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qn(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:Ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Es});r.uniforms.tEquirect.value=e;const a=new W(i,r),o=e.minFilter;return e.minFilter===Sr&&(e.minFilter=Ji),new H1(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const jc=new b,G1=new b,W1=new ee;class qi{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=jc.subVectors(n,e).cross(G1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||W1.getNormalMatrix(t),i=this.coplanarPoint(jc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Io,ll=new b;class dd{constructor(t=new qi,e=new qi,n=new qi,i=new qi,r=new qi,a=new qi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ws){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],v=i[10],m=i[11],d=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,m-p,y-d).normalize(),n[1].setComponents(l+r,f+c,m+p,y+d).normalize(),n[2].setComponents(l+a,f+h,m+g,y+_).normalize(),n[3].setComponents(l-a,f-h,m-g,y-_).normalize(),n[4].setComponents(l-o,f-u,m-v,y-x).normalize(),e===ws)n[5].setComponents(l+o,f+u,m+v,y+x).normalize();else if(e===Zl)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ll.x=i.normal.x>0?t.max.x:t.min.x,ll.y=i.normal.y>0?t.max.y:t.min.y,ll.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ll)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function K0(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $1(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class hn extends sn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const _=d*f-a;for(let x=0;x<c;x++){const y=x*u-r;g.push(y,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const x=_+c*d,y=_+c*(d+1),k=_+1+c*(d+1),A=_+1+c*d;p.push(x,y,A),p.push(y,k,A)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var X1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q1=`#ifdef USE_ALPHAHASH
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
#endif`,Y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J1=`#ifdef USE_AOMAP
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
#endif`,Q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`#ifdef USE_BATCHING
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
#endif`,ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rv=`#ifdef USE_IRIDESCENCE
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
#endif`,av=`#ifdef USE_BUMPMAP
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mv=`#define PI 3.141592653589793
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
} // validated`,gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vv=`vec3 transformedNormal = objectNormal;
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
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",wv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tv=`#ifdef USE_ENVMAP
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
#endif`,Av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
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
}`,Iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zv=`uniform bool receiveShadow;
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
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gv=`PhysicalMaterial material;
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
#endif`,Wv=`struct PhysicalMaterial {
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
}`,$v=`
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
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
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
#endif`,qv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ex=`#if defined( USE_POINTS_UV )
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
#endif`,nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`#ifdef USE_MORPHTARGETS
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
#endif`,lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
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
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Px=`float getShadowMask() {
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
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
}`,Qx=`#define DISTANCE
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
}`,t2=`#define DISTANCE
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
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i2=`uniform float scale;
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
}`,s2=`uniform vec3 diffuse;
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
}`,r2=`#include <common>
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
}`,a2=`uniform vec3 diffuse;
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
}`,o2=`#define LAMBERT
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
}`,l2=`#define LAMBERT
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
}`,c2=`#define MATCAP
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
}`,h2=`#define MATCAP
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
}`,u2=`#define NORMAL
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
}`,d2=`#define NORMAL
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
}`,f2=`#define PHONG
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
}`,p2=`#define PHONG
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
}`,m2=`#define STANDARD
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
}`,g2=`#define STANDARD
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
}`,v2=`#define TOON
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
}`,x2=`#define TOON
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
}`,_2=`uniform float size;
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
}`,y2=`uniform vec3 diffuse;
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
}`,b2=`#include <common>
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
}`,M2=`uniform vec3 color;
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
}`,w2=`uniform float rotation;
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
}`,S2=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:X1,alphahash_pars_fragment:q1,alphamap_fragment:Y1,alphamap_pars_fragment:j1,alphatest_fragment:K1,alphatest_pars_fragment:Z1,aomap_fragment:J1,aomap_pars_fragment:Q1,batching_pars_vertex:tv,batching_vertex:ev,begin_vertex:nv,beginnormal_vertex:iv,bsdfs:sv,iridescence_fragment:rv,bumpmap_pars_fragment:av,clipping_planes_fragment:ov,clipping_planes_pars_fragment:lv,clipping_planes_pars_vertex:cv,clipping_planes_vertex:hv,color_fragment:uv,color_pars_fragment:dv,color_pars_vertex:fv,color_vertex:pv,common:mv,cube_uv_reflection_fragment:gv,defaultnormal_vertex:vv,displacementmap_pars_vertex:xv,displacementmap_vertex:_v,emissivemap_fragment:yv,emissivemap_pars_fragment:bv,colorspace_fragment:Mv,colorspace_pars_fragment:wv,envmap_fragment:Sv,envmap_common_pars_fragment:Ev,envmap_pars_fragment:Tv,envmap_pars_vertex:Av,envmap_physical_pars_fragment:Fv,envmap_vertex:Cv,fog_vertex:Rv,fog_pars_vertex:Pv,fog_fragment:Lv,fog_pars_fragment:Dv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:Iv,lights_lambert_fragment:Uv,lights_lambert_pars_fragment:Nv,lights_pars_begin:zv,lights_toon_fragment:Ov,lights_toon_pars_fragment:Bv,lights_phong_fragment:Hv,lights_phong_pars_fragment:Vv,lights_physical_fragment:Gv,lights_physical_pars_fragment:Wv,lights_fragment_begin:$v,lights_fragment_maps:Xv,lights_fragment_end:qv,logdepthbuf_fragment:Yv,logdepthbuf_pars_fragment:jv,logdepthbuf_pars_vertex:Kv,logdepthbuf_vertex:Zv,map_fragment:Jv,map_pars_fragment:Qv,map_particle_fragment:tx,map_particle_pars_fragment:ex,metalnessmap_fragment:nx,metalnessmap_pars_fragment:ix,morphinstance_vertex:sx,morphcolor_vertex:rx,morphnormal_vertex:ax,morphtarget_pars_vertex:ox,morphtarget_vertex:lx,normal_fragment_begin:cx,normal_fragment_maps:hx,normal_pars_fragment:ux,normal_pars_vertex:dx,normal_vertex:fx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:vx,iridescence_pars_fragment:xx,opaque_fragment:_x,packing:yx,premultiplied_alpha_fragment:bx,project_vertex:Mx,dithering_fragment:wx,dithering_pars_fragment:Sx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:Ax,shadowmap_pars_vertex:Cx,shadowmap_vertex:Rx,shadowmask_pars_fragment:Px,skinbase_vertex:Lx,skinning_pars_vertex:Dx,skinning_vertex:kx,skinnormal_vertex:Ix,specularmap_fragment:Ux,specularmap_pars_fragment:Nx,tonemapping_fragment:zx,tonemapping_pars_fragment:Fx,transmission_fragment:Ox,transmission_pars_fragment:Bx,uv_pars_fragment:Hx,uv_pars_vertex:Vx,uv_vertex:Gx,worldpos_vertex:Wx,background_vert:$x,background_frag:Xx,backgroundCube_vert:qx,backgroundCube_frag:Yx,cube_vert:jx,cube_frag:Kx,depth_vert:Zx,depth_frag:Jx,distanceRGBA_vert:Qx,distanceRGBA_frag:t2,equirect_vert:e2,equirect_frag:n2,linedashed_vert:i2,linedashed_frag:s2,meshbasic_vert:r2,meshbasic_frag:a2,meshlambert_vert:o2,meshlambert_frag:l2,meshmatcap_vert:c2,meshmatcap_frag:h2,meshnormal_vert:u2,meshnormal_frag:d2,meshphong_vert:f2,meshphong_frag:p2,meshphysical_vert:m2,meshphysical_frag:g2,meshtoon_vert:v2,meshtoon_frag:x2,points_vert:_2,points_frag:y2,shadow_vert:b2,shadow_frag:M2,sprite_vert:w2,sprite_frag:S2},yt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Yi={basic:{uniforms:bn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:bn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new _t(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:bn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:bn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:bn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new _t(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:bn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:bn([yt.points,yt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:bn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:bn([yt.common,yt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:bn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:bn([yt.sprite,yt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:bn([yt.common,yt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:bn([yt.lights,yt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Yi.physical={uniforms:bn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const cl={r:0,b:0,g:0},or=new os,E2=new fe;function T2(s,t,e,n,i,r,a){const o=new _t(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function v(_){let x=!1;const y=g(_);y===null?d(o,l):y&&y.isColor&&(d(y,1),x=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===pc)?(h===void 0&&(h=new W(new Qn(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Ma(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),or.copy(x.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E2.makeRotationFromEuler(or)),h.material.toneMapped=de.getTransfer(y.colorSpace)!==we,(u!==y||f!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new W(new hn(2,2),new je({name:"BackgroundMaterial",uniforms:Ma(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=de.getTransfer(y.colorSpace)!==we,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,x){_.getRGB(cl,q0(s)),n.buffers.color.setClear(cl.r,cl.g,cl.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:v,addToRenderList:m}}function A2(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(M,D,z,B,j){let Z=!1;const Y=u(B,z,D);r!==Y&&(r=Y,c(r.object)),Z=p(M,B,z,j),Z&&g(M,B,z,j),j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(M,D,z,B),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,D,z){const B=z.wireframe===!0;let j=n[M.id];j===void 0&&(j={},n[M.id]=j);let Z=j[D.id];Z===void 0&&(Z={},j[D.id]=Z);let Y=Z[B];return Y===void 0&&(Y=f(l()),Z[B]=Y),Y}function f(M){const D=[],z=[],B=[];for(let j=0;j<e;j++)D[j]=0,z[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,D,z,B){const j=r.attributes,Z=D.attributes;let Y=0;const nt=z.getAttributes();for(const X in nt)if(nt[X].location>=0){const xt=j[X];let ot=Z[X];if(ot===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),xt===void 0||xt.attribute!==ot||ot&&xt.data!==ot.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function g(M,D,z,B){const j={},Z=D.attributes;let Y=0;const nt=z.getAttributes();for(const X in nt)if(nt[X].location>=0){let xt=Z[X];xt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));const ot={};ot.attribute=xt,xt&&xt.data&&(ot.data=xt.data),j[X]=ot,Y++}r.attributes=j,r.attributesNum=Y,r.index=B}function v(){const M=r.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function m(M){d(M,0)}function d(M,D){const z=r.newAttributes,B=r.enabledAttributes,j=r.attributeDivisors;z[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),j[M]!==D&&(s.vertexAttribDivisor(M,D),j[M]=D)}function _(){const M=r.newAttributes,D=r.enabledAttributes;for(let z=0,B=D.length;z<B;z++)D[z]!==M[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function x(M,D,z,B,j,Z,Y){Y===!0?s.vertexAttribIPointer(M,D,z,j,Z):s.vertexAttribPointer(M,D,z,B,j,Z)}function y(M,D,z,B){v();const j=B.attributes,Z=z.getAttributes(),Y=D.defaultAttributeValues;for(const nt in Z){const X=Z[nt];if(X.location>=0){let mt=j[nt];if(mt===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),mt!==void 0){const xt=mt.normalized,ot=mt.itemSize,ct=t.get(mt);if(ct===void 0)continue;const Ft=ct.buffer,q=ct.type,it=ct.bytesPerElement,gt=q===s.INT||q===s.UNSIGNED_INT||mt.gpuType===id;if(mt.isInterleavedBufferAttribute){const dt=mt.data,Ot=dt.stride,Yt=mt.offset;if(dt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<X.locationSize;Wt++)d(X.location+Wt,dt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Wt=0;Wt<X.locationSize;Wt++)m(X.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,Ft);for(let Wt=0;Wt<X.locationSize;Wt++)x(X.location+Wt,ot/X.locationSize,q,xt,Ot*it,(Yt+ot/X.locationSize*Wt)*it,gt)}else{if(mt.isInstancedBufferAttribute){for(let dt=0;dt<X.locationSize;dt++)d(X.location+dt,mt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let dt=0;dt<X.locationSize;dt++)m(X.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Ft);for(let dt=0;dt<X.locationSize;dt++)x(X.location+dt,ot/X.locationSize,q,xt,ot*it,ot/X.locationSize*dt*it,gt)}}else if(Y!==void 0){const xt=Y[nt];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(X.location,xt);break;case 3:s.vertexAttrib3fv(X.location,xt);break;case 4:s.vertexAttrib4fv(X.location,xt);break;default:s.vertexAttrib1fv(X.location,xt)}}}}_()}function k(){L();for(const M in n){const D=n[M];for(const z in D){const B=D[z];for(const j in B)h(B[j].object),delete B[j];delete D[z]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const z in D){const B=D[z];for(const j in B)h(B[j].object),delete B[j];delete D[z]}delete n[M.id]}function R(M){for(const D in n){const z=n[D];if(z[M.id]===void 0)continue;const B=z[M.id];for(const j in B)h(B[j].object),delete B[j];delete z[M.id]}}function L(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:k,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function C2(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function R2(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Ii&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ls&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qi&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:k,maxSamples:A}}function P2(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new qi,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const _=r?0:n,x=_*4;let y=d.clippingState||null;l.value=y,y=h(g,f,x,p);for(let k=0;k!==x;++k)y[k]=e[k];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==v;++x,y+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function L2(s){let t=new WeakMap;function e(a,o){return o===tu?a.mapping=xa:o===eu&&(a.mapping=_a),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===tu||o===eu)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new V1(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Uo extends Y0{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ca=4,Sf=[.125,.215,.35,.446,.526,.582],_r=20,Kc=new Uo,Ef=new _t;let Zc=null,Jc=0,Qc=0,th=!1;const gr=(1+Math.sqrt(5))/2,jr=1/gr,Tf=[new b(-gr,jr,0),new b(gr,jr,0),new b(-jr,0,gr),new b(jr,0,gr),new b(0,gr,-jr),new b(0,gr,jr),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Af{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zc,Jc,Qc),this._renderer.xr.enabled=th,t.scissorTest=!1,hl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xa||t.mapping===_a?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:ns,format:Ii,colorSpace:Ra,depthBuffer:!1},i=Cf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D2(r)),this._blurMaterial=k2(r,t,e)}return i}_compileMaterial(t){const e=new W(this._lodPlanes[0],t);this._renderer.compile(e,Kc)}_sceneToCubeUV(t,e,n,i){const o=new jn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ef),h.toneMapping=Ts,h.autoClear=!1;const p=new Nn({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),g=new W(new Qn,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Ef),v=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;hl(i,_*x,d>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===xa||t.mapping===_a;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new W(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;hl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Kc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tf[(i-r-1)%Tf.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new W(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_r-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):_r;m>_r&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const d=[];let _=0;for(let R=0;R<_r;++R){const L=R/v,S=Math.exp(-L*L/2);d.push(S),R===0?_+=S:R<m&&(_+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],k=3*y*(i>x-ca?i-x+ca:0),A=4*(this._cubeSize-y);hl(e,k,A,3*y,2*y),l.setRenderTarget(e),l.render(u,Kc)}}function D2(s){const t=[],e=[],n=[];let i=s;const r=s-ca+1+Sf.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ca?l=Sf[a-s+ca-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,L=A>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];_.set(S,v*g*A),x.set(f,m*g*A);const M=[A,A,A,A,A,A];y.set(M,d*g*A)}const k=new sn;k.setAttribute("position",new cn(_,v)),k.setAttribute("uv",new cn(x,m)),k.setAttribute("faceIndex",new cn(y,d)),t.push(k),i>ca&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cf(s,t,e){const n=new Fn(s,t,e);return n.texture.mapping=pc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hl(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function k2(s,t,e){const n=new Float32Array(_r),i=new b(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Rf(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Pf(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function fd(){return`

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
	`}function I2(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===tu||l===eu,h=l===xa||l===_a;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Af(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Af(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function U2(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&so("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function N2(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)t.update(v[m],s.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,y=_.length;x<y;x+=3){const k=_[x+0],A=_[x+1],R=_[x+2];f.push(k,A,A,R,R,k)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const k=x+0,A=x+1,R=x+2;f.push(k,A,A,R,R,k)}}else return;const m=new(B0(f)?X0:$0)(f,1);m.version=v;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function z2(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*v[_];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function F2(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function O2(s,t,e){const n=new WeakMap,i=new Ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let k=o.attributes.position.count*y,A=1;k>t.maxTextureSize&&(A=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const R=new Float32Array(k*A*4*u),L=new V0(R,k,A,u);L.type=Qi,L.needsUpdate=!0;const S=y*4;for(let D=0;D<u;D++){const z=d[D],B=_[D],j=x[D],Z=k*A*4*D;for(let Y=0;Y<z.count;Y++){const nt=Y*S;g===!0&&(i.fromBufferAttribute(z,Y),R[Z+nt+0]=i.x,R[Z+nt+1]=i.y,R[Z+nt+2]=i.z,R[Z+nt+3]=0),v===!0&&(i.fromBufferAttribute(B,Y),R[Z+nt+4]=i.x,R[Z+nt+5]=i.y,R[Z+nt+6]=i.z,R[Z+nt+7]=0),m===!0&&(i.fromBufferAttribute(j,Y),R[Z+nt+8]=i.x,R[Z+nt+9]=i.y,R[Z+nt+10]=i.z,R[Z+nt+11]=j.itemSize===4?i.w:1)}}f={count:u,texture:L,size:new et(k,A)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function B2(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Z0 extends gn{constructor(t,e,n,i,r,a,o,l,c,h=fa){if(h!==fa&&h!==ba)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fa&&(n=Rr),n===void 0&&h===ba&&(n=ya),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Jn,this.minFilter=l!==void 0?l:Jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const J0=new gn,Lf=new Z0(1,1),Q0=new V0,tm=new A1,em=new j0,Df=[],kf=[],If=new Float32Array(16),Uf=new Float32Array(9),Nf=new Float32Array(4);function Da(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Df[i];if(r===void 0&&(r=new Float32Array(i),Df[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function en(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function nn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function gc(s,t){let e=kf[t];e===void 0&&(e=new Int32Array(t),kf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function H2(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function V2(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2fv(this.addr,t),nn(e,t)}}function G2(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;s.uniform3fv(this.addr,t),nn(e,t)}}function W2(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4fv(this.addr,t),nn(e,t)}}function $2(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Nf.set(n),s.uniformMatrix2fv(this.addr,!1,Nf),nn(e,n)}}function X2(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Uf.set(n),s.uniformMatrix3fv(this.addr,!1,Uf),nn(e,n)}}function q2(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;If.set(n),s.uniformMatrix4fv(this.addr,!1,If),nn(e,n)}}function Y2(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function j2(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2iv(this.addr,t),nn(e,t)}}function K2(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;s.uniform3iv(this.addr,t),nn(e,t)}}function Z2(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4iv(this.addr,t),nn(e,t)}}function J2(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Q2(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2uiv(this.addr,t),nn(e,t)}}function t_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;s.uniform3uiv(this.addr,t),nn(e,t)}}function e_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4uiv(this.addr,t),nn(e,t)}}function n_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Lf.compareFunction=O0,r=Lf):r=J0,e.setTexture2D(t||r,i)}function i_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||tm,i)}function s_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||em,i)}function r_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Q0,i)}function a_(s){switch(s){case 5126:return H2;case 35664:return V2;case 35665:return G2;case 35666:return W2;case 35674:return $2;case 35675:return X2;case 35676:return q2;case 5124:case 35670:return Y2;case 35667:case 35671:return j2;case 35668:case 35672:return K2;case 35669:case 35673:return Z2;case 5125:return J2;case 36294:return Q2;case 36295:return t_;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}function o_(s,t){s.uniform1fv(this.addr,t)}function l_(s,t){const e=Da(t,this.size,2);s.uniform2fv(this.addr,e)}function c_(s,t){const e=Da(t,this.size,3);s.uniform3fv(this.addr,e)}function h_(s,t){const e=Da(t,this.size,4);s.uniform4fv(this.addr,e)}function u_(s,t){const e=Da(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function d_(s,t){const e=Da(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function f_(s,t){const e=Da(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function p_(s,t){s.uniform1iv(this.addr,t)}function m_(s,t){s.uniform2iv(this.addr,t)}function g_(s,t){s.uniform3iv(this.addr,t)}function v_(s,t){s.uniform4iv(this.addr,t)}function x_(s,t){s.uniform1uiv(this.addr,t)}function __(s,t){s.uniform2uiv(this.addr,t)}function y_(s,t){s.uniform3uiv(this.addr,t)}function b_(s,t){s.uniform4uiv(this.addr,t)}function M_(s,t,e){const n=this.cache,i=t.length,r=gc(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||J0,r[a])}function w_(s,t,e){const n=this.cache,i=t.length,r=gc(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||tm,r[a])}function S_(s,t,e){const n=this.cache,i=t.length,r=gc(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||em,r[a])}function E_(s,t,e){const n=this.cache,i=t.length,r=gc(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Q0,r[a])}function T_(s){switch(s){case 5126:return o_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return __;case 36295:return y_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return E_}}class A_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=a_(e.type)}}class C_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T_(e.type)}}class R_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function zf(s,t){s.seq.push(t),s.map[t.id]=t}function P_(s,t,e){const n=s.name,i=n.length;for(eh.lastIndex=0;;){const r=eh.exec(n),a=eh.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zf(e,c===void 0?new A_(o,s,t):new C_(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new R_(o),zf(e,u)),e=u}}}class Ol{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);P_(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ff(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const L_=37297;let D_=0;function k_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Of=new ee;function I_(s){de._getMatrix(Of,de.workingColorSpace,s);const t=`mat3( ${Of.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(s)){case mc:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Bf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+k_(s.getShaderSource(t),a)}else return i}function U_(s,t){const e=I_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function N_(s,t){let e;switch(t){case M0:e="Linear";break;case w0:e="Reinhard";break;case S0:e="Cineon";break;case E0:e="ACESFilmic";break;case T0:e="AgX";break;case A0:e="Neutral";break;case Wg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ul=new b;function z_(){de.getLuminanceCoefficients(ul);const s=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function O_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ro(s){return s!==""}function Hf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(s){return s.replace(H_,G_)}const V_=new Map;function G_(s,t){let e=ie[t];if(e===void 0){const n=V_.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pu(e)}const W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(s){return s.replace(W_,$_)}function $_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===y0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===b0?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_s&&(t="SHADOWMAP_TYPE_VSM"),t}function q_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xa:case _a:t="ENVMAP_TYPE_CUBE";break;case pc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _a:t="ENVMAP_MODE_REFRACTION";break}return t}function j_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case nd:t="ENVMAP_BLENDING_MULTIPLY";break;case Vg:t="ENVMAP_BLENDING_MIX";break;case Gg:t="ENVMAP_BLENDING_ADD";break}return t}function K_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Z_(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=X_(e),c=q_(e),h=Y_(e),u=j_(e),f=K_(e),p=F_(e),g=O_(r),v=i.createProgram();let m,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ro).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ro).join(`
`),d.length>0&&(d+=`
`)):(m=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),d=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ts?"#define TONE_MAPPING":"",e.toneMapping!==Ts?ie.tonemapping_pars_fragment:"",e.toneMapping!==Ts?N_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,U_("linearToOutputTexel",e.outputColorSpace),z_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),a=Pu(a),a=Hf(a,e),a=Vf(a,e),o=Pu(o),o=Hf(o,e),o=Vf(o,e),a=Gf(a),o=Gf(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=_+m+a,y=_+d+o,k=Ff(i,i.VERTEX_SHADER,x),A=Ff(i,i.FRAGMENT_SHADER,y);i.attachShader(v,k),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(D){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(v).trim(),B=i.getShaderInfoLog(k).trim(),j=i.getShaderInfoLog(A).trim();let Z=!0,Y=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,k,A);else{const nt=Bf(i,k,"vertex"),X=Bf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+nt+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||j==="")&&(Y=!1);Y&&(D.diagnostics={runnable:Z,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:j,prefix:d}})}i.deleteShader(k),i.deleteShader(A),L=new Ol(i,v),S=B_(i,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,L_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=A,this}let J_=0;class Q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ty(t),e.set(t,n)),n}}class ty{constructor(t){this.id=J_++,this.code=t,this.usedTimes=0}}function ey(s,t,e,n,i,r,a){const o=new ud,l=new Q_,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,z,B){const j=z.fog,Z=B.geometry,Y=S.isMeshStandardMaterial?z.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),X=nt&&nt.mapping===pc?nt.image.height:null,mt=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const xt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ot=xt!==void 0?xt.length:0;let ct=0;Z.morphAttributes.position!==void 0&&(ct=1),Z.morphAttributes.normal!==void 0&&(ct=2),Z.morphAttributes.color!==void 0&&(ct=3);let Ft,q,it,gt;if(mt){const be=Yi[mt];Ft=be.vertexShader,q=be.fragmentShader}else Ft=S.vertexShader,q=S.fragmentShader,l.update(S),it=l.getVertexShaderID(S),gt=l.getFragmentShaderID(S);const dt=s.getRenderTarget(),Ot=s.state.buffers.depth.getReversed(),Yt=B.isInstancedMesh===!0,Wt=B.isBatchedMesh===!0,H=!!S.map,$=!!S.matcap,rt=!!nt,P=!!S.aoMap,Rt=!!S.lightMap,lt=!!S.bumpMap,Ct=!!S.normalMap,ft=!!S.displacementMap,$t=!!S.emissiveMap,Tt=!!S.metalnessMap,C=!!S.roughnessMap,w=S.anisotropy>0,O=S.clearcoat>0,J=S.dispersion>0,at=S.iridescence>0,tt=S.sheen>0,It=S.transmission>0,bt=w&&!!S.anisotropyMap,Pt=O&&!!S.clearcoatMap,re=O&&!!S.clearcoatNormalMap,ht=O&&!!S.clearcoatRoughnessMap,Lt=at&&!!S.iridescenceMap,qt=at&&!!S.iridescenceThicknessMap,jt=tt&&!!S.sheenColorMap,Dt=tt&&!!S.sheenRoughnessMap,ue=!!S.specularMap,ne=!!S.specularColorMap,Re=!!S.specularIntensityMap,I=It&&!!S.transmissionMap,Mt=It&&!!S.thicknessMap,K=!!S.gradientMap,st=!!S.alphaMap,At=S.alphaTest>0,St=!!S.alphaHash,Qt=!!S.extensions;let He=Ts;S.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(He=s.toneMapping);const dn={shaderID:mt,shaderType:S.type,shaderName:S.name,vertexShader:Ft,fragmentShader:q,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:gt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&B._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&B.instanceColor!==null,instancingMorph:Yt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ra,alphaToCoverage:!!S.alphaToCoverage,map:H,matcap:$,envMap:rt,envMapMode:rt&&nt.mapping,envMapCubeUVHeight:X,aoMap:P,lightMap:Rt,bumpMap:lt,normalMap:Ct,displacementMap:f&&ft,emissiveMap:$t,normalMapObjectSpace:Ct&&S.normalMapType===Yg,normalMapTangentSpace:Ct&&S.normalMapType===F0,metalnessMap:Tt,roughnessMap:C,anisotropy:w,anisotropyMap:bt,clearcoat:O,clearcoatMap:Pt,clearcoatNormalMap:re,clearcoatRoughnessMap:ht,dispersion:J,iridescence:at,iridescenceMap:Lt,iridescenceThicknessMap:qt,sheen:tt,sheenColorMap:jt,sheenRoughnessMap:Dt,specularMap:ue,specularColorMap:ne,specularIntensityMap:Re,transmission:It,transmissionMap:I,thicknessMap:Mt,gradientMap:K,opaque:S.transparent===!1&&S.blending===Tr&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:At,alphaHash:St,combine:S.combine,mapUv:H&&v(S.map.channel),aoMapUv:P&&v(S.aoMap.channel),lightMapUv:Rt&&v(S.lightMap.channel),bumpMapUv:lt&&v(S.bumpMap.channel),normalMapUv:Ct&&v(S.normalMap.channel),displacementMapUv:ft&&v(S.displacementMap.channel),emissiveMapUv:$t&&v(S.emissiveMap.channel),metalnessMapUv:Tt&&v(S.metalnessMap.channel),roughnessMapUv:C&&v(S.roughnessMap.channel),anisotropyMapUv:bt&&v(S.anisotropyMap.channel),clearcoatMapUv:Pt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&v(S.sheenRoughnessMap.channel),specularMapUv:ue&&v(S.specularMap.channel),specularColorMapUv:ne&&v(S.specularColorMap.channel),specularIntensityMapUv:Re&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:Mt&&v(S.thicknessMap.channel),alphaMapUv:st&&v(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ct||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(H||st),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ot,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:H&&S.map.isVideoTexture===!0&&de.getTransfer(S.map.colorSpace)===we,decodeVideoTextureEmissive:$t&&S.emissiveMap.isVideoTexture===!0&&de.getTransfer(S.emissiveMap.colorSpace)===we,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zn,flipSided:S.side===zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&S.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dn.vertexUv1s=c.has(1),dn.vertexUv2s=c.has(2),dn.vertexUv3s=c.has(3),c.clear(),dn}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(_(M,S),x(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=g[S.type];let D;if(M){const z=Yi[M];D=So.clone(z.uniforms)}else D=S.uniforms;return D}function k(S,M){let D;for(let z=0,B=h.length;z<B;z++){const j=h[z];if(j.cacheKey===M){D=j,++D.usedTimes;break}}return D===void 0&&(D=new Z_(s,M,S,r),h.push(D)),D}function A(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:k,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:L}}function ny(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function iy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function $f(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xf(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,g,v,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function o(u,f,p,g,v,m){const d=a(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(u,f,p,g,v,m){const d=a(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||iy),n.length>1&&n.sort(f||$f),i.length>1&&i.sort(f||$f)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function sy(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Xf,s.set(n,[a])):i>=r.length?(a=new Xf,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ry(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new _t};break;case"SpotLight":e={position:new b,direction:new b,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new b,halfWidth:new b,halfHeight:new b};break}return s[t.id]=e,e}}}function ay(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let oy=0;function ly(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cy(s){const t=new ry,e=ay(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const i=new b,r=new fe,a=new fe;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,_=0,x=0,y=0,k=0,A=0,R=0;c.sort(ly);for(let S=0,M=c.length;S<M;S++){const D=c[S],z=D.color,B=D.intensity,j=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*B,u+=z.g*B,f+=z.b*B;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],B);R++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const nt=D.shadow,X=e.get(D);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=D.shadow.matrix,_++}n.directional[p]=Y,p++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(z).multiplyScalar(B),Y.distance=j,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[v]=Y;const nt=D.shadow;if(D.map&&(n.spotLightMap[k]=D.map,k++,nt.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[v]=nt.matrix,D.castShadow){const X=e.get(D);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=Z,y++}v++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(z).multiplyScalar(B),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const nt=D.shadow,X=e.get(D);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,X.shadowCameraNear=nt.camera.near,X.shadowCameraFar=nt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(B),Y.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[d]=Y,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==_||L.numPointShadows!==x||L.numSpotShadows!==y||L.numSpotMaps!==k||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+k-A,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=_,L.numPointShadows=x,L.numSpotShadows=y,L.numSpotMaps=k,L.numLightProbes=R,n.version=oy++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const x=c[d];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function qf(s){const t=new cy(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function hy(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new qf(s),t.set(i,[o])):r>=a.length?(o=new qf(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class uy extends La{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dy extends La{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,py=`uniform sampler2D shadow_pass;
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
}`;function my(s,t,e){let n=new dd;const i=new et,r=new et,a=new Ae,o=new uy({depthPacking:qg}),l=new dy,c={},h=e.maxTextureSize,u={[Rs]:zn,[zn]:Rs,[Zn]:Zn},f=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:fy,fragmentShader:py}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new W(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y0;let d=this.type;this.render=function(A,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Es),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=d!==_s&&this.type===_s,j=d===_s&&this.type!==_s;for(let Z=0,Y=A.length;Z<Y;Z++){const nt=A[Z],X=nt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const mt=X.getFrameExtents();if(i.multiply(mt),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/mt.x),i.x=r.x*mt.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/mt.y),i.y=r.y*mt.y,X.mapSize.y=r.y)),X.map===null||B===!0||j===!0){const ot=this.type!==_s?{minFilter:Jn,magFilter:Jn}:{};X.map!==null&&X.map.dispose(),X.map=new Fn(i.x,i.y,ot),X.map.texture.name=nt.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const xt=X.getViewportCount();for(let ot=0;ot<xt;ot++){const ct=X.getViewport(ot);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),z.viewport(a),X.updateMatrices(nt,ot),n=X.getFrustum(),y(R,L,X.camera,nt,this.type)}X.isPointLightShadow!==!0&&this.type===_s&&_(X,L),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,D)};function _(A,R){const L=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,L,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,L,p,v,null)}function x(A,R,L,S){let M=null;const D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=M.uuid,B=R.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let Z=j[B];Z===void 0&&(Z=M.clone(),j[B]=Z,R.addEventListener("dispose",k)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,S===_s?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=L}return M}function y(A,R,L,S,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===_s)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=t.update(A),j=A.material;if(Array.isArray(j)){const Z=B.groups;for(let Y=0,nt=Z.length;Y<nt;Y++){const X=Z[Y],mt=j[X.materialIndex];if(mt&&mt.visible){const xt=x(A,mt,S,M);A.onBeforeShadow(s,A,R,L,B,xt,X),s.renderBufferDirect(L,null,B,xt,A,X),A.onAfterShadow(s,A,R,L,B,xt,X)}}}else if(j.visible){const Z=x(A,j,S,M);A.onBeforeShadow(s,A,R,L,B,Z,null),s.renderBufferDirect(L,null,B,Z,A,null),A.onAfterShadow(s,A,R,L,B,Z,null)}}const z=A.children;for(let B=0,j=z.length;B<j;B++)y(z[B],R,L,S,M)}function k(A){A.target.removeEventListener("dispose",k);for(const L in c){const S=c[L],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const gy={[qh]:Yh,[jh]:Jh,[Kh]:Qh,[va]:Zh,[Yh]:qh,[Jh]:jh,[Qh]:Kh,[Zh]:va};function vy(s,t){function e(){let I=!1;const Mt=new Ae;let K=null;const st=new Ae(0,0,0,0);return{setMask:function(At){K!==At&&!I&&(s.colorMask(At,At,At,At),K=At)},setLocked:function(At){I=At},setClear:function(At,St,Qt,He,dn){dn===!0&&(At*=He,St*=He,Qt*=He),Mt.set(At,St,Qt,He),st.equals(Mt)===!1&&(s.clearColor(At,St,Qt,He),st.copy(Mt))},reset:function(){I=!1,K=null,st.set(-1,0,0,0)}}}function n(){let I=!1,Mt=!1,K=null,st=null,At=null;return{setReversed:function(St){if(Mt!==St){const Qt=t.get("EXT_clip_control");Mt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);const He=At;At=null,this.setClear(He)}Mt=St},getReversed:function(){return Mt},setTest:function(St){St?dt(s.DEPTH_TEST):Ot(s.DEPTH_TEST)},setMask:function(St){K!==St&&!I&&(s.depthMask(St),K=St)},setFunc:function(St){if(Mt&&(St=gy[St]),st!==St){switch(St){case qh:s.depthFunc(s.NEVER);break;case Yh:s.depthFunc(s.ALWAYS);break;case jh:s.depthFunc(s.LESS);break;case va:s.depthFunc(s.LEQUAL);break;case Kh:s.depthFunc(s.EQUAL);break;case Zh:s.depthFunc(s.GEQUAL);break;case Jh:s.depthFunc(s.GREATER);break;case Qh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}st=St}},setLocked:function(St){I=St},setClear:function(St){At!==St&&(Mt&&(St=1-St),s.clearDepth(St),At=St)},reset:function(){I=!1,K=null,st=null,At=null,Mt=!1}}}function i(){let I=!1,Mt=null,K=null,st=null,At=null,St=null,Qt=null,He=null,dn=null;return{setTest:function(be){I||(be?dt(s.STENCIL_TEST):Ot(s.STENCIL_TEST))},setMask:function(be){Mt!==be&&!I&&(s.stencilMask(be),Mt=be)},setFunc:function(be,Mi,hs){(K!==be||st!==Mi||At!==hs)&&(s.stencilFunc(be,Mi,hs),K=be,st=Mi,At=hs)},setOp:function(be,Mi,hs){(St!==be||Qt!==Mi||He!==hs)&&(s.stencilOp(be,Mi,hs),St=be,Qt=Mi,He=hs)},setLocked:function(be){I=be},setClear:function(be){dn!==be&&(s.clearStencil(be),dn=be)},reset:function(){I=!1,Mt=null,K=null,st=null,At=null,St=null,Qt=null,He=null,dn=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,_=null,x=null,y=null,k=null,A=null,R=new _t(0,0,0),L=0,S=!1,M=null,D=null,z=null,B=null,j=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,nt=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=nt>=2);let mt=null,xt={};const ot=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),Ft=new Ae().fromArray(ot),q=new Ae().fromArray(ct);function it(I,Mt,K,st){const At=new Uint8Array(4),St=s.createTexture();s.bindTexture(I,St),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<K;Qt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,st,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Mt+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return St}const gt={};gt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(s.DEPTH_TEST),a.setFunc(va),lt(!1),Ct(Zd),dt(s.CULL_FACE),P(Es);function dt(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Ot(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Yt(I,Mt){return u[I]!==Mt?(s.bindFramebuffer(I,Mt),u[I]=Mt,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Mt),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Wt(I,Mt){let K=p,st=!1;if(I){K=f.get(Mt),K===void 0&&(K=[],f.set(Mt,K));const At=I.textures;if(K.length!==At.length||K[0]!==s.COLOR_ATTACHMENT0){for(let St=0,Qt=At.length;St<Qt;St++)K[St]=s.COLOR_ATTACHMENT0+St;K.length=At.length,st=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,st=!0);st&&s.drawBuffers(K)}function H(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const $={[xr]:s.FUNC_ADD,[Eg]:s.FUNC_SUBTRACT,[Tg]:s.FUNC_REVERSE_SUBTRACT};$[Ag]=s.MIN,$[Cg]=s.MAX;const rt={[Rg]:s.ZERO,[Pg]:s.ONE,[Lg]:s.SRC_COLOR,[$h]:s.SRC_ALPHA,[zg]:s.SRC_ALPHA_SATURATE,[Ug]:s.DST_COLOR,[kg]:s.DST_ALPHA,[Dg]:s.ONE_MINUS_SRC_COLOR,[Xh]:s.ONE_MINUS_SRC_ALPHA,[Ng]:s.ONE_MINUS_DST_COLOR,[Ig]:s.ONE_MINUS_DST_ALPHA,[Fg]:s.CONSTANT_COLOR,[Og]:s.ONE_MINUS_CONSTANT_COLOR,[Bg]:s.CONSTANT_ALPHA,[Hg]:s.ONE_MINUS_CONSTANT_ALPHA};function P(I,Mt,K,st,At,St,Qt,He,dn,be){if(I===Es){v===!0&&(Ot(s.BLEND),v=!1);return}if(v===!1&&(dt(s.BLEND),v=!0),I!==Sg){if(I!==m||be!==S){if((d!==xr||y!==xr)&&(s.blendEquation(s.FUNC_ADD),d=xr,y=xr),be)switch(I){case Tr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case En:s.blendFunc(s.ONE,s.ONE);break;case Jd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Tr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case En:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,x=null,k=null,A=null,R.set(0,0,0),L=0,m=I,S=be}return}At=At||Mt,St=St||K,Qt=Qt||st,(Mt!==d||At!==y)&&(s.blendEquationSeparate($[Mt],$[At]),d=Mt,y=At),(K!==_||st!==x||St!==k||Qt!==A)&&(s.blendFuncSeparate(rt[K],rt[st],rt[St],rt[Qt]),_=K,x=st,k=St,A=Qt),(He.equals(R)===!1||dn!==L)&&(s.blendColor(He.r,He.g,He.b,dn),R.copy(He),L=dn),m=I,S=!1}function Rt(I,Mt){I.side===Zn?Ot(s.CULL_FACE):dt(s.CULL_FACE);let K=I.side===zn;Mt&&(K=!K),lt(K),I.blending===Tr&&I.transparent===!1?P(Es):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const st=I.stencilWrite;o.setTest(st),st&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(I){M!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),M=I)}function Ct(I){I!==Mg?(dt(s.CULL_FACE),I!==D&&(I===Zd?s.cullFace(s.BACK):I===wg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ot(s.CULL_FACE),D=I}function ft(I){I!==z&&(Y&&s.lineWidth(I),z=I)}function $t(I,Mt,K){I?(dt(s.POLYGON_OFFSET_FILL),(B!==Mt||j!==K)&&(s.polygonOffset(Mt,K),B=Mt,j=K)):Ot(s.POLYGON_OFFSET_FILL)}function Tt(I){I?dt(s.SCISSOR_TEST):Ot(s.SCISSOR_TEST)}function C(I){I===void 0&&(I=s.TEXTURE0+Z-1),mt!==I&&(s.activeTexture(I),mt=I)}function w(I,Mt,K){K===void 0&&(mt===null?K=s.TEXTURE0+Z-1:K=mt);let st=xt[K];st===void 0&&(st={type:void 0,texture:void 0},xt[K]=st),(st.type!==I||st.texture!==Mt)&&(mt!==K&&(s.activeTexture(K),mt=K),s.bindTexture(I,Mt||gt[I]),st.type=I,st.texture=Mt)}function O(){const I=xt[mt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(I){Ft.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ft.copy(I))}function Dt(I){q.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function ue(I,Mt){let K=c.get(Mt);K===void 0&&(K=new WeakMap,c.set(Mt,K));let st=K.get(I);st===void 0&&(st=s.getUniformBlockIndex(Mt,I.name),K.set(I,st))}function ne(I,Mt){const st=c.get(Mt).get(I);l.get(Mt)!==st&&(s.uniformBlockBinding(Mt,st,I.__bindingPointIndex),l.set(Mt,st))}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},mt=null,xt={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,_=null,x=null,y=null,k=null,A=null,R=new _t(0,0,0),L=0,S=!1,M=null,D=null,z=null,B=null,j=null,Ft.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Ot,bindFramebuffer:Yt,drawBuffers:Wt,useProgram:H,setBlending:P,setMaterial:Rt,setFlipSided:lt,setCullFace:Ct,setLineWidth:ft,setPolygonOffset:$t,setScissorTest:Tt,activeTexture:C,bindTexture:w,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:at,texImage2D:Lt,texImage3D:qt,updateUBOMapping:ue,uniformBlockBinding:ne,texStorage2D:re,texStorage3D:ht,texSubImage2D:tt,texSubImage3D:It,compressedTexSubImage2D:bt,compressedTexSubImage3D:Pt,scissor:jt,viewport:Dt,reset:Re}}function Yf(s,t,e,n){const i=xy(n);switch(e){case D0:return s*t;case I0:return s*t;case U0:return s*t*2;case ad:return s*t/i.components*i.byteLength;case od:return s*t/i.components*i.byteLength;case N0:return s*t*2/i.components*i.byteLength;case ld:return s*t*2/i.components*i.byteLength;case k0:return s*t*3/i.components*i.byteLength;case Ii:return s*t*4/i.components*i.byteLength;case cd:return s*t*4/i.components*i.byteLength;case Il:case Ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Nl:case zl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case su:case au:return Math.max(s,16)*Math.max(t,8)/4;case iu:case ru:return Math.max(s,8)*Math.max(t,8)/2;case ou:case lu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case cu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case du:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fu:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case pu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case mu:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case gu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case vu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case xu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _u:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case bu:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Mu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wu:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fl:case Su:case Eu:return Math.ceil(s/4)*Math.ceil(t/4)*16;case z0:case Tu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Au:case Cu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xy(s){switch(s){case Ls:case R0:return{byteLength:1,components:1};case Mo:case P0:case ns:return{byteLength:2,components:1};case sd:case rd:return{byteLength:2,components:4};case Rr:case id:case Qi:return{byteLength:4,components:1};case L0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _y(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return p?new OffscreenCanvas(C,w):Jl("canvas")}function v(C,w,O){let J=1;const at=Tt(C);if((at.width>O||at.height>O)&&(J=O/Math.max(at.width,at.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const tt=Math.floor(J*at.width),It=Math.floor(J*at.height);u===void 0&&(u=g(tt,It));const bt=w?g(tt,It):u;return bt.width=tt,bt.height=It,bt.getContext("2d").drawImage(C,0,0,tt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+tt+"x"+It+")."),bt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){s.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,w,O,J,at=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=w;if(w===s.RED&&(O===s.FLOAT&&(tt=s.R32F),O===s.HALF_FLOAT&&(tt=s.R16F),O===s.UNSIGNED_BYTE&&(tt=s.R8)),w===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(tt=s.R8UI),O===s.UNSIGNED_SHORT&&(tt=s.R16UI),O===s.UNSIGNED_INT&&(tt=s.R32UI),O===s.BYTE&&(tt=s.R8I),O===s.SHORT&&(tt=s.R16I),O===s.INT&&(tt=s.R32I)),w===s.RG&&(O===s.FLOAT&&(tt=s.RG32F),O===s.HALF_FLOAT&&(tt=s.RG16F),O===s.UNSIGNED_BYTE&&(tt=s.RG8)),w===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(tt=s.RG8UI),O===s.UNSIGNED_SHORT&&(tt=s.RG16UI),O===s.UNSIGNED_INT&&(tt=s.RG32UI),O===s.BYTE&&(tt=s.RG8I),O===s.SHORT&&(tt=s.RG16I),O===s.INT&&(tt=s.RG32I)),w===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),O===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),O===s.UNSIGNED_INT&&(tt=s.RGB32UI),O===s.BYTE&&(tt=s.RGB8I),O===s.SHORT&&(tt=s.RGB16I),O===s.INT&&(tt=s.RGB32I)),w===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),O===s.UNSIGNED_INT&&(tt=s.RGBA32UI),O===s.BYTE&&(tt=s.RGBA8I),O===s.SHORT&&(tt=s.RGBA16I),O===s.INT&&(tt=s.RGBA32I)),w===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),w===s.RGBA){const It=at?mc:de.getTransfer(J);O===s.FLOAT&&(tt=s.RGBA32F),O===s.HALF_FLOAT&&(tt=s.RGBA16F),O===s.UNSIGNED_BYTE&&(tt=It===we?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function y(C,w){let O;return C?w===null||w===Rr||w===ya?O=s.DEPTH24_STENCIL8:w===Qi?O=s.DEPTH32F_STENCIL8:w===Mo&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Rr||w===ya?O=s.DEPTH_COMPONENT24:w===Qi?O=s.DEPTH_COMPONENT32F:w===Mo&&(O=s.DEPTH_COMPONENT16),O}function k(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jn&&C.minFilter!==Ji?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){const w=C.target;w.removeEventListener("dispose",A),L(w),w.isVideoTexture&&h.delete(w)}function R(C){const w=C.target;w.removeEventListener("dispose",R),M(w)}function L(C){const w=n.get(C);if(w.__webglInit===void 0)return;const O=C.source,J=f.get(O);if(J){const at=J[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&S(C),Object.keys(J).length===0&&f.delete(O)}n.remove(C)}function S(C){const w=n.get(C);s.deleteTexture(w.__webglTexture);const O=C.source,J=f.get(O);delete J[w.__cacheKey],a.memory.textures--}function M(C){const w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let at=0;at<w.__webglFramebuffer[J].length;at++)s.deleteFramebuffer(w.__webglFramebuffer[J][at]);else s.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)s.deleteFramebuffer(w.__webglFramebuffer[J]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const O=C.textures;for(let J=0,at=O.length;J<at;J++){const tt=n.get(O[J]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(O[J])}n.remove(C)}let D=0;function z(){D=0}function B(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function j(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function Z(C,w){const O=n.get(C);if(C.isVideoTexture&&ft(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,C,w);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+w)}function Y(C,w){const O=n.get(C);if(C.version>0&&O.__version!==C.version){q(O,C,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+w)}function nt(C,w){const O=n.get(C);if(C.version>0&&O.__version!==C.version){q(O,C,w);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+w)}function X(C,w){const O=n.get(C);if(C.version>0&&O.__version!==C.version){it(O,C,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+w)}const mt={[Ps]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[nu]:s.MIRRORED_REPEAT},xt={[Jn]:s.NEAREST,[$g]:s.NEAREST_MIPMAP_NEAREST,[$o]:s.NEAREST_MIPMAP_LINEAR,[Ji]:s.LINEAR,[Rc]:s.LINEAR_MIPMAP_NEAREST,[Sr]:s.LINEAR_MIPMAP_LINEAR},ot={[jg]:s.NEVER,[e1]:s.ALWAYS,[Kg]:s.LESS,[O0]:s.LEQUAL,[Zg]:s.EQUAL,[t1]:s.GEQUAL,[Jg]:s.GREATER,[Qg]:s.NOTEQUAL};function ct(C,w){if(w.type===Qi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ji||w.magFilter===Rc||w.magFilter===$o||w.magFilter===Sr||w.minFilter===Ji||w.minFilter===Rc||w.minFilter===$o||w.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,mt[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,mt[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,mt[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,xt[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,xt[w.minFilter]),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ot[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jn||w.minFilter!==$o&&w.minFilter!==Sr||w.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ft(C,w){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",A));const J=w.source;let at=f.get(J);at===void 0&&(at={},f.set(J,at));const tt=j(w);if(tt!==C.__cacheKey){at[tt]===void 0&&(at[tt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),at[tt].usedTimes++;const It=at[C.__cacheKey];It!==void 0&&(at[C.__cacheKey].usedTimes--,It.usedTimes===0&&S(w)),C.__cacheKey=tt,C.__webglTexture=at[tt].texture}return O}function q(C,w,O){let J=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=s.TEXTURE_3D);const at=Ft(C,w),tt=w.source;e.bindTexture(J,C.__webglTexture,s.TEXTURE0+O);const It=n.get(tt);if(tt.version!==It.__version||at===!0){e.activeTexture(s.TEXTURE0+O);const bt=de.getPrimaries(de.workingColorSpace),Pt=w.colorSpace===Ys?null:de.getPrimaries(w.colorSpace),re=w.colorSpace===Ys||bt===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ht=v(w.image,!1,i.maxTextureSize);ht=$t(w,ht);const Lt=r.convert(w.format,w.colorSpace),qt=r.convert(w.type);let jt=x(w.internalFormat,Lt,qt,w.colorSpace,w.isVideoTexture);ct(J,w);let Dt;const ue=w.mipmaps,ne=w.isVideoTexture!==!0,Re=It.__version===void 0||at===!0,I=tt.dataReady,Mt=k(w,ht);if(w.isDepthTexture)jt=y(w.format===ba,w.type),Re&&(ne?e.texStorage2D(s.TEXTURE_2D,1,jt,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,jt,ht.width,ht.height,0,Lt,qt,null));else if(w.isDataTexture)if(ue.length>0){ne&&Re&&e.texStorage2D(s.TEXTURE_2D,Mt,jt,ue[0].width,ue[0].height);for(let K=0,st=ue.length;K<st;K++)Dt=ue[K],ne?I&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Lt,qt,Dt.data):e.texImage2D(s.TEXTURE_2D,K,jt,Dt.width,Dt.height,0,Lt,qt,Dt.data);w.generateMipmaps=!1}else ne?(Re&&e.texStorage2D(s.TEXTURE_2D,Mt,jt,ht.width,ht.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,Lt,qt,ht.data)):e.texImage2D(s.TEXTURE_2D,0,jt,ht.width,ht.height,0,Lt,qt,ht.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ne&&Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,jt,ue[0].width,ue[0].height,ht.depth);for(let K=0,st=ue.length;K<st;K++)if(Dt=ue[K],w.format!==Ii)if(Lt!==null)if(ne){if(I)if(w.layerUpdates.size>0){const At=Yf(Dt.width,Dt.height,w.format,w.type);for(const St of w.layerUpdates){const Qt=Dt.data.subarray(St*At/Dt.data.BYTES_PER_ELEMENT,(St+1)*At/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,St,Dt.width,Dt.height,1,Lt,Qt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,ht.depth,Lt,Dt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,jt,Dt.width,Dt.height,ht.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,ht.depth,Lt,qt,Dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,jt,Dt.width,Dt.height,ht.depth,0,Lt,qt,Dt.data)}else{ne&&Re&&e.texStorage2D(s.TEXTURE_2D,Mt,jt,ue[0].width,ue[0].height);for(let K=0,st=ue.length;K<st;K++)Dt=ue[K],w.format!==Ii?Lt!==null?ne?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Lt,Dt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,jt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?I&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Lt,qt,Dt.data):e.texImage2D(s.TEXTURE_2D,K,jt,Dt.width,Dt.height,0,Lt,qt,Dt.data)}else if(w.isDataArrayTexture)if(ne){if(Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,jt,ht.width,ht.height,ht.depth),I)if(w.layerUpdates.size>0){const K=Yf(ht.width,ht.height,w.format,w.type);for(const st of w.layerUpdates){const At=ht.data.subarray(st*K/ht.data.BYTES_PER_ELEMENT,(st+1)*K/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,st,ht.width,ht.height,1,Lt,qt,At)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Lt,qt,ht.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,ht.width,ht.height,ht.depth,0,Lt,qt,ht.data);else if(w.isData3DTexture)ne?(Re&&e.texStorage3D(s.TEXTURE_3D,Mt,jt,ht.width,ht.height,ht.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Lt,qt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,jt,ht.width,ht.height,ht.depth,0,Lt,qt,ht.data);else if(w.isFramebufferTexture){if(Re)if(ne)e.texStorage2D(s.TEXTURE_2D,Mt,jt,ht.width,ht.height);else{let K=ht.width,st=ht.height;for(let At=0;At<Mt;At++)e.texImage2D(s.TEXTURE_2D,At,jt,K,st,0,Lt,qt,null),K>>=1,st>>=1}}else if(ue.length>0){if(ne&&Re){const K=Tt(ue[0]);e.texStorage2D(s.TEXTURE_2D,Mt,jt,K.width,K.height)}for(let K=0,st=ue.length;K<st;K++)Dt=ue[K],ne?I&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Lt,qt,Dt):e.texImage2D(s.TEXTURE_2D,K,jt,Lt,qt,Dt);w.generateMipmaps=!1}else if(ne){if(Re){const K=Tt(ht);e.texStorage2D(s.TEXTURE_2D,Mt,jt,K.width,K.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,qt,ht)}else e.texImage2D(s.TEXTURE_2D,0,jt,Lt,qt,ht);m(w)&&d(J),It.__version=tt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function it(C,w,O){if(w.image.length!==6)return;const J=Ft(C,w),at=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);const tt=n.get(at);if(at.version!==tt.__version||J===!0){e.activeTexture(s.TEXTURE0+O);const It=de.getPrimaries(de.workingColorSpace),bt=w.colorSpace===Ys?null:de.getPrimaries(w.colorSpace),Pt=w.colorSpace===Ys||It===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const re=w.isCompressedTexture||w.image[0].isCompressedTexture,ht=w.image[0]&&w.image[0].isDataTexture,Lt=[];for(let st=0;st<6;st++)!re&&!ht?Lt[st]=v(w.image[st],!0,i.maxCubemapSize):Lt[st]=ht?w.image[st].image:w.image[st],Lt[st]=$t(w,Lt[st]);const qt=Lt[0],jt=r.convert(w.format,w.colorSpace),Dt=r.convert(w.type),ue=x(w.internalFormat,jt,Dt,w.colorSpace),ne=w.isVideoTexture!==!0,Re=tt.__version===void 0||J===!0,I=at.dataReady;let Mt=k(w,qt);ct(s.TEXTURE_CUBE_MAP,w);let K;if(re){ne&&Re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,ue,qt.width,qt.height);for(let st=0;st<6;st++){K=Lt[st].mipmaps;for(let At=0;At<K.length;At++){const St=K[At];w.format!==Ii?jt!==null?ne?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,St.width,St.height,jt,St.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,ue,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,St.width,St.height,jt,Dt,St.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,ue,St.width,St.height,0,jt,Dt,St.data)}}}else{if(K=w.mipmaps,ne&&Re){K.length>0&&Mt++;const st=Tt(Lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,ue,st.width,st.height)}for(let st=0;st<6;st++)if(ht){ne?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Lt[st].width,Lt[st].height,jt,Dt,Lt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ue,Lt[st].width,Lt[st].height,0,jt,Dt,Lt[st].data);for(let At=0;At<K.length;At++){const Qt=K[At].image[st].image;ne?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,Qt.width,Qt.height,jt,Dt,Qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,ue,Qt.width,Qt.height,0,jt,Dt,Qt.data)}}else{ne?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,jt,Dt,Lt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ue,jt,Dt,Lt[st]);for(let At=0;At<K.length;At++){const St=K[At];ne?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,jt,Dt,St.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,ue,jt,Dt,St.image[st])}}}m(w)&&d(s.TEXTURE_CUBE_MAP),tt.__version=at.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function gt(C,w,O,J,at,tt){const It=r.convert(O.format,O.colorSpace),bt=r.convert(O.type),Pt=x(O.internalFormat,It,bt,O.colorSpace),re=n.get(w),ht=n.get(O);if(ht.__renderTarget=w,!re.__hasExternalTextures){const Lt=Math.max(1,w.width>>tt),qt=Math.max(1,w.height>>tt);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,tt,Pt,Lt,qt,w.depth,0,It,bt,null):e.texImage2D(at,tt,Pt,Lt,qt,0,It,bt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Ct(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,at,ht.__webglTexture,0,lt(w)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,at,ht.__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(C,w,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer){const J=w.depthTexture,at=J&&J.isDepthTexture?J.type:null,tt=y(w.stencilBuffer,at),It=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=lt(w);Ct(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,tt,w.width,w.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,tt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,tt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,C)}else{const J=w.textures;for(let at=0;at<J.length;at++){const tt=J[at],It=r.convert(tt.format,tt.colorSpace),bt=r.convert(tt.type),Pt=x(tt.internalFormat,It,bt,tt.colorSpace),re=lt(w);O&&Ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,Pt,w.width,w.height):Ct(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,Pt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Pt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const at=J.__webglTexture,tt=lt(w);if(w.depthTexture.format===fa)Ct(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(w.depthTexture.format===ba)Ct(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Yt(C){const w=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",at)};J.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=J}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ot(w.__webglFramebuffer,C)}else if(O){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=s.createRenderbuffer(),dt(w.__webglDepthbuffer[J],C,!1);else{const at=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),dt(w.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,at)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(C,w,O){const J=n.get(C);w!==void 0&&gt(J.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Yt(C)}function H(C){const w=C.texture,O=n.get(C),J=n.get(w);C.addEventListener("dispose",R);const at=C.textures,tt=C.isWebGLCubeRenderTarget===!0,It=at.length>1;if(It||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=w.version,a.memory.textures++),tt){O.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer[bt]=[];for(let Pt=0;Pt<w.mipmaps.length;Pt++)O.__webglFramebuffer[bt][Pt]=s.createFramebuffer()}else O.__webglFramebuffer[bt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer=[];for(let bt=0;bt<w.mipmaps.length;bt++)O.__webglFramebuffer[bt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(It)for(let bt=0,Pt=at.length;bt<Pt;bt++){const re=n.get(at[bt]);re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ct(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let bt=0;bt<at.length;bt++){const Pt=at[bt];O.__webglColorRenderbuffer[bt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[bt]);const re=r.convert(Pt.format,Pt.colorSpace),ht=r.convert(Pt.type),Lt=x(Pt.internalFormat,re,ht,Pt.colorSpace,C.isXRRenderTarget===!0),qt=lt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Lt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,O.__webglColorRenderbuffer[bt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),ct(s.TEXTURE_CUBE_MAP,w);for(let bt=0;bt<6;bt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Pt=0;Pt<w.mipmaps.length;Pt++)gt(O.__webglFramebuffer[bt][Pt],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt);else gt(O.__webglFramebuffer[bt],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(w)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let bt=0,Pt=at.length;bt<Pt;bt++){const re=at[bt],ht=n.get(re);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),ct(s.TEXTURE_2D,re),gt(O.__webglFramebuffer,C,re,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,0),m(re)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let bt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,J.__webglTexture),ct(bt,w),w.mipmaps&&w.mipmaps.length>0)for(let Pt=0;Pt<w.mipmaps.length;Pt++)gt(O.__webglFramebuffer[Pt],C,w,s.COLOR_ATTACHMENT0,bt,Pt);else gt(O.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,bt,0);m(w)&&d(bt),e.unbindTexture()}C.depthBuffer&&Yt(C)}function $(C){const w=C.textures;for(let O=0,J=w.length;O<J;O++){const at=w[O];if(m(at)){const tt=_(C),It=n.get(at).__webglTexture;e.bindTexture(tt,It),d(tt),e.unbindTexture()}}}const rt=[],P=[];function Rt(C){if(C.samples>0){if(Ct(C)===!1){const w=C.textures,O=C.width,J=C.height;let at=s.COLOR_BUFFER_BIT;const tt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=n.get(C),bt=w.length>1;if(bt)for(let Pt=0;Pt<w.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Pt=0;Pt<w.length;Pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),bt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const re=n.get(w[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,re,0)}s.blitFramebuffer(0,0,O,J,0,0,O,J,at,s.NEAREST),l===!0&&(rt.length=0,P.length=0,rt.push(s.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(rt.push(tt),P.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),bt)for(let Pt=0;Pt<w.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const re=n.get(w[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,re,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function lt(C){return Math.min(i.maxSamples,C.samples)}function Ct(C){const w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(C){const w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function $t(C,w){const O=C.colorSpace,J=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ra&&O!==Ys&&(de.getTransfer(O)===we?(J!==Ii||at!==Ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),w}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=nt,this.setTextureCube=X,this.rebindTextures=Wt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ct}function yy(s,t){function e(n,i=Ys){let r;const a=de.getTransfer(i);if(n===Ls)return s.UNSIGNED_BYTE;if(n===sd)return s.UNSIGNED_SHORT_4_4_4_4;if(n===rd)return s.UNSIGNED_SHORT_5_5_5_1;if(n===L0)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===R0)return s.BYTE;if(n===P0)return s.SHORT;if(n===Mo)return s.UNSIGNED_SHORT;if(n===id)return s.INT;if(n===Rr)return s.UNSIGNED_INT;if(n===Qi)return s.FLOAT;if(n===ns)return s.HALF_FLOAT;if(n===D0)return s.ALPHA;if(n===k0)return s.RGB;if(n===Ii)return s.RGBA;if(n===I0)return s.LUMINANCE;if(n===U0)return s.LUMINANCE_ALPHA;if(n===fa)return s.DEPTH_COMPONENT;if(n===ba)return s.DEPTH_STENCIL;if(n===ad)return s.RED;if(n===od)return s.RED_INTEGER;if(n===N0)return s.RG;if(n===ld)return s.RG_INTEGER;if(n===cd)return s.RGBA_INTEGER;if(n===Il||n===Ul||n===Nl||n===zl)if(a===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Il)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ul)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===iu||n===su||n===ru||n===au)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===iu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===su)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===au)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ou||n===lu||n===cu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ou||n===lu)return a===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hu||n===uu||n===du||n===fu||n===pu||n===mu||n===gu||n===vu||n===xu||n===_u||n===yu||n===bu||n===Mu||n===wu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===du)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_u)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wu)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fl||n===Su||n===Eu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fl)return a===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===z0||n===Tu||n===Au||n===Cu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Au)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ya?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class by extends jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ut extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const My={type:"move"};class nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(My)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sy=`
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

}`;class Ey{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new gn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new je({vertexShader:wy,fragmentShader:Sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ty extends Pa{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const v=new Ey,m=e.getContextAttributes();let d=null,_=null;const x=[],y=[],k=new et;let A=null;const R=new jn;R.viewport=new Ae;const L=new jn;L.viewport=new Ae;const S=[R,L],M=new by;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let it=x[q];return it===void 0&&(it=new nh,x[q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(q){let it=x[q];return it===void 0&&(it=new nh,x[q]=it),it.getGripSpace()},this.getHand=function(q){let it=x[q];return it===void 0&&(it=new nh,x[q]=it),it.getHandSpace()};function B(q){const it=y.indexOf(q.inputSource);if(it===-1)return;const gt=x[it];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||a),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",Z);for(let q=0;q<x.length;q++){const it=y[q];it!==null&&(y[q]=null,x[q].disconnect(it))}D=null,z=null,v.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,_=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",j),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(k),i.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Fn(p.framebufferWidth,p.framebufferHeight,{format:Ii,type:Ls,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,gt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?ba:fa,gt=m.stencil?ya:Rr);const Ot={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Ot),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Fn(f.textureWidth,f.textureHeight,{format:Ii,type:Ls,depthTexture:new Z0(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(q){for(let it=0;it<q.removed.length;it++){const gt=q.removed[it],dt=y.indexOf(gt);dt>=0&&(y[dt]=null,x[dt].disconnect(gt))}for(let it=0;it<q.added.length;it++){const gt=q.added[it];let dt=y.indexOf(gt);if(dt===-1){for(let Yt=0;Yt<x.length;Yt++)if(Yt>=y.length){y.push(gt),dt=Yt;break}else if(y[Yt]===null){y[Yt]=gt,dt=Yt;break}if(dt===-1)break}const Ot=x[dt];Ot&&Ot.connect(gt)}}const Y=new b,nt=new b;function X(q,it,gt){Y.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(gt.matrixWorld);const dt=Y.distanceTo(nt),Ot=it.projectionMatrix.elements,Yt=gt.projectionMatrix.elements,Wt=Ot[14]/(Ot[10]-1),H=Ot[14]/(Ot[10]+1),$=(Ot[9]+1)/Ot[5],rt=(Ot[9]-1)/Ot[5],P=(Ot[8]-1)/Ot[0],Rt=(Yt[8]+1)/Yt[0],lt=Wt*P,Ct=Wt*Rt,ft=dt/(-P+Rt),$t=ft*-P;if(it.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX($t),q.translateZ(ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ot[10]===-1)q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Tt=Wt+ft,C=H+ft,w=lt-$t,O=Ct+(dt-$t),J=$*H/C*Tt,at=rt*H/C*Tt;q.projectionMatrix.makePerspective(w,O,J,at,Tt,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function mt(q,it){it===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(it.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let it=q.near,gt=q.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),M.near=L.near=R.near=it,M.far=L.far=R.far=gt,(D!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,z=M.far),R.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const dt=q.parent,Ot=M.cameras;mt(M,dt);for(let Yt=0;Yt<Ot.length;Yt++)mt(Ot[Yt],dt);Ot.length===2?X(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),xt(q,M,dt)};function xt(q,it,gt){gt===null?q.matrix.copy(it.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(it.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=wo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ot=null;function ct(q,it){if(h=it.getViewerPose(c||a),g=it,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let dt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,dt=!0);for(let Yt=0;Yt<gt.length;Yt++){const Wt=gt[Yt];let H=null;if(p!==null)H=p.getViewport(Wt);else{const rt=u.getViewSubImage(f,Wt);H=rt.viewport,Yt===0&&(t.setRenderTargetTextures(_,rt.colorTexture,f.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(_))}let $=S[Yt];$===void 0&&($=new jn,$.layers.enable(Yt),$.viewport=new Ae,S[Yt]=$),$.matrix.fromArray(Wt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Wt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(H.x,H.y,H.width,H.height),Yt===0&&(M.matrix.copy($.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),dt===!0&&M.cameras.push($)}const Ot=i.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Yt=u.getDepthInformation(gt[0]);Yt&&Yt.isValid&&Yt.texture&&v.init(t,Yt,i.renderState)}}for(let gt=0;gt<x.length;gt++){const dt=y[gt],Ot=x[gt];dt!==null&&Ot!==void 0&&Ot.update(dt,it,c||a)}ot&&ot(q,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Ft=new K0;Ft.setAnimationLoop(ct),this.setAnimationLoop=function(q){ot=q},this.dispose=function(){}}}const lr=new os,Ay=new fe;function Cy(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,q0(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,_,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===zn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===zn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=t.get(d),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,lr.copy(y),lr.x*=-1,lr.y*=-1,lr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(lr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ry(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function c(_,x){let y=i[_.id];y===void 0&&(g(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",m));const k=x.program;n.updateUBOMapping(_,k);const A=t.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function h(_){const x=u();_.__bindingPointIndex=x;const y=s.createBuffer(),k=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,k,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=i[_.id],y=_.uniforms,k=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,R=y.length;A<R;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=L.length;S<M;S++){const D=L[S];if(p(D,A,S,k)===!0){const z=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let Z=0;Z<B.length;Z++){const Y=B[Z],nt=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,z+j,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,j),j+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,x,y,k){const A=_.value,R=x+"_"+y;if(k[R]===void 0)return typeof A=="number"||typeof A=="boolean"?k[R]=A:k[R]=A.clone(),!0;{const L=k[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return k[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(_){const x=_.uniforms;let y=0;const k=16;for(let R=0,L=x.length;R<L;R++){const S=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,D=S.length;M<D;M++){const z=S[M],B=Array.isArray(z.value)?z.value:[z.value];for(let j=0,Z=B.length;j<Z;j++){const Y=B[j],nt=v(Y),X=y%k,mt=X%nt.boundary,xt=X+mt;y+=mt,xt!==0&&k-xt<nt.storage&&(y+=k-xt),z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=nt.storage}}}const A=y%k;return A>0&&(y+=k-A),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}class Py{constructor(t={}){const{canvas:e=_1(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const _=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=Ts,this.toneMappingExposure=1;const y=this;let k=!1,A=0,R=0,L=null,S=-1,M=null;const D=new Ae,z=new Ae;let B=null;const j=new _t(0);let Z=0,Y=e.width,nt=e.height,X=1,mt=null,xt=null;const ot=new Ae(0,0,Y,nt),ct=new Ae(0,0,Y,nt);let Ft=!1;const q=new dd;let it=!1,gt=!1;const dt=new fe,Ot=new fe,Yt=new b,Wt=new Ae,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function rt(){return L===null?X:1}let P=n;function Rt(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ed}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",St,!1),P===null){const U="webgl2";if(P=Rt(U,E),P===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let lt,Ct,ft,$t,Tt,C,w,O,J,at,tt,It,bt,Pt,re,ht,Lt,qt,jt,Dt,ue,ne,Re,I;function Mt(){lt=new U2(P),lt.init(),ne=new yy(P,lt),Ct=new R2(P,lt,t,ne),ft=new vy(P,lt),Ct.reverseDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),$t=new F2(P),Tt=new ny,C=new _y(P,lt,ft,Tt,Ct,ne,$t),w=new L2(y),O=new I2(y),J=new $1(P),Re=new A2(P,J),at=new N2(P,J,$t,Re),tt=new B2(P,at,J,$t),jt=new O2(P,Ct,C),ht=new P2(Tt),It=new ey(y,w,O,lt,Ct,Re,ht),bt=new Cy(y,Tt),Pt=new sy,re=new hy(lt),qt=new T2(y,w,O,ft,tt,p,l),Lt=new my(y,tt,Ct),I=new Ry(P,$t,Ct,ft),Dt=new C2(P,lt,$t),ue=new z2(P,lt,$t),$t.programs=It.programs,y.capabilities=Ct,y.extensions=lt,y.properties=Tt,y.renderLists=Pt,y.shadowMap=Lt,y.state=ft,y.info=$t}Mt();const K=new Ty(y,P);this.xr=K,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(Y,nt,!1))},this.getSize=function(E){return E.set(Y,nt)},this.setSize=function(E,U,V=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,nt=U,e.width=Math.floor(E*X),e.height=Math.floor(U*X),V===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Y*X,nt*X).floor()},this.setDrawingBufferSize=function(E,U,V){Y=E,nt=U,X=V,e.width=Math.floor(E*V),e.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(ot)},this.setViewport=function(E,U,V,G){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,U,V,G),ft.viewport(D.copy(ot).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,U,V,G){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,U,V,G),ft.scissor(z.copy(ct).multiplyScalar(X).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(E){ft.setScissorTest(Ft=E)},this.setOpaqueSort=function(E){mt=E},this.setTransparentSort=function(E){xt=E},this.getClearColor=function(E){return E.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(E=!0,U=!0,V=!0){let G=0;if(E){let N=!1;if(L!==null){const pt=L.texture.format;N=pt===cd||pt===ld||pt===od}if(N){const pt=L.texture.type,Et=pt===Ls||pt===Rr||pt===Mo||pt===ya||pt===sd||pt===rd,Ut=qt.getClearColor(),Nt=qt.getClearAlpha(),Jt=Ut.r,te=Ut.g,zt=Ut.b;Et?(g[0]=Jt,g[1]=te,g[2]=zt,g[3]=Nt,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Jt,v[1]=te,v[2]=zt,v[3]=Nt,P.clearBufferiv(P.COLOR,0,v))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Pt.dispose(),re.dispose(),Tt.dispose(),w.dispose(),O.dispose(),tt.dispose(),Re.dispose(),I.dispose(),It.dispose(),K.dispose(),K.removeEventListener("sessionstart",Gd),K.removeEventListener("sessionend",Wd),nr.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const E=$t.autoReset,U=Lt.enabled,V=Lt.autoUpdate,G=Lt.needsUpdate,N=Lt.type;Mt(),$t.autoReset=E,Lt.enabled=U,Lt.autoUpdate=V,Lt.needsUpdate=G,Lt.type=N}function St(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Qt(E){const U=E.target;U.removeEventListener("dispose",Qt),He(U)}function He(E){dn(E),Tt.remove(E)}function dn(E){const U=Tt.get(E).programs;U!==void 0&&(U.forEach(function(V){It.releaseProgram(V)}),E.isShaderMaterial&&It.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,G,N,pt){U===null&&(U=H);const Et=N.isMesh&&N.matrixWorld.determinant()<0,Ut=_g(E,U,V,G,N);ft.setMaterial(G,Et);let Nt=V.index,Jt=1;if(G.wireframe===!0){if(Nt=at.getWireframeAttribute(V),Nt===void 0)return;Jt=2}const te=V.drawRange,zt=V.attributes.position;let pe=te.start*Jt,Pe=(te.start+te.count)*Jt;pt!==null&&(pe=Math.max(pe,pt.start*Jt),Pe=Math.min(Pe,(pt.start+pt.count)*Jt)),Nt!==null?(pe=Math.max(pe,0),Pe=Math.min(Pe,Nt.count)):zt!=null&&(pe=Math.max(pe,0),Pe=Math.min(Pe,zt.count));const De=Pe-pe;if(De<0||De===1/0)return;Re.setup(N,G,Ut,V,Nt);let Tn,ve=Dt;if(Nt!==null&&(Tn=J.get(Nt),ve=ue,ve.setIndex(Tn)),N.isMesh)G.wireframe===!0?(ft.setLineWidth(G.wireframeLinewidth*rt()),ve.setMode(P.LINES)):ve.setMode(P.TRIANGLES);else if(N.isLine){let Bt=G.linewidth;Bt===void 0&&(Bt=1),ft.setLineWidth(Bt*rt()),N.isLineSegments?ve.setMode(P.LINES):N.isLineLoop?ve.setMode(P.LINE_LOOP):ve.setMode(P.LINE_STRIP)}else N.isPoints?ve.setMode(P.POINTS):N.isSprite&&ve.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ve.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ve.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Bt=N._multiDrawStarts,us=N._multiDrawCounts,xe=N._multiDrawCount,wi=Nt?J.get(Nt).bytesPerElement:1,Ur=Tt.get(G).currentProgram.getUniforms();for(let Vn=0;Vn<xe;Vn++)Ur.setValue(P,"_gl_DrawID",Vn),ve.render(Bt[Vn]/wi,us[Vn])}else if(N.isInstancedMesh)ve.renderInstances(pe,De,N.count);else if(V.isInstancedBufferGeometry){const Bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,us=Math.min(V.instanceCount,Bt);ve.renderInstances(pe,De,us)}else ve.render(pe,De)};function be(E,U,V){E.transparent===!0&&E.side===Zn&&E.forceSinglePass===!1?(E.side=zn,E.needsUpdate=!0,Wo(E,U,V),E.side=Rs,E.needsUpdate=!0,Wo(E,U,V),E.side=Zn):Wo(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),d=re.get(V),d.init(U),x.push(d),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),E!==V&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const G=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const pt=N.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){const Ut=pt[Et];be(Ut,V,N),G.add(Ut)}else be(pt,V,N),G.add(pt)}),x.pop(),d=null,G},this.compileAsync=function(E,U,V=null){const G=this.compile(E,U,V);return new Promise(N=>{function pt(){if(G.forEach(function(Et){Tt.get(Et).currentProgram.isReady()&&G.delete(Et)}),G.size===0){N(E);return}setTimeout(pt,10)}lt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Mi=null;function hs(E){Mi&&Mi(E)}function Gd(){nr.stop()}function Wd(){nr.start()}const nr=new K0;nr.setAnimationLoop(hs),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(E){Mi=E,K.setAnimationLoop(E),E===null?nr.stop():nr.start()},K.addEventListener("sessionstart",Gd),K.addEventListener("sessionend",Wd),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,U,L),d=re.get(E,x.length),d.init(U),x.push(d),Ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Ot),gt=this.localClippingEnabled,it=ht.init(this.clippingPlanes,gt),m=Pt.get(E,_.length),m.init(),_.push(m),K.enabled===!0&&K.isPresenting===!0){const pt=y.xr.getDepthSensingMesh();pt!==null&&Cc(pt,U,-1/0,y.sortObjects)}Cc(E,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(mt,xt),$=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,$&&qt.addToRenderList(m,E),this.info.render.frame++,it===!0&&ht.beginShadows();const V=d.state.shadowsArray;Lt.render(V,E,U),it===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){const pt=U.cameras;if(N.length>0)for(let Et=0,Ut=pt.length;Et<Ut;Et++){const Nt=pt[Et];Xd(G,N,E,Nt)}$&&qt.render(E);for(let Et=0,Ut=pt.length;Et<Ut;Et++){const Nt=pt[Et];$d(m,E,Nt,Nt.viewport)}}else N.length>0&&Xd(G,N,E,U),$&&qt.render(E),$d(m,E,U);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,U),Re.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(d=x[x.length-1],it===!0&&ht.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Cc(E,U,V,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){G&&Wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ot);const Et=tt.update(E),Ut=E.material;Ut.visible&&m.push(E,Et,Ut,V,Wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const Et=tt.update(E),Ut=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Wt.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Wt.copy(Et.boundingSphere.center)),Wt.applyMatrix4(E.matrixWorld).applyMatrix4(Ot)),Array.isArray(Ut)){const Nt=Et.groups;for(let Jt=0,te=Nt.length;Jt<te;Jt++){const zt=Nt[Jt],pe=Ut[zt.materialIndex];pe&&pe.visible&&m.push(E,Et,pe,V,Wt.z,zt)}}else Ut.visible&&m.push(E,Et,Ut,V,Wt.z,null)}}const pt=E.children;for(let Et=0,Ut=pt.length;Et<Ut;Et++)Cc(pt[Et],U,V,G)}function $d(E,U,V,G){const N=E.opaque,pt=E.transmissive,Et=E.transparent;d.setupLightsView(V),it===!0&&ht.setGlobalState(y.clippingPlanes,V),G&&ft.viewport(D.copy(G)),N.length>0&&Go(N,U,V),pt.length>0&&Go(pt,U,V),Et.length>0&&Go(Et,U,V),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Xd(E,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Fn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?ns:Ls,minFilter:Sr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const pt=d.state.transmissionRenderTarget[G.id],Et=G.viewport||D;pt.setSize(Et.z,Et.w);const Ut=y.getRenderTarget();y.setRenderTarget(pt),y.getClearColor(j),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),$&&qt.render(V);const Nt=y.toneMapping;y.toneMapping=Ts;const Jt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),it===!0&&ht.setGlobalState(y.clippingPlanes,G),Go(E,V,G),C.updateMultisampleRenderTarget(pt),C.updateRenderTargetMipmap(pt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let zt=0,pe=U.length;zt<pe;zt++){const Pe=U[zt],De=Pe.object,Tn=Pe.geometry,ve=Pe.material,Bt=Pe.group;if(ve.side===Zn&&De.layers.test(G.layers)){const us=ve.side;ve.side=zn,ve.needsUpdate=!0,qd(De,V,G,Tn,ve,Bt),ve.side=us,ve.needsUpdate=!0,te=!0}}te===!0&&(C.updateMultisampleRenderTarget(pt),C.updateRenderTargetMipmap(pt))}y.setRenderTarget(Ut),y.setClearColor(j,Z),Jt!==void 0&&(G.viewport=Jt),y.toneMapping=Nt}function Go(E,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,pt=E.length;N<pt;N++){const Et=E[N],Ut=Et.object,Nt=Et.geometry,Jt=G===null?Et.material:G,te=Et.group;Ut.layers.test(V.layers)&&qd(Ut,U,V,Nt,Jt,te)}}function qd(E,U,V,G,N,pt){E.onBeforeRender(y,U,V,G,N,pt),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(y,U,V,G,E,pt),N.transparent===!0&&N.side===Zn&&N.forceSinglePass===!1?(N.side=zn,N.needsUpdate=!0,y.renderBufferDirect(V,U,G,N,E,pt),N.side=Rs,N.needsUpdate=!0,y.renderBufferDirect(V,U,G,N,E,pt),N.side=Zn):y.renderBufferDirect(V,U,G,N,E,pt),E.onAfterRender(y,U,V,G,N,pt)}function Wo(E,U,V){U.isScene!==!0&&(U=H);const G=Tt.get(E),N=d.state.lights,pt=d.state.shadowsArray,Et=N.state.version,Ut=It.getParameters(E,N.state,pt,U,V),Nt=It.getProgramCacheKey(Ut);let Jt=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?O:w).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Jt===void 0&&(E.addEventListener("dispose",Qt),Jt=new Map,G.programs=Jt);let te=Jt.get(Nt);if(te!==void 0){if(G.currentProgram===te&&G.lightsStateVersion===Et)return jd(E,Ut),te}else Ut.uniforms=It.getUniforms(E),E.onBeforeCompile(Ut,y),te=It.acquireProgram(Ut,Nt),Jt.set(Nt,te),G.uniforms=Ut.uniforms;const zt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=ht.uniform),jd(E,Ut),G.needsLights=bg(E),G.lightsStateVersion=Et,G.needsLights&&(zt.ambientLightColor.value=N.state.ambient,zt.lightProbe.value=N.state.probe,zt.directionalLights.value=N.state.directional,zt.directionalLightShadows.value=N.state.directionalShadow,zt.spotLights.value=N.state.spot,zt.spotLightShadows.value=N.state.spotShadow,zt.rectAreaLights.value=N.state.rectArea,zt.ltc_1.value=N.state.rectAreaLTC1,zt.ltc_2.value=N.state.rectAreaLTC2,zt.pointLights.value=N.state.point,zt.pointLightShadows.value=N.state.pointShadow,zt.hemisphereLights.value=N.state.hemi,zt.directionalShadowMap.value=N.state.directionalShadowMap,zt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,zt.spotShadowMap.value=N.state.spotShadowMap,zt.spotLightMatrix.value=N.state.spotLightMatrix,zt.spotLightMap.value=N.state.spotLightMap,zt.pointShadowMap.value=N.state.pointShadowMap,zt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=te,G.uniformsList=null,te}function Yd(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ol.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function jd(E,U){const V=Tt.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function _g(E,U,V,G,N){U.isScene!==!0&&(U=H),C.resetTextureUnits();const pt=U.fog,Et=G.isMeshStandardMaterial?U.environment:null,Ut=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ra,Nt=(G.isMeshStandardMaterial?O:w).get(G.envMap||Et),Jt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,te=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),zt=!!V.morphAttributes.position,pe=!!V.morphAttributes.normal,Pe=!!V.morphAttributes.color;let De=Ts;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(De=y.toneMapping);const Tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=Tn!==void 0?Tn.length:0,Bt=Tt.get(G),us=d.state.lights;if(it===!0&&(gt===!0||E!==M)){const si=E===M&&G.id===S;ht.setState(G,E,si)}let xe=!1;G.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==us.state.version||Bt.outputColorSpace!==Ut||N.isBatchedMesh&&Bt.batching===!1||!N.isBatchedMesh&&Bt.batching===!0||N.isBatchedMesh&&Bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Bt.instancing===!1||!N.isInstancedMesh&&Bt.instancing===!0||N.isSkinnedMesh&&Bt.skinning===!1||!N.isSkinnedMesh&&Bt.skinning===!0||N.isInstancedMesh&&Bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Bt.instancingMorph===!1&&N.morphTexture!==null||Bt.envMap!==Nt||G.fog===!0&&Bt.fog!==pt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ht.numPlanes||Bt.numIntersection!==ht.numIntersection)||Bt.vertexAlphas!==Jt||Bt.vertexTangents!==te||Bt.morphTargets!==zt||Bt.morphNormals!==pe||Bt.morphColors!==Pe||Bt.toneMapping!==De||Bt.morphTargetsCount!==ve)&&(xe=!0):(xe=!0,Bt.__version=G.version);let wi=Bt.currentProgram;xe===!0&&(wi=Wo(G,U,N));let Ur=!1,Vn=!1,za=!1;const ke=wi.getUniforms(),Vi=Bt.uniforms;if(ft.useProgram(wi.program)&&(Ur=!0,Vn=!0,za=!0),G.id!==S&&(S=G.id,Vn=!0),Ur||M!==E){ft.buffers.depth.getReversed()?(dt.copy(E.projectionMatrix),b1(dt),M1(dt),ke.setValue(P,"projectionMatrix",dt)):ke.setValue(P,"projectionMatrix",E.projectionMatrix),ke.setValue(P,"viewMatrix",E.matrixWorldInverse);const Us=ke.map.cameraPosition;Us!==void 0&&Us.setValue(P,Yt.setFromMatrixPosition(E.matrixWorld)),Ct.logarithmicDepthBuffer&&ke.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ke.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Vn=!0,za=!0)}if(N.isSkinnedMesh){ke.setOptional(P,N,"bindMatrix"),ke.setOptional(P,N,"bindMatrixInverse");const si=N.skeleton;si&&(si.boneTexture===null&&si.computeBoneTexture(),ke.setValue(P,"boneTexture",si.boneTexture,C))}N.isBatchedMesh&&(ke.setOptional(P,N,"batchingTexture"),ke.setValue(P,"batchingTexture",N._matricesTexture,C),ke.setOptional(P,N,"batchingIdTexture"),ke.setValue(P,"batchingIdTexture",N._indirectTexture,C),ke.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&ke.setValue(P,"batchingColorTexture",N._colorsTexture,C));const Fa=V.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0)&&jt.update(N,V,wi),(Vn||Bt.receiveShadow!==N.receiveShadow)&&(Bt.receiveShadow=N.receiveShadow,ke.setValue(P,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Vi.envMap.value=Nt,Vi.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Vi.envMapIntensity.value=U.environmentIntensity),Vn&&(ke.setValue(P,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&yg(Vi,za),pt&&G.fog===!0&&bt.refreshFogUniforms(Vi,pt),bt.refreshMaterialUniforms(Vi,G,X,nt,d.state.transmissionRenderTarget[E.id]),Ol.upload(P,Yd(Bt),Vi,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ol.upload(P,Yd(Bt),Vi,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ke.setValue(P,"center",N.center),ke.setValue(P,"modelViewMatrix",N.modelViewMatrix),ke.setValue(P,"normalMatrix",N.normalMatrix),ke.setValue(P,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const si=G.uniformsGroups;for(let Us=0,Ns=si.length;Us<Ns;Us++){const Kd=si[Us];I.update(Kd,wi),I.bind(Kd,wi)}}return wi}function yg(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function bg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,U,V){Tt.get(E.texture).__webglTexture=U,Tt.get(E.depthTexture).__webglTexture=V;const G=Tt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const V=Tt.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,V=0){L=E,A=U,R=V;let G=!0,N=null,pt=!1,Et=!1;if(E){const Nt=Tt.get(E);if(Nt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(Nt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Nt.__hasExternalTextures)C.rebindTextures(E,Tt.get(E.texture).__webglTexture,Tt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const zt=E.depthTexture;if(Nt.__boundDepthTexture!==zt){if(zt!==null&&Tt.has(zt)&&(E.width!==zt.image.width||E.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Jt=E.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Et=!0);const te=Tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(te[U])?N=te[U][V]:N=te[U],pt=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?N=Tt.get(E).__webglMultisampledFramebuffer:Array.isArray(te)?N=te[V]:N=te,D.copy(E.viewport),z.copy(E.scissor),B=E.scissorTest}else D.copy(ot).multiplyScalar(X).floor(),z.copy(ct).multiplyScalar(X).floor(),B=Ft;if(ft.bindFramebuffer(P.FRAMEBUFFER,N)&&G&&ft.drawBuffers(E,N),ft.viewport(D),ft.scissor(z),ft.setScissorTest(B),pt){const Nt=Tt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Nt.__webglTexture,V)}else if(Et){const Nt=Tt.get(E.texture),Jt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nt.__webglTexture,V||0,Jt)}S=-1},this.readRenderTargetPixels=function(E,U,V,G,N,pt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){ft.bindFramebuffer(P.FRAMEBUFFER,Ut);try{const Nt=E.texture,Jt=Nt.format,te=Nt.type;if(!Ct.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&V>=0&&V<=E.height-N&&P.readPixels(U,V,G,N,ne.convert(Jt),ne.convert(te),pt)}finally{const Nt=L!==null?Tt.get(L).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(E,U,V,G,N,pt,Et){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){const Nt=E.texture,Jt=Nt.format,te=Nt.type;if(!Ct.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-G&&V>=0&&V<=E.height-N){ft.bindFramebuffer(P.FRAMEBUFFER,Ut);const zt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,zt),P.bufferData(P.PIXEL_PACK_BUFFER,pt.byteLength,P.STREAM_READ),P.readPixels(U,V,G,N,ne.convert(Jt),ne.convert(te),0);const pe=L!==null?Tt.get(L).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,pe);const Pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await y1(P,Pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,zt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pt),P.deleteBuffer(zt),P.deleteSync(Pe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,V=0){E.isTexture!==!0&&(so("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-V),N=Math.floor(E.image.width*G),pt=Math.floor(E.image.height*G),Et=U!==null?U.x:0,Ut=U!==null?U.y:0;C.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,Et,Ut,N,pt),ft.unbindTexture()},this.copyTextureToTexture=function(E,U,V=null,G=null,N=0){E.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let pt,Et,Ut,Nt,Jt,te,zt,pe,Pe;const De=E.isCompressedTexture?E.mipmaps[N]:E.image;V!==null?(pt=V.max.x-V.min.x,Et=V.max.y-V.min.y,Ut=V.isBox3?V.max.z-V.min.z:1,Nt=V.min.x,Jt=V.min.y,te=V.isBox3?V.min.z:0):(pt=De.width,Et=De.height,Ut=De.depth||1,Nt=0,Jt=0,te=0),G!==null?(zt=G.x,pe=G.y,Pe=G.z):(zt=0,pe=0,Pe=0);const Tn=ne.convert(U.format),ve=ne.convert(U.type);let Bt;U.isData3DTexture?(C.setTexture3D(U,0),Bt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),Bt=P.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),Bt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const us=P.getParameter(P.UNPACK_ROW_LENGTH),xe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),wi=P.getParameter(P.UNPACK_SKIP_PIXELS),Ur=P.getParameter(P.UNPACK_SKIP_ROWS),Vn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,De.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,De.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Nt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,te);const za=E.isDataArrayTexture||E.isData3DTexture,ke=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Vi=Tt.get(E),Fa=Tt.get(U),si=Tt.get(Vi.__renderTarget),Us=Tt.get(Fa.__renderTarget);ft.bindFramebuffer(P.READ_FRAMEBUFFER,si.__webglFramebuffer),ft.bindFramebuffer(P.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let Ns=0;Ns<Ut;Ns++)za&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tt.get(E).__webglTexture,N,te+Ns),E.isDepthTexture?(ke&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tt.get(U).__webglTexture,N,Pe+Ns),P.blitFramebuffer(Nt,Jt,pt,Et,zt,pe,pt,Et,P.DEPTH_BUFFER_BIT,P.NEAREST)):ke?P.copyTexSubImage3D(Bt,N,zt,pe,Pe+Ns,Nt,Jt,pt,Et):P.copyTexSubImage2D(Bt,N,zt,pe,Pe+Ns,Nt,Jt,pt,Et);ft.bindFramebuffer(P.READ_FRAMEBUFFER,null),ft.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ke?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Bt,N,zt,pe,Pe,pt,Et,Ut,Tn,ve,De.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Bt,N,zt,pe,Pe,pt,Et,Ut,Tn,De.data):P.texSubImage3D(Bt,N,zt,pe,Pe,pt,Et,Ut,Tn,ve,De):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,zt,pe,pt,Et,Tn,ve,De.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,zt,pe,De.width,De.height,Tn,De.data):P.texSubImage2D(P.TEXTURE_2D,N,zt,pe,pt,Et,Tn,ve,De);P.pixelStorei(P.UNPACK_ROW_LENGTH,us),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ur),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vn),N===0&&U.generateMipmaps&&P.generateMipmap(Bt),ft.unbindTexture()},this.copyTextureToTexture3D=function(E,U,V=null,G=null,N=0){return E.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),so('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,V,G,N)},this.initRenderTarget=function(E){Tt.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),ft.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,ft.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ws}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}class No extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ly{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ru,this.updateRanges=[],this.version=0,this.uuid=is()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new b;class Ql{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ki(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ki(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ki(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ki(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ql(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ha extends La{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Kr;const Ga=new b,Zr=new b,Jr=new b,Qr=new et,Wa=new et,nm=new fe,dl=new b,$a=new b,fl=new b,jf=new et,ih=new et,Kf=new et;class ao extends tn{constructor(t=new ha){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new sn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ly(e,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new Ql(n,3,0,!1)),Kr.setAttribute("uv",new Ql(n,2,3,!1))}this.geometry=Kr,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),nm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Jr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;pl(dl.set(-.5,-.5,0),Jr,a,Zr,i,r),pl($a.set(.5,-.5,0),Jr,a,Zr,i,r),pl(fl.set(.5,.5,0),Jr,a,Zr,i,r),jf.set(0,0),ih.set(1,0),Kf.set(1,1);let o=t.ray.intersectTriangle(dl,$a,fl,!1,Ga);if(o===null&&(pl($a.set(-.5,.5,0),Jr,a,Zr,i,r),ih.set(0,1),o=t.ray.intersectTriangle(dl,fl,$a,!1,Ga),o===null))return;const l=t.ray.origin.distanceTo(Ga);l<t.near||l>t.far||e.push({distance:l,point:Ga.clone(),uv:pi.getInterpolation(Ga,dl,$a,fl,jf,ih,Kf,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function pl(s,t,e,n,i,r){Qr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Wa.x=r*Qr.x-i*Qr.y,Wa.y=i*Qr.x+r*Qr.y):Wa.copy(Qr),s.copy(t),s.x+=Wa.x,s.y+=Wa.y,s.applyMatrix4(nm)}class Dy extends gn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Jn,h=Jn,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zf extends cn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ta=new fe,Jf=new fe,ml=[],Qf=new Bn,ky=new fe,Xa=new W,qa=new Io;class Lu extends W{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ky)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ta),Qf.copy(t.boundingBox).applyMatrix4(ta),this.boundingBox.union(Qf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Io),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ta),qa.copy(t.boundingSphere).applyMatrix4(ta),this.boundingSphere.union(qa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Xa.geometry=this.geometry,Xa.material=this.material,Xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(n),t.ray.intersectsSphere(qa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ta),Jf.multiplyMatrices(n,ta),Xa.matrixWorld=Jf,Xa.raycast(t,ml);for(let a=0,o=ml.length;a<o;a++){const l=ml[a];l.instanceId=r,l.object=this,e.push(l)}ml.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dy(new Float32Array(i*this.count),i,this.count,ad,Qi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class im extends gn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(a-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new et:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new b,i=[],r=[],a=[],o=new b,l=new fe;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new b)}r[0]=new b,a[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(on(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(on(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pd extends cs{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Iy extends pd{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function md(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,i(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const gl=new b,sh=new md,rh=new md,ah=new md;class sm extends cs{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new b){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(gl.subVectors(i[0],i[1]).add(i[0]),c=gl);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(gl.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),sh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),rh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),ah.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(sh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),rh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ah.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(sh.calc(l),rh.calc(l),ah.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new b().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tp(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Uy(s,t){const e=1-s;return e*e*t}function Ny(s,t){return 2*(1-s)*s*t}function zy(s,t){return s*s*t}function mo(s,t,e,n){return Uy(s,t)+Ny(s,e)+zy(s,n)}function Fy(s,t){const e=1-s;return e*e*e*t}function Oy(s,t){const e=1-s;return 3*e*e*s*t}function By(s,t){return 3*(1-s)*s*s*t}function Hy(s,t){return s*s*s*t}function go(s,t,e,n,i){return Fy(s,t)+Oy(s,e)+By(s,n)+Hy(s,i)}class rm extends cs{constructor(t=new et,e=new et,n=new et,i=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(go(t,i.x,r.x,a.x,o.x),go(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vy extends cs{constructor(t=new b,e=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new b){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(go(t,i.x,r.x,a.x,o.x),go(t,i.y,r.y,a.y,o.y),go(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class am extends cs{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gy extends cs{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class om extends cs{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(mo(t,i.x,r.x,a.x),mo(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lm extends cs{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(mo(t,i.x,r.x,a.x),mo(t,i.y,r.y,a.y),mo(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cm extends cs{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(tp(o,l.x,c.x,h.x,u.x),tp(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new et().fromArray(i))}return this}}var tc=Object.freeze({__proto__:null,ArcCurve:Iy,CatmullRomCurve3:sm,CubicBezierCurve:rm,CubicBezierCurve3:Vy,EllipseCurve:pd,LineCurve:am,LineCurve3:Gy,QuadraticBezierCurve:om,QuadraticBezierCurve3:lm,SplineCurve:cm});class Wy extends cs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new tc[i.type]().fromJSON(i))}return this}}class Du extends Wy{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new am(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new om(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new rm(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cm(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new pd(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zo extends sn{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=on(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new b,f=new et,p=new b,g=new b,v=new b;let m=0,d=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=e;_++){const x=n+_*h*i,y=Math.sin(x),k=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*k,a.push(u.x,u.y,u.z),f.x=_/e,f.y=A/(t.length-1),o.push(f.x,f.y);const R=l[3*A+0]*y,L=l[3*A+1],S=l[3*A+0]*k;c.push(R,L,S)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){const y=x+_*t.length,k=y,A=y+t.length,R=y+t.length+1,L=y+1;r.push(k,A,L),r.push(R,L,A)}this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.setAttribute("normal",new he(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.points,t.segments,t.phiStart,t.phiLength)}}class vc extends sn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new b,h=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ce extends sn{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const v=[],m=n/2;let d=0;_(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(p,2));function _(){const y=new b,k=new b;let A=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const S=[],M=L/r,D=M*(e-t)+t;for(let z=0;z<=i;z++){const B=z/i,j=B*l+o,Z=Math.sin(j),Y=Math.cos(j);k.x=D*Z,k.y=-M*n+m,k.z=D*Y,u.push(k.x,k.y,k.z),y.set(Z,R,Y).normalize(),f.push(y.x,y.y,y.z),p.push(B,1-M),S.push(g++)}v.push(S)}for(let L=0;L<i;L++)for(let S=0;S<r;S++){const M=v[S][L],D=v[S+1][L],z=v[S+1][L+1],B=v[S][L+1];(t>0||S!==0)&&(h.push(M,D,B),A+=3),(e>0||S!==r-1)&&(h.push(D,z,B),A+=3)}c.addGroup(d,A,0),d+=A}function x(y){const k=g,A=new et,R=new b;let L=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const D=g;for(let z=0;z<=i;z++){const j=z/i*l+o,Z=Math.cos(j),Y=Math.sin(j);R.x=S*Y,R.y=m*M,R.z=S*Z,u.push(R.x,R.y,R.z),f.push(0,M,0),A.x=Z*.5+.5,A.y=Y*.5*M+.5,p.push(A.x,A.y),g++}for(let z=0;z<i;z++){const B=k+z,j=D+z;y===!0?h.push(j,j+1,B):h.push(j+1,j,B),L+=3}c.addGroup(d,L,y===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ts extends Ce{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ts(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xc extends sn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const x=new b,y=new b,k=new b;for(let A=0;A<e.length;A+=3)p(e[A+0],x),p(e[A+1],y),p(e[A+2],k),l(x,y,k,_)}function l(_,x,y,k){const A=k+1,R=[];for(let L=0;L<=A;L++){R[L]=[];const S=_.clone().lerp(y,L/A),M=x.clone().lerp(y,L/A),D=A-L;for(let z=0;z<=D;z++)z===0&&L===A?R[L][z]=S:R[L][z]=S.clone().lerp(M,z/D)}for(let L=0;L<A;L++)for(let S=0;S<2*(A-L)-1;S++){const M=Math.floor(S/2);S%2===0?(f(R[L][M+1]),f(R[L+1][M]),f(R[L][M])):(f(R[L][M+1]),f(R[L+1][M+1]),f(R[L+1][M]))}}function c(_){const x=new b;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(_),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const _=new b;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];const y=m(_)/2/Math.PI+.5,k=d(_)/Math.PI+.5;a.push(y,1-k)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){const x=a[_+0],y=a[_+2],k=a[_+4],A=Math.max(x,y,k),R=Math.min(x,y,k);A>.9&&R<.1&&(x<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),k<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,x){const y=_*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){const _=new b,x=new b,y=new b,k=new b,A=new et,R=new et,L=new et;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),A.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),L.set(a[M+4],a[M+5]),k.copy(_).add(x).add(y).divideScalar(3);const D=m(k);v(A,M+0,_,D),v(R,M+2,x,D),v(L,M+4,y,D)}}function v(_,x,y,k){k<0&&_.x===1&&(a[x]=_.x-1),y.x===0&&y.z===0&&(a[x]=k/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.vertices,t.indices,t.radius,t.details)}}class ls extends Du{constructor(t){super(t),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Du().fromJSON(i))}return this}}const $y={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=hm(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,p;if(n&&(r=Ky(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Eo(r,a,e,o,l,p,0),a}};function hm(s,t,e,n,i){let r,a;if(i===ob(s,t,e,n)>0)for(r=t;r<e;r+=n)a=ep(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=ep(r,s[r],s[r+1],a);return a&&_c(a,a.next)&&(Ao(a),a=a.next),a}function Pr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(_c(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Eo(s,t,e,n,i,r,a){if(!s)return;!a&&r&&eb(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?qy(s,n,i,r):Xy(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Ao(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Yy(Pr(s),t,e),Eo(s,t,e,n,i,r,2)):a===2&&jy(s,t,e,n,i,r):Eo(Pr(s),t,e,n,i,r,1);break}}}function Xy(s){const t=s.prev,e=s,n=s.next;if(Oe(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&ua(i,o,r,l,a,c,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qy(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Oe(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=ku(p,g,t,e,n),_=ku(v,m,t,e,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=d&&y&&y.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&ua(o,h,l,u,c,f,x.x,x.y)&&Oe(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&ua(o,h,l,u,c,f,y.x,y.y)&&Oe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&ua(o,h,l,u,c,f,x.x,x.y)&&Oe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&ua(o,h,l,u,c,f,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Yy(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!_c(i,r)&&um(i,n,n.next,r)&&To(i,r)&&To(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ao(n),Ao(n.next),n=s=r),n=n.next}while(n!==s);return Pr(n)}function jy(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sb(a,o)){let l=dm(a,o);a=Pr(a,a.next),l=Pr(l,l.next),Eo(a,t,e,n,i,r,0),Eo(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ky(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=hm(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ib(c));for(i.sort(Zy),r=0;r<i.length;r++)e=Jy(i[r],e);return e}function Zy(s,t){return s.x-t.x}function Jy(s,t){const e=Qy(s,t);if(!e)return t;const n=dm(e,s);return Pr(n,n.next),Pr(e,e.next)}function Qy(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&ua(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),To(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&tb(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function tb(s,t){return Oe(s.prev,s,t.prev)<0&&Oe(t.next,s,s.next)<0}function eb(s,t,e,n){let i=s;do i.z===0&&(i.z=ku(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,nb(i)}function nb(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function ku(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ib(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ua(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function sb(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!rb(s,t)&&(To(s,t)&&To(t,s)&&ab(s,t)&&(Oe(s.prev,s,t.prev)||Oe(s,t.prev,t))||_c(s,t)&&Oe(s.prev,s,s.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function _c(s,t){return s.x===t.x&&s.y===t.y}function um(s,t,e,n){const i=xl(Oe(s,t,e)),r=xl(Oe(s,t,n)),a=xl(Oe(e,n,s)),o=xl(Oe(e,n,t));return!!(i!==r&&a!==o||i===0&&vl(s,e,t)||r===0&&vl(s,n,t)||a===0&&vl(e,s,n)||o===0&&vl(e,t,n))}function vl(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function xl(s){return s>0?1:s<0?-1:0}function rb(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&um(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function To(s,t){return Oe(s.prev,s,s.next)<0?Oe(s,t,s.next)>=0&&Oe(s,s.prev,t)>=0:Oe(s,t,s.prev)<0||Oe(s,s.next,t)<0}function ab(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function dm(s,t){const e=new Iu(s.i,s.x,s.y),n=new Iu(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ep(s,t,e,n){const i=new Iu(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ao(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Iu(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ob(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class vo{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return vo.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];np(t),ip(n,t);let a=t.length;e.forEach(np);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,ip(n,e[l]);const o=$y.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function np(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ip(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class yc extends sn{constructor(t=new ls([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new he(i,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:lb;let x,y=!1,k,A,R,L;d&&(x=d.getSpacedPoints(h),y=!0,f=!1,k=d.computeFrenetFrames(h,!1),A=new b,R=new b,L=new b),f||(m=0,p=0,g=0,v=0);const S=o.extractPoints(c);let M=S.shape;const D=S.holes;if(!vo.isClockWise(M)){M=M.reverse();for(let $=0,rt=D.length;$<rt;$++){const P=D[$];vo.isClockWise(P)&&(D[$]=P.reverse())}}const B=vo.triangulateShape(M,D),j=M;for(let $=0,rt=D.length;$<rt;$++){const P=D[$];M=M.concat(P)}function Z($,rt,P){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(rt,P)}const Y=M.length,nt=B.length;function X($,rt,P){let Rt,lt,Ct;const ft=$.x-rt.x,$t=$.y-rt.y,Tt=P.x-$.x,C=P.y-$.y,w=ft*ft+$t*$t,O=ft*C-$t*Tt;if(Math.abs(O)>Number.EPSILON){const J=Math.sqrt(w),at=Math.sqrt(Tt*Tt+C*C),tt=rt.x-$t/J,It=rt.y+ft/J,bt=P.x-C/at,Pt=P.y+Tt/at,re=((bt-tt)*C-(Pt-It)*Tt)/(ft*C-$t*Tt);Rt=tt+ft*re-$.x,lt=It+$t*re-$.y;const ht=Rt*Rt+lt*lt;if(ht<=2)return new et(Rt,lt);Ct=Math.sqrt(ht/2)}else{let J=!1;ft>Number.EPSILON?Tt>Number.EPSILON&&(J=!0):ft<-Number.EPSILON?Tt<-Number.EPSILON&&(J=!0):Math.sign($t)===Math.sign(C)&&(J=!0),J?(Rt=-$t,lt=ft,Ct=Math.sqrt(w)):(Rt=ft,lt=$t,Ct=Math.sqrt(w/2))}return new et(Rt/Ct,lt/Ct)}const mt=[];for(let $=0,rt=j.length,P=rt-1,Rt=$+1;$<rt;$++,P++,Rt++)P===rt&&(P=0),Rt===rt&&(Rt=0),mt[$]=X(j[$],j[P],j[Rt]);const xt=[];let ot,ct=mt.concat();for(let $=0,rt=D.length;$<rt;$++){const P=D[$];ot=[];for(let Rt=0,lt=P.length,Ct=lt-1,ft=Rt+1;Rt<lt;Rt++,Ct++,ft++)Ct===lt&&(Ct=0),ft===lt&&(ft=0),ot[Rt]=X(P[Rt],P[Ct],P[ft]);xt.push(ot),ct=ct.concat(ot)}for(let $=0;$<m;$++){const rt=$/m,P=p*Math.cos(rt*Math.PI/2),Rt=g*Math.sin(rt*Math.PI/2)+v;for(let lt=0,Ct=j.length;lt<Ct;lt++){const ft=Z(j[lt],mt[lt],Rt);dt(ft.x,ft.y,-P)}for(let lt=0,Ct=D.length;lt<Ct;lt++){const ft=D[lt];ot=xt[lt];for(let $t=0,Tt=ft.length;$t<Tt;$t++){const C=Z(ft[$t],ot[$t],Rt);dt(C.x,C.y,-P)}}}const Ft=g+v;for(let $=0;$<Y;$++){const rt=f?Z(M[$],ct[$],Ft):M[$];y?(R.copy(k.normals[0]).multiplyScalar(rt.x),A.copy(k.binormals[0]).multiplyScalar(rt.y),L.copy(x[0]).add(R).add(A),dt(L.x,L.y,L.z)):dt(rt.x,rt.y,0)}for(let $=1;$<=h;$++)for(let rt=0;rt<Y;rt++){const P=f?Z(M[rt],ct[rt],Ft):M[rt];y?(R.copy(k.normals[$]).multiplyScalar(P.x),A.copy(k.binormals[$]).multiplyScalar(P.y),L.copy(x[$]).add(R).add(A),dt(L.x,L.y,L.z)):dt(P.x,P.y,u/h*$)}for(let $=m-1;$>=0;$--){const rt=$/m,P=p*Math.cos(rt*Math.PI/2),Rt=g*Math.sin(rt*Math.PI/2)+v;for(let lt=0,Ct=j.length;lt<Ct;lt++){const ft=Z(j[lt],mt[lt],Rt);dt(ft.x,ft.y,u+P)}for(let lt=0,Ct=D.length;lt<Ct;lt++){const ft=D[lt];ot=xt[lt];for(let $t=0,Tt=ft.length;$t<Tt;$t++){const C=Z(ft[$t],ot[$t],Rt);y?dt(C.x,C.y+x[h-1].y,x[h-1].x+P):dt(C.x,C.y,u+P)}}}q(),it();function q(){const $=i.length/3;if(f){let rt=0,P=Y*rt;for(let Rt=0;Rt<nt;Rt++){const lt=B[Rt];Ot(lt[2]+P,lt[1]+P,lt[0]+P)}rt=h+m*2,P=Y*rt;for(let Rt=0;Rt<nt;Rt++){const lt=B[Rt];Ot(lt[0]+P,lt[1]+P,lt[2]+P)}}else{for(let rt=0;rt<nt;rt++){const P=B[rt];Ot(P[2],P[1],P[0])}for(let rt=0;rt<nt;rt++){const P=B[rt];Ot(P[0]+Y*h,P[1]+Y*h,P[2]+Y*h)}}n.addGroup($,i.length/3-$,0)}function it(){const $=i.length/3;let rt=0;gt(j,rt),rt+=j.length;for(let P=0,Rt=D.length;P<Rt;P++){const lt=D[P];gt(lt,rt),rt+=lt.length}n.addGroup($,i.length/3-$,1)}function gt($,rt){let P=$.length;for(;--P>=0;){const Rt=P;let lt=P-1;lt<0&&(lt=$.length-1);for(let Ct=0,ft=h+m*2;Ct<ft;Ct++){const $t=Y*Ct,Tt=Y*(Ct+1),C=rt+Rt+$t,w=rt+lt+$t,O=rt+lt+Tt,J=rt+Rt+Tt;Yt(C,w,O,J)}}}function dt($,rt,P){l.push($),l.push(rt),l.push(P)}function Ot($,rt,P){Wt($),Wt(rt),Wt(P);const Rt=i.length/3,lt=_.generateTopUV(n,i,Rt-3,Rt-2,Rt-1);H(lt[0]),H(lt[1]),H(lt[2])}function Yt($,rt,P,Rt){Wt($),Wt(rt),Wt(Rt),Wt(rt),Wt(P),Wt(Rt);const lt=i.length/3,Ct=_.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);H(Ct[0]),H(Ct[1]),H(Ct[3]),H(Ct[1]),H(Ct[2]),H(Ct[3])}function Wt($){i.push(l[$*3+0]),i.push(l[$*3+1]),i.push(l[$*3+2])}function H($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cb(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new tc[i.type]().fromJSON(i)),new yc(n,t.options)}}const lb={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new et(r,a),new et(o,l),new et(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],p=t[i*3+1],g=t[i*3+2],v=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-u),new et(f,1-g),new et(v,1-d)]:[new et(o,1-l),new et(h,1-u),new et(p,1-g),new et(m,1-d)]}};function cb(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class bc extends xc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bc(t.radius,t.detail)}}class Co extends xc{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Co(t.radius,t.detail)}}class gd extends sn{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,p=new b,g=new et;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<i;v++){const m=v*(n+1);for(let d=0;d<n;d++){const _=d+m,x=_,y=_+n+1,k=_+n+2,A=_+1;o.push(x,y,A),o.push(y,k,A)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ke extends sn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new b,f=new b,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const _=[],x=d/n;let y=0;d===0&&a===0?y=.5/e:d===n&&l===Math.PI&&(y=-.5/e);for(let k=0;k<=e;k++){const A=k/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+y,1-x),_.push(c++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){const x=h[d][_+1],y=h[d][_],k=h[d+1][_],A=h[d+1][_+1];(d!==0||a>0)&&p.push(x,y,A),(d!==n-1||l<Math.PI)&&p.push(y,k,A)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fi extends sn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new b,u=new b,f=new b;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,_=(i+1)*p+g;a.push(v,m,_),a.push(m,d,_)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class vd extends sn{constructor(t=new lm(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new b,l=new b,c=new et;let h=new b;const u=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(p,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),_(),d()}function m(x){h=t.getPointAt(x/e,h);const y=a.normals[x],k=a.binormals[x];for(let A=0;A<=i;A++){const R=A/i*Math.PI*2,L=Math.sin(R),S=-Math.cos(R);l.x=S*y.x+L*k.x,l.y=S*y.y+L*k.y,l.z=S*y.z+L*k.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function d(){for(let x=1;x<=e;x++)for(let y=1;y<=i;y++){const k=(i+1)*(x-1)+(y-1),A=(i+1)*x+(y-1),R=(i+1)*x+y,L=(i+1)*(x-1)+y;g.push(k,A,L),g.push(A,R,L)}}function _(){for(let x=0;x<=e;x++)for(let y=0;y<=i;y++)c.x=x/e,c.y=y/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new vd(new tc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class hb extends je{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ub extends La{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xd extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fo extends xd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oh=new fe,sp=new b,rp=new b;class fm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dd,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sp.setFromMatrixPosition(t.matrixWorld),e.position.copy(sp),rp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rp),e.updateMatrixWorld(),oh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ap=new fe,Ya=new b,lh=new b;class db extends fm{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ya.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ya),lh.copy(n.position),lh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lh),n.updateMatrixWorld(),i.makeTranslation(-Ya.x,-Ya.y,-Ya.z),ap.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ap)}}class fb extends xd{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new db}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class pb extends fm{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oo extends xd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new pb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=op(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=op();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function op(){return performance.now()}const lp=new fe;class _d{constructor(t,e,n=0,i=1/0){this.ray=new G0(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ud,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lp),this}intersectObject(t,e=!0,n=[]){return Uu(t,this,n,e),n.sort(cp),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Uu(t[i],this,n,e);return n.sort(cp),n}}function cp(s,t){return s.distance-t.distance}function Uu(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Uu(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ed);const mm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ka{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mb=new Uo(-1,1,1,-1,0,1);class gb extends sn{constructor(){super(),this.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new he([0,2,0,0,2,0],2))}}const vb=new gb;class yd{constructor(t){this._mesh=new W(vb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,mb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class gm extends ka{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=So.clone(t.uniforms),this.material=new je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new yd(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class hp extends ka{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class xb extends ka{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _b{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ns}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gm(mm),this.copyPass.material.blending=Es,this.clock=new pm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}hp!==void 0&&(a instanceof hp?n=!0:a instanceof xb&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yb extends ka{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const bb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class wa extends ka{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new _t(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(r,a,{type:ns}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Fn(r,a,{type:ns});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Fn(r,a,{type:ns});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=bb;this.highPassUniforms=So.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new je({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=mm;this.copyUniforms=So.clone(h.uniforms),this.blendMaterial=new je({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:En,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _t,this.oldClearAlpha=1,this.basic=new Nn,this.fsQuad=new yd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=wa.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=wa.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new je({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new je({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}wa.BlurDirectionX=new et(1,0);wa.BlurDirectionY=new et(0,1);const Mb={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class wb extends ka{constructor(){super();const t=Mb;this.uniforms=So.clone(t.uniforms),this.material=new hb({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new yd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===we&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===M0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===w0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===S0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===E0?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===T0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===A0&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ja=new b;function ai(s,t,e,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;ja.copy(t),ja[n]=0,ja.normalize();const c=.5*a/(a+o),h=1-ja.angleTo(s)/l;return Math.sign(ja[e])===1?h*c:o/(a+o)+c+c*(1-h)}class Sn extends Qn{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new b,l=new b,c=new b(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new b,v=.5/i;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),f[d+0]=ai(g,l,"z","y",r,n),f[d+1]=1-ai(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),f[d+0]=1-ai(g,l,"z","y",r,n),f[d+1]=1-ai(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),f[d+0]=1-ai(g,l,"x","z",r,t),f[d+1]=ai(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[d+0]=1-ai(g,l,"x","z",r,t),f[d+1]=1-ai(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[d+0]=1-ai(g,l,"x","y",r,t),f[d+1]=1-ai(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),f[d+0]=ai(g,l,"x","y",r,t),f[d+1]=1-ai(g,l,"y","x",r,e);break}}}const ch={sheenSky:{value:new _t().setRGB(.16,.36,.82)},sheenGround:{value:new _t().setRGB(.02,.04,.09)},rimColor:{value:new _t().setRGB(.55,.7,1)}},Ne={sky:new _t().setRGB(.8,.86,1),ground:new _t().setRGB(.3,.34,.46),key:new _t().setRGB(1,.89,.6),keyIntensity:.55,keyDir:new b(-.36,.72,.6).normalize()},Sb=`
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
`;function vt(s,t={}){const e=new ub({color:s,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,map:t.map??null,vertexColors:t.vertexColors??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Rs,flatShading:t.flat??!1,depthWrite:t.depthWrite??!0}),n={toySpec:{value:t.spec??.06},toyGloss:{value:t.gloss??16},toySheen:{value:t.sheen??0},toyRim:{value:t.rim??.08},toyWrap:{value:t.wrap??.5},toySheenSky:ch.sheenSky,toySheenGround:ch.sheenGround,toyRimColor:ch.rimColor};return e.userData.toy=n,e.onBeforeCompile=i=>{Object.assign(i.uniforms,n),i.fragmentShader=i.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Sb)},e.customProgramCacheKey=()=>"toy1",e}function Fe(s,t={}){return vt(s,{spec:.22,gloss:22,sheen:.14,rim:.12,...t})}function ce(s,t={}){return vt(s,{spec:.16,gloss:12,sheen:.04,rim:.08,...t})}function up(s="#e3a93a",t={}){return vt(s,{spec:.45,gloss:18,sheen:.05,rim:.2,...t})}function ei(s,t=s){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function ni(s,{srgb:t=!0,repeat:e=!1,aniso:n=4}={}){const i=new im(s);return t&&(i.colorSpace=Un),e&&(i.wrapS=i.wrapT=Ps),i.anisotropy=n,i}const dp={},ii=(s,t)=>dp[s]??(dp[s]=t());function Eb(){return ii("flash",()=>{const[s,t]=ei(256,128),e=(n,i,r,a)=>{const o=t.createLinearGradient(20,64,i,n);o.addColorStop(0,`rgba(255,255,242,${a})`),o.addColorStop(.3,`rgba(255,228,174,${a*.75})`),o.addColorStop(1,"rgba(255,170,80,0)"),t.fillStyle=o,t.beginPath(),t.moveTo(18,64),t.bezierCurveTo(60,64-r,i*.7,n-r*.2,i,n),t.bezierCurveTo(i*.7,n+r*.3,50,64+r,18,64),t.fill()};return t.filter="blur(3px)",e(61,249,20,.5),e(43,177,18,.3),e(82,153,15,.28),t.filter="blur(1px)",e(64,151,8,.95),ni(s)})}function Tb(){return ii("burst",()=>{const[s,t]=ei(128);t.lineCap="round";for(const[n,i]of[[.3,31],[1.7,24],[2.9,37],[4.5,20],[5.5,27]]){const r=64+Math.cos(n)*i,a=64+Math.sin(n)*i,o=t.createLinearGradient(64,64,r,a);o.addColorStop(0,"#fff4d8"),o.addColorStop(1,"rgba(255,223,180,0)"),t.strokeStyle=o,t.lineWidth=2,t.beginPath(),t.moveTo(64,64),t.lineTo(r,a),t.stroke()}const e=t.createRadialGradient(64,64,0,64,64,12);return e.addColorStop(0,"#fff8e5"),e.addColorStop(1,"rgba(255,230,185,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ni(s)})}function Nu(){return ii("glow",()=>{const[t,e]=ei(128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),ni(t)})}function Ab(){return ii("fade",()=>{const[s,t]=ei(4,256),e=t.createLinearGradient(0,256,0,0);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,4,256),ni(s)})}function Cb(){return ii("shadow",()=>{const[e,n]=ei(256,128);n.fillStyle="rgba(255,255,255,0.075)";for(let i=0;i<16;i++){const r=4+i*3.2,a=r,o=r,l=256-r*2,c=128-r*2,h=Math.max(4,40-i*2);n.beginPath(),n.moveTo(a+h,o),n.arcTo(a+l,o,a+l,o+c,h),n.arcTo(a+l,o+c,a,o+c,h),n.arcTo(a,o+c,a,o,h),n.arcTo(a,o,a+l,o,h),n.closePath(),n.fill()}return ni(e)})}function Rb(){return ii("pool",()=>{const[t,e]=ei(256);e.save(),e.scale(1,1.25);const n=e.createRadialGradient(256/2,0,0,256/2,0,256*.62);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,0.5)"),n.addColorStop(.65,"rgba(255,255,255,0.12)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),e.restore(),ni(t)})}function ec(){return ii("floor",()=>{const[e,n]=ei(256,512),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"rgb(150,166,206)"),i.addColorStop(.45,"rgb(205,212,232)"),i.addColorStop(1,"rgb(255,255,255)"),n.fillStyle=i,n.fillRect(0,0,256,512);const r=[190,360];n.fillStyle="rgba(60,72,110,0.22)";for(const l of[0,128,256])n.fillRect(l-1.5,0,3,512);for(const l of r)n.fillRect(0,l-1.5,256,3);n.fillStyle="rgba(255,255,255,0.18)";for(const l of[0,128,256])n.fillRect(l+1.5,0,1.5,512);for(const l of r)n.fillRect(0,l+1.5,256,1.5);const a=n.createLinearGradient(0,0,0,512*.14);a.addColorStop(0,"rgba(10,18,44,0.75)"),a.addColorStop(1,"rgba(10,18,44,0)"),n.fillStyle=a,n.fillRect(0,0,256,512*.14);const o=ni(e,{aniso:8});return o.wrapS=Ps,o})}function vm(s,t,e){const n=s.createLinearGradient(0,0,0,e*.16);n.addColorStop(0,"rgba(10,18,44,0.75)"),n.addColorStop(1,"rgba(10,18,44,0)"),s.fillStyle=n,s.fillRect(0,0,t,e*.16);const i=s.createLinearGradient(0,0,0,e);i.addColorStop(0,"rgba(20,30,60,0.35)"),i.addColorStop(.5,"rgba(20,30,60,0.08)"),i.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)}function Pb(){return ii("checker",()=>{const[n,i]=ei(256,512),r=256/4;for(let o=0;o<512/r;o++)for(let l=0;l<4;l++)i.fillStyle=(l+o)%2?"rgb(70,74,86)":"rgb(255,255,255)",i.fillRect(l*r,o*r,r,r);i.fillStyle="rgba(255,255,255,0.18)";for(let o=0;o<=4;o++)i.fillRect(o*r-1,0,2,512);vm(i,256,512);const a=ni(n,{aniso:8});return a.wrapS=Ps,a})}function Lb(){return ii("carpet",()=>{const[e,n]=ei(256,512);n.fillStyle="rgb(225,228,236)",n.fillRect(0,0,256,512);for(let r=0;r<2600;r++){const a=170+Math.floor(Math.random()*85);n.fillStyle=`rgba(${a},${a},${a+8},0.55)`,n.fillRect(Math.random()*256,Math.random()*512,2,2)}n.strokeStyle="rgba(80,92,130,0.18)",n.lineWidth=3;for(let r=0;r<=256;r+=64)for(let a=0;a<=512;a+=64)n.strokeRect(r+6,a+6,52,52);vm(n,256,512);const i=ni(e,{aniso:8});return i.wrapS=Ps,i})}function Db(){return ii("tiles",()=>{const[i,r]=ei(256,168);r.fillStyle="rgb(150,160,160)",r.fillRect(0,0,256,168);const a=256/8,o=168/5;for(let l=0;l<5;l++)for(let c=0;c<8;c++)r.fillStyle="rgb(255,255,255)",r.fillRect(c*a+2,l*o+2,a-4,o-4),r.fillStyle="rgba(255,255,255,0.9)",r.fillRect(c*a+5,l*o+5,a*.35,3),r.fillStyle="rgba(0,30,40,0.08)",r.fillRect(c*a+2,l*o+o-6,a-4,4);return ni(i)})}function kb(){return ii("windows",()=>{const[e,n]=ei(256,168),i=n.createLinearGradient(0,0,0,168);i.addColorStop(0,"#0b1430"),i.addColorStop(1,"#2a3f78"),n.fillStyle=i,n.fillRect(0,0,256,168),n.fillStyle="rgba(255,255,255,0.8)";for(let o=0;o<18;o++)n.fillRect(Math.random()*256,Math.random()*168*.4,1.5,1.5);let r=0;for(;r<256;){const o=18+Math.random()*30,l=40+Math.random()*90;n.fillStyle=`rgb(${20+Math.random()*15},${28+Math.random()*15},${55+Math.random()*20})`,n.fillRect(r,168-l,o,l);for(let c=168-l+6;c<164;c+=9)for(let h=r+4;h<r+o-4;h+=7)Math.random()<.45&&(n.fillStyle=Math.random()<.7?"rgba(255,214,120,0.9)":"rgba(170,220,255,0.8)",n.fillRect(h,c,3,4));r+=o+2}n.fillStyle="#d9d4c6",n.fillRect(0,0,256,6),n.fillRect(0,162,256,6),n.fillRect(0,0,6,168),n.fillRect(250,0,6,168),n.fillRect(256/2-4,0,8,168),n.fillRect(0,168*.42,256,6);const a=n.createLinearGradient(0,0,256,168);return a.addColorStop(.2,"rgba(255,255,255,0)"),a.addColorStop(.35,"rgba(255,255,255,0.12)"),a.addColorStop(.5,"rgba(255,255,255,0)"),n.fillStyle=a,n.fillRect(0,0,256,168),ni(e)})}function xm(){return ii("mat",()=>{const[t,e]=ei(64);e.fillStyle="rgb(215,215,215)",e.fillRect(0,0,64,64),e.lineWidth=3;for(const[n,i]of[[1,"rgba(255,255,255,0.55)"],[-1,"rgba(120,120,120,0.45)"]]){e.strokeStyle=i;for(let r=-64;r<=64*2;r+=16)e.beginPath(),e.moveTo(r,0),e.lineTo(r+n*64,64),e.stroke()}return ni(t,{repeat:!0,aniso:8})})}function Ib(){return ii("hazard",()=>{const[s,t]=ei(128,64);t.fillStyle="#ffc533",t.fillRect(0,0,128,64),t.fillStyle="#2b2f3a";for(let e=-64;e<128;e+=64)t.beginPath(),t.moveTo(e,64),t.lineTo(e+32,64),t.lineTo(e+96,0),t.lineTo(e+64,0),t.closePath(),t.fill();return ni(s,{repeat:!0})})}const Ie=5.2/350,Ub=et,T={slide:Fe("#393c47"),frame:Fe("#3e414c",{spec:.18}),mag:Fe("#2d303b"),barrel:Fe("#5d6270",{spec:.4,gloss:26}),uzi:Fe("#5c6584",{spec:.32,sheen:.1}),uziDark:Fe("#444c66"),uziGrip:Fe("#37425a"),gunmetal:Fe("#4a4f5e",{spec:.34,gloss:26}),gunDark:Fe("#2e384e"),wood:ce("#b35a20"),woodDark:ce("#8f4416"),dark:vt("#1b1d23",{spec:.02,rim:0}),groove:vt("#25272e",{spec:.03,rim:0}),orange:ce("#f08a20"),yellow:ce("#ffc533"),olive:ce("#56703a"),oliveDark:ce("#46602f"),rubber:vt("#262a35",{spec:.03}),brass:up(),copper:up("#d08a3c"),shell:ce("#d9412e",{spec:.22}),white:vt("#f4f0e4")};function ae(s){return s.castShadow=!0,s.receiveShadow=!0,s}function F(s,t,e,n,i,r,a,o,l=3){const c=t-s,h=n-e,u=r-i,f=Math.max(.05,Math.min(a,c/2-.01,h/2-.01,u/2-.01)),p=new W(new Sn(c,h,u,l,f),o);return p.position.set((s+t)/2,(e+n)/2,(i+r)/2),ae(p)}function Vt(s,t,e,n){const i=Math.max(.05,t-e*2),r=new yc(s,{depth:i,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelOffset:-e,bevelSegments:4,curveSegments:10});return r.translate(0,0,-i/2),ae(new W(r,n))}function _m(s,t,e){const n=t.length;for(let i=0;i<n;i++){const[r,a,o=e]=t[i],[l,c]=t[(i+n-1)%n],[h,u]=t[(i+1)%n],f=Math.hypot(l-r,c-a)||1,p=Math.hypot(h-r,u-a)||1,g=Math.min(o,f/2,p/2),v=r+(l-r)/f*g,m=a+(c-a)/f*g,d=r+(h-r)/p*g,_=a+(u-a)/p*g;i===0?s.moveTo(v,m):s.lineTo(v,m),s.quadraticCurveTo(r,a,d,_)}return s.closePath(),s}function Kt(s,t=0){return _m(new ls,s,t)}function Sa(s,t=0){return _m(new Du,s,t)}function Q(s,t,e,n,i=0,r=0,a=24){const o=new Ce(e,e,t-s,a);o.rotateZ(-Math.PI/2);const l=new W(o,n);return l.position.set((s+t)/2,i,r),ae(l)}function ze(s,t,e,n,i,r=0,a=20){const o=new Ce(e,e,n,a);o.rotateX(Math.PI/2);const l=new W(o,i);return l.position.set(s,t,r),ae(l)}function Ea(s,t,e,n,i,r=.45){const a=new W(new Ke(e,20,12),i);return a.scale.z=r,a.position.set(s,t,n),ae(a)}const hh={};function kr(s,t,e=20){if(hh[s])return hh[s];const n=new zo(t.map(([i,r])=>new Ub(i,r)),e);return n.rotateZ(-Math.PI/2),hh[s]=n}function bd(){return kr("casing",[[0,0],[8.4,0],[9,.8],[9,2.4],[8.2,3.2],[8.6,4],[8.6,26],[6.6,26],[6.6,4],[0,4]])}function ym(){return kr("rifle",[[0,0],[8.4,0],[9,.8],[9,2.4],[8.2,3.2],[8.6,4],[8.4,28],[6,33],[5.6,40],[4,40],[4,33],[0,32]])}function bm(){return kr("rifle-long",[[0,0],[8.4,0],[9,.8],[9,2.4],[8.2,3.2],[8.6,4],[8.4,39],[6,45],[5.6,51],[4,51],[4,45],[0,44]])}function Nb(){return kr("rifle-bullet",[[0,0],[5.3,0],[5.3,6],[4.7,11],[3.1,17],[1.2,21],[0,22]])}function zb(){return kr("bullet",[[0,0],[8.2,0],[8.2,4],[7.4,9],[5,13.5],[0,15.5]])}function Mm(){return kr("hull",[[0,9],[11,9],[11,42],[9.5,44],[4,44.5],[0,44.5]])}function Md(){return kr("shellHead",[[0,0],[12,0],[12.5,1],[12.5,3],[11.4,3.6],[11.4,11],[11,11.5],[0,11.5]])}const Gi={fuel:ce("#e8384d",{spec:.25}),glass:vt("#bfe9ff",{transparent:!0,opacity:.45,spec:.8,gloss:30,rim:.4}),glow:vt("#9ff0ff",{emissive:"#4fd8ff",emissiveIntensity:1.8,rim:0}),steel:Fe("#8a93a3",{spec:.5,gloss:30})};function zi(s="pistol"){const t=new ut;if(s==="arrow"){t.add(ae(Q(0,84,2.8,T.wood,0,0,10)));const i=new W(new ts(6.5,20,12),Gi.steel);i.rotation.z=-Math.PI/2,i.position.x=92,t.add(ae(i)),t.add(ae(Q(-3,3,3.6,T.orange,0,0,10)));for(let r=0;r<3;r++){const a=new ut;a.add(ae(F(4,28,2,10,-.9,.9,.8,T.orange))),a.rotation.x=r/3*Math.PI*2+Math.PI/2,t.add(a)}return t}if(s==="grenade"){t.add(ae(Q(0,20,15,T.brass))),t.add(ae(Q(19,24,15.8,T.copper)));const i=new W(new Ke(15,20,14),T.olive);i.scale.x=1.35,i.position.x=26,t.add(ae(i));const r=new W(new Ke(6,14,10),T.orange);return r.position.x=44,t.add(ae(r)),t}if(s==="fuel")return t.add(ae(Q(0,6,10,T.gunDark))),t.add(ae(Q(5,45,13,Gi.fuel))),t.add(ae(Q(20,28,13.6,T.white))),t.add(ae(Q(44,52,7,T.gunDark))),t;if(s==="ice")return t.add(Q(8,50,7,Gi.glow)),t.add(Q(6,52,11,Gi.glass)),t.add(ae(Q(0,8,12.5,T.gunmetal))),t.add(ae(Q(50,58,12.5,T.gunmetal))),t;if(s==="bolt"){t.add(ae(Q(0,56,3.4,T.woodDark,0,0,10)));const i=new W(new ts(7,18,4),Gi.steel);i.rotation.z=-Math.PI/2,i.position.x=64,t.add(ae(i));for(let r=0;r<2;r++){const a=new ut;a.add(ae(F(2,20,2.5,10,-.9,.9,.8,T.gunDark))),a.rotation.x=r*Math.PI+Math.PI/2,t.add(a)}return t}if(s==="staple"){t.add(ae(F(0,40,-2,8,-7,7,1.5,Gi.steel)));for(let i=4;i<40;i+=6)t.add(F(i-.5,i+.5,-2.2,8.2,-7.2,7.2,.3,T.gunmetal));return t}if(s==="saw"){const i=new W(new Ce(20,20,3,28),Gi.steel);i.rotation.x=Math.PI/2,i.position.x=22,t.add(ae(i));for(let r=0;r<14;r++){const a=r/14*Math.PI*2,o=new W(new ts(2.6,6,3),Gi.steel);o.position.set(22+Math.cos(a)*21.5,Math.sin(a)*21.5,0),o.rotation.z=a-Math.PI/2+.5,t.add(o)}return t.add(ae(ze(22,0,6,4.4,T.orange))),t}if(s==="slug"){t.add(ae(Q(0,54,7,Gi.steel)));for(const r of[8,26,44])t.add(ae(Q(r,r+5,7.6,T.copper)));const i=new W(new ts(7,12,16),Gi.steel);return i.rotation.z=-Math.PI/2,i.position.x=60,t.add(ae(i)),t}if(s==="cell")return t.add(ae(Q(0,46,11,T.gunDark))),t.add(ae(Q(16,28,11.6,T.yellow))),t.add(ae(Q(46,52,5,T.copper))),t;if(s==="shell")return t.add(ae(new W(Mm(),T.shell))),t.add(ae(new W(Md(),T.brass))),t;const e=s==="rifle"||s==="rifle-long";t.add(ae(new W(s==="rifle-long"?bm():e?ym():bd(),T.brass)));const n=ae(new W(e?Nb():zb(),T.copper));return n.position.x=s==="rifle-long"?49:e?38:25,t.add(n),t}class _n{constructor(){this.root=new ut,this.pivot=new ut,this.root.add(this.pivot),this.model=new ut,this.model.scale.setScalar(Ie),this.pivot.add(this.model),this.muzzleAnchor=new tn,this.portAnchor=new tn,this.model.add(this.muzzleAnchor,this.portAnchor),this.magSlot=new ut,this.model.add(this.magSlot),this.mags=[],this.mag=null,this.magAxis=new b(0,-1,0),this.magCenter=new b,this.magTilt=0,this.inset=0,this.rest=new Bn,this.kit=new Set,this.evoParts=[],this.evoHidden=[],this.baseMuzzle=new b,this.blast=null}finish(t){this.model.position.copy(t).multiplyScalar(-Ie),this.baseMuzzle.copy(this.muzzleAnchor.position),this.blast=this.spec.blast,this.seatNewMag(),this.shadows(),this.measure()}seatNewMag(){var e;for(const n of this.mags)(e=n.parent)==null||e.remove(n);const t=this.buildMag();this.mags=t?[t]:[],this.mag=t,t&&(this.magSlot.add(t),this.setMagOut(t,0))}shadows(){this.root.traverse(t=>{t.isMesh&&!t.material.transparent&&t.material!==T.dark&&(t.castShadow=!0)})}measure(){const t=this.pivot,e=[t.position.clone(),t.quaternion.clone(),t.scale.clone()];t.position.set(0,0,0),t.quaternion.identity(),t.scale.set(1,1,1),this.root.updateMatrixWorld(!0),fp.copy(this.root.matrixWorld).invert(),pp(this.model,this.rest,fp),t.position.copy(e[0]),t.quaternion.copy(e[1]),t.scale.copy(e[2]),this.root.updateMatrixWorld(!0)}setEvo(t,e){var r;for(const a of this.evoParts)(r=a.parent)==null||r.remove(a);for(const a of this.evoHidden)a.visible=!0;this.evoParts=[],this.evoHidden=[];const n=e.slice(0,t);this.kit=new Set(n),this.root.updateMatrixWorld(!0),this.muzzleAnchor.position.copy(this.baseMuzzle),this.blast=this.spec.blast;let i=null;return n.forEach((a,o)=>{const l=this.kitPart(a);if(l){if(l.add){const c=new ut;c.userData.kind=a,(l.parent??this.model).add(c),c.add(l.add),c.updateMatrixWorld(!0),pp(l.add,Fb).getCenter(_l),c.worldToLocal(_l),c.position.copy(_l),l.add.position.sub(_l),this.evoParts.push(c),o===n.length-1&&(i=c)}for(const c of l.hide??[])c.visible=!1,this.evoHidden.push(c);l.muzzle&&(this.muzzleAnchor.position.x=l.muzzle),l.blast&&(this.blast={...this.blast,...l.blast})}}),this.seatNewMag(),this.shadows(),this.measure(),i}kitPart(){return null}buildMag(){return null}setAction(){}setTrigger(){}setHold(){}setCatch(){}setLoading(){}spin(){}setMagOut(t,e,n=0){t.position.copy(this.magAxis).multiplyScalar(e).add(this.magCenter),t.position.z+=n*40,t.rotation.z=this.magTilt*e+n*.5}wrapMag(t,e=()=>{}){const n=new ut;return t.position.copy(this.magCenter).negate(),n.add(t),n.userData.setLoaded=e,n}silhouette(t){this.root.traverse(e=>{e.isMesh&&(e.material.transparent&&(e.visible=!1),e.material=t,e.castShadow=!1,e.receiveShadow=!1)})}muzzleWorld(t){return this.muzzleAnchor.getWorldPosition(t)}portWorld(t){return this.portAnchor.getWorldPosition(t)}boreDir(t){return this.model.updateWorldMatrix(!0,!1),t.set(1,0,0).transformDirection(this.model.matrixWorld)}sideDir(t){return this.model.updateWorldMatrix(!0,!1),t.set(0,0,1).transformDirection(this.model.matrixWorld)}upDir(t){return this.model.updateWorldMatrix(!0,!1),t.set(0,1,0).transformDirection(this.model.matrixWorld)}}const fp=new fe,uh=new fe,Fb=new Bn,Ob=new Bn,_l=new b;function pp(s,t,e=null){return t.makeEmpty(),s.traverseVisible(n=>{!n.isMesh||n.userData.noBounds||(n.geometry.boundingBox||n.geometry.computeBoundingBox(),uh.copy(n.matrixWorld),e&&uh.premultiply(e),t.union(Ob.copy(n.geometry.boundingBox).applyMatrix4(uh)))}),t}const Oi=5.2,Zi=.45,Pn=.5,zu=.06,Bl=Pn+zu,qs=[-1.25,2.35],dh=.55,ea=3.3,$e=-4,cr=Oi-Zi,ci=92,Li=5.96,wm=-1,Dn=s=>-s*Oi-Oi/2,Sm=s=>Math.max(0,Math.ceil((-s-Oi/2)/Oi-1e-6)),_e={halfW:15,gunX:-11,benchX0:-15.5,benchX1:-5.5,targetX:11};function Em(s,t,e){const n=Dn(Sm(t)),i=n+Bl;return s>_e.benchX0&&s<_e.benchX1&&e>qs[0]&&e<qs[1]&&t>=i-.25?i:n}function di(s,t,e,n,i,r,a,o,l=!0){const c=new W(new Sn(s,t,e,3,Math.min(n,s/2-.001,t/2-.001,e/2-.001)),i);return c.position.set(r,a,o),c.castShadow=l,c.receiveShadow=!0,c}function Hl(s,t,e,n,i,{additive:r=!1,flat:a=!1}={}){const o=new W(new hn(t,e),new Nn({color:n,map:s,transparent:!0,opacity:i,depthWrite:!1,blending:r?En:Tr,polygonOffset:!0,polygonOffsetFactor:-2}));return a&&(o.rotation.x=-Math.PI/2),o.renderOrder=1,o}function Fu(s,t,e=.55){return Hl(Cb(),s,t,"#060b1c",e,{flat:!0})}function Ka(s,t,e,n,i){const r=new Lu(t,e,n);r.receiveShadow=!0;const a=new fe;for(let o=0;o<n;o++){const[l,c,h]=i(o);r.setMatrixAt(o,a.makeTranslation(l,c,h))}return s.add(r),r}function Bb(s,t,e,n,i){const r=new ut,a=e-t,o=qs[1]-qs[0],l=(qs[0]+qs[1])/2,c=(t+e)/2,h=Fu(a+1,o+1,.55);h.position.set(c,.006,l),r.add(h),r.add(di(a,Pn-.06,o,.16,s.stand,c,(Pn-.06)/2,l)),r.add(di(a+.06,.12,o+.06,.06,s.standTop,c,Pn-.06,l)),r.add(di(.72,Pn+.1,1,.16,s.orange,t+.3,(Pn+.1)/2,qs[1]-.42)),r.add(di(.62,Pn+.2,.95,.16,s.orange,e-.22,(Pn+.2)/2,qs[1]-.4));const u=n+.35,f=e-.4,p=di(f-u,zu,2.5,.03,s.mat,(u+f)/2,Pn+zu/2,.35,!1);r.add(p);const g=new ut,v=Fu(2.1,1.4,.5);v.position.y=.004,g.add(v),g.add(di(1.6,.5,1,.1,s.olive,0,.25,0)),g.add(di(1.66,.2,1.06,.08,s.oliveLid,0,.56,0)),g.add(di(1.18,.07,.68,.035,s.oliveLid,0,.68,0)),g.position.set(n-.48,Pn,.25),r.add(g);const m=["shell","grenade","fuel","ice","cell","saw","slug","staple"].includes(i),d=_=>{const x=zi(i);return m?x.scale.set(Ie*.82,Ie*.95,Ie*.95):x.scale.set(Ie*.82,Ie*1.45,Ie*1.45),_&&(x.rotation.z=Math.PI/2),x};if(i==="arrow"||i==="bolt")for(const[_,x,y]of[[-.15,1.85,.06],[.05,2.12,-.1]]){const k=d(!1);k.position.set(n+_,Pn+10*Ie*1.45,x),k.rotation.y=y,r.add(k)}else if(m)for(const[_,x]of[[.2,1.8],[.52,2]]){const y=d(!0);y.position.set(n+_,Pn,x),r.add(y)}else{const _=d(!0);_.position.set(n+.19,Pn,.62),r.add(_);const x=d(!1);x.position.set(n+.36,Pn+9*Ie*1.45,.78),x.rotation.y=-.15,r.add(x)}return r}const fh=new Map;function wd(s,t="toy"){const e=`${t}|${s}`;return fh.has(e)||fh.set(e,t==="steel"?vt(s,{spec:.4,gloss:24,rim:.12}):t==="lacquer"?ce(s):vt(s,{spec:.08,rim:.06})),fh.get(e)}function Kn(s,t,e,n,i,r,a,o,l){const c=di(t,e,n,Math.min(.05,t/3,e/3,n/3),wd(i,l),r,a,o,!1);return s.add(c),c}function js(s,t,e,n,i,r,a,o,l=18){const c=new W(new Ce(t,t,e,l),wd(n,o));return c.position.set(i,r,a),s.add(c),c}function Ro(s,t,e,n,i,r,a){const o=new W(new Ke(t,14,10),wd(e,a));return o.position.set(n,i,r),s.add(o),o}const na=["#ffd23f","#ff6fae","#44c4ff","#7be36b","#ff8a1f","#c783ff"];function Hb(s,t,e,n){const i=$e+.18;if(n%2===0){const r=na[n%na.length];Kn(s,1.7,2.1,.06,"#fff4dc",t,e+2.2,i),Kn(s,1.5,1.9,.08,r,t,e+2.2,i+.02,"lacquer"),Ro(s,.42,na[(n+2)%na.length],t,e+2.45,i+.12,"lacquer").scale.z=.3,Kn(s,1,.16,.06,"#fff4dc",t,e+1.65,i+.08)}else{Kn(s,2.8,.12,.5,"#c98f52",t,e+2.75,i+.2,"lacquer");for(let r=0;r<3;r++)Kn(s,.42,.42,.42,na[(n+r)%na.length],t-.8+r*.75,e+3.02,i+.2,"lacquer").rotation.y=.3*r;Ro(s,.24,"#ff4f5e",t+1.15,e+3.05,i+.2,"lacquer")}}function Vb(s,t,e,n){const i=$e+.18;if(n%2===0){Kn(s,3,.12,.55,"#e8dcc4",t,e+2.9,i+.22,"lacquer");for(const[a,o,l]of[[-.85,.36,.5],[.05,.3,.38]])js(s,o,l,"#9aa8b4",t+a,e+2.96+l/2,i+.24,"steel"),js(s,o*1.05,.05,"#7a8794",t+a,e+2.98+l,i+.24,"steel"),Ro(s,.06,"#3a3f4d",t+a,e+3.04+l,i+.24,"steel");const r=new W(new Ce(.2,.2,.46,16),vt("#dff1ec",{transparent:!0,opacity:.55,spec:.8,rim:.4}));r.position.set(t+.9,e+3.19,i+.24),s.add(r),js(s,.16,.3,"#ff8a1f",t+.9,e+3.1,i+.24)}else{js(s,.04,2.6,"#7a8794",t,e+3.5,i+.15,"steel").rotation.z=Math.PI/2;for(let r=0;r<4;r++){const a=t-.9+r*.6;js(s,.03,.75,"#9aa8b4",a,e+3.1,i+.15,"steel"),r%2===0?Ro(s,.16,"#9aa8b4",a,e+2.68,i+.15,"steel").scale.y=.5:Kn(s,.24,.32,.03,"#c94f3d",a,e+2.6,i+.15,"lacquer")}}}function Gb(s,t,e,n){const i=$e+.2;if(n%3===0){Kn(s,2.7,1.7,.08,"#c9d2e0",t,e+2.25,i,"steel"),Kn(s,2.5,1.5,.08,"#fbfbf6",t,e+2.25,i+.03);for(let o=0;o<3;o++)Kn(s,1.2-o*.25,.05,.02,["#2f5fa8","#e8384d","#3fbf6a"][o],t-.4+o*.1,e+2.65-o*.28,i+.08);for(let o=0;o<4;o++)Kn(s,.14,.2+o*.12,.02,"#2f5fa8",t+.55+o*.2,e+1.85+(.2+o*.12)/2,i+.08)}if(n%2===1){const o=t-Li/2,l=e+3.6,c=$e+.6;js(s,.42,.08,"#2c3242",o,l,c,"steel").rotation.x=Math.PI/2,js(s,.36,.09,"#fbfbf6",o,l,c+.01).rotation.x=Math.PI/2,Kn(s,.04,.26,.02,"#1b1d23",o,l+.11,c+.07).rotation.z=.4,Kn(s,.03,.32,.02,"#1b1d23",o+.07,l-.08,c+.08).rotation.z=2.2}const r=t+Li/2,a=$e+.45;js(s,.26,.42,"#f4f0e4",r,e+.97,a,"lacquer");for(const[o,l,c]of[[0,1.45,.3],[-.2,1.3,.22],[.2,1.32,.24],[.05,1.7,.2]])Ro(s,c,"#3fae5a",r+o,e+l,a,"lacquer")}const Wb={toys:Hb,kitchen:Vb,office:Gb};function $b(s,t){const e=Wb[s];if(!e)return null;const n=new ut,i=Math.ceil(ci/Li),r=-Math.floor(i/2);for(let a=0;a<t;a++)for(let o=r;o<r+i;o++){const l=wm+o*Li+Li/2;Math.abs(l)>26||e(n,l,Dn(a),o-r+a)}return n.traverse(a=>{a.isMesh&&(a.castShadow=!1)}),n}function Xb(s,t,e,{shadowSize:n=2048}={}){s.background=new _t("#0c1730"),s.add(new Fo(Ne.sky,Ne.ground,1));const i=new Oo(Ne.key,Ne.keyIntensity);i.castShadow=!0,i.shadow.mapSize.set(n,n),i.shadow.intensity=.7,i.shadow.radius=3;const r=i.shadow.camera;r.left=-19,r.right=19,r.top=12,r.bottom=-12,r.near=1,r.far=50,i.shadow.bias=-4e-4,i.shadow.normalBias=.03,s.add(i,i.target);const a={floor:vt("#9a979e",{map:ec(),spec:.03,gloss:8,rim:0}),floorLip:vt("#8794ad",{spec:.1}),slab:vt("#2b4b73",{spec:.04}),slabLow:vt("#203a5f",{spec:.02}),wall:vt("#1b3961",{spec:0,rim:0}),panel:vt("#1f3e68",{spec:.03,rim:0}),panelFrame:vt("#22446d",{spec:.08,gloss:10,rim:0}),wainscot:vt("#1d406b",{spec:.06,rim:0}),pillar:vt("#355b83",{spec:.06,gloss:10,rim:.05}),plinth:vt("#33587f",{spec:.1,gloss:10}),stand:vt("#4a6186",{spec:.08,gloss:10}),standTop:vt("#4d5f80",{spec:.08,gloss:10}),orange:ce("#e88724"),mat:vt("#3a4560",{map:xm(),spec:.03,rim:0}),olive:ce("#56703a"),oliveLid:ce("#5c7742"),lampHousing:vt("#16264a",{spec:.1}),lamp:vt("#fff2c0",{emissive:"#ffe7a6",emissiveIntensity:1.5,rim:0})};a.mat.map.repeat.set(10,5);const o=ea-$e,l=new Sn(ci,Zi,o+.8,2,.08),c=new Sn(ci,Zi*.42,.1,2,.04),h=new Sn(ci,.1,.3,3,.045),u=new hn(ci,o);a.floor.map.repeat.set(ci/5.2,1);for(let ot=-1;ot<e;ot++){const ct=Dn(ot),Ft=new W(l,a.slab);Ft.position.set(0,ct-Zi/2,(ea+$e-.8)/2),Ft.receiveShadow=!0,s.add(Ft);const q=new W(c,a.slabLow);q.position.set(0,ct-Zi+Zi*.21,ea+.03),s.add(q);const it=new W(u,a.floor);it.rotation.x=-Math.PI/2,it.position.set(0,ct+.004,(ea+$e)/2),it.receiveShadow=!0,s.add(it);const gt=new W(h,a.floorLip);gt.position.set(0,ct-.02,ea-.1),gt.receiveShadow=!0,s.add(gt)}const f=new W(new Qn(ci,4,o+.8),a.slabLow);f.position.set(0,Dn(-1)+2,(ea+$e-.8)/2),s.add(f);const p=Dn(-1),g=Dn(e-1),v=new W(new hn(ci,p-g+2),a.wall);v.position.set(0,(p+g)/2,$e-.05),v.receiveShadow=!0,s.add(v);const m=Math.ceil(ci/Li),d=-Math.floor(m/2),_=e*m,x=ot=>[Math.floor(ot/m)%e,ot%m+d],y=ot=>wm+ot*Li,k=4.3,A=2.86,R=2.11,L=.17;Ka(s,new Sn(k-L,A-L,.1,2,.04),a.panel,_,ot=>{const[ct,Ft]=x(ot);return[y(Ft)+Li/2,Dn(ct)+R,$e+.05]}),Ka(s,new Sn(k,L,.22,3,.07),a.panelFrame,_*2,ot=>{const[ct,Ft]=x(ot%_),q=ot<_?1:-1;return[y(Ft)+Li/2,Dn(ct)+R+q*(A-L)/2,$e+.11]}),Ka(s,new Sn(L,A-L*1.2,.22,3,.07),a.panelFrame,_*2,ot=>{const[ct,Ft]=x(ot%_),q=ot<_?1:-1;return[y(Ft)+Li/2+q*(k-L)/2,Dn(ct)+R,$e+.11]}),Ka(s,new Sn(1.15,cr,.55,3,.16),a.pillar,_,ot=>{const[ct,Ft]=x(ot);return[y(Ft),Dn(ct)+cr/2,$e+.27]}),Ka(s,new Sn(1.45,.76,.8,3,.14),a.plinth,_,ot=>{const[ct,Ft]=x(ot);return[y(Ft),Dn(ct)+.38,$e+.4]});const S=[],M=Ab(),D=Rb(),z=new ha({map:Nu(),color:new _t(1.2,.95,.6),transparent:!0,opacity:.4,blending:En,depthWrite:!1}),B=[];for(let ot=d;ot<d+m;ot+=2)B.push(y(ot)-Li/2);for(let ot=0;ot<e;ot++){const ct=Dn(ot);s.add(di(ci,.42,.22,.08,a.wainscot,0,ct+.32,$e+.11,!1));const Ft=Hl(M,ci,.9,"#08112a",.6);Ft.position.set(0,ct+.45,$e+.85),s.add(Ft);const q=Hl(M,ci,1.5,"#07102a",.85);q.rotation.z=Math.PI,q.position.set(0,ct+cr-.75,$e+.6),s.add(q);for(const it of B){s.add(di(1.4,.2,.5,.08,a.lampHousing,it,ct+cr-.1,$e+.9,!1)),s.add(di(1.12,.13,.36,.06,a.lamp,it,ct+cr-.2,$e+.98,!1));const gt=new ao(z);gt.scale.set(2.6,.85,1),gt.position.set(it,ct+cr-.24,$e+1.25),s.add(gt);const dt=Hl(D,5.2,3,"#ffc97a",.13,{additive:!0});dt.position.set(it,ct+cr-.25-1.5,$e+.62),s.add(dt)}S.push({floor:ct,bench:null,benchKey:""})}const j={background:"#0c1730",wall:"#1b3961",panel:"#1f3e68",panelFrame:"#22446d",wainscot:"#1d406b",pillar:"#355b83",plinth:"#33587f",floor:"#9a979e",slab:"#2b4b73",slabLow:"#203a5f",stand:"#4a6186",standTop:"#4d5f80"},Z={tiles:Db,windows:kb},Y={checker:Pb,carpet:Lb},nt=a.floor.map.repeat.clone(),X=a.lamp.color.clone(),mt=a.lamp.emissive.clone();let xt=null;return{key:i,lanes:S,setTheme(ot){var it;const ct={...j,...ot||{}};s.background.set(ct.background);for(const gt of Object.keys(j))gt!=="background"&&a[gt]&&a[gt].color.set(ct[gt]);const Ft=((it=Z[ct.walls])==null?void 0:it.call(Z))??null;a.panel.map!==Ft&&(a.panel.map=Ft,a.panel.needsUpdate=!0);const q=(Y[ct.floorTex]??ec)();a.floor.map!==q&&(q.repeat.copy(nt),a.floor.map=q,a.floor.needsUpdate=!0),a.lamp.color.copy(ct.lamp?new _t(ct.lamp):X),a.lamp.emissive.copy(ct.lamp?new _t(ct.lamp):mt),xt&&(s.remove(xt),xt.traverse(gt=>gt.isMesh&&gt.geometry.dispose())),xt=$b(ct.decor,e),xt&&s.add(xt)},relayout(ot){S.forEach((ct,Ft)=>{const q=ot(Ft),it=`${_e.benchX0.toFixed(3)}|${_e.benchX1.toFixed(3)}|${_e.gunX.toFixed(3)}|${q}`;ct.benchKey!==it&&(ct.bench&&(s.remove(ct.bench),ct.bench.traverse(gt=>gt.isMesh&&gt.geometry.type!=="LatheGeometry"&&gt.geometry.dispose())),ct.bench=Bb(a,_e.benchX0,_e.benchX1,_e.gunX,q),ct.bench.position.y=ct.floor,ct.benchKey=it,s.add(ct.bench))})},follow(ot){i.target.position.set(0,ot-.5,0),i.position.copy(Ne.keyDir).multiplyScalar(22).add(i.target.position)}}}const Le={duck:{name:"Резиновая утка",hp:30,reward:3,speed:1.5,tags:["weak","small"]},teddy:{name:"Плюшевый мишка",hp:110,reward:10,speed:1.1,tags:["big","weak"]},duckling:{name:"Утёнок",hp:12,reward:1.2,speed:2.1,group:4,tags:["flock","small","fast"]},box:{name:"Коробка со щитом",hp:70,reward:8,speed:1.35,filling:"duckling",fill:2,tags:["shield","weak"]},candy:{name:"Конфета",hp:6,reward:.6,speed:2.4,tags:["small"]},popper:{name:"Хлопушка",hp:20,reward:6,speed:1.4,tags:["boom"]},toaster:{name:"Тостер",hp:90,reward:8,speed:1.2,filling:"toast",fill:2,tags:["split","small"]},toast:{name:"Тост",hp:14,reward:1.5,speed:2,tags:["small","burn"]},soda:{name:"Газировка",hp:40,reward:5,speed:1.5,blast:.8,tags:["boom","flock"]},popcorn:{name:"Попкорн",hp:9,reward:.9,speed:2.2,group:5,tags:["burn","flock","small"]},kettle:{name:"Чайник",hp:200,reward:20,speed:1,tags:["armor","metal","big"]},plane:{name:"Бумажный самолётик",hp:10,reward:1,speed:2.7,group:3,tags:["flock","fast","small","burn"]},printer:{name:"Принтер",hp:125,reward:11,speed:1.1,filling:"paper",fill:3,tags:["big","weak","burn"]},paper:{name:"Лист бумаги",hp:8,reward:.8,speed:2.3,tags:["small","burn"]},shredder:{name:"Шредер",hp:90,reward:8,speed:1.2,tags:["armor","queue"]},chair:{name:"Офисное кресло",hp:50,reward:5,speed:1.9,group:3,train:!0,tags:["queue","fast"]},bigteddy:{name:"Мишка-великан",hp:110*22,reward:0,speed:.5,tags:["big","weak"]},pinata:{name:"Пиньята-гигант",hp:1,reward:0,speed:0,tags:["big","weak"]},microwave:{name:"Микроволновка-обжора",hp:90*22,reward:0,speed:.45,tags:["big","metal"]},fridge:{name:"Холодильник-гигант",hp:1,reward:0,speed:0,stand:!0,tags:["big","armor"]},cooler:{name:"Кулер-водомёт",hp:125*22,reward:0,speed:.45,tags:["big","armor"]},xerox:{name:"Мега-ксерокс",hp:1,reward:0,speed:0,stand:!0,tags:["big","armor"]}},Tm=.35,Za={every:16,gap:.5,first:2.5},Ou={chance:.07,radius:2.6,damage:1.2},yl={step:.05,max:1,show:3},Xs={need:60,seconds:10,bloom:.4},qb={rare:{reward:3,label:"редкий"},golden:{reward:10,label:"золотой"}},Ar={step:.04,starEvery:5,starMul:1.2,cost:12,costLine:1.7,growth:1.17,catalogMul:1.3},Am={hp:1.85,reward:1.9},Cm={partsEvery:5},fi={every:480,burst:25,flow:3,crate:1,parts:5},Pi={slots:3,minutes:.8,step:.08,cap:1.2,minCoins:25,parts:2,grow:.15},In={first:420,every:120,jitter:15,time:12,hp:10,minutes:1.5,parts:3},yr={rare:.02,golden:.003,refFlow:8,set1:{rare:3},set2:{rare:8,golden:1},parts:10},nc={share:.5,step:.12,reach:5.5,shield:.25},Yb=[8,20,50,120],jb=4,Bu={every:20},Ta={every:12,share:.2},Rm={kills:30},Kb={id:1,name:"Склад игрушек",scale:1,theme:{decor:"toys"},lines:[{name:"Резиновые утки",short:"Утки",junk:"duck",flow:18,weapon:"glock19"},{name:"Плюшевые мишки",short:"Мишки",junk:"teddy",flow:10,weapon:"revolver"},{name:"Стая утят",short:"Утята",junk:"duckling",flow:40,weapon:"uzi"},{name:"Коробки со щитом",short:"Коробки",junk:"box",flow:12,weapon:"glock19",rule:"ricochet"}],gates:[{at:3,kind:"line",line:1},{at:6,kind:"machine",id:"sorter"},{at:7,kind:"line",line:2},{at:11,kind:"mini"},{at:13,kind:"line",line:3},{at:16,kind:"machine",id:"magnet"},{at:18,kind:"rush"},{at:20,kind:"boss"}],machines:{sorter:{name:"Сортировщик",text:`пресс даёт деталь за каждые ${Cm.partsEvery} штук хлама — во всех цехах`,icon:"⚙️",keep:"sorter"},magnet:{name:"Монетный магнит",text:"+12% ко всем наградам",icon:"🧲",income:1.12}},mini:{junk:"bigteddy",line:1,crate:1,icon:"🧸"},rush:{name:"Распродажа",flow:1.6},boss:{name:"Пиньята-гигант",junk:"pinata",line:0,seconds:35,crate:3,loot:"m870",drop:"candy",drops:6,text:"Висит над линией 1. Тапай по ней — в золотую дверцу крит.<br>Из разбитой пиньяты сыплются конфеты"},story:{golden:210}},Zb={id:2,name:"Бешеная кухня",scale:10,theme:{background:"#0f2a2c",wall:"#174a4f",panel:"#8fc7bd",panelFrame:"#e8dcc4",wainscot:"#c94f3d",pillar:"#d9cbb0",plinth:"#c94f3d",floor:"#d8d0c4",slab:"#2a5f63",slabLow:"#1e4c50",stand:"#5f7f86",standTop:"#6a8a90",walls:"tiles",floorTex:"checker",decor:"kitchen",conveyor:{frame:"#9aa8b4",steel:"#7a8794",ram:"#c94f3d",post:"#5f6e7a",bin:"#3d6f73",binLid:"#2f5c60",belt:"#f0e2cc"},lamp:"#fff7e0"},lines:[{name:"Тостеры",short:"Тостеры",junk:"toaster",flow:12,weapon:"bow"},{name:"Газировка",short:"Газировка",junk:"soda",flow:16,weapon:"grenade",rule:"blast"},{name:"Попкорн",short:"Попкорн",junk:"popcorn",flow:50,weapon:"flamer",rule:"burn"},{name:"Чайники",short:"Чайники",junk:"kettle",flow:9,weapon:"tesla"}],gates:[{at:8,kind:"line",line:1},{at:16,kind:"machine",id:"night"},{at:17,kind:"line",line:2},{at:24,kind:"mini"},{at:26,kind:"line",line:3},{at:32,kind:"machine",id:"freezer"},{at:35,kind:"rush"},{at:36,kind:"boss"}],machines:{night:{name:"Ночная смена",text:`пройденные цеха работают сами: +1 деталь каждые ${Bu.every} с за цех`,icon:"🌙",keep:"night"},freezer:{name:"Морозильный склад",text:"+12% ко всем наградам кухни",icon:"🧊",income:1.12}},mini:{junk:"microwave",line:1,crate:1,icon:"♨️"},rush:{name:"Час пик",flow:1.6},boss:{name:"Холодильник-гигант",junk:"fridge",line:0,seconds:40,crate:3,loot:"cryo",drop:"toast",drops:6,text:"Стоит на линии 1. Бей в магнит на дверце — крит.<br>Из распахнутых дверец валятся тосты"},story:{}},Jb={id:3,name:"Офисный бунт",scale:100,theme:{background:"#141a26",wall:"#4a5468",panel:"#ffffff",panelFrame:"#e6e0d0",wainscot:"#2f5fa8",pillar:"#d6d0c0",plinth:"#2f5fa8",floor:"#9aa2b2",slab:"#3b465e",slabLow:"#2e374c",stand:"#646e84",standTop:"#727c92",walls:"windows",floorTex:"carpet",decor:"office",conveyor:{frame:"#3a4052",steel:"#555d70",ram:"#2f5fa8",post:"#2c3242",bin:"#7d8796",binLid:"#666f80",belt:"#b8c2d6"},lamp:"#eef6ff"},lines:[{name:"Бумажные самолётики",short:"Самолётики",junk:"plane",flow:45,weapon:"stapler"},{name:"Принтеры",short:"Принтеры",junk:"printer",flow:9,weapon:"laser"},{name:"Шредеры",short:"Шредеры",junk:"shredder",flow:12,weapon:"saw",rule:"pierce"},{name:"Кресла-паровоз",short:"Кресла",junk:"chair",flow:18,weapon:"crossbow",rule:"pin"}],gates:[{at:12,kind:"line",line:1},{at:22,kind:"machine",id:"autobuy"},{at:23,kind:"line",line:2},{at:33,kind:"mini"},{at:34,kind:"line",line:3},{at:46,kind:"machine",id:"partshred"},{at:47,kind:"rush"},{at:48,kind:"boss"}],machines:{autobuy:{name:"Автозакупка урона",text:`каждые ${Ta.every} с сама покупает самый дешёвый уровень урона, если он не дороже ${Math.round(Ta.share*100)}% монет`,icon:"🤖"},partshred:{name:"Шредер деталей",text:`+1 деталь за каждые ${Rm.kills} разбитых в цехе`,icon:"🗂️"}},mini:{junk:"cooler",line:1,crate:1,icon:"🚰"},rush:{name:"Дедлайн",flow:1.6},boss:{name:"Мега-ксерокс",junk:"xerox",line:0,seconds:45,crate:3,loot:"rail",drop:"paper",drops:8,text:"Стоит на линии 1. Бей в зелёную кнопку «Копия» — крит.<br>Из лотка сыплются листы"},story:{}},Cs=[Kb,Zb,Jb],da={share:.4,step:.1,radius:1.5},ys={chance:.2,step:.08,dps:.35,time:2.5,spread:1.1,spreadChance:.6},vr={time:2.5,shatter:2},mp={base:.55,step:.1},ma={chance:.12,step:.05,time:1.6},Hu={ricochet:{name:"Рикошет",icon:"↩️",from:"Коробки со щитом",text:s=>`${Math.round(Pm(s)*100)}% урона отскакивает в соседа; щиток отражает весь`},blast:{name:"Взрыв",icon:"💥",from:"Газировка",text:s=>`крит по слабому месту бьёт всё вокруг на ${Math.round((da.share+da.step*s)*100)}% урона`},burn:{name:"Поджог",icon:"🔥",from:"Попкорн",text:s=>`${Math.round((ys.chance+ys.step*s)*100)}% шанс поджечь: хлам горит и поджигает соседей`},pierce:{name:"Пробитие",icon:"🔩",from:"Шредеры",text:s=>`сквозь броню проходит ${Math.round(Vu(s)*100)}% урона, без модуля ${Math.round(Tm*100)}%`},pin:{name:"Пригвоздить",icon:"📌",from:"Кресла-паровоз",text:s=>`${Math.round((ma.chance+ma.step*s)*100)}% шанс прибить хлам кнопкой к ленте на ${ma.time} с`}},Vu=s=>s<0?Tm:Math.min(1,mp.base+mp.step*s),Pm=s=>nc.share+nc.step*s,Sd=s=>Math.floor((s||0)/Ar.starEvery);function Gu(s=0,t=0){return(1+Ar.step*s)*Math.pow(Ar.starMul,Sd(s))*Math.pow(Ar.catalogMul,t)}function Lm(s,t=0,e=1){return Math.round(Ar.cost*e*Math.pow(Ar.costLine,s)*Math.pow(Ar.growth,t))}const Qb=s=>Math.pow(Am.hp,s),tM=s=>Math.pow(Am.reward,s);function gp(s,t){return yr[t]*Math.min(1,yr.refFlow/s)}const eM=s=>s>=jb?null:Yb[s],Dm=s=>s.reduce((t,e)=>t+Sd(e),0),bl={box:{icon:"📦",title:"Коробка со щитом",text:"Стальной щиток спереди держит пули — бей по коробке над ним. С модулем «Рикошет» щиток отражает пулю в соседей. Внутри — утята."},popper:{icon:"🎉",title:"Хлопушка",text:"Взрывается и бьёт всё вокруг. Разбей её, когда рядом толпа хлама, — заденет всех."},teddy:{icon:"🧸",title:"Плюшевый мишка",text:"Крупный и живучий. Слабое место — голова: туда урон ×2."},duckling:{icon:"🐥",title:"Стая утят",text:"Мелкие и быстрые, едут стаей. Быстрая пушка с частым огнём — лучшее против них."},toaster:{icon:"🍞",title:"Тостер",text:"Разбитый тостер выстреливает два тоста — они тоже едут к прессу."},soda:{icon:"🥤",title:"Газировка",text:"Разбитая банка взрывается и ранит соседей: цепочка банок лопается разом."},popcorn:{icon:"🍿",title:"Попкорн",text:"Летит стаями по пять и отлично горит — огнемёт поджигает всю стаю."},kettle:{icon:"🫖",title:"Чайник",text:"Стальной корпус гасит 65% урона. Целься в носик — это слабое место."},plane:{icon:"✈️",title:"Бумажные самолётики",text:"Летят стаей и очень быстро. Скобы степлера прибивают их — они ползут медленнее. Бумага горит."},printer:{icon:"🖨️",title:"Принтер",text:"Слабое место — лоток спереди. Разбитый выплёвывает три листа бумаги."},shredder:{icon:"🗂️",title:"Шредер",text:"Стальной корпус гасит 65% урона — бей в щель с зубьями сверху. Пиломёт и рельсотрон режут броню."},chair:{icon:"🪑",title:"Кресла-паровоз",text:"Едут по трое, нос к хвосту. Болт арбалета насаживает всю тройку на шампур."},golden:{icon:"✨",title:"Золотой хлам",text:"Редкая золотая версия: награда ×10 и запись в каталог линии."},rare:{icon:"★",title:"Редкий хлам",text:"Цветная версия: награда ×3. Три редких на линии — набор каталога и +30% к её награде."},bonus:{icon:"🐷",title:"Летучая копилка",text:"Тапай по ней как можно быстрее: каждый тап — выстрел из всех пушек сразу, патроны не тратятся. Успей до таймера — куча монет."}},nM=new Ke(1,22,16),Aa=new ts(1,1,18),xi=new Ce(1,1,1,18),ph=new Map;function iM(s,t,e,n){const i=`${s}|${t}|${e}|${n}`;return ph.has(i)||ph.set(i,new Sn(s,t,e,3,n)),ph.get(i)}const mh=new Map;function ln(s,t="lacquer"){const e=`${t}|${s}`;if(!mh.has(e)){let n;t==="gold"?n=vt(s,{spec:.75,gloss:22,sheen:.12,rim:.4,emissive:"#5a3a00",emissiveIntensity:.55}):t==="steel"?n=Fe(s,{spec:.32}):t==="toy"?n=vt(s,{spec:.08,gloss:10,rim:.06}):n=ce(s,{spec:.22,gloss:16,rim:.1}),mh.set(e,n)}return mh.get(e)}function Ht(s,t,e,n,i,r,a=r,o=r,l,c=!0){const h=new W(nM,ln(t,l));return h.position.set(e,n,i),h.scale.set(r,a,o),h.castShadow=c,s.add(h),h}function Gt(s,t,e,n,i,r,a,o,l,c){const h=new W(iM(e,n,i,r),ln(t,c));return h.position.set(a,o,l),h.castShadow=!0,s.add(h),h}const On="#ffcf3a",ti="#1b1d23";function sM(s,t,e,n,i=.085){for(const r of[1,-1])Ht(s,"#fffaf0",t,e,n*r,i,i,i*.8,"toy",!1),Ht(s,ti,t-i*.65,e+i*.1,n*r*1.08,i*.58,i*.58,i*.45,"toy",!1)}function vp(s,t,e=!1){const n=t==="golden",i=n?On:t==="rare"?"#7fd6ff":e?"#ffe066":"#ffd23f",r=n?"#f0b51f":t==="rare"?"#5cb8e8":e?"#ffd23f":"#f2b52a",a=n?"gold":"lacquer";Ht(s,i,.05,.45,0,.62,.45,.5,a),Ht(s,i,.55,.64,0,.2,.15,.17,a).rotation.z=-.6,Ht(s,i,-.33,.95,0,.34,.33,.32,a),Ht(s,n?"#ffb020":"#ff8a1f",-.66,.9,0,.21,.08,.16,a),Ht(s,n?"#e89a10":"#f2741a",-.62,.83,0,.16,.06,.13,a),sM(s,-.46,1.05,.2);for(const o of[1,-1])Ht(s,r,.1,.52,.44*o,.32,.2,.09,a);if(t==="rare"&&!e){const o=new W(xi,ln("#f6f0e4","toy"));o.scale.set(.24,.12,.24),o.position.set(-.3,1.27,0),o.castShadow=!0,s.add(o);const l=new W(xi,ln("#2f4569","toy"));l.scale.set(.25,.05,.25),l.position.set(-.3,1.22,0),s.add(l)}return{spheres:e?[{c:new b(-.1,.55,0),r:.62}]:[{c:new b(.05,.45,0),r:.6},{c:new b(-.35,.95,0),r:.36,weak:!0}],colors:[i,r,"#ff8a1f","#fffaf0"],height:1.35}}function xp(s,t,e=!1){const n=t==="golden",i=n?On:t==="rare"?"#f29bc0":"#b4703a",r=n?"#ffe08a":t==="rare"?"#ffd6e6":"#f0c793",a=n?"gold":"toy";Ht(s,i,0,.72,0,.58,.66,.5,a),Ht(s,r,0,.66,.3,.38,.42,.22,a),Ht(s,i,0,1.52,0,.46,.42,.42,a),Ht(s,r,0,1.44,.34,.2,.15,.13,a),Ht(s,"#3b2416",0,1.5,.46,.08,.06,.05,"lacquer");for(const o of[1,-1])Ht(s,ti,.16*o,1.62,.36,.06,.07,.05,"lacquer",!1),Ht(s,i,.34*o,1.86,0,.17,.17,.1,a),Ht(s,r,.34*o,1.86,.06,.1,.1,.06,a,!1),Ht(s,i,.56*o,.86,.1,.18,.3,.18,a).rotation.z=.5*o,Ht(s,i,.28*o,.2,.18,.22,.2,.28,a);if(t==="rare"||e){const o=e?"#e8384d":"#ff4f8b";for(const l of[1,-1])Ht(s,o,.15*l,1.14,.36,.14,.1,.07,"lacquer");Ht(s,o,0,1.14,.4,.07,.07,.06,"lacquer")}if(e){for(const o of[1,-1]){const l=Gt(s,ti,.2,.05,.05,.02,.15*o,1.73,.38,"toy");l.rotation.z=-.35*o}Ht(s,"#7fd6ff",-.28,.95,.38,.14,.14,.05,"toy")}return{spheres:[{c:new b(0,.72,0),r:.66},{c:new b(0,1.52,.05),r:.46,weak:!0}],colors:[i,r,"#fffaf0","#fffaf0"],height:2.1}}function rM(s,t){const e=t==="golden",n=e?On:t==="rare"?"#9b6bd6":"#c98f52",i=e?"#ffe08a":t==="rare"?"#b48ae6":"#d9a467",r=t==="rare"?"#ffd23f":"#ead6a8",a=e?"gold":"toy";Gt(s,n,1.05,.9,.95,.08,0,.47,0,a);for(const o of[1,-1]){const l=Gt(s,i,.5,.06,.9,.03,.27*o,.95,0,a);l.rotation.z=-.35*o}Gt(s,r,1.07,.92,.18,.04,0,.47,0,"toy");for(const o of[1,-1])Ht(s,"#ff4f5e",.14*o,1.03,0,.15,.1,.08,"lacquer");Ht(s,"#ff4f5e",0,1,0,.07,.07,.07,"lacquer"),Gt(s,"#58698c",.1,.92,1.05,.04,-.62,.55,0,"steel");for(const o of[.13,.97])Gt(s,"#f08a20",.12,.07,1.07,.03,-.63,o,0,"lacquer");for(const o of[.35,-.35])Ht(s,"#8a9ab8",-.68,.55,o,.05,.05,.03,"steel",!1);return{spheres:[{c:new b(-.62,.55,0),r:.55,shield:!0},{c:new b(0,.47,0),r:.62},{c:new b(0,1.02,0),r:.22,weak:!0}],colors:[n,i,r,"#58698c"],height:1.25}}const _p=["#ff5a8a","#44c4ff","#ffd23f","#7be36b","#c783ff"];function aM(s){const t=_p[Math.floor(Math.random()*_p.length)];Ht(s,t,0,.22,0,.24,.2,.2,"lacquer");for(const e of[1,-1]){const n=new W(Aa,ln(t,"lacquer"));n.scale.set(.13,.22,.13),n.position.set(.3*e,.22,0),n.rotation.z=Math.PI/2*e,s.add(n)}return Ht(s,"#ffffff",-.06,.32,.12,.06,.04,.03,"toy",!1),{spheres:[{c:new b(0,.22,0),r:.32}],colors:[t,"#ffffff",t],height:.5}}function oM(s){const t=new W(xi,ln("#ff4f5e","lacquer"));t.scale.set(.3,.72,.3),t.position.y=.4,t.castShadow=!0,s.add(t);for(const n of[.2,.42,.64]){const i=new W(xi,ln("#fff4dc","lacquer"));i.scale.set(.31,.07,.31),i.position.y=n,s.add(i)}const e=new W(Aa,ln(On,"gold"));return e.scale.set(.34,.3,.34),e.position.y=.91,e.castShadow=!0,s.add(e),["#44c4ff","#7be36b","#c783ff","#ffd23f"].forEach((n,i)=>{const r=i/4*Math.PI*2;Gt(s,n,.05,.36,.1,.02,Math.cos(r)*.1,1.15,Math.sin(r)*.1,"lacquer").rotation.set(Math.sin(r)*.6,0,-Math.cos(r)*.6)}),{spheres:[{c:new b(0,.5,0),r:.45}],colors:["#ff4f5e","#fff4dc",On,"#44c4ff","#7be36b"],height:1.3}}function Hn(s,t,e,n,i=.18,r=.09){for(const a of[1,-1])Ht(s,"#fffaf0",t+i*a,e,n,r,r*1.1,r*.6,"toy",!1),Ht(s,ti,t+i*a-r*.25,e-r*.1,n+r*.4,r*.55,r*.6,r*.35,"toy",!1)}function lM(s,t){const e=t==="golden",n=e?On:t==="rare"?"#56baff":"#e4554a";Gt(s,n,1.1,.72,.72,.16,0,.42,0,e?"gold":"lacquer"),Gt(s,"#c9d2e0",1.14,.12,.76,.05,0,.8,0,"steel");for(const r of[-.22,.22]){Gt(s,ti,.4,.05,.12,.02,r,.86,0,"toy");const a=Gt(s,"#e8b56a",.34,.2,.08,.04,r,.92,0,"toy");a.rotation.z=r*.3}Gt(s,"#3a3f4d",.08,.2,.12,.03,.58,.5,.2,"steel");for(const r of[-.42,.42])Gt(s,"#3a3f4d",.14,.08,.5,.03,r,.04,0,"steel");return Hn(s,0,.5,.37),{spheres:[{c:new b(0,.42,0),r:.62},{c:new b(0,.88,0),r:.24,weak:!0}],colors:[n,"#c9d2e0","#e8b56a","#3a3f4d"],height:1}}function cM(s){return Gt(s,"#e8b56a",.52,.56,.12,.1,0,.32,0,"toy"),Gt(s,"#b8742e",.58,.62,.08,.12,0,.32,-.02,"toy"),Hn(s,0,.38,.07,.12,.06),{spheres:[{c:new b(0,.32,0),r:.36}],colors:["#e8b56a","#b8742e","#fff4dc"],height:.7}}function hM(s,t){const e=t==="golden",n=e?On:t==="rare"?"#7be36b":"#e8384d",i=e?"gold":"lacquer",r=new W(xi,ln(n,i));r.scale.set(.3,.82,.3),r.position.y=.43,r.castShadow=!0,s.add(r);const a=new W(xi,ln("#fff4dc","lacquer"));a.scale.set(.305,.18,.305),a.position.y=.46,s.add(a);const o=new W(xi,ln("#c9d2e0","steel"));return o.scale.set(.27,.05,.27),o.position.y=.86,s.add(o),Gt(s,"#8a9ab8",.16,.03,.08,.01,.06,.9,0,"steel"),Hn(s,0,.62,.28,.11,.07),{spheres:[{c:new b(0,.43,0),r:.42},{c:new b(.04,.9,0),r:.18,weak:!0}],colors:[n,"#fff4dc","#c9d2e0","#ffd23f"],height:1}}function uM(s,t){const e=t==="golden"?On:t==="rare"?"#ff8fc6":"#fff4dc",n=t==="golden"?"gold":"toy";return Ht(s,e,0,.26,0,.22,.2,.2,n),Ht(s,e,.14,.34,.06,.15,.14,.14,n),Ht(s,e,-.13,.33,-.04,.14,.13,.13,n),Ht(s,e,.02,.44,.02,.13,.12,.12,n),Ht(s,"#ffd23f",.04,.12,.08,.1,.07,.08,"toy"),Hn(s,0,.3,.19,.08,.05),{spheres:[{c:new b(0,.3,0),r:.34}],colors:[e,"#ffd23f","#fff4dc"],height:.6}}function dM(s,t){const e=t==="golden",n=e?On:t==="rare"?"#c783ff":"#9aa8c0",i=e?"gold":"steel";Ht(s,n,0,.55,0,.6,.52,.55,i),Gt(s,"#3a3f4d",.5,.1,.5,.04,0,1.04,0,"steel"),Ht(s,"#3a3f4d",0,1.14,0,.09,.07,.09,"steel");const r=new W(Aa,ln(n,i));r.scale.set(.12,.5,.12),r.rotation.z=Math.PI/2-.5,r.position.set(-.68,.72,0),r.castShadow=!0,s.add(r);const a=new W(new Fi(.3,.06,8,18,Math.PI),ln("#3a3f4d","steel"));return a.position.set(.5,.7,0),a.rotation.z=-Math.PI/2,s.add(a),Hn(s,-.1,.62,.5,.17,.09),{spheres:[{c:new b(-.86,.86,0),r:.22,weak:!0},{c:new b(0,.55,0),r:.64,armor:!0}],colors:[n,"#3a3f4d","#c9d2e0"],height:1.25}}function fM(s){Gt(s,"#f4f0e4",1.5,.95,.95,.12,0,.5,0,"lacquer"),Gt(s,"#1f3e68",.9,.62,.06,.08,-.18,.5,.48,"steel"),Gt(s,"#3a3f4d",.32,.72,.06,.06,.52,.5,.48,"steel"),Ht(s,"#7be36b",.52,.72,.52,.06,.06,.03,"lacquer",!1);for(const t of[.52,.36])Ht(s,"#ffd23f",.52,t,.52,.05,.05,.03,"lacquer",!1);Hn(s,-.18,.62,.53,.22,.11);for(const t of[1,-1]){const e=Gt(s,ti,.24,.05,.05,.02,-.18+.22*t,.8,.53,"toy");e.rotation.z=-.35*t}return{spheres:[{c:new b(.52,.72,.4),r:.22,weak:!0},{c:new b(0,.5,0),r:.85,armor:!0}],colors:["#f4f0e4","#1f3e68","#7be36b","#3a3f4d"],height:1.05}}function pM(s){Gt(s,"#dff1ec",1.35,2.7,1.05,.16,0,1.38,0,"lacquer"),Gt(s,"#bfe0d8",1.37,.06,1.07,.02,0,1.92,0,"lacquer");for(const t of[2.35,1.4])Gt(s,"#c9d2e0",.08,.5,.1,.04,.5,t,.56,"steel");Ht(s,"#e8384d",-.42,2.3,.55,.13,.13,.06,"lacquer"),Ht(s,"#44c4ff",-.2,1.5,.55,.1,.1,.05,"lacquer"),Ht(s,"#ffd23f",-.45,1.2,.55,.11,.11,.05,"lacquer"),Hn(s,-.05,1.05,.55,.26,.14);for(const t of[1,-1]){const e=Gt(s,ti,.3,.07,.06,.02,-.05+.26*t,1.3,.56,"toy");e.rotation.z=-.35*t}return Gt(s,ti,.5,.1,.06,.04,-.05,.7,.56,"toy"),{spheres:[{c:new b(-.42,2.3,.55),r:.3,weak:!0},{c:new b(0,1.1,0),r:1,armor:!0},{c:new b(0,2.2,0),r:.9,armor:!0}],colors:["#dff1ec","#bfe0d8","#c9d2e0","#e8384d"],height:2.8}}function mM(s,t){const e=t==="golden"?On:t==="rare"?"#ff8fc6":"#f6f4ee",n=t==="golden"?"gold":"toy";for(const r of[1,-1]){const a=new W(Aa,ln(e,n));a.scale.set(.3,.9,.05),a.rotation.set(r*.35,0,Math.PI/2),a.position.set(0,.42,.14*r),a.castShadow=!0,s.add(a)}const i=new W(Aa,ln(t?e:"#d9e4f2",n));return i.scale.set(.12,.9,.05),i.rotation.z=Math.PI/2,i.position.set(0,.32,0),s.add(i),Gt(s,"#56baff",.3,.03,.02,.01,.12,.44,.27,"toy"),Hn(s,-.12,.47,.25,.08,.05),{spheres:[{c:new b(0,.4,0),r:.32}],colors:[e,"#d9e4f2","#56baff"],height:.6}}function gM(s,t){const e=t==="golden",n=e?On:t==="rare"?"#7be36b":"#e9e6dc";return Gt(s,n,1.15,.62,.85,.12,0,.36,0,e?"gold":"lacquer"),Gt(s,"#3a3f4d",1.1,.12,.8,.05,0,.72,0,"steel"),Gt(s,"#f6f4ee",.5,.04,.6,.02,-.68,.5,0,"toy").rotation.z=.25,Gt(s,"#3a3f4d",.7,.06,.03,.02,0,.3,.44,"steel"),Ht(s,"#7be36b",.42,.56,.44,.05,.05,.03,"lacquer",!1),Ht(s,"#ff4f5e",.3,.56,.44,.05,.05,.03,"lacquer",!1),Hn(s,-.1,.5,.43,.17,.09),{spheres:[{c:new b(-.7,.52,0),r:.26,weak:!0},{c:new b(0,.4,0),r:.62}],colors:[n,"#3a3f4d","#f6f4ee"],height:.85}}function vM(s){const t=Gt(s,"#f6f4ee",.5,.62,.03,.02,0,.34,0,"toy");t.rotation.y=.2;for(let e=0;e<4;e++)Gt(s,"#9fb4d6",.34,.025,.035,.01,0,.5-e*.09,.005,"toy");return Hn(s,0,.24,.03,.1,.06),{spheres:[{c:new b(0,.34,0),r:.33}],colors:["#f6f4ee","#9fb4d6"],height:.68}}function xM(s,t){const e=t==="golden",n=e?On:t==="rare"?"#56baff":"#5d6477";Gt(s,n,.8,.95,.72,.1,0,.48,0,e?"gold":"steel"),Gt(s,"#2a2e38",.84,.16,.76,.05,0,1,0,"steel"),Gt(s,ti,.56,.05,.1,.02,0,1.09,0,"toy");for(let r=0;r<6;r++)Gt(s,"#c9d2e0",.05,.08,.06,.01,-.22+r*.09,1.08,0,"steel");Gt(s,"#ffd23f",.3,.08,.03,.02,0,.18,.37,"lacquer"),Hn(s,0,.66,.37,.15,.08);for(const r of[1,-1]){const a=Gt(s,ti,.16,.035,.03,.01,.15*r,.78,.37,"toy");a.rotation.z=-.3*r}return{spheres:[{c:new b(0,1.08,0),r:.24,weak:!0},{c:new b(0,.48,0),r:.58,armor:!0}],colors:[n,"#2a2e38","#c9d2e0","#f6f4ee"],height:1.15}}function _M(s,t){const e=t==="golden",n=e?On:t==="rare"?"#ff8fc6":"#2f5fa8",i=e?"gold":"lacquer";for(let a=0;a<5;a++){const o=a/5*Math.PI*2;Gt(s,"#3a3f4d",.42,.05,.07,.02,Math.cos(o)*.2,.1,Math.sin(o)*.2,"steel").rotation.y=-o,Ht(s,ti,Math.cos(o)*.4,.06,Math.sin(o)*.4,.06,.06,.06,"toy",!1)}const r=new W(xi,ln("#c9d2e0","steel"));return r.scale.set(.05,.3,.05),r.position.y=.27,s.add(r),Gt(s,n,.7,.14,.62,.07,0,.47,0,i),Gt(s,n,.14,.72,.58,.07,.3,.86,0,i).rotation.z=-.12,Hn(s,.2,.92,.3,.12,.07),{spheres:[{c:new b(.3,1.1,0),r:.22,weak:!0},{c:new b(0,.55,0),r:.5}],colors:[n,"#3a3f4d","#c9d2e0"],height:1.25}}function yM(s){Gt(s,"#e9e6dc",.7,1,.65,.1,0,.5,0,"lacquer");const t=new W(xi,vt("#7fc8ff",{transparent:!0,opacity:.7,spec:.8,gloss:30,rim:.4}));t.scale.set(.3,.62,.3),t.position.y=1.33,s.add(t),Ht(s,"#7fc8ff",0,1.66,0,.3,.14,.3,"lacquer");for(const[e,n]of[[.12,"#44c4ff"],[-.12,"#ff4f5e"]])Gt(s,n,.08,.1,.08,.02,-.36,.7,e,"lacquer");return Hn(s,0,.62,.34,.14,.08),{spheres:[{c:new b(0,1.33,0),r:.34,weak:!0},{c:new b(0,.5,0),r:.55,armor:!0}],colors:["#e9e6dc","#7fc8ff","#44c4ff"],height:1.8}}function bM(s){Gt(s,"#e9e6dc",1.9,1.3,1.1,.14,0,.66,0,"lacquer"),Gt(s,"#3a3f4d",1.95,.14,1.14,.05,0,1.38,0,"steel"),Gt(s,"#5d6477",1.9,.5,1,.1,.1,1.72,-.05,"lacquer");for(let t=0;t<3;t++)Gt(s,"#c9d2e0",1.7,.06,.06,.02,0,.9-t*.22,.56,"steel");Gt(s,"#f6f4ee",.7,.05,.8,.02,-1.15,1,0,"toy").rotation.z=.2,Gt(s,"#2a2e38",.6,.3,.06,.04,.55,1.18,.56,"steel"),Ht(s,"#7be36b",.72,1.2,.6,.1,.1,.05,"lacquer"),Ht(s,"#ff4f5e",.42,1.2,.6,.06,.06,.04,"lacquer"),Hn(s,-.3,1.12,.57,.26,.13);for(const t of[1,-1]){const e=Gt(s,ti,.28,.06,.05,.02,-.3+.26*t,1.34,.57,"toy");e.rotation.z=-.35*t}return{spheres:[{c:new b(.72,1.2,.6),r:.28,weak:!0},{c:new b(0,.7,0),r:1,armor:!0},{c:new b(0,1.6,0),r:.85,armor:!0}],colors:["#e9e6dc","#3a3f4d","#f6f4ee","#7be36b"],height:2}}const gh=["#ffd23f","#44c4ff","#ff8a1f","#7be36b","#c783ff"];function MM(s){Ht(s,"#ff6fae",0,0,0,.95,.95,.85,"toy"),gh.forEach((t,e)=>{const n=new W(new Fi(.9-e*.02,.07,10,40),ln(t,"toy"));n.rotation.set(Math.PI/2,0,0),n.position.y=-.52+e*.26,n.scale.setScalar(Math.sqrt(Math.max(.05,1-Math.pow((-.52+e*.26)/.95,2)))),s.add(n)});for(let t=0;t<5;t++){const e=Math.PI/2+t*Math.PI*2/5,n=new W(Aa,ln(gh[t],"toy"));n.scale.set(.34,.85,.3),n.position.set(Math.cos(e)*1.15,Math.sin(e)*1.15,0),n.rotation.z=e-Math.PI/2,n.castShadow=!0,s.add(n),Ht(s,"#ff4f5e",Math.cos(e)*1.62,Math.sin(e)*1.62,0,.1,.1,.1,"lacquer")}for(const t of[1,-1])Ht(s,"#fffaf0",.3*t,.22,.74,.2,.22,.12,"toy",!1),Ht(s,ti,.27*t,.18,.84,.1,.11,.06,"toy",!1);return Ht(s,"#e8384d",0,-.2,.8,.16,.08,.06,"lacquer",!1),Ht(s,On,-.84,0,.36,.24,.24,.12,"gold").rotation.y=-1.1,{spheres:[{c:new b(-.86,0,.36),r:.36,weak:!0},{c:new b(0,0,0),r:1.25}],colors:["#ff6fae",...gh],height:1.8}}const wM={duck:(s,t)=>vp(s,t),duckling:(s,t)=>vp(s,t,!0),teddy:(s,t)=>xp(s,t),bigteddy:(s,t)=>xp(s,t,!0),box:(s,t)=>rM(s,t),candy:s=>aM(s),popper:s=>oM(s),pinata:s=>MM(s),toaster:(s,t)=>lM(s,t),toast:s=>cM(s),soda:(s,t)=>hM(s,t),popcorn:(s,t)=>uM(s,t),kettle:(s,t)=>dM(s,t),microwave:s=>fM(s),fridge:s=>pM(s),plane:(s,t)=>mM(s,t),printer:(s,t)=>gM(s,t),paper:s=>vM(s),shredder:(s,t)=>xM(s,t),chair:(s,t)=>_M(s,t),cooler:s=>yM(s),xerox:s=>bM(s)},yp={duck:1,duckling:.5,teddy:1,bigteddy:2.1,box:1,candy:1,popper:1,pinata:1.25,toaster:1,toast:1,soda:1,popcorn:1,kettle:1,microwave:1.6,fridge:1.1,plane:1,printer:1,paper:1,shredder:1,chair:1,cooler:1.7,xerox:1.2},bp={duck:.35,duckling:.35,teddy:-.55,bigteddy:-.55,box:.15,candy:0,popper:0,pinata:.25,toaster:-.35,toast:-.3,soda:-.3,popcorn:-.2,kettle:-.3,microwave:-.3,fridge:-.35,plane:.25,printer:-.35,paper:-.25,shredder:-.3,chair:-.4,cooler:-.3,xerox:-.3},Mp=vt("#e8384d",{spec:.5,gloss:24,rim:.3}),SM=Fe("#c9d2e0",{spec:.5}),EM=vt("#bfe9ff",{transparent:!0,opacity:.5,spec:.9,gloss:30,rim:.6,emissive:"#3f8fd0",emissiveIntensity:.25}),TM=new b;class AM{constructor(t,e=null){this.kind=t,this.variant=e,this.def=Le[t],this.root=new ut,this.body=new ut,this.root.add(this.body);const n=yp[t]??1,i=wM[t](this.body,e);this.body.scale.setScalar(n),this.body.rotation.y=bp[t]??0,this.spheres=i.spheres.map(r=>({...r,c:r.c.clone().applyAxisAngle(TM.set(0,1,0),this.body.rotation.y).multiplyScalar(n),r:r.r*n})),this.colors=i.colors,this.height=i.height*n,this.radius=Math.max(...this.spheres.map(r=>Math.hypot(r.c.x,r.c.z)+r.r))*.8,this.hp=this.maxHp=1,this.alive=!1,this.gen=0,this.t=Math.random()*10,this.punch=0,this.punchV=0,this.pop=1,this.x=0,this.z=0,this.speed=this.def.speed,this.state="ride",this.frozenT=0,this.burnT=0,this.burnDps=0,this.pinT=0,this.slowT=0,this.slowK=1,this.skewer=0,this.ice=null,this.pin=null}get held(){return this.frozenT>0||this.pinT>0}get pace(){return this.slowT>0?this.speed*this.slowK:this.speed}setPin(t){if(t&&!this.pin){this.pin=new ut;const e=new W(xi,Mp);e.scale.set(.16,.12,.16),e.position.y=.3;const n=new W(xi,Mp);n.scale.set(.08,.16,.08),n.position.y=.17;const i=new W(xi,SM);i.scale.set(.02,.2,.02),i.position.y=0,this.pin.add(e,n,i),this.pin.rotation.z=.25,this.root.add(this.pin)}this.pin&&(this.pin.visible=t,this.pin.position.y=this.height*.9)}setIce(t){if(t&&!this.ice){const e=Math.max(...this.spheres.map(n=>n.r))*1.25;this.ice=new W(new bc(1,1),EM),this.ice.scale.set(e*1.1,this.height*.62,e*1.1),this.ice.position.y=this.height*.5,this.ice.renderOrder=3,this.root.add(this.ice)}this.ice&&(this.ice.visible=t)}sphereWorld(t,e){return e.copy(this.spheres[t].c).applyMatrix4(this.root.matrixWorld)}aimPoint(t){const e=this.spheres.findIndex(n=>n.weak);return this.sphereWorld(e>=0?e:this.spheres.length-1,t)}hit(t=1){this.punchV+=5*t}update(t){this.t+=t,this.pop=Math.min(1,this.pop+t/.3),this.punchV+=(-300*this.punch-18*this.punchV)*t,this.punch+=this.punchV*t;const e=Je.clamp(this.punch*.06,-.12,.16),n=this.body,i=this.t,r=(yp[this.kind]??1)*(this.pop<1?1+2.7*Math.pow(this.pop-1,3)+1.7*Math.pow(this.pop-1,2):1);if(n.scale.set(r*(1+e),r*(1-e*1.3),r*(1+e)),this.frozenT>0&&(this.frozenT=Math.max(0,this.frozenT-t)),(this.frozenT>0||this.ice)&&this.setIce(this.frozenT>0),this.slowT>0&&(this.slowT=Math.max(0,this.slowT-t)),this.pinT>0&&(this.pinT=Math.max(0,this.pinT-t)),(this.pinT>0||this.pin)&&this.setPin(this.pinT>0),!this.held)switch(this.kind){case"duck":n.rotation.z=Math.sin(i*3.2)*.08,n.position.y=Math.abs(Math.sin(i*6.4))*.03;break;case"duckling":n.position.y=Math.abs(Math.sin(i*11))*.09;break;case"teddy":case"bigteddy":n.rotation.z=Math.sin(i*(this.kind==="teddy"?5:2.6))*.09;break;case"box":n.rotation.z=Math.sin(i*7)*.02;break;case"candy":n.rotation.x=i*3;break;case"toaster":case"microwave":n.position.y=Math.abs(Math.sin(i*8))*.03;break;case"toast":case"popcorn":n.position.y=Math.abs(Math.sin(i*10))*.08,n.rotation.z=Math.sin(i*6)*.1;break;case"soda":case"kettle":n.rotation.z=Math.sin(i*4.2)*.07;break;case"plane":n.position.y=.1+Math.sin(i*7)*.08,n.rotation.x=Math.sin(i*5)*.25;break;case"paper":n.rotation.x=Math.sin(i*9)*.3,n.position.y=Math.abs(Math.sin(i*9))*.06;break;case"printer":case"shredder":case"cooler":n.position.y=Math.abs(Math.sin(i*9))*.03,n.rotation.z=Math.sin(i*4.5)*.03;break;case"chair":n.rotation.y=bp.chair+Math.sin(i*2.4)*.35;break;case"xerox":n.position.y=Math.abs(Math.sin(i*14))*.012,n.rotation.z=Je.clamp(this.punch*.02,-.06,.06);break;case"fridge":n.scale.y*=1+Math.sin(i*1.6)*.015,n.rotation.z=Je.clamp(this.punch*.02,-.08,.08);break;case"popper":n.rotation.z=Math.sin(i*23)*.05,n.position.y=Math.abs(Math.sin(i*9))*.04;break;case"pinata":n.rotation.z=Math.sin(i*1.3)*.12+Je.clamp(this.punch*.04,-.3,.3);break}}}const Ge=.34,Me=-.9,An=1.8,hr=1.5,wp=2.55,CM={down:.16,hold:.14,up:.32},RM=1.2,Sp=1.15,Ep=12,xo=["#e88724","#3fbf6a","#3c9bff","#a35cff","#ffc533","#ff6fd0"],PM=s=>1+2.7*Math.pow(s-1,3)+1.7*Math.pow(s-1,2);let Ja=null;function LM(){if(Ja)return Ja;const s=new ls;for(let t=0;t<10;t++){const e=Math.PI/2+t*Math.PI/5,n=t%2?.09:.22;t?s.lineTo(Math.cos(e)*n,Math.sin(e)*n):s.moveTo(Math.cos(e)*n,Math.sin(e)*n)}return Ja=new yc(s,{depth:.05,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2}),Ja.translate(0,0,-.025),Ja}const vh=new b,xh=new b;function Ai(s,t,e,n,i,r,a,o){const l=new W(new Sn(s,t,e,2,Math.min(n,s/2-.001,t/2-.001,e/2-.001)),i);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}let _h=null;function DM(){if(!_h){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#323c55",e.fillRect(0,0,128,128),e.strokeStyle="#4a5878",e.lineWidth=14,e.lineCap="round",e.beginPath(),e.moveTo(84,10),e.lineTo(44,64),e.lineTo(84,118),e.stroke(),e.strokeStyle="#26304a",e.lineWidth=4,e.beginPath(),e.moveTo(92,16),e.lineTo(54,64),e.lineTo(92,112),e.stroke(),_h=t}const s=new im(_h);return s.wrapS=s.wrapT=Ps,s.colorSpace=Un,s.anisotropy=4,s}const kM={frame:"#2f4569",steel:"#4b5872",ram:"#6c7894",post:"#3a4560",bin:"#56703a",binLid:"#46602f",belt:"#ffffff"},Wu=new _t("#ffffff"),km=new Set;function IM(s={}){var n;const t={...kM,...s},e=$u();for(const i of["frame","steel","ram","post","bin","binLid"])e[i].color.set(t[i]);Wu.set(t.belt);for(const i of km)(n=i.beltMat)==null||n.color.copy(Wu)}const Ml={};function $u(){return Ml.frame||Object.assign(Ml,{frame:vt("#2f4569",{spec:.1,gloss:10,rim:.06}),rail:ce("#e88724"),roller:Fe("#8a96ae",{spec:.4}),steel:Fe("#4b5872",{spec:.3}),ram:Fe("#6c7894",{spec:.35}),piston:Fe("#c9d2e0",{spec:.6,gloss:30}),hazard:ce("#ffc533"),dark:vt("#1b2236",{spec:.02,rim:0}),bin:ce("#56703a"),binLid:ce("#46602f"),lamp:vt("#ff9a3a",{emissive:"#ff6a10",emissiveIntensity:.4,rim:0}),starOff:vt("#4a5878",{spec:.1,rim:.1,transparent:!0,opacity:.75}),post:Fe("#3a4560"),rails:xo.map(s=>ce(s)),stripes:xo.map(s=>ce(s))}),Ml}class UM{constructor(t,e,n={}){this.scene=t,this.line=e,this.hooks=n,this.group=new ut,t.add(this.group),this.static=null,this.key="",this.items=[],this.pool=new Map,this.running=!1,this.waveT=Za.first,this.pending=0,this.gapT=0,this.press={t:-1,junk:null},this.floor=0,this.beltSpeed=Le[e.junk].speed,this.tex=DM(),this.lampK=0,this.visible=!0,this.stars=0,this.rails=[],this.stripes=[],this.deco=null,this.starPop=null,this.starFlash=0,this.starOn=vt("#ffd23f",{emissive:"#ffb300",emissiveIntensity:1.3,spec:.5,rim:.3}),km.add(this)}get pressX(){return _e.benchX1+.75+1.35}get beltX0(){return this.pressX+hr/2}get beltX1(){return _e.halfW+RM+.6}get visibleX(){return _e.halfW-.4}relayout(t){this.floor=t,this.group.position.set(0,t,0);const e=`${_e.benchX1.toFixed(3)}|${_e.halfW.toFixed(3)}`;e!==this.key&&(this.key=e,this.static&&(this.group.remove(this.static),this.static.traverse(n=>n.isMesh&&n.geometry.dispose())),this.static=this.build(),this.group.add(this.static),this.decorate())}build(){const t=$u(),e=new ut,n=this.beltX0,i=this.beltX1,r=i-n,a=(n+i)/2,o=Fu(r+1,An+1.2,.5);o.position.set(a,.006,Me),e.add(o),e.add(Ai(r,Ge-.1,An,.06,t.frame,a,(Ge-.1)/2,Me)),this.rails=[];for(const d of[1,-1]){const _=Ai(r,.2,.14,.05,t.rail,a,Ge+.04,Me+d*(An/2+.03));this.rails.push(_),e.add(_)}this.tex.repeat.set(r*Sp,1),this.beltMat??(this.beltMat=vt("#ffffff",{map:this.tex,spec:.05,rim:0})),this.beltMat.color.copy(Wu);const l=new W(new hn(r,An-.08),this.beltMat);l.rotation.x=-Math.PI/2,l.position.set(a,Ge+.002,Me),l.receiveShadow=!0,e.add(l);const c=new Ce(.17,.17,An+.1,18);c.rotateX(Math.PI/2);const h=new W(c,t.roller);h.position.set(n+.05,Ge-.12,Me),e.add(h);const u=this.pressX;e.add(Ai(hr+.1,Ge+.04,An+.3,.06,t.steel,u,(Ge+.04)/2,Me));const f=Me-An/2-.42;e.add(Ai(.62,3.55,.62,.1,t.frame,u,3.55/2,f)),this.stripes=[];for(const d of[.5,1.1,1.7]){const _=Ai(.66,.16,.66,.04,t.hazard,u,d,f);_.castShadow=!1,this.stripes.push(_),e.add(_)}e.add(Ai(hr+.15,.5,An+.85,.12,t.frame,u,3.42,Me-.22)),e.add(Ai(hr+.25,.12,An+.95,.05,t.rail,u,3.17,Me-.22)),this.lamp=new W(new Ke(.13,16,10),t.lamp.clone()),this.lamp.position.set(u+.45,3.74,Me+.3),e.add(this.lamp);const p=new Ce(.3,.3,.32,20),g=new W(p,t.steel);g.position.set(u,3.05,Me),e.add(g),this.piston=new W(new Ce(.17,.17,1,18),t.piston),this.piston.castShadow=!0,e.add(this.piston),this.ram=Ai(hr-.05,.26,An-.1,.06,t.ram,u,0,Me),e.add(this.ram),this.ramStripe=Ai(hr-.02,.07,An-.06,.03,t.hazard,u,0,Me),this.ramStripe.castShadow=!1,e.add(this.ramStripe),this.setRam(0);const v=_e.benchX1+.75;e.add(Ai(1.15,.7,1.5,.1,t.bin,v,.35,Me)),e.add(Ai(1.25,.12,1.6,.05,t.binLid,v,.72,Me));const m=new W(new hn(.9,1.25),t.dark);return m.rotation.x=-Math.PI/2,m.position.set(v,.785,Me),e.add(m),this.binX=v,e}setStars(t,e=!1){this.stars=t,this.decorate(e?t-1:-1),e&&(this.starFlash=1)}starWorld(t,e){return e.set(this.starX(t),this.floor+Ge+.62,Me+An/2+.12)}starX(t){const e=this.visibleX-this.beltX0-1.6;return this.beltX0+1+t*Math.min(1.5,e/(Ep-1))}decorate(t=-1){if(!this.static)return;const e=$u(),n=this.stars,i=Math.min(xo.length-1,Math.floor(n/2));for(const l of this.rails)l.material=e.rails[i];for(const l of this.stripes)l.material=n>=5?e.stripes[i]:e.hazard;this.beltMat.emissive.set(n>=3?xo[i]:"#000000"),this.beltMat.emissiveIntensity=n>=3?.06+.02*Math.min(5,n-3):0,this.lamp&&n>=5&&this.lamp.material.emissive.set(xo[i]),this.deco&&this.group.remove(this.deco);const r=new ut,a=this.postGeo??(this.postGeo=new Ce(.035,.035,.36,8)),o=this.running?Math.min(Ep,n+1):0;this.starMeshes=[];for(let l=0;l<o;l++){const c=l<n,h=this.starX(l),u=new W(a,e.post);u.position.set(h,Ge+.3,Me+An/2+.06),r.add(u);const f=new W(LM(),c?this.starOn:e.starOff);f.position.set(h,Ge+.62,Me+An/2+.12),f.scale.setScalar(c?1:.8),f.castShadow=c,r.add(f),this.starMeshes.push(f)}this.deco=r,this.group.add(r),this.starPop=t>=0&&t<this.starMeshes.length?{mesh:this.starMeshes[t],t:0}:null,this.starPop&&this.starPop.mesh.scale.setScalar(.01)}setRam(t){const e=Ge+.13+(wp-.13)*(1-t);this.ram.position.y=e,this.ramStripe.position.y=e+.1;const n=2.9,i=e+.13;this.piston.scale.y=Math.max(.05,n-i),this.piston.position.set(this.pressX,(n+i)/2,Me)}take(t,e){const i=(this.pool.get(`${t}|${e}`)||[]).pop()??new AM(t,e);return i.gen++,i.alive=!0,i.state="ride",i.pop=0,i.punch=i.punchV=0,i.dieT=0,i.root.visible=this.visible,i.root.scale.setScalar(1),i.body.position.set(0,0,0),i.speed=i.def.speed,i.frozenT=i.burnT=i.burnDps=i.pinT=i.slowT=i.skewer=0,i.setIce(!1),i.setPin(!1),this.group.add(i.root),this.items.push(i),i}release(t){t.alive=!1,t.state="gone",t.gen++,this.group.remove(t.root);const e=`${t.kind}|${t.variant}`;this.pool.has(e)||this.pool.set(e,[]),this.pool.get(e).push(t);const n=this.items.indexOf(t);n>=0&&this.items.splice(n,1)}spawn(t,e=null,n=null,i=0){var a,o;const r=this.take(t,e);return r.x=n??this.beltX1+Math.random()*.3,r.z=i,r.root.position.set(r.x,Ge,Me+r.z),r.root.rotation.set(0,0,0),r.root.updateWorldMatrix(!0,!1),(o=(a=this.hooks).onSpawn)==null||o.call(a,r),r}hang(t){const e=this.take(t,null);if(e.state="hang",e.x=(this.beltX0+this.visibleX)/2+1.5,e.z=0,Le[t].stand)return e.root.position.set(e.x,Ge,Me),e.root.updateWorldMatrix(!0,!1),e;e.root.position.set(e.x,Ge+2,Me+.3),e.root.updateWorldMatrix(!0,!1),e.rope||(e.rope=new W(new Ce(.035,.035,1,8),ce("#c98f52")),e.root.add(e.rope));const n=4.7-(Ge+2),i=1.15;return e.rope.scale.y=Math.max(.2,n-i),e.rope.position.y=(n+i)/2,e}spawnLine(){const t=Le[this.line.junk],e=t.group||1,n=Math.random()<Ou.chance?Math.floor(Math.random()*e):-1;for(let i=0;i<e;i++){const r=e>1&&!t.train?(i%2?.38:-.38)*(i%4<2?1:.4):0,a=this.beltX1+(t.train?i*1.05:i*.55+Math.random()*.2);if(i===n){this.spawn("popper",null,a,r).speed=t.speed;continue}const o=Math.random(),l=gp(this.line.flow,"golden"),c=o<l?"golden":o<l+gp(this.line.flow,"rare")?"rare":null;this.spawn(this.line.junk,c,a,r)}}kill(t){t.alive=!1,t.state="dying",t.dieT=0,t.gen++,this.press.junk===t&&(this.press.junk=null)}clear(){for(const t of[...this.items])this.release(t);this.press={t:-1,junk:null},this.setRam(0)}setVisible(t){this.visible=t,this.group.visible=t}setLine(t){this.clear(),this.line=t,this.beltSpeed=Le[t.junk].speed,this.running=!1,this.waveT=Za.first,this.pending=0,this.gapT=0,this.stars=0,this.decorate()}update(t,e={}){const n=e.flowMul??1;if(this.running&&e.spawn!==!1){if(this.waveT-=t,this.waveT<=0){this.waveT+=Za.every;const a=Le[this.line.junk];this.pending+=Math.max(1,Math.round(this.line.flow*n*Za.every/60/(a.group||1)))}this.pending>0&&(this.gapT-=t,this.gapT<=0&&(this.gapT=Za.gap,this.pending--,this.spawnLine()))}this.running&&(this.tex.offset.x+=this.beltSpeed*t*Sp);const i=this.items.filter(a=>a.state==="ride").sort((a,o)=>a.x-o.x),r=this.pressX;for(let a=0;a<i.length;a++){const o=i[a];let l=r;this.press.t>=0&&(l=r+hr/2+o.radius);for(let c=0;c<a;c++){const h=i[c];Math.abs(h.z-o.z)<.45&&(l=Math.max(l,h.x+(h.radius+o.radius)*.95))}o.held?o.x=Math.max(l,o.x):o.x=Math.max(l,o.x-o.pace*t),!o.held&&o.x<=r+.001&&this.press.t<0&&(o.state="press",o.x=r,o.z*=.3,this.press={t:0,junk:o,crushed:!1}),o.root.position.set(o.x,Ge,Me+o.z)}this.updatePress(t);for(const a of[...this.items])if(a.update(t),a.state==="dying"){a.dieT+=t;const o=a.dieT/.12;a.root.scale.setScalar(1+.3*Math.min(1,o)),o>=1&&this.release(a)}if(this.lampK=Math.max(0,this.lampK-t*3),this.lamp&&(this.lamp.material.emissiveIntensity=(this.stars>=5?1:.4)+this.lampK*3),this.starPop){const a=this.starPop;a.t+=t;const o=Math.min(1,a.t/.55);a.mesh.scale.setScalar(Math.max(.01,PM(o)*1.15)),a.mesh.rotation.y=(1-o)*Math.PI*2,o>=1&&(a.mesh.scale.setScalar(1),a.mesh.rotation.y=0,this.starPop=null)}this.starFlash>0&&(this.starFlash=Math.max(0,this.starFlash-t*1.2),this.starOn.emissiveIntensity=1.3+this.starFlash*2.5),this.group.updateMatrixWorld(!0)}updatePress(t){var l,c;const e=this.press;if(e.t<0)return;e.t+=t;const{down:n,hold:i,up:r}=CM,a=e.junk;let o;if(e.t<n?o=(e.t/n)**2:e.t<n+i?o=1:o=Math.max(0,1-(e.t-n-i)/r),this.setRam(o),a&&a.alive){const h=Ge+.13+(wp-.13)*(1-o),u=Je.clamp((h-Ge)/Math.max(.3,a.height),.14,1);a.root.scale.set(1+(1-u)*.35,u,1+(1-u)*.35),!e.crushed&&e.t>=n&&(e.crushed=!0,this.lampK=1,(c=(l=this.hooks).onCrush)==null||c.call(l,a))}e.t>=n+i&&a&&a.state==="press"&&(a.state="binned",a.alive=!1,a.gen++,a.binT=0),e.t>=n+i+r&&(this.press={t:-1,junk:null});for(const h of[...this.items]){if(h.state!=="binned")continue;h.binT+=t;const u=Math.min(1,h.binT/.35);h.x=this.pressX+(this.binX-this.pressX)*u,h.root.position.set(h.x,Ge+.2*Math.sin(u*Math.PI)-u*u*.6,Me),u>=1&&this.release(h)}}candidates(){return this.items.filter(t=>t.alive&&(t.state==="ride"||t.state==="hang")&&t.x<this.visibleX)}raycast(t,e,n=80,i=null){let r=null;for(const a of this.items)(i!=null&&i.has?i.has(a):a===i)||!a.alive||a.state!=="ride"&&a.state!=="hang"||a.x>this.visibleX+.8||a.spheres.forEach((o,l)=>{a.sphereWorld(l,xh),vh.subVectors(xh,t);const c=vh.dot(e);if(c<=0)return;const h=vh.lengthSq()-c*c;if(h>o.r*o.r)return;const u=c-Math.sqrt(o.r*o.r-h);u>0&&u<n&&(!r||u<r.t)&&(r={junk:a,sphere:o,t:u,point:t.clone().addScaledVector(e,u)})});return r}nearest(t,e,n){let i=null,r=n;for(const a of this.candidates()){if(a===e)continue;const o=a.aimPoint(xh).distanceTo(t);o<r&&(r=o,i=a)}return i}}const NM={pistol:{length:.64,diameter:.3,points:[[0,-1],[.82,-1],[1,-.9],[1,-.4],[.86,-.22],[.48,-.06],[0,0]]},rifle:{length:.88,diameter:.28,points:[[0,-1],[.75,-1],[1,-.88],[1,-.49],[.77,-.27],[.35,-.08],[0,0]]},shell:{length:.4,diameter:.38,points:[[0,-1],[.65,-.88],[.95,-.66],[1,-.5],[.95,-.34],[.65,-.12],[0,0]]}};let Qa;function zM(){if(Qa)return Qa;Qa={};for(const[s,t]of Object.entries(NM)){const e=new zo(t.points.map(([i,r])=>new et(i*t.diameter*.5,r*t.length)),12);e.rotateZ(-Math.PI/2);const n=new Fi(t.diameter*.47,t.diameter*.055,4,12);n.rotateY(Math.PI/2),n.translate(-t.length*.79,0,0),Qa[s]={geometry:e,band:n,length:t.length,diameter:t.diameter}}return Qa}function FM(s){return{body:vt("#df9e49",{spec:.7,gloss:34,sheen:.12,rim:.2,emissive:s,emissiveIntensity:.045}),band:vt("#ffe296",{spec:.85,gloss:26,rim:.1})}}const Tp=vt("#d8f4ff",{emissive:"#56c8ff",emissiveIntensity:1.3,spec:.6,gloss:30,rim:.5});function Im(s){const t=new ut;if(s==="arrow"){const i=zi("arrow"),r=102*Ie*.95;return i.scale.set(Ie*.95,Ie*1.7,Ie*1.7),i.position.x=-r,t.add(i),{g:t,len:r}}if(s==="grenade"){const i=new ut;i.add(Q(0,7,15.8,T.copper));const r=new W(new Ke(15,18,12),T.olive);r.scale.x=1.35,r.position.x=18;const a=new W(new Ke(6,12,8),T.orange);a.position.x=36,i.add(r,a),i.traverse(l=>l.isMesh&&(l.castShadow=!0));const o=42*Ie*.85;return i.scale.setScalar(Ie*.85),i.position.x=-o,t.add(i),{g:t,len:o}}if(s==="bolt"){const i=zi("bolt"),r=73*Ie*.95;return i.scale.set(Ie*.95,Ie*1.7,Ie*1.7),i.position.x=-r,t.add(i),{g:t,len:r}}if(s==="staple"){const i=T.barrel,r=new W(new Qn(.05,.05,.3),i);r.position.x=-.16,t.add(r);for(const a of[.125,-.125]){const o=new W(new Qn(.16,.05,.05),i);o.position.set(-.08,0,a),t.add(o)}return{g:t,len:.18}}if(s==="saw"){const i=zi("saw");return i.scale.setScalar(Ie*1.1),i.position.x=-46*Ie*1.1,t.add(i),{g:t,len:46*Ie*1.1}}const e=new Co(1,0),n=new W(e,Tp);n.scale.set(.46,.15,.15),n.position.x=-.46,t.add(n);for(const i of[1,-1]){const r=new W(e,Tp);r.scale.set(.24,.07,.07),r.position.set(-.66,i*.1,0),r.rotation.z=i*.45,t.add(r)}return{g:t,len:.92}}const OM=`
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
  }`,BM=`
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
  }`,HM=s=>1-(1-s)*(1-s);class VM{constructor(t,e=240){this.max=e,this.items=[];for(let o=0;o<e;o++)this.items.push({active:!1,t:0,life:1,size:.1,drag:3,alpha:1,stretch:1,angle:0,seed:Math.random(),pos:new b,vel:new b,tint:new _t});this.next=0,this.time=0;const n=new sn,i=new Float32Array(e*8),r=[],a=[-1,-1,1,-1,1,1,-1,1];for(let o=0;o<e;o++){i.set(a,o*8);const l=o*4;r.push(l,l+1,l+2,l,l+2,l+3)}this.pos=new cn(new Float32Array(e*12),3),this.data=new cn(new Float32Array(e*16),4),this.shapes=new cn(new Float32Array(e*8),2),this.tints=new cn(new Float32Array(e*12),3);for(const o of[this.pos,this.data,this.tints,this.shapes])o.setUsage(n1);n.setAttribute("position",this.pos),n.setAttribute("aCorner",new cn(i,2)),n.setAttribute("aData",this.data),n.setAttribute("aTint",this.tints),n.setAttribute("aShape",this.shapes),n.setIndex(r),this.mat=new je({uniforms:{uTime:{value:0}},vertexShader:OM,fragmentShader:BM,transparent:!0,depthWrite:!1}),this.mesh=new W(n,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,t.add(this.mesh)}spawn(t,e,n,i,r,a=3,o=1,l=1){let c=null;for(let h=0;h<this.max;h++){const u=this.items[(this.next+h)%this.max];if(!u.active){c=u,this.next=(this.next+h+1)%this.max;break}}c||(c=this.items[this.next],this.next=(this.next+1)%this.max),c.active=!0,c.t=0,c.life=i,c.size=n,c.drag=a,c.alpha=o,c.stretch=l,c.angle=Math.atan2(e.y,e.x),c.seed=Math.random(),c.pos.copy(t),c.vel.copy(e),c.tint.copy(r)}update(t){this.time=(this.time+t)%200,this.mat.uniforms.uTime.value=this.time;const e=this.pos.array,n=this.data.array,i=this.tints.array;for(let r=0;r<this.max;r++){const a=this.items[r];let o=0,l=0,c=0;a.active&&(a.t+=t,l=a.t/a.life,l>=1?(a.active=!1,l=0):(a.vel.multiplyScalar(Math.exp(-a.drag*t)),a.vel.y+=.9*t,a.pos.addScaledVector(a.vel,t),o=a.size*(.8+1.75*HM(l)),c=a.alpha*Math.min(1,a.t/.022)));for(let h=0;h<4;h++){const u=r*4+h;e[u*3]=a.pos.x,e[u*3+1]=a.pos.y,e[u*3+2]=a.pos.z,n[u*4]=o,n[u*4+1]=l,n[u*4+2]=a.seed,n[u*4+3]=c,this.shapes.array[u*2]=1+(a.stretch-1)*(1-l*.6),this.shapes.array[u*2+1]=a.angle,i[u*3]=a.tint.r,i[u*3+1]=a.tint.g,i[u*3+2]=a.tint.b}}this.shapes.needsUpdate=!0,this.pos.needsUpdate=!0,this.data.needsUpdate=!0,this.tints.needsUpdate=!0}}const vn={glock19:{name:"GLOCK 19",magSize:15,damage:10,fireRate:3.5,autoRate:.3,minSpread:1.05,maxSpread:2.2,bloom:.6,convergence:2.6,reload:2.4},uzi:{name:"UZI",magSize:32,damage:6.5,fireRate:9,autoRate:.6,minSpread:1.15,maxSpread:2.4,bloom:.35,convergence:2.2,reload:2.6},m870:{name:"M870",magSize:6,pellets:8,damage:4,fireRate:1.3,autoRate:.22,minSpread:1.2,maxSpread:2.3,bloom:1,convergence:2.4,reload:3.6},ak47:{name:"AK-47",magSize:30,damage:11,fireRate:6.5,autoRate:.45,minSpread:.95,maxSpread:2.3,bloom:.4,convergence:2.4,reload:2.8},minigun:{name:"MINIGUN",magSize:120,damage:5.5,fireRate:18,autoRate:1.2,minSpread:1.2,maxSpread:2.4,bloom:.22,convergence:2,reload:4},revolver:{name:"РЕВОЛЬВЕР",magSize:6,damage:24,fireRate:1.8,autoRate:.2,minSpread:.95,maxSpread:2.3,bloom:.9,convergence:2.4,reload:2.6,crit:3,fan:8},flamer:{name:"ОГНЕМЁТ",magSize:70,damage:3.2,fireRate:14,autoRate:2.2,minSpread:1.2,maxSpread:1.8,bloom:.05,convergence:1.4,reload:3,stream:{range:11,angle:.2}},cryo:{name:"КРИО-ПУШКА",magSize:12,damage:26,fireRate:2.4,autoRate:.3,minSpread:.9,maxSpread:2.1,bloom:.7,convergence:2.2,reload:2.8,freeze:1},bow:{name:"ЛУК",magSize:8,damage:30,fireRate:1.5,autoRate:.3,minSpread:.75,maxSpread:1.9,bloom:.6,convergence:1.8,reload:2.2,pierce:2},grenade:{name:"ГРАНАТОМЁТ",magSize:6,damage:34,fireRate:1.1,autoRate:.25,minSpread:1,maxSpread:2,bloom:.8,convergence:2.2,reload:3.2,lob:{radius:1.9,speed:24}},tesla:{name:"ТЕСЛА-ПУШКА",magSize:20,damage:14,fireRate:3,autoRate:.45,minSpread:1,maxSpread:2,bloom:.4,convergence:2,reload:2.6,chain:{jumps:3,reach:3.2,share:.6}},stapler:{name:"СТЕПЛЕР",magSize:40,damage:6,fireRate:9,autoRate:.7,minSpread:1.1,maxSpread:2.3,bloom:.32,convergence:2,reload:2.4,staple:{slow:.4,time:1.2}},laser:{name:"ЛАЗЕР",magSize:80,damage:2.4,fireRate:12,autoRate:2.4,minSpread:.6,maxSpread:1.4,bloom:.04,convergence:1.2,reload:2.8,beam:{ramp:2,time:1.2}},saw:{name:"ПИЛОМЁТ",magSize:5,damage:26,fireRate:1.3,autoRate:.3,minSpread:.9,maxSpread:2,bloom:.7,convergence:2,reload:2.8,saw:{roll:7,speed:6,share:.6}},crossbow:{name:"АРБАЛЕТ",magSize:5,damage:60,fireRate:.9,autoRate:.22,minSpread:.7,maxSpread:1.8,bloom:.8,convergence:2,reload:3,pierce:6,pierceKeep:1,skewer:.25},rail:{name:"РЕЛЬСОТРОН",magSize:4,damage:110,fireRate:.7,autoRate:.18,minSpread:.5,maxSpread:1.6,bloom:1,convergence:2.2,reload:3.4,rail:!0}},Mc=[{weapon:"glock19",scale:1,startTier:0},{weapon:"revolver",scale:1,startTier:0},{weapon:"uzi",scale:1,startTier:0},{weapon:"glock19",scale:1,startTier:0}],ss=[{id:"damage",icon:"💥",title:"Урон",baseCost:12,growth:1.75,max:60,value:(s,t,e)=>s.damage*e.scale*Math.pow(1.22,t),fmt:(s,t)=>(t.pellets??1)>1?`${t.pellets}×${ic(s)}`:ic(s)},{id:"auto",icon:"🤖",title:"Автострельба",baseCost:20,growth:1.65,max:25,value:(s,t)=>t>=25?s.fireRate:s.autoRate*Math.pow(s.fireRate/s.autoRate,Math.max(0,t)/25),fmt:s=>s>=1?`${s.toFixed(1)}/с`:`1 в ${(1/s).toFixed(1)}с`},{id:"accuracy",icon:"🎯",title:"Точность",baseCost:18,growth:1.7,max:20,value:(s,t)=>Math.max(.1,s.minSpread*Math.pow(.88,t)),fmt:s=>`±${(s*10).toFixed(0)} см`},{id:"focus",icon:"🔭",title:"Точность автострельбы",baseCost:16,growth:1.6,max:15,value:(s,t)=>.7*Math.pow(.84,t),fmt:s=>`ждёт ${Math.round((1-s)*100)}% сведения`},{id:"aim",icon:"◎",title:"Сведение",baseCost:16,growth:1.6,max:15,value:(s,t)=>s.convergence*Math.pow(.88,t),fmt:s=>`${s.toFixed(2)}с`},{id:"reload",icon:"🔄",title:"Перезарядка",baseCost:14,growth:1.6,max:15,value:(s,t)=>Math.max(.6,s.reload*Math.pow(.9,t)),fmt:s=>`${s.toFixed(2)}с`}];function Vl(s,t,e){return Math.round(s.baseCost*Math.pow(s.growth,t)*e.scale)}function ga(s,t,e=0,n={}){const i=vn[s.weapon],r=l=>ss.find(c=>c.id===l).value(i,t[l]||0,s),a={damage:1,minSpread:1,magSize:1,autoRate:1,bloom:1,convergence:1,reload:1};for(const l of Bo[s.weapon].slice(0,e))for(const[c,h]of Object.entries(XM(l,n[l]||0)))a[c]*=h;const o=l=>Math.pow(Um[l],e);return{magSize:Math.round(i.magSize*a.magSize),pellets:i.pellets??1,damage:r("damage")*a.damage*o("damage"),fireRate:i.fireRate,autoRate:Math.min(i.fireRate,r("auto")*a.autoRate*o("autoRate")),minSpread:r("accuracy")*a.minSpread,maxSpread:i.maxSpread,bloom:i.bloom*a.bloom,convergence:r("aim")*a.convergence,reload:Math.max(.4,r("reload")*a.reload*o("reload")),autoThr:r("focus"),crit:i.crit??2,fan:i.fan??0,stream:i.stream??null,freeze:i.freeze??0,pierce:i.pierce??1,pierceKeep:i.pierceKeep??.8,skewer:i.skewer??0,lob:i.lob??null,chain:i.chain??null,slow:i.staple??null,beam:i.beam??null,saw:i.saw??null,rail:!!i.rail}}const GM={damage:"damage",auto:"autoRate",accuracy:"minSpread",focus:"autoThr",aim:"convergence",reload:"reload"},xn=[25,90,280,800,2e3],mi=[{name:"COMMON",color:"#dce5ed",accent:"#a8b9cb",energy:1.25},{name:"UNCOMMON",color:"#77e885",accent:"#32b873",energy:1.4},{name:"RARE",color:"#56baff",accent:"#4b7bff",energy:1.55},{name:"EPIC",color:"#c783ff",accent:"#ee5cff",energy:1.7},{name:"LEGENDARY",color:"#ffd267",accent:"#ff931f",energy:1.85},{name:"ULTRA MEGA LEGENDARY",color:"#ff83d9",accent:"#79f6ff",energy:2.1}],Bo={glock19:["optic","mag","laser","suppressor","stock"],uzi:["optic","mag","grip","suppressor","stock"],m870:["optic","saddle","light","stock","brake"],ak47:["optic","mag","rail","suppressor","stock"],minigun:["optic","box","laser","shield","brake"],revolver:["optic","loader","comp","engraved","barrel"],flamer:["nozzle","tank2","igniter","shroud","pump"],cryo:["optic","cryotank","lens","bayonet","compressor"],bow:["optic","quiver","stabilizer","cams","firetips"],grenade:["optic","drum","sticky","shroud","cluster"],tesla:["coil","battery","arrester","rod","generator"],stapler:["optic","clip","spring","brace","motor"],laser:["lens2","powercell","radiator","prism","diode"],saw:["optic","blades","motor","sawguard","diamond"],crossbow:["optic","boltbox","crank","steelprod","stock"],rail:["optic","capacitor","coolant","rails","core"]},Po={optic:{name:"Коллиматор",icon:"🔴",label:"точность",sign:"+",mul:{minSpread:.85}},mag:{name:"Увеличенный магазин",icon:"🧱",label:"магазин",sign:"+",mul:{magSize:1.6}},saddle:{name:"Боковой патронташ",icon:"🧱",label:"патронов",sign:"+",mul:{magSize:1.5}},box:{name:"Большой короб",icon:"🧱",label:"лента",sign:"+",mul:{magSize:1.5}},laser:{name:"ЛЦУ с фонарём",icon:"🔦",label:"автострельба",sign:"+",mul:{autoRate:1.25}},light:{name:"Фонарь с ЛЦУ",icon:"🔦",label:"автострельба",sign:"+",mul:{autoRate:1.25}},grip:{name:"Рукоятка и ЛЦУ",icon:"✊",label:"отдача",sign:"−",mul:{bloom:.8}},rail:{name:"Цевьё с планками",icon:"✊",label:"отдача",sign:"−",mul:{bloom:.8}},suppressor:{name:"Глушитель",icon:"🔇",label:"урон",sign:"+",mul:{damage:1.15}},stock:{name:"Тактический приклад",icon:"🪵",label:"сведение",sign:"+",mul:{convergence:.8,bloom:.9}},brake:{name:"Дульный тормоз",icon:"💨",label:"урон",sign:"+",mul:{damage:1.12,bloom:.9}},shield:{name:"Бронещиток",icon:"🛡️",label:"урон",sign:"+",mul:{damage:1.1}},loader:{name:"Ускоритель заряжания",icon:"⚡",label:"перезарядка",sign:"−",mul:{reload:.8}},comp:{name:"Компенсатор",icon:"💨",label:"отдача",sign:"−",mul:{bloom:.8}},engraved:{name:"Гравированный барабан",icon:"✨",label:"урон",sign:"+",mul:{damage:1.15}},barrel:{name:"Длинный ствол",icon:"🎯",label:"сведение",sign:"+",mul:{convergence:.8,minSpread:.9}},nozzle:{name:"Широкое сопло",icon:"🔥",label:"урон",sign:"+",mul:{damage:1.15}},tank2:{name:"Второй баллон",icon:"🛢️",label:"топливо",sign:"+",mul:{magSize:1.5}},igniter:{name:"Запальник",icon:"⚡",label:"автострельба",sign:"+",mul:{autoRate:1.25}},shroud:{name:"Термокожух",icon:"🛡️",label:"перезарядка",sign:"−",mul:{reload:.8}},pump:{name:"Турбонасос",icon:"💨",label:"урон",sign:"+",mul:{damage:1.12}},cryotank:{name:"Криобак",icon:"🧊",label:"магазин",sign:"+",mul:{magSize:1.5}},lens:{name:"Фокусирующая линза",icon:"🔍",label:"сведение",sign:"+",mul:{convergence:.8}},bayonet:{name:"Ледяной штык",icon:"🗡️",label:"урон",sign:"+",mul:{damage:1.15}},compressor:{name:"Компрессор",icon:"⚙️",label:"автострельба",sign:"+",mul:{autoRate:1.25}},quiver:{name:"Колчан",icon:"🏹",label:"стрел",sign:"+",mul:{magSize:1.5}},stabilizer:{name:"Стабилизатор",icon:"🎚️",label:"отдача",sign:"−",mul:{bloom:.8}},cams:{name:"Блоки",icon:"⚙️",label:"урон",sign:"+",mul:{damage:1.15}},firetips:{name:"Огненные наконечники",icon:"🔥",label:"урон",sign:"+",mul:{damage:1.12}},drum:{name:"Барабан на 9",icon:"🥁",label:"магазин",sign:"+",mul:{magSize:1.5}},sticky:{name:"Липкие гранаты",icon:"🍯",label:"сведение",sign:"+",mul:{convergence:.8}},cluster:{name:"Кассетный заряд",icon:"💣",label:"урон",sign:"+",mul:{damage:1.15}},coil:{name:"Катушка",icon:"🌀",label:"урон",sign:"+",mul:{damage:1.15}},battery:{name:"Аккумулятор",icon:"🔋",label:"заряд",sign:"+",mul:{magSize:1.5}},arrester:{name:"Разрядник",icon:"⚡",label:"автострельба",sign:"+",mul:{autoRate:1.25}},rod:{name:"Громоотвод",icon:"📡",label:"точность",sign:"+",mul:{minSpread:.85}},generator:{name:"Генератор",icon:"⚙️",label:"перезарядка",sign:"−",mul:{reload:.8}},clip:{name:"Длинная обойма",icon:"📎",label:"скоб",sign:"+",mul:{magSize:1.5}},spring:{name:"Тугая пружина",icon:"🌀",label:"урон",sign:"+",mul:{damage:1.15}},brace:{name:"Скоба-упор",icon:"✊",label:"отдача",sign:"−",mul:{bloom:.8}},motor:{name:"Электромотор",icon:"⚙️",label:"автострельба",sign:"+",mul:{autoRate:1.25}},lens2:{name:"Линза",icon:"🔍",label:"точность",sign:"+",mul:{minSpread:.85}},powercell:{name:"Батарея",icon:"🔋",label:"заряд",sign:"+",mul:{magSize:1.5}},radiator:{name:"Радиатор",icon:"❄️",label:"перезарядка",sign:"−",mul:{reload:.8}},prism:{name:"Призма",icon:"💎",label:"урон",sign:"+",mul:{damage:1.15}},diode:{name:"Синий диод",icon:"🔵",label:"урон",sign:"+",mul:{damage:1.12}},blades:{name:"Кассета дисков",icon:"🧱",label:"дисков",sign:"+",mul:{magSize:1.6}},sawguard:{name:"Кожух",icon:"🛡️",label:"перезарядка",sign:"−",mul:{reload:.8}},diamond:{name:"Алмазный диск",icon:"💎",label:"урон",sign:"+",mul:{damage:1.15}},boltbox:{name:"Магазин болтов",icon:"🧱",label:"болтов",sign:"+",mul:{magSize:1.6}},crank:{name:"Быстрый ворот",icon:"⚙️",label:"перезарядка",sign:"−",mul:{reload:.8}},steelprod:{name:"Стальные плечи",icon:"🏹",label:"урон",sign:"+",mul:{damage:1.15}},capacitor:{name:"Конденсатор",icon:"🔋",label:"заряд",sign:"+",mul:{magSize:1.5}},coolant:{name:"Охлаждение",icon:"❄️",label:"перезарядка",sign:"−",mul:{reload:.8}},rails:{name:"Медные рельсы",icon:"🧲",label:"урон",sign:"+",mul:{damage:1.15}},core:{name:"Плазменное ядро",icon:"🌀",label:"урон",sign:"+",mul:{damage:1.12}}},Um={damage:1.2,autoRate:1.05,reload:.94},Ed=4,Nm=.6,WM=[10,25,60,150],Ap=s=>Math.min(Ed,s);function $M(s){return s>=Ed?null:WM[s]}function XM(s,t=0){const e=1+Nm*t,n={};for(const[i,r]of Object.entries(Po[s].mul))n[i]=Math.max(.2,1+(r-1)*e);return n}function Xu(s,t=0){const e=Po[s],n=Object.values(e.mul)[0];return`${e.label} ${e.sign}${Math.round(Math.abs(n-1)*(1+Nm*t)*100)}%`}const qM={glock19:8,revolver:14,uzi:12,m870:30,bow:36,grenade:42,flamer:45,tesla:55,cryo:60,stapler:70,laser:78,saw:85,crossbow:95,rail:120,ak47:80,minigun:200},rs={seconds:14,hpDivisor:8,hitRate:.6,time:60,coins:8,trophyWin:25,trophyLoss:15},Cp=[{kind:"regular",min:.9,max:1},{kind:"regular",min:.9,max:1},{kind:"regular",min:.9,max:1},{kind:"challenge",min:1.2,max:1.35},{kind:"even",min:.98,max:1.02}],_o=[{count:6,time:30,hp:.6,dmgLv:0,speed:1.5,radius:.5,alive:2},{count:8,time:32,hp:.8,dmgLv:3,speed:2.2,radius:.47,alive:3},{count:10,time:35,hp:1,dmgLv:7,speed:2.9,radius:.44,alive:3},{count:12,time:38,hp:1.2,dmgLv:11,speed:3.6,radius:.41,alive:4},{count:14,time:46,hp:1.4,dmgLv:15,speed:4.4,radius:.38,alive:4}];function zm(s,t){const e=vn[s.weapon],n=_o[t],i=e.damage*s.scale*(e.pellets??1)*e.fireRate;return Math.max(1,Math.round(i*n.hp*Math.pow(1.22,n.dmgLv)))}function YM(s,t){const e=vn[s.weapon],n=_o[t],i=e.damage*s.scale*(e.pellets??1)*Math.pow(1.22,n.dmgLv),r=Math.max(1,Math.ceil(zm(s,t)/(i*.65))),a=n.count*r;return Math.max(n.time,Math.ceil((a/e.autoRate+Math.floor(a/e.magSize)*e.reload+n.count*.7)*1.4))}function ic(s){if(s>=1e15){const e=Math.min(675,Math.floor(Math.log10(s)/3)-5);return`${(s/Math.pow(10,(e+5)*3)).toFixed(2)}${String.fromCharCode(97+Math.floor(e/26),97+e%26)}`}if(s>=1e12)return`${(s/1e12).toFixed(2)}T`;if(s>=1e9)return`${(s/1e9).toFixed(2)}B`;if(s>=1e6)return`${(s/1e6).toFixed(2)}M`;if(s>=1e4)return`${(s/1e3).toFixed(1)}K`;const t=Math.floor(s);return t>=1e3?`${Math.floor(t/1e3)} ${String(t%1e3).padStart(3,"0")}`:`${t}`}const sc=mi.map(s=>({color:new _t(s.color).multiplyScalar(s.energy),accent:new _t(s.accent).multiplyScalar(s.energy),smoke:new _t(s.color).lerp(new _t("#eef1f8"),.85)})),yh=s=>sc[Math.min(s,sc.length-1)];function Rp(s){return s.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`
      #ifdef USE_MAP
        vec4 texel = texture2D(map, vMapUv);
        diffuseColor *= vec4(vec3(max(max(texel.r, texel.g), texel.b)), texel.a);
      #endif
    `)},s.customProgramCacheKey=()=>"rarity-tint",s}const Fm=24,ge=new b,$n=new b,Pp=new tr,Gl=new b(0,1,0),qu=new b(0,0,1),wt=(s,t)=>s+Math.random()*(t-s),Lp=s=>1-(1-s)*(1-s),jM={pistol:{body:bd,bodyMat:"brass",head:null,off:-13,scale:1,size:.13},rifle:{body:ym,bodyMat:"brass",head:null,off:-20,scale:1,size:.13},"rifle-long":{body:bm,bodyMat:"brass",head:null,off:-25.5,scale:1,size:.13},shell:{body:Mm,bodyMat:"shell",head:Md,headMat:"brass",off:-22,scale:.95,size:.17}},KM={scale:1,smoke:3,rings:1,bubble:!0},Dp=3.3,ZM=2,JM=.115,QM={side:[1.6,2.8],up:[4.5,6],back:[.3,1.2]},kp=9,tw=.13,ia={arrow:{speed:46,arc:.035,arcMax:.9,spin:4,pool:24,stick:.65},bolt:{speed:52,arc:.02,arcMax:.6,spin:6,pool:16,stick:.8},staple:{speed:62,arc:0,arcMax:0,spin:0,pool:40,stick:.5},grenade:{speed:26,arc:.16,arcMax:2.2,spin:13,pool:12,tumble:!0},saw:{speed:30,arc:.02,arcMax:.5,spin:32,pool:10,tumble:!0},ice:{speed:40,arc:0,arcMax:0,spin:16,pool:20}},ew=.45;function Xe(s,t,e){return new _t().setRGB(s,t,e)}const nw=Xe(3.2,2.8,1.9),iw={frost:{star:Xe(.9,1.7,2.6),glow:Xe(.35,.9,1.8),hot:Xe(2.2,2.8,3.2),light:new _t("#7fd4ff")},spark:{star:Xe(1.4,1.5,2.8),glow:Xe(.6,.5,2),hot:Xe(2.6,2.6,3.4),light:new _t("#8fa0ff")},rail:{star:Xe(.8,2,2.8),glow:Xe(.3,1.1,2),hot:Xe(2.4,3,3.4),light:new _t("#6fe8ff")}},Ip=new _t("#ff8a3a"),sw=new _t("#ff3a3a"),rw={laser:Xe(2.8,.3,.25),rail:Xe(.5,1.9,2.8)};function aw(){return new je({transparent:!0,depthWrite:!1,blending:En,uniforms:{uColor:{value:new _t},uAlpha:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec2 vUv;
      uniform vec3 uColor;
      uniform float uAlpha;
      void main() {
        vec2 p = clamp(vUv, vec2(0.0), vec2(1.0));
        float across = abs(p.y * 2.0 - 1.0);
        float glow = 1.0 - smoothstep(0.0, 1.0, across);
        float core = 1.0 - smoothstep(0.12, 0.32, across);
        float ends = smoothstep(0.0, 0.015, p.x) * (1.0 - smoothstep(0.985, 1.0, p.x));
        float a = (glow * glow * 0.55 + core) * ends * uAlpha;
        if (a <= 0.001) discard;
        gl_FragColor = vec4(mix(uColor, vec3(2.2), core * 0.7), min(a, 1.0));
      }`})}const ow=new fe,aa=new b,Yu=new b,ji=new b;function ur(s,t){aa.copy(t).normalize(),ji.copy(qu).addScaledVector(aa,-aa.dot(qu)),ji.lengthSq()<1e-6&&ji.set(0,1,0),ji.normalize(),Yu.crossVectors(ji,aa),s.quaternion.setFromRotationMatrix(ow.makeBasis(aa,Yu,ji))}function lw(){return new je({transparent:!0,depthWrite:!1,blending:En,uniforms:{uColor:{value:Xe(1.9,1.05,.35)}},vertexShader:`
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
      }`})}class Ci{constructor(t,e){this.items=[];for(let n=0;n<e;n++)this.items.push(t(n));this.i=0}get(){for(let e=0;e<this.items.length;e++){const n=this.items[(this.i+e)%this.items.length];if(!n.active)return this.i=(this.i+e+1)%this.items.length,n}const t=this.items[this.i];return this.i=(this.i+1)%this.items.length,t}}class bh{constructor(t,{size:e=.1,restitution:n=.38,life:i=6,onDone:r=null,ground:a=Em}={}){this.obj=t,this.ground=a,this.size=e,this.rest=n,this.onDone=r,this.life=i,this.vel=new b,this.ang=new b,this.settled=!1,this.t=0,this.bounces=0,this.baseScale=t.scale.x,this.active=!0}step(t){var n;const e=this.obj.position;if(this.t+=t,this.settled){this.obj.quaternion.slerp(this.flatQ,Math.min(1,t*14));const i=this.t-this.settleT;if(i>this.life){const r=Math.max(0,1-(i-this.life)/.4);if(this.obj.scale.setScalar(this.baseScale*r),r<=0)return this.active=!1,this.obj.scale.setScalar(this.baseScale),(n=this.onDone)==null||n.call(this,this),!1}}else{const i=this.ground(e.x,e.y-this.size,e.z);this.vel.y-=Fm*t,e.addScaledVector(this.vel,t);const r=this.ang.length();if(r>1e-4&&(Pp.setFromAxisAngle(ge.copy(this.ang).divideScalar(r),r*t),this.obj.quaternion.premultiply(Pp)),e.y<i+this.size&&(e.y=i+this.size,this.vel.y<0)){const a=-this.vel.y;if(this.vel.y=a*this.rest,this.vel.x*=.55,this.vel.z*=.55,this.ang.multiplyScalar(.5).add(ge.set(wt(-6,6),wt(-6,6),wt(-6,6))),this.bounces++,a<1.4||this.bounces>5){this.settled=!0,this.vel.set(0,0,0),this.settleT=this.t;const o=ge.set(0,0,1).applyQuaternion(this.obj.quaternion);o.y<0&&o.negate(),this.flatQ=new tr().setFromUnitVectors(o,Gl).multiply(this.obj.quaternion)}}}return!0}}class Td{constructor(t,{ground:e=Em}={}){this.ground=e,this.farScale=1,this.scene=t,this.bodies=[],this.wisps=[];const n=new hn(Dp,ZM);n.translate(Dp*(.5-.08),0,0);const i=Eb(),r=Nu(),a=new zo([[0,0],[.13,.04],[.23,.25],[.12,.58],[0,1.1]].map(([d,_])=>new et(d,_)),8);a.rotateZ(-Math.PI/2),this.flashes=new Ci(()=>{const d=new W(n,Rp(new Nn({map:i,color:Xe(1.9,1.6,1.3),transparent:!0,depthWrite:!1,side:Zn})));d.renderOrder=7;const _=new ao(new ha({map:r,color:Xe(1.5,.7,.22),transparent:!0,blending:En,depthWrite:!1}));_.renderOrder=6;const x=new W(a,new Nn({color:Xe(3.2,2.8,1.9),transparent:!0,depthWrite:!1}));return x.renderOrder=8,d.visible=_.visible=x.visible=!1,t.add(d,_,x),{star:d,glow:_,hot:x,active:!1,t:0,k:1,flip:1,dir:new b,get:null}},16),this.light=new fb("#ffa040",0,6,1.6),this.lightT=1,this.lightK=0,t.add(this.light);const o=new gd(.8,1,48);this.rings=new Ci(()=>{const d=new W(o,new Nn({color:Xe(1.4,1.3,1.15),transparent:!0,blending:En,depthWrite:!1,side:Zn}));return d.visible=!1,t.add(d),{m:d,active:!1,t:0,dur:.2,s0:.1,s1:1,a0:1}},12),this.smoke=new VM(t,260),this.smokeTints={white:new _t("#eef1f8"),grey:new _t("#c3c9d8"),dust:new _t("#ecdcbc"),dark:new _t("#7c8296"),frost:new _t("#cdeeff")};const l=new bc(1,0);this.crumbMats=new Map,this.crumbs=new Ci(()=>{const d=new W(l,T.white);return d.visible=!1,d.castShadow=!0,t.add(d),{m:d,active:!1,body:null}},140),this.casings=new Ci(()=>{const d=new ut,_=new W(bd(),T.brass),x=new W(Md(),T.brass);return _.castShadow=!0,d.add(_,x),d.visible=!1,t.add(d),{g:d,mesh:_,head:x,active:!1,body:null,smoke:0}},80),this.projectileShapes=zM();const c=new hn(1,1);c.translate(-.5,0,0);const h=lw();this.projectileMats=sc.map(d=>{const _=h.clone();return _.uniforms.uColor.value.copy(d.accent),{...FM(d.color),trail:_}}),this.bullets=new Ci(()=>{const d=new ut,_=this.projectileShapes.pistol,x=new W(_.geometry,this.projectileMats[0].body),y=new W(_.band,this.projectileMats[0].band),k=new W(c,h);return k.renderOrder=7,d.add(k,x,y),d.visible=!1,t.add(d),{g:d,tr:k,slug:x,band:y,active:!1,from:new b,to:new b,t:0,dur:.1,size:1,length:_.length,diameter:_.diameter,getTo:null,onArrive:null}},96),this.trailGeo=c,this.arrowTrail=h.clone(),this.arrowTrail.uniforms.uColor.value.copy(Xe(1,1,1.1)),this.glowTex=r,this.missilePools={};const u=new hn(1,1);u.translate(.5,0,0),this.beams=new Ci(()=>{const d=new W(u,aw());return d.renderOrder=7,d.visible=!1,t.add(d),{m:d,active:!1,t:0,life:.05,w:.1,grow:0}},32);const f=Tb();this.sparks=new Ci(()=>{const d=new ao(Rp(new ha({map:f,color:Xe(1.6,1.4,1.2),transparent:!0,depthWrite:!1})));return d.renderOrder=7,d.visible=!1,t.add(d),{s:d,active:!1,t:0,strength:1,scale:1}},10);const p=new ts(1,1,4);this.glintMats=sc.map(d=>new Nn({color:d.accent})),this.glints=new Ci(()=>{const d=new W(p,this.glintMats[0]);return d.visible=!1,t.add(d),{m:d,active:!1,t:0,life:.2,width:.04,length:.5,vel:new b}},72);const g=Nu();this.flames=new Ci(()=>{const d=new ao(new ha({map:g,color:Xe(2.4,1.6,.6),transparent:!0,blending:En,depthWrite:!1}));return d.renderOrder=7,d.visible=!1,t.add(d),{s:d,active:!1,t:0,life:.5,size:.5,vel:new b}},110);const v=new Ce(1,1,1,5,1,!0),m=new Nn({color:Xe(1.5,2.5,3.2),transparent:!0,blending:En,depthWrite:!1});this.zaps=new Ci(()=>{const d=new ut;for(let _=0;_<kp;_++)d.add(new W(v,m));return d.visible=!1,d.renderOrder=8,t.add(d),{g:d,active:!1,t:0,a:new b,b:new b,w:.05}},14)}flame(t,e,n=.5,i=.5){const r=this.flames.get();r.active=!0,r.t=0,r.life=i,r.size=n*Math.min(1.6,Math.sqrt(this.farScale)),r.vel.copy(e),r.s.position.copy(t),r.s.material.rotation=Math.random()*6,r.s.visible=!0}shot(t,e,n,i,r,a,o,l){if(!t.chain&&!t.stream&&!t.beam&&!t.rail){this.fireBullet(e,n,i,r,a,o,l);return}const c=n(new b);if(t.chain)this.zap(e,c,.06);else if(t.beam)this.beam(e,c,.09,.09,"laser");else if(t.rail)this.rail(e,c,o);else for(let h=0;h<2;h++)this.flame(e,$n.subVectors(c,e).multiplyScalar(3.4*(.9+Math.random()*.2)),.5+Math.random()*.3,.45);i==null||i(c)}zap(t,e,n=.05){const i=this.zaps.get();i.active=!0,i.t=0,i.a.copy(t),i.b.copy(e),i.w=n,i.g.visible=!0,this.layZap(i)}layZap(t){const e=kp;let n=$n.copy(t.a);const i=t.a.distanceTo(t.b);for(let r=0;r<e;r++){const a=(r+1)/e,o=aa.lerpVectors(t.a,t.b,a);r<e-1&&o.add(Yu.set(wt(-1,1),wt(-1,1),wt(-.5,.5)).multiplyScalar(i*.07*Math.sin(Math.PI*a)+.04));const l=t.g.children[r];ji.subVectors(o,n);const c=ji.length()||.001;l.position.copy(n).addScaledVector(ji,.5),l.quaternion.setFromUnitVectors(Gl,ji.divideScalar(c)),l.scale.set(t.w,c,t.w),n=ge.copy(o)}}muzzleBlast(t,e,n,i,r=KM,a=0){const o=yh(a),l=r.scale*Math.min(1.6,Math.sqrt(this.farScale));if(r.kind==="string"){this.puff(t,ge.copy(e).multiplyScalar(1.6).addScaledVector(n,.4),.1,.3,"white",5,.4);return}if(r.kind==="fire"||r.kind==="laser"){this.light.position.copy(t).addScaledVector(e,.8),this.lightT=0,this.lightK=r.kind==="fire"?.7:.35,this.light.color.copy(r.kind==="fire"?Ip:sw);return}const c=iw[r.kind],h=this.flashes.get();if(h.active=!0,h.t=0,h.k=l*wt(.92,1.08),h.flip=Math.random()<.5?1:-1,h.dir.copy(e),h.get=i,h.star.position.copy(t),ur(h.star,e),h.star.visible=h.glow.visible=h.hot.visible=!0,h.hot.position.copy(t),h.hot.quaternion.copy(h.star.quaternion),h.hot.material.opacity=1,h.hot.scale.setScalar(l),h.star.scale.set(l,l*h.flip,1),h.star.material.opacity=1,h.glow.scale.setScalar(l*2.6),h.glow.material.opacity=.5,h.star.material.color.copy(c?c.star:o.color),h.glow.material.color.copy(c?c.glow:o.accent),h.hot.material.color.copy(c?c.hot:nw),h.glow.position.copy(t).addScaledVector(e,.3*l),this.light.position.copy(t).addScaledVector(e,.4),this.lightT=0,this.lightK=l,this.light.color.copy(c?c.light:o.accent),r.kind==="spark"){for(let p=0;p<3;p++)$n.copy(t).addScaledVector(e,wt(.3,.9)*l).addScaledVector(n,wt(-.5,.5)*l),$n.z+=wt(-.4,.4)*l,this.zap(t,$n,.022);return}const u=Math.max(.9,Math.sqrt(l)),f=Math.min(7,Math.max(4,r.smoke||3));for(let p=0;p<f;p++){const g=p<2,v=(g?wt(8,13):wt(2,5))*u;ge.copy(e).multiplyScalar(v).addScaledVector(n,wt(-.6,1.2)),$n.copy(t).addScaledVector(e,(.18+p*.13)*u).addScaledVector(n,wt(-.15,.15)),this.puff($n,ge,(g?wt(.27,.4):wt(.4,.62))*u,g?wt(.32,.48):wt(.9,1.45),c?"frost":g?"white":"grey",g?5:2.4,g?.7:.5,g?2.6:1.25)}if(i){const p=this.wisps.find(g=>g.get===i);p?p.t=.65:this.wisps.push({get:i,t:.65})}}ring(t,e,n,i,r,a,o=0){const l=this.rings.get();l.active=!0,l.t=0,l.dur=n,l.s0=i,l.s1=r,l.a0=a,l.m.position.copy(t),l.m.quaternion.setFromUnitVectors(qu,e),l.m.visible=!0,l.m.material.color.copy(yh(o).accent)}dustTint(t){this.dustTints??(this.dustTints=new Map);let e=this.dustTints.get(t);return e||this.dustTints.set(t,e=new _t(t).lerp(this.smokeTints.dust,.55)),e}puff(t,e,n,i,r="white",a=3,o=.9,l=1){this.smoke.spawn(t,e,n,i,r.isColor?r:this.smokeTints[r],a,o,l)}ejectCasing(t,e,n,i,r="pistol",a=QM){const o=this.casings.get();o.body&&(o.body.active=!1);const l=jM[r];o.mesh.geometry=l.body(),o.mesh.material=T[l.bodyMat],o.head.visible=!!l.head,l.head&&(o.head.geometry=l.head(),o.head.material=T[l.headMat]),o.mesh.position.x=o.head.position.x=l.off,o.active=!0,o.g.visible=!0,o.g.position.copy(t),o.g.quaternion.setFromUnitVectors(ge.set(1,0,0),e),o.g.scale.setScalar(Ie*l.scale);const c=new bh(o.g,{ground:this.ground,size:l.size,restitution:.42,life:7,onDone:()=>{o.active=!1,o.g.visible=!1}});c.vel.copy(n).multiplyScalar(wt(a.side[0],a.side[1])).addScaledVector(i,wt(a.up[0],a.up[1])).addScaledVector(e,-wt(a.back[0],a.back[1])),c.ang.set(wt(-4,4),wt(-4,4),0).addScaledVector(n,wt(18,32)*(Math.random()<.5?-1:1)),o.body=c,o.smoke=0,this.bodies.push(c),o.smoke>0&&this.puff(t,ge.copy(i).multiplyScalar(1.2).addScaledVector(n,.8),.06,.4,"grey",4)}fireBullet(t,e,n,i=75,r=1,a=0,o="pistol"){var u;if(ia[o]){this.missile(t,e,n,i,r,a,o);return}const l=this.bullets.get();l.active&&((u=l.onArrive)==null||u.call(l,l.to.clone())),l.active=!0,r*=Math.min(1.6,Math.sqrt(this.farScale)),l.size=r;const c=this.projectileMats[Math.min(a,this.projectileMats.length-1)],h=this.projectileShapes[o==="rifle-long"?"rifle":o]||this.projectileShapes.pistol;l.slug.geometry=h.geometry,l.band.geometry=h.band,l.slug.material=c.body,l.band.material=c.band,l.tr.material=c.trail,l.slug.scale.setScalar(r),l.band.scale.setScalar(r),l.length=h.length*r,l.diameter=h.diameter*r,l.tr.position.x=-l.length,l.t=0,l.from.copy(t),l.getTo=e,e(l.to),l.dur=Math.max(.05,l.from.distanceTo(l.to)/i),l.onArrive=n,l.g.position.copy(t),l.g.visible=!0,ur(l.g,ge.subVectors(l.to,t)),l.tr.visible=!1,l.tr.scale.set(1,l.diameter*1.05,1)}beam(t,e,n=.1,i=.05,r="laser",a=0){const o=this.beams.get();o.active=!0,o.t=0,o.life=i,o.w=n,o.grow=a,o.m.material.uniforms.uColor.value.copy(rw[r]),o.m.material.uniforms.uAlpha.value=1,ge.subVectors(e,t);const l=ge.length();o.m.position.copy(t),ur(o.m,ge.divideScalar(l||1)),o.m.scale.set(l,n,1),o.m.visible=!0}rail(t,e,n=0){this.beam(t,e,.5,.38,"rail",.8),this.beam(t,e,.16,.22,"rail",.3);const i=new b().subVectors(e,t),r=i.length();i.divideScalar(r||1);const a=new b;for(let o=1.2;o<r;o+=1.8)a.copy(t).addScaledVector(i,o),this.ring(a,i,.3+o*.01,.15,.9,.8,2);for(let o=0;o<5;o++)this.puff(a.copy(t).addScaledVector(i,Math.random()*r),$n.set(0,.4,.2),.14,.7,"frost",3,.4)}missile(t,e,n,i,r,a,o){var f,p;const l=ia[o],h=((f=this.missilePools)[o]??(f[o]=new Ci(()=>this.makeMissile(o),l.pool))).get();h.active&&h.stuck<0&&((p=h.onArrive)==null||p.call(h,h.to.clone())),h.active=!0,h.size=r*Math.min(1.6,Math.sqrt(this.farScale)),h.g.scale.setScalar(h.size),h.tier=a,h.t=0,h.stuck=-1,h.drop=!1,h.spinA=Math.random()*6,h.puffT=0,h.from.copy(t),h.getTo=e,e(h.to);const u=h.from.distanceTo(h.to);h.dur=Math.max(.06,u/Math.min(i,l.speed)),h.arc=Math.min(l.arcMax,u*l.arc),h.onArrive=n,h.g.position.copy(t),h.g.visible=!0,h.dir.subVectors(h.to,t).normalize(),ur(h.g,h.dir),h.tr&&(h.tr.visible=!1),h.glow&&(h.glow.visible=!0)}makeMissile(t){const{g:e,len:n}=Im(t),i=new ut,r=new ut;r.position.x=-n/2,e.position.x=n/2,r.add(e),i.add(r);let a=null,o=null;return t==="arrow"||t==="bolt"?(a=new W(this.trailGeo,this.arrowTrail),a.renderOrder=7,a.position.x=-n,i.add(a)):t==="ice"&&(o=new ao(new ha({map:this.glowTex,color:Xe(.5,1.4,2.6),transparent:!0,blending:En,depthWrite:!1})),o.renderOrder=6,o.position.x=-n*.5,o.scale.setScalar(1.4),i.add(o)),i.visible=!1,this.scene.add(i),{g:i,spin:r,tr:a,glow:o,kind:t,len:n,active:!1,from:new b,to:new b,dir:new b,vel:new b,t:0,dur:.1,arc:0,size:1,tier:0,spinA:0,puffT:0,stuck:-1,drop:!1,getTo:null,onArrive:null}}updateMissile(t,e){var a;if(t.stuck>=0){this.stickMissile(t,e);return}t.t+=e,t.getTo(t.to);const n=Math.min(1,t.t/t.dur);t.g.position.lerpVectors(t.from,t.to,n),t.g.position.y+=4*t.arc*n*(1-n),ge.subVectors(t.to,t.from);const i=ge.length();if(ge.y+=4*t.arc*(1-2*n),t.dir.copy(ge).normalize(),ur(t.g,t.dir),t.spinA+=e*ia[t.kind].spin,ia[t.kind].tumble?t.spin.rotation.z=-t.spinA:t.spin.rotation.x=t.spinA,t.tr){const o=Math.min(i*n-t.len*t.size,t.len*t.size*2.2);t.tr.visible=o>.02,t.tr.visible&&t.tr.scale.set(o/t.size,.1,1)}if(t.glow&&(t.glow.material.opacity=.7+Math.sin(t.t*40)*.2),t.puffT-=e,t.puffT<=0&&(t.kind==="grenade"||t.kind==="ice")){const o=t.kind==="ice";t.puffT=o?.018:.025,$n.set(wt(-.3,.3),wt(.1,.5),wt(-.3,.3)),this.puff(t.g.position,$n,(o?.13:.17)*t.size,o?.4:.6,o?"frost":"grey",3,o?.65:.55)}if(n<1)return;const r=(a=t.onArrive)==null?void 0:a.call(t,t.to.clone());t.onArrive=null,t.kind==="grenade"?this.boom(t.to,t.tier,t.size):t.kind==="ice"&&this.frost(t.to,t.size),ia[t.kind].stick&&r!=="through"?(t.stuck=0,t.drop=r==="drop",t.vel.copy(t.dir).multiplyScalar(-2.5).setY(2.5),t.tr&&(t.tr.visible=!1),this.puff(t.to,$n.set(0,.6,.4),.14,.4,"dust",4,.6)):(t.active=!1,t.g.visible=!1,t.getTo=null)}stickMissile(t,e){var a;t.stuck+=e;const n=t.size,i=ia[t.kind].stick;if(!t.drop&&t.stuck<i){(a=t.getTo)==null||a.call(t,t.to),t.g.position.copy(t.to).addScaledVector(t.dir,t.len*n*.28);const o=Math.sin(t.stuck*62)*.2*Math.exp(-t.stuck*6);ge.copy(t.dir),ge.y+=o,ur(t.g,ge);return}const r=(t.stuck-(t.drop?0:i))/ew;if(r>=1){t.active=!1,t.g.visible=!1,t.getTo=null;return}t.vel.y-=Fm*e,t.g.position.addScaledVector(t.vel,e),t.spin.rotation.z+=e*9,t.g.scale.setScalar(n*(1-r*r))}boom(t,e=0,n=1){const i=new b(-.4,.5,.8).normalize();this.impact(t,i,["#ff8a3d","#ffd23f","#3a3f4d","#56703a"],3.6,e);const r=new b;for(let a=0;a<8;a++)r.set(wt(-3.5,3.5),wt(.5,4.5),wt(-2.5,2.5)).multiplyScalar(n),this.flame(t,r,wt(.6,1)*n,wt(.32,.5));for(let a=0;a<6;a++)r.set(wt(-1.5,1.5),wt(.6,2.6),wt(-.5,1)),this.puff(t,r,wt(.3,.5)*n,wt(1,1.6),a%2?"dark":"grey",2.5,.8);this.light.position.copy(t).addScaledVector(i,.6),this.lightT=0,this.lightK=1.6,this.light.color.copy(Ip)}frost(t,e=1){const n=new b(-.4,.5,.8).normalize();this.impact(t,n,["#bfe9ff","#ffffff","#56baff"],1.4,2);const i=new b;for(let r=0;r<6;r++)i.set(wt(-1.5,1.5),wt(-.3,1.6),wt(-1,1)),this.puff(t,i,wt(.2,.34)*e,wt(.5,.85),"frost",3,.75);this.ring(t,n,.25,.2,1.6*e,1,2)}impact(t,e,n,i=1,r=0){const a=this.farScale,o=this.sparks.get();o.active=!0,o.t=0,o.s.visible=!0,o.s.position.copy(t).addScaledVector(e,.08*a),o.s.material.rotation=Math.random()*6,o.strength=i,o.scale=a,o.s.material.color.copy(yh(r).color);for(let h=0;h<Math.min(9,3+Math.ceil(i*2));h++){const u=this.glints.get();u.active=!0,u.t=0,u.life=wt(.16,.3),u.width=wt(.018,.035)*a,u.length=wt(.28,.6)*a,u.m.material=this.glintMats[Math.min(r,this.glintMats.length-1)],u.m.visible=!0,u.m.position.copy(t).addScaledVector(e,.12*a),u.vel.copy(e).multiplyScalar(wt(4,8)).add(ge.set(wt(-3,3),wt(-1,5),wt(-2,2))).multiplyScalar(Math.sqrt(a)),u.m.quaternion.setFromUnitVectors(Gl,ge.copy(u.vel).normalize()),u.m.scale.set(u.width,u.length,u.width)}const l=Math.max(2,Math.round(4*Math.min(1.5,i)));for(let h=0;h<l;h++)ge.copy(e).multiplyScalar(wt(1.5,3.5)*a).add($n.set(wt(-1.2,1.2),wt(0,1.5),wt(-1.2,1.2)).multiplyScalar(a)),this.puff(t,ge,wt(.15,.26)*a,wt(.6,1),this.dustTint(n[h%n.length]),4,.85);const c=Math.max(3,Math.round(6*i));for(let h=0;h<c;h++)this.crumb(t,e,n[h%n.length],a)}crumb(t,e,n,i=1){const r=this.crumbs.get();r.body&&(r.body.active=!1);let a=this.crumbMats.get(n);a||this.crumbMats.set(n,a=vt(n,{flat:!0,spec:.1,rim:.1})),r.m.material=a,r.m.visible=!0,r.active=!0;const o=wt(.06,.12)*i;r.m.scale.set(o,o*wt(.6,1.2),o*wt(.6,1)),r.m.position.copy(t).addScaledVector(e,.05);const l=new bh(r.m,{ground:this.ground,size:o*.6,restitution:.3,life:wt(1.5,3),onDone:()=>{r.active=!1,r.m.visible=!1}});l.vel.copy(e).multiplyScalar(wt(2,6)*i).add(ge.set(wt(-2.5,2.5),wt(.5,4),wt(-2.5,2.5)).multiplyScalar(Math.sqrt(i))),l.ang.set(wt(-20,20),wt(-20,20),wt(-20,20)),r.body=l,this.bodies.push(l)}drop(t,e,n,i,r){const a=new bh(t,{ground:this.ground,size:i,restitution:.3,life:1.2,onDone:r});return a.vel.copy(e),a.ang.copy(n),this.bodies.push(a),a}clear(){var t,e;for(const n of this.bodies)n.active=!1,(t=n.onDone)==null||t.call(n);this.bodies.length=0,this.wisps.length=0;for(const n of[this.flashes,this.rings,this.crumbs,this.casings,this.bullets,this.sparks,this.glints,this.flames,this.zaps,this.beams])for(const i of n.items){i.active=!1,"get"in i&&(i.get=null),"getTo"in i&&(i.getTo=null,i.onArrive=null);for(const r of["star","glow","hot","m","g","s"])(e=i[r])!=null&&e.isObject3D&&(i[r].visible=!1)}for(const n of Object.values(this.missilePools))for(const i of n.items)i.active=!1,i.getTo=i.onArrive=null,i.g.visible=!1;for(const n of this.smoke.items)n.active=!1;this.smoke.update(0),this.lightT=1,this.light.intensity=0}update(t){var n;for(const i of this.flashes.items){if(!i.active)continue;i.t+=t;const r=i.t/JM;if(r>=1){i.active=!1,i.star.visible=i.glow.visible=i.hot.visible=!1,i.get=null;continue}const a=1-r;i.get&&(i.get(i.star.position),i.hot.position.copy(i.star.position),i.glow.position.copy(i.star.position).addScaledVector(i.dir,.35*i.k));const o=.78+Math.sin(Math.min(1,r*2)*Math.PI/2)*.22;i.star.scale.set(i.k*o*(1-r*.28),i.k*i.flip*o*(1-r*.48),1),i.star.material.opacity=Math.min(1,a*1.6),i.hot.material.opacity=Math.max(0,1-i.t/.035),i.hot.visible=i.hot.material.opacity>0,i.glow.scale.setScalar(i.k*2.6*(1-r*.3)),i.glow.material.opacity=a*.5}this.lightT+=t;const e=this.lightT/.1;this.light.intensity=e<1?5.5*this.lightK*(1-e)*(1-e):0;for(let i=this.wisps.length-1;i>=0;i--){const r=this.wisps[i];if(r.t-=t,r.t<=0){this.wisps.splice(i,1);continue}if(Math.random()<t*5){const a=r.get($n);this.puff(a,ge.set(wt(-.15,.15),wt(.8,1.4),wt(-.15,.15)),wt(.22,.32),wt(.7,1.1),"grey",1.5,.32,1.6)}}for(const i of this.rings.items){if(!i.active)continue;i.t+=t;const r=i.t/i.dur;if(r>=1){i.active=!1,i.m.visible=!1;continue}i.m.scale.setScalar(i.s0+(i.s1-i.s0)*Lp(r)),i.m.material.opacity=i.a0*(1-r)*(1-r)}this.smoke.update(t);for(const i of this.sparks.items){if(!i.active)continue;i.t+=t;const r=i.t/.14;if(r>=1){i.active=!1,i.s.visible=!1;continue}i.s.scale.setScalar((.7+Lp(r)*1)*(.6+i.strength*.3)*i.scale),i.s.material.opacity=1-r*r}for(const i of this.flames.items){if(!i.active)continue;i.t+=t;const r=i.t/i.life;if(r>=1){i.active=!1,i.s.visible=!1;continue}i.vel.multiplyScalar(Math.exp(-t*2.5)),i.vel.y+=t*2.4,i.s.position.addScaledVector(i.vel,t),i.s.scale.setScalar(i.size*(.6+r*1.4)),i.s.material.color.setRGB(2.4-r*1.4,1.6-r*1.3,Math.max(.05,.6-r*.55)),i.s.material.opacity=(1-r)*(1-r)*.9}for(const i of this.zaps.items)if(i.active){if(i.t+=t,i.t>=tw){i.active=!1,i.g.visible=!1;continue}this.layZap(i)}for(const i of this.glints.items){if(!i.active)continue;if(i.t+=t,i.t>=i.life){i.active=i.m.visible=!1;continue}i.vel.y-=12*t,i.m.position.addScaledVector(i.vel,t),i.m.quaternion.setFromUnitVectors(Gl,ge.copy(i.vel).normalize());const r=1-i.t/i.life;i.m.scale.set(i.width*r,i.length*(.35+.65*r),i.width*r)}for(const i of this.bullets.items){if(!i.active)continue;i.t+=t,i.getTo(i.to);const r=Math.min(1,i.t/i.dur);i.g.position.lerpVectors(i.from,i.to,r),ge.subVectors(i.to,i.from);const a=ge.length();ur(i.g,ge.divideScalar(a||1));const o=Math.min(a*r-i.length,i.length*5.5);i.tr.visible=o>i.diameter*.1,i.tr.visible&&i.tr.scale.set(o,i.diameter*1.05,1),r>=1&&(i.active=!1,i.g.visible=!1,(n=i.onArrive)==null||n.call(i,i.to.clone()))}for(const i of Object.values(this.missilePools))for(const r of i.items)r.active&&this.updateMissile(r,t);for(const i of this.beams.items){if(!i.active)continue;i.t+=t;const r=i.t/i.life;if(r>=1){i.active=!1,i.m.visible=!1;continue}i.m.material.uniforms.uAlpha.value=(1-r)*(1-r*.5),i.m.scale.y=i.w*(1+i.grow*r)}for(const i of this.casings.items)!i.active||i.smoke<=0||(i.smoke-=t,Math.random()<t*24&&this.puff(i.g.position,ge.set(0,.4,0),.025,.6,"white",2,.5));for(let i=this.bodies.length-1;i>=0;i--){const r=this.bodies[i];(!r.active||!r.step(t))&&this.bodies.splice(i,1)}}}const Ca=[{e:"🦊",bg:"#ff8a3d"},{e:"🐻",bg:"#b0703c"},{e:"🐼",bg:"#6c7a93"},{e:"🐯",bg:"#ffb62e"},{e:"🦁",bg:"#e8a23a"},{e:"🐸",bg:"#58c46a"},{e:"🐵",bg:"#a8693e"},{e:"🐺",bg:"#5c6f99"},{e:"🦉",bg:"#8c6bd6"},{e:"🤖",bg:"#4a9ee8"},{e:"👽",bg:"#3fb9a0"},{e:"💀",bg:"#4b4f63"},{e:"🤠",bg:"#d9773a"},{e:"🥷",bg:"#30364a"},{e:"🐙",bg:"#e35d8f"},{e:"🦈",bg:"#3b7cc4"}],cw=["Sn1per_Ko","DuckHunter","PewPewPro","Барабашка","ТапТап","xX_Glock_Xx","Гильза","КосойЗаяц","Zero_Recoil","MiniGunMama","Шмель","HeadshotHank","Ракета","Bullseye","КапитанОтдача","Tactical_Tim","Пиу-Пиу","Мушка","Курок","LuckyLoad","Totoro_007","Бабах","RangeRat","Сапсан","NoScopeNika","Дробь","Kalash_Kid","Ёжик"],Om=16;function Bm(s=Math.random){return{name:`Стрелок${1e3+Math.floor(s()*9e3)}`,avatar:Math.floor(s()*Ca.length),wins:0,losses:0,trophies:0}}function hw(s){const t=String(s??"").replace(/\s+/g," ").trim().slice(0,Om);return t.length>=2?t:null}function uw(s,t=Math.random){let n=(i=>i[Math.floor(t()*i.length)])(cw);return n===s.name&&(n+="2"),{name:n,avatar:Math.floor(t()*Ca.length),trophies:Math.max(0,Math.round((s.trophies||0)+(t()-.45)*80))}}const Lo={glock19:{kind:"pistol",caliber:"9×19",halfHeight:29},revolver:{kind:"pistol",caliber:".357 Magnum",halfHeight:29},flamer:{kind:"fuel",caliber:"топливо",halfHeight:29},cryo:{kind:"ice",caliber:"криокапсула",halfHeight:31},bow:{kind:"arrow",caliber:"стрела",halfHeight:56},grenade:{kind:"grenade",caliber:"40 мм",halfHeight:33},tesla:{kind:"cell",caliber:"заряд",halfHeight:28},stapler:{kind:"staple",caliber:"скобы №10",halfHeight:30},laser:{kind:"cell",caliber:"аккумулятор",halfHeight:28},saw:{kind:"saw",caliber:"диск 125 мм",halfHeight:50},crossbow:{kind:"bolt",caliber:"болт",halfHeight:40},rail:{kind:"slug",caliber:"ферроснаряд",halfHeight:34},uzi:{kind:"pistol",caliber:"9×19",halfHeight:29},m870:{kind:"shell",caliber:"12 GA",halfHeight:29},ak47:{kind:"rifle",caliber:"7.62×39",halfHeight:35},minigun:{kind:"rifle-long",caliber:"7.62×51",halfHeight:42}},Wl=new Map,Mh=new Map;let ui;function dw(s){ui=s}function wc(s){const t=Lo[s]||Lo.glock19;if(Wl.has(t.kind))return Wl.get(t.kind).texture;if(!ui)throw new Error("Initialize ammunition portraits before constructing lanes");const e=new No;e.add(new Fo(Ne.sky,Ne.ground,1));const n=new Oo(Ne.key,Ne.keyIntensity);n.position.copy(Ne.keyDir).multiplyScalar(20),e.add(n);const i=zi(t.kind);i.rotation.set(.08,-.12,Math.PI/2),i.updateMatrixWorld(!0);const r=new Bn().setFromObject(i).getCenter(new b);i.position.sub(r),e.add(i);const a=t.halfHeight,o=new Uo(-a*.5,a*.5,a,-a,.1,300);o.position.set(0,0,160),o.lookAt(0,0,0);const l=new Fn(96,192,{depthBuffer:!0,samples:4});l.texture.name=`Toy ammunition ${t.caliber}`;const c=ui.getRenderTarget(),h=ui.getClearColor(new _t),u=ui.getClearAlpha();return ui.setRenderTarget(l),ui.setClearColor(0,0),ui.clear(),ui.render(e,o),ui.setRenderTarget(c),ui.setClearColor(h,u),Wl.set(t.kind,l),l.texture}function fw(s){const t=Lo[s]||Lo.glock19;if(Mh.has(t.kind))return Mh.get(t.kind);wc(s);const e=Wl.get(t.kind),n=e.width,i=e.height,r=new Uint8Array(n*i*4);ui.readRenderTargetPixels(e,0,0,n,i,r);const a=document.createElement("canvas");a.width=n,a.height=i;const o=a.getContext("2d"),l=o.createImageData(n,i),c=u=>Math.round(255*(u<=.0031308?u*12.92:1.055*Math.pow(u,1/2.4)-.055));for(let u=0;u<i;u++)for(let f=0;f<n;f++){const p=((i-1-u)*n+f)*4,g=(u*n+f)*4,v=r[p+3];for(let m=0;m<3;m++)l.data[g+m]=v?c(Math.min(1,r[p+m]/v)):0;l.data[g+3]=v}o.putImageData(l,0,0);const h=a.toDataURL("image/png");return Mh.set(t.kind,h),h}const Wi=s=>document.getElementById(s),ye=ic,pw=`<svg viewBox="0 0 64 74" aria-hidden="true">
  <path d="M18 35V24a14 14 0 0 1 28 0v11" fill="none" stroke="#f1e8d8" stroke-width="8.5" stroke-linecap="round"/>
  <path d="M18 35V24a14 14 0 0 1 28 0v11" fill="none" stroke="#cfc3ae" stroke-width="2.5" stroke-linecap="round" transform="translate(1.5 1.5)"/>
  <rect x="8" y="32" width="48" height="38" rx="9" fill="#f1e8d8"/>
  <rect x="8" y="57" width="48" height="13" rx="6.5" fill="#d9ccb5"/>
  <circle cx="32" cy="47" r="6" fill="#3b3631"/>
  <path d="M29.4 49h5.2l1.5 10.5h-8.2z" fill="#3b3631"/>
</svg>`,mw=`<svg viewBox="0 0 40 40" aria-hidden="true">
  <path d="M20 3.5 37 21.5H27.5V36.5H12.5V21.5H3Z" fill="#e58f00" stroke="#e58f00" stroke-width="3" stroke-linejoin="round"/>
  <path d="M20 3.5 37 21.5H27.5V34H12.5V21.5H3Z" fill="#ffb91d" stroke="#ffb91d" stroke-width="3" stroke-linejoin="round"/>
  <path d="M20 7.5 30 18.5H24V22H16V18.5H10Z" fill="#ffd54a"/>
</svg>`,ju=`<svg viewBox="0 0 48 48" aria-hidden="true">
  <circle cx="24" cy="26" r="21" fill="#c97d04"/><circle cx="24" cy="23.5" r="21" fill="#ffc21c"/><circle cx="24" cy="23.5" r="15.5" fill="#f2a60e"/>
  <path d="M11 17a15 15 0 0 1 21-8" fill="none" stroke="#ffe37a" stroke-width="3" stroke-linecap="round"/>
  <text x="24" y="32" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-weight="700" font-size="24" fill="#fff1b8" stroke="#c27400" stroke-width="2" paint-order="stroke">$</text>
</svg>`,Hm='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z" fill="#ffc533" stroke="#a85d00" stroke-width="1.6" stroke-linejoin="round"/></svg>',gw=`<svg viewBox="0 0 26 32" aria-hidden="true">
  <g><path d="M1.5 12Q1.5 2.5 6 1Q10.5 2.5 10.5 12Z" fill="#ffd25a"/><rect x="1.5" y="11" width="9" height="20" rx="1.6" fill="#f0ac2a"/><rect x="3" y="12" width="2.4" height="17" rx="1.2" fill="#ffe08a"/></g>
  <g transform="translate(13.5 0)"><path d="M1.5 12Q1.5 2.5 6 1Q10.5 2.5 10.5 12Z" fill="#ffd25a"/><rect x="1.5" y="11" width="9" height="20" rx="1.6" fill="#f0ac2a"/><rect x="3" y="12" width="2.4" height="17" rx="1.2" fill="#ffe08a"/></g>
</svg>`;function Up(s,t,e,n,i){const r=[],a=Math.PI*2/i;for(let o=0;o<i;o++){const l=o*a;for(const[c,h]of[[n,-.5],[n,-.27],[e,-.16],[e,.16],[n,.27]])r.push(`${(s+Math.cos(l+h*a)*c).toFixed(2)} ${(t+Math.sin(l+h*a)*c).toFixed(2)}`)}return`M${r.join("L")}Z`}const rc=`<svg viewBox="0 0 48 48" aria-hidden="true">
  <path d="${Up(24,26.5,21,15.5,8)}" fill="#4f5d79" stroke="#4f5d79" stroke-width="3" stroke-linejoin="round"/>
  <path d="${Up(24,23.5,21,15.5,8)}" fill="#b8c7e0" stroke="#b8c7e0" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="24" cy="23.5" r="11.5" fill="none" stroke="#8c9cba" stroke-width="3"/>
  <circle cx="24" cy="23.5" r="6.5" fill="#1c2639"/>
  <path d="M10 18a15 15 0 0 1 10-9" fill="none" stroke="#e6eefc" stroke-width="3" stroke-linecap="round"/>
</svg>`,vw=`<svg viewBox="0 0 40 40" aria-hidden="true">
  <rect x="5" y="5" width="30" height="32" rx="5" fill="#3a4560"/>
  <rect x="5" y="3" width="30" height="32" rx="5" fill="#56709a"/>
  <rect x="9" y="8" width="10" height="23" rx="2" fill="#c9d2e0"/><rect x="21" y="8" width="10" height="23" rx="2" fill="#c9d2e0"/>
  <path d="M14 12l3.5 4h-7z" fill="#ffc533"/><path d="M26 27l3.5-4h-7z" fill="#ffc533"/>
</svg>`,Np='<path d="M15.5 15Q15.5 4.5 20 3Q24.5 4.5 24.5 15Z" fill="#ffd25a"/><rect x="15.5" y="14" width="9" height="22" rx="1.6" fill="#f0ac2a"/><rect x="17" y="15" width="2.4" height="19" rx="1.2" fill="#ffe08a"/>',xw=`<svg viewBox="0 0 40 40" aria-hidden="true">
  <circle cx="20" cy="20" r="16" fill="#ff5a3d"/><circle cx="20" cy="18.5" r="16" fill="#ff7a45"/>
  <g transform="rotate(-38 20 20) scale(0.82) translate(4.4 4.4)">${Np}</g><g transform="rotate(38 20 20) scale(0.82) translate(4.4 4.4)">${Np}</g>
</svg>`,_w='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="2" width="2.6" height="20.5" rx="1.3" fill="#c9cfdb"/><path d="M6.6 3.6c4.2-2.3 6.6 2.1 11 0v9.2c-4.4 2.1-6.8-2.3-11 0z" fill="#fff4dc"/></svg>';function br(s){const t=Ca[(s??0)%Ca.length];return`<span class="ava-face" style="background:${t.bg}">${t.e}</span>`}function Cr(s){const t=mi[Math.min(s,mi.length-1)];return`<span class="rar" style="--rc:${t.color}">${t.name}</span>`}const Vm=s=>`<i class="gear-s">${rc}</i>${ic(s)}`;function bs(s,t,e=""){const n=document.createElement(s);return t&&(n.className=t),e&&(n.innerHTML=e),n}class yw{constructor({onBuy:t,onPanelAction:e,onProfile:n,onFloors:i,onDuel:r}){this.onBuy=t,this.onPanelAction=e,this.money=Wi("money"),this.wallet=Wi("wallet"),this.partsEl=Wi("parts"),this.partsN=Wi("parts-n"),this.partsEl.querySelector(".gear").innerHTML=rc;for(const l of document.querySelectorAll("i.flag"))l.innerHTML=_w;document.querySelector("#floors-btn .ti").innerHTML=vw,document.querySelector("#duel-btn .ti").innerHTML=xw,this.profileBtn=Wi("profile-btn");const a=(l,c)=>Wi(l).addEventListener("click",h=>{h.stopPropagation(),c()});a("profile-btn",n),a("floors-btn",i),a("duel-btn",r),this.hint=Wi("hint"),this.popups=Wi("popups"),this.layer=Wi("lanes-ui"),this.shownMoney=0,this.targetMoney=0,this.panel=Wi("panel"),this.panelTitle=this.panel.querySelector(".p-title"),this.panelSub=this.panel.querySelector(".p-sub"),this.panelList=this.panel.querySelector(".p-list"),this.panelFoot=this.panel.querySelector(".p-foot"),this.panelThumb=this.panel.querySelector(".p-thumb"),this.panelTabs=this.panel.querySelector(".p-tabs"),this.panelTab=0,this.panelTabs.addEventListener("click",l=>{const c=l.target.closest("[data-section]");c&&(this.panelTab=+c.dataset.section,this.panelList.scrollTop=0,this.refreshPanel())}),this.panelFoot.addEventListener("click",l=>{l.stopPropagation();const c=l.target.closest("[data-act]");c&&this.panelLane&&this.onPanelAction(this.panelLane,c.dataset.act)}),this.panelLane=null;const o=l=>{l.stopPropagation(),this.closePanel()};this.panel.querySelector(".p-close").addEventListener("pointerdown",o),this.panelList.addEventListener("click",l=>{l.stopPropagation();const c=l.target.closest("[data-buy]");c&&this.panelLane&&this.onBuy(this.panelLane,c.dataset.buy);const h=l.target.closest("[data-act]");h&&!h.disabled&&this.panelLane&&this.onPanelAction(this.panelLane,h.dataset.act)})}hideHint(){this.hint.classList.add("gone")}setParts(t){this.partsValue=t,this.partsN.textContent=ye(t)}bumpParts(){this.partsEl.classList.remove("bump"),this.partsEl.offsetWidth,this.partsEl.classList.add("bump")}setProfile(t){this.profileBtn.querySelector(".ava").innerHTML=br(t.avatar),this.profileBtn.querySelector(".pf-name").textContent=t.name,this.profileBtn.querySelector(".pf-trophy").textContent=`🏆 ${t.trophies||0}`}setMoney(t,e=!1){this.targetMoney=t,e&&(this.shownMoney=t,this.money.textContent=ye(t))}bumpWallet(){this.wallet.classList.remove("bump"),this.wallet.offsetWidth,this.wallet.classList.add("bump")}tick(t){if(this.shownMoney!==this.targetMoney){const e=this.targetMoney-this.shownMoney,n=Math.max(1,Math.abs(e)*t*8);this.shownMoney=Math.abs(e)<=n?this.targetMoney:this.shownMoney+Math.sign(e)*n,this.money.textContent=ye(this.shownMoney)}}openPanel(t){this.panelLane=t,this.panelTab=0,this.panel.inert=!1,this.panel.classList.add("open"),this.refreshPanel()}closePanel(){this.panel.classList.remove("open"),this.panel.inert=!0,this.panelLane=null}get panelOpen(){return!!this.panelLane}refreshPanel(t){const e=this.panelLane;if(!e)return;const n=e.panelData(),i=t??this.targetMoney;this.panelTabs.innerHTML=n.sections.map((a,o)=>`<button class="dock-tab ${o===this.panelTab?"on":""}" role="tab" aria-selected="${o===this.panelTab}" data-section="${o}">${a.title}</button>`).join(""),this.panelTitle.innerHTML=`${n.title} ${Cr(n.tier)}<span class="p-stars">${Hm.repeat(n.tier)}</span>`,this.panelSub.textContent=n.sub,this.panelThumb.dataset.key!==n.thumbKey&&(this.panelThumb.dataset.key=n.thumbKey,this.panelThumb.innerHTML=n.thumb?`<img alt="" src="${n.thumb}">`:"");const r=this.panelList.scrollTop;this.panelList.innerHTML=n.sections.filter((a,o)=>o===this.panelTab).map(a=>`<div class="p-sec">${a.title}${a.note?`<small>${a.note}</small>`:""}</div>${a.rows.map(o=>{if(o.off)return`<div class="p-row off"><div class="p-ic">${o.icon}</div><div class="p-info"><div class="p-name">${o.title}</div>
            <div class="p-val">${o.now}</div></div><div class="p-buy blocked">${o.off}</div></div>`;if(o.btns)return`<div class="p-row"><div class="p-ic">${o.icon}</div><div class="p-info"><div class="p-name">${o.title} <span class="p-lvl">${o.lvl}</span></div>
            <div class="p-val">${o.now}</div></div><div class="p-steps">${o.btns.map(f=>`<button class="p-step" data-act="${f.act}" ${f.off?"disabled":""}>${f.label}</button>`).join("")}</div></div>`;const l=o.cost==null&&!o.block,c=o.cur==="parts",h=!l&&!o.block&&(c?this.partsValue??0:i)>=o.cost,u=o.block?`<div class="p-buy blocked">${o.block}</div>`:`<button class="p-buy ${l?"maxed":h?"":"locked"}" ${l?"disabled":`data-buy="${o.id}" ${h?"":"disabled"}`}>
            ${l?"MAX":c?Vm(o.cost):`<span class="c">$</span>${ye(o.cost)}`}</button>`;return`<div class="p-row"><div class="p-ic">${o.icon}</div>
          <div class="p-info"><div class="p-name">${o.title} <span class="p-lvl">${o.lvl}</span></div>
            <div class="p-val">${l||o.block?`${o.now}${l?" · MAX":""}`:`${o.now} <b>→ ${o.next}</b>`}</div></div>${u}</div>`}).join("")}`).join(""),this.panelList.scrollTop=r,this.panelFoot.innerHTML=n.foot.map(a=>`<button class="m-btn ${a.cls||""}" data-act="${a.act}">${a.label}</button>`).join("")}flashRow(t){var n;const e=this.panelList.querySelector(`[data-buy="${t}"]`);(n=e==null?void 0:e.closest(".p-row"))==null||n.animate([{background:"rgba(255,210,63,0.45)"},{background:"rgba(255,255,255,0.06)"}],{duration:350})}popup(t,e,n,i=""){const r=bs("div",`pop ${i}`);r.textContent=n,this.popups.appendChild(r);const a=(Math.random()-.5)*40,o=r.animate([{transform:`translate(${t}px, ${e}px) translate(-50%, -50%) scale(0.3)`,opacity:0},{transform:`translate(${t+a*.3}px, ${e-24}px) translate(-50%, -50%) scale(1.2)`,opacity:1,offset:.15},{transform:`translate(${t+a*.6}px, ${e-46}px) translate(-50%, -50%) scale(1)`,opacity:1,offset:.6},{transform:`translate(${t+a}px, ${e-70}px) translate(-50%, -50%) scale(0.9)`,opacity:0}],{duration:800,easing:"cubic-bezier(.2,.7,.3,1)"});o.onfinish=()=>r.remove()}flyCoins(t,e,n,i){this.fly(t,e,n,this.wallet.querySelector(".coin"),ju,i)}flyParts(t,e,n,i,r){this.fly(t,e,n,i,rc,r)}fly(t,e,n,i,r,a){const o=i.getBoundingClientRect(),l=o.left+o.width/2,c=o.top+o.height/2;for(let h=0;h<n;h++){const u=bs("div","fly-coin",r);this.popups.appendChild(u);const f=t+(Math.random()-.5)*60,p=e+(Math.random()-.5)*40,g=(f+l)/2+(Math.random()-.5)*160,v=Math.min(p,c)-40-Math.random()*60,m=u.animate([{transform:`translate(${f}px, ${p}px) scale(0.2)`},{transform:`translate(${f+(Math.random()-.5)*80}px, ${p-40}px) scale(1.15)`,offset:.2},{transform:`translate(${g}px, ${v}px) scale(1)`,offset:.55},{transform:`translate(${l}px, ${c}px) scale(0.6)`}],{duration:700+h*60,easing:"cubic-bezier(.5,0,.7,1)"});m.onfinish=()=>{u.remove(),a==null||a(h)}}}}class Ad{constructor(t){this.el=bs("div","target-hud",'<div class="th-bar"><i class="th-chip"></i><i class="th-fill"></i><span class="th-num"></span></div>'),this.number=this.el.querySelector(".th-num"),this.fill=this.el.querySelector(".th-fill"),this.chipFill=this.el.querySelector(".th-chip"),this.chip=this.fraction=1,t&&t.append(this.el)}set(t,e,n=!1){this.fraction=e?Math.max(0,t/e):0,this.fill.style.transform=`scaleX(${this.fraction})`,this.number.textContent=ye(Math.ceil(Math.max(0,t))),this.el.classList.toggle("low",this.fraction<.25),n&&(this.chip=this.fraction,this.chipFill.style.transform=`scaleX(${this.chip})`)}tick(t){this.chip=this.chip>this.fraction?Math.max(this.fraction,this.chip-t*.9):this.fraction,this.chipFill.style.transform=`scaleX(${this.chip})`}place(t,e){this.el.style.transform=`translate(${t}px, ${e}px) translate(-50%, -100%)`}}class bw{constructor(t,{onUpgrade:e,onUnlock:n,onEvolve:i,onEquip:r}){this.gun=bs("div","gun-hud",`<button class="gh-up">${mw}<i class="gh-badge"></i></button>
       <b class="gh-name"></b><span class="gh-evo"></span>
       <div class="gh-ammo"><i class="gh-bullets">${gw}</i><span></span><div class="gh-reload"><i></i></div></div>`),this.gun.querySelector(".gh-up").addEventListener("pointerdown",a=>{a.stopPropagation(),e()}),this.nameEl=this.gun.querySelector(".gh-name"),this.evoEl=this.gun.querySelector(".gh-evo"),this.ammoBox=this.gun.querySelector(".gh-ammo"),this.ammoEl=this.ammoBox.querySelector("span"),this.reloadEl=this.gun.querySelector(".gh-reload"),this.reloadFill=this.reloadEl.querySelector("i"),this.badge=this.gun.querySelector(".gh-badge"),this.gauge=bs("button","gauge",'<b class="g-val"></b><div class="g-track" role="progressbar"><i class="g-fill"></i></div><small class="g-status"></small>'),this.gVal=this.gauge.querySelector(".g-val"),this.gFill=this.gauge.querySelector(".g-fill"),this.gTrack=this.gauge.querySelector(".g-track"),this.gStatus=this.gauge.querySelector(".g-status"),this.gauge.addEventListener("click",a=>{a.stopPropagation(),this.evoReady&&i()}),this.evoReady=!1,this.hpUI=new Ad,this.target=this.hpUI.el,this.reward=bs("span","th-reward",`<i class="coin-s">${ju}</i><b></b>`),this.rewardText=this.reward.querySelector("b"),this.rewardIcon=this.reward.querySelector("i"),this.target.append(this.reward),this.shownReward=null,this.comboEl=bs("div","lane-combo","<b></b><small>комбо</small>"),this.comboText=this.comboEl.querySelector("b"),this.shownCombo=0,this.lock=bs("div","lane-lock",`<div class="ll-icon">${pw}</div><button class="ll-buy"></button>`),this.lockBtn=this.lock.querySelector(".ll-buy"),this.lock.addEventListener("pointerdown",a=>{a.stopPropagation(),n()}),this.empty=bs("button","lane-empty","<b>+</b><span>Поставить оружие</span>"),this.empty.addEventListener("click",a=>{a.stopPropagation(),r()}),t.append(this.gauge,this.gun,this.target,this.lock,this.empty,this.comboEl),this.mode=null,this.hidden=!1}setHidden(t){if(this.hidden!==t){this.hidden=t;for(const e of[this.gun,this.gauge,this.target,this.lock,this.empty,this.comboEl])e.classList.toggle("hud-hidden",t)}}setMode(t){if(this.mode!==t){this.mode=t;for(const e of[this.gun,this.gauge,this.target])e.style.display=t==="armed"?"":"none";this.lock.style.display=t==="locked"?"":"none",this.empty.style.display=t==="empty"?"":"none"}}setLock(t,e,n){this.lock.classList.toggle("next",e),this.lock.classList.toggle("ready",e&&n),this.lockBtn.style.display=e?"":"none",this.lockBtn.innerHTML=t,this.lockBtn.classList.toggle("locked",!n)}setGun(t,e,n=0,i="glock19"){var r;if(this.nameEl.textContent=t,this.magSize=e,this.evoEl.innerHTML=Hm.repeat(n),this.ammoKind!==i){this.ammoKind=i;const a=fw(i);this.gun.querySelector(".gh-bullets").innerHTML=`<img src="${a}" alt=""><img src="${a}" alt="">`,this.ammoBox.title=((r=Lo[i])==null?void 0:r.caliber)||""}}setAmmo(t){this.ammoEl.textContent=`${t}/${this.magSize}`,this.ammoBox.classList.toggle("low",t<=Math.max(1,Math.round(this.magSize*.2)))}setReload(t,e){this.gun.classList.toggle("reloading",t),this.reloadFill.style.transform=`scaleX(${e})`}setBadge(t){this.badge.style.display=t?"":"none"}setEvo({p:t,ready:e,max:n,current:i,required:r,wait:a,attempts:o}){const l=Math.round(t*100);this.gVal.textContent=n?"MAX":`${i}/${r}`,this.gFill.style.height=`${l}%`;const c=Math.ceil(a/1e3),h=`${Math.floor(c/60)}:${String(c%60).padStart(2,"0")}`;this.gStatus.textContent=a?h:e?`${4-o}/3`:"EVO",this.gauge.disabled=!e,this.gauge.title=n?"Все эволюции пройдены":a?`Повтор через ${h}`:`Эволюция: ${i}/${r}. Осталось попыток: ${o}`,this.gauge.setAttribute("aria-label",this.gauge.title),this.gTrack.setAttribute("aria-valuemin","0"),this.gTrack.setAttribute("aria-valuemax",String(r||1)),this.gTrack.setAttribute("aria-valuenow",String(n?1:i)),this.evoReady=e,this.gauge.classList.toggle("ready",e),this.gauge.classList.toggle("max",n),this.gauge.classList.toggle("cooldown",a>0)}setTarget(){}setHp(t,e,n=!1){this.hpUI.set(t,e,n)}setCombo(t){if(t===this.shownCombo)return;const e=t>this.shownCombo;this.shownCombo=t,this.comboEl.classList.toggle("on",t>0),t&&(this.comboText.textContent=`×${t.toFixed(2)}`,this.comboEl.classList.toggle("hot",t>=1.5),e&&(this.comboEl.classList.remove("bump"),this.comboEl.offsetWidth,this.comboEl.classList.add("bump")))}setReward(t){const e=t==null?"crate":ye(t);e!==this.shownReward&&(this.shownReward=e,this.rewardIcon.innerHTML=t==null?"📦":ju,this.rewardText.textContent=t==null?"ящик":e)}setHpVisible(t){this.hpOn!==t&&(this.hpOn=t,this.target.classList.toggle("hp-off",!t))}tick(t){this.hpUI.tick(t)}place(t){this.gauge.style.transform=`translate(${t.gaugeX}px, ${t.gaugeY}px)`,this.gun.style.transform=`translate(${t.chipX}px, ${t.chipY}px)`,this.target.style.transform=`translate(${t.hpX}px, ${t.hpY}px) translate(-50%, -100%)`,this.lock.style.transform=`translate(${t.lockX}px, ${t.lockY}px) translate(-50%, calc(var(--k) * -44px))`,this.empty.style.transform=`translate(${t.lockX}px, ${t.lockY}px) translate(-50%, -50%)`,this.comboEl.style.transform=`translate(${t.comboX}px, ${t.comboY}px) translate(-50%, -100%)`}}const Zt={black:Fe("#262a33",{spec:.28}),rubber:vt("#1f222a",{spec:.05}),tan:ce("#c2a06c",{spec:.14}),glass:vt("#6fd2ff",{spec:.7,gloss:30,sheen:.35,rim:.35}),dot:vt("#ff4030",{emissive:"#ff2a10",emissiveIntensity:2.6,rim:0}),lens:vt("#fff6dc",{emissive:"#ffefc0",emissiveIntensity:1.8,rim:0})};function Mw(){return new je({transparent:!0,depthWrite:!1,blending:En,uniforms:{uColor:{value:new _t().setRGB(2.4,.25,.12)}},vertexShader:`
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
      }`})}let zp=null;function Gm(s,t,e,n=8){const i=new ut;i.add(F(s,t,e,e+6,-n,n,2,Zt.black));for(let r=s+4;r<t-4;r+=9)i.add(F(r,r+4,e+5,e+8.5,-n-.5,n+.5,1,T.groove,1));return i}function Bi(s,t,e=64){const n=e*.62,i=s+(e-n)*.5,r=Gm(i-3,i+n+3,t,7),a=t+8;r.add(F(i,i+n,a,a+5,-10,10,2,Zt.black)),r.add(F(i+3,i+n*.5,a+5,a+9,-8,8,2,T.gunDark));const o=Kt([[-12,0],[12,0],[12,22],[8,27],[-8,27],[-12,22]],3);o.holes.push(Sa([[-8,5],[-8,20],[-5,23],[5,23],[8,20],[8,5]],2));const l=Vt(o,8,1.4,Zt.black);l.rotation.y=Math.PI/2,l.position.set(i+n-7,a+3,0),r.add(l);const c=new Nn({color:"#8ad8eb",transparent:!0,opacity:.22,depthWrite:!1,side:Zn}),h=new W(new hn(15,19),c);h.rotation.y=Math.PI/2,h.position.set(i+n-7,a+17,0),r.add(h);const u=new W(new vc(.85,12),Zt.dot);return u.rotation.y=-Math.PI/2,u.position.set(i+n-11.1,a+17,0),r.add(u),r.add(ze(i+10,a+4,2.2,1.5,T.barrel,10.5,12)),r}function Cd(s,t,e,n=0){const i=new ut;i.add(Q(s,s+t,e,Zt.black,n));for(const r of[.2,.5,.8])i.add(Q(s+t*r-3,s+t*r+3,e+1.2,Zt.tan,n));return i.add(Q(s+t-5,s+t+1,e-2.5,Zt.black,n)),i.add(Q(s+t+.5,s+t+1.7,e*.35,T.dark,n)),i}function Ho(s,t,e,n){const i=new ut,r=n-e,a=(e+n)/2;i.add(F(s,t,e,n,-12,12,6,Zt.black)),i.add(Q(t-3,t+4,r*.42,Zt.black,a+2)),i.add(Q(t+3.6,t+4.8,r*.3,Zt.lens,a+2));const o=new W(new Ke(2.4,10,8),Zt.dot);o.position.set(t+2,e+4,10),i.add(o),zp??(zp=Mw());const l=new hn(900,3);l.translate(450,0,0);const c=new W(l,zp);return c.position.set(t+3,e+4,10),c.renderOrder=5,c.userData.noBounds=!0,i.add(c),i}function Wm(s,t,e,n){const i=new ut;i.add(F(s-4,t+4,e-8,e+2,-11,11,4,Zt.black)),i.add(F(s,t,n,e-4,-11,11,10,Zt.tan));for(let r=n+12;r<e-12;r+=14)i.add(F(s-.8,s+4,r,r+6,-11.5,11.5,2,Zt.rubber,2));return i}function Sc(s,t,e=1){const n=new ut;return n.add(Q(s-135,s+4,9,Zt.black,t-11)),n.add(Vt(Kt([[s-70,t,6],[s-176,t+4,8],[s-184,t-6,6],[s-184,t-84,8],[s-168,t-90,10],[s-120,t-36,14],[s-74,t-22,8]]),30,7,Zt.tan)),n.add(F(s-197,s-183,t-91,t+6,-15,15,5,Zt.rubber)),n.add(F(s-150,s-100,t+2,t+12,-12,12,5,Zt.black)),e!==1&&(n.position.set(s*(1-e),t*(1-e),0),n.scale.set(e,e,1)),n}function ww(s,t){return Vt(Kt([[s,t,4],[s+28,t,4],[s+16,t-78,9],[s-14,t-72,9]]),30,6,Zt.tan)}function $m(s,t,e,n=0){const i=new ut;i.add(Q(s,s+t,e,Zt.black,n));for(let r=0;r<3;r++){const a=s+7+r*((t-14)/2);i.add(F(a-3,a+3,n-e*.55,n+e*.55,e-3,e+.8,2,T.dark,2))}return i.add(Q(s+t-.6,s+t+.6,e*.4,T.dark,n)),i}const wh=new Map;function Sw(s,t){const e=`${s.uuid}|${t}`;if(!wh.has(e)){const n=new _t(mi[t].color),i=s===Zt.tan?ce(`#${n.getHexString()}`,{spec:.22}):Fe(`#${new _t(s.color).lerp(n,.32).getHexString()}`,{spec:.32,rim:.2});t>=3&&(i.emissive.copy(n),i.emissiveIntensity=s===Zt.tan?.18:.08),wh.set(e,i)}return wh.get(e)}function yo(s,t={}){for(const e of s.evoParts){const n=t[e.userData.kind]||0;e.traverse(i=>{var a;if(!i.isMesh)return;(a=i.userData).stockMat??(a.stockMat=i.material);const r=i.userData.stockMat;i.material=n>0&&(r===Zt.tan||r===Zt.black)?Sw(r,n):r})}}const Ew=40,Tw=new b(-.316,-.949,0),Fp=new b(28,-112,0),Aw=new b(22,-128,0),Cw={scale:.55,rings:0,bubble:!1,smoke:6};function Rw(s,t,e,n,i){const r=[],a=[];for(let o=0;o<=12;o++){const l=o/12,c=1-l,h=c*c*s[0]+2*c*l*t[0]+l*l*e[0],u=c*c*s[1]+2*c*l*t[1]+l*l*e[1],f=2*c*(t[0]-s[0])+2*l*(e[0]-t[0]),p=2*c*(t[1]-s[1])+2*l*(e[1]-t[1]),g=Math.hypot(f,p)||1,v=(n+(i-n)*l)/2;r.push(new et(h+-p/g*v,u+f/g*v)),a.push(new et(h- -p/g*v,u-f/g*v))}return new ls([...r,...a.reverse()])}function Pw(){const s=new ut;s.add(Vt(Kt([[-2,-16,3],[227,-16,4],[227,24,10],[-2,24,7]]),30,5,T.slide)),s.add(F(101,143,2,19,11,15.6,3,T.dark));for(const[t,e]of[[20,29],[34,42],[47,55],[60,69]])for(const n of[1,-1])s.add(F(t,e,-12,19,n>0?12:-15.6,n>0?15.6:-12,2.5,T.groove,2));return s.add(F(13,37,21,33,-7,7,3.5,T.slide)),s.add(F(199,214,21,32,-5,5,3,T.slide)),s}function Lw(){const s=new ut;s.position.set(225,0,0);const t=new ut;t.position.set(-225,0,0),s.add(t),t.add(Q(110,224,10,T.barrel)),t.add(F(104,150,-6,14,-10,10,4,T.barrel)),t.add(Q(222,238,13,T.barrel));const e=Q(237.4,238.6,6.5,T.dark);return e.castShadow=!1,t.add(e),s}function Dw(){const s=Kt([[-8,-16,2],[226,-16,2],[227,-44,7],[168,-44,6],[168,-92,11],[80,-92,4],[68,-146,8],[-19,-146,8],[23,-48,13],[-8,-33,8]]);return s.holes.push(Sa([[100,-50],[156,-50],[156,-82],[100,-82]],9)),s}function kw(s){const t=new ut;t.add(Vt(Kt([[26,-58],[80,-58],[51,-146],[-3,-146]],4),26,3,T.mag)),s?(t.add(Vt(Kt([[-3,-146],[51,-146],[38.4,-186],[-15.6,-186]],4),26,3,T.mag)),t.add(F(-15,47,-195,-184,-16.5,16.5,4,T.mag)),t.add(F(-19,53,-207,-192,-18,18,6,T.orange))):(t.add(F(-2,60,-155,-144,-16.5,16.5,4,T.mag)),t.add(F(-6,66,-167,-152,-18,18,6,T.mag)));const e=F(30,74,-62,-55,-10,10,3,T.orange);t.add(e);const n=zi("pistol");n.position.set(32,-48,0),t.add(n);const i=r=>{n.visible=r,e.visible=!r};return i(!0),{g:t,setLoaded:i}}class Iw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.03,hold:.012,fwd:.06,ejectAt:.024,lockOnEmpty:!0},recoil:{kick:[6.5,8],push:[2.8,3.4],roll:1.5,squash:1},pose:{tilt:.2,yaw:.25,roll:.5,lift:.6},reload:"mag",magOut:36,magIn:42,dropSize:.24,casing:"pistol",eject:{side:[1.6,2.6],up:[5,6.5],back:[.3,1]},blast:{scale:1,smoke:3,rings:1,bubble:!0},pellet:1,impact:1,rack:1,ammo:"pistol"},this.magAxis.copy(Tw),this.magCenter.copy(Fp),this.inset=50;const t=this.model;t.add(Vt(Dw(),32,4.5,T.frame)),t.add(Vt(Kt([[26,-60],[76,-64],[60,-136],[-10,-136]],10),34,2.5,T.frame)),this.slideStop=F(117,137,-34,-18,13,17.4,3,T.frame),t.add(this.slideStop),this.trigger=new ut,this.trigger.position.set(112,-50,0),this.trigger.add(Vt(Rw([0,2],[-14,-12],[3,-28],9,6),9,2.5,T.frame)),t.add(this.trigger),this.barrel=Lw(),this.barrelInner=this.barrel.children[0],t.add(this.barrel),this.slide=Pw(),t.add(this.slide),this.muzzleAnchor.position.set(241,0,0),this.portAnchor.position.set(122,12,16),this.finish(new b(38,-78,0)),this.setAction(0)}buildMag(){const t=this.kit.has("mag");this.magCenter.copy(t?Aw:Fp);const{g:e,setLoaded:n}=kw(t);return this.wrapMag(e,n)}kitPart(t){switch(t){case"optic":return{add:Bi(44,24,56),parent:this.slide};case"laser":return{add:Ho(170,224,-68,-46)};case"suppressor":return{add:Cd(236,150,17),parent:this.barrelInner,muzzle:390,blast:Cw};case"stock":return{add:Sc(-6,-18,.8)}}return null}setAction(t){const e=t*Ew;this.slide.position.x=-e;const n=Je.smoothstep(e,4,14);this.barrel.position.x=225-Math.min(e,5),this.barrel.rotation.z=n*.05,this.barrel.position.y=-n*1.2}setTrigger(t){this.trigger.rotation.z=-.35*t}setHold(t){this.slideStop.position.y=-26+t*3}}const Op=-16,vs=44,$i=114,to=31,ac=18,oa=Math.PI/3,Bp=-46,Uw=1.15,Hp=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,Vp=(s,t,e)=>Math.min(1,Math.max(0,(s-t)/(e-t)));function oo(...s){const t=new ut;return t.add(...s),t}function Nw(){const s=new ut,t=[];for(let i=0;i<6;i++){const r=i*oa,a=zi("pistol");a.scale.setScalar(.92),a.position.set(-70/2-2,Math.cos(r)*ac,Math.sin(r)*ac),s.add(a),t.push(a.children[1])}const e=oo(Q(-70/2-12,-70/2-4,24,Zt.black),Q(-70/2-26,-70/2-11,11,Zt.black));s.add(e);const n=i=>{for(const r of t)r.visible=i;e.visible=i};return n(!0),{g:s,setLoaded:n}}class zw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.07,hold:0,fwd:.05,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[9,11.5],push:[3.6,4.6],roll:1.6,squash:1.3},pose:{tilt:.42,yaw:.3,roll:.55,lift:.55},reload:"mag",magOut:64,magIn:80,dropSize:.12,casing:null,eject:{side:[1.4,2.4],up:[4,5.5],back:[.4,1.2]},blast:{scale:1.35,smoke:5,rings:1,bubble:!0},pellet:1.15,impact:1.3,rack:1.4,ammo:"pistol"},this.inset=46;const t=this.model,e=Kt([[-6,-24,8],[vs-6,-24,4],[vs-6,-58,6],[$i+30,-58,6],[$i+30,26,8],[10,26,10],[-6,6,8]]);e.holes.push(Sa([[vs-4,16],[$i+4,16],[$i+4,-48],[vs-4,-48]],8)),t.add(Vt(e,30,4,T.gunmetal)),t.add(F(4,vs-10,-20,18,13,16.5,4,T.gunDark)),t.add(Ea(16,-6,4,16.4,T.gunmetal)),t.add(Ea(30,8,4,16.4,T.gunmetal)),t.add(F(30,$i+26,20,30,-8,8,4,T.gunDark)),t.add(F(14,30,20,34,-6,6,3,T.gunDark)),t.add(Q($i+26,268,13,T.gunmetal)),t.add(F($i+26,262,-30,-4,-10,10,7,T.gunmetal)),t.add(F(244,262,10,27,-3.5,3.5,2.5,T.orange)),this.crown=oo(Q(264,272,14.5,T.gunmetal),Q(271.4,272.6,6.5,T.dark)),this.crown.children[1].castShadow=!1,t.add(this.crown),this.crane=new ut,this.crane.position.set((vs+$i)/2,Bp,0),t.add(this.crane),this.cyl=new ut,this.cyl.position.set(0,Op-Bp,0),this.crane.add(this.cyl);const n=$i-vs;this.cyl.add(Q(-n/2,n/2,to,T.uzi,0,0,36));for(let r=0;r<6;r++){const a=r*oa+oa/2,o=F(-n/2+12,n/2-12,-5,5,-3,3,2.5,T.uziDark);o.position.set(0,Math.cos(a)*(to-1),Math.sin(a)*(to-1)),o.rotation.x=a,this.cyl.add(o);const l=r*oa,c=Q(n/2-.6,n/2+.6,7,T.dark,Math.cos(l)*ac,Math.sin(l)*ac,16);c.castShadow=!1,this.cyl.add(c)}this.cyl.add(Q(n/2,n/2+6,9,T.gunmetal)),this.crane.add(F(-n/2+6,n/2+10,-6,8,-9,9,4,T.gunDark)),this.cyl.add(this.magSlot),this.magAxis.set(-1,0,0),this.magCenter.set(0,0,0),this.hammer=new ut,this.hammer.position.set(4,8,0),this.hammer.add(Vt(Kt([[-4,-10,4],[8,-6,3],[6,18,4],[-14,30,5],[-24,26,4],[-12,10,3]]),10,2.2,T.gunDark)),t.add(this.hammer),t.add(Vt(Kt([[-4,-16,6],[40,-22,10],[34,-70,14],[24,-126,12],[-36,-126,12],[-30,-70,14],[-18,-28,8]]),34,6,T.wood)),t.add(F(-38,26,-136,-122,-15,15,6,T.gunDark)),t.add(F(-12,16,-70,-40,16,18.6,6,T.woodDark));const i=Kt([[40,-40,6],[90,-40,3],[90,-84,14],[44,-84,12]]);i.holes.push(Sa([[46,-46],[84,-46],[84,-76],[50,-76]],9)),t.add(Vt(i,14,2,T.gunmetal)),this.trig=new ut,this.trig.position.set(62,-44,0),this.trig.add(Vt(Kt([[-3,2,2],[4,2,2],[6,-16,4],[-2,-28,3],[-6,-24,3],[-2,-12,2]]),8,2,T.gunDark)),t.add(this.trig),this.muzzleAnchor.position.set(274,0,0),this.portAnchor.position.set(vs-10,Op,18),this.cylBase=0,this.prevT=0,this.falling=!1,this.finish(new b(10,-72,0))}buildMag(){const{g:t,setLoaded:e}=Nw();return this.wrapMag(t,e)}kitPart(t){switch(t){case"optic":return{add:Bi(40,30,74)};case"loader":{const e=oo(F(-30,18,-112,-84,17,23,5,Zt.black));for(let n=0;n<6;n++)e.add(ze(-20+n%3*13,-92-Math.floor(n/3)*12,4.4,2.4,T.brass,24.2,14));return{add:e}}case"comp":return{add:$m(270,30,16),muzzle:302,blast:{scale:1.55,smoke:6}};case"engraved":{const e=$i-vs;return{add:oo(Q(-e/2+2,-e/2+9,to+1.4,T.yellow),Q(e/2-9,e/2-2,to+1.4,T.yellow)),parent:this.cyl}}case"barrel":return{add:oo(Q(268,322,13,T.gunmetal),F(268,316,-30,-4,-10,10,7,T.gunmetal),F(298,316,10,27,-3.5,3.5,2.5,T.orange)),hide:[this.crown],muzzle:324}}return null}setAction(t){this.hammer.rotation.z=t*.75,t>this.prevT?(this.falling=!1,this.cyl.rotation.x=this.cylBase+t*oa):t<this.prevT&&!this.falling&&(this.falling=!0,this.cylBase+=this.prevT*oa,this.cyl.rotation.x=this.cylBase),this.prevT=t}setTrigger(t){this.trig.rotation.z=-.35*t}reloadPhase(t){const e=t<0?0:Hp(Vp(t,.03,.12))*(1-Hp(Vp(t,.62,.72)));this.crane.rotation.x=e*Uw}}const Ue={fuel:ce("#e8384d",{spec:.25}),fuelCap:Fe("#3a3f4d"),pilot:vt("#8fe3ff",{emissive:"#3fb6ff",emissiveIntensity:2.4,rim:0}),ice:ce("#e4eef8",{spec:.3,gloss:18}),iceBlue:ce("#56baff",{spec:.3}),glow:vt("#9ff0ff",{emissive:"#4fd8ff",emissiveIntensity:1.8,rim:0}),glass:vt("#bfe9ff",{transparent:!0,opacity:.45,spec:.8,gloss:30,rim:.4})};function me(...s){const t=new ut;return t.add(...s),t}function Ui(s,t,e,n){const i=new W(new Fi(t,e,10,28),n);return i.rotation.y=Math.PI/2,i.position.x=s,i.castShadow=!0,i}function ks(s,t){const e=new ut;return e.position.set(s,t,0),e.add(Vt(Kt([[-3,2,2],[4,2,2],[6,-14,4],[-2,-24,3],[-6,-20,3],[-2,-10,2]]),8,2,T.gunDark)),e}function Is(s,t,e,n,i){const r=Kt([[s,n,6],[t,n,3],[t,e,12],[s+4,e,10]]);return r.holes.push(Sa([[s+6,n-6],[t-6,n-6],[t-6,e+8],[s+10,e+8]],8)),Vt(r,14,2,i)}class Fw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.01,hold:0,fwd:.01,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[.5,.9],push:[.3,.5],roll:.3,squash:.25},pose:{tilt:.2,yaw:.25,roll:.45,lift:.5},reload:"mag",magOut:30,magIn:52,dropSize:.22,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"fire",scale:.45,smoke:2,rings:0,bubble:!1},pellet:1,impact:.4,rack:0,ammo:"fuel"},this.magAxis.set(0,-1,0),this.magCenter.set(100,-50,0),this.inset=36;const t=this.model;t.add(Vt(Kt([[0,-28,12],[160,-28,8],[168,22,10],[24,26,14],[-6,6,10]]),40,6,T.gunDark)),t.add(F(18,120,12,22,18,21.6,4,T.gunmetal)),t.add(Ea(36,-4,5,21.6,T.gunmetal)),t.add(Ea(104,-4,5,21.6,T.gunmetal)),t.add(Vt(Kt([[18,-24,6],[56,-24,6],[48,-108,10],[6,-108,10]]),34,6,T.rubber)),t.add(Is(52,98,-70,-26,T.gunDark)),this.trig=ks(70,-30),t.add(this.trig),t.add(F(52,150,-34,-24,-16,16,4,T.gunmetal)),t.add(Q(160,332,11,T.gunmetal));for(const n of[196,226,256,286])t.add(Ui(n,13,3.4,T.orange));this.tip=me(Q(330,350,16,T.gunmetal),Q(349.4,350.6,9,T.dark)),this.tip.children[1].castShadow=!1,t.add(this.tip),this.pilot=new W(new Ke(5,14,10),Ue.pilot),this.pilot.position.set(342,-20,0),t.add(F(326,346,-24,-12,-6,6,3,T.gunDark),this.pilot);const e=new W(new Fi(26,5,8,18,Math.PI/2),T.rubber);e.position.set(150,-24,10),e.rotation.z=0,t.add(e),this.muzzleAnchor.position.set(354,0,0),this.portAnchor.position.set(110,0,20),this.finish(new b(34,-66,0))}buildMag(){const t=new ut;return t.add(Q(52,150,24,Ue.fuel,-50)),t.add(Q(46,54,20,Ue.fuelCap,-50)),t.add(Q(148,156,20,Ue.fuelCap,-50)),t.add(Q(92,106,24.6,T.white,-50)),this.wrapMag(t)}kitPart(t){switch(t){case"nozzle":return{add:me(Q(350,362,19,T.orange),Q(361.4,362.6,11,T.dark)),muzzle:366,blast:{scale:.55}};case"tank2":return{add:me(Q(40,140,15,Ue.fuel,40),Q(36,44,12,Ue.fuelCap,40),Q(136,144,12,Ue.fuelCap,40))};case"igniter":return{add:me(F(300,326,-30,-14,-10,10,4,Zt.black),ze(318,-22,4,2,Ue.pilot,10.6))};case"shroud":{const e=me(F(170,322,-16,16,-16,16,6,Zt.black));for(const n of[190,214,238,262,286,306])e.add(F(n-4,n+4,-6,6,15.6,17,2,T.dark));return{add:e}}case"pump":return{add:me(F(110,150,22,46,-12,12,5,T.gunmetal),ze(130,34,9,3,T.white,13),ze(130,34,2,4,T.shell,14))}}return null}setTrigger(t){this.trig.rotation.z=-.3*t}spin(t,e){this.pilot.scale.setScalar((e?1.6:1)*(.82+Math.random()*.32))}}class Ow extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.04,hold:0,fwd:.07,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[5,6.5],push:[2.4,3],roll:1,squash:1},pose:{tilt:.25,yaw:.25,roll:.5,lift:.6},reload:"mag",magOut:34,magIn:50,dropSize:.2,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"frost",scale:.8,smoke:4,rings:1,bubble:!0},pellet:1.1,impact:1,rack:1,ammo:"ice"},this.magAxis.set(0,-1,0),this.magCenter.set(140,-66,0),this.inset=28;const t=this.model;t.add(Vt(Kt([[0,-30,12],[232,-30,10],[236,24,12],[20,28,16],[-4,8,10]]),42,7,Ue.ice)),t.add(F(20,220,-6,4,19,22.6,3,Ue.iceBlue)),t.add(F(-60,8,-24,14,-12,12,8,T.gunDark)),t.add(Vt(Kt([[40,-26,6],[80,-26,6],[70,-110,10],[26,-110,10]]),34,6,T.gunDark)),t.add(Is(76,120,-72,-28,T.gunDark)),this.trig=ks(94,-32),t.add(this.trig),t.add(F(116,164,-40,-26,-18,18,5,T.gunmetal)),t.add(Q(232,330,12,T.gunmetal)),this.coils=[256,282,308].map(n=>Ui(n,16,4,Ue.glow)),t.add(...this.coils),t.add(Q(328,344,17,Ue.iceBlue));const e=Q(343.4,344.6,10,Ue.glow);e.castShadow=!1,t.add(e),this.muzzleAnchor.position.set(348,0,0),this.portAnchor.position.set(150,10,22),this.finish(new b(54,-70,0))}buildMag(){const t=new ut,e=new W(new Ce(20,20,64,24),Ue.glass);e.position.set(140,-74,0);const n=new W(new Ce(14,14,52,20),Ue.glow);n.position.set(140,-76,0),t.add(e,n);for(const i of[-40,-108]){const r=new W(new Ce(22,22,8,24),T.gunmetal);r.position.set(140,i,0),r.castShadow=!0,t.add(r)}return this.wrapMag(t)}kitPart(t){switch(t){case"optic":return{add:Bi(90,28,70)};case"cryotank":{const e=Q(80,196,13,Ue.glass,44);return e.castShadow=!1,{add:me(e,Q(84,192,8,Ue.glow,44),Q(74,82,15,T.gunmetal,44),Q(194,202,15,T.gunmetal,44))}}case"lens":return{add:me(Q(344,352,19,T.gunmetal),Q(351.4,352.6,13,Ue.glow)),muzzle:356};case"bayonet":return{add:Vt(Kt([[300,-14,2],[392,-20,2],[300,-34,3]]),6,1.5,Ue.iceBlue)};case"compressor":return{add:me(F(150,214,26,48,-14,14,6,T.gunmetal),ze(182,37,9,3,T.dark,15))}}return null}setTrigger(t){this.trig.rotation.z=-.3*t,this.pull=t}spin(t){this.clock=(this.clock||0)+t,this.coils.forEach((e,n)=>e.scale.setScalar(1+.05*Math.sin(this.clock*5-n*1.3)+(this.pull||0)*.22))}}const We={tipX:14,tipY:112,nockDrawn:-34,wood:ce("#b35a20"),limb:ce("#2f6fd6",{spec:.3}),string:vt("#f6f0e4",{spec:.1})};function Gp(s){const t=[58,46*s],e=[84,92*s],n=[We.tipX,We.tipY*s],i=[],r=[];for(let a=0;a<=12;a++){const o=a/12,l=1-o,c=l*l*t[0]+2*l*o*e[0]+o*o*n[0],h=l*l*t[1]+2*l*o*e[1]+o*o*n[1],u=2*l*(e[0]-t[0])+2*o*(n[0]-e[0]),f=2*l*(e[1]-t[1])+2*o*(n[1]-e[1]),p=Math.hypot(u,f)||1,g=(16-9*o)/2;i.push(new et(c+-f/p*g,h+u/p*g)),r.push(new et(c- -f/p*g,h-u/p*g))}return Vt(new ls([...i,...r.reverse()]),12,2.5,We.limb)}class Bw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.05,hold:.22,fwd:.16,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[2,3],push:[1,1.5],roll:.8,squash:.6},pose:{tilt:.15,yaw:.25,roll:.4,lift:.4},reload:"mag",magOut:30,magIn:52,dropSize:.2,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"string",scale:.25,smoke:1,rings:0,bubble:!1},pellet:1,impact:.9,rack:0,ammo:"arrow"},this.magAxis.set(0,-1,0),this.magCenter.set(92,-70,0),this.inset=60;const t=this.model;t.add(Vt(Kt([[42,-56,8],[72,-56,8],[76,56,8],[46,56,8],[52,8,4],[52,-8,4]]),22,4,We.wood)),t.add(F(44,70,-26,4,-12.5,12.5,5,T.rubber)),t.add(Gp(1),Gp(-1)),this.strings=[1,-1].map(()=>{const e=new W(new Ce(1.3,1.3,1,6),We.string);return t.add(e),e}),this.arrow=me(Q(We.nockDrawn,200,3,We.wood),Vt(Kt([[198,7,1],[232,0,1],[198,-7,1]]),4,1,T.gunmetal),F(We.nockDrawn,We.nockDrawn+26,2,12,-1.5,1.5,1,T.orange),F(We.nockDrawn,We.nockDrawn+26,-12,-2,-1.5,1.5,1,T.orange)),t.add(this.arrow),this.setString(We.nockDrawn),this.prevS=0,this.drawing=!0,this.loose=0,this.muzzleAnchor.position.set(234,0,0),this.portAnchor.position.set(60,0,14),this.finish(new b(58,-12,0))}setString(t){this.strings.forEach((e,n)=>{const i=n?-1:1,r=new et(We.tipX,We.tipY*i),a=new et(t,0),o=r.distanceTo(a);e.scale.set(1,o,1),e.position.set((r.x+a.x)/2,(r.y+a.y)/2,0),e.rotation.z=Math.atan2(a.y-r.y,a.x-r.x)-Math.PI/2})}buildMag(){const t=this.kit.has("quiver"),e=new ut,n=t?84:64,i=new W(new Ce(12,10,n,16),We.wood);i.position.set(92,-70,0),i.castShadow=!0,e.add(i);for(let r=0;r<(t?4:3);r++)e.add(F(84+r*6,90+r*6,-70+n/2,-70+n/2+14,-2,2,1,T.orange));return this.wrapMag(e)}kitPart(t){switch(t){case"optic":return{add:me(F(72,92,18,34,-5,5,3,Zt.black),ze(86,26,2.5,3,Zt.dot,5.5))};case"stabilizer":return{add:me(Q(74,150,3.5,Zt.black,-34),Q(146,162,8,Zt.black,-34))};case"cams":return{add:me(ze(We.tipX,We.tipY,11,8,T.gunmetal),ze(We.tipX,-112,11,8,T.gunmetal))};case"firetips":return{add:me(Vt(Kt([[196,9,1],[236,0,1],[196,-9,1]]),5,1,Ue.pilot)),parent:this.arrow,muzzle:238}}return null}setAction(t){t<=0||t<this.prevS?this.drawing=!0:t>this.prevS&&t>.1&&(this.drawing=!1),this.prevS=t;const e=We.tipX+2;let n=We.nockDrawn+(e-We.nockDrawn)*t;if(this.drawing)this.loose=0;else{this.loose||(this.loose=performance.now());const i=(performance.now()-this.loose)/1e3;n+=Math.sin(i*75)*7*Math.exp(-i*9)*t}this.arrow.visible=this.drawing,this.arrow.position.x=n-We.nockDrawn,this.setString(n)}}class Hw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.08,hold:.02,fwd:.1,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[10,12],push:[5,6],roll:2,squash:1.4},pose:{tilt:.3,yaw:.25,roll:.6,lift:.55},reload:"mag",magOut:40,magIn:62,dropSize:.3,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{scale:1.6,smoke:7,rings:2,bubble:!0},pellet:1.2,impact:1.5,rack:1,ammo:"grenade"},this.magAxis.set(0,-1,0),this.magCenter.set(70,-14,0),this.inset=34,this.drumBase=0,this.prevT=0,this.falling=!1;const t=this.model;t.add(Vt(Kt([[-12,-34,10],[32,-34,6],[32,30,6],[0,30,10],[-12,14,8]]),40,6,T.olive)),t.add(F(108,148,-44,30,-20,20,8,T.olive)),t.add(F(28,112,22,32,-10,10,4,T.oliveDark)),t.add(Q(146,300,22,T.gunmetal)),t.add(Q(296,308,25,T.orange));const e=Q(307.4,308.6,15,T.dark);e.castShadow=!1,t.add(e),t.add(F(156,170,22,44,-4,4,2,T.gunDark)),t.add(Vt(Kt([[0,-30,6],[34,-30,6],[26,-106,10],[-10,-106,10]]),32,6,T.rubber)),t.add(F(-96,-10,-18,2,-8,8,5,T.gunDark)),t.add(F(-104,-86,-64,6,-10,10,6,T.gunDark)),t.add(Is(28,76,-76,-32,T.gunDark)),this.trig=ks(48,-36),t.add(this.trig),this.muzzleAnchor.position.set(310,0,0),this.portAnchor.position.set(70,0,26),this.finish(new b(16,-66,0))}buildMag(){const t=this.kit.has("drum"),e=t?9:6,n=t?40:36,i=t?27:24,r=new ut;r.add(Q(32,108,n,T.oliveDark,-14,0,28));for(let a=0;a<e;a++){const o=a/e*Math.PI*2,l=new W(new Ke(8,12,8),T.orange);l.position.set(108,-14+Math.cos(o)*i,Math.sin(o)*i),l.scale.set(.6,1,1),r.add(l)}return r.add(Q(108,114,9,T.gunmetal,-14)),this.wrapMag(r)}kitPart(t){switch(t){case"optic":return{add:Bi(150,22,70)};case"sticky":return{add:me(Q(190,202,23,T.yellow),Q(240,252,23,T.yellow))};case"shroud":{const e=me(F(160,290,12,30,-16,16,6,Zt.black));for(const n of[176,204,232,260])e.add(F(n-5,n+5,28.6,31,-6,6,2,T.dark));return{add:e}}case"cluster":{const e=new ut;for(let n=0;n<4;n++){const i=new W(new Ke(9,12,8),T.orange);i.position.set(-90+n*20,-30,12),i.castShadow=!0,e.add(i)}return{add:e}}}return null}setAction(t){const e=Math.PI*2/(this.kit.has("drum")?9:6),n=this.mag;n&&(t>this.prevT?(this.falling=!1,n.rotation.x=this.drumBase+t*e):t<this.prevT&&!this.falling&&(this.falling=!0,this.drumBase+=this.prevT*e,n.rotation.x=this.drumBase),this.prevT=t)}setTrigger(t){this.trig.rotation.z=-.3*t}}const Sh=ce("#c97a3a",{spec:.4,gloss:20}),Wp=ce("#9a5a28",{spec:.3});class Vw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.03,hold:0,fwd:.05,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[3,4],push:[1.5,2],roll:.8,squash:.8},pose:{tilt:.25,yaw:.25,roll:.5,lift:.6},reload:"mag",magOut:30,magIn:50,dropSize:.22,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"spark",scale:.7,smoke:2,rings:1,bubble:!1},pellet:.9,impact:.8,rack:1,ammo:"cell"},this.magAxis.set(0,-1,0),this.magCenter.set(106,-50,0),this.inset=32;const t=this.model;t.add(Vt(Kt([[0,-30,12],[176,-30,10],[180,26,12],[22,30,14],[-6,8,10]]),42,7,Sh));for(const n of[40,140])t.add(F(n-6,n+6,-31,31,-22,22,3,Wp));t.add(Vt(Kt([[18,-26,6],[56,-26,6],[48,-108,10],[6,-108,10]]),34,6,T.rubber)),t.add(Is(54,100,-72,-28,T.gunDark)),this.trig=ks(72,-32),t.add(this.trig),t.add(Q(176,296,8,T.gunmetal)),this.turns=[];for(let n=188;n<=272;n+=12){const i=Ui(n,15,4.5,Sh);this.turns.push(i),t.add(i)}for(const n of[12,-12]){t.add(Q(280,320,3.5,T.gunmetal,n));const i=new W(new Ke(5,12,8),Ue.glow);i.position.set(322,n,0),t.add(i)}const e=new W(new Ke(22,20,14),Ue.glass);e.position.set(96,52,0),this.core=new W(new Ke(10,16,10),Ue.glow),this.core.position.copy(e.position),t.add(F(80,112,26,34,-12,12,4,T.gunmetal),e,this.core),this.muzzleAnchor.position.set(324,0,0),this.portAnchor.position.set(120,0,22),this.finish(new b(34,-64,0))}buildMag(){const t=this.kit.has("battery"),e=new ut;return e.add(F(72,t?156:140,-70,-32,-16,16,6,T.gunDark)),e.add(F(90,120,-60,-42,15.6,17,2,T.yellow)),this.wrapMag(e)}kitPart(t){switch(t){case"coil":{const e=new ut;for(let n=194;n<=266;n+=24)e.add(Ui(n,19,2.5,Ue.glow));return{add:e}}case"arrester":return{add:me(F(150,176,26,40,-10,10,4,T.gunmetal),ze(163,33,4,2,Ue.glow,10.6))};case"rod":{const e=new W(new Ke(6,12,8),Sh);return e.position.set(15,96,0),{add:me(F(12,18,28,92,-3,3,2,T.gunmetal),e)}}case"generator":return{add:me(F(60,110,-20,14,21,30,5,T.gunmetal),ze(85,-3,10,3,Wp,31))}}return null}setTrigger(t){this.trig.rotation.z=-.3*t,this.pull=t}spin(t){this.clock=(this.clock||0)+t;const e=this.clock,n=this.pull||0;this.core.scale.setScalar(1+.12*Math.sin(e*23)*Math.sin(e*7.3)+n*.6),this.turns.forEach((i,r)=>i.scale.setScalar(1+.04*Math.max(0,Math.sin(e*6-r*.7))+n*.25*Math.max(0,Math.sin(e*30-r*.9))))}}const oe={red:ce("#d8343f",{spec:.3}),chrome:Fe("#c9d2e0",{spec:.6,gloss:34}),alu:Fe("#b9c1cf",{spec:.5,gloss:28}),laser:vt("#ff7a6a",{emissive:"#ff2a1a",emissiveIntensity:2.4,rim:0}),tool:ce("#f2b134",{spec:.25}),cyan:vt("#a8f6ff",{emissive:"#36d6ff",emissiveIntensity:2.2,rim:0}),glass:vt("#cfefff",{transparent:!0,opacity:.4,spec:.8,gloss:30,rim:.4}),steel:Fe("#8a93a3",{spec:.5,gloss:30})};function Vo(s,t,e,n=T.rubber){return Vt(Kt([[s,e,6],[t,e,6],[t-8,e-86,10],[s-10,e-86,10]]),32,6,n)}class Gw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.03,hold:0,fwd:.05,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[2,3],push:[1,1.6],roll:.6,squash:.7},pose:{tilt:.25,yaw:.25,roll:.5,lift:.5},reload:"mag",magOut:160,magIn:170,dropSize:.1,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{scale:.35,smoke:1,rings:0,bubble:!1},pellet:1,impact:.6,rack:0,ammo:"staple"},this.magAxis.set(-1,0,0),this.magCenter.set(150,29,0),this.inset=40;const t=this.model;t.add(F(-4,262,-34,-20,-17,17,6,T.gunDark)),t.add(F(232,262,-24,-16,-14,14,3,oe.chrome)),t.add(ze(4,-12,9,30,oe.chrome)),t.add(Vo(20,60,-28)),t.add(Is(58,102,-70,-32,T.gunDark)),this.trig=ks(76,-36),t.add(this.trig),this.arm=new ut,this.arm.position.set(4,-12,0),this.armIn=new ut,this.armIn.position.set(-4,12,0),this.arm.add(this.armIn),t.add(this.arm);const e=this.armIn;e.add(Vt(Kt([[0,-8,6],[262,-8,8],[272,8,10],[258,22,12],[10,22,10],[-6,8,8]]),34,6,oe.red)),e.add(F(266,286,-8,8,-10,10,4,oe.chrome));const n=Q(285.4,286.6,5,T.dark);n.castShadow=!1,e.add(n),e.add(F(40,250,21,25,-11,11,2,oe.chrome)),e.add(F(110,176,0,14,16.6,18.2,2,T.white)),e.add(this.magSlot),this.muzzleAnchor.position.set(288,0,0),this.portAnchor.position.set(140,20,18),this.finish(new b(36,-70,0))}buildMag(){const e=this.kit.has("clip")?60:90,n=238,i=new ut;i.add(F(e,n,25,33,-8,8,2,oe.steel));for(let r=e+6;r<n;r+=8)i.add(F(r-.6,r+.6,24.8,33.2,-8.2,8.2,.3,T.gunmetal));return this.wrapMag(i)}kitPart(t){switch(t){case"optic":return{add:Bi(8,23,46),parent:this.armIn};case"spring":{const e=new ut;for(let n=0;n<5;n++){const i=new W(new Fi(8,2.2,6,16),oe.chrome);i.rotation.x=Math.PI/2,i.position.set(34,-18+n*5,0),e.add(i)}return{add:e}}case"brace":return{add:me(F(-92,-4,-10,-4,-3,3,2,Zt.black),F(-98,-86,-62,-4,-4,4,3,Zt.black),F(-92,-4,-62,-56,-3,3,2,Zt.black))};case"motor":return{add:me(F(96,156,-34,-6,17,32,6,T.gunmetal),ze(126,-20,9,3,oe.chrome,33),F(100,108,-30,-10,32,34,1,T.orange))}}return null}setAction(t){this.arm.rotation.z=-.07*t}setTrigger(t){this.trig.rotation.z=-.3*t}}class Ww extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.01,hold:0,fwd:.01,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[.3,.5],push:[.2,.3],roll:.2,squash:.15},pose:{tilt:.25,yaw:.25,roll:.5,lift:.5},reload:"mag",magOut:30,magIn:50,dropSize:.2,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"laser",scale:.3,smoke:0,rings:0,bubble:!1},pellet:1,impact:.3,rack:0,ammo:"cell"},this.magAxis.set(0,-1,0),this.magCenter.set(150,-36,0),this.inset=30,this.clock=0;const t=this.model;t.add(Q(0,250,19,oe.alu)),t.add(Q(-12,4,16,T.gunDark));for(const e of[20,31,42,53,64])t.add(Ui(e,19.4,2,T.gunDark));for(const e of[176,188,200,212,224])t.add(Ui(e,24,3.2,oe.alu));t.add(Q(244,280,24,T.gunmetal)),t.add(Ui(280,21,3,oe.chrome)),this.lens=Q(279.4,282,15,oe.laser),this.lens.castShadow=!1,t.add(this.lens),this.button=new W(new Ce(7,7,8,16),oe.laser),this.button.position.set(112,22,0),t.add(this.button,F(104,120,17,20,-9,9,2,T.gunDark)),t.add(F(124,168,-8,8,18.4,19.8,2,T.yellow)),t.add(Vo(22,60,-14)),t.add(Is(58,100,-62,-20,T.gunDark)),this.trig=ks(74,-24),t.add(this.trig),this.muzzleAnchor.position.set(284,0,0),this.portAnchor.position.set(120,0,20),this.finish(new b(36,-60,0))}buildMag(){const t=this.kit.has("powercell"),e=new ut;return e.add(F(112,t?206:188,-52,-19,-15,15,6,T.gunDark)),e.add(F(128,160,-44,-27,15.4,17,2,T.yellow)),this.wrapMag(e)}kitPart(t){switch(t){case"lens2":{const e=Q(295.4,297,18,oe.laser);return e.castShadow=!1,{add:me(Q(280,296,27,T.gunmetal),e),muzzle:300}}case"radiator":{const e=me(F(150,232,18,34,-10,10,3,oe.alu));for(let n=158;n<230;n+=9)e.add(F(n-1.5,n+1.5,33,42,-9,9,1,oe.alu));return{add:e}}case"prism":{const e=new W(new Co(14,0),oe.glass);e.position.set(250,40,0);const n=new W(new Co(6,0),oe.laser);return n.position.copy(e.position),{add:me(F(240,262,22,28,-6,6,2,T.gunmetal),e,n)}}case"diode":return{add:me(Ui(10,20,3,oe.cyan),Q(-22,-10,11,T.gunmetal))}}return null}setTrigger(t){this.trig.rotation.z=-.3*t,this.button.position.y=22-3*t,this.pull=t}spin(t,e){this.clock+=t;const n=1+(e?.18:.05)*Math.sin(this.clock*(e?40:4));this.lens.scale.set(1,n,n)}}class $w extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.04,hold:.12,fwd:.16,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[6,8],push:[3,4],roll:1.5,squash:1.2},pose:{tilt:.3,yaw:.25,roll:.6,lift:.55},reload:"mag",magOut:34,magIn:54,dropSize:.25,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{scale:.5,smoke:3,rings:0,bubble:!1},pellet:1,impact:1.2,rack:1,ammo:"saw"},this.magAxis.set(0,-1,0),this.magCenter.set(126,-50,0),this.inset=34,this.prevS=0,this.fed=1;const t=this.model;t.add(Vt(Kt([[0,-30,12],[200,-30,10],[212,8,14],[184,34,14],[20,34,14],[-8,6,10]]),44,8,oe.tool));for(const r of[4,12,20])t.add(F(28,92,r-2,r+2,21.6,23,1,T.dark));const e=new W(new Fi(34,7,10,20,Math.PI),T.rubber);e.position.set(84,32,0),t.add(e),t.add(Q(196,252,9,T.gunmetal)),t.add(Vo(20,58,-26)),t.add(Is(56,100,-70,-30,T.gunDark)),this.trig=ks(74,-34),t.add(this.trig);const n=new ls;n.absarc(0,0,55,0,Math.PI,!1),n.absarc(0,0,47,Math.PI,0,!0);const i=Vt(n,34,3,T.gunmetal);i.position.set(252,0,6),t.add(i),this.spinner=new ut,this.spinner.position.set(252,0,12),this.blade=zi("saw"),this.blade.scale.setScalar(1.8),this.blade.position.x=-22*1.8,this.spinner.add(this.blade),t.add(this.spinner,ze(252,0,8,12,oe.chrome,10)),this.muzzleAnchor.position.set(300,0,0),this.portAnchor.position.set(120,10,24),this.finish(new b(34,-68,0))}buildMag(){const t=this.kit.has("blades"),e=new ut,n=t?184:166;e.add(F(84,n,-68,-32,-18,18,6,T.gunDark));for(let i=96;i<n-8;i+=14)e.add(ze(i,-68,12,3,oe.steel,0,16));return this.wrapMag(e)}kitPart(t){switch(t){case"optic":return{add:Bi(64,72,44)};case"motor":return{add:me(Q(-40,2,24,T.gunDark),Ui(-20,24.6,3,T.orange),Ui(-6,24.6,3,T.orange))};case"sawguard":{const e=new ls;e.absarc(0,0,55,Math.PI,Math.PI*2,!1),e.absarc(0,0,47,Math.PI*2,Math.PI,!0);const n=Vt(e,34,3,Zt.black);return n.position.set(252,0,6),{add:n}}case"diamond":return{add:new W(new Fi(41,3,8,36),T.yellow),parent:this.spinner}}return null}setAction(t){t>this.prevS&&t>.1?this.fed=0:(t<this.prevS||t<=0)&&(this.fed=1-t),this.prevS=t,this.spinner.visible=this.fed>.05,this.spinner.scale.setScalar(.4+.6*this.fed)}setTrigger(t){this.trig.rotation.z=-.3*t}spin(t,e){this.spinner.rotation.z-=t*(e?40:7)}}const Mn={tipX:180,tipY:100,nockDrawn:96,rest:186};function $p(s,t){const e=[200,14*s],n=[218,62*s],i=[Mn.tipX,Mn.tipY*s],r=[],a=[];for(let o=0;o<=12;o++){const l=o/12,c=1-l,h=c*c*e[0]+2*c*l*n[0]+l*l*i[0],u=c*c*e[1]+2*c*l*n[1]+l*l*i[1],f=2*c*(n[0]-e[0])+2*l*(i[0]-n[0]),p=2*c*(n[1]-e[1])+2*l*(i[1]-n[1]),g=Math.hypot(f,p)||1,v=(18-10*l)/2;r.push(new et(h+-p/g*v,u+f/g*v)),a.push(new et(h- -p/g*v,u-f/g*v))}return Vt(new ls([...r,...a.reverse()]),14,2.5,t)}class Xw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.05,hold:.22,fwd:.28,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[3,4],push:[2,2.5],roll:1,squash:.8},pose:{tilt:.2,yaw:.25,roll:.5,lift:.5},reload:"mag",magOut:34,magIn:56,dropSize:.2,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"string",scale:.3,smoke:1,rings:0,bubble:!1},pellet:1,impact:1.1,rack:0,ammo:"bolt"},this.magAxis.set(0,1,0),this.magCenter.set(123,32,0),this.inset=46,this.prevS=0,this.drawing=!0,this.loose=0;const t=this.model;t.add(Vt(Kt([[-104,-46,12],[-60,-26,8],[206,-20,6],[210,-8,4],[-60,-6,10],[-108,-12,10]]),30,6,T.woodDark)),t.add(F(56,208,-9,-4,-6,6,2,T.gunmetal)),t.add(F(194,214,-26,-6,-10,10,4,oe.steel),F(194,214,7,20,-10,10,3,oe.steel)),t.add($p(1,T.gunDark),$p(-1,T.gunDark));for(const e of[1,-1])t.add(ze(Mn.tipX,Mn.tipY*e,6,16,T.orange));t.add(Vo(20,56,-22)),t.add(Is(54,96,-64,-24,T.gunDark)),this.trig=ks(70,-28),t.add(this.trig),this.strings=[1,-1].map(()=>{const e=new W(new Ce(1.4,1.4,1,6),vt("#f6f0e4",{spec:.1}));return t.add(e),e}),this.bolt=zi("bolt"),this.bolt.scale.set(1.5,1.4,1.4),this.bolt.position.set(Mn.nockDrawn,0,0),t.add(this.bolt),this.lever=new ut,this.lever.position.set(166,10,13),this.lever.add(F(-6,6,0,64,-2.5,2.5,2,T.gunmetal),ze(0,64,6,10,T.orange)),this.lever.rotation.z=.5,t.add(this.lever),this.setString(Mn.nockDrawn),this.muzzleAnchor.position.set(Mn.nockDrawn+73*1.5+2,0,0),this.portAnchor.position.set(120,10,16),this.finish(new b(38,-60,0))}setString(t){this.strings.forEach((e,n)=>{const i=n?-1:1,r=new et(Mn.tipX,Mn.tipY*i),a=new et(t,0);e.scale.set(1,r.distanceTo(a),1),e.position.set((r.x+a.x)/2,(r.y+a.y)/2,0),e.rotation.z=Math.atan2(a.y-r.y,a.x-r.x)-Math.PI/2})}buildMag(){const t=this.kit.has("boltbox"),e=new ut,n=t?58:48;e.add(F(84,162,16,n,-10,10,4,T.wood));for(let i=22;i<n-4;i+=9){const r=new W(new ts(4,8,4),oe.steel);r.rotation.z=-Math.PI/2,r.position.set(165,i,0),e.add(r)}return this.wrapMag(e)}kitPart(t){switch(t){case"optic":return{add:Bi(-44,-6,54)};case"crank":return{add:me(ze(-78,-22,11,34,T.gunmetal),F(-84,-72,-22,18,17,21,2,T.gunDark),ze(-78,18,5,12,T.orange,24))};case"steelprod":return{add:me(F(190,218,-30,26,-12,12,4,oe.steel),ze(Mn.tipX,Mn.tipY,8,18,oe.steel),ze(Mn.tipX,-100,8,18,oe.steel))};case"stock":return{add:F(-124,-100,-58,-6,-15,15,7,T.rubber)}}return null}setAction(t){t<=0||t<this.prevS?this.drawing=!0:t>this.prevS&&t>.1&&(this.drawing=!1),this.prevS=t;let e=Mn.nockDrawn+(Mn.rest-Mn.nockDrawn)*t;if(this.drawing)this.loose=0;else{this.loose||(this.loose=performance.now());const n=(performance.now()-this.loose)/1e3;e+=Math.sin(n*80)*6*Math.exp(-n*10)*t}this.bolt.visible=this.drawing,this.bolt.position.x=e,this.setString(e),this.lever.rotation.z=.5-1.1*t}setTrigger(t){this.trig.rotation.z=-.3*t}}class qw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.05,hold:.3,fwd:.6,ejectAt:0,lockOnEmpty:!1},recoil:{kick:[12,14],push:[6,7],roll:2.5,squash:1.6},pose:{tilt:.3,yaw:.25,roll:.6,lift:.6},reload:"mag",magOut:34,magIn:56,dropSize:.25,casing:null,eject:{side:[1,2],up:[3,4],back:[0,.5]},blast:{kind:"rail",scale:1.4,smoke:5,rings:2,bubble:!0},pellet:1,impact:1.6,rack:1,ammo:"slug"},this.magAxis.set(0,-1,0),this.magCenter.set(112,-46,0),this.inset=30,this.clock=0;const t=this.model;t.add(Vt(Kt([[-20,-28,10],[182,-28,8],[188,28,8],[0,32,12],[-30,10,10]]),46,7,T.gunDark)),t.add(F(-112,-14,-22,14,-12,12,8,T.gunmetal)),t.add(F(-124,-100,-64,16,-14,14,8,T.rubber)),t.add(Vo(20,56,-26)),t.add(Is(54,98,-70,-30,T.gunDark)),this.trig=ks(70,-34),t.add(this.trig),t.add(F(206,228,-62,-22,-10,10,6,T.rubber));for(const e of[1,-1])t.add(F(176,374,e>0?10:-22,e>0?22:-10,-14,14,3,T.gunmetal)),t.add(F(180,370,e>0?7:-11,e>0?11:-7,-10,10,1,T.copper));this.channel=F(180,370,-3,3,-6,6,1,oe.cyan),this.channel.castShadow=!1,t.add(this.channel);for(const e of[214,262,310,352])t.add(Ui(e,30,4,T.copper));t.add(F(176,196,-30,30,-18,18,4,T.gunmetal)),this.cores=[];for(const e of[16,0,-16]){const n=Q(12,156,7.5,oe.glass,e,26);n.castShadow=!1;const i=Q(16,152,4,oe.cyan,e,26);i.castShadow=!1,t.add(n,i,Q(6,14,8.5,T.gunmetal,e,26),Q(154,162,8.5,T.gunmetal,e,26)),this.cores.push(i)}this.muzzleAnchor.position.set(378,0,0),this.portAnchor.position.set(100,30,22),this.finish(new b(36,-68,0))}buildMag(){const t=this.kit.has("capacitor"),e=new ut;return e.add(F(80,t?152:144,-64,-27,-16,16,6,T.gunmetal)),e.add(F(92,132,-52,-44,15.4,17,2,oe.cyan)),this.wrapMag(e)}kitPart(t){switch(t){case"optic":return{add:me(Q(30,150,10,Zt.black,52),Q(146,156,13,Zt.black,52),F(56,66,30,44,-5,5,2,Zt.black),F(116,126,30,44,-5,5,2,Zt.black))};case"coolant":{const e=Q(-92,-36,11,oe.glass,26,0);return e.castShadow=!1,{add:me(e,Q(-88,-40,7,oe.cyan,26,0),F(-36,20,22,30,-4,4,3,T.gunmetal))}}case"rails":return{add:me(F(374,404,10,22,-14,14,3,T.copper),F(374,404,-22,-10,-14,14,3,T.copper)),muzzle:408};case"core":{const e=new W(new Ke(16,18,12),oe.glass);e.position.set(-60,30,0);const n=new W(new Ke(8,14,10),oe.cyan);return n.position.copy(e.position),{add:me(F(-74,-46,14,18,-8,8,2,T.gunmetal),e,n)}}}return null}setAction(t){for(const e of this.cores)e.scale.x=Math.max(.04,1-t)}setTrigger(t){this.trig.rotation.z=-.3*t}spin(t){this.clock+=t;const e=1+.25*Math.sin(this.clock*9);this.channel.scale.set(1,e,e)}}const Xm={scale:.5,rings:0,bubble:!1,smoke:6};function Do(...s){const t=new ut;return t.add(...s),t}const Yw=s=>1-Math.pow(1-s,3);function Rd(s,t=T.gunDark){const e=new ut,n=[],i=[];for(let r=0;r<=10;r++){const a=r/10,o=-Math.sin(a*Math.PI)*s*.32+a*s*.12,l=2-a*s,c=4.2-a*1.6;n.push(new et(o+c,l)),i.push(new et(o-c,l))}return e.add(Vt(new ls([...n,...i.reverse()]),7,2.2,t)),e}function Pd(s,t,e,n=14){const[i,r,a,o]=s,[l,c,h,u]=t,f=Kt([[i,o,2],[r,o,3],[r,a,9],[i,a,6]]);return f.holes.push(Sa([[l,u],[c,u],[c,h],[l,h]],6)),Vt(f,n,2,e)}class jw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.025,hold:.005,fwd:.04,ejectAt:.02,lockOnEmpty:!1},recoil:{kick:[3,4],push:[1.6,2.2],roll:1.2,squash:.7},pose:{tilt:.18,yaw:.2,roll:.45,lift:.6},reload:"mag",magOut:36,magIn:42,dropSize:.2,casing:"pistol",eject:{side:[1.8,3],up:[3.5,5],back:[.2,1],smoke:.12},blast:{scale:.8,smoke:2,rings:1,bubble:!0},pellet:1,impact:.6,rack:2.5,ammo:"pistol"},this.magAxis.set(0,-1,0),this.magCenter.set(89,-112,0),this.inset=8;const t=this.model;t.add(Vt(Kt([[0,-39,12],[240,-39,10],[240,32,12],[0,32,16]]),44,7,T.uzi)),t.add(F(18,44,26,50,-6,6,6,T.uzi)),t.add(F(200,225,24,46,-6,6,6,T.uzi)),t.add(ze(31,41,3.4,1.2,T.dark,6.2)),t.add(ze(212.5,37,3.2,1.2,T.dark,6.2)),t.add(F(72,116,10,23,18,22.6,3,T.dark)),this.knob=F(75,113,13,20,18,24,2.5,T.uzi),t.add(this.knob),t.add(F(72,153,-6,7,18,22.6,3,T.dark)),t.add(F(78,137,-28,-9,18,25.5,6,T.uzi)),t.add(Ea(40,-11,11,22,T.uzi)),t.add(Ea(183,-11,10,22,T.uzi)),t.add(Q(236,249,17,T.uziDark)),t.add(Q(248,276,13.5,T.gunmetal)),t.add(Q(275.4,276.6,6,T.dark)),this.stockParts=[F(-66,4,-21,14,-12,12,8,T.uziDark),F(-14,3,-17,16,-14,14,4,T.uziGrip),F(-88,-55,-75,16,-14,14,10,T.uziDark),Vt(Kt([[-58,-19],[-38,-19],[-58,-42]],4),22,3,T.uziDark)],t.add(...this.stockParts),t.add(Vt(Kt([[78,-36,4],[124,-36,4],[124,-114,6],[57,-114,6]]),34,6,T.uziGrip)),t.add(F(55,72,-62,-36,-10,10,5,T.uziGrip)),t.add(Pd([122,177,-77,-36],[128,166,-70,-42],T.uzi)),this.trig=Rd(24),this.trig.position.set(142,-40,0),t.add(this.trig),this.muzzleAnchor.position.set(279,0,0),this.portAnchor.position.set(130,16,23),this.finish(new b(95,-75,0))}buildMag(){const t=this.kit.has("mag"),e=t?40:0;this.magCenter.set(89,-112-e/2,0);const n=new ut;return n.add(F(66,112,-150-e,-40,-12,12,4,T.mag)),n.add(F(63,115,-158-e,-147-e,-13.5,13.5,4,t?T.orange:T.mag)),this.wrapMag(n)}kitPart(t){switch(t){case"optic":return{add:Bi(72,32,80)};case"grip":return{add:Do(Wm(196,226,-38,-110),Ho(232,268,-40,-20))};case"suppressor":return{add:Cd(274,150,18),muzzle:428,blast:Xm};case"stock":return{add:Sc(2,14),hide:this.stockParts}}return null}setAction(t){this.knob.position.x=94-t*26}setTrigger(t){this.trig.rotation.z=-.3*t}}class Kw extends _n{constructor(){super(),this.spec={cycle:{delay:.1,back:.11,hold:.04,fwd:.11,ejectAt:.06,lockOnEmpty:!1},recoil:{kick:[6,7.2],push:[4.5,5.5],roll:2,squash:1.2},pose:{tilt:.18,yaw:.15,roll:.6,lift:.3},reload:"tube",casing:"shell",eject:{side:[2,3],up:[4,5.5],back:[.2,.8]},blast:{scale:1.45,smoke:6,rings:2,bubble:!0},pellet:.55,impact:.45,rack:1.3,ammo:"shell"},this.inset=30;const t=this.model;t.add(Vt(Kt([[0,-46,6],[153,-46,6],[153,16,6],[22,16,10],[0,2,6]]),36,6,T.gunDark)),t.add(F(82,130,-13,11,14,18.6,4,T.dark)),this.bolt=F(88,124,-6,4,13,17.2,3,T.gunmetal),t.add(this.bolt),t.add(Pd([18,72,-68,-42],[26,62,-61,-47],T.gunDark)),this.trig=Rd(17),this.trig.position.set(44,-46,0),t.add(this.trig),this.woodStock=Vt(Kt([[3,6,6],[-24,-8,10],[-36,-1,10],[-140,-12,10],[-150,-18,6],[-148,-62,8],[-128,-69,10],[-28,-73,14],[-12,-64,10],[8,-44,6]]),30,8,T.wood),t.add(this.woodStock),t.add(Q(150,430,14,T.gunmetal)),t.add(Q(426,437,15,T.gunmetal)),t.add(Q(436.4,437.6,7,T.dark)),t.add(F(404,422,10,23,-3,3,3,T.gunmetal)),t.add(Q(150,424,12.5,T.gunDark,-28)),t.add(Q(418,426,13.5,T.gunmetal,-28)),t.add(Q(326,338,15.5,T.gunDark,-28)),this.pump=new ut,this.pump.add(F(193,327,-54,-4,-23,23,9,T.wood));for(const e of[222,248,273,298])this.pump.add(F(e-1.8,e+1.8,-47,-11,22.2,23.7,1.4,T.woodDark,2));t.add(this.pump),this.loadShell=zi("shell"),this.loadShell.visible=!1,t.add(this.loadShell),this.muzzleAnchor.position.set(440,0,0),this.portAnchor.position.set(106,0,19),this.finish(new b(12,-44,0))}kitPart(t){switch(t){case"optic":return{add:Bi(40,16,80)};case"saddle":{const e=Do(F(18,130,-45,-15,18,23,4,Zt.black));for(let n=0;n<4;n++){const i=zi("shell");i.rotation.z=-Math.PI/2,i.scale.setScalar(.62),i.position.set(32+n*26,-13,25),e.add(i)}return{add:e}}case"light":return{add:Ho(352,404,-64,-44)};case"stock":return{add:Do(Sc(2,8),ww(-6,-44)),hide:[this.woodStock]};case"brake":return{add:$m(436,36,17),muzzle:474,blast:{scale:1.7,smoke:8}}}return null}setAction(t){this.pump.position.x=-t*40,this.bolt.position.x=106-t*40}setTrigger(t){this.trig.rotation.z=-.3*t}setLoading(t){const e=this.loadShell;if(e.visible=t>=0&&t<1,!!e.visible)if(t<.55){const n=Yw(t/.55);e.position.set(30,-110+n*82,0),e.scale.setScalar(.6+Math.min(1,t/.15)*.4)}else{const n=(t-.55)/.45;e.position.set(30+n*70,-28,0),e.scale.setScalar(1)}}}class Zw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.03,hold:.008,fwd:.05,ejectAt:.022,lockOnEmpty:!1},recoil:{kick:[3.8,4.6],push:[2.6,3.2],roll:1.4,squash:.8},pose:{tilt:.14,yaw:.18,roll:.45,lift:.6},reload:"mag",magOut:30,magIn:40,dropSize:.2,casing:"rifle",eject:{side:[2.2,3.4],up:[4,5.5],back:[.2,1]},blast:{scale:1.2,smoke:3,rings:2,bubble:!0},pellet:1,impact:.85,rack:2.2,ammo:"rifle"},this.magAxis.set(.35,-.94,0).normalize(),this.magCenter.set(118,-95,0),this.magTilt=.004;const t=this.model;t.add(Vt(Kt([[0,-30],[152,-30],[152,12],[0,12]],6),34,6,T.gunDark)),t.add(Vt(Kt([[2,8,4],[150,8,4],[150,26,10],[8,26,12]]),30,6,T.gunmetal)),t.add(F(72,120,-4,8,13,17.6,3,T.dark)),t.add(F(10,70,-12,-4,15,18.4,3,T.gunmetal)),this.carrier=new ut,this.carrier.add(F(104,124,-2,7,12,17,2.5,T.gunmetal)),this.carrier.add(F(112,124,-1,7,15,27,3,T.gunmetal)),t.add(this.carrier),t.add(F(140,160,12,30,-8,8,4,T.gunDark)),this.woodGuards=[Vt(Kt([[150,-28,6],[268,-24,8],[268,6,6],[150,6,4]]),34,7,T.wood),Vt(Kt([[156,10],[262,10],[262,26],[156,26]],7),26,6,T.woodDark)],t.add(...this.woodGuards),t.add(F(146,156,-30,28,-17,17,4,T.gunDark)),t.add(F(266,276,-26,26,-15,15,4,T.gunDark)),t.add(Q(270,334,6,T.gunmetal,18)),t.add(F(330,350,-8,24,-10,10,5,T.gunDark)),t.add(F(335,345,22,40,-4,4,3,T.gunDark)),t.add(Q(150,392,9,T.gunmetal)),t.add(Q(372,396,11,T.gunDark)),t.add(Q(395.4,396.6,5,T.dark)),t.add(Vt(Kt([[22,-28,4],[58,-28,4],[46,-108,8],[12,-104,8]]),30,6,T.woodDark)),t.add(Pd([56,112,-54,-26],[64,104,-46,-31],T.gunDark,12)),this.trig=Rd(15),this.trig.position.set(82,-30,0),t.add(this.trig),this.catchLever=F(110,118,-40,-28,-6,6,2.5,T.gunmetal),t.add(this.catchLever),this.woodStock=[Vt(Kt([[4,10,6],[-176,-8,8],[-184,-16,6],[-184,-88,8],[-172,-96,10],[-84,-62,14],[-30,-36,10],[4,-28,6]]),30,8,T.wood),F(-192,-180,-98,-6,-15,15,5,T.gunDark)],t.add(...this.woodStock),this.muzzleAnchor.position.set(399,0,0),this.portAnchor.position.set(96,4,18),this.finish(new b(40,-66,0))}buildMag(){const t=this.kit.has("mag"),e=t?1.28:1;this.magCenter.set(118+(e-1)*40,-95-(e-1)*70,0);const n=new ut,i=new ls;i.moveTo(84,-26),i.lineTo(124,-26),i.quadraticCurveTo(128,-26-64*e,124+42*e,-26-120*e),i.lineTo(88+42*e,-26-140*e),i.quadraticCurveTo(92,-26-74*e,84,-26),n.add(Vt(i,20,4,T.gunDark));const r=F(-21,21,-6,6,-12,12,4,t?T.orange:T.gunmetal);return r.position.set(106+42*e,-26-132*e,0),r.rotation.z=.5,n.add(r),this.wrapMag(n)}kitPart(t){switch(t){case"optic":return{add:Bi(40,26,76)};case"rail":{const e=Do(Vt(Kt([[150,-28],[268,-24],[268,26],[150,26]],7),36,6,Zt.black),Gm(158,262,26,7),Wm(206,234,-24,-96),Ho(240,266,-46,-28));for(let n=162;n<258;n+=14)e.add(F(n,n+6,-10,10,17.4,19.4,2,T.groove,2));return{add:e,hide:this.woodGuards}}case"suppressor":return{add:Cd(394,140,17),muzzle:538,blast:Xm};case"stock":return{add:Sc(4,10),hide:this.woodStock}}return null}setAction(t){this.carrier.position.x=-t*42}setTrigger(t){this.trig.rotation.z=-.3*t}setCatch(t){this.catchLever.position.x=114-t*4}}class Jw extends _n{constructor(){super(),this.spec={cycle:{delay:0,back:.012,hold:0,fwd:.012,ejectAt:.008,lockOnEmpty:!1},recoil:{kick:[.5,.8],push:[.6,.9],roll:.5,squash:.25},pose:{tilt:.06,yaw:.1,roll:.3,lift:.55},reload:"mag",magOut:30,magIn:40,dropSize:.5,casing:"rifle-long",eject:{side:[1.2,2.2],up:[-.5,1],back:[.5,1.5],smoke:0},blast:{scale:.85,smoke:1,rings:1,bubble:!1},pellet:.9,impact:.35,rack:0,vibrate:.012,ammo:"rifle-long"},this.magAxis.set(0,-1,0),this.magCenter.set(60,-110,0),this.spinV=0;const t=this.model;this.rotor=new ut;for(let n=0;n<6;n++){const i=n/6*Math.PI*2,r=Math.cos(i)*18,a=Math.sin(i)*18;this.rotor.add(Q(150,470,6.5,T.gunmetal,r,a,14)),this.rotor.add(Q(469.4,470.6,3.5,T.dark,r,a,10))}this.rotor.add(Q(150,460,5,T.gunDark)),this.rotor.add(Q(250,262,28,T.gunDark,0,0,6)),this.rotor.add(Q(436,448,29,T.gunDark,0,0,6));for(let n=0;n<3;n++){const i=n/3*Math.PI*2+.5;this.rotor.add(Q(447,452,4,T.gunmetal,Math.cos(i)*21,Math.sin(i)*21,10))}t.add(this.rotor),t.add(Q(20,150,40,T.gunmetal,0,0,28)),t.add(Q(148,162,34,T.gunDark,0,0,28)),t.add(Q(6,22,36,T.gunDark,0,0,28));for(const n of[46,96])t.add(Q(n,n+6,41.5,T.gunDark,0,0,28));t.add(F(60,90,-10,10,37,42.5,3,T.yellow)),t.add(Q(40,130,17,T.gunDark,52));for(let n=0;n<5;n++)t.add(Q(50+n*16,56+n*16,19.5,T.gunmetal,52));t.add(F(40,47,40,80,-4,4,3,T.gunDark)),t.add(F(117,124,40,80,-4,4,3,T.gunDark)),t.add(F(34,130,76,89,-6,6,6,T.rubber)),t.add(F(-16,6,-40,40,-26,26,6,T.gunDark)),t.add(F(-60,-14,22,34,-6,6,6,T.gunDark)),t.add(F(-60,-14,-40,-28,-6,6,6,T.gunDark)),t.add(F(-74,-56,-46,40,-9,9,9,T.rubber)),this.thumb=F(-58,-46,20,30,5,12,3,T.orange),t.add(this.thumb);const e=new sm([new b(70,-64,18),new b(84,-56,34),new b(98,-44,34),new b(104,-32,22)]);t.add(ae(new W(new vd(e,16,9,12,!1),T.gunDark))),this.muzzleAnchor.position.set(473,0,0),this.portAnchor.position.set(90,-40,30),this.finish(new b(-60,-6,0))}buildMag(){const t=this.kit.has("box")?40:0;this.magCenter.set(60,-110-t/2,0);const e=new ut;return e.add(F(-4,124,-160-t,-62,-34,34,10,T.olive)),e.add(F(-8,128,-70,-56,-36,36,6,T.oliveDark)),e.add(F(-4.6,124.6,-122,-110,-34.6,34.6,2,T.yellow)),t&&e.add(F(-4.6,124.6,-170,-158,-34.6,34.6,2,T.orange)),e.add(F(50,70,-100,-84,33,37.5,2,T.oliveDark)),this.wrapMag(e)}kitPart(t){switch(t){case"optic":return{add:Bi(48,89,70)};case"laser":return{add:Ho(110,152,-60,-40)};case"shield":return{add:Do(F(168,186,-66,104,-48,48,8,T.oliveDark),F(166,188,80,92,-48.6,48.6,3,T.orange))};case"brake":return{add:Q(452,486,30,Zt.black,0,0,6),parent:this.rotor,muzzle:488}}return null}setTrigger(t){this.thumb.position.z=8.5-t*2.5}spin(t,e){const n=e?42:0;this.spinV+=(n-this.spinV)*(1-Math.exp(-t*(e?7:1.1))),this.rotor.rotation.x+=this.spinV*t}get spinning(){return this.spinV/42}}const Ld={glock19:Iw,revolver:zw,uzi:jw,m870:Kw,ak47:Zw,minigun:Jw,flamer:Fw,cryo:Ow,bow:Bw,grenade:Hw,tesla:Vw,stapler:Gw,laser:Ww,saw:$w,crossbow:Xw,rail:qw},Xi=(s,t)=>s+Math.random()*(t-s),wl=([s,t])=>Xi(s,t),qm=s=>Math.min(1,Math.max(0,s)),Xp=s=>1-Math.pow(1-s,3),qp=s=>s*s*s,Yp=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,eo=(s,t,e)=>qm((s-t)/(e-t)),Qw=new b,tS=new b,eS=new b,nS=new b;class Ym{constructor(t,e,n,i,r={}){this.scene=t,this.fx=e,this.fxTier=0,this.hooks=r,this.m=new Ld[n],this.spec=this.m.spec,t.add(this.m.root),this.magSize=i,this.ammo=i,this.state="ready",this.reloadDur=1.8,this.minInterval=.3,this.cycle=null,this.trigger=0,this.pendingEject=-1,this.lockTimer=0,this.firing=0,this.rec={a:0,av:0,y:0,yv:0,b:0,bv:0,r:0,rv:0,s:0,sv:0},this.time=Math.random()*10,this.settle=1,this.reload=null,this.muzzleGetter=a=>this.m.muzzleWorld(a)}get canFire(){return this.state==="ready"&&this.ammo>0}get reloadProgress(){return this.reload?qm(this.reload.t/this.reloadDur):0}fire(t=null){this.pendingEject>=0&&this._eject(),this.ammo--,this.m.root.updateMatrixWorld(!0);const e=this.m.muzzleWorld(new b),n=this.m.boreDir(new b),i=this.m.upDir(new b),r=this.spec;this.fx.muzzleBlast(e,n,i,this.muzzleGetter,this.m.blast??r.blast,this.fxTier);const a=r.cycle,o=a.delay+a.back+a.hold+a.fwd,l=Math.min(1,this.minInterval*.9/o),c=this.ammo===0;this.cycle={t:0,k:l,locked:c&&a.lockOnEmpty},this.pendingEject=r.casing?(a.delay+a.ejectAt)*l:-1,this.trigger=1,this.firing=.2;const h=r.recoil;let u=t==null?void 0:t.x,f=t==null?void 0:t.y;if(t==null){const g=Math.random()*Math.PI*2,v=Math.sqrt(Math.random());u=Math.cos(g)*v,f=Math.sin(g)*v}const p=wl(h.kick);return this.rec.av+=p*(.25+.75*Je.clamp(f,-1,1)),this.rec.yv-=p*.75*Je.clamp(u,-1,1),this.rec.bv+=wl(h.push),this.rec.rv+=Xi(-h.roll,h.roll),this.rec.sv+=(h.squash??1)*9,c&&(this.state="locked",this.lockTimer=Math.max(.22,o*l+.05)),{pos:e,dir:n}}kick(){this.m.root.updateMatrixWorld(!0);const t=this.m.muzzleWorld(new b),e=this.m.boreDir(new b),n=this.m.upDir(new b),i=this.spec;if(this.fx.muzzleBlast(t,e,n,this.muzzleGetter,this.m.blast??i.blast,this.fxTier),this.state==="ready"&&!this.cycle){const a=i.cycle,o=a.delay+a.back+a.hold+a.fwd;this.cycle={t:0,k:Math.min(1,this.minInterval*.9/o),locked:!1}}this.trigger=1,this.firing=.2;const r=wl(i.recoil.kick);return this.rec.av+=r*(.25+.75*Xi(-1,1)),this.rec.yv+=r*.5*Xi(-1,1),this.rec.bv+=wl(i.recoil.push),this.rec.sv+=(i.recoil.squash??1)*9,{pos:t,dir:e}}_eject(){if(this.pendingEject=-1,!this.spec.casing)return;const t=this.m;t.root.updateMatrixWorld(!0),this.fx.ejectCasing(t.portWorld(Qw),t.boreDir(tS),t.sideDir(eS),t.upDir(nS),this.spec.casing,this.spec.eject)}reset(){var t,e;this.cycle=null,this.reload=null,this.pendingEject=-1,this.state="ready",this.ammo=this.magSize,this.m.setAction(0),this.m.setHold(0),this.m.setCatch(0),this.m.setLoading(-1),(e=(t=this.m).reloadPhase)==null||e.call(t,-1)}startReload(){var t,e;this.state!=="reload"&&(this.state="reload",this.reload={t:0,ejected:!1,incoming:null,seated:!1,released:!1,need:-1,done:0,racked:!1},(e=(t=this.hooks).onReloadStart)==null||e.call(t))}_freeMag(){const t=this.m;let e=t.mags.find(n=>n.userData.free);return e||(e=t.buildMag(),e.traverse(n=>n.isMesh&&!n.material.transparent&&(n.castShadow=!0)),t.mags.push(e)),e.userData.free=!1,e}_ejectMag(){const t=this.m,e=t.mag;e.userData.setLoaded(!1),this.scene.attach(e);const n=t.model.getWorldQuaternion(new tr),i=t.magAxis.clone().applyQuaternion(n).multiplyScalar(4.5).add(new b(Xi(-.4,.4),0,Xi(.4,1.2))),r=new b(Xi(-3,3),Xi(-2,2),Xi(-5,5));this.fx.drop(e,i,r,this.spec.dropSize,()=>{var a;if(!t.mags.includes(e)){(a=e.parent)==null||a.remove(e);return}t.magSlot.add(e),e.quaternion.identity(),t.setMagOut(e,0),e.scale.setScalar(1),e.visible=!1,e.userData.free=!0})}_rack(){const t=this.spec.cycle;t.lockOnEmpty?(this.m.setHold(0),this.cycle={t:t.delay+t.back+t.hold,k:1,locked:!1}):this.spec.rack>0&&(this.cycle={t:0,k:this.spec.rack,locked:!1}),this.rec.av+=2.2,this.rec.rv+=Xi(-1,1)}_updateMagReload(t){var r,a;const e=this.reload,n=this.m,i=this.spec;if(n.setCatch(t>.07&&t<.3?1:0),e.ejected||(n.setMagOut(n.mag,qp(eo(t,.1,.27))*i.magOut),t>=.27&&(e.ejected=!0,this._ejectMag())),t>=.3&&!e.incoming&&(e.incoming=this._freeMag(),e.incoming.userData.setLoaded(!0),n.magSlot.add(e.incoming),e.incoming.visible=!0),e.incoming&&!e.seated){const o=Xp(eo(t,.32,.6));n.setMagOut(e.incoming,(1-o)*i.magIn,1-o),t>=.6&&(e.seated=!0,n.setMagOut(e.incoming,0),n.mag=e.incoming,this.ammo=this.magSize,this.rec.av-=3.5,(a=(r=this.hooks).onMagIn)==null||a.call(r))}!e.released&&t>=.72&&(e.released=!0,this._rack())}_updateTubeReload(t){var i,r;const e=this.reload;e.need<0&&(e.need=this.magSize-this.ammo,e.wasEmpty=this.ammo===0);const n=.68/Math.max(1,e.need);for(;e.done<e.need&&t>=.12+n*(e.done+1);)e.done++,this.ammo++,this.rec.av-=.9,(r=(i=this.hooks).onMagIn)==null||r.call(i);this.m.setLoading(e.done<e.need?eo(t,.12+n*e.done,.12+n*(e.done+1)):-1),!e.racked&&t>=.83&&(e.racked=!0,e.wasEmpty&&this._rack())}_updateReload(t){var i,r,a,o,l,c;const e=this.reload;e.t+=t;const n=e.t/this.reloadDur;this.spec.reload==="tube"?this._updateTubeReload(n):this._updateMagReload(n),(r=(i=this.m).reloadPhase)==null||r.call(i,Math.min(1,n)),n>=1&&(this.m.setLoading(-1),(o=(a=this.m).reloadPhase)==null||o.call(a,-1),this.reload=null,this.state="ready",(c=(l=this.hooks).onReloadEnd)==null||c.call(l))}_reloadPose(){if(!this.reload)return 0;const t=this.reload.t/this.reloadDur;return Yp(eo(t,0,.14))*(1-Yp(eo(t,.8,1)))}update(t,e){this.time+=t,this.settle=e;const n=this.m,i=this.spec;if(this.cycle){const p=this.cycle,g=i.cycle;p.t+=t/p.k;const v=p.t-g.delay;let m;if(v<0)m=0;else if(v<g.back)m=Xp(v/g.back);else if(p.locked||v<g.back+g.hold)m=1;else{const d=(v-g.back-g.hold)/g.fwd;m=d>=1?0:d<.8?1-qp(d/.8):Math.sin((d-.8)/.2*Math.PI)*.04,d>=1&&(this.cycle=null)}n.setAction(m),p.locked&&v>=g.back&&n.setHold(1)}this.pendingEject>=0&&(this.pendingEject-=t,this.pendingEject<0&&this._eject()),this.trigger=Math.max(0,this.trigger-t*9),n.setTrigger(this.trigger),this.firing=Math.max(0,this.firing-t),n.spin(t,this.firing>0),this.state==="locked"&&(this.lockTimer-=t,this.lockTimer<=0&&this.startReload()),this.reload&&this._updateReload(t);const r=this.rec;r.av+=(-170*r.a-15*r.av)*t,r.a+=r.av*t,r.yv+=(-150*r.y-15*r.yv)*t,r.y+=r.yv*t,r.bv+=(-260*r.b-24*r.bv)*t,r.b+=r.bv*t,r.rv+=(-120*r.r-12*r.rv)*t,r.r+=r.rv*t,r.sv+=(-320*r.s-16*r.sv)*t,r.s+=r.sv*t;const a=this.time,o=(1-e)*.045,l=i.vibrate?i.vibrate*(n.spinning??0):0,c=this._reloadPose(),h=i.pose,u=n.pivot;u.rotation.z=r.a+Math.sin(a*1.7)*.008+Math.sin(a*11.3)*o+c*h.tilt+(Math.random()-.5)*l,u.rotation.y=r.y+Math.sin(a*9.1+1)*o*.6+c*h.yaw,u.rotation.x=r.r*.3+Math.sin(a*1.1)*.01-c*h.roll+(Math.random()-.5)*l,u.position.x=-r.b,u.position.y=Math.sin(a*1.7+.5)*.02+c*h.lift;const f=Je.clamp(r.s,-1,1);u.scale.set(1-f*.07,1+f*.05,1+f*.03)}}const iS=new b(1,0,0),jp=new b,sS=(()=>{const s=new Ce(1,0,1,64,12,!0);return s.translate(0,.5,0),s.rotateZ(-Math.PI/2),s})(),Eh=mi.map(s=>new _t(s.color));function rS(){return new je({transparent:!0,depthWrite:!1,side:Zn,blending:En,uniforms:{uColor:{value:new _t},uAlpha:{value:0},uPulse:{value:0},uTime:{value:0},uFill:{value:0}},vertexShader:`
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
      }`})}class jm{constructor(t){this.mat=rS(),this.mesh=new W(sS,this.mat),this.mesh.renderOrder=6,t.add(this.mesh),this.alpha=0,this.pulse=0,this.time=Math.random()*10,this.mat.uniforms.uColor.value.copy(Eh[0])}kick(){this.pulse=1}update(t,e,n,i,r,a,o,l=0){this.time+=t,this.alpha+=((o?1:0)-this.alpha)*Math.min(1,t*8),this.pulse=Math.max(0,this.pulse-t*6);const c=this.mat.uniforms;if(c.uColor.value.lerp(Eh[Math.min(l,Eh.length-1)],Math.min(1,t*10)),c.uAlpha.value=this.alpha*.14,c.uPulse.value=this.pulse,c.uTime.value=this.time,c.uFill.value=a,this.mesh.visible=this.alpha>.01,!this.mesh.visible)return;const h=jp.subVectors(n,e).length();this.mesh.position.copy(e),this.mesh.quaternion.setFromUnitVectors(iS,jp.divideScalar(h||1));const u=.88,f=Math.max(.03,i*u);this.mesh.scale.set(h*u,f,f)}}function Dd(s=3.2){return new je({transparent:!0,depthWrite:!1,uniforms:{uR:{value:.5},uThr:{value:.5},uT:{value:.05},uK:{value:1},uHalf:{value:s},uColor:{value:new _t("#5fd16a")},uPulse:{value:0},uTime:{value:0},uFill:{value:0},uSticks:{value:0},uLeft:{value:0},uReloading:{value:0},uShowThr:{value:0},uAmmo:{value:null}},vertexShader:`
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
      }`})}const aS=[6e4,18e4];function Km(s,t=Date.now()){const e=s.evo||0;if(e>=xn.length)return{level:e,p:1,ready:!1,max:!0,current:0,required:0,wait:0,attempts:0};const n=e?xn[e-1]:0,i=xn[e]-n,r=Math.min(i,Math.max(0,(s.kills||0)-n-(s.evoKillOffset||0))),a=Math.max(0,(s.evoRetryAt||0)-t);return{level:e,p:r/i,current:r,required:i,left:i-r,ready:r>=i&&a===0&&!s.evoInFlight,max:!1,wait:a,attempts:3-(s.evoAttempts||0)}}function oS(s,t=Date.now()){return Km(s,t).ready?(s.evoAttempts=(s.evoAttempts||0)+1,s.evoInFlight=!0,s.evoRetryAt=0,!0):!1}function Zm(s,t=Date.now()){if(!s.evoInFlight)return!1;s.evoInFlight=!1;const e=s.evoAttempts||1;if(e<3)s.evoRetryAt=t+aS[e-1];else{const n=s.evo?xn[s.evo-1]:0;s.evoKillOffset=(s.kills||0)-n,s.evoAttempts=0,s.evoRetryAt=0}return!0}function lS(s){s.evo=Math.min(xn.length,(s.evo||0)+1),s.evoAttempts=0,s.evoRetryAt=0,s.evoInFlight=!1}function Ku(s,t,e,n){const i=s.minSpread+s.autoThr*(s.maxSpread-s.minSpread),r=t<=i+1e-4,a=Math.min(1,e*s.autoRate),o=n<=i?1:Math.max(0,Math.min(1,(n-t)/(n-i)));return{threshold:i,armed:r,charge:Math.min(a,o),ready:r&&e>=1/s.autoRate}}function cS(s){return s*2}function Zu(s,t){const e=s-t;return e<t?Math.max(0,e):0}class Jm{constructor(){this.reset()}reset(){this.held=!1,this.buffer=0}press(t){this.held=!0,this.buffer=Math.max(.18,1/t.fireRate+.05)}release(t=!1){this.held=!1,t&&(this.buffer=0)}update(t,e){this.buffer=e?Math.max(0,this.buffer-t):0}state(t,e,n,i){const r=this.held||this.buffer>0;if(!r)return{...Ku(t,e,n,i),manual:r,interval:1/t.autoRate};const a=1/t.fireRate;return{manual:r,interval:a,charge:Math.min(1,n/a),ready:n>=a}}consume(t,e){return this.buffer=0,Zu(t,e.interval)}}const $l=Object.keys(vn),hS=["evoKillOffset","evoAttempts","evoRetryAt"],Qm=()=>Math.random().toString(36).slice(2,10);function tg(s,t={}){return{id:Qm(),weapon:s,levels:{},evo:0,kills:0,mods:{},...t}}function uS(s,t,e=(n=>(n=Mc[t])==null?void 0:n.weapon)()??null){return s.weapon===void 0?e:s.weapon}function dS(s,t,e){const n=uS(s,t,e);if(!n)return null;const i=tg(n,{levels:{...s.levels||{}},evo:s.evo||0,kills:s.kills||0,mods:{...s.mods||{}}});s.wid&&(i.id=s.wid);for(const r of hS)s[r]&&(i[r]=s[r]);return i}const Kp=s=>Object.values(s||{}).reduce((t,e)=>t+e,0);function fS(s){const t=qM[s.weapon];return Math.round(t*(1+.75*(s.evo||0))*(1+.03*Kp(s.levels))+t*.5*Kp(s.mods))}function Ks(s){return ga({weapon:s.weapon,scale:1},s.levels||{},s.evo||0,s.mods||{})}const Zs=s=>s.damage*s.pellets*s.fireRate,pS=s=>Math.max(1,Math.round(Math.max(10,Math.round(Zs(s)*rs.seconds*rs.hitRate))/rs.hpDivisor)),Th=(s,t,e)=>Math.min(e,Math.max(t,s));function eg(s){const t=s.duelsStarted??(s.wins||0)+(s.losses||0);return Math.max(0,Math.floor(Number(t)||0))}const mS=s=>Cp[Math.max(0,Math.floor(s))%Cp.length];function gS(s,t,e,n,i=null){var p;const r=i!=null&&i.length?i.filter(g=>$l.includes(g)):$l.slice(0,Th(Math.floor(t)+2,1,$l.length)),a=r[Math.floor(n()*r.length)],o=Th((s.evo||0)+Math.round(n()*2-1),0,xn.length),l={};for(const g of ss)l[g.id]=Th(Math.round((((p=s.levels)==null?void 0:p[g.id])||0)+n()*4-2),0,g.max);const c={};for(const g of Bo[a].slice(0,o))c[g]=Math.floor(n()*(Math.min(Ed,o)+1));const h=ss.find(g=>g.id==="damage");let u=0,f=1/0;for(let g=0;g<=h.max;g++){l.damage=g;const v=Math.abs(Math.log(Zs(Ks({weapon:a,levels:l,evo:o,mods:c}))/e));v<f&&(u=g,f=v)}return l.damage=u,tg(a,{levels:l,evo:o,mods:c,kills:o?xn[o-1]:0})}function vS(s,t,e=0,n=Math.random,i=null){const r=mS(e),a=r.min+n()*(r.max-r.min),o=Zs(Ks(s))*a,l=gS(s,t,o,n,i);return{inst:l,index:e,kind:r.kind,powerRatio:a,damageScale:o/Zs(Ks(l))}}const qe=new b,Cn=new b,xs=new b,dr=new b,oi=new b,Gs=new b,Sl=new b,no=new b,xS=new b(0,1,0),Zp=s=>Math.min(1,Math.max(0,s)),_S=new Nn({color:"#05070d"}),yS=.05,bS=.04,MS=17,wS=12,SS=.18,ES=4,El=75,Tl={gaugeX:38,gaugeTop:40,chipX:140,hpGap:6},TS=24,AS=["#ff4f5e","#ffd23f","#44c4ff","#7be36b","#c783ff"];function CS(s){const t=[];return s.stream&&t.push("струя поджигает"),s.freeze&&t.push(`замораживает, по льду ×${vr.shatter}`),s.pierce>1&&t.push(`пробивает ${s.pierce}`),s.skewer&&t.push(`шампур: +${Math.round(s.skewer*100)}% награды за каждого следующего`),s.lob&&t.push("граната по площади"),s.chain&&t.push(`молния ещё на ${s.chain.jumps}`),s.slow&&t.push(`скоба тормозит до ${Math.round(s.slow.slow*100)}%`),s.beam&&t.push(`луч греется до ×${1+s.beam.ramp}`),s.saw&&t.push("диск режет броню и катится по ленте"),s.rail&&t.push("прошивает всю линию и броню"),t.length?` · ${t.join(" · ")}`:""}const RS={teddy:7,bigteddy:7,pinata:10,kettle:6,microwave:8,fridge:12,printer:5,shredder:6,cooler:9,xerox:12},PS=.17,LS=.14,DS=55,kS=["#e8384d","#fff4dc","#ffd23f","#c9d2e0"],IS=2;class US{constructor(t,e,n,i){this.i=t,this.base=e,this.line=e.line,this.def={...e,weapon:n.trophy??e.weapon},this.save=n,n.line??(n.line=0),n.batch=0,n.cat??(n.cat=0),this.ctx=i,this.floor=Dn(t),this.weapon=vn[this.def.weapon],this.ui=new bw(i.hud.layer,{onUpgrade:()=>i.onUpgrade(this),onUnlock:()=>i.onUnlock(this),onEvolve:()=>i.onEvolve(this),onEquip:()=>{}}),this.conveyor=new UM(i.scene,this.line,{onSpawn:r=>this.prepare(r),onCrush:r=>this.onCrush(r)}),this.conveyor.stars=this.stars,this.trial=null,this.gun=null,this.ghost=null,this.lockCenter=new b,this.presses=0,this.holdT=0,this.tapBuffer=0,this.sinceShot=0,this.pop=null,this.visible=!0,this.focus=null,this.manual=null,this.manualT=0,this.share=.6,this.combo=0,this.rollers=[],this.beamJ=null,this.beamGen=0,this.beamLocal=new b,this.beamEnd=new b,this.heat=0,this.aimBase=new b,this.aimP=new b,this.jitter=new b,this.jitSpread=0,this.yaw=0,this.pitch=0,this.shownHp="",this.reticleMat=Dd(3.2),this.reticleMat.depthTest=!1,this.reticle=new W(new hn(6.4,6.4),this.reticleMat),this.reticle.renderOrder=9,this.reticle.visible=!1,i.scene.add(this.reticle),this.cone=new jm(i.scene),this.cone.mesh.visible=!1,this.pulse=0,this.ui.setMode("locked"),n.unlocked?this.activate():this.showGhost()}showGhost(){this.ghost&&this.ctx.scene.remove(this.ghost.root),this.ghost=null,this.base.weapon&&(this.ghost=new Ld[this.base.weapon],this.ghost.silhouette(_S),this.ctx.scene.add(this.ghost.root))}attach(t,e){var n,i;this.gun&&(this.ctx.scene.remove(this.gun.m.root),this.gun=null),this.save=e,this.base=t,this.line=t.line,this.def={...t,weapon:e.trophy??t.weapon},this.weapon=this.def.weapon?vn[this.def.weapon]:null,this.pop=null,this.jetT=0,this.ui.setBadge(!1),(n=this.save).line??(n.line=0),this.save.batch=0,(i=this.save).cat??(i.cat=0),this.combo=0,this.share=.6,this.focus=this.manual=null,this.ui.setCombo(0);for(const r of this.rollers)r.active=!1,r.g.visible=!1;this.conveyor.setLine(t.line),this.reticle.visible=!1,this.cone.mesh.visible=!1,this.ui.setMode("locked"),e.unlocked?this.activate():this.showGhost(),this.relayout()}get gunId(){return this.save.trophy??this.base.weapon}setTrophy(t){this.save.trophy=t,!(!this.unlocked||this.trial)&&(this.gun&&(this.ctx.scene.remove(this.gun.m.root),this.gun=null),this.mount(),this.relayout())}get unlocked(){return!!this.save.unlocked}get armed(){return!!this.gun}get mods(){var t;return(t=this.save).mods??(t.mods={})}get model(){var t;return((t=this.gun)==null?void 0:t.m)??this.ghost}get evo(){return this.save.evo||0}get kit(){return Bo[this.def.weapon]}get scale(){return this.base.scale}get value(){return Gu(this.save.line,this.save.cat)}get stars(){return Sd(this.save.line)}junkHp(t){return Le[t].hp*this.scale*Qb(this.save.batch)}junkReward(t){return Le[t.kind].reward*this.scale*tM(this.save.batch)*this.value*this.ctx.incomeMul()*(t.variant?qb[t.variant].reward:1)}prepare(t){t.hp=t.maxHp=this.junkHp(t.kind)}evoState(){return Km(this.save)}refreshEvo(){this.ui.setEvo(this.evoState())}evolve(){lS(this.save),this.gun.fxTier=this.evo,this.restat();const t=this.gun;t.reset();const e=t.m.setEvo(this.evo,this.kit);return yo(t.m,this.mods),this.ui.setGun(this.weapon.name,t.magSize,this.evo,this.def.weapon),this.ui.setAmmo(t.ammo),this.refreshEvo(),e}restat(){this.stats=ga(this.def,this.save.levels,this.evo,this.mods);const t=this.gun;t&&(t.reloadDur=this.stats.reload,t.minInterval=1/Math.max(this.stats.fireRate,this.stats.fan||0),t.magSize!==this.stats.magSize&&(t.magSize=this.stats.magSize,t.ammo=Math.min(t.ammo,t.magSize),this.ui.setGun(this.weapon.name,t.magSize,this.evo,this.def.weapon),this.ui.setAmmo(t.ammo)))}ammoSticks(){const t=this.gun,e=Math.min(t.magSize,TS),i=t.state==="reload"&&t.spec.reload==="mag"?t.reloadProgress:t.ammo/t.magSize;return{sticks:e,left:Math.ceil(i*e-1e-6)}}activate(){this.save.unlocked=!0,this.ghost&&(this.ctx.scene.remove(this.ghost.root),this.ghost=null),this.conveyor.running=!0,this.conveyor.setStars(this.stars),this.gunId?this.mount():this.showEmpty(),this.relayout()}mount(){var n,i;this.save.evoInFlight&&Zm(this.save);const{scene:t,fx:e}=this.ctx;this.save.weapon=this.gunId,(n=this.save).levels??(n.levels={}),(i=this.save).wid??(i.wid=Qm()),this.def={...this.base,weapon:this.save.weapon},this.weapon=vn[this.def.weapon],this.stats=ga(this.def,this.save.levels,this.evo,this.mods),this.gun=new Ym(t,e,this.def.weapon,this.stats.magSize,{onMagIn:()=>this.ui.setAmmo(this.gun.ammo),onReloadEnd:()=>this.sinceShot=0}),this.evo&&this.gun.m.setEvo(this.evo,this.kit),yo(this.gun.m,this.mods),this.gun.reloadDur=this.stats.reload,this.gun.fxTier=this.evo,this.gun.minInterval=1/Math.max(this.stats.fireRate,this.stats.fan||0),this.reticleMat.uniforms.uAmmo.value=wc(this.def.weapon),this.spread=this.stats.maxSpread,this.jetT=0,this.spreadAfterShot=this.spread,this.jitter.set(0,0,0),this.charge=0,this.sinceShot=0,this.presses=0,this.tapBuffer=0,this.ui.setGun(this.weapon.name,this.gun.magSize,this.evo,this.def.weapon),this.ui.setAmmo(this.gun.ammo),this.refreshEvo(),this.ui.setMode("armed")}showEmpty(){this.reticle.visible=!1,this.cone.mesh.visible=!1,this.pop=null,this.ui.setMode("empty"),this.ui.setBadge(!1)}standPoint(t){return t.set(_e.targetX,this.floor+Ge+.9,Me)}setRangeVisible(t){this.conveyor.setVisible(t);for(const e of this.rollers)e.g.visible=t&&e.active;t||(this.reticle.visible=!1,this.cone.mesh.visible=!1)}relayout(){this.conveyor.relayout(this.floor);const t=this.model;if(!t)return;const e=t.root;e.position.set(_e.gunX+t.inset*Ie-t.rest.min.x,this.floor+Bl+bS-t.rest.min.y,dh),e.rotation.set(0,0,0),e.updateMatrixWorld(!0),this.boreH=t.muzzleWorld(oi).y-e.position.y,this.yaw=this.pitch=0,this.standPoint(this.aimBase),this.aimP.copy(this.aimBase),this.pointAt(this.aimP,1),this.ghost&&(e.updateMatrixWorld(!0),new Bn().setFromObject(e).getCenter(this.lockCenter))}pointAt(t,e){const n=this.model;if(!n)return;const i=n.root,r=i.position,a=Math.max(1,Math.hypot(t.x-r.x,t.z-r.z)),o=Je.clamp(Math.atan2(-(t.z-r.z),t.x-r.x),-.9,.9),l=Je.clamp(Math.atan2(t.y-r.y-(this.boreH||0),a),-.45,.55);this.yaw+=(o-this.yaw)*e,this.pitch+=(l-this.pitch)*e,i.rotation.set(0,this.yaw,this.pitch)}press(){this.gun&&(this.presses++,this.holdT=0,this.tapBuffer=.22)}release(){this.presses=Math.max(0,this.presses-1)}focusRay(t,e){const n=this.conveyor.raycast(t,e);return n?(this.manual=n.junk,this.manualT=ES,!0):!1}get threshold(){const t=this.stats;return t.minSpread+t.autoThr*(t.maxSpread-t.minSpread)}spreadAt(t,e=this.spread){return this.gun.m.muzzleWorld(dr),e*Math.max(2,dr.distanceTo(t))/MS}get fanning(){return this.stats.fan>0&&this.presses>0&&this.holdT>=SS}shoot(){var u,f;const{fx:t}=this.ctx,e=this.gun,n=this.stats,i=this.fanning;e.m.root.updateMatrixWorld(!0),e.m.muzzleWorld(oi);const r=this.aimBase;Gs.subVectors(r,oi).normalize(),no.crossVectors(Gs,xS).normalize(),Sl.crossVectors(no,Gs).normalize();const a=this.spreadAt(r)*(i?1.25:1),o=[];for(let p=0;p<n.pellets;p++){const g=Math.random()*Math.PI*2,v=Math.sqrt(Math.random());o.push({x:Math.cos(g)*v,y:Math.sin(g)*v})}const l=this.spread/n.maxSpread,{pos:c}=e.fire({x:o[0].x*l,y:o[0].y*l}),h=e.spec.pellet;if(this.tapBuffer=0,this.ui.setAmmo(e.ammo),n.stream)this.jitter.set(0,0,0).addScaledVector(no,o[0].x*a).addScaledVector(Sl,o[0].y*a),this.streamTick(c,Gs);else if(n.beam||n.rail){const p=xs.copy(r).addScaledVector(no,o[0].x*a).addScaledVector(Sl,o[0].y*a);this.jitter.copy(p).sub(r);const g=p.sub(c).normalize();n.rail?this.railShot(c,g):this.laserTick(c,g)}else o.forEach((p,g)=>{const v=xs.copy(r).addScaledVector(no,p.x*a).addScaledVector(Sl,p.y*a),m=v.clone().sub(c).normalize();g===0&&this.jitter.copy(v).sub(r);const d=this.conveyor.raycast(c,m);if(n.chain){if(d)t.zap(c,d.point,.07),this.onHit(d,d.junk.gen,d.point);else{const x=this.missEnd(c,m);t.zap(c,x,.05),this.onMiss(x,m)}return}const _=n.lob?n.lob.speed:El;if(d){const x=d.junk,y=x.gen,k=d.point.clone().sub(x.root.getWorldPosition(dr)),A=d.point.clone(),R=L=>x.gen===y?L.copy(x.root.getWorldPosition(A).add(k)):L.copy(A);t.fireBullet(c,R,L=>n.lob?this.grenade(L):(this.onHit(d,y,L),n.saw&&this.rollSaw(x,L),n.pierce>1&&this.pierce(d,L,m,n.pierce-1,n.pierceKeep,1)?"through":x.alive&&x.gen===y?void 0:"drop"),_,h,this.evo,e.spec.ammo)}else{const x=this.missEnd(c,m);t.fireBullet(c,y=>y.copy(x),y=>n.lob?this.grenade(y):this.onMiss(y,m),_,h,this.evo,e.spec.ammo)}});this.spread=Math.min(n.maxSpread,this.spread+n.bloom*(i?1.6:1)*((f=(u=this.ctx).frenzy)!=null&&f.call(u)?Xs.bloom:1)),this.spreadAfterShot=this.spread,this.jitSpread=this.spread,this.pulse=1,this.cone.kick(),this.ctx.onShot(this)}bonusShot(t){const e=this.gun,n=this.stats;if(!e||this.trial)return;const{pos:i}=e.kick();this.pulse=1,this.cone.kick();const r=n.damage*n.pellets*Math.max(1,n.fireRate/4),a=t.gen,o=t.aim(new b),l=c=>t.gen===a&&t.alive?c.copy(t.aim(o)):c.copy(o);this.ctx.fx.shot(n,i,l,c=>(t.hit(r,c,a),t.alive&&t.gen===a?void 0:"drop"),El*1.4,e.spec.pellet,this.evo,e.spec.ammo)}missEnd(t,e){const n=e.z<-.05?(-3.75-t.z)/e.z:40,i=e.y<-.02?(this.floor+.02-t.y)/e.y:40,r=t.clone().addScaledVector(e,Math.min(40,n,i));return r.y=Je.clamp(r.y,this.floor+.02,this.floor+Oi-Zi-.4),r}onHit(t,e,n,i=1,r=0){var f,p,g;const a=t.junk,o=Cn.subVectors(((f=this.gun)==null?void 0:f.m.muzzleWorld(dr))??n,n).normalize();if(a.gen!==e||!a.alive){this.ctx.fx.impact(n,o,a.colors,.4,this.evo);return}const l=this.stats,c=this.ctx.module("ricochet");let h=l.damage*i;if(a.skewer=r,r>=2&&l.skewer&&this.say(n,`шампур ×${r+1}`),a.frozenT>0&&!l.freeze&&(h*=vr.shatter),t.sphere.shield&&!l.rail){if(this.ctx.fx.impact(n,o,["#c9d2e0","#f08a20","#8a9ab8"],.7,this.evo),c>=0){this.bounce(n,a,h),this.collect(n,null,"щиток!");return}h*=nc.shield,this.damage(a,n,o,h,!1,.5);return}t.sphere.armor&&!l.rail&&!l.saw&&(this.ctx.fx.impact(n,o,["#c9d2e0","#ffffff","#8a9ab8"],.6,this.evo),h*=Vu(this.ctx.module("pierce")));const u=!!t.sphere.weak;u&&(h*=l.crit),u&&(!l.beam||Math.random()<.2)&&((g=(p=this.ctx).onCrit)==null||g.call(p,this)),this.damage(a,n,o,h,u,u?1.4:.9),this.afterHit(a,n,h,u),c>=0&&this.bounce(n,a,h*Pm(c))}afterHit(t,e,n,i){const r=this.stats,a=this.ctx.fx;r.freeze&&t.alive&&(t.frozenT=vr.time,t.burnT=0),r.slow&&t.alive&&(t.slowT=r.slow.time,t.slowK=r.slow.slow);const o=r.beam?.2:1,l=this.ctx.module("pin");l>=0&&t.alive&&t.state==="ride"&&Math.random()<(ma.chance+ma.step*l)*o&&(t.pinT>0||this.say(e,"прибит!"),t.pinT=ma.time),r.chain&&this.chain(t,e,n*r.chain.share,r.chain.jumps,r.chain.reach);const c=this.ctx.module("burn");c>=0&&t.alive&&Math.random()<(ys.chance+ys.step*c)*o&&this.ignite(t,r.damage);const h=this.ctx.module("blast");h>=0&&i&&Math.random()<o&&(a.ring(e.clone(),Cn.set(-.3,.3,1).normalize(),.3,.2,da.radius*2,1,this.evo),this.burst(e,n*(da.share+da.step*h),da.radius,t))}chain(t,e,n,i,r){var c;const a=this.ctx.fx,o=new Set([t]);let l=e.clone();for(let h=0;h<i;h++){let u=null,f=1/0;for(const g of this.conveyor.candidates()){if(o.has(g))continue;const v=g.aimPoint(dr).distanceTo(l)*((c=g.def.tags)!=null&&c.includes("metal")?.6:1);v<r&&v<f&&(u=g,f=v)}if(!u)return;const p=u.aimPoint(new b);a.zap(l,p,.045),o.add(u),this.damage(u,p,Cn.subVectors(l,p).normalize(),n*(u.frozenT>0?vr.shatter:1),!1,.6),l=p}}pierce(t,e,n,i,r,a){var g,v;const o=this.conveyor.raycast(e,n,30,t.junk);if(!o)return!1;const l=o.junk,c=l.gen,h=o.point.clone().sub(l.root.getWorldPosition(dr)),u=o.point.clone(),f=m=>l.gen===c?m.copy(l.root.getWorldPosition(u).add(h)):m.copy(u),p=this.stats.pierceKeep;return this.ctx.fx.fireBullet(e,f,m=>(this.onHit(o,c,m,r,a),i>1&&this.pierce(o,m,n,i-1,r*p,a+1)?"through":l.alive&&l.gen===c?void 0:"drop"),El,((g=this.gun)==null?void 0:g.spec.pellet)??1,this.evo,((v=this.gun)==null?void 0:v.spec.ammo)??"pistol"),!0}railShot(t,e){var a,o;const n=new Set,i=[];for(let l=0;l<24;l++){const c=this.conveyor.raycast(t,e,80,n);if(!c)break;n.add(c.junk),i.push(c)}const r=this.missEnd(t,e);this.ctx.fx.rail(t,r,this.evo);for(const l of i)this.onHit(l,l.junk.gen,l.point);i.length?this.ctx.fx.impact(r,Cn.copy(e).negate(),["#1f3e68","#56baff","#e8d6b4"],1,this.evo):this.onMiss(r,e),(o=(a=this.ctx).onBlast)==null||o.call(a,this,r)}laserTick(t,e){var o;const n=this.stats,i=this.conveyor.raycast(t,e);if(this.jetT=LS,!i){this.beamJ=null,this.heat=0,this.beamEnd.copy(this.missEnd(t,e));return}const r=i.junk;(r!==this.beamJ||r.gen!==this.beamGen)&&(this.beamJ=r,this.beamGen=r.gen,this.heat=0),this.heat=Math.min(n.beam.time,this.heat+1/n.fireRate),this.beamLocal.copy(i.point).sub(r.root.getWorldPosition(dr)),this.beamEnd.copy(i.point);const a=1+n.beam.ramp*(this.heat/n.beam.time);this.onHit(i,r.gen,i.point,a),r.alive&&((o=r.def.tags)!=null&&o.includes("burn"))&&Math.random()<.2&&this.ignite(r,n.damage*a)}rollSaw(t,e){const n=this.stats;let i=this.rollers.find(r=>!r.active);if(!i){if(this.rollers.length>=6)return;const{g:r,len:a}=Im("saw"),o=new ut,l=new ut;r.position.x=a/2,l.add(r),o.add(l),o.visible=!1,this.ctx.scene.add(o),i={g:o,spin:l,rad:a*.5,active:!1,hit:new Set},this.rollers.push(i)}i.active=!0,i.x=e.x,i.z=t.z,i.d=0,i.range=n.saw.roll,i.speed=n.saw.speed,i.dmg=n.damage*n.saw.share,i.hit.clear(),i.hit.add(t),i.g.visible=!0,i.g.scale.setScalar(1)}updateRollers(t){const e=this.ctx.fx;for(const n of this.rollers){if(!n.active)continue;n.d+=n.speed*t,n.x+=n.speed*t;const i=Math.max(0,(n.d-n.range+.6)/.6);n.g.position.set(n.x,this.floor+Ge+n.rad*(1-i),Me+n.z),n.g.rotation.x=i*1.2,n.g.scale.setScalar(Math.max(.01,1-i)),n.spin.rotation.z-=n.speed/n.rad*t,Math.random()<t*30&&(qe.set(-1.5-Math.random()*2,1+Math.random()*1.5,(Math.random()-.5)*1.5),e.flame(xs.set(n.x,this.floor+Ge+.05,Me+n.z),qe,.12,.18));for(const r of this.conveyor.candidates()){if(n.hit.has(r)||Math.abs(r.z-n.z)>.7||Math.abs(r.x-n.x)>r.radius+n.rad)continue;n.hit.add(r);const a=r.aimPoint(new b);this.damage(r,a,Cn.set(-1,.4,.4).normalize(),n.dmg*(r.frozenT>0?vr.shatter:1),!1,1)}n.d>=n.range&&(n.active=!1,n.g.visible=!1)}}grenade(t){const e=this.stats;this.ctx.fx.ring(t.clone(),Cn.set(-.4,.5,.8).normalize(),.4,.3,e.lob.radius*2.2,1,this.evo),this.burst(t,e.damage,e.lob.radius)}burst(t,e,n,i=null){for(const r of this.conveyor.candidates()){if(r===i)continue;const a=r.aimPoint(new b),o=a.distanceTo(t);if(o>n+r.radius*.5)continue;const l=1-.5*Math.min(1,o/n);this.damage(r,a,new b().subVectors(a,t).normalize(),e*l*(r.frozenT>0?vr.shatter:1),!1,.8)}}flameBlob(t,e){const n=this.stats.stream,i=2*Math.tan(n.angle)*n.range*3.4;xs.copy(e).multiplyScalar(n.range*3.4*(.85+Math.random()*.3)),xs.x+=(Math.random()-.5)*i,xs.y+=(Math.random()-.5)*i,xs.z+=(Math.random()-.5)*i,this.ctx.fx.flame(t,xs,.38+Math.random()*.34,.42+Math.random()*.16)}streamTick(t,e){const n=this.stats,i=n.stream,r=Math.tan(i.angle);for(let a=0;a<2;a++)this.flameBlob(t,e);this.jetT=PS;for(const a of this.conveyor.candidates()){const o=a.aimPoint(new b);qe.subVectors(o,t);const l=qe.dot(e);if(l<=0||l>i.range||Math.sqrt(Math.max(0,qe.lengthSq()-l*l))>l*r+a.radius)continue;let h=n.damage*(a.frozenT>0?vr.shatter:1);a.spheres.some(u=>u.armor)&&(h*=Vu(this.ctx.module("pierce"))),this.collect(o,{dmg:h,bull:!1,zone:2}),this.damage(a,o,Cn.set(-1,.3,.3).normalize(),h,!1,0,!0),this.ignite(a,n.damage)}}ignite(t,e){if(t.alive){if(t.frozenT>0){t.frozenT=0;return}t.burnT=ys.time,t.burnDps=Math.max(t.burnDps||0,e*ys.dps)}}burnTick(t){const e=this.ctx.fx;for(const n of this.conveyor.candidates())if(n.burnT>0){if(n.burnT-=t,Math.random()<t*9){const i=n.root.getWorldPosition(new b);i.y+=n.height*(.3+Math.random()*.6),e.flame(i,qe.set((Math.random()-.5)*.6,1.2,(Math.random()-.5)*.4),.28+n.radius*.3,.45)}if(Math.random()<t*ys.spreadChance){const i=this.conveyor.nearest(n.aimPoint(new b),n,ys.spread);i&&!(i.burnT>0)&&this.ignite(i,n.burnDps/ys.dps)}this.damage(n,n.aimPoint(new b),Cn.set(0,1,0),n.burnDps*t,!1,0,!0)}}damage(t,e,n,i,r,a,o=!1){var l;t.alive&&(t.hp=Math.max(0,t.hp-i),t.hit(o?.15:r?1.6:1),o||(this.ctx.fx.impact(e,n,t.colors,a*(((l=this.gun)==null?void 0:l.spec.impact)??1),this.evo),this.collect(e,{dmg:i,bull:r,zone:r?4:2})),t.hp<=0&&this.kill(t))}bounce(t,e,n){var h,u;const i=this.conveyor.nearest(t,e,nc.reach),r=this.ctx.fx;if(!i){r.impact(t,Cn.set(-.3,.8,.5).normalize(),["#ffe08a","#ffffff"],.4,this.evo);return}const a=i.gen,o=t.clone(),l=i.aimPoint(new b),c=f=>i.gen===a?f.copy(i.aimPoint(l)):f.copy(l);r.shot(this.stats,o,c,f=>i.gen!==a||!i.alive?"drop":(this.damage(i,f,Cn.subVectors(o,f).normalize(),n,!1,.8),i.alive?void 0:"drop"),El*.8,(((h=this.gun)==null?void 0:h.spec.pellet)??1)*.8,this.evo,((u=this.gun)==null?void 0:u.spec.ammo)??"pistol")}get comboMul(){return 1+Math.min(yl.max,yl.step*Math.max(0,this.combo-1))}kill(t){this.flushPopup();const e=this.ctx.fx,n=t.root.getWorldPosition(new b);n.y+=t.height*.45,this.combo++,this.ui.setCombo(this.combo>=yl.show?this.comboMul:0);const i=this.junkReward(t)*this.comboMul*(1+(this.gun?this.stats.skewer:0)*(t.skewer||0));this.conveyor.kill(t);const r=Cn.set(-.5,.35,.8).normalize();e.impact(n,r,t.colors,Le[t.kind].hp<15?1.6:3,this.evo),e.ring(n.clone().addScaledVector(r,.2),r,.35,.3,t.height*1.6,1,this.evo);const a=RS[t.kind]??3;for(let l=0;l<a;l++)qe.set(Math.random()*3-1.5,Math.random()*2.5+.5,Math.random()*2-.6),e.puff(n,qe,.18+Math.random()*.14,.9+Math.random()*.5,"white",3,.9);const o=Le[t.kind].filling;if(o)for(let l=0;l<Le[t.kind].fill;l++){const c=this.conveyor.spawn(o,null,t.x+.2+l*.45,l%2?.32:-.32);c.pop=0}t.kind===this.line.junk&&(this.share=this.share*.9+.1),this.save.kills=(this.save.kills||0)+1,this.refreshEvo(),this.focus===t&&(this.focus=null),this.manual===t&&(this.manual=null),this.ctx.onKill(this,i,n,t),t.kind==="popper"?this.explode(n,Ou.damage,Ou.radius,AS):Le[t.kind].blast&&this.explode(n,Le[t.kind].blast,IS,kS)}explode(t,e,n,i){var l,c;const r=this.ctx.fx,a=new b(-.4,.4,.8).normalize();r.impact(t,a,i,4,this.evo),r.ring(t.clone(),a,.5,.4,n*2.2,1,4);for(let h=0;h<12;h++)r.crumb(t,qe.set(Math.random()-.5,1.2,Math.random()-.3).normalize(),i[h%i.length],1.3);const o=this.junkHp(this.line.junk)*e;for(const h of this.conveyor.candidates()){const u=h.aimPoint(new b);u.distanceTo(t)>n||this.damage(h,u,new b().subVectors(u,t).normalize(),o,!1,.8)}(c=(l=this.ctx).onBlast)==null||c.call(l,this,t)}onCrush(t){if(t.kind===this.line.junk&&(this.share*=.9),this.combo>=yl.show&&this.visible){const n=this.ctx.project(this.conveyor.starWorld(0,new b).setX(this.conveyor.pressX));this.ctx.hud.popup(n.x,n.y-40,"комбо сорвано","miss")}this.combo=0,this.ui.setCombo(0);const e=t.root.getWorldPosition(new b);e.y+=.3;for(let n=0;n<4;n++)this.ctx.fx.crumb(e,Cn.set(-.2,1,.4).normalize(),t.colors[n%t.colors.length]);this.ctx.fx.puff(e,qe.set(0,.8,.6),.3,.8,"grey",3,.7),this.ctx.onPress(this,e,t)}onMiss(t,e){var n;this.ctx.fx.impact(t,Cn.copy(e).negate(),["#1f3e68","#355b83","#e8d6b4"],.5*(((n=this.gun)==null?void 0:n.spec.impact)??1),this.evo),this.collect(t,null)}collect(t,e,n=null){this.pop||(this.pop={t:yS,dmg:0,hits:0,bull:!1,zone:-1,pos:new b,label:null});const i=this.pop;n&&(i.label=n),e?(i.hits||i.pos.copy(t),i.hits++,i.dmg+=e.dmg,i.bull||(i.bull=e.bull),i.zone=Math.max(i.zone,e.zone)):i.hits||i.pos.copy(t)}say(t,e){if(!this.visible)return;const n=this.ctx.project(t);this.ctx.hud.popup(n.x,n.y-44,e,"z3")}flushPopup(){const t=this.pop;t&&(this.pop=null,t.hits?this.ctx.onHit(this,t,t.pos):t.label?this.ctx.hud.popup(...Object.values(this.ctx.project(t.pos)),t.label,"z3"):this.ctx.onMiss(this,t.pos))}currencyOf(t){return t.startsWith("mod:")||t.startsWith("rule:")?"parts":"coins"}costOf(t){if(!this.unlocked)return null;if(t==="line")return Lm(this.i,this.save.line,this.scale);if(t.startsWith("rule:")){const i=this.ctx.module(t.slice(5));return i<0?null:eM(i)}if(!this.gun)return null;if(t.startsWith("mod:")){const i=t.slice(4),r=this.kit.indexOf(i),a=this.mods[i]||0;return r>=0&&r<this.evo&&a<Ap(this.evo)?$M(a):null}const e=ss.find(i=>i.id===t);if(!e||t==="auto"&&this.stats.autoRate>=this.stats.fireRate-1e-8)return null;const n=this.save.levels[t]||0;return n>=e.max?null:Vl(e,n,this.def)}applyUpgrade(t){if(t==="line"){const e=this.stars;if(this.save.line++,this.stars>e){this.conveyor.setStars(this.stars,!0);const n=this.conveyor.starWorld(this.stars-1,new b),i=Cn.set(0,.2,1).normalize();this.ctx.fx.impact(n,i,["#ffd23f","#fff1b8","#ffb300"],1.4,Math.min(5,Math.floor(this.stars/2))),this.ctx.fx.ring(n,i,.45,.2,2.4,1,Math.min(5,Math.floor(this.stars/2))),this.ctx.onStar(this)}return}if(t.startsWith("rule:")){this.ctx.raiseModule(t.slice(5));return}if(t.startsWith("mod:")){const e=t.slice(4);this.mods[e]=(this.mods[e]||0)+1,yo(this.gun.m,this.mods)}else this.save.levels[t]=(this.save.levels[t]||0)+1;this.restat()}upgradeIds(){const t=["line"];this.gun&&t.push(...ss.map(e=>e.id),...this.kit.slice(0,this.evo).map(e=>`mod:${e}`));for(const e of Object.keys(Hu))this.ctx.module(e)>=0&&t.push(`rule:${e}`);return t}canAfford(t,e=0){return this.upgradeIds().some(n=>{const i=this.costOf(n);return i!=null&&i<=(this.currencyOf(n)==="parts"?e:t)})}instance(){return dS(this.save,this.i,this.base.weapon)}ruleRows(){var n,i;const t=((i=(n=this.ctx).lines)==null?void 0:i.call(n))??[],e=[];for(const[r,a]of Object.entries(Hu)){const o=this.ctx.module(r),l=`Поведение: ${a.name}`;if(o>=0){e.push({id:`rule:${r}`,icon:a.icon,title:l,lvl:Cr(o),now:a.text(o),next:a.text(o+1),cost:this.costOf(`rule:${r}`),cur:"parts"});continue}const c=t.findIndex(h=>h.rule===r);c>=0&&e.push({id:`rule:${r}`,icon:a.icon,title:l,now:`откроется на линии «${t[c].name}»`,off:`Линия ${c+1}`})}return e}lineRows(){const t=this.save.line,e=(this.stars+1)*5;return[{id:"line",icon:"⭐",title:"Ценность партии",lvl:`ур. ${t} · ★${this.stars}`,now:`награда ×${this.value.toFixed(2)} · разбивается ~${Math.round(this.share*100)}%`,next:`×${Gu(t+1,this.save.cat).toFixed(2)}${t+1===e?" ★":` · до ★ ${e-t}`}`,cost:this.costOf("line")}]}panelData(){var l,c;const t=this.weapon,e=this.save.levels||{},n=this.evo,i=[];if(this.gun){const h=this.stats,u=ss.map(v=>{const m=e[v.id]||0,d=this.costOf(v.id),_=GM[v.id],x=d==null?null:ga(this.def,{...e,[v.id]:m+1},n,this.mods);return{id:v.id,icon:v.icon,title:v.title,lvl:`ур. ${m}`,now:v.fmt(h[_],t),next:x?v.fmt(x[_],t):"",cost:d}}),f=Ap(n),p=this.kit.map((v,m)=>{const d=Po[v];if(m>=n)return{id:`mod:${v}`,icon:d.icon,title:d.name,now:`появится после ${m+1}-й эволюции`,off:`Эволюция ${m+1}`};const _=this.mods[v]||0,x={id:`mod:${v}`,icon:d.icon,title:d.name,lvl:Cr(_),now:Xu(v,_),next:Xu(v,_+1),cost:this.costOf(`mod:${v}`),cur:"parts"};return x.cost==null&&_<4&&(x.block=`нужен тир<br>${mi[_+1].name}`),x});p.unshift(...this.ruleRows());const g=v=>Math.pow(Um[v],n);i.push({title:"Характеристики",note:`Темп ${t.fireRate.toFixed(1)}/с${this.stats.fan?` · «веер» ${this.stats.fan}/с при удержании`:""} · слабое место ×${this.stats.crit}${CS(this.stats)}${n?` · урон тира ×${g("damage").toFixed(2)}`:""}`,rows:u},{title:"Модули",note:n?`прокачка за детали до ${mi[f].name} · поведение — общее для цеха`:"обвесы ставятся эволюциями, качаются за детали · поведение — общее для цеха",rows:p})}i.push({title:"Линия",note:`${this.line.name}: ★ каждые 5 уровней ценности, +20% к награде · звёзды двигают цех`,rows:this.lineRows()});const r=this.evoState(),a=r.max?"эволюция MAX":r.wait?`повтор через ${Math.ceil(r.wait/1e3)} с`:r.ready?"эволюция готова — жми на шкалу":`до эволюции ${r.left}`,o=this.gun?this.instance():null;return{title:this.gun?t.name:this.line.name.toUpperCase(),tier:this.gun?n:0,thumb:o?(c=(l=this.ctx).thumb)==null?void 0:c.call(l,o):null,thumbKey:o?`${o.weapon}|${n}|${JSON.stringify(o.mods)}`:"empty",sub:`Линия ${this.i+1} «${this.line.short}» · ★${this.stars} · разбито ${this.save.kills||0}${this.gun?` · ${a}`:""}`,sections:i,foot:[]}}pickFocus(t){const e=this.conveyor.candidates();this.manualT=Math.max(0,this.manualT-t),this.manual&&(!this.manual.alive||!e.includes(this.manual)||this.manualT<=0)&&(this.manual=null);const n=e.find(r=>r.state==="hang");if(this.manual)return this.manual;if(n&&!e.some(r=>r!==n&&r.x<n.x-2))return n;let i=null;for(const r of e)(!i||r.x<i.x)&&(i=r);return i}update(t){var p,g;this.ui.tick(t),this.pop&&(this.pop.t-=t)<=0&&this.flushPopup();const e=!!this.trial;if(e||(this.conveyor.update(t,this.ctx.flow(this)),this.burnTick(t),this.updateRollers(t)),!this.gun){this.reticle.visible=!1,this.cone.mesh.visible=!1,this.focus=null,this.ui.setHpVisible(!1);return}this.save.evoRetryAt&&this.refreshEvo();const n=this.stats;if(this.jetT>0&&n.beam){this.jetT-=t;const v=this.ctx.fx,m=this.heat/n.beam.time;this.gun.m.muzzleWorld(oi);const d=this.beamJ;d&&d.alive&&d.gen===this.beamGen&&d.root.getWorldPosition(this.beamEnd).add(this.beamLocal),v.beam(oi,this.beamEnd,.07+.06*m,.05,"laser"),v.flame(this.beamEnd,qe.set(0,.6,0),.22+.25*m,.1),Math.random()<t*14&&v.puff(this.beamEnd,qe.set(0,.9,.3),.1,.6,"grey",3,.45)}if(this.jetT>0&&n.stream&&(this.jetT-=t,this.jetAcc=(this.jetAcc||0)+t*DS,this.jetAcc>=1))for(this.gun.m.muzzleWorld(oi),Gs.subVectors(this.aimBase,oi).normalize();this.jetAcc>=1;this.jetAcc--)this.flameBlob(oi,Gs);this.spread=Math.max(n.minSpread,this.spread-(n.maxSpread-n.minSpread)/n.convergence*t);const i=this.threshold,r=this.spread<=i+1e-4;this.sinceShot+=t,this.tapBuffer=Math.max(0,this.tapBuffer-t),this.presses>0&&(this.holdT+=t);const a=!e&&!!((g=(p=this.ctx).frenzy)!=null&&g.call(p)),o=!e&&(this.presses>0||this.tapBuffer>0||a&&!!this.focus);if(!e){this.focus=this.pickFocus(t),this.focus?this.focus.aimPoint(this.aimBase):this.standPoint(this.aimBase);const v=this.jitSpread>n.minSpread+1e-6?Zp((this.spread-n.minSpread)/(this.jitSpread-n.minSpread)):0;this.aimP.copy(this.aimBase).addScaledVector(this.jitter,v),this.pointAt(this.aimP,1-Math.exp(-t*wS))}let l=!1;if(this.focus&&!e){this.gun.m.muzzleWorld(oi),this.gun.m.boreDir(Gs),qe.subVectors(this.aimBase,oi);const v=qe.length();l=qe.normalize().dot(Gs)>Math.cos(Math.atan(this.spreadAt(this.aimBase)/v)+.05)}if(this.gun.canFire&&!e&&!this.review)if(o){const v=1/(this.fanning?n.fan:n.fireRate);this.sinceShot>=v&&(this.sinceShot=Zu(this.sinceShot,v),this.shoot())}else this.focus&&l&&Ku(n,this.spread,this.sinceShot,this.spreadAfterShot).ready&&(this.sinceShot=Zu(this.sinceShot,1/n.autoRate),this.shoot());let c=0;o&&this.gun.canFire?c=Math.min(1,this.sinceShot*(this.fanning?n.fan:n.fireRate)):this.gun.canFire&&!e&&(c=Ku(n,this.spread,this.sinceShot,this.spreadAfterShot).charge),this.charge=c;const h=1-Zp((this.spread-n.minSpread)/(n.maxSpread-n.minSpread));this.gun.update(t,h);const u=!e&&!!this.focus;if(this.reticle.visible=u,u){this.reticle.position.copy(this.aimBase);const v=this.reticleMat.uniforms;v.uR.value=Je.clamp(this.spreadAt(this.aimBase),.08,2.35),v.uThr.value=Je.clamp(this.spreadAt(this.aimBase,i),.08,2.35),v.uTime.value+=t,r?v.uColor.value.setRGB(.25,1,.38):v.uColor.value.setRGB(1,.5,.1),this.pulse=Math.max(0,this.pulse-t*5),v.uPulse.value=this.pulse;const m=this.ammoSticks();v.uSticks.value=m.sticks,v.uLeft.value=m.left,v.uReloading.value=this.gun.state==="reload"?1:0,v.uFill.value=this.gun.state==="reload"?this.gun.reloadProgress:c}if(e||(this.gun.m.muzzleWorld(oi),this.cone.update(t,oi,this.aimBase,this.spreadAt(this.aimBase),r,c,u&&this.gun.state!=="reload",this.evo)),this.focus&&!e){const v=`${Math.ceil(this.focus.hp)}|${this.focus.gen}`;v!==this.shownHp&&(this.ui.setHp(this.focus.hp,this.focus.maxHp,this.focus.gen!==this.hpGen),this.shownHp=v,this.hpGen=this.focus.gen),this.ui.setReward(Le[this.focus.kind].reward>0?this.junkReward(this.focus):null)}this.ui.setHpVisible(!!this.focus&&!e);const f=this.gun.state==="reload";(f||this.shownReload)&&this.ui.setReload(f,this.gun.reloadProgress),this.shownReload=f}updateLock(t,e){const n=this.ctx.gate(this);this.ui.setLock(`★ ${n}`,t,e>=n)}resetReview(){this.conveyor.clear();const t=this.conveyor.spawn(this.line.junk,null,_e.targetX-2,0);t.pop=1,this.manual=t,this.manualT=1e9}placeUI(t,e,n){const i=this.ctx.project,r=i(qe.set(0,this.floor+2.3,0));if(this.visible=r.y>-e*.5&&r.y<t+e*.5,r.y<-e||r.y>t+e)return;const a=n.k,o=i(qe.set(_e.gunX,this.floor+Oi-Zi,3.3)).y,l=this.focus,c=l?i(l.root.getWorldPosition(qe).add(xs.set(0,l.height+.1,0))):{x:-999,y:-999},h=i(qe.set(_e.gunX,this.floor+Bl+.72,dh)),u=this.ghost?i(this.lockCenter):this.gun?r:i(qe.set(_e.gunX+2.4,this.floor+Bl+1.1,dh)),f=i(qe.set(this.conveyor.pressX,this.floor+4,Me+.6));this.ui.place({comboX:f.x,comboY:f.y,gaugeX:n.left+Tl.gaugeX*a,gaugeY:o+Tl.gaugeTop*a,chipX:n.left+Tl.chipX*a,chipY:h.y,hpX:c.x,hpY:c.y-Tl.hpGap*a,lockX:u.x,lockY:u.y})}}const Js=-4;class NS{constructor(t){this.scene=t,this.root=new ut,t.add(this.root),t.background=new _t("#101d2e"),t.add(new Fo(Ne.sky,Ne.ground,1)),this.key=new Oo(Ne.key,Ne.keyIntensity),this.key.castShadow=!0,this.key.shadow.mapSize.set(1536,1536),this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.03,t.add(this.key,this.key.target),this.materials={wall:vt("#22384d",{spec:0,rim:0}),panel:vt("#2c465e",{spec:.02,rim:0}),beam:vt("#3e566c",{spec:.08,rim:0}),floor:vt("#777d82",{map:ec().clone(),spec:.03,rim:0}),rubber:vt("#202932",{spec:0,rim:0}),stripe:vt("#bb914b",{spec:0,rim:0}),light:new Nn({color:new _t(1.4,1.35,1.18)})}}build(t,e){this.root.traverse(c=>{c.isMesh&&c.geometry.dispose()}),this.root.clear(),this.left=Math.min(-6,e-1.5),this.right=t+10;const n=this.right-this.left,i=(this.left+this.right)/2;this.height=Math.max(14,n/2.1);const r=Js,a=r+this.height,o=(c,h,u,f,p,g,v)=>{const m=new W(new Qn(c,h,u),this.materials[v]);return m.position.set(f,p,g),m.receiveShadow=!0,this.root.add(m),m};this.materials.floor.map.repeat.set(n/5,1),o(n,.6,12,i,r-.3,-1,"floor"),o(n,this.height,.6,i,r+this.height/2,-6.7,"wall"),o(n,.7,12,i,a+.35,-1,"beam"),o(.8,this.height,12,this.left-.4,r+this.height/2,-1,"beam"),o(.8,this.height,12,this.right+.4,r+this.height/2,-1,"beam");for(let c=this.left+3;c<this.right-1;c+=6)o(5.4,this.height-3,.25,c,r+this.height/2,-6.2,"panel"),o(.18,this.height,.6,c-2.85,r+this.height/2,-5.9,"beam"),o(3.5,.12,.35,c,a-.8,-4.9,"light"),o(.07,.025,5.5,c,r+.02,0,"stripe");o(7,.4,4.5,-3.5,r+.2,.3,"rubber"),o(.13,.03,6,1,r+.025,0,"stripe"),o(7.5,this.height-2,.35,t+5,r+this.height/2,-5.8,"rubber");for(let c=r+1;c<a-1;c+=.7)o(.22,.32,.08,t+1.1,c,-5.55,"stripe"),o(.22,.32,.08,t+8.9,c,-5.55,"stripe");this.key.target.position.set(i,r+3,0),this.key.position.copy(Ne.keyDir).multiplyScalar(n).add(this.key.target.position);const l=this.key.shadow.camera;l.left=-n/2,l.right=n/2,l.top=this.height,l.bottom=-this.height,l.near=1,l.far=n*3,l.updateProjectionMatrix()}groundAt(t,e,n){return t>-7&&t<0&&Math.abs(n-.3)<2.25&&e>=Js+.2?Js+.4:Js}}const lo=-.2,zS=18,FS=.5,OS=.7,BS=.6,HS=1.8,Jp=110,VS=14.56,GS=130,WS=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,ng=s=>1+2.7*Math.pow(s-1,3)+1.7*Math.pow(s-1,2),kn=(s,t)=>s+Math.random()*(t-s),wn=Je.clamp,Qp=Je.lerp,Ve=new b,t0=new b,Ws=new b,Al=new b,Cl=new b,$S=new b(0,0,1),oc=[{rim:"#2f4569",arm:"#2f4569",tube:.12},{rim:"#2f4569",arm:"#f08a20",tube:.14},{rim:"#7d8aa0",arm:"#2f4569",tube:.17},{rim:"#3a3f4d",arm:"#f08a20",tube:.2},{rim:"#e0a43a",arm:"#3a3f4d",tube:.23}],Ms=["#efdbbb","#5d5b60","#f76445","#fbc838"];function XS(){const s=new Ce(1,1,.24,40);s.rotateX(Math.PI/2);const t=new Map,e=(n,i=vt)=>t.get(n)??t.set(n,i(n,{spec:.14,gloss:12,rim:.08})).get(n);return{discGeo:s,faceGeo:new vc(1,40),armGeo:new Sn(1.6,.16,.3,2,.06),hubGeo:new Ce(.12,.12,.14,12),bladeGeo:new Sn(.95,.04,.16,1,.02),torus:new Map,mat:e,blade:ce("#f08a20")}}class qS{constructor(t,e,n){this.kit=e,this.root=new ut,this.root.visible=!1,t.add(this.root),this.body=new ut,this.body.rotation.y=-.35,this.root.add(this.body),this.body.add(new W(e.discGeo,e.mat(Ms[0]))),[[.82,Ms[1]],[.64,Ms[0]],[.46,Ms[2]],[.2,Ms[3]]].forEach(([r,a],o)=>{const l=new W(e.faceGeo,e.mat(a));l.scale.set(r,r,1),l.position.z=.125+o*.006,this.body.add(l)}),this.rim=new W(e.discGeo,e.mat(Ms[0])),this.body.add(this.rim),this.arm=new W(e.armGeo,e.mat("#2f4569")),this.arm.position.y=1.16,this.body.add(this.arm),this.rotors=[];for(const r of[-.66,.66]){const a=new W(e.hubGeo,e.mat("#2f4569"));a.position.set(r,1.28,0);const o=new ut;o.position.set(r,1.37,0),o.add(new W(e.bladeGeo,e.blade)),this.body.add(a,o),this.rotors.push(o)}for(const r of this.body.children)r.castShadow=!0;this.flashMat=new Nn({color:16777215,transparent:!0,opacity:0,blending:En,depthWrite:!1});const i=new W(e.faceGeo,this.flashMat);i.scale.setScalar(.95),i.position.z=.16,this.body.add(i),this.hpUI=new Ad(n),this.hpUI.el.classList.add("drone-hp"),this.hpLeader=document.createElement("i"),this.hpLeader.className="hp-leader",this.hpUI.el.append(this.hpLeader),this.hpUI.el.hidden=!0,this.pos=new b,this.alive=!1,this.gen=0}setLook(t){const e=oc[Math.min(t,oc.length-1)];let n=this.kit.torus.get(e.tube);n||this.kit.torus.set(e.tube,n=new Fi(1,e.tube,10,40)),this.rim.geometry=n,this.rim.material=this.kit.mat(e.rim),this.arm.material=this.kit.mat(e.arm)}spawn(t,e,n,i){this.setLook(e),this.alive=!0,this.leaving=!1,this.gen++,this.r=n.radius*2.6,this.hp=this.maxHp=i,this.speed=n.speed*kn(.85,1.15),this.t=0,this.pop=0,this.punch=0,this.punchV=0,this.flash=0,this.vx=0,this.ph=kn(0,6.28),this.ph2=kn(0,6.28);const r=e===0?["patrol","patrol","wave","hop"]:["patrol","wave","loop","hop","loop"];this.mode=r[Math.floor(Math.random()*r.length)],this.dir=Math.random()<.5?-1:1,this.baseY=kn(t.y0+.3,t.y1-.3),this.cx=kn(t.x0,t.x1),this.cy=kn(t.y0,t.y1),this.pos.set(kn(t.x0,t.x1),this.baseY,lo),this.wx=this.pos.x,this.wy=this.pos.y,this.root.visible=!0,this.root.scale.setScalar(.01),this.hpUI.set(this.hp,this.maxHp,!0)}hit(){this.punchV+=6,this.flash=1,this.hpUI.set(this.hp,this.maxHp)}update(t,e){this.t+=t,this.pop=Math.min(1,this.pop+t/.35),this.punchV+=(-300*this.punch-18*this.punchV)*t,this.punch+=this.punchV*t,this.flash=Math.max(0,this.flash-t*8),this.flashMat.opacity=this.flash*.75;for(const l of this.rotors)l.rotation.y+=t*38;const n=this.pos;if(this.leaving){n.y+=t*6,this.pop=Math.max(0,this.pop-t*2.5),this.root.position.copy(n),this.root.scale.setScalar(Math.max(.01,this.r*this.pop)),this.pop<=0&&(this.root.visible=!1);return}const i=e.x1-e.x0,r=e.y1-e.y0,a=n.x;switch(this.mode){case"patrol":case"wave":{n.x+=this.dir*this.speed*t,n.x>e.x1&&(n.x=e.x1,this.dir=-1),n.x<e.x0&&(n.x=e.x0,this.dir=1);const l=this.mode==="wave",c=l?Math.min(2.6,r/2):.35;n.y=wn(this.baseY+c*Math.sin(this.t*(l?1.7:2.4)+this.ph),e.y0,e.y1);break}case"loop":{const l=wn(i/2-.2,.4,5),c=wn(r/2-.1,.3,2.6),h=wn(this.cx,e.x0+l,e.x1-l),u=wn(this.cy,e.y0+c,e.y1-c),f=this.speed/l*.6,p=h+l*Math.sin(this.t*f+this.ph),g=u+c*Math.sin(this.t*f*2+this.ph2),v=Math.min(1,this.t/.6);n.x=Qp(n.x,p,v),n.y=Qp(n.y,g,v);break}default:{const l=this.wx-n.x,c=this.wy-n.y,h=Math.hypot(l,c);if(h<.12)this.wx=kn(e.x0,e.x1),this.wy=kn(e.y0,e.y1);else{const u=Math.min(h,this.speed*1.3*t*Math.min(1,h/.8+.3));n.x+=l/h*u,n.y+=c/h*u}}}n.x=wn(n.x,e.x0,e.x1),n.y=wn(n.y,e.y0,e.y1),this.vx=(n.x-a)/Math.max(t,.001),this.root.position.copy(n);const o=this.r*Math.max(.01,ng(this.pop))*(1+wn(this.punch,-.2,.3)*.18);this.root.scale.setScalar(o),this.body.rotation.z=wn(-this.vx*.06,-.3,.3)}hide(){this.alive=!1,this.root.visible=!1,this.hpUI.el.hidden=!0}}class YS{constructor(t){this.homeScene=t.scene,this.homeFX=t.fx,this.scene=new No,this.room=new NS(this.scene),this.fx=new Td(this.scene,{ground:(a,o,l)=>this.room.groundAt(a,o,l)}),this.ctx={...t,scene:this.scene,fx:this.fx};const e=document.createElement("div");e.className="drone-hp-layer",document.querySelector("#evo").append(e),this.active=!1,this.state="idle",this.trigger=new Jm,this.z=0;const n=XS();this.drones=Array.from({length:5},()=>new qS(this.scene,n,e)),this.retMat=Dd(2.1),this.retMat.depthTest=!1;const i=this.retMat.uniforms;i.uK.value=.9,i.uShowThr.value=0,this.reticle=new W(new hn(4.2,4.2),this.retMat),this.reticle.renderOrder=9,this.reticle.visible=!1,this.scene.add(this.reticle),this.aimP=new b,this.aimRaw=new b,this.lock=null,this.ray=new _d,this.plane=new qi(new b(0,0,1),-lo),this.cam={cx:0,cy:0,viewH:20,left:0,right:0};const r=a=>document.querySelector(a);this.el=r("#evo"),this.dimTop=r("#evo .evo-dim.top"),this.dimBottom=r("#evo .evo-dim.bottom"),this.timeEl=r("#evo .evo-time"),this.goalEl=r("#evo .evo-goal"),this.banner=r("#evo .evo-banner"),this.bStep=r("#evo .eb-step"),this.bTitle=r("#evo .eb-title"),this.bText=r("#evo .eb-text"),this.bBtn=r("#evo .eb-btn"),this.bBtn.addEventListener("pointerdown",a=>{a.stopPropagation(),this.dismiss()}),r("#evo .evo-leave").addEventListener("pointerdown",a=>{a.stopPropagation(),this.surrender()})}start(t){var a,o,l,c;if(this.active||!t.gun||!t.evoState().ready||!oS(t.save))return;(o=(a=this.ctx).onStateChange)==null||o.call(a),(c=(l=this.ctx).onStart)==null||c.call(l),this.lane=t,this.trigger.reset(),this.retMat.uniforms.uAmmo.value=wc(t.def.weapon),t.setRangeVisible(!1),t.gun.reset(),t.model.seatNewMag(),this.step=t.evo,this.cfg={..._o[Math.min(this.step,_o.length-1)]},this.cfg.time=YM(t.def,this.step),this.hp=zm(t.def,Math.min(this.step,_o.length-1)),this.kind=t.kit[this.step],t.trial=this,this.active=!0,this.state="in",this.t=0,this.z=0,this.killed=0,this.timeLeft=this.cfg.time,this.spawnT=0,t.sinceShot=0,this.charge=0,this.pulse=0,this.popPart=null;const e=t.model,n=e.root;n.updateMatrixWorld(!0);const i=e.muzzleWorld(new b);this.standDistance=i.distanceTo(t.standPoint(new b)),this.range=cS(this.standDistance),this.scene.add(n,t.cone.mesh),t.gun.scene=this.scene,t.gun.fx=this.fx,this.fx.clear(),n.position.set(0,0,0),n.rotation.set(0,0,0),e.pivot.position.set(0,0,0),e.pivot.rotation.set(0,0,0),e.pivot.scale.set(1,1,1),n.updateMatrixWorld(!0),e.muzzleWorld(Ve),this.poseX=-Ve.x,this.poseY=Js+.65-e.rest.min.y,this.poseZ=.55,this.boreY=Ve.y,this.pitch=this.yaw=0,this.room.build(this.range,this.poseX+e.rest.min.x),this.frame();const r=this.arena();this.aimP.set((r.x0+r.x1)/2,(r.y0+r.y1)/2,lo),this.aimRaw.copy(this.aimP),this.lock=null,this.poseGun(1,r),this.introShown=!1,this.goalEl.textContent=`0/${this.cfg.count}`,this.timeEl.textContent=`${this.cfg.time}`,this.el.classList.remove("off","low","on")}frame(){const t=this.cam,e=this.room;t.cx=(e.left+e.right)/2,t.cy=Js+e.height*.46,t.viewH=Math.max(e.height+2,(e.right-e.left+3)/this.ctx.camera.aspect),t.left=t.cx-t.viewH*this.ctx.camera.aspect/2,t.right=t.cx+t.viewH*this.ctx.camera.aspect/2,this.fx.farScale=wn(t.viewH/VS,1,2.6)}arena(){const t=this.cfg.radius*2.6;return{x0:4+t,x1:this.room.right-t-1,y0:Js+t+.5,y1:Js+this.room.height-t-1.6}}view(t){return this.active?{cx:this.cam.cx,cy:this.cam.cy,viewH:this.cam.viewH*(1+(1-WS(this.z))*.025)}:t}relayout(){this.active&&(this.frame(),this.poseGun(1,this.arena()))}pointer(t,e,n){if(!this.active||this.state!=="in"&&this.state!=="play"||n!==!0)return;this.trigger.press(this.lane.stats);const i=t0.set(t/innerWidth*2-1,-(e/innerHeight)*2+1,0);if(this.ray.setFromCamera(i,this.ctx.camera),!this.ray.ray.intersectPlane(this.plane,Ve))return;const r=GS*this.cam.viewH/941;let a=null,o=r;for(const l of this.drones){if(!l.alive||l.pop<.6)continue;const c=Math.hypot(l.pos.x-Ve.x,l.pos.y-Ve.y)-l.r;c<o&&(a=l,o=c)}a&&(this.lock=a)}release(t=!1){this.trigger.release(t)}assist(t){let e=this.lock&&this.lock.alive&&this.lock.pop>=.6?this.lock:null;if(!e&&this.state==="play"){let i=1/0;for(const r of this.drones){if(!r.alive||r.pop<.6)continue;const a=Math.hypot(r.pos.x-this.aimP.x,r.pos.y-this.aimP.y);a<i&&(e=r,i=a)}}this.lock=this.state==="play"?e:null;const n=this.lock?this.lock.pos:this.aimRaw;this.aimP.lerp(n,1-Math.exp(-t*(this.lock?10:3))),this.aimP.z=lo}dismiss(){(this.state==="won"||this.state==="lost")&&this.leave()}surrender(){(this.state==="play"||this.state==="in")&&this.lose(!0)}update(t){if(!this.active)return;const e=this.lane;if(this.t+=t,this.frame(),this.state==="in"&&(this.z=Math.min(1,this.z+t/OS)),this.state==="out"&&(this.z=Math.max(0,this.z-t/BS),this.z<=0)){this.finish();return}const n=this.arena();if(this.assist(t),this.poseGun(t,n),this.el.classList.toggle("playing",this.state==="in"||this.state==="play"),this.state==="in"&&!this.introShown&&this.t>.25){this.introShown=!0,this.el.classList.add("on");const r=Po[this.kind];this.showBanner(`ЭВОЛЮЦИЯ ${this.step+1}`,r.name,`Сбей ${this.cfg.count} дронов за ${this.cfg.time} с<br><small>Прицел наводится сам · тап / удержание — быстрый огонь, тап по дрону — сменить цель</small>`)}this.state==="in"&&this.t>HS&&(this.state="play",e.sinceShot=1/e.stats.fireRate,this.hideBanner()),this.state==="play"&&this.play(t,n),(this.state==="won"||this.state==="lost")&&this.t>4&&this.leave();for(const r of this.drones)r.root.visible&&r.update(t,n);this.updateReticle(t),this.fx.update(t);const i=this.popPart;if(i){i.t+=t;const r=Math.max(.01,ng(Math.min(1,i.t/.5)));i.obj.scale.setScalar(r),i.t>=.5&&(i.obj.scale.setScalar(1),this.popPart=null)}}poseGun(t,e){const n=this.lane.model.root,i=this.poseX,r=this.poseY,a=this.poseZ,o=this.aimP;o.x=wn(o.x,e.x0-1,e.x1+1),o.y=wn(o.y,e.y0-.8,e.y1+.6);const l=o.x-i,c=o.y-r,h=Math.hypot(l,c),u=wn(Math.atan2(c,l)-Math.asin(wn(this.boreY/h,-1,1)),-.8,1.2),f=Math.atan2(-(o.z-a),h),p=1-Math.exp(-t*16);this.pitch+=(u-this.pitch)*p,this.yaw+=(f-this.yaw)*p,n.position.set(i,r,a),n.rotation.set(0,this.yaw,this.pitch),n.updateMatrixWorld(!0)}play(t,e){const n=this.cfg;if(this.timeLeft-=t,this.timeLeft<=0){this.timeLeft=0,this.lose();return}const i=this.drones.filter(l=>l.alive).length;if(this.spawnT-=t,i<Math.min(n.alive,n.count-this.killed)&&this.spawnT<=0){const l=this.drones.find(c=>!c.alive&&!c.root.visible)??this.drones.find(c=>!c.alive);l&&(l.spawn(e,this.step,n,this.hp),this.ctx.fx.puff(l.pos,Ve.set(0,.6,0),.12,.8,"white",3,.7),this.spawnT=.45)}const r=this.lane.gun,a=this.lane.stats;this.trigger.update(t,r.canFire);const o=this.trigger.state(a,this.lane.spread,this.lane.sinceShot,this.lane.spreadAfterShot);if(this.charge=r.canFire?o.charge:0,this.onTarget=!1,r.canFire){const l=r.m.muzzleWorld(Ws),c=r.m.boreDir(Al);this.onTarget=!!this.aimed(l,c),(o.manual||this.onTarget)&&o.ready&&(this.lane.sinceShot=this.trigger.consume(this.lane.sinceShot,o),this.fire())}}angle(){return this.lane.spread/zS*FS}aimed(t,e){const n=Math.tan(this.angle());for(const i of this.drones){if(!i.alive||i.pop<.6)continue;Ve.subVectors(i.pos,t);const r=Ve.dot(e);if(r<=0)continue;if(Math.sqrt(Math.max(0,Ve.lengthSq()-r*r))<i.r*1.05+r*n*.5)return i}return null}raycast(t,e){let n=null,i=1/0;for(const a of this.drones){if(!a.alive)continue;Ve.subVectors(a.pos,t);const o=Ve.dot(e);if(o<=0||o>=i)continue;const l=a.r*1.12;Ve.lengthSq()-o*o<l*l&&(n=a,i=o)}if(!n)return null;const r=new b().copy(t).addScaledVector(e,i).sub(n.pos);return r.z=0,r.length()>n.r*.85&&r.setLength(n.r*.85),{drone:n,off:r}}fire(){var l,c;const t=this.lane,e=t.gun,n=t.stats,i=this.ctx.fx,{pos:r,dir:a}=e.fire(),o=this.angle();t.spread=Math.min(n.maxSpread,t.spread+n.bloom),t.spreadAfterShot=t.spread,this.pulse=1,t.cone.kick(),(c=(l=this.ctx).onShot)==null||c.call(l,t),Ws.crossVectors(a,$S),Ws.lengthSq()<1e-6&&Ws.set(0,1,0),Ws.normalize(),Al.crossVectors(a,Ws).normalize();for(let h=0;h<n.pellets;h++){const u=Math.tan(o*Math.sqrt(Math.random())),f=Math.random()*Math.PI*2,p=new b().copy(a).addScaledVector(Ws,Math.cos(f)*u).addScaledVector(Al,Math.sin(f)*u).normalize(),g=this.raycast(r,p);if(g){const{drone:v,off:m}=g,d=v.gen,_=new b().copy(v.pos).add(m),x=y=>v.gen===d?y.copy(_.copy(v.pos).add(m)):y.copy(_);i.shot(n,r,x,y=>(this.hitDrone(v,d,y),v.alive&&v.gen===d?void 0:"drop"),Jp,e.spec.pellet,t.evo,e.spec.ammo)}else{const v=new b().copy(r).addScaledVector(p,this.range+14);i.shot(n,r,m=>m.copy(v),null,Jp,e.spec.pellet,t.evo,e.spec.ammo)}}}hitDrone(t,e,n){const i=this.ctx.fx,r=Cl.set(-.4,.1,1).normalize();if(t.gen!==e||!t.alive||this.state!=="play"){i.impact(n,r,Ms,.3,this.lane.evo);return}t.hp-=this.lane.stats.damage,t.hit(),i.impact(n,r,Ms,.4*this.lane.gun.spec.impact+.2,this.lane.evo),t.hp<=0&&this.kill(t)}burst(t){const e=this.ctx.fx;t.alive=!1,t.gen++;const n=Cl.set(-.4,.1,1).normalize();e.impact(t.pos,n,[...Ms,oc[Math.min(this.step,oc.length-1)].rim],2.2,this.lane.evo),e.ring(Ve.copy(t.pos).addScaledVector(n,.1),n,.35,.2,1.8,1,this.lane.evo);for(let i=0;i<5;i++)e.puff(t.pos,Ve.set(kn(-1.5,1.5),kn(-.5,1.5),kn(-.5,.5)),kn(.1,.16),kn(.8,1.2),i%2?"grey":"dust",3,.85);t.root.visible=!1}kill(t){this.burst(t),this.killed++;const e=this.ctx.project(t.pos);this.ctx.hud.popup(e.x,e.y-20,`${this.killed}/${this.cfg.count}`,"bull"),this.killed>=this.cfg.count&&this.win()}win(){var i,r;this.state="won",this.t=0;const t=this.lane,e=Po[this.kind],n=t.evolve();(r=(i=this.ctx).onStateChange)==null||r.call(i),n&&(n.getWorldPosition(Ve),n.scale.setScalar(.01),this.popPart={obj:n,t:0},this.ctx.fx.impact(Ve,Cl.set(0,.3,1).normalize(),["#ffc533","#fff1b8","#f08a20"],1.6,t.evo),this.ctx.fx.ring(Ve,Cl,.4,.2,2.2,1,t.evo)),t.gun.rec.sv+=14;for(const a of this.drones)a.alive&&this.burst(a);this.showBanner(`ЭВОЛЮЦИЯ ${this.step+1} ПРОЙДЕНА`,e.name,`${Xu(this.kind)} · тир ${mi[t.evo].name}<br><small>статы оружия выросли, модули качаются в меню ⬆</small>`,"Круто!","win")}lose(t=!1){var i,r;if(this.state!=="play"&&!(t&&this.state==="in"))return;this.hideBanner(),this.state="lost",this.t=0,Zm(this.lane.save),this.lane.refreshEvo(),(r=(i=this.ctx).onStateChange)==null||r.call(i);for(const a of this.drones)a.alive&&(a.alive=!1,a.gen++,a.leaving=!0);const e=this.lane.evoState(),n=e.wait?`Следующая попытка через ${Math.ceil(e.wait/6e4)} мин · осталось ${e.attempts}`:`Три попытки закончились. Прогресс: 0/${e.required}<br><small>Сбивай мишени, чтобы снова открыть испытание</small>`;this.showBanner(t?"ТЫ СДАЛСЯ":"НЕ УСПЕЛ",`Сбито ${this.killed} из ${this.cfg.count}`,n,"Ок","lose")}leave(){this.state="out",this.hideBanner(),this.reticle.visible=!1,this.el.classList.remove("on")}finish(){var e,n;const t=this.lane;for(const i of this.drones)i.hide();this.popPart&&this.popPart.obj.scale.setScalar(1),this.popPart=null,this.reticle.visible=!1,t.trial=null,t.setRangeVisible(!0),this.homeScene.add(t.model.root,t.cone.mesh),t.gun.scene=this.homeScene,t.gun.fx=this.homeFX,this.fx.clear(),t.gun.reset(),t.model.seatNewMag(),t.sinceShot=0,t.relayout(),this.active=!1,this.state="idle",this.el.classList.add("off"),(n=(e=this.ctx).onDone)==null||n.call(e,t,t.evo>this.step)}updateReticle(t){const e=this.state==="play"||this.state==="in"&&this.z>.9;this.reticle.visible=e;const n=this.lane.gun;this.charge=n.canFire?this.trigger.state(this.lane.stats,this.lane.spread,this.lane.sinceShot,this.lane.spreadAfterShot).charge:0;const i=n.m.muzzleWorld(Ws),r=n.m.boreDir(Al),a=Math.max(1,Ve.subVectors(this.aimP,i).length());if(Ve.copy(i).addScaledVector(r,a),this.lane.cone.update(t,i,Ve,a*Math.tan(this.angle()),!0,this.charge,e,this.lane.evo),!e)return;this.reticle.position.copy(i).addScaledVector(r,a),this.reticle.position.z=lo+.4;const o=this.cam.viewH/14.56;this.reticle.scale.setScalar(o);const l=this.retMat.uniforms;l.uR.value=wn(a*Math.tan(this.angle())/o,.1,1.1),l.uColor.value.setRGB(...this.onTarget?[.25,1,.38]:[1,.5,.1]),this.pulse=Math.max(0,this.pulse-t*6),l.uPulse.value=this.pulse,l.uFill.value=n.state==="reload"?n.reloadProgress:this.charge,l.uTime.value=this.t;const c=this.lane.ammoSticks();l.uSticks.value=c.sticks,l.uLeft.value=c.left,l.uReloading.value=n.state==="reload"?1:0}updateHud(t=0){if(!this.active)return;this.dimTop.style.height="0px",this.dimBottom.style.top="100%";const e=[];for(const i of this.drones){if(i.hpUI.el.hidden=!i.alive||!i.root.visible,!i.alive)continue;i.hpUI.tick(t);const r=this.ctx.project(Ve.copy(i.pos).add(t0.set(0,i.r*1.65,0)));e.push({d:i,x:r.x,y:r.y-4})}e.sort((i,r)=>r.y-i.y);const n=[];for(const i of e){const{d:r,x:a,y:o}=i,l=r.hpUI.el.offsetWidth,c=r.hpUI.el.offsetHeight;let h=o,u=a;for(let g=0;g<e.length*2;g++){h-c<58&&(u-=l+8,h=o);const v=n.find(m=>Math.abs(u-m.x)<(l+m.w)/2+4&&h>m.bottom-m.h-5&&h-c<m.bottom+5);if(!v)break;h=v.bottom-v.h-6}r.hpUI.place(u,h);const f=a-u,p=o-h;r.hpLeader.style.height=`${Math.hypot(f,p)}px`,r.hpLeader.style.transform=`rotate(${-Math.atan2(f,p)}rad)`,n.push({x:u,bottom:h,w:l,h:c})}this.timeEl.textContent=`${Math.ceil(this.timeLeft)}`,this.el.classList.toggle("low",this.state==="play"&&this.timeLeft<6),this.goalEl.textContent=`${this.killed}/${this.cfg.count}`}showBanner(t,e,n,i="",r=""){this.bStep.textContent=t,this.bTitle.textContent=e,this.bText.innerHTML=n,this.bBtn.textContent=i,this.bBtn.style.display=i?"":"none",this.banner.className=`evo-banner show ${r}`}hideBanner(){this.banner.classList.remove("show")}}const an=16,Rn=-7,bo=-.75;function Ki(s,t,e,n,i){const r=new W(new Sn(s,t,e,2,Math.min(n,s/2-.001,t/2-.001,e/2-.001)),i);return r.castShadow=!0,r.receiveShadow=!0,r}class e0{constructor(t,e){this.side=e,this.root=new ut;const n=new ut;n.scale.x=-e,this.root.add(n);const i=Ki(1,1.7,.95,.14,t.navy);i.position.set(0,-.55,bo);for(const o of[-1.05,-.05]){const l=Ki(1.12,.26,1.07,.1,t.orange);l.position.set(0,o,bo),n.add(l)}this.arm=Ki(1,.34,.5,.1,t.navy),this.arm.position.set(.5,-.36,bo+.55),this.platform=new ut;const r=Ki(1,.26,1.7,.08,t.slab);r.position.y=-.13;const a=Ki(.96,.06,1.5,.03,t.mat);a.position.y=0,this.slab=r,this.mat=a,this.bumper=Ki(.24,.36,1.78,.1,t.orange),this.bumper.position.y=-.12,this.platform.add(r,a,this.bumper),this.platform.position.z=.55,n.add(i,this.arm,this.platform),this.inward=n}setSpan(t,e){const n=Math.max(.6,e-t);this.slab.scale.x=n,this.mat.scale.x=n-.12,this.slab.position.x=this.mat.position.x=t+n/2,this.bumper.position.x=e,this.arm.scale.x=Math.max(.3,t+.4),this.arm.position.x=this.arm.scale.x/2}}class jS{constructor(t){this.scene=t,t.background=new _t("#0e1a2c"),t.add(new Fo(Ne.sky,Ne.ground,1)),this.key=new Oo(Ne.key,Ne.keyIntensity),this.key.castShadow=!0,this.key.shadow.mapSize.set(1536,1536),this.key.shadow.intensity=.7,this.key.shadow.radius=3,this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.03,t.add(this.key,this.key.target);const e=Ib();this.mats={floor:vt("#8b8f99",{map:ec().clone(),spec:.03,gloss:8,rim:0}),wall:vt("#1d3557",{spec:0,rim:0}),rib:vt("#264670",{spec:.05,rim:0}),ribLight:vt("#2c5080",{spec:.06,rim:0}),girder:vt("#355b83",{spec:.08,gloss:10,rim:.05}),door:vt("#2f5a86",{spec:.06,gloss:10}),doorRib:vt("#3a6a99",{spec:.08,gloss:10}),hazard:vt("#ffffff",{map:e,spec:.08}),column:vt("#ffffff",{map:e.clone(),spec:.1}),navy:vt("#2f4569",{spec:.1,gloss:10,rim:.06}),slab:vt("#4a6186",{spec:.08,gloss:10}),mat:vt("#3a4560",{map:xm(),spec:.03,rim:0}),orange:ce("#e88724"),olive:ce("#56703a"),oliveLid:ce("#5c7742"),lampHousing:vt("#16264a",{spec:.1}),lamp:new Nn({color:new _t(1.6,1.45,1.1)}),cream:vt("#efdbbb",{spec:.05}),ring:vt("#5d5b60",{spec:.05}),coral:vt("#f76445",{spec:.05}),yellow:vt("#fbc838",{spec:.05})},this.mats.column.map.wrapS=this.mats.column.map.wrapT=Ps,this.mats.mat.map=this.mats.mat.map.clone(),this.mats.mat.map.repeat.set(3,1),this.static=new ut,t.add(this.static),this.lifts=[new e0(this.mats,-1),new e0(this.mats,1)],this.columns=[];for(const n of this.lifts)t.add(n.root);this.halfW=0}build(t,e){if(this.colX=e,Math.abs(t-this.halfW)<.01&&this.static.children.length)return this.placeColumns();this.halfW=t,this.static.traverse(v=>{v.isMesh&&v.geometry.dispose()}),this.static.clear();const n=t*2+12,i=this.mats,r=(v,m,d,_,x,y,k,A=!1)=>{const R=new W(new Qn(v,m,d),k);return R.position.set(_,x,y),R.receiveShadow=!0,R.castShadow=A,this.static.add(R),R};i.floor.map.repeat.set(n/5.2,2),r(n,.6,16,0,-.3,-.5,i.floor),r(.16,.02,9,0,.01,-1.5,i.yellow),r(n,an+4,.6,0,(an+4)/2-1,Rn,i.wall);const a=new Qn(.34,an-1.2,.22),o=Math.ceil(n/.9),l=new Lu(a,i.rib,o),c=new Lu(a,i.ribLight,o),h=new fe;for(let v=0;v<o;v++){const m=-n/2+v*.9;l.setMatrixAt(v,h.makeTranslation(m,(an-1.2)/2+.6,Rn+.42)),c.setMatrixAt(v,h.makeTranslation(m+.45,(an-1.2)/2+.6,Rn+.36))}for(const v of[l,c])v.receiveShadow=!0,this.static.add(v);r(n,.9,.9,0,.45,Rn+.7,i.girder),r(n,.7,1.2,0,an-.6,Rn+.9,i.girder),r(n,.5,.9,0,6.2,Rn+.75,i.girder);for(let v=-Math.floor(n/2/7)*7;v<=n/2;v+=7)r(.7,an,1.1,v,an/2,Rn+.85,i.girder);const u=Math.min(14,t*.95),f=11.2;for(const v of[-1,1]){const m=r(u/2-.08,f,.4,v*u/4,f/2,Rn+1.1,i.door);m.castShadow=!1;for(let _=1.6;_<f-.4;_+=1.25)r(u/2-.5,.18,.12,v*u/4,_,Rn+1.36,i.doorRib);const d=r(.55,f+.6,.7,v*(u/2+.28),(f+.6)/2,Rn+1.2,i.hazard);d.material=i.column}const p=r(u,.7,.5,0,.35,Rn+1.4,i.hazard);i.hazard.map.repeat.set(u/1.4,1),p.receiveShadow=!0,[[1.5,i.cream],[1.22,i.ring],[.96,i.cream],[.66,i.coral],[.3,i.yellow]].forEach(([v,m],d)=>{const _=new W(new Ce(v,v,.12,48),m);_.rotation.x=Math.PI/2,_.position.set(0,f+2.3,Rn+1.25+d*.03),this.static.add(_)});for(let v=-Math.floor(n/2/9)*9+4.5;v<n/2;v+=9)r(2.6,.32,.8,v,an-1.7,-2.6,i.lampHousing,!0),r(2.3,.08,.5,v,an-1.89,-2.6,i.lamp),r(.06,1.3,.06,v-1,an-1,-2.6,i.lampHousing),r(.06,1.3,.06,v+1,an-1,-2.6,i.lampHousing);for(const[v,m,d]of[[-u/2-2.6,.55,1],[-u/2-4.1,.55,1],[-u/2-3.3,1.65,1],[u/2+3,.55,1.1]]){const _=Ki(1.4*d,1.1*d,1.2*d,.12,i.olive);_.position.set(v,m*d,Rn+2.2);const x=Ki(1.5*d,.22*d,1.3*d,.08,i.oliveLid);x.position.set(v,m*d+.6*d,Rn+2.2),this.static.add(_,x)}this.columns=[-1,1].map(()=>{const v=Ki(.6,an+2,.6,.12,i.column);v.position.set(0,(an+2)/2-.6,bo);const m=Ki(1.4,.4,1.4,.12,i.navy);m.position.set(0,.2,bo);const d=new ut;return d.add(v,m),this.static.add(d),d}),i.column.map.rotation=Math.PI/2,i.column.map.repeat.set((an+2)/1.2,1),this.key.target.position.set(0,an*.4,0),this.key.position.copy(Ne.keyDir).multiplyScalar(40).add(this.key.target.position);const g=this.key.shadow.camera;g.left=-n/2,g.right=n/2,g.top=an,g.bottom=-an,g.near=1,g.far=90,g.updateProjectionMatrix(),this.placeColumns()}placeColumns(){this.columns.forEach((t,e)=>t.position.set((e?1:-1)*this.colX,0,0))}groundAt(){return 0}}const Ah=15.6,KS=7.4,Mr=.55,Xl=1.35,co=1.6,ho=10.4,n0=4.2,i0=70,s0=18,r0=.6,ZS=9,JS=.06,Rl=["#4a4f5e","#2e384e","#ffc533","#e3a93a"],Te=(s,t)=>s+Math.random()*(t-s),Er=Je.clamp,QS=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,la=new b,fr=new b,a0=new b,Ch=new Bn,Rh=new b;class o0{constructor(t,e,n,i=1){this.duel=t,this.side=n,this.inst=e,this.stats=Ks(e),this.stats.damage*=i,this.maxHp=this.hp=pS(this.stats);const r=this.gun=new Ym(t.scene,t.fx,e.weapon,this.stats.magSize),a=r.m;e.evo&&a.setEvo(e.evo,Bo[e.weapon]),yo(a,e.mods||{}),r.reloadDur=this.stats.reload,r.minInterval=1/this.stats.fireRate,r.fxTier=e.evo||0,this.lift=t.arena.lifts[n<0?0:1];const o=a.root;o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(n<0?1:-1,1,1),o.updateMatrixWorld(!0),this.boreY=a.muzzleWorld(la).y,this.y=n<0?Te(co+1,ho-3):Te(co+3,ho-1),this.vy=0,this.goalY=this.y,this.wait=Te(.3,.8),this.pitch=0,this.aim=new b(-n*6,this.y+1,Mr),this.spread=this.stats.maxSpread,this.spreadAfterShot=this.spread,this.sinceShot=0,this.trigger=new Jm,this.alive=!0,this.pop=null,this.center=new b,this.half=new et(1,.5)}get m(){return this.gun.m}move(t){if(this.wait>0){if(this.wait-=t,this.wait<=0){let n;do n=Te(co,ho);while(Math.abs(n-this.y)<2.2);this.goalY=n}}else Math.abs(this.goalY-this.y)<.08&&(this.wait=Te(.1,.8));const e=Er((this.goalY-this.y)*3,-n0,n0);this.vy+=(e-this.vy)*(1-Math.exp(-t*6)),this.y=Er(this.y+this.vy*t,co,ho)}pose(t,e,n=!1){const i=this.m,r=i.root,a=this.side,o=a<0?-e+Xl-i.rest.min.x:e-Xl+i.rest.min.x,l=this.y-i.rest.min.y+.08,c=this.aim.x-o,h=this.aim.y-l,u=Math.max(1,Math.hypot(c,h)),f=Math.atan2(h,c),p=Math.asin(Er(this.boreY/u,-1,1));let g=a<0?f-p:f-Math.PI+p;g=Math.atan2(Math.sin(g),Math.cos(g)),g=Er(g,-.75,.75),this.pitch=n?g:this.pitch+(g-this.pitch)*(1-Math.exp(-t*14)),r.position.set(o,l,Mr),r.rotation.set(0,0,this.pitch),r.updateMatrixWorld(!0);const v=e-Xl+.55,m=i.rest.max.x-i.rest.min.x;this.lift.root.position.set(a*v,this.y,0),this.lift.setSpan(.3,.55+m*.82),Ch.copy(i.rest).applyMatrix4(r.matrixWorld),Ch.getCenter(this.center),Ch.getSize(Rh),this.half.set(Rh.x*.46,Rh.y*.5)}rayHit(t,e,n=1,i=null){const r=this.half.x*n,a=this.half.y*n,o=(t.x-this.center.x)/r,l=(t.y-this.center.y)/a,c=e.x/r,h=e.y/a,u=c*c+h*h,f=2*(o*c+l*h),p=o*o+l*l-1,g=f*f-4*u*p;if(g<0)return-1;const v=(-f-Math.sqrt(g))/(2*u);return v<=0?-1:(i&&i.set(t.x+e.x*v-this.center.x,t.y+e.y*v-this.center.y,0).multiplyScalar(.8),v)}}class tE{constructor(t){this.ctx=t,this.scene=new No,this.arena=new jS(this.scene),this.fx=new Td(this.scene,{ground:()=>0}),this.active=!1,this.state="idle",this.z=0,this.cone=new jm(this.scene),this.retMat=Dd(2.1),this.retMat.depthTest=!1,this.retMat.uniforms.uK.value=.9,this.reticle=new W(new hn(4.2,4.2),this.retMat),this.reticle.renderOrder=9,this.reticle.visible=!1,this.scene.add(this.reticle),this.ray=new _d,this.plane=new qi(new b(0,0,1),-Mr),this.wrecks=[];const e=n=>document.querySelector(n);this.el=e("#duel"),this.cards=["me","foe"].map(n=>{const i=e(`#duel .du-card.${n}`),r=new Ad(i.querySelector(".du-hp"));return{card:i,hp:r,ava:i.querySelector(".ava"),name:i.querySelector(".du-name"),gun:i.querySelector(".du-gun")}}),this.timeEl=e("#duel .du-time"),this.banner=e("#duel .du-banner"),this.bStep=e("#duel .db-step"),this.bTitle=e("#duel .db-title"),this.bText=e("#duel .db-text"),this.bLoot=e("#duel .db-loot"),this.bBtn=e("#duel .db-btn"),this.bBtn.addEventListener("pointerdown",n=>{n.stopPropagation(),this.state==="result"&&this.leave()}),e("#duel .du-leave").addEventListener("pointerdown",n=>{n.stopPropagation(),this.surrender()})}start(t){if(this.active)return;this.opts=t,this.active=!0,this.state="intro",this.t=0,this.z=0,this.result=null,this.fx.clear(),this.relayout(),this.me=new o0(this,t.me.inst,-1),this.foe=new o0(this,t.foe.inst,1,t.foe.damageScale),this.fighters=[this.me,this.foe],this.timeLeft=rs.time;const e=Er((t.foe.profile.trophies||0)/1200,0,1);this.bot={react:1.5+2*e,err:1.35-.55*e,tol:1.5-.35*e,spread:1.6-.45*e,rate:.5+.25*e,rest:1.3-.5*e,ph:Te(0,6),aimY:this.me.y,hold:!1,burstT:Te(.6,1.2)},this.lock=!1;for(const n of this.fighters)n.aim.set(-n.side*4,(co+ho)/2+1,Mr),n.pose(0,this.halfW,!0);this.me.aim.copy(this.foe.center),this.retMat.uniforms.uAmmo.value=wc(t.me.inst.weapon),this.cards.forEach((n,i)=>{const r=i?t.foe:t.me;n.ava.innerHTML=br(r.profile.avatar),n.name.textContent=r.profile.name,n.gun.innerHTML=`${vn[r.inst.weapon].name} ${Cr(r.inst.evo||0)}`;const a=i?this.foe:this.me;n.hp.set(a.hp,a.maxHp,!0)}),this.hideBanner(),this.el.classList.remove("off","on","fight","low")}relayout(){const t=this.ctx.camera.aspect;this.halfW=Ah/2*t,this.arena.build(this.halfW,this.halfW-Xl+.55)}view(t){return this.active?{cx:0,cy:KS,viewH:Ah*(1+(1-QS(this.z))*.08)}:t}pointer(t,e,n){!this.active||this.state!=="intro"&&this.state!=="fight"||(n===!0&&this.me.trigger.press(this.me.stats),n===!1&&this.release())}release(t=!1){this.active&&this.me.trigger.release(t)}surrender(){(this.state==="fight"||this.state==="intro")&&this.ko(this.me,!0)}update(t){if(!this.active)return;if(this.t+=t,this.state==="out"){if(this.z=Math.max(0,this.z-t/.5),this.z<=0)return this.finish()}else this.z=Math.min(1,this.z+t/.7);this.state==="intro"&&this.intro(),this.state==="fight"&&(this.timeLeft-=t,this.timeLeft<=0&&(this.timeLeft=0,this.ko(this.me.hp/this.me.maxHp<=this.foe.hp/this.foe.maxHp?this.me:this.foe))),this.state==="ko"&&this.t>1.8&&this.showResult();const e=this.state==="fight";for(const n of this.fighters){if(!n.alive)continue;this.state!=="result"&&this.state!=="out"&&n.move(t);const i=n.stats;n.spread=Math.max(i.minSpread,n.spread-(i.maxSpread-i.minSpread)/i.convergence*t),n.sinceShot+=t,n.trigger.update(t,n.gun.canFire)}this.me.alive&&this.aimPlayer(t),this.foe.alive&&this.aimBot(t);for(const n of this.fighters){if(!n.alive)continue;n.pose(t,this.halfW);const i=1-Er((n.spread-n.stats.minSpread)/(n.stats.maxSpread-n.stats.minSpread),0,1);n.gun.update(t,i),e&&this.trigger(n,n===this.me?this.foe:this.me),n.pop&&(n.pop.t-=t)<=0&&this.flushPop(n)}for(const n of this.wrecks)n.t-=t,n.t>0&&Math.random()<t*14&&this.fx.puff(n.obj.position,la.set(Te(-.3,.3),Te(1.2,2.2),0),Te(.35,.6),Te(.9,1.4),"dark",1.5,.55);this.updateReticle(t),this.fx.update(t)}intro(){const t=this.t;t>.2&&!this.el.classList.contains("on")&&this.el.classList.add("on");const e=3-Math.floor((t-.6)/.75);if(t>.6&&e>=1&&this.shownCount!==e&&(this.shownCount=e,this.showBanner("",`${e}`,"","","count")),t>.6+3*.75){this.state="fight";for(const n of this.fighters)n.sinceShot=1/n.stats.fireRate;this.shownCount=0,this.el.classList.add("fight"),this.showBanner("","БОЙ!","","","count"),this.bannerOff=this.t+.6}}aimPlayer(t){const e=this.foe;this.lock=this.state==="fight"&&e.alive,e.alive&&this.me.aim.lerp(e.center,1-Math.exp(-t*ZS)),this.me.aim.z=Mr}aimBot(t){const e=this.bot,n=this.me;e.aimY+=(n.center.y-e.aimY)*(1-Math.exp(-t*e.react));const i=e.err*(Math.sin(this.t*1.9+e.ph)*.7+Math.sin(this.t*4.3+e.ph*2)*.3);this.foe.aim.set(n.center.x,e.aimY+i,Mr),e.burstT-=t,e.burstT<=0&&(e.hold=!e.hold,e.burstT=e.hold?Te(.35,.8):Te(.8,1.6)*e.rest),this.foe.trigger.held=e.hold}trigger(t,e){if(!t.gun.canFire||!e.alive){t.onTarget=!1;return}const i=t.m.muzzleWorld(la),r=t.m.boreDir(a0);t.onTarget=e.rayHit(i,r,t===this.foe?this.bot.tol:1)>0;const a=t.stats,o=t.trigger.state(a,t.spread,t.sinceShot,t.spreadAfterShot);(!o.manual||t===this.foe)&&!t.onTarget||o.ready&&(t===this.foe&&o.manual&&t.sinceShot<o.interval/this.bot.rate||(t.sinceShot=t.trigger.consume(t.sinceShot,o),this.shoot(t,e)))}shoot(t,e){var c,h;const n=this.fx,i=t.stats,{pos:r,dir:a}=t.gun.fire(),o=t.spread/s0*r0*(t===this.foe?this.bot.spread:1);t.spread=Math.min(i.maxSpread,t.spread+i.bloom),t.spreadAfterShot=t.spread,t===this.me&&(this.pulse=1,this.cone.kick(),(h=(c=this.ctx).onShot)==null||h.call(c,i));const l=t.inst.evo||0;for(let u=0;u<i.pellets;u++){const f=(Math.random()*2-1)*o*Math.sqrt(Math.random()),p=Math.cos(f),g=Math.sin(f),v=new b(a.x*p-a.y*g,a.x*g+a.y*p,0).normalize(),m=new b;if(e.rayHit(r,v,1,m)>0){const d=new b,_=x=>e.alive?x.copy(d.copy(e.center).add(m)):x.copy(d);_(d),n.shot(i,r,_,x=>(this.hit(t,e,x),e.alive?void 0:"drop"),i0,t.gun.spec.pellet,l,t.gun.spec.ammo)}else{let _=(-t.side*(this.halfW+2)-r.x)/(v.x||1e-4);v.y<-.001&&(_=Math.min(_,-r.y/v.y)),v.y>.001&&(_=Math.min(_,(15-r.y)/v.y));const x=r.clone().addScaledVector(v,Math.max(1,_)),y=x.y<.05;n.shot(i,r,k=>k.copy(x),y?k=>n.impact(k,fr.set(0,1,.2).normalize(),["#8b8f99","#6f767d"],.5,l):null,i0,t.gun.spec.pellet,l,t.gun.spec.ammo)}}}hit(t,e,n){const i=this.fx,r=fr.set(-e.side*.8,.2,.6).normalize();if(i.impact(n,r,Rl,.6*t.gun.spec.impact+.35,t.inst.evo||0),!e.alive||this.state!=="fight")return;const a=t.stats.damage;e.hp=Math.max(0,e.hp-a),e.gun.rec.av+=Te(1.5,3),e.gun.rec.sv+=4,this.cards[e===this.me?0:1].hp.set(e.hp,e.maxHp),e.pop??(e.pop={t:JS,dmg:0,pos:n.clone()}),e.pop.dmg+=a,e.hp<=0&&this.ko(e)}flushPop(t){const e=t.pop;t.pop=null;const n=this.ctx.project(e.pos);this.ctx.hud.popup(n.x,n.y-14,`-${ye(e.dmg)}`,t===this.me?"miss":"z3")}ko(t,e=!1){var c,h;if(this.state!=="fight"&&this.state!=="intro")return;this.state="ko",this.t=0,this.lock=!1,this.el.classList.remove("fight"),this.hideBanner();const n=this.fx;t.alive=!1,t.hp=0,this.cards[t===this.me?0:1].hp.set(0,t.maxHp),t.pop&&this.flushPop(t);const i=t.center.clone(),r=fr.set(0,.2,1).normalize(),a=(t===this.me?this.foe:this.me).inst.evo||0;n.impact(i,r,[...Rl,"#ff7a45"],3.2,a),n.ring(i,r,.45,.4,3.6,1,a);for(let u=0;u<8;u++)n.puff(i,la.set(Te(-2,2),Te(0,2.5),Te(-.5,.8)),Te(.35,.6),Te(.9,1.5),u%3?"dark":"grey",2.5,.8);const o=t.m.root,l=t===this.foe;if(l){o.visible=!1;for(let u=0;u<28;u++)n.crumb(i,la.set(Te(-1,1),Te(.2,1.4),Te(-.3,.9)).normalize(),Rl[u%Rl.length],1.6);n.ring(i,r,.35,.3,2.4,1,a)}else n.drop(o,new b(-t.side*Te(1,3),Te(4,7),Te(.5,1.5)),new b(Te(-3,3),Te(-2,2),-t.side*Te(5,9)),.45,null).life=60,this.wrecks.push({obj:o,t:3});this.result={won:l,forfeit:e,coins:l?this.opts.coins:0,parts:l?fS(this.foe.inst):0,from:l?this.ctx.project(i):null},(h=(c=this.ctx).onResult)==null||h.call(c,this.result)}showResult(){this.state="result";const t=this.result;if(t.won){this.bLoot.innerHTML=`<div class="parts-loot"><i class="gear-s">${rc}</i><b>+0</b></div>`,this.showBanner("ПОБЕДА",`+$${ye(t.coins)} · 🏆 +${rs.trophyWin}`,`Оружие соперника разобрано на детали: +${t.parts}`,"Забрать","win");const e=this.bLoot.querySelector(".parts-loot"),n=e.querySelector("b"),i=Math.min(12,Math.max(4,t.parts));this.ctx.hud.flyParts(t.from.x,t.from.y,i,e,r=>{n.textContent=`+${Math.round(t.parts*(r+1)/i)}`,e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")})}else this.bLoot.innerHTML="",this.showBanner(t.forfeit?"ТЫ СДАЛСЯ":"ПОРАЖЕНИЕ",`🏆 −${rs.trophyLoss}`,"Прокачай оружие в тире и возвращайся","Ок","lose")}leave(){this.state="out",this.hideBanner(),this.reticle.visible=!1,this.el.classList.remove("on","fight")}finish(){var t,e;for(const n of this.fighters)this.scene.remove(n.m.root),n.m.root.traverse(i=>i.geometry&&i.geometry.type!=="LatheGeometry"&&i.geometry.dispose());this.fx.clear(),this.wrecks.length=0,this.fighters=[],this.active=!1,this.state="idle",this.el.classList.add("off"),(e=(t=this.ctx).onDone)==null||e.call(t,this.result)}updateReticle(t){const e=this.me,n=e.alive&&(this.state==="fight"||this.state==="intro"&&this.z>.9);this.reticle.visible=n;const i=e.m.muzzleWorld(la),r=e.m.boreDir(a0),a=Math.max(1,fr.subVectors(e.aim,i).length()),o=e.spread/s0*r0,l=e.trigger.state(e.stats,e.spread,e.sinceShot,e.spreadAfterShot).charge;if(fr.copy(i).addScaledVector(r,a),this.cone.update(t,i,fr,a*Math.tan(o),!0,e.gun.canFire?l:0,n,e.inst.evo||0),this.bannerOff&&this.t>this.bannerOff&&(this.bannerOff=0,this.hideBanner()),!n)return;this.reticle.position.copy(fr),this.reticle.position.z=Mr+.4,this.reticle.scale.setScalar(Ah/14.56);const c=this.retMat.uniforms;c.uR.value=Er(a*Math.tan(o)/this.reticle.scale.x,.1,1.1),c.uColor.value.setRGB(...e.onTarget?[.25,1,.38]:[1,.5,.1]),this.pulse=Math.max(0,(this.pulse||0)-t*6),c.uPulse.value=this.pulse,c.uFill.value=e.gun.state==="reload"?e.gun.reloadProgress:e.gun.canFire?l:0,c.uTime.value=this.t;const h=e.gun,u=Math.min(h.magSize,24),f=h.state==="reload"&&h.spec.reload==="mag"?h.reloadProgress:h.ammo/h.magSize;c.uSticks.value=u,c.uLeft.value=Math.ceil(f*u-1e-6),c.uReloading.value=h.state==="reload"?1:0}updateHud(t){if(this.active){for(const e of this.cards)e.hp.tick(t);this.timeEl.textContent=`${Math.ceil(this.timeLeft)}`,this.el.classList.toggle("low",this.state==="fight"&&this.timeLeft<10)}}showBanner(t,e,n,i="",r=""){this.bStep.textContent=t,this.bTitle.textContent=e,this.bText.innerHTML=n,this.bBtn.textContent=i,r!=="win"&&(this.bLoot.innerHTML=""),this.banner.className=`du-banner show ${r}`}hideBanner(){this.banner.classList.remove("show")}}const eE=s=>document.querySelector(s),Ph=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),nE=s=>Object.values(s.levels||{}).reduce((t,e)=>t+e,0);class iE{constructor(t){this.ctx=t,this.el=eE("#modal"),this.card=this.el.querySelector(".m-card"),this.title=this.el.querySelector(".m-title"),this.body=this.el.querySelector(".m-body"),this.tabs=this.el.querySelector(".dock-tabs"),this.tabs.addEventListener("click",n=>{const i=n.target.closest("[data-act]");i&&!i.disabled&&this.act(i.dataset.act,i.dataset)}),this.view=null,this.timers=[];const e=n=>{n.stopPropagation(),this.view!=="search"&&this.close()};this.el.querySelector(".m-close").addEventListener("click",e),this.el.querySelector(".m-backdrop").addEventListener("click",e),this.body.addEventListener("click",n=>{n.stopPropagation();const i=n.target.closest("[data-act]");i&&!i.disabled&&this.act(i.dataset.act,i.dataset)}),this.body.addEventListener("input",n=>{n.target.classList.contains("pr-name")&&this.rename(n.target.value)})}get open(){return!!this.view}show(t,e){this.view=t,this.title.innerHTML=e,this.el.classList.add("open"),this.el.dataset.view=t,this.el.inert=!1,this.tabs.innerHTML=""}close(){var t,e;for(const n of this.timers)clearTimeout(n);this.timers=[],this.view==="profile"&&this.ctx.actions.profileChanged(),this.view=null,this.el.classList.remove("open"),this.el.inert=!0,(e=(t=document.activeElement)==null?void 0:t.blur)==null||e.call(t)}refresh(){this.view==="floors"?this.renderFloors():this.view==="lobby"&&this.renderLobby()}owned(){return this.ctx.lanes.filter(t=>t.armed).map(t=>({inst:t.instance(),src:{lane:t.i},where:`Линия ${t.i+1}`}))}weaponCard(t,e="",n=""){const i=mi[Math.min(t.evo||0,mi.length-1)],r=this.ctx.thumb(t),a=Ks(t);return`<div class="w-card ${n}" style="--rc:${i.color}">
      <div class="w-thumb">${r?`<img alt="" src="${r}">`:""}</div>
      <div class="w-name"><span>${vn[t.weapon].name}</span>${Cr(t.evo||0)}</div>
      <div class="w-meta">⚔ ${ye(Zs(a))} урона/с · прокачек ${nE(t)}</div>${e}</div>`}openProfile(){this.show("profile","Профиль"),this.renderProfile()}renderProfile(){this.tabs.innerHTML='<span class="dock-tab on">Профиль</span>';const t=this.ctx.state.profile;this.body.innerHTML=`<div class="pr-top"><span class="ava">${br(t.avatar)}</span>
      <div class="pr-fields"><label for="pr-name">Ник — его видят соперники в дуэлях</label>
        <input id="pr-name" class="pr-name" maxlength="${Om}" value="${Ph(t.name)}" autocomplete="off" spellcheck="false">
        <div class="pr-stats"><span>🏆 ${t.trophies||0}</span><span>Победы ${t.wins||0}</span><span>Поражения ${t.losses||0}</span></div></div></div>
      <div class="p-sec">Аватар</div>
      <div class="ava-grid">${Ca.map((e,n)=>`<button class="ava-pick ${n===t.avatar?"on":""}" data-act="avatar" data-i="${n}">${br(n)}</button>`).join("")}</div>`}rename(t){const e=hw(t);e&&(this.ctx.state.profile.name=e,this.ctx.actions.profileChanged())}openFloors(){this.show("floors","Цеха"),this.renderFloors()}renderFloors(){const{state:t}=this.ctx;this.tabs.innerHTML='<span class="dock-tab on">Лифт по цехам</span>';const e=Cs.map((n,i)=>{var u;const r=t.floors[i],a=i===t.cur,o=r?Dm(r.lanes.filter(f=>f.unlocked).map(f=>f.line||0)):0,l=a?"ты здесь":r?r.ws.done?"пройден":"в работе":"закрыт",c=!r&&((u=t.floors[i-1])==null?void 0:u.ws.done),h=a?'<span class="fl-here">здесь</span>':r?`<button class="m-btn gold" data-act="floor" data-i="${i}">Поехать</button>`:c?'<button class="m-btn gold" data-act="lift">Открыть лифтом</button>':'<span class="fl-lock">🔒 босс цеха ниже</span>';return`<div class="fl-row ${a?"here":""} ${r?"":"locked"}"><span class="fl-n">${i+1}</span>
        <div class="fl-info"><b>${n.name}</b><small>${l}${r?` · ★${o} · ×${ye(n.scale)}`:""} · ${n.lines.map(f=>f.short).join(", ")}</small></div>${h}</div>`}).join("");this.body.innerHTML=`<div class="fl-list">${e}</div>
      <div class="m-note">Каждый цех помнит свои линии и прокачку. Монеты, детали и модули поведения едут с тобой.</div>`}openDuel(){const t=this.owned();if(!this.pickKey||!t.some(e=>e.inst.id===this.pickKey)){const e=t.reduce((n,i)=>!n||Zs(Ks(i.inst))>Zs(Ks(n.inst))?i:n,null);this.pickKey=(e==null?void 0:e.inst.id)??null}this.show("lobby","Дуэль"),this.renderLobby()}renderLobby(){this.el.dataset.view="lobby",this.tabs.innerHTML='<span class="dock-tab on">Дуэль</span>';const t=this.ctx.state.profile,n=this.owned().map(({inst:i,where:r})=>`<div class="w-card ${i.id===this.pickKey?"sel":""}" data-act="duelpick" data-id="${i.id}" style="--rc:${mi[i.evo||0].color}">
        <div class="w-thumb">${this.ctx.thumb(i)?`<img alt="" src="${this.ctx.thumb(i)}">`:""}</div>
        <div class="w-name"><span>${vn[i.weapon].name}</span>${Cr(i.evo||0)}</div>
        <div class="w-meta">⚔ ${ye(Zs(Ks(i)))}/с · ${r}</div></div>`).join("");this.body.innerHTML=`<div class="lb-vs">${this.playerCard(t)}<div class="lb-x">VS</div>
        <div class="lb-card"><span class="ava"><span class="ava-face" style="background:#33436a">?</span></span><b>Соперник</b><small>подбор по силе оружия</small></div></div>
      <div class="p-sec">Чем воюешь<small>оружие не теряется при поражении</small></div>
      <div class="lb-pick">${n||'<div class="m-note">На линиях цеха пока нет оружия</div>'}</div>
      <div class="m-note">Прицел наводится на соперника сам. Тап / удержание — быстрый огонь; отпусти — автоогонь со сведением.
        Победа: монеты, 🏆 +${rs.trophyWin} и детали — оружие соперника разлетается на запчасти.</div>
      <div class="p-foot"><button class="m-btn gold big" data-act="search" ${this.pickKey?"":"disabled"}>В бой!</button></div>`}playerCard(t){return`<div class="lb-card"><span class="ava">${br(t.avatar)}</span><b>${Ph(t.name)}</b><small>🏆 ${t.trophies||0}</small></div>`}search(){const t=this.owned().find(v=>v.inst.id===this.pickKey);if(!t)return;const{state:e,lanes:n}=this.ctx,i=JSON.parse(JSON.stringify(t.inst)),r=this.ctx.unlockedTypes(),a=Math.max(0,...r.map(v=>$l.indexOf(v))),o=uw(e.profile),l=vS(i,a,eg(e.profile),Math.random,r),c=l.inst;this.view="search",this.el.dataset.view="search";const h=performance.now();this.body.innerHTML=`<div class="lb-vs">${this.playerCard(e.profile)}<div class="lb-x">VS</div>
        <div class="lb-card searching"><span class="ava"></span><b>???</b><small class="lb-timer">0:00</small></div></div>
      <div class="lb-status">Поиск соперника<span class="dots"></span></div>
      <div class="p-foot"><button class="m-btn" data-act="cancel">Отмена</button></div>`;const u=this.body.querySelector(".searching .ava"),f=this.body.querySelector(".lb-timer");let p=0;const g=()=>{if(this.view!=="search")return;u.innerHTML=br(p++%Ca.length);const v=Math.floor((performance.now()-h)/1e3);f.textContent=`0:${String(v).padStart(2,"0")}`,this.timers.push(setTimeout(g,120))};g(),this.timers.push(setTimeout(()=>{if(this.view!=="search")return;this.view="found";const v=mi[c.evo||0];this.body.innerHTML=`<div class="lb-vs">${this.playerCard(e.profile)}<div class="lb-x">VS</div>
          <div class="lb-card" style="border-color:${v.color}"><span class="ava">${br(o.avatar)}</span><b>${Ph(o.name)}</b><small>🏆 ${o.trophies}</small>
          <div class="w-thumb">${this.ctx.thumb(c)?`<img alt="" src="${this.ctx.thumb(c)}">`:""}</div>
          <small>${vn[c.weapon].name} ${Cr(c.evo||0)}</small></div></div>
        <div class="lb-status">${l.kind==="challenge"?"Сильный соперник!":"Соперник найден!"}</div>`,this.timers.push(setTimeout(()=>{this.view==="found"&&(this.close(),this.ctx.actions.startDuel(i,o,c,l))},1500))},1600+Math.random()*1800))}act(t,e){const{state:n,actions:i}=this.ctx;switch(t){case"avatar":n.profile.avatar=+e.i,i.profileChanged(),this.renderProfile();break;case"floor":i.switchFloor(+e.i);break;case"lift":this.close(),i.lift();break;case"duelpick":this.pickKey=e.id,this.renderLobby();break;case"search":this.search();break;case"cancel":for(const r of this.timers)clearTimeout(r);this.timers=[],this.view="lobby",this.renderLobby();break}}}const Ri=256,li=128,Xn=2;let hi=null,pr=null,Lh=null;const $s=new Uo(-1,1,1,-1,.1,100),Dh=new Map,kh=new b,io=new b,Ih=new Bn;function sE(s){hi=s}const ql=new Uint8Array(256);for(let s=0;s<256;s++){const t=s/255;ql[s]=Math.round(255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055))}function rE(s){if(!hi)return null;const t=`${s.weapon}|${s.evo||0}|${JSON.stringify(s.mods||{})}`;if(Dh.has(t))return Dh.get(t);if(!pr){pr=new No,pr.add(new Fo(Ne.sky,Ne.ground,1));const v=new Oo(Ne.key,Ne.keyIntensity);v.position.copy(Ne.keyDir).multiplyScalar(20),pr.add(v),Lh=new Fn(Ri*Xn,li*Xn)}const e=new Ld[s.weapon];s.evo&&e.setEvo(s.evo,Bo[s.weapon]),yo(e,s.mods||{}),e.root.rotation.set(-.08,-.22,0),e.root.updateMatrixWorld(!0),e.measure(),pr.add(e.root),Ih.copy(e.rest).applyMatrix4(e.root.matrixWorld),Ih.getSize(kh),Ih.getCenter(io);const n=Math.max(kh.x/2/(Ri/li),kh.y/2)*1.08;$s.left=-n*(Ri/li),$s.right=n*(Ri/li),$s.top=n,$s.bottom=-n,$s.position.set(io.x,io.y,30),$s.lookAt(io.x,io.y,0),$s.updateProjectionMatrix();const i=hi.getRenderTarget(),r=hi.getClearColor(new _t),a=hi.getClearAlpha();hi.setRenderTarget(Lh),hi.setClearColor(0,0),hi.clear(),hi.render(pr,$s);const o=new Uint8Array(Ri*Xn*li*Xn*4);hi.readRenderTargetPixels(Lh,0,0,Ri*Xn,li*Xn,o),hi.setRenderTarget(i),hi.setClearColor(r,a),pr.remove(e.root),e.root.traverse(v=>v.geometry&&v.geometry.type!=="LatheGeometry"&&v.geometry.dispose());const l=document.createElement("canvas");l.width=Ri*Xn,l.height=li*Xn;const c=l.getContext("2d"),h=c.createImageData(Ri*Xn,li*Xn),u=Ri*Xn*4;for(let v=0;v<li*Xn;v++){const m=(li*Xn-1-v)*u,d=v*u;for(let _=0;_<u;_+=4){const x=o[m+_+3],y=x?255/x:0;h.data[d+_]=ql[Math.min(255,Math.round(o[m+_]*y))],h.data[d+_+1]=ql[Math.min(255,Math.round(o[m+_+1]*y))],h.data[d+_+2]=ql[Math.min(255,Math.round(o[m+_+2]*y))],h.data[d+_+3]=x}}c.putImageData(h,0,0);const f=document.createElement("canvas");f.width=Ri,f.height=li;const p=f.getContext("2d");p.imageSmoothingQuality="high",p.drawImage(l,0,0,Ri,li);const g=f.toDataURL("image/png");return Dh.set(t,g),g}function aE({lanes:s,fx:t,draw:e,select:n}){const i={paused:!0,speed:.25,frame:0,lane:s[0]};for(const c of s)c.review=!0;const r=document.createElement("div");r.className="fx-review",r.innerHTML=`<label>Кадры выстрела <select aria-label="Оружие">${s.map((c,h)=>`<option value="${h}">${c.weapon.name}</option>`).join("")}</select></label>
    <button data-action="shot">Выстрел</button><button data-action="play">▶ ¼ скорости</button><button data-action="step">Кадр +1</button><output>0 мс</output>`,document.body.append(r);const a=r.querySelector("output"),o=r.querySelector('[data-action="play"]');i.tick=c=>{i.frame+=c*60,a.value=`${Math.round(i.frame)} к · ${Math.round(i.frame/60*1e3)} мс`};const l=()=>{i.paused=!0,o.textContent="▶ ¼ скорости"};return r.querySelector("select").addEventListener("change",c=>{i.lane=s[+c.target.value],l(),n(i.lane),e(0)}),r.addEventListener("click",c=>{const h=c.target.dataset.action;if(h==="shot"){l(),t.clear();const u=i.lane;u.gun.reset(),u.model.seatNewMag();for(const f of Object.keys(u.gun.rec))u.gun.rec[f]=0;u.resetReview(),u.update(0),u.spread=u.stats.minSpread,u.sinceShot=0,e(0),u.shoot(),i.frame=0,e(0)}else h==="step"?(l(),e(1/60)):h==="play"&&(i.paused=!i.paused,o.textContent=i.paused?"▶ ¼ скорости":"Ⅱ Пауза")}),n(i.lane),i}const mr=s=>document.getElementById(s),oE=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;function lc(s=0){return{idx:s,id:Cs[s].id,fired:0,delivery:fi.every,deliveries:0,burst:0,rush:!1,boss:null,done:!1,modules:{},story:{},playT:0,rare:{},gold:{},sets:{},partsCrushed:0,frenzy:0,frenzyT:0,past:[],keep:{},nightT:0,autoT:0,shredK:0,bonusAt:0,quests:null}}const lE=["modules","keep","past","story","playT","frenzy","frenzyT","nightT","bonusAt"];function cE(s){return{...lc(s),done:!0,fired:Cs[s].gates.length,boss:{hp:0,max:1,dead:!0,drops:2}}}class hE{constructor(t){this.ctx=t,this.quests=null,this.gpm=0,this.chip=mr("ws-chip"),this.chip.addEventListener("pointerdown",e=>e.stopPropagation()),this.chip.addEventListener("click",e=>{e.stopPropagation(),this.ctx.openFloors()}),this.chipName=this.chip.querySelector(".ws-name"),this.chipStars=this.chip.querySelector(".ws-stars b"),this.chipFill=this.chip.querySelector(".ws-fill"),this.chipNext=this.chip.querySelector(".ws-next"),this.deliveryEl=mr("ws-delivery"),this.toasts=mr("toasts"),this.banner=mr("ws-banner"),this.bannerAct=null,this.banner.querySelector(".wb-btn").addEventListener("click",e=>{e.stopPropagation(),this.banner.classList.remove("show");const n=this.bannerAct;this.bannerAct=null,n==null||n()}),this.liftBtn=mr("ws-lift"),this.liftBtn.addEventListener("pointerdown",e=>e.stopPropagation()),this.liftBtn.addEventListener("click",e=>{e.stopPropagation(),this.ctx.lift()}),this.frenzyEl=mr("frenzy"),this.frenzyFill=this.frenzyEl.querySelector(".fz-bar i"),this.frenzyBtn=this.frenzyEl.querySelector(".fz-btn"),this.frenzyTime=this.frenzyEl.querySelector(".fz-time"),this.frenzyBtn.addEventListener("pointerdown",e=>{e.stopPropagation(),this.startFrenzy()}),this.hudEl=mr("hud"),this.earnedWindow=0,this.shown="",this.attach(t.state.ws)}attach(t){this.s=t,t.idx??(t.idx=0),t.past??(t.past=[]),t.keep??(t.keep={});for(const e of this.def.gates.slice(0,t.fired)){const n=e.kind==="machine"?this.def.machines[e.id]:null;n!=null&&n.keep&&(t.keep[n.keep]=!0)}this.bossJunk=null,this.shown="",this.chipName.textContent=this.def.name}welcome(){const t=this.def.lines[0],e=t.weapon?vn[t.weapon].name:null;this.showBanner(`ЦЕХ ${this.s.idx+1}`,this.def.name,`Линия 1 — «${t.name}»${e?`, на ней <b>${e}</b>`:""}. Здесь всё ×${this.def.scale}: и хлам, и награды.<br>Прошлые цеха ждут внизу — кнопка «Цеха» наверху`,"line","Поехали!")}get def(){return Cs[this.s.idx]}get nextDef(){return Cs[this.s.idx+1]??null}get canLift(){return this.s.done&&!!this.nextDef&&!this.ctx.state.floors[this.s.idx+1]}get stars(){return Dm(this.ctx.lanes.filter(t=>t.unlocked).map(t=>t.save.line))}get rush(){return this.s.rush&&!this.s.done}get frenzyOn(){return this.s.frenzyT>0}startFrenzy(){var e;const t=this.s;t.frenzyT>0||t.frenzy<Xs.need||(t.frenzy=0,t.frenzyT=Xs.seconds,(e=this.quests)==null||e.onFrenzy(),this.showBanner("ЯРОСТЬ",`${Xs.seconds} секунд`,"Все пушки бьют на полном темпе, разброс почти не растёт","rush","В бой!"),clearTimeout(this.bannerT),this.bannerT=setTimeout(()=>this.banner.classList.remove("show"),1400))}module(t){return this.s.modules[t]??-1}raiseModule(t){this.module(t)<0||this.s.modules[t]++}incomeMul(){let t=1;for(const e of this.def.gates.slice(0,this.s.fired))e.kind==="machine"&&(t*=this.def.machines[e.id].income??1);return t}machineOn(t){const e=this.def.gates.findIndex(n=>n.kind==="machine"&&n.id===t);return e>=0&&e<this.s.fired}gateOf(t){var e;return((e=this.def.gates.find(n=>n.kind==="line"&&n.line===t))==null?void 0:e.at)??0}flow(t){let e=1;this.rush&&(e*=this.def.rush.flow),this.s.burst>0&&(e*=fi.flow);const n=this.s.boss&&!this.s.boss.dead&&t.i===this.def.boss.line;return{flowMul:e,spawn:!n}}earned(t){this.earnedWindow+=t}crate(t){return Math.max(10,this.gpm*t)}onKill(t,e){var r;const n=this.s;if(n.frenzyT<=0&&(n.frenzy=Math.min(Xs.need,n.frenzy+1)),n.story.firstKill||(n.story.firstKill=!0,this.toast("🦆","Первая добыча!","Утка лопнула — монеты твои")),e.variant&&e.kind===t.line.junk){const a=t.i;e.variant==="rare"?n.rare[a]=(n.rare[a]||0)+1:n.gold[a]=(n.gold[a]||0)+1,e.variant==="golden"&&!n.story.goldKill&&(n.story.goldKill=!0,this.toast("✨",`Золото: ${Le[e.kind].name}`,"Награда ×10 и запись в каталог")),this.checkCatalog(t)}(r=this.quests)==null||r.onKill(t,e),this.machineOn("partshred")&&(n.shredK=(n.shredK||0)+1)>=Rm.kills&&(n.shredK=0,this.ctx.parts(1));const i=this.def.mini;if(e.kind===i.junk){const a=this.crate(i.crate);this.ctx.earn(a,e,`Мини-босс: +$${ye(a)}`),this.toast(i.icon,"Мини-босс разбит!",`${Le[i.junk].name} · ящик +$${ye(a)}`)}e.kind===this.def.boss.junk&&this.bossDown(t,e)}onPress(t,e){const n=this.s;n.story.firstPress||(n.story.firstPress=!0,this.toast("🗜️","Пресс","Хлам доехал до пресса — за него ничего не платят. Монеты дают только то, что разбила пушка")),n.keep.sorter&&e.kind!==this.def.boss.drop&&(n.partsCrushed++,n.partsCrushed%Cm.partsEvery===0&&this.ctx.parts(1))}onStar(t){this.toast("⭐",`Звезда линии «${t.line.short}»`,`★${t.stars} · +20% к её награде`,"star")}checkCatalog(t){const e=this.s,n=t.i,i=t.save.cat||0,r=e.rare[n]||0,a=e.gold[n]||0;(i===0?yr.set1.rare<=r:i===1&&r>=yr.set2.rare&&a>=yr.set2.golden)&&(t.save.cat=i+1,this.ctx.parts(yr.parts),this.toast("📒",`Каталог: «${t.line.short}» ${i?"золотой экспонат":"собраны"}`,`+30% к награде линии · +${yr.parts} деталей`,"big"))}update(t){var o,l;const e=this.s;e.playT+=t,e.frenzyT>0&&(e.frenzyT=Math.max(0,e.frenzyT-t)),this.gpm+=(this.earnedWindow*(60/Math.max(t,.001))-this.gpm)*Math.min(1,t/60),this.earnedWindow=0;const n=this.def.story.golden;n&&!e.story.golden&&e.playT>=n&&this.ctx.lanes[0].armed&&(e.story.golden=!0,this.ctx.lanes[0].conveyor.spawn(this.ctx.lanes[0].line.junk,"golden")),this.machineOn("autobuy")&&(e.autoT=(e.autoT||0)+t,e.autoT>=Ta.every&&(e.autoT=0,(l=(o=this.ctx).autobuy)==null||l.call(o)));const i=e.keep.night?e.past.filter(c=>c!==e.id).length:0;if(i&&(e.nightT=(e.nightT||0)+t,e.nightT>=Bu.every&&(e.nightT-=Bu.every,this.ctx.parts(i))),e.delivery-=t,e.burst>0&&(e.burst=Math.max(0,e.burst-t)),e.delivery<=0){e.delivery+=fi.every,e.deliveries++,e.burst=fi.burst;const c=this.crate(fi.crate);this.ctx.earn(c,null,`Поставка №${e.deliveries}: +$${ye(c)}`),this.ctx.parts(fi.parts),this.toast("📦",`Большая поставка №${e.deliveries}`,`Ящик: +$${ye(c)} · +${fi.parts} деталей · хлама ×3 на ${fi.burst} с`,"big")}const r=this.stars,a=this.def.gates;for(;e.fired<a.length&&r>=a[e.fired].at;){const c=a[e.fired];e.fired++,this.fire(c)}e.boss&&!e.boss.dead&&(this.bossJunk||this.spawnBoss(),this.updateBoss(t)),this.render()}fire(t){var n,i;const e=this.s;if(t.kind==="line"){const r=this.ctx.lanes[t.line];this.ctx.openLine(t.line);const a=r.base.weapon?vn[r.base.weapon].name:null,o=r.line.rule?Hu[r.line.rule]:null;o&&((n=e.modules)[i=r.line.rule]??(n[i]=0));const l=[a&&`На линии — ${a}`,o&&`Новое поведение: <b>${o.name}</b> — ${o.text(0)}`].filter(Boolean).join("<br>");this.showBanner(`ЛИНИЯ ${t.line+1}`,r.line.name,l,"line")}else if(t.kind==="machine"){const r=this.def.machines[t.id];r.keep&&(e.keep[r.keep]=!0),this.toast(r.icon,`Станок: ${r.name}`,r.text,"big")}else if(t.kind==="mini"){const r=this.def.mini,a=this.ctx.lanes[r.line].unlocked?this.ctx.lanes[r.line]:this.ctx.lanes[0];a.conveyor.spawn(r.junk),this.toast(r.icon,`Мини-босс: ${Le[r.junk].name}`,`Едет по линии «${a.line.short}» — разбей до пресса`,"big")}else t.kind==="rush"?(e.rush=!0,this.showBanner("АВРАЛ",`«${this.def.rush.name}»`,`Хлама ×${this.def.rush.flow} на всех линиях до босса цеха`,"rush")):t.kind==="boss"&&this.startBoss();this.ctx.refresh()}startBoss(){const t=this.s,e=this.def.boss,i=this.ctx.lanes[e.line].stats??{damage:10*this.def.scale,pellets:1,fireRate:3.5},r=Math.max(400*this.def.scale,i.damage*i.pellets*i.fireRate*.6*e.seconds);t.boss={hp:r,max:r,dead:!1,drops:0},this.spawnBoss(),this.showBanner("БОСС ЦЕХА",e.name,e.text,"boss")}spawnBoss(){const t=this.s,n=this.ctx.lanes[this.def.boss.line].conveyor.hang(this.def.boss.junk);n.hp=t.boss.hp,n.maxHp=t.boss.max,this.bossJunk=n}updateBoss(){const t=this.s,e=this.bossJunk;if(!e||e.kind!==this.def.boss.junk)return;if(!e.alive&&e.state==="gone"&&!t.boss.dead){this.spawnBoss();return}t.boss.hp=e.hp;const n=Math.floor((1-e.hp/e.maxHp)*3);for(;t.boss.drops<Math.min(2,n);)t.boss.drops++,this.spill(e,this.def.boss.drops/2)}spill(t,e){const n=this.def.boss,i=this.ctx.lanes[n.line];for(let r=0;r<e;r++)i.conveyor.spawn(n.drop,null,t.x-1+r*.45,r%3*.3-.3)}bossDown(t,e){const n=this.s;n.boss.dead=!0,n.done=!0,n.rush=!1;const i=this.def.boss;this.spill(e,i.drops);const r=this.crate(i.crate);this.ctx.earn(r,e,`Босс: +$${ye(r)}`),this.ctx.loot(i.loot);const a=e.root.getWorldPosition(new b),o=new b(-.3,.2,1).normalize();for(let h=0;h<4;h++)this.ctx.fx.ring(a,o,.45+h*.12,.4,4+h*1.5,1,h+1);const l=this.nextDef,c=`Трофей: <b>${vn[i.loot].name}</b> встаёт на линию ${i.line+1} · ящик +$${ye(r)}`;l?this.showBanner("БОСС ЦЕХА РАЗБИТ","Цех пройден!",`${c}<br>Открыт лифт в «${l.name}»: новые линии и новые стволы`,"lift","В лифт!",()=>this.ctx.lift()):this.showBanner("БОСС ЦЕХА РАЗБИТ","Цех пройден!",`${c}<br>Это пока последний цех — линии работают дальше`,"lift","Круто!"),this.ctx.refresh()}render(){const t=this.s,e=this.stars,n=this.def.gates,i=n[t.fired],r=t.fired?n[t.fired-1].at:0,a=t.done?this.canLift?"лифт открыт":"цех пройден":i?`${uE(i,this.def)} — ★${i.at}`:"босс цеха",o=i?Math.min(1,(e-r)/Math.max(1,i.at-r)):1,l=t.frenzy>=Xs.need&&t.frenzyT<=0;this.frenzyFill.style.transform=`scaleX(${t.frenzyT>0?t.frenzyT/Xs.seconds:t.frenzy/Xs.need})`,this.frenzyEl.classList.toggle("ready",l),this.frenzyEl.classList.toggle("on",t.frenzyT>0),this.hudEl.classList.toggle("frenzy",t.frenzyT>0),this.frenzyTime.textContent=t.frenzyT>0?`${Math.ceil(t.frenzyT)} с`:"";const c=`${e}|${a}|${o.toFixed(3)}|${Math.ceil(t.delivery)}|${this.rush}|${t.burst>0}|${this.canLift}`;c!==this.shown&&(this.shown=c,this.liftBtn.hidden=!this.canLift,this.canLift&&(this.liftBtn.querySelector("b").textContent=this.nextDef.name),this.chipStars.textContent=e,this.chipFill.style.transform=`scaleX(${o})`,this.chipNext.textContent=a,this.chip.classList.toggle("rush",this.rush),this.deliveryEl.querySelector("b").textContent=t.burst>0?"поставка идёт!":`поставка через ${oE(Math.max(0,t.delivery))}`,this.deliveryEl.classList.toggle("soon",t.delivery<30||t.burst>0))}toast(t,e,n,i=""){const r=document.createElement("div");for(r.className=`toast ${i}`,r.innerHTML=`<span class="t-ic">${t}</span><span class="t-tx"><b></b><small></small></span>`,r.querySelector("b").textContent=e,r.querySelector("small").textContent=n,this.toasts.prepend(r);this.toasts.children.length>4;)this.toasts.lastElementChild.remove();setTimeout(()=>r.classList.add("out"),i==="star"?1800:3600),setTimeout(()=>r.remove(),i==="star"?2300:4100)}showBanner(t,e,n,i="",r="Ок",a=null){const o=this.banner;this.bannerAct=a,o.querySelector(".wb-step").textContent=t,o.querySelector(".wb-title").textContent=e,o.querySelector(".wb-text").innerHTML=n,o.querySelector(".wb-btn").textContent=r,o.className=`show ${i}`,clearTimeout(this.bannerT),a||(this.bannerT=setTimeout(()=>o.classList.remove("show"),6e3))}}function uE(s,t){return s.kind==="line"?`линия ${s.line+1}`:s.kind==="machine"?t.machines[s.id].name:s.kind==="mini"?"мини-босс":s.kind==="rush"?"аврал":"босс цеха"}function dE({state:s,lanes:t,hud:e,busy:n,refresh:i,save:r,reset:a,playtime:o}){const l=document.createElement("div");l.id="cheats",l.innerHTML=`<button class="ch-toggle" aria-label="Читы">🛠</button>
    <div class="ch-body">
      <b>Монеты</b><div class="ch-row"><button data-cheat="coins" data-n="1000">+1K</button><button data-cheat="coins" data-n="100000">+100K</button><button data-cheat="coinsx">×10</button></div>
      <b>Детали</b><div class="ch-row"><button data-cheat="parts" data-n="50">+50</button><button data-cheat="parts" data-n="1000">+1000</button></div>
      <b>Эволюция</b><div class="ch-row"><button data-cheat="evofill">шкала полная</button><button data-cheat="evoup">+1 без испытания</button></div>
      <b>Линии</b><div class="ch-row"><button data-cheat="star">+★ всем линиям</button></div>
      <b>Цех</b><div class="ch-row"><button data-cheat="wsdone">пройти → лифт</button><button data-cheat="bonus">🐷 копилка</button></div>
      <b>Баланс</b><div class="ch-row"><button data-cheat="playtime">📈 график прохождения</button></div>
      <b>Прогресс</b><div class="ch-row"><button data-cheat="reset" class="ch-danger">сбросить всё</button></div>
    </div>`,document.getElementById("hud").append(l),l.addEventListener("pointerdown",p=>p.stopPropagation()),l.addEventListener("click",p=>{if(p.stopPropagation(),p.target.closest(".ch-toggle")){l.classList.toggle("open");return}const g=p.target.closest("[data-cheat]");if((g==null?void 0:g.dataset.cheat)==="reset"){u(g);return}if((g==null?void 0:g.dataset.cheat)==="playtime"){l.classList.remove("open"),o();return}!g||n()||(c(g.dataset.cheat,+g.dataset.n||0),i(),r())});function c(p,g){switch(p){case"coins":case"coinsx":s.money=p==="coins"?s.money+g:Math.max(1e3,s.money*10),e.setMoney(s.money),e.bumpWallet(),e.popup(innerWidth/2,innerHeight*.18,`$${ye(s.money)}`,"money");break;case"parts":s.parts+=g,e.setParts(s.parts),e.bumpParts();break;case"evofill":for(const v of t)v.armed&&f(v);break;case"evoup":for(const v of t)!v.armed||v.trial||(v.save.evo||0)>=xn.length||(f(v),v.evolve());break;case"star":for(const v of t){if(!v.unlocked)continue;const m=5-v.save.line%5;for(let d=0;d<m;d++)v.applyUpgrade("line")}break;case"bonus":s.ws.bonusAt=s.ws.playT;break;case"wsdone":s.ws.done=!0,s.ws.rush=!1,s.ws.boss&&(s.ws.boss.dead=!0);break}}let h=0;function u(p){if(p.classList.contains("armed")){clearTimeout(h),a();return}p.classList.add("armed"),p.textContent="точно? жми ещё раз",h=setTimeout(()=>{p.classList.remove("armed"),p.textContent="сбросить всё"},3e3)}function f(p){const g=p.save,v=g.evo||0;v>=xn.length||(g.kills=Math.max(g.kills||0,xn[v]+(g.evoKillOffset||0)),g.evoRetryAt=0,g.evoAttempts=0,p.refreshEvo())}}const fE=s=>document.getElementById(s),Pl=s=>s[Math.floor(Math.random()*s.length)],pE=["damage","auto","accuracy","reload"];class mE{constructor(t){this.ctx=t,this.el=fE("quests"),this.list=this.el.querySelector(".q-list"),this.el.addEventListener("pointerdown",e=>e.stopPropagation()),this.el.addEventListener("click",e=>{e.stopPropagation();const n=e.target.closest("[data-claim]");n?this.claim(+n.dataset.claim):e.target.closest(".q-head")&&this.el.classList.toggle("folded")}),this.shown="",this.t=0}attach(t){this.s=t.quests??(t.quests={list:[],n:0}),this.fill(),this.shown="",this.render()}fill(){const t=this.s;for(;t.list.length<Pi.slots;){const e=this.make(t.list.map(n=>n.kind));if(!e)break;t.list.push(e)}}make(t){var u;const{lanes:e,workshop:n}=this.ctx,i=1+Pi.grow*this.s.n,r=e.filter(f=>f.unlocked),a=e.filter(f=>f.armed),o={kill:()=>{const f=Pl(a.length?a:r);if(!f)return null;const p=Math.max(1,f.line.flow/(Le[f.line.junk].group||1)),g=Math.max(5,Math.round(p*.9*i/5)*5)*(Le[f.line.junk].group||1);return{kind:"kill",line:f.i,junk:f.line.junk,need:g}},level:()=>{const f=Pl(r);return f?{kind:"level",line:f.i,need:f.save.line+Math.max(2,Math.round(3*Math.sqrt(i)))}:null},stat:()=>{var m;const f=Pl(a);if(!f)return null;const p=Pl(pE),g=ss.find(d=>d.id===p),v=((m=f.save.levels)==null?void 0:m[p])||0;return v>=g.max-1?null:{kind:"stat",line:f.i,stat:p,need:Math.min(g.max,v+Math.max(2,Math.round(2*Math.sqrt(i))))}},stars:()=>n.s.done?null:{kind:"stars",need:n.stars+2},crit:()=>a.length?{kind:"crit",need:Math.round(15*i/5)*5}:null,combo:()=>a.length?{kind:"combo",need:Math.min(30,Math.round(8+2*this.s.n))}:null,frenzy:()=>this.s.n>=2?{kind:"frenzy",need:1}:null,bonus:()=>this.ctx.playT()>=In.first-60?{kind:"bonus",need:1}:null,evolve:()=>a.some(f=>vE(f)>=.5)?{kind:"evolve",need:1}:null},l=Object.keys(o).filter(f=>!t.includes(f)),c=[["kill"],["level"],["stat"]][this.s.n+t.length]??null,h=c?[...c,...l]:gE(l);for(const f of h){if(t.includes(f))continue;const p=(u=o[f])==null?void 0:u.call(o);if(p)return this.reward({...p,got:0})}return null}reward(t){const{workshop:e}=this.ctx,n=Pi.minutes+Math.min(Pi.cap,Pi.step*this.s.n);return t.coins=Math.round(Math.max(Pi.minCoins*this.ctx.scale(),e.gpm*n)),t.parts=Pi.parts+Math.floor(this.s.n/3),t}bump(t,e=1,n=()=>!0){var i;for(const r of((i=this.s)==null?void 0:i.list)??[])r.kind===t&&r.got<r.need&&n(r)&&(r.got=Math.min(r.need,r.got+e))}onKill(t,e){var n;this.bump("kill",1,i=>i.line===t.i&&i.junk===e.kind);for(const i of((n=this.s)==null?void 0:n.list)??[])i.kind==="combo"&&(i.got=Math.max(i.got,Math.min(i.need,t.combo)))}onCrit(){this.bump("crit")}onFrenzy(){this.bump("frenzy")}onBonus(){this.bump("bonus")}onEvolve(){this.bump("evolve")}sync(){var n;const{lanes:t,workshop:e}=this.ctx;for(const i of this.s.list)i.kind==="level"?i.got=Math.min(i.need,t[i.line].save.line):i.kind==="stat"?i.got=Math.min(i.need,((n=t[i.line].save.levels)==null?void 0:n[i.stat])||0):i.kind==="stars"&&(i.got=Math.min(i.need,e.stars))}claim(t){const e=this.s.list[t];!e||e.got<e.need||(this.s.list.splice(t,1),this.s.n++,this.ctx.earn(e.coins,`Квест: +$${ye(e.coins)}`),this.ctx.parts(e.parts),this.fill(),this.shown="",this.render(),this.ctx.save())}update(t){this.s&&(this.t-=t,!(this.t>0)&&(this.t=.25,this.sync(),this.fill(),this.render()))}text(t){var i;const{lanes:e}=this.ctx,n=t.line!=null?e[t.line]:null;switch(t.kind){case"kill":return{icon:"💥",text:`Разбей: ${Le[t.junk].name} ×${t.need}`};case"level":return{icon:"⭐",text:`«Ценность партии» линии «${n.line.short}» до ур. ${t.need}`};case"stat":{const r=ss.find(a=>a.id===t.stat);return{icon:r.icon,text:`${r.title}: ${((i=vn[n.def.weapon])==null?void 0:i.name)??"пушка"} до ур. ${t.need}`}}case"stars":return{icon:"🌟",text:`Набери ★${t.need} в цехе`};case"crit":return{icon:"🎯",text:`Попади в слабое место ${t.need} раз`};case"combo":return{icon:"🔗",text:`Комбо: ${t.need} подряд без пресса`};case"frenzy":return{icon:"🔥",text:"Включи «Ярость»"};case"bonus":return{icon:"🐷",text:"Сбей летучую копилку"};case"evolve":return{icon:"🧬",text:"Выиграй эволюцию любой пушки"}}return{icon:"❔",text:t.kind}}render(){const t=this.s.list.map(n=>`${n.kind}${n.got}/${n.need}`).join("|");if(t===this.shown)return;this.shown=t;const e=this.s.list.filter(n=>n.got>=n.need).length;this.el.querySelector(".q-count").textContent=e?`${e} готово`:`${this.s.n} выполнено`,this.el.classList.toggle("ready",e>0),this.list.replaceChildren(...this.s.list.map((n,i)=>{const{icon:r,text:a}=this.text(n),o=n.got>=n.need,l=document.createElement("div");if(l.className=`q-row${o?" done":""}`,l.innerHTML=`<span class="q-ic"></span><div class="q-body"><div class="q-text"></div>
        <div class="q-bar"><i></i></div><div class="q-sub"><span class="q-n"></span><span class="q-rw"></span></div></div>`,l.querySelector(".q-ic").textContent=r,l.querySelector(".q-text").textContent=a,l.querySelector(".q-bar i").style.transform=`scaleX(${Math.min(1,n.got/n.need)})`,l.querySelector(".q-n").textContent=`${ye(n.got)} / ${ye(n.need)}`,l.querySelector(".q-rw").innerHTML=`$${ye(n.coins)} · ${Vm(n.parts)}`,o){const c=document.createElement("button");c.className="q-claim",c.dataset.claim=i,c.textContent="Забрать",l.append(c)}return l}))}}function gE(s){for(let t=s.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[s[t],s[e]]=[s[e],s[t]]}return s}function vE(s){const t=s.save.evo||0;return t>=xn.length?0:(s.save.kills||0)/xn[t]}const l0=vt("#ffcf3a",{spec:.75,gloss:22,sheen:.12,rim:.4,emissive:"#5a3a00",emissiveIntensity:.55}),c0=vt("#ff8fb4",{spec:.3,gloss:16,rim:.2}),Uh=vt("#1b1d23",{spec:.02,rim:0}),h0=vt("#fffaf0",{spec:.1,rim:.3}),Ll=["#ffd23f","#ffb020","#fff4dc","#ff8fb4"],xE=2.4,qn=.85;function sa(s,t,e,n,i,r,a=r,o=r){const l=new W(new Ke(1,22,16),t);return l.position.set(e,n,i),l.scale.set(r,a,o),s.add(l),l}class _E{constructor(t){this.ctx=t,this.alive=!1,this.active=!1,this.gen=0,this.root=new ut,this.body=new ut,this.root.add(this.body),this.root.visible=!1,t.scene.add(this.root);const e=this.body;sa(e,l0,0,0,0,qn*1.15,qn,qn),sa(e,c0,-qn*1.1,-.05,0,.26,.24,.3).rotation.z=Math.PI/2;for(const i of[.1,-.1])sa(e,Uh,-qn*1.33,-.05,i,.05,.07,.05);for(const i of[.42,-.42]){const r=new W(new ts(.2,.36,12),c0);r.position.set(-.45,qn*.82,i),r.rotation.z=.4,e.add(r)}for(const i of[.3,-.3])sa(e,h0,-qn*.7,.3,i,.13,.15,.08);for(const i of[.3,-.3])sa(e,Uh,-qn*.78,.29,i*1.12,.06,.08,.05);const n=new W(new Qn(.42,.06,.1),Uh);n.position.set(.1,qn*.98,0),e.add(n);for(const[i,r]of[[-.45,.4],[-.45,-.4],[.45,.4],[.45,-.4]]){const a=new W(new Ce(.11,.11,.3,12),l0);a.position.set(i,-qn*.9,r),e.add(a)}this.wings=[1,-1].map(i=>{const r=new ut;r.position.set(.05,qn*.55,i*qn*.7);const a=sa(r,h0,0,.35,i*.25,.32,.55,.06);return a.rotation.x=i*.5,e.add(r),r}),this.ui=document.createElement("div"),this.ui.id="bonus-ui",this.ui.innerHTML='<div class="bn-ring"><b></b></div><div class="bn-hp"><i></i></div><div class="bn-tap">ТАПАЙ!</div>',document.getElementById("hud").append(this.ui),this.ringEl=this.ui.querySelector(".bn-ring"),this.timeEl=this.ui.querySelector(".bn-ring b"),this.hpEl=this.ui.querySelector(".bn-hp i"),this.pos=new b}get s(){return this.ctx.workshop.s}aim(t){return t.copy(this.pos)}update(t){const e=this.s;if(e.bonusAt||(e.bonusAt=In.first),!this.active){if(e.playT<e.bonusAt)return;if(this.ctx.busy()||!this.ctx.lanes.some(n=>n.armed)){e.bonusAt=e.playT+5;return}this.spawn()}this.fly(t)}spawn(){var e,n;const t=this.ctx.lanes.filter(i=>i.armed);this.hp=this.max=In.hp*t.reduce((i,r)=>i+r.junkHp(r.line.junk),0),this.alive=!0,this.active=!0,this.gen++,this.t=0,this.left=In.time,this.phase=Math.random()*Math.PI*2,this.punch=0,this.leaving=0,this.root.visible=!0,this.ui.classList.add("on"),this.place(0),this.ctx.fx.puff(this.pos,new b(0,1,.5),.6,.8,"white",3,.8),this.s.story.bonus||(this.s.story.bonus=!0,(n=(e=this.ctx).onFirst)==null||n.call(e,this))}place(t){const e=this.t+this.phase,n=this.ctx.halfW()*.62,i=this.ctx.viewH()*.28;this.pos.set(Math.sin(e*.55)*n,this.ctx.viewY()+Math.sin(e*1.1)*i+this.leaving*this.leaving*14,xE),this.root.position.copy(this.pos);const r=Math.min(1,this.t/.35);this.punch=Math.max(0,this.punch-t*4);const a=(.4+.6*r)*(1+this.punch*.18);this.body.scale.set(a*(1+this.punch*.1),a*(1-this.punch*.1),a),this.body.rotation.y=Math.cos(e*.55)>0?Math.PI:0,this.body.rotation.z=Math.sin(e*1.1)*.15;const o=Math.sin(this.t*22)*.7;this.wings[0].rotation.x=-.3-o,this.wings[1].rotation.x=.3+o}fly(t){if(this.t+=t,this.alive)this.left-=t,this.left<=0&&(this.alive=!1,this.leaving=.001);else if(this.leaving>0){if(this.leaving+=t,this.leaving>1.2)return this.end()}else return this.end();this.place(t);const e=this.ctx.project(this.pos);this.ui.style.transform=`translate(${e.x}px, ${e.y}px)`;const n=Math.max(0,this.left/In.time);this.ringEl.style.setProperty("--p",`${n*360}deg`),this.timeEl.textContent=Math.ceil(Math.max(0,this.left)),this.hpEl.style.transform=`scaleX(${Math.max(0,this.hp/this.max)})`,this.ui.classList.toggle("low",this.alive&&this.left<3),this.ui.classList.toggle("gone",!this.alive)}end(){this.active=!1,this.alive=!1,this.root.visible=!1,this.ui.classList.remove("on","low","gone"),this.s.bonusAt=this.s.playT+In.every+(Math.random()*2-1)*In.jitter}tryTap(t,e){if(!this.alive)return!1;const n=this.ctx.project(this.pos),i=this.ctx.project(new b(this.pos.x+qn*1.3,this.pos.y,this.pos.z)),r=Math.max(56,Math.abs(i.x-n.x)*1.5);if(Math.hypot(t-n.x,e-n.y)>r)return!1;for(const a of this.ctx.lanes)a.bonusShot(this);return this.punch=Math.max(this.punch,.5),!0}hit(t,e,n){if(n!==this.gen||!this.alive)return;this.hp-=t,this.punch=1;const i=new b(-.3,.3,1).normalize();this.ctx.fx.impact(e,i,Ll,.8,4);const r=this.ctx.project(e);this.ctx.hud.popup(r.x,r.y-20,`-${ye(t)}`,"bull"),this.hp<=0&&this.kill()}kill(){var r,a;this.alive=!1,this.leaving=0;const t=this.pos.clone(),e=this.ctx.fx,n=new b(-.3,.2,1).normalize();e.impact(t,n,Ll,4,4);for(let o=0;o<4;o++)e.ring(t,n,.4+o*.1,.4,3+o*1.2,1,4);for(let o=0;o<16;o++)e.crumb(t,new b(Math.random()-.5,1,Math.random()-.3).normalize(),Ll[o%Ll.length],1.6);const i=Math.max(this.ctx.workshop.def.scale*60,this.ctx.workshop.crate(In.minutes));this.ctx.earn(i,t,`Копилка: +$${ye(i)}`),this.ctx.parts(In.parts),(a=(r=this.ctx).onKill)==null||a.call(r),this.end()}cancel(){this.active&&this.end()}}const u0=s=>document.getElementById(s),yE=.2,bE=7;class ME{constructor(t){var e;this.ctx=t,(e=t.state).seen??(e.seen={}),this.card=u0("tip"),this.ring=u0("tip-ring"),this.card.addEventListener("pointerdown",n=>n.stopPropagation()),this.card.querySelector(".tp-btn").addEventListener("click",n=>{n.stopPropagation(),this.close()}),this.cur=null,this.scanT=0}get timeScale(){return this.cur?yE:1}seen(t){return!!this.ctx.state.seen[t]}show(t,e){if(this.cur||this.seen(t)||!bl[t])return!1;this.ctx.state.seen[t]=!0,this.ctx.save();const n=bl[t];return this.card.querySelector(".tp-ic").textContent=n.icon,this.card.querySelector(".tp-title").textContent=n.title,this.card.querySelector(".tp-text").textContent=n.text,this.card.classList.add("show"),this.ring.classList.add("show"),this.cur={key:t,getPos:e,t:0},!0}close(){this.cur=null,this.card.classList.remove("show"),this.ring.classList.remove("show")}update(t,e,n){var i,r;if(n){this.cur&&this.close();return}if(this.cur){this.cur.t+=t;const a=(r=(i=this.cur).getPos)==null?void 0:r.call(i);if(a){const o=this.ctx.project(a);this.ring.style.transform=`translate(${o.x}px, ${o.y}px)`}this.cur.t>bE&&this.close();return}this.scanT-=t,!(this.scanT>0)&&(this.scanT=.3,this.scan(e))}scan(t){const e=innerHeight,n=innerWidth;for(const i of t)if(!(!i.unlocked||!i.visible||i.trial))for(const r of i.conveyor.candidates()){const a=r.variant&&bl[r.variant]&&!this.seen(r.variant)?r.variant:bl[r.kind]&&!this.seen(r.kind)?r.kind:null;if(!a)continue;const o=r.aimPoint(r.root.position.clone()),l=this.ctx.project(o);if(l.x<40||l.x>n-40||l.y<80||l.y>e-60)continue;const c=r.gen,h=o.clone();this.show(a,()=>r.gen===c&&r.alive?r.aimPoint(h):h);return}}}const ig=.12,wE={bow:1.35,crossbow:2,grenade:1.8,flamer:2,tesla:1.7,rail:2.2,saw:1.6,laser:1.7,stapler:1.15,cryo:1.15},SE=.8,Dl=ss.find(s=>s.id==="damage"),d0=ss.find(s=>s.id==="auto"),EE=70,TE=25;function AE(s,t,e){return{i:t,def:s.lines[t],scale:e,open:t===0,level:0,dmg:0,auto:0,evo:0,kills:0}}function CE(s){const t=Le[s.def.junk],e=t.filling?Le[t.filling]:null,n=e?t.fill:0;return{hp:(t.hp+n*((e==null?void 0:e.hp)??0))*s.scale,reward:(t.reward+n*((e==null?void 0:e.reward)??0))*s.scale,count:1+n}}function Nh(s,t,e=null,n=ig){const i=e?{...s,...e}:s,r=ga({weapon:i.def.weapon,scale:i.scale},{damage:i.dmg,auto:i.auto},i.evo,{}),a=r.autoRate+n*(r.fireRate-r.autoRate),l=Le[i.def.junk].tags.includes("armor")&&!r.saw&&!r.rail?.6:1,c=a*r.damage*r.pellets*SE*(1+.3*(r.crit-1))*(wE[i.def.weapon]??1)*l,h=CE(i),u=i.def.flow/60*t.flowMul,f=Math.min(1,c/(u*h.hp));return{income:f*u*h.reward*Gu(i.level)*t.incomeMul,kills:f*u*h.count,k:f,dps:c}}const zh=s=>s.lines.filter(t=>t.open).reduce((t,e)=>t+Math.floor(e.level/5),0);function RE({minutes:s=60,tap:t=ig}={}){const e=s*60,n=[],i=[],r=[],a=[],o={w:0,money:0,gpm:0,flowMul:1,incomeMul:1,fired:0,rush:!1,autobuy:!1,boss:null,lines:[]};let l=0,c=fi.every,h=In.first,u=40,f=0,p=0;const g=(d,_,x)=>n.push({t:d,kind:_,label:x}),v=(d,_)=>{const x=Cs[d];o.w=d,o.def=x,o.lines=x.lines.map((y,k)=>AE(x,k,x.scale)),o.fired=0,o.flowMul=1,o.incomeMul=1,o.rush=!1,o.autobuy=!1,o.boss=null,c=fi.every,a.push({w:d,name:x.name,from:_,to:e})};v(0,0);const m=d=>vn[d.def.weapon].name;for(let d=1;d<=e;d++){const _=o.def;let x=0;for(const A of o.lines){if(!A.open)continue;const R=Nh(A,o,null,t);x+=R.income,A.kills+=R.kills,A.evo<xn.length&&A.kills>=xn[A.evo]&&(A.evo++,g(d,"evo",`Эволюция: ${m(A)} → тир ${A.evo}`))}o.money+=x,o.gpm+=(x*60-o.gpm)*(1/60);const y=A=>Math.max(10,o.gpm*A),k=zh(o);for(;o.fired<_.gates.length&&k>=_.gates[o.fired].at;){const A=_.gates[o.fired++];if(A.kind==="line"){const R=o.lines[A.line];R.open=!0,g(d,"line",`Линия ${A.line+1}: ${R.def.short} + ${m(R)}`)}else if(A.kind==="machine"){const R=_.machines[A.id];R.income&&(o.incomeMul*=R.income),A.id==="autobuy"&&(o.autobuy=!0),g(d,"machine",`Станок: ${R.name}`)}else A.kind==="mini"?(o.money+=y(_.mini.crate),g(d,"mini",`Мини-босс: ${Le[_.mini.junk].name}`)):A.kind==="rush"?(o.flowMul=_.rush.flow,g(d,"rush",`Аврал «${_.rush.name}»`)):A.kind==="boss"&&(o.boss=d+_.boss.seconds,g(d,"boss",`Босс: ${_.boss.name}`))}if(o.boss&&d>=o.boss&&(o.money+=y(_.boss.crate),o.boss=null,a[a.length-1].to=d,Cs[o.w+1]?(g(d,"lift",`Лифт: ${Cs[o.w+1].name}`),v(o.w+1,d)):(g(d,"lift","Последний цех пройден"),o.fired=1/0)),(c-=1)<=0&&(c=fi.every,o.money+=y(fi.crate),g(d,"delivery","Большая поставка")),d>=h){h=d+In.every;const A=o.lines.filter(M=>M.open),R=In.hp*A.reduce((M,D)=>M+Le[D.def.junk].hp*D.scale,0),L=A.reduce((M,D)=>{const z=ga({weapon:D.def.weapon,scale:D.scale},{damage:D.dmg,auto:D.auto},D.evo,{});return M+z.damage*z.pellets*Math.max(1,z.fireRate/4)},0),S=Math.ceil(R/Math.max(1e-9,L));S<=4*In.time?(o.money+=Math.max(o.def.scale*60,y(In.minutes)),g(d,"bonus",`Копилка сбита за ${S} тапов`)):g(d,"miss",`Копилка улетела: надо ${S} тапов`)}if(d>=u){f++,u=d+(f<3?30:EE);const A=Pi.minutes+Math.min(Pi.cap,Pi.step*f);o.money+=Math.max(Pi.minCoins*o.def.scale,o.gpm*A),g(d,"quest",`Квест №${f}`)}if(o.autobuy&&(p+=1)>=Ta.every){p=0;let A=null;for(const R of o.lines){if(!R.open||R.dmg>=Dl.max)continue;const L=Vl(Dl,R.dmg,R);(!A||L<A.c)&&(A={l:R,c:L})}A&&A.c<=o.money*Ta.share&&(o.money-=A.c,A.l.dmg++,i.push({t:d,what:"damage",line:A.l.i,level:A.l.dmg,cost:A.c,wait:0,auto:!0,gun:m(A.l)}))}for(let A=0;A<TE;A++){const R=_.gates[o.fired],L=R?Math.max(1,R.at-zh(o)):99;let S=null;for(const z of o.lines){if(!z.open)continue;const B=Nh(z,o,null,t).income,j=[{what:"line",cost:Lm(z.i,z.level,z.scale),mod:{level:z.level+1}},z.dmg<Dl.max&&{what:"damage",cost:Vl(Dl,z.dmg,z),mod:{dmg:z.dmg+1}},z.auto<d0.max&&{what:"auto",cost:Vl(d0,z.auto,z),mod:{auto:z.auto+1}}].filter(Boolean);for(const Z of j){let Y=Nh(z,o,Z.mod,t).income-B;Z.what==="line"&&(z.level+1)%5===0&&(Y+=x*.3/L);const nt=Y/Z.cost;(!S||nt>S.score)&&(S={...Z,l:z,score:nt})}}if(!S||o.money<S.cost)break;o.money-=S.cost;const M=S.l;S.what==="line"?M.level++:S.what==="damage"?M.dmg++:M.auto++;const D=S.what==="line"?M.level:S.what==="damage"?M.dmg:M.auto;i.push({t:d,what:S.what,line:M.i,level:D,cost:S.cost,wait:d-l,auto:!1,gun:m(M),short:M.def.short}),l=d}d%10===0&&r.push({t:d,income:x*60,money:o.money,stars:zh(o),w:o.w})}return{events:n,purchases:i,samples:r,floors:a,minutes:s,tap:t}}const PE="http://www.w3.org/2000/svg",le={surface:"#1a1a19",band:"#222220",grid:"#2e2e2b",text:"#ffffff",text2:"#c3c2b7",muted:"#8e8d86",s1:"#3987e5",s2:"#d95926",s3:"#199e70",s4:"#c98500",s5:"#d55181",s6:"#008300",s7:"#9085e9"},kl=[{kinds:["line"],name:"Новая линия",color:le.s1},{kinds:["machine"],name:"Станок",color:le.s2},{kinds:["evo"],name:"Эволюция",color:le.s3},{kinds:["delivery"],name:"Поставка",color:le.s4},{kinds:["boss","lift","mini","rush"],name:"Босс · лифт · аврал",color:le.s5},{kinds:["bonus","miss"],name:"Копилка",color:le.s6},{kinds:["quest"],name:"Квест",color:le.s7}],Fh={line:"Ценность партии",damage:"Урон",auto:"Автострельба"},ra=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;function Ee(s,t={},e=null,n=null){const i=document.createElementNS(PE,s);for(const[r,a]of Object.entries(t))i.setAttribute(r,a);return n!=null&&(i.textContent=n),e==null||e.append(i),i}function Oh(s){if(!s.length)return 0;const t=[...s].sort((e,n)=>e-n);return t[Math.floor(t.length/2)]}let Yn=null;function sg(){Yn||(Yn=document.createElement("div"),Yn.id="playtime",Yn.innerHTML=`<div class="pt-card">
      <div class="pt-top"><div><h2>Прохождение на бумаге: первый час</h2>
        <p class="pt-sub">Бот играет на настоящих числах игры: тот же хлам, пушки, цены, пороги звёзд, станки, поставки, квесты, копилки и боссы. Покупает то, что быстрее окупается, тапает в 12% темпа. Пресс не платит.</p></div>
        <button class="pt-close" aria-label="Закрыть">✕</button></div>
      <div class="pt-tiles"></div>
      <div class="pt-chart"><div class="pt-tip" hidden></div></div>
      <details class="pt-table"><summary>Таблица: все события и покупки</summary><div class="pt-rows"></div></details>
    </div>`,document.body.append(Yn),Yn.addEventListener("pointerdown",s=>s.stopPropagation()),Yn.querySelector(".pt-close").addEventListener("click",()=>Yn.classList.remove("open")),addEventListener("resize",()=>Yn.classList.contains("open")&&p0())),Yn.classList.add("open"),p0()}let f0=null;function p0(){var Wt;f0??(f0=RE({minutes:60}));const{events:s,purchases:t,samples:e,floors:n,minutes:i}=f0,r=i*60,a=t.filter(H=>!H.auto),o=a.map(H=>H.wait),l=a.reduce((H,$)=>$.wait>((H==null?void 0:H.wait)??-1)?$:H,null),c=s.filter(H=>H.kind==="bonus").length,h=s.filter(H=>H.kind==="miss").length,u=n[n.length-1],f=[["Покупок за час",`${a.length}`,`ещё ${t.length-a.length} — автозакупка`],["Ждали покупку, медиана",`${Oh(o)} с`,`в последние 10 мин — ${Oh(a.filter(H=>H.t>r-600).map(H=>H.wait))} с`],["Самое долгое ожидание",l?`${l.wait} с`:"—",l?`перед ${ra(l.t)} · ${Fh[l.what]}`:""],["Цех к 60:00",`${u.w+1}. ${u.name}`,n.slice(1).map(H=>`лифт ${ra(H.from)}`).join(" · ")||"без лифта"],["Копилки",`${c} из ${c+h}`,"сбиты 4 тапами в секунду"]];Yn.querySelector(".pt-tiles").replaceChildren(...f.map(([H,$,rt])=>{const P=document.createElement("div");return P.className="pt-tile",P.innerHTML="<small></small><b></b><span></span>",P.querySelector("small").textContent=H,P.querySelector("b").textContent=$,P.querySelector("span").textContent=rt,P}));const g=Yn.querySelector(".pt-chart"),v=Math.max(640,Math.min(1180,g.clientWidth||innerWidth-40)),m=150,d=16,_=16,x=[{id:"events",title:"События",h:kl.length*_+8},{id:"wait",title:"Ожидание перед покупкой, с · точка = покупка, линия = медиана 10 покупок",h:210},{id:"income",title:"Доход, монет в минуту (логарифмическая шкала)",h:150},{id:"stars",title:"Звёзды цеха",h:100}];let y=26;for(const H of x)H.y=y+22,y=H.y+H.h+16;const k=y+26,A=H=>m+H/r*(v-m-d),R=Ee("svg",{width:v,height:k,viewBox:`0 0 ${v} ${k}`,role:"img","aria-label":"График прохождения первого часа"});(Wt=g.querySelector("svg"))==null||Wt.remove(),g.prepend(R),Ee("rect",{x:0,y:0,width:v,height:k,fill:le.surface},R),n.forEach((H,$)=>{const rt=A(H.from),P=A(Math.min(r,H.to));$%2&&Ee("rect",{x:rt,y:20,width:P-rt,height:k-46,fill:le.band},R),Ee("text",{x:rt+6,y:14,fill:le.text2,"font-size":12,"font-weight":600},R,`Цех ${H.w+1} · ${H.name}`)});for(let H=0;H<=r/60;H+=5)Ee("line",{x1:A(H*60),x2:A(H*60),y1:20,y2:k-26,stroke:le.grid,"stroke-width":1},R),Ee("text",{x:A(H*60),y:k-10,fill:le.muted,"font-size":11,"text-anchor":"middle"},R,`${H}:00`);for(const H of x)Ee("text",{x:m,y:H.y-8,fill:le.text,"font-size":13,"font-weight":700},R,H.title);const L=x[0];kl.forEach((H,$)=>{const rt=L.y+4+$*_+_/2;Ee("text",{x:m-10,y:rt+4,fill:le.text2,"font-size":11.5,"text-anchor":"end"},R,H.name),Ee("line",{x1:m,x2:v-d,y1:rt,y2:rt,stroke:le.grid,"stroke-width":1},R);for(const P of s.filter(Rt=>H.kinds.includes(Rt.kind))){const Rt=P.kind==="miss";Ee("circle",{cx:A(P.t),cy:rt,r:5,fill:Rt?le.surface:H.color,stroke:Rt?H.color:le.surface,"stroke-width":2},R)}});const S=x[1],M=Math.max(30,Math.ceil(Math.max(...o,1)/30)*30),D=H=>S.y+S.h-Math.min(H,M)/M*S.h;for(let H=0;H<=M;H+=M/4)Ee("line",{x1:m,x2:v-d,y1:D(H),y2:D(H),stroke:le.grid,"stroke-width":1},R),Ee("text",{x:m-8,y:D(H)+4,fill:le.muted,"font-size":11,"text-anchor":"end"},R,`${Math.round(H)} с`);for(const H of a)Ee("circle",{cx:A(H.t),cy:D(H.wait),r:3.2,fill:le.s1,"fill-opacity":.75},R);const z=a.map((H,$)=>({t:H.t,v:Oh(a.slice(Math.max(0,$-9),$+1).map(rt=>rt.wait))}));z.length&&Ee("path",{d:z.map((H,$)=>`${$?"L":"M"}${A(H.t).toFixed(1)},${D(H.v).toFixed(1)}`).join(""),fill:"none",stroke:le.s2,"stroke-width":2,"stroke-linejoin":"round","stroke-linecap":"round"},R);const B=Ee("g",{transform:`translate(${v-d-250},${S.y-20})`},R);Ee("circle",{cx:6,cy:0,r:4,fill:le.s1},B),Ee("text",{x:16,y:4,fill:le.text2,"font-size":11.5},B,"покупка"),Ee("line",{x1:80,x2:100,y1:0,y2:0,stroke:le.s2,"stroke-width":2},B),Ee("text",{x:106,y:4,fill:le.text2,"font-size":11.5},B,"медиана 10 покупок");const j=x[2],Z=e.map(H=>Math.max(1,H.income)),Y=Math.floor(Math.log10(Math.min(...Z))),nt=Math.ceil(Math.log10(Math.max(...Z,10))),X=H=>j.y+j.h-(Math.log10(Math.max(1,H))-Y)/Math.max(1,nt-Y)*j.h;for(let H=Y;H<=nt;H++)Ee("line",{x1:m,x2:v-d,y1:X(10**H),y2:X(10**H),stroke:le.grid,"stroke-width":1},R),Ee("text",{x:m-8,y:X(10**H)+4,fill:le.muted,"font-size":11,"text-anchor":"end"},R,`$${ye(10**H)}`);Ee("path",{d:e.map((H,$)=>`${$?"L":"M"}${A(H.t).toFixed(1)},${X(H.income).toFixed(1)}`).join(""),fill:"none",stroke:le.s1,"stroke-width":2,"stroke-linejoin":"round"},R);const mt=e[e.length-1];mt&&Ee("text",{x:A(mt.t)-4,y:X(mt.income)-8,fill:le.text,"font-size":12,"font-weight":700,"text-anchor":"end"},R,`$${ye(mt.income)}/мин`);const xt=x[3],ot=Math.max(5,...e.map(H=>H.stars)),ct=H=>xt.y+xt.h-H/ot*xt.h;for(const H of[0,Math.round(ot/2),ot])Ee("line",{x1:m,x2:v-d,y1:ct(H),y2:ct(H),stroke:le.grid,"stroke-width":1},R),Ee("text",{x:m-8,y:ct(H)+4,fill:le.muted,"font-size":11,"text-anchor":"end"},R,`★${H}`);Ee("path",{d:e.map((H,$)=>`${$?`H${A(H.t).toFixed(1)}V`:`M${A(H.t).toFixed(1)},`}${ct(H.stars).toFixed(1)}`).join(""),fill:"none",stroke:le.s1,"stroke-width":2,"stroke-linejoin":"round"},R);const Ft=Ee("line",{x1:0,x2:0,y1:20,y2:k-26,stroke:le.text2,"stroke-width":1,visibility:"hidden"},R),q=Ee("rect",{x:m,y:20,width:v-m-d,height:k-46,fill:"transparent"},R),it=g.querySelector(".pt-tip"),gt=H=>{var Tt;const $=R.getBoundingClientRect(),rt=(H.clientX-$.left)/$.width*v,P=Math.max(0,Math.min(r,(rt-m)/(v-m-d)*r));Ft.setAttribute("x1",A(P)),Ft.setAttribute("x2",A(P)),Ft.setAttribute("visibility","visible");const Rt=e.reduce((C,w)=>Math.abs(w.t-P)<Math.abs(C.t-P)?w:C,e[0]),lt=a.filter(C=>C.t<=P).pop(),Ct=s.filter(C=>Math.abs(C.t-P)<=20);it.replaceChildren();const ft=(C,w,O=null)=>{const J=document.createElement("div");if(J.className="pt-tr",O){const It=document.createElement("i");It.style.background=O,J.append(It)}const at=document.createElement("b");at.textContent=C;const tt=document.createElement("span");tt.textContent=w,J.append(at,tt),it.append(J)};ft(ra(P),`цех ${Rt.w+1}`),ft(`$${ye(Rt.income)}/мин`,"доход",le.s1),ft(`★${Rt.stars}`,"звёзды цеха"),lt&&ft(`${lt.wait} с`,`ждали: ${Fh[lt.what]} ур. ${lt.level} · ${lt.gun} (${ra(lt.t)})`,le.s2);for(const C of Ct.slice(0,5))ft(ra(C.t),C.label,(Tt=kl.find(w=>w.kinds.includes(C.kind)))==null?void 0:Tt.color);it.hidden=!1;const $t=A(P)/v*$.width;it.style.left=`${Math.min($.width-300,$t+14)}px`,it.style.top=`${(H.clientY-$.top)/$.height*$.height+14}px`};q.addEventListener("pointermove",gt),q.addEventListener("pointerdown",gt),q.addEventListener("pointerleave",()=>{Ft.setAttribute("visibility","hidden"),it.hidden=!0});const dt=[...s.map(H=>{var $;return{t:H.t,kind:(($=kl.find(rt=>rt.kinds.includes(H.kind)))==null?void 0:$.name)??H.kind,text:H.label}}),...t.map(H=>({t:H.t,kind:H.auto?"Автозакупка":"Покупка",text:`${Fh[H.what]} ур. ${H.level} · ${H.gun} · $${ye(H.cost)}${H.auto?"":` · ждали ${H.wait} с`}`}))].sort((H,$)=>H.t-$.t),Ot=document.createElement("table");Ot.innerHTML="<thead><tr><th>Время</th><th>Что</th><th>Подробно</th></tr></thead><tbody></tbody>";const Yt=Ot.querySelector("tbody");for(const H of dt){const $=document.createElement("tr");for(const rt of[ra(H.t),H.kind,H.text]){const P=document.createElement("td");P.textContent=rt,$.append(P)}Yt.append($)}Yn.querySelector(".pt-rows").replaceChildren(Ot)}const kd=2.8,Id=30,LE=3.4,DE=941,Ia=new URLSearchParams(location.search),Ud=Ia.has("fx"),Ec=Ia.has("ref")||Ud,rg=Ia.has("evo"),es=document.getElementById("scene"),ag=matchMedia("(pointer: coarse)").matches,yi=new Py({canvas:es,antialias:!1,powerPreference:"high-performance"});yi.setPixelRatio(Math.min(devicePixelRatio,ag?1.75:2));yi.shadowMap.enabled=!0;yi.shadowMap.type=b0;yi.toneMapping=Ts;const er=new No,_i=new jn(Id,2,.5,200),Lr=new _b(yi,new Fn(1,1,{type:ns,samples:4})),og=new yb(er,_i);Lr.addPass(og);Lr.addPass(new wa(new et(256,256),.55,.45,1));Lr.addPass(new wb);Lr.addPass(new gm({uniforms:{tDiffuse:{value:null},uSat:{value:1.04},uContrast:{value:1.03},uVignette:{value:.24}},vertexShader:`
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
      }`}));const Tc=Xb(er,yi,Mc.length,{shadowSize:ag?1536:2048});sE(yi);dw(yi);const Nd=s=>rE(s),Ir=new Td(er),zd="firerange.v4",kE="firerange.v3",Di=Ec?{money:1240,lanes:[{unlocked:!0},{unlocked:!0},{unlocked:!0}],ws:{fired:3}}:(()=>{try{const s=JSON.parse(localStorage.getItem(zd));if(s)return s;const t=JSON.parse(localStorage.getItem(kE));return t!=null&&t.profile?{profile:t.profile}:{}}catch{return{}}})(),Yl=(s=!1)=>Mc.map((t,e)=>({unlocked:s||e===0,levels:{},kills:0,line:0,batch:0,cat:0}));function IE(){var e;if(Di.floors)return Di.floors.map((n,i)=>n&&{lanes:Yl().map((r,a)=>{var o;return{...r,...((o=n.lanes)==null?void 0:o[a])||{}}}),ws:{...lc(i),...n.ws}});const s=((e=Di.ws)==null?void 0:e.idx)??0,t=[];for(let n=0;n<s;n++)t[n]={lanes:Yl(!0),ws:cE(n)};return t[s]={lanes:Yl().map((n,i)=>{var r;return{...n,...((r=Di.lanes)==null?void 0:r[i])||{}}}),ws:{...lc(s),...Di.ws||{}}},t}var _0;const kt={money:Di.money??0,parts:Di.parts??0,profile:{...Bm(),...Di.profile||{}},floors:IE(),cur:Di.cur??((_0=Di.ws)==null?void 0:_0.idx)??0,seen:Di.seen??{}};Object.defineProperty(kt,"lanes",{get:()=>kt.floors[kt.cur].lanes});Object.defineProperty(kt,"ws",{get:()=>kt.floors[kt.cur].ws});const lg=(s,t)=>({weapon:s.lines[t].weapon??null,scale:s.scale,startTier:0,line:s.lines[t]}),Fd=Cs[kt.ws.idx??0];function cg(s){var t;Tc.setTheme(s.theme),IM((t=s.theme)==null?void 0:t.conveyor)}cg(Fd);if(rg)for(const s of kt.lanes)s.kills=Math.max(s.kills,xn[Math.min(s.evo||0,xn.length-1)]);if(Ud)for(const s of kt.lanes)s.unlocked=!0;let Bh=0,hg=!1;function un(){if(!(Ec||rg||hg))try{localStorage.setItem(zd,JSON.stringify(kt))}catch{}}un();const Xt=new yw({onBuy:YE,onPanelAction:BE,onProfile:()=>jl("openProfile"),onFloors:()=>jl("openFloors"),onDuel:()=>jl("openDuel")}),Hh=new b;function bi(s){return Hh.copy(s).project(_i),{x:(Hh.x+1)*.5*innerWidth,y:(1-Hh.y)*.5*innerHeight}}let se=null,as=null;const UE={scene:er,fx:Ir,hud:Xt,project:bi,thumb:Nd,onShot:fg,onHit:HE,onMiss:VE,onKill:GE,onPress:WE,onUpgrade:$E,onUnlock:qE,onEvolve:zE,onCrit:()=>as==null?void 0:as.onCrit(),onStar:s=>se.onStar(s),flow:s=>se.flow(s),incomeMul:()=>(se==null?void 0:se.incomeMul())??1,module:s=>(se==null?void 0:se.module(s))??-1,raiseModule:s=>se.raiseModule(s),gate:s=>(se==null?void 0:se.gateOf(s.i))??0,frenzy:()=>(se==null?void 0:se.frenzyOn)??!1,lines:()=>(se==null?void 0:se.def.lines)??Fd.lines,onBlast:s=>{s.visible&&(gi=Math.min(1,gi+.9))}},Be=Mc.map((s,t)=>new US(t,lg(Fd,t),kt.lanes[t],UE));function Od(s){kt.parts+=s,Xt.setParts(kt.parts),Xt.bumpParts(),Na()}se=new hE({state:kt,lanes:Be,hud:Xt,fx:Ir,earn:Bd,parts:Od,openLine(s){Be[s].unlocked||(Be[s].activate(),Ju())},loot(s){Be[se.def.boss.line].setTrophy(s),Ju()},lift:dg,openFloors:()=>jl("openFloors"),autobuy:jE,refresh:Na,save:un});as=new mE({workshop:se,lanes:Be,scale:()=>se.def.scale,playT:()=>kt.ws.playT,earn:(s,t)=>Bd(s,null,t),parts:Od,save:()=>un()});se.quests=as;as.attach(kt.ws);const cc=new ME({state:kt,project:bi,save:()=>un()}),hc=new _E({scene:er,fx:Ir,hud:Xt,project:bi,lanes:Be,workshop:se,viewY:()=>mn,halfW:()=>_e.halfW,viewH:()=>uc,busy:()=>Hi(),earn:(s,t,e)=>Bd(s,t,e),parts:Od,onFirst:s=>cc.show("bonus",()=>s.pos),onKill:()=>as.onBonus()}),Vh=document.getElementById("hud"),Ye=new YS({scene:er,fx:Ir,hud:Xt,camera:_i,project:bi,onShot:fg,onStateChange:un,onStart:()=>{document.getElementById("popups").replaceChildren()},onDone:(s,t)=>{t&&as.onEvolve(),un(),Qs()}}),Qe=new tE({camera:_i,project:bi,hud:Xt,thumb:Nd,onShot:s=>{gi=Math.min(1,gi+(s!=null&&s.stream?.03:.25))},onResult:s=>{const t=kt.profile;s.won?(t.wins=(t.wins||0)+1,t.trophies=(t.trophies||0)+rs.trophyWin,kt.money+=s.coins,kt.parts+=s.parts,Xt.setMoney(kt.money),Xt.setParts(kt.parts)):(t.losses=(t.losses||0)+1,t.trophies=Math.max(0,(t.trophies||0)-rs.trophyLoss)),Xt.setProfile(t),un(),Qs()},onDone:()=>{un(),Qs()}});function NE(){return[...new Set(Be.filter(s=>s.armed).map(s=>s.def.weapon))]}function ug(s){if(Hi()||s===kt.cur||!kt.floors[s])return;Ua(),Xt.closePanel(),Ds.close(),hc.cancel(),cc.close();const t=kt.ws,e=kt.floors[s].ws;for(const r of lE)r in t&&(e[r]=t[r]);kt.cur=s,se.attach(kt.ws);const n=se.def;Be.forEach((r,a)=>r.attach(lg(n,a),kt.lanes[a])),cg(n),as.attach(kt.ws),mn=Ac().max,vi=0,Ju();const i=document.getElementById("lift-fade");i.querySelector("b").textContent=n.name,i.classList.remove("go"),i.offsetWidth,i.classList.add("go")}function dg(){if(Hi()||!se.canLift)return;const s=kt.ws,t=s.idx+1;s.past.includes(s.id)||s.past.push(s.id),kt.floors[t]={lanes:Yl(),ws:lc(t)},ug(t),se.welcome(),un()}const Ds=new iE({state:kt,lanes:Be,thumb:Nd,unlockedTypes:NE,actions:{switchFloor:ug,lift:dg,profileChanged:()=>{Xt.setProfile(kt.profile),un()},startDuel:OE}}),Hi=()=>Ye.active||Qe.active;function Ua(){var s;for(const t of Dr.values())(s=t.lane)==null||s.release();Dr.clear()}function zE(s){Hi()||(Xt.closePanel(),Ds.close(),Xt.hideHint(),Ua(),Ye.start(s))}function FE(){return Math.round(Math.max(50,se.gpm*rs.coins/4))}function OE(s,t,e,n){Hi()||(Xt.closePanel(),Xt.hideHint(),Ua(),Qe.start({me:{profile:kt.profile,inst:s},foe:{profile:t,inst:e,damageScale:n.damageScale},coins:FE()}),kt.profile.duelsStarted=eg(kt.profile)+1,un())}function Ju(){Tc.relayout(s=>{var t;return((t=Be[s].model)==null?void 0:t.spec.ammo)??"pistol"}),Xt.setParts(kt.parts),un(),Qs()}function BE(){}let gi=0;function fg(s){var t;s.visible&&(gi=Math.min(1,gi+((t=s.stats)!=null&&t.stream?.03:.3)))}function HE(s,t,e){if(!s.visible)return;const n=bi(e),i=t.bull?"bull":t.zone>=3?"z3":t.zone<1?"z0":"",r=ye(t.dmg);Xt.popup(n.x,n.y-14,t.bull?`-${r}!`:`-${r}`,i)}function VE(s,t){if(!s.visible)return;const e=bi(t);Xt.popup(e.x,e.y,"мимо","miss")}function GE(s,t,e,n){if(kt.money+=t,se.earned(t),s.visible&&t>0){const i=bi(e),r=n.variant?` ${n.variant==="golden"?"✨":"★"}`:"";Xt.popup(i.x,i.y-30,`+$${ye(t)}${r}`,"money");const a=Le[n.kind].hp<15;gi=Math.min(1,gi+(a?.15:.4)),Xt.flyCoins(i.x,i.y,a?2:5,o=>{o===0&&(Xt.setMoney(kt.money),Xt.bumpWallet())})}else Xt.setMoney(kt.money);se.onKill(s,n),Na()}function WE(s,t,e){se.onPress(s,e),Na()}function Bd(s,t,e){kt.money+=s;let n=innerWidth/2,i=innerHeight*.3;if(t){const r=bi(t.isVector3?t:t.root.getWorldPosition(pg));n=r.x,i=r.y}Xt.popup(n,i-40,e,"money"),Xt.flyCoins(n,i,9,r=>{r===0&&(Xt.setMoney(kt.money),Xt.bumpWallet())}),Na()}const pg=new b;let Qu=!1,Gh=0;function Na(){Qu=!0}function $E(s){Hi()||(Ua(),Ds.close(),Xt.openPanel(s),Xt.refreshPanel(kt.money))}function jl(s){Hi()||(Ua(),Xt.closePanel(),Ds[s]())}function XE(){return Be.findIndex(s=>!s.unlocked)}function qE(s){if(Hi())return;const t=se.gateOf(s.i);se.toast("🔒",`Линия ${s.i+1} «${s.line.short}» — на ★${t}`,`Сейчас ★${se.stars}. Звезда — каждые 5 уровней «Ценности партии» любой линии (кнопка ⬆)`)}function YE(s,t){const e=s.costOf(t),n=s.currencyOf(t)==="parts";e==null||(n?kt.parts:kt.money)<e||(n?(kt.parts-=e,Xt.setParts(kt.parts)):kt.money-=e,s.applyUpgrade(t),Xt.setMoney(kt.money),un(),Qs(),Xt.flashRow(t))}function jE(){if(Hi())return;let s=null,t=1/0;for(const e of Be){const n=e.armed?e.costOf("damage"):null;n!=null&&n<t&&(s=e,t=n)}if(!(!s||t>kt.money*Ta.share)){if(kt.money-=t,s.applyUpgrade("damage"),Xt.setMoney(kt.money),s.visible){const e=bi(s.gun.m.root.getWorldPosition(pg));Xt.popup(e.x,e.y-60,"🤖 +урон","money")}Na()}}function Qs(){const s=XE(),t=se.stars;for(const e of Be)e.armed?e.ui.setBadge(e.canAfford(kt.money,kt.parts)):e.unlocked||e.updateLock(e.i===s,t);Xt.panelOpen&&!Xt.panelLane.armed&&Xt.closePanel(),Xt.panelOpen&&Xt.refreshPanel(kt.money)}Xt.setMoney(kt.money,!0);Xt.setParts(kt.parts);Xt.setProfile(kt.profile);Qs();Ec&&Xt.hideHint();!Ia.has("nocheat")&&!Ec&&dE({state:kt,lanes:Be,hud:Xt,busy:Hi,refresh:Qs,save:un,reset:KE,playtime:()=>sg()});Ia.has("playtime")&&sg();function KE(){hg=!0;try{localStorage.setItem(zd,JSON.stringify({profile:{...Bm(),name:kt.profile.name,avatar:kt.profile.avatar}}))}catch{}location.reload()}let ko=1,td=30,mn=0,vi=0;const Hd=document.createElement("div");Hd.style.cssText="position:fixed;left:0;top:0;visibility:hidden;padding-left:env(safe-area-inset-left,0px)";document.body.appendChild(Hd);let Wh=0;const uo={k:1,left:0},Kl={max:0,min:0},ZE=new b,uc=kd*Oi;function mg(s,t,e=uc,n=0,i=0){const r=e/2/Math.tan(Je.degToRad(Id/2));_i.position.set(s+n,t+LE*e/uc+i,r),_i.lookAt(ZE.set(s,t,0)),_i.updateMatrixWorld()}function m0(s,t){let e=0;for(let n=0;n<3;n++)mg(0,e),e+=(t-bi(JE.set(0,s,3.3)).y)/(ko*td/(td-3.3));return e}const JE=new b;function Ac(){return Kl}function gg(){const s=innerWidth,t=innerHeight;yi.setSize(s,t,!1),Lr.setPixelRatio(yi.getPixelRatio()),Lr.setSize(s,t),_i.aspect=s/t,_i.updateProjectionMatrix();const e=kd*Oi;td=e/2/Math.tan(Je.degToRad(Id/2)),ko=t/e,Wh=parseFloat(getComputedStyle(Hd).paddingLeft)||0,uo.k=Je.clamp(t/DE,.5,1.6),uo.left=Wh,document.documentElement.style.setProperty("--k",uo.k.toFixed(4)),_e.halfW=e/2*_i.aspect,_e.gunX=-_e.halfW+(Wh+134*uo.k)/ko,_e.benchX0=-_e.halfW-.25,_e.benchX1=_e.gunX+5.45,_e.targetX=_e.halfW-2.9,Tc.relayout(n=>{var i;return((i=Be[n].model)==null?void 0:i.spec.ammo)??"pistol"}),Be.forEach(n=>{n.trial||n.relayout()}),Ye.relayout(),Qe.active&&Qe.relayout(),Kl.max=m0(Oi/2-Zi,.065*t),Kl.min=Math.min(Kl.max,m0(Dn(Be.length-1)-Zi,t))}addEventListener("resize",gg);gg();mn=Ac().max;const dc=new _d,QE=new qi(new b(0,0,1),0),g0=new et,v0=new b;function vg(s,t){if(g0.set(s/innerWidth*2-1,-(t/innerHeight)*2+1),dc.setFromCamera(g0,_i),!dc.ray.intersectPlane(QE,v0))return null;const e=Be[Sm(v0.y)];return e!=null&&e.unlocked?e:null}const Dr=new Map;let Ss=null;es.addEventListener("pointerdown",s=>{if(s.button!==0||Ds.open)return;if(s.preventDefault(),Xt.hideHint(),Ye.active){if(Ss!==null)return;Ss=s.pointerId,es.setPointerCapture(s.pointerId),Ye.pointer(s.clientX,s.clientY,!0);return}if(Qe.active){if(Ss!==null)return;Ss=s.pointerId,es.setPointerCapture(s.pointerId),Qe.pointer(s.clientX,s.clientY,!0);return}if(hc.tryTap(s.clientX,s.clientY))return;const t=vg(s.clientX,s.clientY);Dr.set(s.pointerId,{y0:s.clientY,y:s.clientY,t:performance.now(),lane:t,drag:!1}),es.setPointerCapture(s.pointerId),t==null||t.focusRay(dc.ray.origin,dc.ray.direction),t==null||t.press(),vi=0});es.addEventListener("pointermove",s=>{var n;if(Ss!==null&&Ss!==s.pointerId)return;if(Ye.active){Ye.pointer(s.clientX,s.clientY);return}if(Qe.active){Qe.pointer(s.clientX,s.clientY);return}const t=Dr.get(s.pointerId);if(!t)return;const e=performance.now();if(!t.drag&&Math.abs(s.clientY-t.y0)>12&&(t.drag=!0,(n=t.lane)==null||n.release(),t.lane=null),t.drag){const{min:i,max:r}=Ac();let a=(s.clientY-t.y)/ko;(mn>r||mn<i)&&(a*=.35),mn+=a;const o=Math.max(1,e-t.t)/1e3;vi=vi*.6+a/o*.4}t.y=s.clientY,t.t=e});const Vd=s=>{var e;if(Ss===s.pointerId){const n=s.type!=="pointerup";Ye.release(n),Qe.release(n),Ss=null}const t=Dr.get(s.pointerId);t&&((e=t.lane)==null||e.release(),(!t.drag||performance.now()-t.t>80)&&(vi=t.drag?vi*.3:0),Dr.delete(s.pointerId))};es.addEventListener("pointerup",Vd);es.addEventListener("pointercancel",Vd);es.addEventListener("lostpointercapture",Vd);es.addEventListener("contextmenu",s=>s.preventDefault());addEventListener("wheel",s=>{var t,e;Ds.open||Hi()||(e=(t=s.target).closest)!=null&&e.call(t,"#panel .p-sheet")||(vi=0,mn-=s.deltaY/ko*.6)},{passive:!0});let Ni=null;addEventListener("keydown",s=>{if(s.code==="Escape"){Xt.closePanel(),Ds.close();return}if(!(s.code!=="Space"||s.repeat||Ds.open||/INPUT|TEXTAREA|BUTTON/.test(s.target.tagName))){if(s.preventDefault(),Ye.active){Ye.trigger.press(Ye.lane.stats);return}if(Qe.active){Qe.me.trigger.press(Qe.me.stats);return}Xt.hideHint(),Ni=vg(innerWidth/2,innerHeight/2),Ni==null||Ni.press()}});addEventListener("keyup",s=>{s.code==="Space"&&(Ni==null||Ni.release(),Ye.release(),Qe.release())});function xg(){Ua(),Ss=null,Ni==null||Ni.release(),Ni=null,Ye.release(!0),Qe.release(!0)}addEventListener("blur",xg);document.addEventListener("visibilitychange",()=>{document.hidden&&xg()});const tT=new pm;let x0=0,Ln=null;function fc(s){const t=Math.min(tT.getDelta(),.05);if(Ln!=null&&Ln.paused&&s===void 0)return;const e=(s??t*((Ln==null?void 0:Ln.speed)??1))*cc.timeScale;Ln==null||Ln.tick(e),x0+=e;const n=Ye.active?Ye:Qe.active?Qe:null;cc.update(t,Be,!!n),n||(se.update(e),hc.update(e),as.update(e)),Vh.classList.toggle("bonus",hc.active&&!n);for(const u of Be)(!n||Ye.active&&u===Ye.lane)&&u.update(e);Gh-=e,Qu&&Gh<=0&&(Qu=!1,Gh=.25,Qs()),Ye.update(e),Qe.update(e),n||Ir.update(e),Xt.tick(e);const i=[...Dr.values()].some(u=>u.drag),{min:r,max:a}=Ac();!i&&!Ln&&(mn+=vi*e,vi*=Math.exp(-4*e),mn>a&&(mn+=(a-mn)*Math.min(1,e*12),vi*=.5),mn<r&&(mn+=(r-mn)*Math.min(1,e*12),vi*=.5)),gi=Math.max(0,gi-e*4);const o=Ln?0:gi*gi*.06,l={cx:0,cy:mn,viewH:uc},c=n?n.view(l):l;mg(c.cx,c.cy,c.viewH,(Math.random()-.5)*o+(Ln?0:Math.sin(x0*.3)*.1),(Math.random()-.5)*o),Tc.follow(c.cy),Ye.updateHud(e),Qe.updateHud(e);const h=innerHeight/kd;for(const u of Be)u.ui.setHidden(!!n),n||u.placeUI(innerHeight,h,uo);Vh.classList.toggle("trial",Ye.active),Vh.classList.toggle("duel",Qe.active),Bh+=e,Bh>5&&(Bh=0,un()),og.scene=n?n.scene:er,Lr.render(e)}yi.setAnimationLoop(()=>fc());Ud&&(Ln=aE({lanes:Be,fx:Ir,draw:fc,select:s=>{mn=s.floor+Oi*.45,vi=0}}),fc(0));addEventListener("pagehide",un);Ia.has("debug")&&(window.__range={scene:er,camera:_i,renderer:yi,lanes:Be,workshop:se,trial:Ye,duel:Qe,menus:Ds,state:kt,fx:Ir,project:bi,save:un,frame:fc,review:Ln});
