class Calculator{
    screen='';
    div;
    constructor(div){
        this.div= document.querySelector(div)
        this.div.innerHTML =`<div class="w-50">
        <input type="text" class="form-control input-lg" readonly id="screen">
        <table style="width:100%;" id="tb1">
         <tr>
           <td><button class="btn btn-light">1</button></td>
           <td><button class="btn btn-light">2</button></td>
           <td><button class="btn btn-light">3</button></td>
           <td><button class="btn btn-light">4</button></td>
           <td><button class="btn btn-light">5</button></td>
           <td><button class="btn btn-light">+</button></td>
         </tr>
         <tr>
           <td><button class="btn btn-light">6</button></td>
           <td><button class="btn btn-light">7</button></td>
           <td><button class="btn btn-light">8</button></td>
           <td><button class="btn btn-light">9</button></td>
           <td><button class="btn btn-light">0</button></td>
           <td><button class="btn btn-light">-</button></td>
         </tr>
         <tr>
           <td colspan="6"><button class="btn btn-dark">=</button></td>
         </tr>
        </table>
      </div>`;
      this.screen= document.querySelector('#screen')
      const btnn = document.querySelectorAll('table button')
    
    btnn.forEach((bt)=>{
        bt.addEventListener('click',()=>{
            if (bt.innerText == '=') {
                this.showAnswer()
            } else {
                this.showNumbers(bt.innerText)
            }
        })
    });
}
    
    showNumbers(numbers){
        this.screen.value +=numbers;
    };
    showAnswer(){
        try {
          this.screen.value = eval(this.screen.value)
        } catch (error) {
          alert('Invalid something')
          this.screen.value = ''
        }  
    }
    init(){

    }    
}
