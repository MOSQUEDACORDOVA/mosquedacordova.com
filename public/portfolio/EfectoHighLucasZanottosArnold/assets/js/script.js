gsap.timeline({defaults:{ease:'none', duration:12, repeat:-1}}) 
    .to('.pegLeft1', {morphSVG:function(i){return '.pegLeft1_'+(i+1)}}, 0)
    .from('#pegLeft1', {opacity:0, duration:1, repeatDelay:11, ease:'power2.in'}, 0)
    .to('.pegLeft2', {morphSVG:function(i){return '.pegLeft2_'+(i+1)}}, 4)
    .from('#pegLeft2', {opacity:0, duration:1, repeatDelay:11, ease:'power2.in'}, 4)
    .to('.pegLeft3', {morphSVG:function(i){return '.pegLeft3_'+(i+1)}}, 8)
    .from('#pegLeft3', {opacity:0, duration:1, repeatDelay:11, ease:'power2.in'}, 8)

    .fromTo('.pegRight1', {y:9}, {morphSVG:function(i){return '.pegRight1_'+(i+1)}, y:-15}, 0)
    .from('#pegRight1', {opacity:0, duration:1, repeatDelay:11, ease:'power2.in'}, 0)
    .fromTo('.pegRight2', {y:9}, {morphSVG:function(i){return '.pegRight2_'+(i+1)}, y:-15}, 4)
    .from('#pegRight2', {opacity:0, duration:1, repeatDelay:11, ease:'power2.in'}, 4)
    .fromTo('.pegRight3', {y:9}, {morphSVG:function(i){return '.pegRight3_'+(i+1)}, y:-15}, 8)
    .from('#pegRight3', {opacity:0, duration:1, repeatDelay:11, ease:'power2.in'}, 8)

    .play(8) //jump to the beginning of the seamless loop

gsap.timeline({defaults:{duration:3.6}, repeat:-1})
    .to('#lipsLine',    {morphSVG:'#lipsLine2', ease:'none'}, 0)
    .to('#lipsBg',      {morphSVG:'#lipsBg2', ease:'none'}, 0)
    .to('#eyeLeft',     {morphSVG:'#eyeLeft2', ease:'power1.in'}, 0)
    .to('#pupilLeft',   {morphSVG:'#pupilLeft2', ease:'power1.in'}, 0)
    .to('#eyeRight',    {morphSVG:'#eyeRight2', ease:'sine.in'}, 0)
    .to('#pupilRight',  {morphSVG:'#pupilRight2', ease:'sine.in'}, 0)
    .to('#lipsLine',    {morphSVG:'#lipsLine3', duration:0.3, ease:'bounce.out(9)'}, 3.6)
    .to('#lipsBg',      {morphSVG:'#lipsBg3', duration:0.3, ease:'bounce.out(9)'}, 3.6)
    .to('#eyeLeft',     {morphSVG:'#eyeLeft3', duration:0.4, ease:'bounce.out(9)'}, 3.6)
    .to('#pupilLeft',   {morphSVG:'#pupilLeft3', duration:0.4, ease:'bounce.out(9)'}, 3.6)
    .to('#eyeRight',    {morphSVG:'#eyeRight3', duration:0.4, ease:'bounce.out(9)'}, 3.6)
    .to('#pupilRight',  {morphSVG:'#pupilRight3', duration:0.4, ease:'bounce.out(9)'}, 3.6)


var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) gsap.set('#lipsBg', {attr:{filter:'none'}}); //Safari doesn't render the specular light filter correctly :(