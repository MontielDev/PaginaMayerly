$(document).ready(function(){
    let despliegue_a = $(".desplazar");

    despliegue_a.click(function(e){
        e.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 1500
        );
    })
})