

function converter() {
    var currency_from = document.getElementById("currency_from")
    var currency_to = document.getElementById("currency_to")

    input = document.getElementById("amount-one")
    output = document.getElementById("amount-two")
    output2 = document.getElementById("demo")
    var input = parseInt(input.value,10)
    

    if(currency_from.value == "BDT"){
        if(currency_to.value == "USD"){
            output.value=((input/84.6674).toFixed(3))
        }
        else if(currency_to.value == "BDT"){
            output.value=((input/1).toFixed(3))
        }
        else if(currency_to.value == "GBP"){
            output.value=((input/118.278).toFixed(3))
        }
        else if(currency_to.value == "INR"){
            output.value=((input/1.1594).toFixed(3))
        }
        else if(currency_to.value == "JPY"){
            output.value=((input/1.2528).toFixed(3))
        }
    }

    else if(currency_from.value == "USD"){
        if(currency_to.value == "USD"){
            output.value=((input/1).toFixed(3))
        }
        else if(currency_to.value == "BDT"){
            output.value=((input*84.6674).toFixed(3))
        }
        else if(currency_to.value == "GBP"){
            output.value=((input/1.396).toFixed(3))
        }
        else if(currency_to.value == "INR"){
            output.value=((input*73.0720).toFixed(3))
        }
        else if(currency_to.value == "JPY"){
            output.value=((input*106.2125).toFixed(3))
        }
    }

    else if(currency_from.value == "GBP"){
        if(currency_to.value == "USD"){
            output.value=((input*1.396).toFixed(3))
        }
        else if(currency_to.value == "BDT"){
            output.value=((input*118.316).toFixed(3))
        }
        else if(currency_to.value == "GBP"){
            output.value=((input/1).toFixed(3))
        }
        else if(currency_to.value == "INR"){
            output.value=((input*101.994).toFixed(3))
        }
        else if(currency_to.value == "JPY"){
            output.value=((input*148.318).toFixed(3))
        }
    }

    else if(currency_from.value == "INR"){
        if(currency_to.value == "USD"){
            output.value=((input*72.9856).toFixed(3))
        }
        else if(currency_to.value == "BDT"){
            output.value=((input/1.16083).toFixed(3))
        }
        else if(currency_to.value == "GBP"){
            output.value=((input*101.944).toFixed(3))
        }
        else if(currency_to.value == "INR"){
            output.value=((input/1).toFixed(3))
        }
        else if(currency_to.value == "JPY"){
            output.value=((input*1.45502).toFixed(3))
        }
    }

    else if(currency_from.value == "JPY"){
        if(currency_to.value == "USD"){
            output.value=((input*106.179).toFixed(3))
        }
        else if(currency_to.value == "BDT"){
            output.value=((input/1.25299).toFixed(3))
        }
        else if(currency_to.value == "GBP"){
            output.value=((input*148.309).toFixed(3))
        }
        else if(currency_to.value == "INR"){
            output.value=((input/1.45502).toFixed(3))
        }
        else if(currency_to.value == "JPY"){
            output.value=((input/1).toFixed(3))
        }
    }

    
  }