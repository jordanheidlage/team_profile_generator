function buildTeamHtml(team) {

  function managerHtml(manager) {
    return `<div class="col-sm-4 my-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Manger</h5>
          <ul class="list-group">
            <li class="list-group-item">name: ${manager.getName()}</li>
            <li class="list-group-item">id:  ${manager.getId()}</li>
            <li class="list-group-item">email: ${manager.getEmail()}</li>
            <li class="list-group-item">OfficeNumber: ${manager.getofficeNumber()}</li>
             
          </ul>
        </div>
      </div>
    </div>`
  }
  function engineerHtml(engineer) {
    return `<div class="col-sm-4 my-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Engineer</h5>
          <ul class="list-group">
            <li class="list-group-item">name: ${engineer.getName()}</li>
            <li class="list-group-item">id:  ${engineer.getId()}</li>
            <li class="list-group-item">email: ${engineer.getEmail()}</li>
            <li class="list-group-item">github: ${engineer.getGithub()}</li>
             
          </ul>
        </div>
      </div>
    </div>`
  }
  function internHtml(intern) {
    return `<div class="col-sm-4 my-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <ul class="list-group">
            <li class="list-group-item">name: ${intern.getName()}</li>
            <li class="list-group-item">id:  ${intern.getId()}</li>
            <li class="list-group-item">email: ${intern.getEmail()}</li>
            <li class="list-group-item">github: ${intern.getSchool()}</li>
             
          </ul>
        </div>
      </div>
    </div>`
  }
  const html = [];

  html.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => managerHtml(manager)))

  html.push(team.filter((employee) => employee.getRole() === 'Engineer').map((engineer) => engineerHtml(engineer)))

  html.push(team.filter((employee) => employee.getRole() === 'Intern').map((intern) => internHtml(intern)))

return html.join('')
 
}


module.exports = (team) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
        <title>Document</title>
    </head>
    <body>
        <div class="h-100 text-center text-white p-3 bg-danger  ">
            <h2>Team</h2>
             
          </div>
        
          <div class="container">
            <div class="row d-flex justify-content-center">
            
                     ${buildTeamHtml(team)}
  
            </div>
            </div>
      </body>
      </html>
            `
}

