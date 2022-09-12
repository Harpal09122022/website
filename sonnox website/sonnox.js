
        var sliderImages = document.getElementsByClassName("slider1");
        var counter = 0

        function slider() {
            for (let index = 0; index < sliderImages.length; index++) {
                const element = sliderImages[index];
                element.style.display = "none"
            }
            if (counter >= sliderImages.length) {
                counter = 0;
            }
            sliderImages[counter].style.display = "block"
            document.querySelector("#right").dataset.val = counter
            document.querySelector("#left").dataset.val = counter
            console.log(counter);
            counter++;
            setTimeout(slider, 3000);
        }
        slider()

        function right_side_slide(e) {
            increment = parseInt(e.dataset.val) + 1;
            console.log(increment);
            for (let index = 0; index < sliderImages.length; index++) {
                const element = sliderImages[index];
                element.style.display = "none"
            }
            if (increment >= sliderImages.length) {
                increment = 0;
            }
            document.querySelector("#right").dataset.val = increment
            sliderImages[increment].style.display = "block"
        }

        function left_side_slide(e) {
            increment = parseInt(e.dataset.val) + 1;
            console.log(increment);
            for (let index = 0; index < sliderImages.length; index++) {
                const element = sliderImages[index];
                element.style.display = "none"
            }
            if (increment >= sliderImages.length) {
                increment = 0;
            }
            document.querySelector("#left").dataset.val = increment
            sliderImages[increment].style.display = "block"
        }
