count=0;
        function slider(){
            imgsdata=document.getElementsByClassName('slider-img')
            // console.log(imgsdata);
            for (let index = 0; index < imgsdata.length; index++) {
            console.log(imgsdata[index])
            imgsdata[index].style.display="none";
            
            }
            if(count>=imgsdata.length){
            count=0
            }
            console.log(count);
            imgsdata[count].style.display="block";
            count++;
            // slider()
            // setInterval(slider,3000);
            setTimeout(slider,3000)
        }
        slider()
            