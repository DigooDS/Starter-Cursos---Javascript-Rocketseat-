/*Axios é uma ferramenta que facilita o processo de requisição
(dentro de sua capsula, é utilizado o próprio Ajax)*/

axios.get('https://api.github.com/users/DigooDS')
  .then(function(response){
    console.log(response)
  })
  .catch(function(error){
    console.warn(error)
  })

