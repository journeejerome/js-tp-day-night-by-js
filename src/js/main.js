(function (){
    const ToggleNightMode = {
        init(){
            document.documentElement.className = 'js-enabled';
            this.button = document.querySelector('.tumbler__wrapper');
            this.button.addEventListener("click", () => {
                this.switchMode();
            });
        },
        switchMode(){
            document.body.classList.toggle('body--night-mode');
            document.querySelector(".tumbler").classList.toggle("tumbler--night-mode");
            const posts = document.querySelectorAll(".post");
            this.post(posts);
        },
        post(event){
            for(const element of event){
                element.classList.toggle("post--night-mode");
            }
            // for(let i=0;i<=event.length;i++){
            //     event[i].classList.toggle("post--night-mode");
            // }
        }
    };
    ToggleNightMode.init();
})();