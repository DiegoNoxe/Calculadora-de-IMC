function resultado()    
        {
        let idade, altura, peso, resultado;
        idade      = document.getElementById("idade").value;
        altura     = parseFloat(document.getElementById("altura").value);
        peso       = parseFloat(document.getElementById("peso").value);
        imc = (peso/(altura*altura)).toFixed(2);
        
        resultado = "";

        if(idade >= 18){
            if(imc < 18.5){
                resultado = `Seu peso é ${peso}, mas sua idade é ${idade}, você está abaixo do peso ideal! Seu imc: ${imc}`;
            }

            
            else if(imc > 18.8 && imc < 24.9){
                resultado = `Seu peso é ${peso} e sua idade é ${idade}, você está no peso normal! Seu imc: ${imc}`;
            }

            
            else if(imc > 25 && imc < 29.9){
                resultado = `Seu peso é ${peso} e a sua idade é ${idade}, você está com Sobrepeso Seu imc: ${imc}`;
            }

            
            else if(imc > 30 && imc < 34.9){
                resultado = `Seu peso é ${peso}, mas sua idade é ${idade}, você está com Obesidade Grau 1! Seu imc: ${imc}`;
            }

            
            else if(imc > 35 && imc < 39.9){
                resultado = `Seu peso é ${peso}, mas sua idade é ${idade}, você está com Obesidade Grau 2! Seu imc: ${imc}`;
            }

            else if(imc > 40){
                resultado = `Seu peso é ${peso}, mas sua idade é ${idade}, você está com Obesidade Grau III (Obesidade Mórbida)! Seu imc: ${imc}`;
            }
        }
        else{
            resultado = "A calculadora ainda não suporta calculos para menores de idade! Fique de olho para atualizações futuras!"
        }
        
        document.getElementById("resultado").innerText = resultado;  
}
 
