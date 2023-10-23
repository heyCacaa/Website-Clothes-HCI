const bar = document.getElementById('bar');
const tutup = document.getElementById('tutup');
const a = document.getElementById('menu');

if (bar){
    bar.addEventListener('click',()=>{
        a.classList.add('active');
    })
}

if (tutup){
    tutup.addEventListener('click',()=>{
        a.classList.remove('active');
    })
}

let options = {
    root: null,
    rootmargin:'0px',
    threshold:1.0
};

let call = (entries,obs)=>{
    entries.forEach(entry => {
        if(entry.target.id=='videohome')
        {
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }
        }
    });
}

let obs = new IntersectionObserver(call, options);
obs.observe(document.querySelector('.videohome'));

