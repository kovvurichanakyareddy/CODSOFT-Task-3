let srr="";
        let powsqr=0;
        getchar=(ch)=>{document.getElementById('inp').value+=ch;srr=document.getElementById('inp').value}
        equals=()=>{
            if(powsqr==1)
            {
                document.getElementById('inp').value=srr;
                powsqr=0;
            }
            document.getElementById('inp').value=eval(document.getElementById('inp').value);

        }
        leftpar=()=>{document.getElementById('inp').value+='(';srr=document.getElementById('inp').value}
        rightpar=()=>{document.getElementById('inp').value+=')';srr=document.getElementById('inp').value}
        backspace=()=>{document.getElementById('inp').value = document.getElementById('inp').value.substring(0, document.getElementById('inp').value.length - 1);srr=document.getElementById('inp').value;}
        allclr=()=>{srr = "";document.getElementById('inp').value=srr;}
        nsquare=()=>{
            let givv=document.getElementById('inp').value;
            srr = Math.pow(eval(givv),2);
            document.getElementById('inp').value="("+givv+")"+"^2";
            powsqr=1;
        }
        nqube=()=>{
            let givv=document.getElementById('inp').value;
            srr = Math.pow(eval(givv),3);
            document.getElementById('inp').value="("+givv+")"+"^3";
            powsqr=1;
        }
        sqroot=()=>{
            let givv=document.getElementById('inp').value;
            srr = Math.sqrt(eval(givv));
            document.getElementById('inp').value="√("+givv+")";
            powsqr=1;
        }