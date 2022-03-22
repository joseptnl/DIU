/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Andoni Ibarguren",
                Photo: "fake-user.jpeg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere salir un poco de su zona y conocer nuevas rutas y parajes así como a gente interesante con la que compartir sus aficiones.",
                touch1: "Calendario",
                feel1: "5",
                con1: "Pedir una semana de vacaciones ahora ya que es invierno y no hay tanta actividad en la empresa.",
                ima1: "cartoon-going.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar en internet para encontrar algún sitio que cumpla con sus espectativas.",
                touch2: "Móvil (Google)",
                feel2: "4",
                con2: "Encuentra un montón de sitios interesantes en España donde poder hacer actividades en el monte.",
                ima2: "cartoon-phone.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se decanta por la opción de Granada ya que nunca ha estado en Andalucía y parece un sitio ideal.",
                touch3: "Móvil (Reviews en foros y otras páginas)",
                feel3: "3",
                con3: "Está muy lejos de casa y el transporte será caro, sin embargo promete ser un viaje interesante y se acaba decantando por este destino.",
                ima3: "cartoon-thinking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Empieza a buscar hostels ya que ha estado anteriormente en varios y le parecen ideales para conocer a gente joven.",
                touch4: "Móvil (Anuncios de instagram)",
                feel4: "2",
                con4: "Al visitar la web encuentra varios hostels pero muy pocos son de su agrado.",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Tras una árdua búsqueda compara los dos hostels que más le convencen, Carlota Braum y Eco Hostel, a través de sus páginas webs y las reviews de los clientes.",
                touch5: "Móvil (Google)",
                feel5: "4",
                con5: "Los dos tienen muy buenas valoraciones, un poco más Eco hostel, y la galería de imágenes de los dos están muy bien trabajadas, pero sin embargo se acaba decantando por Carlota debido a que ofrece mejores precios y muestra la opinión de sus clientes.",
                ima5: "cartoon-deciding.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente reserva el hostel de Carlota Braum.",
                touch6: "Móvil (Google)",
                feel6: "4",
                con6: "No le convence tanto el hecho de que no tenga cocina ya que si se pudiese hacer las comidas le saldría más barato pero en rasgos generales cree que le sale más rentable.",
                ima6: "cartoon-happy.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Paula",
                Photo: "paula.jpeg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con sus compañeras de piso, para el primer finde de abril",
                touch1: "Calendario",
                feel1: "5",
                con1: "Cuadrar lugar y fecha con el resto de compañeras, sin pasarse de presupuesto",
                ima1: "cartoon-teamthinking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Mirar Hostel en diferentes ciudades y comparar precios",
                touch2: "Ordenador",
                feel2: "4",
                con2: "Quiere que todo salga bien, valora a fondo cada detalle, dedicandole mucho tiempo",
                ima2: "cartoon-PCSurprised.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra un buen Hostel en granada (CarlotaBraum), se lo enseña a sus amigas ",
                touch3: "móvil (whatsapp)",
                feel3: "4",
                con3: "Quiere estar segura de que ha elegido la mejor opción",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Ve que solo tiene habitaciones compartidas",
                touch4: "movil (Chrome)",
                feel4: "2",
                con4: "Quieren estar solas en una habitación privada asi que toca seguir buscando",
                ima4: "cartoon-deciding.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Compara con otros hostel para ver si es una buena opción, tanto a nivel económico como sus servicios ofrecidos",
                touch5: "ordenado",
                feel5: "3",
                con5: "Ve que hay otras opciones que les ofrecen a un precio similar, habitaciones privadas y con mejores zonas comunes",
                ima5: "cartoon-phoningangry.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente deciden irse a Barcelona a 'Sant Jordi Hostel'",
                touch6: "móvil",
                feel6: "4",
                con6: "Les ha costado algo más caro de lo que esperaban, pero tendrán baño y habitación privada, además de piscina y terraza",
                ima6: "cartoon-going.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



