const accordian = document.getElementsByClassName('questions');
for(var i=0;i<accordian.length;i++){
    
    accordian[i].addEventListener('click',function(){
        const active = document.querySelector(".questions.active");
        console.log(active);
        if(active !== this){
            this.classList.toggle('active');
        }
        if(active){
            active.classList.remove('active');
        }
        
    })
    
}
