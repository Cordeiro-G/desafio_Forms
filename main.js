function mudarFormulario(){
    document.body.innerHTML = ` 

    <header>
    <section class="index2"><h1>AVALIE A SUA MENTORIA</h1>
        <p>Chegou a hora de avaliar o seu mentor. Bora lá?</p></section>
        <button><img src="./assets/form.svg" title="Retornar ao Main" onclick="goToIndex()" alt="button switch"></button>
        <div class="img"></div>
        <div class="box">INFORMAÇÕES PESSOAIS</div>
    
</header>
<div class="app index2"> 
   
    <form id="form">
        
        <fieldset>
            <div class="fieldset-wrapper">
              <div class="container">
                <div class="input-completeName">
                    <label for="nameInfo"> Nome </label>
                    <input title="name" required minlength="1" maxlength="100" pattern="\d" placeholder="informe seu nome" type="text" id="infoName"/>
                </div>
                <div class="input-completeName ">
                    <label for="infoLastName"> Sobrenome</label>
                    <input title="lasName" required placeholder=" informe o seu sobrenome" type="text" id="infoLastName"/>
                </div>
              </div>
             
        </fieldset>
            <fieldset>
                <legend>INFORMAÇÕES DO MENTOR</legend>
                <div class="input-wrapper">
                    <label for="Selecione quem foi o seu mentor"></label>
                    <select name="mentorSelection" id="mentorSelection">
                        <option value="Christian"></option>
                        <option value="Gabriel"></option>
                        <option value="Diego"></option>
                        <option value="Filipe"></option>
                    </select>
                </div>
                <div class="input-wrapper">
                    <label for="feedbackMentor"> Feedback sobre o seu mentor</label>
                    <textarea name="feedback" id="feedbackMentor" cols="30" rows="10"></textarea> 
            </fieldset>
            
           
      
        <fieldset>
            <div class="fieldset-wrapper">
                <legend>AGENDANDO A PROXIMA MENTORIA</legend>
                <div class="col-3">
                    <div class="input-wrapper"><label for="event-date">Data <span>(dd/mm/aa)</span></label><input type="date" required></div>
                    <div class="input-wrapper"><label for="event-begin">Das</label><input type="time" required></div>
                    <div class="input-wrapper"><label for="event-end">Até</label><input type="time" required></div>
        </fieldset>
        
    </form>

  
    <footer id="footer-index2">
        <input class="button" form="form" type="submit" value="SALVAR">
    </footer>
</div>
<script src="./main.js"></script>
`
}
function goToIndex(){
    document.body.innerHTML = `
    <header>
        <section><h1>MENTORIA</h1>
            <p>Preencha o formulário abaixo para agendar a sua mentoria</p></section>
       <button><img src="./assets/star.svg" title="avalie o seu mentor" onclick="mudarFormulario()" alt="button switch"></button>
    </header>
    <div class="app"> 
       
        <form id="form">
            
            <fieldset>
                <div class="fieldset-wrapper">
                    <legend>INFORMAÇÕES PESSOAIS</legend>
                  <div class="container">
                    <div class="input-completeName">
                        <label for="nameInfo"> Nome </label>
                        <input title="name" required minlength="1" maxlength="100" pattern="\d" placeholder="informe seu nome" type="text" id="infoName"/>
                    </div>
                    <div class="input-completeName ">
                        <label for="infoLastName"> Sobrenome</label>
                        <input title="lasName" required placeholder=" informe o seu sobrenome" type="text" id="infoLastName"/>
                    </div>
                  </div>
                 
                    <div class="input-wrapper">
                        <label for="infoEmail"> Email <span>(digite um email válido)</span></label>
                        <input  type="email" required id="infoEmail"/>
                    </div>
                    <div class="input-wrapper">
                        <label for="infoPassword"> Senha</label>
                        <input title="infoPassword" required min="6" max="70" placeholder="senha" type="password" id="infoPassword"/>
                    </div>
                </div>
            </fieldset>
                <fieldset>
                    <legend>NOME DO MENTOR</legend>
                    <div class="input-wrapper">
                        <label for=""> Nome do seu mentor <span>(apenas o primeiro nome)</span></label>
                        <input title="mentorName" required placeholder="nome do mentor" type="text" id="mentorName"/>
                    </div>
                </fieldset>
                
               
          
            <fieldset>
                <div class="fieldset-wrapper">
                    <legend>SEUS HORARIOS DISPONÍVEIS</legend>
                    <div class="col-3">
                        <div class="input-wrapper"><label for="event-date">Data <span>(dd/mm/aa)</span></label><input type="date" required></div>
                        <div class="input-wrapper"><label for="event-begin">Das</label><input type="time" required></div>
                        <div class="input-wrapper"><label for="event-end">Até</label><input type="time" required></div>
                    </div>  <div class="col-3">
                        <div class="input-wrapper"><label for="event-date">Data <span>(dd/mm/aa)</span></label><input type="date" required></div>
                        <div class="input-wrapper"><label for="event-begin">Das</label><input type="time" required></div>
                        <div class="input-wrapper"><label for="event-end">Até</label><input type="time" required></div>
                    </div>
            </fieldset>
            
        </form>

      
        <footer>
            <input class="button" form="form" type="submit" value="SALVAR">
        </footer>
    </div>
    <script src="./main.js"></script>

    `
}