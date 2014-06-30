        var count = 0;
        
        $(document).ready(function(){
          if(location.href == "http://www.brandonfoster.net/" || location.href =="http://brandonfoster.net/" || location.href =="http://localhost:4000/" || location.href ==""){
            $(".content-title").addClass("animated bounceInLeft");
            $(".content-subtitle").addClass("animated fadeIn");
          }
          
          $(".circle").addClass("animated bounceInDown");
          $(".circle2").addClass("animated bounceInDown");
          $(".circle1").addClass("animated bounceInDown");

          
          var counting = function()
          {
              if(count == 3){
              $("#scroll").fadeIn();
            }
          }

          $("#hinging a").click(function(){
            $("#hinging").addClass("animated hinge");
            count++;
            counting();
          });

          $("#hinging a").hover(function(){
            $("#hinging").addClass("animated shake");
          });

          $("#hinging1 a").click(function(){
            $("#hinging1").addClass("animated hinge");
            count++;
            counting();
          });

          $("#hinging1 a").hover(function(){
            $("#hinging1").addClass("animated shake");
          });


          $("#hinging2 a").click(function(){
            $("#hinging2").addClass("animated hinge");
            count++;
            counting();
          });

          $("#hinging2 a").hover(function(){
            $("#hinging2").addClass("animated shake");
          });

          $("a.transition").click(function(event){
            event.preventDefault();
            linkLocation = this.href;
            $(".main-title").fadeOut(500, redirectPage);
            $("#grid").fadeOut(500, redirectPage);
          });

          if(count == 3){
            $("#scroll").fadeIn();
          }

          $("#content").addClass("animated fadeIn");
          $("#project").addClass("animated fadeIn");
          $("#about").addClass("animated fadeIn");
          $(".main-title2").addClass("animated fadeIn");

          function redirectPage(){
            window.location = linkLocation;
          }
           
});