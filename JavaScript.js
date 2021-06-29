<script>
        $(document).ready(function(){
            const total_cases = $(".total-cases");
            const total_deaths = $(".total-deaths");
            const recovered =  $(".recovered");
            const active_cases =  $(".active-cases");
            var length;

            $.get("https://api.covid19india.org/data.json",
                function(response){
                    
                var response = response;
                length = response.statewise.length;
                total_cases.html(response.statewise[0].confirmed);
                total_deaths.html(response.statewise[0].deaths);
                recovered.html(response.statewise[0].recovered);
                active_cases.html(response.statewise[0].active);

                for( var i = 1; i <= length; i++ ){
                    $("table").append("<tr><td>"+i+"</td><td>"+response.
                        statewise[i].lastupdatedtime+"</td><td>"+response.
                        statewise[i].state+"</td><td>"+response.statewise[i]
                        .confirmed+"</td><td>"+response.statewise[i].active+
                        "</td><td>"+response.statewise[i].recovered+"</td><td>"
                        +response.statewise[i].deaths+"</td><tr>"
                    );
                }

                });
        });

    </script>
