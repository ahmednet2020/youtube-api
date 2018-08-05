export default function preload() {
    return {
        start(){
            let preload = document.querySelector(".pre-load");
            preload.style.display= "block";
            preload.classList.remove("hidden");
        },
        end(){
            setTimeout(()=>{
                let preload = document.querySelector(".pre-load");
                preload.classList.add("hidden");
                preload.addEventListener("transitionend", function preloadfn() {
                    preload.removeEventListener("transitionend", preloadfn);
                    preload.style.display= "none";
                });
            },3000);
        }
    }
}