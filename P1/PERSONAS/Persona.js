/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Andoni Ibarguren",
				Photo: "fake-user.jpeg",
				Quote: "Vive la vida con energía, aventúrate en nuevos retos y supérate a ti mismo",
				Age: 27,
				Occupation: "Guía de senderismo y monitor de escalada y rápel.",
				Family: "Tiene cinco hermanos y está soltero",
				Location: "Hernani, Guipúscoa, País Vasco",
				Character: "Le gustan las aventuras y disfrutar de la naturaleza",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Conocer a gente nueva", "Viajar yéndose a la aventura", "Coronar la cumbre de algún ochomil"],
				Frustrations: [
					"Le gustaría aprender a tocar la guitarra pero nunca se acaba poniendo a practicar", 
					"Querría montar su propia empresa de algo relacionado con el monte pero requiere una gran inversión",
					"Querría juntarse más con sus hermanos debido a que algunos viven muy lejos"
				],
				Bio: "Nació en Hernani y desde pequeño siempre le gustó el monte. Estudió el grado de forestal en San Sebastián y luego, alienado de sus estudios y con ganas de salir de su zona de confort, se fue a vivir a Francia varios años donde trabajó de lo que surgió. El año pasado volvió y ahora trabaja para una empresa local de excursiones y actividades de montaña la cual le permite explotar sus aficiones.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Estaba un poco cansado de la monotonía y ha organizado una escapada a Granada para desconectar y disfrutar de lo que le ofrece la sierra.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 0 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                Id: 1,
				Name: "Paula",
				Photo: "paula.jpeg",
				Quote: "Las prisas no son buenas, lo importante es el resultado",
				Age: 24,
				Occupation: "Estudiante Grado en Óptica y Optometría",
				Family: "Soltera, con dos hermano",
				Location: "Fuente del Maestre (Extemadura)",
				Character: "Le gusta pasar tiempo con sus allegados, sin descuidar sus obligaciones",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Acabar la carrera con un buen expediente","Viajar más con sus amigos","Encontrar un trabajo estable", "Enamorarse y formar una familia"],
				Frustrations: ["Le gustaría poder pasar más tiempo con su familia, pero su perfeccionismo en la universidad se lo impide", "A veces no valoran su trabajo como le gustaría", "Bajo presupusto, para poder viajar"],
				Bio: "Es de Fuente del Maestre, un pueblo de extremadura, pero estudia en Badajoz, Óptica y Optometría, en la universidad le va bastante bién, y ha hecho muchos amigos con los que comparte piso y les gusta viajar juntos. Le gustaría ir a su casa más a menudo a ver a su familia, pero le mandan demasiadas tareas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Es una persona organizada, y para el viaje que va a hacer con sus compañeras de piso, quiere que todo salga bien, por lo que pretende valorar todas las opciones disponibles, sin pasarse de presupuesto.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])